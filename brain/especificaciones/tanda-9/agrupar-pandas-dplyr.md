# Especificación: Agrupar y resumir en pandas y dplyr (agrupar-pandas-dplyr)

- Ruta: `pandas`, orden 4; también `tidyverse`, orden 2. Tanda 9.
- Área: Programación con datos. Fuente del catálogo: "Hoja de referencia de Pandas, Programación UD5 (EDA I), cuadernos de SM142002".
- Prerrequisitos: "Agrupar y resumir: GROUP BY y HAVING", "Listas y data frames".
- Siguientes: ninguno en el catálogo (`siguientes: []`).
- Aparece: SM142002 UD2, SM142002 UD5.
- Resumen del catálogo: "Partir una tabla por grupos, resumir cada grupo y volver a juntar el resultado."

Continuidad: en "Agrupar y resumir: GROUP BY y HAVING" Francisco ya vio las fichas que caen en cajas, las funciones de
agregación, `COUNT(*)` frente a `COUNT(columna)` con un NULL y `WHERE` frente a `HAVING`. Esta página **no repite la idea**:
la da por sabida en el paso 1 (un enlace a esa página) y gasta el tiempo en lo nuevo: cómo se escribe en pandas y en dplyr,
qué forma tiene el resultado (índice, tibble agrupado) y dónde los dos lenguajes se comportan al revés (los huecos).

## Datos de toda la página (inventados, se dice en la página)

Los pedidos de la misma tienda en línea de las páginas de SQL (las categorías son las de allí). Ocho pedidos; los dos
últimos en llegar (6 y 7) son **incompletos** y se encienden en el paso 5 y 6. Pasos 1 a 4: solo las seis filas completas.

| fila (pandas / R) | categoria | canal | importe |
|---|---|---|---|
| 0 / 1 | Periféricos | web | 20 |
| 1 / 2 | Monitores | tienda | 100 |
| 2 / 3 | Periféricos | tienda | 80 |
| 3 / 4 | Redes | web | 50 |
| 4 / 5 | Monitores | web | 300 |
| 5 / 6 | Periféricos | web | **vacío** (NaN / NA) |
| 6 / 7 | **vacío** (None / NA) | web | 100 |
| 7 / 8 | Redes | tienda | 150 |

Cuentas limpias (todas verificadas al ejecutar):
- Seis filas completas: Periféricos 20 + 80 = 100 (media 50), Monitores 100 + 300 = 400 (media 200), Redes 50 + 150 = 200 (media 100). Total 700.
- Por canal con las ocho filas: tienda 330, web 470 (el pedido 7 sin categoría sí cuenta en web).
- Con las ocho filas, **pandas por defecto**: 3 grupos, Periféricos suma 100 y media 50 (salta el hueco), el pedido 7 desaparece.
- Con las ocho filas, **dplyr por defecto**: 4 grupos (el cuarto es `<NA>` con 100), y `sum(importe)` da `NA` en Periféricos.
- Por categoría y canal (dplyr, `na.rm = TRUE`): Monitores tienda 100 y web 300 (25 % y 75 %), Periféricos tienda 80 y web 20 (80 % y 20 %), Redes tienda 150 y web 50 (75 % y 25 %), `<NA>` web 100 (100 %). Sobre el total 800: 12.5, 37.5, 10, 2.5, 18.75, 6.25, 12.5.

## Imagen central

**Tres bandejas: partir, aplicar, juntar.** Una sola tira horizontal (en móvil, vertical) con tres zonas:

1. **Partir.** Las filas son **fichas** de color por categoría (Periféricos, Monitores, Redes; la ficha sin categoría es gris
   rayada con un "?"). Cada ficha muestra su número de fila, su canal (un pequeño rótulo) y su importe (la ficha con importe vacío
   muestra un hueco punteado). Al pulsar **Partir**, las fichas caen en **cajas**, una por valor de la columna de agrupación.
2. **Aplicar.** Cada caja se aplasta en **una sola ficha resumen** con el número que da la función elegida. Encima de cada
   caja, la cuenta en vivo (por ejemplo `20 + 80 = 100`, o `(20 + 80) / 2 = 50`).
3. **Juntar.** Las fichas resumen se apilan en la **tabla resultado**, dibujada como la imprime cada lenguaje:
   - pandas: la columna de la clave a la izquierda **en gris y en negrita, separada por una línea**: es el índice, no una columna.
     Al activar `reset_index()` la clave cruza la línea, se vuelve columna normal y aparece el índice 0, 1, 2.
   - dplyr: un tibble con la cabecera `# A tibble: 3 × 2` y, si el resultado sigue agrupado, una banda amarilla
     `# Groups:   categoria [4]` encima.

Controles (todos funcionan con toque, nada depende solo de arrastrar):
- Interruptor **pandas / dplyr** (el escenario y el código bajo la tabla cambian de lenguaje).
- Selector **agrupar por**: `categoria`, `canal`, `categoria y canal`, `nada` (una sola caja con todo).
- Selector **función**: `sum`, `mean`, `max`, `min`, y contar (`size` / `count` en pandas; `n()` / `sum(!is.na(importe))` en dplyr).
- Botones **+10 / −10** al tocar una ficha (el importe se mueve de 10 en 10, entre 0 y 500; la ficha vacía no se edita).
- Casillas (aparecen en su paso): **`skipna`** (pandas, marcada por defecto) / **`na.rm = TRUE`** (dplyr, desmarcada por defecto);
  **`dropna`** (pandas, marcada por defecto); **`reset_index()`**; **`.groups = "drop"`**.
- Botón **Llegan los pedidos 6 y 7** (paso 5 y 6).
- Bajo la tabla, la línea de código que produce lo que se ve, armada con los controles, por ejemplo
  `ventas.groupby("categoria").agg(total=("importe", "sum"))` o `ventas |> group_by(categoria) |> summarise(total = sum(importe))`.

Modos por paso: 1) fichas y tres bandejas sin código; 2) partir sin aplicar (el objeto agrupado); 3) aplicar con nombre y
funciones; 4) juntar en pandas: índice y `reset_index`; 5) llega el importe vacío: `skipna` frente a `na.rm`; 6) llega la
clave vacía: `dropna` y el grupo `<NA>`; 7) contar filas o contar datos; 8) dos columnas de agrupación y el resultado que
sigue agrupado.

