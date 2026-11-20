# Especificación: NA y NaN (na-nan)

- Ruta: `pandas`, orden 2; también `r-base`, orden 7. Tanda 9.
- Área: Programación con datos. Fuente del catálogo: "Programación y entorno de trabajo (SM142002), UD1, UD4 y UD5".
- Prerrequisitos: "Listas y data frames".
- Siguientes: ninguno en el catálogo (lista vacía).
- Aparece: SM142002 UD5, SM142002 UD2.
- Resumen del catálogo: "Los datos que faltan y por qué contagian a las cuentas."

**Foco y límites.** Esta página es la MECÁNICA del código: cómo se escribe un hueco, cómo se propaga por las cuentas, cómo se encuentra
y las tres decisiones (ignorar, borrar, rellenar) con sus funciones y sus trampas. NO explica por qué faltan los datos (MCAR, MAR, MNAR)
ni qué valor conviene imputar ni cómo deforma la varianza: eso ya está en "Codificación y datos faltantes" (paso "Faltantes": media
frente a mediana, la pila artificial) e "Imputación de datos faltantes" (pasos "Por qué faltan", "Borrar filas", "Media y mediana").
En los pasos 5 y 6 se enlazan esas dos páginas por su título exacto con una frase ("qué valor elegir y cuánto deforma: ver ...").
Sugerencia para la sesión principal (no lo cambia el constructor): agregar "Imputación de datos faltantes" a `siguientes` de `na-nan`
en el catálogo, y "NA y NaN" a los prerrequisitos o `siguientes` que correspondan, si se quiere el enlace automático en Conexiones.

**Datos de toda la página** (inventados, se dice en la página). Son los mismos cinco estudiantes de "Listas y data frames", ahora con huecos,
para que Francisco reconozca la tabla. La columna `extra` imita la columna vacía que deja un CSV con una coma de más al final de cada línea
(como las `Unnamed: 7` y `Unnamed: 8` del cuaderno de clase).

| nombre | edad | horas | grupo | extra |
|---|---|---|---|---|
| Ana | 23 | 4 | A | NA |
| Beto | 31 | NA | B | NA |
| Cris | NA | 5 | A | NA |
| Dani | 35 | 3 | NA | NA |
| Eva | 29 | 2 | A | NA |

Cuentas limpias (todas verificadas): horas presentes 4, 5, 3, 2 → suma 14, media 3.5. Rellenar el hueco con 0 → media 14/5 = 2.8. Con la media → 3.5.
Con el siguiente (bfill: Beto recibe el 5 de Cris) → 19/5 = 3.8. Edad sin hueco: media 29.5. Huecos por columna: nombre 0, edad 1, horas 1, grupo 1, extra 5.
Filas completas tras quitar `extra`: Ana y Eva (2 de 5). Correlación edad-horas con pares completos (Ana, Dani, Eva): −0.5.

R: `horas <- c(4, NA, 5, 3, 2)`; `grupo` es `chr` con un `NA`; `extra` es `logi` (todo `NA`). pandas: `edad` y `horas` son `float64`
(el hueco convierte enteros en decimales), `grupo` es `object` con `None`, `extra` es `float64`.

## Imagen central

**Una tabla con huecos donde el hueco es una casilla de color que se contagia, y una barra de tres decisiones.**

- La tabla de cinco filas y cinco columnas. Cada hueco es una casilla rayada en `--neg` con su rótulo según el lenguaje (interruptor **R / pandas**):
  `NA` / `<NA>` en R; `NaN` en columnas numéricas y `None` en la de texto en pandas. Al pie de cada columna, su tipo (`num`, `chr`, `logi`;
  `float64`, `object`).
- Debajo, una **tubería de cuentas**: una fila de cajas que reciben la columna elegida (tocar el encabezado de una columna la elige) y muestran
  el resultado de `suma`, `media`, `máximo`, `x * 2`, `x > 3`, `largo`. Cuando la columna tiene un hueco, la casilla de color **viaja por un hilo**
  hasta la caja de la cuenta y la pinta (el contagio). El resultado aparece solo después de responder el chequeo del paso.
- A la derecha (abajo en móvil), la **barra de decisiones** con botones grandes (todo se toca, nada depende de arrastrar):
  - Ignorar: interruptor `na.rm = TRUE` / `skipna` (el hueco se levanta de la cuenta y el divisor pasa de 5 a 4).
  - Borrar: "filas con algún hueco" (`dropna()` / `na.omit`), "columnas vacías" (`dropna(axis=1, how="all")`), "filas sin horas" (`dropna(subset=["horas"])`).
  - Rellenar: "con 0", "con la media", "con el siguiente" (`fillna(0)`, `fillna(media)`, `bfill()`).
  - "Deshacer" y "Volver a la tabla original".
  Cada decisión deja visible su efecto en tres contadores fijos: **filas** (5 → ...), **media de horas** y **tipo de la columna grupo**.
- Una **columna máscara** opcional (`is.na` / `isna`) que pone VERDADERO/FALSO al lado de cada columna y el conteo por columna como barras.
- Casillas editables (paso 4 y retos): los valores de `horas` se pueden cambiar, o vaciar (botón "hacer hueco" en cada casilla).

Modos por paso: 1) tabla sola con un hueco tapado por un signo de pregunta; 2) tubería de cuentas con contagio; 3) máscara y conteo por
columna; 4) interruptor ignorar, R y pandas lado a lado; 5) botones de borrar con el contador de filas; 6) botones de rellenar con la
media y el tipo de `grupo`; 7) "cuatro huecos distintos": una vitrina con `NA`, `NaN`, `None` y `pd.NA` y sus propiedades.

