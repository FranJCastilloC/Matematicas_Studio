"""
Servidor del progreso de la biblioteca.

Guarda el progreso de estudio (lo mismo que el navegador tiene en localStorage con la
clave biblioteca:v1) en SQLite, y conserva fotos con fecha para tener un historial.

Rutas (todas bajo /api, detras de Caddy, que pone la contrasena):
  GET  /api/salud              {"ok": true}
  GET  /api/progreso           el progreso guardado
  POST /api/progreso           mezcla el progreso del navegador con el guardado y devuelve el resultado
  GET  /api/historial          lista de fotos con un resumen de cada una
  GET  /api/historial/<id>     el progreso completo de una foto (para descargar)

Solo usa la biblioteca estandar de Python.
"""

import json
import os
import sqlite3
import threading
from datetime import datetime, timedelta, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

RUTA_DB = os.environ.get("RUTA_DB", "/datos/progreso.db")
PUERTO = int(os.environ.get("PUERTO", "8000"))
# como maximo una foto nueva cada este numero de minutos; dentro de la ventana se actualiza la ultima
VENTANA_FOTO_MIN = int(os.environ.get("VENTANA_FOTO_MIN", "10"))
MAX_CUERPO = 5 * 1024 * 1024

candado = threading.Lock()


def ahora():
    return datetime.now(timezone.utc).replace(microsecond=0)


def conectar():
    os.makedirs(os.path.dirname(RUTA_DB) or ".", exist_ok=True)
    con = sqlite3.connect(RUTA_DB)
    con.execute("PRAGMA journal_mode=WAL")
    con.execute(
        "CREATE TABLE IF NOT EXISTS estado (id INTEGER PRIMARY KEY CHECK (id = 1), datos TEXT NOT NULL, actualizado TEXT NOT NULL)"
    )
    con.execute(
        "CREATE TABLE IF NOT EXISTS fotos (id INTEGER PRIMARY KEY AUTOINCREMENT, creada TEXT NOT NULL, actualizada TEXT NOT NULL, datos TEXT NOT NULL)"
    )
    return con


# ---------------- mezcla ----------------
# Cada concepto es {pasos, retos, dias, ultima, vista, notas, total, totalPasos, mod}.
# La mezcla no pierde nada: une pasos y dias, un reto queda resuelto si lo esta en cualquiera
# de los dos lados, y para las notas gana el lado modificado mas recientemente.


def _num(x):
    return x if isinstance(x, (int, float)) else 0


def mezclar_concepto(a, b):
    if not isinstance(a, dict):
        return b
    if not isinstance(b, dict):
        return a
    nuevo, viejo = (a, b) if _num(a.get("mod")) >= _num(b.get("mod")) else (b, a)
    r = dict(viejo)
    r.update(nuevo)

    r["pasos"] = sorted(set(viejo.get("pasos") or []) | set(nuevo.get("pasos") or []))
    r["dias"] = sorted(set(viejo.get("dias") or []) | set(nuevo.get("dias") or []))
    for clave in ("ultima", "vista"):
        vals = [x for x in (a.get(clave), b.get(clave)) if x]
        if vals:
            r[clave] = max(vals)

    retos = {}
    ra, rb = a.get("retos") or {}, b.get("retos") or {}
    for rid in set(ra) | set(rb):
        x, y = ra.get(rid), rb.get(rid)
        if not isinstance(x, dict) or not isinstance(y, dict):
            retos[rid] = x if isinstance(x, dict) else y
            continue
        primera = x.get("primera") if x.get("primera") is not None else y.get("primera")
        retos[rid] = {
            "intentos": max(_num(x.get("intentos")), _num(y.get("intentos"))),
            "ok": bool(x.get("ok") or y.get("ok")),
            "primera": primera,
        }
    r["retos"] = retos

    notas = dict(viejo.get("notas") or {})
    for k, v in (nuevo.get("notas") or {}).items():
        if v != "" or k not in notas:
            notas[k] = v
    r["notas"] = notas
    if "mod" in a or "mod" in b:
        r["mod"] = max(_num(a.get("mod")), _num(b.get("mod")))
    return r


def mezclar(guardado, entrante):
    r = dict(guardado)
    for cid, c in entrante.items():
        r[cid] = mezclar_concepto(guardado.get(cid), c)
    return r


def resumen(datos):
    conceptos = retos_ok = pasos = 0
    for c in datos.values():
        if not isinstance(c, dict):
            continue
        if c.get("pasos") or c.get("retos"):
            conceptos += 1
        pasos += len(c.get("pasos") or [])
        retos_ok += sum(1 for r in (c.get("retos") or {}).values() if isinstance(r, dict) and r.get("ok"))
    return {"conceptos": conceptos, "retosOk": retos_ok, "pasos": pasos}