## Hipótesis inicial

"En la tienda hay pedidos con un dato que falta: uno no tiene importe y otro no tiene categoría. Si le pides a pandas y a R
el total vendido por categoría, ¿crees que te van a dar la misma tabla? ¿Qué crees que hace cada uno con el pedido que no
tiene categoría?"

Se vuelve a mostrar en el paso 6 (`#citaHipo`), cuando aparece el grupo `<NA>`.

## Pasos (8)

### Paso 1. Partir, resumir, juntar
- Idea: resumir por grupos son siempre tres movimientos: partir la tabla en cajas, reducir cada caja a un número, apilar
  los números en una tabla nueva con una fila por caja. Es lo mismo que `GROUP BY` (enlace a la página de SQL), escrito con
  otras palabras.
- Escenario: modo 1, seis fichas sin código; los tres botones Partir, Aplicar, Juntar se encienden en orden después de
  responder.
- Chequeo (predicción antes de tocar, sin símbolos): "Seis pedidos de tres categorías. Te piden el total vendido por
  categoría. ¿Cómo es la tabla de respuesta?"
  - Correcta: "Tres filas, una por categoría, cada una con su total."
  - "Seis filas, cada pedido con el total de su categoría al lado": eso existe (`transform` en pandas, `mutate` agrupado en
    dplyr) pero no resume: conserva las seis filas. Se ve en el reto `prop1`.
  - "Una fila con el total de la tienda": eso es resumir sin partir (selector "agrupar por: nada", 700).
  - "Dos filas": habrías partido por `canal`, no por `categoria`.
- Cita prog1 p.29 (la sintaxis de `GROUP BY` con una función de agregación) para atar con SQL.
- Texto breve: el cuaderno de clase UAX_20251028 pone, una debajo de otra, la consulta SQL (celda 27) y la misma pregunta en
  pandas (celda 28). Sin chip (`prog1nb` no está registrado). La celda 27 no tiene salida: el cuaderno guarda
  `UsageError: Cell magic %%sql not found`; decirlo con naturalidad (el núcleo de SQL no estaba cargado en esa sesión).

### Paso 2. Agrupar no calcula nada todavía
- Idea: `ventas.groupby("categoria")` y `ventas |> group_by(categoria)` solo **parten**: dejan las cajas preparadas y
  esperan una función. pandas devuelve un objeto `DataFrameGroupBy` que no se imprime como tabla (`print` muestra
  `<pandas.core.groupby.generic.DataFrameGroupBy object at 0x...>`, la dirección cambia en cada corrida); dplyr devuelve la
  **misma tabla** con una etiqueta de grupos (`# Groups:   categoria [3]`, clase `grouped_df`).
- Notación entra aquí. Escenario: modo 2. Selector "agrupar por" activo: las fichas se reparten en cajas sin aplastarse.
  Interruptor pandas / dplyr muestra las dos salidas reales (abajo).
- Chequeo (elección con explicación): "En R ejecutas solo `ventas |> group_by(categoria)`. ¿Qué ves?"
  - Correcta: "Las mismas seis filas, con una línea `# Groups: categoria [3]` arriba."
  - "Una tabla de tres filas": eso pasa recién con `summarise`.
  - "Tres tablas separadas": las cajas existen por dentro, pero se imprime una sola tabla.
  - "Un error porque falta la función": dplyr no se queja; pandas tampoco, solo muestra el objeto.
- Salida real de R (seis filas, verificada):
  ```
  # A tibble: 6 × 3
  # Groups:   categoria [3]
    categoria   canal  importe
    <chr>       <chr>    <dbl>
  1 Periféricos web         20
  2 Monitores   tienda     100
  3 Periféricos tienda      80
  4 Redes       web         50
  5 Monitores   web        300
  6 Redes       tienda     150
  ```
  En pandas, `type(g).__name__` da `DataFrameGroupBy` y `g.ngroups` da `3` (verificado).
- Cita eda5 p.11 (`group_by()` y `summarise()` "dos verbos de los más usados") y eda5 p.16 (en data.table el mismo papel lo
  hace `by`: "el equivalente a `group_by()` en dplyr o `GROUP BY` en SQL").
- `details.profundizar`: "¿Qué hay dentro de las cajas?" Escribir a mano un diccionario de listas (`cajas[g].append(imp)`), que
  es exactamente lo que hace la vida real; el patrón "diccionario cuyos valores son listas" está en Think Python (cap. 11,
  `invert_dict`) y `defaultdict(list)` lo abrevia (cap. 19).

### Paso 3. Resumir con nombre: `agg` y `summarise`
- Idea: la función se aplica a cada caja y el resultado se **nombra**: `agg(total=("importe", "sum"))` en pandas (nombre =
  (columna, función)) y `summarise(total = sum(importe))` en dplyr (nombre = función(columna)). Se pueden pedir varias a la
  vez y cada una es una columna del resultado.
- Escenario: modo 3. Selector de función y botones +10 / −10 en las fichas; la ficha resumen y la cuenta encima de cada caja
  cambian al instante.
- Chequeo (cálculo con datos en vivo): "¿Cuánto da la media de `importe` de Monitores con los importes que tienes ahora?"
  Con los datos de inicio, 200 ((100 + 300) / 2). Se acepta con tolerancia 0.01. Si Francisco no tocó nada, se le pide mover
  primero una ficha de Monitores (para que la respuesta no sea de memoria).
- Salida real de pandas y de dplyr con seis filas (verificadas):
  ```
               total  media
  categoria
  Monitores      400  200.0
  Periféricos    100   50.0
  Redes          200  100.0
  ```
  ```
  # A tibble: 3 × 3
    categoria   total media
    <chr>       <dbl> <dbl>
  1 Monitores     400   200
  2 Periféricos   100    50
  3 Redes         200   100
  ```
- Cita hojapandas p.2 ("Group Data": `groupby(by="col")`, `agg(function)`, `size()`, y la lista de funciones de resumen que
  sirven por grupo), eda5doc `crear-resúmenes-con-summarise` (un resumen da un tibble nuevo y la columna lleva el nombre que tú
  le pones; con `group_by(continent)` sale uno por continente).
