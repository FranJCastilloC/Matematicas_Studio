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

> Nota (2026-11-12): `~/brain/03-Matematicas` se reorganizó. Los libros enteros están en `03-Matematicas/Libros/` y los archivos por unidad quedaron directamente en la carpeta del nivel (sin la subcarpeta del libro). Las rutas vigentes están en `biblioteca/fuentes.js`; las páginas no cambian.


## Ampliación (tanda 5): ortogonales, simétricas e independencia

Lectura hecha sobre los archivos por unidad (no sobre el PDF único del encabezado). Ids de fuente en `biblioteca/fuentes.js`: `boyd1` (cap. 1 a 5), `boyd2` (cap. 6 a 11), `boyd3` (cap. 12 a 15). Tres números por fila, todos comprobados abriendo la página y leyendo el número al pie:
- **`data-pag` = página del archivo de la unidad.** Para `boyd1`: archivo = impresa (desfase 0; por ejemplo, la impresa 89 es la página 89 del archivo y empieza el cap. 5). Para `boyd2`: archivo = impresa − 104 (la impresa 189 es la página 85 del archivo). Para `boyd3`: archivo = impresa − 222 (la impresa 229 de las ecuaciones normales es la página 7).
- **Libro entero** (la columna "PDF" de las tablas de arriba) = impresa + 10 = archivo + 10 en `boyd1`, archivo + 114 en `boyd2`, archivo + 232 en `boyd3`. Es la misma página de la tabla anterior; esta sección no cambia ninguna de esas filas.
- Los capítulos del libro son: 5 Linear independence (en `boyd1`), 6 a 11 en `boyd2` (6 Matrices, 7 Matrix examples, 8 Linear equations, 9 Linear dynamical systems, 10 Matrix multiplication, 11 Matrix inverses), 12 en adelante en `boyd3`.
- La página del archivo es la posición dentro del PDF de la unidad (la primera página es la 1).

