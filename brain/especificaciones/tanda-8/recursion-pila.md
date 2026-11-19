# Especificacion: Recursión y la pila de llamadas (recursion-pila)

- Ruta: `python-base` (grupo Programación con datos), orden 6, tanda 8
- Archivo: `biblioteca/conceptos/recursion-pila.html`
- Prerrequisitos: ["Funciones y el marco de llamada"]
- Siguientes: [] (vacío en el catálogo)
- Aparece: [{ materia: "SM142002", ud: "UD1" }]
- Resumen del catálogo: "Una función que se llama a sí misma apila marcos hasta llegar al caso base, y luego los desapila."
- Fuente declarada: Think Python cap. 5 y 6

## Imagen central

**Una torre de marcos que sube y baja.** El escenario es la misma pila de marcos de "Funciones y el marco de llamada" (para que Francisco la
reconozca), pero todos los marcos tienen el mismo nombre (`fact`) y distinto `n`. Durante la **bajada** (apilar) cada marco nuevo aparece arriba con
su `n` y una casilla vacía `resultado → ?`; el marco del caso base (`n = 0`) se pinta con borde `--ok`. Durante la **subida** (desapilar), el valor de
retorno sale del marco de arriba como una etiqueta, cae en la casilla `?` del marco de abajo, se hace la multiplicación con números vivos
(`resultado = 3 * 2 = 6`) y el marco de arriba se desvanece. Una barra lateral marca la fase ("bajando: apilo" / "subiendo: desapilo") y un medidor
de profundidad compara la altura con el límite (1000 en Python, 5000 expresiones en R).

Controles: deslizador `n` de 0 a 6; botones "Siguiente", "Anterior", "Ir al caso base", "Ir al final", "Reiniciar"; un selector de función según el
paso (`cuenta`, `fact`, `fib`). Capas por paso:
- `fila`: personas en una fila (paso 1, sin código).
- `cuenta`: `cuenta(n)` con la salida impresa al lado (pasos 2 y 5).
- `torre`: la pila de `fact` (pasos 3 y 4).
- `orden`: un interruptor "imprimir antes / después de la llamada" (paso 5).
- `sinbase`: el caso base desactivado o inalcanzable (`fact(-1)`); la torre crece hasta el techo y aparece el error real (paso 6).
- `arbol`: el árbol de llamadas de `fib(n)` con contador de llamadas y los nodos repetidos coloreados igual (paso 7).

Datos: `fact(4) = 24` en el recorrido y en la vida real; `cuenta(3)`; `fib(5)`. Son ejemplos inventados y pequeños.

## Hipotesis inicial

"Una función `fact(n)` calcula el factorial diciendo: 'el factorial de 4 es 4 por el factorial de 3'. Para saber el factorial de 3 vuelve a preguntarse
a sí misma, y así sigue. ¿Cuántos `n` distintos crees que tiene guardados la computadora a la vez en el momento más profundo? ¿Uno que va bajando, o
varios? Escribe tu idea."
Se muestra de nuevo en el paso 3.

## Pasos (7)

### Paso 1. La fila que pregunta hacia adelante
- Idea: un problema se resuelve preguntando por una versión más pequeña del mismo problema, hasta llegar a alguien que sabe la respuesta sin preguntar.
  Las respuestas vuelven en orden contrario.
- Escenario: capa `fila`. Cuatro personas en fila (Ana al final, luego Beto, Cata, Dani adelante). Ana quiere saber cuántas personas tiene delante y le
  pregunta a Beto; Beto le pregunta a Cata... Dani no tiene a nadie delante y responde "0". Burbujas de diálogo tapadas hasta responder.
- Chequeo (predicción sin símbolos, opción múltiple): "¿Quién da la primera respuesta, y qué número recibe Ana al final?"
  Correcta: "Dani responde primero (0); Ana recibe 2 de Beto y dice 3". Distractores: "Ana responde primero" (todavía no sabe nada: está esperando);
  "Ana recibe 4" (cuenta a la propia Ana o suma una vez de más); "todos responden a la vez" (cada uno espera al de adelante).
