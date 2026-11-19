# Especificación: if, for y while en R (r-control)

- Ruta: `r-base` (Programación con datos), orden 8, tanda 8
- Prerrequisitos: "Bucle frente a vectorización"
- Siguientes: "Funciones propias y la familia apply"
- Aparece: SM142002, UD4
- Resumen del catálogo: "Las estructuras de control de R, y por qué casi siempre existe una forma vectorizada."
- Fuente del catálogo: "ISLR2 cap. 5 y 6 (labs); el material de la materia no las trae"
- Archivo: `biblioteca/conceptos/r-control.html`. Grupo "Programación con datos": la imagen central es una tira de celdas con un
  cabezal y una tabla de estados, no una fórmula.

## Imagen central

**La tira y el cabezal.** Un vector de 5 gastos semanales (inventados) dibujado como una tira de 5 celdas con su índice encima
(`[1]` a `[5]`, como los escribe R). Un **cabezal** (flecha `--accent`) marca la celda que el bucle está mirando. A la derecha de la
tira, un **panel de control** con tres lámparas:
- `if`: la condición evaluada con el número real (`gastos[2] > 10` -> `5 > 10` -> `FALSE`), y qué rama se tomó (`alto` / `bajo`).
- `for`: la variable `i`, la secuencia que recorre (`seq_along(gastos)` = `1 2 3 4 5`) dibujada como fichas que se van gastando.
- `while`: una barra de total acumulado con una línea roja en 30, y el contador `dias`.

Debajo, la **tira de resultado** `etiqueta` (5 celdas que se llenan con "alto"/"bajo") y el acumulador `altos`.

Modos (capas que se encienden por paso): "decidir" (solo `if` sobre una celda), "recorrer" (`for` con cabezal), "hasta que" (`while`
con barra), "vacío" (la tira con 0 celdas y las fichas de `1:length(x)` frente a `seq_along(x)`), "todo a la vez" (la tira entera se
pinta de una vez con la máscara `TRUE/FALSE`, sin cabezal).

Controles concretos:
- **Celdas editables**: los 5 gastos (enteros de 0 a 30). Por defecto `12, 5, 20, 8, 15`.
- **Deslizador "longitud"** de 0 a 6 (agrega o quita celdas; las nuevas valen 10). En 0, la tira queda vacía: es la trampa.
- **Deslizador umbral** del `if` (por defecto 10) y del `while` (por defecto 30).
- **Botones**: "Paso" (una línea), "Correr", "Reiniciar"; interruptor "bucle / vectorizado".

Lo que hace evidente la idea: el bucle mira una celda por vez y decide; la versión vectorizada pinta toda la tira en un solo gesto.
Con la tira vacía, `1:length(x)` todavía entrega dos fichas (1 y 0) mientras `seq_along(x)` no entrega ninguna.

Datos y resultados reales (R 4.6.1 y Python 3.13.5):
- `gastos <- c(12, 5, 20, 8, 15)` -> `etiqueta` = `"alto" "bajo" "alto" "bajo" "alto"`, `altos` = 3.
- `while` hasta superar 30: totales 12, 17, 37 -> `dias` = 3, `total` = 37.

## Hipótesis inicial

"Tienes cinco gastos y quieres marcar los que pasan de 10. ¿Escribirías un bucle que los mire uno por uno, o crees que R puede
hacerlo de otra forma? ¿Qué crees que pasa si el vector está vacío?"

## Pasos (7)

### Paso 1. Mirar uno por uno
- Idea: un programa que decide sobre una lista tiene que mirar cada elemento y tomar una decisión por cada uno.
- Escenario: modo "tira" sin código ni lámparas: 5 tarjetas con los gastos 12, 5, 20, 8, 15 boca abajo.
- Chequeo (predicción sin símbolos): "Vas a marcar 'alto' cada gasto mayor que 10. ¿Cuántas decisiones tomas y cuántas tarjetas
  terminan marcadas 'alto'?"
  - Correcta: "5 decisiones, 3 altos" (12, 20, 15).
  - "3 decisiones": solo cuenta las que dieron sí; las que dieron no también se decidieron.
  - "5 decisiones, 2 altos": olvida el 15 (o cuenta 20 dos veces).
  - "1 decisión": eso es lo que hace la versión vectorizada vista desde fuera (paso 6), pero por dentro también mira las 5.
  Al resolver, se destapan las tarjetas una por una.

