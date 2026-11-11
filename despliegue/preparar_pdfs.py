"""
Copia a despliegue/pdfs/ solo los PDF que la biblioteca cita (los de biblioteca/fuentes.js),
con la misma ruta que tienen dentro de la carpeta brain. En el servidor se sirven en /pdf/.

Uso: python3 despliegue/preparar_pdfs.py
"""

import re
import shutil
import sys
from pathlib import Path

AQUI = Path(__file__).resolve().parent
FUENTES = AQUI.parent / "biblioteca" / "fuentes.js"
DESTINO = AQUI / "pdfs"


def main():
    rutas = re.findall(r'archivo:\s*"([^"]+)"', FUENTES.read_text(encoding="utf-8"))
    faltan = 0
    for ruta in rutas:
        if "/brain/" not in ruta:
            print("sin /brain/ en la ruta, se omite:", ruta)
            continue
        origen = Path(ruta)
        relativa = ruta.split("/brain/", 1)[1]
        destino = DESTINO / relativa
        if not origen.exists():
            print("NO EXISTE:", ruta)
            faltan += 1
            continue
        if destino.exists() and destino.stat().st_size == origen.stat().st_size and destino.stat().st_mtime >= origen.stat().st_mtime:
            continue
        destino.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(origen, destino)
        print("copiado:", relativa)
    print("%d PDF citados, %d faltan" % (len(rutas), faltan))
    return 1 if faltan else 0


if __name__ == "__main__":
    sys.exit(main())
