# Especificacion: Condicionales y lógica booleana (condicionales-booleanos)

- Ruta: `python-base` (grupo Programación con datos), orden 3, tanda 8
- Archivo: `biblioteca/conceptos/condicionales-booleanos.html`
- Prerrequisitos: ["Tipos y coerción"]
- Siguientes: ["Funciones y el marco de llamada"]
- Aparece: [{ materia: "SM142002", ud: "UD1" }]
- Resumen del catálogo: "Una condición es un valor verdadero o falso, y de él depende qué rama del programa se ejecuta."
- Fuente declarada: Think Python cap. 5, Python Workout cap. 1

## Imagen central

**Un riel de decisiones (diagrama de flujo vertical) por el que cae una ficha con un número.**
A la derecha, el escenario es un SVG con rombos apilados de arriba abajo (`nota < 5`, `nota < 7`, `nota < 9`) y, a la
derecha de cada rombo, una caja de salida (suspenso, aprobado, notable, sobresaliente). La ficha (un círculo con la nota)
entra arriba y baja: en cada rombo se pinta el valor de la condición con números vivos (`6.8 < 5` -> `False` en `--bad`,
`6.8 < 7` -> `True` en `--ok`), y la ficha sale por la primera rama verdadera. Los rombos que ya no se evalúan quedan
grises y punteados (eso hace evidente que con `elif` se ejecuta exactamente una rama y que lo de abajo ni se mira).

Controles concretos:
- Deslizador `nota` de 0 a 10 con paso 0.1, y seis fichas fijas (los datos inventados del recorrido: 3.5, 5.0, 6.8, 7.0, 9.2, 4.9)
  que se pueden soltar una a una con un botón "Soltar ficha".
- Contador "condiciones evaluadas" (cuántos rombos tocó la ficha).
- Según el paso se encienden capas:
  - capa `comparar`: un solo rombo y un panel "la condición es un valor" que muestra `nota >= 5` -> `True`/`False`.
  - capa `tabla`: dos interruptores (`aprobó`, `asistió al 80 %`) y la tabla de verdad de `and`, `or`, `not` con la fila activa resaltada.
  - capa `riel`: los tres rombos encadenados (if/elif/elif/else).
  - capa `reordenar`: los rombos se pueden arrastrar para cambiar el orden; el riel se recalcula (para la trampa).
  - capa `cortocircuito`: una condición compuesta `x != 0 and 10 / x > 2` con dos mitades; si la primera es `False`, la segunda queda tachada
    con la etiqueta "no se evalúa".
  - capa `verdad`: una bandeja de valores (`0`, `42`, `""`, `"0"`, `[]`, `None`) que se arrastran a un rombo `if valor:` y caen a "sí" o "no".
  - capa `vector`: una columna de notas (vector) frente a un rombo; en Python/R se muestra el choque (`ValueError` / `the condition has length > 1`)
    y al lado la máscara booleana que sí funciona.

Datos: notas inventadas de un examen sobre 10, con la escala española (suspenso < 5, aprobado < 7, notable < 9, sobresaliente desde 9).
La página dice que son inventadas.

## Hipotesis inicial

Caja "Antes de empezar, piénsalo tú": "Tienes cuatro cajas: suspenso, aprobado, notable y sobresaliente. Si le preguntas a
una nota primero '¿eres al menos 5?' y después '¿eres al menos 9?', ¿a qué caja llega un 9.2? Escribe qué crees que importa
más: la pregunta o el orden en que se hacen."
Se muestra de nuevo en el paso 4 (trampa del orden) con `#citaHipo`.

## Pasos (7)

### Paso 1. Una ficha, cuatro cajas
- Idea: un programa toma decisiones haciendo preguntas de sí o no, en orden, y se detiene en la primera respuesta "sí".
- Escenario: capa `riel` con los rombos SIN texto de condición (solo "¿menos de 5?", "¿menos de 7?", "¿menos de 9?" en palabras) y la ficha
  quieta arriba. No se suelta hasta responder.