- Texto: el cuaderno UAX_20251028, celda 28, pide tres resúmenes con nombre a la vez (`MaxClientes`, `Clientes`,
  `MinClientes`) sobre `CustomerID`; China sale con 182 clientes. Sin chip.
- `details.profundizar`: "Otras formas de escribir lo mismo": `ventas.groupby("categoria")["importe"].sum()` (una Series,
  no una tabla), `agg({"importe": "sum"})` (diccionario, la forma del cuaderno, celda 34), y en R base
  `aggregate(importe ~ categoria, data = ventas, FUN = mean)` (verificado: Monitores 200, Periféricos 50, Redes 100).

### Paso 4. En pandas la clave se vuelve índice
- Idea: pandas pone la columna de agrupación como **índice** del resultado (gris, a la izquierda), no como columna. Por eso
  `r["categoria"]` falla y `r.columns` solo tiene los resúmenes. `reset_index()` la devuelve a columna (o
  `groupby(..., as_index=False)`). Además pandas **ordena** los grupos por la clave (Monitores, Periféricos, Redes), no por
  orden de aparición. dplyr no tiene índice: la clave siempre es columna.
- Escenario: modo 4. Casilla `reset_index()`: la clave cruza la línea y aparece el índice 0, 1, 2.
- Chequeo (predicción antes de tocar): "`r = ventas.groupby("categoria").agg(total=("importe", "sum"))`. ¿Qué da
  `r.columns.tolist()`?"
  - Correcta: `['total']` (salida real).
  - `['categoria', 'total']`: eso es después de `reset_index()` (salida real `['categoria', 'total']`).
  - `['importe']`: el nombre que le diste reemplaza al de la columna original.
  - `['categoria']`: la clave está, pero como índice.
- Cita hojapandas p.2 (el GroupBy agrupa "by values in column", y `groupby(level="ind")` agrupa por un nivel del índice: el
  índice es un ciudadano de primera en pandas).
- Texto: la celda 28 del cuaderno termina en `.reset_index().sort_values('Clientes', ascending=False)`: sin el
  `reset_index`, `Country` no se vería como columna. Sin chip.

### Paso 5. Un importe vacío: `skipna` frente a `na.rm` (destacado)
- Idea: llega el pedido 6 (Periféricos, sin importe). Las funciones de resumen de pandas **saltan** el hueco por defecto
  (`skipna=True`); las de R lo **propagan** (`sum(c(20, 80, NA))` es `NA`) salvo que escribas `na.rm = TRUE`. Los dos
  lenguajes tienen el valor por defecto al revés.
- Escenario: modo 5. Botón "Llega el pedido 6" (solo la ficha 6 en este paso). Casillas `skipna` y `na.rm = TRUE`.
- **Destacado con predicción (la confusión natural del concepto): "¿Por qué el mismo resumen da 100 en Python y NA en R?"**
  - Predicción: "Con el pedido 6, ¿cuánto da el total de Periféricos en pandas por defecto y en dplyr por defecto?"
    Opciones: "100 y 100" / "100 y NA" (correcta) / "NA y NA" / "100 y 0".
  - Explicación: pandas trata NaN como "no hay dato" y lo deja fuera; R trata NA como "hay un dato que no conozco", y
    cualquier suma que lo incluya también es desconocida. Ninguno está mal: son dos filosofías. Lo peligroso es copiar un
    código de un lenguaje al otro y no notarlo.
  - Salidas reales en Vida real (`codigo2`).
- Chequeo del paso (elección con explicación): "En dplyr quieres la media de Periféricos sin contar el hueco. ¿Qué escribes?"
  - Correcta: `summarise(media = mean(importe, na.rm = TRUE))` (da 50).
  - `summarise(media = mean(importe))`: da `NA`.
  - `summarise(media = mean(importe, skipna = TRUE))`: `skipna` es de pandas; en R el argumento no existe y `mean` lo
    absorbe en `...` sin avisar: sigue dando `NA` (verificado en dplyr 1.2.1: Periféricos `NA`, sin aviso ni error).
  - `summarise(media = sum(importe) / 3)`: divide entre las tres filas, contando el hueco como pedido (y la suma sigue en NA).
- Cita eda5 p.11 (el mismo `mean(height, na.rm = TRUE)` en el ejemplo de alturas por género).
- `details.profundizar`: "¿Y si la caja tiene todos los importes vacíos?" La suma de nada es 0 y la media de nada es 0/0:
  NaN. Verificado en los dos lenguajes con una caja `b` cuyo único valor falta: pandas `sum 0.0, mean NaN, count 0, size 1`;
  dplyr `s = 0, m = NaN` (con `na.rm = TRUE`). Es lo que pasa con Champala y Chandrila en eda5 p.11, donde sale `NaN` y el
  texto no lo explica: decirlo.

### Paso 6. Una clave vacía: el grupo `<NA>` (trampa)
- Idea: llega el pedido 7, que no tiene categoría. pandas **lo descarta** del resultado por defecto (`dropna=True`): no
  avisa, y sus 100 desaparecen del total. dplyr **lo conserva** como un grupo más, `<NA>`, al final. Para que pandas lo
  muestre: `groupby("categoria", dropna=False)`; para que dplyr lo quite: `filter(!is.na(categoria))` antes de agrupar.
- Escenario: modo 6. Botón "Llega el pedido 7"; casilla `dropna`. En pandas, la ficha gris cae fuera de las cajas y se
  apaga; en dplyr cae en una cuarta caja `<NA>`. Muestra de nuevo la hipótesis.
- **Trampa marcada**: la suma de los totales por categoría en pandas por defecto da 700, pero la tienda vendió 800. El
  resumen no miente sobre lo que muestra: miente por omisión.
- Chequeo (predicción antes de tocar): "Con los ocho pedidos, ¿cuántas filas tiene `ventas.groupby("categoria").agg(...)` y
  cuántas `group_by(categoria) |> summarise(...)`?"
  - Correcta: "3 en pandas, 4 en dplyr" (salidas reales).
  - "4 y 4": pandas necesita `dropna=False`.
  - "3 y 3": dplyr no descarta claves vacías.
  - "4 y 3": es exactamente al revés.
- Cita eda5doc `crear-resúmenes-con-summarise` (el resultado por continente trae una fila `<NA>`, y además "Euroep" junto a
  "Europe": dos claves que deberían ser una). Esto último es un buen ejemplo para decir: agrupar no limpia los datos, los
  errores de escritura se vuelven grupos.
