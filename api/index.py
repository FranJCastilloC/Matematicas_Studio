"""
API del progreso de la biblioteca en Vercel.

Una sola funcion atiende todas las rutas /api/* (vercel.json las reescribe a /api/index?ruta=...):
  GET  /api/salud              {"ok": true, "pdf": false}
  GET  /api/progreso           el progreso guardado
  POST /api/progreso           mezcla el progreso del navegador con el guardado y devuelve el resultado
  GET  /api/historial          lista de fotos con un resumen de cada una
  GET  /api/historial/<id>     el progreso completo de una foto (para descargar)

Guarda en Upstash Redis por su API REST, sin librerias externas. Lee la URL y el token de
UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN, o de KV_REST_API_URL / KV_REST_API_TOKEN
(los nombres que pone la integracion de Vercel).

La mezcla (mezclar, resumen) tambien la usa el servidor de Docker: despliegue/app/servidor.py.
"""

import json
import os
import urllib.request
from datetime import datetime, timedelta, timezone
from http.server import BaseHTTPRequestHandler
from urllib.parse import parse_qs, urlparse

VENTANA_FOTO_MIN = int(os.environ.get("VENTANA_FOTO_MIN", "10"))
MAX_CUERPO = 5 * 1024 * 1024
PREFIJO = os.environ.get("PREFIJO_REDIS", "biblioteca")
K_ESTADO = PREFIJO + ":estado"          # JSON {"datos": ..., "actualizado": iso}
K_FOTOS = PREFIJO + ":fotos"            # lista de metadatos, la mas nueva primero
K_FOTOS_DATOS = PREFIJO + ":fotos:datos"  # hash id -> JSON del progreso de esa foto
K_FOTOS_ID = PREFIJO + ":fotos:id"      # contador de ids


def ahora():
    return datetime.now(timezone.utc).replace(microsecond=0)


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
    conceptos = retos_ok = pasos = notas = 0
    for c in datos.values():
        if not isinstance(c, dict):
            continue
        n = sum(1 for v in (c.get("notas") or {}).values() if v)
        if c.get("pasos") or c.get("retos") or n:
            conceptos += 1
        notas += n
        pasos += len(c.get("pasos") or [])
        retos_ok += sum(1 for r in (c.get("retos") or {}).values() if isinstance(r, dict) and r.get("ok"))
    return {"conceptos": conceptos, "retosOk": retos_ok, "pasos": pasos, "notas": notas}


# ---------------- redis por REST ----------------


class SinBase(Exception):
    pass


def redis(*cmd):
    url = os.environ.get("UPSTASH_REDIS_REST_URL") or os.environ.get("KV_REST_API_URL")
    token = os.environ.get("UPSTASH_REDIS_REST_TOKEN") or os.environ.get("KV_REST_API_TOKEN")
    if not url or not token:
        raise SinBase("falta configurar Upstash Redis")
    req = urllib.request.Request(
        url.rstrip("/"),
        data=json.dumps([str(c) for c in cmd]).encode("utf-8"),
        headers={"Authorization": "Bearer " + token, "Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=10) as r:
        res = json.loads(r.read().decode("utf-8"))
    if "error" in res:
        raise RuntimeError(res["error"])
    return res.get("result")


def leer_estado():
    texto = redis("GET", K_ESTADO)
    if not texto:
        return {}, None
    e = json.loads(texto)
    return e.get("datos") or {}, e.get("actualizado")


def guardar(datos):
    t = ahora().isoformat()
    texto = json.dumps(datos, ensure_ascii=False, sort_keys=True)
    redis("SET", K_ESTADO, json.dumps({"datos": datos, "actualizado": t}, ensure_ascii=False))
    ultima = redis("LINDEX", K_FOTOS, 0)
    meta = json.loads(ultima) if ultima else None
    if meta and datetime.fromisoformat(meta["creada"]) > ahora() - timedelta(minutes=VENTANA_FOTO_MIN):
        meta["actualizada"] = t
        meta["resumen"] = resumen(datos)
        redis("LSET", K_FOTOS, 0, json.dumps(meta))
    else:
        meta = {"id": redis("INCR", K_FOTOS_ID), "creada": t, "actualizada": t, "resumen": resumen(datos)}
        redis("LPUSH", K_FOTOS, json.dumps(meta))
    redis("HSET", K_FOTOS_DATOS, meta["id"], texto)
    return t


# ---------------- http ----------------


class handler(BaseHTTPRequestHandler):
    def responder(self, codigo, cuerpo):
        datos = json.dumps(cuerpo, ensure_ascii=False).encode("utf-8")
        self.send_response(codigo)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(datos)))
        self.end_headers()
        self.wfile.write(datos)

    def ruta(self):
        u = urlparse(self.path)
        q = parse_qs(u.query).get("ruta")
        r = q[0] if q else u.path.split("/api/", 1)[-1]
        return r.strip("/")

    def atender(self, fn):
        try:
            fn()
        except SinBase as e:
            self.responder(503, {"error": str(e)})
        except Exception as e:  # noqa: BLE001 - se informa al navegador, que sigue en modo local
            self.responder(500, {"error": "fallo del servidor: %s" % e})

    def do_GET(self):
        ruta = self.ruta()
        if ruta == "salud":
            # sin base configurada el navegador sigue en modo local en vez de fallar en cada guardado
            try:
                redis("PING")
            except Exception as e:  # noqa: BLE001
                return self.responder(200, {"ok": False, "pdf": False, "error": str(e)})
            return self.responder(200, {"ok": True, "pdf": False})

        def get():
            if ruta == "progreso":
                datos, actualizado = leer_estado()
                return self.responder(200, {"datos": datos, "actualizado": actualizado})
            if ruta == "historial":
                fotos = [json.loads(f) for f in (redis("LRANGE", K_FOTOS, 0, -1) or [])]
                return self.responder(200, {"fotos": fotos})
            if ruta.startswith("historial/"):
                fid = ruta.split("/", 1)[1]
                if not fid.isdigit():
                    return self.responder(400, {"error": "id invalido"})
                texto = redis("HGET", K_FOTOS_DATOS, fid)
                if not texto:
                    return self.responder(404, {"error": "no existe"})
                meta = next((json.loads(f) for f in redis("LRANGE", K_FOTOS, 0, -1) or [] if json.loads(f)["id"] == int(fid)), {})
                return self.responder(200, {"id": int(fid), "creada": meta.get("creada"), "actualizada": meta.get("actualizada"), "datos": json.loads(texto)})
            self.responder(404, {"error": "no existe"})

        self.atender(get)

    def do_POST(self):
        if self.ruta() != "progreso":
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

        def post():
            guardado, actualizado = leer_estado()
            mezcla = mezclar(guardado, entrante)
            if mezcla != guardado:
                actualizado = guardar(mezcla)
            self.responder(200, {"datos": mezcla, "actualizado": actualizado})

        self.atender(post)
