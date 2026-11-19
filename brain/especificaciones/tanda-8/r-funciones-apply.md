# Especificación: Funciones propias y la familia apply (r-funciones-apply)

- Ruta: `r-base` (Programación con datos), orden 9, tanda 8
- Prerrequisitos: "if, for y while en R", "Listas y data frames"
- Siguientes: (ninguno en el catálogo)
- Aparece: SM142002, UD4
- Resumen del catálogo: "Escribir una función en R y aplicarla a las filas o columnas de una tabla."
- Fuente del catálogo: "ISLR2 lab 3.6.7 y 6.5.1"
- Archivo: `biblioteca/conceptos/r-funciones-apply.html`. Grupo "Programación con datos": la imagen central es una tabla con un barrido
  y una "máquina" función, no una fórmula.

## Imagen central

**La tabla y la máquina.** Una matriz de notas inventadas (3 alumnos x 4 materias) a la izquierda y, a la derecha, una "máquina"
dibujada como una caja con su encabezado escrito: `aprobadas(v, umbral = 6)`. La máquina recibe un vector (una tajada de la tabla) y
devuelve un número: cuántas notas del vector llegan al umbral.

```
        mat est prog ing
ana       8   6    9   7
luis      6   4    9   9
eva      10   8    9   5
```

Qué se ve y se manipula:
- **Barrido**: una banda `--accent` que recorre la tabla. Con **MARGIN = 1** la banda es horizontal y baja fila por fila; cada fila entra a
  la máquina y su resultado cae en una **columna de salida** a la derecha (`ana 4`, `luis 3`, `eva 3`). Con **MARGIN = 2** la banda es
  vertical, recorre columnas y los resultados caen en una **fila de salida** debajo (`mat 2`, `est 1`, `prog 3`, `ing 2` con umbral 7).
  La salida conserva los nombres del margen elegido: ese es el dibujo de "MARGIN es lo que se conserva".
- **Deslizador umbral** (4 a 10, por defecto 6) conectado al argumento por defecto de la máquina; un interruptor "usar el valor por defecto"
  que, apagado, muestra `umbral = 7` escrito en la llamada.
- **Celdas editables** de la tabla (enteros 0 a 10).
- **Selector de herramienta**: `for` a mano / `apply` / `sapply` / `lapply`. En `for` a mano se ve el bucle llenar `por_fila[i]` uno por uno;
  en `apply` el mismo resultado sale de una línea. En `sapply`/`lapply` la entrada cambia a una lista de vectores de distinto largo
  (`a = c(8, 6)`, `b = c(4, 9, 9)`) y la salida se dibuja como vector con nombres (`sapply`) o como una pila de tarjetas `$a`, `$b` (`lapply`).
- **Casilla "agregar columna nombre"** (paso 7): la tabla se convierte en data frame con una primera columna de texto; al aplicar, se
  muestra la matriz intermedia de `as.matrix(df)`: todas las celdas pasan a texto con comillas y relleno (`" 8"`, `"10"`), y las
  comparaciones se tiñen de `--bad` donde comparan texto.

Resultados reales (R 4.6.1): `apply(notas, 1, aprobadas)` = `ana 4, luis 3, eva 3`; `apply(notas, 2, aprobadas, umbral = 7)` = `mat 2,
est 1, prog 3, ing 2`; `rowMeans` = 7.5, 7.0, 8.0; `colMeans` = 8, 6, 9, 7.

## Hipótesis inicial

"Tienes una tabla de notas y una regla (contar materias aprobadas). Si la aplicas 'por filas', ¿qué obtienes: un número por alumno o uno
por materia? ¿Y qué crees que significa el 1 en `apply(notas, 1, ...)`?"

## Pasos (7)

### Paso 1. Una regla aplicada muchas veces
- Idea: cuando haces el mismo cálculo para cada alumno, conviene escribir la regla una vez y aplicarla a cada uno.
- Escenario: la tabla sin código ni máquina; tres tarjetas de alumno. Nada se calcula hasta responder.
- Chequeo (predicción sin símbolos): "Quieres saber cuántas materias aprobó cada alumno (aprobar es sacar 6 o más). ¿Cuántos números vas a
  obtener y cuál es el de luis?"
  - Correcta: "Tres números, uno por alumno; luis aprobó 3" (6, 9, 9; el 4 no llega).
  - "Cuatro números": eso sería una cuenta por materia.
  - "Tres números; luis aprobó 2": olvida que 6 cuenta (es "6 o más").
  - "Un solo número": eso sería el total de toda la tabla (10).

