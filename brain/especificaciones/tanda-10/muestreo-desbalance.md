# Especificación: Muestreo estratificado y desbalance de clases (muestreo-desbalance)

- Ruta: `decision-evaluacion` (grupo Aprendizaje automático), orden 11. Tanda del catálogo: 2 (se construye en esta tanda 10).
- Archivo: `biblioteca/conceptos/muestreo-desbalance.html`
- Área: Aprendizaje automático. Fuente del catálogo: "SM142003 UD0 (diap. 22 a 24)".
- Prerrequisitos: "Partición de datos: train, test y fuga de datos" (todavía planeado: sale sin enlace), "Matriz de confusión, precisión, recall y F1" (listo).
- Siguientes: ninguno (lista vacía).
- Aparece: [{ materia: "SM142003", ud: "UD0" }].
- Resumen del catálogo: "Mantener la proporción de cada clase al partir, y qué hacer cuando una clase es rara."

**Foco y límites.** Esta página es el lado del MUESTREO del desbalance: qué le pasa a la clase rara cuando partes los datos
(train/test y pliegues de validación cruzada), cómo lo arregla la estratificación, por qué estratificar NO balancea, cómo se rebalancea
el entrenamiento (submuestreo, sobremuestreo, pesos de clase) sin contaminar la prueba, y con qué métrica se mide al final.
Lo que NO repite, porque ya está en páginas listas:
- "Umbral, precisión contra recall y desbalance" (pasos "Desbalance" y "Remedios"): que la exactitud engaña con clases raras en
  detalle, mover el corte, la equivalencia entre pesos, sobremuestreo y bajar el umbral en la logística, y que los pesos estropean
  las probabilidades. Aquí se enlaza por título en los pasos 2, 6 y 7 con una frase.
- "Matriz de confusión, precisión, recall y F1": las definiciones de las cuatro casillas y las métricas. Aquí solo se usan.
- "Validación cruzada": el mecanismo de k pliegues. Aquí solo se mira cuántos casos raros caen en cada pliegue.
Sugerencia para la sesión principal (no la aplica el constructor): agregar "Umbral, precisión contra recall y desbalance" a
`siguientes` de `muestreo-desbalance` si se quiere el enlace automático en Conexiones.

## Datos de toda la página (inventados, se dice en la página)

**50 compras con tarjeta, 5 son fraude (10 %)**. Fraudes en las posiciones 4, 13, 22, 37 y 46 (contando desde 1, como R; en Python
3, 12, 21, 36 y 45). Partición 80/20: 40 de entrenamiento y 10 de prueba.

Cuentas limpias (todas verificadas):
- Estratificada: legítimas 45 → 36 train + 9 test; fraudes 5 → 4 train + 1 test. Siempre 1 fraude en la prueba.
- Al azar (sin estratificar): el número de fraudes en la prueba de 10 sigue una hipergeométrica (N = 50, K = 5, n = 10):
  P(0) = 0.3106, P(1) = 0.4313, P(2) = 0.2098, P(3) = 0.0442, P(4) = 0.0040, P(5) = 0.0001 (calculado con `math.comb`).
  En una de cada tres particiones al azar la prueba no tiene ningún fraude.
  Simulación real con 1000 semillas: scikit-learn `train_test_split(y, test_size=0.2, random_state=s)` → 0: 336, 1: 411, 2: 211, 3: 40, 4: 2.
  R `rsample::initial_split(df, prop = 0.8)` con `set.seed(s)` → 0: 285, 1: 453, 2: 222, 3: 35, 4: 5. Con `stratify=y` / `strata = y`: 1000 de 1000 con 1 fraude.
- Entrenamiento: 36 legítimas y 4 fraudes (n = 40).
  - Submuestreo (down-sampling): quedarse con los 4 fraudes y 4 legítimas al azar → 8 filas; se descartan 32 de 36 legítimas (89 %).
  - Sobremuestreo (up-sampling): repetir fraudes con reemplazo hasta 36 → 36 + 36 = 72 filas (32 copias nuevas; cada fraude aparece unas 9 veces).
  - Pesos `class_weight="balanced"`: $w_c = \frac{n}{k \cdot n_c}$ → legítima $\frac{40}{2 \cdot 36} = 0.5556$, fraude $\frac{40}{2 \cdot 4} = 5$.
    Cada clase suma lo mismo: 36 · 0.5556 = 20 y 4 · 5 = 20. Verificado con `compute_class_weight('balanced', ...)` → `[0.55555556 5.]`.
- Prueba (9 legítimas, 1 fraude), dos modelos:
  - "Siempre legítima": exactitud 0.9, recall 0, exactitud balanceada 0.5.
  - "Detector": acierta el fraude y da 2 falsas alarmas → exactitud 0.8, recall 1.0, especificidad 7/9, exactitud balanceada (1 + 7/9)/2 = 0.8889.
  - Si la prueba no tiene fraudes: "siempre legítima" saca exactitud 1.0 y el recall es 0/0; scikit-learn devuelve 0.0 con
    `UndefinedMetricWarning: Recall is ill-defined and being set to 0.0 due to no true samples.` (verificado).
- Error medio por clase de la UD0 (diap. 43): (3/25 + 6/30 + 4/35)/3 = 0.1448 (verificado; la diapositiva redondea a 14.5 %).

Versiones en esta máquina: Python 3.13, NumPy 2.1.3, scikit-learn 1.6.1, imbalanced-learn 0.13.0 (instalado, pero la página no lo usa
en el código principal); R 4.6.1 con rsample 1.3.2, caret 7.0.1, yardstick. `themis` (el `step_smote` de la UD2 y la UD3) NO está instalado:
no se corre nada de `themis` y la página solo lo nombra. TensorFlow/Keras no hacen falta.

## Imagen central

**La tira de 50 compras y el corte.** Una tira (o rejilla 10 × 5) de 50 casillas: 45 en gris (legítimas) y 5 en `--neg` (fraudes),
cada una con su número. Debajo, dos cajas: **Entrenamiento (40)** y **Prueba (10)**.

- Botón **"Partir al azar"**: 10 casillas saltan a la caja Prueba (animación corta). Un contador grande dice "fraudes en la prueba: k".
- Botón **"Partir estratificado"**: la tira se separa primero en dos filas por clase (45 grises, 5 rojas) y de cada fila salta el 20 %:
  9 grises y 1 roja. El contador siempre dice 1.
