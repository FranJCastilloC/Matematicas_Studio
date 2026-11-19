# Mapa de citas: Lerner, Python Workout (50 ten-minute exercises)

Archivo: `/Users/franciscocastillo/Desktop/Libros/Python Workout 50 ten-minute exercises.pdf` (249 páginas PDF; texto extraíble con `pdftotext -layout`, no es escaneado).
Correspondencia verificada: página PDF N = página impresa N + 26 en todo el cuerpo del libro. Comprobado en PDF 27 = p. 1 (abre el cap. 1), PDF 28 = p. 2, PDF 120 = p. 94, PDF 237 = p. 211 (ejercicio 50) y PDF 240 = p. 214 (Conclusion); cada página se leyó con `pdftotext -layout`.
Las 26 primeras páginas PDF son preliminares con numeración romana (portada, contenido en PDF 7-13, prefacio, "about this book" hasta unas xxiii); el índice alfabético empieza en la p. 215 (PDF 241). Las páginas 1 a 214 impresas son el cuerpo.
Edición: Reuven M. Lerner, Python Workout: 50 ten-minute exercises (Manning, 2020). Cada capítulo abre con una introducción y una tabla "What you need to know" (concepto, ejemplo y enlace mng.bz); cada ejercicio trae enunciado, "Working it out" (explicación), "Solution" (código con anotaciones), "Screencast solution" (aviso de un video) y "Beyond the exercise" (variantes). Los 50 ejercicios tienen sección "Beyond the exercise" (51 filas con 35a y 35b). Cada capítulo cierra con "Summary". Los números de ejercicio y de página se citan como impresa; suma 26 para el PDF.
Todo el código usa Python 3 sin librerías de terceros: solo biblioteca estándar. El repositorio de soluciones con pruebas pytest está en GitHub (`python-workout`, mencionado en PDF 21, xix).

## Tabla de temas

Columnas: Tema (número y título del ejercicio), PDF, Impresa (rango del ejercicio completo), Sección (capítulo), Notas = concepto que practica; qué hay que construir; dónde está la solución (S) y "Beyond the exercise" (B).