### Paso 2. Escribir la regla: function
- Idea: `nombre <- function(argumentos) { cuerpo; return(resultado) }` guarda una receta que se llama con datos distintos.
- Escenario: aparece la máquina con su cuerpo visible (un `for` con un `if` adentro, lo de "if, for y while en R"). Un vector de prueba
  entra y la máquina cuenta en vivo.
- Código (R):
  ```r
  aprobadas <- function(v, umbral = 6) {
    cuenta <- 0
    for (x in v) {
      if (x >= umbral) {
        cuenta <- cuenta + 1
      }
    }
    return(cuenta)
  }
  ```
- Chequeo (cálculo con datos en vivo): "¿Qué devuelve `aprobadas(c(6, 4, 9, 9))`? Ahora edita el 4 a 5 en la tabla: ¿cambia?"
  - Correcta: "3, y sigue en 3 con el 5" (5 tampoco llega a 6).
  - "4": el 4 no cumple `>= 6`.
  - "2": el 6 sí cumple `>=`.
  - "28": eso sería la suma, no la cuenta.
- Citas: ISLR2 PDF 131-132 (impresas 120-121), 3.6.7 Writing Functions: la primera función propia del libro y cómo R la muestra al escribir
  su nombre sin paréntesis; ISLR2 PDF 227 (impresa 216), 5.3.4: `alpha.fn <- function(data, index)`, una función que luego usa `boot()`.
- Profundizar ("¿Hace falta `return`?"): R devuelve el valor de la última expresión; ISLR2 PDF 546 (impresa 535) lo dice al escribir
  `fit.svd` sin `return()`. Aquí se deja `return(cuenta)` por claridad.

### Paso 3. Argumentos con valor por defecto
- Idea: `umbral = 6` en la cabecera es un valor por defecto; si lo pasas, manda el tuyo; si no, se usa el 6. Si no hay defecto y no lo pasas, error.
- Escenario: deslizador umbral e interruptor "usar el valor por defecto". La llamada escrita bajo la máquina cambia:
  `aprobadas(c(8, 6, 9, 7))` frente a `aprobadas(c(8, 6, 9, 7), umbral = 7)`.
- Chequeo (cálculo con datos en vivo): "¿Qué devuelven `aprobadas(c(8, 6))` y `aprobadas(c(8, 6), 7)`?"
  - Correcta: "2 y 1". Con el defecto 6, aprueban 8 y 6; con 7, solo 8. El 7 sin nombre ocupa la segunda posición: `umbral`.
  - "2 y 2": el 7 sí se usó; ocupa el lugar de `umbral` por posición.
  - "Error en la segunda": pasar argumentos por posición es válido (lo muestra el material de UD4 con `seq`).
  - "1 y 1": la primera usa el defecto 6, no 7.
- Trampa breve (salida real): sin valor por defecto, `f <- function(v, umbral) sum(v >= umbral); f(c(8, 6))` da
  `Error in f(c(8, 6)) : argument "umbral" is missing, with no default`.
- Citas: ISLR2 PDF 546 (impresa 535), 12.5.2: `fit.svd <- function(X, M = 1)`, una función real con un argumento por defecto; prog4html
  ancla `funciones`: argumentos con nombre y por posición en `seq(from = 2, to = 20, by = 2)`. Para comparar con Python: Think Python
  PDF 176-177 (impresas 155-156), parámetros opcionales.

### Paso 4. Aplicar a cada fila: del for a apply
- Idea: `apply(notas, 1, aprobadas)` hace lo mismo que un `for` que pasa cada fila a la función y guarda el resultado.
- Escenario: selector en "`for` a mano": el barrido horizontal baja fila por fila y llena `por_fila[1..3]`. Luego selector en "`apply`": la
  misma animación en una sola línea, y la salida aparece con nombres (`ana luis eva`).
- Chequeo (cálculo con datos en vivo): "Cambia la nota de eva en ing de 5 a 6. ¿Qué devuelve ahora `apply(notas, 1, aprobadas)`?"
  - Correcta: `ana 4, luis 3, eva 4`.
  - `ana 4, luis 3, eva 3`: el 6 ahora cuenta.
  - `4 3 4` sin nombres: `apply` conserva los nombres de las filas (el `for` a mano no, a menos que se los pongas).
  - Un vector de 4 números: eso es por columnas.

