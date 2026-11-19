# Especificación: Listas y data frames (listas-dataframes)

- Ruta: `r-base`, orden 6; también `pandas`, orden 1. Tanda 8.
- Área: Programación con datos. Fuente del catálogo: "Programación y entorno de trabajo (SM142002), UD1, UD4 y UD5".
- Prerrequisitos: "Índices, rebanadas y máscaras".
- Siguientes: "NA y NaN", "El pipe: verbos encadenados", "Agrupar y resumir en pandas y dplyr", "Funciones propias y la familia apply", "Fórmulas y modelos en R: lm, glm y predict".
- Aparece: SM142002 UD4, SM142002 UD2.
- Resumen del catálogo: "Una tabla como lista de columnas: crear, escoger y agregar."

Datos de toda la página (inventados, se dice en la página): cinco estudiantes.

| nombre | edad | horas | grupo |
|---|---|---|---|
| Ana | 23 | 4 | A |
| Beto | 31 | 2 | B |
| Cris | 27 | 5 | A |
| Dani | 35 | 1 | B |
| Eva | 29 | 3 | A |

Cuentas limpias: media de horas 3; edad > 25 deja a Beto, Cris, Dani y Eva (horas 2, 5, 1, 3; media 2.75); grupo A: media de horas 4; grupo B: 1.5.
Índices conservados al filtrar: edad > 25 → pandas `[1, 2, 3, 4]`, R `"2" "3" "4" "5"`; grupo A → pandas `[0, 2, 4]`, R `1 3 5`.

## Imagen central

**Una tabla que se desarma en columnas y se vuelve a armar, con una caja que muestra qué devuelve cada forma de pedir.**

- A la izquierda, la tabla de cinco filas. Cada columna es una **tira vertical de color** con su tipo escrito al pie (`chr`, `num` en R; `object`, `int64` en pandas) y su nombre arriba como **etiqueta colgada**. Un botón **Desarmar** separa las cuatro tiras dentro de un contenedor con borde (la "lista" que las guarda, con sus cuatro nombres); **Armar** las vuelve a pegar. Se ve que una tabla es una lista de columnas del mismo largo.
- Al lado de las filas, una columna gris con los **nombres de fila** (R: `1` a `5`; pandas: índice `0` a `4`). Esa columna viaja con las filas cuando se filtra: no se renumera.
- A la derecha, una **barra de expresión** con un selector (o piezas para armar desde el paso 5): Francisco elige qué pedir: `df[2, 3]`, `df[, "horas"]`, `df$horas`, `df["horas"]`, `df[["horas"]]`, `df[df$edad > 25, ]` en R, y sus pares de pandas `df.iloc[1, 2]`, `df["horas"]`, `df[["horas"]]`, `df.loc[df["edad"] > 25]`, `df.iloc[1]`, `df.loc[1]`. Interruptor **R / pandas**.
- Debajo, la **bandeja de resultado**: lo que se pidió aparece **dentro de su caja** (con borde, nombre de columna y nombres de fila: sigue siendo tabla o lista) o **sin caja** (solo los valores sueltos: un vector o un número). Al pie, la clase real (`data.frame`, `numeric`, `list`, `Series`, `DataFrame`). En la tabla de la izquierda se resaltan las celdas elegidas.
- Una casilla de **condición** (desde el paso 6): columna, comparador y valor (deslizador) que pinta la máscara de filas y muestra la tabla filtrada con sus nombres de fila originales.

Modos por paso: 1) tabla sola con colores por columna; 2) caja "lista" con objetos de formas distintas; 3) caja y contenido (`[` frente a `[[`); 4) Desarmar/Armar y el intento de agregar una columna de largo 4; 5) barra de expresión con fila y columna; 6) condición y nombres de fila que viajan; 7) columna nueva calculada y resumen por grupo.

## Hipótesis inicial

"Mira la tabla de cinco estudiantes. Si cortas la tabla en columnas, ¿cada columna puede mezclar textos y números o tiene un solo tipo? Y si sacas la columna de horas, ¿te queda una tabla de una columna o una lista de cinco números? ¿O depende de cómo lo pidas?"