## Hipótesis inicial

"Tienes las horas de estudio de cinco compañeros, pero Beto no contestó. Le pides al programa el promedio de horas de los cinco.
¿Qué crees que debería responder? ¿Y qué crees que responde de verdad? ¿Responderá lo mismo R que Python?"

Se vuelve a mostrar en el destacado del paso 4 (`#citaHipo`), cuando aparece que R y pandas responden distinto.

## Pasos (7)

### Paso 1. Un hueco en la tabla
- Idea: un dato que falta no es un cero ni un espacio: es "no se sabe". Cualquier cuenta que lo use tampoco se sabe.
- Escenario: modo 1, sin código ni símbolos. La tabla con la casilla de Beto tapada por un signo de pregunta. Un deslizador "si Beto
  hubiera contestado..." (0 a 10 horas) aparece SOLO después del chequeo y mueve el promedio (de 2.8 a 4.8): el promedio depende del dato que falta.
- Chequeo (predicción antes de tocar, sin símbolos): "Le pides a R el promedio de las horas de los cinco. ¿Qué te responde?"
  - Correcta: "Que no se sabe (`NA`): sin el dato de Beto, el promedio de los cinco no se puede calcular." Salida real de `mean(horas)`: `[1] NA`.
  - "3.5, el promedio de los cuatro que contestaron": eso es otra pregunta (el promedio de cuatro), y R no la cambia por su cuenta.
  - "2.8, contando el hueco como 0": nadie dijo que Beto estudió 0 horas; inventarlo es peor que no saber.
  - "Un error y el programa se detiene": R no se detiene; devuelve un valor especial y sigue.
- Texto: en R el hueco se escribe `NA` ("Not Available", no disponible). Cita prog4html `valores-perdidos` (los `<NA>` de `starwars`
  en `hair_color` son robots sin pelo: conviene saber por qué falta un dato antes de decidir qué hacer).

### Paso 2. El contagio
- Idea: casi toda operación con un `NA` da `NA`: suma, producto, máximo, comparación. Las operaciones elemento a elemento contagian solo su casilla;
  las que resumen (suma, media, máximo) contagian el resultado entero. `length` no lo mira: cuenta casillas.
- Notación entra aquí. Escenario: modo 2, tubería de cuentas con la columna `horas`.
- Salidas reales (R, `horas <- c(4, NA, 5, 3, 2)`): `sum(horas)` → `NA`; `horas * 2` → `8 NA 10 6 4`; `max(horas)` → `NA`;
  `horas > 3` → `TRUE NA TRUE FALSE FALSE`; `length(horas)` → `5`; `NA + 1` → `NA`; `NA > 3` → `NA`.
- Chequeo (cálculo con datos en vivo): "De estas cinco cuentas, ¿cuáles dan un resultado entero `NA`?" (selección múltiple sobre la columna actual:
  `sum(horas)`, `horas * 2`, `max(horas)`, `length(horas)`, `mean(horas)`). Correcta con los datos de inicio: `sum`, `max` y `mean`.
  `horas * 2` solo tiene `NA` en la casilla de Beto (es elemento a elemento) y `length` da 5. Si Francisco quitó el hueco con las casillas
  editables, la respuesta correcta pasa a "ninguna" (el chequeo usa los datos en vivo).
- `details.profundizar` "¿Hay cuentas que no se contagian?": `NA | TRUE` da `TRUE`, `NA & FALSE` da `FALSE` y `NA^0` da `1`: el resultado
  sería el mismo con cualquier valor en el hueco. Pero `NA * 0` da `NA` (podría ser `Inf * 0`). Todas verificadas en R 4.6.1.
- Cita eda6 p.12 (`cor(airquality)` llena de `NA` las filas y columnas de las variables con huecos): el contagio en una matriz entera.

### Paso 3. Encontrar los huecos (trampa)
- Idea: para preguntar "¿esto falta?" hay una función, `is.na(x)` en R y `isna()` en pandas, que devuelve una máscara VERDADERO/FALSO.
  Sumar la máscara cuenta los huecos (`sum(is.na(x))`, `df.isna().sum()`).
- Escenario: modo 3, máscara al lado de cada columna y barras con el conteo por columna (0, 1, 1, 1, 5).
- **Trampa marcada**: comparar con el hueco no sirve. `horas == NA` en R da `NA NA NA NA NA` (preguntar si algo es igual a "no se sabe"
  da "no se sabe"). En Python, `np.nan == np.nan` da `False` y `df["horas"] == np.nan` da cinco `False`: nunca encuentra el hueco. (Salidas reales.)
- Chequeo (predicción antes de tocar): "En pandas escribes `df["horas"] == np.nan`. ¿Cuántos `True` salen?"
  - Correcta: 0. Un `NaN` no es igual a nada, ni a otro `NaN`.
  - 1: es lo que uno espera, y por eso la trampa es peligrosa (no da error).
  - 5: confunde con `NA == NA` de R, que da `NA` en cada casilla, no `True`.
  - "Un error": pandas compara sin quejarse.
- Después del chequeo, el escenario pide (cálculo con datos en vivo) "¿cuántos huecos tiene la tabla entera?": 8 (`df.isna().sum().sum()`, verificado).
- Citas: hojapandas p.1 (`pd.isnull(obj)` y `pd.notnull(obj)`); eda6 p.9 (`summary(airquality)` muestra `NA's: 37` en Ozone y `7` en Solar.R:
  `summary` cuenta los huecos por ti); eda6doc `descripción-de-valores-perdidos` (`vis_miss` dibuja la máscara entera de `starwars`
  y `miss_var_summary` da el conteo y el porcentaje por variable).
