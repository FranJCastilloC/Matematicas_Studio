# Especificacion: Bucles y variables que cambian (bucles-estado)

- Ruta: `python-base` (grupo Programación con datos), orden 5, tanda 8
- Archivo: `biblioteca/conceptos/bucles-estado.html`
- Prerrequisitos: ["Funciones y el marco de llamada"]
- Siguientes: ["Bucle frente a vectorización", "Cadenas: secuencias inmutables", "Comprensiones y programación funcional", "Orden de crecimiento"]
- Aparece: [{ materia: "SM142002", ud: "UD1" }]
- Resumen del catálogo: "Un bucle repite pasos mientras una variable va cambiando; seguirlo en una tabla de estados evita errores."
- Fuente declarada: Think Python cap. 7, Python Workout cap. 1

## Imagen central

**La tabla de estados que se escribe sola.** El escenario tiene arriba una fila de tarjetas (los datos: cinco tiempos de carrera) con un cursor que
avanza tarjeta por tarjeta, en el centro el código con la línea activa resaltada, y abajo una tabla cuyas columnas son las variables (`vuelta`, `t`,
`total`, `n`, `mejor`) y cuyas filas se agregan una por vuelta. La celda que acaba de cambiar parpadea en `--accent`; las que no cambian se copian en
gris. A la derecha de la tabla, una "pizarra" grande muestra el valor actual de cada variable: así se ve que una variable es UNA caja que se reescribe,
mientras la tabla guarda la historia.

Controles: botones "Una línea", "Una vuelta", "Hasta el final", "Reiniciar"; las cinco tarjetas de datos son editables (enteros de 30 a 70) y se
pueden reordenar arrastrando; un interruptor por paso para la trampa ("mover `total = 0` dentro del bucle"); un deslizador `n` de 1 a 30 para el
`while` de Collatz (paso 6) con un contador de vueltas y la secuencia dibujada como una línea quebrada.
Capas por paso:
- `pizarra`: solo la pizarra y las tarjetas, sin código (paso 1).
- `reasignar`: dos cajas `a` y `b` con flechas al valor, como el diagrama de estado de Think Python (paso 2).
- `tabla`: código + tabla de estados con `total` (paso 3).
- `trampa`: el interruptor que mueve `total = 0` dentro del bucle; la tabla se reescribe y la columna `total` queda mal (paso 4).
- `varias`: columnas `n` y `mejor` (paso 5) y el rango `range(1, 5)` frente a `1:5` (destacado).
- `while`: la condición en un rombo arriba del cuerpo y el deslizador de Collatz (paso 6).
- `vector`: la columna `total` de la tabla al lado de `np.cumsum(tiempos)` y `cumsum(tiempos)` (paso 7).

Datos inventados: cinco tiempos de carreras de 10 km en minutos: 52, 48, 50, 47, 53 (suma 250, media 50, mejor 47). La página dice que son inventados.

## Hipotesis inicial

"Sumas cinco tiempos uno por uno en una calculadora: después de cada número miras la pantalla. Si alguien te pregunta al final qué decía la pantalla
después del tercer número, ¿la calculadora lo sabe? ¿Cómo lo sabrías tú? Escribe qué guarda una variable y qué se pierde cuando cambia."
Se muestra de nuevo en el paso 3.

## Pasos (7)

### Paso 1. Una pizarra que se reescribe
- Idea: un bucle repite lo mismo con cada dato, y una variable es una pizarra que se borra y se reescribe; lo de antes se pierde si no lo anotas.
- Escenario: capa `pizarra`. Cinco tarjetas boca abajo (52, 48, 50, 47, 53). Una mano las da vuelta de a una y suma en la pizarra. La pizarra aparece
  tapada hasta responder.
- Chequeo (predicción sin símbolos, numérico): "Después de la tercera tarjeta, ¿qué número hay en la pizarra?" Respuesta: 150.
  Pista si responde 50: "eso es solo la tercera tarjeta; la pizarra lleva la suma". Pista si responde 250: "esa es la suma de las cinco".
- Cita: thinpython PDF 58 (Simple Repetition: `for i in range(4)` repite el cuerpo).

