# Especificación: Reciclaje y broadcasting (broadcasting)

- Ruta: `numpy`, orden 4; también `r-base`, orden 5. Tanda 8.
- Área: Programación con datos. Fuente del catálogo: "Programación y entorno de trabajo (SM142002), UD1, UD4 y UD5".
- Prerrequisitos: "Bucle frente a vectorización".
- Siguientes: "Estadística y álgebra con NumPy".
- Aparece: SM142002 UD4, SM142002 UD2.
- Resumen del catálogo: "Cómo se combinan dos arreglos de tamaños distintos en NumPy y en R."

Datos de toda la página (inventados, se dice en la página): precios de 3 productos en 2 tiendas,
`A = [[10, 20, 30], [40, 50, 60]]` (2 filas = tiendas, 3 columnas = productos). Medias por columna 25, 35, 45;
centrado por columna: `[[-15, -15, -15], [15, 15, 15]]`. Vector de envío por producto `b = [1, 2, 3]`.
Para R: `c(2, 3, 4) + c(1, 1)` (el ejemplo del documento de clase) y `c(1, 2, 3, 4) + c(10, 20)`.

## Imagen central

Una mesa de dos rejillas que se combinan. Arriba, el operando izquierdo (rejilla de colores `--j`); al lado, el operando derecho (`--k`); debajo, la rejilla resultado.

- Cada operando tiene **dos selectores de forma** (filas y columnas, de 1 a 4; el derecho permite además "sin filas", es decir un vector 1D `(n,)`). Los valores se generan limpios (decenas en el izquierdo, unidades en el derecho) para que la suma se lea a ojo.
- Una **regla de alineación** dibuja las formas escritas una sobre otra, **pegadas a la derecha** (`(2, 3)` sobre `( , 3)`), y pinta cada par de dimensiones: verde si son iguales, ámbar si una es 1 (se estira), rojo si no son iguales ni 1.
- Al pulsar **Combinar**: el operando que se estira se copia en "fantasma" (celdas punteadas, color más claro) hasta tapar la forma del resultado, y luego la rejilla resultado se llena celda por celda con la suma. Si hay un rojo, la rejilla resultado se tacha y aparece el mensaje real de NumPy (`operands could not be broadcast together with shapes ...`).
- Un **interruptor NumPy / R**. En modo R los operandos se dibujan como lo que son en R: un vector se pinta como una tira y una matriz como rejilla **rellenada por columnas** (una flecha muestra el orden 1, 2, 3, ... bajando por la primera columna). El vector corto se repite **en ciclo** siguiendo ese orden; cada repetición lleva un tono distinto, y una lámpara de **aviso** se enciende cuando la longitud larga no es múltiplo de la corta (texto real del aviso).
- Un **contador**: "valores escritos por ti" frente a "valores en el resultado" (con `A + b`: 3 frente a 6).

Modos por paso (capas que se encienden de a una): 1) solo la tabla de precios y una fila de envíos, sin código; 2) escalar contra rejilla; 3) modo R con dos tiras de longitudes distintas y la lámpara; 4) regla de alineación con los selectores de forma; 5) columna contra fila (dos estirados a la vez) y el caso `(3,)` contra `(3, 1)`; 6) R con matriz rellenada por columnas y el vector que recorre esa flecha; 7) centrado por columna con las medias como operando derecho.

## Hipótesis inicial

"Tienes una tabla con los precios de 3 productos en 2 tiendas y quieres sumarle a cada producto su costo de envío, que es el mismo en las dos tiendas. ¿Cuántos números tienes que escribir: 3 o 6? Y si escribes solo 3, ¿cómo sabe la computadora a qué casillas sumarlos?"

Se vuelve a mostrar en el paso 4 (`#citaHipo`), cuando aparece la regla de alineación.

## Pasos (7)

