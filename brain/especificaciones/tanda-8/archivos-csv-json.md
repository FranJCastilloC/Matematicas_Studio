# Especificación: Archivos, CSV y JSON (archivos-csv-json)

- Ruta: `python-base` (grupo Programación con datos), orden 12, tanda 8
- Prerrequisitos: "Diccionarios, conjuntos y hash"
- Siguientes: ninguno en el catálogo
- Aparece: SM142002, UD1 (en clase los CSV se leen directo con `pd.read_csv`; el material no explica qué hay dentro de un archivo: decirlo)
- Archivo: `biblioteca/conceptos/archivos-csv-json.html`
- Fuentes que cita: `pyworkout` (libro principal del tema), `thinpython` (solo para abrir, escribir y cerrar a mano, rutas y excepciones: Think Python NO enseña `with`, `csv` ni `json`)

## Imagen central

**La cinta de caracteres con un cursor.** Un archivo de texto se dibuja como una sola tira horizontal (que se pliega en renglones
si no cabe) de casillas, una por carácter, incluidos los invisibles: el salto de línea se dibuja como una casilla con `\n`
(color `--accent`), las comas como casillas resaltadas (color `--k`). El archivo del recorrido (datos inventados):

```
nombre,materia,nota\nAna,Python,8\nLuis,R,6\nEva,Python,10\n
```

Son 56 caracteres con 4 saltos de línea (verificado con `wc -c` y `od -c`). Sobre la cinta hay un **cursor** (un triángulo) que
marca dónde va a leer el programa. Debajo de la cinta, tres pisos que se encienden por paso:

1. **Renglones**: la cinta cortada en cada `\n`.
2. **Campos**: cada renglón cortado en cada coma, en una tabla.
3. **Estructura en memoria**: la lista de diccionarios de Python (o la lista de listas de R), con el tipo de cada valor (`str` en gris,
   `int` en `--j`).

A la derecha (o abajo en móvil) un panel **JSON** que muestra la misma estructura escrita como texto JSON, con un árbol plegable.

Controles concretos:
- Botones del cursor: "leer una línea" (`readline`), "leer todo" (`read`), "volver al inicio" (`seek(0)`).
- Selector de modo de apertura: `"r"`, `"w"`, `"a"` y un botón "abrir y escribir una línea" que muestra qué queda en la cinta.
- Casillas editables con los tres registros (nombre, materia, nota). Si Francisco escribe una coma dentro de un nombre
  (por ejemplo `Pérez, Ana`), la cinta y el corte por comas muestran el problema.
- Interruptor "mostrar invisibles" (`\n` visibles u ocultos).
- Interruptor "partir a mano con `split(',')`" frente a "leer con `csv`" (este último pone comillas cuando hace falta).

Modos por paso:
1. Solo la cinta, sin código, con los invisibles ocultos.
2. Aparece el cursor y los botones de lectura; un panel de estado "archivo abierto / cerrado".
3. Se encienden los invisibles y el piso de renglones.
4. Piso de campos y el interruptor `split` frente a `csv`.
5. Piso de estructura en memoria con los tipos.
6. Selector de modo `w` / `a`.
7. Panel JSON al lado de la estructura.

## Hipótesis inicial

"Cuando un programa guarda una tabla en un archivo y otro la vuelve a abrir, ¿qué crees que viaja por el disco: los números, la
tabla, o algo más simple? Escribe cómo te imaginas que está guardada la nota 8 de Ana." (Se le muestra de nuevo en el paso 5,
cuando descubre que viaja el carácter `"8"`.)

## Pasos

