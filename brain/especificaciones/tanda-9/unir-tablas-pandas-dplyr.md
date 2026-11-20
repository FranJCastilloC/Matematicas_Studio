# Especificación: Unir tablas en pandas y dplyr (unir-tablas-pandas-dplyr)

- Ruta: `pandas`, orden 5; también `tidyverse`, orden 3. Tanda 9.
- Área: Programación con datos. Fuente del catálogo: "Hoja de referencia de Pandas, Programación UD5 (EDA I), cuadernos de SM142002".
- Prerrequisitos: "Producto cartesiano y JOIN", "LEFT, RIGHT y FULL JOIN: filas sin pareja".
- Siguientes: ninguno en el catálogo (`siguientes: []`).
- Aparece: SM142002 UD2, SM142002 UD5.
- Resumen del catálogo: "merge y los joins de dplyr: qué filas sobreviven y qué pasa cuando una clave se repite."

Continuidad: en las dos páginas de SQL Francisco ya vio el JOIN como parejas que cumplen la condición del `ON`, las filas
que se multiplican cuando una clave ajena apunta a "muchos" (un pedido con dos líneas sale dos veces) y los cuatro tipos
(INNER, LEFT, RIGHT, FULL) con NULL en el lado sin pareja. Esta página **no repite esa teoría**: la usa. Lo nuevo es:
cómo se escribe en pandas (`pd.merge(..., how=)`) y en dplyr (`left_join` y compañía), qué nombres tienen las columnas
resultantes (sufijos `_x` / `_y` frente a `.x` / `.y`, la clave que se queda o se duplica), las uniones que filtran (`semi`,
`anti`) y la trampa que el material no muestra: **una clave repetida por error en la tabla de búsqueda** multiplica filas en
silencio (en pandas) y cambia los totales.

## Datos de toda la página (inventados, se dice en la página)

Los mismos personajes de una tienda pequeña. Dos tablas; la clave se llama distinto en cada una a propósito
(`pedidos.cliente` y `clientes.id`) y las dos tienen una columna `ciudad` que significa cosas distintas (ciudad de envío y
ciudad donde vive el cliente).

clientes (derecha):

| id | nombre | ciudad |
|---|---|---|
| 1 | Ana | Lima |
| 2 | Beto | Quito |
| 3 | Cris | Bogotá |
| 4 | Dani | Lima |

pedidos (izquierda):

| pedido | cliente | importe | ciudad (envío) |
|---|---|---|---|
| 101 | 1 | 50 | Lima |
| 102 | 2 | 30 | Quito |
| 103 | 1 | 20 | Cusco |
| 104 | 3 | 40 | Bogotá |
| 105 | 5 | 10 | Lima |

Cuentas limpias (todas verificadas al ejecutar):
- Total de importes: 150. Ana tiene dos pedidos (101, 103); Dani ninguno; el pedido 105 apunta a un cliente 5 que no existe.
- Filas: inner 4, left 5, right 5, outer / full 6. semi(clientes, pedidos): Ana, Beto, Cris (3). anti(clientes, pedidos): Dani. anti(pedidos, clientes): 105.
- Trampa (paso 6): Beto aparece **dos veces** en clientes (se mudó a Cali y nadie borró la fila vieja). El left da **6 filas** y el total de importes sube a **180**.
- Sin indicar la clave, las tablas se unen por `ciudad`: pandas (inner por defecto) da 6 filas y dplyr (left) 7, con parejas absurdas (el pedido 105 queda unido a Ana y a Dani).

## Imagen central

**Dos tablas con hilos entre las filas que comparten clave, y debajo la tabla que sale.**

- A la izquierda `pedidos`, a la derecha `clientes` (en móvil, una encima de la otra). Cada fila es una tarjeta; la columna
  clave de cada tabla está resaltada en `--accent`.
- **Hilos**: una línea entre cada pedido y cada cliente cuya clave coincide. Un pedido sin pareja (105) muestra un hilo corto
  que termina en un cuadrito vacío; un cliente sin pedidos (Dani), lo mismo del otro lado.
- **Botones de unión**: `inner`, `left`, `right`, `outer` / `full`, `semi`, `anti`. Al elegir uno, las filas que sobreviven se
  encienden y las que no, se apagan; los cuadritos vacíos se rellenan con `NaN` (pandas) o `NA` (dplyr).
- **Tabla resultado** debajo, con los nombres de columna **reales** de cada lenguaje: en pandas `pedido, cliente, importe,
  ciudad_x, id, nombre, ciudad_y`; en dplyr `pedido, cliente, importe, ciudad.x, nombre, ciudad.y`. Las celdas que vienen de
  cada tabla llevan un borde del color de su tabla (`--j` para pedidos, `--k` para clientes). Un contador grande: "N filas"
  y "total de importe".
- **Interruptor pandas / dplyr**: cambia la línea de código, los nombres de columnas, `NaN` / `NA`, el orden de las filas
  (ver Riesgos) y los números que pasan a decimales en pandas (`101.0`).
- **Selector de clave** (desde el paso 4): `cliente = id` (correcto), `ciudad` (lo que pasa si no dices nada), y en pandas
  `on="id"` (error).
- **Casillas de clave editables** (desde el paso 6): cada tarjeta de `clientes` tiene botones − / + en su `id` (de 1 a 6) y
  un botón **Duplicar** que copia la fila debajo (hasta 6 filas). Así Francisco puede repetir una clave y ver cómo se
  multiplican los hilos. Botón **Volver a los datos** que restaura las tablas.
- Bajo la tabla, la línea de código que produce lo que se ve, por ejemplo
  `pd.merge(pedidos, clientes, left_on="cliente", right_on="id", how="left")` o
  `left_join(pedidos, clientes, by = c("cliente" = "id"))`.

Modos por paso: 1) tablas e hilos sin código; 2) left con `merge` y `left_join`; 3) los cuatro `how`; 4) claves con nombre
distinto; 5) columnas que chocan: sufijos; 6) clave repetida y filas que se multiplican; 7) uniones que filtran: semi y anti.

