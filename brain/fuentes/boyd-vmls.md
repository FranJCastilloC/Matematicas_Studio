# Mapa de citas: Boyd y Vandenberghe, "Introduction to Applied Linear Algebra: Vectors, Matrices, and Least Squares" (VMLS), caps. 1, 3, 4, 5, 12, 13 y 15

Archivo: `/Users/franciscocastillo/brain/03-Matematicas/14-Algebra-lineal/boyd-vmls-applied-linear-algebra.pdf` (un solo PDF, 473 páginas).
Cambridge University Press, 2018. El libro tiene un companion de código en Julia (aparte, no está en este PDF); el texto en sí no trae código.

Correspondencia PDF / impresa: **PDF = impresa + 10** en todo el rango mapeado (comprobado en el encabezado de página en PDF 14, 15, 21, 120, 200, 237, 270, 300, 335, 400, y en el inicio de cada sección listada abajo, todas confirmadas abriendo la página).

Estructura de cada capítulo: secciones numeradas con párrafos de título en negrita ("Examples.", "Properties.", etc.), figuras numeradas y algoritmos en recuadro (Algorithm n.m); al final Exercises (sin soluciones en el libro). Las fórmulas sí salen en el texto extraído (LaTeX), aunque desordenadas cuando son fracciones.
Notación: el libro escribe el producto interno como aᵀb, la norma como ∥x∥, el vector de unos como **1**, y avg(x), rms(x), std(x).

## Cap. 1 Vectors
| Tema | PDF | Impresa | Notas |
|---|---|---|---|
| Inicio del capítulo; 1.1 Vectors | 13-20 | 3-10 | definición (lista ordenada de números), igualdad, vectores apilados y subvectores (PDF 14); indexado, vector cero, vectores unitarios eᵢ, vector de unos (PDF 15) |
| Vectores como posición y desplazamiento | 16 | 6 | Fig 1.1 el 2-vector como punto y como flecha; sparsity |
| Ejemplos de vectores | 16-20 | 6-10 | color RGB (Fig 1.2, PDF 17), cantidades, portafolio, proporciones, series de tiempo (Fig 1.3 temperatura en Los Ángeles, PDF 18), imágenes (Fig 1.4, PDF 19), conteo de palabras (Fig 1.5, PDF 20), vector de atributos o features (PDF 20) |
| 1.2 Vector addition | 21-24 | 11-14 | suma y resta, propiedades (conmutativa, asociativa); Fig 1.6 desplazamientos (PDF 22); Fig 1.7 p + a y Fig 1.8 p − q como desplazamiento entre puntos (PDF 23) |
| 1.3 Scalar-vector multiplication | 25-28 | 15-18 | propiedades; Fig 1.10 0.75a y −1.5a (PDF 27); combinación lineal, combinación de vectores unitarios, combinación afín y convexa (PDF 27); Fig 1.11 combinación lineal de a₁ y a₂ (PDF 28) |
| 1.4 Inner product | 29-31 | 19-21 | definición aᵀb = a₁b₁ + ... + aₙbₙ y propiedades (PDF 29); Fig 1.12 combinación afín (1 − θ)a + θb (PDF 29) |
| Usos del producto interno | 30-31 | 20-21 | eᵢᵀa, suma 1ᵀa, promedio, suma de cuadrados aᵀa (PDF 30); co-ocurrencia; pesos, features y puntaje wᵀf (credit score), costo total pᵀq (PDF 31); Fig 1.13 conjuntos (PDF 31) |
| 1.5 Complexity of vector computations | 32-34 | 22-24 | punto flotante, flops; complejidad de vectores dispersos |
| Exercises | 35-38 | 25-28 | |

