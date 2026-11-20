# Especificación: Arrays, forma y ejes (array-forma-ejes)

- Ruta: `numpy`, orden 1. Tanda 9.
- Área: Programación con datos. Fuente del catálogo: "Hoja de referencia de NumPy y cuadernos de SM142002".
- Prerrequisitos: "Tipos y coerción".
- Siguientes: ninguno en el catálogo (`siguientes: []`). En el texto se enlaza por título, sin depender del catálogo, a
  "Reciclaje y broadcasting" (la forma decide si dos arrays se combinan), "Estadística y álgebra con NumPy" (medias y
  desviaciones con `axis`) y "Funciones propias y la familia apply" (el margen de `apply` en R).
- Aparece: SM142002 UD2.
- Resumen del catálogo: "Un array tiene una forma y ejes; sumar por filas o por columnas depende del eje que elijas."

Datos de toda la página (inventados, se dice en la página). Son los mismos de "Reciclaje y broadcasting", para que Francisco
los reconozca después: ventas de 3 productos en 2 tiendas,
`A = [[10, 20, 30], [40, 50, 60]]` (2 filas = tiendas, 3 columnas = productos).
- Forma `(2, 3)`, `ndim` 2, `size` 6, `len(A)` 2, suma total 210.
- `A.sum(axis=0)` = `[50, 70, 90]` (una por producto, forma `(3,)`); `A.sum(axis=1)` = `[60, 150]` (una por tienda, forma `(2,)`).
- `A.mean(axis=0)` = `[25, 35, 45]`; `A.mean(axis=1)` = `[20, 50]`.
- Para el paso 3D: una segunda semana `[[1, 2, 3], [4, 5, 6]]`; `S` con forma `(2, 2, 3)` (semana, tienda, producto).
  `S.sum(axis=0)` = `[[11, 22, 33], [44, 55, 66]]` (2, 3); `S.sum(axis=1)` = `[[50, 70, 90], [5, 7, 9]]` (2, 3);
  `S.sum(axis=2)` = `[[60, 150], [6, 15]]` (2, 2). Verificado con NumPy 2.1.3.

## Imagen central

**Una rejilla con dos flechas de eje y una tarjeta de forma, que se aplasta en la dirección que elijas.**

- La rejilla de A (2 × 3) con encabezados de fila ("tienda 1", "tienda 2") y de columna ("prod 1", "prod 2", "prod 3").
- **Dos flechas de eje** pegadas a la rejilla: el **eje 0** baja (vertical, color `--j`) y el **eje 1** va a la derecha
  (horizontal, color `--k`). Es el mismo dibujo de la hoja de NumPy de la materia ("NumPy Arrays": axis 0 vertical, axis 1 horizontal).
- **Tarjeta de forma**: `(2, 3)` escrita grande, con el 2 en `--j` y el 3 en `--k`. Debajo, tres contadores: `ndim`, `size`, `len`.
- **Botones "Aplastar eje 0" / "Aplastar eje 1" / "Aplastar todo"**: la rejilla se comprime con una animación en la dirección de la
  flecha elegida (las dos filas se deslizan una sobre otra y se funden en una sola fila con las sumas; o las tres columnas en una sola
  columna). En la tarjeta de forma, el número del eje aplastado se tacha y la forma del resultado aparece al lado (`(2, 3)` → `( , 3)` →
  `(3,)`). Un selector "operación" (suma, media, máximo) cambia lo que se escribe en el resultado.
- **Selectores de forma** (botones + y − para filas de 1 a 4 y columnas de 1 a 4; nada de arrastrar): cambian la rejilla con valores
  limpios (decenas). La tarjeta de forma y los contadores se actualizan en vivo.
- **Modo reshape**: los 6 números se vuelven una tira numerada en el orden en que NumPy los lee (por filas: una línea en zigzag que
  recorre fila 1 y luego fila 2). Botones de forma destino `(6,)`, `(3, 2)`, `(2, 3)`, `(1, 6)`, `(6, 1)`, `(4, 2)`; la tira se vuelve a
  doblar en la nueva rejilla siguiendo el mismo orden. Con `(4, 2)` la rejilla se tacha y aparece el error real. Un interruptor
  "leer como NumPy / leer como R" cambia la línea de lectura a columnas (R rellena por columnas).
- **Modo 3D**: dos rejillas una detrás de otra en perspectiva ligera (en móvil, una encima de otra con la etiqueta "semana 1",
  "semana 2"), con una tercera flecha: eje 0 = semana (atraviesa las capas), eje 1 = tienda, eje 2 = producto. Los colores de los ejes se
  corren: eje 0 en un tono neutro con trazo punteado, eje 1 `--j`, eje 2 `--k` (que quien construye elija un token existente para el neutro).