- Cita: thinpython PDF 72 (Recursion: una función que se llama a sí misma, `countdown`).

### Paso 2. Caso base y paso recursivo
- Idea: toda función recursiva tiene dos partes: el caso base (responde sin llamarse) y el paso recursivo (se llama con un problema más pequeño que se
  acerca al caso base).
- Escenario: capa `cuenta`.
  ```python
  def cuenta(n):
      if n == 0:
          print("fin")
      else:
          print(n)
          cuenta(n - 1)
  ```
  Con `cuenta(3)` la salida va apareciendo: `3`, `2`, `1`, `fin`. Las dos partes se colorean al resolver el chequeo.
- Chequeo (elección con explicación): "Marca cuál es el caso base y qué hace que el problema se achique."
  Correcta: caso base `if n == 0: print("fin")`; se achica por `n - 1`. Distractores: "el caso base es `print(n)`" (esa línea se ejecuta en cada
  llamada recursiva, no corta nada); "se achica por `print`" (imprimir no cambia `n`); "no tiene caso base, termina sola" (sin el `if` no termina: paso 6).
- Citas: thinpython PDF 72 (Recursion, `countdown` y `print_n`, sigue en PDF 73).

### Paso 3. La pila crece: muchas `n` a la vez
- Idea: cada llamada recursiva crea un marco NUEVO con su propia `n`; en el punto más profundo conviven todos.
- Escenario: capa `torre` con `fact`:
  ```python
  def fact(n):
      if n == 0:
          return 1
      resultado = n * fact(n - 1)
      return resultado
  ```
  Con "Ir al caso base" la torre sube hasta `n = 0` y se congela. Al resolver se muestra la hipótesis (`#citaHipo`).
- Chequeo (cálculo con datos en vivo): con el `n` del deslizador (por defecto 4): "En el momento más profundo, ¿cuántos marcos `fact` hay en la pila?"
  Respuesta: `n + 1` (5 con n = 4: n = 4, 3, 2, 1, 0). Pistas: "cuenta también el marco del caso base"; "no cuentes `__main__`, que no es `fact`".
  Si responde `n`: "¿y el marco con n = 0?".
- Citas: thinpython PDF 74 (Stack Diagrams for Recursive Functions, Figure 5-1: varios marcos `countdown` con distinto `n` a la vez).

### Paso 4. La subida: los valores vuelven multiplicándose
- Idea: al llegar al caso base empieza la subida: cada marco recibe el valor del de arriba, termina su cuenta y lo entrega al de abajo. El resultado se
  construye al volver, no al bajar.
- Escenario: capa `torre`, fase subida. Cada etiqueta de retorno baja y la multiplicación del marco se completa con números vivos.
- Chequeo (cálculo con datos en vivo): con el `n` del deslizador (por defecto 4) y un marco elegido al azar entre 1 y `n`: "¿Qué valor devuelve el
  marco con `n = k`?" Respuesta: `k!` (con n = 4 y k = 3: 6). Pistas: 1) "devuelve `k` por lo que le devolvió el marco de arriba"; 2) la cadena
  `1, 1, 2, 6, 24` hasta ese marco.
- Profundizar: "El acto de fe": no hace falta seguir toda la pila para confiar en una función recursiva; basta comprobar el caso base y que, si
  `fact(n - 1)` es correcto, `fact(n)` también lo es. Es la inducción matemática.
- Citas: thinpython PDF 87 (More Recursion: `factorial` paso a paso; Figure 6-1 con la pila de `factorial(3)` en PDF 88); thinpython PDF 89 (Leap of Faith).

### Paso 5. ¿Antes o después de la llamada? (DESTACADO con predicción)
- Idea: lo que está antes de la llamada recursiva se ejecuta al bajar; lo que está después, al subir. Por eso mover un `print` invierte el orden.
- Escenario: capa `cuenta` + capa `orden`. Interruptor que mueve `print(n)` después de la llamada:
  ```python
  def cuenta(n):
      if n == 0:
          print("fin")
          return
      cuenta(n - 1)
      print(n)
  ```
