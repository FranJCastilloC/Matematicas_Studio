# Especificación: Estadística y álgebra con NumPy (numpy-estadistica-algebra)

- Ruta: `numpy`, orden 5. Tanda 9.
- Área: Programación con datos. Fuente del catálogo: "Hoja de referencia de NumPy y cuadernos de SM142002".
- Prerrequisitos: "Reciclaje y broadcasting".
- Siguientes: ninguno en el catálogo (`siguientes: []`). En el texto se enlaza por título a las páginas de matemática que esta página
  usa sin volver a explicarlas: "Varianza y desviación estándar" (por qué n − 1), "Covarianza", "Producto punto y similitud coseno",
  "Inversa y sistemas de ecuaciones"; y a "Arrays, forma y ejes" (de dónde sale `axis`).
- Aparece: SM142002 UD2.
- Resumen del catálogo: "Media, desviación y producto de matrices con un array, y la trampa de ddof entre NumPy y pandas."

**Qué no repetir.** "Bucle frente a vectorización" ya enseña la trampa de `ddof` con un solo vector (`x = [2, 4, 4, 4, 5, 5, 7, 9]`,
2 frente a 2.1381, reto `codigo1` de esa página). Aquí la trampa se lleva a **tablas** (con `axis`), a **pandas** (un `DataFrame` entero)
y a **la coherencia dentro de NumPy** (`np.std` divide entre n pero `np.cov` entre n − 1). "Covarianza" ya enseña `rowvar`: aquí solo se nombra.

**Datos de toda la página (inventados, se dice en la página).**
- Tabla de estadística `X` (5 semanas × 2 columnas: horas de estudio y puntos de un examen de práctica):
  `X = [[2, 8], [4, 4], [5, 10], [6, 16], [8, 12]]`.
  - Medias por columna (`axis=0`): `[5, 10]`. Media de toda la tabla: 7.5. Medias por fila (`axis=1`): `[5, 4, 7.5, 11, 10]`.
  - Desviaciones de la media: horas `(-3, -1, 0, 1, 3)`, puntos `(-2, -6, 0, 6, 2)`. Sumas de cuadrados: 20 y 80.
  - `ddof=0` (entre n = 5): varianzas `[4, 16]`, desviaciones `[2, 4]` exactas. `ddof=1` (entre 4): varianzas `[5, 20]`, desviaciones
    `[2.2361, 4.4721]`. Factor entre las dos: √(5/4) = 1.1180.
  - Producto de desviaciones: 6 + 6 + 0 + 6 + 6 = 24. Covarianza con n − 1: 6. Matriz de covarianzas `[[5, 6], [6, 20]]`.
    Correlación 6 / √(5 · 20) = 0.6 exacta.
- Precios y cantidades (los mismos de "Arrays, forma y ejes" y "Reciclaje y broadcasting"): `A = [[10, 20, 30], [40, 50, 60]]`
  (2 tiendas × 3 productos), `q = [1, 2, 3]` (unidades de cada producto en una canasta).
  `A * q` = `[[10, 40, 90], [40, 100, 180]]`; `A @ q` = `[140, 320]` (lo que cuesta la canasta en cada tienda).
  `A @ A.T` = `[[1400, 3200], [3200, 7700]]`; `A @ A` da error de formas.
- Sistema para el último paso: `M = [[2, 1], [1, 3]]`, `b = [5, 10]`; `np.linalg.solve(M, b)` = `[1, 3]`;
  `inv(M)` = `[[0.6, -0.2], [-0.2, 0.4]]`; `det(M)` = 5 (NumPy imprime `5.000000000000001`).
- Referencia real del máster (en texto, sin chip): cuaderno `UAX_20251105.ipynb`, celdas 80 y 81 contando desde 1 (en Python, índices
  79 y 80 de la lista de celdas): con los 1000 días de `clander['day']`, `np.std(dias)` = 8.833740713876539 y `clander['day'].std()` =
  8.838160899649202. El cuaderno no comenta la diferencia. Comprobado: 8.8337407 × √(1000/999) = 8.83816.

Todo verificado con Python 3.13, NumPy 2.1.3, pandas 2.2.3 y R 4.6.1.

## Imagen central

**Una mesa de trabajo con la tabla X a la izquierda y una "máquina de resumen" a la derecha que muestra cada cuenta hecha a la vista.**
Tiene tres modos que se encienden por pasos.

1. **Modo resumen (pasos 1 a 4).** La rejilla `X` 5 × 2 con encabezados "horas" y "puntos" y las semanas como filas. Casillas
   **editables** (enteros de 0 a 20; botones + y − en móvil). Debajo:
   - Un **selector de eje** con tres botones: "toda la tabla", "por columna (`axis=0`)", "por fila (`axis=1`)". La tabla se aplasta como en
     "Arrays, forma y ejes" y aparece la fila (o columna) de medias.
   - Para la desviación: junto a cada columna, una **tira de barras** con la desviación de cada valor respecto a su media (barras `--pos` a
     la derecha y `--neg` a la izquierda) y, encima, un **cuadrado** por valor cuya área es el cuadrado de la desviación. Los cuadrados se
     apilan en una "caja de suma" (20 para horas, 80 para puntos).
   - Un **interruptor "dividir entre n / entre n − 1"** (`ddof=0` / `ddof=1`): la caja de suma se reparte en 5 o en 4 partes iguales; se
     ve una parte (la varianza) y su raíz (la desviación). Debajo, tres etiquetas que se encienden según el interruptor: "`np.std`",
     "`df.std()` de pandas", "`sd()` de R".