Se vuelve a mostrar en el paso 3 (`#citaHipo`), cuando aparecen la caja y el contenido.

## Pasos (7)

### Paso 1. Una tabla son columnas
- Idea: cada columna guarda un solo tipo de dato; columnas distintas pueden tener tipos distintos; todas tienen el mismo largo.
- Escenario: modo 1, sin código. Tiras de color sin el tipo escrito (el tipo se revela al resolver).
- Chequeo (predicción antes de tocar, sin símbolos): "¿Qué afirmación describe esta tabla?"
  - Correcta: "Cada columna tiene un solo tipo (la de nombres solo textos, la de edades solo números) y todas tienen 5 valores."
  - "Cada fila tiene un solo tipo": la fila de Ana mezcla un texto, dos números y una letra.
  - "Toda la tabla tiene que ser del mismo tipo": eso es una matriz, no una tabla de datos (enlace a "Tipos y coerción" si existe en el catálogo con ese título).
  - "Las columnas pueden tener largos distintos": no; si no, una fila quedaría incompleta.
- Cita prog1 p.10 (DataFrames "similares a las tablas en bases de datos").

### Paso 2. La lista: una caja con cajones de cualquier forma
- Idea: una lista guarda objetos de tipos y tamaños distintos, cada uno en su cajón, con nombre opcional: `list(nombres = c("Ana", "Beto"), n = 2, tabla = head(df, 2))`. En Python, la lista `[...]` también mezcla tipos, y el diccionario `{...}` es la caja con cajones con nombre.
- Notación entra aquí. Escenario: modo 2, caja con tres cajones de formas distintas (una tira de 2 textos, un número, una mini tabla).
- Cita prog4 p.14 (`list()` para datos heterogéneos) y Think Python (una lista acepta elementos de cualquier tipo, incluso otras listas).
- Chequeo (cálculo con datos en vivo): "¿Cuánto da `length(L)`?" Respuesta 3 (tres cajones, no importa lo que haya dentro; verificado). Distractores: 5 (cuenta 2 nombres + 1 número + 2 filas), 2, 4.
- `details.profundizar`: "Lista, tupla o diccionario en Python": cuándo cada una (Python Workout, cap. 3; Think Python cap. 11).

### Paso 3. La caja o el contenido: `[` frente a `[[` (destacado)
- Idea: `L[1]` devuelve **una lista con un cajón** (la caja sigue ahí); `L[[1]]` devuelve **lo que hay dentro** (el vector). `L$nombres` es lo mismo que `L[["nombres"]]`. En pandas, `df["horas"]` da la columna sola (Series) y `df[["horas"]]` una tabla de una columna (DataFrame).
- Escenario: modo 3, bandeja con caja / sin caja.
- Muestra de nuevo la hipótesis.
- Cita prog4 p.15 (`class(lista_1[1])` sigue siendo lista) y p.16 (`[[ ]]` da el elemento en su tipo original; nombres y `$`), y el HTML (`listas`: `y[1]` frente a `y[[1]]` con `class` y `typeof`, `y[[1]][2]`).

**Destacado con predicción (confusión natural del concepto): "¿Por qué `mean(df["horas"])` no da 3?"**
- Predicción: "En R, ¿qué devuelve `mean(df["horas"])`?" Opciones: `3` / `NA` con un aviso (correcta) / un error.
- Explicación: `df["horas"]` es un data frame de una columna (la caja); `mean` espera números sueltos, no una tabla, así que avisa "argument is not numeric or logical: returning NA" (salida real). `mean(df[["horas"]])` y `mean(df$horas)` dan 3. Analogía del tren: `[` te da un tren con un vagón; `[[` te da lo que va en el vagón.
- Chequeo del paso (elección con explicación): "¿Cuál devuelve el vector `c("Ana", "Beto")` de la lista L?"
  - Correcta: `L[[1]]` (y `L$nombres`).
  - `L[1]`: una lista de un cajón; `class` da `"list"`.
  - `L[[1]][1]`: solo `"Ana"`.
  - `L["n"]`: el cajón equivocado y con caja.