- `.destacado` (la confusión natural, que la recursión "va y ya está"): "Con el `print` después de la llamada, ¿qué imprime `cuenta(3)`?"
  Predicción con cuatro casillas ordenables. Respuesta: `fin`, `1`, `2`, `3` (verificado). Cada `print(n)` espera en su marco a que vuelva la llamada de
  arriba; el primero en poder imprimir es el más alto.
- Chequeo (elección con explicación): "¿Por qué el 3 sale último?" Correcta: "el marco con n = 3 fue el primero en apilarse y es el último en
  desapilarse". Distractores: "porque Python ordena la salida" (no ordena nada); "porque el 3 es el más grande" (con otra regla de achique el orden sería
  otro); "porque hay un error" (es el comportamiento correcto).
- Cita: thinpython PDF 74 (Figure 5-1, mismo diagrama, leerlo pensando en el orden de salida).

### Paso 6. Sin caso base, la pila se desborda (TRAMPA)
- Idea: si el caso base falta o nunca se alcanza, la pila crece hasta el límite y el programa muere. `fact(-1)` salta el 0: -1, -2, -3... Un guardián
  que revise el tipo y el signo lo evita.
- Escenario: capa `sinbase`. Con `fact(-1)` la torre sube rápido, el medidor de profundidad llega al techo y aparece el error real.
  Python (3.13.5): `RecursionError: maximum recursion depth exceeded` con la línea `[Previous line repeated 996 more times]`.
  R (4.6.1): `Error: evaluation nested too deeply: infinite recursion / options(expressions=)?`.
- Chequeo (predicción antes de tocar, opción múltiple): "¿Cuál de estas llamadas NO termina con el `fact` del paso 3?"
  Correcta: `fact(-1)` (y también `fact(1.5)`: 1.5, 0.5, −0.5... nunca vale 0). Distractores: `fact(0)` -> "es el caso base: devuelve 1 enseguida";
  `fact(10)` -> "baja de 10 a 0 en diez pasos"; `fact(1000)` -> "con 1001 marcos supera el límite de 1000 de Python: también falla, pero no por falta de
  caso base". El constructor puede ofrecer `fact(1.5)` como opción también correcta (selección múltiple) o dejarlo en el profundizar.
- Profundizar: "El límite de la pila": `sys.getrecursionlimit()` vale 1000 en Python y `getOption("expressions")` vale 5000 en R (verificados);
  Think Python muestra el error con el nombre viejo `RuntimeError`; desde Python 3.5 se llama `RecursionError` (es una subclase de `RuntimeError`).
  Y el guardián: `if not isinstance(n, int) or n < 0: raise ValueError(...)`.
- Citas: thinpython PDF 74 (Infinite Recursion, sigue en PDF 75); thinpython PDF 90 (Checking Types: `factorial(1.5)` y `factorial(-2)`, guardianes; sigue
  en PDF 91).

### Paso 7. Dos llamadas por marco: el árbol de Fibonacci
- Idea (lo más técnico): si cada marco hace dos llamadas, la pila deja de ser una torre simple y el recorrido es un árbol; la profundidad máxima sigue
  siendo pequeña (n) pero la cantidad de llamadas crece muy rápido, porque se recalculan los mismos valores. Guardar resultados (memoización) lo arregla.
- Escenario: capa `arbol`. `fib(n)` con `fib(0) = 0`, `fib(1) = 1`. Deslizador `n` de 0 a 7; el árbol se dibuja y un contador muestra las llamadas.
  La pila real en cada instante es UN camino del árbol (se resalta), no el árbol entero.
  Llamadas verificadas (sin memo): n = 0: 1, 1: 1, 2: 3, 3: 5, 4: 9, 5: 15, 6: 25, 7: 41.
