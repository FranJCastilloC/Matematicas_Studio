# Mapa de citas: Stitz y Zeager, cap. 0 "Prerequisites"

Fuente: Carl Stitz y Jeff Zeager, "Precalculus Prerequisites a.k.a. 'Chapter 0'" (versión del 16 de agosto de 2013). Es el capítulo 0
que comparten sus libros libres *College Algebra* y *Precalculus*; el índice incluido en los preliminares llega al capítulo 11
(coordenadas polares, vectores), o sea que este extracto sale de la edición de *Precalculus*. El contenido del cap. 0 es el mismo.

Carpeta: `/Users/franciscocastillo/brain/03-Matematicas/01-Aritmetica-basica/stitz-zeager-cap0-prerrequisitos/`
PDF entero: `/Users/franciscocastillo/brain/03-Matematicas/01-Aritmetica-basica/stitz-zeager-cap0-prerrequisitos.pdf` (146 págs.).

## Ids propuestos y desfases (verificados)

Las citas apuntan a los archivos por sección. En cada archivo, **página impresa = página del archivo + desfase**. Verificado leyendo el
encabezado de **cada** página de los diez archivos con `pdftotext -layout` (todas las páginas llevan número impreso en el encabezado;
las pares, a la izquierda con "Prerequisites"; las impares, a la derecha con el título de la sección). Ningún archivo se solapa con otro.

| id | Archivo | Págs. archivo | Impresas | Desfase |
|---|---|---|---|---|
| `sz0` | `00 - Portada y Preliminares.pdf` | 12 | i-x, 1-2 | portada, índice (PDF 3-10), introducción del capítulo en PDF 11-12 = pp. 1-2 |
| `sz0-1` | `Unidad 01 - 0.1 Basic Set Theory and Interval Notation.pdf` | 15 | 3-17 | +2 |
| `sz0-2` | `Unidad 02 - 0.2 Real Number Arithmetic.pdf` | 20 | 18-37 | +17 |
| `sz0-3` | `Unidad 03 - 0.3 Linear Equations and Inequalities.pdf` | 13 | 38-50 | +37 |
| `sz0-4` | `Unidad 04 - 0.4 Absolute Value Equations and Inequalities.pdf` | 9 | 51-59 | +50 |
| `sz0-5` | `Unidad 05 - 0.5 Polynomial Arithmetic.pdf` | 10 | 60-69 | +59 |
| `sz0-6` | `Unidad 06 - 0.6 Factoring.pdf` | 13 | 70-82 | +69 |
| `sz0-7` | `Unidad 07 - 0.7 Quadratic Equations.pdf` | 13 | 83-95 | +82 |
| `sz0-8` | `Unidad 08 - 0.8 Rational Expressions and Equations.pdf` | 15 | 96-110 | +95 |
| `sz0-9` | `Unidad 09 - 0.9 Radicals and Equations.pdf` | 15 | 111-125 | +110 |
| `sz0-10` | `Unidad 10 - 0.10 Complex Numbers.pdf` | 11 | 126-136 | +125 (la pág. 11 = p. 136 está en blanco) |

En el PDF entero: **página PDF = impresa + 10** (verificado: PDF 11 = "Chapter 0" = p. 1, PDF 13 = p. 3, PDF 28 = p. 18, PDF 75 = p. 65,
PDF 145 = p. 135). Los preliminares son 12 páginas y 15+20+13+9+10+13+13+15+15+11 = 134, total 146.

Método: texto completo de los 11 archivos con `pdftotext -layout`; `pdftotext` pierde casi todos los signos menos y rompe fracciones y
radicales, así que se renderizaron como imagen y se revisaron las páginas con cuentas: 0.1 (PDF 4, 5, 9), 0.2 (3, 5, 10, 12, 15, 16,
19, 20), 0.3 (6-13), 0.4 (3-9), 0.5 (1, 4), 0.6 (2, 5, 7, 9, 12, 13), 0.7 (7, 10, 12, 13), 0.8 (13-15), 0.9 (1, 2, 6, 10, 11, 14, 15),
0.10 (2, 7-10). Todos los ejemplos resueltos que se anotan abajo y **todas** las respuestas de los ejercicios de 0.2 a 0.10 se
recalcularon con Python (SymPy). Los números de abajo llevan los signos ya corregidos según la imagen.

Notación propia del libro que conviene advertir: los irracionales se llaman **ℙ** (no 𝕀 ni ℝ∖ℚ); los enteros no negativos son los
"whole numbers" **𝕎 = {0, 1, 2, ...}**; ℕ empieza en 1. El libro no distingue tipográficamente el menos binario del unario (lo dice en p. 20).

---

## `sz0` Preliminares (introducción del capítulo)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Para qué sirve el capítulo | 11 | 1 | repaso "sucinto" de lo previo a Precalculus; no está pensado para aprender desde cero; resumen de 0.1 a 0.7 |
| Resumen de 0.8 a 0.10 | 12 | 2 | una línea por sección |