- Chequeo (predicción antes de tocar, sin símbolos; opción múltiple): "La ficha 7.0 va a bajar. ¿En qué caja termina?"
  - Correcta: notable. Al soltarla se ve: no a la primera pregunta, no a la segunda, sí a la tercera.
  - "aprobado": confunde "menos de 7" con "hasta 7"; 7 no es menos que 7.
  - "sobresaliente": cree que sigue bajando hasta el final; se detiene en la primera respuesta "sí".
  - "en dos cajas a la vez": la ficha toma una sola salida.
- Cita: thinpython PDF 22 (programa = entrada, salida, matemática, ejecución condicional, repetición).

### Paso 2. Una condición es un valor
- Idea: `nota >= 5` no es una orden, es una expresión que vale `True` o `False` (tipo `bool`). Y `==` compara, `=` asigna.
- Escenario: capa `comparar`. El deslizador mueve la nota y el panel muestra `nota >= 5`, `nota == 5`, `nota != 5` con su valor vivo.
  Debajo, `type(nota >= 5)` -> `<class 'bool'>`, y en R `class(nota >= 5)` -> `"logical"` (conecta con "Tipos y coerción": `True + True` vale 2).
- Chequeo (cálculo con datos en vivo): el escenario fija `nota = 4.9` (la sexta ficha). "¿Cuánto vale `(nota >= 5) + (nota < 7)`?"
  Respuesta: 1 (`False + True` = 0 + 1). Pista si responde 2: "¿4.9 es mayor o igual que 5?". Si responde un booleano: "Al sumar, un booleano se convierte en 0 o 1".
- Profundizar: "¿Por qué `=` y `==` son distintos?" (asignar frente a comparar; `if nota = 5:` es SyntaxError en Python; en R `nota < -5` con espacio es una
  comparación, no una asignación: la trampa de `#environment` del material de clase).
- Citas: thinpython PDF 69 (Boolean Expressions); prog4html `#operadores-relacionales`.

### Paso 3. Y, o, no
- Idea: `and`, `or`, `not` combinan condiciones; la tabla de verdad se lee, no se memoriza.
- Escenario: capa `tabla`. Interruptores `aprobó` (nota >= 5) y `asistió` (asistencia >= 80). Se ve la tabla de 4 filas de `and` y de `or`, con
  la fila del estado actual iluminada; un tercer botón aplica `not`.
- Chequeo (elección con explicación): "Para tener el certificado hay que aprobar y asistir al 80 %. Ana: 9.2 y 60 %. Luis: 5.0 y 95 %.
  ¿Quién lo tiene con `aprobó and asistió`, y quién con `aprobó or asistió`?"
  Respuesta: con `and` solo Luis; con `or` los dos. Distractores: "con `or` solo Ana" (cree que `or` exige una sola verdadera, eso es `xor`);
  "con `and` los dos" (confunde `and` con `or`); "con `and` nadie" (no leyó la asistencia de Luis).
- Citas: thinpython PDF 70 (Logical Operators); prog4html `#operadores-lógicos`.

### Paso 4. Una sola rama, y el orden manda (TRAMPA)
- Idea: `if / elif / else` evalúa de arriba abajo y ejecuta exactamente una rama; si una condición amplia va primero, tapa a las de abajo.
- Escenario: capa `riel` + capa `reordenar`. Se muestra el código real al lado del riel. Francisco puede arrastrar los rombos.
  El contador "condiciones evaluadas" sube con cada ficha.
- Chequeo (predicción antes de tocar): el escenario muestra este orden ya cambiado:
  ```python
  if nota >= 5:
      etiqueta = "aprobado"
  elif nota >= 9:
      etiqueta = "sobresaliente"
  ```
  "¿Cuántas de las seis fichas terminan en sobresaliente?" Respuesta: 0. La rama `nota >= 9` nunca se alcanza (código muerto): 9.2 ya entró por
  `nota >= 5`. Distractor "1" (la 9.2): cree que Python busca la condición más específica. Distractor "2": no aplica.
  Tras responder, se muestra de nuevo la hipótesis del principio (`#citaHipo`) para comparar.
