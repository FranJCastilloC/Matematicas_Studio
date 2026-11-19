# Especificacion: Funciones y el marco de llamada (funciones-marco)

- Ruta: `python-base` (grupo Programación con datos), orden 4, tanda 8
- Archivo: `biblioteca/conceptos/funciones-marco.html`
- Prerrequisitos: ["Condicionales y lógica booleana"]
- Siguientes: ["Bucles y variables que cambian", "Recursión y la pila de llamadas", "Clases y objetos", "Leer un error y depurar"]
- Aparece: [{ materia: "SM142002", ud: "UD1" }]
- Resumen del catálogo: "Qué pasa en memoria cuando se llama una función: sus variables locales viven en un marco de la pila."
- Fuente declarada: Think Python cap. 3 y 6, Python Workout cap. 6

## Imagen central

**El diagrama de pila vivo.** El escenario tiene dos columnas:
- Izquierda: el programa (unas 11 líneas) con un cursor de ejecución (una flecha `--accent` en el margen) que salta de línea en línea, también hacia
  arriba cuando entra a una función.
- Derecha: la pila de marcos, dibujada como cajas apiladas de abajo arriba. Abajo siempre está `__main__` (en R, "entorno global"). Cada llamada
  apila una caja nueva con el nombre de la función y sus variables (`x → 3`, `y → 9`), con el mismo estilo que el diagrama de estado de Think Python
  (nombre, flecha, valor). Cuando la función hace `return`, el valor sale volando en una etiqueta hacia el marco de abajo, se escribe en la variable que
  lo espera (`ca → 9`) y la caja de arriba se desvanece.

Controles: botones "Siguiente línea", "Anterior", "Ir al final", "Reiniciar"; dos casillas editables para los argumentos de la llamada principal
(`suma_cuadrados(3, 4)`, enteros de −9 a 9); un indicador "profundidad de la pila: 1, 2, 3". Según el paso se encienden capas:
- `maquina`: una sola caja negra "cuadrado" con una entrada y una salida (paso 1, sin código).
- `definir`: el programa con las líneas `def` marcadas como "solo se guarda la receta"; en `__main__` aparecen `cuadrado → función` y
  `suma_cuadrados → función`.
- `marco`: la pila completa con parámetros y locales.
- `retorno`: la etiqueta del valor de retorno y una variante sin `return` que devuelve `None`.
- `sombra`: dos variables con el mismo nombre `x`, una en `__main__` y otra en el marco de `cuadrado`, con colores `--j` y `--k`.
- `alcance`: los anillos LEGB (local, englobante, global, integrado) como círculos concéntricos; al buscar un nombre se ilumina el anillo donde se encuentra.
- `traceback`: la pila congelada en el momento de un error, con el traceback impreso al lado y una flecha que une cada línea del traceback con su marco.

Datos inventados: `suma_cuadrados(3, 4)` que llama dos veces a `cuadrado` y da 25 (ata con Pitágoras: 3² + 4² = 5²).

## Hipotesis inicial

"Una función `cuadrado` usa por dentro una variable llamada `y` para guardar el resultado. Cuando la función termina y te devuelve 9, ¿qué crees
que pasa con `y`? ¿Puedes usarla después, fuera de la función? Escribe qué crees que guarda la computadora y qué tira."
Se muestra de nuevo en el paso 5.

## Pasos (7)

### Paso 1. Una máquina con su propia mesa de trabajo
- Idea: llamar a una función es delegar: le das valores, trabaja en su propia mesa y te devuelve un resultado. Lo que hace en su mesa no se queda contigo.
- Escenario: capa `maquina`. Una caja "cuadrado" recibe un 3; dentro se ve una hoja de borrador que dice "3 por 3 = 9"; sale un 9. La hoja se ve
  borrosa hasta responder.
- Chequeo (predicción sin símbolos, opción múltiple): "Le pides a la máquina el cuadrado de 3 y luego el de 4. Cuando calcula el de 4, ¿qué hay en su
  hoja de borrador?"
  Correcta: "solo la cuenta del 4; la del 3 se tiró al terminar". Distractores: "las dos cuentas" (cree que el borrador se acumula); "la del 3, que
  reutiliza" (cree que la máquina recuerda entre llamadas); "nada, la máquina no usa borrador" (sí lo usa, pero es suyo).
