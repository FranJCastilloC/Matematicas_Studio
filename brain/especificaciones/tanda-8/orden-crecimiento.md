# Especificación: Orden de crecimiento (orden-crecimiento)

- Ruta: `python-base` (Programación con datos), orden 16, tanda 8
- Prerrequisitos: "Bucles y variables que cambian", "Diccionarios, conjuntos y hash", "Logaritmos"
- Siguientes: (ninguno en el catálogo)
- Aparece: SM142002, UD1
- Resumen del catálogo: "Cuánto crece el trabajo de un programa cuando crece la entrada: lineal, cuadrático, y por qué una tabla hash gana."
- Archivo: `biblioteca/conceptos/orden-crecimiento.html`. Grupo "Programación con datos": la imagen central es un contador y una tabla de
  pasos, no una fórmula. La notación O(...) entra recién en el paso 7.

## Imagen central

**El contador de pasos.** Una fila de fichas numeradas (números de socio de un club, inventados) y tres "buscadores" que intentan
encontrar un número, cada uno con su contador de pasos real (cada paso = una comparación `x == buscado` o, en el cuadrático, un par
revisado). Debajo, una gráfica de pasos contra n que se va llenando con un punto por cada tamaño probado.

Partes del escenario (capas que se encienden por paso):
- **Fila de fichas**: n fichas. En el modo inicial son los 8 socios `[3, 8, 12, 15, 21, 30, 34, 40]` (ordenados) o la versión desordenada
  `[12, 3, 40, 8, 30, 21, 15, 34]` para la trampa. Para los tamaños grandes, la fila se dibuja como una barra con marcas (n = 16 a 128:
  fichas `5, 10, ..., 5n`), sin números individuales.
- **Carril lineal**: un cursor que avanza ficha por ficha; contador "pasos: k".
- **Carril binario**: un corchete `[izq, der]` que se parte a la mitad; la ficha del medio parpadea; contador.
- **Carril hash**: una rejilla de m = n cubetas (cajones numerados 0..m-1). Cada ficha cae en el cajón `x % m`. Buscar = ir directo al
  cajón y comparar solo con lo que hay ahí. Con los 8 socios, el cajón 0 tiene dos fichas (8 y 40): una colisión visible.
- **Triángulo de pares** (capa cuadrática): matriz n x n donde se pintan las casillas `i < j` una por una; contador de pares.
- **Gráfica**: eje x = n (8, 16, 32, 64, 128), eje y = pasos; una serie por buscador (lineal `--j`, binaria `--k`, hash `--pos`,
  pares `--neg`). Interruptor "eje y lineal / logarítmico".

Controles concretos:
- **Deslizador n** con valores 8, 16, 32, 64, 128 (duplica en cada muesca).
- **Selector "número buscado"**: un número de la fila (presente) o `5n + 5` (ausente, peor caso). Con los 8 socios, casillas para
  elegir cualquiera de los 8 o "33" (ausente).
- **Botones**: "Paso" (una comparación), "Correr" (animación), "Reiniciar". Casilla "fila desordenada" (solo en el paso 3).
- **Tabla viva** a un lado: n | lineal | binaria | hash | pares, que se llena con los conteos reales (los mismos que imprime el código).

Valores reales (peor caso, buscado ausente `5n + 5`, verificados en Python y R):

| n | lineal | binaria | hash | pares |
|---|---|---|---|---|
| 8 | 8 | 4 | 1 | 28 |
| 16 | 16 | 5 | 1 | 120 |
| 32 | 32 | 6 | 1 | 496 |
| 64 | 64 | 7 | 1 | 2016 |
| 128 | 128 | 8 | 1 | 8128 |

Con los 8 socios y buscado 40: lineal 8, binaria 4, hash 2 (cajón 0 = [8, 40]).

Lo que hace evidente la idea: al duplicar n, una columna se duplica, otra suma 1, otra no se mueve y otra se cuadruplica.

## Hipótesis inicial

"Si un programa tarda 1 segundo con 1 000 datos, ¿cuánto crees que tardará con 2 000? ¿Siempre el doble?"

## Pasos (7)