- **Histograma acumulado** a la derecha (abajo en móvil): cada partición agrega una barra al conteo de "fraudes en la prueba" (0 a 5).
  Botón **"Repetir 100 veces"** (con la misma lógica, en JS). Sobre el histograma, puntos con la probabilidad exacta (31.1 %, 43.1 %,
  21.0 %, 4.4 %, 0.4 %, 0.01 %) que aparecen SOLO después del chequeo del paso 1. Las barras de "al azar" en `--j` y las de "estratificado"
  en `--k`.
- Deslizadores: **número de fraudes** (de 2 a 10, inicial 5) y **fracción de prueba** (10 %, 20 %, 30 %; inicial 20 %). Todas las cuentas
  se recalculan en vivo (las probabilidades con la hipergeométrica, la estratificada con el redondeo de cada clase).

Modos por paso:
1. `azar`: tira, botón "Partir al azar", contador, histograma (sin probabilidades hasta el chequeo).
2. `medir`: la caja Prueba se vuelve una mini matriz de confusión del modelo "siempre legítima" con su exactitud y su recall en vivo
   (recall "0/0: no se puede" cuando no hay fraudes).
3. `estratos`: botón "Partir estratificado", la tira separada en dos filas por clase y la fórmula viva $n_c \cdot 0.2$ por clase.
4. `pliegues`: la caja Entrenamiento (40 casillas, 4 rojas) se parte en k pliegues (k = 2 a 10, botones); cada pliegue muestra cuántos
   fraudes tiene; interruptor "barajar / ordenado por clase / estratificado".
5. `remuestreo`: tres botones sobre el Entrenamiento: "Original" (36 + 4), "Submuestrear" (4 + 4, las grises descartadas se apagan),
   "Sobremuestrear" (36 + 36, las copias rojas con borde punteado y un número que dice de qué fraude son copia). La Prueba queda
   bloqueada con un candado: no se toca. Un botón "Sobremuestrear ANTES de partir" para el destacado.
6. `pesos`: las 40 casillas del entrenamiento como fichas de una balanza: el platillo de legítimas (36 fichas de peso 0.5556) y el de
   fraudes (4 fichas de peso 5); la balanza queda nivelada en 20 y 20. Deslizador de fraudes en train (1 a 20) recalcula los pesos.
7. `metricas`: la Prueba (9 + 1) con dos modelos ("siempre legítima" y "detector") lado a lado: matriz, exactitud, recall, especificidad
   y exactitud balanceada con números vivos.

## Hipótesis inicial

"Tienes 50 compras y 5 son fraude. Separas 10 al azar para probar tu detector al final. ¿Cuántos fraudes crees que caerán en esas 10?
¿Puede pasar que no caiga ninguno? Si pasa, ¿qué te diría esa prueba sobre tu detector?"

Se vuelve a mostrar (`#citaHipo`) en el destacado del paso 3.

## Pasos (7)

### Paso 1. Diez de cincuenta
- Idea: partir al azar no garantiza que la clase rara llegue a la prueba. Con 5 fraudes en 50, el azar reparte los fraudes de forma
  muy desigual.
- Escenario: modo `azar`. Sin fórmulas ni símbolos.
- Chequeo (predicción antes de tocar, sin símbolos): "Partes al azar muchas veces. ¿Con qué frecuencia la prueba de 10 compras no
  trae ningún fraude?"
  - Correcta: "Más o menos una de cada tres veces." (31.1 %)
  - "Casi nunca, menos de 1 de cada 20": la intuición dice que el 10 % de 10 es 1, pero 1 es solo el promedio.
  - "Una de cada diez": confunde con el 10 % de fraudes.
  - "La mitad de las veces": demasiado; lo más frecuente es 1 fraude (43 %).
- Después del chequeo: se habilita "Repetir 100 veces" y se encienden las probabilidades exactas sobre el histograma.
- Texto: la UD0 llama a esto muestreo aleatorio simple: no controla la distribución de la respuesta, y para que sea reproducible
  se fija una semilla (`set.seed(123)`). Cita intro3 diap. 22.
- Errata para decir con naturalidad: la diapositiva 22 dice que el muestreo simple es ideal "cuando los datos siguen una distribución
  normal"; la normalidad no tiene nada que ver: lo que importa es el tamaño de la muestra y el balance de la respuesta.

### Paso 2. Una prueba sin fraudes no mide nada
- Idea: si la prueba no trae casos raros, no puede decir nada de cómo los detectas. El modelo que dice siempre "legítima" saca
  exactitud 100 % y su recall es 0/0.
- Escenario: modo `medir`. Al partir al azar, la mini matriz se actualiza: con 0 fraudes, exactitud 1.0 y recall "0/0"; con 1, exactitud
  0.9 y recall 0; con 2, exactitud 0.8 y recall 0.
