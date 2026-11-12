"""
Verifica una pagina de concepto sin navegador:
  python3 nucleo/verificar.py conceptos/<id>.html
Chequea sintaxis del script inline con node, placeholders, emojis, voseo, que use las piezas del nucleo,
que el concepto este en el catalogo, y que cada cita apunte a un PDF que existe y a una pagina que el PDF tiene.
"""
import re, sys, subprocess, pathlib, tempfile, json, os

p = pathlib.Path(sys.argv[1]); s = p.read_text(encoding="utf-8")
errores, avisos = [], []
js = "\n".join(m for m in re.findall(r"<script>(.*?)</script>", s, re.S))
with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False) as f:
    f.write(js); tmp = f.name
r = subprocess.run(["node", "--check", tmp], capture_output=True, text=True)
os.unlink(tmp)
if r.returncode: errores.append("sintaxis JS: " + r.stderr.strip().splitlines()[-1][:200])
for pieza in ['nucleo/estilo.css', 'nucleo/nucleo.js', 'fuentes.js', 'catalogo.js', 'B.concepto(', 'B.medidor(', 'B.pasos(', 'B.citas()', 'B.lecturas(', 'id="lecturasLista"', 'id="vidareal"', 'B.vidaReal(', 'B.tarjetas(', 'B.ordenar(', 'B.conexiones(', 'class="rail"', 'id="medidor"', 'katex']:
    if pieza not in s: errores.append("falta " + pieza)
if re.search(r"[\U0001F300-\U0001FAFF☀-➿\U0001F000-\U0001F2FF]", s): errores.append("hay emojis")
if "{{" in s: errores.append("placeholder {{ sin reemplazar")
texto = re.sub(r"<script>.*?</script>", "", s, flags=re.S)
texto = re.sub(r"<style>.*?</style>", "", texto, flags=re.S)
texto = re.sub(r"<[^>]+>", " ", texto)
ok = set("qué está más así sí después revés ahí esté además inglés irá demás estás aquí allí allá cuál quién cómo dónde también según tú él mí dé jamás atrás detrás sé través país raíz aún".split())
raros = sorted({w for w in re.findall(r"(?<![\wáéíóúñ])[A-Za-zñÑ]+(?:á|é|í)s?(?![\wáéíóúñ])", texto) if w.lower() not in ok})
if raros: avisos.append("posible voseo: " + ", ".join(raros[:15]))
rio = re.findall(r"\b(acá|vos|dar vuelta|darlas vuelta|fijate|pensalo|agarr[aá]\w*)\b", texto, re.I)
if rio: errores.append("regionalismos: " + ", ".join(sorted(set(rio))))
retos = re.findall(r'data-reto="([^"]+)"', s)
m = re.search(r"retos:\s*(\[[^\]]*\]|[A-Za-z_]\w*)", js)
lista = ""
if m:
    lista = m.group(1)
    if not lista.startswith("["):
        m2 = re.search(r"var\s+" + re.escape(lista) + r"\s*=\s*\[([^\]]*)\]", js)
        lista = m2.group(1) if m2 else ""
registrados = re.findall(r'"([^"]+)"', lista)
for rid in retos:
    if rid not in registrados: errores.append("reto " + rid + " no esta registrado en B.concepto")
for rid in registrados:
    if rid not in retos: avisos.append("reto registrado sin marcador data-reto: " + rid)
citas = re.findall(r'data-fuente="([^"]+)"', s)
bib = p.resolve().parent.parent
def cargar(archivo, var):
    r = subprocess.run(["node", "-e", "global.window={};require(process.argv[1]);console.log(JSON.stringify(window." + var + "))",
                        str(bib / archivo)], capture_output=True, text=True)
    return json.loads(r.stdout) if r.returncode == 0 else None
FU = cargar("fuentes.js", "FUENTES") or {}
CAT = cargar("catalogo.js", "CATALOGO") or []
def paginas(pdf):
    try:
        out = subprocess.run(["pdfinfo", pdf], capture_output=True, text=True).stdout
        m = re.search(r"^Pages:\s+(\d+)", out, re.M)
        if m: return int(m.group(1))
        out = subprocess.run(["mdls", "-name", "kMDItemNumberOfPages", "-raw", pdf], capture_output=True, text=True).stdout
        return int(out) if out.strip().isdigit() else None
    except Exception:
        return None
npag = {}
for c in sorted(set(citas)):
    if c not in FU: errores.append("cita a fuente inexistente: " + c); continue
    arch = FU[c].get("archivo", "")
    if not os.path.exists(arch): errores.append("el PDF de la fuente " + c + " no existe: " + arch); continue
    if FU[c].get("tipo") == "documento":
        npag[c] = None
    elif FU[c].get("tipo") == "diapositivas":
        h = open(arch, encoding="utf-8", errors="ignore").read()
        npag[c] = len(re.findall(r"<section[ >]", h)) or None
    else:
        npag[c] = paginas(arch)
for m in re.finditer(r'<cite[^>]*data-fuente="([^"]+)"[^>]*>', s):
    tag, f = m.group(0), m.group(1)
    pg = re.search(r'data-pag="(\d+)[^"]*"', tag)
    if not pg:
        if FU.get(f, {}).get("tipo") != "documento": avisos.append("cita sin data-pag: " + f)
        continue
    if FU.get(f, {}).get("tipo") in ("diapositivas", "documento") and "data-ancla=" not in tag:
        errores.append("cita a %s sin data-ancla" % f)
    if npag.get(f) and int(pg.group(1)) > npag[f]:
        errores.append("cita a %s p. %s, pero el PDF tiene %d paginas" % (f, pg.group(1), npag[f]))
cid = re.search(r'B\.concepto\(\{\s*id:\s*"([^"]+)"', js)
if not cid: errores.append("no se encontro el id en B.concepto({ id: ... })")
elif not any(x.get("id") == cid.group(1) for x in CAT): errores.append("el concepto " + cid.group(1) + " no esta en catalogo.js")
print("pasos:", s.count('class="paso card"'), "| retos:", len(retos), "| citas:", len(citas), "| tarjetas: ver navegador")
for e in errores: print("ERROR:", e)
for a in avisos: print("aviso:", a)
print("OK" if not errores else "CON ERRORES")
sys.exit(1 if errores else 0)
