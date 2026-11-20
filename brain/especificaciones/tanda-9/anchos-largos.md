# Especificación: Datos anchos y largos (anchos-largos)

- Ruta: `tidyverse`, orden 4; también `pandas`, orden 7. Tanda 9.
- Área: Programación con datos. Fuente del catálogo: "Programación y entorno de trabajo (SM142002), UD1, UD4 y UD5".
- Prerrequisitos: "El pipe: verbos encadenados".
- Siguientes: ninguno en el catálogo (la conexión natural es "Gramática de gráficos", que lista esta página como prerrequisito en
  el mapa de la materia; la página puede mencionarlo en el texto del paso 4 sin tocar el catálogo).
- Aparece: SM142002 UD5, SM142002 UD2.
- Resumen del catálogo: "La misma tabla en dos formas y cuándo conviene cada una."

Datos de toda la página (inventados, se dice en la página): minutos que cuatro personas logran concentrarse sin interrupción,
medidos en las semanas 1, 2 y 3. Dos personas siguen una técnica nueva y dos no (grupo control). Es la misma estructura que la
tabla `pivot.xlsx` de UD5 (identificadores `group2` y `group`, y siete mediciones `med.1` a `med.7`), en pequeño.

**Forma ancha** (`ancho`, 4 filas x 5 columnas, una fila por persona):

| persona | grupo | s1 | s2 | s3 |
|---|---|---|---|---|
| Ana | control | 10 | 11 | 12 |
| Beto | control | 12 | 13 | 14 |
| Cris | tecnica | 10 | 14 | 18 |
| Dani | tecnica | 12 | 16 | 20 |

**Forma larga** (`largo`, 12 filas x 4 columnas, una fila por medición): `persona, grupo, semana, minutos`, en el orden de
`pivot_longer` (persona por persona: Ana s1, Ana s2, Ana s3, Beto s1, ...). La fila 8 (R) / posición 7 (Python) es Cris, s2, 14.

Cuentas limpias (verificadas):
- Media por grupo y semana: control 11, 12, 13; tecnica 11, 15, 19.
- Cambio por persona (`s3 - s1`): Ana 2, Beto 2, Cris 8, Dani 8.
- Media por persona (`rowMeans`): Ana 11, Beto 13, Cris 14, Dani 16.
- Celdas: la ancha tiene 20 celdas (12 mediciones + 8 de identificadores); la larga 48 (12 mediciones + 36 de identificadores y
  nombres). Las 12 mediciones son las mismas.

Grupo sin tilde (`tecnica`) para que R y Python ordenen igual; la página lo aclara en una línea.

## Imagen central

**Una tabla que se pliega y se despliega: la forma ancha a la izquierda, la larga a la derecha, y cada medición viaja de una a
otra como una ficha de color. Debajo, un gráfico de líneas que solo se puede dibujar con la forma larga.**

- **Tabla ancha** con las 12 celdas de medición como fichas de color (un tono por persona, más claro en s1 y más intenso en s3).
  Los encabezados `s1`, `s2`, `s3` están marcados con un borde punteado: son **datos escondidos en los nombres de columna**.
  Los identificadores (`persona`, `grupo`) en gris.
- **Botón Plegar** (pivot_longer): las fichas viajan una por una a la tabla larga; con cada ficha viajan una copia de su persona,
  su grupo y el **nombre de su columna**, que cae en la nueva columna `semana`. Botones **paso** (una ficha), **todo** y
  **Desplegar** (pivot_wider, el viaje inverso). Un selector de velocidad. Contador "fichas: 7 de 12".
- **Casillas "no giran"** sobre los encabezados de la ancha (marcadas de inicio en `persona` y `grupo`): las columnas marcadas se
  copian en cada fila; las no marcadas se pliegan. Si Francisco desmarca `grupo`, el plegado se detiene con el error real de R (o
  en modo pandas se pliega "con éxito" mezclando textos y números: ver paso 3 y `codigo3`).
- **Casillas editables** con los nombres nuevos (`names_to` = "semana", `values_to` = "minutos"), que se reflejan en el encabezado
  de la tabla larga.
- **Casillas editables** en los 12 valores (enteros de 0 a 60): el gráfico y las medias se recalculan.
- **Gráfico** (SVG, desde el paso 4): eje x = semana, eje y = minutos, una línea por persona, color por grupo (`--j` control,
  `--k` tecnica); puntos grandes, tocables (muestran su fila de la tabla larga resaltada). A su lado, la mini tabla de medias por
  grupo y semana.
- **Acciones sobre la tabla larga** (paso 6): botón "borrar una fila" (elige la fila tocada o, a 375 px, un selector) y
  "duplicar una fila con otro valor"; al desplegar, los huecos salen como `NA` y los duplicados como celdas con dos valores
  apilados (`<dbl [2]>`), pintadas en `--bad`.
- **Interruptor R / pandas** (paso 7): cambia el orden en que se llena la larga (R persona por persona; pandas columna por
  columna) y las etiquetas de las funciones.
- A 375 px: la ancha arriba y la larga debajo (la larga se muestra con desplazamiento vertical dentro del escenario, 12 filas
  compactas); el gráfico va debajo de las dos. Nada depende de arrastrar.