- Notación entra aquí, mínima: exactitud $= \frac{\text{aciertos}}{10}$ y recall $= \frac{TP}{TP + FN}$ (enlace por título a "Matriz de
  confusión, precisión, recall y F1").
- Chequeo (cálculo con datos en vivo): "En esta partición la prueba tiene k fraudes (el número del contador). ¿Qué exactitud saca el
  modelo que dice siempre legítima?" Respuesta (10 − k)/10. Con k = 0, 1.0. Pista para el error típico (responder k/10): "acierta todas
  las legítimas, no los fraudes".
- `details.profundizar` "¿Qué hace scikit-learn con un recall de 0/0?": devuelve 0.0 y avisa con `UndefinedMetricWarning ... due to no true
  samples` (salida real); el argumento `zero_division` decide el valor. Un número que parece una medida, pero no lo es.
- Texto: una frase y enlace por título a "Umbral, precisión contra recall y desbalance" para la exactitud engañosa en detalle.
- Cita raschka6 p. 31 (impr. 201): con 90 % de sanos, predecir siempre la mayoría ya da 90 %.

### Paso 3. Estratificar: partir cada clase por separado (destacado)
- Idea: el muestreo estratificado separa los datos por clase (estratos) y toma el mismo porcentaje de cada uno. Las legítimas aportan
  $45 \cdot 0.2 = 9$ y los fraudes $5 \cdot 0.2 = 1$: la prueba repite la proporción 9 a 1 del total.
- Escenario: modo `estratos`. Fórmula viva por clase con los deslizadores (con 10 fraudes: 8 + 2; con 30 % de prueba: 13.5 → redondeo,
  ver profundizar).
- Chequeo (cálculo con datos en vivo): el chequeo fija el deslizador en 10 fraudes de 50 y prueba 20 %: "¿Cuántos fraudes van a la prueba
  estratificada?" Respuesta 10 · 0.2 = 2 (y 40 · 0.2 = 8 legítimas). Error típico: 1 (el 10 % de 10, como si siguiera habiendo 5 fraudes).
  El chequeo solo usa combinaciones donde $n_c \cdot$ fracción es entero.
- Texto: en código es un argumento: `train_test_split(..., stratify=y)` en scikit-learn; `initial_split(df, prop = 0.8, strata = y)` en rsample
  (la UD0 recomienda `{rsample}`); `createDataPartition(y, p = 0.8)` en caret estratifica por defecto. Citas: intro3 diap. 23; raschka3 PDF 3
  (impr. 55: `stratify=y` y `np.bincount` que muestra 50/35/15 por clase); knn3real `subconjuntos-de-entrenamiento-y-test`
  (`initial_split(prop = 0.75, strata = diabetes)` en el caso Pima).
- `details.profundizar` "¿Y si la respuesta es un número?": en regresión se estratifica por cuantiles de y (se corta y en 4 tramos y se
  muestrea de cada uno), como dice la diapositiva 23. "¿Y el redondeo?": cuando $n_c \cdot$ fracción no es entero, scikit-learn reparte
  los sobrantes para que el total de la prueba dé exacto; por eso el número de una clase puede variar en 1 entre semillas.

**Destacado con predicción (la confusión natural): "¿Estratificar arregla el desbalance?"**
- Predicción: "Partes con `stratify=y`. ¿Qué porcentaje de fraudes queda en el entrenamiento?" Opciones: 10 % (correcta: 4 de 40) /
  50 % / 0 % / 20 %.
- Explicación: estratificar conserva la proporción, no la cambia. El entrenamiento sigue 9 a 1. Balancear es otra cosa (pasos 5 y 6).
- Un aviso sobre un libro: Nield (p. 38) dice que `stratify=Y` duplica la clase minoritaria hasta igualarla. No es así: solo mantiene la
  misma proporción en entrenamiento y prueba. Cita nield6 p. 38.
- Muestra de nuevo la hipótesis.

### Paso 4. Los pliegues también se reparten (trampa)
- Idea: la validación cruzada parte el entrenamiento otra vez, en k pliegues. El mismo problema vuelve, más fuerte: con 4 fraudes y 5
  pliegues, aun estratificando, un pliegue se queda sin fraudes.
- Escenario: modo `pliegues` con las 40 casillas de entrenamiento (36 + 4).
- **Trampa marcada (datos ordenados)**: si el archivo viene ordenado por clase (todas las legítimas primero) y usas `KFold` sin barajar, los 4
  fraudes caen en el último pliegue: `[0, 0, 0, 0, 4]`. Cuatro pliegues no ven ningún fraude al validar. Con `StratifiedKFold(n_splits=5)`:
  `[0, 1, 1, 1, 1]` y el aviso `The least populated class in y has only 4 members, which is less than n_splits=5.` Con `n_splits=4`:
  `[1, 1, 1, 1]` (todo verificado, ver reto `codigo3`).
- Chequeo (predicción antes de tocar): "Entrenamiento con 4 fraudes, `StratifiedKFold` con 5 pliegues. ¿Cuántos pliegues validan sin ningún fraude?"
  - Correcta: 1. Cuatro fraudes no alcanzan para cinco pliegues.
  - 0: estratificar no puede partir un fraude en pedazos.
  - 4: eso pasa con `KFold` sin barajar y datos ordenados.
  - 5: estratificado reparte uno por pliegue mientras haya.
- Citas: raschka6 p. 8 (impr. 178): k-fold estratificado conserva la proporción de clases en cada pliegue (sigue en la p. 9 / 179 con el bucle
  y la distribución [256 153]); knn3 diap. 24 `#/5/7`: el ejemplo de la UD3 usa las primeras 469 filas para train y las últimas 100 para test,
  y la diapositiva misma avisa que lo correcto es una partición aleatoria estratificada.
- Enlace por título a "Validación cruzada".

### Paso 5. Rebalancear solo el entrenamiento (trampa)
- Idea: para que el modelo vea suficientes fraudes se rebalancea el ENTRENAMIENTO: submuestrear (quitar legítimas hasta igualar: 4 + 4 = 8)
  o sobremuestrear (repetir fraudes con reemplazo hasta igualar: 36 + 36 = 72). La prueba se queda como está: tiene que parecerse al mundo real.
- Escenario: modo `remuestreo`, contadores de filas y de proporción.
- Chequeo (cálculo con datos en vivo, deslizador de fraudes en train): "Sobremuestreas los fraudes hasta igualar a las legítimas. ¿Cuántas
  copias nuevas agregas?" Con los datos de inicio: 36 − 4 = 32. Error típico: 36 (el total de fraudes después, no las copias). Con submuestreo:
  "¿cuántas legítimas descartas?" 32.
- Texto: la UD0 (diap. 24) presenta los dos con un 5 % de impagos: submuestrear cuando sobran datos (y aligera el cómputo), sobremuestrear
  cuando no se puede tirar nada; ninguno gana siempre. Raschka (pp. 202-203) sobremuestrea con `resample(..., replace=True, n_samples=357)`
  de 40 a 357. SMOTE inventa fraudes nuevos entre vecinos en vez de copiar (recuadro de Raschka, p. 203); el caso Pima de la UD3 usa
  `step_smote(over_ratio = 0.8)` en la receta.
- **Trampa marcada (fuga)**: sobremuestrear ANTES de partir. Con los 5 fraudes repetidos hasta 45 y después la partición estratificada, la
  prueba recibe 9 fraudes, y los 9 son copias de fraudes que también están en el entrenamiento (`[12, 12, 12, 21, 36, 36, 36, 36, 45]`,
  "9 de 9 tienen su gemelo en train", verificado, reto `codigo1`). Un modelo que memoriza acierta todos: la prueba mide memoria, no
  detección. El orden correcto: partir, después rebalancear solo el train (y en validación cruzada, dentro de cada pliegue: por eso
  `step_smote` va dentro de la receta en tidymodels y `imblearn.pipeline.Pipeline` en Python).
- Errata para decir con naturalidad: la diapositiva 24 solo menciona repetición o bootstrap para sobremuestrear y no nombra SMOTE, que el
  caso real de la UD3 y el caso 3 de la UD2 sí usan.
- Citas: intro3 diap. 24; raschka6 p. 32 (impr. 202, sigue en 33 / 203); raschka6 p. 33 (impr. 203, recuadro SMOTE); knn3real
  `preprocesamiento-de-datos-feature-engineering` (data-pag 7).

### Paso 6. Pesos de clase: rebalancear sin copiar
- Idea: en vez de copiar filas, se le dice al modelo que cada error con un fraude cuesta más. `class_weight="balanced"` usa
  $w_c = \frac{n}{k \cdot n_c}$ (n filas, k clases, $n_c$ filas de la clase c). Con 36 y 4: 0.5556 y 5. Cada clase pesa 20 en total: es como
  sobremuestrear sin agrandar los datos.
- Escenario: modo `pesos`, balanza con números vivos.
- Chequeo (cálculo con datos en vivo, deslizador de fraudes en train): "¿Qué peso recibe cada fraude?" Con los datos de inicio, 40/(2 · 4) = 5.
  Error típico: 9 (36/4, la razón de clases): la pista dice "divide n entre k · n_c, no entre la otra clase".
- Texto: Raschka (p. 202): la pérdida suma sobre los ejemplos y por eso se inclina hacia la mayoría; `class_weight='balanced'` lo compensa.
  Enlace por título a "Umbral, precisión contra recall y desbalance" (paso "Remedios"): ahí se ve que pesos, sobremuestreo y bajar el
  corte dan la misma matriz en la logística, y que los pesos estropean las probabilidades.
- `details.profundizar` "¿De dónde sale la fórmula?": con pesos $w_c = \frac{n}{k n_c}$, la suma de pesos de cada clase es $n_c \cdot \frac{n}{k n_c} = \frac{n}{k}$,
  igual para todas, y la suma total sigue siendo n. Verificado con `compute_class_weight('balanced', classes=[0, 1], y=y_train)` → `[0.55555556 5.]`.
  En R no hay un argumento único: `glm(..., weights = w)` recibe un peso por fila; en tidymodels, `importance_weights`.

### Paso 7. Medir con la métrica correcta
- Idea (el paso más técnico): con clases raras, la exactitud premia ignorar la clase rara. La exactitud balanceada promedia el acierto de
  cada clase: $\text{bal} = \frac{TPR + TNR}{2}$. Es 1 menos el "error medio por clase" de la UD0.
- Escenario: modo `metricas`. Los dos modelos sobre la prueba estratificada (9 + 1):
  "siempre legítima": exactitud 0.9, recall 0, balanceada 0.5. "Detector": exactitud 0.8, recall 1.0, especificidad 0.778, balanceada 0.889.
  Por exactitud gana el inútil; por exactitud balanceada, el detector.
- Chequeo (cálculo con datos en vivo, botones para cambiar las falsas alarmas del detector de 0 a 9): "¿Cuál es la exactitud balanceada
  del detector?" Con 2 falsas alarmas: (1 + 7/9)/2 = 0.889. Error típico: 0.8 (la exactitud).
- Texto: la UD0 (diap. 43) da el "mean per class error" con tres clases: la media de 3/25, 6/30 y 4/35 = 14.5 % (exacto 0.1448). Raschka
  (p. 202): elegir la métrica según la aplicación (recall si perder un fraude es caro, precisión si las falsas alarmas lo son). Y una regla
  que une toda la página: la métrica se calcula en una prueba con la proporción real, nunca en una prueba rebalanceada.
- Citas: intro3 diap. 43 `#/classification-models`; raschka6 p. 32 (impr. 202).
- `details.profundizar` "¿Y el F1 o el MCC?": enlace por título a "Matriz de confusión, precisión, recall y F1"; MCC usa las cuatro casillas
  (raschka6 p. 26, impr. 196) y no se deja engañar por la clase mayoritaria.

## Vida real (Python y R)

Python 3.13 con scikit-learn 1.6.1; R 4.6.1 con rsample 1.3.2. Mismos datos del recorrido (50 compras, 5 fraudes).
Algoritmo: la partición estratificada a mano. Se recorre la lista una vez, se lleva un contador por clase y una de cada cinco compras de
SU clase va a la prueba. Así cada clase aporta su 20 %. (La función de la librería además baraja antes; aquí no se baraja para que el
recorrido sea idéntico en los dos lenguajes, y la página lo dice.) Cierra comparando contra la librería: la misma proporción, 9 y 1.
El texto sin el prefijo `id: ` es exactamente lo que se ejecutó (archivos `vr.py` y `vr.R`). Líneas con id `-` no tienen evento.

### Python

```
lib: from sklearn.model_selection import train_test_split
datos: fraudes = [3, 12, 21, 36, 45]                # inventado: 5 fraudes en 50 compras
etiq: y = [1 if i in fraudes else 0 for i in range(50)]
cuenta0: cuenta = [0, 0]
test0: test = []
fori: for i in range(len(y)):
clase:     k = y[i]
suma:     cuenta[k] = cuenta[k] + 1
si:     if cuenta[k] % 5 == 0:                   # uno de cada cinco de SU clase
mete:         test.append(i)
imp1: print(len(test), sum(y[i] for i in test))
imp2: print(test)
lib2: y_train, y_test = train_test_split(y, test_size=0.2, stratify=y, random_state=1)
imp3: print(len(y_test) - sum(y_test), sum(y_test))
```

Salida real:
```
10 1
[5, 10, 16, 22, 27, 32, 38, 43, 45, 49]
9 1
```

### R

```
lib: suppressPackageStartupMessages(library(rsample))
datos: fraudes <- c(4, 13, 22, 37, 46)              # inventado: 5 fraudes en 50 compras
etiq: y <- ifelse(seq_len(50) %in% fraudes, 1, 0)
cuenta0: cuenta <- c(0, 0)
test0: test <- c()
fori: for (i in seq_along(y)) {
clase:   k <- y[i]
suma:   cuenta[k + 1] <- cuenta[k + 1] + 1
si:   if (cuenta[k + 1] %% 5 == 0) {             # uno de cada cinco de SU clase
mete:     test <- c(test, i)
-:   }
-: }
imp1: print(c(length(test), sum(y[test])))
imp2: print(test)
semilla: set.seed(1)
lib2: p <- initial_split(data.frame(y = factor(y)), prop = 0.8, strata = y)
imp3: print(table(testing(p)$y))
```

Salida real:
```
[1] 10  1
 [1]  6 11 17 23 28 33 39 44 46 50

0 1 
9 1 
```
(La salida de `table` empieza con una línea vacía y lleva espacios al final de "0 1 " y "9 1 "; copiar tal cual.)

Eventos (una sola lista `EV`): `lib`, `datos`, `etiq`, `cuenta0`, `test0`, luego 50 vueltas de `fori` + `clase` + `suma` + `si` (200 eventos)
con `mete` en 10 de ellas (las vueltas de los índices py 5, 10, 16, 22, 27, 32, 38, 43, 45, 49; R 6, 11, 17, 23, 28, 33, 39, 44, 46, 50:
son justamente los índices impresos; el 5.º fraude está en py 45 / R 46), y al final `imp1`, `imp2`, `semilla`, `lib2`, `imp3`:
5 + 200 + 10 + 5 = **220 eventos**. Usar una demora corta por defecto y sugerir "ir al final".

Corrección importante sobre `mete`: la vuelta que mete en test es aquella donde el contador de SU clase llega a un múltiplo de 5. Legítimas:
la 5.ª, 10.ª, ..., 45.ª legítima (9 vueltas); fraudes: el 5.º fraude (1 vuelta). Índices de la prueba resultantes (salida real): Python
`[5, 10, 16, 22, 27, 32, 38, 43, 45, 49]`, R `6 11 17 23 28 33 39 44 46 50`. El 45 de Python (46 de R) es el único fraude de la prueba.

`semilla` solo existe en R: en Python la narración dice "Esta línea solo existe en R: en Python la semilla va dentro de la llamada,
`random_state=1`." (mismo patrón que la línea `import` de `na-nan`).

### Foto de estado por línea ejecutada

| Evento | i (py / R) | y[i] | cuenta (legít., fraude) | test | Visual |
|---|---|---|---|---|---|
| datos, etiq | | | | | la tira de 50 casillas, 5 en `--neg` |
| cuenta0, test0 | | | (0, 0) | [] | dos contadores y la caja Prueba vacía |
| fori/clase/suma/si | 0 / 1 | 0 | (1, 0) | [] | casilla 1 resaltada, sube el contador de legítimas |
| vuelta 3 / 4 | 3 / 4 | 1 | (3, 1) | [] | primer fraude: sube el contador de fraudes |
| vuelta 5 / 6 | 5 / 6 | 0 | (5, 1) | [5] / [6] | `mete`: la 5.ª legítima salta a la Prueba (5 es múltiplo de 5) |
| vuelta 45 / 46 | 45 / 46 | 1 | (41, 5) | 9 elementos | el 5.º fraude salta a la Prueba |
| imp1 | | | (45, 5) | 10 | "10 1": 10 en la prueba, 1 fraude |
| lib2 / imp3 | | | | | la librería baraja y llega a lo mismo: 9 legítimas y 1 fraude |

(Precalcular la foto completa por vuelta: el contador de legítimas en la vuelta del 5.º fraude vale 41.) Narración de `si`: "¿El contador de
la clase de esta compra llegó a un múltiplo de 5? Entonces es una de cada cinco de SU clase". Narración de `suma` en R: "`cuenta[k + 1]`: en R
los índices empiezan en 1, así que la clase 0 vive en la casilla 1".

### Predicción antes de reproducir (`#vrPred`)

"¿Cuántas veces se ejecuta la línea `test.append(i)` / `test <- c(test, i)`?" Respuesta **10** (9 legítimas y 1 fraude). Distractores:
50 (las vueltas del `for`), 1 (los fraudes que van a la prueba), 5 (los fraudes). Pista: "una de cada cinco de cada clase: 45/5 + 5/5".

### Trampas reales (retos `codigo1` a `codigo3`)

**codigo1: sobremuestrear antes de partir (Python).**
```
import numpy as np
from sklearn.utils import resample
from sklearn.model_selection import train_test_split
fraudes = [3, 12, 21, 36, 45]
y = np.array([1 if i in fraudes else 0 for i in range(50)])
ids = np.arange(50)
copias = resample(ids[y == 1], replace=True, n_samples=45, random_state=123)
todo = np.concatenate([ids[y == 0], copias])          # sobremuestreo ANTES de partir
tr, te = train_test_split(todo, test_size=0.2, stratify=y[todo], random_state=1)
fraude_test = te[y[te] == 1]
print(sorted(fraude_test.tolist()))
print(sum(f in tr for f in fraude_test), "de", len(fraude_test), "tienen su gemelo en train")
```
Salida real:
```
[12, 12, 12, 21, 36, 36, 36, 36, 45]
9 de 9 tienen su gemelo en train
```
Pregunta: "¿Por qué este detector va a sacar un recall perfecto en la prueba aunque no sepa detectar nada?" Correcta: los 9 fraudes de la prueba
son copias de fraudes que el modelo ya vio en el entrenamiento; la prueba mide memoria. Distractores: "porque la prueba quedó balanceada" (la
proporción no es el problema, lo son las copias); "porque `random_state` está fijo" (con cualquier semilla pasa lo mismo: solo hay 5 fraudes
distintos); "porque `stratify` duplica los fraudes" (no: el que duplica es `resample`). Cita raschka6 p. 32-33 (Raschka sobremuestrea el
conjunto entero de su ejemplo para mostrar la cuenta, no para evaluar: decirlo).

**codigo2: `strata` que no estratifica (R, rsample).** Con una clase por debajo del 10 %, `rsample` junta (pool) ese estrato con otro sin avisar,
y la partición vuelve a ser al azar.
```
suppressPackageStartupMessages(library(rsample))
y <- rep(0, 100)
y[c(4, 13, 22, 37, 46)] <- 1                 # 5 fraudes en 100: el 5 %
df <- data.frame(y = factor(y))
set.seed(3)
p1 <- initial_split(df, prop = 0.8, strata = y)
print(table(testing(p1)$y))
set.seed(3)
p2 <- initial_split(df, prop = 0.8, strata = y, pool = 0)
print(table(testing(p2)$y))
```
Salida real:
```

 0  1 
20  0 
Warning message:
Stratifying groups that make up 0% of the data may be statistically risky.
ℹ Consider increasing `pool` to at least 0.1. 

 0  1 
19  1 
```
(El aviso sale por stderr y aparece al final del script en `Rscript`; corresponde a `p2`, con `pool = 0`. El "0%" del aviso es el valor de
`pool` que pusiste, no la proporción de fraudes.) Verificado además con 1000 semillas: con `strata = y` y `pool` por defecto, los fraudes en
la prueba fueron 0: 310, 1: 449, 2: 180, 3: 52, 4: 8, 5: 1 (igual que al azar); con `pool = 0`, 1000 de 1000 con 1. Con los datos de la página
(10 %) no pasa: 1000 de 1000 con 1 fraude.
Pregunta: "¿Por qué `p1` dejó la prueba sin fraudes si pediste `strata = y`?" Correcta: la clase de fraudes es el 5 % y `pool = 0.1` (por defecto)
la junta con la otra: el estrato desaparece. Distractores: "la semilla 3 está mal" (la semilla solo elige cuál partición al azar sale);
"`strata` solo funciona con números" (funciona con factores); "`prop = 0.8` no deja sitio" (20 filas de prueba alcanzan para un fraude).

**codigo3: pliegues sin fraudes (Python).**
```
import numpy as np
from sklearn.model_selection import KFold, StratifiedKFold
y_train = np.array([0] * 36 + [1] * 4)                 # ordenado por clase, como un CSV
print([int(y_train[v].sum()) for _, v in KFold(n_splits=5).split(y_train)])
print([int(y_train[v].sum()) for _, v in StratifiedKFold(n_splits=5).split(y_train, y_train)])
print([int(y_train[v].sum()) for _, v in StratifiedKFold(n_splits=4).split(y_train, y_train)])
```
Salida real (el aviso sale por stderr con la ruta del archivo de scikit-learn; mostrar solo el mensaje):
```
[0, 0, 0, 0, 4]
UserWarning: The least populated class in y has only 4 members, which is less than n_splits=5.
[0, 1, 1, 1, 1]
[1, 1, 1, 1]
```
Pregunta: "¿Qué arregla el problema del primer `print`?" Correcta: `StratifiedKFold` (o `KFold(shuffle=True)`), y con 4 fraudes, a lo sumo 4 pliegues.
Distractores: "más pliegues" (empeora: más pliegues vacíos); "`random_state` en `KFold`" (sin `shuffle=True` no baraja); "nada: es normal"
(cuatro pliegues validan sin un solo fraude). Con el entrenamiento real de la página (no ordenado, fraudes en las posiciones 3, 10, 18 y 30 del
train), `KFold(n_splits=5)` sin barajar da `[1, 1, 1, 1, 0]` (verificado): el azar del orden ayuda, pero no lo garantiza.

`p.vr-nota`: `train_test_split(X, y, test_size=0.2, stratify=y)` en Python; `initial_split(df, prop = 0.8, strata = y)` en R (y
`createDataPartition(y, p = 0.8)` en caret, que estratifica por defecto).
`details.profundizar` "La forma vectorizada": por clase, tomar los índices y quedarse con uno de cada cinco: en Python
`[i for c in (0, 1) for i in [j for j in range(50) if y[j] == c][4::5]]`; en R `unlist(lapply(c(0, 1), function(c) which(y == c)[c(FALSE, FALSE, FALSE, FALSE, TRUE)]))`.
Envueltas en `sorted(...)` / `sort(...)` dan exactamente los mismos índices que el bucle: `[5, 10, 16, 22, 27, 32, 38, 43, 45, 49]` y
` [1]  6 11 17 23 28 33 39 44 46 50` (verificado).

## Retos (11)

RETOS = ["ojo", "construir", "mano", "error", "prop1", "prop2", "prop3", "codigo1", "codigo2", "codigo3", "formula"]

1. **ojo** (ojo clínico, 8 rondas al azar, aprueba con 7 de 8): se muestra una situación y Francisco decide sin calcular **"la prueba sirve"**
   o **"la prueba no sirve"** para medir el detector. Banco (generar variantes con números al azar):
   partición al azar con 0 fraudes en la prueba (no sirve); estratificada con 1 o más (sirve); sobremuestreo antes de partir (no sirve);
   sobremuestreo solo en train (sirve); prueba rebalanceada 50/50 a mano (no sirve: no tiene la proporción real); `KFold` sin barajar sobre
   datos ordenados (no sirve); submuestreo solo en train (sirve); exactitud de 95 % con 5 % de fraudes y recall 0 (no sirve el modelo, la
   prueba sí: la explicación lo distingue). Cada explicación nombra la regla.
2. **construir** (manipular el visual): con los deslizadores y botones lograr (a) una prueba con exactamente 2 fraudes por partición estratificada
   (10 fraudes con 20 %, o 7 con 30 %: el reto acepta cualquier combinación que dé 2); (b) un entrenamiento balanceado de 8 filas
   (submuestrear); (c) pesos donde cada fraude valga 10 (n = 40, 2 fraudes: 40/(2 · 2) = 10). Ok al cumplir las tres.
3. **mano** (a mano, datos al azar, pistas escalonadas, reintentable): n entre 60 y 200 (múltiplo de 10), fraudes entre 5 % y 20 % (múltiplo de 5 de n
   para que dé entero), prueba 20 %. Pide: (1) fraudes en la prueba estratificada; (2) filas del train sobremuestreado hasta igualar; (3) peso
   `balanced` de un fraude en el train (2 decimales). Ejemplo: n = 100, 10 fraudes → (1) 2; (2) train 72 + 8 → 72 + 72 = 144; (3) 80/(2 · 8) = 5.
   Pistas: 1) "20 % de cada clase por separado"; 2) "iguala la minoría a la mayoría del train"; 3) primera parte resuelta con números.