| Tema | PDF | Impresa | Sección | Notas |
|---|---|---|---|---|
| Cap. 1 apertura y "Useful references" | 28 | 2 | 1 Numeric types | tabla 1.1 con los conceptos previos (`random`, `input`, `int`, `while`, f-strings, etc.) y enlaces; el cap. 1 empieza en la p. 1 (PDF 27) con solo el título |
| Ej. 1: Number guessing game | 28-33 | 2-7 | 1 Numeric types | bucle `while`, `input`, convertir tipos, comparar, `random.randint` (el máximo es inclusivo); construir un juego donde adivinas un entero de 0 a 100 con pistas de mayor o menor; S p.5, B p.6 (adivinar en otra base, adivinar una palabra); recuadros "Saved by the walrus" p.4 y f-strings p.7 |
| Ej. 2: Summing numbers | 34-36 | 8-10 | 1 Numeric types | `*args`, sumar sin usar `sum`; reimplementar `sum` con un número variable de argumentos; S p.10, B p.10; recuadro "Turning iterables into arguments" p.9 (desempacar con `*`) |
| Ej. 3: Run timing | 37-39 | 11-13 | 1 Numeric types | acumular datos en un bucle, promedio, flotantes y formato; leer tiempos de carreras de 10 km y reportar promedio y detalle; S p.13, B p.13; recuadro "Gaining control with f-strings" p.12 (ancho, precisión y alineación) |
| Ej. 4: Hexadecimal output | 40-42 | 14-16 | 1 Numeric types | `reversed`, `enumerate`, potencias de la base; pasar una cadena en hexadecimal a entero a mano, dígito por dígito; S p.15, B p.16; Summary p.16 |
| Cap. 2 apertura y "Useful references" | 44 | 18 | 2 Strings | tabla 2.1 con conceptos (cadenas, slices, métodos `str`, `sorted`, `join`); el cap. empieza en la p. 17 (PDF 43) |
| Ej. 5: Pig Latin | 44-47 | 18-21 | 2 Strings | índices y rebanadas de cadenas, condicionales sobre vocales; función que traduce una palabra a Pig Latin; S p.20, B p.20; recuadro "Slices" p.20 |
| Ej. 6: Pig Latin sentence | 48-50 | 22-24 | 2 Strings | `split`, `join`, reutilizar una función; traducir una frase de palabras en minúsculas; S p.23, B p.24 |
| Ej. 7: Ubbi Dubbi | 50-51 | 24-25 | 2 Strings | inmutabilidad de las cadenas, construir una cadena nueva letra a letra; traducir al otro lenguaje secreto insertando "ub" antes de cada vocal; S p.25, B p.25 |
| Ej. 8: Sorting a string | 52-54 | 26-28 | 2 Strings | `sorted` sobre una cadena devuelve lista, `''.join`, orden por valor Unicode; función `strsort` que devuelve los caracteres ordenados; S p.27, B p.28; recuadro "Unicode" p.27; Summary p.28 |
| Cap. 3 apertura | 55-56 | 29-30 | 3 Lists and tuples | cuándo lista y cuándo tupla (mutable vs inmutable, homogénea vs registro); tabla 3.1 compara `str`, `list`, `tuple` (p.30); tabla 3.2 "What you need to know" (p.30-31) |
| Ej. 9: First-last | 57-61 | 31-35 | 3 Lists and tuples | tipado dinámico, índices y rebanadas, devolver el mismo tipo que se recibió; `firstlast` para cadena, lista o tupla; S p.35, B p.35; recuadro "Staying in bounds" p.33 (índice vs slice fuera de rango) |
| Ej. 10: Summing anything | 63-66 | 37-40 | 3 Lists and tuples | funciones genéricas sobre tipos distintos (enteros, flotantes, cadenas, listas); sumar elementos sin asumir el tipo, con valor inicial tomado del primero; S p.39, B p.40 |
| Ej. 11: Alphabetizing names | 66-71 | 40-45 | 3 Lists and tuples | lista de dicts, `sorted` con `key` y `itemgetter`, `lambda`, formato; ordenar una agenda por apellido y nombre y mostrarla; S p.43, B p.43 |
| Ej. 12: Word with most repeated letters | 72-75 | 46-49 | 3 Lists and tuples | contar frecuencias (`Counter`), `max` con `key`; encontrar la palabra con la letra más repetida; S p.48, B p.49 |
| Ej. 13: Printing tuple records | 75-78 | 49-52 | 3 Lists and tuples | tuplas como registros, desempaque, formato con ancho fijo; imprimir en tabla una lista de tuplas (nombre, apellido, horas); S p.51, B p.51; Summary p.52 |
| Cap. 4: Hashing and dicts | 80-82 | 54-56 | 4 Dictionaries and sets | por qué las claves deben ser hashables, qué pasa con listas y tuplas, orden de inserción; sección teórica propia |
| Cap. 4: Sets | 82 | 56 | 4 Dictionaries and sets | qué es un conjunto, membresía rápida, operaciones; tabla 4.1 "What you need to know" en la misma página |
| Ej. 14: Restaurant | 83-84 | 57-58 | 4 Dictionaries and sets | un dict como base de datos pequeña (`MENU`), `in`, bucle `while True`; tomar un pedido y sumar precios, con control de productos inexistentes; S p.58, B p.58 |
| Ej. 15: Rainfall | 85-89 | 59-63 | 4 Dictionaries and sets | acumular en un dict, `dict.get`, `defaultdict`, entradas del usuario; guardar lluvia por ciudad y mostrar el reporte al dar una ciudad vacía; S p.63, B p.63; recuadro "Trapping input errors" p.61 (`try`/`except` con `ValueError`) |
| Ej. 16: Dictdiff | 90-94 | 64-68 | 4 Dictionaries and sets | recorrer dos dicts, `dict.get` con valor por defecto, uniones de claves; devolver un dict con las diferencias entre dos dicts; S p.67, B p.68 |
| Ej. 17: How many different numbers? | 94-96 | 68-70 | 4 Dictionaries and sets | `set` para quitar duplicados, `len`; contar cuántos valores distintos hay en una lista; S p.69, B p.70; Summary p.70 |
| Cap. 5 apertura | 97-98 | 71-72 | 5 Files | archivos como cadenas, `with`, correspondencia entre estructuras en memoria y formatos en disco (CSV, JSON); tabla 5.1 con `open`, `with`, `os`, `glob`, `csv`, `json`, `hashlib` (p.72-73) |
| Ej. 18: Final line | 99-103 | 73-77 | 5 Files | iterar un archivo línea por línea, memoria; devolver la última línea de un archivo; S p.76, B p.77; recuadros "Binary mode using b" p.75 y "Simulating files in Python Tutor" p.77 |
| Ej. 19: /etc/passwd to dict | 104-106 | 78-80 | 5 Files | `split(':')`, convertir un archivo en dict; construir un dict usuario a datos desde un archivo estilo passwd; S p.79, B p.80; recuadro "Some help from string methods" p.78 |
| Ej. 20: Word count | 107-110 | 81-84 | 5 Files | contar caracteres, palabras, líneas y palabras únicas (imitar `wc`), `set`; S p.84, B p.84 |
| Ej. 21: Longest word per file | 111-113 | 85-87 | 5 Files | recorrer varios archivos de un directorio (`os.listdir`, `glob`), `max` con `key`; palabra más larga por archivo; S p.86, B p.86; recuadro "Directory listings" p.87 |
| Ej. 22: Reading and writing CSV | 114-116 | 88-91 | 5 Files | módulo `csv`, `csv.reader` y `csv.writer`, delimitadores distintos; leer un CSV y guardarlo con otro separador; S p.90, B p.91 |
| Ej. 23: JSON | 117-121 | 91-95 | 5 Files | `json.load`, listas de dicts, promedios; leer los JSON de notas de una carpeta y calcular estadísticas por materia; S p.94, B p.95 |
| Ej. 24: Reverse lines | 121-123 | 95-97 | 5 Files | leer un archivo y escribir otro, invertir cada línea conservando el salto; S p.96, B p.96; Summary p.97 |
| Cap. 6 apertura | 124-125 | 98-99 | 6 Functions | por qué funciones, DRY, funciones como objetos, no hay sobrecarga en Python y se usan parámetros flexibles; tabla 6.1 (p.99-100) |
| Cap. 6: Default parameter values | 126-127 | 100-101 | 6 Functions | `__code__.co_argcount`, error por faltar un argumento, valores por defecto, `*args` y `**kwargs`; tabla 6.2 "Calling hello" en p.101 |
| Cap. 6: Variable scoping in Python | 130-132 | 104-106 | 6 Functions | regla LEGB (local, englobante, global, built-in), asignar crea una local, `global` (recuadro "THE GLOBAL STATEMENT" p.106) |
| Ej. 25: XML generator | 127-131 | 101-105 | 6 Functions | parámetros posicionales, por defecto, `*args` y `**kwargs`; función `myxml` que genera una etiqueta con texto y atributos (tabla 6.3 con los casos); S p.102-103, B p.103 |
| Ej. 26: Prefix notation calculator | 133-137 | 107-111 | 6 Functions | `split`, `maxsplit`, diccionario de operadores, módulo `operator`; evaluar una expresión prefija `+ 2 3`; S p.109-110, B p.111; recuadro "Hedging your bets with maxsplit" p.109 |
| Ej. 27: Password generator | 137-141 | 111-115 | 6 Functions | función que devuelve otra función (fábrica), `random.choice`, cerraduras; fábrica de generadores de contraseña con un alfabeto fijo; S p.113, B p.114; Summary p.115 |
| Cap. 7 apertura | 142-144 | 116-118 | 7 Functional programming with comprehensions | idea de programación funcional, qué aporta Python (comprensiones), tabla 7.1 "What you need to know" (p.117-118) |
| Cap. 7: Writing comprehensions | 146 | 120 | 7 Functional programming with comprehensions | cómo se escribe una comprensión paso a paso (de un bucle `for`), cuándo usarla y cuándo un bucle; vive dentro de Ej. 28 |
| Ej. 28: Join numbers | 144-150 | 118-124 | 7 Functional programming with comprehensions | lista por comprensión, `str`, `join`, `range`; unir enteros con comas en una cadena (sin la coma sobrante); S p.122, B p.123; en p.123-125 aparecen `map` y `filter` |
| Ej. 29: Add numbers | 151-152 | 125-126 | 7 Functional programming with comprehensions | comprensión con `if` (filtrar), `str.isdigit`, `int`; sumar los números de una cadena que mezcla números y texto; S p.126, B p.126 |
| Ej. 30: Flatten a list | 153-154 | 127-128 | 7 Functional programming with comprehensions | comprensión anidada de dos bucles; aplanar una lista de listas; S p.128, B p.128 |
| Ej. 31: Pig Latin translation of a file | 155-156 | 129-131 | 7 Functional programming with comprehensions | comprensión sobre un archivo, reutilizar `plword`; traducir un archivo a Pig Latin; S p.130, B p.131 (ver erratas) |
| Ej. 32: Flip a dict | 157-158 | 131-133 | 7 Functional programming with comprehensions | comprensión de dict; invertir claves y valores; S p.132, B p.133 |
| Ej. 33: Transform values | 159-160 | 133-134 | 7 Functional programming with comprehensions | pasar una función como argumento, comprensión de dict, comparar con `map` (p.133-134 usa `lambda`); `transform_values` que aplica una función a cada valor; S p.134, B p.134 |
| Ej. 34: (Almost) supervocalic words | 161-163 | 135-137 | 7 Functional programming with comprehensions | conjuntos y la comparación `<` como subconjunto, comprensión de conjunto sobre el archivo de palabras; `get_sv` que devuelve palabras con todas las vocales; explicación "Working it out" p.136, B p.137 |
| Ej. 35a: Gematria, part 1 | 163-165 | 137-139 | 7 Functional programming with comprehensions | comprensión de dict, `string.ascii_lowercase`, `enumerate`; construir el dict letra a número 1-26; S p.138, B p.139 |
| Ej. 35b: Gematria, part 2 | 165-167 | 139-141 | 7 Functional programming with comprehensions | `dict.get` con 0 por defecto, `sum` sobre generador, filtrar por valor; calcular el valor de una palabra y listar las que valen igual (cat vale 24, p.140); S p.141, B p.141; Summary p.142 |
| Cap. 8 apertura | 169-170 | 143-144 | 8 Modules and packages | módulos como reutilización y como espacios de nombres, biblioteca estándar, PyPI y "Awesome Python"; tabla 8.1 en p.144 |
| Cap. 8: Importing modules | 171-172 | 145-146 | 8 Modules and packages | `import X`, `import X as Y`, `from X import Y`; ejemplo `import numpy as np` (p.146) |
| Ej. 36: Sales tax | 173-177 | 147-151 | 8 Modules and packages | crear y usar un módulo propio, valores por defecto, errores; módulo con la función de impuestos de ventas; S p.150, B p.151; recuadros "The Decimal version" y "Error checking the Pythonic way" p.149, "Loading and reloading modules" p.151 |
| Ej. 37: Menu | 178-183 | 152-157 | 8 Modules and packages | módulo reutilizable, `__name__`, funciones como valores de un dict, `**kwargs`; módulo `menu` con una función que pide una opción y llama la función elegida; S p.154, B p.155; recuadro "Modules vs. packages" p.155; Summary p.157 |
| Cap. 9 apertura | 184-187 | 158-161 | 9 Objects | programación orientada a objetos frente a procedural (ejemplo `ScoreList` p.159), interfaz frente a implementación; tabla 9.1 p.161 |
| Ej. 38: Ice cream scoop | 187-193 | 161-167 | 9 Objects | clase, `__init__`, atributos de instancia, `__repr__` o `__str__`; clase `Scoop` que representa una bola de helado; B p.164; recuadros "Talking about your self" p.163 y "Reducing redundancy with dataclass" p.172 |
| Ej. 39: Ice cream bowl | 194-199 | 168-173 | 9 Objects | composición (un objeto contiene otros), métodos que modifican y que reportan; clase `Bowl` con varias `Scoop`; S p.171, B p.171; recuadro "How Python searches for attributes" p.173 |
| Ej. 40: Bowl limits | 201-205 | 175-179 | 9 Objects | atributos de clase como constante, instancia frente a clase; límite máximo de bolas en `Bowl`; S p.177, B p.178 |
| Ej. 41: A bigger bowl | 206-208 | 180-182 | 9 Objects | herencia, sobrescribir un atributo de clase; `BigBowl` con capacidad de cinco; S p.181, B p.182; recuadro "Inheritance in Python" p.179 |
| Ej. 42: FlexibleDict | 209-210 | 183-185 | 9 Objects | heredar de `dict`, método especial `__getitem__`, claves de distinto tipo; dict que acepta `1` y `'1'` como la misma clave; S p.184, B p.185 |
| Ej. 43: Animals | 211-214 | 185-188 | 9 Objects | jerarquía de clases con una base `Animal` y subclases (`Wolf`, `Sheep`, `Snake`, `Parrot`), `super()`, `__repr__`; S p.188, B p.189 |
| Ej. 44: Cages | 215-218 | 189-192 | 9 Objects | composición con `*args`, `__repr__` de un contenedor; clase `Cage` que guarda animales; S p.190, B p.192; recuadro "Abstract base classes" p.187 |
| Ej. 45: Zoo | 219-222 | 193-196 | 9 Objects | contenedor de contenedores, `__repr__` o `__str__` del zoológico, búsqueda por atributo; clase `Zoo` con jaulas y consultas por color; S p.194, B p.196; Summary p.196 |
| Cap. 10 apertura | 223-225 | 197-199 | 10 Iterators and generators | protocolo de iteración (`__iter__`, `__next__`, `StopIteration`), qué hace un `for` en realidad, ejemplo `LoudIterator` (p.199); tres formas: clases, funciones generadoras y expresiones generadoras |
| Cap. 10: generadores y tabla 10.1 | 226-227 | 200-201 | 10 Iterators and generators | `yield`, expresión generadora entre paréntesis, generador como iterador que se pausa; tabla 10.1 con `iter`, `next`, `StopIteration`, `enumerate`, `itertools` |
| Ej. 46: MyEnumerate | 228-230 | 202-204 | 10 Iterators and generators | clase iteradora que devuelve pares (índice, elemento); reimplementar `enumerate`; "Working it out" p.202, B p.204; recuadro "Multiclass iterators" p.202 (iterable e iterador en clases distintas) |
| Ej. 47: Circle | 230-232 | 204-206 | 10 Iterators and generators | `__iter__` y `__next__` con estado, `StopIteration`, no limitado a recorrer una colección; iterador que repite una secuencia un número de veces; S p.206, B p.206; "Another solution" p.205 |
| Ej. 48: All lines, all files | 233-234 | 207-208 | 10 Iterators and generators | función generadora, leer archivos de un directorio sin cargarlos todos; generador que entrega línea a línea todas las líneas de todos los archivos; S p.208, B p.208 |
| Ej. 49: Elapsed since | 235-237 | 209-211 | 10 Iterators and generators | generador con estado que "duerme" entre pedidos, `yield` de una tupla, tiempo con `time`; generador que devuelve cada elemento junto al tiempo transcurrido desde el anterior; S p.210, B p.211 |
| Ej. 50: MyChain | 237-239 | 211-213 | 10 Iterators and generators | generador con `*args` de iterables, comparar con `itertools.chain`; reimplementar `chain`; S p.212, B p.213 (reutiliza lo del ej. 48); Summary p.213 |
| Conclusion | 240 | 214 | cierre | cierre del libro; el índice alfabético empieza en la p. 215 (PDF 241) |

