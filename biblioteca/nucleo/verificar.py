"""
Verifica una pagina de concepto sin navegador:
  python3 nucleo/verificar.py conceptos/<id>.html
Chequea sintaxis del script inline con node, placeholders, emojis, voseo y que use las piezas del nucleo.
"""
import re, sys, subprocess, pathlib, tempfile

p = pathlib.Path(sys.argv[1]); s = p.read_text(encoding="utf-8")
errores, avisos = [], []
js = "\n".join(m for m in re.findall(r"<script>(.*?)</script>", s, re.S))
with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False) as f:
    f.write(js); tmp = f.name
r = subprocess.run(["node", "--check", tmp], capture_output=True, text=True)
if r.returncode: errores.append("sintaxis JS: " + r.stderr.strip().splitlines()[-1][:200])
for pieza in ['nucleo/estilo.css', 'nucleo/nucleo.js', 'fuentes.js', 'catalogo.js', 'B.concepto(', 'B.medidor(', 'B.pasos(', 'B.citas()', 'B.lecturas(', 'id="lecturasLista"', 'id="vidareal"', 'B.vidaReal(', 'B.tarjetas(', 'B.ordenar(', 'class="rail"', 'id="medidor"', 'katex']:
    if pieza not in s: errores.append("falta " + pieza)
if re.search(r"[\U0001F300-\U0001FAFF☀-➿\U0001F000-\U0001F2FF]", s): errores.append("hay emojis")
if "{{" in s: errores.append("placeholder {{ sin reemplazar")
texto = re.sub(r"<script>.*?</script>", "", s, flags=re.S)
texto = re.sub(r"<style>.*?</style>", "", texto, flags=re.S)
texto = re.sub(r"<[^>]+>", " ", texto)
ok = set("qué está más así sí después revés ahí esté además inglés irá demás estás aquí allí allá cuál quién cómo dónde también según tú él mí dé jamás atrás través país raíz aún".split())
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
fu = pathlib.Path(p.parent.parent / "fuentes.js").read_text(encoding="utf-8")
for c in set(citas):
    if not re.search(r"^\s*" + re.escape(c) + r":\s*\{", fu, re.M): errores.append("cita a fuente inexistente: " + c)
print("pasos:", s.count('class="paso card"'), "| retos:", len(retos), "| citas:", len(citas), "| tarjetas: ver navegador")
for e in errores: print("ERROR:", e)
for a in avisos: print("aviso:", a)
print("OK" if not errores else "CON ERRORES")
sys.exit(1 if errores else 0)