### Paso 2. Una decisión: if / else
- Idea: `if (condición) { ... } else { ... }` toma una rama según un solo `TRUE` o `FALSE`.
- Escenario: modo "decidir". El cabezal apunta a una celda elegida con un clic; la lámpara `if` muestra `gastos[i] > 10` con el número.
- Código que aparece (R):
  ```r
  if (gastos[2] > 10) {
    "alto"
  } else {
    "bajo"
  }
  ```
- Chequeo (cálculo con datos en vivo): "Edita `gastos[2]` a 11. ¿Qué rama toma ahora? ¿Y con 10?"
  - Correcta: "Con 11 'alto', con 10 'bajo'". `10 > 10` es `FALSE`: el límite no cuenta.
  - "Con 10 'alto'": eso sería `>=`.
  - "Las dos 'alto'": revisa el signo.
  - "Error porque 11 no estaba en los datos": el `if` evalúa lo que haya en la celda.
- Cita: prog4html ancla `normas-para-nombrar-objetos`: `if`, `else`, `for`, `while`, `function` son palabras reservadas de R (no puedes
  usarlas como nombres). Aclarar en la página que el material de UD4 lista las palabras pero no explica las estructuras de control.
- Cita Python para comparar: Think Python PDF 70-71 (impresas 49-50), `if` / `else`.

### Paso 3. Recorrer: for con seq_along
- Idea: `for (i in seq_along(gastos))` repite el bloque una vez por posición; dentro, el `if` decide y un acumulador cuenta.
- Escenario: modo "recorrer". Cabezal, fichas de la secuencia, tira `etiqueta` y `altos`. Botón "Paso".
- Código (es el de la vida real, líneas `etiqueta0` a `cierre-for`).
- Chequeo (cálculo con datos en vivo): "Después de la vuelta `i = 3`, ¿cuánto vale `altos` y qué hay en `etiqueta`?" (los valores del panel
  se tapan hasta responder).
  - Correcta: "`altos` = 2; `etiqueta` = `"alto" "bajo" "alto" "" ""`".
  - "`altos` = 3": esa es la cuenta final, tras la vuelta 5.
  - "`altos` = 2; `etiqueta` = `"alto" "bajo" "alto" "bajo" "alto"`": las celdas 4 y 5 aún no se visitaron (quedan vacías, `""`).
  - "`altos` = 1": olvida que la vuelta 1 (12) ya contó.
- Profundizar ("¿Por qué crear `etiqueta` antes del bucle?"): `character(length(gastos))` reserva las 5 celdas de una vez; hacerlo crecer
  con `c(etiqueta, "alto")` en cada vuelta copia el vector entero cada vez (más lento con vectores grandes).
- Cita: ISLR2 PDF 226 (impresa 215), 5.3.2: el primer `for (i in 1:10)` de los laboratorios, que ajusta diez modelos y guarda cada error
  en un vector creado antes del bucle.

### Paso 4. Repetir hasta que: while
- Idea: `while (condición)` repite sin saber cuántas vueltas; se detiene cuando la condición se vuelve `FALSE`.
- Escenario: modo "hasta que". La barra de total crece con cada gasto; línea roja en 30.
- Chequeo (predicción antes de tocar): "¿Cuántos días hacen falta para que el total supere 30, y cuál es el total en ese momento?"
  - Correcta: "3 días, total 37" (12, 17, 37).
  - "2 días, total 17": 17 todavía no supera 30.
  - "3 días, total 30": el `while` sigue mientras `total <= 30`; se detiene en el primer total mayor.
  - "5 días": no recorre todo el vector; para en cuanto se cumple.