## Búsqueda rápida por concepto candidato

Las páginas son impresas (suma 26 para el PDF).

| Concepto | Dónde mirar | Qué hay |
|---|---|---|
| Variables, tipos y expresiones numéricas | Ej. 1 (p.2-7), Ej. 2 (p.8-10), Ej. 3 (p.11-13), Ej. 4 (p.14-16) | `int`, `float`, `input` que siempre devuelve cadena, conversión de tipos, comparar, promedio, hexadecimal a entero; f-strings con formato numérico p.12; el walrus p.4; en el ej. 36 (p.147-151) `Decimal` frente a `float` p.149 |
| Cadenas y rebanadas | Ej. 5 (p.18-21, recuadro "Slices" p.20), Ej. 6 (p.22-24), Ej. 7 (p.24-25), Ej. 8 (p.26-28, "Unicode" p.27); Ej. 9 (p.31-35, "Staying in bounds" p.33) | inmutabilidad, índices, slices, `split`/`join`, `sorted`; tabla 3.1 (p.30) compara `str`, `list` y `tuple` como secuencias |
| Listas y tuplas, mutabilidad | Cap. 3 apertura (p.29-31), tabla 3.1 (p.30), Ej. 9-13 (p.31-52); mutabilidad también en p.17, 21-24, 26, 29-30, 52, 55 | cuándo lista y cuándo tupla; registros con tuplas (Ej. 13); orden con `sorted` y `itemgetter` (Ej. 11); contar con `Counter` (Ej. 12) |
| Diccionarios, hashing y conjuntos | Cap. 4: "Hashing and dicts" (p.54-56), "Sets" (p.56); Ej. 14-17 (p.57-70); dict por comprensión Ej. 32, 33, 35a (p.131-139) | claves hashables, `dict.get`, acumular, diferencias entre dicts (Ej. 16), `set` para valores únicos (Ej. 17), subconjunto con `<` (Ej. 34, p.136) |
| Archivos, CSV y JSON | Cap. 5 (p.71-97); tabla 5.1 (p.72-73); Ej. 18 (p.73-77), Ej. 19 (p.78-80), Ej. 20 (p.81-84), Ej. 21 (p.85-87), Ej. 22 CSV (p.88-91), Ej. 23 JSON (p.91-95), Ej. 24 (p.95-97) | `with open`, iterar por líneas, `csv.reader`/`csv.writer`, `json.load`; también p.118 y p.72 mencionan `json`; el libro no usa pandas para leer datos |
| Funciones: argumentos, `*args`, `**kwargs`, alcance | Ej. 2 (p.8-10, `*args`), Cap. 6 (p.98-115): valores por defecto p.100-101, alcance y LEGB p.104-106, Ej. 25 `myxml` (p.101-105), Ej. 26 (p.107-111), Ej. 27 fábrica de funciones (p.111-115); `**kwargs` también en Ej. 37 (p.152-157) | por qué Python no sobrecarga funciones, parámetros por defecto, desempaque, `global`, cerraduras |
| Comprensiones y programación funcional | Cap. 7 (p.116-142): "Writing comprehensions" p.120; Ej. 28 (p.118-124), 29 (p.125-126), 30 (p.127-128), 31 (p.129-131), 32 (p.131-133), 33 (p.133-134), 34 (p.135-137), 35a/35b (p.137-141); `map` y `filter` p.123-125; `lambda` p.42-46 y p.133-134 | lista, dict y conjunto por comprensión; cuándo usar bucle y cuándo comprensión; expresión generadora en `sum(...)` (p.140) |
| Módulos y paquetes | Cap. 8 (p.143-157): `import` y variantes p.145-146; Ej. 36 (p.147-151); Ej. 37 (p.152-157); "Modules vs. packages" p.155; "Loading and reloading modules" p.151 | módulo como espacio de nombres, `__name__`, PyPI p.144-145, `__init__.py` p.156; NumPy aparece solo como ejemplo de alias (p.146, p.151) |
| Clases y objetos | Cap. 9 (p.158-196): apertura p.158-161; Ej. 38 (p.161-167), 39 (p.168-173), 40 (p.175-179), 41 (p.180-182), 42 (p.183-185), 43 (p.185-188), 44 (p.189-192), 45 (p.193-196) | `__init__`, `self` (p.163), `__repr__`, composición, atributos de clase, herencia, `super()`, `dataclass` (p.172), clases base abstractas (p.187), búsqueda de atributos (p.173) |
| Iteradores y generadores | Cap. 10 (p.197-213): protocolo p.197-199; generadores y `yield` p.200; tabla 10.1 p.201; Ej. 46 (p.202-204), 47 (p.204-206), 48 (p.207-208), 49 (p.209-211), 50 (p.211-213) | `__iter__`, `__next__`, `StopIteration`, iterable frente a iterador (p.202), función generadora, expresión generadora, `itertools.chain` |
| Bucles y contadores | Ej. 1 (`while`, p.2-7), Ej. 3 (promedio acumulado, p.11-13), Ej. 4 (`reversed`, `enumerate`, p.14-16), Ej. 12 (conteo de letras, p.46-49), Ej. 15 (acumular por clave, p.59-63), Ej. 20 (contadores en un archivo, p.81-84), Ej. 46 (reimplementar `enumerate`, p.202-204) | bucle `while True` con `break` (p.4-5, 58, 63), acumuladores `+=`, `range`, `enumerate` |

