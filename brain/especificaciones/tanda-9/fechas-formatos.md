# Especificación: Fechas y formatos (fechas-formatos)

- Ruta: `pandas`, orden 3; también `tidyverse`, orden 5. Tanda 9.
- Área: Programación con datos. Fuente del catálogo: "Programación y entorno de trabajo (SM142002), UD1, UD4 y UD5".
- Prerrequisitos: "Tipos y coerción".
- Siguientes: ninguno en el catálogo (lista vacía).
- Aparece: SM142002 UD5.
- Resumen del catálogo: "Una fecha es un número con formato: leerla, restarla y no confundir día con mes."

**Datos de toda la página** (inventados, se dice en la página): cinco pedidos de una tienda en línea de EE. UU., con la fecha guardada como
texto en el formato de ese país, mes/día/año, igual que la columna `DateOfBirth` del cuaderno de clase.

| pedido | fecha (texto) | se lee (m/d/a) | trimestre | día de la semana |
|---|---|---|---|---|
| 1 | "1/15/2024" | 15 de enero de 2024 | 1 | lunes |
| 2 | "3/4/2024" | 4 de marzo de 2024 | 1 | lunes |
| 3 | "7/9/2024" | 9 de julio de 2024 | 3 | martes |
| 4 | "10/30/2023" | 30 de octubre de 2023 | 4 | lunes |
| 5 | "12/5/2023" | 5 de diciembre de 2023 | 4 | martes |

Por qué estos cinco (todo verificado en Python y R):
- Tres son ambiguos (`3/4`, `7/9`, `12/5`: los dos números caben como mes) y dos no (`1/15`, `10/30`: 15 y 30 no son meses).
  Leídos al revés (d/m/a): `NA`, 3 de abril de 2024, 7 de septiembre de 2024, `NA`, 12 de mayo de 2023. Dos fallan con aviso; tres salen mal **sin aviso**.
- Ordenados como texto: "1/15/2024", "10/30/2023", "12/5/2023", "3/4/2024", "7/9/2024" (el primero no es el más antiguo). Como fechas:
  30 oct 2023, 5 dic 2023, 15 ene 2024, 4 mar 2024, 9 jul 2024.
- Restas limpias: 4 mar 2024 − 30 oct 2023 = 126 días; 9 jul 2024 − 15 ene 2024 = 176 días; huecos consecutivos 36, 41, 49 y 127 días.
  "3/4/2024" leído de las dos formas: 3 abr − 4 mar = 30 días.
- Por dentro: R guarda el 4 de marzo de 2024 como 19786 (días desde el 1 de enero de 1970); los cinco: 19737, 19786, 19913, 19660, 19696.
  pandas guarda nanosegundos: 1709510400000000000, que entre 86 400 000 000 000 da 19786.
- Hay un pedido de diciembre: el diccionario de estaciones sin el mes 12 lo deja en `NaN` (la trampa del cuaderno, con 1 fila en vez de 82).

## Imagen central

**Un texto que pasa por una plantilla y cae en un calendario y en una recta de días.**

- Arriba, la tabla de cinco pedidos con la columna `fecha` y una etiqueta de tipo al pie que cambia: `texto` (`chr`, `object`) antes de convertir;
  `fecha` (`Date`, `datetime64[ns]`) después. Tocar una fila la elige.
- En el centro, el **texto partido en fichas**: "3/4/2024" se ve como tres fichas de colores (`3`, `4`, `2024`) separadas por las barras.
  Encima, la **plantilla de formato**: tres ranuras que dicen qué es cada ficha (`mes`, `día`, `año`). Un selector con botones cambia la plantilla:
  `%m/%d/%Y` (`mdy`), `%d/%m/%Y` (`dmy`), `%Y-%m-%d` (`ymd`). Colores fijos: día en `--j`, mes en `--k`, año en gris.
- A la derecha (debajo en móvil), un **minicalendario** del mes resultante con el día marcado. Si la plantilla no encaja (el 15 no cabe como mes),
  el calendario se pone gris con la etiqueta `NA` / `NaT` y el mensaje real del lenguaje.
- Abajo, una **recta de días** (desde el paso 5): un eje con las fechas como puntos y su número (19660 ... 19913) bajo cada punto; el 1 de enero de
  1970 se indica con una flecha hacia la izquierda ("día 0, muy lejos"). Tocar dos puntos dibuja una **llave** entre ellos con la resta
  (`Time difference of 126 days` / `126 days 00:00:00`) y la conversión a años (÷ 365.25).
- Una **casilla de texto editable** (pasos 3, 4 y retos) para escribir una fecha propia y ver cómo la lee cada plantilla.
- Interruptor **R / pandas** que cambia los nombres de las funciones y el formato de las salidas.
- Todo se toca: fichas, botones y puntos. Nada depende de arrastrar.

Modos por paso: 1) el texto "3/4/2024" y dos calendarios tapados; 2) la tabla en orden de texto frente a orden de calendario; 3) fichas sin plantilla
(posiciones 0, 1, 2 en Python; 1, 2, 3 en R); 4) plantilla y calendario, con la columna entera leída de golpe; 5) la recta de días con los números;
6) llave de resta entre dos puntos; 7) del mes a una categoría: trimestre y estación con un diccionario.

## Hipótesis inicial