- `details.profundizar`: "¿Y SQL?" `GROUP BY` sí forma un grupo con los NULL: aquí dplyr se parece a SQL y pandas es el
  distinto. Verificado en SQLite 3.45.3 con los mismos ocho pedidos: `SELECT cat, SUM(imp), COUNT(*) FROM v GROUP BY cat` da
  `(None, 100.0, 1)`, `('M', 400.0, 2)`, `('P', 100.0, 3)`, `('R', 200.0, 2)` (y `SUM` salta el NULL, como pandas).

### Paso 7. Contar filas o contar datos
- Idea: hay dos cuentas distintas, como `COUNT(*)` y `COUNT(columna)` en SQL. pandas: `size` cuenta filas, `count` cuenta
  valores no vacíos. dplyr: `n()` cuenta filas; para contar datos, `sum(!is.na(importe))`.
- Escenario: modo 7. Selector de función en "contar": dos columnas resumen lado a lado.
- Chequeo (cálculo con datos en vivo): "Periféricos tiene tres pedidos y uno sin importe. ¿Qué dan `size` y `count` de
  `importe` en pandas?" Respuesta: 3 y 2 (salida real:
  ```
               n  filas
  categoria
  Monitores    2      2
  Periféricos  2      3
  Redes        2      2
  ```
  con `n=("importe", "count"), filas=("importe", "size")`). En dplyr, `filas = n(), n = sum(!is.na(importe))` da
  Monitores 2 2, Periféricos 3 2, Redes 2 2, `<NA>` 1 1 (verificado).
- Cita hojapandas p.2 (`count()` "Count non-NA/null values"; `size()` "Size of each group").

### Paso 8. Dos columnas de agrupación: el resultado sigue agrupado
- Idea: se puede agrupar por varias columnas a la vez (`groupby(["categoria", "canal"])`, `group_by(categoria, canal)`): una
  caja por combinación que existe (7 con los ocho pedidos en dplyr). En dplyr, `summarise` **quita solo la última** columna de
  agrupación: el resultado sigue agrupado por `categoria`, y lo que hagas después se calcula **dentro de cada categoría**.
  dplyr 1.2.1 lo avisa con un mensaje (salida real en `codigo3`). Se evita con `.groups = "drop"`, con `ungroup()` o con
  `summarise(..., .by = c(categoria, canal))`. pandas no tiene ese estado: el resultado es una tabla normal (con un índice de
  dos niveles hasta que haces `reset_index()`).
- Escenario: modo 8. "Agrupar por: categoria y canal"; banda amarilla `# Groups: categoria [4]` sobre la tabla; casilla
  `.groups = "drop"` que la apaga. Columna `pct` que se calcula al pulsar "mutate(pct = ...)".
- Chequeo (predicción antes de tocar): "Después de `group_by(categoria, canal) |> summarise(total = sum(importe, na.rm =
  TRUE))` escribes `mutate(pct = 100 * total / sum(total))`. ¿Cuánto da `pct` en Periféricos web?"
  - Correcta: 20 (el `sum(total)` es el de Periféricos, 100, porque el resultado sigue agrupado por categoría).
  - 2.5: lo que esperabas si `sum(total)` fuera el de toda la tienda (800); sale con `ungroup()`.
  - 100: confundes con la fila `<NA>`, que es sola en su grupo.
  - `NA`: ya usaste `na.rm = TRUE` dentro del `summarise`.
- Cita eda6 p.23 (`penguins |> group_by(species) |> skim()`: el `group_by` cambia lo que hace la función siguiente; la salida
  dice "Group variables species"), y texto: el cuaderno UAX_20251028, celda 34, agrupa por cuatro columnas
  (`['CustomerID', 'FirstName', 'LastName', 'Category']`) después de dos `merge`; enlace a "Unir tablas en pandas y dplyr".
- `details.profundizar`: "`.by`: agrupar solo para una operación" (dplyr 1.1 en adelante). Verificado:
  `ventas |> summarise(total = sum(importe, na.rm = TRUE), .by = categoria)` da un data frame (no tibble, porque `ventas` es
  data frame) **en orden de aparición** (Periféricos 100, Monitores 400, Redes 200, `<NA>` 100), sin grupos que se arrastren.

## Vida real (Python y R)

Mismos datos que el recorrido (los ocho pedidos). Python 3.13 con pandas 2.2.3; R 4.6.1 con dplyr 1.2.1.
Algoritmo: partir a mano en un diccionario (Python) o una lista con nombres (R), aplicar la media saltando huecos con un
bucle, juntar, y comparar con `groupby().agg()` / `group_by() |> summarise()`. El texto sin el prefijo `id: ` es exactamente
lo que se ejecutó. `-:` marca continuación de la línea anterior (mismo evento).

**La línea `naclave` existe en los dos lenguajes y hace cosas distintas a propósito**: en Python `continue` descarta el pedido
sin categoría (lo que hace pandas); en R `g <- "NA"` lo guarda en una caja llamada "NA" (lo que hace dplyr). La narración lo
dice en ese evento. `sinuevo` y `crear` solo existen en Python (en R, `c(NULL, imp)` crea la caja sola); `import` solo en
Python y `lib` solo en R.

### Python

```
import: import pandas as pd
datos: ventas = pd.DataFrame({
-:     "categoria": ["Periféricos", "Monitores", "Periféricos", "Redes",
-:                   "Monitores", "Periféricos", None, "Redes"],
-:     "canal": ["web", "tienda", "tienda", "web", "web", "web", "web", "tienda"],
-:     "importe": [20, 100, 80, 50, 300, None, 100, 150]})   # inventado
cajas0: cajas = {}                                  # partir
fori: for i in range(len(ventas)):
g: g = ventas["categoria"].iloc[i]
imp: imp = ventas["importe"].iloc[i]
siNA: if pd.isna(g):
naclave:     continue                            # pandas descarta la clave vacía
sinuevo: if g not in cajas:
crear:     cajas[g] = []
meter: cajas[g].append(imp)
resumen0: resumen = {}                                # aplicar
forg: for g in cajas:
total0: total = 0
n0: n = 0
forv: for v in cajas[g]:
sihueco: if not pd.isna(v):                  # saltar el hueco
suma: total = total + v
cuenta: n = n + 1
media: resumen[g] = total / n
imp1: print(pd.Series(resumen))                   # juntar
agrupa: r = ventas.groupby("categoria").agg(media=("importe", "mean"),
-:                                     filas=("importe", "size"))
imp2: print(r.reset_index())
```

(La sangría real de cada línea es la del bucle: `g`, `imp`, `siNA`, `sinuevo`, `meter` van con 4 espacios; `naclave` y
`crear` con 8; `total0`, `n0`, `forv`, `media` con 4; `sihueco` con 8; `suma` y `cuenta` con 12. El archivo ejecutado está
reproducido abajo sin ids, y manda.)

```
import pandas as pd
ventas = pd.DataFrame({
    "categoria": ["Periféricos", "Monitores", "Periféricos", "Redes",
                  "Monitores", "Periféricos", None, "Redes"],
    "canal": ["web", "tienda", "tienda", "web", "web", "web", "web", "tienda"],
    "importe": [20, 100, 80, 50, 300, None, 100, 150]})   # inventado