### Paso 5. MARGIN es lo que se conserva (destacado con predicción)
- Idea: el segundo argumento de `apply` dice qué dimensión sobrevive en el resultado: 1 = una salida por fila, 2 = una salida por columna.
- Escenario: interruptor MARGIN 1 / 2; el barrido cambia de horizontal a vertical y la salida cambia de columna a fila.
- `.destacado` con predicción (la confusión natural: "MARGIN = 1 recorre hacia abajo, así que da una cuenta por columna", y el cruce con
  `axis` de NumPy/pandas):
  "¿Cuántos números devuelve `apply(notas, 2, aprobadas, umbral = 7)` y cuál es el de est?"
  - Correcta: "4 números (uno por materia); est = 1" (6, 4, 8: solo el 8 llega a 7).
  - "3 números": eso es MARGIN 1.
  - "4 números; est = 2": con umbral 6 serían 2; aquí `umbral = 7` se pasa como argumento extra después de la función.
  - "Error: `apply` no acepta más argumentos": todo lo que va después de la función se le entrega a ella.
  Después de resolver, mostrar la tabla de traducción: R `MARGIN = 1` <-> pandas `df.apply(f, axis=1)` (una salida por fila);
  R `MARGIN = 2` <-> pandas `axis=0` (una por columna). En R el número nombra lo que se conserva; en pandas, por dónde se aplica. Los dos
  dan lo mismo aquí, pero los números no coinciden: 2 en R es 0 en pandas.
- Citas: ISLR2 PDF 541 (impresa 530), 12.5.1: `apply(USArrests, 2, mean)` y la explicación de que el segundo argumento elige filas (1) o
  columnas (2); ISLR2 PDF 542 (impresa 531): `apply(USArrests, 2, var)`; ISLR2 PDF 285 (impresa 274): `apply(cv.errors, 2, mean)` para promediar
  el error de validación por tamaño de modelo.

### Paso 6. lapply y sapply: listas de cosas de distinto largo
- Idea: cuando los datos no son una tabla sino una lista de vectores, `lapply` aplica la función a cada elemento y devuelve una lista;
  `sapply` hace lo mismo e intenta simplificar el resultado a un vector.
- Escenario: selector en `lapply` / `sapply`; entrada `list(a = c(8, 6), b = c(4, 9, 9))`. Salida como tarjetas (`$a [1] 2`, `$b [1] 2`) o
  como vector `a 2 b 2`.
- Chequeo (elección con explicación): "¿Qué clase de objeto devuelve `sapply(grupos, aprobadas)` y cuál `lapply(grupos, aprobadas)`?"
  - Correcta: "`sapply`, un vector numérico con nombres; `lapply`, una lista".
  - "Los dos una lista": `sapply` simplifica cuando cada resultado es un solo número.
  - "Los dos un vector": `lapply` nunca simplifica.
  - "`sapply` una matriz": solo si cada resultado tuviera el mismo largo mayor que 1 (ver la sorpresa abajo).
- Sorpresa real (mostrar después): si la función devuelve vectores, `sapply(list(a = c(8, 6), b = c(4, 9, 9)), function(v) v[v >= 6])`
  devuelve una **matriz** 2 x 2 (`a: 8 6`, `b: 9 9`) porque los dos resultados midieron 2; con largos distintos devolvería una lista. Por eso
  existe `vapply`, que exige el tipo de salida (ver `codigo3`).
- Cita: prog4 p.17 (UD4): "los data frames son listas de vectores de igual magnitud" (por eso `sapply(df, mean)` recorre columnas).
  Aclarar que el material de UD4 no trae `function` ni la familia apply; aquí se ve con ISLR2.

### Paso 7. apply sobre un data frame con texto (trampa)
- Idea: `apply` convierte primero la tabla en matriz, y una matriz tiene un solo tipo: si hay una columna de texto, todo se vuelve texto.
- Escenario: casilla "agregar columna nombre". Aparece la matriz intermedia real de `as.matrix(df)`:
  ```
       nombre mat  est prog ing
  ana  "ana"  " 8" "6" "9"  "7"
  luis "luis" " 6" "4" "9"  "9"
  eva  "eva"  "10" "8" "9"  "5"
  ```
  Notar el relleno con espacio (`" 8"`, `" 6"`) que R agrega para alinear con `"10"`.
- **Trampa / contraejemplo de la página.** Chequeo (predicción antes de tocar): "Con la columna `nombre`, ¿qué devuelve
  `apply(df, 2, mean)`?"
  - Correcta: "`NA` en las cinco columnas, con avisos `argument is not numeric or logical`". Todas las columnas llegaron como texto.
  - "8, 6, 9, 7 y NA para nombre": eso haría `sapply` sobre las columnas, que sí respeta el tipo de cada una.
  - "Error": R no se detiene; avisa y devuelve `NA`.
  - "Las medias correctas": `apply` no ve números, ve `" 8"` y `"10"`.