"Una tienda de EE. UU. te manda un archivo donde un pedido dice '3/4/2024'. ¿Qué día es? ¿Puede la computadora saberlo sola? Y si ordenas la
columna de fechas de menor a mayor, ¿crees que el primer pedido de la lista será el más antiguo?"

Se vuelve a mostrar en el destacado del paso 4 (`#citaHipo`).

## Pasos (7)

### Paso 1. Un texto, dos días
- Idea: el mismo texto puede ser dos días distintos según quién lo escribió. En EE. UU. va primero el mes; en España y casi toda América Latina, el día.
- Escenario: modo 1, sin código ni símbolos. El texto "3/4/2024" y dos calendarios tapados ("tienda de EE. UU.", "tienda de España").
- Chequeo (predicción antes de tocar, sin símbolos): "La tienda de EE. UU. y la de España escriben las dos '3/4/2024'. ¿Hablan del mismo día?"
  - Correcta: "No: para EE. UU. es el 4 de marzo y para España el 3 de abril; hay 30 días entre los dos." (Verificado: `dmy("3/4/2024") - mdy("3/4/2024")` → `Time difference of 30 days`.)
  - "Sí, una fecha es una fecha": el texto no dice cuál número es el mes.
  - "No, pero se diferencian en un día": confunde intercambiar día y mes con sumar uno.
  - "No se puede saber nunca": se puede, si sabes el formato (es lo que sigue).
- Al resolver se destapan los dos calendarios.
- Cita eda5doc `manejando-fechas-y-horas-con-lubridate` (el estándar internacional año-mes-día y los formatos que conviven: DD/MM/YY, D/M/YY, MM/DD/YY).

### Paso 2. Un texto no es una fecha (trampa)
- Idea: mientras la columna sea texto, la computadora compara letra por letra, como en un diccionario: "1/15/2024" va antes que "10/30/2023" porque
  el carácter `/` va antes que el `0`. El orden y los mínimos salen mal **sin error**.
- Notación entra aquí: el tipo de la columna (`chr` en R, `object` en pandas; ver "Tipos y coerción").
- Escenario: modo 2, dos columnas lado a lado: la tabla ordenada como texto y como calendario, con hilos que cruzan entre filas.
- **Trampa marcada**: `min(textos)` da `"1/15/2024"` en R y en Python, pero el pedido más antiguo es el del 30 de octubre de 2023. `"1/15/2024" > "12/5/2023"`
  da `FALSE` (como fechas sería verdadero). Salidas reales.
- Texto: el cuaderno de clase hace la consulta `WHERE DateofBirth > 01/01/2024` (UAX_20251020 c15, UAX_20251028 c35): ahí `01/01/2024` ni siquiera es un
  texto, es una división (1 entre 1 entre 2024, que en enteros da 0), y las fechas guardadas como "m/d/aaaa" pasan todas el filtro: la salida incluye
  `10/19/2023`. Nombrado sin chip (cuadernos no registrados), con la explicación de la errata del mapa.
- Chequeo (predicción antes de tocar): "Ordenas la columna `fecha` (texto) de menor a mayor. ¿Qué pedido queda primero?"
  - Correcta: "1/15/2024": se compara carácter por carácter; empieza por "1/", y `/` va antes que cualquier cifra.
  - "10/30/2023": es el más antiguo como fecha, pero aquí se ordena texto.
  - "3/4/2024": "3" es el mes más chico de los que empiezan con una sola cifra, pero el texto no sabe de meses.
  - "12/5/2023": el año no cuenta primero; está al final del texto.
- Cita eda5doc `síntomas-de-datos-problemáticos` ("Variables de tipo numérico que se han cargado como tipo caracter": lo mismo pasa con las fechas) y
  eda5doc `manejando-fechas-y-horas-con-lubridate` (la columna "casi seguro" se leyó como carácter y lo primero es transformarla).
- `details.profundizar` "¿Por qué el formato año-mes-día sí ordena bien como texto?": con ceros a la izquierda y el año primero, el orden del diccionario
  coincide con el del calendario: `sort(c("2024-01-15", "2023-10-30", "2023-12-05", "2024-03-04", "2024-07-09"))` sale cronológico (verificado).

### Paso 3. Partir el texto en piezas
- Idea: una fecha en texto son tres números pegados con separadores. Partir por "/" da una lista de tres piezas, y la posición dice qué es cada una
  **solo si conoces el formato**. Así lo hace el cuaderno de clase a mano.
- Escenario: modo 3, las fichas sin plantilla, con su posición debajo (0, 1, 2 en Python; 1, 2, 3 en R).
- Código en el paso: `"7/9/2024".split("/")` → `['7', '9', '2024']`; `strsplit("7/9/2024", "/")[[1]]` → `"7" "9" "2024"`. Las piezas son **texto**:
  hay que convertir con `int(...)` / `as.integer(...)` (coerción explícita).
- Texto: UAX_20251028, celdas 39-42 (numeración del mapa, desde 1): `fechas['DateOfBirth'].apply(lambda x: int(x.split('/')[1]))` para el día,
  `[0]` para el mes y `[2]` para el año. Funciona porque sabe que el formato es m/d/aaaa (sin chip).
- Chequeo (cálculo con datos en vivo, fila y formato al azar): "Partes '7/9/2024'. Si el formato es día/mes/año, ¿qué número es el mes y en qué posición
  de Python está?" Respuesta: 9, posición 1 (en R, `partes[2]`). Error típico que la pista nombra: contestar 7 (eso sería m/d/a).