2. **Modo producto (pasos 5 y 6).** La rejilla `A` 2 × 3 (precios) y, a su derecha, `q` como una columna de 3 casillas editables
   (0 a 5, con + y −). Un **interruptor `*` / `@`**:
   - Con `*`, `q` se copia en fantasma sobre cada fila (broadcasting) y cada casilla de A se multiplica por la de abajo: queda una rejilla
     2 × 3 de "piezas".
   - Con `@`, se ven las mismas piezas y luego **una flecha que las barre por fila y las suma** en una columna de 2 totales. El mensaje
     "`@` = multiplicar casilla por casilla y sumar a lo largo del eje que comparten".
   - Una **regla de formas** escrita como dominó: `(2, 3) @ (3,)`; los dos números de en medio se pintan verde si coinciden y rojo si no,
     y los de afuera dan la forma del resultado. Botones para cambiar el operando derecho a `q`, `A`, `A.T` y ver qué pasa (con `A` sale
     el error real).
3. **Modo matrices (pasos 7 y 8).** Dos paneles:
   - Covarianza como producto: `Xc.T` (2 × 5) por `Xc` (5 × 2). Tocar una casilla del resultado 2 × 2 ilumina la fila de `Xc.T` y la
     columna de `Xc` que la producen, con la suma de productos escrita en vivo (`(-3)(-2) + (-1)(-6) + 0 + (1)(6) + (3)(2) = 24`).
   - Sistema: dos rectas en un plano pequeño (`2x + y = 5`, `x + 3y = 10`) con su cruce en (1, 3), y la cuenta `M @ x` = `b` con números.
     Casillas editables para `b` (enteros de −10 a 15): el cruce se mueve y `solve` se recalcula.

Todo con botones y casillas, sin arrastre obligatorio. A 375 px la rejilla X va arriba y la máquina abajo.

## Hipótesis inicial

"Tienes una tabla con las horas de estudio y los puntos de 5 semanas. Le pides a NumPy 'el promedio' y a pandas 'la desviación', sin
decir nada más. ¿Qué crees que te dan: un número, dos o cinco? ¿Y crees que NumPy y pandas te darán la misma desviación?"

Se vuelve a mostrar en el paso 4 (`#citaHipo`), en el destacado de `ddof`.

## Pasos (8)

### Paso 1. Pedir un resumen sin decir de qué
- Idea: un resumen de una tabla depende de qué se aplasta. Si no lo dices, NumPy aplasta todo y mezcla columnas que miden cosas distintas.
- Escenario: modo resumen, solo la rejilla con encabezados; sin código.
- Chequeo (predicción antes de tocar, sin símbolos): "Le das la tabla entera a NumPy y le pides 'el promedio' sin más. ¿Qué te devuelve?"
  - Correcta: "Un solo número, 7.5, que mezcla horas con puntos." Tras responder, la tabla se aplasta entera y aparece 7.5 con una
    etiqueta "horas + puntos: no significa nada".
  - "Dos números, uno por columna": eso hace pandas con `df.mean()`, y NumPy solo si le pides `axis=0`.
  - "Cinco números, uno por semana": eso es `axis=1`.
  - "Un error, porque las columnas son distintas": para NumPy son solo 10 números.
- Cita prog1 p.10 (NumPy para "cálculos matemáticos y estadísticos" sobre arrays).

### Paso 2. Media por columna con axis
- Idea: `X.mean(axis=0)` = `[5, 10]`, una media por columna; `X.mean(axis=1)` una por fila. Es la regla de "Arrays, forma y ejes":
  `(5, 2)` sin el eje 0 queda `(2,)`.
- Escenario: modo resumen con el selector de eje activo.
- Fórmula viva: `\bar x_j = \frac{1}{n}\sum_i X_{ij}` con números: `5 = (2 + 4 + 5 + 6 + 8) / 5`.
- Citas: hojanumpy p.1 "Aggregate Functions" (`a.mean()`, `np.std(b)`); islr2 p.541 (impresa 530): `apply(USArrests, 2, mean)`, una
  media por columna en R.
- Chequeo (cálculo con datos en vivo): las casillas de puntos se regeneran al azar con media entera (cinco enteros de 0 a 20 cuya suma
  sea múltiplo de 5), la fila de medias oculta. "¿Cuánto vale `X.mean(axis=0)[1]`?" Errores con pista: si da la media de una fila → "eso es
  `axis=1`"; si da la suma → "falta dividir entre 5".

### Paso 3. Desviación por columna (np.std divide entre n)
- Idea: la desviación de cada columna sale de: restar la media, elevar al cuadrado, sumar, **dividir entre n** y sacar raíz.
  `np.std(X, axis=0)` = `[2, 4]`: NumPy divide entre n por omisión (`ddof=0`).
- Escenario: barras de desviación, cuadrados y caja de suma; el interruptor fijo en "entre n".
- Fórmula viva: `\sigma_j = \sqrt{\frac{1}{n}\sum_i (X_{ij} - \bar x_j)^2}` con números: `\sqrt{20/5} = 2`.
- No se vuelve a explicar el porqué de n − 1: una línea y el enlace a "Varianza y desviación estándar".
- Chequeo (cálculo con datos en vivo): una columna nueva al azar de 5 enteros con media entera y suma de cuadrados múltiplo de 5 (el
  generador elige desviaciones de una lista de patrones que suman 0, por ejemplo `(-3, -1, 0, 1, 3)`, `(-2, -2, 0, 2, 2)`,
  `(-4, 0, 0, 2, 2)`, y les suma una media de 3 a 12). "¿Cuánto da `np.std` de esa columna?" (dos decimales). Pistas: 1) suma de cuadrados;
  2) entre 5; 3) raíz.

