# Mapa de citas: SM142003 UD0 "Introduction to Machine Learning" (diapositivas)

Materia: SM142003 Clasificaciones y agrupaciones (máster IA, UAX). Autor: Jorge Colomer Sánchez, fecha en portada 10 October 2026.
Carpeta: `/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD0. Intro to ML/`
(ojo: "SEMESTRE 1 " lleva un espacio al final).
Archivo: `ud0-intro-ml.html` (24 MB, autocontenido; el peso son imágenes embebidas). No hay casos ni scripts en la carpeta.
Base declarada en la bibliografía: Boehmke (HOML; los textos de remuestreo, sesgo-varianza y métricas siguen de cerca su capítulo 2,
sin cita explícita en cada diapositiva), Kuhn (TMwR), Hastie (ESL), James (ISLR 2.ª ed.), Lange, Lantz 4.ª ed., Lesmeister, Nwanganga, Baumer,
Bonaccorso, Fernández-Avilés.

## Formato de las diapositivas y cómo enlazar una

- Es Quarto 1.9.38 con reveal.js 5.1.0 (`<meta name="generator" content="quarto-1.9.38">`). Configuración: `hash: true`,
  `hashOneBasedIndex: false`, `navigationMode: 'default'`, `slideNumber: 'c/t'`. Misma regla que la UD2 (`sm142003-ud2-svm.md`).
- Hay 52 diapositivas, sin diapositivas ocultas. Cada sección de nivel 1 (numerada 1 a 8) es una pila vertical. Pilas: columnas 0 y 1 sueltas
  (portada, índice), 2 (9 diapositivas), 3 (1), 4 (2), 5 (16), 6 (9), 7 (8), 8 (3), 9 (2).
- Ancla, según `Location.getHash` de reveal 5.1.0 (leído del código incluido en el archivo): si la diapositiva tiene `id`, `#/<id>`; si no,
  `#/h/v` con índices desde 0 (v = 0 se omite).
- **Cuidado con `#/references`**: dos secciones tienen `id="references"`. `#/references` lleva a la 51; para la lista (52) usar `#/9/1`.
- La sección 7 tiene un id larguísimo (el título termina en el ícono de R y Quarto lo codifica en hexadecimal); para esa diapositiva (48)
  es más cómodo `#/8`, que lleva al mismo lugar.
- El número visible ("c/t") es el orden plano de 1 a 52: escribir "diapositiva 27 de 52".
- Enlace concreto (validación cruzada k-fold, diapositiva 27, sin id):
  `file:///Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE%201%20/SM142003%20-%20Clasificaciones%20y%20agrupaciones/UD0.%20Intro%20to%20ML/ud0-intro-ml.html#/5/12`
  y una con id (sesgo, diapositiva 36): mismo archivo con `#/bias`.
- Cómo se verificó: estructura de `<section>` leída del HTML con un parser y regla de anclas leída del código de reveal.js del archivo. No se abrió
  en un navegador. Si se edita el HTML, los anclas `#/h/v` cambian; los `#/id` no.
- No hay código R en esta unidad: solo texto, fórmulas y figuras.

## Tabla de contenido