## `sz0-1` 0.1 Basic Set Theory and Interval Notation (impresa = archivo + 2)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Conjunto | 1 | 3 | Definition 0.1 (colección bien definida); tres formas de describir: verbal, por extensión (roster) y por comprensión (set-builder); ejemplo S = letras de "smolko" = {s, m, o, l, k}; Definition 0.2: ∈ y ∉ |
| Subconjunto, unión, intersección, vacío | 2 | 4 | Definition 0.3 (A ⊆ B); vocales V = {a, e, i, o, u}; U = {s, m, o, l, k, a, e, i, u}; S ∩ V = {o}; Definition 0.4 (∩ = "y", ∪ = "o"); C ∪ V; Definition 0.5 ∅ = {} = {x | x ≠ x} |
| Diagramas de Venn | 3 | 5 | Venn de C, S y V; conjunto universal U; tríptico A y B, A ∩ B, A ∪ B |
| Números reales y sus subconjuntos | 4 | 6 | Definition 0.6: real = número con representación decimal; recuadro: ℕ = {1, 2, 3, ...}, 𝕎 = {0, 1, 2, ...}, ℤ = {0, ±1, ±2, ...}, ℚ = {a/b} (decimal periódico o finito), ℙ irracionales (decimal ni periódico ni finito; ejemplos π, √2, 0.101001000100001...); cadena ℕ ⊆ 𝕎 ⊆ ℤ ⊆ ℚ ⊆ ℝ ("muñecas Matrioska") |
| Example 0.1.1 (enunciado y parte 1) | 5 | 7 | P = {2ⁿ \| n ∈ ℕ} = {2, 4, 8, 16, ...}; E = {2n \| n ∈ ℤ} = {0, ±2, ±4, ...}; S = {x² \| x ∈ ℝ} con (−2)² = 4, (3/2)² = 9/4, (√117)² = 117; A = {−117, 4/5, 0.2‾2002‾ (periódico), 0.202002000200002...} |
| Example 0.1.1 (resto) y recta real | 6 | 8 | S = reales no negativos; en A no hay naturales, 4/5 = 0.8 y −117 son racionales, 0.202002000200002... es irracional (tiene patrón pero no se repite); A ∩ 𝕎 = ∅, A ∩ ℤ = {−117}, A ∩ ℙ = {0.2020020002...}; ℕ ∪ ℚ = ℚ, ℚ ∪ ℙ = ℝ; recta real, a < b si a está a la izquierda; completitud (sin huecos) |
| Densidad, tricotomía, intervalos | 7 | 9 | Density Property: entre dos reales hay racionales e irracionales (reto: entre 0.9999 y 1, y entre 0.9‾ y 1); orden total; Law of Trichotomy; tabla de ejemplos: {x \| 1 ≤ x < 3} = [1, 3), {x \| −1 ≤ x ≤ 4} = [−1, 4], {x \| x ≤ 5} = (−∞, 5], {x \| x > −2} = (−2, ∞) |
| Tabla completa de notación de intervalos | 8 | 10 | corchete = punto lleno, paréntesis = punto vacío; ∞ siempre con paréntesis; los 9 casos (a, b), [a, b), (a, b], [a, b], (−∞, b), (−∞, b], (a, ∞), [a, ∞), (−∞, ∞) con su dibujo |
| Example 0.1.2 parte 1 | 9 | 11 | {x \| x ≤ −2 o x ≥ 2} = (−∞, −2] ∪ [2, ∞); {x \| x ≠ 3} = (−∞, 3) ∪ (3, ∞); {x \| x ≠ ±3} = tres intervalos; {x \| −1 < x ≤ 3 o x = 5} = (−1, 3] ∪ {5} (conjunto unitario) |
| Example 0.1.2 parte 2 | 10 | 12 | A = [−5, 3), B = (1, ∞): A ∩ B = (1, 3), A ∪ B = [−5, ∞), con tres rectas |
| Ejercicios | 11-12 | 13-14 | 1-29: descripciones, A = {−3, −1.02, −3/5, 0.57, 1.23, √3, 5.2020020002..., 20/10, 117}, tabla de intervalos, uniones e intersecciones, x ≠ valores, Venn de tres conjuntos, ¿distribuye ∩ sobre ∪? |
| Respuestas | 13-15 | 15-17 | incluye los Venn sombreados de 23-29 |

## `sz0-2` 0.2 Real Number Arithmetic (impresa = archivo + 17)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Axiomas de suma y producto | 1 | 18 | recuadros: clausura, conmutativa, asociativa, neutro (0 y 1), inverso (−a y 1/a); definición de resta a − b = a + (−b) y de división a ÷ b = a · (1/b); 1 + 2 + 3 y la asociativa |
| Agrupación y distributiva | 2 | 19 | 1 + 2 · 3 = 7 pero (1 + 2) · 3 = 9; recuadro Distributive Property and Factoring (factorizar = leer la distributiva de derecha a izquierda); 5(2 + x) = 10 + 5x; 3x + 2x = 5x; recuadro Properties of Zero: producto cero, 0/a = 0, a/0 indefinido (0/0 "indeterminado") |
| Negativos | 3 | 20 | x² + x − 6 = (x − 2)(x + 3) → x = 2 o −3; menos binario vs unario (5 − 3 = 5 + (−3); en la calculadora −3 − 3 = −6); recuadro Properties of Negatives; −(2 · 3) ≠ (−2)(−3); −3/5 = (−3)/5 = 3/(−5) |
| Propiedades de las fracciones | 4 | 21 | recuadro: igualdad a/b = c/d ⇔ ad = bc; producto (no necesita común denominador), división ("invertir y multiplicar"), suma (sí lo necesita), fracciones equivalentes, simplificar = cancelar **factores** comunes |
| Example 0.2.1 (1-2) | 5 | 22 | 1/4 + 6/7 = 31/28 (mcd 28); 5/12 − (47/30 − 7/3) = 71/60 (mcd 60; nota: con 12 · 30 · 3 = 1080 sale, pero con números enormes) |
| Example 0.2.1 (3) fracción compuesta | 6 | 23 | (7/(3 − 5) − 7/(3 − 5.21)) / (5 − 5.21) = 350/221; multiplica por 100 para quitar decimales; 14700 = 42 · 350, 9282 = 42 · 221 |
| Example 0.2.1 (4) | 7 | 24 | (12/5 − 7/24) / (1 + (12/5)(7/24)) = 253/204, multiplicando arriba y abajo por 120 |
| Example 0.2.1 (5-6) | 8 | 25 | ((2(2) + 1)(−3 − (−3)) − 5(4 − 7)) / (4 − 2(3)) = −15/2; (3/5)(5/13) − (4/5)(−12/13) = 63/65 |
| Exponentes enteros | 9 | 26 | dos métodos para fracciones compuestas; 2³ = 1 · (tres factores de 2), 2⁰ = 1, 2⁻³ = 1/8; recuadro Properties of Integer Exponents: producto, cociente, potencia de potencia, exponente negativo, (a/b)⁻ⁿ = (b/a)ⁿ, a⁰ = 1, 0⁰ indeterminado, 0ⁿ |
| Error clásico y orden de operaciones | 10 | 27 | (a + b)² ≠ a² + b² (prueba a = 3, b = 4); recuadro **Order of Operations Agreement** (paréntesis, exponentes, × y ÷ de izquierda a derecha, + y − de izquierda a derecha; mnemotecnia "Please entertain my dear auld Sasquatch"); 2 + 3 · 4² = 50; **−3² = −9 pero (−3)² = 9**; 2³⁰¹⁷² · 2⁻³⁰¹⁶⁹ = 2³ = 8; enunciado del Example 0.2.2 |
| Example 0.2.2 (1-2) | 11 | 28 | ((4 − 2)(2 · 4) − 4²) / (4 − 2)² = 0; 12(−5)(−5 + 3)⁻⁴ + 6(−5)²(−4)(−5 + 3)⁻⁵ = 15 |
| Example 0.2.2 (3-4); notación científica | 12 | 29 | (5 · 3⁵¹/4³⁶) / (5 · 3⁴⁹/4³⁴) = 9/16; 2(5/12)⁻¹ / (1 − (5/12)⁻²) = −120/119; −621 = −6.21 × 10², 0.023 = 2.3 × 10⁻² |
| Notación científica | 13 | 30 | Definition 0.7: ±n.d₁d₂... × 10ᵏ; "E" o "EE" en la calculadora (6.02 × 10²³); Example 0.2.3: (6.626 × 10⁻³⁴)(3.14 × 10⁹)/(1.78 × 10²³) = 11.685... × 10⁻⁴⁸ = 1.17 × 10⁻⁴⁷ |
| Desborde de calculadora; raíces | 14 | 31 | (2.13 × 10⁵³)¹⁰⁰ = (2.13)¹⁰⁰ · 10⁵³⁰⁰ = 6.885... × 10⁵³³² (ver erratas); Definition 0.8: raíz n-ésima principal, índice, radicando, restricciones con n par; ⁴√16 = 2 (no −2); ∛−8 = −2; Theorem 0.1 Properties of Radicals (producto, cociente, potencia) |
| Error clásico con raíces; exponentes racionales | 15 | 32 | 5 = √25 = √(9 + 16) ≠ √9 + √16 = 7; Definition 0.9: a^(1/n) = ⁿ√a, a^(m/n) = (ⁿ√a)^m = ⁿ√(a^m); contraejemplo ((−16)(−81))^(1/4) = 1296^(1/4) = 6 pero (−16)^(1/4)(−81)^(1/4) no existe; (a^(2/3))^(3/2) ≠ a con a = −1 (da 1) |
| Example 0.2.4 (1) | 16 | 33 | (−(−4) − √((−4)² − 4(2)(−3))) / (2(2)) = (2 − √10)/2 (tiene forma de fórmula cuadrática; √40 = 2√10) |
| Example 0.2.4 (2-3) | 17 | 34 | 2(√3/3) / (1 − (√3/3)²) = √3; (∛−2 − ∛−54)² = (2∛2)² = 4∛4 ("radicales semejantes" = distributiva) |
| Example 0.2.4 (4) | 18 | 35 | 2(9/4 − 3)^(1/3) + 2(9/4)(1/3)(9/4 − 3)^(−2/3) = 0; con base negativa se pasa a radicales |
| Ejercicios | 19 | 36 | 1-34 (orden de operaciones, fracciones, exponentes, radicales, (3.14 × 10⁸⁷)¹¹⁷) |
| Respuestas | 20 | 37 | todas verificadas; 34: 1.38 × 10¹⁰²³⁷ (correcto) |

