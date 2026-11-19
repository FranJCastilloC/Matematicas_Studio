# Especificación: Clases y objetos (clases-objetos)

- Ruta: `python-base` (grupo Programación con datos), orden 13, tanda 8
- Prerrequisitos: "Funciones y el marco de llamada", "Listas, mutabilidad y alias"
- Siguientes: "Iteradores y generadores"
- Aparece: SM142002, UD1 (la teoría de la unidad dice que Python es multiparadigma y "orientado a objetos", pero no enseña clases: decirlo)
- Archivo: `biblioteca/conceptos/clases-objetos.html`
- Fuentes que cita: `thinpython` (caps. 15 a 18), `pyworkout` (cap. 9)

## Imagen central

**El diagrama de objetos vivo: un molde y sus fichas.** A la izquierda, la **clase** dibujada como una caja de molde (borde
punteado, color `--accent`) con dos zonas: "atributos de clase" (`maximo = 10`) y "métodos" (`__init__`, `agregar`, `promedio`).
A la derecha, cada **instancia** es una ficha (borde sólido) con sus propios atributos de instancia (`nombre`, `notas`), y una
flecha fina de la ficha al molde rotulada "su clase". A la izquierda del todo, los **nombres** de variables (`ana`, `luis`) con
flechas a las fichas, como en el diagrama de estado de "Listas, mutabilidad y alias".

Datos inventados: dos libretas de notas, Ana con notas `8, 6, 10` y Luis con `4, 12` (el 12 se recorta a 10 por el máximo).

Controles concretos:
- Botón "crear instancia" con una casilla para el nombre (`Libreta("Ana")`); dibuja una ficha nueva con `notas = []`.
- En cada ficha: un deslizador de nota (0 a 15) y un botón "agregar"; un botón "promedio()".
- Al llamar un método, una **animación de búsqueda**: un punto sale del nombre, entra a la ficha, no encuentra el método, sigue la
  flecha al molde, lo encuentra y vuelve con `self` apuntando a la ficha (el recorrido "instancia, luego clase").
- Casilla editable "`ana.maximo = __`" (asignar por la instancia) y "`Libreta.maximo = __`" (asignar en la clase), para ver la sombra.
- Botón "`b = ana`" (alias) y botón "`c = copy.copy(ana)`" (copia superficial, la lista `notas` queda compartida y se dibuja con
  una flecha desde dos fichas hacia la misma caja de lista).
- Interruptor "defecto mutable" que cambia el `__init__` por `def __init__(self, nombre, notas=[])`; con él encendido, todas las
  fichas apuntan a la misma caja de lista.

Modos por paso:
1. Solo moldes y fichas sin código (un molde de galletas y dos galletas con glaseado distinto).
2. Aparece el código de la clase y "crear instancia"; `self` se dibuja como una etiqueta que se pega a la ficha que se está creando.
3. Botones de métodos con la animación de búsqueda.
4. Zona de atributos de clase y las casillas de asignación; la sombra se dibuja como una etiqueta encima de la ficha que tapa el molde.
5. Interruptor del defecto mutable.
6. Alias y copia.
7. Métodos especiales: un panel "cómo se imprime" con y sin `__repr__`.

## Hipótesis inicial

"Tienes dos libretas de notas hechas con el mismo molde. Si le agregas una nota a la libreta de Ana, ¿qué le pasa a la de Luis?
¿Y si cambias el molde? Escribe qué crees que comparten y qué no." (Se le muestra de nuevo en el paso 4.)

## Pasos

### Paso 1. Un molde, muchas fichas
- Idea: la clase describe una forma; cada objeto hecho con ella tiene su propio contenido. Sin símbolos.
- Escenario: modo 1. Un molde "Libreta" y dos fichas, Ana y Luis, cada una con su lista de notas dibujada como casillas.
- Chequeo (predicción antes de tocar, opción múltiple): "Le agregas un 9 a la libreta de Ana. ¿Qué pasa con la de Luis?"
  - Correcta: "No cambia: cada ficha guarda sus propias notas."
  - "También recibe el 9": "Las dos se hicieron con el mismo molde, pero el molde no guarda las notas de nadie."
  - "Cambia el molde y las dos se actualizan": "Agregar una nota toca la ficha, no el molde."
  - Al acertar se anima: el 9 aparece solo en la ficha de Ana.