Modos por paso: 1) solo la ancha, la larga tapada; 2) la ancha con los encabezados s1-s3 marcados y las reglas de datos ordenados;
3) plegado ficha por ficha, casillas "no giran" y nombres editables; 4) gráfico de líneas y tabla de medias, con los dos caminos
(ancha y larga) para dibujarlo; 5) desplegar; 6) borrar y duplicar filas antes de desplegar; 7) interruptor R / pandas.

## Hipótesis inicial

"Tienes las mediciones de cuatro personas en tres semanas. Puedes guardarlas como una fila por persona (con una columna por semana)
o como una fila por medición. ¿Es la misma información? ¿Cuál de las dos es 'la correcta'? ¿Y cuál te pediría un programa para
dibujar una línea por persona a lo largo de las semanas?"

Se vuelve a mostrar en el destacado del paso 4 (`#citaHipo`).

## Pasos (7)

### Paso 1. Dos formas del mismo dato
- Idea: la misma información se puede guardar con una fila por sujeto (ancha) o con una fila por medición (larga). No se pierde ni
  se agrega nada: las 12 mediciones son las mismas.
- Escenario: modo 1. La ancha visible; la larga tapada con "?". Sin código.
- Chequeo (predicción antes de tocar, sin símbolos): "Si escribes una fila por cada medición (quién, de qué grupo, qué semana,
  cuántos minutos), ¿cuántas filas tendrá la tabla?"
  - Correcta: 12 (4 personas por 3 semanas).
  - 4: es la forma ancha, una fila por persona.
  - 3: una fila por semana juntaría a las cuatro personas en cada fila.
  - 20: cuenta todas las celdas de la ancha, también las de nombres y grupos, que no son mediciones.
- Al resolver se destapa la larga y se dispara el plegado completo una vez (animación de muestra).

### Paso 2. ¿Dónde está guardada la semana? (datos ordenados)
- Idea: en la forma ancha, la semana no está en ninguna celda: está escondida en los **nombres de las columnas** (`s1`, `s2`, `s3`).
  Una tabla está "ordenada" (tidy) cuando cada variable tiene su columna y cada observación su fila. Aquí hay cuatro variables
  (persona, grupo, semana, minutos) y la ancha solo da columna propia a dos.
- Notación entra aquí: "variable", "observación", "identificador".
- Escenario: modo 2. Encabezados `s1`-`s3` con borde punteado; un rótulo flotante "aquí vive la variable semana". Al lado, las dos
  reglas de la hoja de pandas dibujadas sobre la larga (una columna por variable, una fila por observación).
- Cita eda5doc `síntomas-de-datos-ordenados` (los seis rasgos de unos datos listos; el último es seguir una estructura ordenada,
  "tidy data") y hojapandas p.1 (Tidy Data: cada variable en su columna, cada observación en su fila).
- Chequeo (elección con explicación): "En la forma ancha, ¿dónde está el dato 'semana 2' de Cris?"
  - Correcta: "En el nombre de la columna `s2`; la celda solo guarda 14."
  - "En la celda de Cris": la celda guarda los minutos, no la semana.
  - "En la columna `grupo`": `grupo` dice control o tecnica.
  - "No está en la tabla": está, pero como nombre de columna, donde ningún verbo la puede filtrar ni agrupar.

### Paso 3. Plegar: `pivot_longer`
- Idea: `pivot_longer` toma las columnas de medición y las convierte en dos columnas: una con los **nombres** (`names_to`) y otra
  con los **valores** (`values_to`). Las columnas que no giran (los identificadores) se copian en cada fila.
  `ancho |> pivot_longer(c(s1, s2, s3), names_to = "semana", values_to = "minutos")`.
- Escenario: modo 3. Plegado ficha por ficha; casillas "no giran"; nombres editables.
- Cita eda5doc `transformación-de-los-datos-para-su-visualización` (`pivot_longer(!c(group2, group), names_to = "times",
  values_to = "values")`: el `!c(...)` dice qué columnas NO giran; y la variante `cols = starts_with("med")`).
- Chequeo (cálculo con datos en vivo, la celda se elige al azar entre las 12): "La celda de Cris en `s2` (14), ¿en qué fila de la
  tabla larga aparece (contando desde 1, como R)?" Para Cris s2: 8 (Ana 1-3, Beto 4-6, Cris s1 = 7, s2 = 8). Fórmula que la
  página muestra al resolver: fila = (persona − 1) × 3 + semana. Error típico: 7 (confunde con la posición desde 0 de Python, que
  además en pandas sería otra: ver paso 7).
- **Contraejemplo dentro del paso**: si Francisco desmarca `grupo` en "no giran", el plegado se detiene con el error real de tidyr
  1.3.2: `Can't combine `grupo` <character> and `s1` <double>.` Una columna no puede mezclar textos y números.
- `details.profundizar`: "Otras formas de decir qué columnas giran": `c(s1, s2, s3)`, `s1:s3`, `starts_with("s")`,
  `!c(persona, grupo)`. Todas dan la misma tabla aquí; `starts_with` es frágil si mañana aparece una columna `sexo`.

