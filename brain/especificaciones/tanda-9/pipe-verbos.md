# Especificación: El pipe: verbos encadenados (pipe-verbos)

- Ruta: `tidyverse`, orden 1; también `pandas`, orden 6. Tanda 9.
- Área: Programación con datos. Fuente del catálogo: "Programación y entorno de trabajo (SM142002), UD1, UD4 y UD5".
- Prerrequisitos: "Listas y data frames".
- Siguientes: "Datos anchos y largos", "Gramática de gráficos".
- Aparece: SM142002 UD5.
- Resumen del catálogo: "Filtrar, transformar y resumir pasando la tabla de un verbo al siguiente."

Datos de toda la página (inventados, se dice en la página; países ficticios para que nadie los tome por datos reales):
`paises`, 8 filas, con tres defectos a propósito, los mismos tipos de defecto que trae `gapminder` en el ejercicio de UD5.

| fila | pais | continente | anio | vida |
|---|---|---|---|---|
| 1 | Arlia | Europa | 2020 | 80 |
| 2 | Bento | Africa | 2020 | 60 |
| 3 | Corvo | **Euroep** (errata) | 2020 | 78 |
| 4 | Dalia | Asia | 2020 | 70 |
| 5 | Bento | Africa | 2020 | 60 (**repetida**, igual a la fila 2) |
| 6 | Elmo | Africa | 2020 | **640** (atípico: alguien tecleó un 0 de más) |
| 7 | Fresa | Asia | 2020 | 74 |
| 8 | Gaia | Europa | 2020 | 82 |

`vida` = esperanza de vida en años. Los continentes van sin tilde (`Africa`) para que el orden alfabético y las comparaciones
sean iguales en R y en Python; la página lo aclara en una línea.

La cinta de seis estaciones (el hilo de toda la página, misma idea que la cadena de seis pasos del ejercicio de UD5):

| # | estación | dplyr | pandas | sale (filas x columnas) |
|---|---|---|---|---|
| 0 | entrada | `paises` | `paises` | 8 x 4 |
| 1 | quitar_anio | `select(-anio)` | `.drop(columns="anio")` | 8 x 3 |
| 2 | sin_repetidos | `distinct()` | `.drop_duplicates()` | 7 x 3 (se va la fila 5) |
| 3 | corregir | `mutate(continente = if_else(continente == "Euroep", "Europa", continente))` | `.assign(continente=...replace("Euroep", "Europa"))` | 7 x 3 |
| 4 | filtrar | `filter(between(vida, 30, 100))` | `.query("30 <= vida <= 100")` | 6 x 3 (se va Elmo) |
| 5 | resumir | `group_by(continente) \|> summarise(n = n(), vida_media = mean(vida))` | `.groupby("continente", as_index=False).agg(...)` | 3 x 3 |
| 6 | ordenar | `arrange(desc(vida_media))` | `.sort_values("vida_media", ascending=False)` | 3 x 3 |

Resultado final (verificado en los dos lenguajes): Europa n = 3, vida_media 80 ((80 + 78 + 82) / 3); Asia n = 2, 72; Africa n = 1, 60.

Cuentas que salen en los pasos (todas verificadas en R 4.6.1 con dplyr 1.2.1):
- Sin la estación `filtrar`: Africa n = 2, vida_media 350 ((60 + 640) / 2).
- Sin `sin_repetidos`: Africa n = 2, vida_media 60 (la media no cambia, el conteo sí).
- `corregir` movida después de `resumir`: salen **4 filas**, dos de ellas llamadas "Europa": (Europa, 2, 81) y (Europa, 1, 78).
- `filtrar` movida después de `resumir`: error, la columna `vida` ya no existe.
- Filtro sobre grupos (`filter(vida_media > 70)` después de resumir): Asia (2, 72) y Europa (3, 80).
  Filtro sobre filas (`filter(vida > 70)` antes de resumir, con la tabla ya limpia): Asia (1, 74) y Europa (3, 80).

## Imagen central

**Una cinta transportadora con estaciones. La tabla entra por la izquierda, cada estación la transforma y, debajo de cada estación,
se ve la tabla que sale.**

- Arriba, la cinta: una fila de **estaciones** (tarjetas con el nombre del verbo en grande y la línea de código debajo), unidas por
  flechas `|>`. A ancho de escritorio la cinta va en horizontal con desplazamiento lateral dentro del escenario; a 375 px las
  estaciones se apilan en vertical (la flecha apunta hacia abajo). Nada depende de arrastrar.
- Debajo de cada estación, la **mini tabla de salida** (solo las filas y columnas, letra pequeña) con una **insignia de forma**
  "8 x 3". Los cambios se pintan respecto de la tabla anterior: filas que se van, tachadas en `--bad` y luego plegadas; columnas que
  se van, en gris con su nombre tachado; columnas nuevas o modificadas en `--accent`; celdas corregidas ("Euroep" a "Europa")
  con un destello en `--ok`. En `resumir`, las filas de un mismo continente se juntan con una llave y colapsan en una sola fila.
- Cada estación tiene tres controles táctiles: **subir** y **bajar** (flechas, para reordenar la cinta), y una **casilla**
  "activa" (apagarla saca la estación de la cinta sin borrarla). Si una estación falla, se pinta en `--bad` con el mensaje real
  de R (o de pandas), y las estaciones siguientes quedan grises: "la cinta se detuvo aquí".
- La tabla de entrada tiene **casillas editables** en `vida` (números enteros de 0 a 999) para que los resultados cambien en vivo.
- Interruptor **R / pandas** (desde el paso 7): las etiquetas y el código de cada estación cambian a su versión pandas; la tabla
  que sale es la misma.