- Profundizar: "¿Anidar o encadenar?" (un `if` dentro de otro equivale a un `and`; Think Python recomienda simplificar con operadores lógicos).
- Citas: thinpython PDF 70 (Alternative Execution), PDF 71 (Chained y Nested Conditionals).

### Paso 5. Cortocircuito: a veces la segunda mitad ni se mira
- Idea: `A and B` no evalúa `B` si `A` es `False`; `A or B` no evalúa `B` si `A` es `True`. Sirve como guardián: `x != 0 and 10 / x > 2`.
- Escenario: capa `cortocircuito`. Deslizador `x` de −3 a 3 (enteros). Las dos mitades se pintan con su valor; si la primera decide, la segunda
  se tacha y un rótulo dice "no se evalúa". Con el orden invertido (`10 / x > 2 and x != 0`) y `x = 0` aparece `ZeroDivisionError`.
- Chequeo (predicción antes de tocar): "Con `x = 0`, ¿qué pasa con `x != 0 and 10 / x > 2`?" Correcta: vale `False` sin error.
  Distractores: "ZeroDivisionError" (cree que Python evalúa todo); "True" (cree que una división por cero da infinito y es mayor que 2:
  eso pasa en R, donde `10 / 0` da `Inf`, pero ni siquiera ahí se llega a evaluar con `&&`).
- Verificado: Python `x = 0; print(x != 0 and 10 / x > 2)` -> `False`. R `x <- 0; x != 0 && 10 / x > 2` -> `[1] FALSE`; R `10/0` -> `[1] Inf`.

### Paso 6. Qué cuenta como verdadero (DESTACADO con predicción)
- Idea: en un `if` cualquier valor se convierte en booleano: `0`, `""`, `[]`, `None` cuentan como falso; casi todo lo demás, como verdadero.
  De ahí sale la confusión natural del concepto: `if nota == 5 or 6:` **siempre entra**.
- Escenario: capa `verdad`. Bandeja con `0`, `42`, `""`, `"0"`, `[]`, `None`; se arrastran al rombo `if valor:`.
  Valores reales (verificados): `bool(0), bool(""), bool([]), bool(None), bool("0")` -> `False False False False True`; `42 and True` -> `True`;
  `0 or "vacio"` -> `vacio`; `not []` -> `True`.
- `.destacado` (predicción): "Quieres que entre solo si la nota es 5 o 6. Escribes `if nota == 5 or 6:`. Con `nota = 3`, ¿entra?"
  Respuesta: sí entra. Python lo lee como `(nota == 5) or 6`; `False or 6` vale `6`, que es verdadero. Lo correcto es `nota == 5 or nota == 6`
  (o `nota in (5, 6)`). Verificado: `print(nota == 5 or 6)` -> `6`. Es el reto `codigo1`.
- Chequeo (elección con explicación): "¿Cuál de estos valores hace que `if valor:` NO entre?" Opciones: `"0"`, `[0]`, `0.0`, `" "`.
  Correcta: `0.0`. Pistas: `"0"` es una cadena no vacía; `[0]` es una lista con un elemento; `" "` tiene un espacio, no está vacía.
- Cita: thinpython PDF 70 (cualquier número distinto de cero cuenta como `True`).

### Paso 7. Muchas notas a la vez: `if` no es una máscara
- Idea (lo más técnico): un `if` decide con UN booleano. Con un vector de notas hay que elegir: recorrer con un bucle, resumir (`any`/`all`)
  o usar una máscara booleana elemento a elemento (`&`, `|` en NumPy/pandas y en R). `and`/`&&` no son vectoriales; `&`/`|` sí, y en pandas
  necesitan paréntesis porque `&` tiene más prioridad que `>=`.
- Escenario: capa `vector`. Columna de notas `[7.0, 3.5]`; el rombo `if notas >= 5:` se rompe; al lado la máscara `[True, False]` filtra filas.
- Chequeo (elección con explicación): "En pandas, ¿cuál filtra a quien aprobó y asistió?"
  Correcta: `df[(df.nota >= 5) & (df.asistencia >= 80)]`.
  - `df[df.nota >= 5 and df.asistencia >= 80]`: `and` necesita un solo booleano -> `ValueError`.
  - `df[df.nota >= 5 & df.asistencia >= 80]`: sin paréntesis, `5 & df.asistencia` se hace primero y la comparación encadenada termina en `ValueError`
    (verificado: `ValueError The truth value of a Series is ambiguous...`).
  - `df[df.nota >= 5 && df.asistencia >= 80]`: `&&` no existe en Python (SyntaxError).