| Tema | Diapositiva (n.º y ancla) | Notas |
|---|---|---|
| Portada | 1, `#/title-slide` | Unit 0: Introduction to Machine Learning |
| Índice | 2, `#/TOC` | 8 secciones |
| 1 Introducción a ML y ciencia de datos | 3, `#/introduction-to-machine-learning-and-data-science` | ML aprende de datos con mínima intervención humana; ejemplos: reingreso hospitalario, segmentación, cupones, churn |
| 1.1 **IA vs ML vs DL** | 4, `#/artificial-intelligence-machine-learning-and-deep-learning` | IA incluye sistemas basados en reglas y basados en datos; ML es la parte basada en datos (las reglas salen del entrenamiento); "los sistemas de reglas no son ML"; DL = ML con redes neuronales |
| Figura IA ⊃ ML ⊃ DL | 5, `#/2/2` | Figure 1: relación y evolución |
| 1.2 Ciencia de datos | 6, `#/what-is-data-science` | Figure 2: intersección de computación, matemáticas y estadística, y dominio; cita de Josh Wills |
| 1.3 **Tipos de ML** | 7, `#/types-of-machine-learning-algorithms` | según la supervisión: supervisados (modelos predictivos) y no supervisados (descriptivos); Figure 3 |
| Chuleta de algoritmos | 8, `#/2/5` | Figure 4: ML algorithm cheat sheet |
| 1.4.1 Whole game: data wrangling | 9, `#/whole-game` | recolección, inspección, limpieza, transformación, feature engineering, integración, validación; Figure 5 |
| 1.4.2 Modelado | 10, `#/2/7` | supervisado (clasificación, regresión), no supervisado (clustering, reducción de dimensión), refuerzo; Figure 6 |
| 1.4.3 Visualización y comunicación | 11, `#/2/8` | Figures 7 y 8 (de los datos a una historia) |
| 2 Qué hace bueno a un practicante | 12, `#/what-makes-a-successful-ml-practitioner` | Figure 9: habilidades técnicas y blandas |
| 3 Tareas: regresión y clasificación | 13, `#/machine-learning-tasks` | regresión predice una variable continua; clasificación una categoría (en R, un factor), ordenada o no; casos binarios en nota al pie |
| Clustering | 14, `#/4/1` | grupos homogéneos por dentro y distintos entre sí; k-means, jerárquico, por distribuciones; algunos algoritmos sirven para regresión y clasificación (RF, redes), otros solo para una (OLS, logística) |
| 4 **Proceso de modelado** | 15, `#/modeling-process` | portada de la sección |
| 4.1 Naturaleza del modelado | 16, `#/the-nature-of-ml-modeling` | iterativo y heurístico; teorema "No Free Lunch": hay que probar varios enfoques |
| 4.2 Enfoque estratégico | 17, `#/a-strategic-approach` | "gastar" bien los datos; preprocesar, evitar fuga de datos (data leakage), ajustar hiperparámetros, evaluar; Figure 10 (proceso general) |
| 4.3 **Partición de datos** | 18, `#/data-splitting` | objetivo: generalización, encontrar f̂(X) que prediga bien Y futuros |
| Train vs test | 19, `#/5/4` | train para todo el desarrollo; test una sola vez; regla de oro: nunca usar el test para elegir |
| Proporciones | 20, `#/5/5` | 70/30 u 80/20; más de 80 % en train o más de 40 % en test tiene riesgos (ver erratas) |
| Consideraciones prácticas | 21, `#/5/6` | n > 100K: train más chico por velocidad; p ≥ n: hacen falta más muestras; muestreo aleatorio simple o estratificado |
| 4.3.1 **Muestreo aleatorio simple** | 22, `#/5/7` | no controla la distribución de Y; `set.seed(123)` para reproducir; sirve con muestras grandes |
| 4.3.2 **Muestreo estratificado** | 23, `#/5/8` | mantiene la distribución de Y en train y test; en clasificación, esencial con desbalance; en regresión, por cuantiles de Y; `{rsample}`; ejemplo attrition 16/84 |
| 4.3.3 **Desbalance de clases** | 24, `#/5/9` | ejemplo 5 % default; down-sampling (reducir la clase abundante) vs up-sampling (repetir o bootstrap de la rara); ninguno gana siempre |
| 4.4 **Remuestreo**: validación | 25, `#/resampling-methods` | el error de entrenamiento engaña; enfoque de conjunto de validación (sub-train + holdout) y su alta variabilidad |
| Métodos de remuestreo | 26, `#/5/11` | ajustar repetidamente sobre partes del train; k-fold CV y bootstrap |
| 4.4.1 **Validación cruzada k-fold** | 27, `#/5/12` | k grupos de tamaño parecido, ajustar en k − 1, validar en el restante, k veces; cada observación se valida una vez; el error es el promedio de los k; Figures 11 y 12 (10-fold sobre 32 observaciones) |
| Elegir k en CV | 28, `#/5/13` | k = 5 o 10; LOOCV es k = n; 10-fold rinde parecido a LOOCV; CV repetida (10-fold × 5 o 10 con n < 10 000) |
| 4.4.2 **Bootstrap** | 29, `#/5/14` | muestra con reemplazo del mismo tamaño que el original; Figure 13 |
| Out-of-bag | 30, `#/5/15` | en promedio 63.21 % de las observaciones originales entra en cada muestra bootstrap; las que no entran son OOB y validan; menos variabilidad que CV pero más sesgo (problema solo con n chico); Figure 14 (bootstrap vs 10-fold) |
| 5 **Tipos de error** | 31, `#/types-of-error-the-bias-variance-trade-off` | sesgo (por la elección del modelo), varianza (train no representativo), error irreducible (ruido) |
| Relación sesgo-varianza | 32, `#/6/1` | mejorar uno suele empeorar el otro; Figure 15 |
| Subajuste y sobreajuste | 33, `#/6/2` | subajuste = sesgo alto / varianza baja; sobreajuste = sesgo bajo / varianza alta; Figure 16 |
| Balance óptimo | 34, `#/6/3` | seguir la forma de la distribución sin seguir el ruido |
| 5.1 **Compromiso sesgo-varianza** | 35, `#/bias-variance-trade-off` | el error se descompone en sesgo y varianza (ver erratas) |
| 5.2 Sesgo | 36, `#/bias` | diferencia entre la predicción esperada y el valor correcto; modelos lineales como ejemplo de sesgo alto; estables entre remuestreos |
| 5.3 Varianza | 37, `#/variance` | variabilidad de la predicción en un punto; k-NN, árboles y GBM son muy flexibles; los hiperparámetros controlan la complejidad |
| 5.4 **Ajuste de hiperparámetros** | 38, `#/hyperparameter-tuning` | se fijan antes de aprender (k en k-NN, parámetro de complejidad en árboles), distintos de los parámetros aprendidos |
| Búsqueda en rejilla | 39, `#/6/8` | grid search: un modelo por combinación, evaluado con k-fold CV; Figure 17 (8 modelos, gana el 2) |
| 6 Evaluación del modelo | 40, `#/model-evaluation` | de bondad de ajuste a funciones de pérdida; error o pseudo-residuo y − ŷ |
| Elegir la métrica | 41, `#/7/1` | cada pérdida enfatiza errores distintos; misma métrica para comparar modelos |
| 6.1 **Métricas de regresión** | 42, `#/regression-models` | MSE = (1/n)Σ(yᵢ − ŷᵢ)²; RMSE = √MSE (mismas unidades que y); deviance; MAE = (1/n)Σ\|yᵢ − ŷᵢ\|; RMSLE; R² (con advertencias); todas minimizar salvo R² |
| 6.2 **Métricas de clasificación** | 43, `#/classification-models` | misclassification (13/90 = 14 %), mean per class error (media de 3/25, 6/30, 4/35 = 14.5 %), MSE de probabilidades (0.09² = 0.0081), cross-entropy (log loss), Gini |
| 6.2.1 **Matriz de confusión** | 44, `#/7/4` | TP, TN, FP, FN con el ejemplo de los cupones; definir el nivel positivo: en R muchas funciones toman el primer nivel del factor (alfabético) |
| Figura de la matriz | 45, `#/7/5` | Figure 18 |
| 6.2.2 Clasificadores binarios | 46, `#/7/6` | Figure 19 (TP 100, TN 50, FP 10, FN 5, total 165): accuracy 150/165 = 0.91, precision 100/110 = 0.91, recall 100/105 = 0.95, specificity 50/60 = 0.83 |
| ROC y AUC | 47, `#/7/7` | umbral de decisión; TPR (sensibilidad) vs FPR (1 − especificidad) para todos los umbrales; diagonal = azar (AUC 0.5); AUC = probabilidad de ordenar un positivo al azar por encima de un negativo al azar; Figure 20 |
| 7 Todo junto en R | 48, `#/8` (id largo, ver arriba) | caret como estándar clásico, **tidymodels** como sucesor; `{tidyclust}` para clustering |
| 7.1 Ecosistema **tidymodels** | 49, `#/the-core-tidymodels-ecosystem` | figura del framework |
| Paquetes de tidymodels | 50, `#/8/2` | rsample (partición y remuestreo), parsnip (interfaz única de modelos), recipes (preprocesamiento), workflows (une todo), tune, yardstick (métricas), broom, dials (grillas) |
| 8 Referencias | 51, `#/references` | portada de la sección |
| Lista de referencias | 52, `#/9/1` | no usar `#/references` (id duplicado) |

