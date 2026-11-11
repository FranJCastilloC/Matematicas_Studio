# Mapa de citas: Nield, cap. 3 "Descriptive and Inferential Statistics"

Archivo: `/Users/franciscocastillo/brain/02-Biblioteca/Matematicas/Essential-Math/03 Cap 3 Descriptive and Inferential Statistics.pdf` (65 páginas PDF, sin números impresos: versión early release). Citar por página del PDF y por "Example 3-N" o "Figure 3-N".

| Tema | PDF | Sección | Qué hay |
|---|---|---|---|
| Descriptiva vs inferencial | 4-5 | Descriptive versus Inferential Statistics | dos párrafos; sigue Populations, Samples, and Bias (5-9) con sesgos |
| Media y media ponderada | 10-12 | Mean and Weighted Mean | Example 3-1 (mascotas, 23/8 = 2.875), x̄ y μ son el mismo cálculo, Example 3-2 y 3-3 ponderada |
| Mediana | 12-13 | Median | Example 3-4 función median con sorted; por qué resiste outliers (Michael Jordan); recuadro The Median is a Quantile |
| Moda | 13-14 | Mode | Example 3-5 con defaultdict |
| Varianza y desviación | 14-21 | Variance and Standard Deviation | 7 empleados, Figure 3-1 recta numérica, por qué al cuadrado (18), Example 3-6 y 3-7, muestral con n−1 (20), recuadro Why do we subtract 1 (StatQuest), Example 3-8 is_sample: 4.62 vs 4.99 |
| Normal, PDF, CDF, z-scores | 22-37 | The Normal Distribution | Figures 3-4 y 3-5 (bins), Example 3-9 a 3-14, z = (x − μ)/σ (35-37), recuadro Coefficient of Variation (38) |
| Inferencial: TCL, IC, p-values, t | 38-62 | Inferential Statistics | solo ubicación |

No aparecen en este capítulo: regla 68-95-99.7 explícita, IQR, box plot, asimetría ni curtosis. Erratas: Table 3-1 mal renderizada (16-17); la fórmula de la PDF normal (26) tiene sqrt(2π) multiplicando.

## Normal e inferencial en detalle (agregado, páginas verificadas con `pdftotext -layout`)

| Tema | PDF | Sección | Qué hay |
|---|---|---|---|
| Distribución normal: definición | 22 | The Normal Distribution | también llamada gaussiana, simétrica en campana, colas que adelgazan; Figure 3-2 pesos de golden retrievers, media 64.43 lb |
| Descubrir la normal con histogramas | 22-25 | Discovering the Normal Distribution | 50 golden retrievers en recta numérica, Figure 3-3 (23); bins de .5 lb sin forma, Figure 3-4 (23-24); bins de 3 lb, Figure 3-5 (24); campana ajustada escalada a área 1, Figure 3-6 (25) |
| Propiedades de la normal | 25-26 | Properties of a Normal Distribution | simétrica, masa en la media, dispersión = desviación estándar, colas que nunca tocan cero, anticipa el TCL |
| PDF de la normal | 26 | The Probability Density Function (PDF) | fórmula f(x) con μ y σ (mal renderizada); Example 3-9 `normal_pdf` en Python puro con `math.exp`; continua: la probabilidad es un área |
| Integrar la normal: el eje y no es probabilidad | 26-27 | Integrating the Normal Distribution | probabilidad entre 62 y 66 lb, Figure 3-7 (27) |
| CDF | 28-33 | Integrating using the Cumulative Density Function (CDF) | PDF junto a CDF (curva sigmoide), Figure 3-8 (29); área hasta la media = .5, Figure 3-9 (30); Example 3-10 `norm.cdf(64.43, 64.43, 2.99)` = 0.5 (31); área entre 62 y 66 restando CDFs, Figure 3-10 (31-32); Example 3-11 da 0.4920 (33) |
| CDF inversa (PPF, función cuantil) | 33-35 | The Inverse Cumulative Density Function (CDF) | ejes invertidos, Figure 3-11 (34); Example 3-12 `norm.ppf(.95, loc=64.43, scale=2.99)` = 69.348 (34-35); Example 3-13 generar 1000 pesos aleatorios con `random.uniform` y `ppf` (35); recuadro CDF e inversa desde cero en el Apéndice A (35) |
| Z-scores y normal estándar | 35-37 | Z-Scores | normal estándar μ = 0, σ = 1; z = (x − μ)/σ (35); casas: barrio A μ = 140 000, σ = 3 000, casa 150 000, z = 3.333; barrio B μ = 800 000, σ = 10 000, casa 815 000, z = 1.5 (36); Example 3-14 `z_score` y `z_to_x` (36-37) |
| Coeficiente de variación | 38 | recuadro Coefficient of Variation | cv = σ/μ; cv A = 0.0214, cv B = 0.0125 |
| Inferencial: introducción | 38 | Inferential Statistics | relación abstracta muestra-población; aceptar que un hallazgo puede ser azar |
| Teorema central del límite | 38-43 | The Central Limit Theorem | población uniforme en [0, 1]; Example 3-15: 1000 muestras de 31, promedios en histograma con plotly (39); Figure 3-12 (40); las 4 propiedades: media de medias = media poblacional, población normal da medias normales, n > 30 da medias aproximadamente normales, desviación de las medias = σ/√n (41); Figure 3-13 tamaños crecientes (42); 31 como número de libro y la t para muestras menores (42); recuadro How Much Sample Is Enough? (asimetría, multimodal) (43) |
| Intervalos de confianza | 43-47 | Confidence Intervals | frase en negrita: 31 golden retrievers, media 64.408, s = 2.05, IC 95% entre 63.686 y 65.1296 (43); nivel de confianza (LOC) y valor crítico z, Figure 3-14 (43-44); colas de .025 y .975, Figure 3-15 (45); Example 3-16 `critical_z_value` = ±1.95996 (45); margen de error E = ±z_c · s/√n = ±0.72164 (46); Example 3-17 `confidence_interval` (46-47); interpretación, n mayor da IC más angosto, requiere n ≥ 31 (47) |
| P-valores | 47-48 | Understanding P-Values | Fisher y Muriel Bristol, 8 tazas de té, 1 en 70 = 0.0142857 (47-48); definición de p-valor, H0 y H1, umbral .05; el p-valor incluye "ese evento o más raro" (48) |
| Prueba de hipótesis: planteo | 48-51 | Hypothesis Testing | resfriado: media 18 días, σ = 1.5; ≈ 95% entre 15 y 21 días, Figure 3-16 y Example 3-18 = 0.9545 (48-49); 2.5% en cada cola (50); fármaco en 40 personas con media 16 días, Figure 3-17 (50); pregunta de significancia (51) |
| Prueba de una cola | 51-53 | One-Tailed Test | H0: μ ≥ 18, H1: μ < 18 (51); Example 3-19 `norm.ppf(.05, 18, 1.5)` = 15.53, Figure 3-18 (52); 16 no cae en la zona de rechazo, Figure 3-19 (52-53); Example 3-20 p-valor `norm.cdf(16, 18, 1.5)` = .0912 (53) |
| Prueba de dos colas | 53-60 | Two-Tailed Test | H0: μ = 18, H1: μ ≠ 18; 2.5% por cola (54); Figure 3-20 (55); límites 15.06 y 20.94, Figure 3-21 y Example 3-21 (55-56); Figure 3-22 (57); p-valor suma las dos colas simétricas, Figure 3-23 (57-58); Example 3-22 p-valor = .1824 (58-59); por qué la de dos colas es más exigente y preferible (59-60) |
| P-hacking | 60 | recuadro Beware of P-Hacking! | buscar p ≤ .05 entre miles de variables; presión de la industria |
| Distribución t (muestras pequeñas) | 60-62 | The T-Distribution: Dealing with Small Samples | n ≤ 30 usa t en lugar de normal (60); colas más gruesas, Figure 3-24 con 1 grado de libertad (60-61); converge a la normal cerca de 31 (61-62); Example 3-23 `t.ppf(.025, df=n-1)` con n = 25 = ±2.0639 (62); df = n − 1 (62) |
| Más allá de la media | 62 | recuadro Beyond the Mean | IC y pruebas para varianza y proporciones con chi-cuadrado, fuera del alcance del libro |
| Big data y falacia del francotirador de Texas | 63-64 | Big Data Considerations and Texas Sharpshooter Fallacy | 4 cartas al azar (Gary Smith, Standard Deviations) (63); disparar y dibujar el blanco; ley de los números verdaderamente grandes, lotería (63-64); películas de Nicolas Cage y ahogamientos (64); remedio: hipótesis antes de los datos, datos frescos (64) |
| Conclusiones y ejercicios | 64-65 | Conclusions, Exercises | 4 ejercicios: filamento de 3D (media y desviación; IC 99% con n = 34), Z-Phone (probabilidad entre 20 y 30 meses), campaña de publicidad (prueba de dos colas, 45 días); respuestas en el Apéndice B (65) |

