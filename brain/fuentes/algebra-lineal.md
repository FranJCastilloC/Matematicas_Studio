# Mapa de citas: álgebra lineal (Nield cap. 4, Brasil vol. 1 caps. 5 y 6)

A = `/Users/franciscocastillo/brain/Math/Essential Math for Data Science/04 Cap 4 Linear Algebra.pdf` (61 páginas PDF, sin numeración impresa).
C = `/Users/franciscocastillo/brain/Math/Before ML Vol 1 - Linear Algebra/04 Cap 5 Matrix Decomposition.pdf` (37 páginas; PDF = impresa − 102).
D = `/Users/franciscocastillo/brain/Math/Before ML Vol 1 - Linear Algebra/05 Cap 6 Principal Component Analysis.pdf` (11 páginas; PDF = impresa − 139).
Índice de Brasil (00 Portada e indice.pdf): 4.3.1 "Line Up Vectors! The Eigen Stuff" p. 88; 4.3.2 "Matrix Diagonalization" p. 96; 5 "Matrix Decomposition" p. 103; 5.1 SVD p. 114; 6 PCA p. 140. El cap. 4 está en `03 Cap 4 But What About a Matrix.pdf` (no leído).

| Tema | Archivo | PDF | Impresa | Sección | Qué hay |
|---|---|---|---|---|---|
| Vectores, suma, escalado | A | 1-17 | | What is a Vector? / Adding / Scaling | Figures 4-1 a 4-9; Example 4-2, 4-5, 4-6 |
| Span y dependencia lineal | A | 18-24 | | Span and Linear Dependence | Figures 4-10, 4-11, 4-12 |
| Matriz como transformación | A | 24-31 | | Linear Transformations, Basis Vectors | Figures 4-13 a 4-16: i y j se mueven y v va con ellos |
| Matriz × vector, matriz × matriz | A | 31-40 | | Matrix Vector Multiplication / Matrix Multiplication | Example 4-7 a 4-13, Figures 4-17 y 4-18 |
| Determinante | A | 41-48 | | Determinants | Figure 4-20 área 6, 4-22 negativo, 4-23 cero |
| Inversa y sistemas | A | 48-55 | | Special Types of Matrices / Systems of Equations | Example 4-18 a 4-20 |
| Eigenvectores y eigenvalores | A | 56-59 | | Eigenvectors and Eigenvalues | Av = λv, Figure 4-24, Example 4-21 eig de [[1,2],[4,5]], Example 4-22 reconstrucción QΛQ⁻¹ |
| SVD: rotación, estiramiento, rotación | C | 1-13 | 103-115 | Matrix Decomposition / 5.1 SVD | Figures 5.1 a 5.5; círculo que pasa a elipse (Figure 5.2, 5.3 p. 110) |
| Eigendecomposition a mano | C | 16-21 | 118-123 | 5.1 SVD | A = [[1 −2 0][0 −2 1]], polinomio característico, eigenvectores normalizados |
| Verificación UΣVᵀ | C | 21-23 | 123-125 | 5.1 SVD | Σ = [[3 0 0][0 1 0]] |
| Ejemplo usuarios × canciones | C | 24-37 | 126-139 | 5.1 SVD | SVD truncada, energía, recomendación, Frobenius |
| PCA desde el álgebra | D | 1-8 | 140-147 | The Final Stretch: PCA | estandarizar (6.1), M = AᵀA/N, M = PΣP⁻¹, varianza explicada (6.2), Figure 6.1, proyección (6.5), Figures 6.2 y 6.3 |
| PCA vía SVD | D | 9-10 | 148-149 | The Final Stretch: PCA | M = VΣ²Vᵀ/N, λ_i = σ_i²/N, componentes = UΣ |
| Ejemplo casino a mano | D | 3-7 | 142-146 | The Final Stretch: PCA | 8 usuarios × 5 features, medias, desvíos, M 5×5, λ = 2.29, 1.48, 1.02, 0.14, 0.08 |

Observaciones: Nield casi no da intuición geométrica del eigenvector (sirve para el código); Brasil lo cuenta con el círculo que se vuelve elipse y en PCA lo vincula con la dirección de mayor varianza.