- Después: `apply(df, 1, aprobadas, umbral = 7)` da `ana 3, luis 3, eva 3`, pero lo correcto es `ana 3, luis 2, eva 3`. Compara texto
  con texto: `"luis" >= "7"` es TRUE (las letras van después de los dígitos) y `" 6"`, `"10"` dan FALSE por el espacio y el orden alfabético.
  Con umbral 6 el resultado sale correcto **por casualidad** (`4 3 3`): el nombre suma uno y el relleno resta uno. Es el peor tipo de error:
  semántico y a veces invisible. Arreglo: `apply(df[, -1], 1, aprobadas)` o trabajar con la matriz numérica.
- Python, en el mismo caso: `df.apply(aprobadas, axis=1)` se detiene con `TypeError: '>=' not supported between instances of 'str' and
  'int'`, y `df.mean()` con `TypeError: Could not convert ['analuiseva'] to numeric`. Python grita donde R calla.
- Cita: islr2 PDF 183 (impresa 172), 4.7.1: `cor(Smarket[, -9])`, el libro quita la columna cualitativa `Direction` antes de calcular,
  por la misma razón. (Está en el mapa: "hay que quitar la columna cualitativa `Direction` para correlacionar".)
- Enlace: "Tipos y coerción" (la escalera de tipos: un texto vuelve texto a todo el vector).

## Vida real (Python y R)

Datos: los del recorrido (matriz de notas inventada 3 x 4). El programa define `aprobadas` con un bucle explícito, la aplica a cada fila y a
cada columna con `for`, y cierra con la forma de librería (`apply`, `sapply`, `lapply` en R; `DataFrame.apply` y una comprensión de
diccionario en Python).

### R (corrido con R 4.6.1; archivo `apply.R`)

```r
notas <- matrix(c(8, 6, 9, 7,
                  6, 4, 9, 9,
                  10, 8, 9, 5),
                nrow = 3, byrow = TRUE,
                dimnames = list(c("ana", "luis", "eva"),
                                c("mat", "est", "prog", "ing")))

aprobadas <- function(v, umbral = 6) {
  cuenta <- 0
  for (x in v) {
    if (x >= umbral) {
      cuenta <- cuenta + 1
    }
  }
  return(cuenta)
}

por_fila <- numeric(nrow(notas))
for (i in seq_len(nrow(notas))) {
  por_fila[i] <- aprobadas(notas[i, ])
}
por_col <- numeric(ncol(notas))
for (j in seq_len(ncol(notas))) {
  por_col[j] <- aprobadas(notas[, j], umbral = 7)
}
print(por_fila)
print(por_col)

print(apply(notas, 1, aprobadas))
print(apply(notas, 2, aprobadas, umbral = 7))
print(sapply(list(a = c(8, 6), b = c(4, 9, 9)), aprobadas))
print(lapply(list(a = c(8, 6), b = c(4, 9, 9)), aprobadas))
```

Salida real:
```
[1] 4 3 3
[1] 2 1 3 2
 ana luis  eva 
   4    3    3 
 mat  est prog  ing 
   2    1    3    2 
a b 
2 2 
$a
[1] 2

$b
[1] 2

```

### Python (corrido con Python 3.13.5 y pandas 2.2.3; archivo `apply.py`)

```python
import pandas as pd

notas = pd.DataFrame([[8, 6, 9, 7],
                      [6, 4, 9, 9],
                      [10, 8, 9, 5]],
                     index=["ana", "luis", "eva"],
                     columns=["mat", "est", "prog", "ing"])

def aprobadas(v, umbral=6):
    cuenta = 0
    for x in v:
        if x >= umbral:
            cuenta = cuenta + 1
    return cuenta

por_fila = [0] * notas.shape[0]
for i in range(notas.shape[0]):
    por_fila[i] = aprobadas(notas.iloc[i, :])
por_col = [0] * notas.shape[1]
for j in range(notas.shape[1]):
    por_col[j] = aprobadas(notas.iloc[:, j], umbral=7)
print(por_fila)
print(por_col)

print(notas.apply(aprobadas, axis=1).to_dict())
print(notas.apply(aprobadas, axis=0, umbral=7).to_dict())
grupos = {"a": [8, 6], "b": [4, 9, 9]}
print({k: aprobadas(v) for k, v in grupos.items()})
```

