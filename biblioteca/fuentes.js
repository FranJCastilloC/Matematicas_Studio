/*
  Registro de fuentes de la biblioteca: los libros y el material del máster que las páginas citan.
  Cada cita en una página apunta a una fuente de este archivo por su id, más la página del PDF.

  Campos:
    corto     etiqueta corta que se muestra en el chip de la cita
    titulo    título completo
    autor     autor o institución
    archivo   ruta absoluta al PDF en la carpeta brain de Francisco (se abre con file:// en la página exacta)
    nota      para qué sirve esta fuente dentro de la biblioteca
*/
window.FUENTES = {
  ud1: {
    corto: "UD1 teoría",
    titulo: "UD1. Estadística descriptiva y análisis. Contenido teórico",
    autor: "Máster en IA, UAX. Matemáticas y estadística para la IA",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142001 - Matematicas y estadistica para la IA/UD1. Estadística descriptiva y análisis/SM142001_MUIA_UD1_CONTENIDO TEÓRICO-2.pdf",
    nota: "El material oficial de la unidad. Es la versión que te van a evaluar."
  },
  ud1slides: {
    corto: "UD1 diapositivas",
    titulo: "Unidad 1. Diapositivas",
    autor: "Máster en IA, UAX",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142001 - Matematicas y estadistica para la IA/UD1. Estadística descriptiva y análisis/V2k8es-Unidad_1.pdf",
    nota: "Las diapositivas de clase, más visuales y resumidas que el contenido teórico."
  },
  ud2: {
    corto: "UD2 teoría",
    titulo: "UD2. Teoría de la estimación. Contenido teórico",
    autor: "Máster en IA, UAX. Matemáticas y estadística para la IA",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142001 - Matematicas y estadistica para la IA/UD2. Teoría de la estimación/SM142001_MUIA_UD2_CONTENIDO TEÓRICO-2.pdf",
    nota: "Probabilidad, distribuciones, máxima verosimilitud, intervalos y contrastes, tal como te los van a evaluar. Tiene erratas: las páginas las señalan."
  },
  raschka3: {
    corto: "Raschka cap. 3",
    titulo: "Machine Learning with PyTorch and Scikit-Learn, cap. 3: A Tour of Machine Learning Classifiers Using Scikit-Learn",
    autor: "Raschka, Liu y Mirjalili",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap03 - A Tour of Machine Learning Classifiers Using Scikit-Learn.pdf",
    nota: "Regresión logística, SVM, kernels, árboles y kNN con scikit-learn. No escribe la optimización de la SVM. Página PDF = impresa − 52."
  },
  svm3: {
    corto: "UD2 SVM",
    titulo: "UD2. SVM (Support Vector Machines). Diapositivas",
    autor: "Máster en IA, UAX. Técnicas de IA: clasificaciones y agrupaciones (Jorge Colomer)",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD2. SVM/ud 02 - svm 2025-2026.html",
    tipo: "diapositivas",
    nota: "Las diapositivas de clase (64), con casos en R y caret. Ojo: usa C con dos sentidos opuestos (presupuesto y costo)."
  },
  raschka6: {
    corto: "Raschka cap. 6",
    titulo: "Machine Learning with PyTorch and Scikit-Learn, cap. 6: Learning Best Practices for Model Evaluation and Hyperparameter Tuning",
    autor: "Raschka, Liu y Mirjalili",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap06 - Learning Best Practices for Model Evaluation and Hyperparameter Tuning.pdf",
    nota: "Validación cruzada, curvas de aprendizaje, búsqueda de hiperparámetros, matriz de confusión, ROC y desbalance. Página PDF = impresa − 170."
  },
  raschka7: {
    corto: "Raschka cap. 7",
    titulo: "Machine Learning with PyTorch and Scikit-Learn, cap. 7: Combining Different Models for Ensemble Learning",
    autor: "Raschka, Liu y Mirjalili",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap07 - Combining Different Models for Ensemble Learning.pdf",
    nota: "Voto mayoritario, bagging, AdaBoost y gradient boosting. Página PDF = impresa − 204. Parte del código ya no corre con scikit-learn 1.6."
  },
  raschka10: {
    corto: "Raschka cap. 10",
    titulo: "Machine Learning with PyTorch and Scikit-Learn, cap. 10: Working with Unlabeled Data – Clustering Analysis",
    autor: "Raschka, Liu y Mirjalili",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap10 - Working with Unlabeled Data – Clustering Analysis.pdf",
    nota: "k-means, k-means++, codo, silueta, jerárquico con dendrograma y DBSCAN. Página PDF = impresa − 304."
  },
  raschka9: {
    corto: "Raschka cap. 9",
    titulo: "Machine Learning with PyTorch and Scikit-Learn, cap. 9: Predicting Continuous Target Variables with Regression Analysis",
    autor: "Raschka, Liu y Mirjalili",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap09 - Predicting Continuous Target Variables with Regression Analysis.pdf",
    nota: "Regresión lineal con descenso de gradiente y scikit-learn, residuos, MSE y R², Ridge, Lasso y regresión polinómica. Página PDF = impresa − 268."
  },
  knn3: {
    corto: "UD3 kNN",
    titulo: "UD3. kNN. Diapositivas",
    autor: "Máster en IA, UAX. Técnicas de IA: clasificaciones y agrupaciones (Jorge Colomer)",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD3. kNN/ud3-knn.html",
    tipo: "diapositivas",
    nota: "Las diapositivas de clase de kNN (32). Las fórmulas de distancia de la diapositiva 12 tienen una errata en los índices."
  },
  knn3basico: {
    corto: "kNN ejemplo básico",
    titulo: "UD3. kNN. Ejemplo básico",
    autor: "Máster en IA, UAX. Técnicas de IA: clasificaciones y agrupaciones",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD3. kNN/Unidad_3_Ejemplo_Basico.html",
    tipo: "documento",
    nota: "Caso resuelto en R paso a paso, con las regiones de decisión."
  },
  knn3particular: {
    corto: "kNN ejemplo particular",
    titulo: "UD3. kNN. Ejemplo particular",
    autor: "Máster en IA, UAX. Técnicas de IA: clasificaciones y agrupaciones",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD3. kNN/Unidad_3_Ejemplo_Particular.html",
    tipo: "documento",
    nota: "Métricas de distancia, maldición de la dimensión y búsqueda rápida de vecinos, en R."
  },
  knn3real: {
    corto: "kNN caso real",
    titulo: "UD3. kNN. Caso real (diabetes Pima)",
    autor: "Máster en IA, UAX. Técnicas de IA: clasificaciones y agrupaciones",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD3. kNN/Unidad_3_Caso_real workflow.html",
    tipo: "documento",
    nota: "Flujo completo con tidymodels: curva ROC construida a mano e importancia de variables."
  },
  nb4: {
    corto: "UD4 Naive Bayes",
    titulo: "UD4. Naive Bayes",
    autor: "Máster en IA, UAX. Técnicas de IA: clasificaciones y agrupaciones (Jorge Colomer)",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD4. Naive Bayes/ud 04 - naive bayes 2025-2026.html",
    tipo: "documento",
    nota: "Probabilidad, Bayes, el algoritmo, Laplace y el filtro de spam, con tres casos en R. Tiene erratas en las tablas y en Laplace."
  },
  fe1: {
    corto: "UD1 Feature engineering",
    titulo: "UD1. Feature and target engineering. Diapositivas",
    autor: "Máster en IA, UAX. Técnicas de IA: clasificaciones y agrupaciones (Jorge Colomer)",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD1. Feature Engineering/ud1-feature-target-engineering.html",
    tipo: "diapositivas",
    nota: "Transformaciones del target, faltantes, filtros, codificaciones, WoE e IV y fuga de información (91 diapositivas). El signo del WoE cambia entre diapositivas."
  },
  fe1p2: {
    corto: "FE práctica 2",
    titulo: "UD1. Práctica 2: binarización y discretización",
    autor: "Máster en IA, UAX. Técnicas de IA: clasificaciones y agrupaciones",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD1. Feature Engineering/Practica2FeatureEngineering.html",
    tipo: "documento",
    nota: "Binarizar y discretizar variables en R."
  },
  fe1p3: {
    corto: "FE práctica 3",
    titulo: "UD1. Práctica 3: transformaciones y escalado",
    autor: "Máster en IA, UAX. Técnicas de IA: clasificaciones y agrupaciones",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD1. Feature Engineering/Practica3FeatureEngineering.html",
    tipo: "documento",
    nota: "Log10, Box-Cox con car::bcPower, min-max y z-score."
  },
  fe1p4: {
    corto: "FE práctica 4",
    titulo: "UD1. Práctica 4: codificaciones, WoE e IV",
    autor: "Máster en IA, UAX. Técnicas de IA: clasificaciones y agrupaciones",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD1. Feature Engineering/Practica4FeatureEngineering.html",
    tipo: "documento",
    nota: "One-hot, dummy y effect coding, y WoE e IV a mano y con step_woe. Su fórmula del WoE tiene las condicionales al revés."
  },
  rf3: {
    corto: "Random Forest UD3 teoría",
    titulo: "UD3. Random Forest. Contenido teórico",
    autor: "Máster en IA, UAX. Técnicas de IA: regresiones, deep learning y otros",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142004 - Regresiones, deep learning y otros/UD3. Random Forest/Contenido teórico Random Forest.pdf",
    nota: "Entropía, Gini, CART, parada y poda, bootstrap, bagging, Random Forest e importancia. Tiene erratas: la proporción del bootstrap al revés en p. 12."
  },
  rf3diapo: {
    corto: "Random Forest UD3 diapositivas",
    titulo: "Técnicas de IA, Unidad 3. Diapositivas",
    autor: "Máster en IA, UAX. Técnicas de IA: regresiones, deep learning y otros",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142004 - Regresiones, deep learning y otros/UD3. Random Forest/Tecnicas IA Unidad 3.pdf",
    nota: "Las diapositivas de árboles y Random Forest, solo imagen. Se citan por la página del PDF."
  },
  km5: {
    corto: "UD5 K-means",
    titulo: "UD5. K-means. Diapositivas",
    autor: "Máster en IA, UAX. Técnicas de IA: clasificaciones y agrupaciones (Jorge Colomer)",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD5. K-Means/ud5-kmeans.html",
    tipo: "diapositivas",
    nota: "Distancias, el algoritmo, elegir k, Gower, PAM y CLARA (27 diapositivas). Llama Hartigan-Wong a los pasos de Lloyd."
  },
  km5caso: {
    corto: "K-means caso Madrid",
    titulo: "UD5. Caso: elecciones de Madrid 2021",
    autor: "Máster en IA, UAX. Técnicas de IA: clasificaciones y agrupaciones (Jorge Colomer)",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD5. K-Means/ud5-caso.html",
    tipo: "documento",
    nota: "El caso completo en R; no escala los datos y muestra un óptimo local real."
  },
  db6: {
    corto: "UD6 DBSCAN",
    titulo: "UD6. DBSCAN. Diapositivas",
    autor: "Máster en IA, UAX. Técnicas de IA: clasificaciones y agrupaciones (Jorge Colomer)",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD6. DBSCAN/ud6-dbscan.html",
    tipo: "diapositivas",
    nota: "Densidad, ε y MinPts, núcleo, borde y ruido, k-distancias (16 diapositivas)."
  },
  db6caso: {
    corto: "DBSCAN caso",
    titulo: "UD6. Práctica 1: DBSCAN (multishapes y billetes suizos)",
    autor: "Máster en IA, UAX. Técnicas de IA: clasificaciones y agrupaciones (Jorge Colomer)",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD6. DBSCAN/ud6-caso.html",
    tipo: "documento",
    nota: "DBSCAN en R sobre datos reales."
  },
  val7: {
    corto: "Validación de clusters",
    titulo: "Unit 7. Cluster validation. Diapositivas",
    autor: "Máster en IA, UAX. Técnicas de IA: clasificaciones y agrupaciones (Jorge Colomer)",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD6. DBSCAN/ud7-cluster-validation.html",
    tipo: "diapositivas",
    nota: "Tendencia de agrupamiento, silueta, gap, índices internos y externos (48 diapositivas). Su fórmula de Hopkins contradice la regla que aplica."
  },
  intro3: {
    corto: "UD0 Intro ML",
    titulo: "UD0. Introducción al aprendizaje automático. Diapositivas",
    autor: "Máster en IA, UAX. Técnicas de IA: clasificaciones y agrupaciones (Jorge Colomer)",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142003 - Clasificaciones y agrupaciones/UD0. Intro to ML/ud0-intro-ml.html",
    tipo: "diapositivas",
    nota: "Proceso de modelado, partición de datos, validación cruzada, sesgo y varianza, y métricas (52 diapositivas)."
  },
  raschka5: {
    corto: "Raschka cap. 5",
    titulo: "Machine Learning with PyTorch and Scikit-Learn, cap. 5: Compressing Data via Dimensionality Reduction",
    autor: "Raschka, Liu y Mirjalili",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap05 - Compressing Data via Dimensionality Reduction.pdf",
    nota: "PCA, LDA y t-SNE con el dataset Wine, paso a paso en Python y después con scikit-learn."
  },
  ud3: {
    corto: "UD3 teoría",
    titulo: "UD3. Decisión y clasificación estadística. Contenido teórico",
    autor: "Máster en IA, UAX. Matemáticas y estadística para la IA",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142001 - Matematicas y estadistica para la IA/UD3. Decisión y clasificación estadística/SM142001_MUIA_UD3_CONTENIDO TEÓRICO-1.pdf",
    nota: "Pérdidas, riesgo, criterios de decisión, clasificadores y métricas. Sin ejemplos numéricos y con erratas: llama precisión a la exactitud."
  },
  eda6: {
    corto: "Programación UD6 EDA",
    titulo: "UD6. Análisis exploratorio de datos. Contenido teórico",
    autor: "Máster en IA, UAX. Programación y entorno de trabajo para la IA",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142002 - Programacion y entorno de trabajo para la IA/UD6. EDA/SM142002_MUIA_UD6_CONTENIDO TEÓRICO.pdf",
    nota: "EDA en R: densidades, correlaciones y gráficos. Solo código, sin fórmulas."
  },
  eda6doc: {
    corto: "Programación UD6 EDA II",
    titulo: "Unidad 6. EDA II",
    autor: "Máster en IA, UAX. Programación y entorno de trabajo para la IA",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142002 - Programacion y entorno de trabajo para la IA/UD6. EDA/Unidad 6 - EDA II.html",
    tipo: "documento",
    nota: "Tablas descriptivas, Pearson frente a Spearman, correlación no es causalidad y faltantes con naniar."
  },
  eda5: {
    corto: "Programación UD5 R",
    titulo: "UD5. R. Contenido teórico",
    autor: "Máster en IA, UAX. Programación y entorno de trabajo para la IA",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142002 - Programacion y entorno de trabajo para la IA/UD5. R/SM142002_MUIA_UD5_CONTENIDO TEÓRICO.pdf",
    nota: "Tidyverse y gráficos en R: conteos, faltantes, histogramas y cajas."
  },
  rl1: {
    corto: "Regresión UD1 teoría",
    titulo: "UD1. Regresión lineal. Contenido teórico",
    autor: "Máster en IA, UAX. Técnicas de IA: regresiones, deep learning y otros",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142004 - Regresiones, deep learning y otros/UD1. Regresion lineal/2024.10.11 - Contenido teórico Regresión Lineal.pdf",
    nota: "El material oficial de regresión lineal: mínimos cuadrados, supuestos y sus pruebas, forma matricial, intervalos y métricas. Tiene erratas, entre ellas la hipótesis de Durbin-Watson al revés."
  },
  rl1consejos: {
    corto: "Regresión UD1 consejos",
    titulo: "Linear regression: consejos",
    autor: "Máster en IA, UAX. Técnicas de IA: regresiones, deep learning y otros",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142004 - Regresiones, deep learning y otros/UD1. Regresion lineal/Linear regression_Consejos.pdf",
    nota: "Tres páginas de consejos prácticos para la regresión lineal, sin fórmulas."
  },
  rl1diapo: {
    corto: "Regresión UD1 diapositivas",
    titulo: "Técnicas de IA, Unidad 1. Diapositivas",
    autor: "Máster en IA, UAX. Técnicas de IA: regresiones, deep learning y otros",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142004 - Regresiones, deep learning y otros/UD1. Regresion lineal/Tecnicas IA Unidad 1.pdf",
    nota: "Las diapositivas de clase de regresión lineal; muchas son imágenes. Desde la p. 17 el número impreso es de otra presentación."
  },
  rl2: {
    corto: "Logística UD2 teoría",
    titulo: "UD2. Regresión logística. Contenido teórico",
    autor: "Máster en IA, UAX. Técnicas de IA: regresiones, deep learning y otros",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142004 - Regresiones, deep learning y otros/UD2. Regresion logistica/Contenido teórico Regresión Logística.pdf",
    nota: "El material oficial de regresión logística: sigmoide, odds, verosimilitud, frontera, métricas, ROC y multiclase."
  },
  rl2diapo: {
    corto: "Logística UD2 diapositivas",
    titulo: "Técnicas de IA, Unidad 2. Diapositivas",
    autor: "Máster en IA, UAX. Técnicas de IA: regresiones, deep learning y otros",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142004 - Regresiones, deep learning y otros/UD2. Regresion logistica/Tecnicas IA Unidad 2.pdf",
    nota: "Las diapositivas de clase de logística. La numeración impresa es irregular: se cita por la página del PDF. La gráfica rotulada sigmoide en p. 5 es el logit."
  },
  rl2manuscrito: {
    corto: "Logística, cálculo a mano",
    titulo: "Cálculo de los coeficientes de la regresión logística (apuntes manuscritos)",
    autor: "Máster en IA, UAX. Técnicas de IA: regresiones, deep learning y otros",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142004 - Regresiones, deep learning y otros/UD2. Regresion logistica/Calculo_coefs_rlog.pdf",
    nota: "Tres páginas escaneadas con la derivación paso a paso de la log-verosimilitud."
  },
  ud4: {
    corto: "UD4 teoría",
    titulo: "UD4. Estadística bayesiana. Contenido teórico",
    autor: "Máster en IA, UAX. Matemáticas y estadística para la IA",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142001 - Matematicas y estadistica para la IA/UD4. Estadística bayesiana/UD4 Contenido Teórico.pdf",
    nota: "Bayes, prior y posterior, MCMC, Metropolis-Hastings, Gibbs y modelos jerárquicos. Tiene erratas: llama precisión a la sensibilidad y su traza de ejemplo no converge."
  },
  ud5: {
    corto: "UD5 teoría",
    titulo: "UD5. Datos sintéticos e imputación. Contenido teórico",
    autor: "Máster en IA, UAX. Matemáticas y estadística para la IA",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142001 - Matematicas y estadistica para la IA/UD5. Datos sintéticos e imputación/UD5 Contenido Teorico .pdf",
    nota: "Datos sintéticos e imputación, sin fórmulas. Su ejemplo de KNN no usa vecinos y el de GAN es un generador sin entrenar."
  },
  nield1: {
    corto: "Nield cap. 1",
    titulo: "Essential Math for Data Science, cap. 1: Basic Math and Calculus Review",
    autor: "Thomas Nield",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Essential-Math/01 Cap 1 Basic Math and Calculus Review.pdf",
    nota: "Repaso corto: funciones, exponentes, logaritmos, e, límites, derivadas, regla de la cadena e integrales, con SymPy."
  },
  nield5: {
    corto: "Nield cap. 5",
    titulo: "Essential Math for Data Science, cap. 5: Linear Regression",
    autor: "Thomas Nield",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Essential-Math/05 Cap 5 Linear Regression.pdf",
    nota: "Regresión lineal de punta a punta con un ejemplo de perros: forma cerrada, descenso de gradiente, R², error estándar e intervalos de predicción."
  },
  nield6: {
    corto: "Nield cap. 6",
    titulo: "Essential Math for Data Science, cap. 6: Logistic Regression and Classification",
    autor: "Thomas Nield",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Essential-Math/06 Cap 6 Logistic Regression and Classification.pdf",
    nota: "Logística por máxima verosimilitud, log-odds, R² de McFadden, matriz de confusión, ROC y desbalance."
  },
  nield2: {
    corto: "Nield cap. 2",
    titulo: "Essential Math for Data Science, cap. 2: Probability",
    autor: "Thomas Nield",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Essential-Math/02 Cap 2 Probability.pdf",
    nota: "Probabilidad conjunta, unión, condicional, Bayes, binomial y beta, con código Python corto."
  },
  nield3: {
    corto: "Nield cap. 3",
    titulo: "Essential Math for Data Science, cap. 3: Descriptive and Inferential Statistics",
    autor: "Thomas Nield",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Essential-Math/03 Cap 3 Descriptive and Inferential Statistics.pdf",
    nota: "Media, mediana, moda, varianza y desviación con código Python mínimo."
  },
  nield4: {
    corto: "Nield cap. 4",
    titulo: "Essential Math for Data Science, cap. 4: Linear Algebra",
    autor: "Thomas Nield",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Essential-Math/04 Cap 4 Linear Algebra.pdf",
    nota: "Vectores, matrices como transformaciones, determinante y eigenvectores, con NumPy."
  },
  brasil3: {
    corto: "Brasil cap. 3",
    titulo: "Before Machine Learning, vol. 1: Linear Algebra, cap. 3: What Is a Vector?",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Before-ML-Vol1-LinearAlgebra/02 Cap 3 What Is a Vector.pdf",
    nota: "Vectores, producto punto, similitud coseno, span, base y cambio de base. Página PDF = impresa − 7."
  },
  brasil4: {
    corto: "Brasil cap. 4",
    titulo: "Before Machine Learning, vol. 1: Linear Algebra, cap. 4: But What About a Matrix?",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Before-ML-Vol1-LinearAlgebra/03 Cap 4 But What About a Matrix.pdf",
    nota: "Transformaciones lineales, determinante, inversa, sistemas, eigenvectores y diagonalización. Página PDF = impresa − 37."
  },
  brasil5: {
    corto: "Brasil cap. 5",
    titulo: "Before Machine Learning, vol. 1: Linear Algebra, cap. 5: Matrix Decomposition",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Before-ML-Vol1-LinearAlgebra/04 Cap 5 Matrix Decomposition.pdf",
    nota: "Descomposición en eigenvalores y SVD, con ejemplos a mano."
  },
  brasil6: {
    corto: "Brasil cap. 6",
    titulo: "Before Machine Learning, vol. 1: Linear Algebra, cap. 6: Principal Component Analysis",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Before-ML-Vol1-LinearAlgebra/05 Cap 6 Principal Component Analysis.pdf",
    nota: "PCA desde el álgebra lineal, paso a paso."
  },
  brasil2v2: {
    corto: "Brasil vol. 2 cap. 2",
    titulo: "Before Machine Learning, vol. 2: Calculus, cap. 2: Last Breath of Just Linearity",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Before-ML-Vol2-Calculus/02 Cap 2 Last Breath of Just Linearity.pdf",
    nota: "Funciones, dominio, inversa y composición. Página PDF = impresa − 8."
  },
  brasil3v2: {
    corto: "Brasil vol. 2 cap. 3",
    titulo: "Before Machine Learning, vol. 2: Calculus, cap. 3: The Derivative",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Before-ML-Vol2-Calculus/03 Cap 3 The Derivative.pdf",
    nota: "Límites, derivada, regla de la cadena, Taylor, Newton-Raphson y descenso de gradiente con regresión. Página PDF = impresa − 24. Tiene varias cuentas mal."
  },
  brasil4v2: {
    corto: "Brasil vol. 2 cap. 4",
    titulo: "Before Machine Learning, vol. 2: Calculus, cap. 4: The Integral",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Before-ML-Vol2-Calculus/04 Cap 4 The Integral.pdf",
    nota: "Sumas de Riemann, teorema fundamental y escala logarítmica. Página PDF = impresa − 155."
  },
  brasil5v2: {
    corto: "Brasil vol. 2 cap. 5",
    titulo: "Before Machine Learning, vol. 2: Calculus, cap. 5: More Dimensions",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Before-ML-Vol2-Calculus/05 Cap 5 More Dimensions.pdf",
    nota: "Derivadas parciales, gradiente, Hessiana, regresión, entropía cruzada, retropropagación y optimizadores. Página PDF = impresa − 198."
  },
  brasil2v3: {
    corto: "Brasil vol. 3 cap. 2",
    titulo: "Before Machine Learning, vol. 3: Probability and Statistics, cap. 2: Descriptive Statistics",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Before-ML-Vol3-ProbStats/02 Cap 2 Descriptive Statistics.pdf",
    nota: "Estadística descriptiva con el mismo tono intuitivo del vol. 1. Página PDF = impresa − 7."
  },
  brasil3v3: {
    corto: "Brasil vol. 3 cap. 3",
    titulo: "Before Machine Learning, vol. 3: Probability and Statistics, cap. 3: Probability and Theory",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Before-ML-Vol3-ProbStats/03 Cap 3 Probability and Theory.pdf",
    nota: "Probabilidad, distribuciones, máxima verosimilitud, TCL, intervalos y contrastes, de la intuición a la fórmula. Página PDF = impresa − 37."
  },
  brasil4v3: {
    corto: "Brasil vol. 3 cap. 4",
    titulo: "Before Machine Learning, vol. 3: Probability and Statistics, cap. 4: Bayes",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Before-ML-Vol3-ProbStats/04 Cap 4 Bayes.pdf",
    nota: "Teorema de Bayes, priors beta y Naive Bayes. Página PDF = impresa − 245."
  },
  brasil5v3: {
    corto: "Brasil vol. 3 cap. 5",
    titulo: "Before Machine Learning, vol. 3: Probability and Statistics, cap. 5: Markov Models",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Before-ML-Vol3-ProbStats/05 Cap 5 Markov Models.pdf",
    nota: "Cadenas de Markov, normal multivariante, MCMC y Gibbs. Página PDF = impresa − 290. Muchas cuentas mal: las páginas lo avisan."
  },
  brasil6v3: {
    corto: "Brasil vol. 3 cap. 6",
    titulo: "Before Machine Learning, vol. 3: Probability and Statistics, cap. 6: Hierarchical Bayesian Models",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Before-ML-Vol3-ProbStats/06 Cap 6 Hierarchical Bayesian Models.pdf",
    nota: "Metropolis-Hastings y el modelo jerárquico. Página PDF = impresa − 359. Varias razones de aceptación mal calculadas."
  },
  jansen13: {
    corto: "Jansen cap. 13",
    titulo: "Machine Learning for Algorithmic Trading, cap. 13: Data-Driven Risk Factors and Asset Allocation with Unsupervised Learning",
    autor: "Stefan Jansen",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Finanzas-ML/ML4T/Cap13 - Data-Driven Risk Factors and Asset Allocation with Unsupervised Learning.pdf",
    nota: "PCA aplicado a retornos de acciones: factores de riesgo y eigenportfolios."
  },
  dl4: {
    corto: "Deep Learning UD4 teoría",
    titulo: "UD4. Deep Learning y LSTM. Contenido teórico",
    autor: "Máster en IA, UAX. Técnicas de IA: regresiones, deep learning y otros",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142004 - Regresiones, deep learning y otros/UD4. Deep Learning y LSTM/Contenido teórico UD4 - Deep Learning y LSTM vC.pdf",
    nota: "Neurona, perceptrón, activaciones, pérdidas, red multicapa, RNN y LSTM. Tiene erratas: la neurona sin sumatorio y el perceptrón que para cuando las clases no son separables."
  },
  dl4diapo: {
    corto: "Deep Learning UD4 diapositivas",
    titulo: "UD4. Introducción al Deep Learning (diapositivas)",
    autor: "Máster en IA, UAX. Técnicas de IA: regresiones, deep learning y otros",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142004 - Regresiones, deep learning y otros/UD4. Deep Learning y LSTM/UD4 - DL.pdf",
    nota: "Diapositivas en PDF: citar por página del PDF. La de softmax muestra la curva de la sigmoide."
  },
  lstm4: {
    corto: "LSTM UD4 diapositivas",
    titulo: "UD4. LSTM (diapositivas)",
    autor: "Máster en IA, UAX. Técnicas de IA: regresiones, deep learning y otros",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142004 - Regresiones, deep learning y otros/UD4. Deep Learning y LSTM/UD4 - LSTM.pdf",
    nota: "RNN, el ejemplo de \"hola\", gradiente que se desvanece, LSTM y GRU. Diapositivas en PDF: citar por página del PDF."
  },
  cnn5: {
    corto: "CNN UD5 teoría",
    titulo: "UD5. Redes convolucionales. Contenido teórico",
    autor: "Máster en IA, UAX. Técnicas de IA: regresiones, deep learning y otros",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142004 - Regresiones, deep learning y otros/UD5. Redes convolucionales/Contenido teórico CNN - vC.pdf",
    nota: "Convolución, filtros, stride, padding, pooling y transfer learning. Tiene erratas: el detector de Sobel suma 235 donde es 315."
  },
  cnn5diapo: {
    corto: "CNN UD5 diapositivas",
    titulo: "UD5. Redes convolutivas (diapositivas)",
    autor: "Máster en IA, UAX. Técnicas de IA: regresiones, deep learning y otros",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142004 - Regresiones, deep learning y otros/UD5. Redes convolucionales/UD5 - CNN.pdf",
    nota: "Diapositivas en PDF: citar por página del PDF. Ejemplo 6×6 con filtro 3×3 y max pooling."
  },
  rl6: {
    corto: "Refuerzo UD6 teoría",
    titulo: "UD6. Reinforcement Learning. Contenido teórico",
    autor: "Máster en IA, UAX. Técnicas de IA: regresiones, deep learning y otros",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142004 - Regresiones, deep learning y otros/UD6. Reinforcement Learning/Contenido teórico UD6.pdf",
    nota: "MDP, valor, Bellman, Monte Carlo, Q-learning, gradiente de política y DQN. Llama recompensa esperada al retorno esperado."
  },
  rl6diapo: {
    corto: "Refuerzo UD6 diapositivas",
    titulo: "UD6. Reinforcement Learning (diapositivas)",
    autor: "Máster en IA, UAX. Técnicas de IA: regresiones, deep learning y otros",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142004 - Regresiones, deep learning y otros/UD6. Reinforcement Learning/UD6 - RL.pdf",
    nota: "Diapositivas en PDF: citar por página del PDF. El índice falla desde el tema 5."
  },
  ud6: {
    corto: "UD6 teoría",
    titulo: "UD6. Teoría de grafos complejos. Contenido teórico",
    autor: "Máster en IA, UAX. Matemáticas y estadística para la IA",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142001 - Matematicas y estadistica para la IA/UD6. Teoría de grafos complejos/UD6 Contenido Teorico.pdf",
    nota: "Redes neuronales (pp. 5-22) y grafos (pp. 23-33): centralidad, PageRank, comunidades. Tiene erratas: la neurona del paraguas da 0.56, no 0.92."
  },
  nield7: {
    corto: "Nield cap. 7",
    titulo: "Essential Math for Data Science, cap. 7: Neural Networks",
    autor: "Thomas Nield",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Essential-Math/07 Cap 7 Neural Networks.pdf",
    nota: "Red de colores claro y oscuro, propagación hacia adelante y atrás con NumPy. La retropropagación matricial del código está mal en la capa oculta."
  },
  raschka11: {
    corto: "Raschka cap. 11",
    titulo: "Machine Learning with PyTorch and Scikit-Learn, cap. 11: Implementing a Multilayer Artificial Neural Network from Scratch",
    autor: "Raschka, Liu y Mirjalili",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap11 - Implementing a Multilayer Artificial Neural Network from Scratch.pdf",
    nota: "Red multicapa desde cero sobre MNIST y retropropagación. Página PDF = impresa − 334."
  },
  raschka12: {
    corto: "Raschka cap. 12",
    titulo: "Machine Learning with PyTorch and Scikit-Learn, cap. 12: Parallelizing Neural Network Training with PyTorch",
    autor: "Raschka, Liu y Mirjalili",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap12 - Parallelizing Neural Network Training with PyTorch.pdf",
    nota: "Tensores de PyTorch, mini-lotes, SGD y funciones de activación. Página PDF = impresa − 368."
  },
  raschka13: {
    corto: "Raschka cap. 13",
    titulo: "Machine Learning with PyTorch and Scikit-Learn, cap. 13: Going Deeper – The Mechanics of PyTorch",
    autor: "Raschka, Liu y Mirjalili",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap13 - Going Deeper – The Mechanics of PyTorch.pdf",
    nota: "Autograd, inicialización de Xavier y el XOR con una red. Página PDF = impresa − 408."
  },
  raschka14: {
    corto: "Raschka cap. 14",
    titulo: "Machine Learning with PyTorch and Scikit-Learn, cap. 14: Classifying Images with Deep Convolutional Neural Networks",
    autor: "Raschka, Liu y Mirjalili",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap14 - Classifying Images with Deep Convolutional Neural Networks.pdf",
    nota: "Convolución 1D y 2D, padding, stride, pooling, dropout y pérdidas. Página PDF = impresa − 450. Su conv2d falla con stride 2."
  },
  raschka15: {
    corto: "Raschka cap. 15",
    titulo: "Machine Learning with PyTorch and Scikit-Learn, cap. 15: Modeling Sequential Data Using Recurrent Neural Networks",
    autor: "Raschka, Liu y Mirjalili",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap15 - Modeling Sequential Data Using Recurrent Neural Networks.pdf",
    nota: "RNN, retropropagación en el tiempo, gradiente que se desvanece y LSTM. Página PDF = impresa − 498. El factor w^(t−k) ignora la derivada de tanh."
  },
  raschka19: {
    corto: "Raschka cap. 19",
    titulo: "Machine Learning with PyTorch and Scikit-Learn, cap. 19: Reinforcement Learning for Decision Making in Complex Environments",
    autor: "Raschka, Liu y Mirjalili",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap19 - Reinforcement Learning for Decision Making in Complex Environments.pdf",
    nota: "MDP, retorno, Bellman, programación dinámica, Monte Carlo, TD, Q-learning y DQN. Página PDF = impresa − 672. Los retornos del episodio 1 están corridos un índice."
  },
  liu15: {
    corto: "Liu cap. 15",
    titulo: "Python Machine Learning by Example, cap. 15: Making Decisions in Complex Environments with Reinforcement Learning",
    autor: "Yuxi (Hayden) Liu",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/ML-by-Example/Cap15 - Making Decisions in Complex Environments with Reinforcement Learning.pdf",
    nota: "Iteración de valor y de política en FrozenLake, Monte Carlo en Blackjack y Q-learning. Página PDF = impresa − 446."
  },
  arq1: {
    corto: "Arquitectura UD1 teoría",
    titulo: "UD1. Arquitectura de computadores. Contenido teórico",
    autor: "Máster en IA, UAX. Arquitectura de computadores y redes de comunicación",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/UD1. Arquitectura de computadores/MUIA_SM142052_UD1_Contenido_teórico.pdf",
    nota: "Sistemas de numeración: decimal, binario, hexadecimal, complemento a dos y ASCII (pp. 17-22). Página PDF = impresa + 3."
  },
  arq1diapo: {
    corto: "Arquitectura UD1 diapositivas",
    titulo: "UD1. Arquitectura de computadores (diapositivas)",
    autor: "Máster en IA, UAX. Arquitectura de computadores y redes de comunicación",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/UD1. Arquitectura de computadores/MUIA_SM142052_UD1_Presentación.pdf",
    nota: "Diapositivas en PDF: citar por página del PDF. El ejemplo de binario a decimal de la p. 33 suma 91, no 109."
  },
  arq2: {
    corto: "Arquitectura UD2 teoría",
    titulo: "UD2. CPU, memoria y organización. Contenido teórico",
    autor: "Máster en IA, UAX. Arquitectura de computadores y redes de comunicación",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/UD2. CPU, memoria y organizacion/MUIA_SM142052_UD2_Contenido_teorico.pdf",
    nota: "Solo nombra el desbordamiento y el formato IEEE 754. Página PDF = impresa + 3."
  },
  szp1: {
    corto: "Stitz-Zeager 0.1",
    titulo: "Precalculus Prerequisites (cap. 0), sección 0.1: Basic Set Theory and Interval Notation",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/01-Aritmetica-basica/Unidad 01 - 0.1 Basic Set Theory and Interval Notation.pdf",
    nota: "Conjuntos de números, recta numérica e intervalos. Página impresa = página del archivo + 2."
  },
  szp2: {
    corto: "Stitz-Zeager 0.2",
    titulo: "Precalculus Prerequisites (cap. 0), sección 0.2: Real Number Arithmetic",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/01-Aritmetica-basica/Unidad 02 - 0.2 Real Number Arithmetic.pdf",
    nota: "Aritmética de los reales: fracciones, orden de operaciones, exponentes y notación científica. Página impresa = página del archivo + 17."
  },
  szp3: {
    corto: "Stitz-Zeager 0.3",
    titulo: "Precalculus Prerequisites (cap. 0), sección 0.3: Linear Equations and Inequalities",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/01-Aritmetica-basica/Unidad 03 - 0.3 Linear Equations and Inequalities.pdf",
    nota: "Ecuaciones y desigualdades lineales. Página impresa = página del archivo + 37."
  },
  szp4: {
    corto: "Stitz-Zeager 0.4",
    titulo: "Precalculus Prerequisites (cap. 0), sección 0.4: Absolute Value Equations and Inequalities",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/01-Aritmetica-basica/Unidad 04 - 0.4 Absolute Value Equations and Inequalities.pdf",
    nota: "Ecuaciones y desigualdades con valor absoluto. Página impresa = página del archivo + 50."
  },
  szp5: {
    corto: "Stitz-Zeager 0.5",
    titulo: "Precalculus Prerequisites (cap. 0), sección 0.5: Polynomial Arithmetic",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/01-Aritmetica-basica/Unidad 05 - 0.5 Polynomial Arithmetic.pdf",
    nota: "Operaciones con polinomios y productos notables. Página impresa = página del archivo + 59."
  },
  szp6: {
    corto: "Stitz-Zeager 0.6",
    titulo: "Precalculus Prerequisites (cap. 0), sección 0.6: Factoring",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/01-Aritmetica-basica/Unidad 06 - 0.6 Factoring.pdf",
    nota: "Factorización. Página impresa = página del archivo + 69."
  },
  szp7: {
    corto: "Stitz-Zeager 0.7",
    titulo: "Precalculus Prerequisites (cap. 0), sección 0.7: Quadratic Equations",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/01-Aritmetica-basica/Unidad 07 - 0.7 Quadratic Equations.pdf",
    nota: "Ecuaciones cuadráticas: completar el cuadrado y fórmula general. Página impresa = página del archivo + 82."
  },
  szp8: {
    corto: "Stitz-Zeager 0.8",
    titulo: "Precalculus Prerequisites (cap. 0), sección 0.8: Rational Expressions and Equations",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/01-Aritmetica-basica/Unidad 08 - 0.8 Rational Expressions and Equations.pdf",
    nota: "Expresiones y ecuaciones racionales. Página impresa = página del archivo + 95."
  },
  szp9: {
    corto: "Stitz-Zeager 0.9",
    titulo: "Precalculus Prerequisites (cap. 0), sección 0.9: Radicals and Equations",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/01-Aritmetica-basica/Unidad 09 - 0.9 Radicals and Equations.pdf",
    nota: "Radicales y exponentes racionales. Página impresa = página del archivo + 110."
  },
  szp10: {
    corto: "Stitz-Zeager 0.10",
    titulo: "Precalculus Prerequisites (cap. 0), sección 0.10: Complex Numbers",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/01-Aritmetica-basica/Unidad 10 - 0.10 Complex Numbers.pdf",
    nota: "Números complejos. Página impresa = página del archivo + 125."
  },
  prealg1: {
    corto: "OpenStax Prealgebra cap. 1",
    titulo: "Prealgebra 2e, cap. 1: Whole Numbers",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/02-Prealgebra/Unidad 01 - Whole Numbers.pdf",
    nota: "Números enteros positivos, recta y valor posicional. Página impresa = página del archivo + 6."
  },
  prealg2: {
    corto: "OpenStax Prealgebra cap. 2",
    titulo: "Prealgebra 2e, cap. 2: The Language of Algebra",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/02-Prealgebra/Unidad 02 - The Language of Algebra.pdf",
    nota: "Lenguaje del álgebra: orden de operaciones, exponentes, expresiones. Página impresa = página del archivo + 94."
  },
  prealg3: {
    corto: "OpenStax Prealgebra cap. 3",
    titulo: "Prealgebra 2e, cap. 3: Integers",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/02-Prealgebra/Unidad 03 - Integers.pdf",
    nota: "Enteros, opuestos y valor absoluto. Página impresa = página del archivo + 170."
  },
  prealg4: {
    corto: "OpenStax Prealgebra cap. 4",
    titulo: "Prealgebra 2e, cap. 4: Fractions",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/02-Prealgebra/Unidad 04 - Fractions.pdf",
    nota: "Fracciones. Página impresa = página del archivo + 252."
  },
  prealg5: {
    corto: "OpenStax Prealgebra cap. 5",
    titulo: "Prealgebra 2e, cap. 5: Decimals",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/02-Prealgebra/Unidad 05 - Decimals.pdf",
    nota: "Decimales, razones y tasas. Página impresa = página del archivo + 366."
  },
  prealg6: {
    corto: "OpenStax Prealgebra cap. 6",
    titulo: "Prealgebra 2e, cap. 6: Percents",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/02-Prealgebra/Unidad 06 - Percents.pdf",
    nota: "Porcentajes y proporciones. Página impresa = página del archivo + 466."
  },
  prealg7: {
    corto: "OpenStax Prealgebra cap. 7",
    titulo: "Prealgebra 2e, cap. 7: The Properties of Real Numbers",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/02-Prealgebra/Unidad 07 - The Properties of Real Numbers.pdf",
    nota: "Números racionales e irracionales y propiedades de los reales. Página impresa = página del archivo + 538."
  },
  prealg8: {
    corto: "OpenStax Prealgebra cap. 8",
    titulo: "Prealgebra 2e, cap. 8: Solving Linear Equations",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/02-Prealgebra/Unidad 08 - Solving Linear Equations.pdf",
    nota: "Ecuaciones lineales. Página impresa = página del archivo + 600."
  },
  prealg10: {
    corto: "OpenStax Prealgebra cap. 10",
    titulo: "Prealgebra 2e, cap. 10: Polynomials",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/02-Prealgebra/Unidad 10 - Polynomials.pdf",
    nota: "Polinomios, leyes de exponentes y notación científica. Página impresa = página del archivo + 778."
  },
  prealg11: {
    corto: "OpenStax Prealgebra cap. 11",
    titulo: "Prealgebra 2e, cap. 11: Graphs",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/02-Prealgebra/Unidad 11 - Graphs.pdf",
    nota: "Gráficas, plano cartesiano y pendiente. Página impresa = página del archivo + 864."
  },
  prealg12: {
    corto: "OpenStax Prealgebra cap. 12",
    titulo: "Prealgebra 2e, cap. 12: Apendices y Respuestas",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/02-Prealgebra/Unidad 12 - Apendices y Respuestas.pdf",
    nota: "Apéndices: tabla de potencias y raíces. Página impresa = página del archivo + 960."
  },
  alg1: {
    corto: "OpenStax Elementary Algebra, archivo 1",
    titulo: "Elementary Algebra 2e, archivo 1 (pp. 11 en adelante)",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/03-Algebra-I/Unidad 01 - Foundations.pdf",
    nota: "Contiene 1.2 variables y expresiones, 1.3 valor absoluto (el archivo no coincide con el capítulo de su nombre). Página impresa = página del archivo + 10."
  },
  alg2: {
    corto: "OpenStax Elementary Algebra, archivo 2",
    titulo: "Elementary Algebra 2e, archivo 2 (pp. 131 en adelante)",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/03-Algebra-I/Unidad 02 - Solving Linear Equations and Inequalities.pdf",
    nota: "Contiene 1.8-1.9 propiedad distributiva e inicio de 2.1 (el archivo no coincide con el capítulo de su nombre). Página impresa = página del archivo + 130."
  },
  alg3: {
    corto: "OpenStax Elementary Algebra, archivo 3",
    titulo: "Elementary Algebra 2e, archivo 3 (pp. 211 en adelante)",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/03-Algebra-I/Unidad 03 - Math Models.pdf",
    nota: "Contiene 2.1-2.7 ecuaciones y desigualdades lineales (el archivo no coincide con el capítulo de su nombre). Página impresa = página del archivo + 210."
  },
  alg4: {
    corto: "OpenStax Elementary Algebra, archivo 4",
    titulo: "Elementary Algebra 2e, archivo 4 (pp. 323 en adelante)",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/03-Algebra-I/Unidad 04 - Graphs.pdf",
    nota: "Contiene 4.1-4.4 plano y pendiente (el archivo no coincide con el capítulo de su nombre). Página impresa = página del archivo + 322."
  },
  alg5: {
    corto: "OpenStax Elementary Algebra, archivo 5",
    titulo: "Elementary Algebra 2e, archivo 5 (pp. 487 en adelante)",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/03-Algebra-I/Unidad 05 - Systems of Linear Equations.pdf",
    nota: "Contiene 4.5-4.7 forma pendiente-intercepto y 5.1 sistemas por gráfica (el archivo no coincide con el capítulo de su nombre). Página impresa = página del archivo + 486."
  },
  alg6: {
    corto: "OpenStax Elementary Algebra, archivo 6",
    titulo: "Elementary Algebra 2e, archivo 6 (pp. 595 en adelante)",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/03-Algebra-I/Unidad 06 - Polynomials.pdf",
    nota: "Contiene 5.2-5.3 sustitución y eliminación, 6.1-6.2 polinomios (el archivo no coincide con el capítulo de su nombre). Página impresa = página del archivo + 594."
  },
  alg7: {
    corto: "OpenStax Elementary Algebra, archivo 7",
    titulo: "Elementary Algebra 2e, archivo 7 (pp. 717 en adelante)",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/03-Algebra-I/Unidad 07 - Factoring.pdf",
    nota: "Contiene 6.3-6.7 productos, exponentes y notación científica, 7.1 factor común (el archivo no coincide con el capítulo de su nombre). Página impresa = página del archivo + 716."
  },
  alg8: {
    corto: "OpenStax Elementary Algebra, archivo 8",
    titulo: "Elementary Algebra 2e, archivo 8 (pp. 821 en adelante)",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/03-Algebra-I/Unidad 08 - Rational Expressions and Equations.pdf",
    nota: "Contiene 7.2-7.6 factorización, 8.1-8.3 expresiones racionales (el archivo no coincide con el capítulo de su nombre). Página impresa = página del archivo + 820."
  },
  alg9: {
    corto: "OpenStax Elementary Algebra, archivo 9",
    titulo: "Elementary Algebra 2e, archivo 9 (pp. 941 en adelante)",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/03-Algebra-I/Unidad 09 - Roots and Radicals.pdf",
    nota: "Contiene 8.4-8.9 racionales y proporciones, 9.1-9.3 raíces (el archivo no coincide con el capítulo de su nombre). Página impresa = página del archivo + 940."
  },
  alg10: {
    corto: "OpenStax Elementary Algebra, archivo 10",
    titulo: "Elementary Algebra 2e, archivo 10 (pp. 1065 en adelante)",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/03-Algebra-I/Unidad 10 - Quadratic Equations.pdf",
    nota: "Contiene 9.4-9.8 radicales, 10.1-10.3 ecuaciones cuadráticas (el archivo no coincide con el capítulo de su nombre). Página impresa = página del archivo + 1064."
  },
  alg11: {
    corto: "OpenStax Elementary Algebra, archivo 11",
    titulo: "Elementary Algebra 2e, archivo 11 (pp. 1193 en adelante)",
    autor: "Marecek, Anthony-Smith y Mathis (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/03-Algebra-I/Unidad 11 - Apendices y Respuestas.pdf",
    nota: "Contiene final de 10.3, 10.4 fórmula general y 10.5 la parábola (el archivo no coincide con el capítulo de su nombre). Página impresa = página del archivo + 1192."
  },
  sz1: {
    corto: "Stitz-Zeager cap. 1",
    titulo: "College Algebra, cap. 1: Relations and Functions",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/05-Algebra-II/Unidad 01 - Relations and Functions.pdf",
    nota: "Funciones, dominio y recorrido, transformaciones y funciones a trozos. Página impresa = página del archivo + 0."
  },
  sz2: {
    corto: "Stitz-Zeager cap. 2",
    titulo: "College Algebra, cap. 2: Linear and Quadratic Functions",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/05-Algebra-II/Unidad 02 - Linear and Quadratic Functions.pdf",
    nota: "Funciones lineales, valor absoluto, cuadráticas y desigualdades. Página impresa = página del archivo + 150."
  },
  sz3: {
    corto: "Stitz-Zeager cap. 3",
    titulo: "College Algebra, cap. 3: Polynomial Functions",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/05-Algebra-II/Unidad 03 - Polynomial Functions.pdf",
    nota: "Funciones polinómicas, ceros y multiplicidad. Página impresa = página del archivo + 234."
  },
  sz4: {
    corto: "Stitz-Zeager cap. 4",
    titulo: "College Algebra, cap. 4: Rational Functions",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/05-Algebra-II/Unidad 04 - Rational Functions.pdf",
    nota: "Funciones racionales y asíntotas. Página impresa = página del archivo + 300."
  },
  sz5: {
    corto: "Stitz-Zeager cap. 5",
    titulo: "College Algebra, cap. 5: Further Topics in Functions",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/05-Algebra-II/Unidad 05 - Further Topics in Functions.pdf",
    nota: "Composición e inversa. Página impresa = página del archivo + 358."
  },
  sz8: {
    corto: "Stitz-Zeager cap. 8",
    titulo: "College Algebra, cap. 8: Systems of Equations and Matrices",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/05-Algebra-II/Unidad 08 - Systems of Equations and Matrices.pdf",
    nota: "Sistemas de ecuaciones (8.1). Página impresa = página del archivo + 548."
  },
  sz9: {
    corto: "Stitz-Zeager cap. 9",
    titulo: "College Algebra, cap. 9: Sequences and the Binomial Theorem",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/05-Algebra-II/Unidad 09 - Sequences and the Binomial Theorem.pdf",
    nota: "Sucesiones, notación sigma y series. Página impresa = página del archivo + 650."
  },
  ostat0: {
    corto: "OpenStax Estadística preliminares",
    titulo: "Introductory Statistics 2e, preliminares: 00 - Portada y Preliminares",
    autor: "Illowsky y Dean (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/08-Probabilidad-y-estadistica/00 - Portada y Preliminares.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 0."
  },
  ostat1: {
    corto: "OpenStax Estadística cap. 1",
    titulo: "Introductory Statistics 2e, cap. 1: Unidad 01 - Sampling and Data",
    autor: "Illowsky y Dean (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/08-Probabilidad-y-estadistica/Unidad 01 - Sampling and Data.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 16."
  },
  ostat2: {
    corto: "OpenStax Estadística cap. 2",
    titulo: "Introductory Statistics 2e, cap. 2: Unidad 02 - Descriptive Statistics",
    autor: "Illowsky y Dean (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/08-Probabilidad-y-estadistica/Unidad 02 - Descriptive Statistics.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 76."
  },
  ostat3: {
    corto: "OpenStax Estadística cap. 3",
    titulo: "Introductory Statistics 2e, cap. 3: Unidad 03 - Probability Topics",
    autor: "Illowsky y Dean (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/08-Probabilidad-y-estadistica/Unidad 03 - Probability Topics.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 178."
  },
  ostat4: {
    corto: "OpenStax Estadística cap. 4",
    titulo: "Introductory Statistics 2e, cap. 4: Unidad 04 - Discrete Random Variables",
    autor: "Illowsky y Dean (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/08-Probabilidad-y-estadistica/Unidad 04 - Discrete Random Variables.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 238."
  },
  ostat5: {
    corto: "OpenStax Estadística cap. 5",
    titulo: "Introductory Statistics 2e, cap. 5: Unidad 05 - Continuous Random Variables",
    autor: "Illowsky y Dean (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/08-Probabilidad-y-estadistica/Unidad 05 - Continuous Random Variables.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 302."
  },
  ostat6: {
    corto: "OpenStax Estadística cap. 6",
    titulo: "Introductory Statistics 2e, cap. 6: Unidad 06 - The Normal Distribution",
    autor: "Illowsky y Dean (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/08-Probabilidad-y-estadistica/Unidad 06 - The Normal Distribution.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 346."
  },
  ostat7: {
    corto: "OpenStax Estadística cap. 7",
    titulo: "Introductory Statistics 2e, cap. 7: Unidad 07 - The Central Limit Theorem",
    autor: "Illowsky y Dean (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/08-Probabilidad-y-estadistica/Unidad 07 - The Central Limit Theorem.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 376."
  },
  ostat8: {
    corto: "OpenStax Estadística cap. 8",
    titulo: "Introductory Statistics 2e, cap. 8: Unidad 08 - Confidence Intervals",
    autor: "Illowsky y Dean (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/08-Probabilidad-y-estadistica/Unidad 08 - Confidence Intervals.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 416."
  },
  ostat9: {
    corto: "OpenStax Estadística cap. 9",
    titulo: "Introductory Statistics 2e, cap. 9: Unidad 09 - Hypothesis Testing with One Sample",
    autor: "Illowsky y Dean (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/08-Probabilidad-y-estadistica/Unidad 09 - Hypothesis Testing with One Sample.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 472."
  },
  ostat10: {
    corto: "OpenStax Estadística cap. 10",
    titulo: "Introductory Statistics 2e, cap. 10: Unidad 10 - Hypothesis Testing with Two Samples",
    autor: "Illowsky y Dean (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/08-Probabilidad-y-estadistica/Unidad 10 - Hypothesis Testing with Two Samples.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 522."
  },
  ostat11: {
    corto: "OpenStax Estadística cap. 11",
    titulo: "Introductory Statistics 2e, cap. 11: Unidad 11 - The Chi-Square Distribution",
    autor: "Illowsky y Dean (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/08-Probabilidad-y-estadistica/Unidad 11 - The Chi-Square Distribution.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 574."
  },
  ostat12: {
    corto: "OpenStax Estadística cap. 12",
    titulo: "Introductory Statistics 2e, cap. 12: Unidad 12 - Linear Regression and Correlation",
    autor: "Illowsky y Dean (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/08-Probabilidad-y-estadistica/Unidad 12 - Linear Regression and Correlation.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 628."
  },
  ostat13: {
    corto: "OpenStax Estadística cap. 13",
    titulo: "Introductory Statistics 2e, cap. 13: Unidad 13 - F Distribution and One-Way ANOVA",
    autor: "Illowsky y Dean (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/08-Probabilidad-y-estadistica/Unidad 13 - F Distribution and One-Way ANOVA.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 690."
  },
  ostat14: {
    corto: "OpenStax Estadística cap. 14",
    titulo: "Introductory Statistics 2e, cap. 14: Unidad 14 - Apendices e Indice",
    autor: "Illowsky y Dean (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/08-Probabilidad-y-estadistica/Unidad 14 - Apendices e Indice.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 730."
  },
  oint0: {
    corto: "OpenIntro preliminares",
    titulo: "OpenIntro Statistics 4e, preliminares: 00 - Portada y Preliminares",
    autor: "Diez, Çetinkaya-Rundel y Barr",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/11-Estadistica-avanzada/00 - Portada y Preliminares.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 0."
  },
  oint1: {
    corto: "OpenIntro cap. 1",
    titulo: "OpenIntro Statistics 4e, cap. 1: Unidad 01 - Introduction to Data",
    autor: "Diez, Çetinkaya-Rundel y Barr",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/11-Estadistica-avanzada/Unidad 01 - Introduction to Data.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 6."
  },
  oint2: {
    corto: "OpenIntro cap. 2",
    titulo: "OpenIntro Statistics 4e, cap. 2: Unidad 02 - Summarizing Data",
    autor: "Diez, Çetinkaya-Rundel y Barr",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/11-Estadistica-avanzada/Unidad 02 - Summarizing Data.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 40."
  },
  oint3: {
    corto: "OpenIntro cap. 3",
    titulo: "OpenIntro Statistics 4e, cap. 3: Unidad 03 - Probability",
    autor: "Diez, Çetinkaya-Rundel y Barr",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/11-Estadistica-avanzada/Unidad 03 - Probability.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 80."
  },
  oint4: {
    corto: "OpenIntro cap. 4",
    titulo: "OpenIntro Statistics 4e, cap. 4: Unidad 04 - Distributions of Random Variables",
    autor: "Diez, Çetinkaya-Rundel y Barr",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/11-Estadistica-avanzada/Unidad 04 - Distributions of Random Variables.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 128."
  },
  oint5: {
    corto: "OpenIntro cap. 5",
    titulo: "OpenIntro Statistics 4e, cap. 5: Unidad 05 - Foundations for Inference",
    autor: "Diez, Çetinkaya-Rundel y Barr",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/11-Estadistica-avanzada/Unidad 05 - Foundations for Inference.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 168."
  },
  oint6: {
    corto: "OpenIntro cap. 6",
    titulo: "OpenIntro Statistics 4e, cap. 6: Unidad 06 - Inference for Categorical Data",
    autor: "Diez, Çetinkaya-Rundel y Barr",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/11-Estadistica-avanzada/Unidad 06 - Inference for Categorical Data.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 208."
  },
  oint7: {
    corto: "OpenIntro cap. 7",
    titulo: "OpenIntro Statistics 4e, cap. 7: Unidad 07 - Inference for Numerical Data",
    autor: "Diez, Çetinkaya-Rundel y Barr",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/11-Estadistica-avanzada/Unidad 07 - Inference for Numerical Data.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 248."
  },
  oint8: {
    corto: "OpenIntro cap. 8",
    titulo: "OpenIntro Statistics 4e, cap. 8: Unidad 08 - Introduction to Linear Regression",
    autor: "Diez, Çetinkaya-Rundel y Barr",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/11-Estadistica-avanzada/Unidad 08 - Introduction to Linear Regression.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 304."
  },
  oint9: {
    corto: "OpenIntro cap. 9",
    titulo: "OpenIntro Statistics 4e, cap. 9: Unidad 09 - Multiple and Logistic Regression",
    autor: "Diez, Çetinkaya-Rundel y Barr",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/11-Estadistica-avanzada/Unidad 09 - Multiple and Logistic Regression.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 344."
  },
  oint10: {
    corto: "OpenIntro cap. 10",
    titulo: "OpenIntro Statistics 4e, cap. 10: Unidad 10 - Apendices y Ejercicios",
    autor: "Diez, Çetinkaya-Rundel y Barr",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/11-Estadistica-avanzada/Unidad 10 - Apendices y Ejercicios.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 388."
  },
  boyd0: {
    corto: "Boyd VMLS preliminares",
    titulo: "Introduction to Applied Linear Algebra (VMLS), preliminares: Portada y Preliminares",
    autor: "Boyd y Vandenberghe",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/14-Algebra-lineal/boyd-vmls-applied-linear-algebra - 00 - Portada y Preliminares.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 0."
  },
  boyd1: {
    corto: "Boyd VMLS cap. 1",
    titulo: "Introduction to Applied Linear Algebra (VMLS), cap. 1: Vectors",
    autor: "Boyd y Vandenberghe",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/14-Algebra-lineal/boyd-vmls-applied-linear-algebra - Unidad 01 - Vectors.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 10."
  },
  boyd2: {
    corto: "Boyd VMLS cap. 2",
    titulo: "Introduction to Applied Linear Algebra (VMLS), cap. 2: Matrices",
    autor: "Boyd y Vandenberghe",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/14-Algebra-lineal/boyd-vmls-applied-linear-algebra - Unidad 02 - Matrices.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 114."
  },
  boyd3: {
    corto: "Boyd VMLS cap. 3",
    titulo: "Introduction to Applied Linear Algebra (VMLS), cap. 3: Least Squares",
    autor: "Boyd y Vandenberghe",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/14-Algebra-lineal/boyd-vmls-applied-linear-algebra - Unidad 03 - Least Squares.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 232."
  },
  boyd4: {
    corto: "Boyd VMLS cap. 4",
    titulo: "Introduction to Applied Linear Algebra (VMLS), cap. 4: Appendices",
    autor: "Boyd y Vandenberghe",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/14-Algebra-lineal/boyd-vmls-applied-linear-algebra - Unidad 04 - Appendices.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 444."
  },
  calc1u0: {
    corto: "OpenStax Cálculo 1 preliminares",
    titulo: "Calculus Volume 1, preliminares: Portada y Preliminares",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/09-Calculo-I/openstax-calculus-volume-1 - 00 - Portada y Preliminares.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 0."
  },
  calc1u1: {
    corto: "OpenStax Cálculo 1 cap. 1",
    titulo: "Calculus Volume 1, cap. 1: Functions and Graphs",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/09-Calculo-I/openstax-calculus-volume-1 - Unidad 01 - Functions and Graphs.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 14."
  },
  calc1u2: {
    corto: "OpenStax Cálculo 1 cap. 2",
    titulo: "Calculus Volume 1, cap. 2: Limits",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/09-Calculo-I/openstax-calculus-volume-1 - Unidad 02 - Limits.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 130."
  },
  calc1u3: {
    corto: "OpenStax Cálculo 1 cap. 3",
    titulo: "Calculus Volume 1, cap. 3: Derivatives",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/09-Calculo-I/openstax-calculus-volume-1 - Unidad 03 - Derivatives.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 220."
  },
  calc1u4: {
    corto: "OpenStax Cálculo 1 cap. 4",
    titulo: "Calculus Volume 1, cap. 4: Applications of Derivatives",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/09-Calculo-I/openstax-calculus-volume-1 - Unidad 04 - Applications of Derivatives.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 348."
  },
  calc1u5: {
    corto: "OpenStax Cálculo 1 cap. 5",
    titulo: "Calculus Volume 1, cap. 5: Integration",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/09-Calculo-I/openstax-calculus-volume-1 - Unidad 05 - Integration.pdf",
    nota: "Archivo por unidad del libro: página impresa = página del archivo + 506; página del PDF del libro entero = página del archivo + 514."
  },
  calc1u6: {
    corto: "OpenStax Cálculo 1 cap. 6",
    titulo: "Calculus Volume 1, cap. 6: Applications of Integration",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/09-Calculo-I/openstax-calculus-volume-1 - Unidad 06 - Applications of Integration.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 630."
  },
  calc1u7: {
    corto: "OpenStax Cálculo 1 cap. 7",
    titulo: "Calculus Volume 1, cap. 7: Apendices y Soluciones",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/09-Calculo-I/openstax-calculus-volume-1 - Unidad 07 - Apendices y Soluciones.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 770."
  },
  calc3u0: {
    corto: "OpenStax Cálculo 3 preliminares",
    titulo: "Calculus Volume 3, preliminares: 00 - Portada y Preliminares",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/12-Calculo-multivariable/00 - Portada y Preliminares.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 0."
  },
  calc3u1: {
    corto: "OpenStax Cálculo 3 cap. 1",
    titulo: "Calculus Volume 3, cap. 1: Unidad 01 - Parametric Equations and Polar Coordinates",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/12-Calculo-multivariable/Unidad 01 - Parametric Equations and Polar Coordinates.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 14."
  },
  calc3u2: {
    corto: "OpenStax Cálculo 3 cap. 2",
    titulo: "Calculus Volume 3, cap. 2: Unidad 02 - Vectors in Space",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/12-Calculo-multivariable/Unidad 02 - Vectors in Space.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 108."
  },
  calc3u3: {
    corto: "OpenStax Cálculo 3 cap. 3",
    titulo: "Calculus Volume 3, cap. 3: Unidad 03 - Vector-Valued Functions",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/12-Calculo-multivariable/Unidad 03 - Vector-Valued Functions.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 266."
  },
  calc3u4: {
    corto: "OpenStax Cálculo 3 cap. 4",
    titulo: "Calculus Volume 3, cap. 4: Unidad 04 - Differentiation of Functions of Several Variables",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/12-Calculo-multivariable/Unidad 04 - Differentiation of Functions of Several Variables.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 340."
  },
  calc3u5: {
    corto: "OpenStax Cálculo 3 cap. 5",
    titulo: "Calculus Volume 3, cap. 5: Unidad 05 - Multiple Integration",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/12-Calculo-multivariable/Unidad 05 - Multiple Integration.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 484."
  },
  calc3u6: {
    corto: "OpenStax Cálculo 3 cap. 6",
    titulo: "Calculus Volume 3, cap. 6: Unidad 06 - Vector Calculus",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/12-Calculo-multivariable/Unidad 06 - Vector Calculus.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 648."
  },
  calc3u7: {
    corto: "OpenStax Cálculo 3 cap. 7",
    titulo: "Calculus Volume 3, cap. 7: Unidad 07 - Second-Order Differential Equations",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/12-Calculo-multivariable/Unidad 07 - Second-Order Differential Equations.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 838."
  },
  calc3u8: {
    corto: "OpenStax Cálculo 3 cap. 8",
    titulo: "Calculus Volume 3, cap. 8: Unidad 08 - Apendices y Soluciones",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/12-Calculo-multivariable/Unidad 08 - Apendices y Soluciones.pdf",
    nota: "Archivo por unidad del libro: página del libro entero = página del archivo + 904."
  },
  geom1: {
    corto: "Africk geometría u1",
    titulo: "Elementary College Geometry, unidad 1: Lines, Angles, and Triangles",
    autor: "Henry Africk",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/04-Geometria/Unidad 01 - Lines, Angles, and Triangles.pdf",
    nota: "Archivo por unidad. La página impresa es la \"sección.página\" del pie y no hay desfase constante: el mapa trae la conversión por archivo."
  },
  geom2: {
    corto: "Africk geometría u2",
    titulo: "Elementary College Geometry, unidad 2: Congruent Triangles",
    autor: "Henry Africk",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/04-Geometria/Unidad 02 - Congruent Triangles.pdf",
    nota: "Archivo por unidad. La página impresa es la \"sección.página\" del pie y no hay desfase constante: el mapa trae la conversión por archivo."
  },
  geom3: {
    corto: "Africk geometría u3",
    titulo: "Elementary College Geometry, unidad 3: Quadrilaterals",
    autor: "Henry Africk",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/04-Geometria/Unidad 03 - Quadrilaterals.pdf",
    nota: "Archivo por unidad. La página impresa es la \"sección.página\" del pie y no hay desfase constante: el mapa trae la conversión por archivo."
  },
  geom4: {
    corto: "Africk geometría u4",
    titulo: "Elementary College Geometry, unidad 4: Similar Triangles",
    autor: "Henry Africk",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/04-Geometria/Unidad 04 - Similar Triangles.pdf",
    nota: "Archivo por unidad. La página impresa es la \"sección.página\" del pie y no hay desfase constante: el mapa trae la conversión por archivo."
  },
  geom5: {
    corto: "Africk geometría u5",
    titulo: "Elementary College Geometry, unidad 5: Trigonometry and Right Triangles",
    autor: "Henry Africk",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/04-Geometria/Unidad 05 - Trigonometry and Right Triangles.pdf",
    nota: "Archivo por unidad. La página impresa es la \"sección.página\" del pie y no hay desfase constante: el mapa trae la conversión por archivo."
  },
  geom6: {
    corto: "Africk geometría u6",
    titulo: "Elementary College Geometry, unidad 6: Area and Perimeter",
    autor: "Henry Africk",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/04-Geometria/Unidad 06 - Area and Perimeter.pdf",
    nota: "Archivo por unidad. La página impresa es la \"sección.página\" del pie y no hay desfase constante: el mapa trae la conversión por archivo."
  },
  geom7: {
    corto: "Africk geometría u7",
    titulo: "Elementary College Geometry, unidad 7: Regular Polygons and Circles",
    autor: "Henry Africk",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/04-Geometria/Unidad 07 - Regular Polygons and Circles.pdf",
    nota: "Archivo por unidad. La página impresa es la \"sección.página\" del pie y no hay desfase constante: el mapa trae la conversión por archivo."
  },
  geom8: {
    corto: "Africk geometría u8",
    titulo: "Elementary College Geometry, unidad 8: Apéndice y fórmulas",
    autor: "Henry Africk",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/04-Geometria/Unidad 08 - Apendice y Formulas.pdf",
    nota: "Archivo por unidad. La página impresa es la \"sección.página\" del pie y no hay desfase constante: el mapa trae la conversión por archivo."
  },
  calc2u1: {
    corto: "OpenStax Cálculo 2 cap. 1",
    titulo: "Calculus Volume 2, cap. 1: Integration",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/10-Calculo-II/Unidad 01 - Integration.pdf",
    nota: "Archivo por unidad de Calculus Volume 2. El mapa de citas da la relación entre la página del archivo y la impresa."
  },
  calc2u2: {
    corto: "OpenStax Cálculo 2 cap. 2",
    titulo: "Calculus Volume 2, cap. 2: Applications of Integration",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/10-Calculo-II/Unidad 02 - Applications of Integration.pdf",
    nota: "Archivo por unidad de Calculus Volume 2. El mapa de citas da la relación entre la página del archivo y la impresa."
  },
  calc2u3: {
    corto: "OpenStax Cálculo 2 cap. 3",
    titulo: "Calculus Volume 2, cap. 3: Techniques of Integration",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/10-Calculo-II/Unidad 03 - Techniques of Integration.pdf",
    nota: "Archivo por unidad: página impresa = página del archivo + 230."
  },
  calc2u4: {
    corto: "OpenStax Cálculo 2 cap. 4",
    titulo: "Calculus Volume 2, cap. 4: Introduction to Differential Equations",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/10-Calculo-II/Unidad 04 - Introduction to Differential Equations.pdf",
    nota: "Archivo por unidad: página impresa = página del archivo + 306."
  },
  calc2u5: {
    corto: "OpenStax Cálculo 2 cap. 5",
    titulo: "Calculus Volume 2, cap. 5: Sequences and Series",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/10-Calculo-II/Unidad 05 - Sequences and Series.pdf",
    nota: "Archivo por unidad: página impresa = página del archivo + 372."
  },
  calc2u6: {
    corto: "OpenStax Cálculo 2 cap. 6",
    titulo: "Calculus Volume 2, cap. 6: Power Series",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/10-Calculo-II/Unidad 06 - Power Series.pdf",
    nota: "Archivo por unidad: página impresa = página del archivo + 468."
  },
  calc2u7: {
    corto: "OpenStax Cálculo 2 cap. 7",
    titulo: "Calculus Volume 2, cap. 7: Parametric Equations and Polar Coordinates",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/10-Calculo-II/Unidad 07 - Parametric Equations and Polar Coordinates.pdf",
    nota: "Archivo por unidad de Calculus Volume 2. El mapa de citas da la relación entre la página del archivo y la impresa."
  },
  calc2u8: {
    corto: "OpenStax Cálculo 2 cap. 8",
    titulo: "Calculus Volume 2, cap. 8: Tablas, Respuestas e Indice",
    autor: "Strang, Herman y otros (OpenStax)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/10-Calculo-II/Unidad 08 - Tablas, Respuestas e Indice.pdf",
    nota: "Archivo por unidad de Calculus Volume 2. El mapa de citas da la relación entre la página del archivo y la impresa."
  },
  trig11: {
    corto: "Stitz-Zeager Trigonometría cap. 11",
    titulo: "College Trigonometry, cap. 11: Applications of Trigonometry",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/06-Trigonometria/Unidad 02 - Cap 11 Applications of Trigonometry.pdf",
    nota: "Coordenadas polares, números complejos en forma polar y cónicas con foco y directriz. Página impresa = página del archivo + 880."
  },
  conic7: {
    corto: "Stitz-Zeager Cónicas",
    titulo: "Precalculus, cap. 7: Hooked on Conics",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/07-Precalculo/Unidad 07 - Hooked on Conics.pdf",
    nota: "Círculo, parábola, elipse e hipérbola con sus ecuaciones. Página impresa = página del archivo + 494."
  },
  trig10: {
    corto: "Stitz-Zeager Trigonometría cap. 10",
    titulo: "College Trigonometry, cap. 10: Foundations of Trigonometry",
    autor: "Carl Stitz y Jeff Zeager",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/06-Trigonometria/Unidad 01 - Cap 10 Foundations of Trigonometry.pdf",
    nota: "Ángulos, círculo unitario, funciones trigonométricas, identidades, gráficas, inversas y ecuaciones. Página impresa = página del archivo + 692."
  },
  hef1: {
    corto: "Hefferon cap. 1",
    titulo: "Linear Algebra, cap. 1: Linear Systems",
    autor: "Jim Hefferon",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/14-Algebra-lineal/hefferon-linear-algebra - Unidad 01 - Linear Systems.pdf",
    nota: "Eliminación gaussiana y forma escalonada. Página impresa = página del archivo."
  },
  hef2: {
    corto: "Hefferon cap. 2",
    titulo: "Linear Algebra, cap. 2: Vector Spaces",
    autor: "Jim Hefferon",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/14-Algebra-lineal/hefferon-linear-algebra - Unidad 02 - Vector Spaces.pdf",
    nota: "Independencia lineal, base, dimensión y rango. Página impresa = página del archivo + 82."
  },
  hef3: {
    corto: "Hefferon cap. 3",
    titulo: "Linear Algebra, cap. 3: Maps Between Spaces",
    autor: "Jim Hefferon",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/14-Algebra-lineal/hefferon-linear-algebra - Unidad 03 - Maps Between Spaces.pdf",
    nota: "Transformaciones lineales, rango y nulidad, y matrices ortonormales 2x2. Página impresa = página del archivo + 172."
  },
  hef5: {
    corto: "Hefferon cap. 5",
    titulo: "Linear Algebra, cap. 5: Similarity",
    autor: "Jim Hefferon",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/14-Algebra-lineal/hefferon-linear-algebra - Unidad 05 - Similarity.pdf",
    nota: "Diagonalización y valores propios (sobre los complejos). Página impresa = página del archivo + 396."
  },
  trench1: {
    corto: "Trench cap. 1",
    titulo: "Elementary Differential Equations, cap. 1: Introduction",
    autor: "William F. Trench",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/13-Ecuaciones-diferenciales/Unidad 01 - Introduction.pdf",
    nota: "Qué es una ecuación diferencial, orden, solución y campos de direcciones. Página impresa = página del archivo."
  },
  trench2: {
    corto: "Trench cap. 2",
    titulo: "Elementary Differential Equations, cap. 2: First Order Equations",
    autor: "William F. Trench",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/13-Ecuaciones-diferenciales/Unidad 02 - First Order Equations.pdf",
    nota: "Ecuaciones lineales, separables, exactas y cambios de variable. Página impresa = página del archivo + 28."
  },
  trench3: {
    corto: "Trench cap. 3",
    titulo: "Elementary Differential Equations, cap. 3: Numerical Methods",
    autor: "William F. Trench",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/13-Ecuaciones-diferenciales/Unidad 03 - Numerical Methods.pdf",
    nota: "Método de Euler, Euler mejorado y Runge-Kutta. Página impresa = página del archivo + 94."
  },
  trench4: {
    corto: "Trench cap. 4",
    titulo: "Elementary Differential Equations, cap. 4: Applications of First Order Equations",
    autor: "William F. Trench",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/13-Ecuaciones-diferenciales/Unidad 04 - Applications of First Order Equations.pdf",
    nota: "Crecimiento, enfriamiento, mezclas y modelos de poblaciones. Página impresa = página del archivo + 128."
  },
  trench5: {
    corto: "Trench cap. 5",
    titulo: "Elementary Differential Equations, cap. 5: Linear Second Order Equations",
    autor: "William F. Trench",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/13-Ecuaciones-diferenciales/Unidad 05 - Linear Second Order Equations.pdf",
    nota: "Ecuaciones lineales de segundo orden, raíces de la ecuación característica. Página impresa = página del archivo + 192."
  },
  trench6: {
    corto: "Trench cap. 6",
    titulo: "Elementary Differential Equations, cap. 6: Applications of Linear Second Order Equations",
    autor: "William F. Trench",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/13-Ecuaciones-diferenciales/Unidad 06 - Applications of Linear Second Order Equations.pdf",
    nota: "Resortes, oscilaciones amortiguadas, circuitos y resonancia. Página impresa = página del archivo + 266."
  },
  arq2diapo: {
    corto: "Arquitectura UD2 diapositivas",
    titulo: "UD2. CPU, memoria y organización (diapositivas)",
    autor: "Máster en IA, UAX. Arquitectura de computadores y redes de comunicación",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/UD2. CPU, memoria y organizacion/MUIA_SM142052_UD2_Presentacion.pdf",
    nota: "Diapositivas en PDF: citar por página del PDF (PDF = impresa)."
  },
  arq2ej: {
    corto: "Arquitectura UD2 ejercicio",
    titulo: "UD2. Ejercicio con solución (roofline CPU y GPU)",
    autor: "Máster en IA, UAX. Arquitectura de computadores y redes de comunicación",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/UD2. CPU, memoria y organizacion/MUIA_SM142052_UD2_Ejercicio_con_solucion.pdf",
    nota: "Página impresa = página del PDF - 1. Tiene erratas en el cálculo del pico de la CPU y en el roofline: el mapa las lista."
  },
  arq2enun: {
    corto: "Arquitectura UD2 enunciado",
    titulo: "UD2. Ejercicio (enunciado)",
    autor: "Máster en IA, UAX. Arquitectura de computadores y redes de comunicación",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/UD1. Arquitectura de computadores/MUIA_SM142052_UD2_Ejercicio.pdf",
    nota: "Enunciado suelto en la carpeta de la UD1. Página impresa = página del PDF - 2."
  },
  arq3: {
    corto: "Arquitectura UD3 teoría",
    titulo: "UD3. E/S y periféricos. Contenido teórico",
    autor: "Máster en IA, UAX. Arquitectura de computadores y redes de comunicación",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/UD3. E-S y perifericos/MUIA_SM142052_UD3_Contenido_teórico.pdf",
    nota: "Entrada y salida, interrupciones, DMA, discos y RAID. Página PDF = impresa + 3."
  },
  arq3diapo: {
    corto: "Arquitectura UD3 diapositivas",
    titulo: "UD3. E/S y periféricos (diapositivas)",
    autor: "Máster en IA, UAX. Arquitectura de computadores y redes de comunicación",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/UD3. E-S y perifericos/MUIA_SM142052_UD3_Presentación.pdf",
    nota: "Diapositivas en PDF: citar por página del PDF (PDF = impresa)."
  },
  red4: {
    corto: "Redes UD4 teoría",
    titulo: "UD4. Fundamentos de redes. Contenido teórico",
    autor: "Máster en IA, UAX. Arquitectura de computadores y redes de comunicación",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/UD4. Fundamentos de redes/MUIA_SM142052_UD4_Contenido_teorico.pdf",
    nota: "Modelo OSI, direccionamiento IP, máscaras y CIDR. Página impresa = página del PDF - 2."
  },
  red4diapo: {
    corto: "Redes UD4 diapositivas",
    titulo: "UD4. Fundamentos de redes (diapositivas)",
    autor: "Máster en IA, UAX. Arquitectura de computadores y redes de comunicación",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/UD4. Fundamentos de redes/MUIA_SM142052_UD4_Presentación.pdf",
    nota: "Diapositivas en PDF: citar por página del PDF (PDF = impresa)."
  },
  red5: {
    corto: "Redes UD5 teoría",
    titulo: "UD5. Tecnologías y protocolos. Contenido teórico",
    autor: "Máster en IA, UAX. Arquitectura de computadores y redes de comunicación",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/UD5. Tecnologias y protocolos/MUIA_SM142052_UD5_Contenido_teórico.pdf",
    nota: "Switch, VLAN, routing, TCP, DNS y HTTP. Página impresa = página del PDF - 3."
  },
  red5diapo: {
    corto: "Redes UD5 diapositivas",
    titulo: "UD5. Tecnologías y protocolos (diapositivas)",
    autor: "Máster en IA, UAX. Arquitectura de computadores y redes de comunicación",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/UD5. Tecnologias y protocolos/MUIA_SM142052_UD5_Presentación.pdf",
    nota: "Diapositivas en PDF: citar por página del PDF (PDF = impresa)."
  },
  red6: {
    corto: "Redes UD6 teoría",
    titulo: "UD6. Seguridad en redes. Contenido teórico",
    autor: "Máster en IA, UAX. Arquitectura de computadores y redes de comunicación",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/UD6. Seguridad en redes/MUIA_SM142052_UD6_Contenido_teorico.pdf",
    nota: "Cortafuegos, VPN, cifrado, TLS y buenas prácticas. Página impresa = página del PDF - 3."
  },
  red6diapo: {
    corto: "Redes UD6 diapositivas",
    titulo: "UD6. Seguridad en redes (diapositivas)",
    autor: "Máster en IA, UAX. Arquitectura de computadores y redes de comunicación",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/UD6. Seguridad en redes/MUIA_SM142052_UD6_Presentación.pdf",
    nota: "Diapositivas en PDF: citar por página del PDF (PDF = impresa)."
  },
  red5ej: {
    corto: "Redes UD5 ejercicio",
    titulo: "UD5. Ejercicio con solución (subredes y VLAN)",
    autor: "Máster en IA, UAX. Arquitectura de computadores y redes de comunicación",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/UD5. Tecnologias y protocolos/MUIA_SM142052_UD5_Ejercicio_con_solucion.pdf",
    nota: "Página impresa = página del PDF - 1."
  },
  bd1: {
    corto: "BD UD1 teoría",
    titulo: "UD1. Fundamentos de BD. Contenido teórico",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/UD1. Fundamentos de BD/MUIA_SM142051_UD1_Contenido_teorico.pdf",
    nota: "Modelo relacional, claves y SGBD. Página impresa = página del PDF - 2."
  },
  bd1diapo: {
    corto: "BD UD1 diapositivas",
    titulo: "UD1. Fundamentos de BD (diapositivas)",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/UD1. Fundamentos de BD/MUIA_SM142051_UD1_Presentacion.pdf",
    nota: "Diapositivas en PDF: citar por página del PDF (PDF = impresa)."
  },
  bd2: {
    corto: "BD UD2 teoría",
    titulo: "UD2. SQL. Contenido teórico",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/UD2. SQL/MUIA_SM142051_UD2_Contenido_teórico.pdf",
    nota: "SQL: SELECT, JOIN, GROUP BY y subconsultas. Página impresa = página del PDF - 3."
  },
  bd2diapo: {
    corto: "BD UD2 diapositivas",
    titulo: "UD2. SQL (diapositivas)",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/UD2. SQL/MUIA_SM142051_UD2_Presentacion.pdf",
    nota: "Diapositivas en PDF: citar por página del PDF (PDF = impresa)."
  },
  bd3: {
    corto: "BD UD3 teoría",
    titulo: "UD3. Modelado conceptual. Contenido teórico",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/UD3. Modelado conceptual/MUIA_SM142051_UD3_Contenido_teorico.pdf",
    nota: "Modelo entidad-relación y cardinalidad. Página impresa = página del PDF - 2."
  },
  bd3diapo: {
    corto: "BD UD3 diapositivas",
    titulo: "UD3. Modelado conceptual (diapositivas)",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/UD3. Modelado conceptual/MUIA_SM142051_UD3_Presentación.pdf",
    nota: "Diapositivas en PDF: citar por página del PDF (PDF = impresa)."
  },
  bd4: {
    corto: "BD UD4 teoría",
    titulo: "UD4. Diseño e implementación. Contenido teórico",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/UD4. Diseno e implementacion/MUIA_SM142051_UD4_Contenido_teórico.pdf",
    nota: "E-R a tablas, normalización, índices y vectores. Página impresa = página del PDF - 3."
  },
  bd4diapo: {
    corto: "BD UD4 diapositivas",
    titulo: "UD4. Diseño e implementación (diapositivas)",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/UD4. Diseno e implementacion/MUIA_SM142051_UD4_Presentacion.pdf",
    nota: "Diapositivas en PDF: citar por página del PDF (PDF = impresa)."
  },
  bd5: {
    corto: "BD UD5 teoría",
    titulo: "UD5. Integración programación-BD. Contenido teórico",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/UD5. Integracion programacion-BD/MUIA_SM142051_UD5_Contenido_teorico.pdf",
    nota: "ORM, conexión desde código, transacciones e inyección SQL. Página impresa = página del PDF - 2."
  },
  bd5diapo: {
    corto: "BD UD5 diapositivas",
    titulo: "UD5. Integración programación-BD (diapositivas)",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/UD5. Integracion programacion-BD/MUIA_SM142051_UD5_Presentacion.pdf",
    nota: "Diapositivas en PDF: citar por página del PDF (PDF = impresa)."
  },
  bd6: {
    corto: "BD UD6 teoría",
    titulo: "UD6. Seguridad en BD. Contenido teórico",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/UD6. Seguridad en BD/MUIA_SM142051_UD6_Contenido_teórico.pdf",
    nota: "Roles, cifrado, auditoría y copias de seguridad. Página impresa = página del PDF - 3 (solo la primera página lleva número)."
  },
  bd6diapo: {
    corto: "BD UD6 diapositivas",
    titulo: "UD6. Seguridad en BD (diapositivas)",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/UD6. Seguridad en BD/MUIA_SM142051_UD6_Presentacion.pdf",
    nota: "Diapositivas en PDF: citar por página del PDF (PDF = impresa)."
  },
  bd1cuest: {
    corto: "BD UD1 cuestionario",
    titulo: "UD1. Cuestionario de autoevaluación (revisión del intento)",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/UD1. Fundamentos de BD/Cuestionario de autoevaluación UD1: Revisión del intento | UAX.pdf",
    nota: "Cinco páginas sin numeración impresa."
  },
  bd2ej: {
    corto: "BD UD2 ejercicio",
    titulo: "UD2. Ejercicio con solución (tienda en línea)",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/UD2. SQL/MUIA_SM142051_UD2_Ejercicio_con_solucion.pdf",
    nota: "Página impresa = página del PDF - 1. La solución tiene erratas: el mapa las lista."
  },
  bd2enun: {
    corto: "BD UD2 enunciado",
    titulo: "UD2. Ejercicio (enunciado)",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/UD2. SQL/MUIA_SM142051_UD2_Ejercicio.pdf",
    nota: "Página impresa = página del PDF - 1."
  },
  bd5ej: {
    corto: "BD UD5 ejercicio",
    titulo: "UD5. Ejercicio con solución",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/UD5. Integracion programacion-BD/MUIA_SM142051_UD5_Ejercicio_con_solucion.pdf",
    nota: "Página impresa = página del PDF - 1."
  },
  bdpf: {
    corto: "BD proyecto final",
    titulo: "Proyecto final de Base de datos",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/07 Proyecto final/MUIA_SM142051_Proyecto Final.pdf",
    nota: "Página impresa = página del PDF - 1."
  },
  bdguia: {
    corto: "BD guía",
    titulo: "Guía de aprendizaje de Base de datos",
    autor: "Máster en IA, UAX. Bases de datos",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142051 - Base de Datos/00 Bienvenida - guia y cronograma/MUIA_SM142051_Guia de aprendizaje BBDD.pdf",
    nota: "Página impresa = página del PDF - 1."
  },
  prog1: {
    corto: "Programación UD1 teoría",
    titulo: "UD1. Python, IDEs y SQL. Contenido teórico",
    autor: "Máster en IA, UAX. Programación y entorno de trabajo para la IA",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142002 - Programacion y entorno de trabajo para la IA/UD1. Python, IDEs y SQL/SM142002_MUIA_UD1_CONTENIDO TEÓRICO.pdf",
    nota: "Python, NumPy, pandas, entornos y SQL. Página PDF = impresa."
  },
  prog4: {
    corto: "Programación UD4 teoría",
    titulo: "UD4. R. Contenido teórico",
    autor: "Máster en IA, UAX. Programación y entorno de trabajo para la IA",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142002 - Programacion y entorno de trabajo para la IA/UD4. R/SM142002_MUIA_UD4_CONTENIDO TEÓRICO.pdf",
    nota: "Vectores, matrices, data frames y listas en R. Página PDF = impresa."
  },
  prog4html: {
    corto: "Programación UD4 clase",
    titulo: "UD4. Módulo 1 - Programación en R (documento de clase)",
    autor: "Máster en IA, UAX. Programación y entorno de trabajo para la IA",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142002 - Programacion y entorno de trabajo para la IA/UD4. R/Módulo 1 - Programación en R.html",
    nota: "Documento Quarto de clase: citar con data-ancla (id de sección sin #).",
    tipo: "documento"
  },
  eda5doc: {
    corto: "Programación UD5 EDA I",
    titulo: "Unidad 5. EDA I (documento de clase)",
    autor: "Máster en IA, UAX. Programación y entorno de trabajo para la IA",
    archivo: "/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142002 - Programacion y entorno de trabajo para la IA/UD5. R/Unidad 5 - EDA I.html",
    nota: "tidyverse, dplyr, el pipe y ggplot2. Citar con data-ancla (id de sección sin #).",
    tipo: "documento"
  },
  thinpython: {
    corto: "Think Python",
    titulo: "Think Python, 2.ª edición",
    autor: "Allen B. Downey",
    archivo: "/Users/franciscocastillo/Desktop/Libros/Think_Python_1748353929.pdf",
    nota: "Python desde cero con diagramas de pila y de alias; es Python puro, sin NumPy ni pandas. Página PDF = impresa + 21. Mapa: brain/fuentes/think-python.md."
  },
  pyworkout: {
    corto: "Python Workout",
    titulo: "Python Workout: 50 ten-minute exercises",
    autor: "Reuven Lerner",
    archivo: "/Users/franciscocastillo/Desktop/Libros/Python Workout 50 ten-minute exercises.pdf",
    nota: "Cincuenta ejercicios de Python puro (cadenas, listas, diccionarios, archivos, funciones, objetos, generadores). Sirve de modelo para retos. Página PDF = impresa + 26. Mapa: brain/fuentes/python-workout.md."
  },
  islr2: {
    corto: "ISLR2",
    titulo: "An Introduction to Statistical Learning with Applications in R, 2.ª edición (impresión corregida de junio de 2023)",
    autor: "James, Witten, Hastie y Tibshirani",
    archivo: "/Users/franciscocastillo/Downloads/ISLRv2_corrected_June_2023.pdf",
    nota: "Teoría y laboratorios en R de regresión, remuestreo, regularización, árboles, SVM, PCA y agrupamiento. Usa R base y paquetes por tema, sin tidyverse. Página PDF = impresa + 11. Mapa: brain/fuentes/islr2-r.md."
  }
};
