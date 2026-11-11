# Mapa de citas: Brasil, "Before Machine Learning, Vol. 1: Linear Algebra", caps. 1 a 4

Carpeta: `/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Before-ML-Vol1-LinearAlgebra/`. Los caps. 5 y 6 están en `algebra-lineal.md`.
Sin código en los caps. 1-4 (el autor remite a github.com/mldepot/beforeMachineLearning).

Correspondencia PDF / impresa: 00 índice: PDF = impresa + 2 · 01 caps. 1-2: PDF = impresa − 5 · 02 cap. 3: PDF = impresa − 7 · 03 cap. 4: PDF = impresa − 37.

## Cap. 3 What Is a Vector? (archivo `02 Cap 3 What Is a Vector.pdf`)
| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Qué es un vector | 1-4 | 8-11 | lista ordenada (1.64, 64), flecha (2,3), 3D (2,3,5); Fig 3.1, 3.2 |
| 3.1 Vector Addition | 4-7 | 11-14 | v=(2,3), w=(2,1), v+w=(4,4); Fig 3.4 paralelogramo; auto 60 km/h + pelota 60 km/h = √(60²+60²); resta en PDF 7 |
| 3.2 Scalar Multiplication | 7-9 | 14-16 | cuatro casos de λ; −2·(2,3) = (−4,−6); Fig 3.7 |
| 3.3 Dot Product: definición | 9-10 | 16-17 | (2,3)·(2,1) = 7; ec. 3.1 |
| Ángulo y proyección | 11-12 | 18-19 | Fig 3.8, 3.9 (w_proj), 3.10 |
| Norma | 12-14 | 19-21 | transpuesta, ||v|| = √13; Fig 3.11 |
| Fórmula geométrica | 15-16 | 22-23 | v·w = ||v|| ||w|| cos θ (ec. 3.2); Fig 3.12, la mejor del producto punto; signo del producto punto |
| Susan y similitud coseno | 16-19 | 23-26 | a=(1,3), b=(4,2), c=(2,3); cos 0.707 y 0.964; Fig 3.13 |
| 3.4 Vector Space: axiomas | 19-22 | 26-29 | paleta de colores; ocho axiomas |
| Ejemplo y contraejemplo | 22-23 | 29-30 | ℝ² sin el origen no es espacio vectorial |
| Combinación lineal | 23-24 | 30-31 | (2,3) = 2i + 3j; Fig 3.14, 3.15 |
| Independencia lineal | 25 | 32 | ec. 3.5 |
| Dependencia y span | 26-27 | 33-34 | (1,1) y (2,2); Fig 3.17 la recta del span |
| Base | 27 | 34 | Holanda; Fig 3.18 |
| Cambio de base | 28-29 | 35-36 | base (1,0),(1,1): (2,3) → (−1,3); Fig 3.19 (no coincide con los números) |
| Casas | 29-30 | 36-37 | base (1,1),(1,−1): (3,2) → (5/2, 1/2); anticipa PCA |