### Paso 4. pandas y R dividen entre n − 1 (trampa y destacado)
- Idea: con los mismos datos, `pd.DataFrame(X).std()` da `[2.2361, 4.4721]` y `apply(X, 2, sd)` en R también: los dos dividen entre
  n − 1 (`ddof=1`). NumPy da `[2, 4]`. No hay error: son dos estimadores distintos y cada librería eligió uno por omisión.
- Escenario: se libera el interruptor "entre n / entre n − 1"; la caja de suma se reparte en 5 o en 4; las etiquetas de librería se encienden.
- **Trampa marcada**: el mismo nombre (`std`), dos números. En `np.std` el argumento se llama `ddof` y vale 0; en pandas también se llama
  `ddof` pero vale 1; en R `sd()` no tiene argumento: siempre n − 1.
- Citas: hojapandas p.2 "Summarize Data" (`std()`, "standard deviation of each object": aplicado a un DataFrame da una por columna);
  prog4html `funciones-de-operaciones-básicas` (`sd(x)` = 2.320022 con `x <- c(2.1, 3.3, 7.5, 4)`: es la de n − 1; con n daría 2.0092,
  verificado); islr2 p.56 (impresa 45: `mean()`, `var()`, `sd()`; `sd(y)` es `sqrt(var(y))`).

**Destacado con predicción (confusión natural): "¿Cuánto importa la diferencia?"**
- Predicción: "En el cuaderno de clase del 5 de noviembre (celdas 80 y 81) NumPy y pandas calculan la desviación de los 1000 días del
  calendario. Con tus 5 semanas la diferencia es de un 12 %. ¿Cuánto crees que es con 1000 datos?" Opciones: "también un 12 %" / "un 5 %" /
  "menos de un 0.1 %" (correcta) / "ninguna: con muchos datos dan exactamente igual".
- Explicación: el factor es √(n/(n − 1)). Con n = 5, √(5/4) = 1.118; con n = 1000, √(1000/999) = 1.0005. Por eso el cuaderno muestra
  8.8337 y 8.8382 sin que nadie lo note: 8.8337 × 1.0005 = 8.8382. La diferencia nunca es cero, pero se vuelve invisible con muchos datos y
  enorme con pocos (en validación cruzada o con grupos pequeños sí importa). Mostrar una minitabla n = 2, 5, 30, 1000 con el factor
  (1.4142, 1.1180, 1.0171, 1.0005).
- Decir en la página que el cuaderno no comenta la diferencia y que es un buen ejemplo de "dos librerías, dos respuestas".
- Chequeo del paso (cálculo con datos en vivo): "Con la columna de puntos actual, ¿cuánto da `np.std(X[:, 1], ddof=1)`?" (dos decimales).
  Si responde el valor con n: "ese es `ddof=0`; ahora reparte la caja entre 4".
- Se muestra la hipótesis (`#citaHipo`).

### Paso 5. `*` multiplica casilla por casilla; `@` multiplica y suma
- Idea: `A * q` da las piezas (cada precio por su cantidad, forma `(2, 3)`, broadcasting); `A @ q` las multiplica y además las suma a lo
  largo del eje que comparten: `[140, 320]`, el costo de la canasta en cada tienda. `A @ q` es lo mismo que `(A * q).sum(axis=1)`.
- Escenario: modo producto con el interruptor `*` / `@`.
- Fórmula viva: `(A q)_i = \sum_k A_{ik} q_k` con números: `140 = 10·1 + 20·2 + 30·3`.
- Citas: hojanumpy p.1 "Arithmetic Operations" (`a * b` es multiplicación elemento a elemento; `e.dot(f)` es el producto punto, con
  `np.full((2,2),7)` por `np.eye(2)` = `[[7, 7], [7, 7]]`, verificado). Nota: la hoja usa `.dot`; `@` hace lo mismo para matrices y es lo
  que se escribe hoy (no está en la hoja).
- Chequeo (predicción antes de tocar): "Antes de activar el interruptor: ¿qué forma tienen `A * q` y `A @ q`?"
  - Correcta: `(2, 3)` y `(2,)`.
  - `(2, 3)` y `(2, 3)`: "`@` suma a lo largo del eje que comparten; ese eje desaparece".
  - `(2,)` y `(2, 3)`: invertidos.
  - "Los dos dan error porque A es 2 × 3 y q tiene 3": el 3 coincide con las columnas de A; eso es justo lo que piden los dos.

### Paso 6. La regla del dominó: (m, k) @ (k, n) → (m, n) (trampa en R)
- Idea: dos matrices se multiplican con `@` solo si el número de columnas de la izquierda es igual al de filas de la derecha; esos dos
  números "se tocan" como fichas de dominó y desaparecen. `A @ A.T`: `(2, 3) @ (3, 2)` → `(2, 2)` = `[[1400, 3200], [3200, 7700]]`.
  `A @ A`: `(2, 3) @ (2, 3)` → error.
