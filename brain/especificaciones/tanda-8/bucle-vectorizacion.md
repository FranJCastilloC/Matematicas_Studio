# Especificación: Bucle frente a vectorización (bucle-vectorizacion)

- Ruta: `numpy`, orden 3; también `r-base`, orden 4. Tanda 8.
- Área: Programación con datos. Fuente del catálogo: "Programación y entorno de trabajo (SM142002), UD1, UD4 y UD5".
- Prerrequisitos: "Índices, rebanadas y máscaras", "Bucles y variables que cambian".
- Siguientes: "Reciclaje y broadcasting", "if, for y while en R".
- Aparece: SM142002 UD1, SM142002 UD2.
- Resumen del catálogo: "Hacer una cuenta elemento por elemento o toda de una vez, y cuánto cambia el tiempo."

Datos de toda la página (inventados, se dice en la página): los minutos que tardaron 8 entregas,
`x = [2, 4, 4, 4, 5, 5, 7, 9]`. Suma 40, media 5, suma de cuadrados de las desviaciones 32,
desviación con n − 1: √(32/7) = 2.1381; con n: √(32/8) = 2 exacto. Todo sale limpio y la trampa de `ddof` queda a la vista.

## Imagen central

Dos carriles horizontales, uno encima del otro, con la misma tira de 8 casillas (los minutos de `x`).

- **Carril de arriba, "bucle"**: un cursor (color `--accent`) que visita las casillas de una en una. A la derecha de la tira, una caja "acumulador" (`suma = ...`) que cambia en cada visita. Debajo, un contador grande "órdenes que lee el intérprete" que sube en cada vuelta (3 por vuelta: tomar el valor, sumar, guardar; es un modelo didáctico, se dice en la página).
- **Carril de abajo, "vectorizado"**: la misma tira con una sola "barra de operación" que cae sobre las 8 casillas a la vez (todas cambian en el mismo cuadro de animación). Su contador marca "1 orden que lee el intérprete" y, en gris, "8 operaciones hechas en código compilado".
- Controles fijos: botón **Paso** (avanza una vuelta del bucle), **Correr** (anima el bucle completo), **Aplicar de una vez** (carril de abajo), selector de operación (`× 2`, `− media`, `> 4`, `al cuadrado`), y desde el paso 4 un **deslizador de tamaño n** (8, 100, 1 000, 100 000, 1 000 000) que cambia los contadores (la tira se dibuja comprimida como una barra con "…" cuando n > 8).
- Desde el paso 4 aparece, debajo de los contadores, una tira de **tiempos medidos de verdad** en esta máquina (ver "Riesgos"), con la etiqueta "ilustración: depende de la computadora".
- Desde el paso 7 aparece un **panel de fórmula viva**: media, desviaciones y las dos desviaciones típicas (÷ n y ÷ (n − 1)) con los números de `x`; casillas editables para cambiar los 8 valores (enteros de 0 a 20).

Modos por paso (capas que se encienden de a una):
1. Solo las dos tiras, sin contadores ni código (dos "trabajadores": uno que va casilla por casilla, otro con un sello que marca todas).
2. Carril de arriba activo: cursor, acumulador y contador.
3. Carril de abajo activo; aparece el código de una línea al lado de cada carril (`for v in x:` / `x * 2`).
4. Deslizador de n y contadores en escala; tira de tiempos.
5. Selector de operación con `> 4`: la tira de abajo se pinta de verdadero/falso (`--pos`/`--neg`) y una caja `sum(x > 4)`.
6. Un tercer carril, "bucle disfrazado" (`.apply`, `sapply`, comprensión de lista), que se anima igual que el de arriba aunque se escriba en una línea.
7. Panel de fórmula viva y dos resultados lado a lado: `np.std(x)` y `pd.Series(x).std()` / `sd(x)`.

## Hipótesis inicial

"Tienes que duplicar 8 precios. Una persona lo hace precio por precio; otra tiene un sello que los duplica todos de un golpe. ¿Llegan al mismo resultado? ¿Cuál crees que trabaja menos, y por qué? Escribe qué crees que cambiaría si en lugar de 8 fueran un millón de precios."