### Paso 1. Escribir menos números
- Idea: cuando un dato se repite por filas, basta con escribirlo una vez y dejar que se copie.
- Escenario: modo 1. La tabla 2 × 3 y una fila suelta con los envíos 1, 2, 3, sin símbolos.
- Chequeo (predicción antes de tocar, sin símbolos): "Sumas la fila de envíos a la tabla. ¿Cómo queda la segunda tienda?"
  - Correcta: "41, 52, 63: la misma fila de envíos se suma también a la segunda tienda." Tras responder, la fila se copia en fantasma y la tabla se llena (11, 22, 33 / 41, 52, 63).
  - "40, 50, 60, igual que antes: solo se suma a la primera fila": la fila no se gasta al usarse una vez.
  - "41, 42, 43: se suma el 1 a todo": confunde la fila con un solo número.
  - "No se puede: faltan 3 números": es justo lo que la computadora resuelve copiando.

### Paso 2. Un número contra una tabla
- Idea: el caso más simple de estirar: un escalar se aplica a todas las casillas (`A + 5`, `vector_numerico + 2`). Es lo que ya se vio en "Bucle frente a vectorización".
- Escenario: modo 2. Operando derecho fijo en forma `()` (un número); el fantasma lo copia en las 6 casillas.
- Notación: `A + 5` en NumPy y en R.
- Cita prog4 p.9 (`vector_numerico + 2`).
- Chequeo (cálculo con datos en vivo, escalar elegido al azar entre 1 y 9 y oculto en el resultado): "¿Cuánto vale la casilla de la tienda 2, producto 3?" Respuesta 60 + k. Error típico: k (olvidó el 60) o 60 (no sumó).

### Paso 3. R recicla: el vector corto da vueltas (trampa)
- Idea: en R, dos vectores de longitudes distintas se combinan repitiendo el corto en ciclo; si la longitud larga no es múltiplo de la corta, R **avisa pero calcula igual**.
- Escenario: modo 3. Dos tiras: `c(1, 2, 3, 4) + c(10, 20)` = 11 22 13 24 y `c(2, 3, 4) + c(1, 1)` = 3 4 5 con la lámpara encendida. Selectores de longitud (1 a 6) para las dos tiras.
- Cita el HTML de clase (`operadores-aritméticos---r-como-calculadora`: el ejemplo `c(2,3,4) + c(1,1)` con el aviso en español "longitud de objeto mayor no es múltiplo de la longitud de uno menor") e ISLR2 (pide vectores de la misma longitud para sumar elemento a elemento).
- Menciona en el texto (sin chip; `prog4ej` no está registrado) que los ejercicios de la sesión 1 (líneas 1 a 10) hacen `v / v2`, `v / 4` y `v / 3:4`, y que este último da 0.333 0.5 1 1 porque `:` va antes que `/`.
- Chequeo (cálculo con datos en vivo, vectores al azar: largo de 4 a 6 y corto de 2 a 3, enteros pequeños): "Escribe el resultado completo." La lámpara y el resultado quedan ocultos hasta responder; luego se pregunta "¿Avisará R?" (sí si el largo no es múltiplo del corto).
- **Trampa marcada**: lo importante es que un aviso no es un error; el resultado existe aunque probablemente no sea el que querías.

### Paso 4. La regla de NumPy: alinear por la derecha
- Idea: NumPy compara las formas dimensión por dimensión empezando por la derecha. Dos dimensiones son compatibles si son iguales o si una vale 1 (esa se estira). Si un operando tiene menos dimensiones, se le agregan unos por la izquierda. Si en algún par no se cumple, hay error: NumPy **no recicla**.
- Escenario: modo 4. Selectores de forma y regla pintada. Muestra la hipótesis.
- Notación: `(2, 3) + (3,)` → `(2, 3)`; `(2, 3) + (2,)` → error.
- Cita prog1 p.10 (NumPy y sus arrays multidimensionales; el material no nombra el broadcasting: se dice en la página) y prog4html `subconjuntos-1` (en R, `m[, 2]` deja de ser matriz y pasa a vector; `drop = FALSE` conserva la forma), como puente con la idea de "forma".
- Texto: en la hoja de referencia de NumPy de la UD1 aparece `a - b` con formas `(3,)` y `(2, 3)` sin explicarlo ni nombrarlo; esta página es esa explicación (sin chip si `prog1hojas` no está registrado).
- Chequeo (elección con explicación): "¿Cuál de estas combinaciones funciona en NumPy?"
  - Correcta: `(4, 3)` con `(3,)`: se alinean 3 con 3 y al vector le falta la dimensión de 4, que se rellena con 1 y se estira.
  - `(4, 3)` con `(4,)`: alineado a la derecha queda 3 frente a 4: error. (Distractor más tentador: "4 coincide con las filas".)
  - `(2, 3)` con `(3, 2)`: 3 frente a 2 y 2 frente a 3; ninguno es 1.
  - `(3,)` con `(2,)`: NumPy no recicla como R.