### Paso 4. El data frame es una lista de columnas del mismo largo
- Idea: un data frame es una lista cuyos cajones son vectores de igual largo; por eso `length(df)` da el número de **columnas** (4), `typeof(df)` da `"list"` e `is.list(df)` da `TRUE`. pandas arma un DataFrame a partir de un diccionario de columnas.
- Escenario: modo 4. Botón Desarmar / Armar; botón "Agregar columna de largo 4" y "Agregar columna de largo 1".
- Cita prog4 p.16 (data frames, "listas de vectores de igual magnitud"), prog4 p.24 (la conclusión: un data frame es una lista de vectores de misma longitud) y Think Python (el diccionario como mapeo clave a valor).
- Chequeo (predicción antes de tocar): "Intentas agregar `df$nueva <- c(1, 2, 3, 4)`. ¿Qué pasa?"
  - Correcta: "Error: la columna no tiene el largo de la tabla." Salida real: `replacement has 4 rows, data has 5`; en pandas: `ValueError: Length of values (4) does not match length of index (5)`.
  - "R rellena el quinto con NA": no lo hace con columnas.
  - "R recicla la columna": solo recicla un valor de largo 1 (con `df$constante <- 7` sale `7 7 7 7 7`, verificado).
  - "Se agrega y la quinta fila queda vacía": no existe la fila incompleta.

### Paso 5. Escoger: fila y columna, por posición o por nombre
- Idea: `df[fila, columna]` (R, desde 1) y `df.iloc[fila, columna]` (pandas, desde 0) por posición; por nombre `df[, "horas"]`, `df$horas`, `df.loc[etiqueta, "horas"]`. Una sola columna pedida con `[ , ]` en R se suelta de su caja (vector) salvo `drop = FALSE`; una fila sigue siendo un data frame (en pandas, una Series).
- Escenario: modo 5. La barra de expresión con piezas: fila (número, vacío o condición), columna (número, nombre o vacío), corchete simple o doble, y el interruptor R / pandas.
- Cita prog4 p.19 (`mtcars[1,2]` = 6), p.20 (`mtcars[ , "cyl"]`, `mtcars$cyl`, `mtcars[1:3, 4:5]`), el HTML (`selección-de-variables`: `starwars[,4]` frente a `starwars$hair_color`, `starwars[5, 4]` = "brown") e ISLR2 (`Auto$cylinders`: el nombre de columna unido con `$`).
- Chequeo (cálculo con datos en vivo, celda elegida al azar entre las 20): "Te piden `df[3, 3]` en R. ¿Qué número es y cómo lo escribes en pandas con `iloc`?" Para `df[3, 3]`: 5 y `df.iloc[2, 2]` (verificado: los dos dan 5). Error típico: copiar los mismos números en pandas (`df.iloc[3, 3]` cae en la columna `grupo` de Dani, "B").

### Paso 6. Filtrar filas: el índice viaja con ellas (trampa)
- Idea: una máscara de filas (`df[df$edad > 25, ]`, `df[df["edad"] > 25]`) deja las filas que cumplen **con sus nombres de fila originales**. En pandas, `.loc` busca por **etiqueta** y `.iloc` por **posición**: después de filtrar dejan de coincidir.
- Escenario: modo 6, casilla de condición; la columna gris de nombres de fila no se renumera.
- Cita prog4 p.22 (`mtcars[mtcars$cyl > 4 & mtcars$hp > 100, ]`).
- Texto: el cuaderno de clase UAX_20251028, celda 19, filtra clientes y la salida conserva los índices 0, 2, 3, 4, 5, 7, 10; la celda 18 usa `reset_index(drop=True)` para renumerar (sin chip si `prog1nb` no está registrado).
- Chequeo (predicción antes de tocar): "`a = df[df["grupo"] == "A"]`. ¿Qué da `a.loc[1]`?"
  - Correcta: "`KeyError: 1`: la etiqueta 1 era Beto, que no está en el grupo A." (Salida real.) `a.iloc[1]` da la fila de Cris.
  - "La fila de Cris, la segunda": eso es `iloc`.
  - "La fila de Beto": Beto quedó fuera del filtro.
  - "La fila de Ana": confunde posición 0 con etiqueta 1.
