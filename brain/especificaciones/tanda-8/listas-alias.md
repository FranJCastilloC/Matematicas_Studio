# Especificacion: Listas, mutabilidad y alias (listas-alias)

- Ruta: `python-base`, orden 9, tanda 8. Area: Programacion con datos.
- Prerrequisitos: "Índices, rebanadas y máscaras".
- Siguientes: "Diccionarios, conjuntos y hash", "Comprensiones y programación funcional", "Clases y objetos".
- Aparece: `[{ materia: "SM142002", ud: "UD1" }]`.
- Resumen: "Dos nombres pueden apuntar a la misma lista, y cambiar una cambia la otra."
- Fuente del catalogo: "Think Python cap. 10, Python Workout cap. 3".

## Imagen central

Un **diagrama de nombres y objetos** (el diagrama de estado de Think Python, hecho manipulable). A la izquierda, etiquetas de
nombre (`a`, `b`, `copia`, y en el paso 6 un marco de funcion con `t`); a la derecha, **cajas de lista** con sus casillas
(datos inventados `a = [3, 1, 2]`). Cada nombre tiene una flecha hacia una caja. Cada caja lleva un numero de objeto (#1, #2...)
que asigna la pagina (no es `id()`; se dice). El contador "cajas en memoria" esta arriba.

Debajo del diagrama, una **consola de operaciones**: botones que ejecutan una linea y la escriben en un historial:
- `b = a` (flecha nueva a la misma caja), `b = a[:]` / `b = a.copy()` / `b = list(a)` (caja nueva con los mismos valores).
- `b[0] = 99` (la casilla 0 de la caja a la que apunta `b` cambia, con un destello; todas las flechas que llegan a esa caja
  destellan tambien).
- `b.append(4)`, `b += [4]` (modifican la caja), `b = b + [4]` (caja nueva; la flecha de `b` se mueve).
- `a == b` y `a is b`: dos lamparas que se encienden (mismo contenido / misma caja).
- Boton "deshacer" y "reiniciar".

La idea se ve sola: **un cambio en la caja lo ven todas las flechas que llegan a ella**. En modo R (paso 7), la misma consola
con sintaxis R: `b <- a` dibuja una flecha compartida, pero al ejecutar `b[1] <- 99` la caja se duplica en ese momento y la
flecha de `b` se mueve a la copia (copiar al modificar).

## Hipotesis inicial

"Escribes `a = [3, 1, 2]`, despues `b = a`, y despues cambias el primer elemento de `b` por 99. ¿Que crees que tiene `a`
ahora? ¿Y si hicieras lo mismo en R? Escribe tu idea."

## Pasos

### Paso 1. Enlace compartido o fotocopia (prediccion sin simbolos)
- Idea: hay dos formas de "darle" una lista a alguien: pasarle el enlace a la misma hoja o darle una fotocopia.
- Escenario: dos dibujos simples, sin codigo: (izquierda) dos personas con un enlace a una misma hoja en la nube; (derecha)
  una hoja y su fotocopia. La hoja tiene `3 1 2`.
- Chequeo (prediccion): "Ana escribe 99 en el primer renglon de su hoja. ¿Quien ve el 99?"
  - Correcta: "En el caso del enlace, las dos personas; en el de la fotocopia, solo Ana."
  - "En los dos casos, las dos personas": falla porque la fotocopia es otra hoja.
  - "En ningun caso la otra persona": falla porque con el enlace es la misma hoja.
- Al resolver: "En Python, `b = a` es pasar el enlace. Hacer una fotocopia hay que pedirlo."

### Paso 2. Las listas cambian en su lugar
- Idea: a diferencia de las cadenas, una lista si se modifica por dentro: `a[1] = 7` cambia la caja, no crea otra.
- Escenario: un solo nombre `a` y su caja. Boton `a[1] = 7`: destella la casilla 1 y el contador de cajas sigue en 1. Al lado,
  en gris, el recuerdo de la pagina de cadenas: `s[1] = "x"` da TypeError.
- Chequeo (calculo): "Con `a = [3, 1, 2]`, despues de `a[1] = 7` y `a.append(5)`, ¿que tiene `a` y cuantas cajas hay?"
  Respuesta: `[3, 7, 2, 5]` y 1 caja. Distractores: "2 cajas" (pista: ni asignar a una posicion ni `append` crean otra caja);
  `[7, 1, 2, 5]` (pista: la posicion 1 es la segunda).
- Citas: thinpython PDF 129 (Lists Are Mutable, Figure 10-1); pyworkout PDF 55 (p.29: listas mutables, tuplas inmutables).

### Paso 3. Alias: dos nombres, una caja
- Idea: `b = a` no copia nada: crea otro nombre con flecha a la misma caja. Cualquier cambio por `b` se ve por `a`.
- Escenario: consola con `b = a` y `b[0] = 99`. Al ejecutar `b[0] = 99` destellan las dos flechas. Las lamparas `==` e `is`.
  Los valores de `a` no se muestran hasta resolver el chequeo (la caja se tapa con un velo).
- Chequeo (prediccion antes de tocar): "Despues de `b = a` y `b[0] = 99`, ¿que imprime `print(a)`?"
  - Correcta: `[99, 1, 2]`.
  - `[3, 1, 2]`: "eso pasaria si `b = a` hubiera hecho una copia; solo creo otra flecha".
  - Error: "las dos lineas son validas".
- Al resolver: se muestra `#citaHipo` para comparar con la hipotesis.
- Citas: thinpython PDF 136 (Aliasing, Figure 10-4: dos nombres hacia una lista; `b[0] = 42` cambia `a`); thinpython PDF 137
  (la definicion de referencia y la recomendacion de evitar alias con objetos mutables).

### Paso 4. Copiar: igual contenido, otra caja
- Idea: `a[:]`, `a.copy()` y `list(a)` hacen una caja nueva. `==` compara el contenido; `is` pregunta si es la misma caja.
- Escenario: consola con las tres formas de copiar; al hacer `copia = a[:]` aparece la caja #2. Lamparas `==` (encendida) e
  `is` (apagada). Luego `copia[1] = 50` cambia solo la caja #2.
- Chequeo (eleccion con explicacion): "Con `copia = a[:]`, ¿que valen `copia == a` y `copia is a`?"
  - Correcta: `True` y `False`.
  - `True` y `True`: "`is` es verdadero solo si las dos flechas llegan a la misma caja".
  - `False` y `False`: "el contenido es el mismo, asi que `==` da True".
- Citas: thinpython PDF 135 (Objects and Values, `is` frente a `==`, Figures 10-2 y 10-3); thinpython PDF 131 (List Slices:
  `t[:]` hace una copia).

### Paso 5. Modificar o crear: `append`, `+` y `+=` (TRAMPA y DESTACADO)
- Idea: `b.append(4)` y `b += [4]` modifican la caja (los alias lo ven); `b = b + [4]` crea una caja nueva y mueve solo la
  flecha de `b`. Los metodos que modifican devuelven `None`.
- Escenario: `b = a` ya hecho; tres botones con las tres lineas y "reiniciar" entre cada una. El contador de cajas sube solo
  con `b = b + [4]`.
- `.destacado` con prediccion (la confusion natural: "`x += y` es lo mismo que `x = x + y`"): "Con `a = [3, 1, 2]` y `b = a`,
  ¿que tiene `a` despues de `b += [4]`? ¿Y despues de `b = b + [4]` (empezando de nuevo)?"
  - Correcta: `[3, 1, 2, 4]` con `+=` y `[3, 1, 2]` con `b = b + [4]`.
  - "Lo mismo en los dos": "en las listas, `+=` modifica la caja (como `extend`); `+` arma una lista nueva".
  - "`[3, 1, 2]` en los dos": "`+=` no crea caja nueva: la lista de `a` crece".
- Chequeo del paso: el destacado. Trampa asociada (va a la vida real como `codigo1`): `t = t.sort()` deja `t` en `None`.
- Citas: thinpython PDF 138 (`append` modifica y devuelve `None`; `t1 + [4]` crea una lista nueva); thinpython PDF 132
  (List Methods: `t = t.sort()` es un error tipico).
- Salidas reales verificadas: `a=[3,1,2]; b=a; b += [4]` deja `a` en `[3, 1, 2, 4]`; `b = b + [4]` deja `a` en `[3, 1, 2]` y
  `b` en `[3, 1, 2, 4]`; `b.append(4)` deja `a` en `[3, 1, 2, 4]`.

### Paso 6. Listas que entran a una funcion
- Idea: el parametro de una funcion es otro alias de la lista del que llama. Si la funcion modifica la caja, el que llama lo
  ve; si reasigna el parametro, no.
- Escenario: aparece un marco de funcion (rectangulo) con el nombre `t`, flecha a la misma caja que `a`. Dos funciones:
  `quita(t): t.pop(0)` y `mala(t): t = t[1:]`. Al ejecutar `mala`, aparece una caja nueva dentro del marco que desaparece al
  salir.
- Chequeo (prediccion): "Con `a = [3, 1, 2]`, ¿que tiene `a` despues de `quita(a)`? ¿Y despues de `mala(a)` (empezando de
  nuevo)?" Respuesta: `[1, 2]` y `[3, 1, 2]` (salidas reales).
  - "`[1, 2]` en los dos": "`t = t[1:]` mueve solo la flecha de `t`, que muere al salir de la funcion".
  - "`[3, 1, 2]` en los dos": "`pop` cambia la caja que comparten `t` y `a`".
