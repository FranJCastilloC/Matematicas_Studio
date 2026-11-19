# Especificacion: Índices, rebanadas y máscaras (indices-rebanadas)

- Ruta: `python-base`, orden 8, tanda 8; tambien en `numpy` (orden 2) y `r-base` (orden 3). Area: Programacion con datos.
- Prerrequisitos: "Tipos y coerción", "Cadenas: secuencias inmutables".
- Siguientes: "Bucle frente a vectorización", "Listas y data frames", "Listas, mutabilidad y alias".
- Aparece: `[{ materia: "SM142002", ud: "UD1" }, { materia: "SM142002", ud: "UD2" }]`.
- Resumen: "Escoger partes de una colección por posición, por rango o por condición."
- Fuente del catalogo: "Programación y entorno de trabajo (SM142002), UD1, UD4 y UD5".
- Esta pagina ensena los dos lenguajes lado a lado: Python cuenta desde 0 y su rebanada excluye el final; R cuenta desde 1 y su
  rango incluye el final.

## Imagen central

Una **tira de 6 casillas** con los datos inventados `x = [12, 30, 7, 25, 41, 18]` (por ejemplo, minutos de estudio de seis
dias). Encima de cada casilla, la **regla de Python** (0 a 5, en `--j`); debajo, la **regla de R** (1 a 6, en `--k`). Abajo de
la tira, dos **cajas de resultado** lado a lado: "Python" y "R", cada una con la expresion escrita en su lenguaje y el valor que
devuelve. Las casillas elegidas se pintan en `--accent`; las quitadas, tachadas.

Cuatro modos de seleccion (un selector de pestanas, que se habilita segun el paso):
1. **Posicion**: clic en una casilla. Python muestra `x[i]`, R muestra `x[i + 1]`.
2. **Rebanada**: dos asas arrastrables en las rendijas entre casillas. Python muestra `x[a:b]` (las rendijas numeradas 0 a 6);
   R muestra `x[(a+1):b]` (los numeros de casilla del primero y el ultimo elegidos). Se ve que en R el segundo numero coincide
   con la ultima casilla elegida y en Python con la rendija despues de ella.
3. **Posiciones sueltas**: clic para encender varias casillas en el orden que quieras. R: `x[c(1, 3)]`; Python con lista:
   `[x[i] for i in [0, 2]]`, y con NumPy `a[[0, 2]]`. Un interruptor "quitar en vez de elegir" muestra `x[-c(1, 3)]` en R (en
   Python no hay equivalente directo: la caja dice "no existe con lista; se filtra con un bucle o `np.delete`").
4. **Mascara**: un deslizador de umbral `u` (de 0 a 45, paso 1) y un selector de comparacion (`>`, `<`, `==`). Aparece una
   tercera fila bajo la tira con `TRUE/FALSE` (R) o `True/False` (Python) por casilla, y la seleccion sigue a la fila. Cajas:
   R `x[x > u]`, Python `a[a > u]` (NumPy).

Un boton "ir fuera de la tira" (en el paso 7) agrega una casilla fantasma en la posicion 10 / 11.

## Hipotesis inicial

"En una fila de seis casilleros, alguien te pide 'el casillero 2' y otra persona te pide 'los casilleros del 1 al 3'. ¿Cuales
le darias a cada uno? ¿Crees que todas las personas (y todos los lenguajes) cuentan igual? Escribe tu idea."

## Pasos

### Paso 1. ¿Desde donde se cuenta? (prediccion sin simbolos)
- Idea: hay dos convenciones para numerar: contar casillas (1, 2, 3...) o contar distancia desde el inicio (0, 1, 2...).
- Escenario: la tira con los numeros dentro, sin reglas. Dos personajes en texto: "Ana cuenta casillas" y "Beto cuenta
  cuantos pasos hay desde el inicio".
- Chequeo (prediccion antes de ver las reglas): "Beto dice 'dame el de la posicion 2'. ¿Que numero le das?"
  - Correcta: 7 (a dos pasos del inicio: 12 esta a 0 pasos, 30 a 1, 7 a 2).
  - 30: "ese es el segundo casillero contando como Ana; Beto cuenta pasos desde el inicio".
  - 25: "contaste tres pasos".
