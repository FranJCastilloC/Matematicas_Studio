# Especificación: Leer un error y depurar (leer-errores)

- Ruta: `python-base` (Programación con datos), orden 15, tanda 8
- Prerrequisitos: "Funciones y el marco de llamada"
- Siguientes: (ninguno en el catálogo)
- Aparece: SM142002, UD1
- Resumen del catálogo: "Un mensaje de error dice dónde y por qué falló el programa; aprender a leerlo ahorra la mitad del trabajo."
- Archivo: `biblioteca/conceptos/leer-errores.html`. Grupo "Programación con datos": la imagen central es un diagrama (pila de marcos y traceback), no una fórmula.

## Imagen central

**El lector de tracebacks.** Un programa pequeño de tres piezas a la izquierda del escenario y, a la derecha, la pila de marcos
que se formó cuando falló. Es el mismo programa del "Vida real" (datos inventados, ver abajo):

```
notas = {"ana": [7, 9, 8], "luis": [], "eva": [10, "6"]}
promedio(lista)  -> suma y divide entre len(lista)
informe(nombre)  -> promedio(notas[nombre])
```

Qué se ve:
- **Panel de código** (con números de línea idénticos al archivo corrido: la línea 8 es `total = total + x`, la 9 es `return total / len(lista)`,
  la 12 es `return promedio(notas[nombre])`, la 16 es `print(nombre, informe(nombre))`).
- **Pila de marcos**: cajas apiladas `<module>` (abajo), `informe` (encima), `promedio` (arriba), cada una con sus variables locales
  (`nombre = "luis"`, `lista = []`, `total = 0`). Es el mismo dibujo de pila que Francisco ya vio en "Funciones y el marco de llamada".
- **Traceback** en texto, como lo imprime Python, con cada renglón clicable: al pasar el cursor o tocar un renglón, se ilumina el
  marco correspondiente y la línea de código. La **última línea** (tipo y mensaje) va pintada con `--bad` y la etiqueta "QUÉ";
  los pares `File ..., line N, in f` llevan la etiqueta "DÓNDE" con `--accent` cuando se encienden.

Controles concretos:
- **Chips de nombre**: `ana`, `luis`, `eva`, `pepe`. Al elegir uno y tocar "Ejecutar", la pila crece marco a marco (animación corta)
  y, si falla, aparece el traceback. `ana` termina bien (8.0); `luis` da `ZeroDivisionError` en la línea 9; `eva` da `TypeError` en la
  línea 8; `pepe` da `KeyError` en la línea 12 (la pila no llega a `promedio`).
- **Botón "Leer de abajo hacia arriba"**: recorre el traceback desde el QUÉ hasta el primer DÓNDE, encendiendo un renglón por toque.
- **Pestaña Python / R**: muestra el mismo fallo como lo cuenta R (`Error in total + x : non-numeric argument to binary operator` y
  `Calls: informe -> promedio`), o la ausencia de error (NaN) cuando R no se queja.
- **Inspector de marco** (desde el paso 6): tocar una caja de la pila despliega sus variables en el instante del fallo.
- **Clasificador** (paso 5): tres tarjetas de programa roto que se arrastran (o se asignan con botones, para móvil) a las columnas
  "sintaxis", "ejecución", "semántico".

Lo que hace evidente la idea: el traceback es la pila de marcos escrita en texto. La última línea dice QUÉ pasó; las de arriba dicen
DÓNDE, desde la llamada más externa hasta la más interna.

## Hipótesis inicial

"Cuando un programa se rompe y escupe un bloque de texto rojo, ¿qué parte lees primero y por qué? ¿Crees que la línea que señala
el error es siempre la que hay que arreglar?"

## Pasos (7)

### Paso 1. Una cadena que se detiene
- Idea: un programa es una cadena de encargos; cuando algo falla, la cadena se detiene en un sitio concreto.
- Escenario: modo "cadena" sin código. Tres estaciones como cajas: "Informe pide las notas", "Promedio suma", "Promedio divide entre
  cuántas notas hay". Una ficha con el nombre "luis" (que no tiene notas) espera al inicio. No se anima nada hasta responder.