## Cap. 3 Norm and distance
| Tema | PDF | Impresa | Notas |
|---|---|---|---|
| 3.1 Norm | 55-57 | 45-47 | norma euclidiana ∥x∥ = √(x₁² + ... + xₙ²) (PDF 55); propiedades de una norma (homogeneidad, desigualdad triangular, no negatividad) y valor RMS rms(x) = ∥x∥/√n (PDF 56); norma de vectores apilados y desigualdad de Chebyshev (PDF 57) |
| 3.2 Distance | 58-61 | 48-51 | dist(a, b) = ∥a − b∥, Fig 3.1 (PDF 58); RMS deviation; desigualdad triangular, Fig 3.2 (PDF 59) |
| Ejemplos de distancia | 60-61 | 50-51 | feature distance, error de predicción RMS, vecino más cercano con Fig 3.3 (seis puntos, z₃ es el más cercano), disimilitud de documentos (PDF 60); unidades de entradas heterogéneas (PDF 61) |
| 3.3 Standard deviation | 62-66 | 52-56 | vector sin media x̃ = x − avg(x)1 y std(x) = ∥x − avg(x)1∥/√n (PDF 62) |
| Ejemplo y relación con RMS | 63 | 53 | x = (1, −2, 3, 2), avg = 1, x̃ = (0, −3, 2, 1), std = 1.872; aviso de que otros textos dividen por n − 1 y aquí se usa n; rms(x)² = avg(x)² + std(x)² (3.5) |
| Retorno y riesgo; Chebyshev para std | 64 | 54 | serie de retornos: media = retorno, std = riesgo; a lo sumo 1/9 de las entradas a 3 o más desviaciones; propiedades: sumar constante no cambia std, std(ax) = \|a\| std(x) |
| Riesgo y retorno, figura | 65 | 55 | Fig 3.4 cuatro series de retornos y su gráfico riesgo-retorno |
| Estandarización (z-scores) | 66 | 56 | z = (1/std(x)) x̃, media 0 y std 1; Fig 3.5 x, x̃ y z para un 10-vector |
| 3.4 Angle | 66-72 | 56-62 | desigualdad de Cauchy-Schwarz \|aᵀb\| ≤ ∥a∥∥b∥ (enunciado en PDF 66, demostración en PDF 67) |
| Ángulo entre vectores | 67-69 | 57-59 | θ = arccos(aᵀb / (∥a∥∥b∥)), aᵀb = ∥a∥∥b∥cos θ (PDF 67); ángulos agudos y obtusos según el signo de aᵀb y ejemplo de 55.52° (PDF 68); Fig 3.6 ortogonal, alineado y antialineado; Fig 3.7 distancia sobre una esfera (PDF 69) |
| Coeficiente de correlación | 70-71 | 60-61 | ρ = ãᵀb̃ / (∥ã∥∥b̃∥) = cos del ángulo entre los vectores sin media; entre −1 y 1 por Cauchy-Schwarz (PDF 70); Fig 3.8 tres pares con ρ = 0.968, −0.988 y 0.004 (PDF 71) |
| Desviación estándar de una suma; cobertura | 72 | 62 | std(a + b) en función de ρ; hedging de inversiones |
| 3.5 Complexity | 73 | 63 | |
| Exercises | 74-78 | 64-68 | |

## Cap. 4 Clustering
| Tema | PDF | Impresa | Notas |
|---|---|---|---|
| 4.1 Clustering | 79-81 | 69-71 | Fig 4.1 300 puntos en tres grupos (PDF 80); ejemplos de aplicación |
| 4.2 A clustering objective | 82-83 | 72-73 | asignaciones cᵢ, representantes zⱼ, J^clust = (∥x₁ − z_c1∥² + ... + ∥x_N − z_cN∥²)/N (PDF 82); clustering óptimo y subóptimo (PDF 83) |
| 4.3 The k-means algorithm | 84-89 | 74-79 | Lloyd 1957 (PDF 84); Algorithm 4.1 y Fig 4.2 una iteración con 30 puntos (PDF 85); convergencia, cómo interpretar representantes, cómo elegir k (PDF 86); Fig 4.3 tres iteraciones (PDF 87); Fig 4.4 resultado y Fig 4.5 J^clust por iteración (PDF 88) |
| 4.4 Examples | 89-94 | 79-84 | 4.4.1 dígitos MNIST, Fig 4.6-4.9 (PDF 89-91); 4.4.2 temas en 500 artículos de Wikipedia, Fig 4.10 (PDF 92) |
| 4.5 Applications | 95-96 | 85-86 | clasificación, motor de recomendación, completar datos faltantes |
| Exercises | 97 | 87 | |

