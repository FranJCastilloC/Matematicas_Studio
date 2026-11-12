# Mapa de citas: UD5 Datos sintéticos e imputación (SM142001, máster IA UAX)

A = `.../UD5. Datos sintéticos e imputación/UD5 Contenido Teorico .pdf` (21 páginas; PDF = impresa, con número al pie de p.3 a p.20; p.1 portada, p.2 índice, p.21 contraportada "GRACIAS").
Ruta completa: `/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142001 - Matematicas y estadistica para la IA/UD5. Datos sintéticos e imputación/UD5 Contenido Teorico .pdf` ("SEMESTRE 1 " lleva un espacio al final y el nombre del archivo lleva un espacio antes de ".pdf").
Título completo: "Generación estadística de datos: datasets sintéticos e imputación de datos faltantes".
Índice (p.2), verificado: 1 Introducción p.3, 2 Objetivos p.4, 3 Datasets sintéticos p.5 (3.1 p.5, 3.2 técnicas p.5, 3.3 aplicaciones p.9, 3.4 ventajas y desafíos p.9), 4 Imputación p.10 (4.1 p.10, 4.2 básicos p.10, 4.3 avanzados p.11, 4.4 comparación p.13, 4.5 impacto p.14), 5 Casos en Python p.15, 6 Conclusiones p.16, 7 Mapa conceptual p.18, 8 Bibliografía p.19.
El documento no tiene ni una fórmula matemática. Todo el código está en imágenes (capturas de Colab) y se leyó renderizando las páginas; los ejemplos de imputación se volvieron a correr y coinciden con las salidas impresas.

| Tema | pág. PDF | Notas |
|---|---|---|
| Introducción: falta de datos y valores faltantes; recuadro "Ten en cuenta" (rendimiento, privacidad, sesgos) | 3 | |
| Objetivos | 4 | anuncia "tres objetivos específicos" y lista cinco (ver erratas) |
| Qué son los datasets sintéticos e importancia (escasez, privacidad, experimentación controlada, diversidad) | 5 | ej. reconocimiento facial con iluminaciones y orientaciones nuevas |
| Técnica 1: modelos estadísticos | 5-6 | definición (p.5); código (p.6): `np.random.seed(42)`, `np.random.normal(loc=2500, scale=500, size=1000)` para ingresos mensuales, histograma de 20 barras entre ≈ 900 y ≈ 4400. Con esa semilla, media muestral 2509.67 y desviación (ddof=1) 489.61 (verificado al correrlo). Ventaja: simple; desventaja: "no captura relaciones complejas entre variables" |
| Técnica 2: GAN (generador y discriminador) | 7-8 | código (p.7): generador `Dense(128, relu, input_dim=100)` → `Dense(28*28, sigmoid)` → `Reshape((28, 28))`, entrada `tf.random.normal([1, 100])`; imagen resultante de ruido. Ventajas y desventajas, colapso de modo (p.8). Ver erratas: nunca se entrena ni hay discriminador |
| Técnica 3: simulación basada en reglas | 8 | `random.choice(dias)` de lunes a viernes y `random.randint(100, 1000)` autos, 100 registros; salida de `df.head()` (Lunes 527, Lunes 563, Martes 723, Lunes 794, Viernes 772). Ver erratas: no hay ninguna regla |
| Aplicaciones prácticas (visión, PLN, datos médicos) | 9 | |
| Ventajas y desafíos de los datos sintéticos | 9 | privacidad, aumento, experimentación; calidad, sesgo, coste de las GAN |
| Imputación: por qué hay faltantes y cómo afectan (muestra utilizable, sesgo, precisión) | 10 | "Si los valores faltantes están relacionados con ciertas características, el análisis puede estar sesgado": es la única alusión a los mecanismos (sin nombres MCAR, MAR, MNAR) |
| Imputación básica: media, mediana, moda | 10 | media; mediana "ideal para datos con outliers"; moda "aplicable para datos categóricos"; puede alterar la distribución y no considera relaciones entre variables |
| Ejemplo: sustitución por la media | 11 | `'Temperatura': [30, 32, np.nan, 35, 31, np.nan]`, `fillna(df['Temperatura'].mean(), inplace=True)`; los dos huecos pasan a 32.0 (media de 30, 32, 35, 31). La salida incluye un `FutureWarning` de pandas (ver erratas) |
| Imputación avanzada (panorama): regresión, KNN, imputación múltiple | 11 | imputación múltiple: una sola línea, "Genera varias imputaciones para capturar incertidumbre" |
| Imputación por regresión | 11-12 | ajustar sobre las filas completas y predecir los huecos; ventajas y desventajas (p.11); proceso en 3 pasos, modelo "lineal, polinómico, etc." (p.12). Sin código ni fórmula |
| Imputación KNN: funcionamiento | 12 | distancia (p. ej. euclidiana), $k$ vecinos, media o mediana de los vecinos; no paramétrico, costoso, sensible a $k$ |
| Ejemplo: `KNNImputer` | 13 | `'A': [1, 2, np.nan, 4, 5]`, `'B': [5, 3, np.nan, 8, 2]`, `n_neighbors=2`; salida fila 2: A = 3.0, B = 4.5. Ver erratas: son las medias de columna, no de vecinos |
| Tabla comparativa de métodos | 13 | media/mediana/moda, regresión, KNN, imputación múltiple (ventajas, desventajas, "mejor aplicación") |
| Criterios de comparación (robustez, eficiencia, relaciones) | 14 | |
| Impacto de la imputación en modelos de IA | 14 | tres viñetas: calidad, patrones, precisión |
| Caso práctico: usuarios ficticios | 15 | `random.choices(names, k=100)`, edad `randint(18, 65)`, compras `randint(0, 500)`; sin semilla |
| Caso práctico: completar encuestas con `SimpleImputer(strategy='mean')` | 15 | `'Satisfacción': [5, 4, nan, 3, nan]` → 4.0; `'Recomendación': [1, nan, 0, 1, 1]` → 0.75 (ver erratas) |
| Conclusiones (preguntas de reflexión, puntos clave) | 16-17 | |
| Mapa conceptual | 18 | |
| Bibliografía (Goodfellow, Hastie, Bishop, Van der Vaart, Rubin 1987) y software | 19-20 | |