- Interruptor **tubería / anidado** (desde el paso 3): debajo de la cinta, el código completo en las dos formas, con cada función
  marcada con un número de orden de ejecución (1 en la más interna de la versión anidada).

Modos por paso: 1) una sola estación (filtrar) y la tabla de entrada; 2) probador de verbos: una estación cuyo verbo se escoge
con cinco botones; 3) tres estaciones y el interruptor tubería / anidado; 4) la cinta completa de seis estaciones, con las tablas de
salida y las casillas editables; 5) reordenar (subir, bajar, apagar) con los fallos y los resultados raros a la vista;
6) la estación `filtrar` con un selector de condición escrita de cuatro maneras; 7) la cinta en pandas.

## Hipótesis inicial

"Tienes una tabla de países con un error de escritura, una fila repetida y un dato imposible, y quieres la esperanza de vida media
por continente. Vas a hacerlo en varias operaciones pequeñas, una detrás de otra. ¿Crees que el orden de esas operaciones cambia el
resultado? ¿Cuáles se pueden intercambiar y cuáles no?"

Se vuelve a mostrar en el paso 5 (`#citaHipo`), cuando Francisco reordena la cinta.

## Pasos (7)

### Paso 1. Entra una tabla, sale otra tabla
- Idea: una operación sobre una tabla no "edita" la tabla: recibe una tabla y entrega otra. Filtrar toca filas, no columnas.
- Escenario: modo 1. La tabla de entrada (8 x 4) y una sola estación, "quedarse con los países cuya esperanza de vida esté entre
  30 y 100 años", sin código. La tabla de salida está tapada con "?" hasta resolver.
- Chequeo (predicción antes de tocar, sin símbolos): "¿Cómo es la tabla que sale de esta estación?"
  - Correcta: "7 filas y 4 columnas: se va solo Elmo (640), las columnas no cambian."
  - "7 filas y 3 columnas": filtrar no quita columnas; eso lo hace otra estación.
  - "6 filas y 4 columnas": la fila repetida de Bento tiene 60 años, que está entre 30 y 100; esta estación no sabe de repetidos.
  - "Un número: la cantidad de países que cumplen": eso sería contar; la estación entrega una tabla.
- Al resolver se destapa la salida y aparece una frase: "Entró una tabla, salió una tabla. Esa es la regla de todo lo que sigue."

### Paso 2. Cinco verbos, cinco efectos
- Idea: dplyr tiene un verbo por cada acción y cada uno cambia la tabla de una sola manera: `select` (columnas), `filter` (filas),
  `mutate` (crea o cambia una columna, mismas filas), `arrange` (mismo contenido, otro orden), `summarise` (colapsa filas en un
  resumen; con `group_by`, una fila por grupo). La notación entra aquí, pero solo el nombre del verbo.
- Escenario: modo 2, probador de verbos. Cinco botones; al tocar uno, la estación aplica ese verbo con un ejemplo fijo sobre la
  tabla de entrada y se ven los cambios pintados (`select(pais, vida)`, `filter(vida < 100)`, `mutate(decadas = vida / 10)`,
  `arrange(vida)`, `group_by(continente) |> summarise(n = n())`). Una tabla de "huellas" a la derecha: filas antes / después y
  columnas antes / después de cada verbo.
- Cita eda5 p.5 (los cinco verbos) y p.11 (`group_by` + `summarise`). Decir con naturalidad: la lista de p.5 trae cinco verbos y
  no menciona `group_by`, que aparece recién en p.11; `summarise` sin `group_by` da una sola fila.
- Chequeo (elección con explicación): "Entra una tabla de 7 filas y 3 columnas y sale una de 3 filas con columnas nuevas (`n`,
  `vida_media`). ¿Qué verbo fue?"
  - Correcta: `summarise` (con `group_by(continente)`): una fila por continente.
  - `filter`: quita filas pero conserva las columnas; no inventa `n`.
  - `mutate`: agrega columnas pero conserva las 7 filas.
  - `select`: solo escoge columnas existentes; nunca cambia el número de filas.

### Paso 3. El pipe: la salida de uno es la entrada del siguiente
- Idea: `x |> f(y)` significa `f(x, y)`: el pipe mete la tabla de la izquierda como primer argumento de la función de la derecha.
  Por eso una cadena se lee de izquierda a derecha (o de arriba abajo) en el orden en que ocurre, mientras que la versión anidada
  se lee de adentro hacia afuera.
- Escenario: modo 3. Tres estaciones (`select(-anio)`, `filter(vida < 100)`, `arrange(desc(vida))`) y el interruptor
  tubería / anidado:
  - anidado: `arrange(filter(select(paises, -anio), vida < 100), desc(vida))`, con números 1, 2, 3 de adentro hacia afuera;
  - tubería: `paises |> select(-anio) |> filter(vida < 100) |> arrange(desc(vida))`, con los mismos números de izquierda a derecha.
- Cita eda5 p.6 (el pipe viene de la idea del pipe de bash; las razones de magrittr: de izquierda a derecha, sin llamadas anidadas,
  sin variables intermedias, fácil agregar pasos) y eda5doc `el-operador-pipeline-o-pipe` (cada función modifica el conjunto
  de datos y la siguiente actúa sobre esa modificación; si no lo asignas con `<-`, el resultado no se guarda).
  Decir con naturalidad: el título de esa sección habla de `%>%` y el primer ejemplo usa `|>`; en estos usos son equivalentes,
  el documento no lo aclara (ver el profundizar).