Se vuelve a mostrar en el paso 4 (`#citaHipo`), cuando aparece el deslizador de n.

## Pasos (7)

### Paso 1. Dos maneras de hacer lo mismo
- Idea: la misma cuenta se puede hacer casilla por casilla o toda de una vez, y el resultado es el mismo.
- Escenario: modo 1. Antes del chequeo no se anima nada.
- Chequeo (predicción antes de tocar, sin símbolos): "Duplicas los 8 tiempos. ¿Qué pasa con los resultados de los dos trabajadores?"
  - Correcta: "Salen los mismos 8 números; cambia solo cuántas órdenes se dieron." Tras responder se animan los dos carriles y se ve que coinciden (4, 8, 8, 8, 10, 10, 14, 18).
  - "El sello da números aproximados": falla porque duplicar es exacto en los dos caminos; la vectorización no redondea.
  - "El que va de uno en uno es más exacto porque mira cada número": falla, el sello también aplica la cuenta a cada número; mirar uno por uno no agrega precisión.
  - "El sello solo duplica el primero": falla, la operación cae sobre toda la tira (en el escenario se ve).

### Paso 2. El bucle con acumulador
- Idea: un bucle es una variable que cambia en cada vuelta; para sumar se usa un acumulador que empieza en 0.
- Escenario: modo 2. Código visible: `suma = 0`, `for v in x: suma = suma + v` (Python) y el `for (v in x) { }` de R al lado. Botón Paso avanza una vuelta.
- Cita aquí Think Python (recorrer una lista y `sum` como "reduce" con acumulador) y Python Workout (Ej. 2: reimplementar `sum`).
- Chequeo (cálculo con datos en vivo): "Después de la 5.ª vuelta, ¿cuánto vale `suma`?" Respuesta 19 (2 + 4 + 4 + 4 + 5). Se pide antes de pulsar Paso por quinta vez; el acumulador queda oculto (muestra "?") desde la vuelta 4 hasta resolver.
  - Si responde 24: sumó también la 6.ª casilla (cuenta vueltas desde 0). Pista: "la vuelta 1 es la casilla 2".
  - Si responde 14: se quedó en la 4.ª.
  - Si responde 5: confundió el acumulador con el valor de la casilla.

### Paso 3. La operación vectorizada
- Idea: una operación vectorizada se aplica a todos los elementos de un vector sin escribir el bucle: `x * 2`, `x - 5`, `x ** 2` (Python con NumPy) o `x * 2`, `x - 5`, `x^2` (R).
- Notación entra aquí. Escenario: modo 3, con el selector de operación (`× 2`, `− media`, `al cuadrado`).
- Cita la definición de la UD4 ("una operación está vectorizada si se puede aplicar a todos los elementos de un vector", con `vector_numerico + 2`), el HTML de clase (suma de vectores elemento a elemento) e ISLR2 (`sqrt()` y `x^2` actúan sobre cada elemento).
- Chequeo (elección con explicación): "¿Qué devuelve `x - 5` con nuestros 8 tiempos?"
  - Correcta: "Ocho números: −3, −1, −1, −1, 0, 0, 2, 4". El 5 se resta de cada casilla.
  - "Un solo número: 40 − 5 = 35": confunde operar el vector con operar su suma.
  - "Error, porque x tiene 8 valores y 5 es uno solo": en R y NumPy un número suelto se aplica a todas las casillas (adelanto de la página siguiente, "Reciclaje y broadcasting").
  - "Ocho números, pero solo si antes escribes un bucle": la operación vectorizada es justamente no escribirlo.
- `details.profundizar`: "¿Y en una lista de Python?" `[2, 4] * 2` repite la lista (`[2, 4, 2, 4]`), no duplica. La vectorización es de los arrays de NumPy y de los vectores de R, no del lenguaje Python (se retoma como reto `codigo3`).