- **Trampa secundaria** (mostrar tras resolver, con el deslizador umbral del `while` en 60): los 5 gastos suman 60; con umbral 60 el total
  nunca lo supera, `gastos[6]` es `NA`, `total` se vuelve `NA` y R se detiene con `missing value where TRUE/FALSE needed` (salida real
  con `gastos <- c(4, 5, 6)` y umbral 30, ver `codigo3`). Python, en el mismo caso, da `IndexError: list index out of range`.
- Cita: ISLR2 PDF 547 (impresa 536), 12.5.2: un `while (rel_err > thresh)` real, que repite un algoritmo hasta que el error relativo
  baja de un umbral.

### Paso 5. La trampa del vector vacío: 1:length(x) frente a seq_along(x)
- Idea: `1:length(x)` con `x` vacío no es una secuencia vacía: es `1:0`, que vale `c(1, 0)`. `seq_along(x)` sí queda vacío.
- Escenario: modo "vacío". Deslizador longitud en 0. Dos columnas de fichas: a la izquierda `1:length(gastos)` produce las fichas `1` y `0`;
  a la derecha `seq_along(gastos)` no produce ninguna. Las fichas aparecen solo tras responder.
- **Trampa / contraejemplo de la página.** Chequeo (predicción antes de tocar): "Con `gastos <- c()`, ¿cuántas vueltas da
  `for (i in 1:length(gastos))` y cuántas `for (i in seq_along(gastos))`?"
  - Correcta: "2 y 0". `length(c())` es 0 y `1:0` cuenta hacia abajo: `1, 0`.
  - "0 y 0": es lo que uno espera, y lo que hace Python con `range(len([]))`.
  - "1 y 0": olvida que `:` incluye los dos extremos.
  - "Error en las dos": R no se queja del `for`; el error llega después, dentro del cuerpo.
  Tras resolver, se ejecuta el bucle con el `if` dentro: `gastos[1]` es `NA` y R se detiene con
  `Error in if (gastos[i] > 10) altos <- altos + 1 : missing value where TRUE/FALSE needed` (salida real, ver `codigo1`).
- Nota: ISLR2 escribe `for (i in 1:10)` (PDF 226) y `for (j in 1:k)` (PDF 285): ahí no hay peligro porque 10 y k nunca son 0. El
  problema aparece cuando el final del rango es `length()` de algo que puede venir vacío (un filtro sin resultados, por ejemplo).

### Paso 6. Todo a la vez: la versión vectorizada (destacado con predicción)
- Idea: en R casi todo lo que hace el bucle tiene una forma vectorizada: `ifelse(gastos > 10, "alto", "bajo")`, `sum(gastos > 10)`,
  `which(cumsum(gastos) > 30)[1]`.
- Escenario: modo "todo a la vez". Interruptor "bucle / vectorizado": en vectorizado, la tira entera se cubre de `TRUE FALSE TRUE FALSE TRUE`
  de un solo golpe, luego se traduce a etiquetas; `cumsum` se dibuja como la barra del `while` pero completa (12, 17, 37, 45, 60) y se marca
  la primera que supera 30.
- `.destacado` con predicción (la confusión natural: usar `if` con un vector entero):
  "Escribes `if (gastos > 10) print("alto")` esperando que marque cada gasto. ¿Qué hace R 4.6?"
  - Correcta: "Se detiene con `the condition has length > 1`". `if` necesita un solo `TRUE`/`FALSE`; para decidir celda por celda está `ifelse`.
  - "Imprime 'alto' tres veces": eso hace `ifelse` (o un bucle), no `if`.
  - "Mira solo el primero e imprime 'alto' una vez": así se comportaba R antes de la versión 4.2 (con un aviso); ahora es error.
  - "Imprime 'alto' cinco veces": `if` no recorre nada.
  En Python con NumPy, el mismo error se llama `ValueError: The truth value of an array with more than one element is ambiguous`.