# ---------------- acceso a datos ----------------


def leer_estado(con):
    fila = con.execute("SELECT datos, actualizado FROM estado WHERE id = 1").fetchone()
    if not fila:
        return {}, None
    return json.loads(fila[0]), fila[1]


def guardar(con, datos):
    t = ahora()
    texto = json.dumps(datos, ensure_ascii=False, sort_keys=True)
    con.execute(
        "INSERT INTO estado (id, datos, actualizado) VALUES (1, ?, ?) "
        "ON CONFLICT(id) DO UPDATE SET datos = excluded.datos, actualizado = excluded.actualizado",
        (texto, t.isoformat()),
    )
    ultima = con.execute("SELECT id, creada FROM fotos ORDER BY id DESC LIMIT 1").fetchone()
    if ultima and datetime.fromisoformat(ultima[1]) > t - timedelta(minutes=VENTANA_FOTO_MIN):
        con.execute("UPDATE fotos SET datos = ?, actualizada = ? WHERE id = ?", (texto, t.isoformat(), ultima[0]))
    else:
        con.execute(
            "INSERT INTO fotos (creada, actualizada, datos) VALUES (?, ?, ?)", (t.isoformat(), t.isoformat(), texto)
        )
    con.commit()
    return t.isoformat()


# ---------------- http ----------------


class Manejador(BaseHTTPRequestHandler):
    server_version = "biblioteca"

    def log_message(self, fmt, *args):
        print("%s %s" % (self.address_string(), fmt % args), flush=True)

    def responder(self, codigo, cuerpo):
        datos = json.dumps(cuerpo, ensure_ascii=False).encode("utf-8")
        self.send_response(codigo)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(datos)))
        self.end_headers()
        self.wfile.write(datos)

    def do_GET(self):
        ruta = self.path.split("?")[0].rstrip("/")
        if ruta == "/api/salud":
            return self.responder(200, {"ok": True})
        with candado:
            con = conectar()
            try:
                if ruta == "/api/progreso":
                    datos, actualizado = leer_estado(con)
                    return self.responder(200, {"datos": datos, "actualizado": actualizado})
                if ruta == "/api/historial":
                    filas = con.execute("SELECT id, creada, actualizada, datos FROM fotos ORDER BY id DESC").fetchall()
                    return self.responder(
                        200,
                        {
                            "fotos": [
                                {"id": f[0], "creada": f[1], "actualizada": f[2], "resumen": resumen(json.loads(f[3]))}
                                for f in filas
                            ]
                        },
                    )
                if ruta.startswith("/api/historial/"):
                    try:
                        fid = int(ruta.rsplit("/", 1)[1])
                    except ValueError:
                        return self.responder(400, {"error": "id invalido"})
                    f = con.execute("SELECT creada, actualizada, datos FROM fotos WHERE id = ?", (fid,)).fetchone()
                    if not f:
                        return self.responder(404, {"error": "no existe"})
                    return self.responder(200, {"id": fid, "creada": f[0], "actualizada": f[1], "datos": json.loads(f[2])})
            finally:
                con.close()
        self.responder(404, {"error": "no existe"})

    def do_POST(self):
        ruta = self.path.split("?")[0].rstrip("/")
        if ruta != "/api/progreso":
            return self.responder(404, {"error": "no existe"})
        largo = int(self.headers.get("Content-Length") or 0)
        if largo <= 0 or largo > MAX_CUERPO:
            return self.responder(413 if largo > MAX_CUERPO else 400, {"error": "cuerpo invalido"})
        try:
            entrante = json.loads(self.rfile.read(largo).decode("utf-8")).get("datos")
        except (ValueError, AttributeError):
            return self.responder(400, {"error": "json invalido"})
        if not isinstance(entrante, dict):
            return self.responder(400, {"error": "falta datos"})
        with candado:
            con = conectar()
            try:
                guardado, actualizado = leer_estado(con)
                mezcla = mezclar(guardado, entrante)
                if mezcla != guardado:
                    actualizado = guardar(con, mezcla)
            finally:
                con.close()
        self.responder(200, {"datos": mezcla, "actualizado": actualizado})


def main():
    conectar().close()
    print("biblioteca: progreso en %s, puerto %d" % (RUTA_DB, PUERTO), flush=True)
    ThreadingHTTPServer(("0.0.0.0", PUERTO), Manejador).serve_forever()


if __name__ == "__main__":
    main()