### Paso 4. Cuánto cuesta cada camino
- Idea: el bucle de Python o de R hace que el intérprete lea las órdenes de nuevo en cada vuelta; la versión vectorizada le pasa todo el vector a código compilado, que hace el mismo recorrido mucho más rápido.
- Escenario: modo 4. Deslizador de n. Contador del bucle: 3·n órdenes interpretadas; contador vectorizado: 1 orden interpretada + n operaciones compiladas. Tira de tiempos medidos (tabla en "Riesgos").
- Muestra de nuevo la hipótesis (`#citaHipo`).
- Cita prog1 p.10 (NumPy: "operaciones vectorizadas, significativamente más rápidas que los bucles") y Think Python cap. 21 (orden de crecimiento; un bucle es lineal).
- Chequeo (predicción antes de tocar): "Pasas de n = 100 000 a n = 1 000 000. ¿Qué le pasa al contador del bucle?"
  - Correcta: "Se multiplica por 10": el trabajo crece en proporción a n (lineal).
  - "Se multiplica por 100": eso sería cuadrático (un bucle dentro de otro).
  - "Sube solo un poco, porque la computadora se acostumbra": no hay tal efecto en el modelo; cada vuelta cuesta lo mismo.
  - "Se queda igual": eso le pasa a la orden interpretada del carril vectorizado, no al bucle.

**Destacado con predicción (confusión natural del concepto): "¿La vectorización elimina el bucle?"**
- Predicción: "Para sumar 1 000 000 de números con `np.sum` o `sum`, ¿alguien recorre el millón de números?" Opciones: "Sí, pero en código compilado" (correcta) / "No, suma todo en un solo paso de la máquina" / "No, usa una fórmula que no mira los datos".
- Explicación: el bucle sigue existiendo, escrito en C dentro de NumPy o de R; lo que desaparece es leer la orden de nuevo en cada vuelta y revisar el tipo de cada valor. Por eso el tiempo sigue creciendo con n (el carril de abajo también crece, en gris), solo que con una pendiente mucho menor. La vectorización no cambia el orden de crecimiento: cambia la constante.
- `details.profundizar`: "¿Por qué el bucle de R se ve menos lento que el de Python?" Los bucles de R se compilan a código de bytes desde R 3.4, y en esta máquina el bucle de R fue unas 10 veces más lento que `sum(x * 2)`, frente a unas 30 a 60 veces en Python (tabla de tiempos). Las razones exactas dependen de la versión y de la máquina.

### Paso 5. Funciones que ya son vectoriales
- Idea: `sum`, `mean`, `sqrt`, las comparaciones y las máscaras son vectoriales: `x > 4` da un vector de verdadero/falso y `sum(x > 4)` cuenta cuántos cumplen (verdadero vale 1).
- Escenario: modo 5. Deslizador de umbral u (de 0 a 10) para `x > u`; la tira se pinta.
- Cita la UD4 (`vector_5[vector_5 < 5]`, p.11) y el HTML (`funciones-de-operaciones-básicas`: "algunas funciones se aplican a todo el vector").
- Menciona en el texto (sin chip, porque el cuaderno no está registrado como fuente; ver Riesgos) que en el cuaderno de clase UAX_20251105, celda 78, se usa `dias[dias > np.mean(dias)]`.
- Chequeo (cálculo con datos en vivo, umbral fijado en 4 antes de mostrar la pintura): "¿Cuánto da `sum(x > 4)`?" Respuesta 4 (5, 5, 7, 9).
  - 5: contó el 4 (eso sería `x >= 4`, que da 7, o confundió).
  - 7: usó `>=`.
  - 1: creyó que `x > 4` da un solo verdadero/falso para todo el vector.