Salida real:
```
[4, 3, 3]
[2, 1, 3, 2]
{'ana': 4, 'luis': 3, 'eva': 3}
{'mat': 2, 'est': 1, 'prog': 3, 'ing': 2}
{'a': 2, 'b': 2}
```

Índices: `notas[i, ]` con `i` de 1 a 3 en R; `notas.iloc[i, :]` con `i` de 0 a 2 en Python. R `MARGIN = 1` corresponde a pandas `axis=1`;
R `MARGIN = 2` a pandas `axis=0`. Python no tiene un `lapply` separado: la comprensión de diccionario hace el papel de `sapply`/`lapply`
(conserva los nombres como claves).

### Ids semánticos (compartidos)

| id | R | Python |
|---|---|---|
| `importar` | (no existe) | `import pandas as pd` |
| `datos` | `notas <- matrix(...)` | `notas = pd.DataFrame(...)` |
| `def` | `aprobadas <- function(v, umbral = 6) {` | `def aprobadas(v, umbral=6):` |
| `cuenta0` | `cuenta <- 0` | `cuenta = 0` |
| `for-x` | `for (x in v) {` | `for x in v:` |
| `if` | `if (x >= umbral) {` | `if x >= umbral:` |
| `contar` | `cuenta <- cuenta + 1` | `cuenta = cuenta + 1` |
| `return` | `return(cuenta)` | `return cuenta` |
| `fila0` | `por_fila <- numeric(nrow(notas))` | `por_fila = [0] * notas.shape[0]` |
| `for-i` | `for (i in seq_len(nrow(notas))) {` | `for i in range(notas.shape[0]):` |
| `llamar-fila` | `por_fila[i] <- aprobadas(notas[i, ])` | `por_fila[i] = aprobadas(notas.iloc[i, :])` |
| `col0` | `por_col <- numeric(ncol(notas))` | `por_col = [0] * notas.shape[1]` |
| `for-j` | `for (j in seq_len(ncol(notas))) {` | `for j in range(notas.shape[1]):` |
| `llamar-col` | `por_col[j] <- aprobadas(notas[, j], umbral = 7)` | `por_col[j] = aprobadas(notas.iloc[:, j], umbral=7)` |
| `print-fila` | `print(por_fila)` | `print(por_fila)` |
| `print-col` | `print(por_col)` | `print(por_col)` |
| `apply-1` | `print(apply(notas, 1, aprobadas))` | `print(notas.apply(aprobadas, axis=1).to_dict())` |
| `apply-2` | `print(apply(notas, 2, aprobadas, umbral = 7))` | `print(notas.apply(aprobadas, axis=0, umbral=7).to_dict())` |
| `grupos` | (dentro de las dos líneas siguientes) | `grupos = {...}` |
| `sapply` | `print(sapply(list(...), aprobadas))` | `print({k: aprobadas(v) for k, v in grupos.items()})` |
| `lapply` | `print(lapply(list(...), aprobadas))` | (no existe) |

### Foto de estado por línea ejecutada (resumen)

| momento | id | variables |
|---|---|---|
| fila 1 (ana) | `llamar-fila` | entra `v = 8 6 9 7`; dentro, `cuenta` 1, 2, 3, 4 |
| fila 2 (luis) | `llamar-fila` | `v = 6 4 9 9`; `cuenta` 1, 1, 2, 3 (el 4 no suma) |
| fila 3 (eva) | `llamar-fila` | `v = 10 8 9 5`; `cuenta` 1, 2, 3, 3 |
| tras filas | `print-fila` | `por_fila = 4 3 3` |
| col 1 (mat), umbral 7 | `llamar-col` | `v = 8 6 10`; `cuenta` final 2 |
| col 2 (est) | `llamar-col` | `v = 6 4 8`; `cuenta` final 1 |
| col 3 (prog) | `llamar-col` | `v = 9 9 9`; 3 |
| col 4 (ing) | `llamar-col` | `v = 7 9 5`; 2 |
| cierre | `apply-1`, `apply-2` | mismos números, ahora con nombres |

Sugerencia: animar línea por línea las llamadas de la fila 2 y de la columna 2 (las que tienen una nota que no cuenta) y las demás a nivel
de llamada, para no hacer 28 eventos repetidos.

Visual: la tabla con el barrido y la máquina del escenario; la columna o fila de salida se llena al ritmo de `por_fila[i]` y `por_col[j]`.