- Citas: thinpython PDF 137 (List Arguments, `delete_head`, Figure 10-5 en la PDF 138); thinpython PDF 138
  (`bad_delete_head` con `t = t[1:]` no cambia al que llama).

### Paso 7. R copia cuando modificas
- Idea: en R, `b <- a` tambien comparte al principio, pero en cuanto modificas `b` R hace la copia (copiar al modificar). Por
  eso en R los alias nunca sorprenden; el costo es que modificar dentro de una funcion no cambia nada afuera.
- Escenario: consola en modo R. `b <- a` dibuja una flecha compartida; `b[1] <- 99` duplica la caja en ese instante y mueve la
  flecha de `b`. Un panel compara las dos columnas: mismo codigo, resultado distinto (salidas reales de la vida real).
- Chequeo (prediccion): "En R: `a <- c(3, 1, 2)`; `b <- a`; `b[1] <- 99`; `print(a)`. ¿Que sale?"
  Respuesta: `[1] 3 1 2`.
  - `[1] 99  1  2`: "eso es lo que pasa en Python; R copia la caja en el momento de modificar".
  - Error: "en R se puede asignar a una posicion".
- Nota en el paso: el material de la unidad de R no habla de alias ni de copias; muestra como `v[4] <- 9` cambia un elemento y
  como `v[5] <- 7` alarga el vector (archivo de ejercicios de la sesion 1, no registrado como fuente), siempre sobre el mismo
  nombre.
