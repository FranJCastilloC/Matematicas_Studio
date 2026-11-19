# Especificación: Comprensiones y programación funcional (comprensiones)

- Ruta: `python-base` (grupo Programación con datos), orden 11, tanda 8
- Prerrequisitos: "Listas, mutabilidad y alias", "Bucles y variables que cambian"
- Siguientes: "Iteradores y generadores"
- Aparece: SM142002, UD1 (la teoría de la unidad no enseña comprensiones; el material las manda a Think Python y Python Workout: decirlo en la página)
- Archivo: `biblioteca/conceptos/comprensiones.html`
- Fuentes que cita: `pyworkout`, `thinpython` (las dos ya están en `fuentes.js`)

## Imagen central

**Una cinta transportadora con tres estaciones.** A la izquierda entra la lista fuente como una fila de cajas numeradas
(`notas = [7, 3, 9, 4, 10, 6]`, datos inventados). Cada caja pasa por:

1. **El lector** (`for x in notas`): una flecha que toma una caja y le pone la etiqueta `x`. Color `--j`.
2. **La puerta** (`if x >= 5`): una compuerta que se abre (verde, `--ok`) o se cierra (la caja cae a un costado, gris). Color `--accent`.
3. **La máquina** (`x * 10`): transforma la caja que pasó y la deja en la lista de salida. Color `--k`.

A la derecha se va armando la lista de salida, caja por caja. Debajo de la cinta, la comprensión escrita en una línea, con
cada parte pintada del color de su estación: `[` **`x * 10`** `for x in notas` **`if x >= 5`** `]`. Al pasar el ratón por una
parte del código se ilumina su estación, y al revés.

Controles concretos:
- Casillas editables con los valores de la fuente (enteros de 0 a 10; se pueden agregar o quitar cajas, de 3 a 8).
- Deslizador del umbral de la puerta (0 a 10).
- Interruptor "puerta encendida / apagada" (sin `if`, todo pasa).
- Selector de la máquina: `x * 10`, `x + 1`, `x ** 2`, `str(x)`, `x * 10 if x >= 5 else 0` (este último activa el modo "máquina con dos salidas", sin puerta).
- Botones "un paso" (avanza una caja una estación), "todo" (anima la cinta completa) y "reiniciar".
- Un contador vivo: "cajas que entraron: 6 · pasaron la puerta: 4 · salieron: 4".

Modos por paso (capas que se encienden de a una):
1. Solo la cinta con la puerta, sin código ni nombres (cajas y una compuerta con un letrero en palabras: "solo pasan las de 5 o más").
2. Aparece el código del bucle con `append` al lado de la cinta; cada línea del bucle se ilumina cuando su estación trabaja.
3. El bucle se "pliega" en la comprensión de una línea, con los colores de cada parte.
4. Se enciende el selector de máquina y la variante `if ... else` (máquina de dos salidas); la puerta desaparece en ese modo.
5. La salida cambia de forma: lista `[...]`, diccionario `{clave: valor}`, conjunto `{...}` (selector de "molde de salida").
6. Doble cinta: una cinta exterior que trae sublistas y una interior que las abre (aplanar `[[1, 2], [3, 4, 5]]`).
7. Modo funcional: las estaciones se rotulan `filter(...)` y `map(...)`, y la salida se vuelve una caja cerrada `<map object>` hasta que se pide `list(...)`.

## Hipótesis inicial

"Tienes una lista de seis notas y quieres quedarte solo con las aprobadas, pasadas a escala de 100. ¿Cuántos pasos distintos
crees que hace un programa para eso? Escríbelo con tus palabras, como una receta." (Se le muestra de nuevo en el paso 3,
para que compare su receta con las tres estaciones.)

## Pasos

### Paso 1. La cinta y la puerta
- Idea: transformar una lista es mirar cada elemento, decidir si pasa y convertir los que pasan. Sin símbolos.
- Escenario: modo 1. Las seis cajas `7 3 9 4 10 6` esperan en la entrada; la puerta dice "solo pasan las de 5 o más"; la máquina dice "multiplica por 10". Nada se mueve hasta resolver el chequeo.
- Chequeo (predicción antes de tocar, numérico): "¿Cuántas cajas llegan a la salida?" Respuesta: **4**.
  - Si responde 6: "La puerta deja caer las que no cumplen. Mira el 3 y el 4."
  - Si responde 2: "El 5 o más incluye el 10 y el 6; cuenta de nuevo."
  - Al acertar se anima la cinta y aparece `70 90 100 60`. Segunda pregunta rápida: "¿En qué orden salen?" (opción múltiple: en el orden de entrada / ordenadas de menor a mayor / al revés). Correcta: en el orden de entrada; la cinta no reordena.