cajas = {}                                  # partir
for i in range(len(ventas)):
    g = ventas["categoria"].iloc[i]
    imp = ventas["importe"].iloc[i]
    if pd.isna(g):
        continue                            # pandas descarta la clave vacía
    if g not in cajas:
        cajas[g] = []
    cajas[g].append(imp)
resumen = {}                                # aplicar
for g in cajas:
    total = 0
    n = 0
    for v in cajas[g]:
        if not pd.isna(v):                  # saltar el hueco
            total = total + v
            n = n + 1
    resumen[g] = total / n
print(pd.Series(resumen))                   # juntar
r = ventas.groupby("categoria").agg(media=("importe", "mean"),
                                    filas=("importe", "size"))
print(r.reset_index())
```

Salida real:
```
Periféricos     50.0
Monitores      200.0
Redes          100.0
dtype: float64
     categoria  media  filas
0    Monitores  200.0      2
1  Periféricos   50.0      3
2        Redes  100.0      2
```

### R

```
ventas <- data.frame(
  categoria = c("Periféricos", "Monitores", "Periféricos", "Redes",
                "Monitores", "Periféricos", NA, "Redes"),
  canal = c("web", "tienda", "tienda", "web", "web", "web", "web", "tienda"),
  importe = c(20, 100, 80, 50, 300, NA, 100, 150))   # inventado
cajas <- list()                             # partir
for (i in 1:nrow(ventas)) {
  g <- ventas$categoria[i]
  imp <- ventas$importe[i]
  if (is.na(g)) {
    g <- "NA"                               # dplyr guarda la clave vacía
  }
  cajas[[g]] <- c(cajas[[g]], imp)
}
resumen <- c()                              # aplicar
for (g in names(cajas)) {
  total <- 0
  n <- 0
  for (v in cajas[[g]]) {
    if (!is.na(v)) {                        # saltar el hueco
      total <- total + v
      n <- n + 1
    }
  }
  resumen[g] <- total / n
}
print(resumen)                              # juntar
suppressMessages(library(dplyr))
r <- ventas |>
  group_by(categoria) |>
  summarise(media = mean(importe, na.rm = TRUE), filas = n())
print(r)
```

Ids por línea (R): `datos` (las cinco primeras), `cajas0`, `fori`, `g`, `imp`, `siNA`, `naclave`, `-` (la llave `}`),
`meter`, `-`, `resumen0`, `forg`, `total0`, `n0`, `forv`, `sihueco`, `suma`, `cuenta`, `-`, `-`, `media`, `-`, `imp1`, `lib`,
`agrupa` (tres líneas), `imp2`.

Salida real (la primera línea de nombres termina con un espacio; copiarla tal cual):
```
Periféricos   Monitores       Redes          NA 
         50         200         100         100 
# A tibble: 4 × 3
  categoria   media filas
  <chr>       <dbl> <int>