### Paso 6. Bucles disfrazados (trampa / contraejemplo)
- Idea: escribir algo en una línea no lo hace vectorizado. `s.apply(lambda v: v * 2)` en pandas, `sapply(x, function(v) v * 2)` en R y la comprensión `[v * 2 for v in x]` siguen llamando a una función del intérprete por cada elemento.
- Escenario: modo 6, tercer carril que se anima casilla por casilla aunque el código sea de una línea; su contador sube igual que el del bucle.
- Cita Python Workout "Writing comprehensions" (la comprensión nace de un `for`) y ISLR2 5.3.2 (el primer `for` de los laboratorios, LOOCV: un bucle es lo correcto cuando cada vuelta hace algo grande, como ajustar un modelo).
- Menciona en el texto (sin chip) que el cuaderno UAX_20251028, celdas 40 a 45, parte fechas con `.apply(lambda x: int(x.split('/')[1]))`: funciona, pero es un bucle; la versión vectorizada es `pd.to_datetime` con `.dt.day` (celdas 49 a 52).
- Chequeo (elección con explicación): "¿Cuál de estas es vectorizada de verdad?"
  - Correcta: `np.array(x) * 2` (y en R, `x * 2`).
  - `pd.Series(x).apply(lambda v: v * 2)`: llama a la lambda 8 veces; da el mismo resultado `[4, 8, 8, 8, 10, 10, 14, 18]` pero es un bucle.
  - `[v * 2 for v in x]`: comprensión de lista, bucle de Python escrito corto.
  - `sapply(x, function(v) v * 2)`: un bucle de R con otro nombre.
- `details.profundizar`: "Cuando sí necesitas un bucle": si cada vuelta depende del resultado de la anterior (un saldo que crece con intereses que dependen del saldo previo), no hay una operación de un golpe salvo que exista una función acumulativa (`cumsum`, `cumprod`). Y si cada vuelta ya es costosa (ajustar un modelo), el costo del bucle en sí no importa.

### Paso 7. La desviación estándar, a mano y de un golpe
- Idea: el algoritmo de la desviación estándar son dos bucles (uno para la media, otro para los cuadrados de las desviaciones) que la versión vectorizada escribe en una línea; y dos librerías dan dos números distintos con los mismos datos.
- Escenario: modo 7, fórmula viva: media = 40/8 = 5; Σ(x − 5)² = 32; s con n − 1 = √(32/7) = 2.1381; con n = √(32/8) = 2. Casillas editables.
- Fórmula viva (KaTeX): `s = \sqrt{\frac{1}{n-1}\sum (x_i - \bar x)^2}` con los números del escenario.
- Cita el HTML (`funciones-de-operaciones-básicas`: `sd` de `c(2.1, 3.3, 7.5, 4)` = 2.320022) e ISLR2 (`sd(y)` es `sqrt(var(y))`).
- Chequeo (cálculo con datos en vivo): "Con los datos del escenario, `np.std(x)` devuelve 2.0 y `sd(x)` devuelve 2.1381. ¿Qué número divide a 32 en cada caso?"
  - Correcta: "np.std divide entre 8 (n); sd divide entre 7 (n − 1)."
  - "Los dos dividen entre 8 y uno redondea mal": 32/8 = 4, √4 = 2 exacto; 2.1381² = 4.571 = 32/7.
  - "np.std divide entre 7": al revés.
  - "Uno de los dos tiene un error": los dos están bien; responden a preguntas distintas (`ddof`).
- Texto: el cuaderno UAX_20251105 (celdas 80 y 81) muestra 8.8337 con `np.std` y 8.8382 con `.std()` de pandas para los mismos 1 000 días, sin comentarlo: es esta diferencia (8.8337 × √(1000/999) = 8.8382). Se dice como dato del material, sin chip si `prog1nb` no está registrado.
- `details.profundizar`: "¿Por qué n − 1?" en dos líneas y enlace a la página de varianza o de covarianza ya existente (usar el título exacto del catálogo que corresponda; en covarianza ya existe el "¿Por qué n − 1?").

## Vida real (Python y R)

Mismos datos que el recorrido. Python 3.13.5 con NumPy 2.1.3 y pandas 2.2.3; R 4.6.1 (máquina Apple M4).
El texto sin el prefijo `id: ` es exactamente lo que se ejecutó (las líneas `-:` no tienen id: llaves de cierre y líneas vacías).

### Python