4. **error** (cazar el error, 3 variantes, una línea mal):
   - V1 (Python, código de Vida real): `if cuenta[k] % 5 == 0:` cambiado por `if i % 5 == 4:`. Ya no es estratificada: toma una de cada cinco
     POSICIONES, sin mirar la clase. Salida real de las dos primeras líneas impresas: `10 0` y `[4, 9, 14, 19, 24, 29, 34, 39, 44, 49]`: la prueba
     quedó sin fraudes. (Verificado. Ojo: con `i % 5 == 0` sale `10 1` y con `i % 5 == 1` sale `10 2`, por casualidad; por eso se usa `== 4`.)
   - V2 (desarrollo escrito): "Peso de un fraude con 36 legítimas y 4 fraudes: $w = \frac{36}{4} = 9$" (la línea mal; lo correcto es $\frac{40}{2 \cdot 4} = 5$).
   - V3 (desarrollo escrito del flujo): "1. Sobremuestrear los fraudes a 45. 2. Partir 80/20 estratificado. 3. Entrenar. 4. Medir el recall."
     La línea mal es la 1 (debe ir después de partir).
5. **prop1** (opción múltiple, `mezclar: true`): "¿Qué hace `stratify=y`?" Correcta: "mantiene la misma proporción de clases en entrenamiento y
   prueba". Pistas: "duplica la clase rara hasta igualarla" → "eso es sobremuestrear; es el error de Nield p. 38"; "pone la mitad de cada clase
   en la prueba" → "la fracción de prueba es la misma para cada clase, no la mitad"; "elimina filas de la clase grande" → "eso es submuestrear".