- Chequeo del paso (cálculo con datos en vivo): "Cambia el umbral a 13. ¿Qué devuelven `sum(gastos > 13)` y `which(cumsum(gastos) > 30)[1]`?"
  - Correcta: "2 y 3" (20 y 15 pasan de 13; el `cumsum` no depende del umbral del `if`).
  - "3 y 3": 12 ya no pasa.
  - "2 y 2": el `cumsum` es 12, 17, 37: el primero que supera 30 es el tercero.
- Citas: ISLR2 PDF 364 (impresa 353), 8.3.1: `ifelse(Sales <= 8, "No", "Yes")` crea una variable de clase sin bucle; prog4html ancla `in`:
  `||` y `&&` no están vectorizados (sirven para el `if`), `|` y `&` sí (sirven para `ifelse` y filtros).
- Enlace: "Bucle frente a vectorización".

### Paso 7. Cuándo sí un bucle
- Idea: la versión vectorizada es más corta y más rápida, pero un bucle es lo correcto cuando cada vuelta depende de la anterior o hace algo
  grande (ajustar un modelo). Así los usa ISLR2.
- Escenario: modo "carrera": dos barras con el tiempo medido en esta máquina para duplicar un vector de 1 000 000 de números: bucle
  `for (i in seq_along(x)) x[i] <- x[i] * 2` 0.031 s, vectorizado `y * 2` 0.002 s (aclarar: medición local, cambia entre corridas).
  Debajo, tres tarjetas de ISLR2: `for (i in 1:10)` con `cv.glm` (5.3.2), los dos `for` anidados de la validación cruzada (6.5.1),
  el `while` del algoritmo 12.1 (12.5.2).
- Chequeo (elección con explicación): "¿Cuál de estas tareas no tiene una forma vectorizada natural?"
  - Correcta: "Ajustar un modelo distinto por cada grado del polinomio y guardar su error" (cada vuelta es un modelo entero; el `for` de ISLR2).
  - "Marcar los gastos mayores que 10": `ifelse` o `gastos > 10`.
  - "Sumar los gastos": `sum`.
  - "Contar cuántos superan el umbral": `sum(gastos > umbral)`.
- Citas: ISLR2 PDF 283 (impresa 272), 6.5.1: `for (i in 1:19)` que calcula el error de validación de 19 modelos; PDF 285 (impresa 274):
  bucles anidados sobre bloques y tamaños; prog4 p.8-9: definición de operación vectorizada en el material de UD4.
- Profundizar ("¿Por qué el bucle de R es lento?"): cada vuelta interpreta el código, revisa tipos y hace una asignación con copia
  posible; la versión vectorizada hace el bucle en código compilado. Python puro tiene el mismo costo frente a NumPy.

## Vida real (Python y R)

Datos: los del recorrido, `gastos = 12, 5, 20, 8, 15` (inventados). El programa etiqueta cada gasto con `for` + `if/else`, cuenta los altos,
usa `while` para ver en cuántos días el total supera 30, y cierra con la forma vectorizada (`ifelse`, `sum`, `cumsum` en R; `np.where`,
`np.sum`, `np.cumsum` en Python).

### R (corrido con R 4.6.1; archivo `control.R`)

```r
gastos <- c(12, 5, 20, 8, 15)

etiqueta <- character(length(gastos))
altos <- 0
for (i in seq_along(gastos)) {
  if (gastos[i] > 10) {
    etiqueta[i] <- "alto"
    altos <- altos + 1
  } else {
    etiqueta[i] <- "bajo"
  }
}

total <- 0
dias <- 0
while (total <= 30) {
  dias <- dias + 1
  total <- total + gastos[dias]
}

print(etiqueta)
cat("altos:", altos, " dias:", dias, " total:", total, "\n")

print(ifelse(gastos > 10, "alto", "bajo"))
cat("altos:", sum(gastos > 10), " dias:", which(cumsum(gastos) > 30)[1], "\n")
```

Salida real:
```
[1] "alto" "bajo" "alto" "bajo" "alto"
altos: 3  dias: 3  total: 37 
[1] "alto" "bajo" "alto" "bajo" "alto"
altos: 3  dias: 3 
```

### Python (corrido con Python 3.13.5 y NumPy 2.1.3; archivo `control.py`)

