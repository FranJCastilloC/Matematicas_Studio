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
  openstax: {
    corto: "OpenStax Statistics",
    titulo: "Introductory Statistics, 2.ª edición",
    autor: "OpenStax (Illowsky y Dean)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/08-Probabilidad-y-estadistica/openstax-introductory-statistics-2e.pdf",
    nota: "El libro de texto de base: probabilidad, distribuciones, TCL, intervalos y contrastes, con muchos ejemplos. Página PDF = impresa + 12."
  },
  openintro: {
    corto: "OpenIntro",
    titulo: "OpenIntro Statistics, 4.ª edición",
    autor: "Diez, Çetinkaya-Rundel y Barr",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/11-Estadistica-avanzada/https::www.biostat.jhsph.edu:~iruczins:teaching:books:2019.openintro.statistics.pdf",
    nota: "Probabilidad e inferencia explicadas con datos reales y ejercicios guiados. Página PDF = impresa."
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
    titulo: "UD6. Caso: estaciones meteorológicas",
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
  boyd: {
    corto: "Boyd VMLS",
    titulo: "Introduction to Applied Linear Algebra: Vectors, Matrices, and Least Squares",
    autor: "Stephen Boyd y Lieven Vandenberghe",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/14-Algebra-lineal/boyd-vmls-applied-linear-algebra.pdf",
    nota: "Álgebra lineal aplicada: normas, distancias, mínimos cuadrados, ajuste de datos y regularización. Página PDF = impresa + 10."
  },
  calculo1: {
    corto: "OpenStax Cálculo 1",
    titulo: "Calculus Volume 1",
    autor: "OpenStax (Strang y Herman)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/09-Calculo-I/openstax-calculus-volume-1.pdf",
    nota: "Exponenciales y logaritmos, límites, derivadas y sus aplicaciones, con muchos ejemplos. Página PDF = impresa + 8."
  },
  calculo3: {
    corto: "OpenStax Cálculo 3",
    titulo: "Calculus Volume 3",
    autor: "OpenStax (Strang y Herman)",
    archivo: "/Users/franciscocastillo/brain/03-Matematicas/12-Calculo-multivariable/openstax-calculus-volume-3.pdf",
    nota: "Funciones de varias variables: curvas de nivel, derivadas parciales, gradiente, máximos y Lagrange. Página PDF = impresa + 8."
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
  }
};