6. **prop2**: "¿Por qué el remuestreo se aplica solo al entrenamiento?" Correcta: "la prueba tiene que parecerse a los datos reales y no puede
   contener copias de casos del entrenamiento". Pistas: "porque la prueba es más chica" → "el tamaño no importa: importa la fuga";
   "porque scikit-learn no deja remuestrear la prueba" → "sí deja: por eso es una trampa"; "para que la exactitud suba" → "al revés: rebalancear
   la prueba infla o deforma la métrica".
7. **prop3**: "Tienes 3 fraudes en el entrenamiento y quieres validación cruzada estratificada. ¿Cuántos pliegues como máximo para que todos
   validen con al menos un fraude?" Correcta: 3. Pistas: "5" → "cinco pliegues y tres fraudes: dos quedan vacíos"; "10" → "peor aún, y scikit-learn
   te avisa"; "no importa, estratificado reparte" → "estratificar no parte un fraude en pedazos".
8. **codigo1**, 9. **codigo2**, 10. **codigo3**: ver Vida real.
11. **formula**: la parte de memoria (`B.ordenar`), registrada con `C.reto("formula", ok)`.

## Memoria

**B.ordenar** (el peso de una clase con `class_weight="balanced"`), piezas en orden:
1. `$w_c =$`
2. `$n$` (numerador)
3. `$/$`
4. `$($`
5. `$k$`
6. `$\cdot$`
7. `$n_c$`
8. `$)$`