### Predicción antes de reproducir (`#vrPred`)
"¿Cuántas veces se ejecuta la línea `contar` (`cuenta <- cuenta + 1`) en todo el bloque de los dos `for`?" Respuesta: 10 + 8 = 18
(filas: 4 + 3 + 3 = 10; columnas con umbral 7: 2 + 1 + 3 + 2 = 8). Distractores: "12" (cree que suma una vez por nota de la tabla),
"24" (12 notas por dos recorridos), "10" (olvida las columnas).

### Trampas reales (retos `codigo1`, `codigo2`, `codigo3`)

`codigo1`: `apply` sobre un data frame con texto. Código corrido:
```r
df <- data.frame(nombre = c("ana", "luis", "eva"), notas)
print(apply(df, 2, mean))
print(sapply(df[, -1], mean))
```
Salida real:
```
nombre    mat    est   prog    ing 
    NA     NA     NA     NA     NA 
Warning messages:
1: In mean.default(newX[, i], ...) :
  argument is not numeric or logical: returning NA
(... 5 avisos iguales)
 mat  est prog  ing 
   8    6    9    7 
```
Pregunta: "¿Por qué `sapply` sí funciona?" Respuesta: `sapply` recorre el data frame como lista de columnas y cada una conserva su tipo;
`apply` lo convierte antes en una matriz de texto. Python: `df.mean()` da `TypeError: Could not convert ['analuiseva'] to numeric` y
`df.mean(numeric_only=True)` da `{'mat': 8.0}` (en el ejemplo de una sola columna numérica).

`codigo2`: el resultado correcto por casualidad. Código corrido:
```r
print(apply(df, 1, aprobadas, umbral = 7))
print(apply(notas, 1, aprobadas, umbral = 7))
```
Salida real: `ana 3, luis 3, eva 3` y luego `ana 3, luis 2, eva 3`. Pregunta: "¿Qué alumno sale mal y por qué?" Respuesta: luis, porque `"luis" >= "7"`
es TRUE (texto contra texto) y suma una aprobada falsa. Mostrar la matriz lógica real de `apply(df, 1, function(v) v >= 7)`:
```
         ana  luis   eva
nombre  TRUE  TRUE  TRUE
mat    FALSE FALSE FALSE
est    FALSE FALSE  TRUE
prog    TRUE  TRUE  TRUE
ing     TRUE  TRUE FALSE
```
(`" 8" >= "7"` y `"10" >= "7"` son FALSE en orden alfabético.)

`codigo3`: `sapply` con entrada vacía no devuelve un vector. Código corrido:
```r
print(sapply(list(), length))
print(vapply(list(), length, numeric(1)))
```
Salida real: `list()` y `numeric(0)`. Pregunta: "¿Qué devuelve `sapply` si la lista viene vacía?" Respuesta: una lista vacía, no un vector;
el código que después haga `sum(...)` o compare puede romperse. `vapply` exige el tipo y devuelve siempre un vector.

`p.vr-nota`: "En la práctica: `apply(notas, 1, f)` sobre una matriz numérica; `sapply(df, f)` o `vapply(df, f, numeric(1))` sobre las columnas
de un data frame; `rowMeans`, `colMeans`, `rowSums` cuando la función es la media o la suma (son más rápidas)."

`details.profundizar` ("Funciones anónimas y `...`"): `apply(notas, 1, function(v) sum(v >= 6))` hace lo mismo sin nombrar la función (es la
versión vectorizada de `aprobadas`: `sum(v >= umbral)`); `function(object, newdata, id, ...)` de ISLR2 PDF 284 (impresa 273) muestra los tres
puntos, que reciben argumentos extra y los pasan a otra función, como hace `apply` con `umbral = 7`. Resultado real de las versiones de
librería: `rowMeans(notas)` = `7.5 7.0 8.0`, `colMeans(notas)` = `8 6 9 7`.

## Retos (9)

1. `ojo-margin` (ojo clínico, 5 rondas al azar, aprueba con 4 de 5): se genera una matriz de r x c (r, c entre 2 y 5, con nombres) y una llamada
   `apply(m, MARGIN, f)` con MARGIN al azar y f en {`sum`, `max`, `length`}; Francisco elige cuántos números devuelve y con qué nombres
   (los de filas o los de columnas). Pista: "MARGIN es lo que se conserva".