```python
import numpy as np

gastos = [12, 5, 20, 8, 15]

etiqueta = [""] * len(gastos)
altos = 0
for i in range(len(gastos)):
    if gastos[i] > 10:
        etiqueta[i] = "alto"
        altos = altos + 1
    else:
        etiqueta[i] = "bajo"

total = 0
dias = 0
while total <= 30:
    dias = dias + 1
    total = total + gastos[dias - 1]

print(etiqueta)
print("altos:", altos, " dias:", dias, " total:", total)

g = np.array(gastos)
print(np.where(g > 10, "alto", "bajo"))
print("altos:", np.sum(g > 10), " dias:", np.argmax(np.cumsum(g) > 30) + 1)
```

Salida real:
```
['alto', 'bajo', 'alto', 'bajo', 'alto']
altos: 3  dias: 3  total: 37
['alto' 'bajo' 'alto' 'bajo' 'alto']
altos: 3  dias: 3
```

Índices: en el `for`, `i` va de 1 a 5 en R y de 0 a 4 en Python. En el `while`, `dias` es un conteo (1, 2, 3) en los dos; por eso Python lee
`gastos[dias - 1]` y R `gastos[dias]`. `np.argmax(...) + 1` convierte la posición desde 0 en número de días.

### Ids semánticos (compartidos)

| id | R | Python |
|---|---|---|
| `importar` | (no existe) | `import numpy as np` |
| `datos` | `gastos <- c(12, 5, 20, 8, 15)` | `gastos = [12, 5, 20, 8, 15]` |
| `etiqueta0` | `etiqueta <- character(length(gastos))` | `etiqueta = [""] * len(gastos)` |
| `altos0` | `altos <- 0` | `altos = 0` |
| `for` | `for (i in seq_along(gastos)) {` | `for i in range(len(gastos)):` |
| `if` | `if (gastos[i] > 10) {` | `if gastos[i] > 10:` |
| `alto` | `etiqueta[i] <- "alto"` | `etiqueta[i] = "alto"` |
| `contar` | `altos <- altos + 1` | `altos = altos + 1` |
| `else` | `} else {` | `else:` |
| `bajo` | `etiqueta[i] <- "bajo"` | `etiqueta[i] = "bajo"` |
| `total0` | `total <- 0` | `total = 0` |
| `dias0` | `dias <- 0` | `dias = 0` |
| `while` | `while (total <= 30) {` | `while total <= 30:` |
| `dia-mas` | `dias <- dias + 1` | `dias = dias + 1` |
| `acumular` | `total <- total + gastos[dias]` | `total = total + gastos[dias - 1]` |
| `print-etiqueta` | `print(etiqueta)` | `print(etiqueta)` |
| `print-cuentas` | `cat("altos:", ...)` | `print("altos:", ...)` |
| `vector` | (no existe) | `g = np.array(gastos)` |
| `vec-etiqueta` | `print(ifelse(gastos > 10, "alto", "bajo"))` | `print(np.where(g > 10, "alto", "bajo"))` |
| `vec-cuentas` | `cat("altos:", sum(gastos > 10), ...)` | `print("altos:", np.sum(g > 10), ...)` |

### Foto de estado por línea ejecutada (resumen)

| vuelta | id | i (R / Py) | gastos[i] | condición | etiqueta | altos |
|---|---|---|---|---|---|---|
| 1 | `alto` | 1 / 0 | 12 | TRUE | alto,"","","","" | 1 |
| 2 | `bajo` | 2 / 1 | 5 | FALSE | alto,bajo,"","","" | 1 |
| 3 | `alto` | 3 / 2 | 20 | TRUE | alto,bajo,alto,"","" | 2 |
| 4 | `bajo` | 4 / 3 | 8 | FALSE | ...,bajo,"" | 2 |
| 5 | `alto` | 5 / 4 | 15 | TRUE | alto,bajo,alto,bajo,alto | 3 |