### Paso 2. La clase en código: `__init__` y `self`
- Idea: `class` define el tipo; llamar a la clase (`Libreta("Ana")`) crea un objeto nuevo y ejecuta `__init__` con `self` apuntando a ese objeto recién creado; lo que se guarda en `self.algo` queda en la ficha.
- Escenario: modo 2. Código de la clase con `__init__` resaltado; al pulsar "crear instancia" la etiqueta `self` se pega a la ficha nueva mientras corren `self.nombre = nombre` y `self.notas = []`.
- Chequeo (elección con explicación): "Mientras corre `Libreta("Luis")`, ¿a qué apunta `self`?"
  - Correcta: "A la ficha nueva de Luis, que todavía está vacía."
  - "A la clase `Libreta`": "La clase es el molde; `self` es el objeto que se está fabricando."
  - "A la ficha de Ana": "Cada llamada fabrica una ficha distinta; `self` es la de esta llamada."
  - "A la cadena `"Luis"`": "`"Luis"` llega en el parámetro `nombre` y se guarda en `self.nombre`."
- Citas: Think Python, tipos definidos por el programador e instancias (PDF 198); el método `__init__` (PDF 220); Python Workout, el recuadro sobre `self` (PDF 189) y la solución de `Scoop` (PDF 190).

### Paso 3. Un método es una función que recibe la ficha
- Idea: `ana.agregar(8)` es lo mismo que `Libreta.agregar(ana, 8)`: Python busca `agregar` en la ficha, no lo encuentra, lo busca en la clase y lo llama pasándole la ficha como primer argumento.
- Escenario: modo 3. Animación de búsqueda instancia, luego clase. Debajo, las dos formas de escribir la llamada, una al lado de la otra, iluminándose a la vez.
- Chequeo (cálculo con datos en vivo, dos partes):
  - (a) "¿Cuánto devuelve `ana.promedio()` ahora?" Con los datos de inicio (8, 6, 10), **8.0**. Si Francisco agregó notas, se calcula con las que haya. Si la ficha está vacía, el chequeo pide primero agregar al menos una nota (y la explicación menciona que con cero notas el método divide por cero).
  - (b) Predicción: "Escribes `ana.agregar(8, 6)`. ¿Cuántos argumentos posicionales recibe el método en total?" **3** (`self`, 8 y 6). El error real es `Libreta.agregar() takes 2 positional arguments but 3 were given`. Pista para 2: "Cuenta también la ficha, que entra sola como `self`."
- Citas: Think Python, de función a método y el primer parámetro `self` (PDF 217); el `TypeError` de "takes 2 positional arguments but 3 were given" (PDF 219).

### Paso 4. Atributos de clase y la sombra (DESTACADO con predicción)
- Idea: un atributo de clase (`maximo = 10`) vive en el molde y todas las fichas lo ven. Leer `ana.maximo` lo busca primero en la ficha y luego en la clase. Pero **asignar** `ana.maximo = 20` no cambia el molde: crea un atributo nuevo en la ficha de Ana que tapa al del molde.
- Escenario: modo 4. Zona de atributos de clase; casillas de asignación. La sombra aparece como una etiqueta `maximo = 20` sobre la ficha de Ana. Aquí se muestra de nuevo la hipótesis de Francisco.
- **Destacado** (la confusión natural): "Escribes `ana.maximo = 20`. Antes de probar: ¿cuánto valen `ana.maximo`, `luis.maximo` y `Libreta.maximo`?"
  - Opciones: `20 20 20` / `20 10 10` (correcta, verificado) / `20 10 20`.
  - Explicación: la asignación por la instancia escribe en la ficha (`vars(ana)` da `{'maximo': 20}`; `vars(luis)` da `{}`). Si después haces `Libreta.maximo = 7`, Luis ve 7 y Ana sigue viendo 20 (verificado: `20 7`).