- **Modo R**: la misma rejilla con los encabezados `[1,]`, `[2,]`, `[,1]`, `[,2]`, `[,3]` de R y una tarjeta `dim(A)` = `2 3`. Los
  botones cambian a "apply(A, 1, sum)" y "apply(A, 2, sum)": se dibuja **lo que se conserva** (una banda sobre filas o columnas) en lugar de
  lo que se aplasta.

Modos por paso (capas que se encienden de a una): 1) solo la rejilla con encabezados de tienda y producto, sin flechas ni código;
2) flechas de eje y tarjeta de forma con selectores; 3) botón "Aplastar eje 0"; 4) los dos botones y el selector de operación;
5) modo reshape; 6) modo 3D; 7) modo R.

Todo funciona con botones y casillas a 375 px; la rejilla 3D se apila en vertical en pantallas angostas.

## Hipótesis inicial

"Tienes las ventas de 3 productos en 2 tiendas, en una tabla. Le pides a la computadora 'suma a lo largo del eje 0'.
¿Qué crees que obtienes: el total de cada tienda, el total de cada producto o un solo número? ¿Y por qué?"

Se vuelve a mostrar en el paso 4 (`#citaHipo`), justo antes del destacado.

## Pasos (7)

### Paso 1. Aplastar una tabla
- Idea: resumir una tabla es aplastarla en una dirección; lo que desaparece es la dirección que aplastas, y lo que queda es la otra.
- Escenario: modo 1. La rejilla con nombres de tiendas y productos, sin símbolos ni código. Dos manos dibujadas (o dos flechas grises sin
  número) que empujan hacia abajo o hacia la derecha.
- Chequeo (predicción antes de tocar, sin símbolos): "Empujas la tabla desde arriba hasta que las dos tiendas quedan en una sola fila,
  sumando lo que cae una sobre otra. ¿Cuántos números quedan y qué significan?"
  - Correcta: "3 números: el total de cada producto (50, 70, 90)." Tras responder, la animación aplasta la rejilla y muestra los tres totales.
  - "2 números: el total de cada tienda": eso sale si empujas de lado; aquí las tiendas se funden, así que ya no se distinguen.
  - "1 número: el total de todo": eso sería aplastar en las dos direcciones.
  - "6 números: no cambia nada": aplastar siempre quita una dirección.

### Paso 2. La forma es una tupla de tamaños
- Idea: un array guarda números en una rejilla y su **forma** dice cuántos hay en cada dirección: `(2, 3)` es 2 filas por 3 columnas.
  `ndim` cuenta cuántas direcciones hay (2), `size` cuántos números (6) y `len` solo el tamaño de la primera (2). Un vector tiene forma
  `(3,)`: la coma la pone Python porque la forma es una tupla de un solo elemento.
- Escenario: modo 2. Flechas de eje y tarjeta de forma; selectores de filas y columnas.
- Notación: `A.shape`, `A.ndim`, `A.size`, `len(A)`; `np.array([1, 2, 3]).shape` = `(3,)`; un número suelto `np.array(5)` tiene forma `()`
  y `ndim` 0 (verificado).
- Citas: hojanumpy p.1 "Inspecting Your Array" y "NumPy Arrays"; thinpython p.160 (impresa 139) para la coma de la tupla de un elemento;
  prog1 p.10 (NumPy y sus arrays multidimensionales).