- Verificado con `df = pd.DataFrame({"nota": [7.0, 3.5, 9.2], "asistencia": [90, 95, 60]})`: la forma correcta devuelve solo la fila 0 (7.0, 90).
- Profundizar: "`&` y `&&` en R": `&` es vectorial, `&&` mira un solo valor (desde R 4.3 da error con vectores de longitud > 1); el material de clase lo
  dice en `#in`. En el material de la materia no hay `if` ni bucles de R: la página lo aclara.
- Citas: prog4 PDF 22 (filtrar filas de `mtcars` con `&` y `|`); prog4html `#in`.

## Vida real (Python y R)

Mismos datos que el recorrido: las seis notas. El programa clasifica cada nota con `if/elif/else` dentro de un bucle y cierra comparando con la
función de librería que hace lo mismo (`pd.cut` en Python, `cut` en R, ambas con `right=False` para que el 5.0 sea aprobado).

### Python (verificado con Python 3.13.5, pandas 2.2.3)

| id | línea |
|---|---|
| imp | `import pandas as pd` |
| (vacía) | |
| datos | `notas = [3.5, 5.0, 6.8, 7.0, 9.2, 4.9]` |
| acum | `etiquetas = []` |
| bucle | `for nota in notas:` |
| si1 | `    if nota < 5:` |
| r1 | `        etiqueta = "suspenso"` |
| si2 | `    elif nota < 7:` |
| r2 | `        etiqueta = "aprobado"` |
| si3 | `    elif nota < 9:` |
| r3 | `        etiqueta = "notable"` |
| sino | `    else:` |
| r4 | `        etiqueta = "sobresaliente"` |
| guardar | `    etiquetas.append(etiqueta)` |
| mostrar | `    print(nota, etiqueta)` |
| (vacía) | |
| lib | `lib = pd.cut(notas, bins=[0, 5, 7, 9, float("inf")], right=False,` |
| lib | `             labels=["suspenso", "aprobado", "notable", "sobresaliente"])` |
| compara | `print(list(lib) == etiquetas)` |

Código completo:
```python
import pandas as pd

notas = [3.5, 5.0, 6.8, 7.0, 9.2, 4.9]
etiquetas = []
for nota in notas:
    if nota < 5:
        etiqueta = "suspenso"
    elif nota < 7:
        etiqueta = "aprobado"
    elif nota < 9:
        etiqueta = "notable"
    else:
        etiqueta = "sobresaliente"
    etiquetas.append(etiqueta)
    print(nota, etiqueta)

lib = pd.cut(notas, bins=[0, 5, 7, 9, float("inf")], right=False,
             labels=["suspenso", "aprobado", "notable", "sobresaliente"])
print(list(lib) == etiquetas)
```
Salida real:
```
3.5 suspenso
5.0 aprobado
6.8 aprobado
7.0 notable
9.2 sobresaliente
4.9 suspenso
True
```

### R (verificado con R 4.6.1)

```r
notas <- c(3.5, 5.0, 6.8, 7.0, 9.2, 4.9)
etiquetas <- c()
for (nota in notas) {
  if (nota < 5) {
    etiqueta <- "suspenso"
  } else if (nota < 7) {
    etiqueta <- "aprobado"
  } else if (nota < 9) {
    etiqueta <- "notable"
  } else {
    etiqueta <- "sobresaliente"
  }
  etiquetas <- c(etiquetas, etiqueta)
  cat(paste(nota, etiqueta), "\n", sep = "")
}

lib <- cut(notas, breaks = c(0, 5, 7, 9, Inf), right = FALSE,
           labels = c("suspenso", "aprobado", "notable", "sobresaliente"))
print(identical(as.character(lib), etiquetas))
```
Ids por línea en R: datos, acum, bucle, si1, r1, si2 (`} else if (nota < 7) {`), r2, si3, r3, sino (`} else {`), r4, (la `}` de cierre del if sin id),
guardar, mostrar, (la `}` del for sin id), lib, lib, compara. R no tiene línea `imp`.

