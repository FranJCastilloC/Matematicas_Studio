# Especificación: Iteradores y generadores (iteradores-generadores)

- Ruta: `python-base` (grupo Programación con datos), orden 14, tanda 8
- Prerrequisitos: "Comprensiones y programación funcional", "Clases y objetos"
- Siguientes: ninguno en el catálogo
- Aparece: SM142002, UD1 (el material de la unidad no trata iteradores ni generadores: decirlo)
- Archivo: `biblioteca/conceptos/iteradores-generadores.html`
- Fuentes que cita: `pyworkout` (cap. 10, libro principal), `thinpython` (`zip` como iterador y expresiones generadoras)

## Imagen central

**El dispensador de turnos y su memoria.** En el centro, una máquina dispensadora (como la de turnos de un banco) con una ranura de
salida y un botón grande `next()`. Cada pulsación saca **un** papelito con un valor. Dentro de la máquina, visible a través de una
ventana, está su **estado**: en qué posición va (un dedo que señala la casilla actual de los datos) y, en el modo generador, la línea
de código donde quedó "dormida" (resaltada en `--accent`) con sus variables locales (`x`, `total`).

A la derecha, un panel **memoria** con dos columnas comparables:
- "Lista": todas las casillas ya calculadas, una por valor (crece con n).
- "Generador": una sola casilla con el valor actual y la ficha del estado.
Un contador debajo: "valores guardados a la vez: n frente a 1".

Abajo, una tira de papelitos ya entregados (el consumidor) y, cuando se acaba, un papelito rojo `StopIteration`.

Controles concretos:
- Botón `next()` (saca un valor), botón "for" (llama `next` en bucle hasta el aviso de fin, animado), botón "reiniciar".
- Selector de fuente: lista `[10, 20, 30]`, cadena `"abc"`, `range(3)`, archivo de 3 renglones, generador `acumulado([4, 2, 5, 1])`.
- Botón `iter()` que crea un dispensador nuevo a partir de la fuente (para ver que una lista puede dar varios dispensadores y un
  iterador no).
- Deslizador n (10, 1000, 1 000 000) que cambia el tamaño de los datos en el panel memoria, con los bytes reales medidos (ver tabla).
- Casilla "mirar con `in`" (`3 in it`) que muestra cómo consume papelitos para buscar.

Modos por paso:
1. Solo el dispensador con tres papelitos y el botón; sin código.
2. Aparecen `iter()` y `next()` con nombres, la ventana del estado (el dedo) y el papelito `StopIteration`.
3. El `for` se desarma en su versión con `while True`, `next` y `except StopIteration`, con las líneas iluminándose.
4. Dos recorridos seguidos sobre el mismo iterador (el segundo sale vacío) frente a dos sobre la lista.
5. Modo generador: la ventana muestra el código de la función con `yield` y la línea donde duerme.
6. Panel memoria y deslizador n; expresión generadora.
7. El dispensador como clase: se ven `__iter__` y `__next__` como dos palancas.

## Hipótesis inicial

"Cuando escribes `for nota in notas:`, ¿cómo sabe Python cuál es la siguiente nota y cuándo parar? ¿Usa un número de posición
escondido, cuenta los elementos antes de empezar, o algo distinto? Escribe tu idea." (Se le muestra de nuevo en el paso 3, cuando
ve el `for` desarmado.)

## Pasos

### Paso 1. Un dispensador que entrega de a uno
- Idea: recorrer no requiere tener todo a la vista; basta algo que entregue el siguiente valor cada vez que se le pide y avise cuando no quedan. Sin símbolos.
- Escenario: modo 1. Un dispensador cargado con tres turnos: 10, 20 y 30. El botón dice "pedir turno".
- Chequeo (predicción antes de tocar, opción múltiple): "Pides tres turnos y recibes 10, 20 y 30. ¿Qué pasa si pides un cuarto?"
  - Correcta: "La máquina avisa que no quedan turnos."
  - "Vuelve a dar el 10": "Este dispensador no rebobina: lo que entregó, entregado está."
  - "Da un turno vacío y sigue": "Si diera algo vacío, nadie sabría cuándo parar; el aviso de fin es una señal aparte."
  - Al acertar se desbloquea el botón y se puede jugar; el cuarto pedido muestra el papelito rojo.