### Paso 5. Fila contra columna: se estiran los dos (destacado)
- Idea: si un operando es columna `(2, 1)` y el otro fila `(3,)` o `(1, 3)`, se estiran los dos y sale una tabla `(2, 3)`: una "tabla de sumar".
- Escenario: modo 5. `[[1], [2]] + [10, 20, 30]` = `[[11, 21, 31], [12, 22, 32]]`; los dos fantasmas a la vez.
- Chequeo (cálculo con datos en vivo, columna y fila al azar de largo 2 a 4): "¿Qué forma tiene el resultado y cuánto vale la casilla de la esquina inferior derecha?"

**Destacado con predicción (confusión natural): "`(3,)` no es lo mismo que `(3, 1)`".**
- Predicción: "`a = np.array([1, 2, 3])`. ¿Qué forma tiene `a + a.reshape(3, 1)`?" Opciones: `(3,)` / `(3, 3)` (correcta) / error.
- Explicación: el vector 1D se alinea a la derecha como fila `(1, 3)`; la versión columna `(3, 1)` se estira hacia la derecha. Resultado real: `[[2, 3, 4], [3, 4, 5], [4, 5, 6]]`, forma `(3, 3)`. Nadie avisa: si querías sumar elemento a elemento, obtienes 9 números en lugar de 3.
- `details.profundizar`: "¿NumPy copia de verdad los datos?" No: el estirado es virtual (se lee el mismo valor con paso 0 en esa dimensión), por eso es barato. Los fantasmas del escenario son una manera de verlo.

### Paso 6. R recicla por columnas (trampa / contraejemplo)
- Idea: en R una matriz es un vector con dimensiones, **rellenado por columnas**; al sumarle un vector, el vector recorre la matriz en ese orden. Por eso `A + c(1, 2)` suma 1 a la tienda 1 y 2 a la tienda 2 (lo que en NumPy da error), y `A + c(1, 2, 3)` no suma por producto: mezcla las casillas **sin avisar** (6 es múltiplo de 3).
- Escenario: modo 6, la flecha del orden por columnas y el vector que da vueltas por ella.
- Resultados reales: `A + c(1, 2)` = `11 21 31 / 42 52 62`; `A + c(1, 2, 3)` = `11 23 32 / 42 51 63`.
- Cita prog4 p.11 (`matrix()` se llena por columnas salvo `byrow = TRUE`), ISLR2 p.44 (lo mismo en el laboratorio) y prog4html `dimensiones` (`dim(m) <- c(4, 3)` reacomoda por columnas).
- Chequeo (predicción antes de tocar): "En R, ¿qué hace `A + c(1, 2, 3)`?"
  - Correcta: "Recorre las casillas por columnas: 1 y 2 a la primera columna, 3 y 1 a la segunda, 2 y 3 a la tercera." (Se ve el resultado 11 23 32 / 42 51 63.)
  - "Suma 1, 2, 3 a los tres productos de cada tienda": eso haría NumPy; en R hay que pedirlo con `sweep`.
  - "Da un aviso": 6 es múltiplo de 3, así que no hay aviso.
  - "Da error, como NumPy": R nunca rechaza por forma en `+` entre matriz y vector.
- `details.profundizar`: tabla espejo. NumPy estira por la **última** dimensión (columnas) y exige compatibilidad; R recicla por la **primera** (filas, porque rellena por columnas) y solo avisa. Para que R actúe por columnas: `sweep(A, 2, v)`, `t(t(A) - v)` o, para centrar, `scale(A, scale = FALSE)`.