- Texto: el cuaderno UAX_20251105, celda 54, hace `clander.isna().sum()` y ve dos columnas `Unnamed` con 1000 huecos de 1000 (nombrado sin chip).

### Paso 4. Decidir: ignorar el hueco (destacado)
- Idea: la primera decisión es ignorarlo dentro de la cuenta. En R se pide de forma explícita: `mean(horas, na.rm = TRUE)` → 3.5
  (suma 14 entre 4, no entre 5). La mayoría de funciones de resumen de R tienen `na.rm`: `sum` 14, `max` 5, `median` 3.5 (verificados).
- Escenario: modo 4, interruptor `na.rm`. Al encenderlo, la casilla de Beto se levanta de la cuenta y el divisor de la fórmula viva
  $\bar x = \frac{4 + 5 + 3 + 2}{4}$ cambia de 5 a 4.
- Citas: eda6 p.10 (`mean`, `median` y `sd` de Ozone dan `NA`; con `na.rm = TRUE`, 42.12931, 31.5 y 32.98788); prog4html
  `por-qué-no-deberíamos-usar-t-y-f-para-abreviar-true-y-false` (`na.rm` y `table(..., useNA = "ifany")`, que muestra el hueco en un conteo
  en vez de esconderlo: con `grupo`, `table` da A 3, B 1 y con `useNA = "ifany"` agrega `<NA> 1`, verificado).
- Errata para decir con naturalidad: ese documento escribe "utilizando na.rm()" como si fuera una función; es un argumento que se le pasa a `mean`, `sum`, etc.
- Chequeo (cálculo con datos en vivo, `horas` editable): "¿Cuánto da `mean(horas, na.rm = TRUE)`?" Con los datos de inicio, 3.5.
  Error típico que la pista nombra: dividir entre 5 (2.8).

**Destacado con predicción (la confusión natural del concepto): "¿Por qué R me dice NA y pandas me da un número con la misma columna?"**
- Predicción: "La misma columna en pandas: `df["horas"].mean()`. ¿Qué da?" Opciones: `3.5` (correcta) / `nan` / un error / `2.8`.
- Explicación: pandas ignora los huecos **por defecto** (`skipna=True`); R los contagia por defecto y tú decides con `na.rm`. NumPy, que está debajo
  de pandas, tampoco ignora: `np.mean(horas)` da `nan`. Salidas reales: `df["horas"].mean()` → `3.5`; `df["horas"].mean(skipna=False)` → `nan`;
  `df["horas"].count()` → 4 frente a `len(df["horas"])` → 5. Lo mismo con la correlación: `cor(df$edad, df$horas)` da `NA` en R y
  `df["edad"].corr(df["horas"])` da `-0.5` en pandas, calculada en silencio con solo tres pares (en R: `use = "complete.obs"` → `-0.5`, eda6 p.12).
- Moraleja: pandas no te avisa de que dividió entre 4. Antes de un resumen, cuenta los huecos (paso 3).
- Muestra de nuevo la hipótesis.
- `details.profundizar` "¿Cuántas filas usó la cuenta?": `count()` en pandas y `sum(!is.na(x))` en R; por qué en un informe se reporta la n de cada media.

### Paso 5. Decidir: borrar (trampa)
- Idea: la segunda decisión es quitar lo incompleto. `dropna()` (pandas) y `na.omit(df)` (R) borran **toda fila con al menos un hueco**.
  `dropna(axis=1)` borra columnas con algún hueco; `how="all"` exige que la fila o columna esté entera vacía; `subset=["horas"]` mira solo esa columna.
- Escenario: modo 5, botones de borrar y contador de filas.
- **Trampa marcada (la del cuaderno)**: con la columna `extra` entera vacía, toda fila tiene un hueco, así que `df.dropna()` devuelve
  `Empty DataFrame` (cero filas, las cinco columnas intactas) y `na.omit(df)` da `0 5` en `dim` (verificado). Es lo que pasa en UAX_20251105, celda 56
  (`clander.dropna()` vacío por las dos `Unnamed`). El orden correcto: primero `dropna(axis=1, how="all")` (quita `extra`, celda 58 del cuaderno),
  después decidir sobre las filas. Tras quitar `extra`, `dropna()` deja 2 filas (Ana y Eva); `dropna(subset=["horas"])` deja 4 (índices 0, 2, 3, 4).
- Chequeo (predicción antes de tocar): "Aplicas `df.dropna()` a la tabla tal como está. ¿Cuántas filas quedan?"
  - Correcta: 0. Cada fila tiene al menos un hueco (la columna `extra`).
  - 2: es lo que queda después de quitar `extra`; aquí todavía está.
  - 4: confunde con `dropna(subset=["horas"])`.
  - 5: `dropna` no ignora la columna vacía.
- Otra trampa (en el texto, verificada): en R base, filtrar con una máscara que tiene `NA` crea **filas fantasma**: con `grupo` y la máscara
  `df$grupo != "A"`, `df[df$grupo != "A", ]` devuelve la fila de Beto y una fila llena de `NA` con nombre `NA`. `dplyr::filter` descarta esas filas
  sin avisar. Cita eda5 p.7: `filter(species != "Human")` da 48 filas; los 4 personajes sin especie desaparecen y el texto no lo menciona
  (con `starwars[starwars$species != "Human", ]` salen 52 filas, 4 de ellas vacías; verificado).
- Citas: hojapandas p.2 (`df.dropna()`: "Drop rows with any column having NA/null data"); islr2 PDF 60-61 (impresa 49-50; `na.strings = "?"`
  convierte el signo de interrogación del archivo en `NA` al leer, y `na.omit` quita las 5 filas incompletas de 397).