- `details.profundizar` "¿Por qué no basta con partir?": partir no valida nada: `int("15")` como mes no da error, da 15. Solo una función de fechas sabe
  que no existe el mes 15 (paso 4).

### Paso 4. El formato es una plantilla (destacado)
- Idea: convertir texto en fecha es superponer una plantilla: `%m/%d/%Y` dice "mes, barra, día, barra, año con cuatro cifras". En pandas,
  `pd.to_datetime(s, format="%m/%d/%Y")`; en R base, `as.Date(x, format = "%m/%d/%Y")`; con lubridate, la función se llama como el orden: `mdy()`, `dmy()`, `ymd()`
  (y no le importa el separador).
- Escenario: modo 4, plantilla y calendario; botón "leer la columna entera".
- Citas: eda5doc `manejando-fechas-y-horas-con-lubridate` (`ymd()`, `dmy()`, `ymd_hms()`; el separador puede ser guion, barra o punto si es uniforme);
  hojapandas p.3 (`pd.to_datetime(data)`: convierte a tipo fecha).
- Chequeo (elección con explicación): "¿Con qué lees el texto '2024-03-04'?"
  - Correcta: `ymd("2024-03-04")` o `format="%Y-%m-%d"` → 4 de marzo de 2024.
  - `dmy(...)`: no encuentra un día de cuatro cifras; da `NA` con el aviso `All formats failed to parse. No formats found.` (salida real).
  - `mdy(...)`: lo mismo, `NA` con ese aviso (salida real).
  - `format="%d-%m-%Y"`: la plantilla espera el día primero; pandas lanza `ValueError`.

**Destacado con predicción (la confusión natural del concepto): "¿Por qué no me avisó?"**
- Predicción: "Lees la columna de los cinco pedidos con `dmy()` (día primero), que es el formato equivocado. ¿Cuántas fechas dan aviso?"
  Opciones: 0 / 2 (correcta) / 3 / 5.
- Explicación: solo fallan las que son **imposibles** al revés ("1/15/2024" y "10/30/2023": no hay mes 15 ni 30). Las otras tres se leen sin aviso y
  quedan **mal**: 3 de abril de 2024, 7 de septiembre de 2024 y 12 de mayo de 2023. Salida real:
  ```
  [1] NA           "2024-04-03" "2024-09-07" NA           "2023-05-12"
  Warning message:
   2 failed to parse.
  ```
  En pandas, `format="%d/%m/%Y"` se detiene en la primera: `ValueError: time data "1/15/2024" doesn't match format "%d/%m/%Y", at position 0.`
  y con `errors="coerce"` deja `NaT` en las dos imposibles y las otras tres mal (verificado). Moraleja: el aviso no te protege de las fechas ambiguas;
  el formato lo tienes que saber tú (de dónde viene el archivo, o buscar un valor mayor que 12).
- Muestra de nuevo la hipótesis.

### Paso 5. Por dentro, una fecha es un número
- Idea: una fecha guardada como fecha es un **conteo de días** (R) o de nanosegundos (pandas) desde el 1 de enero de 1970. Por eso se ordena bien,
  se le pueden sumar días y de ella se sacan las piezas: día, mes, año, trimestre, día de la semana.
- Escenario: modo 5, la recta de días con los cinco puntos y sus números (19660 ... 19913). Al elegir un punto: `day`, `month`, `year`, `quarter`, `wday`
  (R: `day(f)`, `month(f)`, `year(f)`, `quarter(f)`, `wday(f, label = TRUE)`; pandas: `.dt.day`, `.dt.month`, `.dt.year`, `.dt.quarter`, `.dt.day_name()`).
- Salidas reales: `as.numeric(mdy("3/4/2024"))` → `19786`; `typeof(f)` → `"double"`, `class(f)` → `"Date"`; `month(f, label = TRUE)` → `Jan Mar Jul Oct Dec`
  (en inglés en esta máquina); `wday(f, label = TRUE)` → `Mon Mon Tue Mon Tue`; pandas `f.dt.day_name()` → `Monday, Monday, Tuesday, Monday, Tuesday`.
- Citas: hojapandas p.3 (sección Datetime: `s.dt.day` y `s.dt.quarter`); thinpython PDF 211 (impresa 190, Prototyping versus Planning: `time_to_int`
  convierte una hora en un solo entero de segundos para sumar sin errores de acarreo; es la misma idea que una fecha como conteo de días).
- Texto: UAX_20251028, celdas 49-52: `pd.to_datetime(..., format='%m/%d/%Y')` y luego `.dt.day`, `.dt.month`, `.dt.year`, `.dt.quarter`; `info()` muestra
  la columna nueva como `datetime64[ns]` (sin chip).
- Chequeo (predicción antes de tocar): "A la fecha del pedido 1 (15 de enero de 2024) le sumas 30. ¿Qué obtienes?"
  - Correcta: "14 de febrero de 2024": se suman 30 días al conteo (`f[1] + 30` → `"2024-02-14"`, verificado; en pandas `+ pd.Timedelta(days=30)`).
  - "15 de febrero de 2024": eso sería sumar un mes; enero tiene 31 días.
  - "45 de enero": eso le pasa al texto partido, no a una fecha.
  - "Un error": sumar días a una fecha es justo lo que permite el número de adentro.