### Paso 7. Centrar columnas: el uso de todos los días
- Idea: restar a cada columna su media es un broadcasting `(2, 3) - (3,)`; es el primer paso de estandarizar y de PCA.
- Escenario: modo 7. Operando derecho = medias por columna (25, 35, 45), calculadas en vivo; casillas de A editables (enteros de 0 a 99).
- Fórmula viva: `C_{ij} = A_{ij} - \bar A_{\cdot j}` con números.
- Cita ISLR2 12.5.1 (`apply(USArrests, 2, mean)` y `prcomp(scale = TRUE)` centran y escalan por columnas).
- Chequeo (cálculo con datos en vivo, valores de A al azar con medias enteras): "¿Cuánto vale la casilla tienda 1, producto 2 después de centrar?" y "¿qué forma tiene `A.mean(axis=0)`?" (respuesta `(3,)`).
  - Si da el valor con la media de la fila: confundió `axis=0` (bajar por filas, una media por columna) con `axis=1`.
- Cierre: enlace a "Estadística y álgebra con NumPy".

## Vida real (Python y R)

Mismos datos que el recorrido. Python 3.13.5, NumPy 2.1.3; R 4.6.1. El texto sin el prefijo `id: ` es exactamente lo que se ejecutó.

### Python

```
import: import numpy as np
datos: A = np.array([[10, 20, 30],
-:               [40, 50, 60]])          # 2 tiendas x 3 productos (inventado)
filas: filas = A.shape[0]
cols: cols = A.shape[1]
medias0: medias = np.zeros(cols)
forj: for j in range(cols):                 # una media por columna
media:     medias[j] = A[:, j].sum() / filas
C0: C = np.zeros((filas, cols))
fori: for i in range(filas):                # cada celda menos la media de su columna
forj2:     for j in range(cols):
resta:         C[i, j] = A[i, j] - medias[j]
imp1: print(medias)
imp2: print(C)
imp3: print(A - A.mean(axis=0))             # broadcasting: (2, 3) - (3,)
```

Salida real:
```
[25. 35. 45.]
[[-15. -15. -15.]
 [ 15.  15.  15.]]
[[-15. -15. -15.]
 [ 15.  15.  15.]]
```

### R

```
datos: A <- matrix(c(10, 20, 30,
-:               40, 50, 60), nrow = 2, byrow = TRUE)   # 2 tiendas x 3 productos
filas: filas <- nrow(A)
cols: cols <- ncol(A)
medias0: medias <- numeric(cols)
forj: for (j in 1:cols) {                   # una media por columna
media:   medias[j] <- sum(A[, j]) / filas
-: }
C0: C <- matrix(0, filas, cols)
fori: for (i in 1:filas) {                  # cada celda menos la media de su columna
forj2:   for (j in 1:cols) {
resta:     C[i, j] <- A[i, j] - medias[j]
-:   }
-: }
imp1: print(medias)
imp2: print(C)
imp3: print(sweep(A, 2, colMeans(A)))       # R no estira solo: sweep por columnas
```

Salida real:
```
[1] 25 35 45
     [,1] [,2] [,3]
[1,]  -15  -15  -15
[2,]   15   15   15
     [,1] [,2] [,3]
[1,]  -15  -15  -15
[2,]   15   15   15
```

Eventos: Python 1 (import) + datos, filas, cols, medias0 + 3 × (forj, media) + C0 + 2 × fori + 6 × (forj2, resta) + 3 impresiones = 30; R 29 (sin import).

### Foto de estado por línea ejecutada

| Evento | i | j | medias | C (la casilla que cambia) | Visual |
|---|---|---|---|---|---|
| datos, filas, cols | | | | | rejilla A 2 × 3; filas = 2, cols = 3 |
| medias0 | | | [0, 0, 0] | | fila de medias vacía bajo A |
| forj/media | | 0, 1, 2 (R: 1, 2, 3) | [25, 0, 0] → [25, 35, 0] → [25, 35, 45] | | se ilumina la columna j de A y baja su media |
| C0 | | | | todo 0 | rejilla C vacía |
| fori/forj2/resta | 0, 0, 0, 1, 1, 1 | 0, 1, 2, 0, 1, 2 | | C[0,0] = −15, C[0,1] = −15, C[0,2] = −15, C[1,0] = 15, C[1,1] = 15, C[1,2] = 15 | flecha de A[i, j] y de medias[j] hacia C[i, j] |
| imp1, imp2 | | | | | salidas |
| imp3 | | | | | la fila de medias se copia en fantasma bajo la fila 2 (Python) y la rejilla resultado aparece de una vez; en R, `sweep` hace lo mismo "por columnas (2)" |