Salida real:
```
3.5 suspenso
5 aprobado
6.8 aprobado
7 notable
9.2 sobresaliente
4.9 suspenso
[1] TRUE
```
Nota: R imprime `5` y `7` donde Python imprime `5.0` y `7.0` (R no distingue al mostrar un double entero). La página lo dice en la narración.

### Foto de estado por línea ejecutada

Variables visibles: `nota`, `etiqueta`, `etiquetas`, y el valor de la condición evaluada. Índices: Python `etiquetas[0]..[5]`, R `etiquetas[1]..[6]` (`ctx.ix`).

| vuelta | nota | líneas que se ejecutan (en orden) | condiciones | etiqueta | etiquetas (largo) |
|---|---|---|---|---|---|
| antes | - | datos, acum | - | - | [] (0) |
| 1 | 3.5 | bucle, si1, r1, guardar, mostrar | si1 True | suspenso | 1 |
| 2 | 5.0 | bucle, si1, si2, r2, guardar, mostrar | si1 False, si2 True | aprobado | 2 |
| 3 | 6.8 | bucle, si1, si2, r2, guardar, mostrar | si1 False, si2 True | aprobado | 3 |
| 4 | 7.0 | bucle, si1, si2, si3, r3, guardar, mostrar | False, False, si3 True | notable | 4 |
| 5 | 9.2 | bucle, si1, si2, si3, sino, r4, guardar, mostrar | False, False, False | sobresaliente | 5 |
| 6 | 4.9 | bucle, si1, r1, guardar, mostrar | si1 True | suspenso | 6 |
| después | - | lib, compara | `list(lib) == etiquetas` True | - | 6 |

Total de eventos: 2 + 5 + 6 + 6 + 7 + 8 + 5 + 2 = 41. El evento `sino` se narra como "ninguna condición fue verdadera: entra al else sin evaluar nada".
Visual de vida real: el riel del recorrido en miniatura con la ficha de la vuelta actual, más la fila de seis cajas que se van llenando.

### Predicción antes de reproducir (`#vrPred`)
"¿Cuántas veces se evalúa la línea `elif nota < 9`?" Respuesta: 2 (solo para 7.0 y 9.2; las demás fichas salen antes).
Distractores: 6 (cree que se evalúan todas las condiciones para cada nota), 1 (olvida la 9.2, que también la evalúa antes de ir al else), 4 (es
el número de veces de `elif nota < 7`).

### Trampas reales (retos `codigo1`..`codigo3`)

**codigo1: `== 5 or 6` siempre entra.**
```python
nota = 3
if nota == 5 or 6:
    print("entra con", nota)
print(nota == 5 or 6)
print(nota == 5 or nota == 6)
```
Salida real: `entra con 3`, `6`, `False`.
```r
nota <- 3
if (nota == 5 || 6) {
  cat("entra con", nota, "\n")
}
print(nota == 5 || 6)
print(nota == 5 || nota == 6)
```
Salida real: `entra con 3 `, `[1] TRUE`, `[1] FALSE` (R convierte el 6 a `TRUE`).
Pregunta: "¿Qué imprime la segunda línea en Python?" Opciones: `6` (correcta), `False`, `True`, error. Pista para `True`: "Python devuelve uno de los
operandos de `or`, no un booleano". Pista para `False`: "Mira cómo se agrupa: `(nota == 5) or 6`".