- **Trampa marcada**: en R el mismo descuido no da error: tras `sub <- df[df$edad > 25, ]`, `sub["1", "nombre"]` devuelve `NA` en silencio y `sub[1, "nombre"]` da `"Beto"` (verificado).
- `details.profundizar`: "`reset_index(drop=True)` y `rownames(sub) <- NULL`": cuándo renumerar y por qué pandas guarda el índice (para volver a unir con la tabla original).

### Paso 7. Agregar columnas y resumir por grupo
- Idea: una columna nueva es un vector del largo de la tabla, calculado con las otras de forma vectorizada (`df$horas_sem <- df$horas * 7`); un resumen por grupo parte la tabla, calcula en cada parte y junta (adelanto de "Agrupar y resumir en pandas y dplyr").
- Escenario: modo 7. Columna nueva que aparece como tira; botón "por grupo" que separa filas A y B y colapsa cada parte en una fila con su media.
- Cita prog4 p.21 (`mtcars_mini$new`, `mpgOvercyl <- mpg / cyl`, `cbind` y `rbind` exigen mismas filas o columnas). Errata para decir con naturalidad: la salida impresa en p.21 trae una columna `new2` (valores k a t) que ningún código del texto crea.
- Chequeo (cálculo con datos en vivo, valores de horas editables): "¿Cuál es la media de horas del grupo A?" Con los datos de inicio, 4 ((4 + 5 + 3)/3). Verificado: `tapply(df$horas, df$grupo, mean)` da A 4.0, B 1.5; `df.groupby("grupo")["horas"].mean()` lo mismo.

## Vida real (Python y R)

Mismos datos que el recorrido. Python 3.13.5 con pandas 2.2.3; R 4.6.1 (tibble 3.3.1 para `codigo3`).
Algoritmo: la media de horas de quienes tienen más de 25 años, recorriendo las filas a mano, y luego con la máscara de la librería.
El texto sin el prefijo `id: ` es exactamente lo que se ejecutó.

### Python

```
import: import pandas as pd
datos: df = pd.DataFrame({"nombre": ["Ana", "Beto", "Cris", "Dani", "Eva"],
-:                    "edad": [23, 31, 27, 35, 29],
-:                    "horas": [4, 2, 5, 1, 3],
-:                    "grupo": ["A", "B", "A", "B", "A"]})   # inventado
total0: total = 0
cuenta0: cuenta = 0
fori: for i in range(len(df)):              # fila por fila
si:     if df["edad"].iloc[i] > 25:       # columna primero, luego posición
suma:         total = total + df["horas"].iloc[i]
cuenta:         cuenta = cuenta + 1
imp1: print(total / cuenta)
mascara: sub = df[df["edad"] > 25]             # máscara: filas que cumplen
imp2: print(sub.index.tolist())
imp3: print(sub["horas"].mean())
```

Salida real:
```
2.75
[1, 2, 3, 4]
2.75
```

### R

```
datos: df <- data.frame(nombre = c("Ana", "Beto", "Cris", "Dani", "Eva"),
-:                  edad = c(23, 31, 27, 35, 29),
-:                  horas = c(4, 2, 5, 1, 3),
-:                  grupo = c("A", "B", "A", "B", "A"))   # inventado
total0: total <- 0
cuenta0: cuenta <- 0
fori: for (i in 1:nrow(df)) {               # fila por fila
si:   if (df$edad[i] > 25) {              # columna primero, luego posición
suma:     total <- total + df$horas[i]
cuenta:     cuenta <- cuenta + 1
-:   }
-: }
imp1: print(total / cuenta)
mascara: sub <- df[df$edad > 25, ]             # máscara: filas que cumplen
imp2: print(rownames(sub))
imp3: print(mean(sub$horas))
```