- Chequeo (cálculo con datos en vivo): con `n = 5`: "¿Cuántas veces se llama `fib(2)`?" Respuesta: 3. Pistas: "cuenta los nodos con el 2 en el árbol";
  "`fib(5)` llama a `fib(4)` y `fib(3)`, y los dos terminan pidiendo `fib(2)`". Segunda pregunta opcional: "¿cuál es la mayor cantidad de marcos `fib` en
  la pila a la vez?" -> 5 (el camino 5, 4, 3, 2, 1).
- Profundizar: "Memoización": `functools.cache` en Python; con memo `fib(20)` hace 21 llamadas en lugar de 21891 (codigo3).
- Citas: thinpython PDF 89 (One More Example: `fibonacci` con dos casos base, sigue en PDF 90); thinpython PDF 93 (Exercises 6-2 Ackermann, 6-3
  palíndromo, 6-4 `is_power`, 6-5 máximo común divisor; siguen en PDF 94).

## Vida real (Python y R)

Mismo dato que el recorrido: `fact(4)`. Se cierra contra la librería (`math.factorial`, `factorial`) y se muestra el límite de la pila de cada lenguaje.
El visual es la torre del recorrido. En R la función se llama `fact` (no `factorial`) para no tapar la función integrada; en Python se usa el mismo
nombre para que las ids coincidan.

### Python (verificado, Python 3.13.5)

| id | línea |
|---|---|
| imp | `import math` |
| imp | `import sys` |
| (vacía) | |
| def | `def fact(n):` |
| base | `    if n == 0:` |
| ret1 | `        return 1` |
| rec | `    resultado = n * fact(n - 1)` |
| ret | `    return resultado` |
| (vacía) | |
| llamada | `print(fact(4))` |
| lib | `print(math.factorial(4))` |
| limite | `print(sys.getrecursionlimit())` |

```python
import math
import sys

def fact(n):
    if n == 0:
        return 1
    resultado = n * fact(n - 1)
    return resultado

print(fact(4))
print(math.factorial(4))
print(sys.getrecursionlimit())
```
Salida real:
```
24
24
1000
```

### R (verificado, R 4.6.1)

```r
fact <- function(n) {
  if (n == 0) {
    return(1)
  }
  resultado <- n * fact(n - 1)
  return(resultado)
}

print(fact(4))
print(factorial(4))
print(getOption("expressions"))
```
Ids en R: def, base, ret1, (`}` sin id), rec, ret, (`}` sin id), llamada, lib, limite. R no tiene `imp`.
Salida real:
```
[1] 24
[1] 24
[1] 5000
```
Nota para la narración: en R el número de `options(expressions)` no es exactamente un límite de marcos (cuenta expresiones anidadas) y a veces el error
que salta antes es de la pila de C ("C stack usage is too close to the limit"); la página lo dice en una línea sin entrar en detalle.

### Foto de estado por línea ejecutada

Pila de abajo arriba (`main` = `__main__` / global). `?` = la multiplicación espera el valor de arriba.