- Chequeo (predicción antes de tocar, sin símbolos): "Luis no tiene ninguna nota. ¿En qué estación se detiene la cadena?"
  - Correcta: "Al dividir". Sumar cero notas da cero sin problema; dividir entre cero cantidades es imposible.
  - "Al pedir las notas": no, luis sí existe en la lista de alumnos; lo que tiene es una lista vacía.
  - "Al sumar": sumar ninguna nota no se rompe, simplemente el total queda en 0.
  - "No se detiene, da 0": esa sería la respuesta de una calculadora que inventa; Python se niega a dividir entre cero.
  Al resolver, la ficha recorre las estaciones y la tercera se pinta con `--bad`.

### Paso 2. La última línea dice qué
- Idea: la última línea del traceback nombra el tipo de error y el motivo.
- Escenario: modo "traceback". Aparece el traceback real de `luis` (versión sin capturar, ver "Vida real", bloque `uncaught.py`) y el
  panel de código. La última línea todavía está tapada (se ve una barra gris) hasta resolver.
- Chequeo (elección con explicación): "¿Qué línea del bloque te dice qué tipo de fallo fue?"
  - Correcta: "La última". `ZeroDivisionError: division by zero` es el qué.
  - "La primera (`Traceback (most recent call last)`)": es solo el título; avisa que lo más reciente va al final.
  - "La que tiene el número de línea más alto": los números de línea dicen dónde, no qué.
  - "La que tiene `~~~~^^^`": esas marcas subrayan la parte exacta de la expresión, pero no nombran el error.
- Cita: Think Python PDF 260 (impresa 239), cuando terminas el paso.

### Paso 3. Las de arriba dicen dónde
- Idea: cada par `File ..., line N, in f` es un marco de la pila; se leen de abajo hacia arriba: dónde falló, quién llamó, quién llamó a ese.
- Escenario: modo "pila + traceback". Ahora cada renglón está conectado con su caja de la pila. Botón "Leer de abajo hacia arriba".
  Los chips de nombre se activan.
- Chequeo (cálculo con datos en vivo): "Ejecuta `pepe`. ¿Cuántos marcos tiene su traceback y en qué función se detuvo?"
  - Correcta: "2 marcos; se detuvo en `informe` (línea 12)". `notas["pepe"]` falla antes de llamar a `promedio`.
  - "3 marcos, en `promedio`": eso es luis o eva; pepe nunca llega a `promedio`.
  - "1 marco, en `<module>`": el error ocurre dentro de `informe`, que sí alcanzó a abrir su marco.
  - "Depende de la nota": pepe no tiene notas; el fallo es al buscar el nombre.
- Citas: Think Python PDF 49 (impresa 28), diagrama de pila y traceback; PDF 50 (impresa 29), el orden del traceback es el de los marcos.
- Detalle para la página (con naturalidad): el libro en la PDF 49 muestra el encabezado viejo `Traceback (innermost last)`;
  más adelante (PDF 77) y en Python 3 actual dice `Traceback (most recent call last)`. Mismo orden, otro título.

### Paso 4. Dónde falla no es dónde está la causa (destacado con predicción)
- Idea: el traceback señala el síntoma; la causa puede estar antes (en los datos, en otra función).
- Escenario: modo "síntoma y causa". El traceback de luis apunta a la línea 9 (`return total / len(lista)`), pero una flecha de
  `--accent` que aparece solo tras responder va hasta la línea 3, donde `"luis": []`.
- `.destacado` con predicción (esta es la confusión natural del concepto: "la línea que marca el error es la que hay que arreglar"):
  "El error de luis señala la línea 9. ¿Qué cambiarías para arreglarlo?"
  - Correcta: "Depende de qué quieres: o la lista de luis no debería estar vacía (línea 3), o `promedio` debe decidir qué hacer con una
    lista vacía (antes de la línea 9)". La línea 9 está bien escrita; es el dato el que no cumple lo que la función suponía.
  - "Borrar la división de la línea 9": desaparece el error y el resultado deja de ser un promedio.
  - "Envolver todo en `try/except` y seguir": esconde el síntoma; el informe saldría sin luis y sin aviso.
  - "La línea 12, porque llama a promedio": `informe` solo pasa la lista; no la fabrica.
- Cita: Think Python PDF 76 (impresa 55) y PDF 77 (impresa 56): el mensaje indica una línea en la que no hay nada mal; la causa está antes.
- Profundizar ("¿Qué es una precondición?"): `promedio` supone que la lista no está vacía; esa suposición es una precondición. Think
  Python PDF 91 (impresa 70) propone revisar precondiciones al entrar a una función. Mostrar la versión con guarda:
  `if len(lista) == 0: return None` y por qué devolver `None` mueve el problema a quien lo use.