Índices con `ctx.ix` (Python 0, R 1). Narrar en `resta`: "C[i, j] = A[i, j] − medias[j] = 40 − 25 = 15"; en `imp3`: "Una línea hace las 6 restas: la fila de medias `(3,)` se estira a `(2, 3)`" (Python) o "`sweep(A, 2, ...)` resta por columnas (el 2 significa columnas); sin él, R reciclaría por columnas de casillas (reto `codigo1`)" (R).

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántas veces se ejecuta la línea de la resta, `C[i, j] = ...`?" Respuesta **6** (2 filas × 3 columnas). Distractores: 3 (solo columnas), 5 (2 + 3), 1 (la línea de broadcasting). Pista: "un bucle de 3 dentro de un bucle de 2".

### Trampas reales (retos `codigo1` a `codigo3`)

**codigo1: en R, restar las medias de columna "sin más" mezcla las casillas.**
```
A <- matrix(c(10, 20, 30,
              40, 50, 60), nrow = 2, byrow = TRUE)
print(A - colMeans(A))
```
Salida real:
```
     [,1] [,2] [,3]
[1,]  -15  -25   -5
[2,]    5   25   15
```
Pregunta: "¿Por qué no salen −15 y 15?" Correcta: R recicla `c(25, 35, 45)` bajando por columnas (25 y 35 a la primera columna, 45 y 25 a la segunda...) y no avisa porque 6 es múltiplo de 3. Arreglo: `sweep(A, 2, colMeans(A))` o `t(t(A) - colMeans(A))` (verificado: dan −15 y 15) o `scale(A, scale = FALSE)` (verificado: mismo centrado más el atributo `scaled:center` 25 35 45).

**codigo2: en NumPy, centrar por filas falla.**
```
import numpy as np
A = np.array([[10, 20, 30],
              [40, 50, 60]])
try:
    print(A - A.mean(axis=1))
except ValueError as e:
    print("ValueError:", e)
print(A - A.mean(axis=1, keepdims=True))
```
Salida real:
```
ValueError: operands could not be broadcast together with shapes (2,3) (2,) 
[[-10.   0.  10.]
 [-10.   0.  10.]]
```
(La línea del error termina con un espacio tal como lo imprime NumPy.) Pregunta: "¿Por qué falla?" Correcta: `(2,)` se alinea a la derecha contra 3. Con `keepdims=True` la media queda `(2, 1)` (verificado) y se estira por columnas.

**codigo3: el aviso de R no detiene nada.**
```
print(c(2, 3, 4) + c(1, 1))
```
Salida real (R en esta máquina está en inglés; el documento de clase muestra el mismo aviso en español):
```
[1] 3 4 5
Warning message:
In c(2, 3, 4) + c(1, 1) :
  longer object length is not a multiple of shorter object length
```
Pregunta: "¿Hay resultado?" Correcta: sí, 3 4 5; el aviso solo informa. En NumPy, `np.array([2, 3, 4]) + np.array([1, 1])` es un error de formas (`(3,)` con `(2,)`), coherente con la regla del paso 4.

`p.vr-nota`: `A - A.mean(axis=0)` en Python y `sweep(A, 2, colMeans(A))` (o `scale(A, scale = FALSE)`) en R.

## Retos (10)

RETOS = ["ojo", "construir", "mano", "mano2", "error", "prop1", "prop2", "codigo1", "codigo2", "codigo3"]