- Escenario: regla de dominó con los botones del operando derecho (`q`, `A`, `A.T`).
- Error real de NumPy al probar `A @ A`:
  `ValueError: matmul: Input operand 1 has a mismatch in its core dimension 0, with gufunc signature (n?,k),(k,m?)->(n?,m?) (size 2 is different from 3)`.
- En R: `%*%` es el producto de matrices y `*` es casilla por casilla. **Trampa**: en R, `A * q` **no** hace lo que hace en NumPy: recicla
  `q` bajando por columnas y da `10 60 60 / 80 50 180` (verificado), sin aviso porque 6 es múltiplo de 3 (enlace a "Reciclaje y broadcasting").
  `A %*% q` da la matriz columna `140 / 320`. `A %*% A` da `Error in A %*% A : non-conformable arguments`.
- Cita prog4 p.14 (cuadro "Reflexiona": `t()`, `solve()`, `det()`, `diag()`, `svd()`, `eigen()`, `qr()`, `chol()`; "las matrices ... pueden
  ser manipuladas como matrices en el sentido del álgebra lineal").
- Chequeo (elección con explicación): "¿Cuál de estos productos funciona y qué forma da?" (formas al azar en cada intento, una sola válida).
  Ejemplo fijo: `(4, 2) @ (2, 3)` → `(4, 3)` (correcta); `(4, 2) @ (4, 2)` → "2 no toca a 4"; `(2, 3) @ (2, 3)` → "3 no toca a 2"; `(3,) @ (2, 3)`
  → "un vector de 3 a la izquierda necesita 3 filas a la derecha".
- `details.profundizar` "¿Y el producto punto?": con dos vectores, `u @ v` da un número (la suma de productos). Una fila de A con `q` es un
  producto punto; `A @ q` son dos productos punto. Enlace a "Producto punto y similitud coseno".

### Paso 7. Estadística con álgebra: la matriz de covarianzas como un producto
- Idea: centrar las columnas (`Xc = X - X.mean(axis=0)`, broadcasting) y multiplicar `Xc.T @ Xc` da en una sola cuenta las sumas de
  cuadrados (diagonal: 20 y 80) y la suma de productos cruzados (fuera: 24). Dividir entre n − 1 da `[[5, 6], [6, 20]]`, lo mismo que
  `np.cov(X, rowvar=False)` y que `var(X)` en R.
- Escenario: modo matrices, panel de covarianza; tocar una casilla del resultado ilumina la fila y la columna que la producen.
- Fórmula viva: `S = \frac{1}{n-1} X_c^\top X_c` con números: `6 = 24 / 4`.
- **Segunda trampa de ddof, ahora dentro de NumPy**: `np.cov` divide entre n − 1 por omisión, pero `np.var` y `np.std` entre n. La diagonal
  de `np.cov` es `[5, 20]` y `np.var(X, axis=0)` es `[4, 16]` (reto `codigo2`). Nombrar `rowvar` en una línea y enlazar a "Covarianza".
- Citas: eda6 p.11 (`cor(mtcars)`: la matriz de correlaciones de todas las columnas en R); islr2 p.542 (impresa 531): `apply(USArrests, 2, var)`,
  varianzas por columna. Mencionar la errata de la hoja de NumPy: `a.corrcoef()` no existe como método (es `np.corrcoef(a)`), ya registrada
  en el mapa. `np.corrcoef(X, rowvar=False)` = `[[1, 0.6], [0.6, 1]]` (verificado).
- Chequeo (cálculo con datos en vivo): las horas se regeneran al azar con el mismo generador del paso 3 (los puntos fijos). "¿Cuánto vale la
  casilla `[0, 1]` de `Xc.T @ Xc`?" y "¿y la de `np.cov`?" (la primera entre n − 1). Pista: "toca la casilla para ver qué fila y qué columna
  se multiplican".

### Paso 8. Resolver un sistema: solve mejor que inv
- Idea: `M x = b` se resuelve con `np.linalg.solve(M, b)` = `[1, 3]`. También se puede con `np.linalg.inv(M) @ b`, que da lo mismo, pero
  calcula una inversa que no necesitas (más trabajo y más error de redondeo). Comprobar siempre con `M @ x`.
- Escenario: panel del sistema; dos rectas que se cruzan en (1, 3); casillas de `b` editables.
- Resultados reales: `inv(M)` = `[[0.6, -0.2], [-0.2, 0.4]]`; `M @ solve(M, b)` = `[5, 10]`; `det(M)` = `5.000000000000001` (redondeo).
  En R: `solve(M, b)` = `1 3` y `solve(M)` da la inversa (la misma función con un argumento menos).
- **Contraejemplo**: `np.linalg.inv(M) * b` (con `*`) da `[[3, -2], [-1, 4]]` (verificado): una matriz en vez de un vector. Es el error de los
  pasos 5 y 6 en otro disfraz (reto `error` V3).
- Cita prog4 p.14 ("Reflexiona": `solve()` y `det()`), y enlace a "Inversa y sistemas de ecuaciones".
- Chequeo (cálculo con datos en vivo): `b` al azar construido como `M @ x` con `x` entero de −3 a 4 en cada coordenada; las rectas se dibujan
  sin marcar el cruce. "¿Qué devuelve `np.linalg.solve(M, b)`?" Pistas: 1) "busca dónde se cruzan las rectas"; 2) "comprueba con
  `2x + y` y `x + 3y`".