## `sz0-3` 0.3 Linear Equations and Inequalities (impresa = archivo + 37)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Condicional, identidad, contradicción; operaciones legales | 1 | 38 | 2x + 1 = 7 (x = 3), w − 3 ≤ 4 (w ≤ 7); identidades 2x − 3 = 1 + x − 4 + x y 2t ≤ 2t + 3; contradicciones 3x − 4 = 3x + 7 y a − 1 > a + 3; 3 − 2(x − 3) = 7x + 3(x + 1) da x = 1/2; ecuaciones e inecuaciones equivalentes; recuadros de operaciones que dan ecuaciones/inecuaciones equivalentes; 3 ≤ 4 pero (−2)(3) ≥ (−2)(4); Definition 0.10: lineal en X si AX = B con A ≠ 0 |
| Estrategia; Example 0.3.1 (1) | 2 | 39 | recuadro Strategy for Solving Linear Equations; 3x − 6 = 7x + 4 → x = −5/2 (comprobación: −27/2 en los dos lados) |
| Example 0.3.1 (2-3) | 3 | 40 | 3 − 1.7t = t/4 → por 40 → t = 120/78 = 20/13 (comprueba 5/13); (1/18)(7 − 4a) + 2 = a/3 − (4 − a)/12 → por 36 → a = 98/23 |
| Example 0.3.1 (3-4) | 4 | 41 | ambos lados de la 3 dan 199/138; 8y√3 + 1 = 7 − √12(5 − y) → y = (√3 − 5)/3 (lados (27 − 40√3)/3); "6y√3 = 6 − 10√3 es lineal con A = 6√3" |
| Example 0.3.1 (5-6) | 5 | 42 | (3x − 1)/2 = x√50 + 4 → x = 9/(3 − 10√2) (lados (12 + 5√2)/(3 − 10√2)); x(4 − y) = 8y → y = 4x/(8 + x), x ≠ −8 (con x = −8 queda 32 = 0) |
| Inecuaciones lineales; Example 0.3.2 (1) | 6 | 43 | enunciados; (7 − 8x)/2 ≥ 4x + 1 → 5/16 ≥ x |
| Example 0.3.2 (1-2) | 7 | 44 | (−∞, 5/16]; desigualdad compuesta 3/4 ≤ (7 − y)/2 < 6 → al dividir por −2 se invierten las dos → (−5, 11/2] |
| Example 0.3.2 (3-4) | 8 | 45 | 2t − 1 ≤ 4 − t < 6t + 1 → (3/7, 5/3]; 5 + x√7 ≤ 4x + 1 ≤ 8: x ≥ 4/(4 − √7) (> 2) y x ≤ 7/4 (< 2) → **sin solución** (trampa: escribir 4/(4 − √7) ≤ x ≤ 7/4 "sería un disparate") |
| Example 0.3.2 (5) | 9 | 46 | 2.1 − 0.01w ≤ −3 o 2.1 − 0.01w ≥ 3 → (−∞, −90] ∪ [510, ∞) |
| Ejercicios | 10-11 | 47-48 | 1-28 ecuaciones y despejes (F = (9/5)C + 32, PV = nRT, E = mgh, E = ½mv², x = x₀ + at, y − y₀ = m(x − x₀)); 29-46 inecuaciones |
| Respuestas | 12-13 | 49-50 | todas verificadas |

## `sz0-4` 0.4 Absolute Value Equations and Inequalities (impresa = archivo + 50)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Valor absoluto como distancia | 1 | 51 | Definition 0.11: \|x\| = distancia a 0; \|x − c\| = distancia entre x y c; \|5\| = \|−5\| = 5 con dibujo; \|5 − 7\| = \|−2\| = 2, no 5 + 7; Theorem 0.2: \|ab\| = \|a\|\|b\|, \|aⁿ\| = \|a\|ⁿ, \|a/b\| = \|a\|/\|b\| |
| Ecuaciones con valor absoluto | 2 | 52 | \|x\| = 3 → x = ±3 con dibujo; Theorem 0.3 (\|x\| = c con c > 0, = 0, < 0; \|x\| = \|y\| ⇔ x = ±y); estrategia (aislar y aplicar) |
| Example 0.4.1 (1-5) | 3 | 53 | \|3x − 1\| = 6 → 7/3, −5/3; (3 − \|y + 5\|)/2 = 1 → y = −4, −6; 3\|2t + 1\| − √5 = 0 → t = (−3 ± √5)/6; 4 − \|5w + 3\| = 5 → sin solución; \|3 − x∛12\| = \|4x + 1\| |
| Example 0.4.1 (5-6); desigualdades | 4 | 54 | x = 2/(4 + ∛12) o 4/(∛12 − 4); \|t − 1\| − 3\|t + 1\| = 0 → t = −2, −1/2 (3\|t + 1\| = \|3t + 3\|); \|x\| < 3 → (−3, 3) y \|x\| > 3 → (−∞, −3) ∪ (3, ∞) con dibujos; Theorem 0.4 |
| Example 0.4.2 (1-2) | 5 | 55 | \|x − ⁴√5\| > 1 → (−∞, −1 + ⁴√5) ∪ (1 + ⁴√5, ∞); (4 − 2\|2x + 1\|)/4 ≥ −√3 → [(−3 − 2√3)/2, (1 + 2√3)/2] |
| Example 0.4.2 (3-6) | 6 | 56 | \|2x − 1\| ≤ 3\|4 − 8x\| − 10 → \|2x − 1\| ≥ 10/11 → (−∞, 1/22] ∪ [21/22, ∞); con +10 → todos los reales; 2 < \|x − 1\| ≤ 5 → [−4, −1) ∪ (3, 6]; \|10x − 5\| + \|10 − 5x\| ≤ 0 → sin solución (se anulan en x = 1/2 y en x = 2, no a la vez) |
| Manipulación tipo ε del Cálculo | 7 | 57 | \|(8 − 4x)/3\| < ε ⇔ \|x − 2\| < (3/4)ε |
| Ejercicios | 8 | 58 | 1-31 |
| Respuestas | 9 | 59 | todas verificadas |