### Paso 4. Por qué el gráfico y el agrupado piden la forma larga (destacado)
- Idea: un gráfico de ggplot2 asigna **una columna** a cada papel (eje x, eje y, color). Para poner las semanas en el eje x, la
  semana tiene que ser una columna: eso solo pasa en la larga. Igual con `group_by(grupo, semana)`: no se puede agrupar por algo que
  está en los nombres de las columnas.
- Escenario: modo 4. El gráfico de líneas (4 líneas, color por grupo) y la tabla de medias por grupo y semana. Dos paneles de
  código: con la larga, una sola instrucción
  `ggplot(largo, aes(x = semana, y = minutos, group = persona, color = grupo)) + geom_line()` (verificado: 12 puntos, 4 líneas);
  con la ancha, una capa por columna y aún así no hay un eje "semana" (el panel lo muestra tachado).
- Cita eda5doc `transformación-de-los-datos-para-su-visualización` (en general es más fácil recoger los datos en ancho y hay que
  pasarlos a largo para graficarlos y analizarlos; la gráfica de rectas por compuesto), eda5 p.21 (`color = class`: el color es una
  columna) y eda5 p.11 (`group_by` + `summarise`).
- Chequeo (cálculo con datos en vivo): "Con los valores actuales, ¿cuál es la media de minutos del grupo tecnica en la semana 3?"
  Datos de inicio: 19 ((18 + 20) / 2). La celda correspondiente de la tabla de medias está tapada hasta resolver. Tolerancia 0.01.

**Destacado con predicción (confusión natural del concepto): "¿Entonces la larga es la forma correcta?"**
- Predicción: "Quieres el cambio de cada persona entre la semana 1 y la 3. ¿En qué forma lo calculas con una sola línea?"
  Opciones: "en la larga" / "en la ancha" (correcta) / "en ninguna, hay que hacerlo a mano".
- Explicación: en la ancha es una resta entre columnas, `ancho |> mutate(cambio = s3 - s1)`: Ana 2, Beto 2, Cris 8, Dani 8
  (verificado). En la larga habría que agrupar por persona y buscar la fila de s3 y la de s1. Regla: **compara entre columnas de una
  misma fila → ancha; agrupa, filtra o grafica a lo largo de las mediciones → larga.** Ninguna es "la buena": se pasa de una a otra
  según la pregunta, y por eso existen las dos funciones. Muestra de nuevo la hipótesis.

### Paso 5. Desplegar: `pivot_wider`
- Idea: `pivot_wider` es el viaje de vuelta: `names_from` dice qué columna da los nombres de las columnas nuevas y `values_from`
  qué columna da los valores. Las demás columnas identifican cada fila nueva.
  `largo |> pivot_wider(names_from = semana, values_from = minutos)`.
- Escenario: modo 5. Botón Desplegar: las fichas vuelven a su celda; cada persona se reconoce por sus identificadores.
- Cita eda5doc `transformación-de-los-datos-para-su-visualización` (`pivot_wider(names_from = times, values_from = values)`
  devuelve la tabla original; mención de `reshape()` de R base y de `melt` y `cast` del paquete reshape).
- Chequeo (predicción antes de tocar): "Si despliegas la larga, ¿recuperas exactamente la ancha?"
  - Correcta: "Sí, las mismas 4 filas y 5 columnas con los mismos valores" (verificado: `identical(as.data.frame(pivot_wider(...)),
    ancho)` da `TRUE`).
  - "Sí, pero las semanas salen desordenadas": salen en el orden en que aparecen en la larga, s1, s2, s3.
  - "No, se pierde el grupo": `grupo` viaja como identificador en cada fila.
  - "Sale una tabla de 12 columnas": las columnas nuevas son tantas como valores distintos de `semana`, 3.

### Paso 6. Filas que faltan y filas repetidas (trampa)
- Idea: desplegar exige que cada combinación (persona, semana) aparezca **una vez**. Si falta, la celda queda vacía (`NA`). Si
  aparece dos veces, no hay una celda para dos valores.
- Escenario: modo 6. Botones "borrar una fila" y "duplicar una fila con otro valor", luego Desplegar.
  Casos que la página reproduce (verificados):
  - Se borra Dani s2: la larga queda con 11 filas y al desplegar Dani tiene `NA` en `s2` (en pandas `NaN`, y las columnas
    `s1`-`s3` pasan de enteros a decimales: `12.0`, `NaN`, `20.0`).
  - Se agrega una segunda fila Ana s1 con 20: tidyr **avisa** (no se detiene) y entrega columnas-lista (`<dbl [2]>` en la celda de
    Ana s1); pandas `pivot` **se detiene** con `ValueError: Index contains duplicate entries, cannot reshape`.
  - Arreglo explícito: resumir los duplicados al desplegar, `values_fn = mean` en tidyr o `pivot_table` en pandas: Ana s1 = 15
    ((10 + 20) / 2). La página dice que eso es una decisión, no una corrección: hay que saber por qué estaba repetida.
  - Variante del mismo error sin duplicar nada: si antes de desplegar se quita la columna `persona`, dos personas comparten
    (grupo, semana) y todo sale duplicado (columnas-lista `<dbl [2]>` en las 6 celdas, verificado). Los identificadores importan.