```
import: import numpy as np
datos: x = [2, 4, 4, 4, 5, 5, 7, 9]          # minutos de 8 entregas (inventados)
n: n = len(x)
suma0: suma = 0
for1: for v in x:                           # una vuelta por valor
acum1:     suma = suma + v
media: media = suma / n
cuad0: cuad = 0
for2: for v in x:                           # otra vuelta por valor
acum2:     cuad = cuad + (v - media) ** 2
s: s = (cuad / (n - 1)) ** 0.5
imp1: print(media, round(s, 4))
arr: a = np.array(x)                       # lo mismo, sin bucle visible
imp2: print(a.mean(), round(np.sqrt(((a - a.mean()) ** 2).sum() / (n - 1)), 4))
imp3: print(round(np.std(a, ddof=1), 4))
```

Salida real:
```
5.0 2.1381
5.0 2.1381
2.1381
```

### R

```
datos: x <- c(2, 4, 4, 4, 5, 5, 7, 9)        # minutos de 8 entregas (inventados)
n: n <- length(x)
suma0: suma <- 0
for1: for (v in x) {                        # una vuelta por valor
acum1:   suma <- suma + v
-: }
media: media <- suma / n
cuad0: cuad <- 0
for2: for (v in x) {                        # otra vuelta por valor
acum2:   cuad <- cuad + (v - media)^2
-: }
s: s <- sqrt(cuad / (n - 1))
imp1: print(c(media, round(s, 4)))
imp2: print(c(mean(x), round(sqrt(sum((x - mean(x))^2) / (n - 1)), 4)))
imp3: print(round(sd(x), 4))
```

Salida real:
```
[1] 5.0000 2.1381
[1] 5.0000 2.1381
[1] 2.1381
```

`import` y `arr` solo existen en Python. Eventos: Python 43 (import, datos, n, suma0, 8 × (for1, acum1), media, cuad0, 8 × (for2, acum2), s, imp1, arr, imp2, imp3); R 41.

### Foto de estado por línea ejecutada

| Evento | v | suma | media | cuad | s | Visual |
|---|---|---|---|---|---|---|
| datos, n | | | | | | tira con 8 casillas; n = 8 |
| suma0 | | 0 | | | | acumulador en 0 |
| for1/acum1 vuelta 1 a 8 | 2, 4, 4, 4, 5, 5, 7, 9 | 2, 6, 10, 14, 19, 24, 31, 40 | | | | cursor en la casilla (índice 0 a 7 en Python, 1 a 8 en R, con `ctx.ix`) |
| media | | 40 | 5.0 | | | línea horizontal en 5 sobre la tira |
| cuad0 | | | 5.0 | 0 | | |
| for2/acum2 vuelta 1 a 8 | 2, 4, 4, 4, 5, 5, 7, 9 | | 5.0 | 9, 10, 11, 12, 12, 12, 16, 32 | | cuadrado de lado (v − 5) dibujado sobre cada casilla |
| s | | | | 32 | 2.1381 | |
| imp1 | | | | | | salida línea 1 |
| arr (solo py) | | | | | | la tira se convierte en array (borde distinto) |
| imp2 | | | | | | las 8 desviaciones y sus cuadrados aparecen todos a la vez (carril vectorizado) |
| imp3 | | | | | | salida con la librería; coincide |

Narrar: en `acum1`, "Vuelta k: suma pasa de A a B"; en `imp2`, "La misma cuenta sin bucle visible: `a - a.mean()` resta 5 a las 8 casillas a la vez"; en `imp3`, "La librería da lo mismo porque se le pidió `ddof=1`" (en R: "`sd` ya divide entre n − 1").

Contador visual para el carril: "vueltas interpretadas: 16" al final del bucle frente a "1 línea" en `imp2`.

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántas veces se ejecuta la línea `suma = suma + v` (o `suma <- suma + v`)?" Respuesta: **8**, una por valor. Distractores: 1 (confunde con la versión vectorizada), 9 (cuenta una vuelta extra por el final del `for`), 16 (suma los dos bucles). Pista tras fallar: "una vuelta por cada casilla de x".

### Trampas reales (retos `codigo1` a `codigo3`)