1 Monitores     200     2
2 Periféricos    50     3
3 Redes         100     2
4 <NA>          100     1
```

Eventos: Python 95 (import, datos, cajas0; 8 × (fori, g, imp, siNA); naclave 1; sinuevo 7; crear 3; meter 7; resumen0;
3 × (forg, total0, n0); 7 × (forv, sihueco); suma 6; cuenta 6; media 3; imp1, agrupa, imp2). R 94 (datos, cajas0;
8 × (fori, g, imp, siNA); naclave 1; meter 8; resumen0; 4 × (forg, total0, n0); 8 × (forv, sihueco); suma 7; cuenta 7;
media 4; imp1, lib, agrupa, imp2). Conviene que el motor permita "ir al final de la fase" porque son muchos.

### Foto de estado por línea ejecutada

Fase 1, partir (índice con `ctx.ix`: Python desde 0, R desde 1):

| i (py / R) | g | imp | Python: cajas después | R: cajas después | Visual |
|---|---|---|---|---|---|
| 0 / 1 | Periféricos | 20 | P: [20] | P: 20 | la ficha 1 cae en una caja nueva (en Python se ve `crear`) |
| 1 / 2 | Monitores | 100 | M: [100] | M: 100 | caja nueva |
| 2 / 3 | Periféricos | 80 | P: [20, 80] | P: 20 80 | |
| 3 / 4 | Redes | 50 | R: [50] | R: 50 | caja nueva |
| 4 / 5 | Monitores | 300 | M: [100, 300] | M: 100 300 | |
| 5 / 6 | Periféricos | NaN / NA | P: [20, 80, nan] | P: 20 80 NA | la ficha entra con su hueco punteado |
| 6 / 7 | None / NA | 100 | (salta: `continue`) | "NA": 100 | Python: la ficha gris se apaga fuera; R: cuarta caja "NA" |
| 7 / 8 | Redes | 150 | R: [50, 150] | R: 50 150 | |

Fase 2, aplicar (por caja): `total` y `n` suben solo cuando `v` no es hueco.

| caja | valores | total paso a paso | n | resumen |
|---|---|---|---|---|
| Periféricos | 20, 80, hueco | 20, 100, (hueco: no suma) | 1, 2 | 50 |
| Monitores | 100, 300 | 100, 400 | 1, 2 | 200 |
| Redes | 50, 150 | 50, 200 | 1, 2 | 100 |
| NA (solo R) | 100 | 100 | 1 | 100 |

Fase 3, juntar: `imp1` apila las fichas resumen en orden de aparición (P, M, R, y en R además NA); `agrupa` muestra la misma
tabla hecha por la librería, **ordenada** por la clave (Monitores primero) y, en dplyr, con `<NA>` al final y la columna
`filas` (3 en Periféricos aunque solo 2 importes contaron para la media). Narrar en `imp2`: "Mismos números, otro orden: la
librería ordena las claves; tu diccionario respetó el orden de llegada."

Narrar en `naclave`: Python: "La clave está vacía y `continue` salta a la siguiente fila: así se comporta `groupby` por
defecto (`dropna=True`)". R: "La clave está vacía y la guardas con el nombre "NA": así se comporta `group_by`, que forma un
grupo `<NA>`". En `sihueco` con el hueco: "Este importe falta; no suma ni cuenta: es lo que hacen `skipna=True` y
`na.rm = TRUE`".

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántas veces se ejecuta la línea `total = total + v` en Python? ¿Y `total <- total + v` en R?" Respuesta **6 y 7**: en
Python hay 7 importes guardados y uno es hueco; en R hay además el pedido sin categoría, que sí entró en una caja.
Distractores: "8 y 8" (las filas de la tabla), "7 y 7" (olvida el hueco o la clave vacía), "6 y 6" (olvida que R guarda la
clave vacía). Pista: "Cuenta qué importes llegan a una caja en cada lenguaje y cuáles no son hueco."

### Trampas reales (retos `codigo1` a `codigo3`)

En los tres, `ventas` se crea con las mismas líneas `datos` de arriba (más `import pandas as pd` en Python).

**codigo1: el pedido que desaparece (pandas, `dropna`).**
```
print(ventas.groupby("categoria")["importe"].sum())
print(ventas.groupby("categoria", dropna=False)["importe"].sum())
```
Salida real:
```
categoria
Monitores      400.0
Periféricos    100.0
Redes          200.0
Name: importe, dtype: float64
categoria
Monitores      400.0
Periféricos    100.0
Redes          200.0
NaN            100.0
Name: importe, dtype: float64
```
Pregunta: "La tienda vendió 800. ¿Por qué la primera tabla suma 700?" Correcta: "`groupby` descarta por defecto las filas
cuya clave está vacía; el pedido 7 (100) no está en ningún grupo." Distractores: "porque Periféricos tiene un hueco" (ese
hueco no tenía importe: no resta nada), "porque `sum` ignora los NaN" (eso afecta al hueco de importe, no a la clave), "por
redondeo".

**codigo2: el NA que se contagia (dplyr, `na.rm`).**
```
suppressMessages(library(dplyr))
ventas |> group_by(categoria) |> summarise(total = sum(importe)) |> print()
ventas |> group_by(categoria) |> summarise(total = sum(importe, na.rm = TRUE)) |> print()
```
Salida real:
```
# A tibble: 4 × 2
  categoria   total
  <chr>       <dbl>
1 Monitores     400
2 Periféricos    NA
3 Redes         200
4 <NA>          100
# A tibble: 4 × 2
  categoria   total
  <chr>       <dbl>
1 Monitores     400
2 Periféricos   100
3 Redes         200
4 <NA>          100
```
Pregunta: "¿Por qué solo Periféricos sale NA en la primera?" Correcta: "es la única caja con un importe vacío; en R una suma
con un NA es NA". Distractores: "porque tiene tres filas", "porque `<NA>` se come su valor", "porque dplyr no suma textos".

**codigo3: el grupo que se queda pegado (dplyr, `.groups`).**
```
suppressMessages(library(dplyr))
t <- ventas |>
  group_by(categoria, canal) |>
  summarise(total = sum(importe, na.rm = TRUE))
t |> mutate(pct = 100 * total / sum(total)) |> print()
t |> ungroup() |> mutate(pct = 100 * total / sum(total)) |> print()
```
Salida real (el mensaje sale por la consola de mensajes, en inglés, en el momento del `summarise`):
```
`summarise()` has regrouped the output.
ℹ Summaries were computed grouped by categoria and canal.
ℹ Output is grouped by categoria.
ℹ Use `summarise(.groups = "drop_last")` to silence this message.
ℹ Use `summarise(.by = c(categoria, canal))` for per-operation grouping
  (`?dplyr::dplyr_by`) instead.
# A tibble: 7 × 4
# Groups:   categoria [4]
  categoria   canal  total   pct
  <chr>       <chr>  <dbl> <dbl>
1 Monitores   tienda   100    25
2 Monitores   web      300    75
3 Periféricos tienda    80    80
4 Periféricos web       20    20
5 Redes       tienda   150    75
6 Redes       web       50    25
7 <NA>        web      100   100
# A tibble: 7 × 4
  categoria   canal  total   pct
  <chr>       <chr>  <dbl> <dbl>