## `sz0-5` 0.5 Polynomial Arithmetic (impresa = archivo + 59)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Polinomio y vocabulario | 1 | 60 | Definition 0.12; ejemplos x² + x√3 + 4, 27x²y + 7x/2, 6; no polinomios 3√x, 4x − 2/(x + 1), 13x^(2/3)y²; Definition 0.13: término constante, coeficiente, grado, términos semejantes, simplificado, monomio/binomio/trinomio; x² + x√3 + 4 es trinomio de grado 2; 27x²y + 7x/2 binomio de grado 3; 17x²y − 3xy² + 7xy² = 17x²y + 4xy² (17x²y y 4xy² no son semejantes) |
| Distributiva generalizada y FOIL | 2 | 61 | Theorem 0.5 (n · m términos antes de reducir); Theorem 0.6 F.O.I.L.; nota: a los autores no les gusta FOIL |
| Example 0.5.1 (1-4) | 3 | 62 | (3x² − 2x + 1) − (7x − 3) = 3x² − 9x + 4; 4xz² − 3z(xz − x + 4) = xz² + 3xz − 12z; (2t + 1)(3t − 7) = 6t² − 11t − 7; (3y − ∛2)(9y² + 3∛2 y + ∛4) = 27y³ − 2 |
| Example 0.5.1 (5-6); productos notables | 4 | 63 | (4w − 1/2)² = 16w² − 4w + 1/4, no (4w)² − (1/2)²; [2(x + h) − (x + h)²] − (2x − x²) = 2h − 2xh − h²; Theorem 0.7: cuadrado del binomio y diferencia de cuadrados |
| División larga de números | 5 | 64 | 2585 ÷ 79 = 32 resto 57; la misma cuenta escrita con potencias de 10 |
| Teorema de la división; Example 0.5.2 (1) | 6 | 65 | Theorem 0.8: p = d · q + r con r = 0 o grado(r) < grado(d); (x³ + 4x² − 5x − 14) ÷ (x − 2) |
| Example 0.5.2 (1-3) | 7 | 66 | cociente x² + 6x + 7, resto 0; (2t + 7) ÷ (3t − 4) = 2/3 resto 29/3 |
| Example 0.5.2 (3-4) | 8 | 67 | (6y² − 1) ÷ (2y + 5) = 3y − 15/2 resto 73/2 (término 0y de relleno); w³ ÷ (w² − √2) = w resto w√2 |
| Ejercicios | 9 | 68 | 1-15 operaciones, 16-27 divisiones, 28-33 verificar cubo perfecto, suma y diferencia de cubos, cuarta potencia, suma de cuartas; 34 ¿cuándo (a + b)ⁿ = aⁿ + bⁿ? |
| Respuestas | 10 | 69 | todas verificadas |

## `sz0-6` 0.6 Factoring (impresa = archivo + 69)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Factorizar = deshacer el producto | 1 | 70 | 16337 = 17 · 31² (factorización prima); Definition 0.14 irreducible; x² − 3 = (x − √3)(x + √3) es irreducible sobre los racionales; empieza el MCD de 18x²y³ − 54x³y² − 12xy² |
| Factor común; fórmulas | 2 | 71 | = 6xy²(3xy − 9x² − 2); recuadro Finding the G.C.F.; −(3/5)z³ − 6z² = −3z²(z + 10)/5; recuadro Common Factoring Formulas (trinomio cuadrado perfecto, diferencia de cuadrados, suma y diferencia de cubos; a² + b² irreducible) |
| Example 0.6.1 (1-4) | 3 | 72 | 18x² − 48x + 32 = 2(3x − 4)²; 64y² − 1 = (8y − 1)(8y + 1); 75t⁴ + 30t³ + 3t² = 3t²(5t + 1)²; w⁴z − wz⁴ = wz(w − z)(w² + wz + z²) |
| Example 0.6.1 (5-6) | 4 | 73 | 81 − 16t⁴ = (3 − 2t)(3 + 2t)(9 + 4t²); x⁶ − 64 por diferencia de cuadrados = (x − 2)(x + 2)(x² − 2x + 4)(x² + 2x + 4) |
| x⁶ − 64 por cubos; técnicas avanzadas | 5 | 74 | por cubos queda (x − 2)(x + 2)(x⁴ + 4x² + 16), menos factorizado: "empieza por la diferencia de cuadrados"; recuadro Advanced Factoring: "un-FOIL" Ax² + Bx + C = (ax + b)(cx + d) con ac = A, bd = C, B = ad + bc; agrupación; enunciado del Example 0.6.2 |
| Example 0.6.2 (1-4) | 6 | 75 | x² − x − 6 = (x + 2)(x − 3); 2t² − 11t + 5 = (2t − 1)(t − 5); 36 − 11y − 12y² = (−3y + 4)(4y + 9); 18xy² − 54xy − 180x |
| Example 0.6.2 (4-6); resolver factorizando | 7 | 76 | = 18x(y − 5)(y + 2); agrupación (2t² − 3)(t − 5) (ver erratas); x⁴ + 4x² + 16 = (x² + 4)² − (2x)² = (x² − 2x + 4)(x² + 2x + 4) (sumar y restar 4x²) |
| Propiedad del producto cero | 8 | 77 | recuadro; 6x² + 11x = 10 → (2x + 5)(3x − 2) = 0 → x = −5/2, 2/3; trampa x(6x + 11) = 10 no permite concluir nada; recuadro Strategy for Solving Non-linear Equations; enunciado Example 0.6.3 |
| Example 0.6.3 (1-3) | 9 | 78 | 3x² = 35 − 16x → x = 5/3, −7 (comprueba 25/3 y 147); t = (1 + 4t²)/4 → (2t − 1)² = 0 → t = 1/2; (y − 1)² = 2(y − 1) → y = 1, 3 |
| Example 0.6.3 (3-5) | 10 | 79 | **trampa**: dividir por (y − 1) pierde y = 1; w⁴/3 = (8w³ − 12)/12 − (w² − 4)/4 → w = 0, 1/2, 3/2; z(z(18z + 9) − 50) = 25 → (9z² − 25)(2z + 1) = 0 |
| Example 0.6.3 (5-6) | 11 | 80 | z = −1/2, ±5/3; x⁴ − 8x² − 9 = (x² − 9)(x² + 1) → x = ±3 (x² + 1 = 0 sin solución real) |
| Ejercicios | 12 | 81 | 1-30 factorizar, 31-45 resolver, 46 factorizar 4x⁴ + 8x² + 9, 47 ecuación con raíces 3, −1/2 y 117 |
| Respuestas | 13 | 82 | todas verificadas |