- Chequeo (elección con explicación): "¿Qué tubería hace lo mismo que
  `summarise(group_by(filter(paises, vida < 100), continente), m = mean(vida))`?"
  - Correcta: `paises |> filter(vida < 100) |> group_by(continente) |> summarise(m = mean(vida))`.
  - `paises |> summarise(m = mean(vida)) |> group_by(continente) |> filter(vida < 100)`: copia las funciones en el orden en que
    se leen de izquierda a derecha; en la versión anidada la que se ejecuta primero es la de más adentro.
  - `paises |> filter(paises, vida < 100) |> ...`: repite la tabla; el pipe ya la pasa como primer argumento (esto da error:
    `filter` recibiría `paises` dos veces).
  - `filter(vida < 100) |> group_by(continente) |> summarise(m = mean(vida))`: falta la tabla de entrada al comienzo.
- `details.profundizar`: "`|>` frente a `%>%`". `|>` viene con R desde la versión 4.1 y no necesita paquetes; `%>%` es de
  magrittr y lo carga dplyr. Para cadenas como las de esta página son iguales. Diferencias reales: `%>%` acepta el nombre de la
  función sin paréntesis (`paises %>% nrow` da 8) y `|>` no (`paises |> nrow` es un error de sintaxis; ver reto `codigo3`); `%>%`
  usa el marcador `.` y `|>` usa `_` con argumento con nombre. ISLR2 usa `%>%` en su laboratorio de redes neuronales (cita).

### Paso 4. La cinta completa (el ejercicio de la unidad, en pequeño)
- Idea: una limpieza es una cadena de pasos pequeños, cada uno con su verbo, y conviene comprobar la tabla después de cada
  estación. Seis estaciones: quitar_anio, sin_repetidos, corregir, filtrar, resumir, ordenar.
- Escenario: modo 4. La cinta completa con las mini tablas y las insignias de forma. Casillas editables en `vida`. La columna
  `vida_media` de la tabla final se muestra con "?" hasta resolver el chequeo.
- Cita eda5doc `ejercicio` (la cadena de seis pasos sobre `gapminder`: `select(-year)`, `rename`, `mutate` con `case_when`,
  `distinct`, `filter(between(life_expectancy, 30, 200))`, `na_if`). Decir con naturalidad: el documento dice que quedan 179 filas
  de 192; no se puede comprobar porque `gapminder.xlsx` no está en la carpeta de la materia. La misma cadena está en el archivo
  `Ejercicio EDA I RESUELTO.R` de UD5, líneas 33 a 50 (texto sin chip: no está registrado).
  Nota: el ejercicio usa 30 y 200 como límites; la página usa 30 y 100 porque nadie vive 200 años, y lo dice.
- Chequeo (cálculo con datos en vivo): "Con los valores actuales de la tabla, ¿cuál es la `vida_media` de Europa al final de la
  cinta?" Con los datos de inicio: 80 ((80 + 78 + 82) / 3; Corvo cuenta porque la estación `corregir` ya lo pasó a Europa).
  Si Francisco editó `vida`, la respuesta se recalcula (aceptar con tolerancia 0.01). Pista tras un fallo: "¿Cuántos países de
  Europa llegan a la estación resumir? Revisa la salida de corregir." Error típico: 81 (olvidar a Corvo, que entró como "Euroep").

### Paso 5. El orden importa (trampa)
- Idea: dos verbos se pueden intercambiar solo si ninguno usa lo que el otro cambia. Mover una estación puede (a) no cambiar nada,
  (b) cambiar el resultado en silencio, o (c) romper la cinta.
- Escenario: modo 5. Subir, bajar y apagar estaciones. Muestra de nuevo la hipótesis.
- Casos que la página debe reproducir tal cual (verificados):
  - `sin_repetidos` antes o después de `corregir`: mismo resultado (se pueden intercambiar).
  - `sin_repetidos` apagada: Africa n = 2 y vida_media 60. La media no delata la fila repetida; el conteo sí.
  - `corregir` después de `resumir`: 4 filas, dos llamadas "Europa" (2 países con 81 y 1 con 78). Nadie avisa.
  - `filtrar` después de `resumir`: la cinta se detiene en `filtrar` con el error real
    `object 'vida' not found` (después de `summarise` solo quedan `continente`, `n` y `vida_media`).
  - `filtrar` apagada: Africa con vida_media 350.
- **Trampa marcada** (este paso es el contraejemplo de la página): el caso de `corregir` después de `resumir` no da error y entrega
  una tabla con un continente repetido.
- Chequeo (predicción antes de tocar): "Antes de mover nada: si pasas `corregir` después de `resumir`, ¿qué sale?"
  - Correcta: "Cuatro filas, con dos filas llamadas Europa: el error de escritura formó su propio grupo antes de corregirse."
  - "Lo mismo de antes: corregir es corregir": `summarise` ya armó los grupos con el texto mal escrito.
  - "Un error, porque `continente` ya no existe": `continente` sí sobrevive a `summarise` (es la columna del grupo); la que
    desaparece es `vida`.
  - "Tres filas, pero Europa con n = 2": se olvida de que la fila de Corvo no desaparece, queda como grupo aparte.

**Destacado con predicción (confusión natural del concepto): "¿Filtrar antes o después de resumir?"**
- Situación: con la tabla ya limpia (después de `filtrar`), Francisco quiere "los continentes con esperanza de vida alta, más de 70".
- Predicción: "Pones el filtro `> 70` antes de resumir (sobre cada país) o después (sobre la media de cada continente). ¿Salen los
  mismos números?" Opciones: "sí, iguales" / "mismos continentes, números distintos" (correcta) / "continentes distintos".
- Explicación con la tabla de las dos versiones lado a lado (verificado):
  - después de resumir, `filter(vida_media > 70)`: Asia (n = 2, 72) y Europa (n = 3, 80). Pregunta sobre **grupos**.
  - antes de resumir, `filter(vida > 70)`: Asia (n = 1, 74) y Europa (n = 3, 80). Dalia (70) sale antes de calcular la media.
  - Las dos son correctas; responden preguntas distintas. Es la diferencia entre `WHERE` y `HAVING` en SQL (cita prog1 p.30):
    `WHERE` filtra filas antes de agrupar, `HAVING` filtra grupos después.