- Chequeo (cálculo con datos en vivo): el escenario fija una forma al azar (filas 1 a 4, columnas 2 a 4, distinta de 2 × 3) y oculta la
  tarjeta. "¿Qué dan `shape`, `size` y `len`?" Tres casillas. Errores típicos con pista: `len` = columnas ("`len` mira solo la primera
  dirección"); `size` = filas + columnas ("son casillas: multiplica").

### Paso 3. axis=0: se colapsan las filas
- Idea: `A.sum(axis=0)` aplasta el eje 0 (el que baja) y deja uno por cada columna. Regla de bolsillo: **la forma del resultado es la
  forma original sin el número del eje que pides**: `(2, 3)` sin el primero = `(3,)`.
- Escenario: modo 3. Botón "Aplastar eje 0". La tarjeta tacha el 2.
- Fórmula viva: `\text{A.sum(axis=0)}[j] = \sum_i A_{ij}` con números: `50 = 10 + 40`.
- Cita hojanumpy p.1 "Aggregate Functions" (`b.max(axis=0)`, `b.cumsum(axis=1)`).
- Chequeo (cálculo con datos en vivo): valores de A al azar (decenas de 10 a 90), resultado oculto. "¿Cuánto vale `A.sum(axis=0)[2]`?"
  (la suma de la tercera columna). Si responde la suma de una fila: "eso es aplastar el eje 1"; si responde la casilla `A[0, 2]`: "falta
  sumar lo que cae encima".

### Paso 4. axis=1, y el nombre que confunde (destacado)
- Idea: `A.sum(axis=1)` aplasta el eje 1 (el que va a la derecha) y deja uno por fila: `[60, 150]`, forma `(2,)`. El número de `axis`
  nombra la dirección que **desaparece**, no la que queda.
- Escenario: modo 4. Los dos botones y el selector de operación (suma, media, máximo). Se muestra la hipótesis (`#citaHipo`).
- Chequeo (elección con explicación): "Quieres el total vendido por **cada tienda**. ¿Qué escribes?"
  - Correcta: `A.sum(axis=1)`: hay que aplastar la dirección de los productos (eje 1) para que quede una por tienda.
  - `A.sum(axis=0)`: da una por producto. (Distractor más tentador: "las tiendas son filas y las filas son el eje 0".)
  - `A.sum()`: un solo número, 210.
  - `A.sum(axis=2)`: no existe ese eje en una tabla de 2 dimensiones (error real: `AxisError: axis 2 is out of bounds for array of dimension 2`).

**Destacado con predicción (confusión natural): "axis=0 se llama 'filas', pero da una respuesta por columna".**
- Predicción: "La hoja de NumPy de la materia dice que `b.max(axis=0)` es el 'valor máximo de una fila'. Con
  `b = [[1.5, 2, 3], [4, 5, 6]]`, ¿qué devuelve?" Opciones: `[3, 6]` (el máximo de cada fila) / `[4, 5, 6]` (correcta) / `6`.
- Explicación: el resultado real es `[4. 5. 6.]` (verificado): el máximo de cada **columna**, porque se aplastan las filas. La hoja lo
  describe mal; la descripción correcta es "el máximo a lo largo del eje 0", es decir, bajando por cada columna. El máximo de cada fila es
  `b.max(axis=1)` = `[3. 6.]`. Decir esto en la página con naturalidad: es un error del material (no está todavía en las erratas de
  `brain/fuentes/sm142002-programacion.md`; lo encontró esta especificación).
- Cita hojanumpy p.1 "Aggregate Functions" en este destacado.
- `details.profundizar` "¿Y `axis=-1`?": los ejes también se cuentan desde atrás; `axis=-1` es el último. En una tabla, `A.sum(axis=-1)`
  da `[60, 150]`, lo mismo que `axis=1` (verificado). Sirve para escribir código que funcione igual con 2 o con 3 dimensiones.

### Paso 5. reshape: los mismos números, otra forma (trampa)
- Idea: `reshape` lee los números en orden (por filas) y los vuelve a doblar en otra forma; no mueve nada de sitio en la lectura. La
  forma nueva debe tener el mismo `size`. `-1` deja que NumPy calcule ese tamaño. `ravel()` (o `reshape(-1)`) aplana.
- Escenario: modo reshape con la tira numerada y los botones de forma.
- Resultados reales: `A.reshape(3, 2)` = `[[10, 20], [30, 40], [50, 60]]`; `A.reshape(-1)` = `[10, 20, 30, 40, 50, 60]`;
  `A.reshape(4, 2)` da `ValueError: cannot reshape array of size 6 into shape (4,2)`.
- **Trampa marcada**: `reshape(3, 2)` **no es** transponer. `A.T` = `[[10, 40], [20, 50], [30, 60]]` pone los productos en filas; `reshape`
  solo vuelve a doblar la tira y mezcla tiendas con productos (la fila `[30, 40]` junta un producto de la tienda 1 con uno de la tienda 2).
- Citas: hojanumpy p.1 "Changing Array Shape" y "Transposing Array". Mencionar que la hoja escribe `g.reshape(3,-2)`: es un `-1` mal
  escrito; NumPy acepta cualquier negativo y da la misma forma `(3, 2)` (verificado, errata ya registrada en el mapa).
- Chequeo (predicción antes de tocar): "¿Cuál es la primera fila de `A.reshape(3, 2)`?" (la rejilla destino se ve vacía).
  - Correcta: `[10, 20]`: se leen los números por filas y se doblan de dos en dos.
  - `[10, 40]`: eso es `A.T`, transponer.
  - `[10, 30]`: eso sería leer por columnas, como R (paso 7).
  - "Error: 3 × 2 no es 2 × 3": el `size` es 6 en los dos, así que se puede.

### Paso 6. Tres ejes: la regla no cambia
- Idea: con dos semanas de ventas, el array tiene forma `(2, 2, 3)` y `ndim` 3. Aplastar cualquier eje quita ese número de la forma:
  `axis=0` suma las semanas (2, 3); `axis=1` suma las tiendas (2, 3); `axis=2` suma los productos (2, 2).
- Escenario: modo 3D; tres botones "Aplastar eje 0/1/2" y la tarjeta de forma de tres números.
- Cita prog4 p.14 (`array(data = vector_matriz, dim = c(5,2,2))`: dos capas de 5 × 2 en R) y hojanumpy p.1 ("NumPy Arrays", el dibujo
  del array 3D con axis 0, 1 y 2).
- Chequeo (cálculo con datos en vivo): un eje al azar (0, 1 o 2), resultado oculto. "¿Qué forma tiene `S.sum(axis=k)` y cuánto vale su
  primera casilla?" Respuestas: k = 0 → `(2, 3)` y 11; k = 1 → `(2, 3)` y 50; k = 2 → `(2, 2)` y 60.
- `details.profundizar` "¿Por qué `keepdims`?": `A.sum(axis=1, keepdims=True)` deja la forma `(2, 1)` (verificado) en lugar de `(2,)`: el eje
  aplastado se queda con tamaño 1. Así el resultado se puede restar de A sin errores. Enlace a "Reciclaje y broadcasting", donde se usa.

### Paso 7. En R: dim(), relleno por columnas y apply (trampa / contraejemplo)
- Idea: en R una matriz es un vector con un atributo `dim`; `dim(A)` da `2 3` y `length(dim(A))` hace de `ndim`. Dos diferencias que
  muerden: (a) R **rellena por columnas**: el mismo vector `c(10, 20, 30, 40, 50, 60)` con `dim(x) <- c(2, 3)` da
  `[[10, 30, 50], [20, 40, 60]]`, mientras NumPy con `reshape(2, 3)` da `[[10, 20, 30], [40, 50, 60]]` (verificado); (b) `apply` nombra la
  dirección que **se conserva**, no la que se aplasta: `apply(A, 1, sum)` = `60 150` (una por fila, como `axis=1`) y `apply(A, 2, sum)` =
  `50 70 90` (una por columna, como `axis=0`).
- Escenario: modo R; el interruptor "leer como NumPy / leer como R" del modo reshape y los botones de `apply`.
- Tabla de traducción (se muestra tras el chequeo):

  | Quieres | NumPy | R |
  |---|---|---|
  | uno por columna | `A.sum(axis=0)` | `apply(A, 2, sum)` o `colSums(A)` |
  | uno por fila | `A.sum(axis=1)` | `apply(A, 1, sum)` o `rowSums(A)` |

  En 2D los números coinciden "en cruz": `axis=0` con margen 2, `axis=1` con margen 1. No es casualidad: NumPy cuenta desde 0 y nombra lo
  que se aplasta; R cuenta desde 1 y nombra lo que se conserva.
- No se repite la explicación de `apply`: una frase y el enlace a "Funciones propias y la familia apply".
- Citas: prog4 p.11 (`matrix()` se llena por columnas salvo `byrow = TRUE`), prog4 p.12 (`dim()`, `nrow()`, `ncol()`), prog4html
  `dimensiones` (`dim(m) <- c(4, 3)` reacomoda por columnas; un vector no tiene `dim`, da `NULL`), islr2 p.55 (impresa 44).
- Chequeo (elección con explicación): "En NumPy usas `A.sum(axis=0)`. ¿Qué escribes en R para obtener lo mismo?"
  - Correcta: `apply(A, 2, sum)`: se conservan las columnas (margen 2), una suma por producto.
  - `apply(A, 1, sum)`: "1 parece 'el primero', como el 0 de NumPy, pero en R significa conservar las filas: da 60 150".
  - `apply(A, 0, sum)`: R cuenta desde 1; el margen 0 no existe.
  - `sum(A)`: un solo número, 210.

## Vida real (Python y R)

Mismos datos que el recorrido. Python 3.13 con NumPy 2.1.3; R 4.6.1. El texto sin el prefijo `id: ` es exactamente lo que se ejecutó.
Las líneas `-:` no tienen id (continuación o llave de cierre) y no generan evento.

### Python

```
import: import numpy as np
datos: A = np.array([[10, 20, 30],
-:               [40, 50, 60]])           # 2 tiendas x 3 productos (inventado)
filas: filas = A.shape[0]
cols: cols = A.shape[1]
pc0: por_col = np.zeros(cols, dtype=int)    # axis=0: se colapsan las filas
forj: for j in range(cols):
fori: for i in range(filas):
suma1:         por_col[j] += A[i, j]
pf0: por_fila = np.zeros(filas, dtype=int)  # axis=1: se colapsan las columnas
fori2: for i in range(filas):
forj2:     for j in range(cols):
suma2:         por_fila[i] += A[i, j]
imp1: print(A.shape, A.ndim)
imp2: print(por_col, A.sum(axis=0))
imp3: print(por_fila, A.sum(axis=1))
```

Ojo con la sangría: la línea `fori` es `    for i in range(filas):` (4 espacios, dentro de `forj`), y `forj2` también lleva 4.
El archivo exacto que se ejecutó:

```python
import numpy as np
A = np.array([[10, 20, 30],
              [40, 50, 60]])           # 2 tiendas x 3 productos (inventado)
filas = A.shape[0]
cols = A.shape[1]
por_col = np.zeros(cols, dtype=int)    # axis=0: se colapsan las filas
for j in range(cols):
    for i in range(filas):
        por_col[j] += A[i, j]
por_fila = np.zeros(filas, dtype=int)  # axis=1: se colapsan las columnas
for i in range(filas):
    for j in range(cols):
        por_fila[i] += A[i, j]
print(A.shape, A.ndim)
print(por_col, A.sum(axis=0))
print(por_fila, A.sum(axis=1))
```

Salida real:
```
(2, 3) 2
[50 70 90] [50 70 90]
[ 60 150] [ 60 150]
```

### R

```r
A <- matrix(c(10, 20, 30,
              40, 50, 60), nrow = 2, byrow = TRUE)   # 2 tiendas x 3 productos
filas <- nrow(A)
cols <- ncol(A)
por_col <- numeric(cols)               # margen 2: una suma por columna
for (j in 1:cols) {
  for (i in 1:filas) {
    por_col[j] <- por_col[j] + A[i, j]
  }
}
por_fila <- numeric(filas)             # margen 1: una suma por fila
for (i in 1:filas) {
  for (j in 1:cols) {
    por_fila[i] <- por_fila[i] + A[i, j]
  }
}
print(dim(A)); print(length(dim(A)))
print(por_col); print(colSums(A)); print(apply(A, 2, sum))
print(por_fila); print(rowSums(A)); print(apply(A, 1, sum))
```

Ids por línea (R): `datos` (las dos primeras líneas; la segunda es `-`), `filas`, `cols`, `pc0`, `forj`, `fori`, `suma1`, `-` (dos `}`),
`-` (la `}` del `for j`), `pf0`, `fori2`, `forj2`, `suma2`, `-`, `-`, `imp1`, `imp2`, `imp3`. R no tiene la línea `import`.

Salida real:
```
[1] 2 3
[1] 2
[1] 50 70 90
[1] 50 70 90
[1] 50 70 90
[1]  60 150
[1]  60 150
[1]  60 150
```

Eventos: Python = import + datos + filas + cols + pc0 (5) + 3 × (forj + 2 × (fori + suma1)) (15) + pf0 (1) + 2 × (fori2 + 3 × (forj2 + suma2)) (14)
+ 3 impresiones = **38**. R = **37** (sin import).

### Foto de estado por línea ejecutada

| Evento | i | j | por_col | por_fila | Visual |
|---|---|---|---|---|---|
| datos, filas, cols | | | | | rejilla A 2 × 3; tarjeta `filas = 2`, `cols = 3` |
| pc0 | | | [0, 0, 0] | | fila de resultados vacía bajo A, con la etiqueta "eje 0 se aplasta" |
| forj/fori/suma1 (j = 0) | 0, 1 | 0 | [10, 0, 0] → [50, 0, 0] | | se ilumina A[i, 0] y cae sobre por_col[0] |
| (j = 1) | 0, 1 | 1 | [50, 20, 0] → [50, 70, 0] | | columna 1 |
| (j = 2) | 0, 1 | 2 | [50, 70, 30] → [50, 70, 90] | | columna 2 |
| pf0 | | | | [0, 0] | columna de resultados vacía a la derecha de A, "eje 1 se aplasta" |
| fori2/forj2/suma2 (i = 0) | 0 | 0, 1, 2 | | [10, 0] → [30, 0] → [60, 0] | A[0, j] se desliza hacia la derecha |
| (i = 1) | 1 | 0, 1, 2 | | [60, 40] → [60, 90] → [60, 150] | fila 1 |
| imp1 | | | | | tarjeta de forma `(2, 3)` y `ndim 2` (en R: `2 3` y `2`) |
| imp2 | | | | | por_col junto al resultado de la librería, los dos iguales |
| imp3 | | | | | por_fila junto al resultado de la librería |

Índices con `ctx.ix` (Python desde 0, R desde 1). Narrar en `suma1`: "por_col[j] += A[i, j]: 10 + 40 = 50; el eje 0 (i) es el que se
recorre y desaparece". En `imp2` (R): "`apply(A, 2, sum)`: el 2 nombra las columnas, que se conservan; en NumPy el mismo resultado se pide
con `axis=0`, que nombra las filas, que se aplastan".

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántos números imprime `A.sum(axis=0)` (en R, `colSums(A)`)?" Respuesta **3** (uno por producto). Distractores: 2 (uno por tienda:
eso es `axis=1`), 6 (no se aplasta nada), 1 (aplastar todo). Pista: "el bucle de afuera de `por_col` recorre `j`, las columnas".