**codigo2: `if` con un vector.**
```python
import numpy as np
notas = np.array([7.0, 3.5])
print(notas >= 5)
if notas >= 5:
    print("aprobado")
```
Salida real: `[ True False]` y luego `ValueError: The truth value of an array with more than one element is ambiguous. Use a.any() or a.all()`.
```r
notas <- c(7.0, 3.5)
print(notas >= 5)
if (notas >= 5) {
  print("aprobado")
}
```
Salida real: `[1]  TRUE FALSE` y `Error in if (notas >= 5) { : the condition has length > 1`.
Pregunta: "¿Qué hace falta para decir 'entra si TODAS aprobaron'?" Correcta: `if (notas >= 5).all():` / `if (all(notas >= 5))`. Distractores: `and`,
`&`, "nada, Python mira la primera" (en R antiguo, antes de 4.2, solo avisaba y usaba la primera; hoy es error).

**codigo3: `cut` cierra por la derecha si no se lo dices.**
```python
import pandas as pd
notas = [3.5, 5.0, 6.8, 7.0, 9.2, 4.9]
print(list(pd.cut(notas, bins=[0, 5, 7, 9, 10],
                  labels=["suspenso", "aprobado", "notable", "sobresaliente"])))
```
Salida real: `['suspenso', 'suspenso', 'aprobado', 'aprobado', 'sobresaliente', 'suspenso']`.
```r
notas <- c(3.5, 5.0, 6.8, 7.0, 9.2, 4.9)
print(as.character(cut(notas, breaks = c(0, 5, 7, 9, 10),
                       labels = c("suspenso", "aprobado", "notable", "sobresaliente"))))
```
Salida real:
```
[1] "suspenso"      "suspenso"      "aprobado"      "aprobado"     
[5] "sobresaliente" "suspenso"     
```
Pregunta: "¿Qué les pasó al 5.0 y al 7.0?" Correcta: los intervalos por defecto son `(0, 5]`, `(5, 7]`...: el 5.0 cae en suspenso y el 7.0 en aprobado,
como si el `if` dijera `nota <= 5` en lugar de `nota < 5`. Se arregla con `right=False` / `right = FALSE`.

`p.vr-nota`: "En una línea: `pd.cut(notas, bins=[0, 5, 7, 9, float("inf")], right=False, labels=[...])` en Python y
`cut(notas, breaks = c(0, 5, 7, 9, Inf), right = FALSE, labels = ...)` en R."
`details.profundizar`: "La versión vectorizada con `np.select`": `np.select([n < 5, n < 7, n < 9], ["suspenso", "aprobado", "notable"], "sobresaliente")`
también respeta el orden (la primera condición verdadera gana), igual que el `elif`. Con `n = np.array(notas)` la salida real es
`['suspenso' 'aprobado' 'aprobado' 'notable' 'sobresaliente' 'suspenso']`.
Dato verificado para el profundizar de R: `c(TRUE, FALSE) && TRUE` da el error `'length = 2' in coercion to 'logical(1)'` en R 4.6.1.

## Retos (8 en la parte 3, más codigo1..3)

1. **`ojo-rama`**, ojo clínico (5 rondas, aprueba con 4 de 5). Generador: una nota al azar entre 0 y 10 con un decimal, con sesgo hacia los bordes
   (4.9, 5.0, 6.9, 7.0, 8.9, 9.0 aparecen con más frecuencia). Pregunta: "¿Qué caja?" (cuatro botones). Retroalimentación: la ficha baja por el riel.
2. **`ojo-verdad`**, ojo clínico (5 rondas). Generador: elige al azar `a` y `b` booleanos y una expresión de una lista (`a and not b`, `not a or b`,
   `not (a and b)`, `a or b and False`, `(a or b) and not a`). Pregunta: "¿Verdadero o falso?" Pista tras fallar: la prioridad es `not`, luego `and`,
   luego `or`.
3. **`construir-riel`**, construir: el riel con 4 rombos vacíos y fichas de condiciones (`nota < 5`, `nota < 7`, `nota < 9`, `nota >= 9`, `nota >= 5`,
   `nota > 7`) y cajas de salida. Objetivos (todos a la vez, con casillas que se marcan solas): las seis fichas del recorrido caen bien; no hay ninguna
   rama muerta; se usan como mucho 3 condiciones (el else hace el resto).
