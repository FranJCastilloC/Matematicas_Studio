/*
  Registro de fuentes de la biblioteca: los libros y el material del máster que las páginas citan.
  Cada cita en una página apunta a una fuente de acá por su id, más la página del PDF.

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
    archivo: "/Users/franciscocastillo/brain/Academic/Master IA UAX/SM142001 - Matematicas y estadistica para la IA/UD1. Estadística descriptiva y análisis/SM142001_MUIA_UD1_CONTENIDO TEÓRICO-2.pdf",
    nota: "El material oficial de la unidad. Es la versión que te van a evaluar."
  },
  ud1slides: {
    corto: "UD1 diapositivas",
    titulo: "Unidad 1. Diapositivas",
    autor: "Máster en IA, UAX",
    archivo: "/Users/franciscocastillo/brain/Academic/Master IA UAX/SM142001 - Matematicas y estadistica para la IA/UD1. Estadística descriptiva y análisis/V2k8es-Unidad_1.pdf",
    nota: "Las diapositivas de clase, más visuales y resumidas que el contenido teórico."
  },
  raschka5: {
    corto: "Raschka cap. 5",
    titulo: "Machine Learning with PyTorch and Scikit-Learn, cap. 5: Compressing Data via Dimensionality Reduction",
    autor: "Raschka, Liu y Mirjalili",
    archivo: "/Users/franciscocastillo/brain/Machine Learning/Dimensional Reduction/Cap05 - Compressing Data via Dimensionality Reduction.pdf",
    nota: "PCA, LDA y t-SNE con el dataset Wine, paso a paso en Python y después con scikit-learn."
  },
  nield3: {
    corto: "Nield cap. 3",
    titulo: "Essential Math for Data Science, cap. 3: Descriptive and Inferential Statistics",
    autor: "Thomas Nield",
    archivo: "/Users/franciscocastillo/brain/Math/Essential Math for Data Science/03 Cap 3 Descriptive and Inferential Statistics.pdf",
    nota: "Media, mediana, moda, varianza y desviación con código Python mínimo."
  },
  nield4: {
    corto: "Nield cap. 4",
    titulo: "Essential Math for Data Science, cap. 4: Linear Algebra",
    autor: "Thomas Nield",
    archivo: "/Users/franciscocastillo/brain/Math/Essential Math for Data Science/04 Cap 4 Linear Algebra.pdf",
    nota: "Vectores, matrices como transformaciones, determinante y eigenvectores, con NumPy."
  },
  brasil3: {
    corto: "Brasil cap. 3",
    titulo: "Before Machine Learning, vol. 1: Linear Algebra, cap. 3: What Is a Vector?",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/Math/Before ML Vol 1 - Linear Algebra/02 Cap 3 What Is a Vector.pdf",
    nota: "Vectores, producto punto, similitud coseno, span, base y cambio de base. Página PDF = impresa − 7."
  },
  brasil4: {
    corto: "Brasil cap. 4",
    titulo: "Before Machine Learning, vol. 1: Linear Algebra, cap. 4: But What About a Matrix?",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/Math/Before ML Vol 1 - Linear Algebra/03 Cap 4 But What About a Matrix.pdf",
    nota: "Transformaciones lineales, determinante, inversa, sistemas, eigenvectores y diagonalización. Página PDF = impresa − 37."
  },
  brasil5: {
    corto: "Brasil cap. 5",
    titulo: "Before Machine Learning, vol. 1: Linear Algebra, cap. 5: Matrix Decomposition",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/Math/Before ML Vol 1 - Linear Algebra/04 Cap 5 Matrix Decomposition.pdf",
    nota: "Descomposición en eigenvalores y SVD, con ejemplos a mano."
  },
  brasil6: {
    corto: "Brasil cap. 6",
    titulo: "Before Machine Learning, vol. 1: Linear Algebra, cap. 6: Principal Component Analysis",
    autor: "Jorge Brasil",
    archivo: "/Users/franciscocastillo/brain/Math/Before ML Vol 1 - Linear Algebra/05 Cap 6 Principal Component Analysis.pdf",
    nota: "PCA desde el álgebra lineal, paso a paso."
  },
  jansen13: {
    corto: "Jansen cap. 13",
    titulo: "Machine Learning for Algorithmic Trading, cap. 13: Data-Driven Risk Factors and Asset Allocation with Unsupervised Learning",
    autor: "Stefan Jansen",
    archivo: "/Users/franciscocastillo/brain/Finance/Machine-Learning-For-Finance/Cap13 - Data-Driven Risk Factors and Asset Allocation with Unsupervised Learning.pdf",
    nota: "PCA aplicado a retornos de acciones: factores de riesgo y eigenportfolios."
  }
};
