# Especificacion: Cadenas: secuencias inmutables (cadenas-inmutables)

- Ruta: `python-base`, orden 7, tanda 8. Area: Programacion con datos.
- Prerrequisitos: "Bucles y variables que cambian".
- Siguientes: "Índices, rebanadas y máscaras".
- Aparece: `[{ materia: "SM142002", ud: "UD1" }]`.
- Resumen del catalogo: "Un texto es una secuencia de caracteres que se recorre, se busca y se corta, pero no se modifica en su lugar."
- Fuente del catalogo: "Think Python cap. 8, Python Workout cap. 2".

## Imagen central

Una **tira de casillas selladas** con la palabra `modelo` (datos inventados), una letra por casilla, y a la izquierda una o
dos **etiquetas de nombre** (`s`, `t`) con flecha hacia la tira. Encima de cada casilla, el indice de Python (0 a 5); debajo,
el indice negativo (-6 a -1), que se enciende a partir del paso 2. Cada tira lleva en una esquina un numero de "objeto" (#1,
#2, ...) que la pagina asigna al crearla (no es `id()` real: es un contador de la pagina, y se dice).

La idea que se tiene que ver: **nada cambia dentro de una tira ya hecha**. Cada operacion que "modifica" el texto dibuja una
tira nueva debajo (con su numero de objeto nuevo) y, si hay asignacion, mueve la flecha del nombre. La tira vieja queda a la
vista, gris, mientras otro nombre la siga apuntando; si nadie la apunta, se desvanece.

Controles concretos (cambian por paso):
- Deslizador de indice `i` (de -6 a 6, incluido 6 para provocar el error): pinta la casilla `s[i]` en `--accent`. Si `i`
  vale 6, la casilla fantasma aparece en `--bad` con `IndexError`.
- Dos asas arrastrables que se colocan **entre** casillas (de 0 a 6) para la rebanada `s[a:b]`; lo elegido se copia a una
  tira nueva.
- Boton "Intentar `s[0] = 'M'`": la tira tiembla, aparece un candado sobre la casilla 0 y el mensaje real
  `TypeError: 'str' object does not support item assignment`.
- Boton "Construir `'M' + s[1:]`": dibuja la tira nueva `Modelo` (objeto #2) y una casilla de asignacion opcional "guardar
  en `s`" que mueve la flecha.
- Selector de metodo (`upper()`, `replace("o", "0")`, `find("e")`) con casilla "asignar el resultado". Sin asignar, la tira
  nueva aparece y se desvanece; `s` sigue igual.
- Contador de "tiras creadas" para el paso 7 (bucle que construye texto).
- Campo editable para cambiar la palabra (solo minusculas a-z, 3 a 8 letras) en los retos.

## Hipotesis inicial

"Tienes la palabra `modelo` guardada con el nombre `s`, y tambien le pusiste el nombre `t` a la misma palabra. Quieres que
diga `Modelo`, con mayuscula. ¿Se puede cambiar solo la primera letra? Y si cambias lo que dice `s`, ¿que crees que pasa con
`t`? Escribe tu idea."

## Pasos

### Paso 1. Letras de imprenta (prediccion sin simbolos)
- Idea: un texto en Python es como una palabra armada con sellos fijos sobre una tira; para corregirla se arma otra tira.
- Escenario: la tira `modelo` sin indices ni codigo, dos carteles con nombre ("cartel s", "cartel t") apuntando a ella. Un
  dibujo de la letra M esperando.
- Chequeo (prediccion antes de tocar, opcion multiple): "Quieres que el cartel s muestre `Modelo`. ¿Que pasa?"
  - Correcta: "Se arma una tira nueva con M al inicio y el cartel s pasa a apuntarla; el cartel t sigue mostrando `modelo`."
  - "Se cambia la letra en la misma tira y los dos carteles muestran `Modelo`": falla porque supone que la tira se puede
    tocar por dentro; eso pasa con las listas (pagina "Listas, mutabilidad y alias"), no con el texto.
  - "No se puede tener `Modelo` nunca": falla porque si se puede, construyendo otra tira.
  - "Se arma otra tira y los dos carteles se mueven a ella": falla porque solo se movio el cartel que reasignaste.
- Al resolver: se anima la construccion y la flecha de s se mueve; t queda en la tira vieja.

### Paso 2. Una secuencia con posiciones
- Idea: cada letra tiene una posicion que empieza en 0; `len(s)` cuenta letras; la ultima es `len(s) - 1` o `-1`.
- Escenario: se encienden los indices de arriba (0 a 5) y el deslizador `i`. Formula viva: `s[i]` = letra; `len(s)` = 6.
  En este paso los indices negativos se encienden al mover el deslizador por debajo de 0.
- Chequeo (calculo con datos en vivo, numerico/texto): "¿Que devuelve `s[len(s) - 1]`?" Respuesta: `o` (posicion 5).
  - Si escribe `l` (penultima): pista "empiezas a contar en 0: la sexta letra tiene indice 5".
  - Si contesta "error": pista "el error sale con `s[len(s)]`, que es la posicion 6, que no existe; aqui le restas 1".
- Cita: thinpython PDF 106-107 (A String Is a Sequence) y PDF 107 (len, `fruit[-1]`).

### Paso 3. Recorrer y contar
- Idea: un `for` visita las letras de una en una, en orden; con un contador se cuenta cuantas cumplen algo.
- Escenario: un cursor recorre la tira; debajo, una tabla de estado con dos columnas (`letra`, `cuenta`) que se llena fila
  por fila. Boton "letra buscada" (o, e, m). Se ve el codigo:
  `cuenta = 0` / `for letra in s:` / `if letra == "o":` / `cuenta = cuenta + 1`.
- Chequeo (prediccion antes de reproducir): "Con `s = 'modelo'` y la letra `o`, ¿cuantas veces se ejecuta
  `cuenta = cuenta + 1`?" Respuesta: 2. Distractores: 6 (confunde las vueltas del `for` con las del `if`); 1 (solo ve la
  primera o).
- Cita: thinpython PDF 107-108 (Traversal with a for Loop) y PDF 110-111 (Looping and Counting).

### Paso 4. Rebanadas: los indices van entre las letras
- Idea: `s[a:b]` copia desde la posicion `a` hasta antes de `b`; conviene imaginar los numeros entre las casillas.
- Escenario: las dos asas entre casillas (los numeros 0 a 6 se dibujan en las rendijas). Formula viva:
  `s[a:b]` = texto, `len` = `b - a`. Tira nueva debajo con lo copiado. Atajos `s[:b]`, `s[a:]`, `s[a:a]` (vacia).
  Las asas no muestran el texto resultante hasta que se resuelve el chequeo (antes, solo la tira resaltada sin texto).
- Chequeo (calculo): "¿Que es `s[1:4]`?" Respuesta: `ode`.
  - `odel`: "incluiste la posicion 4; el final de una rebanada no entra".
  - `mod`: "empezaste en 0; la rebanada empieza en la posicion 1, que es la `o`".
  - `ode` con mayuscula u otro: comparar sin espacios.
- Profundizar ("¿Y el tercer numero?"): `s[::2]` = `mdl`, `s[::-1]` = `oledom`; el paso puede ser negativo.
- Citas: thinpython PDF 108-109 (String Slices, Figure 8-1); pyworkout PDF 46 (recuadro Slices, p.20).

### Paso 5. No se puede tocar por dentro (TRAMPA y DESTACADO)
- Idea: `s[0] = "M"` da error; lo que si se puede es construir otra cadena y, si quieres, reasignar el nombre.
- Escenario: boton "Intentar `s[0] = 'M'`" (candado, tiembla, TypeError real). Luego boton "Construir `'M' + s[1:]`",
  casilla "guardar en s". Aparece `t = s` antes de todo, de modo que se ven dos etiquetas.
- `.destacado` con prediccion (la confusion natural, que Python Workout aclara en su recuadro): "inmutable no es lo mismo
  que constante". Pregunta previa: "Despues de `t = s` y `s = 'M' + s[1:]`, ¿que imprime `print(t)`?"
  - Correcta: `modelo`. El nombre `s` se reasigno a una tira nueva; `t` sigue en la vieja, que nadie cambio.
  - `Modelo`: "eso pasaria si la tira se hubiera cambiado por dentro, y eso es justo lo que Python prohibe".
  - Error: "reasignar un nombre siempre se puede; lo prohibido es asignar a una posicion".
- Chequeo del paso: el destacado mismo (eleccion con explicacion). Al resolver se muestra la cita de `#citaHipo` (la
  hipotesis inicial de Francisco) para que compare.
- Citas: thinpython PDF 109-110 (Strings Are Immutable, `'J' + greeting[1:]`); pyworkout PDF 47-48 (recuadro "Immutable?",
  p.21-22: por que Python lo hace, y el ejemplo `t = s` / `s = '!bcd'`).

### Paso 6. Los metodos devuelven otra cadena
- Idea: `s.upper()`, `s.replace(...)` no cambian `s`: crean una cadena nueva que se pierde si no la guardas.
- Escenario: selector de metodo y casilla "asignar el resultado". Sin asignar: tira nueva que aparece y se desvanece; `s`
  intacta. Con asignar: la flecha de `s` se mueve.
- Chequeo (prediccion): "Corre `s.upper()` y despues `print(s)`. ¿Que sale?" Respuesta: `modelo`.
  - `MODELO`: "`upper` no tiene a donde escribir: la cadena no se puede cambiar, asi que devuelve una nueva, y nadie la guardo".
  - Error: "la linea es valida; solo que su resultado se pierde".
- Cita: thinpython PDF 111-112 (String Methods); pyworkout PDF 52 (ejercicio 8, p.26: trabajar alrededor de la
  inmutabilidad creando cadenas nuevas, como lectura).

### Paso 7. Construir texto en un bucle (el mas tecnico)
- Idea: `r = r + letra` dentro de un bucle crea una cadena nueva en cada vuelta; armar una lista y unir con `"".join(...)`
  al final crea una sola. En R el texto es un vector `character` y cada elemento es una cadena entera: `nchar` cuenta letras,
  `length` cuenta elementos, `substr` corta (desde 1, con final incluido).
- Escenario: el contador "tiras creadas" sube con cada vuelta de `r = letra + r` (el codigo de la vida real) mientras la
  pila de tiras grises crece: `m`, `om`, `dom`, `edom`, `ledom`, `oledom`. Al lado, un panel R: `s <- "modelo"`,
  `nchar(s)` = 6, `length(s)` = 1, `substr(s, 2, 4)` = `"ode"`.
- Chequeo (calculo): "¿Cuantas cadenas nuevas asigna a `r` el bucle `for letra in s: r = letra + r` con `s = 'modelo'`?"
  Respuesta: 6. Distractores: 1 ("r es una sola variable, pero cada vuelta la apunta a una cadena distinta"); 7 ("la cadena
  vacia inicial ya existia antes del bucle").
- Profundizar ("¿Por que Python no deja cambiar el texto?"): las cadenas son las claves de diccionario mas comunes y una clave
  no puede cambiar (enlace a "Diccionarios, conjuntos y hash"); ademas, una funcion que recibe texto no puede danarlo. Nota:
  CPython a veces reutiliza la memoria de `r` en `r += letra` como optimizacion interna, pero el modelo correcto sigue siendo
  "cadena nueva"; no se demuestra con `id()` porque el resultado depende de la implementacion.
- Citas: pyworkout PDF 49 (p.23: `+=` sobre cadenas frente a `list.append` y `str.join`); prog4 PDF 5 (vector `character`,
  `Caracter <- "ab"`).

## Vida real (Python y R)

Mismos datos: `s = "modelo"`. Algoritmo: invertir el texto letra por letra con un bucle explicito, comparar contra la forma
idiomatica (`s[::-1]` en Python, `rev` + `paste` en R) y comprobar que el alias `t` no cambio.

Python (corrido con Python 3.13.5):
```
crea:    s = "modelo"
alias:   t = s
vacia:   r = ""
recorre: for letra in s:
antepone:    r = letra + r
imprime: print(r)
compara: print(r == s[::-1])
alias2:  print(t)
```
Codigo literal (sin los ids):
```python
s = "modelo"
t = s
r = ""
for letra in s:
    r = letra + r
print(r)
print(r == s[::-1])
print(t)
```
Salida real:
```
oledom
True
modelo
```

R (corrido con R 4.6.1):
```r
s <- "modelo"
t <- s
r <- ""
for (letra in strsplit(s, "")[[1]]) {
  r <- paste0(letra, r)
}
print(r)
print(r == paste(rev(strsplit(s, "")[[1]]), collapse = ""))
print(t)
```
Ids por linea: `crea`, `alias`, `vacia`, `recorre`, `antepone`, (la llave `}` no lleva id o comparte `recorre`), `imprime`,
`compara`, `alias2`.
Salida real:
```
[1] "oledom"
[1] TRUE
[1] "modelo"
```

Foto de estado por linea ejecutada (16 eventos: 3 iniciales, 6 vueltas de `recorre` + `antepone`, 3 finales):

| evento | linea | letra | indice de la vuelta (py / R) | r |
|---|---|---|---|---|
| 1 | crea | - | - | (no existe) |
| 2 | alias | - | - | (no existe), `t` apunta a la misma cadena que `s` |
| 3 | vacia | - | - | `""` |
| 4-5 | recorre / antepone | m | 0 / 1 | `"m"` |
| 6-7 | recorre / antepone | o | 1 / 2 | `"om"` |
| 8-9 | recorre / antepone | d | 2 / 3 | `"dom"` |
| 10-11 | recorre / antepone | e | 3 / 4 | `"edom"` |
| 12-13 | recorre / antepone | l | 4 / 5 | `"ledom"` |
| 14-15 | recorre / antepone | o | 5 / 6 | `"oledom"` |
| 16-18 | imprime, compara, alias2 | - | - | sale `oledom`, `True`/`TRUE`, `modelo` |

Visual: la tira de `s` arriba con el cursor en la letra de la vuelta (indice con `ctx.ix`: desde 0 en Python, desde 1 en R),
y debajo la pila de tiras de `r` (cada vuelta agrega una tira nueva; la anterior queda gris). Contador "cadenas creadas".

Prediccion antes de reproducir (`#vrPred`): "¿Cuantas veces se ejecuta la linea `antepone`?" Respuesta: 6 (una por letra).
Distractor 1: "una sola vez" (pista: esta dentro del `for`). Distractor 5: (pista: `len("modelo")` es 6).

`p.vr-nota`: en Python la version de una linea es `s[::-1]`; en R, `paste(rev(strsplit(s, "")[[1]]), collapse = "")`
(o `stringi::stri_reverse(s)`, que no se usa aqui).
`details.profundizar`: en R `strsplit(s, "")` devuelve una **lista** con un vector dentro, por eso el `[[1]]`; en Python
`list(s)` da la lista de letras y `"".join(...)` las vuelve a pegar.

Trampas reales (retos `codigo1` a `codigo3`, codigo y salida reales):
- `codigo1` (Python): asignar a una posicion.
  ```python
  s = "modelo"
  s[0] = "M"
  ```
  Ultima linea de la salida: `TypeError: 'str' object does not support item assignment`.
  Pregunta: "¿Que linea arregla esto para obtener `Modelo`?" Correcta: `s = "M" + s[1:]`. Distractores: `s[0:1] = "M"`
  (tambien es asignacion a una parte: mismo error), `s.replace("m", "M")` sin asignar (no guarda nada, y ademas cambiaria
  todas las `m`).
- `codigo2` (Python): el metodo cuyo resultado se pierde.
  ```python
  s = "modelo"
  s.upper()
  print(s)
  ```
  Salida real: `modelo`. Pregunta: "¿Por que no salio en mayusculas?" Correcta: "upper devolvio una cadena nueva que nadie
  guardo". Distractores: "upper solo funciona dentro de print" (falso), "hay que llamar `s.upper` sin parentesis" (eso no
  ejecuta el metodo).
- `codigo3` (R): `substr<-` parece cambiar el texto por dentro.
  ```r
  s <- "modelo"
  t <- s
  substr(s, 1, 1) <- "XY"
  print(s)
  print(t)
  ```
  Salida real:
  ```
  [1] "Xodelo"
  [1] "modelo"
  ```
  Dos sorpresas: R deja escribir esta forma (en Python no se puede), pero por debajo arma un texto nuevo y lo vuelve a guardar
  en `s`, por eso `t` no cambia; y `substr<-` solo reemplaza tantas letras como el tramo pedido (1), asi que la `Y` se pierde.
  Pregunta: "¿Que imprime `print(t)`?" Correcta `"modelo"`; distractor `"Xodelo"` (pista: en R asignar a una parte copia).

## Retos (11 ids: 8 de esta seccion mas codigo1 a codigo3)

1. `ojo` (ojo clinico, 5 rondas al azar, aprueba con 4 de 5): se muestra una linea sobre una palabra al azar de
   `["modelo", "tensor", "dato", "matriz", "vector", "grafo"]`: una de `s[i] = "X"`, `s = s + "X"`, `s.upper()`,
   `s = s.upper()`, `s.replace("a", "o")`, `s[1:3]`. Pregunta: "¿Da error, deja `s` igual o cambia a que apunta `s`?"
   Respuesta: asignacion a posicion = error; asignacion `s = ...` = cambia a que apunta; metodo o rebanada sin asignar =
   deja `s` igual.
2. `construir` (construir): con las asas de rebanada y el boton "concatenar", fabricar `Modelo`, luego `mode`, luego
   `delo` a partir de `modelo` usando solo rebanadas y `+` (el escenario cuenta tiras creadas). Objetivos: los tres textos
   aparecen; el ultimo con una sola rebanada (`s[2:]`).
3. `amano1` (a mano, datos al azar): palabra al azar de 5 a 7 letras y dos numeros `a < b`; escribir `s[a:b]`. Pistas
   escalonadas: (1) "dibuja los numeros entre las letras", (2) "la rebanada tiene `b - a` letras", (3) muestra la tira con
   las rendijas numeradas. Reintentable.
4. `amano2` (a mano): palabra al azar e indice negativo `-k` (1 a longitud); escribir `s[-k]` y su indice positivo
   equivalente (`len(s) - k`). Pistas: (1) "-1 es la ultima", (2) "suma len(s) al indice negativo".
5. `contar` (a mano, inspirado en el patron contador de Think Python, no copiado): frase corta al azar (3 palabras de la
   lista) y una letra; contar cuantas veces aparece. Pistas: (1) "recorre una letra por vez", (2) resalta las coincidencias
   de la primera palabra.
6. `cazar` (cazar el error, 3 variantes, una linea mal): funcion que pone en mayuscula la primera letra.
   - Variante A: `s[0] = s[0].upper()` (error: asignacion a posicion). Correcta: `s = s[0].upper() + s[1:]`.
   - Variante B: `return s[0].upper() + s[2:]` (se come la segunda letra).
   - Variante C: `s.upper()` en una linea suelta y luego `return s` (resultado perdido).
   Cada una con 4 lineas; Francisco marca la mala y elige la explicacion.
7. `prop` (propiedades, opcion multiple, `mezclar: true`, reintentable): "¿Cual de estas afirmaciones es verdadera?"
   - Correcta: "`t = s` hace que dos nombres apunten a la misma cadena, y eso no es peligroso porque nadie puede cambiarla."
   - "inmutable significa que `s` no se puede reasignar" (pista: el destacado del paso 5).
   - "`s.replace('o', '0')` cambia `s`" (pista: paso 6).
   - "en R, `substr(s, 1, 1) <- 'M'` cambia tambien `t` si `t <- s`" (pista: trampa `codigo3`).
8. `bucle` (prediccion con datos al azar): palabra al azar de n letras; "¿cuantas cadenas nuevas se asignan en
   `for letra in s: r = r + letra`?" Respuesta n. Pista: "una por vuelta".
9. Mas `codigo1`, `codigo2`, `codigo3` (vida real), registrados tambien en `RETOS`.

Lecturas de inspiracion (citar, no copiar): Python Workout ejercicio 7 Ubbi Dubbi (PDF 50-51, p.24-25) y ejercicio 8 Sorting
a string (PDF 52-54, p.26-28); Think Python ejercicio 8-4 (`any_lowercase1..5`, PDF 116-118, p.95-97) como modelo de "cazar
el error".

## Memoria

`B.ordenar` (armar la linea que pone mayuscula inicial sin romper la inmutabilidad): piezas en orden
`s` · `=` · `s[0].upper()` · `+` · `s[1:]`.
Distractores: `s[0] =` (asignacion a una posicion, da error), `s[0:]` (repetiria la palabra entera), `s.upper()` (pondria todo en mayusculas).

Tarjetas (7):
1. ¿Desde que numero cuenta Python las posiciones de una cadena? / Desde 0; la ultima es `len(s) - 1` o `-1`.
2. ¿Que devuelve `s[a:b]`? / Una cadena nueva con las letras de `a` hasta antes de `b`; tiene `b - a` letras.
3. ¿Que pasa con `s[0] = "M"`? / `TypeError`: las cadenas son inmutables.
4. ¿Inmutable es lo mismo que constante? / No: el nombre se puede reasignar; lo que no se puede es cambiar la cadena por dentro.
5. ¿Por que `s.upper()` solo no hace nada visible? / Devuelve una cadena nueva; hay que guardarla: `s = s.upper()`.
6. ¿Por que conviene `"".join(lista)` para armar textos largos? / Porque `r = r + x` crea una cadena nueva en cada vuelta.
7. En R, ¿que miden `nchar(s)` y `length(s)`? / Letras del texto y numero de elementos del vector (1 para un solo texto).

## Citas (12)

| fuente | pag PDF | pag impresa | seccion | que hay | cuando leerla |
|---|---|---|---|---|---|
| thinpython | 106 | 85 | Cap. 8: A String Is a Sequence | `fruit[1]` da `'a'`: las posiciones empiezan en 0 | Paso 2 |
| thinpython | 107 | 86 | Cap. 8: len | `len(fruit)`, la ultima letra con `len - 1` o `-1`, IndexError | Paso 2, despues del chequeo |
| thinpython | 108 | 87 | Cap. 8: Traversal with a for Loop | recorrer con `while` y con `for letter in fruit` | Paso 3 |
| thinpython | 110 | 89 | Cap. 8: Looping and Counting | el patron contador sobre una palabra | Paso 3, despues del chequeo |
| thinpython | 109 | 88 | Cap. 8: String Slices | `s[0:5]`, Figure 8-1 con los indices entre las letras | Paso 4 |
| thinpython | 110 | 89 | Cap. 8: Strings Are Immutable | `greeting[0] = 'J'` da TypeError y la salida `'J' + greeting[1:]` | Paso 5 |
| thinpython | 111 | 90 | Cap. 8: String Methods | `upper` y `find` devuelven valores nuevos; metodo frente a funcion | Paso 6 |
| pyworkout | 46 | 20 | Cap. 2, recuadro Slices | rebanadas en todas las secuencias, con paso (`s[2:6:2]`) | Paso 4, profundizar |
| pyworkout | 47 | 21 | Cap. 2, recuadro "Immutable?" | por que Python hace inmutables las cadenas (claves de dict) y que inmutable no es constante | Destacado del paso 5 |
| pyworkout | 48 | 22 | Cap. 2, recuadro "Immutable?" (continuacion) | el ejemplo `t = s` y luego `s` reasignado: `t` conserva el texto viejo | Destacado del paso 5 |
| pyworkout | 49 | 23 | Ej. 6, Working it out | `+=` sobre cadenas crea objetos nuevos; mejor `append` y `join` | Paso 7 |
| prog4 | 5 | 5 | 3.1. Vectores atomicos | el tipo `character` de R (`Caracter <- "ab"`) | Paso 7, panel R |

Notas de verificacion: thinpython PDF = impresa + 21 (comprobadas a mano con `pdftotext`: PDF 106 abre A String Is a Sequence,
la 109 tiene `s[0:5]` y la Figure 8-1, el titulo Strings Are Immutable esta al pie de la 109 y su ejemplo `'J' + greeting[1:]`
en la 110, Looping and Counting empieza en la 110 y String Methods en la 111). Las de pyworkout (PDF 46, 47,
48, 49) se leyeron con `pdftotext`. Lecturas para los retos (sin cita obligatoria en un paso): pyworkout PDF 50-51 (Ej. 7),
PDF 52-54 (Ej. 8); thinpython PDF 116-118 (ejercicios cap. 8).

## Riesgos y notas para quien construye

- El material del master (prog1) no explica cadenas de Python; la teoria de UD1 no tiene codigo. Decirlo en la pagina:
  "esto no viene en el material de la unidad; los libros de referencia que el resumen recomienda son Think Python y Python Workout".
- No usar `id()` ni `is` con cadenas para "demostrar" algo: CPython interna cadenas cortas (Think Python PDF 136 muestra
  `a is b` True con `'banana'`), y el resultado depende de la implementacion. El numero de objeto del escenario es un contador
  de la pagina y se dice asi.
- En R, `substr<-` y `toupper` funcionan por elemento de un vector `character`; `substr(s, 1, 1) <- "XY"` solo usa la `X`.
  Indices de R desde 1 y final incluido: `substr(s, 2, 4)` = `"ode"` equivale a `s[1:4]` de Python. Mostrar los dos.
- `strsplit(s, "")[[1]]` usa doble corchete porque devuelve una lista: no explicarlo a fondo aqui (va en "Listas y data frames").
- Validar las entradas libres (rebanada escrita): comparar sin comillas y sin espacios; aceptar `'ode'` y `"ode"`.
- La palabra editable de los retos solo con minusculas a-z para que las cuentas y la pila de tiras quepan a 375 px (maximo 8 letras).