## Hipótesis inicial

"Tienes una tabla de 5 pedidos y una de clientes. Si a cada pedido le pegas los datos de su cliente con un left join,
¿la tabla que sale puede tener más de 5 filas? ¿Cuándo?"

Se vuelve a mostrar en el paso 6 (`#citaHipo`), cuando la clave repetida infla las filas.

## Pasos (7)

### Paso 1. Hilos entre filas
- Idea: unir es buscar, para cada fila de una tabla, las filas de la otra que tienen la misma clave. Si hay pareja, se pegan
  sus datos; si no, la fila se queda sola. Es el JOIN de SQL (enlace a las dos páginas de SQL), sin código todavía.
- Escenario: modo 1, las dos tablas sin hilos. Al resolver el chequeo se dibujan los hilos de uno en uno.
- Chequeo (predicción antes de tocar, sin símbolos): "Cada pedido busca a su cliente por el número de cliente. ¿Qué
  afirmación es cierta?"
  - Correcta: "Cuatro pedidos encuentran cliente; el 105 no tiene cliente; Dani no tiene pedidos."
  - "Cada cliente encuentra exactamente un pedido": Ana tiene dos y Dani ninguno.
  - "Hay cinco hilos, uno por pedido": el 105 apunta a un cliente 5 que no existe.
  - "Ana sale una sola vez porque es un solo cliente": sale una vez por cada pedido suyo.
- Cita prog1 p.31 (los joins combinan filas de dos tablas "basadas en una condición"; Imagen 5 con los cuatro diagramas).

### Paso 2. `merge` y `left_join`: pegar a la izquierda
- Idea: la tabla izquierda es la que escribes primero. `pd.merge(pedidos, clientes, left_on="cliente", right_on="id",
  how="left")` y `left_join(pedidos, clientes, by = c("cliente" = "id"))` conservan **todos los pedidos**; el 105 sale con
  `NaN` (pandas) o `NA` (R) en las columnas de clientes. En este paso el selector de clave está fijo en `cliente = id` (su
  sintaxis se explica en el paso 4).
- Notación entra aquí. Escenario: modo 2, botón `left` activo, tabla resultado con nombres reales.
- Chequeo (cálculo con datos en vivo): "¿Cuántas filas tiene el resultado y cuántas celdas vacías hay en la columna
  `nombre`?" Respuesta: 5 y 1 (salida real abajo). Distractores comunes: 4 y 0 (eso es inner), 5 y 0, 6 y 1.
- Salida real pandas:
  ```
     pedido  cliente  importe ciudad_x   id nombre ciudad_y
  0     101        1       50     Lima  1.0    Ana     Lima
  1     102        2       30    Quito  2.0   Beto    Quito
  2     103        1       20    Cusco  1.0    Ana     Lima
  3     104        3       40   Bogotá  3.0   Cris   Bogotá
  4     105        5       10     Lima  NaN    NaN      NaN
  ```
  Salida real dplyr:
  ```
    pedido cliente importe ciudad.x nombre ciudad.y
  1    101       1      50     Lima    Ana     Lima
  2    102       2      30    Quito   Beto    Quito
  3    103       1      20    Cusco    Ana     Lima
  4    104       3      40   Bogotá   Cris   Bogotá
  5    105       5      10     Lima   <NA>     <NA>
  ```
- Cita hojapandas p.2 ("Standard Joins": `pd.merge(adf, bdf, how='left', on='x1')` con el `NaN` dibujado), eda5 p.13
  (`left_join(x = df_A, y = df_B, by = "ID")` con `df_A` y `df_B`; la fila `F` sale con `NA` en p.14).
- Texto: el cuaderno UAX_20251028, celda 30, hace lo mismo con los 1000 pedidos de clase:
  `pd.merge(ordenes, clientes, on='CustomerID', how='left')` y luego filtra China. Sin chip.

### Paso 3. Los cuatro `how`: qué filas sobreviven
- Idea: `how="inner" | "left" | "right" | "outer"` en pandas; `inner_join`, `left_join`, `right_join`, `full_join` en dplyr.
  Las filas del resultado son: las parejas (4) + los huérfanos del lado que conservas (105 a la izquierda, Dani a la
  derecha). inner 4, left 5, right 5, outer 6.
- Escenario: modo 3, los cuatro botones; un marcador "parejas + huérfanos izquierda + huérfanos derecha = filas".
- Chequeo (predicción antes de tocar): "¿Cuántas filas da `how="outer"` (o `full_join`)?" Respuesta 6 = 4 + 1 + 1.
  Distractores: 9 (5 + 4, sumar las tablas), 20 (5 × 4, el producto cartesiano de la página de SQL), 5.
- Verificado: pandas inner 4 `[101, 102, 103, 104]`; left 5; right 5 `[101.0, 103.0, 102.0, 104.0, nan]` con Dani;
  outer 6. dplyr: inner 4, right 5 (Dani al final con `pedido` NA), full 6.