- Enlace por título a "Imputación de datos faltantes" (paso "Borrar filas"): por qué borrar puede sesgar, que aquí no se repite.

### Paso 6. Decidir: rellenar (trampa)
- Idea: la tercera decisión es poner un valor en el hueco: `fillna(valor)`, `fillna(media)`, `bfill()` / `ffill()` en pandas; en R,
  `x[is.na(x)] <- valor` o `tidyr::replace_na`. Y el camino inverso: `na_if(x, 0)` vuelve hueco un 0 que en realidad significaba "no hay dato".
- Escenario: modo 6, botones de rellenar. Los tres contadores cambian: media de horas 2.8 (con 0), 3.5 (con la media), 3.8 (con el siguiente);
  el tipo de `grupo`.
- **Trampa marcada (la del cuaderno)**: `df.fillna(0)` rellena TODAS las columnas con el número 0, también la de texto: `grupo` queda
  `['A', 'B', 'A', 0, 'A']` (un número entre textos, la columna sigue `object`). En R, `df[is.na(df)] <- 0` pone el texto `"0"` (la columna es `chr`
  y R convierte el 0 a texto: coerción, ver "Tipos y coerción"). Es el "arreglo" de UAX_20251105, celda 62, para las estaciones de diciembre.
  Lo correcto: un valor por columna, `df.fillna({"horas": df["horas"].mean(), "grupo": "sin grupo"})` (verificado).
- Chequeo (cálculo con datos en vivo): "Rellenas `horas` con 0. ¿Cuánto vale ahora `df["horas"].mean()`?" Con los datos de inicio, 2.8 (14/5).
  Pista para el error 3.5: "ahora el hueco cuenta: es un 0 de verdad para la cuenta". Después del chequeo se muestran las tres medias lado a lado.
- Errata del cuaderno para decir con naturalidad: celda 67, `int(fechas_borrado.mean())` trunca la media (16.19) a 16 antes de rellenar; celda 70,
  `fillna(method='bfill')` ya da `FutureWarning` y hoy se escribe `.bfill()`.
- Citas: hojapandas p.2 (`df.fillna(value)`: "Replace all NA/null data with value", justo lo que hizo la celda 62); eda5doc `síntomas-de-datos-problemáticos`
  (entre los síntomas: "Datos perdidos (NAs)" y "Ceros en vez de datos perdidos"); eda5doc `ejercicio` (`na_if(infant_mortality, 0)` convierte los
  ceros falsos en `NA`).
- Enlace por título a "Imputación de datos faltantes" (qué valor elegir y cuánto aplasta la varianza) y a "Codificación y datos faltantes".
- `details.profundizar` "¿Y si relleno con el siguiente?": `bfill` copia el valor de la fila de abajo; tiene sentido en series de tiempo ordenadas,
  no en una lista de personas (Beto recibe las horas de Cris).

### Paso 7. Cuatro maneras de faltar: NA, NaN, None y pd.NA
- Idea (el paso más técnico): no todos los huecos son iguales.
  - R: `NA` es "no disponible" y tiene versión por tipo (`NA` es `logical`, `NA_character_`, `NA_integer_`); `NaN` es "no es un número", el resultado
    de una cuenta imposible: `0/0` → `NaN`, `mean(numeric(0))` → `NaN`. `is.na(NaN)` → `TRUE`, pero `is.nan(NA)` → `FALSE`.
  - Python: `np.nan` es un `float` (por eso una columna de enteros con un hueco pasa a `float64`: en el cuaderno, UAX_20251105 celda 65,
    `replace(10, np.nan)` convierte `day` de `int64` a `float64`); `None` es el "nada" de Python y se queda en columnas `object`; `pd.NA` es el
    hueco nuevo de pandas que deja la columna entera (`pd.Series([1, 2, None], dtype="Int64")` → `[1, 2, <NA>]`, media 1.5).
- Escenario: modo 7, vitrina con cuatro casillas y sus propiedades al tocarlas: tipo, `== sí mismo`, cómo lo detecta `isna` / `is.na`.
- Cita eda5 p.11: el peso medio por planeta da `NaN` en Champala y Chandrila: todos sus personajes tienen el peso en `NA`, `na.rm = TRUE` los quita
  todos y la media de cero números es `NaN`. El material no lo explica; aquí sí.
- Chequeo (elección con explicación): "En R, `mean(c(NA, NA), na.rm = TRUE)`, ¿qué da?"
  - Correcta: `NaN`: quitas los dos y te queda la media de nada (0/0). (Verificado con `mean(numeric(0))`; `sum(c(NA, NA), na.rm = TRUE)` da 0.)
  - `NA`: confunde "falta" con "imposible"; el `NA` ya no está.
  - `0`: es la suma de nada, no la media.
  - "Un error": R no se detiene.
- `details.profundizar` "¿Por qué `bool(pd.NA)` da error?": `pd.NA == 1` da `<NA>` y `if pd.NA:` lanza `TypeError: boolean value of NA is ambiguous`
  (verificado): pandas te obliga a decidir qué hacer con el hueco antes de un `if`. `pd.isna` funciona con los cuatro.

## Vida real (Python y R)

Python 3.13 con NumPy 2.1.3 y pandas 2.2.3; R 4.6.1. Mismos datos (la columna `horas`).
Algoritmo: la media ignorando el hueco, recorriendo la columna a mano (como hace `na.rm` por dentro), y cerrando contra la librería:
NumPy contagia, pandas ignora, R contagia hasta que se lo pides. El texto sin el prefijo `id: ` es exactamente lo que se ejecutó.
Las líneas con id `-` no tienen evento.