### Paso 6. Un `=` no es un `==` (trampa de escritura)
- Idea: dentro de `filter` va una pregunta que da verdadero o falso para cada fila: `continente == "Asia"`. Un solo `=` es
  "ponle nombre a un argumento", no "compara". Y entre comillas, `"continente"` es un texto, no la columna.
- Escenario: modo 6. La estación `filtrar` con un selector de cuatro escrituras; al elegir una se ve la salida real:
  - `filter(continente == "Asia")`: 2 filas (Dalia y Fresa).
  - `filter(continente = "Asia")`: error, con el mensaje real de dplyr 1.2.1:
    `We detected a named input.` / `This usually means that you've used `=` instead of `==`.` /
    `Did you mean `continente == "Asia"`?`
  - `filter("continente" == "Asia")`: **0 filas, sin error** (compara dos textos: "continente" no es "Asia", así que es
    FALSE para todas). Es la versión silenciosa y la más peligrosa.
  - `filter(continente == Asia)`: error `object 'Asia' not found` (sin comillas, R busca una variable llamada Asia).
- Cita eda5 p.6-7 (`filter(homeworld == "Tatooine")` y con `&`) y eda5doc `filtrar-observaciones-con-filter`.
- Chequeo (elección con explicación): "¿Cuál de las cuatro devuelve una tabla vacía sin avisar?" Correcta:
  `filter("continente" == "Asia")`. Pistas por distractor: `=` → "esa sí avisa, y hasta te sugiere el arreglo";
  `Asia` sin comillas → "esa también se queja: no existe ningún objeto Asia"; `==` con comillas en el valor → "esa es la correcta: 2 filas".

### Paso 7. La misma cinta en pandas: encadenar métodos
- Idea: en pandas casi todos los métodos de un DataFrame devuelven otro DataFrame, así que se pueden encadenar con un punto:
  `paises.drop(...).drop_duplicates().assign(...).query(...)`. Es el pipe de pandas. La cadena larga va entre paréntesis para
  poder partirla en varias líneas. Traducción de verbos: `select` → `[[...]]` o `.drop(columns=)`, `filter` → `.query()`,
  `mutate` → `.assign()`, `arrange` → `.sort_values()`, `group_by + summarise` → `.groupby().agg()`, `distinct` →
  `.drop_duplicates()`.
- Escenario: modo 7, interruptor R / pandas sobre la cinta completa. El resultado final es el mismo (Europa 3, 80; Asia 2, 72;
  Africa 1, 60).
- Cita hojapandas p.1 (Method Chaining con `pd.melt(df).rename(...).query(...)` entre paréntesis; `query`, `drop_duplicates`,
  `sort_values`) y eda5 p.33 (dplyr facilita construir flujos de trabajo, "pipelines").
- Chequeo (elección con explicación): "¿Cómo se traduce `filter(between(vida, 30, 100))` en la cadena de pandas?"
  - Correcta: `.query("30 <= vida <= 100")`.
  - `.filter(like="vida")`: en pandas, `.filter` escoge **columnas** (o etiquetas) por su nombre, no filas por su valor
    (verificado: `paises.filter(like="Asia")` devuelve una tabla vacía de 0 columnas y 8 filas).
  - `.loc[30:100]`: escoge filas por etiqueta del índice (de la 30 a la 100), no por el valor de `vida`.
  - `.query("vida = 30..100")`: no es una expresión válida; además un solo `=` da `ValueError: cannot assign without a target object`.
- `details.profundizar`: "Una tercera notación: data.table". `DT[i, j, by]`: `i` elige filas (filter, arrange; WHERE), `j`
  elige o calcula columnas (select, mutate; SELECT), `by` agrupa (group_by; GROUP BY). Sin pipe: todo cabe en un solo corchete,
  y se puede encadenar con `][`. Muy rápido, sintaxis menos amigable (cita eda5 p.15-16). No se programa en la página.

## Vida real (Python y R)

Mismos datos que el recorrido. Python 3.13.5 con pandas 2.2.3; R 4.6.1 con dplyr 1.2.1.
Algoritmo: **la cinta es un bucle**. Una lista ordenada de estaciones (funciones que reciben una tabla y devuelven una tabla) y un
bucle que hace `t = f(t)` una vez por estación. Al final se compara contra la forma idiomática (cadena con `|>` o con puntos).
El texto sin el prefijo `id: ` es exactamente lo que se ejecutó. `-` marca líneas de continuación que no generan evento.

### Python

```
import: import pandas as pd
datos: paises = pd.DataFrame({"pais": ["Arlia", "Bento", "Corvo", "Dalia", "Bento", "Elmo", "Fresa", "Gaia"],
-:                        "continente": ["Europa", "Africa", "Euroep", "Asia", "Africa", "Africa", "Asia", "Europa"],
-:                        "anio": [2020, 2020, 2020, 2020, 2020, 2020, 2020, 2020],
-:                        "vida": [80, 60, 78, 70, 60, 640, 74, 82]})   # inventado
est: estaciones = {
e1:     "quitar_anio": lambda t: t.drop(columns="anio"),
e2:     "sin_repetidos": lambda t: t.drop_duplicates(),
e3:     "corregir": lambda t: t.assign(continente=t["continente"].replace("Euroep", "Europa")),
e4:     "filtrar": lambda t: t.query("30 <= vida <= 100"),
e5:     "resumir": lambda t: t.groupby("continente", as_index=False).agg(n=("pais", "size"), vida_media=("vida", "mean")),
e6:     "ordenar": lambda t: t.sort_values("vida_media", ascending=False),
-: }
t0: t = paises
for: for nombre, f in estaciones.items():     # la cinta: cada estación recibe t y devuelve otra t
aplicar:     t = f(t)
imp:     print(nombre, t.shape)
final: print(t)
directo: directo = (paises
-:            .drop(columns="anio")
-:            .drop_duplicates()
-:            .assign(continente=lambda d: d["continente"].replace("Euroep", "Europa"))
-:            .query("30 <= vida <= 100")
-:            .groupby("continente", as_index=False)
-:            .agg(n=("pais", "size"), vida_media=("vida", "mean"))
-:            .sort_values("vida_media", ascending=False))
igual: print(t.equals(directo))
```