- Chequeo del paso (predicción): "Después de `ana.maximo = 20`, Luis agrega un 12. ¿Qué nota se guarda?" **10** (Luis sigue viendo el máximo del molde). Pista para 12: "La sombra de Ana solo tapa el molde para Ana."
- Citas: Think Python, atributos de clase en `Card` (PDF 229); Python Workout, cómo busca Python los atributos, instancia, clase, padres y `object` (PDF 199) y la diferencia entre asignar por la clase y por la instancia (PDF 203).

### Paso 5. La lista que todos comparten (TRAMPA)
- Idea: si el valor por defecto de un parámetro es una lista (`notas=[]`), esa lista se crea **una sola vez**, cuando se define la función, y todas las fichas que no reciben `notas` terminan apuntando a la misma.
- Escenario: modo 5. Interruptor "defecto mutable". Con él encendido, crear Ana y Luis dibuja dos fichas con flechas a la misma caja de lista.
- Chequeo (predicción antes de tocar): "Con `def __init__(self, nombre, notas=[])`, creas Ana y Luis sin pasar notas y haces `ana.notas.append(8)`. ¿Qué imprime `luis.notas`?" Respuesta: **`[8]`** (verificado; además `ana.notas is luis.notas` da `True`).
  - `[]`: "Parece que cada uno recibe una lista vacía nueva, pero la lista por defecto se fabricó una sola vez."
  - Un error: "No hay error: el código funciona y comparte la lista sin avisar."
- Este es el paso de la **trampa** (contraejemplo de "cada ficha tiene lo suyo").
- Cómo se arregla: `notas=None` y adentro `self.notas = [] if notas is None else notas`, o crear la lista siempre en `__init__` (como el código de la página).
- Citas: Think Python, ejercicio 17-2, la clase `Kangaroo` que guarda cosas en una lista y el aviso de que es un error clásico (PDF 226); Python Workout, el `default_factory` de `dataclass` explica por qué una lista no puede ser un valor por defecto compartido (PDF 199).

### Paso 6. Alias y copias de objetos
- Idea: `b = ana` no crea una ficha nueva: es otro nombre para la misma. `copy.copy(ana)` crea una ficha nueva, pero la lista `notas` de adentro sigue siendo la misma (copia superficial); `copy.deepcopy` copia también la lista.
- Escenario: modo 6. Botones de alias, copia y copia profunda, con las flechas correspondientes.
- Chequeo (predicción, tres partes encadenadas con los datos verificados): partiendo de Ana con `[]`:
  - `b = ana; b.agregar(9)`, ¿qué tiene `ana.notas`? **`[9]`**.
  - `c = copy.copy(ana); c.agregar(5)`, ¿qué tiene `ana.notas`? **`[9, 5]`** (la lista es compartida).
  - `d = copy.deepcopy(ana); d.agregar(1)`, ¿qué tiene `ana.notas`? **`[9, 5]`** (la copia profunda tiene su propia lista).
  - Pista general si falla: "Sigue las flechas: ¿la ficha que tocas apunta a la misma caja de lista que Ana?"
- Citas: Think Python, los objetos son mutables (PDF 202) y copiar objetos, con la figura de dos rectángulos que comparten la esquina (PDF 203-204).