## Erratas e inconsistencias

- **p.2, índice**: el primer párrafo de la sección 4 ("Los valores faltantes son comunes en datasets...") aparece en el índice como si fuera un título, en mayúsculas.
- **p.4**: "En esta unidad se establecen tres objetivos específicos" y siguen cinco.
- **p.6, ingresos**: modelar ingresos con una normal es la versión más simple, pero los ingresos reales son asimétricos a la derecha (log-normal) y la normal admite valores negativos. Con media 2500 y desviación 500 la probabilidad de un negativo es despreciable, pero el documento no lo comenta.
- **p.7, GAN**: el ejemplo solo construye un generador sin entrenar: no hay discriminador, ni función de pérdida, ni bucle adversarial. La "imagen sintética" es ruido de pesos aleatorios. El punto 3 dice que "puede parecer un dígito escrito a mano o ruido, dependiendo de cómo se entrene la GAN", pero nunca se entrena. `Flatten` se importa y no se usa; la salida muestra un `UserWarning` por `input_dim`. "Discriminad**or**" con la negrita cortada.
- **p.8, simulación basada en reglas**: el código no tiene reglas: el día y la cantidad de autos son independientes y uniformes. Contradice la ventaja que se le atribuye ("Total control sobre las relaciones entre las variables"). Una regla real sería, por ejemplo, más tráfico el lunes y el viernes. "Un número aleatorio de autos por día" tampoco es exacto: cada registro sortea su día, por eso en la salida el lunes sale tres veces de cinco.
- **p.10**: "Los algoritmos de aprendizaje automático no pueden procesar valores nulos directamente" es una generalización (los árboles con gradiente como XGBoost o `HistGradientBoosting` los manejan).
- **p.10-14, efecto de la media**: dice que la media "puede alterar la distribución", pero no explica cómo: reduce la varianza y debilita las correlaciones (todas las filas imputadas caen en el mismo valor). En p.14 afirma en general que la imputación "mantiene las relaciones estadísticas entre las variables", cosa que la media no hace (lo dice la propia p.10: "No considera las relaciones entre variables").
- **p.11**: `df['Temperatura'].fillna(..., inplace=True)` genera un `FutureWarning` de asignación encadenada que se ve en la captura: en pandas 3.0 deja de modificar el DataFrame. Lo correcto es `df['Temperatura'] = df['Temperatura'].fillna(...)`.
- **p.13, KNN**: en el ejemplo la fila 2 tiene vacías las dos columnas, así que no hay ninguna coordenada para medir distancias. `KNNImputer` no encuentra vecinos válidos y rellena con la media de cada columna: A = (1+2+4+5)/4 = 3.0 y B = (5+3+8+2)/4 = 4.5 (verificado al correrlo). El resultado es idéntico a imputar por la media, y el punto 3 de la explicación ("imputa con la media de los vecinos más cercanos") no describe lo que pasó. Un ejemplo útil deja al menos una columna observada en la fila incompleta.
- **p.12**: tampoco se explica que la distancia entre una fila incompleta y las demás se calcula solo con las coordenadas observadas (en scikit-learn, `nan_euclidean`, que reescala por la fracción de coordenadas presentes).
- **p.13, tabla**: la regresión "supone linealidad", pero p.12 admite modelos polinómicos. La imputación múltiple aparece como lo mejor para "datasets grandes y complejos" sin haberla explicado; su razón de ser es reflejar la incertidumbre de la imputación (Rubin), no el tamaño del dataset.
- **p.14**: "Reduce el sesgo introducido por la eliminación de filas incompletas" solo vale según el mecanismo de los faltantes; imputar no corrige el sesgo cuando la ausencia depende del propio valor faltante (MNAR), y el documento nunca distingue los mecanismos.
- **p.15, encuestas**: `Recomendación` es binaria (0 o 1) y se imputa con la media, 0.75, que no es una respuesta posible. La propia p.10 dice que la moda es la que corresponde a datos categóricos: `SimpleImputer(strategy='most_frequent')` daría 1.
- **p.15, usuarios**: sin semilla, la salida no es reproducible; edad, nombre y compras son independientes (mismo límite que el ejemplo de p.8).
- **p.18, mapa conceptual**: "estaídística", "Imputacio", "usentes". Entre los métodos avanzados pone KNN e imputación múltiple y omite la regresión.
- **p.19, bibliografía**: *The Elements of Statistical Learning*, 2.ª edición, es de 2009 (2017 es una reimpresión). Van der Vaart (*Asymptotic Statistics*) no trata imputación. Falta la referencia clásica de datos faltantes (Little y Rubin, *Statistical Analysis with Missing Data*). PyMC3 está desactualizado.
- **Erratas de texto**: "practicas" sin tilde (p.4).