### Python

```
import: import numpy as np
-: import pandas as pd
datos: horas = [4, np.nan, 5, 3, 2]          # inventado: Beto no contestó
total0: total = 0
cuenta0: cuenta = 0
fori: for i in range(len(horas)):
si:     if pd.isna(horas[i]):             # el hueco no se compara con ==
salta:         continue
suma:     total = total + horas[i]
cuenta:     cuenta = cuenta + 1
imp1: print(total / cuenta)
lib1: print(np.mean(horas))                 # NumPy: el hueco contagia
lib2: print(pd.Series(horas).mean())        # pandas: lo salta sin avisar
```

Salida real:
```
3.5
nan
3.5
```

### R

```
datos: horas <- c(4, NA, 5, 3, 2)          # inventado: Beto no contestó
total0: total <- 0
cuenta0: cuenta <- 0
fori: for (i in seq_along(horas)) {
si:   if (is.na(horas[i])) {            # el hueco no se compara con ==
salta:     next
-:   }
suma:   total <- total + horas[i]
cuenta:   cuenta <- cuenta + 1
-: }
imp1: print(total / cuenta)
lib1: print(mean(horas))                  # R: el hueco contagia
lib2: print(mean(horas, na.rm = TRUE))    # se lo dices tú
```

Salida real:
```
[1] 3.5
[1] NA
[1] 3.5
```

Comprobado con un `diff`: quitando el prefijo `id: ` (y `-: `) de cada línea, los dos bloques son idénticos carácter por carácter a los archivos
que se ejecutaron. Copiar respetando los espacios de alineación de los comentarios.

Eventos (una sola lista `EV`, la misma para los dos lenguajes): `import`, `datos`, `total0`, `cuenta0`, luego 5 vueltas de `fori` + `si`,
con `salta` en la vuelta de Beto y `suma` + `cuenta` en las otras cuatro, y al final `imp1`, `lib1`, `lib2`: 1 + 1 + 2 + 10 + 1 + 8 + 3 = **26 eventos**.
`import` solo existe en Python: en R se narra "Esta línea solo existe en Python: R trae `NA`, `is.na` y `mean` sin cargar nada." (mismo
patrón que `listas-dataframes.html`).

### Foto de estado por línea ejecutada

| Evento | i (py / R) | horas[i] | ¿hueco? | total | cuenta | Visual |
|---|---|---|---|---|---|---|
| datos | | | | | | la tira de 5 casillas; la de Beto rayada (`nan` / `NA`) |
| total0, cuenta0 | | | | 0 | 0 | dos cajas acumuladoras |
| fori/si/suma/cuenta | 0 / 1 | 4 | no | 4 | 1 | casilla de Ana en `--pos`, flecha a `total` |
| fori/si/salta | 1 / 2 | NaN / NA | sí | 4 | 1 | casilla de Beto en `--neg`; `continue` / `next` salta a la vuelta siguiente, las cajas no cambian |
| fori/si/suma/cuenta | 2 / 3 | 5 | no | 9 | 2 | |
| fori/si/suma/cuenta | 3 / 4 | 3 | no | 12 | 3 | |
| fori/si/suma/cuenta | 4 / 5 | 2 | no | 14 | 4 | |
| imp1 | | | | 14 | 4 | 14 / 4 = 3.5; el divisor 4 resaltado (no 5) |
| lib1 | | | | | | Python: `np.mean` recibe las 5 casillas, la rayada pinta el resultado: `nan`. R: `mean(horas)` → `NA` |
| lib2 | | | | | | Python: pandas salta el hueco sin decirlo → 3.5. R: con `na.rm = TRUE` → 3.5 |

En Python `total` se queda entero (4, 9, 12, 14: las casillas presentes de la lista son `int`; verificado) y `14 / 4` imprime `3.5`.
Índices con `ctx.ix`. Narración de `si`: "¿La casilla i es un hueco? Se pregunta con `pd.isna` / `is.na`, nunca con `==`". En `salta`: "`continue`
(Python) y `next` (R) saltan al principio de la vuelta siguiente: ni suma ni cuenta".

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántas veces se ejecuta la línea `total = total + horas[i]`?" Respuesta **4** (Beto se salta). Distractores: 5 (las vueltas del `for`),
1 (las veces que corre `continue`), 14 (el valor final de `total`). Pista: "la línea está después del `if` que salta los huecos".

### Trampas reales (retos `codigo1` a `codigo3`)

**codigo1: `T <- 0` rompe `na.rm = T` (R).**
```
horas <- c(4, NA, 5, 3, 2)
T <- 0                              # alguien guardó un tiempo en T
print(mean(horas, na.rm = T))
print(mean(horas, na.rm = TRUE))
```
Salida real:
```
[1] NA
[1] 3.5
```
Pregunta: "¿Por qué la primera da `NA`?" Correcta: `T` no es una palabra reservada, es una variable que vale `TRUE` hasta que alguien la pisa;
con `T <- 0`, `na.rm = 0` equivale a `FALSE`. `TRUE` sí es reservada (`TRUE <- 1` da error). Cita prog4html `por-qué-no-deberíamos-usar-t-y-f-para-abreviar-true-y-false`
(mismo fenómeno con `c(1, 2, 3, NA, 5)`, 2.75). Distractores: "`na.rm` no acepta abreviaturas" (sí acepta `T` mientras valga `TRUE`; tras `rm(T)` vuelve a dar 3.5, verificado);
"el `NA` está en la segunda posición" (la posición no importa).