### Paso 2. `=` no es igualdad: es reescribir
- Idea: `x = x + 1` es una orden (calcula a la derecha con el valor viejo, guarda a la izquierda), no una ecuación. Y `b = a` copia la flecha en ese
  momento, no ata `b` a `a` para siempre.
- Escenario: capa `reasignar`. Programa `a = 5`, `b = a`, `a = 3` ejecutado línea a línea; las flechas cambian.
- Chequeo (predicción antes de tocar): "Después de `a = 5; b = a; a = 3`, ¿cuánto valen `a` y `b`?" Correcta: `a = 3`, `b = 5` (verificado: `3 5`).
  Distractores: "3 y 3" (cree que `b` sigue a `a`); "5 y 5" (cree que la última línea no cambia nada); "error" (en matemática `a = 5` y `a = 3` se contradicen).
- Profundizar: "¿Y si la variable no existe?": `x = x + 1` sin `x` previa da `NameError` en Python y `object 'x' not found` en R; por eso hay que
  inicializar.
- Citas: thinpython PDF 96 (Reassignment, Figure 7-1 en PDF 97); thinpython PDF 97 (Updating Variables).

### Paso 3. El acumulador y su tabla de estados
- Idea: el patrón acumulador: inicializar antes del bucle, actualizar dentro. La tabla de estados (una fila por vuelta) es la forma de seguirlo sin
  equivocarse.
- Escenario: capa `tabla`. Código:
  ```python
  total = 0
  for t in tiempos:
      total = total + t
  ```
  La tabla se llena con "Una vuelta". Las tarjetas son editables: cambiar un dato reescribe la tabla desde esa fila. Al terminar, se muestra la
  hipótesis (`#citaHipo`).
- Chequeo (cálculo con datos en vivo): con los datos que haya en las tarjetas (por defecto los originales): "¿Qué vale `total` al terminar la cuarta
  vuelta?" Respuesta por defecto: 197. Pista 1: "la fila 4 de la tabla = fila 3 + cuarta tarjeta". Pista 2: muestra la fila 3 (150).
- Citas: pyworkout PDF 37 (Ej. 3 Run timing: acumular tiempos y promediar, sigue hasta PDF 39); thinpython PDF 110 (Looping and Counting: el patrón contador).

### Paso 4. Inicializar adentro borra la memoria (TRAMPA)
- Idea: si `total = 0` queda dentro del bucle, se reinicia en cada vuelta y al final solo queda el último dato.
- Escenario: capa `trampa`. El interruptor mueve la línea `total = 0` una sangría a la derecha; la tabla se rehace y la columna `total` se vuelve
  igual a la columna `t`.
- Chequeo (predicción antes de tocar): "Con `total = 0` dentro del bucle, ¿qué vale `total` al final?" Correcta: 53 (verificado). Distractores:
  "250" (no ve el reinicio); "0" (cree que el reinicio va después de sumar); "error" (no lo hay: el código es válido, solo está mal).
- Segunda mitad del paso (misma trampa, otra cara): "el mínimo inicializado en 0": `mejor = 0` y `if t < mejor: mejor = t` termina en 0 (verificado),
  porque ningún tiempo es menor que 0. Se arregla inicializando con el primer dato (`tiempos[0]` / `tiempos[1]`).
- Citas: thinpython PDF 97 (Updating Variables: inicializar antes de actualizar); thinpython PDF 102 (Debugging por bisección, sigue en PDF 103).

### Paso 5. Varias variables a la vez, y cuántas vueltas da (DESTACADO con predicción)
- Idea: un bucle puede llevar varias variables de estado (suma, contador, mejor marca); cada una tiene su regla de actualización. Y hay que saber
  cuántas vueltas da: `range` en Python excluye el final, `1:n` en R lo incluye.
- Escenario: capa `varias`. La tabla completa del programa de vida real: `n`, `t`, `total`, `mejor`.
- `.destacado` (la confusión natural): "¿Cuántas veces corre `for i in range(1, 5)` en Python? ¿Y `for (i in 1:5)` en R?" Predicción con dos casillas.
  Respuesta: 4 y 5 (verificado: Python imprime `1 2 3 4`, R imprime `1 2 3 4 5`). `range(a, b)` es medio abierto: empieza en `a` y para antes de `b`;
  así `range(len(x))` da exactamente los índices de `x` desde 0. R cuenta desde 1 y `1:5` incluye el 5. Es el reto `codigo1`.
