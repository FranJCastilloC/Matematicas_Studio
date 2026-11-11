# Mapa de citas: Brasil, "Before Machine Learning, Vol. 3: Probability and Statistics", caps. 2 a 4

Carpeta: `/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Before-ML-Vol3-ProbStats/`.
Cada capítulo es un archivo suelto: la "pág. PDF" es la del archivo del capítulo (1 = primera hoja de ese archivo).
Sin código Python ni R en estos tres capítulos: los cálculos se delegan a "software" sin mostrarlo (cap. 3 PDF 119 promete
"all the code used in this book will be provided", pero no aparece en el texto).
Todo el libro es el plan de un robo al Diamond Center de Amberes (2003); el autor aclara que los datos son inventados (cap. 2 PDF 3).

Correspondencia PDF / impresa (verificada en el número de pie de página):
- cap. 2: PDF = impresa − 7 (PDF 2 = p. 9, PDF 30 = p. 37; PDF 1 = p. 8 sin número)
- cap. 3: PDF = impresa − 37 (PDF 2 = p. 39, PDF 100 = p. 137, PDF 208 = p. 245; PDF 1 = p. 38 sin número)
- cap. 4: PDF = impresa − 245 (PDF 2 = p. 247, PDF 45 = p. 290; PDF 1 = p. 246 sin número)

## Búsqueda rápida por tema

| Tema | Dónde | Nota |
|---|---|---|
| Operaciones de conjuntos | cap. 3 PDF 1-9 (p. 38-46) | unión, intersección, complemento, diferencia, producto cartesiano, joins SQL |
| Regla de la suma | cap. 3 PDF 12 (disjuntos, ec. 3.8) y PDF 14 (general, ec. 3.9) | p. 49 y 51 |
| Regla del producto | cap. 3 PDF 32 (solo independientes, P(A∩B)=P(A)P(B)); cap. 4 PDF 3 (general, P(A∩B)=P(B)P(A\|B)) | no tiene sección propia ni nombre |
| Probabilidad condicional | cap. 3 PDF 89-95 (def. ec. 3.89 en PDF 93) | ejemplo del contacto: texto vs llamada |
| Independencia | cap. 3 PDF 13-14 (anunciada), PDF 32 (definición e i.i.d.) | p. 50-51 y 69 |
| Probabilidad total | cap. 4 PDF 5 (ec. 4.9) | la llama "marginal probability"; no usa el nombre "ley de probabilidad total" |
| Teorema de Bayes | cap. 4 PDF 3-5 (ec. 4.7, 4.8) | ejemplo: bandera de Rita y partidos de fútbol |
| Variable aleatoria | cap. 3 PDF 17-18 | discreta vs continua, P(X = x) = 0 |
| PMF | cap. 3 PDF 179-180 (binomial), PDF 192 (Poisson) | |
| PDF (densidad) | cap. 3 PDF 22-27 | construida a mano hasta llegar a la normal |
| CDF | cap. 3 PDF 69-74 | def. ec. 3.65; propiedades PDF 72; f = F' en PDF 74 |
| Función cuantil | cap. 3 PDF 81-82 | ec. 3.74-3.75; sección 3.3.1.3 |
| Esperanza | cap. 3 PDF 38-41 (continua), PDF 45-49 (propiedades), PDF 180-181 (discreta) | |
| Varianza | cap. 2 PDF 27-28 (muestral); cap. 3 PDF 45-49 (como esperanza), 61-62 (Var(aX), Var(X+Y)) | |
| Asimetría y curtosis como momentos | cap. 3 PDF 50-57 | momentos en PDF 55-57 |
| Distribución normal | cap. 3 PDF 19-30, 41-44 | |
| Uniforme | cap. 4 PDF 23-24 | como Beta(1,1) |
| Binomial | cap. 3 PDF 172-189 | |
| Poisson | cap. 3 PDF 190-198 | como límite de la binomial |
| Exponencial | no aparece | solo se menciona "exponential decay" como tipo de función (cap. 3 PDF 25) |
| Ley de los grandes números | solo una mención de pasada, cap. 3 PDF 80 | sin enunciado ni sección |
| Teorema central del límite | cap. 3 PDF 58-64 | regla de 30 en PDF 166; binomial → normal en PDF 184 |
| Máxima verosimilitud | cap. 3 PDF 31-38 | |
| Intervalos de confianza | cap. 3 PDF 65-83, 143-146, 185-186, 195-197 | media (z y t), proporción, λ de Poisson |
| p-valor y contraste de hipótesis | cap. 3 PDF 83-101 | |
| Kolmogorov-Smirnov | cap. 3 PDF 112-122 | |
| Shapiro-Wilk | cap. 3 PDF 123-142 | |
| Chi-cuadrado | cap. 3 PDF 199-207 | bondad de ajuste a Poisson |
| Monte Carlo | cap. 3 PDF 118-121 (y 139-141 para SW) | |
| Tamaño de muestra | cap. 3 PDF 142-170; cap. 4 PDF 29, 42-43 | |