- Cita: thinpython PDF 42 (Function Calls: una función toma argumentos y devuelve un resultado).

### Paso 2. Definir no es ejecutar
- Idea: `def` solo guarda la receta bajo un nombre; el cuerpo se ejecuta cuando alguien llama, y cada llamada lo ejecuta de nuevo.
- Escenario: capa `definir`. El cursor pasa por `def cuadrado` y `def suma_cuadrados` sin entrar; en `__main__` aparecen los dos nombres apuntando a
  "función". Luego llega a `r = suma_cuadrados(3, 4)`.
- Chequeo (predicción antes de tocar, numérico): "¿Cuántas veces se va a ejecutar la línea `y = x * x` en todo el programa?" Respuesta: 2.
  Pista si responde 1: "¿cuántas veces aparece `cuadrado(` dentro de `suma_cuadrados`?". Pista si responde 3: "la línea `def` no ejecuta el cuerpo".
  Pista si responde 0: "¿quién llama a `suma_cuadrados`?".
- Citas: thinpython PDF 44 (Adding New Functions); thinpython PDF 46 (Definitions and Uses y Flow of Execution).

### Paso 3. El marco: parámetros que reciben valores
- Idea: cada llamada crea un marco nuevo encima de la pila; los parámetros son variables locales a las que se les asigna el valor de los argumentos.
  El nombre del argumento no importa (`cuadrado(a)` mete el valor de `a` en `x`).
- Escenario: capa `marco`. Se avanza línea por línea. En la pila se ve `__main__`, luego `suma_cuadrados (a → 3, b → 4)`, luego `cuadrado (x → 3)`.
  Las casillas editables cambian 3 y 4.
- Chequeo (cálculo con datos en vivo): el escenario se detiene en la segunda llamada a `cuadrado` con los argumentos que Francisco haya puesto
  (por defecto 3 y 4). "¿Qué valor tiene `x` en el marco de arriba, y cuántos marcos hay en la pila?" Respuesta por defecto: `x = 4`, 3 marcos
  (`__main__`, `suma_cuadrados`, `cuadrado`). Pistas: "la segunda llamada es `cuadrado(b)`"; "el marco de la primera llamada ya se desapiló".
- Profundizar: "Argumentos por nombre y valores por defecto" (`def saludo(nombre, signo="!")`; `seq(from = 2, to = 20, by = 2)` en R; Python Workout
  explica por qué Python no sobrecarga funciones y usa parámetros flexibles).
- Citas: thinpython PDF 47 (Parameters and Arguments); thinpython PDF 49 (Stack Diagrams, Figure 3-1); prog4html `funciones`.

### Paso 4. `return`: el valor baja y el marco desaparece (TRAMPA)
- Idea: `return` entrega un valor al marco de abajo y destruye el marco. Una función sin `return` en Python devuelve `None`; imprimir no es devolver.
- Escenario: capa `retorno`. La etiqueta "9" baja de `cuadrado` a `ca` en `suma_cuadrados`. Un interruptor "quitar el return" deja `cuadrado` con solo
  `y = x * x`: la etiqueta que baja dice `None` y luego `ca + cb` explota con `TypeError`.
- Chequeo (predicción antes de tocar, opción múltiple): "Quitas el `return y` de `cuadrado`. ¿Qué imprime `print(cuadrado(3))` en Python, y qué
  imprime `print(cuadrado(3))` en R con la función equivalente sin `return`?"
  Correcta: Python `None`, R `[1] 9`. En R una función devuelve el valor de su última expresión (aquí la asignación `y <- x * x`, cuyo valor es 9).
  Distractores: "9 y 9" (cree que Python también devuelve la última expresión); "None y NULL" (cree que R se comporta igual); "error en los dos".
  Es el reto `codigo1`.
- Citas: thinpython PDF 50 (Fruitful Functions and Void Functions, `None`); thinpython PDF 82 (Return Values: todo camino debe devolver algo,
  `absolute_value(0)` devuelve `None`).

### Paso 5. Lo local se queda en el marco (DESTACADO con predicción)
- Idea: las variables creadas dentro de una función mueren con su marco; y un mismo nombre en dos marcos son dos variables distintas.
- Escenario: capa `sombra`. Programa corto:
  ```python
  x = 10
  def f(x):
      x = x + 1
      return x
  print(f(x), x)
  ```
  Dos cajas con `x` en colores distintos. Al terminar, `print(y)` fuera de la función da `NameError`.
