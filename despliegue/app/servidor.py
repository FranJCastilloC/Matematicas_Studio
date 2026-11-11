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


# La mezcla del progreso (mezclar, resumen) es la misma que usa la API de Vercel: api/index.py.
from index import mezclar, resumen  # noqa: E402


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
            return self.responder(200, {"ok": True, "pdf": True})
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