- **Trampa marcada** (contraejemplo de la página).
- Cita eda5doc `síntomas-de-datos-problemáticos` (los duplicados están en la lista de ocho síntomas).
- Chequeo (predicción antes de tocar): "Duplicas Ana s1 con valor 20 y despliegas en R. ¿Qué pasa?"
  - Correcta: "Sale la tabla con un aviso, y la celda de Ana s1 guarda los dos valores juntos (una lista)."
  - "Error y se detiene": eso hace pandas `pivot`; tidyr avisa y sigue.
  - "Se queda con el último valor, 20": no elige por ti.
  - "Hace la media, 15": solo si se lo pides con `values_fn = mean`.

### Paso 7. En pandas: `melt` y `pivot`
- Idea: `melt` pliega (`id_vars` = lo que no gira, `var_name`, `value_name`); `pivot` despliega (`index`, `columns`, `values`) y
  deja los identificadores en el índice, por eso se cierra con `reset_index()`. Diferencia de orden: `melt` llena la larga
  **columna por columna** (todas las s1, luego todas las s2...), `pivot_longer` **persona por persona**.
- Escenario: modo 7, interruptor R / pandas; con pandas el plegado recorre la ancha por columnas y las fichas caen en otro orden.
- Cita hojapandas p.1 (`pd.melt(df)`, "Gather columns into rows"; `df.pivot(columns='var', values='val')`, "Spread rows into
  columns"; y la cadena de métodos que empieza con `pd.melt`).
- Chequeo (cálculo con datos en vivo): "Con `melt`, ¿en qué posición (desde 0) queda Cris s2?" Respuesta 6 (verificado: s1 ocupa
  0-3, s2 ocupa 4-7, Cris es la tercera persona → 4 + 2 = 6). Error típico: 7 (el número de la fila de R menos uno, que solo vale
  para el orden de `pivot_longer`).
- `details.profundizar`: "`pivot` frente a `pivot_table`": `pivot` solo reordena y falla con duplicados; `pivot_table` agrega
  (media por defecto) y nunca falla por duplicados, lo que puede esconder un error de datos. Igual que `values_fn` en tidyr.

## Vida real (Python y R)

Mismos datos que el recorrido. Python 3.13.5 con pandas 2.2.3; R 4.6.1 con tidyr 1.3.2.
Algoritmo: **plegar a mano**. Dos bucles: por cada persona (fila de la ancha) y por cada columna de medición, se agrega una fila
(persona, grupo, nombre de la columna, valor) a la larga. Luego se compara con `pivot_longer` / `melt` y se calcula la media por
grupo y semana sobre la larga. El texto sin el prefijo `id: ` es exactamente lo que se ejecutó. `-` marca líneas sin evento.

### Python

```
import: import pandas as pd
datos: ancho = pd.DataFrame({"persona": ["Ana", "Beto", "Cris", "Dani"],
-:                       "grupo": ["control", "control", "tecnica", "tecnica"],
-:                       "s1": [10, 12, 10, 12],
-:                       "s2": [11, 13, 14, 16],
-:                       "s3": [12, 14, 18, 20]})   # inventado
medidas: medidas = ["s1", "s2", "s3"]
filas0: filas = []
fori: for i in range(len(ancho)):               # cada persona (fila de la ancha)
forcol:     for col in medidas:                   # cada medición (columna s1, s2, s3)
agregar:         filas.append([ancho["persona"].iloc[i], ancho["grupo"].iloc[i], col, ancho[col].iloc[i]])
armar: largo = pd.DataFrame(filas, columns=["persona", "grupo", "semana", "minutos"])
dim: print(largo.shape)
fila8: print(largo.iloc[[7]])
lib: lib = ancho.melt(id_vars=["persona", "grupo"], var_name="semana", value_name="minutos")
libfila: print(lib.iloc[[7]])
ordenar: lib = lib.sort_values(["persona", "semana"]).reset_index(drop=True)
igual: print(largo.equals(lib))
media: print(largo.groupby(["grupo", "semana"])["minutos"].mean())
```

Salida real:
```
(12, 4)
  persona    grupo semana  minutos
7    Cris  tecnica     s2       14
  persona    grupo semana  minutos
7    Dani  tecnica     s2       16
True
grupo    semana
control  s1        11.0
         s2        12.0
         s3        13.0
tecnica  s1        11.0
         s2        15.0
         s3        19.0
Name: minutos, dtype: float64
```

### R

```
lib0: library(tidyr)
datos: ancho <- data.frame(persona = c("Ana", "Beto", "Cris", "Dani"),
-:                     grupo = c("control", "control", "tecnica", "tecnica"),
-:                     s1 = c(10, 12, 10, 12),
-:                     s2 = c(11, 13, 14, 16),
-:                     s3 = c(12, 14, 18, 20))   # inventado
medidas: medidas <- c("s1", "s2", "s3")
filas0: filas <- list()
fori: for (i in 1:nrow(ancho)) {                # cada persona (fila de la ancha)
forcol:   for (col in medidas) {                  # cada medición (columna s1, s2, s3)
agregar:     filas[[length(filas) + 1]] <- data.frame(persona = ancho$persona[i], grupo = ancho$grupo[i], semana = col, minutos = ancho[[col]][i])
-:   }
-: }
armar: largo <- do.call(rbind, filas)
dim: print(dim(largo))
fila8: print(largo[8, ])
lib: lib <- pivot_longer(ancho, cols = all_of(medidas), names_to = "semana", values_to = "minutos")
libfila: print(as.data.frame(lib)[8, ])
igual: print(all.equal(largo, as.data.frame(lib)))
media: print(aggregate(minutos ~ semana + grupo, data = largo, FUN = mean))
```

Salida real:
```
[1] 12  4
  persona   grupo semana minutos
8    Cris tecnica     s2      14
  persona   grupo semana minutos
8    Cris tecnica     s2      14
[1] TRUE
  semana   grupo minutos
1     s1 control      11
2     s2 control      12
3     s3 control      13
4     s1 tecnica      11
5     s2 tecnica      15
6     s3 tecnica      19
```

Eventos: Python 40 = `import`, `datos`, `medidas`, `filas0`, 4 × (`fori` + 3 × (`forcol`, `agregar`)) = 28, `armar`, `dim`,
`fila8`, `lib`, `libfila`, `ordenar`, `igual`, `media`. R 39: lo mismo sin `ordenar`.
**`ordenar` solo existe en Python**: `melt` deja la larga columna por columna (en la posición 7 queda Dani s2, no Cris s2) y hay que
reordenar para comparar; `pivot_longer` ya sale persona por persona, igual que el bucle. La narración lo dice en `libfila`
(Python: "melt no siguió el mismo orden que tu bucle") y en `igual` (R: "no hizo falta reordenar").
Índices con `ctx.ix`: `i` vale 0-3 en Python y 1-4 en R; la fila pedida es `iloc[[7]]` en Python y `[8, ]` en R (la misma fila).

### Foto de estado por línea ejecutada

| Evento | i (py / R) | col | fila agregada | len(filas) | Visual |
|---|---|---|---|---|---|
| datos | | | | | la ancha aparece con sus 12 fichas |
| medidas, filas0 | | | | 0 | los encabezados s1-s3 se marcan; aparece la larga vacía |
| fori | 0 / 1 | | | 0 | fila de Ana resaltada |
| forcol, agregar | 0 / 1 | s1 | Ana, control, s1, 10 | 1 | la ficha 10 viaja con "Ana", "control" y el rótulo "s1" |
| forcol, agregar | 0 / 1 | s2 | Ana, control, s2, 11 | 2 | |
| forcol, agregar | 0 / 1 | s3 | Ana, control, s3, 12 | 3 | |
| ... Beto | 1 / 2 | s1-s3 | 12, 13, 14 | 4-6 | |
| ... Cris | 2 / 3 | s1-s3 | 10, 14, 18 | 7-9 | la ficha de Cris s2 queda en la fila 8 (R) / posición 7 (py) |
| ... Dani | 3 / 4 | s1-s3 | 12, 16, 20 | 10-12 | |
| armar | | | | 12 | la lista de filas se vuelve tabla (12 x 4) |
| dim, fila8 | | | | | se resalta Cris s2 |
| lib | | | | | la larga de la librería aparece al lado; en pandas, en el orden de melt (s1 de todos primero) |
| libfila | | | | | py: la posición 7 es Dani s2 (marcada en `--bad`); R: la fila 8 es Cris s2 |
| ordenar (solo py) | | | | | las filas de la larga de pandas se reordenan hasta coincidir |
| igual | | | | | True / TRUE |
| media | | | | | la tabla de medias por grupo y semana y el gráfico de líneas de medias |

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántas veces se ejecuta la línea que agrega una fila (`filas.append(...)` / `filas[[...]] <- ...`)?" Respuesta **12** (4
personas por 3 columnas). Distractores: 4 ("eso es el bucle de fuera solo"), 3 ("eso es el bucle de dentro de una sola persona"),
7 ("4 + 3: los bucles anidados multiplican, no suman"). Pista: "un bucle dentro de otro".