### Paso 5. Tres familias de errores
- Idea: sintaxis (no arranca), ejecución (arranca y se detiene), semántico (termina y miente).
- Escenario: modo "clasificador". Tres tarjetas con programa y salida real:
  1. `def informe(nombre)` sin dos puntos -> `SyntaxError: expected ':'` (Python 3.13, salida real; no corre ni una línea).
  2. `notas = [7, 9, 8]` y `print(notas[3])` -> `IndexError: list index out of range`.
  3. El promedio de luis en R: `luis NaN` (sin mensaje de error).
- Chequeo (elección con explicación): asignar cada tarjeta a su familia. Correcta: 1 sintaxis, 2 ejecución, 3 semántico.
  Pistas por error: si pone la 3 en "ejecución": "¿Viste algún mensaje? R terminó y te dio un número que no es un promedio";
  si pone la 1 en "ejecución": "Fíjate que no se imprimió nada de lo de antes: Python ni siquiera empezó"; si pone la 2 en "semántico":
  "Se detuvo con un mensaje; un error semántico no avisa".
- **Trampa / contraejemplo de la página**: el mismo programa es error de ejecución en Python y error semántico en R. Con luis, Python
  lanza `ZeroDivisionError`; R calcula `0/0` y devuelve `NaN` sin quejarse. Con pepe, Python da `KeyError`; R devuelve `NULL` y
  luego `NaN`. Un lenguaje que no se queja no significa un programa correcto.
- Nota para la página: Think Python (PDF 256, impresa 235) dice que el mensaje típico es `SyntaxError: invalid syntax`; Python 3.13
  ahora dice `SyntaxError: expected ':'`, más útil. Contarlo como diferencia de versión, no como errata.
- Citas: Think Python PDF 37-38 (impresas 16-17), los tres tipos; PDF 256 (impresa 235), apertura del capítulo 20; PDF 262 (impresa 241),
  errores semánticos.

### Paso 6. El estado del programa al fallar
- Idea: en el instante del fallo, cada marco guarda sus variables; mirarlas explica el porqué.
- Escenario: modo "inspector". Se ejecuta `eva`. Tocar cada caja de la pila muestra sus variables en el momento del fallo:
  `<module>`: `nombre = "eva"`; `informe`: `nombre = "eva"`; `promedio`: `lista = [10, "6"]`, `total = 10`, `x = "6"`.
  Las variables de `promedio` aparecen tapadas hasta resolver el chequeo.
- Chequeo (cálculo con datos en vivo): "Cuando falla eva en la línea 8, ¿cuánto vale `total` y qué hay en `x`?"
  - Correcta: "`total` = 10 y `x` = `"6"` (texto)". La primera vuelta sumó 0 + 10; la segunda intenta 10 + "6".
  - "`total` = 16": eso supone que `"6"` se convirtió a número; Python no convierte texto a número por su cuenta.
  - "`total` = 0, `x` = 10": la primera suma (0 + 10) sí funcionó.
  - "`total` = "106"": Python no concatena un número con un texto; por eso hay `TypeError`.
- Enlace natural: la página "Tipos y coerción" (Python no convierte; R sí, por eso en R `c(10, "6")` ya es todo texto).
- Profundizar ("Mirar dentro sin prints"): `breakpoint()` o `python -m pdb` detienen el programa y dejan mirar los marcos; en R,
  `browser()` dentro de una función y `traceback()` justo después de un error en la consola interactiva (no funciona con `Rscript`).
  Think Python PDF 261 (impresa 240) menciona `pdb` para mirar el estado justo antes del error.
- Cita: Think Python PDF 261 (impresa 240): qué significa cada excepción común (`TypeError`, `KeyError`, `AttributeError`, `IndexError`).

### Paso 7. El mismo error contado por R
- Idea: R pone qué y dónde en la primera línea y la cadena de llamadas debajo; `tryCatch` atrapa el error como `try/except`.
- Escenario: pestaña R. Salida real de `uncaught.R` (Rscript):
  ```
  Error in total + x : non-numeric argument to binary operator
  Calls: informe -> promedio
  Execution halted
  ```
  Tres zonas resaltables: `total + x` (dónde, la expresión exacta), el texto tras los dos puntos (qué), y `Calls:` (la pila, leída de
  izquierda a derecha, de lo externo a lo interno: al revés que el orden vertical de Python, que pone lo más reciente abajo).