### Paso 1. Buscar mirando una por una
- Idea: si miras ficha por ficha, el trabajo crece igual que la fila.
- Escenario: modo "fila", sin contadores visibles ni gráfica. 8 fichas boca abajo, desordenadas. Se pide encontrar un socio que no está.
- Chequeo (predicción sin símbolos, antes de tocar): "Para asegurarte de que el socio no está, tuviste que mirar las 8 fichas. Si la
  fila tuviera 16 fichas, ¿cuántas mirarías?"
  - Correcta: "16, el doble". Para decir "no está" hay que ver todas.
  - "9, una más": eso pasaría si solo hubiera que mirar la nueva; pero las 16 son desconocidas.
  - "8, igual": solo si supieras de antemano en qué mitad buscar (eso es el paso 3).
  - "32, cuatro veces": eso le pasa a otro tipo de trabajo (paso 5), no a mirar una por una.
  Al resolver, se destapan las fichas y aparece el contador.

### Paso 2. Contar pasos de verdad
- Idea: medir un algoritmo es contar sus operaciones, no cronometrarlo; el peor caso es cuando el buscado no está.
- Escenario: carril lineal + tabla viva (solo columna lineal). Deslizador n y selector de buscado activos.
- Chequeo (cálculo con datos en vivo): "Con n = 32 y el buscado ausente, ¿cuántos pasos da la búsqueda lineal? ¿Y si el buscado es el
  primero de la fila?"
  - Correcta: "32 y 1". El peor caso recorre todo; el mejor encuentra en la primera.
  - "16 y 1": eso es el caso promedio si el buscado está; aquí no está.
  - "32 y 32": si lo encuentra en la primera, el bucle sale con `return`.
  - "33 y 1": no hay paso extra; el bucle termina tras la última ficha.
- Cita: Think Python PDF 271 (impresa 250): la búsqueda lineal y su peor caso.
- Profundizar ("¿Por qué no cronometrar?"): el tiempo depende de la máquina, de qué más corre y del lenguaje; contar pasos no. Think
  Python PDF 267 (impresa 246) explica por qué es difícil comparar algoritmos midiendo.

### Paso 3. Partir por la mitad
- Idea: si la fila está ordenada, cada comparación descarta la mitad; los pasos crecen como el logaritmo en base 2.
- Escenario: carril binario + columna binaria de la tabla. Se ve el corchete achicarse: con los 8 socios y buscado 40, el medio visita
  15, 30, 34, 40 (posiciones 3, 5, 6, 7 en Python; 4, 6, 7, 8 en R).
- Chequeo (predicción con datos en vivo): "Para n = 128 y el buscado ausente (mayor que todos), ¿cuántos pasos dará la binaria?" Mostrar la
  tabla hasta n = 64 (4, 5, 6, 7) y tapar la fila de 128.
  - Correcta: 8. Cada vez que n se duplica se suma un paso; $\log_2 128 + 1 = 8$.
  - 64: eso sería la mitad de la lineal, no partir a la mitad repetidamente.
  - 7: $\log_2 128 = 7$ cuenta las particiones; la comparación final con la última ficha suma una.
  - 128: esa es la lineal.
- **Trampa / contraejemplo**: casilla "fila desordenada" con `[12, 3, 40, 8, 30, 21, 15, 34]` y buscado 40. La binaria visita 8, 21, 15, 34
  (posiciones 3, 5, 6, 7), descarta la mitad equivocada y dice "no está" en 4 pasos, aunque el 40 está en la posición 2. Sin orden,
  el atajo da una respuesta falsa y sin error.
- Enlace con "Logaritmos": $\log_2 n$ es cuántas veces puedes partir n por la mitad hasta llegar a 1. Think Python PDF 272 (impresa 251):
  un millón de elementos en unos 20 pasos.

### Paso 4. Ir directo al cajón (tabla hash)
- Idea: una función hash convierte el número en el cajón donde vive; buscar es abrir un solo cajón, sin importar n.
- Escenario: carril hash + rejilla de cajones. Con los 8 socios y m = 8: 3 -> 3, 8 -> 0, 12 -> 4, 15 -> 7, 21 -> 5, 30 -> 6, 34 -> 2, 40 -> 0.
  Los números de cajón aparecen solo tras resolver.