- Cita eda5 p.14 (`right_join`, `inner_join` y `full_join` con `df_A` y `df_B`: 5, 4 y 6 filas) y prog1 p.33 (FULL JOIN "combina
  los resultados de un LEFT JOIN y un RIGHT JOIN").
- `details.profundizar`: "¿Por qué `101` se vuelve `101.0` en pandas?" En `right` y `outer` aparece un hueco en `pedido`
  (la fila de Dani); una columna entera de pandas no puede guardar `NaN`, así que toda la columna pasa a decimal. R no tiene
  ese problema: sus números ya son decimales (`double`) y su `NA` existe para todos los tipos. Salida real de `outer`:
  ```
     pedido  cliente   id nombre
  0   101.0      1.0  1.0    Ana
  1   103.0      1.0  1.0    Ana
  2   102.0      2.0  2.0   Beto
  3   104.0      3.0  3.0   Cris
  4     NaN      NaN  4.0   Dani
  5   105.0      5.0  NaN    NaN
  ```
  (con `[["pedido", "cliente", "id", "nombre"]]`). Nota sobre el orden: pandas ordena `outer` por la clave; dplyr deja primero
  el orden de la izquierda y añade al final lo que solo está a la derecha.

### Paso 4. Cuando la clave se llama distinto
- Idea: la clave no tiene por qué llamarse igual en las dos tablas. pandas: `left_on="cliente", right_on="id"`, y el resultado
  **conserva las dos columnas** (`cliente` e `id`, que repiten la información; `id` queda en decimal si hay huecos). dplyr:
  `by = c("cliente" = "id")` o `by = join_by(cliente == id)`, y el resultado **conserva solo la de la izquierda** (`cliente`).
  Si usas `on=` con un nombre que solo está en una tabla, pandas falla.
- Escenario: modo 4. Selector de clave con la opción `on="id"` (pandas).
- Chequeo (predicción antes de tocar): "En pandas escribes `pd.merge(pedidos, clientes, on="id")`. ¿Qué pasa?"
  - Correcta: "`KeyError: 'id'`: `pedidos` no tiene columna `id`" (salida real).
  - "Une bien porque `id` existe en clientes": `on` exige la columna en las dos tablas.
  - "Une por `cliente` automáticamente": pandas no adivina que `cliente` e `id` son lo mismo.
  - "Une por `ciudad`": eso pasa si no pones `on` en absoluto (se ve en `codigo2`).
  En dplyr el equivalente `left_join(pedidos, clientes, by = "id")` da (salida real):
  ```
  Join columns in `x` must be present in the data.
  ✖ Problem with `id`.
  ```
- Cita eda5 p.14 ("¿Qué ocurre si las columnas tienen nombres distintos?": renombra la clave de `df_B` a `KL` y usa
  `by = c("ID"="KL")`; el resultado se queda con `ID`, el nombre de la izquierda, en p.14-15).
- Texto: el cuaderno UAX_20251028, celda 34, usa `left_on='OrderID', right_on='ProductID'`. Decir con naturalidad que esa
  unión no tiene sentido: empareja el número de pedido con el número de producto (los datos de clase no traen `ProductID` en
  los pedidos); es una demostración de sintaxis, no de análisis. Sin chip.

### Paso 5. Columnas que chocan: sufijos
- Idea: si una columna que **no** es clave existe en las dos tablas (`ciudad`), el resultado necesita dos nombres. pandas
  agrega `_x` (izquierda) y `_y` (derecha); dplyr agrega `.x` y `.y`. Los dos dejan elegir: `suffixes=("_envio",
  "_cliente")` y `suffix = c("_envio", "_cliente")`. Los sufijos por defecto no dicen nada: mejor ponerlos.
- Escenario: modo 5. Las dos columnas `ciudad` se iluminan en las tablas de arriba y sus dos herederas en el resultado;
  casilla "poner sufijos con significado".
- Chequeo (elección con explicación): "En el resultado de pandas, ¿cómo se llama la ciudad donde vive el cliente?"
  - Correcta: `ciudad_y` (viene de la tabla derecha, `clientes`).
  - `ciudad_x`: esa es la de envío, de la izquierda.
  - `ciudad.y`: así la llama dplyr, no pandas.
  - `ciudad_cliente`: solo si escribiste `suffixes`.
- Salidas reales: pandas `['pedido', 'cliente', 'importe', 'ciudad_x', 'id', 'nombre', 'ciudad_y']` y con sufijos
  `['pedido', 'cliente', 'importe', 'ciudad_envio', 'id', 'nombre', 'ciudad_cliente']`; dplyr
  `"pedido" "cliente" "importe" "ciudad.x" "nombre" "ciudad.y"` y con sufijos `"ciudad_envio"`, `"ciudad_cliente"` (ver
  `codigo3`).
- Texto: el cuaderno UAX_20251028, celda 31, une `ordenes` consigo misma por `CustomerID` y trabaja con `ShipCountry_x`,
  `OrderID_x` y `PaymentMethod_y` (197 filas de China): una auto-unión en la que todas las columnas chocan. Sin chip.

### Paso 6. Una clave repetida multiplica filas (destacado y trampa)
- Idea: cada fila de la izquierda sale **una vez por cada pareja** que encuentra. Si la tabla de búsqueda tiene una clave
  repetida por error, el left join **agrega filas** y los totales se inflan, aunque "left" suene a "quedarse con la
  izquierda". Antes de unir, comprueba que la clave de la tabla de búsqueda sea única: `clientes["id"].duplicated().sum()`
  (da 1 con Beto repetido) o `count(clientes, id) |> filter(n > 1)` (da `id 2, n 2`); o pide que lo compruebe la propia
  unión: `validate="many_to_one"` en pandas (lanza `MergeError`) y `relationship = "many-to-one"` en dplyr (lanza error).
- Escenario: modo 6. Botón **Beto se mudó a Cali** (agrega la fila `2, Beto, Cali` a clientes); el pedido 102 se queda con
  dos hilos y el resultado gana una fila. Casillas editables de `id` y botón Duplicar para experimentar. Muestra de nuevo la
  hipótesis.
- **Destacado con predicción (la confusión natural del concepto): "¿Un left join puede tener más filas que la tabla de la
  izquierda?"**
  - Predicción: "Con Beto dos veces en clientes, ¿cuántas filas da el left y cuánto suma `importe`?" Opciones:
    "5 y 150" / "6 y 180" (correcta) / "6 y 150" / "5 y 180".
  - Explicación: el pedido 102 (30) encuentra dos Betos y sale dos veces; su importe se cuenta dos veces. Nada se rompe, no
    hay error: el número de filas solo es "el de la izquierda" cuando la clave de la derecha es única. En la página de SQL
    ("Filas que se multiplican") la multiplicación era correcta (un pedido con dos líneas); aquí es un error de los datos.
    Lo que cambia no es la unión, es si la repetición tiene sentido.
- **Trampa marcada**: pandas no avisa nunca. dplyr 1.2.1 avisa **solo si la relación es de muchos a muchos** en toda la
  tabla: aquí avisa (Ana tiene dos pedidos y Beto dos filas), pero si solo se unen los pedidos 102 y 104 con la misma tabla de
  clientes, el resultado tiene 3 filas (102 dos veces) **sin ningún aviso** (verificado). Salidas en `codigo1`.
- Chequeo del paso (cálculo con datos en vivo, con las tablas que Francisco haya editado): "¿Cuántas filas da el left
  ahora?" Fórmula de la página: suma, para cada pedido, del número de clientes con su clave (o 1 si ninguno). Con la fila de
  Beto duplicada, 6. Si edita, el valor se recalcula; se exige que haya al menos una clave repetida antes de aceptar.
- Material: el material de la materia **no muestra** este caso (según el mapa de citas, no aparece en ningún archivo);
  decirlo.
- `details.profundizar`: "¿Muchos a uno, uno a muchos, muchos a muchos?" Los tres valores de `validate` (`"one_to_one"`,
  `"one_to_many"`, `"many_to_one"`, `"many_to_many"`) y de `relationship` en dplyr; cuándo cada repetición es legítima
  (pedidos a clientes: muchos a uno; clientes a pedidos: uno a muchos).

### Paso 7. Uniones que filtran: semi y anti
- Idea: a veces no quieres pegar columnas, solo **quedarte con las filas que tienen (o no tienen) pareja**.
  `semi_join(clientes, pedidos, by = c("id" = "cliente"))`: clientes con algún pedido (Ana, Beto, Cris), **una vez cada uno**
  y solo con sus columnas. `anti_join(...)`: los que no tienen (Dani). En pandas no hay `how="semi"`: se escribe con una
  máscara `clientes[clientes["id"].isin(pedidos["cliente"])]` y su negación `~`, o con `indicator=True`, que agrega la columna
  `_merge` (`both`, `left_only`, `right_only`). Un inner **no** sirve como semi: Ana saldría dos veces.
- Escenario: modo 7. Botones `semi` y `anti`; el resultado muestra solo columnas de una tabla; un interruptor "cuál va a la
  izquierda" (clientes o pedidos).
- Chequeo (elección con explicación): "¿Qué devuelve `anti_join(pedidos, clientes, by = c("cliente" = "id"))`?"
  - Correcta: "El pedido 105, con sus cuatro columnas" (salida real: `105 5 10 Lima`).
  - "Dani": eso es `anti_join(clientes, pedidos, ...)`; el orden importa.
  - "Los pedidos 101 a 104": eso es `semi_join`.
  - "Una tabla vacía": hay un pedido cuyo cliente no existe.
- Cita eda5doc `joins` (`pacientes` y `laboratorio`: `semi_join` y `anti_join` explicados con datos), hojapandas p.2
  ("Filtering Joins": `adf[adf.x1.isin(bdf.x1)]` y `adf[~adf.x1.isin(bdf.x1)]`; "Set-like Operations" con
  `indicator=True` y `_merge == "left_only"`), y eda5 p.12 (la lista de seis funciones de join; `semi_join` y `anti_join`
  solo se nombran en la teoría: decirlo).
- `details.profundizar`: "Buscar con un diccionario en lugar de recorrer": el bucle de la vida real compara 5 × 4 = 20
  veces; con un diccionario `id -> nombre` cada pedido busca a su cliente de un golpe (Think Python, cap. 11, un diccionario
  es un mapeo de claves a valores). Así trabajan por dentro `merge` y los joins de dplyr con tablas grandes.

## Vida real (Python y R)

Mismos datos que el recorrido (sin la fila duplicada). Python 3.13 con pandas 2.2.3; R 4.6.1 con dplyr 1.2.1.
Algoritmo: el left join escrito con dos bucles (cada pedido recorre todos los clientes), contando filas, y luego la versión
de la librería. El texto sin el prefijo `id: ` es exactamente lo que se ejecutó; `-:` marca continuación (mismo evento).
`import` solo existe en Python y `lib` solo en R. Las demás líneas comparten id.

### Python

```
import: import pandas as pd
clientes: clientes = pd.DataFrame({"id": [1, 2, 3, 4],
-:                          "nombre": ["Ana", "Beto", "Cris", "Dani"],
-:                          "ciudad": ["Lima", "Quito", "Bogotá", "Lima"]})
pedidos: pedidos = pd.DataFrame({"pedido": [101, 102, 103, 104, 105],
-:                         "cliente": [1, 2, 1, 3, 5],
-:                         "importe": [50, 30, 20, 40, 10],
-:                         "ciudad": ["Lima", "Quito", "Cusco", "Bogotá", "Lima"]})   # inventado
filas0: filas = 0
fori: for i in range(len(pedidos)):               # cada pedido (izquierda)
parejas0:     parejas = 0
forj:     for j in range(len(clientes)):          # busca en clientes (derecha)
si:         if pedidos["cliente"].iloc[i] == clientes["id"].iloc[j]:
imprime:             print(pedidos["pedido"].iloc[i], clientes["nombre"].iloc[j])
parejas:             parejas = parejas + 1
filas:             filas = filas + 1
sinpareja:     if parejas == 0:                        # sin pareja: se queda con NaN
imprimeNA:         print(pedidos["pedido"].iloc[i], "NaN")
filasNA:         filas = filas + 1
imp1: print(filas)
merge: r = pd.merge(pedidos, clientes, left_on="cliente", right_on="id", how="left")
imp2: print(r)
```

Salida real:
```
101 Ana
102 Beto
103 Ana
104 Cris
105 NaN
5
   pedido  cliente  importe ciudad_x   id nombre ciudad_y
0     101        1       50     Lima  1.0    Ana     Lima
1     102        2       30    Quito  2.0   Beto    Quito
2     103        1       20    Cusco  1.0    Ana     Lima
3     104        3       40   Bogotá  3.0   Cris   Bogotá
4     105        5       10     Lima  NaN    NaN      NaN
```

### R

```
clientes: clientes <- data.frame(id = c(1, 2, 3, 4),
-:                        nombre = c("Ana", "Beto", "Cris", "Dani"),
-:                        ciudad = c("Lima", "Quito", "Bogotá", "Lima"))
pedidos: pedidos <- data.frame(pedido = c(101, 102, 103, 104, 105),
-:                       cliente = c(1, 2, 1, 3, 5),
-:                       importe = c(50, 30, 20, 40, 10),
-:                       ciudad = c("Lima", "Quito", "Cusco", "Bogotá", "Lima"))   # inventado
filas0: filas <- 0
fori: for (i in 1:nrow(pedidos)) {                # cada pedido (izquierda)
parejas0:   parejas <- 0
forj:   for (j in 1:nrow(clientes)) {             # busca en clientes (derecha)
si:     if (pedidos$cliente[i] == clientes$id[j]) {
imprime:       cat(pedidos$pedido[i], clientes$nombre[j], fill = TRUE)
parejas:       parejas <- parejas + 1
filas:       filas <- filas + 1
-:     }
-:   }
sinpareja:   if (parejas == 0) {                       # sin pareja: se queda con NA
imprimeNA:     cat(pedidos$pedido[i], "NA", fill = TRUE)
filasNA:     filas <- filas + 1
-:   }
-: }
imp1: print(filas)
lib: suppressMessages(library(dplyr))
merge: r <- left_join(pedidos, clientes, by = c("cliente" = "id"))
imp2: print(r)
```

Salida real (`cat(..., fill = TRUE)` termina la línea sin espacio sobrante; comprobado con `cat -e`):
```
101 Ana
102 Beto
103 Ana
104 Cris
105 NA
[1] 5
  pedido cliente importe ciudad.x nombre ciudad.y
1    101       1      50     Lima    Ana     Lima
2    102       2      30    Quito   Beto    Quito
3    103       1      20    Cusco    Ana     Lima
4    104       3      40   Bogotá   Cris   Bogotá
5    105       5      10     Lima   <NA>     <NA>
```

Eventos: 76 en cada lenguaje. Python: import, clientes, pedidos, filas0; 5 × (fori, parejas0); 20 × (forj, si);
4 × (imprime, parejas, filas); 5 × sinpareja; 1 × (imprimeNA, filasNA); imp1, merge, imp2. R: lo mismo sin `import` y con
`lib` entre `imp1` y `merge`.

### Foto de estado por línea ejecutada

Índices con `ctx.ix` (Python desde 0, R desde 1).

| i (py / R) | pedido | cliente | j que coincide (py / R) | lo que imprime | parejas al salir | filas al salir | Visual |
|---|---|---|---|---|---|---|---|
| 0 / 1 | 101 | 1 | 0 / 1 (Ana) | `101 Ana` | 1 | 1 | el pedido 101 resaltado; un rayo recorre los 4 clientes; hilo verde a Ana, grises a los demás |
| 1 / 2 | 102 | 2 | 1 / 2 (Beto) | `102 Beto` | 1 | 2 | |
| 2 / 3 | 103 | 1 | 0 / 1 (Ana) | `103 Ana` | 1 | 3 | Ana recibe su segundo hilo |
| 3 / 4 | 104 | 3 | 2 / 3 (Cris) | `104 Cris` | 1 | 4 | |
| 4 / 5 | 105 | 5 | ninguno | `105 NaN` / `105 NA` | 0 | 5 | cuatro comparaciones en rojo; `sinpareja` pinta el hilo corto con cuadrito vacío |
| imp1 | | | | `5` / `[1] 5` | | 5 | contador de filas |
| merge, imp2 | | | | la tabla | | | la tabla resultado aparece entera; se resaltan `id` (solo pandas, en decimal) y los sufijos |

En cada `si`, el visual pinta la comparación `cliente[i] == id[j]` con los dos números (verde si es verdadera). Narrar en
`sinpareja`: "Ningún cliente tenía ese número: el left join lo conserva igual, con huecos en las columnas de clientes."
Narrar en `merge`: "La librería hace los mismos cuatro hilos y el hueco del 105, pero no compara 20 veces: busca cada clave
con un índice (ver el profundizar del paso 7)."

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántas veces se ejecuta la comparación `if pedidos... == clientes...`?" Respuesta **20** (5 pedidos × 4 clientes, haya o
no pareja). Distractores: 5 (una por pedido), 4 (las parejas), 9 (5 + 4). Pista: "Está dentro de dos bucles."