**codigo1: `np.std` frente a `.std()` de pandas (ddof).**
```
import numpy as np
import pandas as pd
x = [2, 4, 4, 4, 5, 5, 7, 9]
print(np.std(x))
print(pd.Series(x).std())
print(np.std(x, ddof=1))
```
Salida real:
```
2.0
2.138089935299395
2.138089935299395
```
Pregunta: "¿Por qué dos librerías del mismo lenguaje dan dos números?" Correcta: NumPy divide entre n por omisión (`ddof=0`) y pandas entre n − 1 (`ddof=1`), como `sd` de R. Distractores: "pandas redondea distinto", "NumPy convierte a entero", "es un error de pandas".

**codigo2: `1:length(x)` con un vector vacío en R.**
```
vacio <- c()
for (i in 1:length(vacio)) {
  print(i)
}
for (i in seq_along(vacio)) {
  print(i)
}
print("fin")
```
Salida real:
```
[1] 1
[1] 0
[1] "fin"
```
Pregunta: "¿Cuántas veces imprime el primer bucle?" Correcta: 2 (`1:0` es `c(1, 0)`, cuenta hacia atrás). `seq_along` no entra. En Python, `for i in range(len([])):` no entra nunca (verificado: solo imprime "fin").

**codigo3: una lista de Python no es un vector.**
```
import numpy as np
x = [2, 4, 4, 4, 5, 5, 7, 9]
print(x * 2)
print(np.array(x) * 2)
```
Salida real:
```
[2, 4, 4, 4, 5, 5, 7, 9, 2, 4, 4, 4, 5, 5, 7, 9]
[ 4  8  8  8 10 10 14 18]
```
Pregunta: "¿Qué hace `x * 2` si x es una lista?" Correcta: repite la lista (16 elementos). Distractores: "duplica cada valor", "da error", "duplica solo el primero".

`p.vr-nota` (la versión de una línea): `np.std(x, ddof=1)` en Python y `sd(x)` en R. `details.profundizar` en la vida real: la versión vectorizada completa `np.sqrt(((a - a.mean()) ** 2).sum() / (n - 1))` / `sqrt(sum((x - mean(x))^2) / (n - 1))` leída de adentro hacia afuera.

## Retos (10)

RETOS = ["ojo", "construir", "mano", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3"]

1. **ojo** (ojo clínico, 6 rondas al azar). Se muestra una línea de código (Python o R al azar) y Francisco decide sin ejecutar: "vectorizada" o "bucle (visible o disfrazado)". Banco: `a * 2`, `np.sqrt(a)`, `a[a > 4]`, `sum(x > 4)`, `x^2`, `mean(x)` (vectorizadas); `[v * 2 for v in x]`, `s.apply(lambda v: v + 1)`, `sapply(x, sqrt)`, `for (v in x) s <- s + v`, `list(map(abs, x))`, `x * 2` con x lista de Python (repite: ni bucle ni vectorizada; se marca como "trampa" y cuenta como correcto si elige "ninguna de las dos", tercera opción). Ok si acierta 5 de 6.
2. **construir** (manipular hasta cumplir objetivos). Con el deslizador de umbral u y el selector de comparación (`>`, `>=`, `<`, `==`), lograr tres metas sobre `x`: (a) `sum(...) == 2` (p. ej. `x > 5`: 7 y 9); (b) `sum(...) == 3` con `==` (`x == 4`); (c) que la máscara deje exactamente los valores por debajo de la media (`x < 5`: 2, 4, 4, 4 → 4). Ok al cumplir las tres.
3. **mano** (a mano, datos al azar, pistas escalonadas). Generador: 5 enteros de 1 a 9 cuya media sea entera (sortear 4 y ajustar el 5.º; repetir si sale fuera de 1..9). Pide: (1) el valor del acumulador tras cada vuelta (5 casillas); (2) el vector `x - media`; (3) la suma de cuadrados. Pistas: 1) "el acumulador empieza en 0 y suma la casilla de esa vuelta"; 2) "la media es la suma final entre 5"; 3) se muestra la primera desviación resuelta.
4. **error** (cazar el error, 3 variantes, una línea mal; elegir la línea):
   - V1 (Python): `suma = 0` escrito **dentro** del `for` (el acumulador se reinicia; la suma final es 9, el último valor).
   - V2 (Python): `for i in range(1, n): suma = suma + x[i]` (se salta `x[0]`; da 38 en vez de 40).
   - V3 (R): `media <- suma / (n - 1)` (la media no lleva n − 1; da 5.714 en vez de 5).
   Cada variante muestra el código completo de 6 a 8 líneas y la salida equivocada; Francisco toca la línea culpable. Explicación tras acertar.