### Paso 2. `iter` y `next`: el iterable y su iterador
- Idea: una lista es **iterable** (sabe fabricar dispensadores); el **iterador** es el dispensador con su dedo. `iter(lista)` fabrica uno nuevo; `next(it)` saca el siguiente valor; al final `next` lanza `StopIteration`.
- Escenario: modo 2. Botón `iter()` sobre la lista `[10, 20, 30]` y botón `next()`. La ventana muestra el dedo en la posición actual. Se pueden fabricar dos iteradores de la misma lista y ver que cada uno tiene su propio dedo (`iter(l) is iter(l)` da `False`, verificado).
- Chequeo (predicción antes de tocar): "`it = iter([10, 20, 30])`; llamas `next(it)` tres veces. ¿Qué devuelve la cuarta llamada?" Respuesta: **lanza `StopIteration`**.
  - "Devuelve `None`": "`None` podría ser un valor legítimo de la lista; por eso el fin se avisa con una excepción, no con un valor."
  - "Devuelve 10": "El dedo no vuelve atrás; para empezar de nuevo hay que pedir otro iterador con `iter()`."
- Citas: Python Workout, tabla 10.1 con `iter`, `next` y `StopIteration` (PDF 227); Think Python, un objeto `zip` es un iterador y no admite índices (PDF 164).

### Paso 3. Lo que hace realmente un `for`
- Idea: `for x in algo:` pide `iter(algo)` una vez y luego llama `next` hasta que salta `StopIteration`, que el `for` atrapa en silencio. No hay un índice escondido: el objeto decide qué entregar.
- Escenario: modo 3. A la izquierda el `for` de dos líneas; a la derecha su versión desarmada (`it = iter(datos)`, `while True:`, `try: x = next(it)`, `except StopIteration: break`, cuerpo). Las líneas se iluminan juntas al reproducir. Aquí se muestra de nuevo la hipótesis de Francisco.
- Chequeo (cálculo con datos en vivo): "Con la fuente elegida en el selector, ¿cuántas veces llama el `for` a `next`?" Para `[10, 20, 30]`: **4** (tres valores y una más que descubre el fin). Con `"abc"`: 4; con `range(3)`: 4; con el archivo de 3 renglones: 4.
  - Si responde 3: "Falta la llamada que recibe `StopIteration`: así se entera el `for` de que terminó."
  - Pista escalonada: (1) "cuenta los valores"; (2) "suma la llamada del final".
- Citas: Python Workout, el protocolo de iteración y los tres pasos de un `for` (PDF 224); `LoudIterator`, que imprime cada paso del protocolo (PDF 225).
- Errata a decir con naturalidad: en la PDF 224 (impresa 198) Python Workout escribe `Stopiteration` con minúscula; el nombre real es `StopIteration` (Python distingue mayúsculas).

### Paso 4. El iterador se agota (TRAMPA)
- Idea: un iterador se recorre una sola vez. Una lista puede recorrerse muchas veces porque cada `for` le pide un iterador nuevo. `map`, `filter`, `zip`, los archivos y los generadores son iteradores: la segunda vuelta sale vacía. Incluso `in` consume.
- Escenario: modo 4. Dos columnas: "dos `for` sobre la lista" (los dos dan 10, 20, 30) y "dos `for` sobre `iter(lista)`" (el segundo no da nada). La casilla "mirar con `in`" sobre `iter([1, 2, 3, 4])`.
- Chequeo (predicción antes de tocar): "`it = iter([1, 2, 3, 4])`. Haces `3 in it` y después `list(it)`. ¿Qué da `list(it)`?" Respuesta: **`[4]`** (verificado: `True` y luego `[4]`).
  - `[1, 2, 3, 4]`: "Para buscar el 3, `in` pidió 1, 2 y 3 con `next`; esos ya salieron del dispensador."
  - `[]`: "`in` se detiene apenas encuentra el 3: el 4 sigue adentro."