- Chequeo (cálculo con datos en vivo): "¿Cuántas veces se ejecuta la línea `mejor = t` con los datos actuales?" Respuesta por defecto: 2 (en 48 y en 47).
  Pistas: "mira la columna `mejor`: ¿cuántas veces cambia?"; "la primera vuelta no cuenta: 52 no es menor que 52".
- Citas: thinpython PDF 130 (Traversing a List: `for i in range(len(numbers))`; un `for` sobre una lista vacía no ejecuta nada); prog4 PDF 10 ("en R la
  primera posición es uno, no cero").

### Paso 6. `while`: repetir mientras algo sea cierto
- Idea: `while condición:` repite sin saber de antemano cuántas vueltas; el cuerpo tiene que cambiar algo que acerque la condición a falso, o el bucle
  no termina. `break` sale en medio.
- Escenario: capa `while`. Collatz: mientras `n != 1`, si `n` es par `n = n // 2`, si no `n = 3 * n + 1`. Deslizador `n` de 1 a 30, tabla de estados
  con `vuelta` y `n`, y la secuencia como línea quebrada.
- Chequeo (predicción antes de tocar): con `n = 6`: "¿Cuántas vueltas da el bucle hasta llegar a 1?" Respuesta: 8 (secuencia 6, 3, 10, 5, 16, 8, 4, 2, 1,
  verificada). Distractores: 6 (cree que solo baja); 9 (cuenta los valores, no las vueltas); "no termina" (para 6 sí termina). Tras responder, se invita a
  probar `n = 27` (111 vueltas, verificado) y `n = 7` (16 vueltas).
- Profundizar: "¿Siempre termina?": nadie lo ha demostrado para todo `n` (conjetura de Collatz); Think Python lo usa justamente como ejemplo de bucle sin
  garantía. Y `while True:` con `break` cuando se cumple una condición (Python Workout ej. 1).
- Citas: thinpython PDF 98 (The while Statement, Collatz, sigue en PDF 99); thinpython PDF 99 (break); pyworkout PDF 28 (Ej. 1, bucle `while` con
  `input`, ejercicio completo en PDF 28-33).

### Paso 7. La tabla de estados es un vector: `cumsum`
- Idea (lo más técnico): la columna `total` de la tabla es la suma acumulada; NumPy y R la dan entera con `cumsum`, y la media y el mínimo con `mean` y
  `min`. El bucle explícito sirve para entender y para casos con lógica rara; la versión vectorizada, para los datos grandes.
- Escenario: capa `vector`. Al lado de la tabla aparece `np.cumsum(tiempos)` -> `[ 52 100 150 197 250]` y en R `[1]  52 100 150 197 250`.
- Chequeo (elección con explicación): "Quieres la columna `mejor` (la mejor marca hasta cada vuelta) sin escribir el bucle. ¿Qué función?"
  Correcta: `np.minimum.accumulate(tiempos)` en Python / `cummin(tiempos)` en R (salida real: `[52 48 48 47 47]` y `[1] 52 48 48 47 47`).
  Distractores: `min(tiempos)` (da un solo número, 47: la última fila, no la columna); `np.cumsum` (suma, no mínimo); `sorted(tiempos)` (ordena, pierde
  el orden de las vueltas).
- Citas: prog1 PDF 10 ("operaciones vectorizadas, significativamente más rápidas que los bucles tradicionales"); prog4 PDF 8 (operación vectorizada en R,
  sigue en PDF 9).

## Vida real (Python y R)

Mismos datos que el recorrido. Programa: recorre los tiempos llevando suma, contador y mejor marca; imprime la tabla de estados; calcula la media; cierra
comparando con `np.cumsum`, `np.mean`, `min` (Python) y `cumsum`, `mean`, `min` (R).

### Python (verificado, Python 3.13.5, NumPy 2.1.3)

| id | línea |
|---|---|
| imp | `import numpy as np` |
| (vacía) | |
| datos | `tiempos = [52, 48, 50, 47, 53]` |
| total0 | `total = 0` |
| n0 | `n = 0` |
| mejor0 | `mejor = tiempos[0]` |
| bucle | `for t in tiempos:` |
| suma | `    total = total + t` |
| cuenta | `    n = n + 1` |
| si | `    if t < mejor:` |
| nuevo | `        mejor = t` |
| fila | `    print(n, t, total, mejor)` |
| (vacía) | |
| media | `media = total / n` |
| final | `print("media:", media, "mejor:", mejor)` |
| lib1 | `print(np.cumsum(tiempos))` |
| lib2 | `print(np.mean(tiempos))` |
| lib3 | `print(min(tiempos))` |

```python
import numpy as np

tiempos = [52, 48, 50, 47, 53]
total = 0
n = 0
mejor = tiempos[0]
for t in tiempos:
    total = total + t
    n = n + 1
    if t < mejor:
        mejor = t
    print(n, t, total, mejor)

media = total / n
print("media:", media, "mejor:", mejor)
print(np.cumsum(tiempos))
print(np.mean(tiempos))
print(min(tiempos))
```
Salida real:
```
1 52 52 52
2 48 100 48
3 50 150 48
4 47 197 47
5 53 250 47
media: 50.0 mejor: 47
[ 52 100 150 197 250]
50.0
47
```

### R (verificado, R 4.6.1)

```r
tiempos <- c(52, 48, 50, 47, 53)
total <- 0
n <- 0
mejor <- tiempos[1]
for (t in tiempos) {
  total <- total + t
  n <- n + 1
  if (t < mejor) {
    mejor <- t
  }
  cat(paste(n, t, total, mejor), "\n", sep = "")
}

media <- total / n
cat(paste("media:", media, "mejor:", mejor), "\n", sep = "")
print(cumsum(tiempos))
print(mean(tiempos))
print(min(tiempos))
```
Ids en R: datos, total0, n0, mejor0 (`tiempos[1]`), bucle, suma, cuenta, si, nuevo, (`}` sin id), fila, (`}` sin id), media, final, lib1, lib2, lib3.
Salida real:
```
1 52 52 52
2 48 100 48
3 50 150 48
4 47 197 47
5 53 250 47
media: 50 mejor: 47
[1]  52 100 150 197 250
[1] 50
[1] 47
```
Diferencias que la narración menciona: `tiempos[0]` frente a `tiempos[1]` (ctx.ix); Python da `50.0` (la división `/` siempre devuelve float) y R `50`.

### Foto de estado por línea ejecutada

| eventos | t | total | n | mejor | nota |
|---|---|---|---|---|---|
| imp, datos, total0, n0, mejor0 | - | 0 | 0 | 52 | `mejor` empieza con el primer dato |
| vuelta 1: bucle, suma, cuenta, si (False), fila | 52 | 52 | 1 | 52 | `nuevo` no se ejecuta |
| vuelta 2: bucle, suma, cuenta, si (True), nuevo, fila | 48 | 100 | 2 | 48 | |
| vuelta 3: bucle, suma, cuenta, si (False), fila | 50 | 150 | 3 | 48 | |
| vuelta 4: bucle, suma, cuenta, si (True), nuevo, fila | 47 | 197 | 4 | 47 | |
| vuelta 5: bucle, suma, cuenta, si (False), fila | 53 | 250 | 5 | 47 | |
| media, final, lib1, lib2, lib3 | 53 | 250 | 5 | 47 | `media = 50.0` (R: 50); `t` sigue valiendo 53 después del bucle |

Eventos: 5 (inicio, 4 en R) + 5 + 6 + 5 + 6 + 5 + 5 = 37 en Python, 36 en R. El visual es la tabla de estados del recorrido: cada evento `fila` agrega
una fila; los eventos `suma`, `cuenta` y `nuevo` hacen parpadear la celda que cambian en la pizarra.

### Predicción antes de reproducir (`#vrPred`)
"¿Cuántas veces se ejecuta la línea `mejor = t`?" Respuesta: 2. Distractores: 5 (cree que se ejecuta en cada vuelta), 1 (solo ve el 47), 3 (cuenta
también la inicialización `mejor = tiempos[0]`, que es otra línea).

### Trampas reales (retos `codigo1`..`codigo3`)

**codigo1: `range` excluye el final; `:` lo incluye.**
```python
for i in range(1, 5):
    print(i, end=" ")
print()
print(len(range(1, 5)))
```
Salida real: `1 2 3 4 ` y `4`.
```r
for (i in 1:5) cat(i, "")
cat("\n")
print(length(1:5))
```
Salida real: `1 2 3 4 5 ` y `[1] 5`. Pregunta: "¿Qué escribes en Python para recorrer 1, 2, 3, 4, 5?" Correcta: `range(1, 6)`. Distractores: `range(1, 5)`
-> "para antes del 5"; `range(5)` -> "empieza en 0"; `range(0, 5)` -> "da 0 a 4".

**codigo2: `1:length(x)` con un vector vacío da dos vueltas en R.**
```python
x = []
vueltas = 0
for i in range(len(x)):
    vueltas = vueltas + 1
print(vueltas)
```
Salida real: `0`.
```r
x <- c()
vueltas <- 0
for (i in 1:length(x)) {
  vueltas <- vueltas + 1
  cat("i =", i, "\n")
}
print(vueltas)
print(1:length(x))
print(seq_along(x))
```
Salida real:
```
i = 1 
i = 0 
[1] 2
[1] 1 0
integer(0)
```
Pregunta: "¿Por qué da dos vueltas con un vector vacío?" Correcta: "`length(x)` es 0 y `1:0` cuenta hacia abajo: `1 0`". Arreglo: `seq_along(x)`.
Distractores: "R cuenta desde 1 siempre" -> "eso explica el 1, no el 0"; "es un error de R" -> "es el comportamiento documentado de `:`".

**codigo3: modificar la lista que recorres.**
```python
nums = [48, 47, 52]
for x in nums:
    if x < 50:
        nums.remove(x)
print(nums)
```
Salida real: `[47, 52]` (el 47 sobrevive: al quitar el 48, la lista se corre y el bucle salta al 52). La forma correcta,
`[x for x in [48, 47, 52] if x >= 50]`, da `[52]`.
```r
nums <- c(48, 47, 52)
for (x in nums) {
  if (x < 50) nums <- nums[nums != x]
}
print(nums)
```
Salida real: `[1] 52` (en R el `for` recorre una copia del vector original, así que no salta nada). Pregunta: "¿Por qué Python deja el 47?" Correcta: "el
`for` avanza por posición; al borrar el elemento 0, el 47 pasa a la posición 0 y el bucle ya va por la 1". Distractor: "porque 47 no es menor que 50"
-> "sí lo es: mira la tabla de estados del bucle".
(El código R se escribió en el chequeo con el `for` en una sola línea; si el constructor lo reformatea, debe correrlo otra vez.)

`p.vr-nota`: "En una línea: `np.cumsum(tiempos)`, `np.mean(tiempos)`, `min(tiempos)` en Python; `cumsum(tiempos)`, `mean(tiempos)`, `min(tiempos)` en R."
`details.profundizar` "La versión vectorizada de toda la tabla": `np.cumsum(tiempos)`, `np.arange(1, 6)`, `np.minimum.accumulate(tiempos)` en Python y
`cumsum`, `seq_along`, `cummin` en R dan las cuatro columnas de una vez. Salidas reales: `np.minimum.accumulate(tiempos)` -> `[52 48 48 47 47]`,
`np.arange(1, 6)` -> `[1 2 3 4 5]`; R `cummin(tiempos)` -> `[1] 52 48 48 47 47`, `seq_along(tiempos)` -> `[1] 1 2 3 4 5`.

## Retos (8 en la parte 3, más codigo1..3)

1. **`ojo-vueltas`**, ojo clínico (5 rondas, 4 de 5). Generador: un bucle al azar entre `for i in range(a, b)`, `for i in range(a, b, k)`,
   `for (i in a:b)` en R y `while i < b: i = i + k`, con enteros pequeños. Pregunta: "¿Cuántas vueltas?". Pista tras fallar: la lista explícita de valores.
2. **`ojo-final`**, ojo clínico (5 rondas). Generador: cinco números al azar de 1 a 9 y una regla al azar entre suma, producto, máximo, contar pares.
   Pregunta: "¿Qué valor queda en la variable al final?" con cuatro opciones (incluida la del error de inicialización: 0 para el producto o 0 para el
   máximo de negativos).
3. **`construir-tabla`**, construir: Francisco reordena las cinco tarjetas (arrastrar) hasta cumplir a la vez, con casillas que se marcan solas:
   (a) la línea `mejor = t` se ejecuta exactamente 2 veces; (b) el `total` de la vuelta 3 es 150; (c) la primera tarjeta no es 52 (para que no valga el
   orden original). Al cumplirlos, la página hace notar que la media sigue siendo 50 (reordenar no cambia la suma). Verificado con un script sobre las
   120 permutaciones: hay 6 órdenes válidos, por ejemplo 50, 52, 48, 47, 53 y 53, 50, 47, 52, 48. Si se piden los objetivos (a) y (b) sin (c), hay 8.
4. **`a-mano-traza`**, a mano: se generan 4 números al azar de 1 a 9 y el bucle `p = 1; for v in datos: p = p * v - 1`. Francisco llena la tabla de estados
   (4 casillas numéricas). Pistas: 1) "fila 1: `p` vale 1 antes de empezar"; 2) "primero multiplica, luego resta"; 3) la primera fila resuelta.