## Ejercicios que sirven como retos

No se copian los enunciados; son ideas para retos tipo "a mano" o "cazar el error" con datos aleatorios.

| Ej. | Impresa | Tipo | Por qué |
|---|---|---|---|
| 4 Hexadecimal output | 14-16 | a mano | convertir un número hexadecimal a decimal sumando potencias de 16; los dígitos A-F y el orden de potencias (de derecha a izquierda) son donde se equivoca la gente |
| 8 Sorting a string | 26-28 | cazar el error | desarrollo que usa `sorted` y olvida que devuelve una lista (o intenta ordenar la cadena "en su sitio"); enlaza con inmutabilidad |
| 9 First-last | 31-35 | cazar el error | una versión que devuelve índices en vez de rebanadas y falla con secuencias de largo 0 o 1; recuadro p.33 como pista |
| 10 Summing anything | 37-40 | cazar el error | línea que inicia el acumulador en 0 y revienta con cadenas o listas |
| 12 Word with most repeated letters | 46-49 | a mano | contar a papel qué letra se repite más en cada palabra y elegir la ganadora, con empates |
| 15 Rainfall | 59-63 | a mano | seguir el estado del dict paso a paso con una serie de entradas aleatorias de ciudad y milímetros |
| 16 Dictdiff | 64-68 | a mano | dados dos dicts pequeños, escribir el dict de diferencias; casos con clave ausente en un lado |
| 17 How many different numbers? | 68-70 | ojo clínico | decidir sin contar uno por uno cuántos valores distintos tiene una lista generada al azar, y qué cambia al ordenarla |
| 26 Prefix notation calculator | 107-111 | a mano | evaluar expresiones prefijas y comparar con infijas; cazar el error en una versión que lee mal el orden de los operandos (importa en resta y división) |
| 29 Add numbers | 125-126 | cazar el error | filtrado con `isdigit` que deja pasar o descarta mal elementos (por ejemplo, negativos o decimales) |
| 35b Gematria, part 2 | 139-141 | a mano | calcular el valor de una palabra con el dict 1-26 y buscar a mano otra con el mismo valor (cat = 24, p.140) |
| 47 Circle | 204-206 | a mano | predecir la secuencia que devuelve el iterador tras cada `next` y cuándo lanza `StopIteration`; sirve de traza para el paso a paso |