2. `ojo-herramienta` (ojo clínico, 5 rondas): una situación y una de cuatro herramientas (`apply`, `sapply`, `lapply`, `for`). Banco:
   "media por columna de un data frame con una columna de texto" (`sapply` sobre las numéricas); "máximo por fila de una matriz numérica"
   (`apply`, 1); "a cada elemento de una lista de vectores de distinto largo, quitarle los NA" (`lapply`, devuelve vectores de largos distintos);
   "ajustar un modelo por cada grado y guardar el error" (`for`, como en ISLR2); "contar aprobadas por materia" (`apply`, 2).
3. `construir-tabla` (construir): editando celdas y el umbral, lograr: (a) que `apply(notas, 1, aprobadas)` dé `4 4 4`; (b) que
   `apply(notas, 2, aprobadas, umbral = 7)` dé un 0 en alguna materia; (c) que `rowMeans` y el número de aprobadas ordenen a los alumnos
   de forma distinta (un alumno con mejor media pero menos aprobadas). Se valida con la función real.
4. `a-mano-apply` (a mano, datos al azar, reintentable): matriz 3 x 3 al azar con notas de 3 a 10 y umbral al azar entre 5 y 8; escribir el
   resultado de `apply(m, 2, aprobadas, umbral = u)`. Pistas: 1) "2 = una salida por columna"; 2) "cuenta las notas mayores o iguales";
   3) muestra la primera columna resuelta.
5. `a-mano-defecto` (a mano, datos al azar): se da una función con un valor por defecto (`aprobadas` u otra inventada como
   `bono <- function(x, extra = 1) x + extra`) y tres llamadas (sin el argumento, por posición, por nombre); escribir los tres resultados.
6. `cazar-funcion` (cazar el error, 3 variantes; cada una una función de R de 5 a 7 líneas con una línea mal):
   - A: `aprobadas` con `cuenta <- 0` **dentro** del `for` (siempre devuelve 0 o 1).
   - B: `apply(notas, 1, aprobadas(umbral = 7))` (llama a la función en vez de pasarla). Salida real:
     `Error in aprobadas(umbral = 7) : argument "v" is missing, with no default` y `Calls: apply -> match.fun -> aprobadas`.
   - C: `por_fila[i] <- aprobadas(notas[, i])` dentro del `for` por filas (toma columnas en vez de filas).
7. `prop-apply` (propiedades, opción múltiple, `mezclar: true`, reintentable): "¿Por qué `apply(df, 2, mean)` da NA si `df` tiene una columna
   de nombres?" Correcta: "Porque `apply` convierte `df` en una matriz y una matriz tiene un solo tipo: todo pasa a texto". Pistas por error:
   "porque `mean` no acepta data frames" -> "`sapply(df[, -1], mean)` le pasa columnas de un data frame y funciona"; "porque hay NA en las
   notas" -> "no hay ningún NA en los datos; mira la matriz intermedia"; "porque MARGIN debería ser 1" -> "con 1 también saldría NA: el
   problema es el tipo, no la dirección".
   Segunda pregunta: "¿Qué hace `sapply` si cada resultado es un vector de largo 2?" Correcta: "devuelve una matriz" (salida real del paso 6).
8. Trampas reales `codigo1`, `codigo2`, `codigo3`.

RETOS = ["ojo-margin", "ojo-herramienta", "construir-tabla", "a-mano-apply", "a-mano-defecto", "cazar-funcion", "prop-apply", "codigo1", "codigo2", "codigo3"]

## Memoria

`B.ordenar`: armar la función y su uso (R):
1. `aprobadas <- function(v, umbral = 6) {`
2. `  cuenta <- 0`
3. `  for (x in v) {`
4. `    if (x >= umbral) cuenta <- cuenta + 1`
5. `  }`
6. `  return(cuenta)`
7. `}`
8. `apply(notas, 1, aprobadas, umbral = 7)`
Distractores: `aprobadas <- function(v, umbral) {` (sin defecto), `apply(notas, 1, aprobadas(umbral = 7))`, `  for (x in v) { cuenta <- 0`.

Tarjetas (7):
- ¿Cómo se define una función en R? -> `nombre <- function(argumentos) { cuerpo }`; devuelve `return(...)` o la última expresión.
- ¿Qué hace `umbral = 6` en la cabecera? -> Es el valor por defecto: se usa si no pasas `umbral`.
- `apply(m, 1, f)` frente a `apply(m, 2, f)` -> Una salida por fila frente a una por columna: MARGIN es lo que se conserva.
- ¿Cómo le pasas un argumento extra a la función dentro de `apply`? -> Después de la función: `apply(m, 1, f, umbral = 7)`.
- `lapply` frente a `sapply` -> `lapply` siempre devuelve lista; `sapply` simplifica a vector o matriz si puede.
- ¿Por qué no usar `apply` con un data frame que tiene texto? -> Lo convierte en matriz de texto: medias NA y comparaciones alfabéticas.
- R `MARGIN = 2` en pandas -> `df.apply(f, axis=0)`: una salida por columna.