### Paso 2. El bucle que ya conoces
- Idea: la cinta es exactamente un bucle `for` con un `if` y un `append` sobre una lista que empieza vacía.
- Escenario: modo 2. Al lado, el bucle de cuatro líneas (`salida = []`, `for x in notas:`, `if x >= 5:`, `salida.append(x * 10)`). "Un paso" ilumina la línea que trabaja y la estación correspondiente.
- Chequeo (cálculo con datos en vivo, dos campos): "Con las notas que tienes ahora en la cinta, ¿cuántas veces se evalúa la condición y cuántas veces corre `append`?" Con los datos de inicio: **6 y 4**. Si Francisco editó las casillas, la respuesta se calcula con lo que hay.
  - Si iguala las dos cifras: "La condición se pregunta para todas; `append` solo corre cuando la respuesta es sí."
  - Si responde 5 (contando la línea `salida = []`): "Esa línea corre una sola vez, antes del bucle."
- Cita: Think Python, map, filter y reduce como patrones con bucle (PDF 133).

### Paso 3. Plegar el bucle en una línea
- Idea: la comprensión es el mismo bucle escrito al revés: primero lo que sale (la máquina), luego de dónde sale (el lector), al final quién pasa (la puerta).
- Escenario: modo 3. Animación de plegado: la línea `salida.append(x * 10)` sube al principio, `for x in notas` queda al medio y `if x >= 5` al final. Colores por parte. Aquí se muestra de nuevo la hipótesis de Francisco (`#citaHipo`).
- Chequeo (elección con explicación, `B.ordenar` corto o opción múltiple): "¿Cuál comprensión hace lo mismo que el bucle?"
  - Correcta: `[x * 10 for x in notas if x >= 5]`.
  - `[for x in notas if x >= 5: x * 10]`: "La expresión que sale va primero, sin dos puntos."
  - `[x * 10 if x >= 5 for x in notas]`: "Un `if` solo, sin `else`, va al final, después del `for`." (da `SyntaxError`)
  - `[x for x in notas if x * 10 >= 5]`: "Aquí la puerta mira el valor ya multiplicado y la máquina no transforma nada: salen las seis notas originales."
- Citas: Python Workout, "Writing comprehensions" (PDF 146) y el formato en varias líneas (PDF 147); Think Python, comprensiones (PDF 245-246).
- Nota para la página: los dos libros no opinan igual. Python Workout las recomienda como la forma natural de transformar; Think Python advierte que son más difíciles de depurar porque no se puede poner un `print` adentro, y que un principiante debería evitarlas. Decirlo: la cinta de esta página es justamente la forma de "ver adentro".

### Paso 4. Filtrar no es lo mismo que elegir entre dos valores (TRAMPA)
- Idea: el `if` del final es una puerta (la salida puede ser más corta); el `if ... else` del principio es parte de la máquina (la salida tiene siempre el mismo largo que la entrada).
- Escenario: modo 4. Selector de máquina con `x * 10 if x >= 5 else 0`; la puerta desaparece y la máquina tiene dos bocas. Contador de largos visible.
- Chequeo (predicción antes de tocar): "Con `[x * 10 if x >= 5 else 0 for x in notas]`, ¿cuántos elementos tiene la salida?" Respuesta: **6** (`[70, 0, 90, 0, 100, 60]`).
  - Si responde 4: "Ya no hay puerta: cada caja sale, solo que algunas salen como 0."
  - Al acertar, segunda parte: "¿Y si escribes `[x * 10 for x in notas if x >= 5 else 0]`?" Opciones: da `SyntaxError` (correcta) / da `[70, 90, 100, 60]` / da seis elementos. Pista para la incorrecta: "El `if` del final no acepta `else`: Python ni siquiera empieza a correrlo."