### Trampas reales (retos `codigo1` a `codigo3`)

En los tres, `clientes` y `pedidos` se crean con las mismas líneas de arriba (más `import pandas as pd` en Python).

**codigo1: Beto dos veces (clave repetida).**
Python:
```
extra = pd.DataFrame({"id": [2], "nombre": ["Beto"], "ciudad": ["Cali"]})
clientes2 = pd.concat([clientes, extra], ignore_index=True)   # Beto, dos veces
m = pd.merge(pedidos, clientes2, left_on="cliente", right_on="id", how="left")
print(len(m), m["importe"].sum())
print(m[["pedido", "nombre", "importe", "ciudad_y"]])
try:
    pd.merge(pedidos, clientes2, left_on="cliente", right_on="id",
             how="left", validate="many_to_one")
except pd.errors.MergeError as e:
    print("MergeError:", e)
```
Salida real:
```
6 180
   pedido nombre  importe ciudad_y
0     101    Ana       50     Lima
1     102   Beto       30    Quito
2     102   Beto       30     Cali
3     103    Ana       20     Lima
4     104   Cris       40   Bogotá
5     105    NaN       10      NaN
MergeError: Merge keys are not unique in right dataset; not a many-to-one merge
```
R:
```
suppressMessages(library(dplyr))
clientes2 <- rbind(clientes, data.frame(id = 2, nombre = "Beto", ciudad = "Cali"))
m <- left_join(pedidos, clientes2, by = c("cliente" = "id"))
print(nrow(m))
print(sum(m$importe))
```
Salida real (el aviso, en inglés, sale al terminar la línea del `left_join`):
```
Warning message:
In left_join(pedidos, clientes2, by = c(cliente = "id")) :
  Detected an unexpected many-to-many relationship between `x` and `y`.
ℹ Row 2 of `x` matches multiple rows in `y`.
ℹ Row 1 of `y` matches multiple rows in `x`.
ℹ If a many-to-many relationship is expected, set `relationship =
  "many-to-many"` to silence this warning.
[1] 6
[1] 180
```
Con `relationship = "many-to-one"` dplyr da error (verificado): `Each row in `x` must match at most 1 row in `y`.` /
`ℹ Row 2 of `x` matches multiple rows in `y`.`
Pregunta: "¿Por qué el total pasó de 150 a 180?" Correcta: "el pedido 102 (30) encontró dos clientes con id 2 y salió dos
veces". Distractores: "porque el left agrega el pedido 105" (ya estaba en el left normal), "porque Ana tiene dos pedidos" (eso
ya estaba en los 150), "por el aviso de R" (el aviso no cambia nada).

