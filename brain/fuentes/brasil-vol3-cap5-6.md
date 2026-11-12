# Mapa de citas: Brasil, "Before Machine Learning, Vol. 3: Probability and Statistics", caps. 5 y 6

Carpeta: `/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Before-ML-Vol3-ProbStats/`.
Cada capítulo es un archivo suelto: la "pág. PDF" es la del archivo del capítulo (1 = primera hoja de ese archivo).
Sin código Python ni R en estos dos capítulos: las simulaciones se delegan a "the computer" o "software". El libro promete
el código (cap. 5 PDF 57: "The code for the method will be available"; cap. 6 PDF 22: "code notebooks accompanying this book"),
pero no aparece en el texto. Continúa el plan del robo de Amberes: el código del garaje (Markov), los ángulos de las cámaras
(Gibbs) y el reclutamiento de un ladrón de cajas fuertes (modelo jerárquico y Metropolis-Hastings). Datos inventados.
El cap. 6 cierra el libro (despedida en PDF 24-25).

Correspondencia PDF / impresa (verificada en el número de pie de página):
- cap. 5: PDF = impresa − 290 (PDF 2 = p. 292, PDF 35 = p. 325, PDF 69 = p. 359; PDF 1 = p. 291 sin número)
- cap. 6: PDF = impresa − 359 (PDF 2 = p. 361, PDF 14 = p. 373, PDF 25 = p. 384; PDF 1 = p. 360 sin número)

## Búsqueda rápida por tema

| Tema | Dónde | Nota |
|---|---|---|
| Proceso estocástico | cap. 5 PDF 1-3 (p. 291-293) | variables aleatorias, conjunto de índices, espacio de estados; ejemplo del teclado |
| Propiedad de Markov | cap. 5 PDF 3-4 (ec. 5.2-5.3) | "sin memoria"; Fig 5.1 |
| Cadena de Markov | cap. 5 PDF 4 (sección 5.1.1) | estados y probabilidades de transición |
| Matriz de transición | cap. 5 PDF 5-7 (ec. 5.5-5.7), PDF 19 (ec. 5.14 con Start y Enter) | de frecuencias a probabilidades por filas; propiedades en PDF 6-7 |
| Evolución v_n = v_0 P^n | cap. 5 PDF 8-12 (ec. 5.8-5.11) | vector de estado inicial uniforme |
| Distribución estacionaria | cap. 5 PDF 12-15 (πP = π, ec. 5.13) | norma de Frobenius entre potencias de P (Fig 5.4); π con 69% en el 9 |
| Irreducible, aperiódica, ergódica | cap. 5 PDF 16-18 | Fig 5.6 y 5.7; estado absorbente Enter en PDF 19 |
| Simular una cadena con la CDF discreta | cap. 5 PDF 21-24 | número aleatorio → intervalo de la CDF de la fila; 10000 códigos (5.17) |
| Distribución conjunta y condicional | cap. 5 PDF 29-30 (ec. 5.20-5.21) | producto = independencia; f(x1)f(x2 \| x1) |
| Normal multivariante | cap. 5 PDF 30-37 (deducción), PDF 35 (ec. 5.30) | forma cuadrática, determinante; ejemplo µ = (2, 4), Σ = [[1, 0.5], [0.5, 2]] |
| Normal condicional (fórmulas) | cap. 5 PDF 44-46 (ec. 5.43-5.44), PDF 51-52 (versión con vectores, ec. 5.49-5.50) | |
| MCMC | cap. 5 PDF 40-41 (sección 5.2.2); cap. 6 PDF 2-3 | "Markov Chain Monte Carlo" como término paraguas |
| Muestreo de Gibbs | cap. 5 PDF 38-41 (idea), 41 (algoritmo 5.2.2.1), 43-49 (normal 2D a mano), 51-61 (cuatro cámaras) | tabla 5.2 con diez puntos; Fig 5.12 |
| Burn-in | cap. 5 PDF 43 | también lo llama "burnout" |
| Convergencia, trazas, autocorrelación | cap. 5 PDF 41-42 (idea, analogía de la ciudad), 57-59 (trazas Fig 5.13-5.16 y autocorrelación) | las cuatro figuras de trazas son imágenes |
| Metropolis-Hastings | cap. 6 PDF 3-6 (deducción, ec. 6.2-6.4), 12-15 (ejemplo 2D), 15-21 (modelo jerárquico) | propuesta simétrica vs asimétrica en PDF 4 |
| Distribución exponencial | cap. 6 PDF 7-9 (sección 6.1.1) | PDF, CDF, E = 1/λ, Var = 1/λ²; Fig 6.1 (λ = 0.5, 1, 2) |
| Previa conjugada Gamma (exponencial) | cap. 6 PDF 11 | posterior Gamma(α + n, β + Σx) |
| Previa conjugada Beta (binomial) | cap. 5 PDF 66-67 (ec. 5.61-5.62); cap. 6 PDF 19-20 (ec. 6.16 y posterior de p_ij) | |
| Modelo bayesiano jerárquico | cap. 5 PDF 64-69 (tabla 5.4, ec. 5.58-5.65, tres niveles y diagrama); cap. 6 PDF 1-2 (forma general, ec. 6.1), 15-23 (estimación y resultados) | factor K de concentración (ec. 5.65) |
| Intervalos creíbles | no aparecen | ni en el cap. 5 ni en el 6; los resultados finales son solo valores esperados (cap. 6 PDF 22) |
| LDA (aplicación de Gibbs en NLP) | cap. 5 PDF 61-62 | solo mención |