## `sz0-7` 0.7 Quadratic Equations (impresa = archivo + 82)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Motivación; extraer raíces | 1 | 83 | 2x² + 5x − 3 = (2x − 1)(x + 3) → 1/2, −3; con 6 en lugar de 5 ya no factoriza (2x² + 6x − 3); Definition 0.15 cuadrática AX² + BX + C = 0, A ≠ 0; recuadro Extracting Square Roots (X² = c → ±√c; c < 0 sin solución real); x² = 3 de dos formas; **√(x²) = \|x\|** |
| Completar el cuadrado | 2 | 84 | 2(x + 3/2)² − 15/2 = 0 → x = (−3 ± √15)/2; ese es 2x² + 6x − 3; recuadro de 6 pasos (sumar (B/2A)²) |
| Ejemplo numérico y caso general | 3 | 85 | 3x² − 24x + 5 = 0 → (x − 4)² = 43/3 → x = (12 ± √129)/3 (racionalizar √(43/3) = √129/3); empieza la deducción general |
| Fórmula cuadrática | 4 | 86 | deducción completa; **Theorem 0.9** X = (−B ± √(B² − 4AC))/(2A); comprueba 2x² + 6x − 3 ((−6 ± √60)/4) y 3x² − 24x + 5 ((24 ± √516)/6) |
| Fórmula en casos fáciles; estrategias; Example 0.7.1 (1) | 5 | 87 | 2x² + 5x − 3 → (−5 ± 7)/4; x² = 3 → ±√3; recuadro Strategies for Solving Quadratic Equations; enunciados; 3 − (2w − 1)² = 0 → w = (1 ± √3)/2 |
| Example 0.7.1 (2-3) | 6 | 88 | 5x − x(x − 3) = 7 → x = 1, 7; (y − 1)² = 2 − (y + 2)/3 → 3y² − 5y − 1 = 0 → y = (5 ± √37)/6 |
| Example 0.7.1 (4) discriminante cero | 7 | 89 | 5(25 − 21x) = 59/4 − 25x² → 100x² − 420x + 441 = 0 → x = 21/10 única (es (10x − 21)²) |
| Example 0.7.1 (5-6) | 8 | 90 | −4.9t² + 10t√3 + 2 = 0 → t = (50√3 ± 4√530)/49 (± que pasa a ∓); 2x² = 3x⁴ − 6, sustitución u = x² → 3u² − 2u − 6 = 0 |
| Example 0.7.1 (6) | 9 | 91 | u = (1 ± √19)/3; la raíz negativa se descarta → x = ±√(3 + 3√19)/3 |
| "Quadratics in Disguise"; discriminante | 10 | 92 | recuadro AX^(2m) + BX^m + C = 0 con u = X^m; 3x⁶ − 2x³ + 1 sí, 3x⁶ − 2x² + 1 no; **Definition 0.16** discriminante B² − 4AC; **Theorem 0.10** (D > 0 dos reales, D = 0 una repetida −B/2A, D < 0 ninguna real); x² + x − 1 (D = 5), x² + x + 1 (D = −3), x² + 2x + 1 (D = 0), 6x² − x − 40 (D = 961 = 31², raíces racionales) |
| Discriminante cuadrado perfecto → factoriza | 11 | 93 | 6x² − x − 40 = (2x + 5)(3x − 8) |
| Ejercicios | 12 | 94 | 1-21, 22-27 con calculadora (πr² = 37, −4.9t² + 100t = 410), 28-30 con valor absoluto, 31 probar que x² + xp + p² = 0 no tiene raíces reales, 32 despejar t de −½gt² + vt + h = 0 |
| Respuestas | 13 | 95 | todas verificadas (31: D = p² − 4p² = −3p² < 0) |

## `sz0-8` 0.8 Rational Expressions and Equations (impresa = archivo + 95)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Simplificar: cancelar factores, no términos | 1 | 96 | (x⁴ + 5x³)/(x³ − 25x) = x²/(x − 5), x ≠ 0, −5 (con la cancelación mal hecha tachada); **trampa** 5/(x² + 9) ≠ 5/x² + 5/9, pero (x² + 9)/5 = x²/5 + 9/5 |
| Example 0.8.1 (enunciado y 1) | 2 | 97 | ((2x² − 5x − 3)/(x⁴ − 4)) ÷ ((x² − 2x − 3)/(x⁵ + 2x³)) = x³(2x + 1)/((x + 1)(x² − 2)), x ≠ 3 (x² + 2 nunca es 0, no hace falta excluir) |
| Example 0.8.1 (2-3) | 3 | 98 | 5/(w² − 9) − (w + 2)/(w² − 9) = (3 − w)/(w² − 9) = −1/(w + 3), w ≠ 3; empieza 3/(y² − 8y + 16) + (y + 1)/(16y − y³) |
| Example 0.8.1 (3) | 4 | 99 | 16y − y³ = y(4 − y)(4 + y) y 4 − y = −(y − 4) convierte la suma en resta; común denominador (y − 4)²y(y + 4); 3y(y + 4) − (y + 1)(y − 4) → resultado (2y² + 15y + 4)/(y(y + 4)(y − 4)²); discriminante 15² − 4(2)(4) = 193, no es cuadrado → no factoriza |
| Example 0.8.1 (4) cociente de diferencias | 5 | 100 | (2/(4 − (x + h)) − 2/(4 − x))/h = 2/((4 − (x + h))(4 − x)), h ≠ 0 ("en Cálculo hace falta factorizado") |
| Example 0.8.1 (5) exponentes negativos | 6 | 101 | 2t⁻³ − (3t)⁻² = (18 − t)/(9t³), por común denominador y por factor común t⁻³ |
| Example 0.8.1 (6); soluciones extrañas | 7 | 102 | 10x(x − 3)⁻¹ + 5x²(−1)(x − 3)⁻² = 5x(x − 6)/(x − 3)², por dos caminos; definición de **soluciones extrañas** (extraneous) |
| Example 0.8.2 (enunciados y 1) | 8 | 103 | 1 + 1/x = x → x = (1 ± √5)/2 (la positiva es la razón áurea) |
| Example 0.8.2 (2-3) | 9 | 104 | (t³ − 2t + 1)/(t − 1) = t/2 − 1 → t = 0, −1/2; **t = 1 es extraña**; 3/(1 − w√2) − 1/(2w + 5) = 0 con w ≠ 1/√2, −5/2 |
| Example 0.8.2 (3-4) | 10 | 105 | w = −14/(6 + √2); 3(x² + 4)⁻¹ + 3x(−1)(x² + 4)⁻²(2x) = 0 → x = ±2 (despejando denominadores) |
| Example 0.8.2 (4-6) | 11 | 106 | mismo resultado factorizando 3(x² + 4)⁻²; x = (2y + 1)/(y − 3) → y = (3x + 1)/(x − 2), x ≠ 2 |
| Example 0.8.2 (6) lente | 12 | 107 | 1/f = 1/S₁ + 1/S₂ → S₁ = fS₂/(S₂ − f), S₂ ≠ f |
| Ejercicios | 13-14 | 108-109 | 1-18 operar, 19-27 resolver con extrañas, 28-30 con valor absoluto, 31-33 con calculadora (33 da c = ±3.00 × 10⁸), 34-39 despejar |
| Respuestas | 15 | 110 | todas verificadas |