- Chequeo (cálculo con datos en vivo): "¿En qué cajón cae el 40 y cuántos pasos da buscarlo?"
  - Correcta: "Cajón 0, 2 pasos". `40 % 8 = 0`, y en el cajón 0 ya estaba el 8 (colisión): se compara con 8 y luego con 40.
  - "Cajón 5, 1 paso": 40 / 8 = 5 es la división; el cajón es el resto.
  - "Cajón 0, 1 paso": olvida la colisión con el 8.
  - "Cajón 0, 8 pasos": la hash no mira toda la fila, solo el cajón.
- Al subir n con el deslizador (fichas `5, 10, ..., 5n`, m = n, buscado `5n + 5`): siempre 1 paso. Mostrar que llenar los cajones cuesta n
  pasos una sola vez (contador "costo de armar la tabla" aparte).
- Citas: Think Python PDF 272-276 (impresas 251-255): de una lista de pares a `BetterMap` y `HashMap`; Python Workout PDF 81 (impresa 55):
  por qué un diccionario busca en tiempo constante con la función hash.
- Enlace: "Diccionarios, conjuntos y hash" (el `in` de un `set` o de un `dict` usa justo esto).

### Paso 5. Comparar todos con todos (cuadrático)
- Idea: si cada ficha se compara con todas las demás (por ejemplo, para buscar socios repetidos), los pasos crecen con el cuadrado.
- Escenario: capa "triángulo de pares" + columna pares + gráfica. Con n = 8 se pintan las 28 casillas `i < j`.
- Chequeo (cálculo con datos en vivo): "Con n = 32 hubo 496 pares. ¿Cuántos habrá con n = 64?"
  - Correcta: 2016. Es $n(n-1)/2 = 64 \cdot 63 / 2$; casi cuatro veces 496.
  - 992: eso sería el doble; el triángulo crece en las dos direcciones.
  - 4096: es $64^2$; cuenta cada par dos veces y también la diagonal.
  - 4032: es $64 \cdot 63$; cuenta cada par dos veces (i con j y j con i).
- Profundizar ("¿Por qué n(n-1)/2?"): la fila i tiene n - 1 - i casillas a su derecha; sumar 7 + 6 + ... + 0 = 28.

### Paso 6. Lo que importa es el término que manda (destacado con predicción)
- Idea: con n pequeño un algoritmo "peor" puede ganar; a partir de un punto de cruce, manda el término de mayor crecimiento.
- Escenario: modo "carrera". Dos curvas inventadas: A hace $50n$ pasos (lineal con costo fijo alto por ficha), B hace $n^2/2$ pasos. Deslizador n
  de 10 a 200. Tabla con los dos valores en vivo.
- `.destacado` con predicción (confusión natural: "el que gana con pocos datos gana siempre", o "el lineal siempre es mejor"):
  "Con n = 20, A hace 1 000 pasos y B hace 200. ¿Para qué n empatan, y quién gana con n = 200?"
  - Correcta: "Empatan en n = 100 (5 000 = 5 000); con n = 200 gana A (10 000 frente a 20 000)". El cuadrado termina pasando a cualquier lineal.
  - "B gana siempre, ya ganó con 20": solo hasta el cruce.
  - "Nunca empatan": $n^2/2 = 50n$ tiene solución n = 100.
  - "Empatan en n = 50": eso iguala $n^2$ con $50n$ sin la mitad.
- Cita: Think Python PDF 267-268 (impresas 246-247): término dominante y punto de cruce.

### Paso 7. Ponerle nombre: O grande
- Idea: el orden de crecimiento agrupa algoritmos por cómo crecen; se escribe O(1), O(log n), O(n), O(n²).
- Escenario: la gráfica completa con las cuatro series y el interruptor de eje logarítmico; al lado, la tabla del libro con la columna
  "nombre" y casillas vacías para asignar cada buscador.
- Chequeo (elección con explicación): emparejar lineal -> O(n), binaria -> O(log n), hash -> O(1), pares -> O(n²).
  Pistas por error: si pone binaria en O(n): "mira la tabla: de 64 a 128 sumó 1 paso, no 64"; si pone hash en O(log n): "con n = 8 o 128
  dio 1 paso; no creció nada"; si pone pares en O(n): "al duplicar n se multiplicó casi por 4".