- Al resolver se encienden las dos reglas: "Beto cuenta como Python; Ana como R". Ningun simbolo de codigo todavia.

### Paso 2. Una posicion en cada lenguaje
- Idea: el mismo elemento tiene indice `i` en Python e `i + 1` en R.
- Escenario: modo Posicion. Las cajas muestran `x[2]` → `7` y `x[3]` → `7`. Al hacer clic en otra casilla, cambian las dos.
- Chequeo (calculo con datos en vivo): la pagina elige una casilla al azar y la pinta; "escribe el indice en Python y en R".
  Respuesta: `k` y `k + 1`. Si invierte los dos: pista "Python es la regla de arriba, la que empieza en 0".
- Citas: thinpython PDF 106 (indices desde 0); prog4 PDF 10 ("en R la primera posicion de un array es uno, no cero").

### Paso 3. Rebanada: un tramo seguido
- Idea: Python `x[a:b]` toma desde la casilla `a` hasta antes de `b` (los numeros van en las rendijas; quedan `b - a`
  elementos); R `x[i:j]` toma de la casilla `i` a la `j`, ambas incluidas (quedan `j - i + 1`).
- Escenario: modo Rebanada; las asas empiezan en las rendijas 1 y 4. Formula viva: Python `x[1:4]` con `len = 4 - 1 = 3`;
  R `x[2:4]` con `4 - 2 + 1 = 3`. El valor elegido no se escribe en las cajas hasta resolver el chequeo (solo se pintan las
  casillas).
- Chequeo (calculo): "¿Que devuelve `x[1:4]` en Python? ¿Y que escribes en R para obtener lo mismo?"
  Respuesta: `[30, 7, 25]` y `x[2:4]`.
  - `[30, 7, 25, 41]`: "incluiste la posicion 4; en Python el final de la rebanada no entra".
  - R `x[1:4]`: "eso empieza en 12: en R el primero es 1".
  - R `x[2:5]`: "en R el final si entra; con 5 te llevarias tambien el 41".
- Profundizar ("¿Y el paso?"): Python `x[::2]` = `[12, 7, 41]` y `x[::-1]` invierte; R usa `x[seq(1, 6, by = 2)]` y `rev(x)`.
- Citas: thinpython PDF 131 (List Slices, `t[1:3]`, `t[:]`); prog4 PDF 10 ("Varios elementos seguidos (slice)", `vector_5[1:3]`);
  pyworkout PDF 46 (recuadro Slices, p.20).

### Paso 4. Posiciones sueltas
- Idea: en R se puede pedir una lista de posiciones, en el orden que quieras: `x[c(3, 1)]` da `7 12`. Una lista de Python no
  acepta una lista de indices; NumPy si (`a[[2, 0]]`).
- Escenario: modo Posiciones sueltas. Al hacer clic en la casilla 3 y luego en la 1 (numeracion R), aparece una tira pequena
  con el resultado en ese orden.
- Chequeo (eleccion con explicacion): "¿Cual de estas lineas de Python, con `x` como lista, da `[7, 12]`?"
  - Correcta: `[x[i] for i in [2, 0]]` (una posicion por vez, en el orden pedido).
  - `x[[2, 0]]`: "una lista de Python no acepta una lista como indice: da TypeError; eso funciona con un array de NumPy".
  - `x[2:0]`: "es una rebanada vacia: de 2 hacia la derecha hasta antes de 0 no hay nada".
- Cita: prog4 PDF 10 (`vector_5[c(3,1)]` da `5.5 1.0`); prog4html ancla `subconjuntos` (`x[c(1,3,5)]`).

### Paso 5. El signo menos no significa lo mismo (TRAMPA)
- Idea: en Python `x[-1]` cuenta desde el final (es el ultimo, 18). En R `x[-1]` **quita** el primero y devuelve los otros 5.
- Escenario: un boton "-1" que dispara las dos interpretaciones a la vez: arriba, la flecha de Python apunta a la ultima
  casilla; abajo, en R, la primera casilla se tacha y el resto se ilumina. Interruptor "quitar" del modo 3: `x[-c(1, 3)]`.