**codigo2: `dropna()` deja la tabla vacía (pandas).**
```
import numpy as np
import pandas as pd
df = pd.DataFrame({"nombre": ["Ana", "Beto", "Cris", "Dani", "Eva"],
                   "edad": [23, 31, np.nan, 35, 29],
                   "horas": [4, np.nan, 5, 3, 2],
                   "grupo": ["A", "B", "A", None, "A"],
                   "extra": np.nan})   # columna vacía que dejó el CSV
print(df.dropna().shape)
limpio = df.dropna(axis=1, how="all")
print(limpio.dropna().shape)
```
Salida real:
```
(0, 5)
(2, 4)
```
Par en R (mismo `df` con `extra = NA`): `print(dim(na.omit(df)))` → `[1] 0 5` (verificado).
Pregunta: "¿Por qué la primera tabla tiene 0 filas?" Correcta: `extra` está vacía en todas las filas, así que toda fila "tiene algún hueco".
Distractores: "`dropna` borra columnas" (por defecto borra filas, `axis=0`); "hay un error en los datos" (no: es la columna vacía del CSV); "pandas
no sabe leer `None`" (sí lo reconoce como hueco).

**codigo3: `fillna(0)` mete un número en una columna de texto (pandas).**
```
import numpy as np
import pandas as pd
df = pd.DataFrame({"nombre": ["Ana", "Beto", "Cris", "Dani", "Eva"],
                   "horas": [4, np.nan, 5, 3, 2],
                   "grupo": ["A", "B", "A", None, "A"]})
relleno = df.fillna(0)
print(relleno["grupo"].tolist())
print(relleno["horas"].mean())
print(df.fillna({"horas": df["horas"].mean(), "grupo": "sin grupo"})["grupo"].tolist())
```
Salida real:
```
['A', 'B', 'A', 0, 'A']
2.8
['A', 'B', 'A', 'sin grupo', 'A']
```
Pregunta: "Con `fillna(0)`, ¿qué dos cosas salieron mal?" Correcta: Dani queda en un grupo llamado 0 (un número entre textos) y la media de horas
baja de 3.5 a 2.8 porque el 0 de Beto ahora cuenta. Es la celda 62 de UAX_20251105.

`p.vr-nota`: `df["horas"].mean()` (pandas ya ignora) y `mean(df$horas, na.rm = TRUE)` en R; para NumPy, `np.nanmean(horas)` → `3.5` (verificado).
`details.profundizar` "La forma vectorizada": `horas[~np.isnan(horas)].mean()` en NumPy y `mean(horas[!is.na(horas)])` en R: la máscara del paso 3
elige las casillas presentes y después se promedia (los dos dan 3.5; R verificado con `x[!is.na(x)]` → `4 5 3 2`).

## Retos (11)

RETOS = ["ojo", "construir", "mano", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3", "formula"]

1. **ojo** (ojo clínico, 8 rondas al azar, aprueba con 7 de 8): se muestra una expresión y el lenguaje; Francisco decide sin ejecutar si el resultado
   es **"un hueco"** (`NA` / `nan`) o **"un valor"**. Con `x <- c(4, NA, 5, 3, 2)` en R y `s = pd.Series([4, np.nan, 5, 3, 2])`, `a = np.array([...])` en Python.
   Banco verificado (expresión → resultado real):
   R: `sum(x)` → NA; `length(x)` → 5; `sum(is.na(x))` → 1; `mean(x, na.rm = TRUE)` → 3.5; `x[1] + x[3]` → 9; `x[2] * 0` → NA; `max(x)` → NA;
   `min(x, na.rm = TRUE)` → 2; `NA^0` → 1; `NA | TRUE` → TRUE; `NA & TRUE` → NA; `NA & FALSE` → FALSE; `any(x > 4)` → TRUE; `all(x > 1)` → NA;
   `cumsum(x)` → `4 NA NA NA NA` (cuenta como hueco a partir de la 2.ª casilla; la pregunta es "¿el último valor es un hueco?": sí).
   Python: `s.sum()` → 14.0; `s.mean()` → 3.5; `s.max()` → 5.0; `np.sum(a)` → nan; `s.mean(skipna=False)` → nan; `s.count()` → 4; `len(s)` → 5;
   `np.nan == np.nan` → False (un valor); `s.cumsum().tolist()` → `[4.0, nan, 9.0, 12.0, 14.0]` (último: un valor); `np.nanmean(a)` → 3.5.
   La explicación de cada ronda dice la regla: "resume y R" → hueco salvo `na.rm`; "resume y pandas" → valor; "NumPy" → hueco.
2. **construir** (manipular la barra de decisiones hasta cumplir): partiendo de la tabla original, lograr con los botones:
   (a) una tabla de 4 filas sin la columna `extra` y sin huecos en `horas` (columnas vacías + filas sin horas → forma (4, 4), índices 0, 2, 3, 4);
   (b) media de horas 3.5 **sin borrar ninguna fila** (rellenar con la media, o ignorar);
   (c) la tabla de filas completas (columnas vacías + filas con algún hueco → (2, 4): Ana y Eva).
   Ok al cumplir las tres. Si Francisco aprieta "filas con algún hueco" primero, el escenario muestra la tabla vacía y el mensaje del paso 5.
3. **mano** (a mano, datos al azar, pistas escalonadas, reintentable): un vector de 6 enteros entre 1 y 9 con 1 o 2 huecos al azar (posición al azar).
   Pide: (1) `sum(is.na(x))`; (2) `mean(x, na.rm = TRUE)` (redondeo a 2 decimales); (3) la media después de `fillna(0)`. Generar hasta que la media
   con `na.rm` tenga como mucho 2 decimales exactos. Pistas: 1) "cuenta las casillas rayadas"; 2) "suma solo las presentes y divide entre cuántas son";
   3) primera parte resuelta con números.