## No aparece

- Ninguna fórmula: ni la media o la mediana escritas, ni la distancia euclidiana, ni la regresión, ni el objetivo minimax de la GAN $\min_G\max_D\,E[\log D(x)]+E[\log(1-D(G(z)))]$.
- Mecanismos de pérdida: MCAR, MAR y MNAR (ni con esos nombres ni con su definición), y cómo decidir cuál hay.
- Eliminación por lista (listwise) o por pares (pairwise) como alternativa a imputar.
- Efecto cuantitativo de la imputación por la media sobre la varianza y la correlación.
- Imputación múltiple como procedimiento: $m$ datasets, análisis en cada uno, combinación con las reglas de Rubin. Tampoco MICE ni `IterativeImputer`.
- Código de imputación por regresión; imputación por regresión estocástica (añadir ruido).
- Indicadores de faltante (columna "estaba vacío").
- Fuga de información: ajustar el imputador solo con el conjunto de entrenamiento.
- Evaluación de la calidad de los datos sintéticos (comparar distribuciones, correlaciones, entrenar en sintético y probar en real) y de la imputación (ocultar valores conocidos y medir el error).
- Otros generadores: SMOTE, autoencoders variacionales, modelos de difusión, cópulas, generación multivariada con correlación (`np.random.multivariate_normal`).
- Privacidad diferencial y riesgo de reidentificación en datos sintéticos.
- Entrenamiento de una GAN y el papel del discriminador más allá de una línea.