### Erratas e inconsistencias de la parte inferencial

- Págs. 27-28, 33: usa "cumulative density function"; el nombre estándar es cumulative distribution function (función de distribución acumulada).
- Pág. 37: dice "We then turn an x-value of 8.0 into a Z-score of 3.333"; el x del ejemplo es 150 000.
- Pág. 41: llama "sample standard deviation" a σ/√n; es la desviación estándar de las medias muestrales (error estándar), no la desviación de una muestra.
- Pág. 43: "95% confident that my sample mean falls in the population mean range" invierte la idea; lo que el intervalo busca contener es la media poblacional (la frase en negrita del mismo párrafo sí lo dice bien).
- Pág. 50-53: la prueba con el grupo de 40 personas compara la media muestral (16) con la distribución de individuos (σ = 1.5) y no usa σ/√40 ≈ 0.237, que es lo que pide el TCL que el mismo capítulo explica. Con el error estándar, z ≈ −8.4 y el resultado sería muy significativo. Es una inconsistencia importante para una página de prueba de hipótesis.
- Pág. 51: el texto dice "approximately 15.51"; el código de la pág. 52 da 15.53.
- Pág. 57: dice que 16 está "4 days below the mean" y que se toma el área sobre 20 "4 days above"; la distancia es 2 días (18 − 16 = 2 y 20 − 18 = 2).
- Pág. 48: define el p-valor como "the probability something occurring by chance rather than because of a hypothesized explanation"; la definición precisa es la probabilidad de un resultado igual o más extremo suponiendo H0 cierta. El mismo libro lo completa al final de la pág. 48 y en 57.
- Pág. 48: "approximately 95%" entre 15 y 21 días; es ±2σ y da 95.45% (el propio Example 3-18 lo imprime).
- Pág. 62: "as outlined earlier" sobre df = n − 1; antes solo aparece el n − 1 de la varianza muestral (20), no los grados de libertad.
- Pág. 43: "Base on" por "Based on" (tipográfico).

### No aparece en la parte inferencial

Error estándar por nombre, errores tipo I y II, potencia, estadístico de prueba z o t escrito como fórmula, prueba t de dos muestras, IC con t calculado completo, IC para proporciones, chi-cuadrado (solo se menciona, 62), corrección por comparaciones múltiples (solo el recuadro de p-hacking, 60). La regla 68-95-99.7 sigue sin aparecer explícita; lo más cercano es el ≈ 95% entre μ ± 2σ del resfriado (48-49).