### Paso 7. Que el objeto se comporte como uno de Python
- Idea: los métodos con dos guiones bajos (`__init__`, `__repr__`, `__str__`, `__len__`, `__add__`, `__iter__`) son ganchos que Python llama solo cuando usas la sintaxis normal (`print`, `len`, `+`, `for`). Definirlos hace que tu tipo se integre con el lenguaje.
- Escenario: modo 7. Panel "cómo se imprime": sin `__repr__`, `print(ana)` muestra `<__main__.Libreta object at 0x...>`; con un `__repr__` que devuelva `Libreta('Ana', [8, 6, 10])`, muestra eso. Una tabla pequeña: sintaxis, método que Python llama (`len(x)` llama `x.__len__()`, `a + b` llama `a.__add__(b)`, `for v in x` llama `x.__iter__()`).
- Chequeo (elección con explicación): "Quieres que `len(ana)` devuelva cuántas notas tiene. ¿Qué método defines?"
  - Correcta: `def __len__(self): return len(self.notas)`.
  - `def len(self): ...`: "Eso crea un método llamado `len`, que se llama `ana.len()`; la función `len(ana)` busca `__len__`."
  - `def __len__(): ...`: "Falta `self`: Python le pasa la ficha y el método no la recibe."
  - `def __len__(self): print(len(self.notas))`: "`len` exige que el método devuelva un entero; imprimir no es devolver."
- Puente: definir `__iter__` es lo que hace que un objeto funcione en un `for`: es el tema de "Iteradores y generadores".
- Citas: Think Python, `__str__` (PDF 221) y sobrecarga de operadores con `__add__` (PDF 221-222); Python Workout, apertura del cap. 9 con `ScoreList` y la diferencia entre interfaz e implementación (PDF 184-185).
- `details.profundizar` (dos): "Herencia en una línea": `class LibretaPosgrado(Libreta): maximo = 20` hereda todo y cambia el máximo; Python busca en la ficha, en la clase, en la clase madre y al final en `object` (Python Workout PDF 199; Think Python, herencia con `Hand(Deck)`, PDF 234). "¿Y `dataclass`?": escribe `__init__` y `__repr__` por ti (Python Workout PDF 198).

## Vida real (Python y R)

Mismos datos del recorrido. El programa define la clase, crea dos instancias, agrega notas con un bucle, calcula el promedio con un
bucle explícito dentro del método y termina comparando con la librería (`statistics.mean` en Python, `mean` en R).

R tiene varios sistemas de objetos. El más parecido a una clase de Python es **R6** (paquete instalado en esta máquina): sus objetos
se modifican en su lugar, como en Python. La página lo dice con honestidad:
- En R6 no hay atributos de clase como en Python: `maximo = 10` dentro de `public` se **copia en cada instancia**. Cambiarlo en una no
  afecta a las otras ni al generador.
- Los objetos clásicos de R (listas con `class`, sistema S3) **se copian al asignar** (ver `codigo3`): el comportamiento de alias de
  Python no existe ahí.

Código Python (corrido con Python 3.13.5; idéntico al de la página):

```
import:     import statistics
null:
clase:      class Libreta:
maximo:         maximo = 10                              # atributo de clase
definit:        def __init__(self, nombre):
init1:              self.nombre = nombre                 # atributos de instancia
init2:              self.notas = []
defagr:         def agregar(self, nota):
agrega:             self.notas.append(min(nota, self.maximo))
defprom:        def promedio(self):
total0:             total = 0
forn:               for n in self.notas:
suma:                   total = total + n
ret:                return total / len(self.notas)
null:
creaana:    ana = Libreta("Ana")
crealuis:   luis = Libreta("Luis")
forana:     for nota in [8, 6, 10]:
llamaana:       ana.agregar(nota)
forluis:    for nota in [4, 12]:
llamaluis:      luis.agregar(nota)
imp1:       print(ana.promedio(), luis.promedio())
imp2:       print(vars(luis))
lib:        print(statistics.mean(ana.notas) == ana.promedio())
```

Código R (corrido con R 4.6.1 y R6; llaves y cierres con id `null`; las líneas `nombre = NULL,` y `notas = NULL,` llevan id `clase`
para iluminarse con la definición):