## Erratas e inconsistencias

- Ej. 31 (p.129): el enunciado dice "our plword function in chapter 2", pero en el cap. 2 la función se llama `pig_latin` (p.20) y `pl_sentence` (p.23); `plword` solo aparece en la solución del propio ej. 31 (p.130). Es un cambio de nombre, no un error de contenido. Verificado con búsqueda de texto.
- El contenido extraído muestra "Hashing and dicts 54" antes de "53" en el índice (PDF 8-9): es un efecto de la extracción del contenido, no de la página.
- No encontré erratas de fondo en las páginas leídas; la lectura fue de los enunciados, las introducciones y las secciones teóricas, no de cada línea de las 50 soluciones.

## No aparece

Verificado con búsqueda de texto sobre las páginas 1 a 214.

- NumPy: solo como ejemplo de alias `import numpy as np` (p.146) y mencionado de pasada en p.36 y p.151; no se usa en ningún ejercicio.
- pandas: solo mención de pasada (p.91, p.151); no hay ejercicios con DataFrames.
- Pruebas: no hay `unittest` ni `doctest`; `pytest` aparece en el prólogo (PDF 21, xix) y una vez en p.155 como herramienta; los ejercicios no se acompañan de pruebas en el texto (están en el repositorio de GitHub).
- f-strings: sí aparecen en todo el libro; hay un recuadro propio en p.7 ("f-strings") y otro sobre formato en p.12; no hay capítulo dedicado.
- Anotaciones de tipo: solo de pasada (p.163, p.172 con `dataclass` y `typing.List`, p.173); el libro no las enseña.
- Funciones recursivas: no hay un ejercicio de recursión.
- Expresiones regulares (`re`), manejo de excepciones como tema propio, `argparse` y `sys.argv`, concurrencia, decoradores y gestores de contexto escritos a mano: no aparecen como ejercicio (el contexto del `with` se menciona en la tabla 5.1, p.72).
- Matemática y estadística: ningún ejercicio es matemático más allá de promedios (Ej. 3, 23), hexadecimal (Ej. 4) y la gematria (Ej. 35); no hay álgebra lineal ni probabilidad.