- Nota: la base del logaritmo no importa (cambiarla es multiplicar por una constante): Think Python PDF 269 (impresa 248).
- Profundizar ("¿Y armar la tabla hash no cuesta?"): agregar n elementos a una tabla que se duplica cuando se llena cuesta en total unos 2n
  pasos, así que cada `add` cuesta en promedio una constante. Think Python PDF 276 (impresa 255), Figure 21-1.
- Citas: Think Python PDF 268 (impresa 247): la tabla de órdenes de crecimiento; PDF 269-271 (impresas 248-250): costo de las operaciones
  básicas de Python (indexar constante, `in` sobre lista lineal, `sort` n log n, diccionario constante).

## Vida real (Python y R)

Datos: los 8 socios del recorrido (`[3, 8, 12, 15, 21, 30, 34, 40]`, inventados) para buscar el 40, y luego las filas `5, 10, ..., 5n`
con n = 8, 16, 32, 64, 128 y buscado `5n + 5` (ausente, peor caso). El contador es real: cada función cuenta sus comparaciones con
un bucle explícito. Cierra comparando las respuestas con las herramientas de la librería (`in`, `bisect`, `set`; `%in%`, `match`,
`findInterval`).

### Python (corrido con Python 3.13.5; archivo `orden.py`)

```python
import bisect

def lineal(lista, buscado):
    pasos = 0
    for x in lista:
        pasos = pasos + 1
        if x == buscado:
            return pasos
    return pasos

def binaria(lista, buscado):
    pasos = 0
    izq = 0
    der = len(lista) - 1
    while izq <= der:
        pasos = pasos + 1
        medio = (izq + der) // 2
        if lista[medio] == buscado:
            return pasos
        elif lista[medio] < buscado:
            izq = medio + 1
        else:
            der = medio - 1
    return pasos

def con_hash(lista, buscado):
    m = len(lista)
    cubetas = [[] for _ in range(m)]
    for x in lista:
        cubetas[x % m].append(x)
    pasos = 0
    for x in cubetas[buscado % m]:
        pasos = pasos + 1
        if x == buscado:
            return pasos
    return pasos

def pares(lista):
    pasos = 0
    for i in range(len(lista)):
        for j in range(i + 1, len(lista)):
            pasos = pasos + 1
    return pasos

socios = [3, 8, 12, 15, 21, 30, 34, 40]
print("buscar 40:", lineal(socios, 40), binaria(socios, 40), con_hash(socios, 40))
print("libreria:", 40 in socios, bisect.bisect_left(socios, 40), 40 in set(socios))

for n in [8, 16, 32, 64, 128]:
    lista = [5 * k for k in range(1, n + 1)]
    buscado = 5 * n + 5
    print(n, lineal(lista, buscado), binaria(lista, buscado),
          con_hash(lista, buscado), pares(lista))
```

Salida real:
```
buscar 40: 8 4 2
libreria: True 7 True
8 8 4 1 28
16 16 5 1 120
32 32 6 1 496
64 64 7 1 2016
128 128 8 1 8128
```

### R (corrido con R 4.6.1; archivo `orden.R`)

```r
lineal <- function(lista, buscado) {
  pasos <- 0
  for (x in lista) {
    pasos <- pasos + 1
    if (x == buscado) {
      return(pasos)
    }
  }
  return(pasos)
}

binaria <- function(lista, buscado) {
  pasos <- 0
  izq <- 1
  der <- length(lista)
  while (izq <= der) {
    pasos <- pasos + 1
    medio <- (izq + der) %/% 2
    if (lista[medio] == buscado) {
      return(pasos)
    } else if (lista[medio] < buscado) {
      izq <- medio + 1
    } else {
      der <- medio - 1
    }
  }
  return(pasos)
}

con_hash <- function(lista, buscado) {
  m <- length(lista)
  cubetas <- vector("list", m)
  for (x in lista) {
    cubetas[[x %% m + 1]] <- c(cubetas[[x %% m + 1]], x)
  }
  pasos <- 0
  for (x in cubetas[[buscado %% m + 1]]) {
    pasos <- pasos + 1
    if (x == buscado) {
      return(pasos)
    }
  }
  return(pasos)
}

pares <- function(lista) {
  pasos <- 0
  for (i in seq_along(lista)) {
    for (j in seq_len(length(lista) - i) + i) {
      pasos <- pasos + 1
    }
  }
  return(pasos)
}

socios <- c(3, 8, 12, 15, 21, 30, 34, 40)
cat("buscar 40:", lineal(socios, 40), binaria(socios, 40), con_hash(socios, 40), "\n")
cat("libreria:", 40 %in% socios, match(40, socios), findInterval(40, socios), "\n")

for (n in c(8, 16, 32, 64, 128)) {
  lista <- 5 * (1:n)
  buscado <- 5 * n + 5
  cat(n, lineal(lista, buscado), binaria(lista, buscado),
      con_hash(lista, buscado), pares(lista), "\n")
}
```