```
import:     library(R6)
null:
clase:      Libreta <- R6Class("Libreta", public = list(
maximo:       maximo = 10,                               # se copia en cada instancia
clase:        nombre = NULL,
clase:        notas = NULL,
definit:      initialize = function(nombre) {
init1:          self$nombre <- nombre
init2:          self$notas <- c()
null:         },
defagr:       agregar = function(nota) {
agrega:         self$notas <- c(self$notas, min(nota, self$maximo))
null:         },
defprom:      promedio = function() {
total0:         total <- 0
forn:           for (n in self$notas) {
suma:             total <- total + n
null:           }
ret:            total / length(self$notas)
null:         }
null:       ))
null:
creaana:    ana <- Libreta$new("Ana")
crealuis:   luis <- Libreta$new("Luis")
forana:     for (nota in c(8, 6, 10)) {
llamaana:     ana$agregar(nota)
null:       }
forluis:    for (nota in c(4, 12)) {
llamaluis:    luis$agregar(nota)
null:       }
imp1:       print(c(ana$promedio(), luis$promedio()))
imp2:       print(luis$notas)
lib:        print(mean(ana$notas) == ana$promedio())
```

Salida real de Python:
```
8.0 7.0
{'nombre': 'Luis', 'notas': [4, 10]}
True
```
Salida real de R:
```
[1] 8 7
[1]  4 10
[1] TRUE
```

Foto de estado por línea ejecutada (el constructor la genera con un bucle; `self` indica qué ficha está activa):

| # | id | self | variables que cambian |
|---|---|---|---|
| 1-6 | import, clase, maximo, definit, defagr, defprom | | se define la clase; `Libreta.maximo = 10`; los métodos quedan guardados sin correr |
| 7-9 | creaana, init1, init2 | ficha de Ana | `ana.nombre = 'Ana'`, `ana.notas = []` |
| 10-12 | crealuis, init1, init2 | ficha de Luis | `luis.nombre = 'Luis'`, `luis.notas = []` |
| 13-21 | (forana, llamaana, agrega) x3 | Ana | `nota` 8, 6, 10; `ana.notas` crece a `[8, 6, 10]` |
| 22-27 | (forluis, llamaluis, agrega) x2 | Luis | `nota` 4, 12; `min(12, 10)` da 10; `luis.notas = [4, 10]` |
| 28 | imp1 | | empieza la llamada a `ana.promedio()` |
| 29-35 | total0, (forn, suma) x3, ret | Ana | `total` 0, 8, 14, 24; devuelve 8.0 |
| 36-40 | total0, (forn, suma) x2, ret | Luis | `total` 0, 4, 14; devuelve 7.0; se imprime `8.0 7.0` |
| 41-42 | imp2, lib | | `vars(luis)` (en R, `luis$notas`); comparación con la librería: `True` |

(La comparación `lib` vuelve a llamar a `ana.promedio()`; para no alargar, la foto la muestra como un solo evento y la narración lo dice.
Los `for` de la tabla cuentan solo las vueltas con elemento; el constructor decide si agrega el evento de salida de cada bucle, igual
en los dos lenguajes.)

Visual de la vida real: el diagrama de objetos del recorrido en pequeño (molde, dos fichas, nombres) con la etiqueta `self` sobre la
ficha activa, y una barra de "pila" con el método que está corriendo (`agregar` o `promedio`) encima del programa principal.

Predicción antes de reproducir (`#vrPred`): "Luis agrega 4 y 12. ¿Qué promedio se imprime para Luis?" Respuesta: **7.0** (7 en R).
Distractor 8.0: "El 12 se recorta a 10 por el máximo: `(4 + 10) / 2`." Distractor 8: "Ese es el promedio sin recorte; mira `min(nota, self.maximo)`."

`p.vr-nota`: "Sin clase, lo mismo es `statistics.mean(notas)` en Python y `mean(notas)` en R; la clase agrega que cada libreta lleve sus
datos y sus reglas (el máximo) juntos."
`details.profundizar` de la vida real: "Los tres sistemas de objetos de R": S3 (una lista con atributo `class` y funciones genéricas
como `print`), S4 (clases formales con `setClass`) y R6 o Reference Classes (objetos que se modifican en su lugar). Python tiene un solo
sistema, parecido a R6.

Trampas reales (retos `codigo1`..`codigo3`, verificados):