- Chequeo (elección con explicación): "En el mensaje de R, ¿dónde está la función en la que falló?"
  - Correcta: "Al final de `Calls:` (promedio), y la expresión exacta va después de `Error in`".
  - "Al principio de `Calls:`": `informe` es la llamada más externa, como `<module>`/`informe` arriba en Python.
  - "R no lo dice": sí lo dice; lo que R no siempre hace es fallar (ver paso 5).
  - "En `Execution halted`": eso solo avisa que el script se detuvo.
- Citas: ISLR2 PDF 132 (impresa 121), 3.6.7: los errores `object 'LoadLibraries' not found` y `could not find function` antes de
  definir la función; prog4html ancla `funciones`: `seq(20, 2, 2)` da el error "wrong sign in 'by' argument" (un error de R del material de la
  materia). Aclarar en la página que el material de UD1 no trae una sección sobre errores ni depuración.

## Vida real (Python y R)

Datos: los del recorrido (`notas` inventadas: ana [7, 9, 8], luis [], eva [10, "6"], y el nombre `pepe` que no existe).
El programa recorre los cuatro nombres, atrapa cada error y escribe su QUÉ y su DÓNDE, recorriendo la pila con un bucle explícito.
Cierra comparando con la función de librería que formatea el error (`traceback.format_exception_only` en Python; `print(e)` del objeto
condición en R).

### Python (corrido con Python 3.13.5; archivo `errores.py`, copiar tal cual: los números de línea de la salida dependen de las líneas en blanco)

```python
import traceback

notas = {"ana": [7, 9, 8], "luis": [], "eva": [10, "6"]}

def promedio(lista):
    total = 0
    for x in lista:
        total = total + x
    return total / len(lista)

def informe(nombre):
    return promedio(notas[nombre])

for nombre in ["ana", "luis", "eva", "pepe"]:
    try:
        print(nombre, informe(nombre))
    except Exception as e:
        print(nombre, "fallo")
        pila = traceback.extract_tb(e.__traceback__)
        for marco in pila:
            print("  donde:", marco.name, "linea", marco.lineno)
        print("  que:", type(e).__name__ + ":", e)
        print("  libreria:", traceback.format_exception_only(e)[-1].strip())
```

Salida real:
```
ana 8.0
luis fallo
  donde: <module> linea 16
  donde: informe linea 12
  donde: promedio linea 9
  que: ZeroDivisionError: division by zero
  libreria: ZeroDivisionError: division by zero
eva fallo
  donde: <module> linea 16
  donde: informe linea 12
  donde: promedio linea 8
  que: TypeError: unsupported operand type(s) for +: 'int' and 'str'
  libreria: TypeError: unsupported operand type(s) for +: 'int' and 'str'
pepe fallo
  donde: <module> linea 16
  donde: informe linea 12
  que: KeyError: 'pepe'
  libreria: KeyError: 'pepe'
```

### R (corrido con R 4.6.1, mensajes en inglés con `LC_MESSAGES = en_US`; archivo `errores.R`)

```r
notas <- list(ana = c(7, 9, 8), luis = c(), eva = c(10, "6"))

promedio <- function(lista) {
  total <- 0
  for (x in lista) {
    total <- total + x
  }
  return(total / length(lista))
}

informe <- function(nombre) {
  return(promedio(notas[[nombre]]))
}

for (nombre in c("ana", "luis", "eva", "pepe")) {
  tryCatch({
    cat(nombre, informe(nombre), "\n")
  }, error = function(e) {
    cat(nombre, "fallo\n")
    cat("  donde:", deparse(conditionCall(e)), "\n")
    cat("  que:", conditionMessage(e), "\n")
    cat("  libreria:", capture.output(print(e)), "\n")
  })
}
```

Salida real:
```
ana 8 
luis NaN 
eva fallo
  donde: total + x 
  que: non-numeric argument to binary operator 
  libreria: <simpleError in total + x: non-numeric argument to binary operator> 
pepe NaN 
```