| vuelta while | id | dias | total |
|---|---|---|---|
| 1 | `acumular` | 1 | 12 |
| 2 | `acumular` | 2 | 17 |
| 3 | `acumular` | 3 | 37 (la condición `37 <= 30` es FALSE: sale) |

Visual: la tira con cabezal y el panel de lámparas del escenario; en las líneas `vec-*` la tira entera se pinta de una vez.

### Predicción antes de reproducir (`#vrPred`)
"¿Cuántas veces se ejecuta la línea `if` y cuántas la línea `dia-mas`?" Respuesta: 5 y 3. Distractores: "5 y 5" (cree que el `while`
recorre todo), "3 y 3" (cuenta solo los altos), "1 y 1" (confunde con la versión vectorizada).

### Trampas reales (retos `codigo1`, `codigo2`, `codigo3`)

`codigo1`: `1:length()` con vector vacío. Código corrido:
```r
gastos <- c()
for (i in 1:length(gastos)) {
  cat("vuelta", i, "\n")
}
for (i in seq_along(gastos)) {
  cat("vuelta", i, "\n")
}
cat("fin\n")
```
Salida real:
```
vuelta 1 
vuelta 0 
fin
```
Y con un `if` dentro (`gastos <- numeric(0)`): `Error in if (gastos[i] > 10) altos <- altos + 1 : missing value where TRUE/FALSE needed`.
Pregunta: "¿Cuántas líneas 'vuelta' imprime?" Respuesta: 2, ambas del primer bucle. En Python, `for i in range(len([]))` no da ninguna vuelta.

`codigo2`: `if` con un vector. Código corrido:
```r
gastos <- c(12, 5, 20, 8, 15)
if (gastos > 10) print("alto")
```
Salida real: `Error in if (gastos > 10) print("alto") : the condition has length > 1`. Python con NumPy: `ValueError: The truth value of an
array with more than one element is ambiguous. Use a.any() or a.all()`. Pregunta: "¿Qué función usas para decidir celda por celda?"
Respuesta: `ifelse` (`np.where` en Python).

`codigo3`: un `while` que se sale del vector. Código corrido:
```r
gastos <- c(4, 5, 6)
total <- 0
dias <- 0
while (total <= 30) {
  dias <- dias + 1
  total <- total + gastos[dias]
}
```
Salida real: `Error in while (total <= 30) { : missing value where TRUE/FALSE needed`. Python: `IndexError: list index out of range`.
Pregunta: "¿Por qué R habla de un valor faltante?" Respuesta: `gastos[4]` es `NA`, `total` se vuelve `NA` y `NA <= 30` no es ni `TRUE` ni
`FALSE`. Lección: un `while` necesita una salida garantizada (`while (total <= 30 && dias < length(gastos))`).

Extra para un reto de propiedades (salida real): `gastos <- c(12, NA, 20)`: `ifelse(gastos > 10, "alto", "bajo")` da `"alto" NA "alto"`;
`sum(gastos > 10)` da `NA`; `sum(gastos > 10, na.rm = TRUE)` da `2`.

`p.vr-nota`: "En una línea: `ifelse(gastos > 10, "alto", "bajo")`, `sum(gastos > 10)` y `which(cumsum(gastos) > 30)[1]`."

`details.profundizar` ("next, break y repeat"): `next` salta a la siguiente vuelta, `break` sale del bucle, `repeat { ... if (cond) break }` es un
`while (TRUE)`. Son las otras palabras reservadas de la lista de UD4 (prog4html ancla `normas-para-nombrar-objetos`).

## Retos (9)

1. `ojo-vueltas` (ojo clínico, 5 rondas al azar, aprueba con 4 de 5): se genera un vector de longitud 0 a 4 y un encabezado de bucle elegido
   entre `1:length(x)`, `seq_along(x)`, `seq_len(length(x))`, `2:length(x)`; Francisco dice cuántas vueltas da. Respuestas: con longitud 0,
   `1:length` da 2, `seq_along` 0, `seq_len` 0, `2:length` da 3 (`2:0` = 2, 1, 0); con longitud 1, `2:length` da 2 (`2:1`). Generar y
   comprobar con la regla de `:` (incluye ambos extremos y puede contar hacia abajo).