- `details.profundizar` "¿Por qué `det` da 5.000000000000001?": los números en la computadora son binarios y la cuenta pasa por una
  factorización; el error está en el decimal 15. Nunca compares con `==`: usa `np.allclose`.

## Vida real (Python y R)

Mismos datos que el recorrido (X de horas y puntos; A y q de precios). Python 3.13, NumPy 2.1.3, pandas 2.2.3; R 4.6.1. El texto sin el
prefijo `id: ` es exactamente lo que se ejecutó.

### Python

```
import: import numpy as np
importpd: import pandas as pd
datos: X = np.array([[2, 8], [4, 4], [5, 10], [6, 16], [8, 12]])   # 5 semanas: horas, puntos (inventado)
n: n = X.shape[0]
sd0i: sd0 = np.zeros(X.shape[1])
sd1i: sd1 = np.zeros(X.shape[1])
forj: for j in range(X.shape[1]):                 # una columna a la vez (axis=0)
media:     media = X[:, j].sum() / n
ss0:     ss = 0.0
fori:     for i in range(n):
acum:         ss += (X[i, j] - media) ** 2
sd0:     sd0[j] = (ss / n) ** 0.5                # divide entre n
sd1:     sd1[j] = (ss / (n - 1)) ** 0.5          # divide entre n - 1
imp1: print(sd0, np.std(X, axis=0))
imp2: print(sd1, np.std(X, axis=0, ddof=1))
imppd: print(pd.DataFrame(X).std().values)
precios: A = np.array([[10, 20, 30], [40, 50, 60]])  # precios: 2 tiendas x 3 productos
cant: q = np.array([1, 2, 3])                     # cantidades de cada producto
tot0: total = np.zeros(A.shape[0])
fori2: for i in range(A.shape[0]):                 # fila de A por q
fork:     for k in range(A.shape[1]):
prod:         total[i] += A[i, k] * q[k]
imp4: print(total, A @ q)
imp5: print(A * q)
```

Salida real:
```
[2. 4.] [2. 4.]
[2.23606798 4.47213595] [2.23606798 4.47213595]
[2.23606798 4.47213595]
[140. 320.] [140 320]
[[ 10  40  90]
 [ 40 100 180]]
```

### R

```
datos: X <- matrix(c(2, 8, 4, 4, 5, 10, 6, 16, 8, 12), ncol = 2, byrow = TRUE)   # 5 semanas: horas, puntos
n: n <- nrow(X)
sd0i: sd0 <- numeric(ncol(X))
sd1i: sd1 <- numeric(ncol(X))
forj: for (j in 1:ncol(X)) {                      # una columna a la vez (margen 2)
media:   media <- sum(X[, j]) / n
ss0:   ss <- 0
fori:   for (i in 1:n) {
acum:     ss <- ss + (X[i, j] - media)^2
-:   }
sd0:   sd0[j] <- sqrt(ss / n)                    # divide entre n
sd1:   sd1[j] <- sqrt(ss / (n - 1))              # divide entre n - 1
-: }
imp1: print(sd0)
imp2: print(sd1); print(apply(X, 2, sd))
precios: A <- matrix(c(10, 20, 30, 40, 50, 60), nrow = 2, byrow = TRUE)   # precios: 2 tiendas x 3 productos
cant: q <- c(1, 2, 3)                             # cantidades de cada producto
tot0: total <- numeric(nrow(A))
fori2: for (i in 1:nrow(A)) {                      # fila de A por q
fork:   for (k in 1:ncol(A)) {
prod:     total[i] <- total[i] + A[i, k] * q[k]
-:   }
-: }
imp4: print(total); print(A %*% q)
imp5: print(sweep(A, 2, q, "*"))
```

Salida real:
```
[1] 2 4
[1] 2.236068 4.472136
[1] 2.236068 4.472136
[1] 140 320
     [,1]
[1,]  140
[2,]  320
     [,1] [,2] [,3]
[1,]   10   40   90
[2,]   40  100  180
```