- Este es el paso de la **trampa**: el mismo código que funciona con una lista falla en silencio con un iterador.
- Cita: Python Workout, el recuadro "iterable vs. iterator" y por qué conviene separar el iterable del iterador para poder recorrer varias veces (PDF 228-229).
- Errata a decir: en la PDF 229 (impresa 203), explicando por qué la segunda vuelta no da nada, el libro dice que el índice "ya está en 2, que es mayor que `len(self.data)`". Con `'abc'` el índice termina en **3**, que es **igual** a `len(self.data)`; la condición `self.index >= len(self.data)` corta por igualdad. La conclusión del libro es correcta; el número no.

### Paso 5. Un generador: una función que se pausa (DESTACADO con predicción)
- Idea: una función con `yield` no corre al llamarla: devuelve un generador (un iterador). Cada `next` la hace correr hasta el siguiente `yield`, entrega ese valor y la deja dormida, con sus variables intactas. Cuando la función termina, el generador lanza `StopIteration` solo.
- Escenario: modo 5. La ventana del dispensador muestra el código de `acumulado(datos)` (el de la vida real) con la línea donde duerme resaltada y las variables `x` y `total` visibles. Botón `next()` y una tira con lo impreso.
- **Destacado** (la confusión natural): "Esta función imprime algo antes de cada `yield`:
  ```
  def turnos():
      print("arranca")
      yield 1
      print("sigue")
      yield 2
  t = turnos()
  print("creado")
  ```
  Antes de probar: ¿qué se imprime primero, `arranca` o `creado`?" Respuesta: **`creado`** (verificado: `creado`, luego al primer `next` `arranca` y `1`, al segundo `sigue` y `2`, al tercero `StopIteration`).
  - Si elige `arranca`: "Llamar `turnos()` no ejecuta ninguna línea del cuerpo: solo fabrica el generador. El cuerpo arranca con el primer `next`."
- Chequeo del paso (cálculo con datos en vivo): "Con `acumulado([4, 2, 5, 1])`, después de dos `next`, ¿qué valor tiene `total` dentro del generador dormido?" **6**. Si Francisco cambió los datos del selector, se calcula con ellos. Pistas: (1) "cada `next` suma un dato y se duerme en el `yield`"; (2) "`4`, luego `4 + 2`".
- Citas: Python Workout, función generadora: "el cuerpo no se ejecuta" al llamarla y cada iteración corre hasta el siguiente `yield` (PDF 226); ejercicio 48, un generador que recorre todos los renglones de varios archivos (PDF 233).

### Paso 6. Pereza y memoria: la expresión generadora
- Idea: `(x * x for x in datos)` es una comprensión perezosa: no construye la lista, entrega un valor a la vez. Sirve para sumar o buscar en datos grandes (o infinitos) sin tenerlos todos en memoria.
- Escenario: modo 6. Panel memoria con el deslizador n. Valores reales medidos con `sys.getsizeof` en Python 3.13.5:

  | n | lista `[x for x in range(n)]` | generador `(x for x in range(n))` |
  |---|---|---|
  | 10 | 184 bytes | 192 bytes |
  | 1 000 | 8 856 bytes | 192 bytes |
  | 1 000 000 | 8 448 728 bytes | 192 bytes |

  (Para 10 elementos la lista es más chica: la ventaja aparece con datos grandes. `getsizeof` de una lista mide solo la tabla de referencias, no los enteros; decirlo en una nota.)
- Chequeo (elección con explicación): "`g = (x * x for x in [1, 2, 3])`. Haces `sum(g)` dos veces. ¿Qué da la segunda?" Respuesta: **0** (la primera da 14; verificado).
  - 14: "`g` es un iterador: la primera suma lo vació. `sum` de nada es 0."
  - Un error: "No falla; un iterador vacío simplemente no entrega nada."
- `details.profundizar`: "Generadores infinitos": `itertools.count(5)` no termina nunca; `list(islice(count(5), 3))` da `[5, 6, 7]` (verificado). Con una lista sería imposible.
- Citas: Python Workout, lista por comprensión frente a expresión generadora y la memoria (PDF 148); Think Python, expresiones generadoras con `next` y `sum` (PDF 246-247).
- Errata a decir: Think Python (PDF 247, impresa 226) dice que un generador agotado sigue lanzando `StopException`; es `StopIteration`.