- Chequeo (prediccion): "¿Que devuelve `x[-1]` en cada lenguaje?" Respuesta: Python `18`; R `30 7 25 41 18`.
  - "18 en los dos": "en R un indice negativo quita esa casilla".
  - "Python da error": "en Python los negativos cuentan desde el final; `-1` es el ultimo".
- Cita: prog4 PDF 11 (`vector_5[-c(1,3)]`); thinpython PDF 107 (len y `fruit[-1]`).

### Paso 6. Mascara: elegir por condicion (DESTACADO)
- Idea: una condicion produce una fila de verdadero o falso del mismo largo que la tira; al usarla como indice se quedan los
  elementos con verdadero. Es el filtro de los data frames (`mtcars[mtcars$cyl == 6, ]`) y de pandas.
- Escenario: modo Mascara con `u = 20` y `>`. Aparece la fila `F T F T T F`. Las cajas: R `x[x > 20]`, Python NumPy `a[a > 20]`.
  El resultado no se escribe hasta resolver.
- `.destacado` con prediccion (la confusion natural): "La mascara, ¿devuelve las posiciones o los valores?" Pregunta: "¿Que
  devuelve `x[x > 20]`?"
  - Correcta: `30 25 41` (los valores). Las posiciones salen con `which(x > 20)` en R (`2 4 5`) y con
    `np.nonzero(a > 20)[0]` en Python (`[1 3 4]`), cada uno con su regla.
  - `2 4 5`: "esas son las posiciones en R: lo da `which`, no el corchete".
  - `TRUE` o `3`: "`sum(x > 20)` cuenta los verdaderos: 3. El corchete devuelve los elementos".
- Chequeo del paso: el destacado. Luego, calculo con datos en vivo: Francisco mueve `u`; "¿cuantos elementos quedan con
  `x > u`?" se responde y se compara con `sum(x > u)`.