| # | id | marco activo | pila (valores de n) | qué pasa |
|---|---|---|---|---|
| 1-2 | imp, imp | main | main | (solo Python) |
| 3 | def | main | main | `fact → función` |
| 4 | llamada | main | main | empieza `print(fact(4))` |
| 5 | base | fact n=4 | main, 4 | `4 == 0` False |
| 6 | rec | fact n=4 | main, 4 | `resultado = 4 * ?`, llama `fact(3)` |
| 7 | base | fact n=3 | main, 4, 3 | False |
| 8 | rec | n=3 | main, 4, 3 | `3 * ?` |
| 9 | base | n=2 | main, 4, 3, 2 | False |
| 10 | rec | n=2 | ... 2 | `2 * ?` |
| 11 | base | n=1 | ... 2, 1 | False |
| 12 | rec | n=1 | ... 2, 1 | `1 * ?` |
| 13 | base | n=0 | main, 4, 3, 2, 1, 0 | True: profundidad máxima (5 marcos `fact`) |
| 14 | ret1 | n=0 | se desapila 0 | devuelve 1 |
| 15 | rec (termina) | n=1 | main, 4, 3, 2, 1 | `resultado = 1 * 1 = 1` |
| 16 | ret | n=1 | se desapila 1 | devuelve 1 |
| 17 | rec (termina) | n=2 | main, 4, 3, 2 | `resultado = 2 * 1 = 2` |
| 18 | ret | n=2 | se desapila 2 | devuelve 2 |
| 19 | rec (termina) | n=3 | main, 4, 3 | `resultado = 3 * 2 = 6` |
| 20 | ret | n=3 | se desapila 3 | devuelve 6 |
| 21 | rec (termina) | n=4 | main, 4 | `resultado = 4 * 6 = 24` |
| 22 | ret | n=4 | main | devuelve 24 |
| 23 | llamada (termina) | main | main | imprime `24` |
| 24 | lib | main | main | imprime `24` |
| 25 | limite | main | main | imprime `1000` (R: `[1] 5000`) |

25 eventos en Python, 23 en R. La línea `rec` aparece dos veces por marco (al llamar y al terminar la cuenta): el narrador debe distinguirlas
("bajando: deja pendiente 4 * ?" / "subiendo: completa 4 * 6 = 24"). Si el motor no admite dos eventos en la misma línea seguidos de otro marco, se
puede marcar el segundo como el evento de `ret` con la cuenta en la narración.

### Predicción antes de reproducir (`#vrPred`)
"¿Cuántas veces se ejecuta la línea `if n == 0:` al calcular `fact(4)`?" Respuesta: 5 (para n = 4, 3, 2, 1, 0). Distractores: 4 (olvida el caso base,
que también pasa por el `if`), 1 (cree que el `if` se evalúa una vez por programa), 24 (confunde el resultado con las llamadas).

### Trampas reales (retos `codigo1`..`codigo3`)

**codigo1: el caso base que nunca llega.**
```python
def fact(n):
    if n == 0:
        return 1
    resultado = n * fact(n - 1)
    return resultado

print(fact(-1))
```
Salida real (últimas líneas): `[Previous line repeated 996 more times]` y `RecursionError: maximum recursion depth exceeded`.
```r
fact <- function(n) {
  if (n == 0) {
    return(1)
  }
  resultado <- n * fact(n - 1)
  return(resultado)
}

print(fact(-1))
```
Salida real: `Error: evaluation nested too deeply: infinite recursion / options(expressions=)?`.
Pregunta: "¿Cuál es el arreglo más seguro?" Correcta: cambiar el caso base a `if n <= 0:` o, mejor, un guardián que rechace negativos con un error claro.
Distractores: "subir el límite con `sys.setrecursionlimit`" -> "solo tarda más en fallar: -1 nunca llega a 0"; "usar `try`" -> "esconde el error, no lo arregla".

**codigo2: enteros exactos en Python, doubles en R.**
```python
def fact(n):
    if n == 0:
        return 1
    return n * fact(n - 1)

print(fact(25))
print(fact(25) == 15511210043330985984000000)
```
Salida real: `15511210043330985984000000` y `True`.
```r
fact <- function(n) {
  if (n == 0) {
    return(1)
  }
  resultado <- n * fact(n - 1)
  return(resultado)
}

print(fact(25))
print(format(fact(25), scientific = FALSE))
print(fact(171))
```
Salida real: `[1] 1.551121e+25`, `[1] "15511210043330986055303168"`, `[1] Inf`.
Pregunta: "¿Por qué R escribe 15511210043330986055303168 y no 15511210043330985984000000?" Correcta: "R guarda el número en un double, con unos 16 dígitos
exactos; Python usa enteros de tamaño arbitrario". Pista para "R se equivocó al multiplicar": "cada multiplicación redondea al double más cercano".
Nota: el código Python de codigo2 no tiene la variable `resultado` (devuelve directo); es otra forma válida y así se corrió.