- Cita: prog4 PDF 15 (listas en R y el acceso con corchetes; sirve para ubicar que una `list` de R se modifica con la misma
  sintaxis); prog4html ancla `listas`.

### Paso 8. Listas dentro de listas: la copia superficial (el mas tecnico)
- Idea: `m[:]` copia la caja de afuera pero no las de adentro: las filas siguen compartidas. `copy.deepcopy` copia todo. La
  trampa clasica: `[[0] * 3] * 3` hace tres flechas a la misma fila.
- Escenario: caja externa con dos flechas a cajas internas `[1, 2]` y `[3, 4]`. Botones: `c = m[:]`, `c = copy.deepcopy(m)`,
  `c[0][0] = 9`. Con `m[:]` el destello llega a `m`; con `deepcopy` no. Un segundo boton construye `[[0] * 3] * 3` y muestra
  las tres flechas a una sola fila.
- Chequeo (prediccion): "Con `m = [[1, 2], [3, 4]]`, `c = m[:]` y `c[0][0] = 9`, ¿que imprime `print(m)`?" Respuesta:
  `[[9, 2], [3, 4]]` (real). Distractor `[[1, 2], [3, 4]]`: "la caja externa es nueva, pero sus flechas apuntan a las mismas
  filas". Despues de resolver, mostrar que con `deepcopy` sale `[[1, 2], [3, 4]]` (real).