## Cap. 5 Just Tell Me about Yesterday: Insights from Markov Models (archivo `05 Cap 5 Markov Models.pdf`, 69 págs., impresas 291-359)
| Tema | pág. PDF | pág. impresa | Notas |
|---|---|---|---|
| Propiedad de Markov (introducción) | 1 | 291 | "memoryless"; anuncia el proceso estocástico |
| 5.1 Proceso estocástico | 1-3 | 291-293 | teclado del garaje; estado y espacio de estados (ec. 5.1: 0,1,2,3,4,9, Start, Enter); faltan 5-8 en los datos; tres características en lista |
| Markov y procesos estocásticos; probabilidad de transición | 3-4 | 293-294 | Fig 5.1 |
| 5.1.1 Cadenas de Markov; ec. de la propiedad de Markov | 4 | 294 | ec. 5.2 y ejemplo 5.3 |
| Matriz de frecuencias y normalización por filas | 5-6 | 295-296 | espacio solo de dígitos (5.4); matriz 5.5; P(4 \| 0) = P(9 \| 0) = ½; matriz 5.6 |
| Propiedades de la matriz de transición | 6-7 | 296-297 | tamaño n × n, entradas p_ij, filas suman 1, no negativas; forma general |
| Matriz 5.7 con todo el conjunto de datos | 7-8 | 297-298 | de una secuencia B, C, B, C, A, B, F a pares |
| Vector de estado inicial v0 | 8-9 | 298-299 | ec. 5.8 (0.16 en cada estado); Fig 5.2 |
| v1 = v0 · P | 9-11 | 299-301 | ec. 5.9; v1[0] = 0.144; v1 = [0.144, 0.16, 0.096, 0.176, 0.112, 0.272]; Fig 5.3 |
| v_n = v0 · P^n | 11-12 | 301-302 | ec. 5.10-5.11; v7 con 55% en el 9 |
| Norma de Frobenius entre potencias de P | 12-13 | 302-303 | ec. 5.12; P y P² escritas; Fig 5.4 (se estabiliza hacia n = 15) |
| Distribución estacionaria πP = π | 13-15 | 303-305 | autovector con λ = 1 (ec. 5.13); π = [0.112, 0.053, 0.031, 0.051, 0.06, 0.69]; Fig 5.5; estacionaria vs histograma |
| Caso de uso: atribución de canales de marketing | 15-16 | 305-306 | PPC, Email, Display, Direct |
| Irreducibilidad, aperiodicidad, ergodicidad | 16-18 | 306-308 | Fig 5.6 (irreducible vs no); Fig 5.7 (aperiódica vs periódica de periodo 3) |
| Start y Enter; matriz 5.14 | 18-19 | 308-309 | Enter es absorbente: se pierde la ergodicidad |
| Transiciones desde Start y desde 3 | 19-20 | 309-310 | Fig 5.8 y 5.9 |
| Generar números aleatorios; la semilla | 21-22 | 311-312 | por qué no elegir por cercanía a la probabilidad |
| CDF discreta de una fila e intervalos | 22-24 | 312-314 | el orden de los estados no importa; ec. 5.15-5.16; pasos del muestreo |
| 10000 códigos simulados | 24 | 314 | 5.17: Start → 0 → 4 → 9 → Enter, 478 veces |
| Resumen del recorrido (binomial, Poisson, Bayes, Naive Bayes, Markov) | 24-26 | 314-316 | |
| Pasillo en L y tabla 5.1 de ángulos de cámaras | 26-27 | 316-317 | Fig 5.10; 19 franjas de 10 min, cuatro cámaras; 0° y 180° como ángulos muertos |
| Por qué no muestrear cada cámara por separado | 28 | 318 | dependencia en el tiempo (ec. 5.18) y entre cámaras |
| 5.2 Distribuciones multivariantes: conjunta de dos normales | 28-30 | 318-320 | ec. 5.19-5.20 (producto = independencia); ec. 5.21 con la condicional |
| Matriz de covarianza en el exponente | 30-32 | 320-322 | ec. 5.22-5.27: de (x − µ)²/σ² a la forma cuadrática (x − µ)ᵀΣ⁻¹(x − µ) |
| Factor de normalización y determinante | 32-34 | 322-324 | ec. 5.28-5.29; Fig 5.11 (dos campanas y la elipse) |
| 5.2.1 Normal multivariante | 35 | 325 | ec. 5.30; menciona GMM |
| Ejemplo: µ = (2, 4), Σ = [[1, 0.5], [0.5, 2]] | 35-37 | 325-327 | \|Σ\| = 1.75; Σ⁻¹; densidad en (1, 2) ≈ 0.038; probabilidad del rectángulo [1,2] × [2,4] = 0.141 |
| Cuando las variables no son normales; condicionales | 37-39 | 327-329 | ec. 5.31-5.32; idea de actualizar una cámara cada vez |
| Ciclo de actualización de las cuatro cámaras | 39-40 | 329-330 | ec. 5.33: C0 → C1 → ... → Cn, "Markov otra vez" |
| 5.2.2 Markov Chain Monte Carlo | 40-41 | 330-331 | |
| 5.2.2.1 Muestreo de Gibbs: algoritmo | 41 | 331 | inicialización, muestreo iterativo de cada condicional, convergencia |
| Convergencia: analogía de la ciudad nueva | 42 | 332 | |
| Gibbs en la normal 2D; burn-in | 43 | 333 | ec. 5.34 |
| Deducción de la normal condicional | 44-46 | 334-336 | ec. 5.35-5.44; inversa 2 × 2 (5.38); completar el cuadrado; µ_{X1\|X2} y σ²_{X1\|X2} |
| Primer paso de Gibbs a mano | 47-48 | 337-338 | X(0) = (0, 0); X1 ~ N(1, 0.875) → 0.995; X2 ~ N(3.50, 1.75) → 3.632 |
| Diez puntos de Gibbs | 48-49 | 338-339 | tabla 5.2; Fig 5.12; medias 1.611 y 2.652 (ec. 5.46) |
| Elegir la distribución para las cámaras | 49-51 | 339-341 | normal vs Gamma (asimetría); por qué un muestreador si hay fórmula |
| Normal condicional con vectores | 51-53 | 341-343 | ec. 5.47-5.50; C_B = (C2, C3, C4); matriz particionada 5.51 |
| Gibbs con cuatro cámaras: primer punto a mano | 53-57 | 343-347 | C(0) = (160, 150, 140, 45) (5.52); µ (5.53) y Σ; Σ_CB⁻¹; C1 ~ N(141, 31.20) → 135.88 (5.54); C(1) = (135.88, 115.6, 127.25, 52.13) |
| Diagnóstico de convergencia: trazas y autocorrelación | 57-59 | 347-349 | 10000 muestras; Fig 5.13-5.16 (imágenes); truncar a [0, 360] rechazando |
| Punto ciego: función indicadora | 59-60 | 349-350 | periscopio; ángulo < 35° o > 115°; ec. 5.56-5.57 |
| Probabilidad condicional por conteo | 61 | 351 | tabla 5.3; P(C3 y C4 ciegas \| C1 y C2 ciegas) ≈ 50% |
| Gibbs en NLP: LDA | 61-62 | 351-352 | MCMC como "integración numérica" |
| La bóveda | 62-64 | 352-354 | Fig 5.17; cómo la abrieron los ladrones reales |
| Datos del reclutamiento | 64-65 | 354-355 | tabla 5.4: Alice, Bob, Charlie en V001-V003, 20 intentos cada uno |
| Verosimilitud binomial y p_ij | 66 | 356 | ec. 5.58 (p común) y ec. 5.59 (p_ij por ladrón y bóveda) |
| Habilidad global θ_i con previa Beta | 66 | 356 | ec. 5.60-5.61 |
| Beta(θ_i, 1 − θ_i) y el factor K | 67-68 | 357-358 | ec. 5.62-5.65; E[X] = α/(α + β) (5.63) |
| Tres niveles y diagrama del modelo jerárquico | 68-69 | 358-359 | binomial ← Beta(θK, (1 − θ)K) ← Beta(α, β); "Hierarchical Bayesian models" |