**codigo3: Fibonacci sin y con memoria.**
```python
import functools

llamadas = 0

def fib(n):
    global llamadas
    llamadas = llamadas + 1
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(20), llamadas)

@functools.cache
def fib_memo(n):
    if n < 2:
        return n
    return fib_memo(n - 1) + fib_memo(n - 2)

print(fib_memo(20), fib_memo.cache_info().misses)
```
Salida real: `6765 21891` y `6765 21`.
```r
llamadas <- 0

fib <- function(n) {
  llamadas <<- llamadas + 1
  if (n < 2) {
    return(n)
  }
  return(fib(n - 1) + fib(n - 2))
}

print(fib(20))
print(llamadas)
```
Salida real: `[1] 6765` y `[1] 21891`.
Pregunta: "¿Por qué con memoria bastan 21 llamadas?" Correcta: "cada `fib(k)` de 0 a 20 se calcula una sola vez y después se lee guardado". Distractores:
"porque `cache` usa un bucle" -> "sigue siendo recursiva; lo que cambia es que no repite"; "porque la pila es más corta" -> "la profundidad es la misma, unos
20 marcos; lo que baja es el total de llamadas". (Usa `global` y `<<-`, que se vieron en "Funciones y el marco de llamada".)

`p.vr-nota`: "En una línea: `math.factorial(4)` en Python y `factorial(4)` en R."
`details.profundizar` "La versión con bucle": la misma cuenta con un acumulador (`resultado = 1; for k in range(1, n + 1): resultado = resultado * k`) usa
una sola variable que cambia, sin pila que crezca; enlaza con "Bucles y variables que cambian". Si se muestra salida, el constructor debe correrla
(esperado: 24).

## Retos (8 en la parte 3, más codigo1..3)

1. **`ojo-termina`**, ojo clínico (5 rondas, 4 de 5). Generador: funciones recursivas cortas al azar con un caso base (`n == 0`, `n <= 0`, `n == 1`) y un
   paso (`n - 1`, `n - 2`, `n // 2`, `n + 1`) y un argumento inicial (enteros de −2 a 7). Pregunta: "¿Termina?" (sí/no). Pista tras fallar: la secuencia de
   argumentos escrita (por ejemplo 5, 3, 1, −1, ... nunca pasa por 0).
2. **`ojo-profundidad`**, ojo clínico (5 rondas). Generador: `f(n)` con paso `n - 1` o `n // 2` y caso base `n == 0` o `n <= 1`, `n` de 1 a 16. Pregunta:
   "¿Cuántos marcos `f` hay en la pila en el punto más profundo?" (numérico). Pista: escribir la secuencia de `n`.
3. **`construir-torre`**, construir: Francisco apila y desapila marcos con botones ("llamar", "devolver") y escribe en cada marco el valor que devuelve,
   para `suma(n)` = 1 + 2 + ... + n con `suma(0) = 0` y `n` al azar entre 3 y 5. Objetivos: la torre llega exactamente al caso base; cada marco devuelve el
   valor correcto; el marco de abajo devuelve `n (n + 1) / 2`. Si apila de más (`n = -1`) el reto lo marca: "te pasaste del caso base".
4. **`a-mano-orden`**, a mano: se genera `n` entre 2 y 4 y una función con un `print` antes y otro después de la llamada (`print("baja", n)`,
   `cuenta(n - 1)`, `print("sube", n)`). Francisco escribe la salida completa en orden. Pistas: 1) "lo de antes de la llamada sale al bajar"; 2) "lo de
   después sale al subir, en orden inverso"; 3) la salida para n = 2.
5. **`a-mano-mcd`**, a mano: el máximo común divisor recursivo (`mcd(a, b) = a` si `b == 0`, si no `mcd(b, a % b)`) con `a` y `b` al azar entre 12 y 99.
   Francisco llena la tabla de llamadas (a, b, a % b) y el resultado. Pistas: 1) "el caso base es cuando b vale 0"; 2) la primera fila; 3) la solución.
   Se puede comprobar con `math.gcd`. Inspirado en Think Python ej. 6-5 (citar como lectura).
