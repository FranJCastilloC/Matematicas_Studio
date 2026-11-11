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
  jansen13: {
    corto: "Jansen cap. 13",
    titulo: "Machine Learning for Algorithmic Trading, cap. 13: Data-Driven Risk Factors and Asset Allocation with Unsupervised Learning",
    autor: "Stefan Jansen",
    archivo: "/Users/franciscocastillo/brain/02-Biblioteca/Finanzas-ML/ML4T/Cap13 - Data-Driven Risk Factors and Asset Allocation with Unsupervised Learning.pdf",
    nota: "PCA aplicado a retornos de acciones: factores de riesgo y eigenportfolios."
  }
};