### Paso 1. Un archivo es una tira de caracteres
- Idea: un archivo de texto no tiene filas ni columnas; es una sola fila larga de caracteres. Lo que parece un renglón nuevo es un carácter más. Sin símbolos.
- Escenario: modo 1. La tabla de tres alumnos se ve "como en una hoja de cálculo"; un botón "ver cómo está en el disco" está bloqueado hasta resolver el chequeo.
- Chequeo (predicción antes de tocar, numérico): "Este archivo tiene 4 renglones que terminan con un salto de línea. Si cuentas cada letra, cada coma y cada salto como un carácter, ¿son más o menos de 50 caracteres?" Opciones: menos de 50 / entre 50 y 60 (correcta, son 56) / más de 100.
  - "Menos de 50": "Cuenta también las comas y los saltos: solo `nombre,materia,nota` ya son 19 caracteres, más su salto."
  - "Más de 100": "No hay nada oculto aparte de comas y saltos; nada de formato ni colores."
  - Al acertar se desbloquea "ver cómo está en el disco" y la tabla se desarma en la cinta.

### Paso 2. Abrir, leer y cerrar: el cursor
- Idea: abrir un archivo pone un cursor al principio; cada lectura avanza el cursor, y lo leído ya no se vuelve a leer salvo que el cursor regrese. Cerrar libera el archivo. `with` lo cierra solo al terminar el bloque.
- Escenario: modo 2. Botones "leer una línea" y "leer todo". El panel de estado muestra `abierto`, la posición del cursor (en caracteres) y lo último leído.
- Chequeo (predicción antes de tocar): "Haces `f.readline()` y después `f.read()`. ¿Qué devuelve un segundo `f.read()`?" Respuesta: **`''`** (la cadena vacía).
  - "Todo el archivo otra vez": "El cursor quedó al final: no hay nada más que leer. Para releer hay que volver al inicio o abrir de nuevo."
  - "Un error": "Leer al final no es un error; devuelve una cadena vacía, así es como se sabe que se terminó."
  - Valores reales verificados: el primer `readline()` devuelve `'nombre,materia,nota\n'`, el `read()` siguiente 36 caracteres y el segundo `read()` `''`.
- Citas: Python Workout, `with` como la forma estándar de abrir y por qué cerrar (PDF 100); Think Python, escribir con `open(..., 'w')`, `write` y `close` a mano (PDF 187).
- `details.profundizar`: "¿Qué hace `with` por dentro?" Llama a `__enter__` al entrar y a `__exit__` al salir; en un archivo, `__exit__` vacía el búfer y cierra. Cita: Python Workout, recuadro de gestores de contexto (PDF 107). Puente a "Clases y objetos": `with` funciona con cualquier objeto que tenga esos dos métodos.

### Paso 3. El salto de línea viaja con el renglón
- Idea: recorrer un archivo con `for linea in f` da un renglón por vuelta, y cada renglón incluye su `\n` al final; por eso se usa `strip()`.
- Escenario: modo 3. Invisibles encendidos; piso de renglones. Cada vuelta del `for` toma un trozo de cinta hasta el `\n` incluido.
- Chequeo (cálculo con datos en vivo): "¿Cuántos caracteres tiene la línea de Ana tal como la entrega el `for`?" Con los datos de inicio, `'Ana,Python,8\n'` tiene **13**. Si Francisco editó el registro, se calcula con lo que hay.
  - Si responde 12: "Te falta el salto de línea: el `for` lo deja pegado al final."
  - Pistas escalonadas: (1) "cuenta letras, comas y el `\n`"; (2) "`Ana` 3 + coma 1 + `Python` 6 + coma 1 + `8` 1 + `\n` 1".
- Citas: Python Workout, iterar un archivo línea por línea y el `\n` al final (PDF 100); Think Python, `readline`, `strip` y `for line in fin` (PDF 120-121).
- `details.profundizar`: "¿Y si el archivo viene de Windows?" Los renglones terminan en `\r\n`; Python traduce al leer en modo texto, y el parámetro `newline` controla qué hace al escribir. Cita: Python Workout, recuadro sobre fines de línea (PDF 115).