6. **`cazar-recursion`**, cazar el error (3 variantes, marcar la línea):
   - a) `return n * fact(n)` (no se achica: recursión infinita).
   - b) caso base `if n == 1: return 1` y llamada con `fact(0)` (salta el caso base: 0, −1, ...).
   - c) `fact(n - 1)` llamado sin `return` ni guardar el valor: `n * fact(n - 1)` se calcula y se pierde, y la función devuelve `None` (Python). Se
     muestra el `TypeError` que aparece en el marco de abajo.
7. **`prop-pila`**, propiedades (opción múltiple, mezclar, reintentable): "Durante `fact(4)`, en el punto más profundo, ¿qué es cierto?"
   Correcta: "hay cinco marcos `fact`, cada uno con su propia `n`, y ninguno terminó todavía salvo el que está por devolver 1". Distractores y pistas:
   "hay un solo marco cuya `n` va bajando" -> "vuelve al paso 3: cada llamada crea un marco nuevo"; "los marcos de arriba ya devolvieron su valor" ->
   "nada vuelve hasta tocar el caso base"; "la multiplicación `4 * 6` ya se hizo" -> "ese 6 todavía no existe".
8. **`prop-recursion-bucle`**, propiedades: "¿Qué ventaja tiene el bucle frente a la recursión para calcular `fact(5000)` en Python?"
   Correcta: "no apila marcos, así que no choca con el límite de 1000". Distractores y pistas: "da otro resultado" -> "las dos dan el mismo número";
   "la recursión no puede con números grandes" -> "los enteros de Python no tienen techo; lo que tiene techo es la pila"; "el bucle es siempre más corto de
   escribir" -> "no siempre: recorrer un árbol es más natural con recursión".

Lecturas de inspiración (citar, no copiar): Think Python ej. 5-4 y 5-5 (leer un programa recursivo y dibujar su pila, PDF 78-81), 6-2 (Ackermann), 6-3
(palíndromo recursivo), 6-4 (`is_power`) y 6-5 (máximo común divisor), PDF 93-94. Python Workout no tiene ejercicios de recursión (lo dice su mapa).

## Memoria

`B.ordenar` (armar `fact`; piezas en orden):
1. `def fact(n):`
2. `    if n == 0:`
3. `        return 1`
4. `    resultado = n * fact(n - 1)`
5. `    return resultado`
Distractores: `    resultado = n * fact(n)`, `    if n == 1: return 0`, `    fact(n - 1)`.

Tarjetas (8):
1. ¿Qué es el caso base? -> La parte que responde sin volver a llamarse; corta la recursión.
2. ¿Qué es el paso recursivo? -> La llamada a la misma función con un problema más pequeño, que se acerca al caso base.
3. ¿Cuántos marcos hay en lo más profundo de `fact(n)`? -> `n + 1` marcos `fact` (de `n` a 0), más el de `__main__`.
4. ¿Cuándo se hace la multiplicación de `fact`? -> Al subir: cada marco multiplica cuando le vuelve el valor del marco de arriba.
5. ¿Qué imprime una recursión con el `print` después de la llamada? -> En orden inverso al de las llamadas.
6. ¿Qué error da una recursión sin fin en Python? -> `RecursionError: maximum recursion depth exceeded` (límite 1000 marcos por defecto).
7. ¿Por qué `fib` recursivo es lento? -> Recalcula los mismos valores muchas veces (`fib(20)` hace 21891 llamadas); la memoización lo baja a 21.
8. ¿Qué es el "acto de fe"? -> Confiar en que la llamada recursiva es correcta si el caso base lo es y cada paso usa bien el resultado más pequeño.

## Citas (11)