- Este es el paso de la **trampa**: el mismo `if` en dos lugares distintos hace dos cosas distintas.
- `details.profundizar`: "¿Por qué una sola línea con `else` y sin `else` es tan diferente?" La expresión `a if c else b` es una expresión condicional (Think Python la presenta en PDF 244-245) y vive dentro de la máquina; el `if` final es parte de la sintaxis de la comprensión.
- Cita: Python Workout, ejercicio 29 (filtrar con `if`, PDF 151).

### Paso 5. Otros moldes de salida
- Idea: la misma cinta puede llenar un diccionario (`{clave: valor for ...}`) o un conjunto (`{valor for ...}`), y el molde cambia lo que se guarda.
- Escenario: modo 5. Selector de molde. Ejemplos en vivo:
  - Diccionario: `{n: len(n) for n in ["Ana", "Luis", "Eva"]}` da `{'Ana': 3, 'Luis': 4, 'Eva': 3}`.
  - Conjunto: `{x % 3 for x in [3, 4, 5, 6, 7]}` da `{0, 1, 2}`: las cajas repetidas se funden en una.
- Chequeo (cálculo con datos en vivo): "Con la fuente actual, ¿cuántos elementos tiene `{x % 3 for x in fuente}`?" Para `[3, 4, 5, 6, 7]`: **3**. Pistas: "un conjunto no guarda repetidos" y luego "calcula el resto de cada uno y cuenta los distintos".
  - Si responde 5: "Cinco cajas entran, pero el conjunto funde los restos iguales."
- Citas: Python Workout, ejercicio 32 (comprensión de diccionario, PDF 157-158) y ejercicio 34 (comprensión de conjunto, PDF 161-162).

### Paso 6. Dos cintas: comprensiones anidadas (DESTACADO con predicción)
- Idea: con dos `for`, el primero es el de afuera y el segundo el de adentro, en el mismo orden en que escribirías los bucles anidados.
- Escenario: modo 6. Cinta exterior con `filas = [[1, 2], [3, 4, 5]]`; cada sublista se abre en la cinta interior. Al lado, los bucles anidados y la comprensión `[v for fila in filas for v in fila]` con flechas que conectan cada `for` con su bucle.
- **Destacado** (la confusión natural del concepto): "Al leer `[v for fila in filas for v in fila]` mucha gente lee los `for` de derecha a izquierda, como si fuera una frase. Antes de ver la animación, predice: ¿qué pasa con `[v for v in fila for fila in filas]`?"
  - Opciones: da `[1, 2, 3, 4, 5]` / da `NameError` porque `fila` todavía no existe cuando se usa (correcta, en una sesión limpia) / da `[[1, 2], [3, 4, 5]]`.
  - Explicación tras resolver: el orden de los `for` es el de los bucles, de afuera hacia adentro; leerlos al revés usa `fila` antes de crearla.
- Chequeo del paso (predicción): "¿Cuántos elementos tiene la salida aplanada?" **5**. Distractor 2: "Eso es el número de sublistas; la comprensión anidada saca un elemento por cada elemento interior."
- Cita: Python Workout, ejercicio 30, aplanar una lista (PDF 153-154) y el ejemplo de pares en PDF 147.
- `details.profundizar`: "¿La variable `x` sobrevive a la comprensión?" En Python 3 no: tras `x = 99; [x for x in range(3)]`, `x` sigue valiendo `99` (verificado). Un bucle `for` normal sí la deja cambiada.

### Paso 7. La versión funcional: map, filter y lambda
- Idea: la misma cinta se arma con funciones que reciben funciones: `filter` es la puerta y `map` la máquina. En Python 3 devuelven una caja cerrada (perezosa) que solo se llena al pedir `list(...)`.
- Escenario: modo 7. Las estaciones se rotulan `filter(lambda x: x >= 5, notas)` y `map(lambda x: x * 10, ...)`. La salida aparece como `<map object>` (caja cerrada); un botón "list(...)" la abre. Un segundo clic en "list(...)" sobre la misma caja la muestra vacía.
- Chequeo (elección con explicación): "Guardas `m = map(str, [1, 2, 3])` y luego haces `list(m)` dos veces. ¿Qué da la segunda?" Respuesta: **`[]`**.
  - `['1', '2', '3']`: "`map` no guarda la lista: entrega cada valor una vez y queda vacío."
  - Un error: "No falla; simplemente ya no le quedan valores."