Resultado: $w_c = \frac{n}{k \cdot n_c}$; con n = 40, k = 2, $n_c$ = 4: 5. Distractores: `$n_{\text{otra}}$` (la razón 36/4 = 9 no es la fórmula),
`$n - n_c$`, `$\sqrt{\ }$`.
Alternativa si se prefiere código: `train_test_split(` `X, y,` `test_size=0.2,` `stratify=y` `)` con distractores `shuffle=False`, `stratify=X`, `random_state=y`.

**Tarjetas (8):**
1. ¿Qué garantiza partir al azar con 5 fraudes en 50? → Nada: en una de cada tres particiones la prueba de 10 no trae ningún fraude (31 %).
2. ¿Qué hace el muestreo estratificado? → Parte cada clase por separado con la misma fracción: la prueba repite la proporción del total (9 y 1).
3. ¿Estratificar balancea las clases? → No. Mantiene la proporción (10 % en train y en test). Balancear es remuestrear o pesar.
4. Submuestreo frente a sobremuestreo → Submuestrear quita filas de la clase grande (4 + 4); sobremuestrear repite la rara (36 + 36). Ninguno gana siempre.
5. ¿Cuándo se remuestrea? → Después de partir, solo en el entrenamiento (y dentro de cada pliegue). Antes, las copias se cuelan en la prueba.
6. `class_weight="balanced"` → $w_c = \frac{n}{k \cdot n_c}$: con 36 y 4, pesos 0.5556 y 5; cada clase suma 20.
7. ¿Por qué un pliegue sin fraudes? → Con 4 fraudes y 5 pliegues no alcanza. Usa a lo sumo tantos pliegues como casos raros, y `StratifiedKFold`.
8. ¿Qué métrica con clases raras? → Exactitud balanceada $\frac{TPR + TNR}{2}$, recall, precisión o F1, medidas en una prueba con la proporción real.