2. `ojo-vectorizable` (ojo clínico, 5 rondas): una tarea en palabras; decidir "vectorizable" o "necesita bucle". Banco: marcar positivos;
   sumar cuadrados; contar ceros; promedio por grupo (vectorizable con `tapply`); cada valor depende del anterior multiplicado por 1.1
   (en realidad `cumprod`, vectorizable: trampa); ajustar un modelo por cada semilla (bucle); repetir hasta converger (bucle).
3. `construir-while` (construir): con las celdas editables y el umbral del `while`, lograr: (a) que el `while` termine en exactamente 2 días;
   (b) que termine en el día 5; (c) que falle por salirse del vector (y luego arreglarlo poniendo el umbral por debajo de la suma). Se valida
   ejecutando el `while` simulado con las reglas de R.
4. `a-mano-for` (a mano, datos al azar, reintentable): vector de 5 a 7 enteros al azar entre 1 y 25 y umbral al azar; escribir `altos` y la
   etiqueta de la posición k. Pistas: 1) "compara con `>`, no con `>=`"; 2) "cuenta las posiciones desde 1"; 3) muestra la máscara `TRUE/FALSE`.
5. `a-mano-cumsum` (a mano, datos al azar): vector de 5 enteros y umbral; escribir `which(cumsum(x) > umbral)[1]`. Pistas: 1) "escribe las
   sumas acumuladas"; 2) "busca la primera que supera, no la que iguala"; 3) si ninguna supera, la respuesta es `NA`.
6. `cazar-control` (cazar el error, 3 variantes; cada una un bucle de R de 6 líneas con una línea mal):
   - A: `for (i in 1:length(x))` en un código que recibe resultados de un filtro que puede venir vacío (línea mal: el encabezado; arreglo `seq_along`).
   - B: `if (x > 0) positivos <- positivos + 1` fuera del bucle con `x` vector (línea mal: falta el `for` o usar `sum(x > 0)`).
   - C: `while (total < meta) { total <- total + x[k] }` sin `k <- k + 1` (línea mal: falta avanzar; bucle infinito). Mostrar sin ejecutar.
7. `prop-control` (propiedades, opción múltiple, `mezclar: true`, reintentable): "¿Qué devuelve `sum(c(12, NA, 20) > 10)`?" Correcta: `NA`.
   Pistas por error: `2` -> "eso es con `na.rm = TRUE`"; `3` -> "`NA > 10` no es TRUE"; "error" -> "`sum` no se detiene con `NA`, lo propaga".
   Segunda pregunta: "¿Cuál es la diferencia entre `&&` y `&`?" Correcta: "`&&` compara un solo valor (para `if`), `&` compara elemento a
   elemento (para vectores)" (prog4html ancla `in`).
8. Trampas reales `codigo1`, `codigo2`, `codigo3`.

RETOS = ["ojo-vueltas", "ojo-vectorizable", "construir-while", "a-mano-for", "a-mano-cumsum", "cazar-control", "prop-control", "codigo1", "codigo2", "codigo3"]

## Memoria

`B.ordenar`: armar el bucle que etiqueta (R):
1. `etiqueta <- character(length(gastos))`
2. `for (i in seq_along(gastos)) {`
3. `  if (gastos[i] > 10) {`
4. `    etiqueta[i] <- "alto"`
5. `  } else {`
6. `    etiqueta[i] <- "bajo"`
7. `  }`
8. `}`
Distractores: `for (i in 1:length(gastos)) {`, `  if (gastos > 10) {`, `etiqueta <- c()`.