- `details.profundizar` "¿Por qué 1970?": es el origen que usan Unix y casi todos los lenguajes; `as.numeric(as.Date("1970-01-01"))` da 0 y
  `pd.Timestamp("1970-01-01").value` da 0 (verificado). Las fechas anteriores son números negativos.

### Paso 6. Restar fechas da una duración
- Idea: la resta de dos fechas no es una fecha: es una **duración** (`difftime` en R, `Timedelta` en pandas). Para usarla como número se convierte
  (`as.numeric`, `.days`); para pasar a años se divide entre 365.25 (por los bisiestos), a meses entre 30.44.
- Escenario: modo 6, llave entre dos puntos elegidos; la fórmula viva: $\text{años} = \dfrac{126}{365.25} = 0.345$.
- Salidas reales: `fechas[2] - fechas[4]` (R) → `Time difference of 126 days`; `fechas[1] - fechas[3]` (pandas) → `126 days 00:00:00`;
  `class(...)` → `"difftime"`; `126 / 365.25` → `0.3449692`.
- Cita eda5doc `operaciones-con-fechas`: `dmy("03/04/1987")` y `dmy("07-11-2021")` restadas dan `Time difference of 12637 days`; `as.numeric` y
  `/ 365.25` → 34.59822 años (verificado en R 4.6.1).
- Chequeo (cálculo con datos en vivo, par elegido al tocar dos puntos; por defecto pedido 3 y pedido 1): "¿Cuántos días hay del 15 de enero al 9 de julio de 2024?"
  Respuesta: 176. Pistas: "cuenta los días que quedan de enero (16), suma los meses completos: febrero de 2024 tiene 29 días", luego el desarrollo
  16 + 29 + 31 + 30 + 31 + 30 + 9 = 176.
- `details.profundizar` "¿Por qué 365.25 y no la edad exacta?": 365.25 es un promedio; para la edad exacta lubridate usa intervalos:
  `time_length(interval(dmy("03/04/1987"), dmy("07-11-2021")), "years")` → `34.59726`, frente a 34.59822 con la división (verificado). La diferencia
  es pequeña, pero cambia la edad cerca del cumpleaños. Cita thinpython PDF 214 (impresa 193, Exercise 16-2: el módulo `datetime` para calcular la edad y
  los días hasta el próximo cumpleaños).

### Paso 7. Del mes a una categoría, sin perder diciembre (trampa)
- Idea: con el mes ya extraído se arman categorías: el trimestre con una cuenta, $\text{trimestre} = \lfloor (\text{mes} - 1)/3 \rfloor + 1$
  (meses 1 a 12 → 1,1,1,2,2,2,3,3,3,4,4,4; verificado) o con `.dt.quarter` / `quarter()`; la estación con un diccionario que traduce cada mes.
- Escenario: modo 7, la columna de meses entra en una "tabla de traducción" (el diccionario) con doce casillas; cada mes sale con su estación.
  La casilla del 12 está vacía en la versión del cuaderno.
- **Trampa marcada (la del cuaderno)**: UAX_20251028 c46 arma `estaciones = {1: "invierno", ..., 11: "otoño"}` sin el 12 y `.map(estaciones)` deja `NaN`
  a todos los de diciembre: 82 de 1000 filas (c47 las lista, c48 muestra `Estacion2` con 918 no nulos). Con los cinco pedidos: `['invierno', 'primavera',
  'verano', 'otoño', nan]` (salida real). En R, `estaciones[as.character(month(f))]` da `NA` en el mismo lugar (verificado). La "solución" del cuaderno en la
  clase siguiente es `fillna(0)` (ver "NA y NaN"): lo correcto es completar el diccionario.
- Chequeo (cálculo con datos en vivo; Francisco puede quitar o poner meses del diccionario tocando sus casillas): "Con este diccionario, ¿cuántos pedidos
  quedan sin estación?" Con el diccionario del cuaderno, 1 (el del 5 de diciembre). Después del chequeo, el botón "agregar el 12" lo arregla.
- Texto: el cuaderno define el trimestre con una función de `if/elif` (UAX_20251028 c43) y después lo reemplaza con `.dt.quarter` (c51): dan lo mismo.
- `details.profundizar` "Agrupar por mes": `f.dt.to_period("M")` convierte cada fecha en su mes (`Period('2024-03', 'M')`, verificado), que sirve para
  agrupar ventas por mes; es lo que hace el cuaderno UAX_20251105 c93-95 antes de graficar (adelanto de "Agrupar y resumir en pandas y dplyr").
- Nota de hemisferio, dicha con naturalidad: el diccionario del cuaderno usa las estaciones del hemisferio norte (enero es invierno).

## Vida real (Python y R)

Python 3.13 con pandas 2.2.3; R 4.6.1 con lubridate 1.9.5. Mismos datos (los cinco textos).
Algoritmo: sacar el trimestre de cada fecha **a mano** (partir el texto, convertir el mes, aplicar la cuenta), como el cuaderno, y cerrar con la librería
(`to_datetime` + `.dt.quarter`; `mdy` + `quarter`), más una resta de dos fechas. El texto sin el prefijo `id: ` es exactamente lo que se ejecutó
(comprobado con un `diff` contra los archivos corridos). Las líneas con id `-` no tienen evento.