Salida real:
```
buscar 40: 8 4 2 
libreria: TRUE 8 8 
8 8 4 1 28 
16 16 5 1 120 
32 32 6 1 496 
64 64 7 1 2016 
128 128 8 1 8128 
```

Índices: `bisect_left(socios, 40)` da 7 (desde 0) y `match(40, socios)` da 8 (desde 1): es la misma ficha. En R, el cajón de `x` es
`x %% m + 1` porque las listas empiezan en 1. `seq_len(length(lista) - i) + i` es la forma segura de "de i + 1 hasta n" (ver `codigo2`).

### Ids semánticos (compartidos)

| id | Python | R |
|---|---|---|
| `importar` | `import bisect` | (no existe) |
| `def-lineal` | `def lineal(lista, buscado):` | `lineal <- function(lista, buscado) {` |
| `pasos0` | `pasos = 0` (en cada función) | `pasos <- 0` |
| `for-x` | `for x in lista:` | `for (x in lista) {` |
| `contar` | `pasos = pasos + 1` (en cada función) | `pasos <- pasos + 1` |
| `comparar` | `if x == buscado:` | `if (x == buscado) {` |
| `devolver` | `return pasos` | `return(pasos)` |
| `def-binaria` | `def binaria(...)` | `binaria <- function(...)` |
| `bordes` | `izq = 0` / `der = len(lista) - 1` | `izq <- 1` / `der <- length(lista)` |
| `while` | `while izq <= der:` | `while (izq <= der) {` |
| `medio` | `medio = (izq + der) // 2` | `medio <- (izq + der) %/% 2` |
| `igual-medio` | `if lista[medio] == buscado:` | `if (lista[medio] == buscado) {` |
| `derecha` | `izq = medio + 1` | `izq <- medio + 1` |
| `izquierda` | `der = medio - 1` | `der <- medio - 1` |
| `def-hash` | `def con_hash(...)` | `con_hash <- function(...)` |
| `cubetas` | `cubetas = [[] for _ in range(m)]` | `cubetas <- vector("list", m)` |
| `llenar` | `cubetas[x % m].append(x)` | `cubetas[[x %% m + 1]] <- c(...)` |
| `abrir-cajon` | `for x in cubetas[buscado % m]:` | `for (x in cubetas[[buscado %% m + 1]]) {` |
| `def-pares` | `def pares(lista):` | `pares <- function(lista) {` |
| `for-i` | `for i in range(len(lista)):` | `for (i in seq_along(lista)) {` |
| `for-j` | `for j in range(i + 1, len(lista)):` | `for (j in seq_len(length(lista) - i) + i) {` |
| `socios` | `socios = [...]` | `socios <- c(...)` |
| `buscar40` | `print("buscar 40:", ...)` | `cat("buscar 40:", ...)` |
| `libreria` | `print("libreria:", ...)` | `cat("libreria:", ...)` |
| `for-n` | `for n in [8, 16, 32, 64, 128]:` | `for (n in c(8, 16, 32, 64, 128)) {` |
| `fila-n` | `lista = [5 * k ...]` / `buscado = 5 * n + 5` | `lista <- 5 * (1:n)` / `buscado <- 5 * n + 5` |
| `imprimir-n` | `print(n, ...)` | `cat(n, ...)` |

### Foto de estado por línea ejecutada

Se anima línea por línea la búsqueda del 40 en los 8 socios (las tres funciones). El bucle final de tamaños se anima a nivel de
llamada (un evento por fila impresa, con los cuatro contadores), no línea por línea: pares de 128 son 8 128 vueltas.