## `sz0-9` 0.9 Radicals and Equations (impresa = archivo + 110)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Raíz de potencia | 1 | 111 | **Theorem 0.11**: (ⁿ√a)ⁿ = a; ⁿ√(aⁿ) = a si n impar, \|a\| si n par; ∛((−2)³) = −2, ⁴√((−2)⁴) = 2 = \|−2\|; √(x²) = \|x\|; enunciados del Example 0.9.1 |
| Example 0.9.1 (1-4) | 2 | 112 | √(x² + 1) no se simplifica; √(t² − 10t + 25) = \|t − 5\| (prueba t = 1 contra la "distribución"); ∛(48x¹⁴) = 2x⁴∛(6x²) (14 = 4 · 3 + 2); ⁴√(πr⁴/L⁸) = \|r\|⁴√π/L² (ver erratas) |
| Example 0.9.1 (5-6) | 3 | 113 | 2x∛(x² − 4) + 2(1/(2(∛(x² − 4))²))(2x) = 2x(x² − 3)/(∛(x² − 4))²; √((√(18y) − √(8y))² + (√20 − √80)²) = √(2y + 20) |
| Extraer raíces n-ésimas; soluciones extrañas | 4 | 114 | recuadro Extracting nth roots; recuadro Strategies for Power and Radical Equations; √x = −2 no tiene solución pero al elevar al cuadrado sale x = 4 (extraña); enunciados Example 0.9.2 |
| Example 0.9.2 (1-2) | 5 | 115 | (5x + 3)⁴ = 16 → x = −1/5, −1; 1 − (5 − 2w)³/7 = 9 → w = (5 + 2∛7)/2 (índice impar, sin ±) |
| Example 0.9.2 (3-4) | 6 | 116 | t + √(2t + 3) = 6 → t = 3 (t = 11 es extraña: daría 11 + √25 = 6 solo con −√25); √2 − 3∛(2y + 1) = 0 → y = (2√2 − 27)/54 |
| Example 0.9.2 (5-6) | 7 | 117 | √(4x − 1) + 2√(1 − 2x) = 1, elevar dos veces → x = 1/2 (5/18 extraña); ⁴√(n² + 2) + n = 0 → (n² − 2)(n² + 1) = 0 |
| Example 0.9.2 (6-8) | 8 | 118 | n = −√2 (√2 extraña); V = (4π/3)(R³ − r³) → r = ∛((4πR³ − 3V)/(4π)); ley de Graham r₁/r₂ = √(M₂/M₁) → M₁ = M₂r₂²/r₁² |
| Example 0.9.2 (9) relatividad | 9 | 119 | m = m₀/√(1 − v²/c²) → v = c√(m² − m₀²)/m; empieza 0.9.1 racionalizar |
| Racionalizar; conjugado | 10 | 120 | 1/√2 = √2/2; 7∛4/3 = 14/(3∛2) (racionalizar numerador); 3/(4 − √5): multiplicar por √5 no sirve; Definition 0.17 conjugado (a + b√c)(a − b√c) = a² − b²c; 3/(4 − √5) = (12 + 3√5)/11; con ∛5 la diferencia de cuadrados deja 16 − ∛25 |
| Raíces cúbicas; Example 0.9.3 (1) | 11 | 121 | (4 − ∛5)(16 + 4∛5 + ∛25) = 64 − 5 = 59 → 3/(4 − ∛5) = (48 + 12∛5 + 3∛25)/59; 3/⁵√(24x²) = 3⁵√(324x³)/(2x) |
| Example 0.9.3 (2); Example 0.9.4 | 12 | 122 | (√(9 + h) − 3)/h = 1/(√(9 + h) + 3) (racionalizar el numerador, "como en Cálculo"); empieza (1/√(2(x + h) + 1) − 1/√(2x + 1))/h |
| Example 0.9.4 | 13 | 123 | resultado −2/(√(2x + 2h + 1)√(2x + 1)(√(2x + 1) + √(2x + 2h + 1))); "todo para cancelar una h" |
| Ejercicios | 14 | 124 | 1-13 simplificar, 14-25 resolver, 26-29 despejar (T = 2π√(L/g), L = L₀√(1 − v²/c²)), 30-35 racionalizar |
| Respuestas | 15 | 125 | todas verificadas |

## `sz0-10` 0.10 Complex Numbers (impresa = archivo + 125)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Unidad imaginaria y complejos | 1 | 126 | i = √−1; 3(2i) = 6i, 7i − 3i = 4i, (2 − 7i) + (3 + 4i) = 5 − 3i; Definition 0.18 (i² = −1; √−c = i√c solo si c ≥ 0); trampa 2 = √4 = √(−(−4)) "=" i√−4 = i(2i) = −2; Definition 0.19 a + bi, ℂ; ℝ ⊆ ℂ |
| Example 0.10.1 (1-4) | 2 | 127 | (1 − 2i) − (3 + 4i) = −2 − 6i; (1 − 2i)(3 + 4i) = 11 − 2i; (1 − 2i)/(3 − 4i) = 11/25 − (2/25)i (multiplicar por el conjugado); √−3 √−12 = i√3 · i√12 = −6 |
| Example 0.10.1 (5-6); conjugado | 3 | 128 | √((−3)(−12)) = √36 = 6 (contraste con −6); (x − [1 + 2i])(x − [1 − 2i]) = x² − 2x + 5; conjugado con barra, ejemplos con 6, 4i, 3 + √5; Theorem 0.12 propiedades del conjugado |
| Cuadráticas con D < 0; Example 0.10.2 (1) | 4 | 129 | x² − 2x + 5 = 0, D = −16 → x = 1 ± 2i; 2x/(x + 1) = x + 3 → x² + 2x + 3 = 0 → x = −1 ± i√2 |
| Example 0.10.2 (2-3) | 5 | 130 | 2t⁴ = 9t² + 5 → t = ±√5, ±i√2/2; z³ + 1 = 0 → z = −1, (1 ± i√3)/2; las raíces no reales vienen en pares conjugados |
| Discriminante con complejos | 6 | 131 | Theorem 0.13 (D < 0: dos no reales conjugadas) |
| Ejercicios | 7 | 132 | 1-10 operar con z y w, 11-18 raíces de negativos, 19-26 potencias de i (i¹¹⁷, i³⁰⁴), 27-36 resolver |
| Respuestas | 8-10 | 133-135 | todas verificadas |

---