Líneas que solo existen en un lenguaje: `import` e `importpd` (solo Python) e `imppd` (solo Python: la comparación con pandas). En R,
`imp1` imprime solo `sd0` porque **R base no trae una desviación que divida entre n**: la narración lo dice ("en R tienes que escribirla tú;
`sd` siempre usa n − 1"). En `imp5`, Python usa `A * q` (broadcasting) y R usa `sweep(A, 2, q, "*")`, porque `A * q` en R recicla por
columnas y da otra cosa (reto `codigo3`).

Eventos: Python = 6 (import, importpd, datos, n, sd0i, sd1i) + 2 × (forj + media + ss0 + 5 × (fori + acum) + sd0 + sd1) (30) + 3 impresiones
+ 3 (precios, cant, tot0) + 2 × (fori2 + 3 × (fork + prod)) (14) + 2 impresiones = **58**. R = 4 + 30 + 2 + 3 + 14 + 2 = **55**.

### Foto de estado por línea ejecutada

| Evento | j / i / k | media | ss | sd0, sd1 | total | Visual |
|---|---|---|---|---|---|---|
| datos, n | | | | | | rejilla X 5 × 2; n = 5 |
| sd0i, sd1i | | | | [0, 0], [0, 0] | | dos filas vacías bajo X: "entre n" y "entre n − 1" |
| forj, media (j = 0) | j = 0 | 5 | | | | se ilumina la columna horas; aparece la línea de su media |
| fori/acum (j = 0) | i = 0..4 | 5 | 9, 10, 10, 11, 20 | | | cada valor lanza su cuadrado a la caja de suma (9, 1, 0, 1, 9) |
| sd0, sd1 (j = 0) | | | 20 | [2, 0], [2.2361, 0] | | la caja se reparte en 5 y luego en 4 |
| forj, media (j = 1) | j = 1 | 10 | | | | columna puntos |
| fori/acum (j = 1) | i = 0..4 | 10 | 4, 40, 40, 76, 80 | | | cuadrados 4, 36, 0, 36, 4 |
| sd0, sd1 (j = 1) | | | 80 | [2, 4], [2.2361, 4.4721] | | |
| imp1, imp2, imppd | | | | | | etiquetas `np.std` / `ddof=1` / pandas (R: `sd`) junto a cada fila |
| precios, cant, tot0 | | | | | [0, 0] | rejilla A y columna q |
| fori2/fork/prod (i = 0) | i = 0; k = 0, 1, 2 | | | | 10 → 50 → 140 | pieza A[0, k]·q[k] cae en total[0] |
| (i = 1) | i = 1; k = 0, 1, 2 | | | | 40 → 140 → 320 | fila 1 |
| imp4 | | | | | | total junto a `A @ q` (R: `A %*% q`, una matriz columna) |
| imp5 | | | | | | la rejilla de piezas 2 × 3: "esto es `*`; `@` es esto sumado por filas" |

Índices con `ctx.ix` (Python desde 0, R desde 1). Narrar en `acum`: "ss += (X[i, j] − media)²: (2 − 5)² = 9, la suma va en 9". En `sd0`:
"20 / 5 = 4, raíz 2: así divide NumPy por omisión". En `sd1`: "20 / 4 = 5, raíz 2.2361: así dividen pandas y R". En `prod`: "total[i] +=
A[i, k] · q[k]: 30 · 3 = 90, la canasta en la tienda 1 llega a 140".

### Predicción antes de reproducir (`#vrPred`)

"De las tres primeras impresiones de Python (`sd0` con `np.std`, `sd1` con `ddof=1`, y pandas), ¿cuál da números distintos a las otras dos?"
Respuesta: **la primera** (`[2. 4.]`, divide entre n); las otras dos coinciden (`[2.236 4.472]`, entre n − 1). Distractores: "la de pandas,
porque es otra librería"; "ninguna, las tres dan igual"; "las tres son distintas".

### Trampas reales (retos `codigo1` a `codigo3`)

**codigo1: sin `axis`, NumPy resume la tabla entera.**
```python
import numpy as np
X = np.array([[2, 8], [4, 4], [5, 10], [6, 16], [8, 12]])
print(np.mean(X), np.std(X))
print(X.mean(axis=0), X.std(axis=0))
```
Salida real:
```
7.5 4.031128874149275
[ 5. 10.] [2. 4.]
```
Pregunta: "¿Qué significa 4.03?" Correcta: es la desviación de los 10 números juntos, horas y puntos mezclados; no describe ninguna
columna. pandas haría lo contrario por omisión (una por columna). Distractores: "el promedio de las dos desviaciones (2 y 4 dan 3, no 4.03)";
"la desviación de los puntos con otro `ddof`" (con `ddof=1` sería 4.4721). Nota para la página: en R pasa lo mismo con `sd(X)` sobre una
matriz (da 4.249183, los 10 números con n − 1, verificado), mientras que `var(X)` da la matriz de covarianzas 2 × 2: dos funciones
hermanas que tratan la matriz de forma distinta.

**codigo2: dentro de NumPy, `np.var` y `np.cov` no dividen igual.**
```python
import numpy as np
X = np.array([[2, 8], [4, 4], [5, 10], [6, 16], [8, 12]])
print(np.var(X, axis=0))
print(np.diag(np.cov(X, rowvar=False)))
```
Salida real:
```
[ 4. 16.]
[ 5. 20.]
```
Pregunta: "La diagonal de la matriz de covarianzas son las varianzas. ¿Por qué no coinciden?" Correcta: `np.var` usa `ddof=0` por omisión
y `np.cov` usa n − 1 (su argumento `ddof` vale `None` y entonces divide entre n − 1). Arreglo: `np.var(X, axis=0, ddof=1)` da `[5, 20]`
(verificado en el recorrido: `ddof=1` da `[5. 20.]`). Distractores: "`np.cov` está mal"; "`rowvar=False` cambia los números".

**codigo3: en R, `*` no es el producto de matrices (y tampoco el de NumPy).**
```r
A <- matrix(c(10, 20, 30, 40, 50, 60), nrow = 2, byrow = TRUE)
q <- c(1, 2, 3)
print(A * q)
print(A %*% q)
```
Salida real:
```
     [,1] [,2] [,3]
[1,]   10   60   60
[2,]   80   50  180
     [,1]
[1,]  140
[2,]  320
```
Pregunta: "¿Por qué `A * q` no da las piezas `10 40 90 / 40 100 180` como en NumPy?" Correcta: R recicla `q` bajando por columnas (1 y 2 a la
primera columna, 3 y 1 a la segunda, 2 y 3 a la tercera) sin avisar, porque 6 es múltiplo de 3. Para las piezas: `sweep(A, 2, q, "*")`; para
el total: `A %*% q`. Distractores: "R multiplica fila por columna"; "es un error de redondeo".

`p.vr-nota`: `X.std(axis=0, ddof=1)` y `A @ q` en Python; `apply(X, 2, sd)` y `A %*% q` en R.
`details.profundizar` en la vida real: la versión sin bucles de las desviaciones, leída de adentro hacia afuera:
`np.sqrt(((X - X.mean(axis=0)) ** 2).sum(axis=0) / (n - 1))` y en R `sqrt(colSums(sweep(X, 2, colMeans(X))^2) / (n - 1))`
(verificadas con `n = 5` ya definido: dan `[2.23606798 4.47213595]` y `[1] 2.236068 4.472136`).

## Retos (11)

RETOS = ["ojo", "construir", "mano", "mano2", "error", "prop1", "prop2", "codigo1", "codigo2", "codigo3", "formula"]

1. **ojo** (ojo clínico, 5 rondas al azar, aprueba con 4 de 5): dos formas al azar (1 o 2 dimensiones, tamaños 1 a 4) y un operador al azar
   (`*` o `@`). Francisco elige la forma del resultado entre tres o "error". Para `@`: válido si la última de la izquierda coincide con la
   primera (o única) de la derecha; para `*`: la regla de broadcasting. La mitad de las rondas son válidas por construcción.
2. **construir** (manipular hasta cumplir objetivos): con las casillas de `q` (0 a 5) del modo producto, lograr tres canastas:
   `A @ q` = `[60, 150]` (respuesta `q = [1, 1, 1]`), `[100, 220]` (`[1, 0, 3]`), `[50, 140]` (`[1, 2, 0]`). Todas verificadas.
   Ok al cumplir las tres. El escenario muestra las piezas `A * q` mientras tanto.
3. **mano** (a mano, datos al azar, reintentable): una matriz 2 × 2 y un vector de 2 con enteros de −3 a 5; pide `M @ v`. Pistas: 1) "cada
   resultado es una fila por el vector"; 2) se ilumina la primera fila y el vector; 3) primera casilla resuelta.