## Citas (11)

| id de fuente | página PDF | impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| islr2 | 131 | 120 | 3.6.7 Writing Functions | inicio de la sección: para qué escribir una función propia | paso 2 |
| islr2 | 132 | 121 | 3.6.7 Writing Functions | `LoadLibraries <- function() {...}`, los errores antes de definirla y cómo R muestra el cuerpo | paso 2 |
| islr2 | 227 | 216 | 5.3.4 The Bootstrap | `alpha.fn <- function(data, index)`: una función que recibe datos y posiciones y devuelve un número | paso 2 |
| islr2 | 284 | 273 | 6.5.1 Choosing Among Models | `predict.regsubsets <- function(object, newdata, id, ...)`: una función escrita a mano, con `...` | profundizar de la vida real |
| islr2 | 285 | 274 | 6.5.1 (validación cruzada) | `apply(cv.errors, 2, mean)`: promedio por columna del error de validación | paso 5 |
| islr2 | 541 | 530 | 12.5.1 Principal Components Analysis | `apply(USArrests, 2, mean)` y la explicación de MARGIN: 1 filas, 2 columnas | paso 5 (destacado) |
| islr2 | 542 | 531 | 12.5.1 | `apply(USArrests, 2, var)`: la varianza de cada variable | paso 5 |
| islr2 | 546 | 535 | 12.5.2 Matrix Completion | `fit.svd <- function(X, M = 1)`: argumento por defecto y retorno sin `return()` | paso 3 y profundizar del paso 2 |
| islr2 | 183 | 172 | 4.7.1 The Stock Market Data | `cor(Smarket[, -9])`: quitar la columna cualitativa antes de calcular | paso 7 |
| prog4html | ancla `funciones` | - | Funciones (UD4) | argumentos por nombre y por posición: `seq(from = 2, to = 20, by = 2)`, y el error de `seq(20, 2, 2)` | paso 3 |
| prog4 | 17 | 17 | Data frames (UD4) | los data frames son listas de vectores de igual longitud (verificado con pdftotext en p.17) | paso 6 |
| thinpython | 176 | 155 | Cap. 13: Optional Parameters | parámetros con valor por defecto en Python (`num=10`) | paso 3 (comparación) |

(12 filas.)

## Riesgos y notas para quien construye

- **El material de la materia no trae `function()` ni la familia apply** ("No aparece" de `sm142002-programacion.md`; R sesión 1 nombra
  "creación de funciones propias" en el programa pero no hay material). Decirlo en la página; las citas de técnica salen de ISLR2.
- **La trampa de `apply(df, 1, ...)` con umbral 6 da el resultado correcto por casualidad** (`4 3 3`). No usar umbral 6 para demostrar el
  error; usar umbral 7 (`luis` 3 en vez de 2) y la matriz lógica real. Si se cambian las notas por defecto, recalcular todo con R.
- **Relleno de `as.matrix`**: el espacio en `" 8"` y `" 6"` aparece porque la columna `mat` tiene un `10`. Es comportamiento real de
  `as.matrix.data.frame` (formatea los números al mismo ancho). Mostrarlo tal cual; no es un error de la página.
- **`axis` de pandas frente a `MARGIN` de R**: los números se cruzan (MARGIN 2 = axis 0). Además, en NumPy `np.mean(m, axis=0)` da una media
  por columna; ojo con explicar `axis` como "lo que se conserva": en NumPy/pandas es el eje que se recorre o se colapsa. La página debe
  presentar la tabla de equivalencias, no una regla única para ambos.
- **`print(lapply(...))` deja una línea en blanco final** en la salida real; respetarla o recortarla igual en los dos lados de la comparación.
- **prog4 p.17**: la frase "los data frames son listas de vectores de igual magnitud" está en la p.17 (comprobado con pdftotext); el mapa da el rango p.16-17.
  que la frase está en p.17, usar la página donde esté la frase exacta (las dos están verificadas en el mapa como rango).
- `cazar-funcion` variante B ya está corrida (mensaje real arriba); `apply(notas, 1, function(v) sum(v >= 6))` da `4 3 3` (verificado).
  dentro de `aprobadas`).
- ISLR2 no usa `sapply`/`lapply` en los labs mapeados (solo `apply`); no citar ISLR2 para ellas.