- Profundizar ("¿Por que la mascara no funciona con una lista de Python?"): `x > 20` con lista compara la lista entera con un
  numero y da TypeError; NumPy y pandas comparan elemento por elemento (operacion vectorizada, enlace a "Bucle frente a
  vectorización").
- Citas: prog4 PDF 11 (`vector_5[c(TRUE, FALSE, FALSE, TRUE, FALSE)]` y `vector_5[vector_5 < 5]`); prog4 PDF 22
  (`mtcars[mtcars$cyl > 4 & mtcars$hp > 100, ]`); prog4html ancla `subconjuntos` (`x[x > 25]`, `x[-(2:4)]`).

### Paso 7. Fuera de la tira (el mas tecnico)
- Idea: pedir una posicion que no existe se trata distinto: Python `x[10]` da `IndexError`, pero la rebanada `x[4:100]` se
  recorta sin quejarse (`[41, 18]`); R `x[10]` da `NA` sin error, y `x[0]` da un vector vacio (`numeric(0)`). Tambien: una
  mascara mas corta que la tira se **recicla** en R sin aviso (`x[c(TRUE, FALSE)]` da `12 7 41`).
- Escenario: boton "ir fuera de la tira": casilla fantasma 10 (Python) / 11 (R). Cajas con los cuatro resultados reales.
- Chequeo (eleccion con explicacion): "¿Cual de estas lineas NO da error ni NA?"
  - Correcta: Python `x[4:100]` (las rebanadas se recortan al borde).
  - Python `x[10]`: "una posicion suelta fuera de rango si da IndexError".
  - R `x[10]`: "no da error, pero devuelve NA: un hueco que despues contamina las cuentas".
- Profundizar ("Rebanada que copia, rebanada que mira"): `x[1:4]` de una lista de Python es una copia; `a[1:4]` de NumPy es una
  vista sobre los mismos datos (cambiarla cambia `a`). Esto lleva a "Listas, mutabilidad y alias".
- Citas: pyworkout PDF 59 (recuadro "Staying in bounds", p.33: `s[5]` da error, `s[3:100]` no); thinpython PDF 130
  (Lists Are Mutable: indice fuera de rango da IndexError).

## Vida real (Python y R)

Mismos datos `x = [12, 30, 7, 25, 41, 18]`, umbral 20. Algoritmo: construir la mascara con un bucle, luego recorrer las
posiciones y quedarse con las que tienen verdadero; cerrar con la forma de libreria (`a[a > 20]` en NumPy, `x[x > 20]` en R).

Ids compartidos: `datos`, `vacia1`, `recorre1`, `compara`, `vacia2`, `recorre2`, `si`, `agrega`, `imp1`, `imp2`,
`libreria` (en Python `libreria` ocupa dos lineas: `a = np.array(x)` con id `arreglo` y `print(a[a > 20])` con id
`libreria`; en R la linea `arreglo` no existe y la foto la salta). El `import numpy as np` lleva id `importa` (solo Python).

Python (Python 3.13.5, NumPy 2.1.3):
```python
import numpy as np
x = [12, 30, 7, 25, 41, 18]
mascara = []
for v in x:
    mascara.append(v > 20)
elegidos = []
for i in range(len(x)):
    if mascara[i]:
        elegidos.append(x[i])
print(mascara)
print(elegidos)
a = np.array(x)
print(a[a > 20])
```
Salida real:
```
[False, True, False, True, True, False]
[30, 25, 41]
[30 25 41]
```

R (R 4.6.1):
```r
x <- c(12, 30, 7, 25, 41, 18)
mascara <- c()
for (v in x) {
  mascara <- c(mascara, v > 20)
}
elegidos <- c()
for (i in seq_along(x)) {
  if (mascara[i]) {
    elegidos <- c(elegidos, x[i])
  }
}
print(mascara)
print(elegidos)
print(x[x > 20])
```
Salida real:
```
[1] FALSE  TRUE FALSE  TRUE  TRUE FALSE
[1] 30 25 41
[1] 30 25 41
```
Mapa de ids en R: `datos` (x), `vacia1` (mascara <- c()), `recorre1` (for v), `compara` (mascara <- c(...)), `vacia2`,
`recorre2` (for i), `si` (if), `agrega` (elegidos <- c(...)), `imp1`, `imp2`, `libreria`. Las llaves de cierre no llevan id.

Foto de estado por linea ejecutada (resumen; la pagina precalcula una foto por evento):

| tramo | linea | i (py / R) | v o x[i] | mascara | elegidos |
|---|---|---|---|---|---|
| inicio | datos, vacia1 | - | - | `[]` | (no existe) |
| vuelta 1-6 | recorre1, compara | - | 12, 30, 7, 25, 41, 18 | crece: F, T, F, T, T, F | - |
| | vacia2 | - | - | completa | `[]` |
| vuelta i | recorre2, si | 0..5 / 1..6 | x[i] | - | sin cambio |
| solo si mascara[i] | agrega | 1, 3, 4 / 2, 4, 5 | 30, 25, 41 | - | `[30]`, `[30, 25]`, `[30, 25, 41]` |
| final | imp1, imp2, (arreglo), libreria | - | - | - | se imprime |

Visual: la tira con las dos reglas; en el primer bucle se llena la fila de la mascara casilla por casilla; en el segundo, un
cursor recorre las posiciones (etiqueta con `ctx.ix`: 0..5 en Python, 1..6 en R) y las casillas con verdadero saltan a una
tira de "elegidos".

Prediccion antes de reproducir (`#vrPred`): "¿Cuantas veces se ejecuta la linea `agrega`?" Respuesta: 3 (una por cada
verdadero). Distractor 6: "esta dentro del `if`: solo corre cuando la mascara es verdadera". Distractor 12: "son dos bucles de 6,
pero `agrega` esta solo en el segundo".

`p.vr-nota`: con NumPy, `a[a > 20]`; con R base, `x[x > 20]`; en pandas, `df[df["col"] > 20]` (lo que hace el cuaderno de clase
UAX_20251028, celda 14, y que no se cita como chip porque los cuadernos no estan registrados en `fuentes.js`).
`details.profundizar` (version vectorizada): `x > 20` ya es la mascara completa en R y en NumPy; el bucle de arriba es lo que la
libreria hace por dentro, en C.

Trampas reales (codigo y salida reales):
- `codigo1` (Python frente a R): el mismo `x[-1]`.
  Python:
  ```python
  x = [12, 30, 7, 25, 41, 18]
  print(x[-1])
  ```
  Salida: `18`.
  R:
  ```r
  x <- c(12, 30, 7, 25, 41, 18)
  print(x[-1])
  ```
  Salida: `[1] 30  7 25 41 18`.
  Pregunta: "¿Que linea de R da el ultimo elemento, como `x[-1]` en Python?" Correcta `x[length(x)]`; distractores `x[-1]`
  (quita el primero), `x[0]` (vector vacio).
- `codigo2` (Python): mascara sobre una lista.
  ```python
  x = [12, 30, 7, 25, 41, 18]
  print(x[x > 20])
  ```
  Ultima linea de la salida: `TypeError: '>' not supported between instances of 'list' and 'int'`.
  Pregunta: "¿Que arreglo funciona?" Correcta: convertir con `a = np.array(x)` y usar `a[a > 20]`. Distractores: `x[x > [20]]`
  (compara listas enteras y da un solo booleano), `x[20:]` (rebanada vacia: no hay posicion 20).
- `codigo3` (R): la mascara corta se recicla sin aviso.
  ```r
  x <- c(12, 30, 7, 25, 41, 18)
  print(x[c(TRUE, FALSE)])
  ```
  Salida: `[1] 12  7 41`.
  Pregunta: "¿Por que salen tres valores si la mascara tiene dos?" Correcta: "R repite la mascara hasta cubrir los 6
  elementos: T F T F T F". Distractores: "toma solo las dos primeras posiciones" (daria solo 12), "es un error de R" (no
  avisa nada).