5. **`a-mano-while`**, a mano: un `n` inicial al azar de 2 a 12 para Collatz. Pregunta: "¿Cuántas vueltas?". Pistas: 1) la regla par/impar; 2) los tres
   primeros valores; 3) la secuencia completa.
6. **`cazar-bucle`**, cazar el error (3 variantes, marcar la línea):
   - a) `total = 0` dentro del `for` (reinicio).
   - b) `mejor = 0` para buscar el mínimo de tiempos positivos.
   - c) `while n != 1:` con un cuerpo que olvida actualizar `n` en una de las ramas (bucle infinito: el reto lo simula con un tope de 50 vueltas y lo dice).
7. **`prop-bucle`**, propiedades (opción múltiple, mezclar, reintentable): "¿Qué vale `t` después de `for t in [52, 48, 50]:` en Python?"
   Correcta: 50 (la variable del bucle sobrevive con el último valor). Distractores y pistas: "52" -> "la variable se reescribe en cada vuelta";
   "no existe, da NameError" -> "en Python el `for` no crea un marco propio, a diferencia de una función"; "None" -> "no hay nada que la borre".
8. **`prop-while`**, propiedades: "¿Cuál de estos bucles termina seguro?" Correcta: `while i < 10: i = i + 1` empezando en `i = 0`. Distractores y pistas:
   `while i != 10: i = i + 3` (desde 0 salta el 10: 9, 12...) -> "haz la tabla: ¿pasa por 10?"; `while i < 10: j = i + 1` -> "¿qué variable cambia en el
   cuerpo?"; `while True: i = i + 1` -> "sin `break` no hay salida".

