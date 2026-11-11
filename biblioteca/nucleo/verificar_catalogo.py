"""
Verifica el catalogo completo sin navegador:
  python3 nucleo/verificar_catalogo.py        (desde biblioteca/)
Chequea que cada ruta y materia citada exista, que los titulos de prerrequisitos y siguientes resuelvan,
que no se repitan ids, titulos ni ordenes dentro de una ruta, que las paginas listas existan y las
planeadas no, que cada unidad de una materia matematica tenga al menos un concepto, y que las fuentes
de fuentes.js apunten a PDF que existen.
"""
import json, os, pathlib, subprocess, sys, unicodedata

BIB = pathlib.Path(__file__).resolve().parent.parent


def cargar(archivo, *variables):
    codigo = "global.window={};require(process.argv[1]);console.log(JSON.stringify({%s}))" % ",".join(
        "%s:window.%s" % (v, v) for v in variables)
    r = subprocess.run(["node", "-e", codigo, str(BIB / archivo)], capture_output=True, text=True)
    if r.returncode:
        print("ERROR: no se pudo cargar", archivo, r.stderr.strip()[-300:])
        sys.exit(1)
    return json.loads(r.stdout)


def norm(s):
    return "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn").lower()


d = cargar("catalogo.js", "UNIDADES", "MATERIAS", "CATALOGO", "TANDAS")
F = cargar("fuentes.js", "FUENTES")["FUENTES"]
UNI, MAT, CAT = d["UNIDADES"] or [], d["MATERIAS"] or [], d["CATALOGO"] or []
errores, avisos = [], []

rutas = {u["id"] for u in UNI}
materias = {m["codigo"]: {u[0] for u in m.get("unidades", [])} for m in MAT}
titulos, ids, ordenes = {}, set(), set()
for c in CAT:
    cid = c.get("id", "?")
    for campo in ("id", "titulo", "area", "unidad", "orden", "estado", "archivo", "resumen", "prerequisitos", "siguientes"):
        if campo not in c:
            errores.append("%s: falta el campo %s" % (cid, campo))
    if cid in ids:
        errores.append("id repetido: " + cid)
    ids.add(cid)
    t = norm(c.get("titulo", ""))
    if t in titulos:
        errores.append("titulo repetido: " + c.get("titulo", ""))
    titulos[t] = c
    if c.get("estado") not in ("listo", "planeado"):
        errores.append("%s: estado debe ser listo o planeado" % cid)
    lugares = [(c.get("unidad"), c.get("orden"))] + [(x["unidad"], x["orden"]) for x in c.get("tambien", [])]
    for u, o in lugares:
        if u not in rutas:
            errores.append("%s: la ruta %s no existe en UNIDADES" % (cid, u))
        if (u, o) in ordenes:
            errores.append("%s: el orden %s ya esta ocupado en la ruta %s" % (cid, o, u))
        ordenes.add((u, o))
    existe = (BIB / c.get("archivo", "")).exists()
    if c.get("estado") == "listo" and not existe:
        errores.append("%s: esta listo pero no existe %s" % (cid, c.get("archivo")))
    if c.get("estado") == "planeado" and existe:
        avisos.append("%s: el archivo existe pero sigue como planeado" % cid)
    if c.get("estado") == "planeado" and "tanda" not in c:
        avisos.append("%s: planeado sin tanda" % cid)
    for a in c.get("aparece", []):
        m, u = a.get("materia"), a.get("ud")
        if m not in materias:
            errores.append("%s: la materia %s no esta en MATERIAS" % (cid, m))
        elif materias[m] and u not in materias[m]:
            errores.append("%s: la unidad %s %s no esta en MATERIAS" % (cid, m, u))
    for f in c.get("fuentes", []):
        if f not in F:
            errores.append("%s: la fuente %s no esta en fuentes.js" % (cid, f))

por_titulo = {norm(c["titulo"]): c for c in CAT if "titulo" in c}
for c in CAT:
    for campo in ("prerequisitos", "siguientes"):
        for t in c.get(campo, []):
            if norm(t) not in por_titulo:
                errores.append("%s: %s nombra '%s', que no esta en el catalogo" % (c["id"], campo, t))
    for t in c.get("prerequisitos", []):
        otro = por_titulo.get(norm(t))
        if otro and norm(c["titulo"]) not in {norm(x) for x in otro.get("siguientes", [])}:
            avisos.append("%s pide '%s', pero ese no lo lista en siguientes" % (c["id"], t))

for m in MAT:
    if not m.get("matematica"):
        continue
    for ud, nombre in m.get("unidades", []):
        if not any(a.get("materia") == m["codigo"] and a.get("ud") == ud for c in CAT for a in c.get("aparece", [])):
            errores.append("la unidad %s %s (%s) no tiene ningun concepto" % (m["codigo"], ud, nombre))

for k, f in F.items():
    if not os.path.exists(f.get("archivo", "")):
        errores.append("fuentes.js: el PDF de %s no existe: %s" % (k, f.get("archivo")))

listos = sum(1 for c in CAT if c.get("estado") == "listo")
print("rutas: %d | conceptos: %d | listos: %d | planeados: %d | fuentes: %d" % (len(UNI), len(CAT), listos, len(CAT) - listos, len(F)))
for e in errores:
    print("ERROR:", e)
for a in avisos:
    print("aviso:", a)
print("OK" if not errores else "CON ERRORES")
sys.exit(1 if errores else 0)