### Python

```
cargar: import pandas as pd
datos: textos = ["1/15/2024", "3/4/2024", "7/9/2024", "10/30/2023", "12/5/2023"]   # inventado: m/d/aaaa
trim0: trimestres = []
fori: for i in range(len(textos)):
partir:     partes = textos[i].split("/")         # [mes, día, año]
mes:     mes = int(partes[0])
trim:     trimestres.append((mes - 1) // 3 + 1)
imp1: print(trimestres)
lib: fechas = pd.to_datetime(pd.Series(textos), format="%m/%d/%Y")
imp2: print(fechas.dt.quarter.tolist())
resta: print(fechas[1] - fechas[3])
```

Salida real:
```
[1, 1, 3, 4, 4]
[1, 1, 3, 4, 4]
126 days 00:00:00
```

### R

```
cargar: suppressMessages(library(lubridate))
datos: textos <- c("1/15/2024", "3/4/2024", "7/9/2024", "10/30/2023", "12/5/2023")   # inventado: m/d/aaaa
trim0: trimestres <- c()
fori: for (i in seq_along(textos)) {
partir:   partes <- strsplit(textos[i], "/")[[1]]   # c(mes, día, año)
mes:   mes <- as.integer(partes[1])
trim:   trimestres <- c(trimestres, (mes - 1) %/% 3 + 1)
-: }
imp1: print(trimestres)
lib: fechas <- mdy(textos)
imp2: print(quarter(fechas))
resta: print(fechas[2] - fechas[4])
```

Salida real:
```
[1] 1 1 3 4 4
[1] 1 1 3 4 4
Time difference of 126 days
```

Eventos (una sola lista `EV`): `cargar`, `datos`, `trim0`, 5 vueltas de `fori` + `partir` + `mes` + `trim`, y `imp1`, `lib`, `imp2`, `resta`:
3 + 20 + 4 = **27 eventos**, los mismos en los dos lenguajes. `cargar` existe en los dos con texto distinto (pandas en Python, lubridate en R; `suppressMessages`
calla el aviso de que lubridate tapa `date`, `intersect`, `setdiff` y `union` de R base: decirlo en la narración).
Los índices: `partes[0]` en Python y `partes[1]` en R son la misma pieza (el mes); `fechas[1] - fechas[3]` en Python y `fechas[2] - fechas[4]` en R son
los mismos pedidos (el 2 y el 4). Narrar con `ctx.ix`.

### Foto de estado por línea ejecutada

| Evento | i (py / R) | textos[i] | partes | mes | trimestres | Visual |
|---|---|---|---|---|---|---|
| datos | | | | | | la columna de cinco textos con la etiqueta `texto` |
| trim0 | | | | | `[]` / `NULL` | caja vacía |
| fori/partir/mes/trim | 0 / 1 | "1/15/2024" | "1" "15" "2024" | 1 | 1 | tres fichas; la ficha del mes (posición 0 / 1) en `--k` cae en la caja `mes` y la cuenta (1−1)//3+1 = 1 |
| ... | 1 / 2 | "3/4/2024" | "3" "4" "2024" | 3 | 1 1 | (3−1)//3+1 = 1 |
| ... | 2 / 3 | "7/9/2024" | "7" "9" "2024" | 7 | 1 1 3 | |
| ... | 3 / 4 | "10/30/2023" | "10" "30" "2023" | 10 | 1 1 3 4 | |
| ... | 4 / 5 | "12/5/2023" | "12" "5" "2023" | 12 | 1 1 3 4 4 | |
| imp1 | | | | | 1 1 3 4 4 | |
| lib | | | | | | la columna cambia de etiqueta a `fecha` y cada texto cae en su punto de la recta de días |
| imp2 | | | | | | la librería da los mismos trimestres: coinciden con la caja |
| resta | | | | | | llave entre el pedido 2 (4 mar 2024) y el 4 (30 oct 2023): 126 días |

En R, `trimestres <- c()` es `NULL` hasta la primera vuelta; mostrar `NULL` en el chip. Narración de `mes`: "La pieza que está en la posición del mes
según el formato m/d/aaaa se convierte de texto a número". En `lib`: "La librería hace lo mismo con la plantilla, y además valida: un mes 15 daría `NA`".

### Predicción antes de reproducir (`#vrPred`)

"¿Qué valor tiene `mes` en la cuarta vuelta?" Respuesta **10** ("10/30/2023"). Distractores: 30 (el día), 1 (el primer carácter del texto),
4 (el número de vuelta). Pista: "la cuarta vuelta trabaja con el cuarto texto; el mes es la pieza de la posición 0 (Python) o 1 (R)".

### Trampas reales (retos `codigo1` a `codigo3`)

**codigo1: la plantilla equivocada falla solo a medias (R).**
```
suppressMessages(library(lubridate))
textos <- c("1/15/2024", "3/4/2024", "7/9/2024", "10/30/2023", "12/5/2023")
print(dmy(textos))
print(mdy(textos))
```
Salida real:
```
[1] NA           "2024-04-03" "2024-09-07" NA           "2023-05-12"
Warning message:
 2 failed to parse. 
[1] "2024-01-15" "2024-03-04" "2024-07-09" "2023-10-30" "2023-12-05"
```
(El aviso termina con un espacio después del punto: copiar tal cual.) Pregunta: "Con `dmy`, ¿cuántas fechas quedaron mal?" Correcta: 5: dos son `NA` y tres son
días equivocados sin aviso. Distractores: 2 (solo cuenta los avisos), 0 ("el aviso es un detalle"), 3.