## Cap. 6 Structured Uncertainty: Hierarchical Bayesian Models (archivo `06 Cap 6 Hierarchical Bayesian Models.pdf`, 25 págs., impresas 360-384)
| Tema | pág. PDF | pág. impresa | Notas |
|---|---|---|---|
| Modelos bayesianos jerárquicos: forma general | 1-2 | 360-361 | capa de datos F(θ_ij, ϕ), de parámetros G(ψ_i, τ), de hiperparámetros H(λ) (ec. 6.1); ventajas |
| Por qué MCMC para estimarlos | 2 | 361 | anuncia un algoritmo distinto de Gibbs |
| 6.1 Metropolis-Hastings: propuesta Q(x′ \| x) | 3-4 | 362-363 | comparación con Gibbs; propuesta simétrica vs asimétrica |
| Criterio de aceptación | 4-6 | 363-365 | densidad posterior (ec. 6.2); cociente 6.3; corrección por la propuesta (ec. 6.4); caso simétrico min(1, cociente); u ~ U[0, 1] y aceptar si u ≤ α |
| 6.1.1 Distribución exponencial | 7-9 | 366-368 | f = λe^(−λx); F = 1 − e^(−λx); E = 1/λ; Var = 1/λ²; Fig 6.1; efecto de λ; por qué λ > 0 |
| Datos de dos variables exponenciales | 9-10 | 368-369 | tabla 6.1 (diez pares); primera y segunda compra de un cliente |
| Verosimilitud exponencial, univariante y conjunta | 10-11 | 369-370 | λⁿ e^(−λΣx) |
| Previas: Gamma (univariante) y log-normal bivariante | 11 | 370 | log(λ1), log(λ2) ~ N(µ, Σ) para que λ > 0 |
| Posteriores | 11-12 | 370-371 | Gamma(α + n, β + Σx); posterior bivariante proporcional |
| Valores de la previa y propuesta normal en escala log | 12-13 | 371-372 | µ = (−1, −0.5), Σ = [[0.75, 0.3], [0.3, 0.5]]; propuesta N(log λ, 0.1 · I) (ec. 6.5) |
| Primer paso de MH a mano | 13-14 | 372-373 | λ(0) = (1, 1); propuesta (−0.3195, −0.1590) → (0.7265, 0.8530); ec. 6.8-6.11; α = min(1, 1.440) = 1, se acepta |
| Volver al reclutamiento: ocho ladrones, cinco bóvedas | 15 | 374 | ejemplo reducido con dos ladrones y dos bóvedas; repaso de los tres niveles |
| Inicialización de θ y p_ij | 16 | 375 | θ_Alice = 0.7, θ_Bob = 0.5; K = 10; p_ij ~ Beta(7, 3) y Beta(5, 5); muestras 0.628, 0.493, 0.134, 0.580 |
| Propuesta por perturbación θ′ = θ + ε | 17-18 | 376-377 | ε ~ N(0, 0.02); θ′ = 0.715 y 0.490; nuevas p′_ij |
| Cocientes de aceptación α_θ y α_p | 18-20 | 377-379 | ec. 6.12-6.15; posterior Beta de θ (ec. 6.16) con previa uniforme α = β = 1 |
| Los seis α y la tabla de aceptación | 20-21 | 379-380 | α_θ = 1 y 0.931; α_p = 1, 0.192, 1, 1; tabla 6.2 con u = 0.05 |
| Resultados tras 1000 muestras | 22-23 | 381-382 | tabla 6.3 (θ por ladrón, Alice 0.625 la mejor); tabla 6.4 (p_ij por ladrón y bóveda) con comentario por ladrón |
| Cierre de la historia y del libro | 23-25 | 382-384 | captura de Notarbartolo; resumen de los seis capítulos; despedida |