| momento | id | cambio |
|---|---|---|
| lineal, vueltas 1-8 | `contar` | `pasos` 1..8; `x` = 3, 8, ..., 40; en la 8 `comparar` es verdadero |
| binaria, vuelta 1 | `medio` | `izq=0, der=7, medio=3` (R: `1, 8, 4`); `lista[medio]=15` < 40 -> `derecha` |
| binaria, vuelta 2 | `medio` | `izq=4, der=7, medio=5` (R: `5, 8, 6`); 30 -> `derecha` |
| binaria, vuelta 3 | `medio` | `izq=6, medio=6` (R: `7, 7`); 34 -> `derecha` |
| binaria, vuelta 4 | `igual-medio` | `medio=7` (R: 8); 40 == 40 -> `pasos = 4` |
| hash | `llenar` x8 | cajones (Python): 0:[8, 40], 2:[34], 3:[3], 4:[12], 5:[21], 6:[30], 7:[15], 1:[] |
| hash | `abrir-cajon` | cajón 0 (R: elemento 1): compara 8 (paso 1), 40 (paso 2) |
| tamaños | `imprimir-n` | una fila de la tabla por cada n |

Visual: los tres carriles del escenario y la tabla viva; durante el bucle de tamaños, la gráfica agrega un punto por serie.

### Predicción antes de reproducir (`#vrPred`)
"Antes de correr: con n = 128, ¿cuántos pasos da cada búsqueda en el peor caso (lineal, binaria, hash)?" Respuesta: 128, 8, 1.
Opciones: "128, 8, 1" (correcta); "128, 64, 1" (confunde binaria con la mitad); "128, 7, 0" (olvida la última comparación y la del cajón);
"64, 8, 8" (cree que la hash mira log n).

### Trampas reales (retos `codigo1`, `codigo2`, `codigo3`)

`codigo1`: `bisect` no comprueba el orden. Código corrido:
```python
import bisect
print(bisect.bisect_left([3, 40, 12, 8, 30], 12))
print(bisect.bisect_left([3, 40, 12, 8, 30], 30))
```
Salida real: `1` y `4`. La lista no está ordenada; la posición 1 es el 40, no el 12. Sin error. Pregunta: "¿Dónde está el 12 de verdad?"
Respuesta: posición 2. La búsqueda binaria solo vale sobre datos ordenados.

`codigo2`: el `(i+1):n` de R con i = n. Código corrido:
```r
p <- 0
l <- 5 * (1:8)
for (i in seq_along(l)) for (j in (i + 1):length(l)) p <- p + 1
print(p)
```
Salida real: `[1] 30` (no 28). Cuando `i = 8`, `9:8` es `c(9, 8)`: dos vueltas de más. En Python `range(9, 8)` está vacío. Pregunta: "¿Cuántos
pares cuenta este código?" Respuesta: 30. Enlaza con la trampa de `1:length(x)` de "if, for y while en R".

`codigo3`: `findInterval` sí avisa. Código corrido:
```r
findInterval(12, c(3, 40, 12, 8, 30))
```
Salida real: `Error in findInterval(12, c(3, 40, 12, 8, 30)) : 'vec' must be sorted non-decreasingly and not contain NAs`. Pregunta: "¿Qué
hace `bisect` de Python con la misma lista?" Respuesta: devuelve una posición sin quejarse (codigo1). Mismo algoritmo, distinta política.

`p.vr-nota`: "En la práctica: `x in set(lista)` o un `dict` para buscar muchas veces (O(1)); `bisect` si ya está ordenado (O(log n));
`x in lista` solo para listas cortas o una búsqueda suelta (O(n)). En R: `%in%` y `match` recorren el vector."

`details.profundizar` ("¿Y en segundos?"): medición en esta máquina con `timeit` (200 repeticiones, buscado ausente):
n = 1 000: lista 3.7 µs, set 0.018 µs; n = 10 000: 34.1 µs y 0.019 µs; n = 100 000: 414.4 µs y 0.023 µs. La lista crece unas 10 veces por
cada factor 10 de n; el set casi no se mueve. Aclarar que los tiempos cambian de una máquina a otra y entre corridas (no son
salida exacta reproducible), a diferencia de los conteos.

## Retos (9)

1. `ojo-orden` (ojo clínico, 5 rondas al azar, aprueba con 4 de 5): se muestra una tabla de pasos para n = 10, 20, 40 generada a partir
   de una de cinco funciones con coeficientes al azar (`a·n`, `a·log2 n + b`, `c`, `a·n²`, `a·n·log2 n`) y Francisco elige el orden.
   Pista general: "mira qué pasa al duplicar n".