**codigo2: unir sin decir por qué columna.**
Python:
```
m = pd.merge(pedidos, clientes)          # sin on: une por TODAS las columnas comunes
print(m)
```
Salida real:
```
   pedido  cliente  importe  ciudad  id nombre
0     101        1       50    Lima   1    Ana
1     101        1       50    Lima   4   Dani
2     102        2       30   Quito   2   Beto
3     104        3       40  Bogotá   3   Cris
4     105        5       10    Lima   1    Ana
5     105        5       10    Lima   4   Dani
```
R:
```
suppressMessages(library(dplyr))
m <- left_join(pedidos, clientes)
print(nrow(m))
```
Salida real:
```
Joining with `by = join_by(ciudad)`
Warning message:
In left_join(pedidos, clientes) :
  Detected an unexpected many-to-many relationship between `x` and `y`.
ℹ Row 1 of `x` matches multiple rows in `y`.
ℹ Row 1 of `y` matches multiple rows in `x`.
ℹ If a many-to-many relationship is expected, set `relationship =
  "many-to-many"` to silence this warning.
[1] 7
```
Pregunta: "¿Por qué el pedido 105 aparece unido a Ana y a Dani?" Correcta: "sin `on` / `by`, las dos librerías unen por las
columnas que se llaman igual: `ciudad`; el 105 se envía a Lima y Ana y Dani viven en Lima". Notar también: pandas usa `inner`
por defecto (6 filas: el 103, enviado a Cusco, desaparece); `left_join` conserva el 103 con `NA` (7 filas). dplyr al menos
dice por qué columna unió (el mensaje `Joining with ...`); pandas no dice nada.