### Paso 4. Cortar por comas, y cuándo falla (TRAMPA)
- Idea: un CSV es texto con una convención: cada renglón es un registro y la coma separa campos. Partir con `split(',')` funciona hasta que un campo trae una coma adentro; el módulo `csv` resuelve eso con comillas.
- Escenario: modo 4. Piso de campos. Interruptor `split` frente a `csv`. Botón "poner una coma en el nombre" que cambia `Luis` por `Pérez, Ana` (o Francisco la escribe en la casilla).
- Chequeo (predicción antes de tocar): "El renglón es `"Pérez, Ana",R,7`. ¿Cuántos campos da `split(',')`?" Respuesta: **4** (`['"Pérez', ' Ana"', 'R', '7']`). Segunda parte: "¿Y `csv.reader`?" **3** (`['Pérez, Ana', 'R', '7']`).
  - Si responde 3 en la primera: "`split` no sabe de comillas: corta en cada coma que ve."
  - Si responde 2: "Cuenta las comas: hay tres, y cada una separa."
- Este es el paso de la **trampa**: el formato parece trivial y se rompe con datos reales.
- Cita: Python Workout, ejercicio 22, `csv.reader` y `csv.writer` con otro delimitador (PDF 114-116); el texto advierte que usar el delimitador equivocado puede no dar error y aun así leer mal (PDF 116).

### Paso 5. En el disco todo es texto (DESTACADO con predicción)
- Idea: el CSV no guarda tipos. La nota 8 viaja como el carácter `"8"`; convertirla a número es trabajo del programa que lee.
- Escenario: modo 5. Piso de estructura en memoria con los tipos. Interruptor "convertir `nota` con `int()`" (apagado al principio). Aquí se muestra de nuevo la hipótesis de Francisco.
- **Destacado** (la confusión natural): "Lees el CSV con `csv.DictReader` y sumas la nota de Ana consigo misma: `fila['nota'] + fila['nota']`. Antes de probar, ¿qué da?" Opciones: `16` / `'88'` (correcta) / un error.
  - Explicación al resolver: `DictReader` entrega cadenas; `'8' + '8'` concatena. En R, `read.csv` adivina el tipo y la misma suma da `16` (verificado: `x$nota + x$nota` da `16 12`). Cada librería decide distinto: hay que mirar el tipo.
- Chequeo del paso (cálculo): "Con la conversión encendida, ¿cuánto suman las tres notas?" Con los datos de inicio, **24**. Si Francisco editó notas, se calcula en vivo. Si da una cadena larga (por ejemplo `8610`): "Esa es la suma de textos: enciende la conversión."
- Cita: Python Workout, ejercicio 19, convertir un archivo en diccionario con `split` (PDF 104-105).

### Paso 6. Escribir: `w` borra, `a` agrega
- Idea: abrir con `"w"` deja el archivo vacío antes de escribir (si existía, se pierde lo anterior); `"a"` pone el cursor al final y agrega.
- Escenario: modo 6. Selector de modo y botón "abrir y escribir una línea". La cinta muestra qué queda.
- Chequeo (predicción antes de tocar): "Escribes `uno` con `"w"`, luego `dos` con `"w"` y luego `tres` con `"a"`. ¿Qué renglones quedan?" Respuesta: **`dos` y `tres`** (verificado: `['dos', 'tres']`).
  - `uno, dos, tres`: "El segundo `"w"` vació el archivo antes de escribir `dos`."
  - Solo `tres`: "`"a"` no borra: agrega después de lo que había."
- Cita: Think Python, modo `'w'` y la advertencia de que borra el archivo existente (PDF 187); Python Workout, ejercicio 24, leer un archivo y escribir otro (PDF 121).
- `details.profundizar`: "¿Y los archivos que no son texto?" Un PDF o una imagen se abren en modo binario (`'rb'`) y se leen por bloques de bytes; Python Workout lo cuenta en el recuadro "Binary mode using b" (PDF 101).