**codigo2: el mínimo de un texto (Python).**
```
import pandas as pd
textos = ["1/15/2024", "3/4/2024", "7/9/2024", "10/30/2023", "12/5/2023"]
print(min(textos))
print(pd.to_datetime(pd.Series(textos), format="%m/%d/%Y").min())
```
Salida real:
```
1/15/2024
2023-10-30 00:00:00
```
Pregunta: "¿Cuál fue el primer pedido?" Correcta: el del 30 de octubre de 2023; `min` sobre texto compara carácter por carácter. En R, `min(textos)` también da
`"1/15/2024"` (verificado, `LC_COLLATE` = `en_US`).

**codigo3: el diccionario al que le falta diciembre (Python).**
```
import pandas as pd
textos = ["1/15/2024", "3/4/2024", "7/9/2024", "10/30/2023", "12/5/2023"]
fechas = pd.to_datetime(pd.Series(textos), format="%m/%d/%Y")
estaciones = {1: "invierno", 2: "invierno", 3: "primavera", 4: "primavera", 5: "primavera",
              6: "verano", 7: "verano", 8: "verano", 9: "otoño", 10: "otoño", 11: "otoño"}
print(fechas.dt.month.map(estaciones).tolist())
print(fechas.dt.month.map(estaciones).isna().sum())
```
Salida real:
```
['invierno', 'primavera', 'verano', 'otoño', nan]
1
```
Pregunta: "¿Por qué el último pedido no tiene estación?" Correcta: `map` busca el 12 en el diccionario, no lo encuentra y pone `NaN` sin error.
Distractores: "diciembre de 2023 es de otro año" (el año no importa al mapa); "`map` solo funciona con textos"; "hay un hueco en la fecha" (la fecha está completa).

`p.vr-nota`: `pd.to_datetime(df["fecha"], format="%m/%d/%Y").dt.quarter` y `quarter(mdy(df$fecha))` en R: la versión de una línea.
`details.profundizar` "La forma vectorizada a mano": `(pd.Series(textos).str.split("/").str[0].astype(int) - 1) // 3 + 1` en pandas y
`(as.integer(sapply(strsplit(textos, "/"), `[`, 1)) - 1) %/% 3 + 1` en R. Verificados: `[1, 1, 3, 4, 4]` y `[1] 1 1 3 4 4`.

## Retos (11)

RETOS = ["ojo", "construir", "mano", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3", "formula"]

1. **ojo** (ojo clínico, 8 rondas al azar, aprueba con 7 de 8): se muestran un texto y una función; Francisco elige qué fecha sale entre cuatro opciones
   (la correcta, la del formato al revés, `NA`, y una con día y año cruzados). Banco verificado:
   `mdy("3/4/2024")` → 4 mar 2024; `dmy("3/4/2024")` → 3 abr 2024; `dmy("1/15/2024")` → `NA`; `dmy("12/5/2023")` → 12 may 2023; `dmy("10/30/2023")` → `NA`;
   `mdy("12/5/2023")` → 5 dic 2023; `ymd("2024-03-04")` → 4 mar 2024; `dmy("2024-03-04")` → `NA`; `mdy("2024-03-04")` → `NA`; `dmy("07-11-2021")` → 7 nov 2021;
   `dmy("03/04/1987")` → 3 abr 1987; `dmy("04.03.2024")` → 4 mar 2024; pandas `pd.to_datetime("3/4/2024")` (sin formato) → 4 mar 2024 (supone mes primero) y con
   `dayfirst=True` → 3 abr 2024.
2. **construir** (manipular hasta cumplir): con fichas de plantilla (`%d`, `%m`, `%Y`, `/`, `-`, `.`) armar el `format` que lee bien cada texto, hasta tres objetivos:
   (a) "2024-03-04" → 4 de marzo (`%Y-%m-%d`); (b) "04.03.2024", escrito en Alemania → 4 de marzo (`%d.%m.%Y`); (c) "3/4/2024", de la tienda de EE. UU. → 4 de marzo
   (`%m/%d/%Y`). Los tres verificados en pandas (`2024-03-04 00:00:00`) y en R (`as.Date("04.03.2024", format = "%d.%m.%Y")` → `"2024-03-04"`). El calendario
   se marca en verde al acertar; una plantilla que no encaja muestra el `ValueError` o el `NA`. Ok al cumplir los tres.
3. **mano** (a mano, datos al azar, pistas escalonadas, reintentable): dos fechas al azar entre el 1 de enero de 2023 y el 31 de diciembre de 2024 (la
   segunda posterior, a menos de 200 días). Pide: (1) los días entre las dos; (2) los años con 365.25, redondeados a 3 decimales; (3) el trimestre de cada una.
   La página calcula con `Date.UTC` (sin horas, sin zona horaria). Pistas: 1) "días que quedan del primer mes, más los meses completos, más los días del último";
   2) tabla de días por mes, con febrero de 2024 de 29 (bisiesto: `ymd("2024-03-01") - ymd("2024-02-01")` → 29 días; en 2023, 28; verificados); 3) primera parte resuelta.