Notas: en R, `c(10, "6")` ya es un vector de texto (`"10" "6"`), así que falla en la primera vuelta (`0 + "10"`), no en la segunda como
Python. `list(luis = c())` guarda `NULL`; `notas[["pepe"]]` devuelve `NULL` sin error; `0/0` da `NaN`. R no tiene un equivalente de
una línea para recorrer la pila dentro de `tryCatch` sin ruido (`sys.calls()` dentro de `withCallingHandlers` mete marcos internos
como `.handleSimpleError`); por eso la línea `pila`/`for-marco` no existe en R y la página lo dice. El `Calls: informe -> promedio`
del error sin capturar es lo que hace ese papel (bloque `uncaught.R`).

### Bloques sin capturar (para los pasos 2, 3 y 7; salidas reales)

`uncaught.py` (mismas líneas 1-10 que arriba sin `import traceback`, y `print(informe("luis"))` en la línea 12):
```
Traceback (most recent call last):
  File ".../uncaught.py", line 12, in <module>
    print(informe("luis"))
          ~~~~~~~^^^^^^^^
  File ".../uncaught.py", line 10, in informe
    return promedio(notas[nombre])
  File ".../uncaught.py", line 7, in promedio
    return total / len(lista)
           ~~~~~~^~~~~~~~~~~~
ZeroDivisionError: division by zero
```
(Para mostrar en la página conviene usar los números de línea del programa del recorrido: si el bloque que se muestra tiene
`import traceback` arriba, las líneas son 16, 12 y 9. Quien construye debe correr el archivo exacto que muestra y copiar su salida;
la ruta del archivo se reemplaza por `programa.py`.)

`uncaught.R` (líneas 1-13 de `errores.R` y luego `informe("eva")`):
```
Error in total + x : non-numeric argument to binary operator
Calls: informe -> promedio
Execution halted
```

### Ids semánticos (compartidos)

| id | Python | R |
|---|---|---|
| `importar` | `import traceback` | (no existe) |
| `datos` | `notas = {...}` | `notas <- list(...)` |
| `def-promedio` | `def promedio(lista):` | `promedio <- function(lista) {` |
| `total0` | `total = 0` | `total <- 0` |
| `for-x` | `for x in lista:` | `for (x in lista) {` |
| `sumar` | `total = total + x` | `total <- total + x` |
| `dividir` | `return total / len(lista)` | `return(total / length(lista))` |
| `def-informe` | `def informe(nombre):` | `informe <- function(nombre) {` |
| `buscar` | `return promedio(notas[nombre])` | `return(promedio(notas[[nombre]]))` |
| `for-nombre` | `for nombre in [...]:` | `for (nombre in c(...)) {` |
| `intentar` | `try:` | `tryCatch({` |
| `imprimir` | `print(nombre, informe(nombre))` | `cat(nombre, informe(nombre), "\n")` |
| `capturar` | `except Exception as e:` | `}, error = function(e) {` |
| `avisar` | `print(nombre, "fallo")` | `cat(nombre, "fallo\n")` |
| `pila` | `pila = traceback.extract_tb(...)` | (no existe) |
| `for-marco` | `for marco in pila:` | (no existe) |
| `donde` | `print("  donde:", marco.name, ...)` | `cat("  donde:", deparse(conditionCall(e)), "\n")` |
| `que` | `print("  que:", ...)` | `cat("  que:", conditionMessage(e), "\n")` |
| `libreria` | `print("  libreria:", ...)` | `cat("  libreria:", capture.output(print(e)), "\n")` |

### Foto de estado por línea ejecutada (resumen; la página precalcula todas)

| momento | id | variables que cambian |
|---|---|---|
| inicio | `datos` | `notas` con 3 claves |
| ana, vuelta 3 | `sumar` | `total` 7 -> 16 -> 24; `x` = 8 |
| ana | `imprimir` | salida `ana 8.0` (R: `ana 8`) |
| luis | `dividir` | `lista = []`, `total = 0`; Python salta a `capturar` con `ZeroDivisionError`; R devuelve `NaN` |
| luis (Py) | `for-marco` x3 | `marco` = `<module>` 16, `informe` 12, `promedio` 9 |
| eva (Py) | `sumar` vuelta 2 | `total = 10`, `x = "6"` -> `TypeError` |
| eva (R) | `sumar` vuelta 1 | `total = 0`, `x = "10"` -> error |
| pepe (Py) | `buscar` | `KeyError: 'pepe'`; la pila tiene 2 marcos |
| pepe (R) | `buscar` | `notas[["pepe"]]` = `NULL` -> `dividir` da `NaN` |