- `codigo1` (Python, lista por defecto compartida):
  ```
  class Libreta:
      def __init__(self, nombre, notas=[]):
          self.nombre = nombre
          self.notas = notas
  ana = Libreta("Ana")
  luis = Libreta("Luis")
  ana.notas.append(8)
  print(luis.notas)
  print(ana.notas is luis.notas)
  ```
  Salida: `[8]` y `True`. Opciones para la primera línea: `[8]` (correcta) / `[]` / `AttributeError`.
- `codigo2` (Python, asignar por la instancia crea una sombra):
  ```
  class Libreta:
      maximo = 10
  ana = Libreta()
  luis = Libreta()
  ana.maximo = 20
  print(ana.maximo, luis.maximo, Libreta.maximo)
  Libreta.maximo = 7
  print(ana.maximo, luis.maximo)
  ```
  Salida: `20 10 10` y `20 7`. Pregunta: "¿qué imprime la última línea?" Opciones: `20 7` (correcta) / `7 7` / `20 10`.
- `codigo3` (R, una lista S3 se copia; un objeto R6 no):
  ```
  l <- structure(list(notas = c(8)), class = "libreta")
  m <- l
  m$notas <- c(m$notas, 6)
  print(l$notas)
  ```
  Salida: `[1] 8` (la lista original no cambió). Con R6, `b <- a; b$notas <- c(b$notas, 6)` sí cambia `a$notas` a `8 6`
  (verificado), y `a$clone()` crea una copia independiente. Opciones: `[1] 8` (correcta) / `[1] 8 6` / un error.

## Retos (10)

1. `ojo-donde` (ojo clínico, 5 rondas al azar, aprueba con 4 de 5): se muestra una línea de código sobre la clase `Libreta` y Francisco
   decide dónde queda el cambio: "en la ficha", "en el molde (la clase)" o "en una lista compartida". Banco de líneas para sortear:
   `ana.notas.append(3)` (ficha), `ana.maximo = 12` (ficha, sombra), `Libreta.maximo = 12` (molde), `ana.apodo = "A"` (ficha, atributo
   nuevo), `Libreta.agregar = otra_funcion` (molde), y con defecto mutable activo, `luis.notas.append(1)` (lista compartida). Cada
   ronda muestra el diagrama con el cambio después de responder.
2. `construir-fichas` (construir): con los controles del escenario, Francisco llega a un estado objetivo que se valida leyendo el modelo:
   (a) tres instancias con promedios 6, 8 y 10; (b) que `ana.maximo` y `Libreta.maximo` sean distintos; (c) dos nombres que apunten
   a la misma ficha (alias) y una copia profunda con otra lista.
3. `mano-promedio` (a mano, reintentable, datos al azar): se generan 3 o 4 notas al azar entre 0 y 15 y un máximo al azar entre 8 y 12.
   Francisco escribe el promedio que devuelve `promedio()` después de agregarlas (con recorte). Pistas: (1) "primero recorta cada nota
   que pase el máximo"; (2) se muestran las notas recortadas; (3) se muestra la suma. Elegir datos para que el promedio tenga a lo sumo
   dos decimales (o aceptar redondeo a 2).
4. `mano-args` (a mano, reintentable): se muestra una llamada al azar (`ana.agregar(8)`, `Libreta.agregar(ana, 8)`, `ana.promedio()`,
   `ana.agregar()`, `ana.agregar(8, 6)`) y Francisco escribe cuántos argumentos posicionales recibe el método en total (contando
   `self`) y si da error. Pistas: (1) "la ficha antes del punto entra como `self`"; (2) "llamado desde la clase, `self` va explícito".
5. `cazar-clase` (cazar el error, 3 variantes; desarrollos de 5 a 7 líneas con una línea mal):
   - Variante A: `def agregar(nota):` sin `self`; al llamar `ana.agregar(8)` falla con "takes 1 positional argument but 2 were given".
   - Variante B: en `__init__`, `notas = []` en vez de `self.notas = []`; después `ana.notas` da `AttributeError`.
   - Variante C: el máximo se cambia con `ana.maximo = 12` creyendo que cambia para todas; Luis sigue recortando a 10.