5. **prop1** (propiedades, opción múltiple): "¿Por qué `np.sum(a)` es más rápido que un `for` de Python sobre los mismos datos?" Correcta: "el recorrido ocurre en código compilado, sin leer la orden ni revisar el tipo de cada valor en cada vuelta". Pistas por respuesta equivocada: "usa varios procesadores siempre" → "a veces, pero `np.sum` sobre un vector es un solo hilo; la ganancia está en otro lado"; "no mira todos los valores" → "sí los mira: recuerda el destacado"; "redondea para ir más rápido" → "el resultado coincide exactamente con el bucle".
6. **prop2**: "Si n se multiplica por 1 000, ¿qué le pasa al tiempo de `sum(x * 2)`?" Correcta: "crece unas 1 000 veces (lineal), aunque cada paso sea barato". Pistas: "se queda igual" → "el código compilado también recorre los n valores"; "crece 1 000 000 de veces" → "eso sería un bucle dentro de otro"; "baja" → "más datos nunca cuestan menos".
7. **prop3**: "¿Cuál es vectorizada en pandas?" `df["horas"] * 7` (correcta) frente a `df["horas"].apply(lambda h: h * 7)`, `[h * 7 for h in df["horas"]]`, `df["horas"].map(lambda h: h * 7)`. Pista por cada equivocada: "llama a una función del intérprete por fila".
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.

## Memoria

**B.ordenar** (armar el algoritmo de la media con bucle, en Python), piezas en orden:
1. `suma = 0`
2. `for v in x:`
3. `    suma = suma + v`
4. `media = suma / len(x)`

Distractores: `suma = 1`, `    suma = v`, `media = suma / (len(x) - 1)`.

**Tarjetas (8):**
1. ¿Qué es una operación vectorizada? → Una operación que se aplica a todos los elementos de un vector o array sin escribir el bucle (`x * 2`).
2. ¿La vectorización elimina el recorrido? → No: el recorrido ocurre en código compilado; desaparece el costo de interpretar cada vuelta.
3. ¿Cómo crece el tiempo de un bucle simple con n? → En proporción a n (lineal). La versión vectorizada también, con una constante mucho menor.
4. `[v * 2 for v in x]`, ¿es vectorizada? → No, es un bucle de Python escrito en una línea; lo mismo `apply` y `sapply`.
5. ¿Qué devuelve `sum(x > 4)`? → Cuántos valores superan 4 (verdadero vale 1). Con los datos de la página: 4.
6. `np.std(x)` frente a `sd(x)` → NumPy divide entre n (`ddof=0`); R y pandas entre n − 1. Con x de la página: 2.0 frente a 2.1381.
7. En R, ¿por qué no usar `1:length(x)`? → Si x está vacío, `1:0` es `c(1, 0)` y el bucle corre dos veces; usa `seq_along(x)`.
8. `[2, 4] * 2` en Python → `[2, 4, 2, 4]`: la lista se repite. Para duplicar, `np.array([2, 4]) * 2`.

## Citas (12)