Otras salidas reales para el recorrido (verificadas): Python `x[2]` = 7, `x[1:4]` = `[30, 7, 25]`, `x[4:100]` = `[41, 18]`,
`x[::2]` = `[12, 7, 41]`, `x[::-1]` = `[18, 41, 25, 7, 30, 12]`, `x[3:3]` = `[]`, `x[10]` = `IndexError: list index out of range`,
NumPy `a[[0, 2]]` = `[12  7]`, `np.nonzero(a > 20)[0]` = `[1 3 4]`, `(a > 20).sum()` = 3. R `x[3]` = 7, `x[2:4]` = `30  7 25`,
`x[c(1,3)]` = `12  7`, `x[-c(1,3)]` = `30 25 41 18`, `which(x > 20)` = `2 4 5`, `x[10]` = `NA`, `x[0]` = `numeric(0)`,
`sum(x > 20)` = 3.

## Retos (12 ids: 9 de esta seccion mas codigo1 a codigo3)

1. `ojo` (ojo clinico, 5 rondas al azar, 4 de 5): tira aleatoria de 6 enteros (5 a 50) y una expresion al azar entre
   `x[i]`, `x[a:b]`, `x[-1]`, `x[c(i, j)]`, `x[x > u]`, con etiqueta "Python" o "R". "¿Cuantos elementos devuelve?" (0 a 6,
   o "error"). Respuestas calculadas con las reglas de cada lenguaje.
2. `traducir` (a mano): una rebanada de Python al azar `x[a:b]` (0 <= a < b <= 6); escribir la equivalente en R. Respuesta
   `x[(a+1):b]`. Pistas: (1) "el primero se corre en 1", (2) "el ultimo elegido en Python es `b - 1`; en R es `b`", (3) muestra
   las dos reglas.
3. `traducir2` (a mano, al reves): un rango de R `x[i:j]`; escribir la rebanada de Python `x[(i-1):j]`.
4. `construir1` (construir): datos al azar; la pagina pide en tres rondas "los tres del medio", "los dos ultimos" y "todos
   menos el primero". Francisco usa las asas o el interruptor "quitar"; la caja muestra la expresion en los dos lenguajes
   (por ejemplo, Python `x[1:]` y R `x[-1]` para la tercera). Cada ronda se cumple cuando el resultado coincide.