## Citas (13)

| id de fuente | página PDF o diapositiva | ancla / impresa | sección | qué hay | cuándo leerla |
|---|---|---|---|---|---|
| intro3 | 22 | ancla `5/7` | 4.3.1 Simple random sampling | muestreo simple: no controla la distribución de Y, semilla `set.seed(123)`; la errata de "distribución normal" | Paso 1 |
| intro3 | 21 | ancla `5/6` | Practical Considerations | muestreo simple para datos uniformes, estratificado para mantener proporciones (churn) | Paso 1, al terminar |
| raschka6 | 31 | impr. 201 | Dealing with class imbalance | con 90 % sanos, predecir siempre la mayoría da 90 %; 357 benignos y 212 malignos | Paso 2 |
| intro3 | 23 | ancla `5/8` | 4.3.2 Stratified sampling | estratificado en clasificación y en regresión por cuantiles; `{rsample}`; attrition 16/84 | Paso 3 |
| raschka3 | 3 | impr. 55 | train_test_split estratificado | `stratify=y` y `np.bincount` por clase (50/35/15) | Paso 3 |
| knn3real | 6 | ancla `subconjuntos-de-entrenamiento-y-test` | Subconjuntos de entrenamiento y test | `initial_split(prop = 0.75, strata = diabetes)` en el caso Pima | Paso 3 |
| nield6 | 38 | (sin impresa) | Class Imbalance | `stratify=Y` (Example 6-19) y la afirmación errónea de que duplica la minoritaria | Destacado del paso 3 |
| raschka6 | 8 | impr. 178 | K-fold cross-validation (estratificado) | k-fold estratificado conserva la proporción en cada pliegue; el bucle sigue en la p. 9 / 179 | Paso 4 |
| knn3 | 24 | ancla `5/7` | 4.3.4 Train y test | partición secuencial (primeras 469, últimas 100) con el aviso de que lo correcto es aleatoria estratificada | Paso 4 |
| intro3 | 24 | ancla `5/9` | 4.3.3 Class imbalances | down-sampling y up-sampling con 5 % de impagos; ninguno gana siempre | Paso 5 |
| raschka6 | 32 | impr. 202 | Dealing with class imbalance | métrica según la aplicación, la pérdida sesgada a la mayoría, `class_weight='balanced'`, `resample` (sigue en 33 / 203) | Pasos 5, 6 y 7 |
| raschka6 | 33 | impr. 203 | Generating new training data to address class imbalance | recuadro SMOTE (Chawla et al. 2002), imbalanced-learn | Paso 5, al terminar |
| knn3real | 7 | ancla `preprocesamiento-de-datos-feature-engineering` | Preprocesamiento | `step_smote(over_ratio = 0.8)` dentro de la receta (se aplica solo al train) | Paso 5 |
| intro3 | 43 | ancla `classification-models` | 6.2 Classification models | misclassification y mean per class error (3/25, 6/30, 4/35 → 14.5 %) | Paso 7 |