- `.destacado` (la confusión natural): "Dentro de `f` se hace `x = x + 1`. ¿Cambia la `x` de afuera?"
  Predicción: Francisco elige "sí, pasa a 11" o "no, sigue en 10". Respuesta: no. Salida real: `11 10`. La `x` de adentro es otra caja, que nace con una
  copia de la flecha al 10 y luego se reasigna. Después se muestra la hipótesis del principio (`#citaHipo`).
- Chequeo (elección con explicación): "Después de `r = suma_cuadrados(3, 4)`, en `__main__`, ¿qué nombres existen?"
  Correcta: `cuadrado`, `suma_cuadrados`, `r`. Distractores: "también `ca` y `cb`" (son locales de `suma_cuadrados`); "también `y`" (local de
  `cuadrado`); "solo `r`" (olvida que las funciones también son nombres de `__main__`).
- Profundizar: "¿Y si le paso una lista?": con `def g(lista): lista.append(99)` la lista de afuera SÍ cambia (salida real `[1, 99]`), porque los dos
  marcos apuntan al mismo objeto; reasignar el nombre no lo cambia, modificar el objeto sí (Think Python, Figure 10-5).
- Citas: thinpython PDF 48 (Variables and Parameters Are Local); thinpython PDF 137 (List Arguments, Figure 10-5, sigue hasta PDF 139).

### Paso 6. Dónde busca Python un nombre: LEGB
- Idea: para leer un nombre, Python busca en el marco local, luego en funciones que lo encierran, luego en el global y al final en los integrados.
  Pero **asignar** un nombre dentro de una función lo vuelve local para toda la función.
- Escenario: capa `alcance`. Anillos concéntricos L, E, G, B. Francisco elige un nombre (`x`, `contador`, `len`, `sum`) y ve en qué anillo se encuentra.
  Variante: `sum = 10` en el global tapa al `sum` integrado.
- Chequeo (predicción antes de tocar): "Con `contador = 0` afuera y una función que hace `contador = contador + 1`, ¿qué pasa al llamarla en Python?
  ¿Y en R?" Correcta: Python lanza `UnboundLocalError` (la asignación hace local a `contador` y se lee antes de tener valor); R devuelve 1 y deja el
  global en 0 (lee el global y crea una local). Es el reto `codigo2`.
  Distractores: "Python devuelve 1 y el global queda en 1" (eso requiere `global contador`); "los dos devuelven 1" (Python no lee el global si asignas).
- Profundizar: `global` y `nonlocal` en Python; `<<-` en R. Por qué conviene devolver valores en lugar de tocar globales.
- Citas: pyworkout PDF 130 (Variable scoping in Python, LEGB; sigue hasta PDF 132 con el recuadro "THE GLOBAL STATEMENT"); prog4html `environment`.

### Paso 7. El traceback es la pila impresa
- Idea (lo más técnico): cuando algo falla en lo alto de la pila, el traceback lista los marcos desde `__main__` hasta el que falló. Se lee de abajo
  arriba para el error y de arriba abajo para el camino.
- Escenario: capa `traceback`. Se llama `suma_cuadrados(3, "4")`; la pila se congela con 3 marcos y aparece el traceback real (ver abajo), con cada
  bloque `File ..., line N, in <nombre>` unido por una flecha a su marco.
- Chequeo (elección con explicación): "¿En qué marco ocurrió el error y quién le pasó el valor malo?"
  Correcta: ocurrió en `cuadrado` (línea `y = x * x`), y el valor malo vino de `__main__` a través de `suma_cuadrados` (`cb = cuadrado(b)`).
  Distractores: "en `__main__`, porque es la primera línea del traceback" (el primero es el más antiguo, no el que falló); "en `suma_cuadrados`, porque
  `b` es su parámetro" (ahí solo se pasó; la multiplicación está en `cuadrado`).