- Profundizar ("¿Por que Python no copia siempre, como R?"): copiar cuesta memoria y tiempo; Python prefiere compartir y te deja
  copiar cuando lo pides. En R, una `list` con vectores tambien se copia al modificar: `m <- list(c(1,2), c(3,4)); c2 <- m;
  c2[[1]][1] <- 9` deja `m[[1]]` en `1 2` (verificado). Enlace a "Clases y objetos": los objetos tambien se comparten.
- Citas: thinpython PDF 203 (Copying: `copy.copy`, copia superficial) y PDF 204 (Figure 15-3 y `copy.deepcopy`).

## Vida real (Python y R)

Mismos datos `a = [3, 1, 2]`. Algoritmo: hacer un alias, modificar por el alias, construir una copia a mano con un bucle,
modificar la copia y comparar contenidos e identidades; cerrar con el metodo de libreria (`a.copy()`).

Ids compartidos: `crea`, `alias`, `cambia`, `vacia`, `recorre`, `agrega`, `compara`, `cambia2`, `muestra`, `identidad`,
`libreria`.

Python (Python 3.13.5):
```python
a = [3, 1, 2]
b = a
b[0] = 99
copia = []
for v in a:
    copia.append(v)
print(copia == a, copia is a)
copia[1] = 50
print(a, b, copia)
print(a is b)
print(a.copy() == a, a.copy() is a)
```
Salida real:
```
True False
[99, 1, 2] [99, 1, 2] [99, 50, 2]
True
True False
```

R (R 4.6.1):
```r
a <- c(3, 1, 2)
b <- a
b[1] <- 99
copia <- c()
for (v in a) {
  copia <- c(copia, v)
}
print(identical(copia, a))
copia[2] <- 50
print(a); print(b); print(copia)
print(identical(a, b))
print(identical(a, c(3, 1, 2)))
```
Salida real:
```
[1] TRUE
[1] 3 1 2
[1] 99  1  2
[1]  3 50  2
[1] FALSE
[1] TRUE
```
Mapa de ids en R: `crea`, `alias`, `cambia`, `vacia`, `recorre` (for), `agrega` (copia <- c(copia, v)), `compara`
(identical(copia, a): R no tiene `is`), `cambia2`, `muestra` (los tres print en una linea), `identidad` (identical(a, b)),
`libreria` (en R no hay metodo de copia porque toda modificacion copia: la ultima linea comprueba que `a` sigue intacta). La
pagina debe explicar que la linea `libreria` hace cosas distintas en cada lenguaje.

Foto de estado por linea ejecutada (Python | R):

| evento | linea | a | b | copia | cajas (py / R) |
|---|---|---|---|---|---|
| 1 | crea | [3, 1, 2] | - | - | 1 / 1 |
| 2 | alias | [3, 1, 2] | misma caja que a | - | 1 / 1 (compartida) |
| 3 | cambia | py [99, 1, 2] / R 3 1 2 | [99, 1, 2] / 99 1 2 | - | 1 / 2 (R copio al modificar) |
| 4 | vacia | igual | igual | [] / NULL | 2 / 3 |
| 5-10 | recorre, agrega x3 | igual | igual | crece: py 99; 99,1; 99,1,2 / R 3; 3,1; 3,1,2 | 2 / 3 |
| 11 | compara | | | | sale `True False` / `TRUE` |
| 12 | cambia2 | igual | igual | py [99, 50, 2] / R 3 50 2 | 2 / 3 |
| 13 | muestra | | | | imprime |
| 14 | identidad | | | | `True` / `FALSE` |
| 15 | libreria | | | | `True False` / `TRUE` |