## Cap. 4 But What About a Matrix? (archivo `03 Cap 4 But What About a Matrix.pdf`)
| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Intro y notación | 1 | 38 | m×n, a_ij |
| 4.1 When a Table Isn't Furniture | 2 | 39 | matriz como tabla de features |
| 4.2 Linear Transformations | 2-11 | 39-47 | rotación 180°; i y j alcanzan; G con i→(2,1), j→(1,2); g=(1,1)→(3,3); H: ℝ²→ℝ³ con linealidad a mano; Fig 4.3, 4.4 clave |
| 4.2.1 Matrix × vector | 11-13 | 48-50 | fila por fila; G·(1,1)=(3,3); H·(1,1)=(7,3,2) |
| Matriz × matriz | 13-15 | 50-52 | A(4×2)·B(2×3) = (14 8 10; 4 3 3; 9 8 7; 4 3 3); Fig 4.5 cuadrados de colores |
| Composición | 15-17 | 52-54 | Z=(−1 1; 2 1), W=(0 1; 1 1), W·Z = G; Fig 4.6, 4.7 |
| Propiedades | 17-18 | 54-55 | AB ≠ BA, dimensiones, distributivas |
| Producto externo | 18-19 | 55-56 | A·B como suma de columna ⊗ fila; anticipa SVD |
| 4.2.2 Determinante: escala del área | 20-21 | 57-58 | 2I → 4; ½I → ¼; Fig 4.9-4.11 |
| Determinante negativo | 22 | 59 | Z=(−1 0; 0 1); Fig 4.12 espejo |
| ad − bc geométrico | 23 | 60 | Fig 4.13, la mejor figura del libro |
| 3D, propiedades, 3×3 | 24-27 | 61-64 | paralelepípedo; columnas iguales dan 0; regla 3×3 |
| Leibniz y permutaciones | 27-30 | 64-67 | inversiones y signo |
| Laplace | 30-32 | 67-69 | G=(1 4 5; 9 2 4; 3 5 10), det = −117 |
| 4.2.3 Inversa: det = 0 colapsa | 33-34 | 70-71 | G=(1 1; 1 1): (3,1)→(4,4), (1,2)→(3,3); Fig 4.17 |
| Identidad, inversa de rotación | 34-36 | 71-73 | M=(0 −1; 1 0), M⁻¹=(0 1; −1 0); condiciones |
| Adjunta, transpuesta, ejemplo | 37-38 | 74-75 | A⁻¹ = adj(A)/det(A); A=(1 1; 0 1), A⁻¹=(1 −1; 0 1) |
| 4.3 Sistemas 2×2 | 39-41 | 76-78 | Fig 4.19 los tres casos; Ax = b; −5x1+2x2=−2, −4x1+x2=−4, det 3 |
| Contraejemplo | 41-42 | 78-79 | B=(3 1; 6 2), det 0 |
| Cramer | 43-47 | 80-84 | x = (2,4); Fig 4.22-4.24 paralelogramos |
| Subespacios, rango, nulidad | 47-50 | 84-87 | A(4×3) rango 2, nulidad 1; teorema rango-nulidad |
| 4.3.1 The Eigen Stuff | 51-58 | 88-95 | A=(−5 2; −4 1): λ=−3 con (1,1), λ=−1 con (½,1); AP = PΛ; Fig 4.28 |
| 4.3.2 Diagonalización | 59-65 | 96-102 | diagonales, Aᵗ = PΛᵗP⁻¹, Markov; u=(1,3) → (−1,4) → (3,−4) → (1,−1); Fig 4.31 |

## Erratas del libro (citar con naturalidad en las páginas)
- 02 PDF 16: θ ≈ 29.4° (es 29.74°) y "same value" para normas distintas.
- 02 PDF 8: "greater than 1 or −1" debería ser |λ| > 1. · 02 PDF 25: ec. 3.5 "c2·v3". · 02 PDF 28: Fig 3.19 no coincide con (−1,3).
- 03 PDF 9: H(u)+H(v) con 7(v1+v2). · 03 PDF 14: índice de la suma de c_ij. · 03 PDF 19: "sum of dots products".
- 03 PDF 30: permutaciones 213 y 321 rotuladas "even". · 03 PDF 31: "fix a column" con expansión por fila.
- 03 PDF 32: menor |9 2; 3 15| debe ser |9 2; 3 5| (con 5 da −117).
- 03 PDF 38: "(5,3)" deberían ser (−1,3), y se pasa a estándar multiplicando por A, no por A⁻¹.
- 03 PDF 46: numerador de x1 mal escrito (da −10; el correcto es 6). · 03 PDF 47-48: definición de los subespacios incorrecta.
- 03 PDF 49: espacio nulo es span{(−2, 1, 0)}, no (1, −2, 0).
- 03 PDF 56: verificación A·(−1,−1) = (−3,−3) es falsa; es A·(1,1) = (−3,−3).
- 03 PDF 59 y 63: llama "rotaciones" a P y P⁻¹, que no son ortogonales. · 03 PDF 64: u3* coincide con A·u, no con u.
- Todo el libro: "single value decomposition" por singular value decomposition.

Tono del autor: informal, con humor y alguna grosería; títulos con juegos de palabras. Reusa (2,3), (2,1), (1,1) y A = (−5 2; −4 1) en todo el cap. 4.