### Paso 7. JSON: la misma estructura, con tipos
- Idea: JSON escribe listas y diccionarios como texto, conservando números, verdaderos, falsos y nulos. Leer y escribir con `json` devuelve la misma estructura. Pero tiene reglas propias: comillas dobles, `true`/`false`/`null`, y claves siempre de texto.
- Escenario: modo 7. Panel JSON con el texto que produce `json.dump(filas, f)`: `[{"nombre": "Ana", "materia": "Python", "nota": 8}, ...]` y el árbol plegable. La nota aparece sin comillas (es un número).
- Chequeo (elección con explicación): "¿Cuál de estos textos es JSON válido?"
  - Correcta: `{"activo": true, "nota": 8, "comentario": null}`.
  - `{'activo': True, 'nota': 8}`: "Eso es Python: JSON exige comillas dobles y `true` en minúscula."
  - `{"nota": 8,}`: "JSON no admite la coma final."
  - `{nota: 8}`: "Las claves van entre comillas dobles."
- Cierre con trampa corta (retomada en `codigo3`): `json.dumps({1: "uno"})` da `{"1": "uno"}`; al volver, la clave es la cadena `"1"` y la comparación con el original da `False`.
- Citas: Python Workout, apertura del capítulo 5 (archivos que guardan estructuras, tabla 5.1 con `csv` y `json`, PDF 98); ejercicio 23, `json.load` de una lista de diccionarios (PDF 117-119).
- Puente: un DataFrame de pandas (`pd.read_csv`) hace estos mismos pasos por dentro: lee la cinta, corta, adivina tipos.

## Vida real (Python y R)

Mismos datos del recorrido. El programa crea el archivo `notas.csv` (para que sea reproducible), lo lee renglón a renglón con
un bucle, construye la estructura, la guarda como JSON, la vuelve a leer y termina comparando con la librería
(`csv.DictReader` en Python, `read.csv` en R). En R la lectura renglón a renglón usa una conexión (`file(..., "r")` y
`readLines(f, n = 1)`), que es el mismo cursor; la página lo dice: "R suele leer todo de una vez con `readLines` o `read.csv`;
aquí se usa la conexión para ver el cursor".

Código Python (corrido con Python 3.13.5; idéntico al de la página; las líneas con id repetido se iluminan juntas):

```
import:   import csv, json
null:
texto:    texto = "nombre,materia,nota\nAna,Python,8\nLuis,R,6\nEva,Python,10\n"
abrew:    with open("notas.csv", "w") as f:
escribe:      f.write(texto)
cierraw:  # al salir del bloque with, el archivo ya está cerrado
filas:    filas = []
abrer:    with open("notas.csv") as f:
cabecera:     cabecera = f.readline().strip().split(",")
fori:         for linea in f:
campos:           campos = linea.strip().split(",")
guarda:           filas.append({"nombre": campos[0], "materia": campos[1], "nota": int(campos[2])})
cierrar:  # aquí se cerró el segundo with
imp1:     print(cabecera)
imp2:     print(filas[0])
dump:     with open("notas.json", "w") as f:
dump:         json.dump(filas, f)
load:     with open("notas.json") as f:
load:         print(json.load(f) == filas)
lib:      with open("notas.csv", newline="") as f:
lib:          print(list(csv.DictReader(f))[0])
```

Código R (corrido con R 4.6.1 y jsonlite):

```
import:   library(jsonlite)
null:
texto:    texto <- "nombre,materia,nota\nAna,Python,8\nLuis,R,6\nEva,Python,10\n"
abrew:    f <- file("notas.csv", "w")
escribe:  cat(texto, file = f)
cierraw:  close(f)
filas:    filas <- list()
abrer:    f <- file("notas.csv", "r")
cabecera: cabecera <- strsplit(readLines(f, n = 1), ",")[[1]]
fori:     while (length(linea <- readLines(f, n = 1)) > 0) {
campos:     campos <- strsplit(linea, ",")[[1]]
guarda:     filas[[length(filas) + 1]] <- list(nombre = campos[1], materia = campos[2], nota = as.integer(campos[3]))
null:     }
cierrar:  close(f)
imp1:     print(cabecera)
imp2:     str(filas[[1]])
dump:     write_json(filas, "notas.json", auto_unbox = TRUE)
load:     print(identical(read_json("notas.json"), filas))
lib:      str(read.csv("notas.csv")[1, ])
```