4. **error** (cazar el error, 3 variantes del código de Vida real, una línea mal):
   - V1 (Python): `mes = int(partes[1])` (toma el día). Salida real de `print(trimestres)`: `[5, 2, 3, 10, 2]`: trimestres 5 y 10 no existen.
   - V2 (R): `trimestres <- c(trimestres, mes %/% 3 + 1)` (falta el `- 1`). Salida real: `[1] 1 2 3 4 5` (marzo pasa al trimestre 2 y diciembre al 5).
   - V3 (R): `fechas <- as.Date(textos)` sin formato. Salida real (después de `[1] 1 1 3 4 4`):
     `Error in charToDate(x) :` / `  character string is not in a standard unambiguous format` / `Calls: as.Date -> as.Date.character -> charToDate`.
     R base solo reconoce sin ayuda los formatos año-mes-día. (Con otros textos es peor: `as.Date("3/4/2024")` da `"0003-04-20"` sin error, verificado:
     decirlo en la explicación.)
5. **prop1** (opción múltiple, `mezclar: true`): "¿Por qué el material divide los días entre 365.25 para obtener años?" Correcta: "porque cada cuatro años hay
   uno de 366 días; 365.25 es el largo promedio". Pistas: "365 es un error de redondeo de R" → "R cuenta bien; el problema es que los años no miden lo mismo";
   "para pasar a meses" → "para meses el material usa 30.44"; "porque las fechas se guardan en horas" → "R guarda días; pandas, nanosegundos".
6. **prop2**: "¿Qué formato de texto se ordena bien como texto?" Correcta: "año-mes-día con ceros (`2024-03-04`)". Pistas: "`m/d/aaaa`" → "mira el paso 2: '1/15/2024'
   queda antes que '10/30/2023'"; "`d/m/aaaa`" → "el día manda primero y mezcla meses y años"; "ninguno" → "con el año primero y los ceros a la izquierda, sí".
7. **prop3**: "`dmy("2024-03-04")` en R, ¿qué da?" Correcta: "`NA` con el aviso `All formats failed to parse. No formats found.`". Pistas: "4 de marzo" → "eso es `ymd`;
   `dmy` busca el día primero"; "3 de abril" → "`dmy` no reordena, falla"; "un error que detiene el programa" → "lubridate avisa y sigue con `NA`".
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.
11. **formula**: la parte de memoria (`B.ordenar`), registrada con `C.reto("formula", ok)`.

## Memoria

**B.ordenar** (texto a fecha y trimestre en pandas), piezas en orden:
1. `pd.to_datetime(`
2. `df["fecha"]`
3. `, format=`
4. `"%m/%d/%Y"`
5. `)`
6. `.dt.quarter`

Resultado con los cinco pedidos: `1, 1, 3, 4, 4`. Distractores: `"%d/%m/%Y"` (el formato al revés), `.quarter` (sin `.dt`, una Series no lo tiene),
`format="mdy"` (eso es el nombre de la función de lubridate, no una plantilla).

**Tarjetas (8):**
1. ¿Por qué "1/15/2024" queda antes que "10/30/2023" al ordenar? → Porque es texto: se compara carácter por carácter y `/` va antes que `0`. Convierte a fecha antes de ordenar.
2. `mdy`, `dmy`, `ymd` → Funciones de lubridate con el orden en el nombre: mes-día-año, día-mes-año, año-mes-día.
3. `%m/%d/%Y` → Plantilla de pandas y R base: mes, barra, día, barra, año de cuatro cifras.
4. ¿Por qué el formato equivocado no siempre avisa? → Porque si los dos números caben como mes, la fecha existe: sale otro día sin error. Solo fallan las imposibles.
5. ¿Qué es una fecha por dentro? → Un número: días desde el 1 de enero de 1970 en R (`19786` es el 4 de marzo de 2024); nanosegundos en pandas.
6. ¿Qué da restar dos fechas? → Una duración: `difftime` en R ("Time difference of 126 days"), `Timedelta` en pandas. `as.numeric` o `.days` para usarla como número.
7. Días a años → Divide entre 365.25 (bisiestos); a meses, entre 30.44. Para la edad exacta, `interval` y `time_length`.
8. ¿Por qué diciembre quedó en `NaN` al mapear estaciones? → El diccionario no tenía la clave 12; `map` pone `NaN` sin error. Completa el diccionario.

## Citas (8)

| id de fuente | página PDF o ancla | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| eda5doc | `manejando-fechas-y-horas-con-lubridate` | | Manejando fechas y horas con lubridate | el estándar año-mes-día y los formatos que conviven (DD/MM/YY, MM/DD/YY) | Paso 1 |
| eda5doc | `síntomas-de-datos-problemáticos` | | Síntomas de datos problemáticos | "variables de tipo numérico que se han cargado como tipo caracter": lo mismo pasa con las fechas | Paso 2 |
| eda5doc | `manejando-fechas-y-horas-con-lubridate` | | Manejo de fechas con lubridate | la columna llega como carácter; `ymd()`, `dmy()`, `ymd_hms()`; el separador da igual si es uniforme | Paso 4 |
| hojapandas | 3 | 3 | Conversión de tipos | `pd.to_datetime(data)` y `pd.to_timedelta(data)` | Paso 4 |
| hojapandas | 3 | 3 | Datetime | `s.dt.day` y `s.dt.quarter` (el accesor `.dt`) | Paso 5 |
| thinpython | 211 | 190 | Cap. 16: Prototyping versus Planning | `time_to_int`: una hora como un solo entero de segundos para sumar sin acarreos | Paso 5, profundizar |
| eda5doc | `operaciones-con-fechas` | | Operaciones con fechas | resta → `difftime` de 12637 días; `as.numeric`; `/ 365.25` → 34.59822; `month()` y su tabla | Paso 6 |
| thinpython | 214 | 193 | Cap. 16: Exercises (16-2) | el módulo `datetime`: la edad y los días hasta el próximo cumpleaños | Paso 6, profundizar, o reto `mano` |