Lecturas de inspiración (citar, no copiar): Python Workout ej. 2 (reimplementar la suma, PDF 34-36), ej. 3 (promedio de tiempos, PDF 37-39) y ej. 4
(convertir hexadecimal dígito por dígito con `reversed` y `enumerate`, PDF 40-42); Think Python ej. 7-1 (raíz cuadrada de Newton y tabla contra
`math.sqrt`, PDF 103-105).

## Memoria

`B.ordenar` (el acumulador con mejor marca; piezas en orden):
1. `total = 0`
2. `mejor = tiempos[0]`
3. `for t in tiempos:`
4. `    total = total + t`
5. `    if t < mejor:`
6. `        mejor = t`
7. `media = total / len(tiempos)`
Distractores: `    total = 0`, `mejor = 0`, `for t in range(1, len(tiempos)):`.

Tarjetas (8):
1. ¿Qué significa `x = x + 1`? -> Calcula con el valor viejo de `x` y guarda el resultado en `x`. No es una ecuación.
2. ¿Dónde se inicializa un acumulador? -> Antes del bucle. Adentro se reinicia en cada vuelta.
3. ¿Qué es una tabla de estados? -> Una fila por vuelta con el valor de cada variable; permite seguir un bucle sin equivocarse.
4. ¿Cuántas vueltas da `range(1, 5)`? -> 4 (1, 2, 3, 4). En R, `1:5` da 5.
5. ¿Con qué se inicializa la búsqueda de un mínimo? -> Con el primer dato, no con 0.
6. ¿Cuándo usar `while` y no `for`? -> Cuando no se sabe cuántas vueltas hacen falta; el cuerpo debe acercar la condición a falso.
7. ¿Por qué `1:length(x)` es peligroso en R? -> Si `x` está vacío da `1 0` y el bucle corre dos veces; usa `seq_along(x)`.
8. ¿Qué función da la columna de sumas acumuladas de la tabla? -> `np.cumsum` en Python, `cumsum` en R.