Salida real:
```
quitar_anio (8, 3)
sin_repetidos (7, 3)
corregir (7, 3)
filtrar (6, 3)
resumir (3, 3)
ordenar (3, 3)
  continente  n  vida_media
2     Europa  3        80.0
1       Asia  2        72.0
0     Africa  1        60.0
True
```

### R

```
lib: suppressMessages(library(dplyr))
datos: paises <- tibble(pais = c("Arlia", "Bento", "Corvo", "Dalia", "Bento", "Elmo", "Fresa", "Gaia"),
-:                  continente = c("Europa", "Africa", "Euroep", "Asia", "Africa", "Africa", "Asia", "Europa"),
-:                  anio = c(2020, 2020, 2020, 2020, 2020, 2020, 2020, 2020),
-:                  vida = c(80, 60, 78, 70, 60, 640, 74, 82))   # inventado
est: estaciones <- list(
e1:   quitar_anio = function(t) select(t, -anio),
e2:   sin_repetidos = function(t) distinct(t),
e3:   corregir = function(t) mutate(t, continente = if_else(continente == "Euroep", "Europa", continente)),
e4:   filtrar = function(t) filter(t, between(vida, 30, 100)),
e5:   resumir = function(t) summarise(group_by(t, continente), n = n(), vida_media = mean(vida)),
e6:   ordenar = function(t) arrange(t, desc(vida_media))
-: )
t0: t <- paises
for: for (nombre in names(estaciones)) {     # la cinta: cada estación recibe t y devuelve otra t
aplicar:   t <- estaciones[[nombre]](t)
imp:   cat(nombre, dim(t), "\n")
-: }
final: print(t)
directo: directo <- paises |>
-:   select(-anio) |>
-:   distinct() |>
-:   mutate(continente = if_else(continente == "Euroep", "Europa", continente)) |>
-:   filter(between(vida, 30, 100)) |>
-:   group_by(continente) |>
-:   summarise(n = n(), vida_media = mean(vida)) |>
-:   arrange(desc(vida_media))
igual: print(identical(t, directo))
```

Salida real (las líneas de `cat` terminan con un espacio antes del salto: así sale de `cat(..., "\n")`):
```
quitar_anio 8 3 
sin_repetidos 7 3 
corregir 7 3 
filtrar 6 3 
resumir 3 3 
ordenar 3 3 
# A tibble: 3 × 3
  continente     n vida_media
  <chr>      <int>      <dbl>
1 Europa         3         80
2 Asia           2         72
3 Africa         1         60
[1] TRUE
```

Eventos (iguales en los dos lenguajes, 31): `import`/`lib`, `datos`, `est`, `t0`, y 6 vueltas de (`for`, `eK`, `aplicar`, `imp`)
donde `eK` es la línea de la estación de esa vuelta (e1 en la primera, e6 en la última), luego `final`, `directo`, `igual`.
La línea `eK` se resalta dentro del bucle porque es la que se ejecuta cuando `f(t)` la llama; la narración lo dice: "el bucle
llama a la estación; se ejecuta su línea; lo que devuelve se guarda otra vez en `t`".
Las estaciones se definen en `est` (un solo evento: el diccionario o la lista se crea, nada se ejecuta todavía).

### Foto de estado por línea ejecutada

| Evento | nombre | forma de t (py / R) | qué cambió | Visual |
|---|---|---|---|---|
| datos | | (8, 4) / 8 4 | | la tabla de entrada con sus tres defectos marcados con un punto |
| est | | | | aparecen las seis estaciones vacías en la cinta, en orden |
| t0 | | (8, 4) | `t` apunta a `paises` | la tabla se coloca a la entrada de la cinta |
| vuelta 1 (e1) | quitar_anio | (8, 3) | se va `anio` | columna gris tachada |
| vuelta 2 (e2) | sin_repetidos | (7, 3) | se va la fila 5 (Bento repetido) | fila tachada en `--bad` |
| vuelta 3 (e3) | corregir | (7, 3) | Corvo pasa de Euroep a Europa | celda con destello `--ok` |
| vuelta 4 (e4) | filtrar | (6, 3) | se va Elmo (640) | fila tachada |
| vuelta 5 (e5) | resumir | (3, 3) | 6 filas colapsan en 3: Africa (1, 60), Asia (2, 72), Europa (3, 80) | llaves que juntan filas por continente |
| vuelta 6 (e6) | ordenar | (3, 3) | Europa, Asia, Africa | las filas se reordenan con animación |
| final | | | | la tabla final; en Python se ve el índice 2, 1, 0 (el que dejó groupby), en R las filas 1, 2, 3 |
| directo | | | la cadena idiomática produce otra tabla | la cinta entera se recorre de una vez, sin paradas |
| igual | | | True / TRUE | las dos tablas finales lado a lado con un signo igual |