Salida real de Python:
```
['nombre', 'materia', 'nota']
{'nombre': 'Ana', 'materia': 'Python', 'nota': 8}
True
{'nombre': 'Ana', 'materia': 'Python', 'nota': '8'}
```
Salida real de R (la primera línea de `str(read.csv(...))` lleva un tabulador después de `'data.frame':`):
```
[1] "nombre"  "materia" "nota"   
List of 3
 $ nombre : chr "Ana"
 $ materia: chr "Python"
 $ nota   : int 8
[1] TRUE
'data.frame':	1 obs. of  3 variables:
 $ nombre : chr "Ana"
 $ materia: chr "Python"
 $ nota   : int 8
```
Contenido real de `notas.json`: en Python `[{"nombre": "Ana", "materia": "Python", "nota": 8}, {"nombre": "Luis", "materia": "R", "nota": 6}, {"nombre": "Eva", "materia": "Python", "nota": 10}]`;
en R el mismo contenido sin espacios: `[{"nombre":"Ana","materia":"Python","nota":8},...]`.

Foto de estado por línea ejecutada (eventos en orden; `cursor` en caracteres desde el inicio del archivo):

| # | id | archivo | cursor | variables que cambian |
|---|---|---|---|---|
| 1-2 | import, texto | no existe | | `texto` (56 caracteres) |
| 3 | abrew | abierto para escribir, vacío | 0 | |
| 4 | escribe | 56 caracteres escritos | 56 | |
| 5 | cierraw | cerrado | | |
| 6 | filas | | | `filas = []` |
| 7 | abrer | abierto para leer | 0 | |
| 8 | cabecera | | 20 | `cabecera = ['nombre', 'materia', 'nota']` |
| 9-11 | fori, campos, guarda | | 33 | `linea = 'Ana,Python,8\n'`, `campos`, `filas` con 1 |
| 12-14 | fori, campos, guarda | | 42 | `linea = 'Luis,R,6\n'`, `filas` con 2 |
| 15-17 | fori, campos, guarda | | 56 | `linea = 'Eva,Python,10\n'`, `filas` con 3 |
| 18 | fori | | 56 | no hay más renglones: el bucle termina |
| 19 | cierrar | cerrado | | |
| 20-24 | imp1, imp2, dump, load, lib | | | salidas impresas; `notas.json` creado |

Índices: en Python `campos[0]`, `campos[1]`, `campos[2]`; en R `campos[1]`, `campos[2]`, `campos[3]` (mostrar con `ctx.ix` en la narración).

Visual de la vida real: la cinta de 56 casillas con el cursor moviéndose renglón a renglón, y a la derecha la tabla de `filas`
que se llena; en `dump` aparece el texto JSON y en `lib` la fila de la librería con la nota marcada como texto (Python) o como
entero (R).

Predicción antes de reproducir (`#vrPred`): "¿Cuántas veces corre la línea `guarda`?" Respuesta: **3** (un registro por renglón de
datos; la cabecera se leyó antes). Distractor 4: "El renglón de la cabecera ya lo consumió `readline`: el `for` empieza en Ana."
Pregunta extra opcional: "¿Y cuántas veces se evalúa `fori`?" **4**: la cuarta descubre que no hay más.

`p.vr-nota`: "En una línea: `list(csv.DictReader(open('notas.csv')))` o `pd.read_csv('notas.csv')` en Python; `read.csv('notas.csv')` en R."
`details.profundizar` de la vida real: "¿Por qué `DictReader` deja la nota como texto y `read.csv` no?" El módulo `csv` solo corta;
`read.csv` (y `pd.read_csv`) miran cada columna y adivinan el tipo. Adivinar es cómodo y a veces se equivoca (un código postal
con ceros a la izquierda, un identificador que parece número).

Trampas reales (retos `codigo1`..`codigo3`, verificados):

- `codigo1` (Python, `csv` no convierte tipos):
  ```
  with open("notas.csv", newline="") as f:
      fila = next(csv.DictReader(f))
  print(fila["nota"] + fila["nota"])
  ```
  Salida: `88`. Opciones: `88` (correcta) / `16` / `TypeError`. En R, `x <- read.csv(text = "nota\n8\n6"); print(x$nota + x$nota)` da `[1] 16 12`.