| Tema | Fuente | Archivo (`data-pag`) | Impresa | Libro entero | Qué hay exactamente |
|---|---|---|---|---|---|
| 6.3.1 Transpuesta: definición | `boyd2` | 11 | 115 | 125 | (Aᵀ)ᵢⱼ = Aⱼᵢ, dimensión n × m, ejemplo numérico 3 × 2; (Aᵀ)ᵀ = A. Vectores fila y columna; "las filas de A son independientes" significa que las columnas de Aᵀ lo son; transpuesta de matriz por bloques |
| 6.3.1 Matriz simétrica | `boyd2` | 12 | 116 | 126 | **Definición**: una matriz cuadrada A es simétrica si A = Aᵀ, es decir Aᵢⱼ = Aⱼᵢ para todo i, j. Motivación: la matriz de adyacencia de una relación o grafo es simétrica cuando la relación lo es; ejemplo de la relación "amigos" (grafo de red social). Es todo lo que dice de simétricas en el cuerpo del capítulo |
| 6.3.2 Propiedad: transpuesta de una suma | `boyd2` | 13 | 117 | 127 | (A + B)ᵀ = Aᵀ + Bᵀ en la lista de propiedades de la suma; (βA)ᵀ = β(Aᵀ) con el producto por escalar |
| 6.3.4 Norma de matriz | `boyd2` | 13-14 | 117-118 | 127-128 | ∥A∥ = raíz de la suma de los cuadrados de las entradas (6.3), llamada norma de Frobenius; ∥A∥ = ∥Aᵀ∥; ∥A∥² = suma de las normas cuadradas de las columnas |
| 10.1 Producto de matrices y transpuesta del producto | `boyd2` | 75 | 179 | 189 | Lista de propiedades: asociativa, con escalares, distributiva, y **(AB)ᵀ = BᵀAᵀ** (en orden contrario). Es la regla que usan después la demostración de que G es simétrica y las de ortogonales |
| 10.1 Producto como productos internos filas-columnas | `boyd2` | 77 | 181 | 191 | AB = matriz de los productos internos aᵢᵀbⱼ de las filas de A con las columnas de B; antecede a la matriz de Gram. En la misma página, la representación por producto externo AB = a₁b₁ᵀ + ... + aₚbₚᵀ |
| 10.1 **Matriz de Gram** | `boyd2` | 77 | 181 | 191 | **Definición**: para A de m × n con columnas a₁, ..., aₙ, G = AᵀA es la matriz de Gram asociada a esos vectores (nombrada por Jørgen Pedersen Gram). Sus entradas son todos los productos internos de pares de columnas, Gᵢⱼ = aᵢᵀaⱼ (matriz escrita completa). **Es simétrica**: aᵢᵀaⱼ = aⱼᵀaᵢ, y también con la regla de la transpuesta del producto, Gᵀ = (AᵀA)ᵀ = Aᵀ(Aᵀ)ᵀ = AᵀA = G. Ejemplo de pertenencia: A de 0 y 1 con "ítem i en grupo j"; Gᵢⱼ = número de ítems en ambos grupos i y j, Gᵢᵢ = número de ítems del grupo i. Dice que la matriz de Gram "tendrá un papel importante más adelante" |
| 10.1 Costo de la Gram por simetría | `boyd2` | 78 | 182 | 192 | Al calcular G = BᵀB de n × n solo hace falta la mitad superior o inferior porque es simétrica: ahorra cerca de la mitad de los flops, unos pn² en lugar de 2pn² (mismo orden) |
| 10.4 **Matrices con columnas ortonormales y ortogonales** | `boyd2` | 85 | 189 | 199 | Si A es n × k con columnas ortonormales a₁, ..., aₖ, entonces **AᵀA = I** (se expresa con la matriz de Gram; no hay un nombre estándar para esa matriz). **Definición**: una matriz **cuadrada** que cumple AᵀA = I se llama **ortogonal**; sus columnas son una base ortonormal. Ejemplos ya vistos: identidades, rotaciones y reflexiones 2-D (pág. 129, ver fila de 7.1), matrices de permutación (pág. 132, ver fila de 7.2). Observación de nombres: el libro llama ortogonal solo a la cuadrada |
| 10.4 Propiedades: preserva norma, producto interno y ángulo | `boyd2` | 85-86 | 189-190 | 199-200 | Para A de m × n con columnas ortonormales y f(z) = Az: **∥Ax∥ = ∥x∥** (preserva la norma), **(Ax)ᵀ(Ay) = xᵀy** (preserva el producto interno), **∠(Ax, Ay) = ∠(x, y)** (preserva ángulos). Aclara que los vectores de los dos lados viven en dimensiones distintas (m a la izquierda, n a la derecha). Demostración (pág. 85-86): (Ax)ᵀ(Ay) = xᵀAᵀAy = xᵀIy = xᵀy; con y = x sale la norma; los ángulos salen del arccos con las dos primeras. Es la propiedad estrella de las ortogonales |
| 10.4 Factorización QR | `boyd2` | 86 | 190 | 200 | A = QR con Q de n × k con QᵀQ = I y R triangular superior k × k con diagonal positiva, a partir de Gram-Schmidt: Rᵢⱼ = qᵢᵀaⱼ para i < j y Rᵢᵢ = ∥q̃ᵢ∥. Si A es cuadrada con columnas independientes, Q es ortogonal. Hay otros algoritmos de QR más estables ante el redondeo; QR esparsa (sin fórmula) |
| 11.2 Inversa de una ortogonal | `boyd2` | 100 | 204 | 214 | En la lista de ejemplos de matrices invertibles: "si A es cuadrada con columnas ortonormales, AᵀA = I, así que A es invertible con A⁻¹ = Aᵀ" |
| 11.1 Ortonormales dan inversa izquierda | `boyd2` | 96 | 200 | 210 | Último ejemplo de inversas izquierdas: una matriz con columnas ortonormales cumple AᵀA = I, así que Aᵀ es una inversa izquierda de A |
| 7.1 Rotación y reflexión 2-D | `boyd2` | 25-26 | 129-130 | 139-140 | Rotación antihoraria por θ, matriz [cos θ, −sin θ; sin θ, cos θ] (7.1) (pág. 25); reflexión respecto de una recta por el origen inclinada θ; proyección sobre una recta (pág. 26); Fig 7.1 (dilatación diag(2, 2/3), rotación de π/6, reflexión a π/4). Son ortogonales (el libro lo dice en 10.4); la dilatación y la proyección no |
| 7.2 Matrices de permutación | `boyd2` | 28 | 132 | 142 | Una matriz de permutación es una matriz de n × n donde cada columna es un vector unitario y cada fila es la transpuesta de un vector unitario; y = Ax significa yᵢ = x_{πᵢ}; ejemplo con π = (3, 1, 2). Es el caso de ortogonal con 0 y 1 |
| Ejercicio 10.35 (producto de ortogonales) | `boyd2` | 92 | 196 | 206 | Si U y V son ortogonales n × n, UV es ortogonal y también (1/√2)[U U; V −V]. Sin solución en el libro |
| Ejercicios 10.37 y 10.38 | `boyd2` | 93 | 197 | 207 | 10.37: toda ortogonal 2 × 2 es rotación o reflexión (ecuaciones a² + c² = 1, b² + d² = 1, ab + cd = 0; |ad − bc| = 1). 10.38: una ortogonal con entradas no negativas es una matriz de permutación |
| Ejercicio 10.36 (forma cuadrática y simetría) | `boyd2` | 93 | 197 | 207 | xᵀAx = suma de Aᵢⱼxᵢxⱼ; xᵀAᵀx = xᵀAx; **xᵀ((A + Aᵀ)/2)x = xᵀAx**: la forma cuadrática solo "ve" la parte simétrica; pide escribir 2x₁² − 3x₁x₂ − x₂² con matriz simétrica. Único lugar donde el libro usa simétricas con formas cuadráticas |
| Ejercicios sobre Gram | `boyd2` | 88-89 | 192-193 | 202-203 | 10.11(c): tr(AᵀA) = ∥A∥² (el cuadrado de la norma es la traza de la Gram); 10.13: matriz laplaciana L = AAᵀ es la Gram de Aᵀ; 10.14: columnas de norma 1 y ángulos de 60°, ¿qué se sabe de G?; 10.15: ∥aᵢ − aⱼ∥ en términos de Gᵢᵢ, Gᵢⱼ, Gⱼⱼ; 10.16: la matriz de covarianza Σ = (1/n)ÃᵀÃ es la Gram de las columnas centradas multiplicada por 1/n (conecta con las entradas Σᵢⱼ = std(aᵢ) std(aⱼ) ρᵢⱼ); 10.17(c): SᵀS cuenta síntomas compartidos |
| 5.1 **Dependencia lineal** | `boyd1` | 89 | 89 | 99 | **Definición**: a₁, ..., aₖ (k ≥ 1) son linealmente dependientes si β₁a₁ + ... + βₖaₖ = 0 con β no todos cero; entonces algún vector es combinación lineal de los otros (se despeja aᵢ), y el recíproco también vale. Es una propiedad de la colección, no de cada vector; no depende del orden. Empieza el capítulo 5 (página de apertura) |
| 5.1 **Independencia lineal** | `boyd1` | 89-90 | 89-90 | 99-100 | Independientes = no dependientes: β₁a₁ + ... + βₖaₖ = 0 (5.1) solo para β₁ = ... = βₖ = 0 (pág. 89-90) |
| 5.1 Ejemplos de (in)dependencia | `boyd1` | 90 | 90 | 100 | Un solo vector es dependiente solo si es cero; toda lista con el vector cero es dependiente; dos vectores son dependientes si y solo si uno es múltiplo del otro; **a₁ = (0.2, −7.0, 8.6), a₂ = (−0.1, 2.0, −1.0), a₃ = (0, −1.0, 2.2) cumplen a₁ + 2a₂ − 3a₃ = 0** (verificado) y a₂ = (−1/2)a₁ + (3/2)a₃; **(1,0,0), (0,−1,1), (−1,1,1) independientes** (resuelto con tres ecuaciones); los eᵢ son independientes |
| 5.1 Coeficientes únicos; subconjuntos y superconjuntos | `boyd1` | 91 | 91 | 101 | Si los vectores son independientes los coeficientes de una combinación lineal son únicos (se restan dos expansiones); el recíproco vale; agregar vectores a una colección dependiente la mantiene dependiente; quitar vectores de una independiente la mantiene independiente |
| 5.2 **Desigualdad independencia-dimensión** | `boyd1` | 91 | 91 | 101 | Una colección independiente de n-vectores tiene a lo sumo n elementos; "n + 1 o más n-vectores son dependientes"; ejemplo: tres 2-vectores cualesquiera son dependientes (Fig 5.1, pág. 92). Anuncia la demostración (pág. 94) |
| 5.2 **Base** | `boyd1` | 92 | 92 | 102 | **Definición**: n vectores independientes de tamaño n son una base. Todo n-vector b se escribe de forma única como combinación lineal de una base (argumento con a₁, ..., aₙ, b: n + 1 vectores son dependientes y βₙ₊₁ ≠ 0). "Expansión en una base" y coeficientes de la expansión. Fig 5.1 (tres 2-vectores) |
| 5.2 Ejemplos de base | `boyd1` | 93 | 93 | 103 | Los eᵢ son base (b = b₁e₁ + ... + bₙeₙ); **a₁ = (1.2, −2.6), a₂ = (−0.3, −3.7) son base y b = (1, 1) = 0.6513 a₁ − 0.7280 a₂** (4 cifras significativas; recalculado: 0.6513 y −0.7280, correcto) |
| 5.2 Flujos de caja y préstamos | `boyd1` | 93-94 | 93-94 | 103-104 | e₁, l₁, ..., lₙ₋₁ (préstamos de un período a tasa r) son una base; todo flujo c = α₁e₁ + α₂l₁ + ...; el primer coeficiente α₁ = c₁ + c₂/(1 + r) + ... + cₙ/(1 + r)ⁿ⁻¹ es el valor presente neto. Ejercicio 5.3 (pág. 103) pide los coeficientes |
| 5.2 Demostración de independencia-dimensión | `boyd1` | 94-95 | 94-95 | 104-105 | Inducción sobre n, con la partición aᵢ = (bᵢ, αᵢ) y los vectores cᵢ de longitud n − 1 (5.2). Termina arriba de la pág. 95 |
| 5.3 Ortonormales implican independientes | `boyd1` | 95-96 | 95-96 | 105-106 | Definición de ortogonales y ortonormales (aᵢᵀaⱼ = 1 si i = j, 0 si i ≠ j); ejemplos: los eᵢ y los tres 3-vectores de (5.3); Fig 5.2 (pág. 95). **Ortonormales son independientes**: se multiplica por aᵢᵀ y queda βᵢ = 0 (pág. 95-96) |
| 5.3 Base ortonormal y fórmula de expansión | `boyd1` | 96-97 | 96-97 | 106-107 | x = (a₁ᵀx)a₁ + ... + (aₖᵀx)aₖ (5.4), útil para comprobar si y es combinación de ortonormales; si son n, son una **base ortonormal** y (5.5) vale para todo x. Ejemplo x = (1, 2, 3) en la base (5.3): productos internos −3, 3/√2 y −1/√2 (recalculado, correcto) (pág. 96-97) |
| 5.4 Gram-Schmidt como prueba de independencia | `boyd1` | 97 | 97 | 107 | El algoritmo sirve para decidir si una lista es independiente: Algorithm 5.1 (orthogonalization, test de dependencia q̃ᵢ = 0, normalización); si termina antes, encuentra el primer aⱼ combinación de los anteriores |
| 5.4 Ejemplo numérico de Gram-Schmidt | `boyd1` | 100-101 | 100-101 | 110-111 | **a₁ = (−1, 1, −1, 1), a₂ = (−1, 3, −1, 3), a₃ = (1, 3, 5, 7)**: ∥q̃₁∥ = 2, q₁ = (−1/2, 1/2, −1/2, 1/2), q₂ = (1/2, 1/2, 1/2, 1/2), q̃₃ = (−2, −2, 2, 2), q₃ = (−1/2, −1/2, 1/2, 1/2); concluye que son independientes. Después, cómo saber si b es combinación de independientes (aplicar el algoritmo a a₁, ..., aₖ, b) |
| 5.4 Análisis y terminación temprana | `boyd1` | 99-100 | 99-100 | 109-110 | Las cuatro afirmaciones del análisis (q̃ᵢ ≠ 0, qᵢ ortonormales, aᵢ combinación de q₁..qᵢ y al revés) por inducción (pág. 99); el algoritmo da independencia (pág. 99-100) y qué pasa si termina antes (pág. 100) |
| 5.4 Complejidad y ejercicios del cap. 5 | `boyd1` | 102-104 | 102-104 | 112-114 | Complejidad 2nk² flops (pág. 102; anécdota de Gauss con la suma 1 + 2 + ... + (k − 1), fórmula 5.7); ejercicios 5.1 a 5.9 (pág. 103-104): vectores apilados, "el hallazgo sorprendente" (400 acciones y 250 días: más vectores que dimensión implica dependencia), 5.4 norma de una combinación de ortonormales, 5.8 terminación temprana de Gram-Schmidt |
| 8.3 **Sistemas de ecuaciones lineales** | `boyd2` | 48-49 | 152-153 | 162-163 | Sistema de m ecuaciones en n incógnitas, Ax = b (8.5); A coeficientes, b lado derecho; "no tiene solución, una o muchas" (pág. 49). Ejemplos: x₁ + x₂ = 1, x₁ = −1, x₁ − x₂ = 0 sin solución; x₁ + x₂ = 1, x₂ + x₃ = 2 con múltiples soluciones, por ejemplo x = (1, 0, 2) y x = (0, 1, 1). **Sobredeterminado** (m > n, A alta), **subdeterminado** (m < n, A ancha), **cuadrado** (m = n); sistema homogéneo Ax = 0 con solución x = 0 |
| 8.3.1 Aplicaciones de Ax = b | `boyd2` | 50-53 | 154-157 | 164-167 | Ax = b es hallar los coeficientes de b como combinación lineal de las columnas (pág. 50); interpolación polinomial con la matriz de Vandermonde; balanceo de reacciones químicas (electrólisis del agua, solución (1, 1, 1/2), pág. 51); sistemas de difusión (Rf = −Aᵀe, pág. 52-53); modelo de Leontief (pág. 53) |
| 6.4 Dependencia de columnas con Ax = 0 | `boyd2` | 17 | 121 | 131 | "Las columnas de A son dependientes si Ax = 0 para algún x ≠ 0, independientes si Ax = 0 implica x = 0"; "expansión en una base": si A es cuadrada con columnas independientes (base), Ax = b tiene solución única |
| 11.1 **Inversa izquierda** | `boyd2` | 95-96 | 199-200 | 209-210 | **Definición**: X con XA = I es inversa izquierda de A (de tamaño n × m si A es m × n); A es "invertible por la izquierda". Ejemplos (pág. 95-96): A = [−3 −4; 4 6; 1 1] (3 × 2) con dos inversas izquierdas distintas B = (1/9)[−11 −10 16; 7 8 −11] y C = (1/2)[0 −1 6; 0 1 −4] (verificado: BA = CA = I; si hay dos hay infinitas, ejercicio 11.1) |
| 11.1 Inversa izquierda e independencia de columnas | `boyd2` | 96 | 200 | 210 | **Si A tiene inversa izquierda, sus columnas son independientes** (Ax = 0 ⇒ x = CAx = 0). El recíproco vale: tiene inversa izquierda si y solo si sus columnas son independientes. Solo las matrices cuadradas o altas pueden tenerla (una ancha tiene columnas dependientes por la desigualdad independencia-dimensión). Resolver Ax = b con inversa izquierda: x = Cb, solución única; se prueba A(Cb) = b para saber si hay solución |
| 11.1 **Inversa derecha** | `boyd2` | 97-98 | 201-202 | 211-212 | **Definición**: AX = I (misma dimensión que Aᵀ). Si B es inversa derecha de A, Bᵀ es inversa izquierda de Aᵀ y al revés. **Una matriz tiene inversa derecha si y solo si sus filas son independientes**; una matriz alta no puede tenerla; sirve para resolver sistemas cuadrados o subdeterminados para cualquier b: x = Bb. Ejemplos con las B y C de arriba: Ax = (1, −2, 0) tiene solución única (1, −1) con cualquiera de las dos; Ax = (1, −1, 0) no tiene (x = C(1,−1,0) = (1/2, −1/2) no la cumple); Aᵀy = (1, 2) tiene soluciones Bᵀ(1, 2) = (1/3, 2/3, −2/3) y Cᵀ(1, 2) = (0, 1/2, −1) (todas verificadas). Producto: inversa derecha de AD es EB, inversa izquierda de AD es FC (pág. 98) |
| 11.2 **Inversa** | `boyd2` | 98 | 202 | 212 | Si hay inversa izquierda Y y derecha X, son únicas e iguales (X = (YA)X = Y(AX) = Y); entonces A es invertible o no singular (A⁻¹); cuadrada sin inversa es **singular**. Las invertibles son cuadradas; (A⁻¹)⁻¹ = A |
| 11.2 Ax = b con A invertible; condiciones de invertibilidad | `boyd2` | 99 | 203 | 213 | x = A⁻¹b (11.1) es la única solución; la solución es función lineal de b. **Para A cuadrada son equivalentes**: invertible, columnas independientes, filas independientes, inversa izquierda, inversa derecha (cadena: izquierda ⇒ columnas independientes ⇒ derecha, y análogo con filas) |
| 11.2 Ejemplos de invertibles | `boyd2` | 100 | 204 | 214 | Identidad; diagonal (invertible si y solo si entradas no nulas, A⁻¹ = diag(1/Aᵢᵢ)); A = [1 −2 3; 0 2 2; −3 −4 −4] con A⁻¹ = (1/30)[0 −20 −10; −6 5 −2; 6 10 2] (verificado numéricamente); fórmula 2 × 2 con A₁₁A₂₂ ≠ A₁₂A₂₁; ortogonal con A⁻¹ = Aᵀ |
| 11.2 Transpuesta, producto y potencias negativas | `boyd2` | 101-102 | 205-206 | 215-216 | (Aᵀ)⁻¹ = (A⁻¹)ᵀ (A⁻ᵀ); **(AB)⁻¹ = B⁻¹A⁻¹** (11.2); base dual (pág. 101): β = A⁻¹x da los coeficientes de x en la base de las columnas de A, ejemplo a₁ = (1,1), a₂ = (1,−1) y x = (−5, 1) = (−2)a₁ + (−3)a₂ (verificado); A⁻ᵏ = (A⁻¹)ᵏ (pág. 102) |
| 11.2 Triangulares y QR | `boyd2` | 102 | 206 | 216 | Una triangular con diagonal no nula es invertible (por sustitución, columnas independientes); A⁻¹ = (QR)⁻¹ = R⁻¹Qᵀ (11.3) |
| 11.3 **Sustitución hacia atrás** | `boyd2` | 103-104 | 207-208 | 217-218 | Resolver Rx = b con R triangular superior de diagonal no nula (xₙ primero, luego xₙ₋₁...): Algorithm 11.1 (pág. 103); sustitución hacia adelante para triangulares inferiores; costo n² flops (1 + 3 + 5 + ... + (2n − 1)) con la demostración del emparejamiento (pág. 103-104) |
| 11.3 Resolver sistemas con QR | `boyd2` | 104-105 | 208-209 | 218-219 | x = R⁻¹Qᵀb (11.4); **Algorithm 11.2** (QR, Qᵀb, sustitución hacia atrás), costo 2n³ + 3n² ≈ 2n³ (pág. 104); método factor-resolver; varias partes derechas con la misma A (caché de la factorización, pág. 105); notación A\b; calcular la inversa por Algorithm 11.3 (≈ 3n³ flops, pág. 105) |
| 11.3-11.4 Sistemas esparsos y ejemplos | `boyd2` | 106-109 | 210-213 | 220-223 | Resolver con QR para esparsas (pág. 106); interpolación polinomial cúbica, Fig 11.1-11.2 con polinomios de Lagrange (pág. 106-108); balanceo de la reacción del dicromato, solución (1, 6, 14, 2, 6, 7) (pág. 107-109); difusión de calor, Fig 11.3 (pág. 109-110) |
| 11.5 **Gram invertible si y solo si columnas independientes** | `boyd2` | 110 | 214 | 224 | **Teorema (con demostración)**: A de m × n tiene columnas independientes si y solo si la matriz de Gram AᵀA (n × n) es invertible. Ida: (AᵀA)x = 0 ⇒ 0 = xᵀAᵀAx = ∥Ax∥² ⇒ Ax = 0 ⇒ x = 0; vuelta: si Ax = 0 con x ≠ 0 entonces (AᵀA)x = 0 y AᵀA es singular. Une Gram, simétrica e independencia |
| 11.5 Pseudoinversa | `boyd2` | 110-111 | 214-215 | 224-225 | A† = (AᵀA)⁻¹Aᵀ (11.5), llamada de Moore-Penrose; inversa izquierda de una A alta o cuadrada con columnas independientes ((AᵀA)⁻¹AᵀA = I); si A es cuadrada es A⁻¹. Para A cuadrada o ancha con filas independientes: A† = Aᵀ(AAᵀ)⁻¹ (11.6), inversa derecha (pág. 111). Solo se define como inversa para esos casos; en los demás (columnas o filas dependientes) no es inversa de ningún tipo; remite al ejercicio 15.11 |
| 11.5 Pseudoinversa por QR; resolver sobre y subdeterminados | `boyd2` | 111-112 | 215-216 | 225-226 | A† = R⁻¹Qᵀ si A tiene inversa izquierda (costo 3mn²), A† = QR⁻ᵀ si tiene derecha; (Aᵀ)† = (A†)ᵀ (pág. 111-112). Si las columnas son independientes y Ax = b tiene solución, es x = A†b; si las filas son independientes x = A†b es solución para cualquier b. Ejemplo numérico: A = [−3 −4; 4 6; 1 1], Q y R a 4 dígitos, A† = [−1.2222 −1.1111 1.7778; 0.7778 0.8889 −1.2222] (verificado con `np.linalg.pinv`), x = A†(1, −2, 0) = (1, −1) (pág. 112) |
| Ejercicios 11.1 a 11.3 | `boyd2` | 113 | 217 | 227 | 11.1: combinaciones afines de inversas izquierdas; 11.2: ¿tiene un vector inversa izquierda? ¿derecha?; 11.3: cancelación matricial (de AX = AY a X = Y si A es invertible por la izquierda) |
| 12.2 Ecuaciones normales (conexión con Gram) | `boyd3` | 7-8 | 229-230 | 239-240 | AᵀAx̂ = Aᵀb (12.4) y x̂ = (AᵀA)⁻¹Aᵀb = A†b; es la misma fila del cap. 12 de arriba (PDF 239-240), aquí con la página del archivo `boyd3`; usa que la Gram de columnas independientes es invertible (11.5) |