### Paso 7. Construir tu propio iterador con una clase
- Idea: cualquier objeto puede ser recorrido por un `for` si su clase define `__iter__` (devuelve el iterador) y `__next__` (entrega el siguiente o lanza `StopIteration`). Si `__iter__` devuelve `self`, el objeto se agota como cualquier iterador; si devuelve un objeto ayudante nuevo, se puede recorrer muchas veces.
- Escenario: modo 7. La clase `Turnos` (código abajo) con dos palancas: `__iter__` y `__next__`. Interruptor "`__iter__` devuelve `self`" / "`__iter__` devuelve un ayudante nuevo"; con el primero, `list(t)` dos veces da `[10, 20, 30]` y `[]` (verificado); con el segundo, las dos dan la lista.
  ```
  class Turnos:
      def __init__(self, datos):
          self.datos = datos
          self.i = 0
      def __iter__(self):
          return self
      def __next__(self):
          if self.i >= len(self.datos):
              raise StopIteration
          v = self.datos[self.i]
          self.i += 1
          return v
  ```
- Chequeo (elección con explicación): "¿Qué le falta a una clase para que `for x in objeto` funcione?"
  - Correcta: "`__iter__`, que devuelve un objeto con `__next__`."
  - "Solo `__next__`": "El `for` primero llama `iter(objeto)`, que busca `__iter__`; sin él da `TypeError: ... is not iterable`."
  - "Un atributo `len`": "El `for` no pregunta el largo; pide valores hasta el aviso de fin."
  - "Heredar de `list`": "Funciona, pero no es necesario: basta el protocolo."
- Puente con "Clases y objetos": `__iter__` y `__next__` son métodos especiales, como `__len__`.
- Citas: Python Workout, ejercicio 46, reimplementar `enumerate` con una clase (PDF 228 y solución en PDF 230); ejercicio 47, `Circle`, un iterador con estado que no recorre una colección fija (PDF 230-232).

## Vida real (Python y R)

Datos inventados `lecturas = [4, 2, 5, 1]` (lecturas de un sensor); el generador entrega el total acumulado: 4, 6, 11, 12 (los mismos
del paso 5). El consumidor llama `next` a mano en un `while True` para que se vea el protocolo, y al final compara con la librería
(`itertools.accumulate` en Python, `cumsum` en R).

R **no tiene generadores ni un protocolo de iteración** como el de Python. El equivalente honesto más cercano es un **cierre**
(closure): una función que devuelve otra función y que recuerda su estado (`i`, `total`) entre llamadas con `<<-`. El fin se señala
devolviendo `NULL`. La página lo dice: "No es lo mismo: el cierre corre su preparación al crearse y no se integra con `for`; pero
muestra la idea de entregar de a uno guardando el estado". Existe el paquete `iterators` (instalado aquí) con `iter()` y `nextElem()`,
que al final lanza un error con el mensaje `"StopIteration"` (verificado); se menciona en un profundizar, no en el código.

Código Python (corrido con Python 3.13.5; idéntico al de la página; líneas con el mismo id se iluminan juntas):

```
import:  from itertools import accumulate
null:
defgen:  def acumulado(datos):
total0:      total = 0
forx:        for x in datos:
suma:            total = total + x
yield:           yield total
null:
datos:   lecturas = [4, 2, 5, 1]                  # datos inventados
crea:    gen = acumulado(lecturas)
todos:   todos = []
bucle:   while True:
next:        try:
next:            valor = next(gen)
stop:        except StopIteration:
stop:            break
guarda:      todos.append(valor)
imp1:    print(todos)
lib:     print(todos == list(accumulate(lecturas)))
```

Código R (corrido con R 4.6.1, sin paquetes):

```
import:  # R no tiene generadores: un cierre (closure) guarda el estado entre llamadas
null:
defgen:  acumulado <- function(datos) {
crea:      i <- 0
crea:      total <- 0
null:      function() {
forx:        i <<- i + 1
forx:        if (i > length(datos)) return(NULL)
suma:        total <<- total + datos[i]
yield:       total
null:      }
null:    }
null:
datos:   lecturas <- c(4, 2, 5, 1)                # datos inventados
crea:    gen <- acumulado(lecturas)
todos:   todos <- c()
bucle:   repeat {
next:      valor <- gen()
stop:      if (is.null(valor)) break
guarda:    todos <- c(todos, valor)
null:    }
imp1:    print(todos)
lib:     print(identical(todos, cumsum(lecturas)))
```