Variables a mostrar en `#vrVars`: `nombre`, la forma de `t` (con `ctx.ix` no hace falta: aquí no hay índices numéricos de bucle),
y en la vuelta 5 los grupos. Narrar en `aplicar`: "`t` ahora es la tabla que devolvió la estación; la anterior ya no se usa".

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántas veces se ejecuta la línea `t = f(t)`?" Respuesta **6** (una por estación). Distractores: 1 ("parece una sola
operación, pero está dentro del bucle"), 8 ("eso son las filas de la tabla de entrada; el bucle recorre estaciones, no filas"),
5 ("cuenta los cinco verbos de dplyr, pero la cinta tiene seis estaciones"). Pista: "el bucle recorre el diccionario de estaciones".

### Trampas reales (retos `codigo1` a `codigo3`)

En los tres, el bloque de datos es el mismo de arriba (`paises <- tibble(...)` o `paises = pd.DataFrame(...)`), precedido de
`suppressMessages(library(dplyr))` en R o `import pandas as pd` en Python. Rscript imprime además un "Backtrace" largo debajo
del error; la página muestra solo las primeras líneas del mensaje (las que se copian aquí) y lo dice.

**codigo1: `=` en lugar de `==`, y la columna entre comillas.**
```
print(paises |> filter("continente" == "Asia"))
print(paises |> filter(continente = "Asia"))
```
Salida real (Rscript):
```
# A tibble: 0 × 4
# ℹ 4 variables: pais <chr>, continente <chr>, anio <dbl>, vida <dbl>
Error in `filter()`:
! We detected a named input.
ℹ This usually means that you've used `=` instead of `==`.
ℹ Did you mean `continente == "Asia"`?
```
Par en pandas:
```
print(paises.query("continente == 'Asia'").shape)
print(paises.query("continente = 'Asia'"))
```
Salida real (última línea del traceback):
```
(2, 4)
ValueError: cannot assign without a target object
```
Pregunta (opción múltiple): "¿Cuál de los dos errores de R es más peligroso?" Correcta: "el de las comillas: no da error y
devuelve 0 filas". Pistas: "el del `=`" → "ese se detiene y te dice cómo arreglarlo"; "los dos igual" → "uno avisa y el otro no".

**codigo2: filtrar por una columna que el resumen ya borró.**
```
paises |>
  group_by(continente) |>
  summarise(n = n(), vida_media = mean(vida)) |>
  filter(between(vida, 30, 100))
```
Salida real (Rscript):
```
Error in `filter()`:
ℹ In argument: `between(vida, 30, 100)`.
Caused by error:
! object 'vida' not found
```
Par en pandas:
```
r = (paises
     .groupby("continente", as_index=False)
     .agg(n=("pais", "size"), vida_media=("vida", "mean"))
     .query("30 <= vida <= 100"))
```
Salida real (última línea): `pandas.errors.UndefinedVariableError: name 'vida' is not defined`
Pregunta: "¿Qué columnas tiene la tabla cuando llega a `filter`?" Correcta: `continente`, `n`, `vida_media`. Arreglo: mover el
filtro antes de `group_by` (o filtrar `vida_media` si la pregunta es sobre grupos).

**codigo3: el pipe nativo exige paréntesis, y la cadena de pandas exige paréntesis exteriores.**
```
print(paises %>% nrow)
print(paises |> nrow())
```
Salida real:
```
[1] 8
[1] 8
```
y en un archivo aparte:
```
print(paises |> nrow)
```
Salida real (Rscript):
```
Error in nrow : 
  The pipe operator requires a function call as RHS (<input>:1:17)
Execution halted
```
Es un error de **sintaxis**: R rechaza el archivo antes de ejecutar nada (ni siquiera crea `paises`). Par en Python, sin
paréntesis exteriores:
```
r = paises
    .drop_duplicates()
```
Salida real (última línea): `IndentationError: unexpected indent` (sin sangría la segunda línea da `SyntaxError: invalid syntax`,
también verificado). Con paréntesis, `r = (paises\n     .drop_duplicates())` da forma `(7, 4)`.
Pregunta: "¿Por qué `paises %>% nrow` funciona y `paises |> nrow` no?" Correcta: "`%>%` acepta el nombre de una función y le
agrega los paréntesis; `|>` exige una llamada escrita con paréntesis".

`p.vr-nota`: la cinta en una sola cadena, `paises |> select(-anio) |> distinct() |> mutate(...) |> filter(between(vida, 30, 100)) |> group_by(continente) |> summarise(n = n(), vida_media = mean(vida)) |> arrange(desc(vida_media))`, y su par de pandas entre paréntesis.
`details.profundizar` de vida real: "Lo que hace `|>` por dentro": R reescribe `x |> f(y)` como `f(x, y)` al leer el código
(antes de ejecutarlo); por eso `print(quote(paises |> filter(vida < 100)))` imprime `filter(paises, vida < 100)` (verificado
en R 4.6.1). Los mensajes de error de arriba lo
delatan: dicen `filter(summarise(group_by(...)))`, la versión anidada.

## Retos (10)