| id de fuente | pág. PDF | pág. impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| thinpython | 72 | 51 | Cap. 5: Recursion | `countdown(n)` y `print_n(s, n)`; el caso base (sigue en PDF 73) | Pasos 1 y 2 |
| thinpython | 74 | 53 | Cap. 5: Stack Diagrams for Recursive Functions | Figure 5-1: varios marcos `countdown` con distinto `n`; el marco con n = 0 es el caso base | Pasos 3 y 5 |
| thinpython | 74 | 53 | Cap. 5: Infinite Recursion | `recurse()` sin caso base; el error que el libro llama `RuntimeError` (sigue en PDF 75) | Paso 6 |
| thinpython | 87 | 66 | Cap. 6: More Recursion | `factorial(n)` paso a paso con la base n == 0 (sigue hasta PDF 89) | Paso 4 |
| thinpython | 88 | 67 | Cap. 6: More Recursion, Figure 6-1 | el diagrama de pila de `factorial(3)` con los valores de retorno | Al terminar el paso 4 y en la vida real |
| thinpython | 89 | 68 | Cap. 6: Leap of Faith | confiar en la llamada recursiva en lugar de seguir todo el flujo | Profundizar del paso 4 |
| thinpython | 89 | 68 | Cap. 6: One More Example | `fibonacci` con dos casos base (sigue en PDF 90) | Paso 7 |
| thinpython | 90 | 69 | Cap. 6: Checking Types | `factorial(1.5)` y `factorial(-2)` no terminan; `isinstance` y guardianes (sigue en PDF 91) | Paso 6 y codigo1 |
| thinpython | 91 | 70 | Cap. 6: Debugging | imprimir los argumentos al entrar y el valor al salir, con sangría según la profundidad | Vida real |
| thinpython | 93 | 72 | Cap. 6: Exercises | 6-2 Ackermann, 6-3 palíndromo, 6-4 `is_power`, 6-5 máximo común divisor (sigue en PDF 94) | Retos |
| thinpython | 78 | 57 | Cap. 5: Exercises | 5-4 y 5-5: leer un programa recursivo y dibujar su pila (el bloque de ejercicios ocupa PDF 78-81) | Retos |
| thinpython | 49 | 28 | Cap. 3: Stack Diagrams | el diagrama de pila de funciones normales, el punto de partida de esta página | Paso 3, como repaso |

(12 filas; las dos de PDF 74 y las dos de PDF 89 son secciones distintas de la misma página.)

## Riesgos y notas para quien construye

- Solo hay una fuente: Think Python. Python Workout no tiene recursión y el material de la materia tampoco (ni en Python ni en R). La página lo dice con
  naturalidad. Conviene igualmente atar con la materia de máster donde aparezca la recursión (árboles de decisión), pero sin citar páginas que no están
  en los mapas.
- Errata o desfase del libro: Think Python (escrito con Python 3.4) muestra `RuntimeError: Maximum recursion depth exceeded`; en Python 3.13.5 el error es
  `RecursionError: maximum recursion depth exceeded` (subclase de `RuntimeError`). Decirlo en el paso 6.
- R: el límite que reporta `getOption("expressions")` (5000) no es un número de marcos; según la máquina, `fact(-1)` puede fallar con "evaluation nested
  too deeply" (lo que salió aquí) o con "C stack usage is too close to the limit". La página muestra el que salió en esta máquina y menciona el otro.
- La línea `rec` genera dos eventos por marco (al bajar y al subir). Revisar que el motor `B.vidaReal` lo soporte; si no, usar la narración del evento `ret`.
- `fact(4)` en Python devuelve int (24) y en R double (`[1] 24`); se ven iguales.
- codigo2 en Python usa una versión de `fact` sin `resultado`; codigo1 y codigo2 en R usan la versión con `resultado`. Así se corrieron: si el
  constructor los unifica, debe volver a correrlos.
- El reto `construir-torre` usa `suma(n)`: comprobar que el valor final se muestre como entero.
- El catálogo deja `siguientes` vacío; la página no debe inventar conexiones. Puede mencionar en texto (sin enlace) que la recursión vuelve en árboles
  y en divide y vencerás.