| id de fuente | página PDF o ancla | página impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| prog1 | 10 | 10 | Python en la ciencia de datos | NumPy permite "operaciones vectorizadas, significativamente más rápidas que los bucles tradicionales"; una línea, sin ejemplo | Paso 4, al terminar |
| prog4 | 9 | 9 | Operaciones vectorizadas | suma y producto elemento a elemento (`vector_1 + vector_3` = 2 5 8 11 14), `vector_numerico + 2`, y la definición de operación vectorizada | Paso 3, al terminar |
| prog4 | 11 | 11 | Indexación de vectores | `vector_5[vector_5 < 5]`: la condición vectorial como máscara | Paso 5, al terminar |
| prog4html | `operadores-aritméticos---r-como-calculadora` | | Operadores aritméticos | suma de vectores elemento a elemento; ojo: la tabla dice que `3^3` da 9 y el código de abajo da 27 (errata del documento) | Paso 3, después del chequeo |
| prog4html | `funciones-de-operaciones-básicas` | | Funciones de operaciones básicas | `mean`, `median`, `sd` (2.320022) sobre `x <- c(2.1, 3.3, 7.5, 4)`: funciones que reciben el vector entero | Paso 7 |
| thinpython | 130 | 109 | Cap. 10: Traversing a List | recorrer una lista con `for`, y `range(len(...))` para modificarla | Paso 2, al terminar |
| thinpython | 133 | 112 | Cap. 10: Map, Filter and Reduce | `sum` como reduce y el patrón acumulador escrito con bucles | Paso 2, después del chequeo |
| thinpython | 267 | 246 | Cap. 21: Order of Growth | orden de crecimiento, término dominante y tabla O(1), O(n), O(n²) | Destacado del paso 4 |
| pyworkout | 34 | 8 | Ej. 2: Summing numbers | reimplementar `sum` con un bucle y un acumulador | Retos (mano) |
| pyworkout | 146 | 120 | Cap. 7: Writing comprehensions | cómo una comprensión nace de un `for`: sigue siendo un bucle | Paso 6 |
| islr2 | 55 | 44 | 2.3.1 Basic Commands | `sqrt()` y `x^2` actúan sobre cada elemento de un vector o matriz | Paso 3 |
| islr2 | 225 | 214 | 5.3.2 Leave-One-Out Cross-Validation | el primer `for` de los laboratorios: cada vuelta ajusta un modelo, y ahí el bucle es lo razonable | Paso 6, profundizar |

`data-pag` es la PDF; `data-pimp` solo para thinpython (impresa = PDF − 21), pyworkout (PDF − 26) e islr2 (PDF − 11). prog1 y prog4: PDF = impresa.

## Riesgos y notas para quien construye

- **Fuentes no registradas**: los cuadernos de clase (`prog1nb`: UAX_20251105 c76-81, UAX_20251028 c40-52) y la hoja de NumPy (`prog1hojas`) no están en `fuentes.js`. La página los menciona en el texto por nombre y celda, sin chip. Si la sesión principal los registra, se agregan como chips: UAX_20251105 celdas 78 y 80-81 (máscara, `np.std` frente a `.std()`), UAX_20251028 celdas 40-45 (`.apply` con lambda).
- **Tiempos**: medidos en esta máquina (Apple M4, Python 3.13.5 con NumPy 2.1.3, R 4.6.1), mejor de 5 repeticiones, operación "duplicar y sumar":

  | n | Python bucle | NumPy `(a * 2).sum()` | razón | R bucle | R `sum(x * 2)` | razón |
  |---|---|---|---|---|---|---|
  | 1 000 | 0.048 ms | 0.001 ms | unas 40 | (bajo la resolución del reloj) | | |
  | 100 000 | 1.665 ms | 0.027 ms | unas 60 | 1.24 ms | 0.13 ms | unas 10 |
  | 1 000 000 | 19.554 ms | 0.670 ms | unas 30 | 12.775 ms | 1.325 ms | unas 10 |

  Mostrarlos como ilustración ("en esta computadora, un día concreto"); el contador de órdenes es el dato determinista. No prometer una razón fija: varía con n, con la caché y con la versión.
- El modelo "3 órdenes por vuelta" es didáctico; decirlo en la página. No inventar números de instrucciones reales.
- En R, `print(c(media, round(s, 4)))` imprime `5.0000 2.1381` (formato común del vector); no cambiarlo a `5 2.1381`.
- `ctx.ix` para el índice de la vuelta: casilla 0 a 7 en Python, 1 a 8 en R. Los `for v in x` no tienen índice visible: la narración habla de "vuelta k" (desde 1 en los dos) y la casilla con `ctx.ix`.
- La errata del HTML de clase (tabla con `3^3` = 9) puede decirse con naturalidad en el paso 3.
- La página no debe decir que vectorizar cambia la complejidad: solo la constante.