4. **error** (cazar el error, 3 variantes del código de Vida real, una línea mal):
   - V1 (R): `if (horas[i] == NA) {` en lugar de `is.na(...)`. Salida real: `Error in if (horas[i] == NA) { : missing value where TRUE/FALSE needed`.
     La comparación con `NA` da `NA` y el `if` no sabe qué hacer.
   - V2 (Python): `if horas[i] == np.nan:`. Salida real: `nan`, `nan`, `3.5` (la primera media sale `nan`: nunca salta el hueco y lo suma).
   - V3 (Python): `print(total / len(horas))` en lugar de `total / cuenta`. Salida real de esa línea: `2.8` (divide entre 5 aunque sumó 4 valores).
5. **prop1** (opción múltiple, `mezclar: true`): "En R, ¿qué diferencia hay entre `NA` y `NaN`?" Correcta: "`NA` es un dato que no está; `NaN` es el resultado
   de una cuenta imposible, como 0/0; `is.na` detecta los dos". Pistas: "Son lo mismo" → "`is.nan(NA)` da FALSE: R los distingue";
   "`NaN` es el `NA` de los textos" → "el `NA` de texto es `NA_character_`"; "`NaN` solo existe en Python" → "en R, `0/0` da `NaN`".
6. **prop2**: "Tienes una columna con 2 huecos de 10. ¿Qué devuelve `df['x'].mean()` en pandas?" Correcta: "la media de los 8 presentes, sin avisar".
   Pistas: "`nan`" → "eso es NumPy o `skipna=False`"; "la media de los 10 contando los huecos como 0" → "pandas no rellena, salta"; "un aviso y `nan`" → "pandas no avisa: por eso hay que contar antes".
7. **prop3**: "¿Qué hace `dropna(axis=1, how='all')`?" Correcta: "borra las columnas que están enteras vacías". Pistas: "borra filas vacías" → "`axis=1` son columnas";
   "borra columnas con algún hueco" → "eso es `how='any'`, el valor por defecto"; "rellena las columnas vacías" → "`dropna` siempre quita, nunca pone".
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.
11. **formula**: la parte de memoria (`B.ordenar`), registrada con `C.reto("formula", ok)`.

## Memoria

**B.ordenar** (la media ignorando huecos en R), piezas en orden:
1. `mean(`
2. `df$horas`
3. `, na.rm = `
4. `TRUE`
5. `)`

Resultado: `mean(df$horas, na.rm = TRUE)` = 3.5. Distractores: `T` (funciona hasta que alguien escribe `T <- 0`), `== NA` (no encuentra huecos),
`na.omit = TRUE` (no es un argumento de `mean`).

**Tarjetas (8):**
1. ¿Qué da `mean(c(4, NA, 5))` en R? → `NA`: el hueco contagia la cuenta. Con `na.rm = TRUE`, 4.5.
2. ¿Y `pd.Series([4, None, 5]).mean()`? → 4.5: pandas ignora los huecos por defecto (`skipna=True`). NumPy no: `np.mean` da `nan`.
3. ¿Cómo encuentro los huecos? → `is.na(x)` en R, `isna()` en pandas. Nunca `== NA` ni `== np.nan`.
4. ¿Cómo los cuento por columna? → `colSums(is.na(df))` en R, `df.isna().sum()` en pandas.
5. ¿Por qué `dropna()` me dejó la tabla vacía? → Porque una columna está entera vacía y toda fila tiene un hueco. Primero `dropna(axis=1, how="all")`.
6. ¿Qué pasa con `fillna(0)` en una columna de texto? → Mete el número 0 entre textos (en R, el texto "0"). Rellena por columna con un diccionario.
7. `NA` frente a `NaN` en R → `NA`: el dato no está. `NaN`: cuenta imposible (0/0, la media de nada). `is.na` detecta los dos.
8. ¿Por qué mi columna de enteros pasó a `float64`? → Porque `np.nan` es un decimal. Para enteros con huecos, `dtype="Int64"` usa `pd.NA`.

## Citas (13)

| id de fuente | página PDF o ancla | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| prog4html | `valores-perdidos` | | Valores perdidos | `<NA>` significa "Not Available"; los `hair_color` que faltan son robots sin pelo: preguntarse por qué falta | Paso 1 |
| eda6 | 12 | 12 | Correlación con NA | `cor(airquality)` con filas y columnas llenas de `NA`; `use = "complete.obs"` | Paso 2 (contagio) y destacado del paso 4 |
| hojapandas | 1 | 1 | Logic in Python (and pandas) | `pd.isnull(obj)` "Is NaN" y `pd.notnull(obj)` | Paso 3 |
| eda6 | 9 | 9 | Valores faltantes | `head(airquality)` con `NA` y `summary` que cuenta `NA's` por columna (Ozone 37, Solar.R 7) | Paso 3 |
| eda6doc | `descripción-de-valores-perdidos` | | Descripción de valores perdidos | `naniar::vis_miss(starwars)` (la máscara dibujada) y `miss_var_summary()` (conteo y porcentaje) | Paso 3, al terminar |
| eda6 | 10 | 10 | Valores faltantes | `mean`, `median`, `sd` dan `NA`; el argumento `na.rm = TRUE` (42.12931, 31.5, 32.98788) | Paso 4 |
| prog4html | `por-qué-no-deberíamos-usar-t-y-f-para-abreviar-true-y-false` | | T y F | `T <- 0` rompe `na.rm = T`; `table(..., useNA = "ifany")` y `"always"` | Paso 4 y reto `codigo1` |
| hojapandas | 2 | 2 | Handling Missing Data | `df.dropna()` (filas con algún NA) y `df.fillna(value)` (todo NA por un valor) | Pasos 5 y 6 |
| eda5 | 7 | 7 | `filter()` | `filter(species != "Human")` da 48 filas: los 4 sin especie se descartan sin aviso | Paso 5 |
| islr2 | 60 | 49 | 2.3.4 Loading Data | `na.strings = "?"` al leer; `na.omit` deja 392 de 397 filas (la cuenta sigue en la p. 61 / 50) | Paso 5 |
| eda5doc | `síntomas-de-datos-problemáticos` | | Síntomas de datos problemáticos | lista de síntomas: "Datos perdidos (NAs)" y "Ceros en vez de datos perdidos" | Paso 6 |
| eda5doc | `ejercicio` | | Ejercicio de limpieza | `na_if(infant_mortality, 0)`: un 0 que significaba "sin dato" vuelve a ser `NA` | Paso 6 |
| eda5 | 11 | 11 | `group_by()` + `summarise()` | `mean(mass, na.rm = TRUE)` por planeta da `NaN` en Champala y Chandrila (sin explicación en el texto) | Paso 7 |