## Erratas e inconsistencias

- **Diap. 35 vs 31**: la 35 dice que el error de predicción tiene "dos componentes principales", sesgo y varianza; la 31 había listado tres (con el error
  irreducible). La descomposición completa es sesgo² + varianza + ruido.
- **Diap. 20**: dice que más de 80 % en train arriesga sobreajuste. La proporción de la partición no causa sobreajuste: lo que se pierde con un test chico
  es la capacidad de medir bien el rendimiento (así lo plantea HOML).
- **Diap. 22**: "ideal cuando los datos siguen una distribución normal": la normalidad no es criterio para el muestreo aleatorio simple; lo que importa
  es el tamaño y el balance de Y.
- **Diap. 31**: define la varianza como el error por un train no representativo; la definición precisa es la de la diapositiva 37 (variabilidad de la
  predicción en un punto al cambiar el train).
- **Diap. 14**: la frase pone el clustering jerárquico entre los "centroid-based"; no lo es.
- **Diap. 24**: up-sampling solo por repetición o bootstrap; no menciona SMOTE, que el caso real de la UD3 usa (`step_smote`).
- **Diap. 42**: la descripción de la deviance ("computes a saturated model to an unsaturated model") está incompleta: compara el modelo ajustado con el saturado.
- **Diap. 48 y 51-52**: id largo de la sección 7 y id `references` duplicado (ver arriba).
- Erratas de tipeo: "misclassfication" y "ocurred" (46), "To making" (47), "framemork" (49).