1. **ojo** (ojo clínico, 8 rondas al azar): se muestran dos formas NumPy generadas al azar (1 o 2 dimensiones, tamaños 1 a 4; la mitad compatibles por construcción) y se decide "compatible" o "error"; si es compatible, se elige la forma del resultado entre tres. Ok con 7 de 8.
2. **construir** (manipular hasta cumplir objetivos): con los selectores de forma de los dos operandos, conseguir un resultado de forma objetivo **sin que ninguno de los dos tenga ya esa forma**. Metas: `(4, 3)` (p. ej. `(4, 1)` y `(3,)`), `(2, 4)` (p. ej. `(2, 1)` y `(1, 4)`), `(3, 3)` a partir de dos vectores (`(3, 1)` y `(3,)`). Ok al cumplir las tres.
3. **mano** (a mano, R): vectores al azar, largo L de 4 a 7 y corto c de 2 a 3, enteros de 1 a 9. Escribir el resultado de `x + y` y marcar si habrá aviso. Pistas: 1) "el corto empieza de nuevo cuando se acaba"; 2) se pinta el ciclo con colores; 3) se da el primer resultado completo hasta la primera vuelta.
4. **mano2** (a mano, NumPy): columna `(m, 1)` y fila `(n,)` al azar (m, n de 2 a 3, valores de 1 a 9). Llenar la tabla resultado. Pistas: 1) forma del resultado; 2) "cada casilla es fila de la columna + columna de la fila"; 3) primera fila resuelta.
5. **error** (cazar el error, 3 variantes, una línea mal):
   - V1 (Python): centrar filas con `A - A.mean(axis=1)` (falla con `ValueError`; arreglo `keepdims=True`).
   - V2 (R): centrar columnas con `A - colMeans(A)` (resultado mezclado, sin aviso).
   - V3 (Python): sumar envíos por tienda escribiendo `envio = np.array([[1, 2, 3]]).reshape(3, 1)` y `A + envio` con A de forma `(2, 3)`: da error `(2,3) (3,1)`; la línea mal es el `reshape` (debía quedar `(3,)` o `(1, 3)`).
   Se muestra el código de 4 a 6 líneas y la salida (real) o el síntoma; Francisco toca la línea.
6. **prop1** (opción múltiple): "¿Qué regla usa NumPy para dos dimensiones alineadas?" Correcta: "iguales, o una de ellas vale 1". Pistas: "la más corta se repite en ciclo" → "eso es R; NumPy no recicla"; "basta con que una divida a la otra" → "prueba (4,) con (2,): da error"; "se alinean por la izquierda" → "mira el paso 4: por la derecha".
7. **prop2**: "En R, `A` es 2 × 3. ¿Con qué vector `A + v` suma un valor distinto a cada **tienda** (fila)?" Correcta: `c(1, 2)` (longitud = número de filas). Pistas: `c(1, 2, 3)` → "recorre por columnas: mezcla"; `c(1, 2, 3, 4)` → "no es múltiplo de 6: aviso y resultado mezclado (11 23 31 / 42 54 62, verificado)"; "ninguno, hace falta `sweep`" → "`sweep` hace falta para columnas, no para filas".
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.

## Memoria

**B.ordenar** (la regla de NumPy para decidir si dos formas se combinan), piezas en orden:
1. Escribe las dos formas una sobre otra, pegadas a la derecha.
2. Si una tiene menos dimensiones, complétala con 1 por la izquierda.
3. Compara cada par de dimensiones: iguales, o una de ellas 1.
4. Si algún par falla, error; si no, el resultado toma el mayor de cada par.

Distractores: "Pégalas a la izquierda", "Si una es más corta, repítela en ciclo", "Si algún par falla, NumPy avisa y sigue".

**Tarjetas (7):**
1. ¿Qué es el broadcasting? → La regla con la que NumPy combina arrays de formas distintas estirando las dimensiones de tamaño 1.
2. ¿Qué es el reciclaje en R? → Repetir el vector corto en ciclo hasta igualar al largo; si no es múltiplo, avisa pero calcula.
3. `(2, 3) + (3,)` → `(2, 3)`: el vector se suma a cada fila.
4. `(2, 3) + (2,)` en NumPy → Error: alineados por la derecha, 3 frente a 2.
5. `(3,) + (3, 1)` → `(3, 3)`, no `(3,)`: una fila contra una columna.
6. En R, ¿por qué `A - colMeans(A)` no centra columnas? → R recicla bajando por columnas de casillas; usa `sweep(A, 2, colMeans(A))` o `scale(A, scale = FALSE)`.
7. ¿Para qué sirve `keepdims=True`? → Mantiene la dimensión reducida con tamaño 1 (`(2, 1)`) para que el resultado se pueda estirar contra la tabla original.