## Erratas e inconsistencias (citar con naturalidad en las páginas)
Cap. 5
- PDF 2: dice que t = 0 debe ser Start, pero dos líneas antes X1 es Start. En PDF 3 el espacio de estados incluye "all digits from 0 to 9", aunque el 5, 6, 7 y 8 no aparecen en los datos.
- PDF 8-9: el vector inicial pone 0.16 en cada estado y suma 0.96, no 1 (el texto dice 16.66%; debería ser 1/6). La Fig 5.2 dibuja un estado 5 que no está y el texto dice "from 0 through 9". En PDF 10 afirma que las entradas de v1 suman 1; también suman 0.96.
- PDF 10: dice "la primera columna de P", pero escribe la primera fila (0, 0.2, 0, 0, 0.4, 0.4) y además pone 0.02 donde va 0.2. El resultado 0.144 sí corresponde a la columna (0, 0.2, 0.1, 0.1, 0.4, 0.1).
- PDF 13: ‖P − P²‖_F = 1.200, no 1.439 (la P² que muestra en PDF 12 es correcta).
- PDF 19: en la matriz 5.14 la fila del 0 suma 0.99.
- PDF 22-24: los intervalos de la CDF de la fila del 3 están mal etiquetados. El ejemplo de PDF 22 asigna "0.2 a 0.45" al dígito 2. En PDF 23, 5.15 suma "0.25 + 0.75" para el 4 y los intervalos llaman "State 3" a ]0.5, 0.75], que es el 2 (desde el 3 no se puede ir al 3). En PDF 24 un 0.65 "selecciona el 3", y el paso 3 de la lista dice solo "Now, state 2".
- PDF 24: los conteos de 5.17 no salen de la matriz 5.14. Con esa matriz, P(Start → 0 → 4 → 9 → Enter) = 0.3 · 0.28 · 0.2 · 0.8 = 0.0134, unos 134 de cada 10000, no 478. Los demás serían unos 100, 80, 64 y 24 (el libro da 373, 321, 241 y 120).
- PDF 35: "Equation 5.29 depicts the density" y PDF 36 "substitute ... into the equation 5.29": es la 5.30 (la 5.29 es solo el factor de normalización).
- PDF 37: la probabilidad de 1 ≤ x1 ≤ 2, 2 ≤ x2 ≤ 4 da 0.163, no 0.141. La densidad en (1, 2) ≈ 0.038 sí es correcta.
- PDF 31: quedó en el texto una nota interna del autor: "[REMEMBER TO USE THIS AS AN UPSELL!]".
- PDF 38: habla de las cuatro cámaras "in table 5.3"; los ángulos están en la tabla 5.1 (la 5.3 aparece en PDF 61). Lo mismo en PDF 54 ("our dataset 5.3").
- PDF 41 y 43: escribe "conversion" por convergencia y "burnout" por burn-in.
- PDF 45: cita como "6.7" la ecuación 5.37 (dos veces) y escribe "how X1 impacts X1".
- PDF 45-46: en 5.39 el término dentro del cuadrado lleva "+ σ12/σ2² (x2 − µ2)", pero debe ser "−". El resultado 5.41/5.43, µ1 + (σ12/σ2²)(x2 − µ2), sí es correcto. La 5.42 llama σ a lo que es la varianza σ².
- PDF 47: µ_{X2 \| X1 = 0.995} = 4 + 0.5 · (0.995 − 2) = 3.4975, no 3.5025 (cambia el signo del ajuste). No altera la muestra siguiente, que se redondea a N(3.50, 1.75).
- PDF 49: dice que las medias 1.611 y 2.652 "se alinean" con 2 y 4. Son solo diez puntos que empiezan en (0, 0), sin descartar burn-in, y la de X2 está lejos de 4. Las medias de la tabla 5.2 sí están bien calculadas.
- PDF 49: justifica la normal con "la previa conjugada de la normal es normal", pero en Gibbs no hay previa: se muestrea de condicionales.
- PDF 53-54: la condicional de C1 escribe "C3 = 45", que es C4. En 5.51 el bloque superior derecho se rotula Σ_{CB C1} (sería Σ_{C1 CB}).
- PDF 54: el vector de medias 5.53 (80.95, 66.32, 90.16, 68.95) no coincide con las medias de la tabla 5.1 (84.11, 68.79, 90.16, 77.11): solo la cámara 3 cuadra. La Σ de varianzas 100 tampoco es la covarianza de esos datos: las varianzas muestrales van de unos 2200 a 6000, y la cámara 4 tiene covarianza negativa con las otras. Conviene presentarla como Σ supuesta.
- PDF 55: con esa Σ, Σ_{C1CB} Σ_CB⁻¹ = (0.64, 0.19, 0.10), no (0.64, 0.2, 0.14). La media de C1 da 141.8 (≈ 141 está bien) y la varianza 32.84, no 31.20.
- PDF 56-57: las condicionales de C2, C3 y C4 no salen de esa Σ. Con Σ las varianzas condicionales son 32.8, 59.5 y 81.5, y las medias 108.7, 128.7 y 91.8. El libro da 466.88, 2681.74 y 544.67 con medias 105.97, 118.20 y 43.72. Una varianza condicional nunca puede superar la marginal (100), así que esos tres valores son imposibles.
- PDF 59-61: el punto ciego se define como θ < 35° o θ > 115°, aunque PDF 27 decía que los ángulos muertos son 0° y 180°. La tabla 5.3 copia la fila 00:00 con C4 = 25, pero en la tabla 5.1 es 45.
- PDF 64: dice "top five" bóvedas y "eight different thieves", y luego "5 skilled thieves attempting to breach 8 unique vaults" (invertido). El cap. 6 confirma ocho ladrones y cinco bóvedas.
- PDF 67-68: dice que Beta(θ, 1 − θ) concentra demasiado la distribución alrededor de θ y por eso introduce K. Es al revés. Con α + β = 1 la varianza es θ(1 − θ)/2, la mayor posible para esa media (en forma de U), y K = 10 la reduce a θ(1 − θ)/11. K es un factor de concentración: más K, más estrecha.