Visual de la vida real: la pila de marcos del escenario, que crece y se vacía con cada llamada; en el `except`, las cajas quedan
congeladas en gris con sus variables y se van marcando a medida que corre `for-marco`.

### Predicción antes de reproducir (`#vrPred`)
"De los cuatro nombres, ¿cuántos imprimen un número en Python y cuántos en R?" Respuesta: Python 1 (solo ana); R 3 (ana 8, luis NaN,
pepe NaN). Solo uno de los tres números de R es un promedio verdadero. Distractores: "4 y 4", "1 y 1" (cree que R falla igual),
"1 y 2" (olvida que pepe da NULL y luego NaN).

### Trampas reales (retos `codigo1`, `codigo2`, `codigo3`)

`codigo1`: el `except` desnudo que miente. Código corrido:
```python
try:
    print(promedio(notas["eva"]))
except:
    print("eva no tiene notas")
```
Salida real: `eva no tiene notas`. Eva sí tiene notas; el fallo era un `TypeError` por el `"6"`. Pregunta: "¿Qué error se escondió?"
Respuesta: `TypeError` (sumar un número y un texto). Lección: atrapar todo convierte un error de ejecución en uno semántico.

`codigo2`: el `$` de R completa nombres a medias. Código corrido:
```r
notas <- list(ana = c(7, 9, 8), luis = c(), eva = c(10, "6"))
print(notas$e)
print(notas[["e"]])
```
Salida real: `[1] "10" "6"` y luego `NULL`. `$` aceptó `e` como `eva` sin avisar; `[[` exige el nombre exacto. Pregunta: "¿Qué devuelve
`notas$e`?" Respuesta: las notas de eva. En Python `notas["e"]` daría `KeyError: 'e'`.

`codigo3`: un aviso no es un error (y el programa sigue). Código corrido:
```r
x <- as.numeric(c("7", "9", "8,5"))
cat("promedio:", mean(x), "\n")
```
Salida real: `promedio: NA` y al final `Warning message: NAs introduced by coercion`. Pregunta: "¿Se detuvo el programa?" Respuesta: no;
el aviso llega al final y el `NA` ya se propagó. La coma decimal no es número en R (lo mismo que `as.numeric("3,14")` en los ejercicios de UD4).

`p.vr-nota`: "En la práctica: lee la última línea (qué), sube por los `File ..., line N` hasta tu propio código (dónde), y mira las variables
de ese marco (por qué)."

`details.profundizar` ("Atrapar solo lo que esperas"): `except ZeroDivisionError:` en lugar de `except Exception:`; en R,
`tryCatch(..., warning = function(w) ...)` para convertir avisos en algo visible y `stop("lista vacia")` para fallar a propósito.

## Retos (9)

1. `ojo-familia` (ojo clínico, 5 rondas al azar, aprueba con 4 de 5): se muestra un fragmento corto y su salida; Francisco elige
   sintaxis / ejecución / semántico. Banco (todas las salidas deben correrse antes de ponerlas): `print("hola"` (sintaxis);
   `int("doce")` -> `ValueError` (ejecución); `promedio = sum(v) / 2` con tres datos (semántico, da un número equivocado);
   `if x = 3:` (sintaxis); `[1, 2][5]` -> `IndexError`; `mean(c("7","9"))` en R -> `NA` con aviso (semántico); `d = {}; d["a"]` -> `KeyError`;
   `range(len(v) - 1)` que se salta el último (semántico); `def f(x) return x` (sintaxis). Generador: elige 5 al azar sin repetir.
2. `ojo-ultima` (ojo clínico, 5 rondas): se muestra un traceback real de 2 a 4 marcos (generado de un banco precorrido) y se toca la
   línea que dice QUÉ; luego la línea de TU código donde falló (el marco más bajo que no es de librería). Pistas: "el qué siempre está
   al final"; "un marco de librería tiene una ruta que no es tu archivo".
3. `construir-pila` (construir): con los chips y un selector de datos editables (Francisco puede cambiar las notas de luis o eva, o
   agregar un nombre), lograr tres objetivos: (a) un traceback de exactamente 2 marcos; (b) un `TypeError` en la línea 8 en la primera
   vuelta (respuesta: poner un texto como primera nota); (c) que todos los nombres terminen sin error (cumplir la precondición).
   Se marca cuando los tres están hechos.