Nota de diseño clave: en R, `i <- 0` y `total <- 0` llevan el id `crea` porque **corren al crear el cierre**; en Python, `total = 0`
lleva su propio id `total0` porque corre recién en el primer `next`. Así, la misma lista de eventos ilumina en cada lenguaje lo que de
verdad corre. En R el evento `total0` no ilumina ninguna línea; su narración en R dice: "En R este paso no existe: el total ya se puso
en 0 cuando se creó el cierre. Esa es la gran diferencia con un generador de Python."

Salida real de Python:
```
[4, 6, 11, 12]
True
```
Salida real de R:
```
[1]  4  6 11 12
[1] TRUE
```

Foto de estado por línea ejecutada (36 eventos; "dormido en" indica dónde quedó pausado el generador):

| # | id | x (Python) / i (R) | total | valor | todos | estado del generador |
|---|---|---|---|---|---|---|
| 1-3 | import, defgen, datos | | | | | |
| 4 | crea | | (R: 0) | | | Python: creado, sin correr ninguna línea; R: `i = 0`, `total = 0` |
| 5 | todos | | | | `[]` | |
| 6-7 | bucle, next | | | | | se despierta |
| 8 | total0 | | 0 | | | Python: corre por primera vez |
| 9-11 | forx, suma, yield | 4 (i 1 en R) | 4 | | | dormido en `yield` |
| 12 | guarda | | 4 | 4 | `[4]` | dormido |
| 13-18 | bucle, next, forx, suma, yield, guarda | 2 | 6 | 6 | `[4, 6]` | dormido |
| 19-24 | (igual) | 5 | 11 | 11 | `[4, 6, 11]` | dormido |
| 25-30 | (igual) | 1 | 12 | 12 | `[4, 6, 11, 12]` | dormido |
| 31-33 | bucle, next, forx | sin más datos (R: i 5 > 4) | 12 | | | Python: la función termina y lanza `StopIteration`; R: devuelve `NULL` |
| 34 | stop | | | | | el consumidor sale del bucle |
| 35-36 | imp1, lib | | | | | se imprime la salida |

Índices: la narración de `forx` dice en Python "toma el siguiente dato" (no hay índice visible) y en R muestra `i` desde 1
(`datos[i]`). No inventar un índice en Python.

Visual de la vida real: el dispensador del recorrido en pequeño, con la ventana que muestra la línea donde duerme el generador y las
variables `x` y `total`, y la tira de `todos` que crece; en `stop`, el papelito rojo (`StopIteration` en Python, `NULL` en R).

Predicción antes de reproducir (`#vrPred`), dos preguntas:
- "¿Cuántas veces se llama `next(gen)` (en R, `gen()`)?" Respuesta: **5** (cuatro valores y una que descubre el fin). Distractor 4: "La quinta llamada es la que recibe el aviso de fin."
- "En Python, ¿cuándo corre `total = 0`?" Opciones: al crear `gen` / en el primer `next` (correcta) / en cada `next`. Pista para "al crear": "Llamar a una función con `yield` no ejecuta su cuerpo." Pista para "en cada `next`": "Si corriera cada vez, el total no se acumularía: el generador conserva sus variables entre pausas."

`p.vr-nota`: "En una línea: `list(itertools.accumulate(lecturas))` en Python y `cumsum(lecturas)` en R. Y el consumidor manual es lo que
hace un `for valor in acumulado(lecturas):` por dentro."
`details.profundizar` de la vida real: "`iterators` en R": `it <- iter(c(10, 20, 30)); nextElem(it)` da 10, 20, 30 y la cuarta llamada
falla con el mensaje `"StopIteration"` (verificado). Copia la idea de Python, pero el `for` de R no la usa: `for` de R recorre un vector
que ya existe entero.

Trampas reales (retos `codigo1`..`codigo3`, verificados):

- `codigo1` (Python, el generador se agota):
  ```
  g = (x * x for x in [1, 2, 3])
  print(sum(g))
  print(sum(g))
  ```
  Salida: `14` y `0`. Opciones para la segunda: `0` (correcta) / `14` / `StopIteration`.