### Lo que el libro NO trae
- **No hay eliminación gaussiana ni forma escalonada**: el libro resuelve sistemas cuadrados con QR y sustitución hacia atrás (Algorithm 11.2) y no usa la reducción por filas. Tampoco aparecen **determinante**, **rango** ni **espacio nulo** como términos (grep sin resultados en los tres archivos); el papel del rango lo hacen "columnas (o filas) independientes" y "alta, ancha, cuadrada". Para eliminación, rango y determinantes hay que ir a Hefferon.
- **Matriz simétrica**: solo la definición A = Aᵀ y el ejemplo de la matriz de adyacencia (impresa 116), más que la Gram es simétrica (181) y el ejercicio 10.36 de la parte simétrica (A + Aᵀ)/2 (197). No hay teorema espectral, autovalores, diagonalización ni la propiedad de definida positiva; el libro no menciona autovalores en ningún lugar de los caps. 1 a 3 (búsqueda en el texto sin resultados).
- **Matriz ortogonal**: no demuestra que las filas también sean ortonormales (AAᵀ = I) ni que det = ±1; sí deja ver A⁻¹ = Aᵀ (204). Tampoco da el nombre "matriz ortonormal" para la rectangular. La demostración de que preserva norma, producto interno y ángulo es para A de m × n con columnas ortonormales (no solo cuadrada).
- **Independencia lineal**: da la definición, la unicidad de coeficientes, la desigualdad independencia-dimensión y Gram-Schmidt como prueba; no define subespacio, subespacio generado (span) ni dimensión de un subespacio (la búsqueda de esos términos en `boyd1` y `boyd2` no da resultados); "dimensión" solo se usa para el tamaño de un vector o de una matriz.
- **Inversa**: da condiciones por independencia, no por determinante; la fórmula de la inversa 2 × 2 está en 204 con la condición A₁₁A₂₂ ≠ A₁₂A₂₁ (equivalente al determinante, que el libro no nombra).