Verificado por mí: las tres anclas existen en `Unidad 5 - EDA I.html` (leí el texto de cada sección; `operaciones-con-fechas` es una subsección dentro de
`manejando-fechas-y-horas-con-lubridate`); hojapandas p.3 con `pdftotext` (`pd.to_datetime`, `pd.to_timedelta`, bloque Datetime con `s.dt.day` y `s.dt.quarter`);
thinpython PDF 211-212 (Prototyping versus Planning, `time_to_int`; el pie de la 212 dice 191) y la sección de ejercicios con "Exercise 16-2" y el módulo `datetime`
dentro de PDF 211-215 (el mapa `think-python.md` la ubica en PDF 214-215 / impresa 193-194). `data-pag` = PDF; thinpython: impresa = PDF − 21; hojapandas: PDF = impresa.

Pocas fuentes registradas tratan fechas: prog1, prog4, prog4html, eda5 (PDF), eda6, pyworkout e islr2 no tienen nada de fechas (revisé los PDF de la UD1, UD4 y UD5
con `pdftotext`). Por eso son 8 citas y no más.

**Sin chip (no registrados: `prog1nb`).** Numeración del mapa `sm142002-programacion.md` (celdas desde 1); verificadas leyendo los `.ipynb` con `json`:
- UAX_20251020 c15, UAX_20251028 c35: `WHERE DateofBirth > 01/01/2024` (división entera, no fecha); la salida incluye `10/19/2023` (paso 2).
- UAX_20251028 c38: la columna `DateOfBirth` como texto ("1/22/2024", "7/10/2024", "10/19/2023"...). c39-42: día, mes y año con `split('/')` y posiciones 1, 0, 2 (paso 3).
  c43-44: función `quarter(mes)` con `if/elif` (paso 7). c46: diccionario `estaciones` sin el 12; c47: `fechas[fechas['month'] == 12]` con `NaN`; c48: `info()`,
  `Estacion2` 918 no nulos (paso 7). c49: `pd.to_datetime(..., format='%m/%d/%Y')`; c50: `info()` con `datetime64[ns]`; c51: `.dt.day`, `.dt.month`, `.dt.year`;
  c52: `.dt.quarter` reemplaza `Quarter` (paso 5).
- UAX_20251105 c62: `fillna(0)` para las estaciones de diciembre (se cuenta en "NA y NaN"); c93-95: `dt.to_period('M')` y medias mensuales (profundizar del paso 7;
  según el mapa, no lo releí).

## Riesgos y notas para quien construye

- **Nombres en inglés**: `month(label = TRUE)` da `Jan Mar Jul Oct Dec` y `wday(label = TRUE)` da `Mon Tue ...` (locale `en_US` en esta máquina); pandas
  `day_name()` da `Monday`. Copiar las salidas reales; en el escenario se pueden traducir, diciendo que el lenguaje las da en inglés.
- **lubridate imprime un aviso al cargarse** (tapa `date`, `intersect`, `setdiff`, `union`); por eso el código usa `suppressMessages(library(lubridate))`.
  Si alguien quita el `suppressMessages`, la salida cambia.
- El aviso de lubridate es ` 2 failed to parse. ` con un espacio al principio y otro al final (comprobado con `od -c`); `All formats failed to parse. No formats found.`
  sale sin espacio inicial. Copiar tal cual.
- pandas sin `format` adivina el orden por la primera fecha (`pd.to_datetime(s)` lee bien esta columna porque "1/15/2024" solo cabe como m/d); no enseñarlo como
  seguro: con una primera fecha ambigua puede adivinar mal. Siempre `format=` explícito.
- Python imprime la resta como `126 days 00:00:00` (con la hora); R como `Time difference of 126 days`. No unificar.
- Zonas horarias: todo aquí es fecha sin hora. En el JavaScript de la página, calcular días con `Date.UTC(año, mes − 1, día)` para no perder un día por el horario de verano.
- El cuaderno numera las celdas desde 1 en el mapa; si el constructor abre el `.ipynb` con un índice de Python, le van a dar una menos (c46 del mapa = índice 45).
- `as.Date("3/4/2024")` sin formato devuelve `"0003-04-20"` (año 3) sin error, y `as.Date(textos)` con la columna completa da error: los dos verificados. Si se
  usan, mostrar la salida exacta.
- Conexión con "NA y NaN": el `NA` de `dmy` y el `NaN` del diccionario son huecos creados por el código, no datos que faltaban en el archivo. Decirlo en el paso 7.
- No hay `siguientes` en el catálogo; si la sesión principal quiere enlazar con "Agrupar y resumir en pandas y dplyr" (por `to_period`), es un cambio de catálogo.