RETOS = ["ojo", "construir", "mano", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3", "formula"]
(11 ids; `formula` es la parte de memoria.)

1. **ojo** (ojo clínico, 8 rondas al azar, aprueba con 7 de 8): se muestran la forma de entrada y la de salida y una pista visual
   (filas tachadas, columnas nuevas, mismo contenido en otro orden); Francisco elige el verbo entre `select`, `filter`, `mutate`,
   `arrange`, `summarise`. Generador: tabla al azar de 5 a 9 filas y 3 a 5 columnas; el verbo se elige al azar y la salida se
   calcula (por ejemplo, `filter`: quita entre 1 y n − 1 filas; `summarise` con grupos: k filas, k entre 2 y 4, columnas nuevas;
   `arrange`: mismas filas reordenadas, nunca el orden original). Rondas trampa: `mutate` que **reemplaza** una columna existente
   (misma forma, contenido cambiado), para distinguirlo de `arrange` (mismo contenido, otro orden).
2. **construir** (manipular hasta cumplir objetivos): en la cinta del paso 5 (subir, bajar, apagar), conseguir: (a) una tabla
   final de 4 filas (respuesta: mover `corregir` después de `resumir`); (b) que la cinta se detenga con error (mover `filtrar`
   después de `resumir`, o `quitar_anio` después de `resumir`: `anio` ya no existe y R da `Can't select columns that don't exist.`,
   verificado); (c) que Africa salga con `n = 2` y `vida_media = 60` (apagar `sin_repetidos`). Ok al cumplir las tres.
3. **mano** (a mano, datos al azar, pistas escalonadas, reintentable): tabla de 6 países con `continente` en {A, B} y `vida`
   al azar entre 50 y 90, más un atípico (vida entre 300 y 900) en una fila al azar. Se muestra la cadena
   `filter(vida <= 100) |> group_by(continente) |> summarise(n = n(), m = mean(vida))` y se piden `n` y `m` del grupo A
   (se regenera hasta que la media de A sea entera). Pistas: 1) tacha la fila que no pasa el filtro; 2) "separa las filas de A";
   3) "suma y divide por cuántas quedaron"; luego la primera cuenta resuelta.
4. **error** (cazar el error, 3 variantes, una línea mal en una cadena de 5 líneas):
   - V1 (R): `filter(continente = "Asia")` en medio de la cadena (debe ser `==`). Mensaje real del paso 6.
   - V2 (R): `summarise(...)` antes de `filter(between(vida, 30, 100))`: `object 'vida' not found` (codigo2).
   - V3 (pandas): `.filter(like="Asia")` para quedarse con las filas de Asia: devuelve 0 columnas (verificado: tabla vacía con
     índice de 8 filas); debía ser `.query("continente == 'Asia'")`.
5. **prop1** (opción múltiple, `mezclar: true`): "¿Qué escribe `paises |> filter(vida < 100)` si no lo asignas, y qué vale
   después `nrow(paises)`?" Correcta: "Imprime la tabla filtrada (7 filas) y `nrow(paises)` sigue siendo 8" (verificado).
   Pistas: "7, la tabla quedó filtrada" → "el pipe no modifica la tabla original; para guardar usa `<-`"; "nada, da error" →
   "funciona, solo que el resultado se imprime y se pierde"; "0" → "nada borró la tabla".
   Par de pandas en la explicación: `paises.sort_values("vida")` sin asignar deja `paises["vida"]` como
   `[80, 60, 78, 70, 60, 640, 74, 82]` (verificado).
6. **prop2**: "¿Qué dos estaciones de la cinta se pueden intercambiar sin cambiar el resultado?" Correcta: `sin_repetidos` y
   `corregir`. Pistas: `filtrar` y `resumir` → "después de resumir ya no existe `vida`"; `corregir` y `resumir` → "el grupo
   Euroep se forma antes de corregir"; `resumir` y `ordenar` → "`ordenar` usa `vida_media`, que crea `resumir`".
7. **prop3**: "¿Qué hace `x |> f(y)`?" Correcta: "llama a `f(x, y)`: `x` entra como primer argumento". Pistas: "`f(y, x)`" →
   "entra primero, no al final"; "guarda `f(y)` en `x`" → "el pipe no asigna; eso lo hace `<-`"; "aplica `f` a cada fila de `x`"
   → "`f` recibe la tabla entera de una vez".
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.

## Memoria

**B.ordenar** (la cinta en R, del paso 4), piezas en orden:
1. `paises |>`
2. `distinct() |>`
3. `mutate(continente = if_else(continente == "Euroep", "Europa", continente)) |>`
4. `filter(between(vida, 30, 100)) |>`
5. `group_by(continente) |>`
6. `summarise(n = n(), vida_media = mean(vida)) |>`
7. `arrange(desc(vida_media))`

Distractores (3): `filter(continente = "Europa") |>`, `summarise(vida_media = mean(vida)) |> group_by(continente) |>`,
`select(vida) |>` (borraría `continente` antes de agrupar).
Las piezas 2 y 3 son intercambiables. Si `B.ordenar` no admite dos órdenes válidos, fijar el de la lista y decir en el
enunciado "en el orden de la cinta de la página".
Se registra como reto `formula`.

**Tarjetas (8):**
1. ¿Qué recibe y qué devuelve un verbo de dplyr? → Recibe una tabla y devuelve otra tabla. No modifica la original.
2. `x |> f(y)` → Es `f(x, y)`: la tabla de la izquierda entra como primer argumento.
3. `select` frente a `filter` → `select` escoge columnas; `filter` escoge filas que cumplen una condición.
4. `mutate` frente a `summarise` → `mutate` conserva las filas y agrega o cambia columnas; `summarise` colapsa las filas en un
   resumen (una fila por grupo con `group_by`).
5. ¿Por qué falla `filter(vida > 30)` después de `summarise`? → `summarise` solo deja las columnas de grupo y las que calcula;
   `vida` ya no existe.
6. `filter(continente = "Asia")` → Error: un `=` nombra un argumento. Para comparar se usa `==`.
7. Filtrar antes o después de resumir → Antes filtra filas (WHERE); después filtra grupos (HAVING). Responden preguntas distintas.
8. El pipe de pandas → Encadenar métodos que devuelven DataFrame: `(df.query(...).assign(...).sort_values(...))`, entre paréntesis
   para partirlo en líneas.

## Citas (13)