- `codigo2` (Python, `in` consume el iterador):
  ```
  it = iter([1, 2, 3, 4])
  print(3 in it)
  print(list(it))
  ```
  Salida: `True` y `[4]`. Opciones para la segunda: `[4]` (correcta) / `[1, 2, 3, 4]` / `[]`.
- `codigo3` (Python, llamar no ejecuta):
  ```
  def turnos():
      print("arranca")
      yield 1
      print("sigue")
      yield 2
  t = turnos()
  print("creado")
  print(next(t))
  print(next(t))
  ```
  Salida: `creado`, `arranca`, `1`, `sigue`, `2`. Pregunta: "¿Cuál es la primera línea impresa?" Opciones: `creado` (correcta) / `arranca` / `1`.
  Comparación con R para la explicación: en el cierre de R, lo que está antes del `function()` interior sí corre al crear.

## Retos (10)

1. `ojo-iterable` (ojo clínico, 5 rondas al azar, aprueba con 4 de 5): se muestra un objeto (`[1, 2, 3]`, `"abc"`, `range(3)`,
   `iter([1, 2])`, `map(str, [1, 2])`, `zip("ab", [1, 2])`, `(x for x in [1])`, un archivo abierto, `{1: "a"}`) y Francisco decide:
   "se puede recorrer varias veces" o "se agota tras una vuelta". Respuestas: listas, cadenas, `range` y diccionarios se pueden
   recorrer varias veces; `iter(...)`, `map`, `zip`, generadores y archivos se agotan. Explicación por ronda. Base: `type(iter([1])).__name__`
   es `list_iterator`, `type(map(str, [1])).__name__` es `map` (verificado).
2. `construir-next` (construir): con el dispensador y el selector de fuente, Francisco consigue tres estados: (a) que la tira de entregados
   muestre exactamente `20, 30` empezando desde un iterador nuevo de `[10, 20, 30]` (tiene que gastar un `next` antes, o usar la casilla `10 in it`, que consume el 10: luego `list(it)` da `[20, 30]`, verificado);
   (b) que aparezca `StopIteration` con exactamente 2 valores entregados (fuente de 2 elementos o gastar 1 antes); (c) tener dos iteradores
   de la misma lista en posiciones distintas (dedos distintos). Se valida leyendo el estado del modelo.
3. `mano-traza` (a mano, reintentable, datos al azar): se genera una lista de 3 o 4 enteros del 1 al 9 y el generador `acumulado`.
   Se da una secuencia de 2 o 3 operaciones (`next(g)`, `next(g)`, `list(g)` o `sum(g)`). Francisco escribe lo que devuelve la última.
   Pistas: (1) "cada `next` suma un dato al total y lo entrega"; (2) se muestra el total tras la primera operación; (3) "lo que queda
   en el generador es solo lo que no se pidió". (Inspirado en la idea del ejercicio 47, no en su enunciado.)
4. `mano-next` (a mano, reintentable): se muestra un `for` sobre una fuente al azar (lista de 2 a 6 elementos, cadena de 2 a 5 letras,
   `range(k)`) y Francisco escribe cuántas veces se llama `next` en total. Respuesta: largo + 1. Pistas: (1) "una por valor"; (2) "más la
   del aviso de fin".
5. `cazar-iter` (cazar el error, 3 variantes; desarrollos de 4 a 6 líneas con una línea mal):
   - Variante A: se guarda `pares = zip(nombres, notas)`, se imprime `len(list(pares))` para revisar y después se recorre `for n, x in pares:`
     para promediar: no entra nunca. Línea mala: el `list(pares)` de revisión, que agota el iterador.
   - Variante B: el generador `acumulado` con la línea `yield total` mal sangrada, al nivel del `for` en vez de dentro de él: solo
     entrega el total final. `list(acumulado([4, 2, 5, 1]))` da `[12]` en vez de `[4, 6, 11, 12]` (verificado). Línea mala: el `yield`
     fuera del bucle.
   - Variante C: una clase iteradora cuyo `__next__` hace `return None` al final en vez de `raise StopIteration`: el `for` no termina nunca
     (la página no lo corre: lo muestra con un tope de 8 vueltas y el aviso "seguiría para siempre").