- `codigo2` (Python, coma dentro de un campo):
  ```
  linea = '"Pérez, Ana",R,7'
  print(linea.split(","))
  print(next(csv.reader([linea])))
  ```
  Salida: `['"Pérez', ' Ana"', 'R', '7']` y `['Pérez, Ana', 'R', '7']`. Pregunta: "¿Cuántos elementos imprime la primera línea?" **4**.
- `codigo3` (JSON cambia las claves y R envuelve en listas):
  ```
  print(json.dumps({1: "uno"}))
  print(json.loads(json.dumps({1: "uno"})) == {1: "uno"})
  ```
  Salida: `{"1": "uno"}` y `False`. En R: `toJSON(list(nota = 8))` da `{"nota":[8]}` y con `auto_unbox = TRUE` da `{"nota":8}`
  (por eso el código de la vida real usa `auto_unbox = TRUE`). Opciones de la pregunta Python: `False` (correcta) / `True` / un error.

## Retos (10)

1. `ojo-tipo` (ojo clínico, 5 rondas al azar, aprueba con 4 de 5): se muestra un valor y cómo se leyó (`csv.reader`, `csv.DictReader`,
   `json.load`, `read.csv` de R, `int(...)` sobre un campo). Francisco decide si el valor en memoria es texto o número. Generador:
   elige al azar un valor (`8`, `3.5`, `"Ana"`, `true`) y un lector; la respuesta sale de una tabla fija (csv: siempre texto; json:
   según cómo está escrito, `8` número y `"8"` texto; `read.csv`: número si toda la columna lo es; `int()`: número).
2. `construir-csv` (construir): con las casillas editables, Francisco arma un archivo que cumpla tres objetivos que se marcan solos:
   (a) exactamente 4 registros de datos más la cabecera; (b) un nombre con coma que `csv` lea bien (se escribe con comillas;
   el escenario muestra que `split` lo rompe); (c) que la suma de notas leída con conversión dé 30. Se valida con el mismo
   lector que dibuja la página.
3. `mano-cursor` (a mano, reintentable, datos al azar): se genera un archivo de 3 a 5 renglones cortos al azar (palabras de una lista
   fija). Se da una secuencia de 2 o 3 operaciones (`readline()`, `read(5)`, `readline()`). Francisco escribe lo que devuelve la
   última. Pistas: (1) "marca dónde queda el cursor después de cada operación"; (2) se muestra la cinta con el cursor tras la
   primera operación; (3) se muestra tras la segunda.
4. `mano-largo` (a mano, reintentable): un renglón al azar (`nombre,materia,nota` con valores de listas fijas). Francisco escribe cuántos
   caracteres entrega el `for` (incluido el `\n`). Pistas: (1) "el salto cuenta"; (2) "suma los largos de los campos, las comas y 1".
   Validar contra `str.length` de JavaScript sobre texto NFC (las tildes cuentan 1).
5. `cazar-archivo` (cazar el error, 3 variantes; desarrollos de 4 o 5 líneas con una línea mal):
   - Variante A: se abre el archivo de resultados con `"w"` dentro de un bucle que recorre tres alumnos; al final solo queda el último.
     Línea mala: el `open(..., "w")` dentro del bucle (debería ir fuera o usar `"a"`).
   - Variante B: se suman las notas leídas con `csv.reader` sin `int()`; el total sale `'8610'`. Línea mala: `total = total + fila[2]`
     (con `total = ''` al principio para que no falle con `TypeError`; decirlo en la explicación).
   - Variante C: se lee con `f.read()` para contar caracteres y después `for linea in f` para contar renglones; da 0 renglones.
     Línea mala: el segundo recorrido sin volver el cursor (`f.seek(0)`) o sin reabrir.