**codigo3: los nombres de las columnas resultantes.**
Python:
```
m = pd.merge(pedidos, clientes, left_on="cliente", right_on="id")
print(m.columns.tolist())
m = pd.merge(pedidos, clientes, left_on="cliente", right_on="id",
             suffixes=("_envio", "_cliente"))
print(m.columns.tolist())
```
Salida real:
```
['pedido', 'cliente', 'importe', 'ciudad_x', 'id', 'nombre', 'ciudad_y']
['pedido', 'cliente', 'importe', 'ciudad_envio', 'id', 'nombre', 'ciudad_cliente']
```
R:
```
suppressMessages(library(dplyr))
m <- inner_join(pedidos, clientes, by = c("cliente" = "id"))
print(names(m))
m <- inner_join(pedidos, clientes, by = c("cliente" = "id"),
                suffix = c("_envio", "_cliente"))
print(names(m))
```
Salida real:
```
[1] "pedido"   "cliente"  "importe"  "ciudad.x" "nombre"   "ciudad.y"
[1] "pedido"         "cliente"        "importe"        "ciudad_envio"  
[5] "nombre"         "ciudad_cliente"
```
Pregunta: "¿Qué columna tiene pandas que dplyr no tiene?" Correcta: "`id`: pandas conserva las dos claves cuando se llaman
distinto; dplyr se queda con la de la izquierda". Distractores: "`ciudad_y`" (dplyr la tiene como `ciudad.y`), "`nombre`",
"ninguna".

`p.vr-nota`: `pd.merge(pedidos, clientes, left_on="cliente", right_on="id", how="left", validate="many_to_one")` y
`left_join(pedidos, clientes, by = join_by(cliente == id), relationship = "many-to-one")`: unir y, de paso, exigir que cada
pedido tenga como mucho un cliente. (`join_by` verificado con `suffix`: mismas 5 filas y columnas `ciudad_envio`,
`ciudad_cliente`.) En R base: `merge(pedidos, clientes, by.x = "cliente", by.y = "id", all.x = TRUE)` (verificado; ordena por
la clave y pone `cliente` primero).

## Retos (11)