Salida real:
```
[1] 2.75
[1] "2" "3" "4" "5"
[1] 2.75
```

Eventos: Python import, datos, total0, cuenta0, 5 × (fori, si), 4 × (suma, cuenta), imp1, mascara, imp2, imp3 = 25; R 24.

### Foto de estado por línea ejecutada

| Evento | i (py / R) | edad[i] | ¿> 25? | total | cuenta | Visual |
|---|---|---|---|---|---|---|
| datos | | | | | | la tabla se arma desde cuatro tiras (diccionario o `data.frame` de columnas) |
| total0, cuenta0 | | | | 0 | 0 | dos cajas acumuladoras |
| fori/si | 0 / 1 | 23 | no | 0 | 0 | fila de Ana resaltada en gris (no cumple) |
| fori/si/suma/cuenta | 1 / 2 | 31 | sí | 2 | 1 | fila de Beto en `--pos`; flecha de su celda de horas a `total` |
| fori/si/suma/cuenta | 2 / 3 | 27 | sí | 7 | 2 | Cris |
| fori/si/suma/cuenta | 3 / 4 | 35 | sí | 8 | 3 | Dani |
| fori/si/suma/cuenta | 4 / 5 | 29 | sí | 11 | 4 | Eva |
| imp1 | | | | 11 | 4 | 11 / 4 = 2.75 |
| mascara | | | | | | la columna de verdadero/falso aparece entera de una vez (F T T T T) y la tabla filtrada sale con sus nombres de fila 1-4 (py) o "2"-"5" (R) |
| imp2, imp3 | | | | | | se resalta la columna de nombres de fila que no se renumeró; la media coincide |

Índices con `ctx.ix`. Narrar en `si`: "¿La edad de la fila i (columna `edad`, posición i) supera 25?"; en `mascara`: "La misma pregunta, hecha a las cinco filas a la vez (vectorizada): una columna de verdadero/falso que elige filas".

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántas veces se ejecuta la línea `total = total + ...`?" Respuesta **4** (solo las filas que cumplen; Ana no). Distractores: 5 (confunde con las vueltas del `for`), 1, 11 (confunde con el valor final de total). Pista: "la línea está dentro del `if`".

### Trampas reales (retos `codigo1` a `codigo3`)

**codigo1: `df["horas"]` frente a `df[["horas"]]` en R.**
```
df <- data.frame(nombre = c("Ana", "Beto", "Cris", "Dani", "Eva"),
                 edad = c(23, 31, 27, 35, 29),
                 horas = c(4, 2, 5, 1, 3),
                 grupo = c("A", "B", "A", "B", "A"))
print(class(df["horas"])); print(class(df[["horas"]]))
print(mean(df["horas"]))
print(mean(df[["horas"]]))
```
Salida real:
```
[1] "data.frame"
[1] "numeric"
[1] NA
Warning message:
In mean.default(df["horas"]) :
  argument is not numeric or logical: returning NA
[1] 3
```
(El aviso sale justo después del `NA`, al terminar esa línea; así se imprimió en la corrida.)

**codigo2: `.loc` frente a `.iloc` después de filtrar.**
```
import pandas as pd
df = pd.DataFrame({"nombre": ["Ana", "Beto", "Cris", "Dani", "Eva"],
                   "edad": [23, 31, 27, 35, 29],
                   "horas": [4, 2, 5, 1, 3],
                   "grupo": ["A", "B", "A", "B", "A"]})
a = df[df["grupo"] == "A"]
print(a.index.tolist())
try:
    print(a.loc[1])
except KeyError as e:
    print("KeyError:", e)
print(a.iloc[1]["nombre"])
print(a.reset_index(drop=True).loc[1, "nombre"])
```
Salida real:
```
[0, 2, 4]
KeyError: 1
Cris
Cris
```
Pregunta: "¿Por qué `a.loc[1]` falla si `a` tiene tres filas?" Correcta: `.loc` busca la etiqueta 1 (Beto), que se quedó fuera; `.iloc[1]` es la segunda posición.