### Trampas reales (retos `codigo1` a `codigo3`)

En los tres, el bloque de datos es el mismo de arriba (`ancho <- data.frame(...)` o `ancho = pd.DataFrame(...)`), precedido de
`library(tidyr)` en R o `import pandas as pd` en Python. Rscript imprime además un "Backtrace" debajo de los errores; la página
muestra solo las líneas copiadas aquí.

**codigo1: `melt` y `pivot_longer` no ordenan igual.**
```
largo <- pivot_longer(ancho, cols = c(s1, s2, s3), names_to = "semana", values_to = "minutos")
print(largo$persona)
print(which(largo$persona == "Cris" & largo$semana == "s2"))
```
Salida real:
```
 [1] "Ana"  "Ana"  "Ana"  "Beto" "Beto" "Beto" "Cris" "Cris" "Cris" "Dani"
[11] "Dani" "Dani"
[1] 8
```
```
largo = ancho.melt(id_vars=["persona", "grupo"], var_name="semana", value_name="minutos")
print(largo["persona"].tolist())
print(largo.index[(largo["persona"] == "Cris") & (largo["semana"] == "s2")].tolist())
```
Salida real:
```
['Ana', 'Beto', 'Cris', 'Dani', 'Ana', 'Beto', 'Cris', 'Dani', 'Ana', 'Beto', 'Cris', 'Dani']
[6]
```
Pregunta: "Si tu código toma 'la fila 8' de la larga suponiendo el orden de R, ¿qué medición lee en pandas (`iloc[7]`)?"
Correcta: Dani s2 (16). Moraleja: nunca confiar en la posición de una fila después de plegar; filtrar por sus identificadores.