### Trampas reales (retos `codigo1` a `codigo3`)

**codigo1: `reshape` no es transponer.**
```python
import numpy as np
A = np.array([[10, 20, 30],
              [40, 50, 60]])
print(A.reshape(3, 2))
print(A.T)
```
Salida real:
```
[[10 20]
 [30 40]
 [50 60]]
[[10 40]
 [20 50]
 [30 60]]
```
Pregunta: "Quieres una tabla con los productos en filas y las tiendas en columnas. ¿Cuál de las dos sirve?" Correcta: `A.T`. Con `reshape`
la fila `[30 40]` junta el producto 3 de la tienda 1 con el producto 1 de la tienda 2: la forma es la pedida, pero los datos ya no significan
nada. Distractores: "las dos, porque las dos dan (3, 2)" (la forma no garantiza el sentido); "ninguna, hace falta un bucle".

**codigo2: los mismos 6 números, otra tabla en R.**
```python
import numpy as np
x = np.array([10, 20, 30, 40, 50, 60])
print(x.reshape(2, 3))
print(x.reshape(2, 3, order="F"))
```
```r
x <- c(10, 20, 30, 40, 50, 60)
dim(x) <- c(2, 3)
print(x)
```
Salida real (Python y luego R):
```
[[10 20 30]
 [40 50 60]]
[[10 30 50]
 [20 40 60]]
```
```
     [,1] [,2] [,3]
[1,]   10   30   50
[2,]   20   40   60
```
Pregunta: "¿Por qué R no da la misma tabla que `reshape(2, 3)`?" Correcta: R rellena por columnas (orden "Fortran", `order="F"` en NumPy);
NumPy por filas (orden "C"). Para que R dé la tabla de NumPy hace falta `matrix(x, nrow = 2, byrow = TRUE)`. Distractores: "R ordena los
números"; "R tiene un error de redondeo".