4. `a-mano-estado` (a mano, datos al azar, reintentable): se generan notas al azar para un alumno con un texto en la posición k
   (por ejemplo `[4, 6, "5", 9]`); Francisco escribe cuánto vale `total` cuando falla y en qué vuelta. Pistas escalonadas: 1) "el bucle
   suma hasta antes del texto"; 2) "cuenta las vueltas desde 1"; 3) muestra la suma parcial.
5. `cazar-1` (cazar el error, variante A): un desarrollo de lectura del traceback de luis con una línea mal: "La última línea dice
   `ZeroDivisionError`; el marco más alto (`<module>`) es donde falló, así que el error está en la línea 16". Línea mal: el marco donde
   falló es el más bajo (`promedio`, línea 9).
6. `cazar-2` (variante B): "pepe: `KeyError: 'pepe'` en la línea 12; la causa es que `promedio` no sabe dividir". Línea mal: `promedio`
   ni se llamó; la causa es que `pepe` no está en el diccionario.
7. `cazar-3` (variante C, R): "R imprimió `luis NaN`; como no hubo error, el programa es correcto". Línea mal: NaN es la señal de un
   error semántico (0/0).
8. `prop-tipos` (propiedades, opción múltiple, `mezclar: true`, reintentable): "¿Qué excepción da `notas["Ana"]` si la clave es `"ana"`?"
   Correcta: `KeyError` (las mayúsculas cuentan). Pistas por error: `NameError` -> "NameError es una variable que no existe, no una clave";
   `IndexError` -> "eso es para posiciones de una lista"; `ValueError` -> "el valor existe; lo que no existe es la clave". Segunda pregunta
   de la misma tarjeta: "Un `AttributeError: 'NoneType' object has no attribute ...` suele significar..." Correcta: "que una variable vale
   None, por ejemplo porque una función no tenía `return` o usaste el resultado de `sort()`" (Think Python PDF 261).
9. Trampas reales `codigo1`, `codigo2`, `codigo3` (en la vida real).

RETOS = ["ojo-familia", "ojo-ultima", "construir-pila", "a-mano-estado", "cazar-1", "cazar-2", "cazar-3", "prop-tipos", "codigo1", "codigo2", "codigo3"]

## Memoria

`B.ordenar` (la receta para leer un error, en orden), piezas correctas:
1. Lee la última línea: el tipo y el mensaje (qué).
2. Sube al marco más bajo que sea tu código: archivo y línea (dónde).
3. Mira las variables de ese marco en el momento del fallo.
4. Pregunta qué suposición no se cumplió (precondición).
5. Busca la causa antes de esa línea: datos o llamador.
Distractores: "Lee la primera línea del traceback", "Borra la línea que marca el error", "Envuelve todo en try/except".

Tarjetas (7):
- ¿Qué dice la última línea de un traceback de Python? -> El tipo de excepción y el mensaje: qué pasó.
- ¿En qué orden van los marcos? -> De la llamada más externa (arriba) a la más reciente (abajo), "most recent call last".
- Error de sintaxis, de ejecución, semántico -> No arranca; arranca y se detiene con mensaje; termina sin mensaje y da algo equivocado.
- ¿Por qué el error de luis está en los datos y no en la línea 9? -> La línea 9 supone una lista no vacía; el dato rompió esa suposición.
- `KeyError` frente a `IndexError` -> Clave que no existe en un diccionario; posición fuera de una lista.
- ¿Cómo muestra R la pila? -> `Error in <expresión> : <mensaje>` y `Calls: externa -> interna`; `traceback()` en la consola.
- ¿Por qué R dio `NaN` para luis? -> `0/0` en R no es error: es `NaN`. El fallo se volvió semántico.

## Citas (13)