**codigo2: una medición repetida.**
```
largo <- pivot_longer(ancho, cols = c(s1, s2, s3), names_to = "semana", values_to = "minutos")
largo[13, ] <- list("Ana", "control", "s1", 20)
print(nrow(largo))
print(pivot_wider(largo, names_from = semana, values_from = minutos))
print(pivot_wider(largo, names_from = semana, values_from = minutos, values_fn = mean))
```
Salida real (el aviso sale después de la tabla, al terminar la línea que lo produce):
```
[1] 13
# A tibble: 4 × 5
  persona grupo   s1        s2        s3       
  <chr>   <chr>   <list>    <list>    <list>   
1 Ana     control <dbl [2]> <dbl [1]> <dbl [1]>
2 Beto    control <dbl [1]> <dbl [1]> <dbl [1]>
3 Cris    tecnica <dbl [1]> <dbl [1]> <dbl [1]>
4 Dani    tecnica <dbl [1]> <dbl [1]> <dbl [1]>
Warning message:
Values from `minutos` are not uniquely identified; output will contain
list-cols.
• Use `values_fn = list` to suppress this warning.
• Use `values_fn = {summary_fun}` to summarise duplicates.
• Use the following dplyr code to identify duplicates.
  {data} |>
  dplyr::summarise(n = dplyr::n(), .by = c(persona, grupo, semana)) |>
  dplyr::filter(n > 1L) 
# A tibble: 4 × 5
  persona grupo      s1    s2    s3
  <chr>   <chr>   <dbl> <dbl> <dbl>
1 Ana     control    15    11    12
2 Beto    control    12    13    14
3 Cris    tecnica    10    14    18
4 Dani    tecnica    12    16    20
```
(La línea `dplyr::filter(n > 1L) ` termina con un espacio: así la imprime tidyr.)
```
largo = ancho.melt(id_vars=["persona", "grupo"], var_name="semana", value_name="minutos")
largo.loc[12] = ["Ana", "control", "s1", 20]
print(len(largo))
try:
    largo.pivot(index=["persona", "grupo"], columns="semana", values="minutos")
except ValueError as e:
    print("ValueError:", e)
print(largo.pivot_table(index=["persona", "grupo"], columns="semana", values="minutos").reset_index())
```
Salida real:
```
13
ValueError: Index contains duplicate entries, cannot reshape
semana persona    grupo    s1    s2    s3
0          Ana  control  15.0  11.0  12.0
1         Beto  control  12.0  13.0  14.0
2         Cris  tecnica  10.0  14.0  18.0
3         Dani  tecnica  12.0  16.0  20.0
```
Pregunta: "¿Cuál de las cuatro salidas es la más peligrosa?" Correcta: "`pivot_table` (o `values_fn = mean`): resuelve el duplicado
con una media sin avisar". Pistas: "el error de pandas" → "ese te obliga a mirar"; "el aviso de tidyr" → "avisa y además te dice
cómo encontrar los duplicados"; "ninguna" → "15 no es una medición que alguien haya hecho".

**codigo3: plegar también una columna de texto.**
```
largo <- pivot_longer(ancho, cols = !persona, names_to = "semana", values_to = "minutos")
```
Salida real (Rscript, primeras líneas):
```
Error in `pivot_longer()`:
! Can't combine `grupo` <character> and `s1` <double>.
```
```
largo = ancho.melt(id_vars=["persona"], var_name="semana", value_name="minutos")
print(largo.shape)
print(largo["minutos"].tolist()[:6])
```
Salida real:
```
(16, 3)
['control', 'control', 'tecnica', 'tecnica', 10, 12]
```
Pregunta: "¿Qué pasó en pandas?" Correcta: "Plegó `grupo` como si fuera una semana más: 16 filas y una columna `minutos` que mezcla
textos y números, sin avisar". Arreglo: `id_vars=["persona", "grupo"]`.

`p.vr-nota`: en una línea, `ancho |> pivot_longer(s1:s3, names_to = "semana", values_to = "minutos")` y
`ancho.melt(id_vars=["persona", "grupo"], var_name="semana", value_name="minutos")`.
`details.profundizar` de vida real: "El viaje de vuelta a mano": dos bucles que recorren la larga y escriben cada valor en la celda
(persona, semana) de una tabla vacía; si la celda ya tenía un valor, ese es exactamente el caso de `codigo2`. No hace falta
correrlo; si se muestra código, correrlo antes.

## Retos (10)