2. `ojo-codigo` (ojo clínico, 5 rondas): fragmentos cortos de Python; elegir su orden. Banco: un `for` simple (O(n)); dos `for` anidados sobre
   la misma lista (O(n²)); `x in conjunto` (O(1)); un `while` que divide `n //= 2` (O(log n)); `lista.sort()` (O(n log n)); dos `for`
   seguidos, no anidados (O(n), trampa: no es n²); `x in lista` dentro de un `for` sobre otra lista del mismo tamaño (O(n²)).
3. `construir-cruce` (construir): con dos deslizadores de coeficientes (A = a·n, B = b·n²) y el deslizador n, lograr: (a) que B gane
   en n = 50; (b) que el cruce quede exactamente en n = 40; (c) que A gane en todo n ≥ 10. Respuesta de (b): a/b = 40.
4. `a-mano-binaria` (a mano, datos al azar, reintentable): se genera una lista ordenada de 8 a 16 números de dos cifras y un buscado (presente o
   ausente). Francisco escribe la secuencia de `medio` (índices desde 0) y el número de pasos. Pistas: 1) "medio = (izq + der) // 2"; 2)
   "si lo del medio es menor, izq = medio + 1"; 3) muestra la primera vuelta resuelta.
5. `a-mano-hash` (a mano, datos al azar): 8 números al azar y m = 8; escribir en qué cajón cae cada uno y cuántos pasos cuesta buscar uno
   indicado. Pistas: "el cajón es el resto de dividir entre 8"; "si dos caen en el mismo cajón, se comparan en el orden en que entraron".
6. `cazar-orden` (cazar el error, 3 variantes, una línea mal en cada desarrollo):
   - A: "Duplicar n en la búsqueda binaria duplica los pasos" (mal: suma uno).
   - B: "Comparar todos los pares de 64 fichas son 64² = 4 096 comparaciones" (mal: son 64·63/2 = 2 016).
   - C: "La tabla hash da 1 paso, así que buscar 1 000 números en ella cuesta 1 paso" (mal: 1 000 búsquedas de 1 paso = 1 000 pasos).
7. `prop-orden` (propiedades, opción múltiple, `mezclar: true`, reintentable): "¿Por qué Python busca en un `dict` en tiempo constante?"
   Correcta: "Porque la función hash dice en qué cajón está la clave; no recorre las demás". Pistas por error: "porque los diccionarios
   están ordenados" -> "el orden de inserción no acelera la búsqueda"; "porque usa búsqueda binaria" -> "eso sería log n y exigiría orden";
   "porque guarda pocas claves" -> "con un millón de claves sigue siendo constante en promedio".
8. Trampas reales `codigo1`, `codigo2`, `codigo3`.

RETOS = ["ojo-orden", "ojo-codigo", "construir-cruce", "a-mano-binaria", "a-mano-hash", "cazar-orden", "prop-orden", "codigo1", "codigo2", "codigo3"]

## Memoria

`B.ordenar`: armar la búsqueda binaria pieza por pieza (en Python):
1. `izq = 0`
2. `der = len(lista) - 1`
3. `while izq <= der:`
4. `    medio = (izq + der) // 2`
5. `    if lista[medio] == buscado: return True`
6. `    elif lista[medio] < buscado: izq = medio + 1`
7. `    else: der = medio - 1`
8. `return False`
Distractores: `while izq < der - 1:`, `    medio = (izq + der) / 2` (da decimal), `    elif lista[medio] < buscado: izq = medio`.

Tarjetas (7):
- ¿Qué se cuenta para medir un algoritmo? -> Operaciones básicas (comparaciones), en el peor caso, como función de n.
- Duplicar n: lineal, binaria, hash, pares -> Doble; +1 paso; igual; casi cuatro veces.
- ¿Qué exige la búsqueda binaria? -> Datos ordenados. Sin orden responde mal y sin avisar.
- ¿Cuántos pares hay entre n elementos? -> n(n-1)/2.
- ¿Qué es el punto de cruce? -> El n a partir del cual el de menor orden gana aunque tenga peor constante.
- ¿Por qué no importa la base del logaritmo? -> Cambiar de base es multiplicar por una constante.
- ¿Cuánto cuesta armar una tabla hash de n elementos? -> Unos 2n pasos en total; cada inserción, constante en promedio.