4. **`a-mano-camino`**, a mano: se genera una nota al azar y un riel en orden invertido o mezclado (por ejemplo `if nota >= 9 ... elif nota >= 7 ...
   elif nota >= 5 ... else`). Pregunta numérica: "¿cuántas condiciones se evalúan?". Pistas escalonadas: 1) "Cuenta los rombos hasta el primer sí";
   2) "Si ninguno dice sí, se evaluaron todos y se entra al else"; 3) la respuesta con el camino dibujado. Reintentable con otra nota.
5. **`a-mano-certificado`**, a mano: tabla de 4 estudiantes con nota y asistencia al azar; la regla es `nota >= 5 and (asistencia >= 80 or nota >= 9)`.
   Pregunta: "¿Cuántos obtienen el certificado?". Pistas: 1) resuelve primero el paréntesis; 2) una tabla de verdad parcial para la primera fila;
   3) la solución fila por fila.
6. **`cazar-condicional`**, cazar el error (3 variantes; Francisco marca la línea mala):
   - a) `elif nota >= 5:` antes de `elif nota >= 9:` en un riel de "mayor a menor" (rama muerta).
   - b) `if nota == 5 or 6:` (siempre verdadero).
   - c) `if nota > 5:` para aprobar (el 5.0 queda suspenso: frontera mal puesta).
   Cada variante explica el arreglo.
7. **`prop-booleanos`**, propiedades (opción múltiple, `mezclar: true`, reintentable): "¿Cuál es equivalente a `not (a and b)`?"
   Correcta: `not a or not b` (ley de De Morgan). Distractores y pistas: `not a and not b` -> "prueba con a = True, b = False";
   `a or b` -> "con a = b = True, el original es False"; `not a and b` -> "con a = False, b = False el original es True".
8. **`prop-cortocircuito`**, propiedades: "¿Cuál de estas líneas NUNCA lanza `ZeroDivisionError` cuando `x` puede ser 0?"
   Correcta: `x != 0 and 10 / x > 2`. Distractores: `10 / x > 2 and x != 0` -> "el orden importa: Python evalúa de izquierda a derecha";
   `x != 0 or 10 / x > 2` -> "con x = 0 la primera mitad es False, así que `or` mira la segunda"; `(x != 0) & (10 / x > 2)` -> "`&` evalúa los dos lados siempre".

Lectura de inspiración (citar, no copiar): Python Workout ej. 1 (comparar mayor o menor en un juego de adivinar, PDF 28-33) y Think Python ej. 5-3
(desigualdad triangular con tres palillos, PDF 78-81). Un reto opcional propio: "¿con estos tres palillos se arma un triángulo?" con longitudes al azar.

## Memoria

`B.ordenar` (armar el riel en orden correcto; piezas):
1. `if nota < 5:`
2. `    etiqueta = "suspenso"`
3. `elif nota < 7:`
4. `    etiqueta = "aprobado"`
5. `elif nota < 9:`
6. `    etiqueta = "notable"`
7. `else:`
8. `    etiqueta = "sobresaliente"`
Distractores: `elif nota >= 5:`, `if nota == 5 or 6:`, `else nota >= 9:`.

Tarjetas (7):
1. ¿Qué tipo tiene `nota >= 5`? -> `bool` en Python, `logical` en R: vale `True` o `False`.
2. ¿Cuántas ramas de un `if/elif/else` se ejecutan? -> Exactamente una: la primera cuya condición es verdadera (o el else).
3. ¿Qué devuelve `nota == 5 or 6` con `nota = 3`? -> `6`, que cuenta como verdadero. Hay que escribir `nota == 5 or nota == 6`.
4. ¿Qué es el cortocircuito? -> `A and B` no evalúa B si A es falso; `A or B` no evalúa B si A es verdadero.
5. ¿Qué valores cuentan como falso en un `if` de Python? -> `0`, `0.0`, `""`, `[]`, `{}`, `None` y `False`.
6. ¿`and` o `&` para filtrar un DataFrame? -> `&`, con paréntesis en cada comparación: `(df.a > 1) & (df.b < 2)`.
7. ¿Qué pasa en R con `if (c(TRUE, FALSE))`? -> Error "the condition has length > 1" (desde R 4.2).

## Citas (11)