### Erratas e inconsistencias de esta ampliación
- **Impresa 197 (`boyd2` pág. 93), ejercicio 10.40**: escribe "Qᵢ = A₁:n,₁:i" cuando debería ser Qᵢ = Q₁:n,₁:i (copia mal el símbolo; se ve porque Aᵢ ya se definió igual en la línea anterior).
- **Impresa 209 (`boyd2` pág. 105)**: en la factorización en caché escribe "x̂ₖ = R⁻¹Qᵀbₖ para l = 1, ..., k"; el índice del cálculo debería ser el mismo (ℓ o k) en los dos lados. Es un descuido de notación sin consecuencia.
- **Impresa 90 (`boyd1` pág. 90)**: "2β₃ = −0" en el ejemplo de independencia; debería ser 2β₃ = 0 (ya anotada arriba con la numeración del PDF único: PDF 100).
- **Terminología**: el libro llama "ortogonal" solo a la cuadrada con AᵀA = I (impresa 189); en otros libros y en el material del máster es habitual decir "columnas ortonormales" para la rectangular y "ortogonal" para la cuadrada, igual que aquí, pero algunos textos llaman "ortonormal" a la matriz ortogonal. La página debe avisar al lector.
- Comprobaciones numéricas hechas (todas correctas): BA = CA = I (impresa 200), A⁻¹ de 3 × 3 (204), base dual (205), b = 0.6513 a₁ − 0.7280 a₂ (93), A† (216), QQᵀ del ejemplo (5.3).