## Cap. 5 Linear independence
| Tema | PDF | Impresa | Notas |
|---|---|---|---|
| 5.1 Linear dependence | 99-101 | 89-91 | dependencia: β₁a₁ + ... + βₖaₖ = 0 con β no todos cero; independencia (5.1) (PDF 99) |
| Ejemplos de dependencia | 100 | 90 | un vector, el vector cero, dos vectores múltiplos; a₁ = (0.2, −7.0, 8.6), a₂ = (−0.1, 2.0, −1.0), a₃ = (0, −1.0, 2.2) dependientes porque a₁ + 2a₂ − 3a₃ = 0; (1,0,0), (0,−1,1), (−1,1,1) independientes, resuelto; los eᵢ |
| Coeficientes únicos; superconjuntos | 101 | 91 | combinación lineal de independientes tiene coeficientes únicos; desigualdad independencia-dimensión: k ≤ n |
| 5.2 Basis | 101-104 | 91-94 | base = n vectores independientes de tamaño n; Fig 5.1 tres 2-vectores, a₃ combinación de a₁ y a₂; expansión en una base (PDF 102); ejemplo de flujos de caja y préstamos de un período (PDF 103); demostración de la desigualdad independencia-dimensión (PDF 104) |
| 5.3 Orthonormal vectors | 105-106 | 95-96 | Fig 5.2 vectores ortonormales en el plano; ortonormales implica independientes (PDF 105); expansión ortonormal x = (a₁ᵀx)a₁ + ... + (aₙᵀx)aₙ (PDF 106) |
| 5.4 Gram-Schmidt algorithm | 107-112 | 97-102 | Algorithm 5.1 (PDF 107); Fig 5.3 Gram-Schmidt sobre dos 2-vectores (PDF 108); análisis y ejemplo (PDF 109-111); complejidad 2nk² flops (PDF 112) |

## Cap. 12 Least squares
| Tema | PDF | Impresa | Notas |
|---|---|---|---|
| 12.1 Least squares problem | 235-236 | 225-226 | minimizar ∥Ax − b∥² con A alta; residuo r = Ax − b; interpretación por columnas y por filas (PDF 236) |
| 12.2 Solution | 237-240 | 227-230 | ejemplo A de 3×2 con solución x̂ = (1/3, −1/3) (PDF 237); Fig 12.1 curvas de nivel de ∥Ax − b∥² (PDF 238); solución por cálculo (PDF 238) |
| Ecuaciones normales | 239 | 229 | AᵀAx̂ = Aᵀb (12.4); x̂ = (AᵀA)⁻¹Aᵀb (12.5) = A†b (12.6), pseudoinversa |
| Verificación directa y forma por filas | 240 | 230 | demostración sin cálculo; x̂ como suma sobre las filas (12.8) |
| 12.3 Solving least squares problems | 241-243 | 231-233 | principio de ortogonalidad, Fig 12.2 (PDF 241); x̂ = R⁻¹Qᵀb (12.10); Algorithm 12.1 por QR, notación A\b, complejidad 2mn² (PDF 242); mínimos cuadrados matricial (PDF 243) |
| 12.4 Examples | 244-248 | 234-238 | compra de publicidad, Fig 12.3-12.4 (PDF 245); iluminación con lámparas, Fig 12.5 (PDF 247) y Fig 12.6 histogramas (PDF 248) |
| Exercises | 249-253 | 239-243 | |

## Cap. 13 Least squares data fitting
| Tema | PDF | Impresa | Notas |
|---|---|---|---|
| 13.1 Least squares data fitting | 255-258 | 245-248 | datos, modelo f̂(x) = θ₁f₁(x) + ... + θₚfₚ(x) lineal en los parámetros, error de predicción (PDF 256); ajuste por mínimos cuadrados con la matriz A (PDF 257) |
| Ajuste con constante | 258-259 | 248-249 | el mejor ajuste constante es avg(y), su RMS es std(y); Fig 13.1 (PDF 259) |
| Recta de regresión | 259-261 | 249-251 | f₁ = 1, f₂ = x (PDF 259); Fig 13.2 recta con 50 puntos (PDF 260); pendiente = ρ·std(y)/std(x) y f̂(x) = avg(y) + ρ (std(y)/std(x)) (x − avg(x)) (13.3) (PDF 260-261) |
| Tendencia y estacionalidad | 262-264 | 252-254 | consumo mundial de petróleo, Fig 13.3-13.4 (PDF 263); millas recorridas en EE. UU., Fig 13.5 (PDF 264) |
| Ajuste polinomial | 265-266 | 255-256 | Fig 13.6 polinomios de grado 2, 6, 10 y 15 a 100 puntos (PDF 266) |
| Lineal por tramos, regresión, autorregresivo | 266-270 | 256-260 | Fig 13.7-13.8 (PDF 267-268); precio de casas (PDF 268); modelo AR, Fig 13.9 temperatura en LAX (PDF 269-270) |
| 13.2 Validation | 270-278 | 260-268 | capacidad de generalización (PDF 270); validación con conjunto de prueba (PDF 271) |
| Sobreajuste | 272 | 262 | error de entrenamiento mucho menor que el de prueba; elegir entre modelos; anuncia la regularización del cap. 15 |
| Ejemplo de validación polinomial | 273-274 | 263-264 | Fig 13.10 los polinomios de la Fig 13.6 sobre 100 puntos de prueba (PDF 273); Fig 13.11 error RMS de entrenamiento y prueba contra el grado (PDF 274) |
| Validación cruzada | 274-276 | 264-266 | 10-fold y 5-fold (PDF 274); Tabla 13.1 cinco folds del modelo de casas, 774 ventas (PDF 275); Tabla 13.2 modelo constante (PDF 276) |
| Series de tiempo y límites de la validación | 276-278 | 266-268 | Fig 13.12 (PDF 277); Fig 13.13 (PDF 278) |
| 13.3 Feature engineering | 279-288 | 269-278 | estandarizar features, winsorizar (PDF 279); log, categóricas (PDF 280); modelo aditivo generalizado (PDF 281); productos e interacciones, modelos estratificados (PDF 282); features de clusters, aleatorias, redes neuronales (PDF 283); ejemplo de casas con Tabla 13.5 (PDF 285-288) |