**codigo3: la caja que no se abre sola (tibble y pandas).**
```
suppressMessages(library(tibble))
tb <- as_tibble(df)
print(class(tb[, "horas"]))
print(mean(tb[, "horas"]))
```
(con el mismo `df` de arriba). Salida real:
```
[1] "tbl_df"     "tbl"        "data.frame"
[1] NA
Warning message:
In mean.default(tb[, "horas"]) :
  argument is not numeric or logical: returning NA
```
En un data frame clásico `df[, "horas"]` se suelta a vector (`class` = `"numeric"`, verificado); un tibble nunca se suelta. Par en pandas:
```
print(df[["horas"]].mean())
print(df["horas"].mean())
```
Salida real:
```
horas    3.0
dtype: float64
3.0
```
Pregunta: "¿Por qué la primera media sale con un nombre al lado?" Correcta: `df[["horas"]]` es una tabla de una columna; su media es una Series con una media por columna.

`p.vr-nota`: `df[df["edad"] > 25]["horas"].mean()` (o `df.loc[df["edad"] > 25, "horas"].mean()`, que da 2.75 con valores `[2, 5, 1, 3]`, verificado) y `mean(df[df$edad > 25, "horas"])` en R (valores `2 5 1 3`, verificado).

## Retos (10)

RETOS = ["ojo", "construir", "mano", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3"]

1. **ojo** (ojo clínico, 8 rondas al azar): se muestra una expresión (R o pandas) sobre `df` o `L` y Francisco decide sin ejecutar si el resultado sale **con caja** (tabla, lista, DataFrame) o **sin caja** (vector, Series, número). Banco: `df["horas"]` (R: caja), `df[["horas"]]` (R: sin caja), `df$horas`, `df[, "horas"]`, `df[, "horas", drop = FALSE]`, `df[2, ]` (caja), `df[2, 3]`, `L[1]`, `L[[1]]`, `L$n`; pandas `df["horas"]` (Series: sin caja de tabla), `df[["horas"]]`, `df.iloc[1]` (Series), `df.iloc[[1]]` (DataFrame), `df.iloc[1, 2]`. Ok con 7 de 8.
2. **construir** (manipular hasta cumplir objetivos): con las piezas de la barra de expresión (fila, columna, corchete, condición), obtener: (a) el vector de horas del grupo A (R: `df[df$grupo == "A", "horas"]` → 4 5 3); (b) una tabla de una columna con las edades (`df["edad"]` o `df[, "edad", drop = FALSE]`); (c) en pandas, el nombre de la tercera fila por posición (`df.iloc[2, 0]` → "Cris"). Ok al cumplir las tres.
3. **mano** (a mano, datos al azar, pistas escalonadas): tabla de 5 filas con edades al azar entre 18 y 40 y horas entre 1 y 6 (se regenera hasta que al menos 2 filas cumplan). Pide: (1) qué nombres de fila quedan tras `df[df$edad > u, ]` con u al azar; (2) la media de horas de esas filas; (3) qué devuelve `sub.iloc[0]` y `sub.loc[0]` (este último: error si la fila 0 no cumple). Pistas: 1) pinta la máscara; 2) "los nombres de fila no se renumeran"; 3) primera fila resuelta.
4. **error** (cazar el error, 3 variantes, una línea mal):
   - V1 (R): `sub <- df[df$edad > 25]` (falta la coma): salida real `Error in [.data.frame(df, df$edad > 25) : undefined columns selected`; la máscara se usó para escoger columnas.
   - V2 (Python): `cuenta = cuenta + 1` escrito fuera del `if` (con la sangría del `if`): la media sale 11 / 5 = 2.2 en lugar de 2.75.
   - V3 (Python): después de filtrar, `primero = sub.loc[0, "nombre"]` para pedir la primera fila: `KeyError: 0` (verificado); debía ser `sub.iloc[0]` o renumerar.