(Son 14 filas; si hay que recortar, quitar intro3 diap. 21.) Formato de las diapositivas: `tipo: "diapositivas"`, `data-pag` = número de
diapositiva y `data-ancla` sin `#/` (como en `bootstrap.html`: `data-pag="29" data-ancla="5/14"`). Para raschka: `data-pag` = PDF, `data-pimp` = impresa
(PDF = impresa − 170 en cap. 6; PDF = impresa − 52 en cap. 3). knn3real: `data-pag` = número de sección y `data-ancla` (como en `umbral-desbalance.html`:
`data-pag="7" data-ancla="preprocesamiento-de-datos-feature-engineering"`). nield6: `data-pag="38"` (PDF sin números impresos).
Todas las páginas y anclas salen de los mapas `brain/fuentes/sm142003-ud0-intro.md`, `raschka-cap6.md`, `raschka-cap3.md`, `nield-cap6.md` y
`sm142003-ud3-knn.md`. Texto de las diapositivas 21 a 24 de la UD0 releído en el HTML para esta especificación (coincide con el mapa).
Fuera del material de la unidad (decirlo en la página): la exactitud balanceada como nombre (la UD0 da el error medio por clase), la fórmula de
`class_weight`, el `pool` de rsample y el aviso de `StratifiedKFold`.

## Erratas e inconsistencias del material

- UD0 diap. 22: "ideal ... when the data follows a normal distribution": la normalidad no es criterio para el muestreo aleatorio simple.
- UD0 diap. 24: el sobremuestreo solo por repetición o bootstrap; no menciona SMOTE, que la UD3 (caso Pima) y el caso 3 de la UD2 (German Credit,
  `step_smote` de `themis`) usan.
- UD0 diap. 23: el ejemplo pone "90 % Yes vs 10 % No" y después attrition con 16 % "Yes": no es un error, pero conviene notar que la clase
  rara en el primero es "No".
- Nield p. 38: dice que `stratify=Y` duplica la clase minoritaria hasta igualarla. Falso: solo conserva la proporción (destacado del paso 3).
- Raschka p. 203: la salida impresa es `50`; NumPy actual imprime `50.0`. Además sobremuestrea antes de cualquier partición, solo para mostrar
  la cuenta: no es un flujo de evaluación (decirlo en `codigo1`).
- UD3 diap. 24: la partición secuencial (primeras 469 filas) no es un error del material porque la propia diapositiva avisa; sirve de ejemplo de
  qué no hacer.
- Aviso de rsample con `pool = 0`: "groups that make up 0% of the data": el porcentaje es el valor de `pool`, no la proporción de la clase.

## Riesgos y notas para quien construye

- No repetir los pasos "Desbalance" y "Remedios" de "Umbral, precisión contra recall y desbalance": aquí no se habla de umbrales ni de
  probabilidades calibradas; se enlaza por título.
- El histograma del paso 1 debe usar la hipergeométrica exacta con los deslizadores (N = 50, K = fraudes, n = 10 · fracción · 5). Para la
  simulación en JS basta barajar con Fisher-Yates; no hace falta reproducir las semillas de scikit-learn ni de R.
- Redondeo estratificado con valores no enteros (paso 3): scikit-learn reparte el sobrante para que la prueba tenga exactamente
  `ceil(test_size · n)` filas; la página no necesita reproducir su algoritmo: si el número de una clase no es entero, muestra "1 o 2" y lo explica
  en el `details`. El chequeo usa valores enteros.
- Archivos ejecutados para esta especificación (copias de referencia, pueden borrarse con el scratchpad):
  `/private/tmp/claude-501/-Users-franciscocastillo-Desktop-Math-Videos/b800ca9b-4b76-4beb-b07f-3d1c9bed329d/scratchpad/md/` (`vr.py`, `vr.R`,
  `c1.py`, `c2.R`, `c3.py`). El texto de los bloques de esta especificación es el de esos archivos.
- `themis` no está instalado: no poner código R con `step_smote` que se presente como ejecutado. imbalanced-learn 0.13.0 sí está, pero no se usa
  en el código principal para no alargar; si se nombra `imblearn.pipeline.Pipeline`, sin salida.
- Los avisos (`UserWarning`, `UndefinedMetricWarning`, el `Warning message` de rsample) salen por stderr y en inglés; copiar el mensaje, no la ruta.
- R imprime `table` con una línea vacía arriba (nombre de la dimensión vacío) y espacios al final de línea: respetarlos en `CODIGO`/salidas.