6. `prop-json` (propiedades, opción múltiple, `mezclar: true`, reintentable): "¿Cuál afirmación sobre JSON es verdadera?"
   - Correcta: "Las claves de un objeto JSON siempre son texto."
   - "JSON guarda tuplas y conjuntos de Python tal cual": pista "una tupla vuelve como lista y un conjunto ni siquiera se puede guardar (`TypeError`)."
   - "JSON acepta comillas simples": pista "solo dobles; `'Ana'` no es JSON válido."
   - "`True` de Python se escribe `True` en JSON": pista "se escribe `true`, en minúscula; `None` se escribe `null`."
7. `prop-modos` (propiedades, opción múltiple con pista por respuesta): "Abres un archivo que existe con `open(nombre, 'w')` y no escribes
   nada. ¿Qué queda en el disco?"
   - Correcta: "Un archivo vacío."
   - "El archivo como estaba": pista "`'w'` vacía el archivo al abrirlo, escribas o no."
   - "Nada; el archivo se borra": pista "el archivo sigue existiendo, con 0 caracteres."
   - "Da un error porque el archivo ya existe": pista "eso hace el modo `'x'`; `'w'` no pregunta."
8. `codigo1`, 9. `codigo2`, 10. `codigo3`: las trampas reales de la vida real.

Lecturas asociadas (citar como lectura, no copiar): Python Workout ej. 18 (última línea, PDF 99-103), 20 (contar palabras, PDF 107),
22 (CSV, PDF 114-116), 23 (JSON, PDF 117-121), 24 (invertir renglones, PDF 121).

## Memoria

`B.ordenar` (armar la lectura de un CSV a mano, línea por línea):
- Piezas en orden: `with open("notas.csv") as f:` · `cabecera = f.readline().strip().split(",")` · `for linea in f:` ·
  `campos = linea.strip().split(",")` · `filas.append(campos)`
- Distractores: `f.close()` (dentro del `with` sobra) · `open("notas.csv", "w")` (borraría el archivo) · `for linea in f.read():` (recorre caracteres, no renglones)

Tarjetas (`B.tarjetas`, 8):
1. ¿Qué es un archivo de texto para el programa? · Una tira de caracteres, incluidos los saltos de línea.
2. ¿Qué devuelve `read()` cuando el cursor ya está al final? · La cadena vacía `''`.
3. ¿Por qué se usa `strip()` al leer renglones? · Porque cada renglón trae su `\n` al final.
4. ¿Qué hace `with open(...) as f`? · Abre el archivo y lo cierra solo al salir del bloque, aunque haya un error.
5. ¿Qué diferencia hay entre `'w'` y `'a'`? · `'w'` vacía el archivo antes de escribir; `'a'` agrega al final.
6. ¿Qué tipo tiene un número leído con `csv.reader`? · Texto (`str`); hay que convertirlo con `int()` o `float()`.
7. ¿Por qué no basta `split(',')` para un CSV? · Un campo entre comillas puede traer comas; `csv` lo maneja.
8. ¿En qué se diferencia JSON de un diccionario de Python? · Comillas dobles, `true`/`false`/`null`, y claves siempre de texto.

## Citas (13)