## Erratas e inconsistencias (verificadas)

- **p. 6 (`sz0-1` PDF 4)**: la definición por comprensión ℚ = {a/b | a ∈ ℤ y b ∈ ℤ} no dice b ≠ 0; la condición solo aparece en la prosa
  ("ratios of integers where the denominator is not zero").
- **pp. 6-7 (`sz0-1` PDF 4-5)**: ℙ son los irracionales en p. 6, pero en el Example 0.1.1 (p. 7) se llama P al conjunto de potencias de 2,
  y en el mismo ejemplo (parte 3b) vuelve a usarse ℙ para los irracionales. Choque de notación.
- **p. 11 (`sz0-1` PDF 9)**: "Do you remember what we said back on 6 about x = ±3?" falta "page".
- **p. 31 (`sz0-2` PDF 14)**: (2.13 × 10⁵³)¹⁰⁰ = 6.8858... × 10⁵³³² (comprobado: 2.13¹⁰⁰ = 6.88589 × 10³²). Redondeado a dos decimales es
  **6.89 × 10⁵³³²**, no 6.88: el libro truncó en vez de redondear.
- **p. 32 (`sz0-2` PDF 15)**: dice que (a^(3/2))^(2/3) = a "es cierto"; solo vale para a ≥ 0 (con a < 0, a^(3/2) no es real).
- **p. 19 (`sz0-2` PDF 2)**: llama a 0/0 "indeterminant form"; en p. 26 escribe "indeterminate". Detalle de ortografía.
- **p. 38 (`sz0-3` PDF 1)**: el recuadro "Procedures which Generate Equivalent Inequalities" dice "both sides of the equation" (debería ser
  "inequality"). Erratas tipográficas: "orginial" (p. 39), "Distrbute" (p. 44).
- **p. 60 (`sz0-5` PDF 1)**: 17x²y − 3xy² + 7xy² = 17x²y + (−3)xy² + 7xy² **+** 17x²y + (−3 + 7)xy²: el "+" del medio debería ser "=".
- **p. 63 (`sz0-5` PDF 4)**: "exponents do not distribute across powers" debería decir "across sums" (o diferencias); la nota al pie dice
  "on 26" sin "page".
- **pp. 74 y 76 (`sz0-6` PDF 5 y 7)**: el Example 0.6.2 (5) se enuncia como 2t³ − 10t² + 3t − 15, pero se resuelve 2t³ − 10t² − 3t + 15
  y se responde (2t² − 3)(t − 5). El enunciado impreso factoriza como (2t² + 3)(t − 5) (comprobado). En la misma página: "Since ab = 2 and
  cd = −3" debería ser ac = 2 y bd = −3 con la convención (at + b)(ct + d). Erratas: "Rearraging", "produces and unexpected".
- **p. 78 (`sz0-6` PDF 9)**: en Example 0.6.3 (2) la nota del margen dice "Subtract 4" donde se resta 4t.
- **p. 89 (`sz0-7` PDF 7)**: √(176000 − 176400) debería ser √(176400 − 176400): (−420)² = 176400 = 4(100)(441). El resultado √0 y
  x = 21/10 son correctos.
- **p. 92 (`sz0-7` PDF 10)**: "The exponent on the variable in one term is exactly twice the variable on the other term" (debería ser
  "twice the exponent").
- **p. 96 (`sz0-8` PDF 1)**: remite a las propiedades de las fracciones "on page 20"; están en la p. 21 (la 20 es la de negativos).
- **pp. 111-112 (`sz0-9` PDF 1-2)**: Example 0.9.1 (4) se enuncia ⁴√(πr⁴/L⁸) pero la solución escribe L¹² y dice "the power on the L,
  namely 12, and divide by 4 to get 3. This means L⁸ = L^(2·4)". El resultado final \|r\|⁴√π/L² corresponde a L⁸; con L¹² sería
  \|r\|⁴√π/\|L³\|.
- **Erratas de tipeo** en 0.9 y 0.10: "cofficient" (p. 112), "Mutiply" (p. 113), "Congugate" en el título de la Definition 0.17 (p. 120),
  "a review the set" (p. 126), "we and multiply" (p. 127).
- **Remisiones fuera del extracto**: el texto cita secciones 2.1, 2.2, 2.3, 3.2-3.4, 5.3, 9.2, 9.3, 10.1, 11.7 y el capítulo 4, que no
  están en estos PDF.

Todas las respuestas de los ejercicios de 0.2 a 0.10 se recalcularon y coinciden con el libro. En 0.1 se revisaron a ojo y coinciden.

## Lo que el material NO trae

- **Porcentajes**: no aparecen en ninguna sección.
- **Razones y proporciones**: no hay tratamiento (ni regla de tres). Lo más cercano es "ratios of integers" al definir ℚ (p. 6).
- **Conversión entre fracción y decimal**: solo se dice que ℚ son los decimales periódicos o finitos (p. 6) y 4/5 = 0.8 (p. 8); no hay
  algoritmo para pasar un periódico a fracción (remite a la sección 9.2, que no está).
- **Variables y expresiones** como tema: no hay definición de "variable" ni de "expresión algebraica" ni ejercicios de evaluar sustituyendo.
  Lo más cercano: variable muda del set-builder (p. 3), vocabulario de polinomios (p. 60).
- **mcm y mcd de números** como algoritmo: se usa el "lowest common denominator" (pp. 22, 40) y la factorización prima de 16337 (p. 70),
  sin método explícito.
- **Gráfica de la parábola, vértice, forma canónica**: completar el cuadrado se usa solo para resolver (p. 84); la gráfica se difiere a la
  sección 2.3.
- **Recta, pendiente, gráfica de ecuaciones lineales**: diferido a la sección 2.1.
- **División sintética, teorema del resto y de las raíces racionales**: capítulo 3, fuera del extracto.
- **Plano complejo, módulo, forma polar**: no; solo aritmética y raíces de cuadráticas (forma polar en 11.7, fuera del extracto).
- **Logaritmos y exponenciales reales**: no (los exponentes llegan hasta racionales).

---

## Búsqueda rápida por concepto

Formato: id, impresa (página del archivo).

- **Tipos de números y recta numérica**: `sz0-1` p. 6 (PDF 4) definición de real y recuadro ℕ, 𝕎, ℤ, ℚ, ℙ con la cadena ℕ ⊆ 𝕎 ⊆ ℤ ⊆ ℚ ⊆ ℝ;
  p. 7-8 (PDF 5-6) Example 0.1.1 clasificando {−117, 4/5, 0.2‾2002‾, 0.2020020002...}; p. 8-9 (PDF 6-7) recta real, completitud,
  densidad, tricotomía. Conjuntos: pp. 3-5 (PDF 1-3). Complejos como extensión: `sz0-10` p. 126 (PDF 1), ℝ ⊆ ℂ.