RETOS = ["ojo", "construir", "mano", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3", "formula"]
(11 ids; `formula` es la parte de memoria.)

1. **ojo** (ojo clínico, 8 rondas al azar, aprueba con 7 de 8): se muestra una tabla pequeña (generada) y Francisco decide si
   está en forma **ancha** o **larga** respecto de una variable que se nombra ("respecto del año", "respecto de la asignatura").
   Banco de generadores: notas por estudiante y asignatura (columnas `mate`, `fisica`, `quimica` = ancha; columnas `asignatura`,
   `nota` = larga); ventas por tienda y mes; temperatura por ciudad y día. Rondas trampa: una tabla con columnas `x` e `y` de un
   plano (dos variables distintas, no mediciones de lo mismo: **no** es ancha) y una tabla larga con una sola medición por sujeto
   (largo = ancho: "da igual").
2. **construir** (manipular hasta cumplir objetivos): con el escenario (casillas "no giran", nombres editables, Plegar,
   Desplegar, borrar y duplicar), conseguir: (a) una larga con encabezados `semana` y `minutos` y 12 filas; (b) una ancha que
   tenga exactamente un `NA` (borrar una fila y desplegar); (c) que el plegado falle (desmarcar `grupo`). Ok al cumplir las tres.
3. **mano** (a mano, datos al azar, pistas escalonadas, reintentable): ancha de 3 personas y entre 2 y 4 mediciones (`m1`...)
   con valores al azar entre 1 y 20. Pide: (1) cuántas filas tendrá la larga; (2) en qué fila (desde 1, orden de `pivot_longer`)
   queda la medición de la persona p en la columna k elegidas al azar; (3) la misma posición desde 0 en el orden de `melt`.
   Respuestas: n_personas × n_medidas; (p − 1) × n_medidas + k; (k − 1) × n_personas + (p − 1). Pistas: 1) "una fila por celda de
   medición"; 2) dibuja las filas de la primera persona; 3) "melt llena primero toda la columna m1"; luego la primera resuelta.
4. **error** (cazar el error, 3 variantes, una línea mal):
   - V1 (R): `pivot_longer(ancho, cols = !persona, ...)`: falta `grupo` entre las que no giran; error `Can't combine` (codigo3).
   - V2 (R): `pivot_wider(largo, names_from = minutos, values_from = semana)`: los papeles al revés. Salida real: un tibble de
     4 x 10 con columnas `` `10` `11` `12` `13` `14` `18` `16` `20` `` de tipo `<chr>`, llenas de "s1", "s2", "s3" y `<NA>`
     (fila de Ana: `s1 s2 s3 <NA> <NA> <NA> <NA> <NA>`). No da error: el síntoma es la forma absurda.
   - V3 (pandas): `largo.pivot(index="grupo", columns="semana", values="minutos")` (se usó `grupo` como índice en lugar de
     `["persona", "grupo"]`): hay dos personas por grupo. Salida real: `ValueError: Index contains duplicate entries, cannot reshape`.
5. **prop1** (opción múltiple, `mezclar: true`): "¿Qué dice la regla de los datos ordenados (tidy)?" Correcta: "cada variable en
   su columna, cada observación en su fila". Pistas: "cada sujeto en una sola fila" → "eso es la forma ancha, y deja la semana en los
   nombres de columna"; "sin valores faltantes" → "eso es otro síntoma de la lista de UD5, no la regla de la forma"; "columnas
   ordenadas alfabéticamente" → "ordenado aquí quiere decir estructura, no orden alfabético".
6. **prop2**: "En `pivot_longer(..., names_to = "semana", values_to = "minutos")`, ¿qué guarda la columna `semana`?" Correcta:
   "los antiguos nombres de columna: s1, s2, s3". Pistas: "los números 1, 2, 3" → "guarda el texto tal como era el nombre:
   `s1`; quitar la `s` es otro paso (`names_prefix = "s"`)"; "los minutos" → "eso va en `values_to`"; "el nombre de la persona"
   → "la persona es un identificador: se copia, no gira".
7. **prop3**: "¿Cuándo conviene la forma ancha?" Correcta: "cuando comparas columnas dentro de una misma fila (como `s3 - s1`)".
   Pistas: "para ggplot2" → "ggplot2 quiere una columna por papel: larga"; "para `group_by`" → "se agrupa por columnas, no por
   nombres de columna: larga"; "nunca" → "mira el destacado del paso 4".
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.

## Memoria

**B.ordenar** (plegar en R), piezas en orden:
1. `ancho |>`
2. `pivot_longer(`
3. `cols = c(s1, s2, s3),`
4. `names_to = "semana",`
5. `values_to = "minutos")`

Distractores (3): `names_from = semana,` (es de `pivot_wider`), `cols = !persona,` (pliega también `grupo`), `values_from = minutos)`.
Se registra como reto `formula`.

**Tarjetas (8):**
1. Forma ancha → Una fila por sujeto, una columna por medición.
2. Forma larga → Una fila por medición; una columna dice cuál medición (semana) y otra guarda el valor (minutos).
3. Datos ordenados (tidy) → Cada variable en su columna, cada observación en su fila.
4. `pivot_longer` → `cols` (qué gira), `names_to` (dónde van los nombres), `values_to` (dónde van los valores). En pandas, `melt`.
5. `pivot_wider` → `names_from` (de dónde salen las columnas nuevas), `values_from` (de dónde salen los valores). En pandas, `pivot`
   y luego `reset_index()`.