- Traceback real (Python 3.13.5; el constructor debe reemplazar la ruta del archivo por `programa.py`):
  ```
  Traceback (most recent call last):
    File "programa.py", line 10, in <module>
      r = suma_cuadrados(3, "4")
    File "programa.py", line 7, in suma_cuadrados
      cb = cuadrado(b)
    File "programa.py", line 2, in cuadrado
      y = x * x
          ~~^~~
  TypeError: can't multiply sequence by non-int of type 'str'
  ```
  R real (Rscript, R 4.6.1):
  ```
  Error in x * x : non-numeric argument to binary operator
  Calls: suma_cuadrados -> cuadrado
  Execution halted
  ```
  (R imprime la pila en una sola línea, de afuera hacia adentro.)
- Citas: thinpython PDF 49 (el traceback que sale de la pila, misma sección Stack Diagrams); thinpython PDF 91 (Debugging del cap. 6: imprimir los
  argumentos al entrar y el valor al salir).

## Vida real (Python y R)

Mismos datos que el recorrido: `suma_cuadrados(3, 4)`. Se cierra contra una herramienta estándar: `math.hypot(3, 4) ** 2` en Python (la hipotenusa al
cuadrado) y `sum(c(3, 4)^2)` en R (vectorizado). El visual es la pila de marcos del recorrido.

### Python (verificado, Python 3.13.5)

| id | línea |
|---|---|
| imp | `import math` |
| (vacía) | |
| defc | `def cuadrado(x):` |
| cy | `    y = x * x` |
| cr | `    return y` |
| (vacía) | |
| defs | `def suma_cuadrados(a, b):` |
| sa | `    ca = cuadrado(a)` |
| sb | `    cb = cuadrado(b)` |
| sr | `    return ca + cb` |
| (vacía) | |
| llamada | `r = suma_cuadrados(3, 4)` |
| mostrar | `print(r)` |
| compara | `print(r == math.hypot(3, 4) ** 2)` |

```python
import math

def cuadrado(x):
    y = x * x
    return y

def suma_cuadrados(a, b):
    ca = cuadrado(a)
    cb = cuadrado(b)
    return ca + cb

r = suma_cuadrados(3, 4)
print(r)
print(r == math.hypot(3, 4) ** 2)
```
Salida real:
```
25
True
```

### R (verificado, R 4.6.1)

```r
cuadrado <- function(x) {
  y <- x * x
  return(y)
}

suma_cuadrados <- function(a, b) {
  ca <- cuadrado(a)
  cb <- cuadrado(b)
  return(ca + cb)
}

r <- suma_cuadrados(3, 4)
print(r)
print(r == sum(c(3, 4)^2))
```
Ids en R: defc (`cuadrado <- function(x) {`), cy, cr, (`}` sin id), defs, sa, sb, sr, (`}`), llamada, mostrar, compara. R no tiene `imp`.
Salida real:
```
[1] 25
[1] TRUE
```

### Foto de estado por línea ejecutada

El marco de abajo se llama `__main__` en Python y "global" en R. Valores después de ejecutar la línea.

| # | id | pila (de abajo arriba) | qué cambia |
|---|---|---|---|
| 1 | imp | main | `math` (solo Python) |
| 2 | defc | main | `cuadrado → función` |
| 3 | defs | main | `suma_cuadrados → función` |
| 4 | llamada | main, suma_cuadrados | se apila: `a → 3`, `b → 4` (r todavía no existe) |
| 5 | sa | main, suma_cuadrados, cuadrado | se apila: `x → 3` |
| 6 | cy | main, s_c, cuadrado | `y → 9` |
| 7 | cr | main, s_c | devuelve 9; se desapila `cuadrado`; `ca → 9` |
| 8 | sb | main, s_c, cuadrado | se apila otro `cuadrado`: `x → 4` |
| 9 | cy | main, s_c, cuadrado | `y → 16` |
| 10 | cr | main, s_c | devuelve 16; `cb → 16` |
| 11 | sr | main | devuelve 25; se desapila `suma_cuadrados`; `r → 25` |
| 12 | mostrar | main | salida `25` |
| 13 | compara | main | salida `True` |

13 eventos en Python, 12 en R (sin `imp`). La profundidad máxima es 3 (eventos 5, 6, 8, 9).
Narración sugerida en los eventos 4 y 11: "la línea `r = ...` empieza en el evento 4 pero solo termina en el 11, cuando vuelve el valor".

