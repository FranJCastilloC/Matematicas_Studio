# brain — Registro de fuentes externas

> Registro de archivos del repo que sirven como fuente de verdad.
> Referenciar desde frontmatter con prefijo `repo:<path>`.
> Para el contenido actual siempre leer el archivo directamente — este registro
> es sólo un directorio de qué existe y dónde.

---

## Archivos del repo

### estandar-biblioteca
- **Path:** `CLAUDE.md`
- **Descripción:** Estándar de cada página de concepto y flujo para sumar uno nuevo. Se lee antes de construir cualquier concepto.

### catalogo
- **Path:** `biblioteca/catalogo.js`
- **Descripción:** Lista de conceptos de la biblioteca, con prerrequisitos y siguientes. Es la fuente de verdad de qué conceptos existen.

### nucleo
- **Path:** `biblioteca/nucleo/nucleo.js`
- **Descripción:** Componentes compartidos: progreso, pasos con candado, tipos de reto, tarjetas.

### concepto-covarianza
- **Path:** `biblioteca/conceptos/covarianza.html`
- **Descripción:** Primer concepto de la biblioteca y modelo de referencia para los siguientes.

### lab-matriz-covarianza
- **Path:** `biblioteca/conceptos/covarianza-matriz-lab.html`
- **Descripción:** Laboratorio de la matriz 13×13 del dataset Wine, fila por fila. Viene del archivo original `Covarianza fila por fila.html` de la raíz.

### manim-matriz-covarianza
- **Path:** `matriz_covarianza.py`
- **Descripción:** Escena de Manim con voz que anima la misma matriz de covarianza. Los renders quedan en `media/`.

### fuentes-js
- **Path:** `biblioteca/fuentes.js`
- **Descripción:** Registro de los libros y el material del máster que las páginas citan, con la ruta absoluta a cada PDF.

### mapas-de-citas
- **Path:** `brain/fuentes/ud1.md`, `brain/fuentes/raschka-cap5.md`, `brain/fuentes/nield-cap3.md`, `brain/fuentes/algebra-lineal.md`, `brain/fuentes/jansen-cap13.md`
- **Descripción:** Qué tema está en qué página de cada fuente, con páginas verificadas. Se consultan antes de citar; si un libro nuevo entra a la biblioteca, se le hace su mapa.

### brief-concepto
- **Path:** `biblioteca/nucleo/BRIEF-CONCEPTO.md`
- **Descripción:** El brief que recibe cada agente que construye una página de concepto. Es la versión operativa del estándar.

---

## PDFs de Francisco (en su carpeta brain, fuera de este proyecto)

### ud1-teoria
- **Path:** `/Users/franciscocastillo/brain/Academic/Master IA UAX/SM142001 - Matematicas y estadistica para la IA/UD1. Estadística descriptiva y análisis/SM142001_MUIA_UD1_CONTENIDO TEÓRICO-2.pdf`
- **Descripción:** Contenido teórico oficial de la UD1 (30 páginas). Mapa en `brain/fuentes/ud1.md`.

### ud1-diapositivas
- **Path:** `/Users/franciscocastillo/brain/Academic/Master IA UAX/SM142001 - Matematicas y estadistica para la IA/UD1. Estadística descriptiva y análisis/V2k8es-Unidad_1.pdf`
- **Descripción:** Diapositivas de la UD1 (56). Único lugar con el box plot y la regla 1.5·IQR; PCA con Iris en R.

### raschka-cap5
- **Path:** `/Users/franciscocastillo/brain/Machine Learning/Dimensional Reduction/Cap05 - Compressing Data via Dimensionality Reduction.pdf`
- **Descripción:** PCA, LDA y t-SNE con Wine. Página PDF = impresa − 138.

### nield-cap3 y nield-cap4
- **Path:** `/Users/franciscocastillo/brain/Math/Essential Math for Data Science/03 Cap 3 ...pdf` y `04 Cap 4 Linear Algebra.pdf`
- **Descripción:** Estadística descriptiva con Python puro; álgebra lineal con NumPy. Sin numeración impresa (early release).

### brasil-vol1
- **Path:** `/Users/franciscocastillo/brain/Math/Before ML Vol 1 - Linear Algebra/` (índice, cap. 5 Matrix Decomposition, cap. 6 PCA; el cap. 4 con "The Eigen Stuff" existe pero no se leyó)
- **Descripción:** Eigendecomposition y SVD a mano; PCA desde el álgebra con el ejemplo del casino.

### jansen-cap13
- **Path:** `/Users/franciscocastillo/brain/Finance/Machine-Learning-For-Finance/Cap13 - Data-Driven Risk Factors and Asset Allocation with Unsupervised Learning.pdf`
- **Descripción:** PCA sobre retornos de acciones: el mercado como PC1 y eigenportfolios. Página PDF = impresa − 406.

### ud1-resumen-francisco
- **Path:** pegado en el chat del 2026-11-05 (no es un archivo). Resumen de la UD1 escrito por Francisco el 5 de noviembre.
- **Descripción:** Incluye cosas que no están en los PDF: escalas de medida, regla 68-95-99.7, coeficiente de variación, orden del pipeline, data leakage, LDA.

---

## URLs externas

### raschka-pml
- **URL:** https://github.com/rasbt/machine-learning-book
- **Descripción:** Libro de Raschka del que salió el contexto de covarianza y PCA con el dataset Wine.