- Puente: esto es un iterador agotado, el tema de "Iteradores y generadores". Mencionar la expresión generadora `sum(x * x for x in range(4))`, que da `14` sin construir la lista.
- Citas: Python Workout, `map` y `filter` (PDF 149-150); Python Workout, expresión generadora frente a lista (PDF 148); Think Python, expresiones generadoras (PDF 246-247) y `any`/`all` (PDF 247).
- `details.profundizar`: "¿Y reduce?" Think Python presenta `sum` como un reduce (PDF 133); `functools.reduce` existe pero no hace falta para esta página.
- Erratas a decir con naturalidad: Think Python, en la PDF 247 (impresa 226), escribe que el generador agotado sigue lanzando `StopException`; el nombre real es `StopIteration` (verificado leyendo la página).

## Vida real (Python y R)

Mismos datos del recorrido: `notas = [7, 3, 9, 4, 10, 6]`. R no tiene comprensiones: lo más cercano es la indexación con una
máscara lógica (`notas[notas >= 5] * 10`) o las funciones `Filter` y `sapply` de R base. La página lo dice así: "En R no hay
una sintaxis de comprensión; el idioma natural es filtrar con una máscara y operar el vector entero".

Código Python (corrido con Python 3.13.5; idéntico al de la página):

```
datos:     notas = [7, 3, 9, 4, 10, 6]            # datos inventados
vacia:     salida = []
fori:      for x in notas:
cond:          if x >= 5:
agrega:            salida.append(x * 10)
imp1:      print(salida)
comp:      comp = [x * 10 for x in notas if x >= 5]
imp2:      print(comp)
igual:     print(comp == salida)
funcional: print(list(map(lambda x: x * 10, filter(lambda x: x >= 5, notas))))
```

Código R (corrido con R 4.6.1; las llaves de cierre van con id `null`):

```
datos:     notas <- c(7, 3, 9, 4, 10, 6)          # datos inventados
vacia:     salida <- c()
fori:      for (x in notas) {
cond:        if (x >= 5) {
agrega:        salida <- c(salida, x * 10)
null:        }
null:      }
imp1:      print(salida)
comp:      comp <- notas[notas >= 5] * 10
imp2:      print(comp)
igual:     print(identical(comp, salida))
funcional: print(sapply(Filter(function(x) x >= 5, notas), function(x) x * 10))
```

Salida real de Python:
```
[70, 90, 100, 60]
[70, 90, 100, 60]
True
[70, 90, 100, 60]
```
Salida real de R:
```
[1]  70  90 100  60
[1]  70  90 100  60
[1] TRUE
[1]  70  90 100  60
```

Foto de estado por línea ejecutada (23 eventos; `i` se muestra como 0..5 en Python y 1..6 en R con `ctx.ix`):

| # | id | x | condición | salida |
|---|---|---|---|---|
| 1 | datos | | | |
| 2 | vacia | | | `[]` |
| 3-4 | fori, cond | 7 (i 0) | True | `[]` |
| 5 | agrega | 7 | | `[70]` |
| 6-7 | fori, cond | 3 (i 1) | False | `[70]` |
| 8-10 | fori, cond, agrega | 9 (i 2) | True | `[70, 90]` |
| 11-12 | fori, cond | 4 (i 3) | False | `[70, 90]` |
| 13-15 | fori, cond, agrega | 10 (i 4) | True | `[70, 90, 100]` |
| 16-18 | fori, cond, agrega | 6 (i 5) | True | `[70, 90, 100, 60]` |
| 19-23 | imp1, comp, imp2, igual, funcional | | | igual; la salida impresa crece línea a línea |

(Conteo: 2 + 6 `fori` + 6 `cond` + 4 `agrega` + 5 finales = 23 eventos; el constructor los genera con un bucle, no a mano.)

Visual de la vida real: la misma cinta del recorrido en pequeño (cajas fuente, puerta, máquina, salida) sincronizada con la línea.
En `comp` y `funcional` la cinta corre entera de una vez con un rótulo "lo mismo en una línea".

Predicción antes de reproducir (`#vrPred`): "¿Cuántas veces corre la línea `agrega`?" Respuesta: **4**. Distractor 6: "La condición
corre 6 veces; `append` solo cuando la condición da verdadero." Segunda opción de la misma predicción (opcional): "¿Y `cond`?" 6.