**codigo3: una fila no es una tabla de una fila.**
```python
import numpy as np
A = np.array([[10, 20, 30],
              [40, 50, 60]])
print(A[0], A[0].shape)
print(A[0:1], A[0:1].shape)
```
```r
A <- matrix(c(10, 20, 30,
              40, 50, 60), nrow = 2, byrow = TRUE)
print(dim(A[1, ]))
print(dim(A[1, , drop = FALSE]))
```
Salida real (Python y luego R):
```
[10 20 30] (3,)
[[10 20 30]] (1, 3)
```
```
NULL
[1] 1 3
```
Pregunta: "¿Cuántas dimensiones tiene `A[0]`?" Correcta: 1 (forma `(3,)`): al pedir una sola fila con un índice, ese eje desaparece. Con una
rebanada `0:1` el eje se queda con tamaño 1. En R pasa igual: `A[1, ]` es un vector sin `dim` (`NULL`) y `drop = FALSE` conserva la matriz.
Citas: hojanumpy p.1 "Subsetting" (`b[:1]` devuelve `[[1.5, 2., 3.]]`, con doble corchete), prog4html `subconjuntos-1`, islr2 p.59
(impresa 48: "R treats a single row or column of a matrix as a vector").

`p.vr-nota`: `A.sum(axis=0)` y `A.sum(axis=1)` en Python; `colSums(A)` y `rowSums(A)` (o `apply(A, 2, sum)` y `apply(A, 1, sum)`) en R.
`details.profundizar` en la vida real: el bucle de `por_col` recorre las columnas por fuera y las filas por dentro; el de `por_fila` al
revés. El eje que va **por dentro** es el que se suma y desaparece. Eso es todo lo que `axis` le dice a NumPy.