### Búsqueda rápida por concepto (ampliación)
- **Matriz ortogonal**: `boyd2` pág. 85-86 (impresa 189-190) la definición AᵀA = I y las tres propiedades; pág. 100 (204) A⁻¹ = Aᵀ; pág. 96 (200) Aᵀ es inversa izquierda; ejemplos en pág. 25-26 (rotación, reflexión) y 28 (permutación); ejercicios en pág. 92-93.
- **Matriz simétrica**: `boyd2` pág. 12 (116) definición con el ejemplo de la red social; pág. 77 (181) la Gram es simétrica; pág. 93 (197) ejercicio 10.36 parte simétrica.
- **Matriz de Gram**: `boyd2` pág. 77 (181) definición y ejemplo de grupos; pág. 110 (214) Gram invertible si y solo si columnas independientes; pág. 85 (189) ortonormales con AᵀA = I; ejercicios en pág. 88-89 (192-193); `boyd3` pág. 7-8 (229-230) ecuaciones normales.
- **Independencia lineal**: `boyd1` pág. 89-90 (89-90) definición y ejemplos; pág. 91 (91) coeficientes únicos; pág. 92-93 (92-93) base; pág. 95-96 (95-96) ortonormales; pág. 97-101 (97-101) Gram-Schmidt como prueba con el ejemplo numérico; `boyd2` pág. 17 (121) Ax = 0.
- **Base y dimensión**: `boyd1` pág. 91-94 (91-94); desigualdad independencia-dimensión, pág. 91 (enunciado) y 94-95 (demostración).
- **Inversas izquierda y derecha**: `boyd2` pág. 95-98 (199-202); inversa pág. 98-99 (202-203); ejemplos pág. 100-102 (204-206).
- **Sistemas de ecuaciones lineales**: `boyd2` pág. 48-49 (152-153) definición y ejemplos; pág. 99 (203) x = A⁻¹b; pág. 103-105 (207-209) sustitución hacia atrás y resolver con QR; pág. 111-112 (215-216) sobre y subdeterminados con pseudoinversa.