## Citas (11)

| id de fuente | página PDF | impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| thinpython | 266 | 245 | Cap. 21: Analysis of Algorithms (apertura) | qué es analizar un algoritmo; el capítulo es un extracto de *Think Complexity* | antes del paso 2 |
| thinpython | 267 | 246 | Cap. 21: Order of Growth | por qué es difícil comparar algoritmos: hardware, datos, tamaño; dos algoritmos, uno proporcional a n y otro a n² | paso 2 (profundizar) y paso 6 |
| thinpython | 268 | 247 | Cap. 21: Order of Growth | término dominante, punto de cruce y la tabla de órdenes O(1) a exponencial | pasos 6 y 7 |
| thinpython | 269 | 248 | Cap. 21: Order of Growth | la base del logaritmo no importa; cuándo las constantes sí importan | paso 7 |
| thinpython | 270 | 249 | Cap. 21: Analysis of Basic Python Operations | costo de indexar, recorrer, sumar listas y métodos de cadena | paso 7 |
| thinpython | 271 | 250 | Cap. 21: Analysis of Search Algorithms | la búsqueda lineal y su peor caso; diccionarios constantes salvo excepciones | paso 2 |
| thinpython | 272 | 251 | Cap. 21: Analysis of Search Algorithms / Hashtables | búsqueda por bisección en O(log n): un millón de elementos en unos 20 pasos; el `in` de diccionarios | paso 3 |
| thinpython | 273 | 252 | Cap. 21: Hashtables | de `LinearMap` (lista de pares) a `BetterMap` con `hash(k) % n` | paso 4 |
| thinpython | 276 | 255 | Cap. 21: Hashtables | `HashMap` con `resize`: n inserciones cuestan 2n - 2; Figure 21-1 | profundizar del paso 7 |
| thinpython | 143 | 122 | Cap. 10: Exercises (10-10) | ejercicio de búsqueda por bisección con `bisect` | reto `a-mano-binaria` |
| pyworkout | 81 | 55 | Cap. 4: Hashing and dicts | la función hash manda cada clave a su sitio: búsqueda O(1) | paso 4 |
| pyworkout | 82 | 56 | Cap. 4: Sets | un set busca en O(1) como un dict; cuándo conviene | paso 4 y `p.vr-nota` |

(12 filas.)

## Riesgos y notas para quien construye

- **Conteos idénticos en los dos lenguajes**: verificado (tabla de arriba). Si se cambian los datos, hay que volver a correr ambos.
- **Índices**: binaria visita las posiciones 3, 5, 6, 7 en Python y 4, 6, 7, 8 en R (misma ficha). El cajón de R es `x %% m + 1`. Mostrar
  cada índice en su lenguaje con `ctx.ix`.
- **La hash del ejemplo es de juguete**: `x % m` con m = n. Con las filas `5, 10, ..., 5n` y n potencia de 2, 5 es coprimo con n y no hay
  colisiones; con los 8 socios hay una (cajón 0). La página debe decir que la de Python es más sofisticada (y se redimensiona), pero
  la idea es la misma.
- **El peor caso de la binaria** se eligió con el buscado mayor que todos (`5n + 5`): da $\log_2 n + 1$. Con el buscado menor que todos
  da un paso menos (3 en n = 8). Si quien construye cambia el buscado del deslizador, debe recalcular.
- **Tiempos**: no poner tiempos como salida exacta; solo en el profundizar y declarados como medición local.
- **Material de la materia**: UD1 no trae complejidad ni O grande (solo la frase de p.10 de `prog1` sobre que lo vectorizado es más rápido
  que los bucles, que es otra idea). Decirlo en la página: "esto no viene en el material de la unidad". No citar `prog1` aquí salvo esa
  nota, si se quiere enlazar con "Bucle frente a vectorización".
- **Paso 1 sin símbolos**: no mostrar n ni O(...) hasta el paso 2 (n) y el paso 7 (O).
- `pares` no busca duplicados de verdad (no compara valores): solo cuenta cuántas comparaciones haría. Decirlo en el texto del paso 5
  ("cuántos pares tendrías que revisar").