6. `prop-objetos` (propiedades, opción múltiple, `mezclar: true`, reintentable): "¿Cuál afirmación es verdadera?"
   - Correcta: "`ana.agregar(8)` y `Libreta.agregar(ana, 8)` hacen exactamente lo mismo."
   - "`self` es una palabra reservada de Python": pista "es solo una convención: el primer parámetro podría llamarse de otro modo (no lo hagas)."
   - "Cada instancia guarda una copia de los métodos": pista "los métodos viven en la clase; la ficha solo guarda sus atributos (`vars(ana)` no los muestra)."
   - "`b = ana` crea una libreta nueva igual a la de Ana": pista "crea otro nombre para la misma ficha; `b is ana` da `True`."
7. `prop-r6` (propiedades, opción múltiple con pista por respuesta): "En R, con una lista S3 `l` y `m <- l; m$notas <- 9`, ¿qué pasa con `l`?"
   - Correcta: "No cambia: R copia la lista al modificar `m`."
   - "Cambia, como en Python": pista "eso pasa con R6; las listas comunes se copian al modificarse."
   - "Da error porque `l` tiene clase": pista "la clase S3 es solo una etiqueta; no impide modificar."
8. `codigo1`, 9. `codigo2`, 10. `codigo3`: las trampas reales de la vida real.

Lecturas asociadas (citar como lectura, no copiar): Python Workout ej. 38 (la bola de helado, PDF 187-193), 39 (el bol, PDF 194-199),
40 (límite de bolas, atributos de clase, PDF 201-205), 41 (herencia, PDF 206-208); Think Python ejercicios 15-1 (PDF 206) y 17-2 (PDF 226).

## Memoria

`B.ordenar` (armar la clase mínima, pieza por pieza):
- Piezas en orden: `class Libreta:` · `maximo = 10` · `def __init__(self, nombre):` · `self.nombre = nombre` · `self.notas = []` ·
  `def agregar(self, nota):` · `self.notas.append(min(nota, self.maximo))`
- Distractores: `def __init__(nombre):` (falta `self`) · `notas = []` (variable local que se pierde) · `def __init__(self, nombre, notas=[]):` (lista compartida)

Tarjetas (`B.tarjetas`, 8):
1. ¿Qué diferencia hay entre una clase y una instancia? · La clase es el molde; la instancia es un objeto hecho con él, con su propio estado.
2. ¿Qué es `self`? · El objeto sobre el que se llama el método; Python lo pasa solo como primer argumento.
3. ¿Cuándo corre `__init__`? · Al llamar a la clase, por ejemplo `Libreta("Ana")`, una vez por instancia nueva.
4. ¿Dónde busca Python `ana.maximo`? · Primero en la instancia, luego en la clase, luego en las clases madre.
5. ¿Qué hace `ana.maximo = 20` si `maximo` es de clase? · Crea un atributo en `ana` que tapa al de la clase; las otras instancias no cambian.
6. ¿Por qué `notas=[]` como valor por defecto es una trampa? · La lista se crea una vez y la comparten todas las instancias que no pasan `notas`.
7. ¿Qué hace `copy.copy` con un objeto que tiene una lista? · Crea un objeto nuevo pero la lista es la misma; `deepcopy` copia también la lista.
8. ¿Qué sistema de objetos de R se parece más a las clases de Python? · R6 (o Reference Classes): se modifican en su lugar; las listas S3 se copian.

## Citas (14)