## Cap. 15 Multi-objective least squares
| Tema | PDF | Impresa | Notas |
|---|---|---|---|
| 15.1 Multi-objective least squares | 319-323 | 309-313 | suma ponderada J = λ₁J₁ + ... + λₖJₖ (15.1) (PDF 319); apilado (15.2) y solución (15.3) (PDF 320); curva de compromiso óptima y ejemplo simple (PDF 321); Fig 15.1-15.2 (PDF 322); Fig 15.3 curva de compromiso (PDF 323) |
| 15.2 Control | 324-325 | 314-315 | los objetivos secundarios se llaman regularización (PDF 324) |
| 15.3 Estimation and inversion | 326-334 | 316-324 | matriz de primeras diferencias D (15.4) (PDF 326) |
| Regularización de Tikhonov | 327-328 | 317-318 | minimizar ∥Ax − y∥² + λ∥x∥² (PDF 327); AᵀA + λI siempre invertible y x̂ = (AᵀA + λI)⁻¹Aᵀy (PDF 328) |
| Ejemplos de inversión | 329-334 | 319-324 | ozono en Azusa, Fig 15.4 (PDF 330); imagen borrosa, Fig 15.5-15.6 con λ de 10⁻⁶ a 1 (PDF 332-333); tomografía (PDF 334-335, figuras 15.7-15.10 en PDF 335-337) |
| 15.4 Regularized data fitting | 335-340 | 325-330 | otra forma de evitar el sobreajuste; también llamada de-tuning, shrinkage o ridge regression (PDF 335) |
| Ridge: motivación y efecto | 338 | 328 | ∥y − Aθ∥² + λ∥θ₂:ₚ∥² (15.7), no se penaliza el término constante; ridge regression; efecto de encogimiento; camino de regularización |
| Ejemplo de regularización | 339-341 | 329-331 | señal s(t) con 30 muestras ruidosas, Fig 15.11 (PDF 339); Fig 15.12 errores RMS de entrenamiento y prueba contra λ y camino de regularización (PDF 341) |
| Independencia de columnas y features | 340 | 330 | con regularización las columnas siempre son independientes; se pueden usar más features que datos |
| 15.5 Complexity | 340-341 | 330-331 | |

## Erratas e inconsistencias
- PDF 63: el libro define std(x) dividiendo por n, no por n − 1, y lo avisa en el mismo párrafo. Los textos de estadística (OpenStax, el material del máster) usan n − 1 para la muestral: los números no coinciden con `np.std(x, ddof=1)` ni con `sd()` de R, sí con `np.std(x)`.
- PDF 100: en el segundo ejemplo de independencia escribe "2β₃ = −0"; debería ser "2β₃ = 0".
- PDF 335-337: las figuras 15.8-15.10 son del ejemplo de tomografía (15.3), pero quedaron impresas ya dentro de la sección 15.4.
- Dos nombres para lo mismo: el libro llama "Tikhonov regularized inversion" (PDF 327) y "ridge regression" (PDF 338) a la misma idea; la diferencia es que en ridge no se penaliza el término constante.

Tono: aplicado, con pocas demostraciones y muchos ejemplos de datos reales (finanzas, documentos, imágenes). Las fórmulas sí se leen en el texto extraído.