4. **mano2** (a mano): una columna de 4 o 5 enteros generada con el patrón del paso 3 (media entera; con n = 4 se usan desviaciones como
   `(-3, -1, 1, 3)` o `(-2, 0, 0, 2)`). Pide la desviación con `ddof=0` y con `ddof=1` (dos decimales). Pistas: 1) la media; 2) la suma de
   cuadrados; 3) "una entre n, otra entre n − 1".
5. **error** (cazar el error, 3 variantes, una línea mal; se muestra el código con la salida real):
   - V1 (Python): "desviación de cada columna": `d = np.std(X)` imprime `4.031128874149275`. La línea mal es esa: falta `axis=0`.
   - V2 (Python): "lo que cuesta la canasta en cada tienda": `costo = A * q` imprime `[[ 10  40  90] [ 40 100 180]]`. La línea mal: debía ser `A @ q`.
   - V3 (Python): "resolver el sistema": `x = np.linalg.inv(M) * b` imprime `[[ 3. -2.] [-1.  4.]]` (verificado). La línea mal: debía ser
     `np.linalg.inv(M) @ b`, o mejor `np.linalg.solve(M, b)`.
6. **prop1** (propiedades, opción múltiple, `mezclar: true`, reintentable): "Con los mismos datos, ¿cuál de estas llamadas da un número
   distinto a las otras tres?" Opciones: `np.std(x)` (correcta), `np.std(x, ddof=1)`, `pd.Series(x).std()`, `sd(x)` en R. Pistas: elegir
   `ddof=1` → "es la que iguala a pandas y R"; elegir pandas → "pandas divide entre n − 1 por omisión, como R"; elegir `sd` → "`sd` siempre
   divide entre n − 1".
7. **prop2** (propiedades): "En R, X es 5 × 2. ¿Qué devuelve `var(X)`?" Correcta: "una matriz 2 × 2 de covarianzas, `[[5, 6], [6, 20]]`"
   (verificado). Pistas: "dos varianzas" → "eso es `apply(X, 2, var)`"; "la varianza de los 10 números" → "eso hace `sd(X)` con la
   desviación, no `var`: prueba los dos"; "error" → "`var` acepta matrices".
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.
11. **formula**: el `B.ordenar` de la parte de memoria.

## Memoria

**B.ordenar** (cómo sale `np.std(X, axis=0, ddof=d)` para una columna), piezas en orden:
1. Calcula la media de la columna.
2. Réstale la media a cada valor.
3. Eleva cada diferencia al cuadrado y súmalas.
4. Divide entre n − ddof (n en NumPy por omisión, n − 1 en pandas y R).
5. Saca la raíz cuadrada.

Distractores: "Saca la raíz de cada diferencia antes de sumar", "Divide entre n + 1", "Suma las diferencias sin elevarlas (siempre da 0)".

**Tarjetas (8):**
1. `np.mean(X)` con X de 5 × 2 → Un solo número que mezcla las dos columnas; una por columna es `X.mean(axis=0)`.
2. `ddof` por omisión en `np.std`, en `.std()` de pandas y en `sd` de R → 0, 1 y siempre n − 1.
3. ¿Cuánto cambia la desviación al pasar de n a n − 1? → Por el factor √(n/(n − 1)): 1.118 con 5 datos, 1.0005 con 1000.
4. `A * q` frente a `A @ q` → `*` multiplica casilla por casilla (piezas); `@` multiplica y suma a lo largo del eje compartido.
5. ¿Cuándo funciona `P @ Q`? → Si las columnas de P igualan las filas de Q: `(m, k) @ (k, n)` da `(m, n)`.
6. En R, `*` y `%*%` → `*` es casilla por casilla (y recicla); `%*%` es el producto de matrices.
7. ¿Cómo sale la matriz de covarianzas con álgebra? → Centra las columnas y calcula `Xc.T @ Xc / (n - 1)`.
8. `np.linalg.solve(M, b)` frente a `inv(M) @ b` → Dan lo mismo; `solve` no calcula la inversa y es más estable.