Tarjetas (7):
- ¿Qué necesita la condición de un `if`? -> Un solo `TRUE` o `FALSE`. Con un vector, R 4.2+ da error.
- `1:length(x)` con `x` vacío -> `c(1, 0)`: dos vueltas. Usa `seq_along(x)`.
- ¿Cuándo termina un `while`? -> Cuando su condición es `FALSE`; si nunca lo es, no termina (o falla con `NA`).
- La versión vectorizada de "marcar si pasa de 10" -> `ifelse(gastos > 10, "alto", "bajo")`.
- ¿Cuántos pasan de 10, sin bucle? -> `sum(gastos > 10)`: `TRUE` cuenta 1.
- `&&` frente a `&` -> `&&` para un valor (en `if`); `&` elemento a elemento.
- ¿Cuándo sí un bucle? -> Cuando cada vuelta depende de la anterior o es un trabajo grande, como ajustar un modelo.

## Citas (10)

| id de fuente | página PDF | impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| islr2 | 226 | 215 | 5.3.2 Leave-One-Out Cross-Validation | primer `for (i in 1:10)` de los labs: guarda el error de 10 modelos en un vector preparado antes | paso 3 |
| islr2 | 283 | 272 | 6.5.1 Choosing Among Models | `for (i in 1:19)` que calcula el error de validación de 19 modelos | paso 7 |
| islr2 | 285 | 274 | 6.5.1 (validación cruzada) | dos `for` anidados (`j` bloques, `i` tamaños) y luego `apply` para promediar | paso 7 |
| islr2 | 364 | 353 | 8.3.1 Fitting Classification Trees | `ifelse(Sales <= 8, "No", "Yes")` crea una variable de clase sin bucle | paso 6 |
| islr2 | 547 | 536 | 12.5.2 Matrix Completion | un `while (rel_err > thresh)` que repite hasta que el error baja | paso 4 |
| islr2 | 591 | 580 | 13.6.1 Review of Hypothesis Tests | `for (i in 1:100)` que corre una prueba t por variable | paso 7 (lectura extra) |
| prog4html | ancla `normas-para-nombrar-objetos` | - | Normas para nombrar objetos (UD4) | lista de palabras reservadas: `if else repeat while function for in next break` | paso 2 y profundizar de la vida real |
| prog4html | ancla `in` | - | `%in%` (UD4) | `||` y `&&` no están vectorizados; `%in%` | paso 6 y reto `prop-control` |
| prog4 | 8 | 8 | Operaciones vectorizadas (UD4) | definición de operación vectorizada: suma, producto, `^2`, `sqrt` sobre vectores enteros | paso 7 |
| thinpython | 98 | 77 | Cap. 7: The while Statement | el `while` en Python: flujo de ejecución y un bucle sin garantía de terminar (Collatz) | paso 4 (comparación) |
| thinpython | 70 | 49 | Cap. 5: Conditional Execution / Alternative Execution | `if` y `if/else` en Python | paso 2 (comparación) |

(11 filas.)

## Riesgos y notas para quien construye

- **El material de la materia no trae `if`, `for`, `while` ni `function`** (sección "No aparece" de `sm142002-programacion.md`). La página lo dice
  con naturalidad ("esto no está en el material de UD4; aquí lo ves con ISLR2"). Las únicas citas de la materia son la lista de palabras
  reservadas, `&&`/`||` y la definición de vectorización.
- **Versión de R**: el error `the condition has length > 1` es de R 4.2 en adelante; antes era un aviso y usaba el primer valor. Decirlo.
- **Python no tiene la trampa de `1:length`**: `range(len([]))` está vacío. Es una diferencia real; no inventar un equivalente.
- **Tiempos del paso 7** (0.031 s y 0.002 s) son una medición local con `system.time`; mostrarlos como aproximados y no como salida exacta.
- **Índices**: R desde 1 en `i`; Python desde 0. En el `while`, el conteo `dias` es igual en los dos y Python resta 1 al indexar; explicarlo
  en la narración de la línea `acumular`.
- ISLR2 escribe `for (i in 1:10)` con espacios y la extracción de texto agrega espacios raros; no copiar código del PDF a la página.
- La trampa del `while` (paso 4) con el umbral en 60 debe dar el mismo error que `codigo3`; si quien construye cambia los datos por
  defecto, recalcular la suma total (60).
- `print(etiqueta)` de R muestra `[1]` al inicio y comillas; `cat` no. Respetar la salida exacta.