| id de fuente | página PDF | impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| thinpython | 37 | 16 | Cap. 2: Debugging | los tres tipos de error (sintaxis, ejecución, semántico) en su primera aparición | paso 5 |
| thinpython | 49 | 28 | Cap. 3: Stack Diagrams | diagrama de pila (Figure 3-1) y el traceback que sale de esa pila, con el título viejo `innermost last` | paso 3 |
| thinpython | 50 | 29 | Cap. 3: Stack Diagrams | el traceback es la lista de funciones en el mismo orden que los marcos | paso 3 |
| thinpython | 76 | 55 | Cap. 5: Debugging | qué partes del mensaje leer primero; el mensaje puede señalar un lugar engañoso | paso 4 |
| thinpython | 77 | 56 | Cap. 5: Debugging | ejemplo en que la línea señalada no tiene nada mal: la causa está antes | paso 4 (destacado) |
| thinpython | 91 | 70 | Cap. 6: Debugging | precondiciones y postcondiciones al entrar y salir de una función | profundizar del paso 4 |
| thinpython | 256 | 235 | Cap. 20: Debugging (apertura) | las tres clases de errores y el primer paso: saber cuál tienes | paso 5 |
| thinpython | 260 | 239 | Cap. 20: When I run the program I get an exception | qué trae el mensaje y cómo el traceback recorre la secuencia de llamadas; `NameError` | paso 2 |
| thinpython | 261 | 240 | Cap. 20: Runtime Errors | `TypeError`, `KeyError`, `AttributeError` (y el caso `NoneType`), `IndexError`; el depurador `pdb` | paso 6 y reto `prop-tipos` |
| thinpython | 262 | 241 | Cap. 20: Semantic Errors | el programa corre sin mensajes pero no hace lo correcto | paso 5 (trampa de R) |
| thinpython | 182 | 161 | Cap. 13: Debugging | cinco tácticas: leer, ejecutar, rumiar, el pato de goma, retroceder | al terminar la página |
| pyworkout | 87 | 61 | Ej. 15, recuadro "Trapping input errors" | `try`/`except ValueError` alrededor de `int(...)` para no romperse con una entrada mala | vida real, profundizar |
| islr2 | 132 | 121 | 3.6.7 Writing Functions | R contesta `object ... not found` y `could not find function` antes de definir la función | paso 7 |
| prog4html | ancla `funciones` | - | Funciones (UD4) | `seq(20, 2, 2)` da el error "wrong sign in 'by' argument": argumentos por posición mal ordenados | paso 7 |

(14 filas; quien construye puede dejar fuera `pyworkout` si quiere 13.)

## Riesgos y notas para quien construye

- **Números de línea**: la salida de Python depende de las líneas en blanco del archivo. El código mostrado en `CODIGO.py` debe ser
  exactamente el corrido (línea 1 `import traceback`, línea 2 en blanco). Si se toca una línea, hay que volver a correr y actualizar 16/12/9/8.
- **Idioma de R**: con un R configurado en español los mensajes salen traducidos ("argumento no numérico para un operador binario").
  La página muestra los mensajes en inglés tal como salieron aquí (`LC_MESSAGES = en_US`) y lo dice en una línea.
- **Diferencia de versión**: Think Python habla de `SyntaxError: invalid syntax` y del título `Traceback (innermost last)` (PDF 49);
  Python 3.13 dice `SyntaxError: expected ':'` y `most recent call last`, y agrega las marcas `~~~^^^`. Contarlo en la página.
- **El fallo de eva es distinto en cada lenguaje**: Python falla en la segunda vuelta (10 + "6"); R en la primera (0 + "10") porque
  `c(10, "6")` ya es texto. No forzar que coincidan; es parte de la lección (enlaza con "Tipos y coerción").
- **`traceback()` de R** solo funciona en sesión interactiva después de un error no capturado; con `Rscript` no imprime nada útil. Por eso la
  vida real usa `conditionCall` y `conditionMessage`.
- **Material de la materia**: UD1 no trae una sección de errores ni de depuración (ver "No aparece" de `sm142002-programacion.md`). Los cuadernos de
  clase sí tienen errores reales (`ValueError: Table 'ordenes' already exists` en las celdas 9-10 de `UAX_20251028`, `UsageError: Cell magic
  %%sql not found` en las celdas 27 y 29), pero el id `prog1nb` **no está registrado en `fuentes.js`**. Si la sesión principal lo registra,
  añadir una cita en el paso 2 o 7 ("un error real del cuaderno de clase"); si no, mencionarlo en texto sin chip.
- El ejemplo de dividir entre la longitud usa datos enteros pequeños: ana da 8.0 exacto. No cambiar las notas de ana.
- Paso 1 sin símbolos: la cadena de estaciones no debe mostrar código hasta el paso 2.