### Predicción antes de reproducir (`#vrPred`)
"¿Cuál es la mayor cantidad de marcos que habrá en la pila a la vez, contando `__main__`?" Respuesta: 3.
Distractores: 4 (cree que las dos llamadas a `cuadrado` conviven; la primera ya terminó cuando empieza la segunda), 2 (olvida `__main__`), 5 (cuenta todas
las llamadas del programa).

### Trampas reales (retos `codigo1`..`codigo3`)

**codigo1: sin `return`.**
```python
def cuadrado(x):
    y = x * x

r = cuadrado(3)
print(r)
print(r + 16)
```
Salida real: `None` y luego `TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'`.
```r
cuadrado <- function(x) {
  y <- x * x
}

r <- cuadrado(3)
print(r)
print(r + 16)
```
Salida real: `[1] 9` y `[1] 25`. Pregunta: "¿Por qué R sí da 25?" Correcta: "R devuelve el valor de la última expresión evaluada". Pista para "R guarda
`y` en el global": "`y` sigue siendo local; prueba `print(y)` afuera: no existe".

**codigo2: asignar vuelve local.**
```python
contador = 0

def sumar():
    contador = contador + 1
    return contador

print(sumar())
```
Salida real (última línea): `UnboundLocalError: cannot access local variable 'contador' where it is not associated with a value`.
```r
contador <- 0

sumar <- function() {
  contador <- contador + 1
  return(contador)
}

print(sumar())
print(contador)
```
Salida real: `[1] 1` y `[1] 0`. Pregunta: "En R, ¿por qué el global sigue en 0?" Correcta: "`<-` dentro de la función crea una local; leyó el global
para calcular, pero escribió en su marco". Pista para "porque R copia todo": "lo que pasa es más simple: hay dos variables `contador`".

**codigo3: el valor por defecto mutable se comparte entre llamadas.**
```python
def anotar(valor, lista=[]):
    lista.append(valor)
    return lista

print(anotar(3))
print(anotar(4))
```
Salida real: `[3]` y `[3, 4]`.
```r
anotar <- function(valor, lista = c()) {
  lista <- c(lista, valor)
  return(lista)
}

print(anotar(3))
print(anotar(4))
```
Salida real: `[1] 3` y `[1] 4`. Pregunta: "¿Por qué Python 'recuerda' el 3?" Correcta: "la lista por defecto se crea una sola vez, al ejecutar el `def`,
y todas las llamadas comparten ese mismo objeto". Arreglo idiomático: `lista=None` y `if lista is None: lista = []`. Distractor: "porque `lista` es
global" -> pista: "no lo es: vive en el objeto función, no en `__main__`".

`p.vr-nota`: "En una línea: `math.hypot(3, 4) ** 2` en Python y `sum(c(3, 4)^2)` en R."
Sin `details.profundizar` vectorizado (no aplica); en su lugar un profundizar "Ver la pila de verdad": `import inspect` y `len(inspect.stack())` dentro de
`cuadrado`, y `sys.calls()` en R. Si el constructor lo incluye con números, debe correrlo antes.

## Retos (8 en la parte 3, más codigo1..3)

1. **`ojo-profundidad`**, ojo clínico (5 rondas, 4 de 5). Generador: un programa de 3 funciones `a`, `b`, `c` donde cada una llama a 0, 1 o 2 de las
   otras (sin ciclos), elegido al azar, y una línea marcada. Pregunta: "¿Cuántos marcos hay en la pila cuando se ejecuta la línea marcada?".
2. **`ojo-devuelve`**, ojo clínico (5 rondas). Generador: funciones cortas al azar (con `return`, sin `return`, con `print` en vez de `return`, con
   `return` dentro de un `if` que no siempre se cumple). Pregunta: "¿Qué vale `r = f(2)`?", con opciones: un número, `None`, error.
3. **`construir-pila`**, construir: Francisco arrastra cajas de marco y fichas `nombre → valor` para armar el diagrama de pila de un momento congelado
   de `suma_cuadrados(2, 5)` (segunda llamada a `cuadrado`). Objetivos: 3 marcos en el orden correcto; `a → 2`, `b → 5`, `ca → 4` en `suma_cuadrados`;
   `x → 5` en `cuadrado`; ninguna variable en el marco equivocado (por ejemplo `cb` todavía no existe).