## Citas (11)

| id de fuente | página PDF o ancla | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| prog1 | 10 | 10 | Python en la ciencia de datos | NumPy para cálculos matemáticos y estadísticos sobre arrays, con operaciones vectorizadas | Paso 1, al terminar |
| hojanumpy | 1 | 1 | Aggregate Functions | `a.sum()`, `a.mean()`, `b.max(axis=0)`, `np.std(b)`; ojo: `b.median()` y `a.corrcoef()` no existen como métodos | Paso 2 |
| islr2 | 541 | 530 | 12.5.1 Principal Components Analysis | `apply(USArrests, 2, mean)`: una media por columna en R, y por qué el 2 son las columnas | Paso 2, al terminar |
| hojapandas | 2 | 2 | Summarize Data | `mean()`, `var()`, `std()` aplicados a un DataFrame dan una por columna | Paso 4 |
| prog4html | `funciones-de-operaciones-básicas` | | Funciones de operaciones básicas | `sd(x)` = 2.320022 con `x <- c(2.1, 3.3, 7.5, 4)`: R divide entre n − 1 | Paso 4, en el destacado |
| islr2 | 56 | 45 | 2.3.1 Basic Commands | `mean()`, `var()`, `sd()`; `sd(y)` es `sqrt(var(y))` | Paso 4, después del chequeo |
| hojanumpy | 1 | 1 | Arithmetic Operations | `a * b` multiplica elemento a elemento; `e.dot(f)` es el producto punto | Paso 5 |
| prog4 | 14 | 14 | Matrices (cuadro Reflexiona) | `t()`, `solve()`, `det()`, `diag()`, `svd()`, `eigen()`: las matrices de R como objetos de álgebra lineal | Paso 6 (y otra vez en el paso 8) |
| prog4 | 11 | 11 | Matrices | `matrix()` se llena por columnas: por eso `A * q` recicla bajando por columnas | Paso 6, en la trampa de R |
| eda6 | 11 | 11 | Correlación | `cor(mtcars)`: la matriz de correlaciones de todas las columnas | Paso 7 |
| islr2 | 542 | 531 | 12.5.1 Principal Components Analysis | `apply(USArrests, 2, var)`: varianzas por columna antes de escalar | Paso 7, al terminar |

Todas verificadas con `pdftotext` (prog1 p.10, prog4 p.11 y p.14, islr2 p.56, p.541, p.542, eda6 p.11, hojapandas p.2, hojanumpy p.1) o en el
HTML (`funciones-de-operaciones-básicas` existe y trae `sd(x)` = 2.320022).

Sin chip (no registrados): cuaderno de clase `UAX_20251105.ipynb`, celdas 76 (`np.mean(dias)` = 16.195), 80 (`np.std(dias)` =
8.833740713876539) y 81 (`clander['day'].std()` = 8.838160899649202), contando desde 1 como en el mapa. Se citan en el destacado del paso 4.
La UD2 (NumPy) no está publicada: decirlo con naturalidad.

## Riesgos y notas para quien construye

- **No repetir** lo que ya hacen "Bucle frente a vectorización" (ddof con un vector), "Varianza y desviación estándar" (por qué n − 1) y
  "Covarianza" (`rowvar`, la imagen de los rectángulos). Aquí todo se ve sobre tablas y entre librerías; esas páginas se enlazan.
- **R no tiene `sd` con n**: la línea `imp1` de R solo imprime `sd0`. No inventar un `sd(x, ddof = 0)`: no existe.
- **`A * q` en R** da `10 60 60 / 80 50 180` (reciclaje por columnas); por eso la línea `imp5` de R usa `sweep(A, 2, q, "*")`. Explicarlo
  en la narración.
- **Formato de salida**: Python imprime `[140. 320.] [140 320]` (el bucle en flotante, `@` en entero); R imprime `A %*% q` como matriz
  columna con encabezados `[,1]`. Copiar carácter por carácter.
- **El mensaje de error de `@`** es largo (`matmul: Input operand 1 has a mismatch in its core dimension 0, with gufunc signature
  (n?,k),(k,m?)->(n?,m?) (size 2 is different from 3)`); en móvil debe partir línea sin scroll horizontal (`overflow-wrap: anywhere`).
- **`det(M)` = 5.000000000000001**: si se muestra, mostrarlo tal cual y explicarlo en el profundizar.
- **Los valores del cuaderno** dependen de `clander.csv` (dentro de `dataset.zip`); la página solo los cita, no los recalcula.
- **Generadores de datos al azar**: las columnas para los chequeos de los pasos 3, 4 y 7 deben salir de patrones de desviaciones que sumen
  0 y con suma de cuadrados múltiplo de n para que `ddof=0` sea limpio; con `ddof=1` se piden dos decimales.
- Los mensajes de R salen en inglés en esta máquina (`non-conformable arguments`).
- El paso 8 es el más técnico y el único con `linalg`; si la página queda larga, el panel de las rectas puede ser estático con `b` editable.