5. `construir2` (construir la mascara): elegir comparacion y umbral para que queden exactamente los valores pedidos (por
   ejemplo, con datos al azar: "solo los mayores que la mediana", "solo el maximo"). Valida por el conjunto resultante.
6. `contar` (a mano): tira aleatoria y umbral `u`; escribir `sum(x > u)` y `which(x > u)` (R). Pistas: (1) escribe la fila
   T/F, (2) los TRUE valen 1 al sumar, (3) `which` da los numeros de casilla de R.
7. `cazar` (cazar el error, 3 variantes, una linea mal) en la funcion "primero y ultimo" (idea de Python Workout ej. 9,
   con desarrollo propio). Version correcta Python: `def extremos(s): return s[:1] + s[-1:]` (salida real con
   `x = [12, 30, 7, 25, 41, 18]`: `[12, 18]`; con `"modelo"`: `mo`). Version correcta R: `extremos <- function(x) x[c(1, length(x))]`
   (salida real `[1] 12 18`).
   - Variante A: `return s[0] + s[-1]`. Salida real con la lista: `30` (suma los numeros en vez de juntarlos); con
     `"modelo"` da `mo`, igual que la correcta: el error solo se ve con listas. Buena pista: "prueba con una lista".
   - Variante B: `return s[:1] + s[1:]`. Salida real: `[12, 30, 7, 25, 41, 18]` (devuelve todo).
   - Variante C (R): `extremos <- function(x) x[c(0, length(x))]`. Salida real: `[1] 18` (el 0 se ignora en R).
8. `prop` (propiedades, `mezclar: true`, reintentable): "¿Cual es verdadera?"
   - Correcta: "En R, `x[i:j]` incluye las casillas `i` y `j`."
   - "En R `x[-1]` es el ultimo" (pista: paso 5, en R el menos quita).
   - "Una mascara devuelve las posiciones" (pista: destacado del paso 6, devuelve los valores).
   - "En Python, `x[10]` en una lista de 6 da `None`" (pista: paso 7, da IndexError).
9. `fuera` (prediccion con datos al azar): largo n al azar (4 a 8) y una de: Python `x[n]`, Python `x[n-2:n+5]`, R `x[n+1]`,
   R `x[0]`. "¿Que sale?" (error / NA / vector vacio / un tramo de k elementos).
10. Mas `codigo1`, `codigo2`, `codigo3`.

Lecturas de inspiracion: Python Workout ej. 9 First-last (PDF 57-61, p.31-35) y su recuadro "Staying in bounds" (PDF 59);
Think Python ejercicio 8-3 (rebanada con paso, PDF 116-118).

## Memoria

`B.ordenar`: armar la linea de R que se queda con los valores mayores que 20, pieza por pieza:
`x` · `[` · `x > 20` · `]`.
Distractores: `which(` (daria posiciones, no valores), `-` (quitaria en vez de elegir), `20:` (seria un rango, no una condicion).

Tarjetas (8):
1. ¿Desde donde cuentan Python y R? / Python desde 0; R desde 1.
2. ¿Cuantos elementos tiene `x[a:b]` en Python? / `b - a` (el final no entra).
3. ¿Cuantos tiene `x[i:j]` en R? / `j - i + 1` (los dos extremos entran).
4. ¿Que hace `x[-1]`? / Python: el ultimo. R: todo menos el primero.
5. ¿Que devuelve `x[x > 20]`? / Los valores que cumplen; las posiciones salen con `which` (R) o `np.nonzero` (NumPy).
6. ¿Que pasa con una posicion fuera de rango? / Python: IndexError (la rebanada se recorta). R: NA.
7. ¿Por que `x[x > 20]` falla con una lista de Python? / La lista no compara elemento por elemento: hay que usar NumPy.
8. ¿Que pasa en R con una mascara mas corta? / Se recicla sin aviso: `x[c(TRUE, FALSE)]` toma uno si y uno no.

## Citas (12)