5. **prop1** (opción múltiple): "¿Cuánto da `length(df)` con la tabla de la página?" Correcta: 4 (columnas). Pistas: 5 → "eso es `nrow(df)`; un data frame es una lista de columnas"; 20 → "eso son las celdas; `length` cuenta cajones"; 1 → "la tabla no es un solo objeto para `length`: mira cuántos cajones tiene".
6. **prop2**: "En pandas, ¿cuál es la diferencia entre `.loc` e `.iloc`?" Correcta: "`.loc` busca por etiqueta del índice y nombre de columna; `.iloc` por posición desde 0". Pistas: "`.loc` es para filas y `.iloc` para columnas" → "los dos aceptan fila y columna"; "son iguales" → "solo coinciden mientras el índice sea 0, 1, 2, ... sin huecos"; "`.iloc` incluye el final de la rebanada" → "es al revés: `.loc` con etiquetas incluye el final, `.iloc` no".
7. **prop3**: "En R, `df$hora` (sin la s), ¿qué devuelve?" Correcta: "la columna `horas`: `$` completa nombres parciales sin avisar" (verificado: `4 2 5 1 3`, sin aviso en R 4.6.1). Pistas: "NULL" → "eso pasaría con una lista y `[[\"hora\"]]`, que exige el nombre exacto"; "error" → "R no se queja aquí, por eso es peligroso"; "NA" → "no hay valor faltante: hay coincidencia parcial". Moraleja: usar `[["horas"]]` en código que otros van a leer.
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.

## Memoria

**B.ordenar** (filtrar filas y resumir en R), piezas en orden:
1. `df[`
2. `df$edad > 25`
3. `, `
4. `"horas"]`

y luego envolver en `mean( ... )` (pieza 0: `mean(`; pieza 5: `)`). Resultado: `mean(df[df$edad > 25, "horas"])` = 2.75.
Distractores: `df[[`, `df["edad"] > 25`, `]` sin coma (la versión sin coma escoge columnas).

**Tarjetas (8):**
1. ¿Qué es un data frame en R? → Una lista de columnas (vectores) del mismo largo; `typeof(df)` da `"list"`.
2. `L[1]` frente a `L[[1]]` → `[` devuelve una lista con un cajón (la caja); `[[` devuelve lo que hay dentro.
3. `df["horas"]` frente a `df[["horas"]]` en pandas → El primero es una Series (la columna); el segundo un DataFrame de una columna. (En R es al revés en cuanto a la caja: `df["horas"]` es tabla, `df[["horas"]]` vector.)
4. `length(df)` → El número de columnas, no de filas.
5. ¿Por qué falla `df$nueva <- c(1, 2, 3, 4)` con 5 filas? → Todas las columnas deben tener el largo de la tabla; solo un valor de largo 1 se recicla.
6. Después de filtrar, ¿se renumeran las filas? → No: R conserva los nombres de fila y pandas el índice. Renumera con `rownames(sub) <- NULL` o `reset_index(drop=True)`.
7. `.loc` frente a `.iloc` → Etiqueta frente a posición.
8. ¿Por qué `mean(df["horas"])` da NA en R? → `df["horas"]` es un data frame; usa `df$horas` o `df[["horas"]]`.

## Citas (13)