`p.vr-nota`: "En una línea: `[x * 10 for x in notas if x >= 5]` en Python, `notas[notas >= 5] * 10` en R."
`details.profundizar` de la vida real: "¿Por qué en R `salida <- c(salida, x * 10)` es lento con muchos datos?" Cada `c()`
copia el vector entero; con miles de elementos conviene reservar el vector o usar la máscara. En Python `append` agrega al final
sin copiar (costo amortizado constante, ver "Orden de crecimiento").

Trampas reales (retos `codigo1`..`codigo3`, verificados):

- `codigo1` (Python, `map` se agota):
  ```
  m = map(str, [1, 2, 3])
  print(list(m))
  print(list(m))
  ```
  Salida: `['1', '2', '3']` y luego `[]`. Pregunta: "¿qué imprime la segunda línea?" Opciones: `[]` (correcta) / `['1', '2', '3']` / un error.
- `codigo2` (Python, `else` en el lugar equivocado):
  ```
  notas = [7, 3, 9, 4, 10, 6]
  print([x * 10 for x in notas if x >= 5 else 0])
  ```
  Salida real: `SyntaxError: invalid syntax` (Python 3.13 marca el `else`). La forma correcta,
  `[x * 10 if x >= 5 else 0 for x in notas]`, da `[70, 0, 90, 0, 100, 60]`.
- `codigo3` (R, `sapply` sobre algo vacío no devuelve un vector):
  ```
  print(sapply(c(), function(x) x * 10))
  print(vapply(numeric(0), function(x) x * 10, numeric(1)))
  ```
  Salida: `list()` y `numeric(0)`. Si el filtro no deja pasar a nadie, `sapply` devuelve una lista vacía y el código que espera un
  número falla más adelante; `vapply` obliga a declarar el tipo de salida. Opciones: `list()` (correcta) / `numeric(0)` / `NULL`.

## Retos (10)

1. `ojo-largo` (ojo clínico, 5 rondas al azar, aprueba con 4 de 5): se muestra una lista aleatoria (5 a 8 enteros de 0 a 10) y una
   comprensión elegida al azar entre cuatro formas: solo transformación (`[x + 1 for x in L]`), con filtro (`[x for x in L if x > k]`),
   con `if ... else` (`[0 if x > k else x for x in L]`), conjunto (`{x % 2 for x in L}`). Pregunta: "¿La salida es del mismo largo,
   más corta o puede ser más corta que la entrada?" Respuesta según la forma (transformación y `if-else`: mismo largo; filtro y
   conjunto: puede ser más corta). Explicación por ronda con el resultado real calculado.
2. `construir-cinta` (construir): Francisco manipula la cinta (casillas fuente fijas `[2, 5, 8, 1, 6]`, umbral, máquina, puerta) hasta
   lograr tres objetivos, cada uno marcado al cumplirse: (a) salida `[25, 64, 36]`; (b) salida de largo 5 con exactamente dos ceros;
   (c) salida `['5', '8', '6']`. Soluciones: (a) puerta `x >= 5` y máquina `x ** 2`; (b) máquina `x * 10 if x >= 5 else 0` con
   umbral 5, que da `[0, 50, 80, 0, 60]`; (c) puerta `x >= 5` y máquina `str(x)`. La comprobación se hace por programa con la
   misma función que dibuja la cinta (comparar listas), no con texto.
3. `mano-comp` (a mano, reintentable, datos al azar): lista de 6 enteros de 1 a 9, umbral `k` al azar de 3 a 7 y transformación al azar
   entre `x * 2`, `x + 1`, `x - 3`. Francisco escribe la lista de salida separada por comas. Pistas escalonadas: (1) "primero tacha los
   que no cumplen la condición"; (2) se muestran tachados en la cinta; (3) se muestra el primer elemento de la salida.
4. `mano-dict` (a mano, reintentable): tres nombres al azar de una lista fija (Ana, Luis, Eva, Sofía, Tomás, Inés, Bruno). Francisco
   escribe el resultado de `{n: len(n) for n in nombres}` como pares `nombre:largo`. Pistas: (1) "la clave es el nombre, el valor
   su número de letras"; (2) "Sofía tiene 5 letras: la tilde no suma". Validar con `len` de JavaScript sobre la cadena NFC.