## Retos (11)

RETOS = ["ojo", "construir", "mano", "mano3d", "error", "prop1", "prop2", "codigo1", "codigo2", "codigo3", "formula"]

1. **ojo** (ojo clínico, 5 rondas al azar, aprueba con 4 de 5): se muestra una forma al azar (1 a 3 dimensiones, tamaños 2 a 5) y una
   operación al azar (`sum(axis=k)` con k válido, `reshape(...)` con un tamaño compatible o no, `.T` en 2D). Francisco elige la forma del
   resultado entre cuatro opciones o "error". Generador: para `axis=k`, la correcta es la forma sin la posición k; distractores: quitar
   otra posición, conservar solo la posición k, la forma original.
2. **construir** (manipular hasta cumplir objetivos): con los selectores de forma y los botones de aplastar del escenario, conseguir
   tres resultados: (a) un resultado de forma `(4,)` aplastando el eje 1 (necesita forma `(4, c)`); (b) un resultado de forma `(3,)`
   aplastando el eje 0 (necesita `(f, 3)`); (c) en modo reshape, una forma de 2 dimensiones cuya primera fila sea `[10, 20, 30]`
   partiendo de la tira de 6 (respuesta `(2, 3)`). Ok al cumplir los tres.
3. **mano** (a mano, datos al azar, reintentable): rejilla de forma al azar `(2, 3)`, `(3, 2)` o `(3, 3)` con enteros de 1 a 9. Pide
   `sum(axis=0)` o `sum(axis=1)` (al azar) completo. Pistas escalonadas: 1) "tacha en la forma el número del eje: lo que queda es cuántos
   resultados escribes"; 2) se pinta la dirección del aplastado con la flecha del eje; 3) se da el primer resultado.