6. ¿Por qué ggplot2 pide la larga? → Cada papel (x, y, color) es una columna; la semana solo es columna en la larga.
7. Una medición repetida al desplegar → tidyr avisa y crea columnas-lista; pandas `pivot` da `ValueError`; `values_fn` y
   `pivot_table` la resumen sin avisar.
8. ¿Mismo orden en R y pandas al plegar? → No: `pivot_longer` va persona por persona; `melt`, columna por columna.

## Citas (9)

| id de fuente | página PDF o ancla | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| eda5doc | `síntomas-de-datos-ordenados` | | Síntomas de datos ordenados | los seis rasgos de unos datos listos para analizar; el último, seguir una estructura ordenada ("tidy data") | Paso 2 |
| hojapandas | 1 | 1 | Tidy Data | las dos reglas dibujadas (cada variable en su columna, cada observación en su fila) | Paso 2, al terminar |
| eda5doc | `transformación-de-los-datos-para-su-visualización` | | Transformación de los datos para su visualización | formato largo y ancho definidos; la tabla `med.1` a `med.7`; `pivot_longer(!c(group2, group), names_to = "times", values_to = "values")` y la variante con `starts_with("med")` | Paso 3 |
| eda5 | 21 | 21 | ggplot2: estéticas | `color = class`: el color sale de una columna | Paso 4 |
| eda5 | 11 | 11 | `group_by()` y `summarise()` | medias por grupo con `group_by` + `summarise` | Paso 4, chequeo |
| eda5doc | `transformación-de-los-datos-para-su-visualización` | | (misma sección, final) | `pivot_wider(names_from = times, values_from = values)` devuelve la original; `reshape()`, y `melt`/`cast` del paquete reshape | Paso 5 |
| eda5doc | `síntomas-de-datos-problemáticos` | | Síntomas de datos problemáticos | ocho síntomas, entre ellos los duplicados y los NA | Paso 6 |
| hojapandas | 1 | 1 | Reshaping Data | `pd.melt(df)` ("Gather columns into rows") y `df.pivot(columns='var', values='val')` ("Spread rows into columns"); Method Chaining con `pd.melt` | Paso 7 |
| hojapandas | 2 | 2 | Group Data | `df.groupby(by="col")` | Vida real (línea `media`) |

`data-pag` = PDF; eda5 y hojapandas: PDF = impresa. eda5doc: `data-ancla` con el id sin `#`, verificado con grep (el documento no
numera secciones: sin `data-pag`). eda5 p.21 verificada con pdftotext (`ggplot(mpg, aes(x = displ, y = hwy, color = class))`).
La sección `transformación-...` se cita dos veces (pasos 3 y 5) con distinto `data-que`; si `B.lecturas` agrupa por
ancla, queda una sola entrada, lo cual está bien.

Nota del material para decir con naturalidad: el tema solo está en el documento HTML de UD5 (no en las teorías en PDF de UD1, UD4 ni
UD5), y el propio documento admite que "es bastante complejo de entender y visualizar" y que al principio se trabaja por prueba y
error. El documento usa `pivot.xlsx`, que no está en la carpeta de la materia (se descarga del GitHub de la profesora): por eso los
datos de la página son inventados con la misma estructura. El documento también avisa que `reshape()` de R base no funciona bien
con tibbles.

## Riesgos y notas para quien construye

- **Orden de las filas**: el escenario, el chequeo del paso 3 y el del paso 7 dependen de que R use orden persona por persona y
  pandas columna por columna. No mezclar en el simulador.
- **Tipos al desplegar con huecos en pandas**: con `NaN`, las columnas pasan a decimales (`12.0`). En R quedan `<dbl>` siempre
  (los datos ya eran `double` porque `c(10, 12, ...)` es numérico de doble precisión). Copiar las salidas tal cual.
- **El aviso de tidyr** sale en inglés y después de la tabla, con viñetas `•` y una línea final con espacio. Copiarlo entero o
  recortarlo diciendo que se recortó.
- **`largo[13, ] <- list(...)`** sobre un tibble funciona (verificado) y agrega la fila 13; no reemplazarlo por `rbind` sin correrlo.
- **`print(largo.iloc[[7]])`** se usa (con doble corchete) para que pandas imprima una tabla de una fila en lugar de una Series
  con `np.int64(14)`; no cambiarlo.
- **`all.equal`** en R compara también los nombres de fila; funcionó porque `do.call(rbind, ...)` dejó 1:12 igual que
  `as.data.frame(lib)`. En Python, `equals` exige el mismo índice y los mismos tipos: por eso `reset_index(drop=True)`.
- El gráfico ggplot se verificó con `layer_data` (12 puntos, 4 grupos); la página no lo ejecuta: lo dibuja en SVG con los mismos
  datos.
- `B.vidaReal`: Python tiene un evento más (`ordenar`) que R; la lista de eventos es por lenguaje.
- Grupo y semanas sin tildes ni espacios (`tecnica`, `s1`) a propósito: nombres de columna válidos sin comillas invertidas en R.