5. `cazar-comp` (cazar el error, 3 variantes; cada una es un desarrollo de 4 a 5 líneas con una sola línea mal):
   - Variante A: queremos `[70, 0, 90, 0, 100, 60]` y la línea mala es `[x * 10 for x in notas if x >= 5 else 0]`.
   - Variante B: aplanar `[[1, 2], [3, 4, 5]]` con la línea mala `[v for v in fila for fila in filas]` (`NameError`).
   - Variante C: se guarda `pares = map(lambda x: x * 2, notas)`, se imprime `list(pares)` y la línea mala es `total = sum(pares)`
     esperando 78: da 0 porque `pares` ya se agotó.
6. `prop-comp` (propiedades, opción múltiple, `mezclar: true`, reintentable): "¿Cuál afirmación es verdadera?"
   - Correcta: "Una comprensión con `if` al final puede devolver menos elementos que la fuente, nunca más (con un solo `for`)."
   - "Una comprensión modifica la lista original": pista "crea una lista nueva; `notas` queda igual. Compruébalo con `notas` después."
   - "`[x for x in L]` y `L` son el mismo objeto": pista "son iguales (`==`) pero no idénticos (`is`): es una copia superficial."
   - "Con dos `for`, el primero es el de adentro": pista "es el de afuera, como en los bucles anidados."
7. `funcional-eq` (propiedades, opción múltiple con pista por respuesta): "¿Cuál da lo mismo que `[x * 10 for x in notas if x >= 5]`?"
   - Correcta: `list(map(lambda x: x * 10, filter(lambda x: x >= 5, notas)))`.
   - `list(filter(lambda x: x >= 5, map(lambda x: x * 10, notas)))`: pista "aquí primero multiplicas y después filtras: pasan las seis (`>= 5` siempre)."
   - `map(lambda x: x * 10, filter(lambda x: x >= 5, notas))`: pista "sin `list(...)` obtienes una caja `<map object>`, no la lista."
   - `[x * 10 for x in filter(notas)]`: pista "`filter` necesita una función y un iterable."
8. `codigo1`, 9. `codigo2`, 10. `codigo3`: las trampas reales de la vida real (descritas arriba).

Lecturas asociadas a los retos (citar como lectura, no copiar): Python Workout ej. 28 (unir números, PDF 145), 29 (PDF 151),
30 (PDF 153), 32 (PDF 157), 34 (PDF 161).

## Memoria

`B.ordenar` (armar la comprensión del recorrido pieza por pieza):
- Piezas en orden: `[` · `x * 10` · `for x in notas` · `if x >= 5` · `]`
- Distractores: `else 0` · `salida.append(x)` · `for notas in x`

Tarjetas (`B.tarjetas`, 7):
1. ¿En qué orden se escriben las tres partes de una comprensión? · Expresión que sale, luego `for`, luego `if` (opcional).
2. ¿Qué diferencia hay entre `if` al final y `if ... else` al principio? · El primero filtra (puede acortar); el segundo elige el valor y conserva el largo.
3. ¿Cómo se escribe una comprensión de diccionario? · `{clave: valor for x in fuente}`.
4. ¿Qué hace un conjunto por comprensión con los repetidos? · Los funde: cada valor aparece una vez.
5. Con dos `for`, ¿cuál es el de afuera? · El primero, igual que en los bucles anidados.
6. ¿Qué devuelve `map` en Python 3? · Un iterador perezoso; se vacía al recorrerlo una vez.
7. ¿Cuál es el equivalente en R de `[x * 10 for x in v if x >= 5]`? · `v[v >= 5] * 10` (máscara lógica), o `Filter` y `sapply`.

## Citas (14)