## Citas (13)

| id de fuente | pág. PDF | pág. impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| thinpython | 58 | 37 | Cap. 4: Simple Repetition | `for i in range(4):` y el cuerpo con sangría | Paso 1 |
| thinpython | 96 | 75 | Cap. 7: Reassignment | `=` no es igualdad; `a = 5; b = a; a = 3` deja `b` en 5; Figure 7-1 en PDF 97 | Paso 2 |
| thinpython | 97 | 76 | Cap. 7: Updating Variables | `x = x + 1`, inicializar antes, NameError si no existe | Pasos 2 y 4 |
| thinpython | 110 | 89 | Cap. 8: Looping and Counting | el patrón contador (`count = 0` y sumar dentro del bucle) | Paso 3 |
| pyworkout | 37 | 11 | Ej. 3: Run timing | acumular tiempos de carreras en un bucle y promediar (sigue hasta PDF 39) | Paso 3 |
| thinpython | 102 | 81 | Cap. 7: Debugging | depurar por bisección (sigue en PDF 103) | Paso 4 |
| thinpython | 130 | 109 | Cap. 10: Traversing a List | `for i in range(len(numbers))`; un `for` sobre `[]` no ejecuta nada | Paso 5 y codigo2 |
| prog4 | 10 | 10 | Indexación de vectores | "en R la primera posición es uno, no cero" (sigue en p. 11) | Destacado del paso 5 |
| thinpython | 98 | 77 | Cap. 7: The while Statement | `countdown` con `while`; la secuencia de Collatz sin garantía de terminar (sigue en PDF 99) | Paso 6 |
| thinpython | 99 | 78 | Cap. 7: break | `while True:` con `break` (sigue en PDF 100) | Profundizar del paso 6 |
| pyworkout | 28 | 2 | Ej. 1: Number guessing game | bucle `while` que se repite hasta acertar (ejercicio completo en PDF 28-33) | Paso 6 |
| thinpython | 100 | 79 | Cap. 7: Square Roots | Newton repetido hasta converger, comparado con `math.sqrt` (sigue en PDF 101) | Retos |
| prog1 | 10 | 10 | Python en la ciencia de datos | NumPy: "operaciones vectorizadas, significativamente más rápidas que los bucles tradicionales" | Paso 7 |
| prog4 | 8 | 8 | Operaciones vectorizadas | suma elemento a elemento y la definición de operación vectorizada en R (sigue en p. 9) | Paso 7 |

(14 filas.)

## Riesgos y notas para quien construye

- El material de clase no trae bucles de Python más allá de un `for` en el cuaderno `UAX_20251105` (celda 103), que no está registrado como fuente
  (`prog1nb` no existe en `fuentes.js`); por eso no se cita. Tampoco hay `for` ni `while` de R en UD4/UD5. La página lo dice.
- El reto `construir-tabla` acepta 6 órdenes: la comprobación debe hacerse con la regla (contar ejecuciones de `mejor = t` y el total de la vuelta 3),
  no comparando contra una lista fija.
- R imprime `media: 50` y Python `media: 50.0`: es parte de la narración (división `/` en Python siempre da float).
- En R, la variable del `for` también sobrevive al bucle (vale 53); en el reto `prop-bucle` la pregunta es solo de Python.
- codigo3 en R se corrió con el cuerpo `if (x < 50) nums <- nums[nums != x]` en una línea; si se escribe en varias, volver a correr.
- Collatz con `n` hasta 30 en el deslizador: `n = 27` da 111 vueltas y valores hasta 9232; el dibujo necesita escala logarítmica o recorte. Limitar el
  deslizador a 1-26 si no se quiere manejar eso.