Verificado por mí: hojapandas p.1 (`pd.isnull`, `pd.notnull`), p.2 (`df.dropna()`, `df.fillna(value)`), p.3 (fechas, no se usa aquí); eda6 p.9, 10 y 12
(texto leído con `pdftotext`); eda5 p.7 y 11; islr2 PDF 60 (`na.strings`, `dim` 397 9, "only five of the rows contain missing observations");
anclas `valores-perdidos` y `por-qué-no-deberíamos-usar-t-y-f-para-abreviar-true-y-false` en el HTML de la UD4, `síntomas-de-datos-problemáticos` y `ejercicio`
en el de la UD5, `descripción-de-valores-perdidos` en el de la UD6 (los cinco `id` existen y el contenido coincide).
`data-pag` = PDF; hojapandas, eda5, eda6: PDF = impresa; islr2: impresa = PDF − 11.

**Sin chip (no registrados: `prog1nb`).** Se nombran en el texto con su celda (numeración del mapa `sm142002-programacion.md`, que cuenta las celdas desde 1):
UAX_20251105 c54 (`isna().sum()`, dos `Unnamed` con 1000 huecos), c56 (`dropna()` → `Empty DataFrame`), c57-58 (`dropna(axis=1)` y `how='all'`),
c60 (filas de diciembre con `Estacion2` en `NaN`), c62 (`fillna(0)`), c64 (las estaciones de diciembre quedan en 0), c65 (`replace(10, np.nan)`: `day` pasa a `float64`, 31 huecos en c66),
c67 (`int(...)` trunca la media), c70 (`fillna(method='bfill')` con `FutureWarning`). UAX_20251028 c46-48: el diccionario de estaciones sin el mes 12
deja 82 filas en `NaN` (`Estacion2` 918 no nulos de 1000); se cuenta en "Fechas y formatos", aquí basta mencionarlo en el paso 6.
Verificado leyendo los `.ipynb` con `json`: celdas y salidas coinciden con lo citado.

## Riesgos y notas para quien construye

- **R y pandas tienen defaults opuestos**: R contagia (`NA`) y pandas ignora (`skipna=True`); NumPy contagia (`nan`). Es el corazón del destacado:
  nunca escribir "igual que en R". `corr` en pandas usa pares completos sin avisar; `cor` en R da `NA`.
- **Cómo se ve el hueco**: R imprime `NA` en vectores numéricos y `<NA>` en columnas de texto de un data frame (y de un tibble); pandas imprime `NaN`
  en columnas numéricas y `None` en `object` (si el `None` se creó así; `fillna`/`isna` lo tratan igual). La rejilla debe rotular cada hueco así, no un
  "NA" genérico.
- `np.nan == np.nan` es `False`, pero `None == None` es `True` (verificado): no usar `None` como ejemplo de "el hueco no es igual a sí mismo".
- R base: `sort(x)` **quita** el `NA` sin avisar (`sort(c(4, NA, 5, 3, 2))` → `2 3 4 5`, verificado); pandas `sort_values` lo pone al final. Si se usa en
  algún reto, decirlo.
- Filas fantasma en R base (`df[mascara_con_NA, ]`), verificado con `grupo`: la fila sale con nombre `NA` y todo `<NA>`. `dplyr::filter` y `subset` las descartan.
- Los avisos y errores de R salen en inglés en esta máquina (`missing value where TRUE/FALSE needed`). Copiar tal cual.
- El motor `B.vidaReal` usa una sola lista de eventos; la línea `import` existe solo en Python (la segunda línea `import pandas as pd` va con id nulo,
  sin evento). La línea `salta` se ejecuta una sola vez (vuelta de Beto). En R hay dos líneas de llaves con id nulo.
- `df.isna().sum().sum()` da 8 (verificado) con la tabla completa; si las casillas editables cambian los huecos, recalcular en vivo.
- No meter teoría de imputación (MCAR, varianza aplastada): enlazar "Imputación de datos faltantes" y "Codificación y datos faltantes" por título.
- `fillna(method=...)` está obsoleto en pandas 2.2.3 (FutureWarning); en el código de la página usar `.bfill()` / `.ffill()`.
- `pd.NA` y `Int64` son opcionales en el paso 7 (vitrina); no meterlos en Vida real para no alargar.