4. **`a-mano-traza`**, a mano: se generan dos enteros al azar `p` y `q` (de 2 a 9) para el programa `def doble(n): m = 2 * n; return m` y
   `def f(p, q): return doble(p) + doble(q) - p`. Pregunta numérica: "¿Qué devuelve `f(p, q)`?". Pistas: 1) "Empieza por la llamada más alta de la
   pila: `doble(p)`"; 2) "Cada `doble` tiene su propia `n` y su propia `m`"; 3) la traza completa en tabla.
5. **`a-mano-sombra`**, a mano: programa con una `x` global al azar y una función `g(x)` que hace `x = x * 2` y devuelve `x + 1`. Pregunta: "¿Qué imprime
   `print(g(x), x)`?" (dos números). Pistas: 1) "dos `x`"; 2) "la de adentro arranca con el valor de la de afuera"; 3) la solución.
6. **`cazar-funcion`**, cazar el error (3 variantes, marcar la línea):
   - a) `def promedio(a, b): print((a + b) / 2)` usado como `p = promedio(4, 6) + 1` (imprime en lugar de devolver).
   - b) Una función con `return` dentro de un `if nota >= 5:` sin rama para el resto (devuelve `None` con 4).
   - c) `total = 0` global y `def acumular(v): total = total + v` (UnboundLocalError).
7. **`prop-marco`**, propiedades (opción múltiple, mezclar, reintentable): "¿Qué afirmación es cierta sobre los parámetros?"
   Correcta: "son variables locales que reciben el valor de los argumentos al llamar". Distractores y pistas: "el parámetro y el argumento deben llamarse
   igual" -> "en `cuadrado(a)`, `a` entra como `x`"; "un parámetro sigue existiendo después de la llamada" -> "mira el paso 5: el marco se borra";
   "modificar un parámetro siempre cambia la variable del llamador" -> "reasignar no; modificar una lista compartida sí".
8. **`prop-alcance`**, propiedades: "Escribes `sum = 10` y después `sum([1, 2])`. ¿Qué pasa?" Correcta: `TypeError: 'int' object is not callable`,
   porque el global `sum` tapa al integrado (regla LEGB). Distractores y pistas: "da 3" -> "¿en qué anillo encuentra primero `sum`?"; "da 13" -> "no
   suma el 10; ya ni siquiera es una función"; "NameError" -> "el nombre sí existe, es el problema". Verificado en Python 3.13: el mensaje real es
   `TypeError: 'int' object is not callable`.

Lecturas de inspiración (citar, no copiar): Python Workout ej. 25 (generador de XML con parámetros por defecto, `*args` y `**kwargs`, PDF 127-131),
ej. 2 (sumar con `*args`, PDF 34-36) y ej. 27 (una función que devuelve otra, PDF 137-141); Think Python ej. 6-1 (dibujar la pila de un programa con
`a`, `b`, `c`, PDF 93-94).

## Memoria

`B.ordenar` (armar `suma_cuadrados`; piezas en orden):
1. `def cuadrado(x):`
2. `    y = x * x`
3. `    return y`
4. `def suma_cuadrados(a, b):`
5. `    ca = cuadrado(a)`
6. `    cb = cuadrado(b)`
7. `    return ca + cb`
Distractores: `    print(y)`, `    return cuadrado`, `def cuadrado(x) = x * x`.

Tarjetas (8):
1. ¿Qué hace `def`? -> Guarda la función bajo un nombre; no ejecuta el cuerpo.
2. ¿Qué es un marco? -> El espacio de una llamada: sus parámetros y variables locales. Se crea al llamar y se borra al volver.
3. ¿Qué devuelve en Python una función sin `return`? -> `None`. En R devuelve el valor de la última expresión.
4. ¿Imprimir es devolver? -> No. `print` muestra en pantalla; `return` entrega el valor al que llamó.
5. ¿Qué significa LEGB? -> El orden de búsqueda de un nombre: local, englobante, global, integrado (built-in).
6. ¿Por qué aparece `UnboundLocalError`? -> Porque asignar un nombre dentro de la función lo hace local, y se leyó antes de asignarlo.
7. ¿Cómo se lee un traceback de Python? -> De arriba (lo más antiguo, `<module>`) hacia abajo (donde falló); el error está en la última línea.
8. ¿Por qué no usar `lista=[]` como valor por defecto? -> Se crea una sola vez y se comparte entre llamadas; usa `None` y crea la lista dentro.