## Cap. 2 The Event: The Gem of a Plan (archivo `02 Cap 2 Descriptive Statistics.pdf`, 30 págs., impresas 8-37)
| Tema | pág. PDF | pág. impresa | Notas |
|---|---|---|---|
| Qué es un evento; el robo de Amberes | 1-2 | 8-9 | dado par = {2,4,6}; Notarbartolo y la "School of Turin" |
| Tabla 2.1 de cámaras; variables numéricas y categóricas | 2-4 | 9-11 | 35 cámaras por calle y marca; datos inventados (PDF 3) |
| Conteo por calle y media aritmética | 4-5 | 11-12 | tabla 2.2; ec. 2.1 (= 3.6) y ec. 2.2 |
| 2.1 / 2.1.1 Media y valores atípicos | 5-7 | 12-14 | Fig 2.1: una calle con 40 cámaras sube la media a 7.3 |
| Posición de la mediana (n+1)/2 | 7 | 14 | arreglo 2.3: 2,3,3,3,4,4,4,5,5 → mediana 4 |
| 2.1.2 Mediana, caso par | 8-9 | 15-16 | arreglo 2.4 con el 40: mediana 4; tabla 2.3 media 7.3 vs mediana 4; ejemplo de e-commerce |
| Primer cuartil, posición (n+1)/4 | 9-10 | 16-17 | ec. 2.5-2.7; P = 2.5 → Q1 = 3 |
| 2.1.3 Cuantiles: Q2, Q3, regla de interpolación | 10-12 | 17-19 | Q3 = 4.5; tabla 2.4; ec. 2.8 general; Fig 2.2 cuatro cajas y tres cuartiles |
| 2.1.3.1 Rango intercuartílico, deciles, percentiles | 13 | 20 | Fig 2.3; ec. 2.9; etiquetar churn con el decil 9 |
| Calles bajo la mediana y ruta de escape | 14-15 | 21-22 | tabla 2.5; Fig 2.4 mapa |
| Moda (introducción) | 15-16 | 22-23 | tabla 2.6, conteo por marca |
| 2.1.4 Moda; cuándo usar media, mediana o moda | 16-17 | 23-24 | tabla 2.7; resumen en lista en PDF 17 |
| Muestra vs población; cinco tipos de muestreo | 18-19 | 25-26 | tablas 2.8 y 2.9: inactividad de cámaras 00-02 y 02-04 (15 fines de semana); aleatorio, estratificado, por conglomerados, por conveniencia, sistemático |
| Tamaño de muestra y error muestral | 19-20 | 26-27 | el error muestral no es una equivocación |
| Media y mediana de los dos turnos | 20 | 27 | 28.78 / 28.45 y 29.50 / 32.41 |
| Histogramas (primer intento) | 21 | 28 | Fig 2.5 y 2.6, tres intervalos de 10 min |
| 2.1.5 Histogramas: ancho de intervalo | 22-24 | 29-31 | ec. 2.10; Sturges en PDF 23; Fig 2.7 y 2.8 con seis intervalos de 5 min, la clave del capítulo |
| 2.2 Medidas de dispersión | 24 | 31 | |
| 2.2.1 Rango; desviación absoluta | 25 | 32 | rango 38.32 − 11.67 = 26.65; ec. 2.11 |
| 2.2.2 Desviación media absoluta (MAD) | 25-26 | 32-33 | ec. 2.12; 3.42 vs 6.39 |
| 2.2.3 Varianza muestral y n − 1 | 27-28 | 34-35 | ec. 2.13 con 1/n (19.52 / 67.27); grados de libertad; ec. 2.14 con n − 1 (20.92 / 72.08) |
| 2.2.4 Desviación estándar; resumen | 28-30 | 35-37 | ec. 2.15; 4.57 vs 8.49 |