4. **mano3d** (a mano): `S` de forma `(2, 2, 2)` con enteros de 1 a 9 al azar, dibujada como dos capas. Pide la forma y los valores de
   `S.sum(axis=k)` con k al azar. Pistas: 1) forma; 2) "axis=0 suma capa con capa, casilla por casilla"; 3) primera casilla resuelta.
5. **error** (cazar el error, 3 variantes, una línea mal; se muestra el código y la salida real o el síntoma, Francisco toca la línea):
   - V1 (Python): "total vendido por tienda": `totales = A.sum(axis=0)` imprime `[50 70 90]` (3 números para 2 tiendas). La línea mal es
     esa: debía ser `axis=1`.
   - V2 (Python): "productos en filas": `B = A.reshape(3, 2)` y `print(B)` da `[[10 20] [30 40] [50 60]]`. La línea mal es el `reshape`:
     debía ser `A.T`.
   - V3 (R): `A <- matrix(c(10, 20, 30, 40, 50, 60), nrow = 2)` y `print(A)` da `10 30 50 / 20 40 60` (verificado). La línea mal es la
     de `matrix`: falta `byrow = TRUE`.
6. **prop1** (propiedades, opción múltiple, `mezclar: true`, reintentable): "¿Qué dice exactamente `axis=0` en `A.sum(axis=0)`?"
   Correcta: "qué eje desaparece en el resultado". Pistas por respuesta equivocada: "qué eje se conserva" → "eso es el margen de `apply` en R;
   mira la tabla del paso 7"; "sumar cada fila" → "prueba con A: da 3 números, uno por columna"; "la primera columna" → "el número de
   `axis` no elige una casilla ni una columna, elige una dirección".
7. **prop2** (propiedades): "Un array tiene forma `(4, 5)`. ¿Cuál de estas formas **no** acepta `reshape`?" Correcta: `(3, 7)` (21 ≠ 20).
   Pistas: `(2, 10)` → "2 × 10 = 20, se puede"; `(20,)` → "aplanar siempre se puede"; `(5, -1)` → "`-1` lo calcula NumPy: da (5, 4)".
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.
11. **formula**: el `B.ordenar` de la parte de memoria.

## Memoria

**B.ordenar** (la regla para saber la forma de un resumen por eje), piezas en orden:
1. Escribe la forma del array: `(2, 3)`.
2. Ubica el número del eje que pides: `axis=0` es el primero, contando desde 0.
3. Tacha ese número: es la dirección que se aplasta.
4. Lo que queda es la forma del resultado: `(3,)`.

Distractores: "Tacha siempre el último número", "El resultado conserva el eje que pides", "Cuenta los ejes desde 1, como en R".

**Tarjetas (8):**
1. ¿Qué es la forma (`shape`) de un array? → Una tupla con el tamaño de cada dirección: `(2, 3)` son 2 filas y 3 columnas.
2. ¿Por qué `(3,)` lleva coma? → Porque la forma es una tupla y una tupla de un solo elemento se escribe con coma final.
3. `ndim`, `size` y `len` de una tabla 2 × 3 → 2, 6 y 2 (`len` solo mira la primera dirección).
4. `A.sum(axis=0)` en una tabla 2 × 3 → Una suma por columna, forma `(3,)`: se aplastan las filas.
5. ¿Qué hace `reshape(3, 2)` con `[[10, 20, 30], [40, 50, 60]]`? → Lee por filas y vuelve a doblar: `[[10, 20], [30, 40], [50, 60]]`. No es transponer.
6. ¿Para qué sirve `-1` en `reshape`? → Para que NumPy calcule ese tamaño a partir del total: `A.reshape(3, -1)` da `(3, 2)`.
7. En R, ¿qué equivale a `A.sum(axis=0)`? → `apply(A, 2, sum)` o `colSums(A)`: en R el número nombra lo que se conserva.
8. ¿Cómo rellena R una matriz? → Por columnas, salvo `byrow = TRUE`; NumPy rellena por filas.

## Citas (12)