- **Intervalos**: `sz0-1` p. 9-10 (PDF 7-8) tablas; p. 11-12 (PDF 9-10) Example 0.1.2 con uniones e intersecciones.
- **Fracciones, decimales**: `sz0-2` p. 21 (PDF 4) propiedades de las fracciones; pp. 22-25 (PDF 5-8) Example 0.2.1 (31/28, 71/60, 350/221,
  253/204, −15/2, 63/65); p. 23 (PDF 6) quitar decimales multiplicando por 100; p. 20 (PDF 3) signo de una fracción. Fracciones algebraicas:
  `sz0-8` pp. 96-102. Porcentajes: no hay.
- **Orden de operaciones**: `sz0-2` p. 27 (PDF 10) recuadro, 2 + 3 · 4² = 50, −3² = −9 vs (−3)² = 9; p. 19 (PDF 2) 1 + 2 · 3 = 7 vs
  (1 + 2) · 3 = 9 y la distributiva; p. 28 (PDF 11) Example 0.2.2 (0 y 15).
- **Potencias y raíces**: `sz0-2` p. 26 (PDF 9) leyes de exponentes enteros; p. 27 (PDF 10) (a + b)² ≠ a² + b²; pp. 28-29 (PDF 11-12)
  Example 0.2.2 (9/16, −120/119); p. 31 (PDF 14) Definition 0.8 y Theorem 0.1; p. 32 (PDF 15) √(9 + 16) ≠ √9 + √16, Definition 0.9
  exponentes racionales y sus contraejemplos; pp. 33-35 (PDF 16-18) Example 0.2.4. Profundización: `sz0-9` p. 111 (PDF 1) ⁿ√(aⁿ) = \|a\|
  con n par; p. 112 (PDF 2) ∛(48x¹⁴); pp. 120-121 (PDF 10-11) racionalizar y conjugado.
- **Razones y proporciones**: no hay en este capítulo. Como mucho, "ratios of integers" en `sz0-1` p. 6 (PDF 4).
- **Notación científica**: `sz0-2` p. 29 (PDF 12) −621 = −6.21 × 10², 0.023 = 2.3 × 10⁻²; p. 30 (PDF 13) Definition 0.7 y Example 0.2.3
  (1.17 × 10⁻⁴⁷); p. 31 (PDF 14) desborde de calculadora (6.89 × 10⁵³³², el libro dice 6.88); ejercicio 34 p. 36 (1.38 × 10¹⁰²³⁷).
- **Variables y expresiones**: sin sección propia. `sz0-2` p. 19 (PDF 2) 5(2 + x) y 3x + 2x = 5x (términos semejantes por la distributiva);
  `sz0-5` p. 60 (PDF 1) vocabulario de polinomios (coeficiente, grado, términos semejantes); `sz0-1` p. 3 (PDF 1) variable muda;
  `sz0-3` p. 47 (PDF 10) nota sobre subíndices (P₁, P₂ son variables distintas).
- **Ecuaciones lineales**: `sz0-3` p. 38 (PDF 1) condicional/identidad/contradicción, operaciones equivalentes y Definition 0.10;
  p. 39 (PDF 2) estrategia; pp. 39-43 (PDF 2-6) Example 0.3.1 (−5/2, 20/13, 98/23, (√3 − 5)/3, 9/(3 − 10√2), y = 4x/(8 + x));
  despejes en ejercicios 10-27 p. 47 (PDF 10).
- **Desigualdades**: `sz0-3` p. 38 (PDF 1) multiplicar por negativo invierte (3 ≤ 4 pero −6 ≥ −8); pp. 43-46 (PDF 6-9) Example 0.3.2
  (5/16; (−5, 11/2]; (3/7, 5/3]; sin solución con √7; (−∞, −90] ∪ [510, ∞)).
- **Valor absoluto**: `sz0-4` p. 51 (PDF 1) distancia y Theorem 0.2; p. 52 (PDF 2) Theorem 0.3; p. 54 (PDF 4) \|x\| < 3 y \|x\| > 3 con dibujo,
  Theorem 0.4; pp. 53-56 (PDF 3-6) ejemplos; p. 57 (PDF 7) el ε del Cálculo. También √(x²) = \|x\| en `sz0-7` p. 83 y `sz0-9` p. 111.
- **Polinomios**: `sz0-5` p. 60 (PDF 1) definición y vocabulario; pp. 61-63 (PDF 2-4) distributiva generalizada, FOIL, productos notables;
  pp. 64-67 (PDF 5-8) división larga (2585 ÷ 79 como puente; x³ + 4x² − 5x − 14 ÷ (x − 2)).
- **Factorización**: `sz0-6` pp. 70-71 (PDF 1-2) factor común e irreducible, fórmulas; pp. 72-74 (PDF 3-5) Example 0.6.1 (x⁶ − 64 de dos
  formas); pp. 74-76 (PDF 5-7) un-FOIL y agrupación; p. 76 (PDF 7) x⁴ + 4x² + 16 sumando y restando 4x²; pp. 77-80 (PDF 8-11)
  producto cero y Example 0.6.3; p. 79 (PDF 10) trampa de dividir por (y − 1). Base: `sz0-2` p. 19 (PDF 2) distributiva = factorizar.
- **Ecuación cuadrática**: `sz0-7` p. 83 (PDF 1) extraer raíces; p. 84 (PDF 2) completar el cuadrado (recuadro de 6 pasos); p. 85 (PDF 3)
  3x² − 24x + 5 → (12 ± √129)/3; p. 86 (PDF 4) deducción y Theorem 0.9; p. 87 (PDF 5) estrategias; pp. 87-91 (PDF 5-9) Example 0.7.1;
  p. 92 (PDF 10) discriminante (Definition 0.16, Theorem 0.10) con D = 5, −3, 0 y 961; p. 93 (PDF 11) factorizar si D es cuadrado.
  Factorizando: `sz0-6` pp. 77-80. Con raíces complejas: `sz0-10` p. 129 (x² − 2x + 5 → 1 ± 2i) y p. 131 Theorem 0.13.
- **Expresiones racionales**: `sz0-8` p. 96 (PDF 1) cancelar factores, no términos, y 5/(x² + 9) ≠ 5/x² + 5/9; pp. 97-102 (PDF 2-7)
  Example 0.8.1; p. 100 (PDF 5) cociente de diferencias; pp. 102-107 (PDF 7-12) ecuaciones, soluciones extrañas (t = 1 en p. 104).
- **Números complejos (solo citar)**: `sz0-10` p. 126 (PDF 1) i, Definitions 0.18-0.19 y la trampa √(ab) ≠ √a√b con negativos;
  p. 127 (PDF 2) operaciones y división por el conjugado; p. 128 (PDF 3) conjugado y Theorem 0.12; pp. 129-131 (PDF 4-6) cuadráticas
  con D < 0 y Theorem 0.13.

> Nota (2026-11-12): `~/brain/03-Matematicas` se reorganizó. Los libros enteros están en `03-Matematicas/Libros/` y los archivos por unidad quedaron directamente en la carpeta del nivel (sin la subcarpeta del libro). Las rutas vigentes están en `biblioteca/fuentes.js`; las páginas no cambian.