## Citas (10)

| id de fuente | página PDF o ancla | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| prog4 | 9 | 9 | Operaciones vectorizadas | `vector_numerico + 2`: un número contra un vector, y sumas elemento a elemento de vectores del mismo largo | Paso 2, al terminar |
| prog4html | `operadores-aritméticos---r-como-calculadora` | | Operadores aritméticos | el reciclaje con `c(2,3,4) + c(1,1)` y el aviso "longitud de objeto mayor no es múltiplo..." | Paso 3, al terminar |
| islr2 | 54 | 43 | 2.3.1 Basic Commands | sumar dos vectores exige que tengan la misma longitud (y cómo comprobarlo con `length()`) | Paso 3, después del chequeo |
| prog1 | 10 | 10 | Python en la ciencia de datos | NumPy y sus arrays multidimensionales; el material no nombra el broadcasting | Paso 4 |
| prog4html | `subconjuntos-1` | | Subconjuntos de matrices | `m[, 2]` pasa a vector y `drop = FALSE` conserva la matriz: la forma importa | Paso 4, profundizar |
| prog4 | 11 | 11 | Matrices | `matrix(data, nrow, ncol)` se llena por columnas; `byrow = TRUE` por filas | Paso 6, al terminar |
| islr2 | 55 | 44 | 2.3.1 Basic Commands | R llena las matrices por columnas salvo `byrow = TRUE`; `sqrt()` y `^` por elemento | Paso 6 |
| prog4html | `dimensiones` | | Dimensiones | `dim(m) <- c(4, 3)` reacomoda 1:12 por columnas | Paso 6, profundizar |
| prog4 | 13 | 13 | cbind y rbind | pegar matrices exige el mismo número de filas o de columnas: aquí R sí es estricto con la forma | Paso 6, profundizar |
| islr2 | 542 | 531 | 12.5.1 Principal Components Analysis | `apply(USArrests, 2, var)` y `prcomp` con `$center` y `$scale`: centrar y escalar por columnas en un análisis real | Paso 7 |

## Riesgos y notas para quien construye

- **El material no explica el broadcasting** (ni el término): la UD2 no está publicada y la hoja de NumPy solo muestra `a - b` con `(3,)` y `(2, 3)`. La página lo dice con naturalidad ("esto no viene en el material de la unidad; aquí está la regla").
- **Fuentes no registradas** (`prog1hojas`, `prog4ej`): mencionarlas en el texto sin chip. Si se registran: hoja de NumPy (página única, sección Arithmetic Operations) y `ejercicios sesión 1 resueltos.R` líneas 1-10.
- **Idioma de los mensajes**: R en esta máquina imprime los avisos en inglés (`LC_MESSAGES` = en_US); el documento de clase los muestra en español. Mostrar el real y mencionar la traducción del documento.
- El mensaje de NumPy termina con un espacio después de `(2,)`; si la página lo copia carácter por carácter, conservarlo o recortar a propósito y decirlo.
- `prog4` p.13 dice cbind/rbind; el mapa ubica cbind y rbind en p.13-14: se cita la 13.
- Las salidas de R de `print(C)` llevan encabezados `[,1]`; no simplificarlos.
- En modo R del escenario no usar la palabra "broadcasting": R no estira dimensiones de tamaño 1; recicla un vector plano. Una matriz más una matriz de otra forma en R da error (verificado: `matrix(1:6, 2) + matrix(1:6, 3)` da `Error in A + B : non-conformable arrays`). También verificados: V3 del reto `error` da `ValueError: operands could not be broadcast together with shapes (2,3) (3,1)` y `np.array([2, 3, 4]) + np.array([1, 1])` da `... with shapes (3,) (2,)`.
- `A + c(1, 2, 3, 4)` en R (prop2) da `11 23 31 / 42 54 62` con aviso de no múltiplo: verificado.