| id de fuente | pág. PDF | pág. impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| thinpython | 198 | 177 | Cap. 15: Programmer-Defined Types | `class Point:`, crear una instancia y qué muestra Python al imprimirla | Paso 2 |
| thinpython | 199 | 178 | Cap. 15: Attributes | notación de punto y el diagrama de objeto de `Point` | Paso 2 |
| thinpython | 202 | 181 | Cap. 15: Objects Are Mutable | una función que modifica el objeto que recibe | Paso 6 |
| thinpython | 203 | 182 | Cap. 15: Copying | `copy.copy` frente a `copy.deepcopy` y la figura de dos rectángulos que comparten la esquina | Paso 6 |
| thinpython | 217 | 196 | Cap. 17: Printing Objects | de función a método, `Time.print_time(start)` y el primer parámetro `self` | Paso 3 |
| thinpython | 219 | 198 | Cap. 17: Another Example | el `TypeError` de "takes 2 positional arguments but 3 were given" | Paso 3, después del chequeo |
| thinpython | 220 | 199 | Cap. 17: The init Method | `__init__` con valores por defecto | Paso 2 |
| thinpython | 221 | 200 | Cap. 17: The __str__ Method | `__str__` y, en la misma página, `__add__` | Paso 7 |
| thinpython | 226 | 205 | Cap. 17: Exercises (17-2) | la clase `Kangaroo`, presentada como un error clásico con listas | Paso 5 |
| thinpython | 229 | 208 | Cap. 18: Class Attributes | atributos de clase (`suit_names`, `rank_names`) frente a atributos de instancia | Paso 4 |
| pyworkout | 184 | 158 | Cap. 9, apertura | por qué objetos: el ejemplo `ScoreList` frente a la versión con funciones (sigue en PDF 185) | Cabecera o paso 1 |
| pyworkout | 189 | 163 | Ej. 38, recuadro sobre `self` | `class`, `__init__` y qué es `self` | Paso 2 |
| pyworkout | 199 | 173 | Ej. 39, recuadro "How Python searches for attributes" | la regla instancia, clase, padres y `object`; `default_factory` de `dataclass` | Pasos 4 y 5 |
| pyworkout | 203 | 177 | Ej. 40: Bowl limits | asignar un atributo de clase por la instancia crea uno nuevo en la instancia | Paso 4, destacado |

Páginas tomadas de los mapas `brain/fuentes/think-python.md` y `brain/fuentes/python-workout.md`. Leí con `pdftotext` las PDF 185, 189,
190, 198, 199 y 203 de Python Workout y 217, 226-227 y 229 de Think Python para confirmar el contenido.

## Riesgos y notas para quien construye

- **Direcciones de memoria.** `<__main__.Libreta object at 0x...>` cambia en cada ejecución; mostrar `<__main__.Libreta object at 0x…>`
  y decir que el número varía.
- **R6 no es R base.** Está instalado aquí (dependencia del tidyverse), pero no viene con R. El código de la página carga `library(R6)`;
  decirlo en la narración de la línea `import`. No presentar R6 como "lo normal en R": en análisis de datos casi siempre se usan listas,
  data frames y S3.
- **`maximo` en R6.** No es un atributo de clase: cada instancia tiene su copia. La narración de la línea `maximo` en R debe decirlo.
- **Python 3.13 y los mensajes.** El texto del `TypeError` incluye el nombre calificado: `Libreta.agregar() takes 2 positional arguments
  but 3 were given` (verificado). Think Python (PDF 219) muestra la versión antigua del mensaje, sin el nombre de la clase; decirlo si se
  pone al lado.
- **Errata o imprecisión de Python Workout a mencionar en el profundizar de herencia**: ninguna en las páginas citadas de este capítulo
  (las erratas del libro están en el cap. 10 y se tratan en "Iteradores y generadores").
- **Think Python, ejercicio 17-2.** El libro no muestra el error en la página: remite a descargar `BadKangaroo.py`. La página explica la
  trampa con su propio ejemplo (la libreta), no con el canguro.
- **El evento de `lib` vuelve a llamar a `promedio()`.** Si la foto lo detalla, son 6 eventos más; si no, la narración debe decir que
  `ana.promedio()` corre otra vez por dentro.
- **Material del máster.** SM142002 no enseña clases (mapa `sm142002-programacion.md`, "No aparece"); decir en la página que el tema
  viene de los libros que recomienda la materia.