RETOS = ["ojo", "construir", "mano", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3", "formula"]

1. **ojo** (ojo clínico, 8 rondas al azar, aprueba con 7 de 8): se generan dos tablas pequeñas (izquierda de 3 a 5 filas,
   derecha de 2 a 4, claves enteras entre 1 y 5, a veces con una clave repetida en la derecha) y un tipo de unión al azar
   (`inner`, `left`, `right`, `outer`, `semi`, `anti`). Francisco decide sin contar a mano si el resultado tiene **menos,
   igual o más filas que la tabla izquierda**. La página calcula la respuesta con la regla de los hilos. Se garantiza que en
   las 8 rondas salgan al menos dos casos de "más" (clave repetida con `left` o `inner`).
2. **construir** (manipular hasta cumplir objetivos, con las claves editables y los botones): (a) que el `left` tenga
   exactamente 7 filas; (b) que el `inner` tenga 3 filas; (c) que `anti_join(clientes, pedidos)` quede vacío; (d) que el total
   de importe del `left` sea 190 sin cambiar ningún importe. Ok al cumplir los cuatro, cada uno partiendo de los datos de la
   página (botón Volver a los datos entre objetivos). Ejemplos de solución, solo para comprobar que existen: (a) duplicar a
   Ana (101 y 103 salen dos veces: 7 filas); (b) cambiar el id de Beto a 4 (quedan 101, 103 y 104); (c) cambiar el id de Dani
   a 5 (todos los clientes tienen pedido); (d) duplicar a Cris (150 + 40) o cambiar el id de Dani a 3 (Cris dos veces). La
   página verifica el resultado, no el camino.
3. **mano** (a mano, datos al azar, pistas escalonadas, reintentable): dos tablas de 4 filas con claves al azar entre 1 y 4
   (la derecha puede tener una repetida) e importes múltiplos de 10. Pide: (1) filas del `inner`; (2) filas del `left`;
   (3) suma de importes del `left`. Pistas: 1) "para cada fila izquierda, cuenta sus parejas en la derecha"; 2) "si no tiene
   pareja, en el left cuenta 1"; 3) primera fila resuelta con sus hilos dibujados.
4. **error** (cazar el error, 3 variantes con una línea mal):
   - V1 (Python): para "pegar el nombre del cliente a cada pedido", `r = pd.merge(pedidos, clientes)`: une por `ciudad`
     (salida real de `codigo2`: 6 filas, 101 con Ana y Dani, 103 desaparece). Línea mal: falta `left_on="cliente",
     right_on="id", how="left"`.
   - V2 (R): `r <- left_join(pedidos, clientes, by = "id")`: error real `Join columns in `x` must be present in the data.` /
     `✖ Problem with `id`.` Línea mal: debía ser `by = c("cliente" = "id")`.
   - V3 (Python): para "los clientes que tienen al menos un pedido", `m = pd.merge(clientes, pedidos, left_on="id",
     right_on="cliente")` y luego `len(m)` da 4, con nombres `['Ana', 'Ana', 'Beto', 'Cris']` (verificado). Línea mal: un
     inner repite a Ana; debía ser `clientes[clientes["id"].isin(pedidos["cliente"])]` (3 filas: Ana, Beto, Cris) o
     `semi_join` en R (3 filas, verificado).
5. **prop1** (opción múltiple, `mezclar: true`, reintentable): "Haces un left join de `pedidos` (5 filas) con otra tabla.
   ¿Cuántas filas puede tener el resultado?" Correcta: "5 o más; más solo si la otra tabla repite alguna clave que tienen los
   pedidos". Pistas: "exactamente 5" → "mira el paso 6"; "5 o menos" → "el left nunca pierde filas de la izquierda"; "el
   producto de las dos tablas" → "eso es el producto cartesiano, sin condición".
6. **prop2**: "¿En qué se diferencian `semi_join(clientes, pedidos)` e `inner_join(clientes, pedidos)`?" Correcta: "`semi`
   deja cada cliente con pedido una sola vez y solo con sus columnas; `inner` repite al cliente por cada pedido y pega las
   columnas de pedidos". Pistas: "son iguales" → "cuenta cuántas veces sale Ana en cada uno"; "`semi` deja los que no tienen
   pareja" → "eso es `anti`"; "`semi` trae las columnas de los dos" → "solo trae las de la izquierda".
7. **prop3**: "¿Por qué en un `right` de pandas el número de pedido 101 aparece como `101.0`?" Correcta: "la columna recibió
   un `NaN` (la fila de Dani) y una columna entera de pandas no puede guardarlo, así que pasa a decimal". Pistas: "porque
   `merge` divide" → "no hay ninguna cuenta"; "porque R lo hace igual" → "R muestra `101`: sus números ya son `double` y tiene
   `NA`"; "porque 101 era texto" → "era entero; mira el `dtype`".
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.
11. **formula**: el `B.ordenar` de Memoria.

## Memoria

**B.ordenar** (el left join seguro en pandas), piezas en orden:
1. `pd.merge(pedidos, clientes,`
2. `left_on="cliente", right_on="id",`
3. `how="left",`
4. `validate="many_to_one")`

Distractores: `on="id",` (la columna no existe en `pedidos`), `how="semi",` (no existe en pandas), `by = c("cliente" = "id"),`
(sintaxis de dplyr). Se registra como reto `formula`. Al resolver, mostrar el par en dplyr:
`left_join(pedidos, clientes, by = c("cliente" = "id"), relationship = "many-to-one")`.

**Tarjetas (8):**
1. `how="left"` en pandas → `left_join` en dplyr: conserva todas las filas de la izquierda y rellena con `NaN` / `NA`.
2. Qué filas da cada unión → inner: parejas; left: parejas + huérfanos de la izquierda; right: + huérfanos de la derecha; outer / full: todos.
3. La clave se llama distinto → pandas: `left_on=`, `right_on=` (conserva las dos columnas); dplyr: `by = c("cliente" = "id")` o `join_by(cliente == id)` (conserva la de la izquierda).
4. `_x` / `_y` y `.x` / `.y` → Sufijos para columnas no clave que se llaman igual en las dos tablas: `_x` / `.x` es la izquierda. Cámbialos con `suffixes=` / `suffix =`.
5. ¿Por qué un left join tiene más filas que la izquierda? → La otra tabla repite una clave: cada fila sale una vez por pareja.
6. ¿Cómo comprobar que una clave es única? → `df["id"].duplicated().sum()` o `count(df, id) |> filter(n > 1)`; o `validate="many_to_one"` / `relationship = "many-to-one"` en la propia unión.
7. `semi_join` y `anti_join` → Filtran sin pegar columnas: con pareja / sin pareja. En pandas: `isin` y `~isin`.
8. ¿Qué pasa si no pones `on` ni `by`? → Se une por todas las columnas con el mismo nombre (aquí `ciudad`). pandas además usa inner por defecto.