| id de fuente | página PDF o ancla | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| prog1 | 10 | 10 | Python en la ciencia de datos | pandas y sus DataFrames, "similares a las tablas en bases de datos relacionales" | Paso 1 |
| prog4 | 14 | 14 | Listas | `list()` guarda datos heterogéneos: un vector, letras y una matriz | Paso 2, al terminar |
| thinpython | 128 | 107 | Cap. 10: A List Is a Sequence | una lista de Python acepta elementos de cualquier tipo, incluso otras listas | Paso 2 |
| pyworkout | 55 | 29 | Cap. 3 Lists and tuples (apertura) | cuándo usar lista y cuándo tupla; tabla 3.1 que compara `str`, `list` y `tuple` (p. 30) | Paso 2, profundizar |
| prog4 | 15 | 15 | Listas | `lista_1[1]` sigue siendo lista: la prueba con `class()` | Paso 3, antes del destacado |
| prog4 | 16 | 16 | Listas y data frames | `[[ ]]` da el elemento en su tipo original y `[ ]` una lista; `names()` y `$`; empiezan los data frames como listas de vectores de igual magnitud | Paso 3 y paso 4 |
| prog4html | `listas` | | Listas | `y[1]` frente a `y[[1]]` con `class` y `typeof`, `y$caracteres`, `y[[1]][2]` | Destacado del paso 3 |
| thinpython | 146 | 125 | Cap. 11: A Dictionary Is a Mapping | el diccionario como mapeo clave a valor: así recibe `pd.DataFrame` sus columnas | Paso 4 |
| prog4 | 24 | 24 | Conclusiones | "un data frame es una lista de vectores de misma longitud" | Paso 4, al terminar |
| prog4 | 20 | 20 | Seleccionar | `mtcars[ , "cyl"]`, `mtcars$cyl` y `mtcars[1:3, 4:5]` | Paso 5, al terminar |
| prog4html | `selección-de-variables` | | Selección de variables | `starwars[,4]` frente a `starwars$hair_color`; `starwars[5, 4]` = "brown" | Paso 5 |
| prog4 | 22 | 22 | Filtrar filas | `mtcars[mtcars$cyl > 4 & mtcars$hp > 100, ]`: la máscara en el lugar de las filas, con la coma | Paso 6 |
| prog4html | `data-frame-clásico-vs-tibble` | | Data frame clásico frente a tibble | `starwars` es un tibble; `as.data.frame` cambia la clase | Reto `codigo3` |

`data-pag` = PDF. thinpython: impresa = PDF − 21; pyworkout: impresa = PDF − 26. prog1 y prog4: PDF = impresa.
Opcionales si se quiere una cita más (ya hay 13): prog4 p.21 (añadir columnas, con la errata `new2`) o ISLR2 PDF 61 / p. 50 (`$` y `attach()` con `Auto`).

## Riesgos y notas para quien construye

- **R frente a pandas invierte la "caja"**: en R, `df["horas"]` es tabla y `df[["horas"]]` vector; en pandas, `df["horas"]` es la columna sola (Series) y `df[["horas"]]` la tabla. Es fuente de confusión segura: la página debe ponerlos lado a lado (paso 3) y no decir "igual que en R".
- Una **Series** no es "sin caja" del todo: tiene índice y nombre. En el escenario, dibujarla como tira con su índice gris, distinta de la tabla y del vector de R.
- **Fuentes no registradas** (`prog1nb`, `prog1hojas`, `prog4ej`): mencionarlas en el texto por nombre y celda o línea, sin chip. Si se registran: UAX_20251028 celdas 3-7 (`head`, `shape`, `info`), 13-19 (filtrar con máscara y el índice conservado), hoja de pandas p.1 (`loc`, `iloc`, `at`, `iat`); `Ejercicios sesión 2 data frames - soluciones.R` línea 58 tiene un error real útil para un reto (`df[tail(df, 3), c(1, 4)]` da `invalid subscript type 'list'`, según el mapa de citas; no se volvió a correr aquí).
- Los avisos de R salen en inglés en esta máquina (`LC_MESSAGES` = en_US) y se imprimen al terminar la línea que los produce.
- `print(df.iloc[1])` en pandas imprime `Name: 1, dtype: object`: si el escenario lo muestra, copiar la salida real.
- El `$` con nombre parcial (`df$hora`) no da aviso en R 4.6.1 (verificado); no afirmar que avisa.
- No usar `df["edad"][i]` en el código de Python (depende de la etiqueta, no de la posición); por eso el código usa `.iloc[i]`.
- Datos: ningún NA a propósito; los NA llegan en la página siguiente ("NA y NaN").