1 Monitores   tienda   100 12.5 
2 Monitores   web      300 37.5 
3 Periféricos tienda    80 10   
4 Periféricos web       20  2.5 
5 Redes       tienda   150 18.8 
6 Redes       web       50  6.25
7 <NA>        web      100 12.5 
```
(18.8 es 18.75 redondeado por la impresión del tibble.) Pregunta: "¿Por qué la primera columna `pct` suma 100 dentro de cada
categoría y no en toda la tabla?" Correcta: "`summarise` quitó solo `canal`; el resultado sigue agrupado por `categoria` y
`sum(total)` se calcula por categoría". Distractores: "porque `mutate` siempre agrupa", "porque `na.rm` cambia el total",
"porque `pct` está mal escrito". Par en pandas (no hace falta mostrar su salida): pandas no arrastra grupos; para porcentajes
dentro de cada categoría hace falta `t.groupby("categoria")["total"].transform("sum")` (verificado: 25, 75, 80, 20, 75, 25).

`p.vr-nota`: `ventas.groupby("categoria", dropna=False).agg(total=("importe", "sum")).reset_index()` (4 filas, verificado) y
`ventas |> group_by(categoria) |> summarise(total = sum(importe, na.rm = TRUE), .groups = "drop")`: así las dos tablas
coinciden.

## Retos (11)

RETOS = ["ojo", "construir", "mano", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3", "formula"]

1. **ojo** (ojo clínico, 8 rondas al azar, aprueba con 7 de 8): se muestra una expresión sobre `ventas` (ocho pedidos) y
   Francisco decide, sin ejecutar, cuántas filas tiene el resultado: "1", "una por grupo (di cuántas)" o "8". Banco (con la
   respuesta verificada): `ventas.groupby("categoria").agg(t=("importe","sum"))` (3); el mismo con `dropna=False` (4);
   `group_by(categoria) |> summarise(t = sum(importe))` (4); `group_by(canal) |> summarise(...)` (2);
   `ventas.groupby("canal").agg(...)` (2); `summarise(t = sum(importe, na.rm = TRUE))` sin agrupar (1);
   `group_by(categoria) |> mutate(t = sum(importe, na.rm = TRUE))` (8, verificado: conserva las ocho filas con su total al
   lado); `ventas.groupby("categoria")["importe"].transform("sum")` (8 valores, verificado:
   `[100.0, 400.0, 100.0, 200.0, 400.0, 100.0, nan, 200.0]`); `group_by(categoria, canal) |> summarise(...)` (7);
   `ventas.groupby(["categoria","canal"]).agg(...)` (6, sin la combinación vacía).
2. **construir** (manipular hasta cumplir objetivos, con los controles del escenario y los ocho pedidos): (a) que pandas
   muestre 4 grupos (`dropna` desmarcada); (b) que dplyr dé 100 como total de Periféricos (`na.rm = TRUE`); (c) que en pandas
   `categoria` sea columna (`reset_index()`); (d) con los botones +10 / −10, que la media de Redes sea 120 en los dos lenguajes
   (por ejemplo 90 y 150). Ok al cumplir los cuatro.
3. **mano** (a mano, datos al azar, pistas escalonadas, reintentable): tabla de 6 a 8 filas con 2 o 3 categorías (A, B, C),
   importes múltiplos de 10 entre 10 y 200, y con probabilidad 1/2 un importe vacío y con probabilidad 1/2 una clave vacía.
   Pide: (1) el total de una categoría al azar en pandas por defecto; (2) el mismo en dplyr por defecto (NA si la caja tiene
   hueco); (3) cuántas filas tiene el resultado en cada lenguaje. Pistas: 1) pinta las cajas; 2) "pandas salta los huecos y
   descarta la clave vacía; dplyr hace lo contrario"; 3) primera respuesta resuelta.
4. **error** (cazar el error, 3 variantes con una línea mal):
   - V1 (Python): `r = ventas.groupby("categoria").agg(total=("importe", "sum"))` y luego `print(r["categoria"])`:
     `KeyError: 'categoria'` (verificado). La línea mal es el acceso: falta `reset_index()`.
   - V2 (R): `summarise(media = mean(importe))` para "la media de cada categoría sin contar huecos": Periféricos sale `NA`
     (verificado). Falta `na.rm = TRUE`.
   - V3 (Python): `ventas.groupby("categoria").sum()` para "el total de cada categoría": la columna `canal` se **concatena**
     como texto (salida real: Monitores `tiendaweb`, Periféricos `webtiendaweb`, Redes `webtienda`, importes 400.0, 100.0,
     200.0). La línea mal: no dice qué columna sumar; debía ser `agg(total=("importe", "sum"))`.
5. **prop1** (opción múltiple, `mezclar: true`): "¿Qué diferencia hay entre `agg` y `transform` en pandas (o entre
   `summarise` y `mutate` después de `group_by`)?" Correcta: "`agg` deja una fila por grupo; `transform` deja una fila por
   cada fila original con el valor de su grupo". Pistas: "son iguales" → "cuenta las filas del resultado en los dos";
   "`transform` cambia los datos originales" → "devuelve una columna nueva, no toca `ventas`"; "`agg` solo admite una
   función" → "admite varias con nombre, como en el paso 3".
6. **prop2**: "Tras `group_by(categoria, canal) |> summarise(...)`, ¿por qué variables queda agrupado el resultado?"
   Correcta: "por `categoria`: `summarise` quita la última". Pistas: "por ninguna" → "eso pasa con `.groups = "drop"` o
   `ungroup()`"; "por las dos" → "eso es `.groups = "keep"`"; "por `canal`" → "se quita la última, no la primera".
7. **prop3**: "Una caja tiene todos sus importes vacíos. Con `na.rm = TRUE`, ¿qué dan `sum` y `mean`?" Correcta: "`sum` da 0
   y `mean` da NaN" (verificado). Pistas: "0 y 0" → "la media de nada es 0 / 0"; "NA y NA" → "con `na.rm = TRUE` los NA se
   quitan antes; lo que queda está vacío"; "error" → "R no se queja; por eso aparecen NaN en eda5 p.11".
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.
11. **formula**: el `B.ordenar` de Memoria.

## Memoria

**B.ordenar** (resumir por categoría en dplyr sin perder huecos ni dejar grupos pegados), piezas en orden:
1. `ventas |>`
2. `group_by(categoria) |>`
3. `summarise(`
4. `total = sum(importe, na.rm = TRUE),`
5. `.groups = "drop")`

Distractores: `summarise(total = sum(importe),` (sin `na.rm`), `skipna = TRUE,` (argumento de pandas),
`agg(total = ("importe", "sum"))` (sintaxis de pandas). Se registra como reto `formula`.
Variante opcional en pandas para mostrar al resolver: `ventas.groupby("categoria", dropna=False)` +
`.agg(total=("importe", "sum"))` + `.reset_index()`.

**Tarjetas (8):**
1. ¿Qué hace `groupby` / `group_by` solo? → Parte la tabla en grupos; no calcula nada hasta que le das una función.
2. `agg(total=("importe", "sum"))` frente a `summarise(total = sum(importe))` → Lo mismo: nombre = (columna, función) en pandas; nombre = función(columna) en dplyr.
3. ¿Por qué `r["categoria"]` falla después de `groupby`? → La clave quedó como índice; usa `reset_index()` o `as_index=False`.
4. Un importe vacío en pandas y en R → pandas lo salta (`skipna=True`); R lo propaga (`NA`) salvo `na.rm = TRUE`.
5. Una clave vacía en pandas y en dplyr → pandas descarta la fila (`dropna=True`); dplyr crea el grupo `<NA>`.
6. `size` frente a `count` → `size` cuenta filas; `count` cuenta valores no vacíos (como `COUNT(*)` y `COUNT(columna)`). En dplyr: `n()` y `sum(!is.na(x))`.
7. ¿Qué queda agrupado tras `group_by(a, b) |> summarise(...)`? → `a`. Quita la última; usa `.groups = "drop"` o `ungroup()`.
8. ¿Por qué un grupo da NaN con `mean`? → Porque no tenía ningún valor: la media de nada es 0/0. `sum` de nada da 0.

## Citas (11)

| id de fuente | página PDF o ancla | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| prog1 | 29 | 29 | GROUP BY: agrupar resultados | la forma `SELECT columna, función(columna2) ... GROUP BY columna` y el ejemplo de empleados por departamento | Paso 1 |
| eda5 | 11 | 11 | `group_by()` y `summarise()` | altura media por género con `na.rm = TRUE` (sale un grupo `<NA>`) y peso medio por planeta (49 grupos, `NaN` en Champala y Chandrila) | Paso 2; volver en el paso 5 (profundizar) |
| eda5 | 16 | 16 | data.table: i, j, by | `by` es "el equivalente a `group_by()` en dplyr o `GROUP BY` en SQL" | Paso 2, al terminar |
| thinpython | 151 | 130 | Cap. 11: Dictionaries and Lists | `invert_dict`: un diccionario cuyos valores son listas, el mismo molde que las cajas de la vida real | Paso 2, profundizar |
| thinpython | 250 | 229 | Cap. 19: defaultdict | `defaultdict(list)` crea la caja vacía sola cuando aparece una clave nueva | Paso 2, profundizar, o Vida real en la línea `crear` |
| pyworkout | 85 | 59 | Ej. 15: Rainfall | acumular valores por ciudad en un diccionario: partir y resumir escrito a mano | Vida real, antes de reproducir |
| hojapandas | 2 | 2 | Group Data y Summarize Data | `groupby(by="col")`, `agg(function)`, `size()`, `count()` (no nulos) y las funciones de resumen por grupo | Paso 3 y paso 7 |
| eda5doc | `crear-resúmenes-con-summarise` | | Crear resúmenes con summarise() | `summarise` da un tibble nuevo con el nombre que eliges; con `group_by(continent)` una fila por continente, con `<NA>` y "Euroep" como grupos | Paso 3 y paso 6 |
| hojapandas | 2 | 2 | Group Data | `groupby(level="ind")`: agrupar por el índice; el índice es parte de la tabla en pandas | Paso 4 |
| eda6 | 23 | 23 | Otros resúmenes: skim agrupado | `penguins |> group_by(species) |> skim()`: un `group_by` cambia lo que hace la función siguiente | Paso 8 |
| prog1 | 30 | 30 | HAVING | filtrar grupos después de agrupar (`HAVING COUNT(*) > 10`): en pandas y dplyr es un filtro sobre la tabla resultado | Paso 8, profundizar o al terminar la página |

Notas: prog1, eda5, eda6, hojapandas: PDF = impresa. thinpython: impresa = PDF − 21. pyworkout: impresa = PDF − 26 (el
ejercicio ocupa PDF 85-89 / 59-63). Todas las páginas se comprobaron con `pdftotext` en esta sesión (prog1 29 y 30, eda5 11 y
16, eda6 23, hojapandas 2, thinpython 151 y 250, pyworkout 85); el ancla `crear-resúmenes-con-summarise` existe en el HTML.

Sin chip (no registrado, `prog1nb`): cuaderno `UAX_20251028.ipynb`, celda 27 (consulta SQL con `GROUP BY Country`, salida
`UsageError: Cell magic %%sql not found`), celda 28 (`clientes.groupby('Country').agg(MaxClientes=..., Clientes=...,
MinClientes=...).reset_index().sort_values('Clientes', ascending=False)`: China 182, Indonesia 111, Russia 53) y celda 34
(`groupby` por cuatro columnas con `agg({'OrderID': 'count', 'TotalAmount': 'sum'})` después de dos `merge`).

Errata o inconsistencias para decir con naturalidad: eda5 p.5 lista cinco verbos de dplyr y no incluye `group_by`, aunque
p.11 lo usa; eda5 p.11 muestra `NaN` sin explicarlo (paso 5); eda5doc usa `select_if` y `summarise_all`, que dplyr ya
considera reemplazados por `across()`; la celda 27 del cuaderno no corrió.

## Riesgos y notas para quien construye

- **Los valores por defecto están al revés entre lenguajes** (huecos en valores y en claves). Es el corazón de la página:
  nunca escribir "igual que en R". Ponerlos lado a lado.
- El orden de las filas del resultado: pandas y `group_by` ordenan por la clave (Monitores, Periféricos, Redes, y dplyr pone
  `<NA>` al final); el diccionario y la lista con nombres de la vida real respetan el orden de llegada (Periféricos,
  Monitores, Redes); `.by` también respeta el orden de llegada. Copiar las salidas reales, no reordenar.
- En pandas, `importe` pasa a `float64` porque contiene un hueco: por eso salen `400.0`, `50.0`. Con las seis filas completas
  es `int64` y sale `400` (salida real del paso 3). No mezclar.
- El mensaje de `summarise` de dplyr 1.2.1 es **nuevo** y distinto del de versiones anteriores ("has grouped output by ...").
  Usar el texto real de arriba; sale por `stderr` en inglés (`LC_MESSAGES` en inglés en esta máquina).
- La salida de `print(resumen)` en R tiene un espacio al final de la línea de nombres; el motor compara carácter a carácter.
- `print(g)` de un `DataFrameGroupBy` muestra una dirección de memoria que cambia: no ponerla como salida fija (usar
  `0x...`).
- El distractor `mean(importe, skipna = TRUE)` del paso 5 está verificado: R no da error ni aviso, el argumento se pierde
  en `...`. Es una trampa real de quien viene de pandas.
- No usar la media general de los importes en ningún chequeo: con los ocho pedidos da 114.2857... (800 / 7).
- La línea `naclave` comparte id entre lenguajes con efectos distintos: el visual debe mostrar las dos consecuencias (apagar
  la ficha en Python, cuarta caja en R).
- En R no usar `cat` como nombre de variable (choca con la función `cat`); por eso el código usa `g`.