## Citas (10)

| id de fuente | página PDF o ancla | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| prog1 | 31 | 31 | 5.5 Joins | qué es un join y la Imagen 5 con los cuatro diagramas (inner, full, left, right) | Paso 1 |
| prog1 | 32 | 32 | LEFT JOIN | todas las filas de la izquierda y NULL donde no hay pareja (empleados y departamentos) | Paso 2 |
| hojapandas | 2 | 2 | Combine Data Sets: Standard Joins | `pd.merge(adf, bdf, how=..., on='x1')` con los cuatro `how` dibujados con `adf` y `bdf` | Paso 2 y paso 3 |
| eda5 | 13 | 13 | Joins en dplyr | `df_A` y `df_B` creados con `tribble` y el `left_join(x = df_A, y = df_B, by = "ID")` | Paso 2 |
| eda5 | 14 | 14 | Joins en dplyr | `right_join`, `inner_join`, `full_join` (5, 4 y 6 filas) y "¿Qué ocurre si las columnas tienen nombres distintos?" con `by = c("ID"="KL")` | Paso 3 y paso 4 |
| prog1 | 33 | 33 | FULL JOIN y CROSS JOIN | el full combina left y right; el cross es el producto cartesiano | Paso 3, al terminar |
| eda5 | 12 | 12 | Joins en dplyr | la lista de seis funciones: `left_join`, `right_join`, `inner_join`, `full_join`, `anti_join`, `semi_join` | Paso 7 |
| eda5doc | `joins` | | Joins | `pacientes` y `laboratorio`: inner, left, right, full, y `semi_join` y `anti_join` con datos | Paso 7 |
| hojapandas | 2 | 2 | Filtering Joins y Set-like Operations | `isin` y `~isin` para semi y anti; `indicator=True` y `_merge == "left_only"` | Paso 7 |
| thinpython | 146 | 125 | Cap. 11: A Dictionary Is a Mapping | un diccionario va de claves a valores: la búsqueda rápida que usan las uniones por dentro | Paso 7, profundizar |

Notas: prog1, eda5 y hojapandas: PDF = impresa. thinpython: impresa = PDF − 21 (página tomada del mapa
`brain/fuentes/think-python.md`, verificada allí; no se volvió a abrir aquí). Se comprobaron con `pdftotext` en esta sesión:
prog1 31, 32 y 33; eda5 12, 13, 14 y 15; hojapandas 2. El ancla `joins` existe en el HTML de eda5doc y su contenido se leyó.

Sin chip (no registrado, `prog1nb`): cuaderno `UAX_20251028.ipynb`, celda 29 (la consulta SQL con `LEFT JOIN` y
`WHERE clientes.Country = 'China'`, sin salida: `UsageError: Cell magic %%sql not found`), celda 30
(`pd.merge(ordenes, clientes, on='CustomerID', how='left')` filtrado a China), celda 31 (auto-unión de `ordenes` con
sufijos `_x` / `_y`, 197 filas) y celda 34 (dos `merge` encadenados, el segundo con `left_on='OrderID',
right_on='ProductID'`, y un `groupby` al final).

Errata o inconsistencias para decir con naturalidad:
- El material no muestra qué pasa con claves repetidas (lo dice el mapa de citas): la página lo enseña en el paso 6.
- eda5 p.12-13 nombra `semi_join` y `anti_join` sin ejemplo (sí los tiene eda5doc `joins`).
- La celda 34 empareja `OrderID` con `ProductID`, que no significan lo mismo: es solo sintaxis.
- La celda 29 combina `LEFT JOIN` con `WHERE clientes.Country = 'China'`: ese `WHERE` sobre la tabla derecha descarta las
  filas sin pareja y lo vuelve un inner (es la trampa "ON o WHERE" de la página de SQL; aquí basta con enlazarla).

## Riesgos y notas para quien construye

- **Orden de filas distinto** entre pandas y dplyr en `right` y `outer` / `full`: pandas `right` sigue el orden de la tabla
  derecha (Ana 101, Ana 103, Beto 102, Cris 104, Dani) y `outer` ordena por la clave; dplyr deja el orden de la izquierda y
  agrega al final lo que solo está a la derecha (`101 102 103 104 NA`). Copiar las salidas reales, no reordenar.
- En pandas, los enteros pasan a decimales cuando aparece un hueco (`id` en el left, `pedido` en right y outer). En R no.
- Los mensajes y avisos de R salen en inglés (`LC_MESSAGES` en inglés en esta máquina). Un aviso (`Warning message`) se
  imprime **al terminar la expresión de nivel superior** que lo produjo: en `codigo1` sale antes de `[1] 6` porque el
  `left_join` está en una asignación previa. El mensaje `Joining with ...` sale en el momento.
- El aviso de muchos a muchos de dplyr 1.2.1 depende de la tabla entera, no de una sola clave: con los datos de la página
  aparece porque Ana tiene dos pedidos **y** Beto dos filas. No escribir "dplyr avisa cuando una clave se repite": avisa solo
  si hay repeticiones en los dos lados. Caso silencioso verificado: pedidos 102 y 104 contra la tabla con Beto duplicado dan
  3 filas sin aviso.
- `pd.merge` sin `how` es `inner`; `left_join` es left por nombre. En `codigo2` por eso cambian las filas (6 frente a 7).
- La clave del `left_on` / `right_on`: pandas guarda `cliente` y también `id`; dplyr solo `cliente`. En la tabla resultado
  del escenario esto debe verse (una columna más en pandas).
- `cat(..., fill = TRUE)` en R evita el espacio final que deja `cat(..., "\n")`; no cambiarlo.
- En el escenario, editar claves puede producir hasta 6 × 6 hilos; limitar a 6 filas por tabla para que quepa a 375 px.
- La página habla de Dani y del pedido 105 como "huérfanos" igual que la página de outer join, para no inventar
  vocabulario nuevo.