## Cap. 3 Probability and Theory: Partners in Decoding Uncertainty (archivo `03 Cap 3 Probability and Theory.pdf`, 208 págs., impresas 38-245)
| Tema | pág. PDF | pág. impresa | Notas |
|---|---|---|---|
| 3.1 Conjuntos, espacio muestral, subconjuntos | 1-3 | 38-40 | S = [0,2[ ∪ [2,4[ (los dos turnos); notación {x \| ...}; Fig 3.1 y 3.2 Venn |
| 3.1.0.1 Unión | 3-4 | 40-41 | Fig 3.3; unión de n conjuntos |
| 3.1.0.2 Intersección; disjuntos | 4-6 | 41-43 | Fig 3.4-3.6 |
| 3.1.0.3 Complemento | 6-7 | 43-44 | Fig 3.7 |
| 3.1.0.4 Diferencia | 7 | 44 | [2,4[ − [2,3[ = [3,4[; Fig 3.8 |
| 3.1.0.5 Producto cartesiano; joins de bases de datos | 7-9 | 44-46 | A1 = {1,2,3}, A2 = {S,L,Y}; tablas 3.1-3.3 de la banda; tabla 3.4 joins ↔ operaciones de conjuntos |
| Cardinalidad y tabla de frecuencias | 10 | 47 | tabla 3.5 (intervalos de 5 min de los dos turnos); ec. 3.5-3.6 |
| 3.2 Probabilidad clásica \|A\|/\|S\| y tres axiomas | 11-12 | 48-49 | P(35-40) = 1/15 ≈ 0.067 |
| Regla de la suma para disjuntos | 12 | 49 | ec. 3.8 |
| Eventos con intersección; inclusión-exclusión | 13-14 | 50-51 | Fig 3.9; A = 25-35, B = 30-40, P(A∩B) = 4/15; ec. 3.9; resumen disjuntos vs conjuntos |
| Elegir turno con probabilidades | 15-16 | 52-53 | Fig 3.10 y 3.11; P(10-20) = 6% vs 20% |
| Variable aleatoria discreta y continua | 17-18 | 54-55 | guardias (discreta) vs tiempo (continua); por qué P(X = 15) = 0 |
| Construir la curva: e^(−x), centrar, dar ancho | 19-21 | 56-58 | Fig 3.12-3.14; ec. 3.10-3.12 |
| 3.2.1 Densidad vs probabilidad | 22-23 | 59-60 | X vs x; Fig 3.15; analogía del concierto; f(30) ≈ 0.965, f(15) ≈ 0.011; ec. 3.13 integral = 1 |
| Normalizar con la integral gaussiana | 24-27 | 61-64 | √π · 4.57 ≈ 8.10; agrega ½; √(2π) · 4.57 = 11.45; ec. 3.23 y 3.24; Fig 3.16 |
| 3.2.2 Normal: N(µ, σ²), parámetros muestrales vs poblacionales | 28-30 | 65-67 | Fig 3.17 (µ ± σ, 2σ, 3σ); ec. 3.25-3.26; Fig 3.18 efecto de σ y de µ |
| Máxima verosimilitud para la normal (deducción) | 31-37 | 68-74 | analogía con regresión; independencia e i.i.d. (PDF 32); log-verosimilitud ec. 3.29; µ_MLE = media (PDF 35); segunda derivada; σ_MLE con 1/n (PDF 36) |
| 3.2.3 Máxima verosimilitud en general | 37-38 | 74-75 | ec. 3.34, L(θ; X) = ∏ f(xi; θ) |
| Esperanza: motivación | 38-39 | 75-76 | cumpleaños y huevos; ec. 3.35 x · f(x) |
| 3.2.4 Esperanza continua | 39-41 | 76-78 | ec. 3.36; E[X] = µ en la normal; resumen media, mediana, moda, esperanza |
| Normal estándar y regla 68-95-99.7 | 41-43 | 78-80 | ec. 3.37; Fig 3.19; integrales entre ±1, ±2, ±3 |
| Puntuación Z | 43-45 | 80-82 | ec. 3.38; tablas 3.6 y 3.7; Fig 3.20 histogramas de Z |
| Varianza como esperanza y propiedades | 45-49 | 82-86 | ec. 3.39-3.46; E[g(X)]; E[cX]; E[c]; linealidad; σ² = E[X²] − E[X]² (ec. 3.46); E[XY] = E[X]E[Y] si son independientes (PDF 49) |
| Distribución conjunta | 49-50 | 86-87 | f_{X,Y}(x, y), sin desarrollo |
| Asimetría γ1 (deducción con el cubo) | 50-51 | 87-88 | ec. 3.47-3.49; −0.0985 vs −1.366 |
| 3.2.5 Asimetría | 51-52 | 88-89 | positiva, negativa, nula |
| γ2 y 3.2.6 Curtosis | 52-54 | 89-91 | ec. 3.50-3.51; 2.75 vs 3.28; leptocúrtica y platicúrtica; aclara que la curtosis no mide el pico |
| 3.2.6.1 Exceso de curtosis | 54-55 | 91-92 | curtosis − 3 |
| 3.2.7 Momentos | 55-57 | 92-94 | ec. 3.52 E[(X − a)ⁿ]; crudos vs centrales; los cuatro momentos centrales; resumen |
| Muestra de medias muestrales | 58-59 | 95-96 | tabla 3.8 (16 medias de 15 observaciones); Fig 3.21 |
| 3.3 Teorema central del límite | 59-64 | 96-101 | E[X̄] = µ; Var(aX) = a²Var(X) (PDF 61); Var(X+Y) para independientes (PDF 62); X̄ ~ N(µ, σ²/n) ec. 3.57; Fig 3.22 (n = 10, 30, 50); error estándar ec. 3.58 (PDF 64) |
| 3.3.1 Intervalo de confianza: idea | 65-68 | 102-105 | ec. 3.60; Fig 3.23; ±1.96 (PDF 67); ec. 3.61-3.64 |
| PDF vs acumulada | 69-70 | 106-107 | Fig 3.24-3.26 |
| 3.3.1.1 CDF | 70-74 | 107-111 | ec. 3.65; F(z) − F(−z) (PDF 71); mediana = F⁻¹(0.5); cinco propiedades (PDF 72); Fig 3.28-3.29 analogía de la bicicleta; f = dF/dx ec. 3.66; IC con z ec. 3.67 (PDF 74) |
| Nivel de significancia α y α/2 | 75-76 | 112-113 | Fig 3.30; x̄ = 28.97, s² = 0.695, n = 16 |
| Del z a la t | 76-77 | 113-114 | ec. 3.69-3.71 |
| 3.3.1.2 Distribución t | 77-80 | 114-117 | Fig 3.31 (t15 vs Z); PDF de la t ec. 3.72; Fig 3.32 (ν = 1, 5, 15); Fig 3.33 |
| Inversa de la CDF | 81-82 | 118-119 | ec. 3.73-3.75 |
| 3.3.1.3 Función cuantil; IC con t | 82-83 | 119-120 | t(0.975, 15) = 2.131; IC [28.526, 29.414]; "95 de cada 100 intervalos" (PDF 83); supuestos |
| Contraste H0: µ = 30 | 83-88 | 120-125 | ec. 3.76-3.80; t = −4.95; distribución nula (PDF 86); región de rechazo Fig 3.34 (PDF 87); misma figura que el IC (PDF 88) |
| Hacia el p-valor | 88-89 | 125-126 | ec. 3.81-3.85 |
| Probabilidad condicional: el contacto de tráfico | 89-93 | 126-130 | tabla 3.9 (5/8 = 62.5%); tabla 3.10 texto vs llamada; P(éxito \| texto) = 100%; complemento condicional |
| 3.3.2 Probabilidad condicional: definición | 93-95 | 130-132 | ec. 3.89; Fig 3.35; axiomas condicionales (PDF 94); anuncia Bayes |
| 3.3.3 p-valor | 95-96 | 132-133 | ec. 3.91; p = 0.0001745; comparación con α |
| Una cola y dos colas | 96-99 | 133-136 | ec. 3.92-3.95; Fig 3.36; t(0.95, 15) = 1.753 |
| 3.4 Contraste de hipótesis formal | 99-101 | 136-138 | H0 y H1; p-valor vs región crítica; paramétrico vs no paramétrico Fig 3.37; H0 de normalidad ec. 3.96 |
| Comparar formas con cuantiles | 102-108 | 139-145 | Fig 3.38-3.42; Q25/Q75 = ±0.674 vs 1.727 / 3.920; la recta como "perfección" |
| 3.4.1 Gráfico QQ | 108-112 | 145-149 | (i − 0.5)/n; Φ⁻¹(0.09) = −1.318; tabla 3.11; Fig 3.43 |
| ECDF: motivación y 3.4.2 | 112-115 | 149-152 | ec. 3.97-3.98; tabla 3.12; Fig 3.44; tabla 3.13 diferencias |
| 3.4.3 Kolmogorov-Smirnov | 116-117 | 153-154 | D = sup \|Fn − F\| ec. 3.99; D = 0.119; Fig 3.45; ec. 3.100 |
| 3.4.3.1 Monte Carlo; distribución nula de D | 118-121 | 155-158 | pasos de la simulación (1000 muestras); Fig 3.46; p = 0.956; fórmula asintótica y valor crítico ec. 3.101-3.102 |
| Características del KS | 122 | 159 | continuo, una o dos muestras, no paramétrico |
| Construir Shapiro-Wilk: pesos a_i | 123-126 | 160-163 | ec. 3.103; tabla 3.14 (cinco muestras de nueve observaciones N(0,1)) |
| Covarianza (deducción) | 126-128 | 163-165 | ec. 3.104-3.107; por qué no se elevan al cuadrado |
| 3.4.4 Covarianza y matriz de covarianza | 128-134 | 165-171 | lluvia vs agentes vs hora (tablas 3.15-3.16); Cov = −8.15, −15, 7.75; matriz ec. 3.109; enlace a PCA (PDF 134) |
| 3.4.4.1 Correlación; a_i con autovectores | 134-137 | 171-174 | ec. 3.110; matriz de filas Z_i; a_i = −a_{n+1−i} |
| 3.4.5 Shapiro-Wilk | 137-142 | 174-179 | W ec. 3.111; Σ(xi − x̄)² = 10.42; W = 0.935; Fig 3.47 (1000 W simulados); p = 0.554; características |
| 3.5 Tamaño de muestra en el IC | 142-146 | 179-183 | Fig 3.48 (t15 y t45 vs Z); ancho 0.889 (n = 16) vs 0.419 (n = 46); n = (zσ/ME)² (PDF 146) |
| Tamaño de muestra en el contraste; significancia práctica | 146-147 | 183-184 | |
| t de dos muestras | 147-155 | 184-192 | tabla 3.17 tiempos de respuesta de guardias; Fig 3.49-3.50; Var(X − Y) (PDF 151); ec. 3.119-3.122; gl = n1 + n2 − 2; t = −1.299; p = 0.204; Fig 3.51 |
| Errores tipo I y II, potencia | 156-160 | 193-197 | efecto del 25%; Fig 3.52-3.54; tabla 3.18; β = 0.758, potencia 0.242 |
| Potencia y n | 160-162 | 197-199 | n = 64: β = 0.26, potencia 0.74 |
| Una cola y potencia | 162-164 | 199-201 | ec. 3.132-3.133; Fig 3.55-3.56 |
| Potencia del KS y del SW por simulación | 165-166 | 202-203 | |
| Regla de 30; tamaño de muestra para una prueba A/B | 166-170 | 203-207 | botón de checkout; ec. 3.134-3.135; ejemplo µ = 402 vs 405, σ = 2.7 |
| Resumen; visitas al teclado | 170-174 | 207-211 | tabla 3.19 (visitas por hora en 24 h); tabla 3.20 éxito/fracaso; p = 21/24 = 0.875 |
| Ensayos independientes, p^k(1 − p)^t | 174-176 | 211-213 | ec. 3.136-3.141; el orden no importa |
| Coeficiente binomial | 176-178 | 213-215 | ec. 3.142-3.148; S1 S2 F y por qué dividir por factoriales |
| 3.6 Binomial; PMF | 179-180 | 216-217 | ec. 3.149-3.150; PMF vs PDF |
| Esperanza discreta | 180-181 | 217-218 | ec. 3.151; dado: 3.5 |
| E y Var de la binomial vía Bernoulli | 181-183 | 218-220 | ec. 3.152-3.156: np y np(1 − p) |
| PMF B(24, 0.875); aproximación normal | 183-184 | 220-221 | ec. 3.157; Fig 3.57 |
| IC para una proporción | 185-186 | 222-223 | ec. 3.158; SE = 0.0675; IC [0.742, 1.007] |
| E, Var, fallos consecutivos, CDF binomial | 186-189 | 223-226 | (0.125)³ ≈ 0.002 (PDF 187); P(X = 11) ≈ 1.045 × 10⁻⁶; ec. 3.162; Fig 3.58 CDF y 1 − CDF; P(4 o más fallos) ≈ 35% |
| Poisson: de horas a minutos y el límite | 190-192 | 227-229 | tabla 3.21; ec. 3.164-3.166; λ = np |
| 3.6.1 Poisson: PMF, E[X] = λ, CDF | 192-195 | 229-232 | ec. 3.167-3.170; λ̂ = 70/24 = 2.92; 70 códigos al día; P(X ≤ 4) ≈ 0.8285 |
| Var = λ; IC para λ | 195-198 | 232-235 | ec. 3.171-3.173; IC [2.23, 3.6]; diario [53.52, 86.4] |
| Ajuste: histograma vs PMF | 198 | 235 | Fig 3.59; s² = 3.56 vs λ = 2.92 |
| Frecuencias observadas y esperadas | 199-201 | 236-238 | tablas 3.22-3.23; ec. 3.174-3.177 |
| 3.6.2 / 3.6.2.1 Chi-cuadrado | 202-205 | 239-242 | Fig 3.60 (gl 1, 5, 9); PDF ec. 3.178; función Gamma (PDF 204); gl = k − 1 − p (PDF 205); Fig 3.61 |
| Prueba chi-cuadrado y su potencia | 206-207 | 243-244 | χ² = 5.30; p ≈ 0.38; potencia 0.102 |
| Resumen del capítulo | 207-208 | 244-245 | |

## Cap. 4 The Evidence Update Machine: Bayes (archivo `04 Cap 4 Bayes.pdf`, 45 págs., impresas 246-290)
| Tema | pág. PDF | pág. impresa | Notas |
|---|---|---|---|
| Rita y la bandera | 1-2 | 246-247 | P(fallo) = 0.125; P(partido) = 2/12; P(partido \| bandera) = 0.9 |
| Deducción de Bayes desde la condicional | 3-4 | 248-249 | ec. 4.3-4.7; usa P(A∩B) = P(B)P(A \| B); resultado 0.70 |
| 4.0.1 Teorema de Bayes | 4-5 | 249-250 | ec. 4.8; previa, posterior, verosimilitud, marginal |
| Probabilidad marginal (probabilidad total) | 5 | 250 | ec. 4.9: P(B) = P(B \| A)P(A) + P(B \| ¬A)P(¬A) |
| Bayes para un parámetro λ; verosimilitud de Poisson | 6-7 | 251-252 | ec. 4.10-4.13 |
| Previa; previa conjugada | 7-8 | 252-253 | anuncia MCMC |
| 4.1 Distribución Gamma | 9-10 | 254-255 | ec. 4.15; E = α/β, Var = α/β²; Fig 4.1 |
| Posterior Gamma-Poisson | 11-12 | 256-257 | símbolo ∝; ec. 4.16-4.21: α' = α + Σxi, β' = β + n |
| Elegir α y β | 12-14 | 257-259 | α = λt, β = t; ec. 4.22-4.24; previa Γ(2.92, 1); Fig 4.2 |
| Posterior Γ(72.92, 25); P(λ > 3) | 15-17 | 260-262 | Fig 4.3; CDF de la Gamma ec. 4.27; P(λ > 3) = 0.389; Bayes vs chi-cuadrado |
| Datos de semana y fin de semana | 17-19 | 262-264 | anécdota del autor; tablas 4.1-4.2; p = 14/24 ≈ 0.583 vs 8/24 ≈ 0.333 |
| 4.2 Distribución Beta | 20-23 | 265-268 | ec. 4.29; E y Var; Fig 4.4 (Beta(5,2), Beta(2,5), Beta(3,3)); Beta(1,1) |
| 4.3 Uniforme | 23-24 | 268-269 | ec. 4.30; Fig 4.5; E = (a+b)/2, Var = (b−a)²/12; inicialización de pesos |
| Posterior Beta-binomial | 24-27 | 269-272 | ec. 4.31-4.35; previa Beta(4,2) Fig 4.6; Beta(18,12) semana; Fig 4.7 las dos posteriores |
| P(p_semana > p_finde) | 28 | 273 | ec. 4.36-4.37; 0.94 |
| Prueba A/B bayesiana vs frecuentista | 28-30 | 273-275 | tasa de conversión; n = 10000 → 20 días; tabla de diferencias en lista |
| Resumen; dígitos de la cámara | 31-34 | 276-279 | tabla 4.3 (rasgos de 0 y 9, diez filas); tabla 4.4; pares 4.38 |
| Bayes para clasificar; independencia condicional | 34-37 | 279-282 | ec. 4.39-4.46; verosimilitud gaussiana por rasgo; previa por frecuencia |
| Ejemplo numérico del clasificador | 37-41 | 282-286 | tabla 4.5; s1 = [230, 5, 6, 0]; 3.13 × 10⁻⁷ vs 0.00034 → es un 9; por qué no suman 1 |
| 4.4 Naive Bayes | 41-43 | 286-288 | ec. 4.50 arg max; tamaño de muestra n = Z²p(1 − p)/E² |
| De pares de dígitos a Markov | 43-45 | 288-290 | ec. 4.51-4.53; propiedad de Markov (sigue en el cap. 5) |

## Erratas e inconsistencias (citar con naturalidad en las páginas)
Cap. 2
- PDF 2: la tabla 2.1 repite la cámara "7" (debería ser 8).
- PDF 4: la tabla 2.2 da 4 cámaras a Lange Herentalsestraat, pero la tabla 2.1 lista 6 (26 a 31). La media 33/9 = 3.67 aparece como 3.6.
- PDF 14: dice que los cuartiles se ven en la tabla 2.3 (es la 2.2) y "25% tienen menos de 3" (es 3 o menos).
- PDF 15: la tabla 2.6 (A 4, B 4, C 4, D 19) no cuadra con la tabla 2.1 (A 4, B 4, C 3, D 21, E 3) y omite la marca E.
- PDF 23: la fórmula de Sturges da el número de intervalos, no el ancho ("Bin Width = log2 n + 1").
- PDF 25: el rango 38.32 − 11.67 es solo del turno 02-04 y no lo aclara.
- PDF 29: escribe √73.66 = 8.49; la varianza era 72.08 (8.49 sí es correcto).

Cap. 3
- PDF 10: llama "de 15 minutos" al intervalo 35-40.
- PDF 12: el tercer axioma escribe P(A1, A2, ..., An) en lugar de la unión.
- PDF 14: P(B) = P(30-40) = 5/15 = 0.333, no 0.3.
- PDF 23: f(30) ≈ 0.965 y f(15) ≈ 0.011 salen de la ec. 3.19 (con ½), no de la 3.12 que está definiendo.
- PDF 24: el cambio de variable escribe e^(−u) donde va e^(−u²) (el resultado √π · 4.57 sí corresponde a e^(−u²)).
- PDF 42: 68.7% (es 68.27%) y "99.77%" junto a 0.997.
- PDF 48: demuestra la linealidad de la esperanza suponiendo independencia, que no hace falta (PDF 49 lo enuncia para cualquier par).
- PDF 53: la viñeta del turno 00-02 dice que en 02-04 los extremos son "menos pronunciados", al revés de la conclusión.
- PDF 57: dice que el turno 00-02 tiene mayor valor esperado; tenía menor media (28.78 vs 29.50).
- PDF 64: divide la varianza de las 16 medias (0.695) otra vez entre n = 15 y dice "15 entradas" de la tabla 3.8 (son 16). Esa varianza ya estima σ²/n. En PDF 76 usa n = 16.
- PDF 80: dice que la curva roja (ν = 5) tiene más grados de libertad que la naranja (ν = 15). También atribuye la convergencia de t a la normal a la ley de los grandes números, sin enunciarla.
- PDF 82: el título "The Inverse of the Quantile Function" es la inversa de la CDF; la función cuantil es esa inversa.
- PDF 88-89: el t observado pasa de −4.95 a −4.15 y a −4.5. El p = 0.0001745 de PDF 96 corresponde a −4.95.
- PDF 99: "failing to reject H1 means rejecting H0" (no es así como funciona el contraste).
- PDF 111: los puntos de la recta del QQ, (28.36, 0.218) y (29.50, 0.718), no son coordenadas (Z, muestra) coherentes con la figura.
- PDF 115 y 117: la normal teórica del KS aparece con σ² = 0.043 y con N(28.97, 0.046). D = 0.119 y p = 0.956 solo se reproducen con σ = 0.833 (s² = 0.695). Las ec. 3.100 y la de PDF 123 y 139 escriben "H0 vs H0".
- PDF 124: dice que los pesos a_i de los puntos centrales son mayores. En Shapiro-Wilk son mayores en las colas, como el propio libro dice en PDF 136.
- PDF 136: la fila Z1 dice −0.91 donde la tabla 3.14 tiene −1.91. Propone tomar los a_i del autovector principal ("eigenvalues") de la matriz de covarianza: es una intuición del autor, no la definición de SW (a ∝ mᵀV⁻¹).
- PDF 134: la matriz de covarianza es semidefinida positiva en general, no siempre definida positiva.
- PDF 139-141: W = 0.935 y p = 0.554 salen de su simulación; `scipy.stats.shapiro` da W ≈ 0.980 y p ≈ 0.96 para las mismas 16 medias.
- PDF 142: dice que KS y SW dieron "resultados divergentes" justo después de decir que coincidieron.
- PDF 145-146: con t = 2.014 y n = 46 el ancho es 0.495, no 0.419. El IC46 escribe 2.131 y da ±0.21 (con 2.014 sería ±0.248).
- PDF 151: Var(X − Y) = σX + σY² (falta el cuadrado en σX).
- PDF 159: llama a α "the confidence level"; es el nivel de significancia.
- PDF 159 vs 162: la potencia con n = 16 es 0.242 (β = 0.758) en una página y 0.105 (β = 0.895) en la otra.
- PDF 164: asocia la prueba de cola izquierda con la ec. 3.132 (µ00 > µ02), al revés de PDF 163.
- PDF 169: con Δ ya estandarizado (1.11), la ec. 3.135 da n = 2(1.645 + 0.84)²/1.11² ≈ 10 por grupo, no 73. El 73 sale de volver a multiplicar por σ = 2.7.
- PDF 186: el IC de la proporción termina en 1.007 > 1 (límite del intervalo de Wald) y el libro no lo comenta.
- PDF 201 y 206: las esperadas usan λ redondeado (3.83 donde da 3.79) y la suma de χ² se muestra solo hasta O5. Con las siete categorías χ² ≈ 5.49; el p ≈ 0.38 corresponde al 5.30 del libro.
- PDF 206-207: dice λ = 2.7 cuando venía usando 2.92.

Cap. 4
- PDF 2: P(partido) = 2/12 aparece como 0.16 (es 0.167).
- PDF 3: reemplaza P(partido \| bandera) por P(partido \| no viene guardia) sin justificarlo; el 0.70 depende de esa sustitución.
- PDF 15: escribe 72.95/25 en lugar de 72.92/25 (E = 2.917).
- PDF 16: llama "tasa diaria" a λ, que es por hora.
- PDF 21: las viñetas dicen que α concentra densidad cerca de 0 y β cerca de 1; es al revés (las viñetas siguientes sí lo dicen bien).
- PDF 27: la posterior del fin de semana es Beta(8 + 4, 16 + 2) = Beta(12, 18), no Beta(12, 12), y su media es 0.4, no 0.5. El 0.94 de PDF 28 coincide con Beta(12, 18). Por eso el "50%" de PDF 30 debería ser 40%.
- PDF 38: la tabla 4.5 no cuadra con la tabla 4.3. En la clase 0, la varianza de x1 da 92.5 (no 170.5), la de x2 1.3 (no 0.8) y la de x4 0.5 (no 0.8). En la clase 9, la media de x1 da 226 (no 227.5) y la de x2 4.2 (no 4.0).
- PDF 39: dice σ = 6.52 para x1 en la clase 0, pero √170.5 = 13.06 (y las cuentas usan 170.5).
- PDF 43: 1.96² · 0.09 / 0.01 = 34.57, no 35.28 (redondea a 35, no a 36).

Tono del autor: informal, con humor y alguna grosería; títulos con juegos de palabras. Construye cada fórmula "a mano" antes de nombrarla
(la densidad normal, el KS, el SW, el chi-cuadrado). Reusa los mismos datos en todo el cap. 3: inactividad 00-02 (media 28.78, s = 4.57),
las 16 medias muestrales (media 28.97, s² = 0.695) y las visitas al teclado (λ = 2.92).