| id de fuente | pág. PDF | pág. impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| thinpython | 22 | 1 | Cap. 1: What Is a Program? | las cinco operaciones básicas de un programa, entre ellas la ejecución condicional | Paso 1 |
| thinpython | 69 | 48 | Cap. 5: Boolean Expressions | `==`, `!=`, `<`...; el tipo `bool`; el error `=` frente a `==` | Al terminar el paso 2 |
| thinpython | 70 | 49 | Cap. 5: Logical Operators | `and`, `or`, `not`; cualquier número distinto de cero cuenta como verdadero | Pasos 3 y 6 |
| thinpython | 70 | 49 | Cap. 5: Conditional / Alternative Execution | `if` con cuerpo sangrado, `pass`, `if/else` con `x % 2 == 0` | Paso 4, antes de la trampa |
| thinpython | 71 | 50 | Cap. 5: Chained Conditionals y Nested Conditionals | `elif`; solo se ejecuta una rama; simplificar ifs anidados con operadores lógicos | Al terminar el paso 4 |
| thinpython | 86 | 65 | Cap. 6: Boolean Functions | `is_divisible`: devolver la comparación directamente en lugar de `if ...: return True` | Vida real, al cerrar |
| thinpython | 78 | 57 | Cap. 5: Exercises (5-3) | desigualdad triangular con tres palillos (el ejercicio ocupa PDF 78-81) | Retos |
| pyworkout | 28 | 2 | Ej. 1: Number guessing game | comparar mayor o menor dentro de un bucle para dar pistas (ej. completo en PDF 28-33) | Retos |
| prog4html (data-ancla `operadores-relacionales`) | - | - | Operadores relacionales | comparaciones en R, `"insulina" != "Insulina"` es TRUE (errata del material: "Maayor o igual") | Paso 2 |
| prog4html (data-ancla `operadores-lógicos`) | - | - | Operadores lógicos | `& && \| \|\| ! xor %in%`, `x > 5 & x < 15` | Paso 3 |
| prog4html (data-ancla `in`) | - | - | `%in%` | `3 %in% c(1,2,3,4)`; `\|\|` y `&&` no están vectorizados | Paso 7 |
| prog4 | 22 | 22 | Filtrar filas | `mtcars[mtcars$cyl > 4 & mtcars$hp > 100, ]` (21 filas) y con `\|` (30 filas, sigue en p. 23) | Paso 7 |

(12 filas; las dos de PDF 70 son secciones distintas de la misma página: el constructor puede fusionarlas si quiere quedarse en 11.)

## Riesgos y notas para quien construye

- El material de la materia NO trae `if`, `elif` ni bucles (ni en Python ni en R): solo comparaciones y operadores lógicos de R (prog4html) y máscaras
  (prog4 p. 22-23). La página lo dice con naturalidad ("esto no viene en el material de la unidad; viene de Think Python").
- Errata a mencionar si se cita `#operadores-relacionales`: "Maayor o igual". La trampa intencional de `#environment` (`numero.pacientes < -5`) va en el
  profundizar del paso 2.
- R imprime `5` y `7` en lugar de `5.0` y `7.0`; el visual debe usar el formato de cada lenguaje.
- En R, `10 / 0` es `Inf` y no da error: el ejemplo del cortocircuito protege contra `ZeroDivisionError` solo en Python. En R el guardián sigue
  teniendo sentido con `NA` o con índices fuera de rango; la narración debe decirlo sin exagerar.
- La línea `lib` ocupa dos líneas físicas en cada lenguaje: ambas llevan el mismo id; comprobar que el motor `B.vidaReal` acepte un id repetido en
  líneas consecutivas (si no, usar `lib` y `lib2` en ambos lenguajes).
- `pd.cut` con `float("inf")` como borde: funciona en pandas 2.2.3 (verificado). No usar `10` como último borde con `right=False` porque un 10.0 quedaría
  fuera (NaN).
- `&&` con vectores en R: desde R 4.3 es error. El texto no debe decir "solo avisa".
- No copiar enunciados de Python Workout ni Think Python: los retos son propios.