(En R el bucle con `c(copia, v)` crea un vector nuevo en cada vuelta; el contador "cajas" de R puede mostrar "vector nuevo por
vuelta" en vez de un numero fijo. Decidir una sola convencion y decirla: se sugiere contar solo los vectores vivos con nombre.)

Visual: el diagrama de nombres y cajas de la imagen central, con dos columnas (Python a la izquierda, R a la derecha) que
avanzan juntas; en cada evento destella la caja tocada. Indices con `ctx.ix` (`b[0]` en Python, `b[1]` en R; `copia[1]` y
`copia[2]`).

Prediccion antes de reproducir (`#vrPred`): "¿Que valor tendra `a[0]` (Python) y `a[1]` (R) al final?" Respuesta: Python 99,
R 3. Distractores: "99 en los dos" (pista: R copia al modificar); "3 en los dos" (pista: `b = a` en Python no copia).

`p.vr-nota`: en Python, `b = a.copy()` (o `a[:]`, `list(a)`) en vez de `b = a` cuando quieres trabajar sin tocar el original;
`copy.deepcopy` si hay listas dentro. En R no hace falta.
`details.profundizar`: `tracemem(a)` en R imprime cuando R copia un objeto (la direccion cambia entre corridas, por eso no se
muestra la salida); en Python `id(a) == id(b)` es lo mismo que `a is b`.

Trampas reales:
- `codigo1` (Python): el metodo que devuelve `None`.
  ```python
  t = [3, 1, 2]
  t = t.sort()
  print(t)
  ```
  Salida real: `None`. Pregunta: "¿Que linea deja `t` ordenada?" Correcta: `t.sort()` sola, o `t = sorted(t)`. Distractores:
  `t = t.sort` (guarda el metodo, no lo ejecuta), `sorted(t)` sola (devuelve una lista nueva que nadie guarda).
- `codigo2` (Python): la tabla que repite la misma fila.
  ```python
  m = [[0] * 3] * 3
  m[0][0] = 1
  print(m)
  ```
  Salida real: `[[1, 0, 0], [1, 0, 0], [1, 0, 0]]`. Pregunta: "¿Por que cambiaron las tres filas?" Correcta: "`* 3` repitio
  tres flechas a una sola fila". Arreglo: `m = [[0] * 3 for _ in range(3)]` (anticipa "Comprensiones y programación funcional").
- `codigo3` (Python): la lista por defecto que se comparte entre llamadas.
  ```python
  def agrega(x, t=[]):
      t.append(x)
      return t

  print(agrega(1))
  print(agrega(2))
  ```
  Salida real:
  ```
  [1]
  [1, 2]
  ```
  Pregunta: "¿Por que la segunda llamada trae el 1?" Correcta: "la lista por defecto se crea una sola vez, al definir la funcion,
  y todas las llamadas comparten esa caja". Arreglo: `t=None` y dentro `if t is None: t = []`.

## Retos (12 ids: 9 de esta seccion mas codigo1 a codigo3)

1. `ojo` (ojo clinico, 5 rondas al azar, 4 de 5): una secuencia al azar de 2 lineas sobre `a = [3, 1, 2]` elegidas de
   `b = a`, `b = a[:]`, `b = list(a)`, `b.append(4)`, `b += [4]`, `b = b + [4]`, `b[0] = 99`. "¿Cambio `a`?" (si / no).
   Calculado ejecutando el modelo de cajas en JS.
2. `construir1` (construir): con la consola, llegar a un estado objetivo dibujado: (a) `a` y `b` en la misma caja con
   `[3, 1, 2, 4]`; (b) dos cajas distintas con el mismo contenido; (c) `a` intacta y `b` = `[99, 1, 2]`. Valida por el
   estado del diagrama, no por las lineas usadas.
3. `construir2` (construir, R frente a Python): reproducir en modo Python un estado que en R sale solo (`a` intacta tras
   modificar `b`). Hay que usar una copia antes de modificar.
4. `amano` (a mano, datos al azar): lista al azar de 3 enteros y un programa de 4 lineas generado al azar con alias, copias y
   modificaciones; escribir el `print(a)` final. Pistas: (1) dibuja una flecha por nombre, (2) marca que lineas crean caja
   nueva (`[:]`, `+`, `list(...)`, `copy()`), (3) muestra el diagrama hasta la linea 2.
5. `cuentacajas` (a mano): mismo generador; "¿cuantas cajas hay al final?"
6. `cazar` (cazar el error, 3 variantes, una linea mal): funcion que devuelve la lista ordenada sin tocar la original.
   Correcta: `def ordenada(t): copia = t[:]; copia.sort(); return copia`.
   - Variante A: `copia = t` (alias: ordena la original).
   - Variante B: `copia = t[:].sort()` (guarda `None`).
   - Variante C: `return copia.sort()` (devuelve `None`).
   Salidas reales con `t = [3, 1, 2]` (resultado, y como queda `t`): correcta `[1, 2, 3]`, `t` = `[3, 1, 2]`;
   A `[1, 2, 3]`, `t` = `[1, 2, 3]` (la original quedo ordenada); B `None`, `t` intacta; C `None`, `t` intacta.
7. `funcion` (prediccion): una de cuatro funciones al azar (`t.append(0)`, `t = t + [0]`, `t[0] = 0`, `t = [0]`) aplicada a
   `a = [3, 1, 2]`; "¿que tiene `a` despues?". Respuestas: `[3, 1, 2, 0]`, `[3, 1, 2]`, `[0, 1, 2]`, `[3, 1, 2]`.
8. `prop` (propiedades, `mezclar: true`, reintentable): "¿Cual es verdadera?"
   - Correcta: "`a == b` puede ser True con `a is b` False."
   - "`b = a` hace una copia" (pista: paso 3).
   - "`b += [4]` nunca cambia `a`" (pista: destacado del paso 5).
   - "`a[:]` copia tambien las listas que estan dentro" (pista: paso 8).
9. `rcopia` (propiedades, R): "En R, despues de `b <- a; b[1] <- 99`, ¿cual es verdadera?" Correcta: "`a` no cambio porque R
   copio al modificar". Distractores con pista: "R no permite asignar a una posicion", "`a` cambio igual que en Python".
10. Mas `codigo1`, `codigo2`, `codigo3`.

Lecturas de inspiracion: Think Python ejercicio 17-2 (Kangaroo, la lista compartida por defecto: PDF 226-227, p.205-206) y
ejercicios del cap. 10 (PDF 141-144); Python Workout tabla 3.1 (PDF 56) y la advertencia sobre valores por defecto mutables
(PDF 127, p.101).

## Memoria

`B.ordenar`: armar la copia segura antes de ordenar: `copia` · `=` · `a[:]` · luego `copia.sort()` en otra pieza. Piezas en
orden: `copia = a[:]` · `copia.sort()` · `return copia`.
Distractores: `copia = a` (alias), `copia = a.sort()` (`None`), `return copia.sort()` (`None`).

Tarjetas (8):
1. ¿Que hace `b = a` con una lista? / Crea otro nombre para la misma lista: no copia.
2. ¿Como se copia una lista? / `a[:]`, `a.copy()` o `list(a)`.
3. ¿Diferencia entre `==` e `is`? / `==` compara contenido; `is` pregunta si es el mismo objeto.
4. ¿Que diferencia hay entre `b += [4]` y `b = b + [4]`? / `+=` modifica la lista (los alias lo ven); `+` crea una nueva.
5. ¿Que devuelve `t.sort()`? / `None`: ordena en su lugar. `sorted(t)` devuelve una lista nueva.
6. ¿Una funcion puede cambiar la lista que recibe? / Si, si la modifica (`append`, `pop`, asignar a una posicion); no, si solo
   reasigna el parametro.
7. ¿Por que `[[0] * 3] * 3` es una trampa? / Repite tres referencias a la misma fila.
8. ¿Que hace R con `b <- a; b[1] <- 99`? / Copia al modificar: `a` no cambia.

## Citas (12)

| fuente | pag PDF | pag impresa | seccion | que hay | cuando leerla |
|---|---|---|---|---|---|
| thinpython | 129 | 108 | Cap. 10: Lists Are Mutable | asignar a una posicion cambia la lista; Figure 10-1 | Paso 2 |
| thinpython | 131 | 110 | Cap. 10: List Slices | `t[:]` hace una copia de la lista | Paso 4 |
| thinpython | 132 | 111 | Cap. 10: List Methods | los metodos casi siempre devuelven `None`; `t = t.sort()` | Paso 5 y `codigo1` |
| thinpython | 135 | 114 | Cap. 10: Objects and Values | Figures 10-2 y 10-3: igual valor u objeto identico; `is` | Paso 4 |
| thinpython | 136 | 115 | Cap. 10: Aliasing | Figure 10-4: dos nombres hacia la misma lista; `b[0] = 42` cambia `a` | Paso 3 |
| thinpython | 137 | 116 | Cap. 10: List Arguments | `delete_head` cambia la lista del que llama | Paso 6 |
| thinpython | 138 | 117 | Cap. 10: List Arguments | Figure 10-5; `append` frente a `+`; `bad_delete_head` con `t = t[1:]` | Pasos 5 y 6 |
| thinpython | 140 | 119 | Cap. 10: Debugging | regla 3: hacer copias para evitar alias; `sorted` | Despues del paso 5 |
| thinpython | 203 | 182 | Cap. 15: Copying | `copy.copy` hace una copia superficial | Paso 8 |
| thinpython | 204 | 183 | Cap. 15: Copying | Figure 15-3 y `copy.deepcopy` | Paso 8, profundizar |
| pyworkout | 55 | 29 | Cap. 3 apertura | listas mutables frente a tuplas inmutables y para que sirve cada una | Paso 2 |
| pyworkout | 127 | 101 | Cap. 6, advertencia de valores por defecto | nunca usar una lista o dict como valor por defecto: se comparte entre llamadas | Vida real, `codigo3` |
| prog4 | 15 | 15 | Listas | `list()` de R y el acceso con `[` y `[[` | Paso 7 |

(13 filas; si hace falta recortar, quitar prog4 15, que es tangencial.)

Verificacion: todas las paginas de thinpython de esta tabla se releyeron con `pdftotext` (129, 131, 132, 135-140, 203, 204);
pyworkout 55 y 127 tambien. prog4 15 leida.

## Riesgos y notas para quien construye

- El material del master no trata alias ni copias de Python (prog1 no tiene codigo de listas). Decirlo con naturalidad: "esto no
  viene en el material de la unidad; lo explican Think Python (cap. 10) y Python Workout".
- No usar `id()` con numeros visibles: cambian en cada corrida. El numero de objeto es de la pagina.
- `is` con enteros pequenos y cadenas cortas da `True` por internamiento: no usar esos ejemplos para explicar `is`; usar listas.
- R: `identical()` compara contenido (no hay `is`). Copiar al modificar aplica a vectores y `list`; los `environment` de R si se
  comparten (no entrar en eso; a lo sumo una linea en profundizar).
- La fila del evento 5-10 de la foto difiere entre lenguajes en el contenido de `copia` (99 en Python, 3 en R) porque en Python
  `a` ya tenia el 99: es justamente la leccion, resaltarlo.
- La consola del escenario debe ejecutar un modelo de cajas propio en JS, no `eval`. Las salidas que se muestran como "reales"
  deben ser las verificadas aqui.
- `b += [4]` con tuplas o cadenas crea objeto nuevo (no hay modificacion); no mezclarlo aqui, dejarlo para una tarjeta extra si se quiere.