6. `prop-iter` (propiedades, opción múltiple, `mezclar: true`, reintentable): "¿Cuál afirmación es verdadera?"
   - Correcta: "Todo iterador es iterable, pero no todo iterable es iterador: una lista es iterable y no tiene `__next__`."
   - "Un `for` usa un índice escondido que va de 0 a `len - 1`": pista "el `for` solo llama `next`; por eso funciona con archivos y generadores, que no tienen largo."
   - "Llamar a una función con `yield` ejecuta su cuerpo hasta el primer `yield`": pista "no ejecuta nada; el cuerpo arranca con el primer `next`."
   - "Una expresión generadora guarda todos sus valores para poder repetirlos": pista "entrega uno a la vez y no guarda los anteriores; por eso la segunda vuelta sale vacía."
7. `prop-memoria` (propiedades, opción múltiple con pista por respuesta): "¿Cuándo conviene `sum(x * x for x in datos)` en vez de
   `sum([x * x for x in datos])`?"
   - Correcta: "Cuando `datos` es muy grande: el generador no arma la lista intermedia."
   - "Siempre, porque es más rápido": pista "con pocos datos la diferencia es nula o al revés (con 10 elementos la lista ocupa 184 bytes y el generador 192)."
   - "Nunca: dan resultados distintos": pista "dan el mismo número; cambia la memoria."
   - "Solo si `datos` es una lista": pista "funciona con cualquier iterable, incluso un archivo o un generador."
8. `codigo1`, 9. `codigo2`, 10. `codigo3`: las trampas reales de la vida real.

Lecturas asociadas (citar como lectura, no copiar): Python Workout ej. 46 (MyEnumerate, PDF 228-230), 47 (Circle, PDF 230-232),
48 (todas las líneas de todos los archivos, PDF 233-234), 49 (tiempo transcurrido, PDF 235-237), 50 (MyChain, PDF 237-239).

## Memoria

`B.ordenar` (armar el `for` desarmado, línea por línea):
- Piezas en orden: `it = iter(datos)` · `while True:` · `try:` · `x = next(it)` · `except StopIteration:` · `break` · `print(x)`
- Distractores: `i = 0` (no hay índice) · `x = datos[i]` (el `for` no indexa) · `if x is None: break` (el fin no se marca con `None`)

Tarjetas (`B.tarjetas`, 8):
1. ¿Qué diferencia hay entre un iterable y un iterador? · El iterable fabrica iteradores con `iter()`; el iterador entrega valores con `next()` y recuerda dónde va.
2. ¿Cómo avisa un iterador que se terminó? · Lanzando `StopIteration`.
3. ¿Cuántas veces llama un `for` a `next` sobre 3 elementos? · Cuatro: tres valores y una que recibe `StopIteration`.
4. ¿Qué pasa si recorres dos veces el mismo iterador? · La segunda vuelta sale vacía: ya se agotó.
5. ¿Qué devuelve llamar a una función con `yield`? · Un generador; el cuerpo no corre hasta el primer `next`.
6. ¿Qué hace `yield`? · Entrega un valor y pausa la función, conservando sus variables, hasta el siguiente `next`.
7. ¿Qué métodos necesita una clase para funcionar en un `for`? · `__iter__` (devuelve el iterador) y `__next__` (entrega o lanza `StopIteration`).
8. ¿Qué es lo más parecido a un generador en R? · Un cierre (closure) que guarda su estado con `<<-`; R no tiene `yield`.

## Citas (13)