Cap. 6
- PDF 4: dice que rechazar un punto significa que está fuera del "rectángulo" de la distribución. En MH se rechaza por baja densidad relativa, no por estar fuera del soporte.
- PDF 5: la ec. 6.2 escribe posterior = verosimilitud · previa con "=" (es ∝). Dice que la ventaja de MCMC es evitar esa multiplicación; lo que evita es la constante de normalización P(data), que se cancela en el cociente 6.3.
- PDF 5-6: la ec. 6.4 escribe min(cociente) sin el 1. Así no queda garantizado que α esté en [0, 1], que es lo que dice el texto. La forma con el 1 aparece en la versión simétrica de PDF 6 y en la 6.8.
- PDF 10: llama P(λ1 \| x1i) al producto de densidades, que es la verosimilitud (en PDF 11 ya la escribe L).
- PDF 11: la Σ de la previa log-normal tiene σ1σ2 fuera de la diagonal, que es correlación 1 y deja una matriz singular. Debería ser ρσ1σ2. Llama "Gamma function" a la distribución Gamma.
- PDF 12 y 14: la posterior bivariante usa la previa Gamma, (λ1λ2)^(α−1) e^(−β(λ1+λ2)), no la log-normal que acababa de elegir, y no da valores de α y β. Con esa previa λ1 y λ2 son independientes y no se captura la dependencia que motivaba el ejemplo.
- PDF 13-14: la propuesta es simétrica en log λ, no en λ. Si la densidad objetivo se evalúa en λ, falta el jacobiano λ′/λ (corrección de Hastings). El α = 1.440 no se puede reproducir: con los datos de la tabla 6.1 el cociente de verosimilitudes solo ya vale 7.42; con la previa log-normal sale 10.7 (6.6 con jacobiano). La decisión (aceptar) no cambia.
- PDF 14-15 y 21: dice que, si se rechaza, se vuelve a proponer "hasta que algún par sea aceptado". En MH, si se rechaza, el estado actual se repite como muestra siguiente. Volver a proponer hasta aceptar sesga la cadena.
- PDF 15: "the exact same thing as we did for λ(2) but ... around that vector λ(2)": es λ(1).
- PDF 16: dice que θ_Alice = 0.7 y θ_Bob = 0.5 son el promedio de sus tasas por bóveda. Con la tabla 5.4 serían 0.517 y 0.583 (V001-V003) o 0.625 y 0.525 (V001-V002).
- PDF 17-18: propone θ′ = 0.715 y 0.490, pero las Beta de p′_ij usan 0.7223 y 0.5037. Escribe "Alex" por Alice.
- PDF 18-19: la posterior de θ (6.16) trata θ como si fuera directamente la probabilidad binomial e ignora el nivel p_ij. Además, el producto sobre j se escribe con un solo y_ij.
- PDF 19: y_Bob,V002 = 10, pero la tabla 5.4 da 13 éxitos.
- PDF 20: los parámetros de las Beta no salen de los datos. Con α = β = 1 y los conteos de PDF 19 serían Beta(26, 16) para Alice y Beta(19, 23) para Bob; el libro usa Beta(27, 17) y Beta(20, 24). Con sus propios parámetros, los cocientes dan 0.764 para Alice (no 1.043) y 1.074 para Bob (no 0.931; el 0.931 es el inverso). Con los parámetros correctos dan 0.787 y 1.075. Como u = 0.05, se aceptan igual.
- PDF 21: en α_p de Bob, V001 escribe (1 − 0.581) donde va (1 − 0.490); el 374.49 sí corresponde a 0.490. En Bob, V002 el denominador evalúa p = 0.389 en vez del p(0) = 0.580: con 0.580 el cociente es 0.741, no 1.04. α_p de Alice (2.392 y 0.192) es correcto.
- PDF 21: dice que u se saca "from a normal distribution" (es uniforme en [0, 1]) y usa una sola u para los seis parámetros.
- PDF 22: la tabla 6.4 no es coherente con la tabla 5.4. Alice en V003 tiene 6 de 20 éxitos y queda con p = 0.609 (con K = 10 y θ ≈ 0.62 la posterior conjugada daría ≈ 0.41). Charlie en V001 tiene 12 de 20 y queda con 0.436. Las filas bajan casi linealmente de V001 a V005. Alice V004 aparece con cuatro decimales (0.6413).
- PDF 24: dice que el modelo identificó "two candidates", pero en PDF 23 elige solo a Alice.

Tono del autor: el mismo de los capítulos anteriores, informal, con chistes y alguna grosería. Deduce cada fórmula "a mano" (la normal
multivariante, la normal condicional, el criterio de MH) y hace a mano un solo paso de cada algoritmo antes de pasar al
ordenador. Los ejemplos que conviene reusar en la biblioteca son la matriz 5.7 de seis dígitos (π con 69% en el 9), la normal
µ = (2, 4), Σ = [[1, 0.5], [0.5, 2]] para Gibbs y los datos de la tabla 5.4 para el modelo jerárquico. Hay que corregir las
cuentas señaladas arriba.