| id de fuente | página PDF o ancla | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| prog1 | 10 | 10 | Python en la ciencia de datos | NumPy como biblioteca de arrays multidimensionales y operaciones vectorizadas | Paso 2, al empezar |
| hojanumpy | 1 | 1 | Inspecting Your Array | `a.shape`, `len(a)`, `b.ndim`, `e.size`, `b.dtype`: lo que se le pregunta a un array | Paso 2, al terminar |
| hojanumpy | 1 | 1 | NumPy Arrays | el dibujo de arrays de 1, 2 y 3 dimensiones con las flechas axis 0, axis 1 y axis 2 | Paso 2 (y otra vez en el paso 6) |
| thinpython | 160 | 139 | 12. Tuples Are Immutable | para crear una tupla de un elemento hace falta la coma final; un valor entre paréntesis no es una tupla | Paso 2, profundizar sobre `(3,)` |
| hojanumpy | 1 | 1 | Aggregate Functions | `a.sum()`, `b.max(axis=0)`, `b.cumsum(axis=1)`, `a.mean()`: resúmenes con y sin eje (la hoja describe mal `b.max(axis=0)`) | Paso 4, en el destacado |
| hojanumpy | 1 | 1 | Changing Array Shape | `b.ravel()` y `g.reshape(3,-2)` (un `-1` mal escrito que NumPy igual acepta) | Paso 5, al terminar |
| hojanumpy | 1 | 1 | Transposing Array | `np.transpose(b)` y `i.T` | Paso 5, después del chequeo |
| prog4 | 14 | 14 | Matrices y arrays | `array(data = vector_matriz, dim = c(5,2,2))`: un array de tres dimensiones en R, impreso capa por capa | Paso 6 |
| prog4 | 11 | 11 | Matrices | `matrix(data, nrow, ncol)` se llena por columnas; `byrow = TRUE` por filas | Paso 7, al empezar |
| prog4 | 12 | 12 | Matrices | `dim()`, `nrow()` y `ncol()` de una matriz; indexación `matriz_1[3,2]`, `[1,]`, `[, 2:3]` | Paso 7 |
| prog4html | `dimensiones` | | Dimensiones | `dim(m) <- c(4, 3)` reacomoda 1:12 por columnas; un vector no tiene `dim` (`NULL`) | Paso 7, profundizar (y codigo2) |
| prog4html | `subconjuntos-1` | | Subconjuntos de matrices | `m[, 2]` y `m[3, ]` pasan a vector; `drop = FALSE` conserva la matriz | Vida real, reto codigo3 |

Opcionales si quien construye quiere llegar a 14: islr2 p.55 (impresa 44, 2.3.1 Basic Commands: `matrix()` rellena por columnas, `byrow = TRUE`)
en el paso 7, e islr2 p.59 (impresa 48, 2.3.3 Indexing Data: "R treats a single row or column of a matrix as a vector" y `dim(A)`) en codigo3.
Las dos verificadas con `pdftotext`.

Sin chip (no registrados): cuaderno de clase `UAX_20251105.ipynb`, celdas 73-74 contando desde 1 (`dias = clander['day'].to_numpy()`: una
columna de pandas pasa a un array de forma `(1000,)`); se menciona en el paso 2 como "el primer array que viste en clase". La UD2 (NumPy) no
está publicada: decirlo con naturalidad ("la teoría de NumPy de la UD2 todavía no está en tu carpeta; esto es lo que viene").

## Riesgos y notas para quien construye

- **Erratas de la hoja de NumPy** que la página debe decir con naturalidad: `b.max(axis=0)` descrito como "máximo de una fila" (da el de
  cada columna, `[4. 5. 6.]`, verificado; esta errata no está en el mapa `brain/fuentes/sm142002-programacion.md`: avisar a la sesión
  principal para que la agregue) y `g.reshape(3,-2)` (errata ya mapeada).
- **Colores de ejes**: en 2D, eje 0 `--j` y eje 1 `--k`. En el modo 3D los ejes se corren (eje 0 nuevo = semanas); que el color siga al
  significado (tienda `--j`, producto `--k`) y que la tarjeta de forma lo explique, para no romper la asociación.
- **El modo R no usa la palabra "axis"**: R habla de margen y de `dim`. La tabla de traducción del paso 7 es el único puente.
- **Python imprime `[ 60 150]`** con un espacio de alineación tras el corchete; conservarlo carácter por carácter.
- **Mensaje de `AxisError`**: en NumPy 2.1.3 la clase es `numpy.exceptions.AxisError`; impreso con `type(e).__name__` sale
  `AxisError: axis 2 is out of bounds for array of dimension 2`. Si se muestra en la página, usar ese texto.
- **Vida real en R** tiene varias instrucciones por línea separadas por `;` (`imp1` a `imp3`); el motor las trata como un solo evento
  por línea. La narración debe decir que en R esa línea imprime tres veces.
- `dtype=int` en `np.zeros` es a propósito: sin él, `por_col` sale como `[50. 70. 90.]` y no coincide a la vista con `A.sum(axis=0)`.
- **No repetir** `apply` ni `MARGIN` a fondo (es la página "Funciones propias y la familia apply") ni el broadcasting (página
  "Reciclaje y broadcasting"). Aquí `keepdims` solo se nombra en un profundizar y enlaza.
- R en esta máquina imprime sus mensajes en inglés.