| id de fuente | pág. PDF | pág. impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| pyworkout | 97 | 71 | Cap. 5, apertura | por qué los archivos importan y cómo guardan estructuras de datos | Cabecera o paso 1 |
| pyworkout | 98 | 72 | Cap. 5, tabla 5.1 | `open`, `with`, `csv`, `json` en una tabla "What you need to know" | Paso 7 |
| pyworkout | 100 | 74 | Ej. 18: Final line | iterar un archivo línea a línea, el `\n` al final de cada renglón y `with` como forma estándar | Pasos 2 y 3 |
| pyworkout | 101 | 75 | Ej. 18, recuadro "Binary mode using b" | abrir en modo binario y leer por bloques de bytes | Profundizar del paso 6 |
| pyworkout | 107 | 81 | Ej. 19-20, recuadro de `with` | qué es un gestor de contexto: `__enter__` y `__exit__` | Profundizar del paso 2 |
| pyworkout | 104 | 78 | Ej. 19: /etc/passwd to dict | convertir un archivo de campos separados en un diccionario | Paso 5 |
| pyworkout | 115 | 89 | Ej. 22, recuadro de fines de línea | `\n` frente a `\r\n` y el parámetro `newline` | Profundizar del paso 3 |
| pyworkout | 116 | 90 | Ej. 22: Reading and writing CSV | `csv.reader` y `csv.writer` con otro delimitador; el delimitador equivocado puede leer mal sin avisar | Paso 4 |
| pyworkout | 119 | 93 | Ej. 23: JSON | `json.load` devuelve una lista de diccionarios; `json.loads` para una línea | Paso 7 |
| pyworkout | 121 | 95 | Ej. 24: Reverse lines | leer un archivo y escribir otro | Paso 6 |
| thinpython | 120 | 99 | Cap. 9: Reading Word Lists | `open`, `readline`, `strip` y `for line in fin` | Paso 3 |
| thinpython | 187 | 166 | Cap. 14: Reading and Writing | modo `'w'`, `write` y `close` a mano (el libro no usa `with`) | Paso 6 |
| thinpython | 190 | 169 | Cap. 14: Catching Exceptions | qué pasa si el archivo no existe o no se puede abrir; `try`/`except` | Retos o riesgos de la vida real |

Páginas tomadas de los mapas `brain/fuentes/python-workout.md` y `brain/fuentes/think-python.md`. Además leí con `pdftotext`
las PDF 97, 98, 100, 101, 107, 114, 115, 116, 117 y 119 de Python Workout para confirmar el contenido.

## Riesgos y notas para quien construye

- **Think Python no enseña `with`, `csv` ni `json`** (el mapa lo verifica en "No aparece"). No citarlo para eso: sus citas son solo
  para `open`/`write`/`close`, `readline` y excepciones al abrir.
- **Errata de Think Python a mencionar si se cita la PDF 190**: el primer ejemplo muestra `IOError` al abrir un archivo que no existe;
  en Python 3 actual el mensaje es `FileNotFoundError` (subclase de `OSError`).
- **R frente a Python en tipos.** `read.csv` adivina tipos; `csv.DictReader` no. No decir "R convierte siempre": `read.csv` deja como
  texto una columna con algún valor no numérico, y por defecto no convierte texto a factor desde R 4.0.
- **`jsonlite` y las listas.** Sin `auto_unbox = TRUE`, cada valor de largo 1 se guarda como lista `[8]`. La comparación
  `identical(read_json(...), filas)` dio `TRUE` aquí porque `read_json` devolvió enteros y la estructura coincide; si se cambian los
  datos (por ejemplo una nota `8.5`), volver a correr.
- **El tabulador de `str`.** La salida de `str(read.csv(...))` tiene un tabulador real; al pegarla en la página, usar `\t` en la cadena
  de JavaScript o un `white-space: pre` que lo respete.
- **El cursor es un modelo.** La columna `cursor` de la tabla de estados es la posición lógica en el texto. En CPython, dentro de
  `for linea in f` no se puede preguntar `f.tell()` (da `OSError: telling position disabled by next() call`, verificado) porque el
  archivo lee por adelantado en un búfer. No mostrar `f.tell()` dentro del bucle en ningún código de la página.
- **Archivos en el navegador.** La página no puede escribir en disco: la cinta es una simulación. Decirlo en la parte de vida real
  ("el código corre en tu computadora; aquí ves lo que pasa").
- **Conteo de caracteres con tildes.** `Pérez` tiene 5 caracteres en Python (texto Unicode) pero 6 bytes en UTF-8. La página cuenta
  caracteres; si se menciona el tamaño en disco, aclarar la diferencia. El archivo del recorrido no tiene tildes para que caracteres
  y bytes coincidan (56 y 56).
- **Material del máster.** SM142002 lee los CSV con `pd.read_csv` en los cuadernos de clase (`prog1nb`, no registrado en `fuentes.js`)
  y no explica el formato. Si la sesión principal registra `prog1nb`, la celda 2 de `UAX_20251020` (carga de los cuatro CSV) sería
  una buena cita para el puente del paso 7.