| id de fuente | pág. PDF | pág. impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| thinpython | 133 | 112 | Cap. 10: Map, Filter and Reduce | `capitalize_all` (map), `only_upper` (filter) y `sum` (reduce) escritos con bucle y acumulador | Paso 2 |
| thinpython | 245 | 224 | Cap. 19: List Comprehensions | `capitalize_all` reescrito como comprensión; la expresión, el `for` y el resultado | Paso 3 |
| thinpython | 246 | 225 | Cap. 19: List Comprehensions | `only_upper` como comprensión con `if`; su advertencia de que son difíciles de depurar | Paso 3, después del chequeo |
| thinpython | 244 | 223 | Cap. 19: Conditional Expressions | la expresión `a if c else b` (lo que va en la máquina de dos salidas) | Profundizar del paso 4 |
| thinpython | 246 | 225 | Cap. 19: Generator Expressions | `(x**2 for x in range(5))`, `next(g)` y por qué no calcula todo de una vez | Paso 7 |
| thinpython | 247 | 226 | Cap. 19: any and all | `sum`, `any` y `all` con una expresión generadora; contiene la errata `StopException` | Paso 7 |
| pyworkout | 142 | 116 | Cap. 7, apertura | qué es la programación funcional y por qué Python la ofrece con comprensiones | Antes del paso 1 o en la cabecera |
| pyworkout | 145 | 119 | Ej. 28: Join numbers | transformar una colección en otra: ejemplos de cuándo conviene una comprensión | Paso 3 |
| pyworkout | 146 | 120 | Cap. 7: Writing comprehensions | cómo escribir la comprensión partiendo del bucle y en varias líneas | Paso 3 |
| pyworkout | 147 | 121 | Ej. 28: Join numbers | comprensión anidada en varias líneas, con dos `for` y dos condiciones | Paso 6 |
| pyworkout | 148 | 122 | Ej. 28: Join numbers | lista por comprensión frente a expresión generadora: memoria | Paso 7 |
| pyworkout | 149 | 123 | Ej. 28, recuadro map y filter | `map` transforma sin filtrar; la función se aplica a cada elemento | Paso 7 |
| pyworkout | 153 | 127 | Ej. 30: Flatten a list | aplanar una lista de listas; solución con dos `for` en PDF 154 | Paso 6 |
| pyworkout | 157 | 131 | Ej. 32: Flip a dict | comprensión de diccionario para invertir claves y valores | Paso 5 |

(Si se quiere bajar a 12, quitar la de PDF 142 y la de PDF 244.) Las páginas salen de `brain/fuentes/think-python.md` y
`brain/fuentes/python-workout.md`; además leí con `pdftotext` las PDF 145-150, 153-154 y 157 de Python Workout y 245-247 de
Think Python para confirmar el contenido.

## Riesgos y notas para quien construye

- **Orden de los conjuntos.** No usar conjuntos de cadenas como ejemplo con salida fija: `{c for c in "banana"}` imprime en un
  orden que cambia entre ejecuciones (hash aleatorio de cadenas). Por eso el paso 5 usa enteros (`{0, 1, 2}`, orden estable).
- **Python frente a R.** R no tiene comprensiones; no presentar `sapply` como "la comprensión de R". El idioma de R es la máscara
  lógica sobre el vector. `Filter`, `Map` y `Reduce` existen en R base y son la versión funcional.
- **Mensajes de error.** El texto exacto del `SyntaxError` depende de la versión de Python (3.13.5 aquí: `invalid syntax` con el
  marcador bajo `else`). Mostrar solo "SyntaxError: invalid syntax" sin la ruta del archivo.
- **`<map object at 0x...>`.** La dirección cambia en cada ejecución; en la página mostrar `<map object>` y decir que la dirección varía.
- **Reto `construir-cinta`.** Los objetivos tienen que verificarse por programa con la misma función que dibuja la cinta; los tres
  propuestos están comprobados a mano con la fuente `[2, 5, 8, 1, 6]`: (a) `[25, 64, 36]`, (b) `[0, 50, 80, 0, 60]`, (c) `['5', '8', '6']`.
- **Material del máster.** SM142002 no enseña comprensiones (el mapa `sm142002-programacion.md` lo confirma: "No aparece"). El único
  `lambda` del material está en el cuaderno `UAX_20251028`, celdas 40-45 (`.apply(lambda x: int(x.split('/')[1]))`). Ese cuaderno
  (`prog1nb`) no está registrado en `fuentes.js`; si la sesión principal lo registra, sería una buena cita extra para el paso 7
  ("dónde lo viste en clase"). Si no, decir en la página que el tema no viene en el material de la unidad.
- **Dos libros que no coinciden.** Think Python desaconseja las comprensiones a principiantes (PDF 246); Python Workout las pone en el
  centro. Presentarlo como un desacuerdo honesto, no como un error.