| id de fuente | pág. PDF | pág. impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| pyworkout | 223 | 197 | Cap. 10, apertura | por qué tantos objetos funcionan en un `for`: el protocolo de iteración | Cabecera o paso 1 |
| pyworkout | 224 | 198 | Cap. 10, protocolo | `__iter__`, `__next__`, `StopIteration` y los tres pasos de un `for` (con la errata `Stopiteration`) | Paso 3 |
| pyworkout | 225 | 199 | Cap. 10, `LoudIterator` | una clase que imprime cada paso del protocolo | Paso 3, después del chequeo |
| pyworkout | 226 | 200 | Cap. 10, generadores | expresión generadora y función generadora: el cuerpo no se ejecuta al llamarla | Paso 5 |
| pyworkout | 227 | 201 | Cap. 10, tabla 10.1 | `iter`, `next`, `StopIteration`, `enumerate` e `itertools` | Paso 2 |
| pyworkout | 228 | 202 | Ej. 46: MyEnumerate | reimplementar `enumerate` con una clase; recuadro iterable frente a iterador | Paso 7 |
| pyworkout | 229 | 203 | Ej. 46, iteradores en dos clases | por qué la segunda vuelta sale vacía y cómo un ayudante lo evita (contiene el error del índice 2) | Paso 4 |
| pyworkout | 230 | 204 | Ej. 46 (solución) y Ej. 47: Circle | `__iter__` que devuelve `self` y `__next__` con `StopIteration`; un iterador con estado | Paso 7 |
| pyworkout | 233 | 207 | Ej. 48: All lines, all files | un generador que recorre renglones de muchos archivos sin cargarlos | Paso 5 o vida real |
| pyworkout | 148 | 122 | Cap. 7, Ej. 28 | lista por comprensión frente a expresión generadora: memoria | Paso 6 |
| thinpython | 164 | 143 | Cap. 12: Lists and Tuples | `zip` devuelve un objeto que es un iterador; no admite índices | Paso 2 |
| thinpython | 246 | 225 | Cap. 19: Generator Expressions | `(x**2 for x in range(5))`, `next(g)` y el `for` que sigue donde quedó `next` | Paso 6 |
| thinpython | 247 | 226 | Cap. 19: Generator Expressions, any and all | `sum` con generadora; contiene la errata `StopException` | Paso 6 |

Páginas tomadas de los mapas `brain/fuentes/python-workout.md` y `brain/fuentes/think-python.md`. Leí con `pdftotext` las PDF 223-230
y 233 de Python Workout y 164-165 y 246-247 de Think Python para confirmar el contenido y las erratas.

## Riesgos y notas para quien construye

- **Equivalencia falsa con R.** No llamar "generador" al cierre de R. Diferencias a decir: (1) el cierre corre su preparación al crearse;
  (2) el `for` de R no llama a funciones `next`: recorre un vector ya construido; (3) el fin se marca con `NULL` por convención nuestra,
  no por el lenguaje. Si `datos` pudiera contener `NULL`, la convención fallaría (en un vector numérico no pasa).
- **El evento `total0` en R.** No ilumina ninguna línea en R a propósito; su narración en R debe explicarlo (ver la nota de diseño). Probar
  que el motor no se rompe con un id sin línea en un lenguaje (en `B.vidaReal` simplemente no se marca ninguna línea).
- **`sys.getsizeof`.** Los bytes dependen de la versión de Python y de la máquina (medidos con 3.13.5 en esta Mac). Presentarlos como
  "medidos en esta computadora". No sumar el tamaño de los enteros.
- **Errores de Python Workout a mencionar**: `Stopiteration` (PDF 224) y el índice "2" en la explicación de la segunda vuelta (PDF 229);
  además, en la misma PDF 229 el texto dice que `__next__` se toma de `MyIterator`, nombre que no coincide con el de la clase del
  ejercicio (`MyEnumerate`). Son detalles: la idea del libro es correcta.
- **Errata de Think Python**: `StopException` (PDF 247) en vez de `StopIteration`.
- **Retos `cazar-iter`.** Antes de construir, correr el desarrollo exacto que se muestre en cada variante y pegar su salida real
  (las variantes A y B están verificadas con los datos de esta especificación: A da 0 vueltas tras `len(list(pares))` = 2; B da `[12]`).
  La variante "solo `__next__`" del paso 7 da `TypeError: 'T' object is not iterable` (verificado con una clase `T`).
- **Variante C (bucle infinito).** No ejecutarla de verdad en la página; simular con un tope.
- **Material del máster.** SM142002 no trata iteradores ni generadores (mapa `sm142002-programacion.md`, "No aparece"). Decir en la página
  que el tema viene de los libros que recomienda la materia, y que pandas y los lectores de archivos grandes (`chunksize`) usan esta idea.