## Citas (12)

| id de fuente | pág. PDF | pág. impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| thinpython | 42 | 21 | Cap. 3: Function Calls | llamar con argumentos y recibir un resultado; `int('32')`, `type(42)` | Paso 1 |
| thinpython | 44 | 23 | Cap. 3: Adding New Functions | cabecera y cuerpo con sangría; el objeto función; una función que llama a otra (sigue en PDF 45-46) | Paso 2 |
| thinpython | 46 | 25 | Cap. 3: Definitions and Uses / Flow of Execution | definir antes de llamar; la llamada salta al cuerpo y vuelve | Al terminar el paso 2 |
| thinpython | 47 | 26 | Cap. 3: Parameters and Arguments | `print_twice(bruce)`; el nombre del argumento no tiene que ver con el del parámetro | Paso 3 |
| thinpython | 49 | 28 | Cap. 3: Stack Diagrams | Figure 3-1, el diagrama de pila con `__main__` y dos funciones, y el traceback que sale de esa pila | Pasos 3 y 7 |
| thinpython | 50 | 29 | Cap. 3: Fruitful Functions and Void Functions | funciones que devuelven y funciones void que devuelven `None` | Paso 4 |
| thinpython | 82 | 61 | Cap. 6: Return Values | `return` en varias ramas, código muerto, `absolute_value(0)` devuelve `None` si falta un caso | Al terminar el paso 4 |
| thinpython | 48 | 27 | Cap. 3: Variables and Parameters Are Local | `cat` fuera de `cat_twice` da NameError | Paso 5 |
| thinpython | 137 | 116 | Cap. 10: List Arguments | Figure 10-5: una lista compartida por dos marcos; `bad_delete_head` (sigue hasta PDF 139) | Profundizar del paso 5 |
| pyworkout | 130 | 104 | Cap. 6: Variable scoping in Python | regla LEGB, asignar crea una local, recuadro "THE GLOBAL STATEMENT" en PDF 132 | Paso 6 |
| pyworkout | 126 | 100 | Cap. 6: Default parameter values | argumentos que faltan, valores por defecto, `*args` y `**kwargs` (tabla 6.2 en PDF 127) | Profundizar del paso 3 y codigo3 |
| thinpython | 91 | 70 | Cap. 6: Debugging | usar las funciones como puntos de control: imprimir argumentos al entrar y el valor al salir | Paso 7 |
| prog4html (data-ancla `funciones`) | - | - | Funciones y ayuda | argumentos por nombre y por posición en R: `seq(from = 2, to = 20, by = 2)`; `seq(20, 2, 2)` da error | Paso 3 |
| prog4html (data-ancla `environment`) | - | - | Environment | `ls()`, `rm()`: el entorno global de R como "marco de abajo" | Paso 6 |

(14 filas, dentro del máximo.)

## Riesgos y notas para quien construye

- El material de la materia NO enseña a definir funciones ni en Python ni en R (el mapa lo dice: "R sesión 1 menciona creación de funciones propias,
  pero no hay material"). Lo único es usar funciones con argumentos por nombre (`#funciones`). La página lo aclara.
- Python Workout no tiene diagramas de pila; el diagrama viene de Think Python (Figure 3-1). En R el "marco" es un entorno (environment): la página usa la
  palabra "entorno" en la versión R y lo explica en una línea.
- La ruta del archivo en el traceback real es del directorio temporal donde se corrió: reemplazarla por `programa.py` y decir que se recortó la ruta.
- La flecha `~~^~~` del traceback es de Python 3.11 en adelante; Think Python muestra tracebacks de Python 3.4 (sin flechas). Decirlo si se cita.
- En R, `print(r == sum(c(3, 4)^2))` compara doubles; con 3 y 4 da exacto. Si las casillas editables permiten otros enteros, la comparación sigue siendo
  exacta para enteros pequeños; `math.hypot(a, b) ** 2` en Python puede no ser exacto para otros valores (por ejemplo 2 y 3 dan
  `12.999999999999998`, verificado): la vida real NO debe usar las casillas editables, solo 3 y 4.
- Las ids `defc`/`defs` existen en los dos lenguajes; las llaves de cierre `}` de R van sin id.