| fuente | pag PDF | pag impresa | seccion | que hay | cuando leerla |
|---|---|---|---|---|---|
| thinpython | 106 | 85 | Cap. 8: A String Is a Sequence | las posiciones empiezan en 0 (`fruit[1]` es `'a'`) | Paso 2 |
| thinpython | 107 | 86 | Cap. 8: len | `fruit[-1]` es la ultima, IndexError al salirse | Paso 5 |
| thinpython | 109 | 88 | Cap. 8: String Slices | Figure 8-1: los indices de una rebanada van entre los elementos | Paso 3 |
| thinpython | 131 | 110 | Cap. 10: List Slices | `t[1:3]`, `t[:]` y rebanadas en listas | Paso 3, despues del chequeo |
| thinpython | 130 | 109 | Cap. 10: Lists Are Mutable | indice fuera de rango da IndexError; un indice negativo cuenta desde el final | Paso 7 |
| pyworkout | 46 | 20 | Cap. 2, recuadro Slices | rebanadas en todas las secuencias, con paso | Paso 3, profundizar |
| pyworkout | 59 | 33 | Ej. 9, recuadro "Staying in bounds" | indice suelto fuera de rango da error; rebanada no | Paso 7 |
| prog4 | 10 | 10 | 3.1 Vectores: indexacion | "en R la primera posicion es uno, no cero"; `vector_5[1:3]` y `vector_5[c(3,1)]` | Pasos 2 y 4 |
| prog4 | 11 | 11 | 3.1 Vectores: indexacion | `vector_5[-c(1,3)]`, mascara logica y `vector_5[vector_5 < 5]` | Pasos 5 y 6 |
| prog4 | 22 | 22 | Filtrar filas de un data frame | `mtcars[mtcars$cyl > 4 & mtcars$hp > 100, ]` (21 filas) | Destacado del paso 6 |
| prog4html | (ancla `subconjuntos`) | - | Subconjuntos de vectores | `x[1]`, `x[c(1,3,5)]`, `x[1:3]`, `x[x > 25]`, `x[-(2:4)]` | Paso 6 |
| prog4html | (ancla `subconjuntos-1`) | - | Subconjuntos de matrices | `m[2,3]`, `m[, 2]`; `drop = FALSE` | Paso 7, profundizar (dos dimensiones) |

Verificacion: prog4 PDF 10 y 11 leidas con `pdftotext` (texto citado arriba, coincide); thinpython 106, 107, 109, 131 leidas;
pyworkout 46 y 59 leidas. prog4 PDF 22 y las anclas de prog4html vienen del mapa `sm142002-programacion.md` (verificadas alli).
thinpython 130 releida: las reglas de IndexError e indice negativo estan en la PDF 130 (la seccion empieza en la 129).

## Riesgos y notas para quien construye

- Lo mas importante de la pagina: nunca mostrar un indice sin decir de que lenguaje es. Etiquetar cada expresion con "Python" o
  "R" y usar `--j` para la regla de Python y `--k` para la de R de forma consistente.
- Las listas de Python no admiten mascaras ni listas de indices: todo lo que sea `a[[0, 2]]` o `a[a > 20]` es NumPy y se debe
  decir. No mezclar `x` (lista) con `a` (array) en la misma caja.
- NumPy imprime `[30 25 41]` sin comas; una lista imprime `[30, 25, 41]`. La pagina debe reproducirlo tal cual.
- R imprime `[1] FALSE  TRUE FALSE ...` con doble espacio de alineacion; copiar la salida exacta.
- `x[0]` en R devuelve `numeric(0)` (no error) y `x[c(0, 6)]` ignora el 0: dato util para el reto 7C (el constructor debe
  correrlo: con `x <- c(12, 30, 7, 25, 41, 18)`, `x[c(0, length(x))]` da `18`).
- El material del master: prog1 (UD1 teoria) no trae codigo de indices de Python; lo de Python sale de los cuadernos de clase
  (UAX_20251028 c14-21 y UAX_20251105 c74-79: mascaras de pandas y NumPy) y de la hoja de NumPy, que no estan registrados como
  fuente en `fuentes.js` (ids propuestos en el mapa: `prog1nb`, `prog1hojas`). Si la sesion principal los registra, se pueden
  agregar como citas; si no, mencionarlos en texto sin chip.
- Accesibilidad de las asas en movil (375 px): seis casillas de 48 px caben; las asas deben tener zona de toque de 32 px.