| id de fuente | página PDF o ancla | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| eda5 | 5 | 5 | 3.1 El universo Tidyverse | dplyr como "gramática de manipulación de datos" y la lista de cinco verbos con una línea cada uno | Paso 2 |
| eda5 | 11 | 11 | `group_by()` y `summarise()` | altura media por género y peso medio por planeta (aparecen `NaN` donde no hay masas) | Paso 2, al terminar |
| eda5 | 6 | 6 | El pipe | el pipe como el `\|` de bash y las cuatro razones de magrittr | Paso 3 |
| eda5doc | `el-operador-pipeline-o-pipe` | | El operador "pipeline" o "pipe" | `select(country, population) \|> filter(population > 4e+08)`; cada función actúa sobre lo que dejó la anterior; guardar con `<-`. El título dice `%>%` y el ejemplo usa `\|>` | Paso 3 y reto `prop1` |
| islr2 | 455 | 444 | 10.9.1 A Single Layer Network on the Hitters Data | el pipe `%>%` fuera de dplyr: una red neuronal armada capa por capa, y `model.matrix(...) %>% scale()` | Profundizar del paso 3 |
| eda5doc | `ejercicio` | | Ejercicio | la cadena de seis pasos de limpieza de `gapminder`, con la frase de las 179 filas | Paso 4, antes del chequeo |
| eda5 | 7 | 7 | `filter()` | `homeworld == "Tatooine"` (10 filas) y con `& gender == "masculine"` (8 filas) | Paso 6 |
| eda5doc | `filtrar-observaciones-con-filter` | | Filtrar observaciones con filter | `filter(continent == "Africa" & ...)` con dos condiciones | Paso 6, al terminar |
| prog1 | 30 | 30 | HAVING: filtrar después de agrupar | HAVING filtra grupos ya formados; WHERE (p.28) filtra filas | Destacado del paso 5 |
| eda5doc | `crear-resúmenes-con-summarise` | | Crear resúmenes con summarise | `summarise` con `group_by(continent)`; usa `summarise_all` y `select_if`, que dplyr ya reemplazó por `across()` | Paso 5, después del destacado |
| hojapandas | 1 | 1 | Method Chaining / Subset Observations | la cadena `pd.melt(df).rename(...).query(...)` entre paréntesis; `query`, `drop_duplicates`, `sort_values` | Paso 7 |
| eda5 | 15 | 15 | data.table | Ilustración 2: `DT[i, j, by]` con sus equivalentes en dplyr y SQL (sigue en p.16) | Profundizar del paso 7 |
| eda5 | 33 | 33 | Conclusiones | dplyr: verbos legibles que facilitan los flujos de trabajo ("pipelines"); data.table por velocidad | Al terminar la página (vida real) |

`data-pag` = PDF. eda5, prog1 y hojapandas: PDF = impresa. islr2: PDF = impresa + 11 (PDF 455, impresa 444; verificado con
pdftotext: `keras_model_sequential() %>%` y "The pipe operator %>% passes the previous term"). eda5doc: `data-ancla` con el id
sin `#` (verificado con grep; el documento no numera secciones, así que va sin `data-pag`).

Sin chip (no registrados): `Ejercicio EDA I RESUELTO.R` de UD5, líneas 33 a 50 (la cadena `g1 <- gapminder %>% select(-year) %>% ... na_if(infant_mortality, 0)`).

## Riesgos y notas para quien construye

- **`print(t)` en pandas muestra el índice 2, 1, 0** (lo dejó `groupby(as_index=False)` y luego `sort_values`); en R las filas
  salen numeradas 1, 2, 3. No "arreglar" la salida: es real.
- **Salida de `cat` en R**: cada línea termina con un espacio antes del salto (`"quitar_anio 8 3 "`). Copiar tal cual.
- **Mensajes de R en inglés** (`LC_MESSAGES` en_US en esta máquina). Con Rscript, los errores de dplyr salen con el formato de rlang
  (`Error in `filter()`:` y debajo un `Backtrace` largo); en la consola de RStudio el formato puede verse algo distinto. Mostrar
  solo las líneas copiadas aquí y avisar que el resto es la traza.
- El error de `paises |> nrow` es de **lectura** (sintaxis): `(<input>:1:17)` es lo que imprimió Rscript con ese archivo; no
  inventar otra posición.
- **Simulador del escenario**: la página no corre R; calcula cada estación en JavaScript. Las salidas de los casos raros (4 filas
  con dos "Europa", el error de `vida`, Africa 350, Africa n = 2) deben salir del simulador y coincidir con las de esta
  especificación. Si Francisco edita `vida` y deja un valor fuera de 30-100 en otra fila, el simulador debe tacharla en `filtrar`.
- `if_else` (dplyr) es estricto con los tipos; `case_when` es lo que usa el material. La página puede mencionar que `case_when`
  sirve para varias correcciones a la vez (como "America" y "Euroep" en el ejercicio), pero el código de vida real usa `if_else`
  porque solo hay una errata.
- `mutate(decadas = vida / 10)` del paso 2 solo vive en el simulador; no hace falta correrlo, pero los números deben ser vida / 10.
- Reordenar en el simulador: `quitar_anio` solo rompe la cinta si queda después de `resumir` (mensaje real de R:
  `Can't select columns that don't exist.` / `✖ Column `anio` doesn't exist.`); en cualquier otra posición no cambia nada.
  `ordenar` antes de `resumir` también rompe (`vida_media` no existe todavía; mensaje no corrido: mostrar uno genérico
  "la columna vida_media todavía no existe" o correrlo antes).
- `B.vidaReal`: las líneas `e1` a `e6` se ejecutan dentro del bucle; los eventos de cada vuelta apuntan a su línea `eK`. La línea
  `est` es un solo evento aunque ocupe 8 líneas.
