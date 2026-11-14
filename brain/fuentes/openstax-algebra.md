# Mapa de citas: OpenStax, "Elementary Algebra 2e" (Marecek, Anthony-Smith, Honeycutt Mathis)

Carpeta: `/Users/franciscocastillo/brain/03-Matematicas/03-Algebra-I/openstax-elementary-algebra-2e/`.
Libro libre (OpenStax, CC BY 4.0), 1.ª impresión de la 2.ª edición. Mapa parcial: solo las secciones que sirven para los conceptos
de álgebra elemental de la biblioteca (lista al final).

## Aviso importante: los archivos NO coinciden con los capítulos

El libro se partió por rangos de páginas fijos, no por capítulos. El archivo "Unidad N" contiene el **final del capítulo N−1** y el
**comienzo del capítulo N** (casi todo el capítulo N está en el archivo siguiente). Ejemplo: "Unidad 02 - Solving Linear Equations..."
trae las pp. 131-210, que son el final del capítulo 1 (1.8 a 1.10) y solo las primeras 8 páginas del capítulo 2; el resto del
capítulo 2 está en "Unidad 03 - Math Models.pdf". Las citas tienen que apuntar al archivo donde está la página, no al que tiene el
nombre del tema. La tabla de abajo da el reparto real.

## Ids propuestos, desfase y contenido real de cada archivo

Desfase verificado en **todas** las páginas de cada archivo leyendo el número impreso al pie (100 % de coincidencia, sin saltos):
página impresa = página PDF + desfase. Ejemplos comprobados: alg1 PDF 11 = p. 21 (abre 1.2); alg3 PDF 32 = p. 242 (abre 2.4);
alg5 PDF 11 = p. 497 (abre 4.5); alg7 PDF 15 = p. 731 (abre 6.4); alg10 PDF 91 = p. 1155 (abre el cap. 10); alg11 PDF 16 = p. 1208 (abre 10.5).

| id | archivo | págs. PDF | impresas | desfase | contenido real |
|---|---|---|---|---|---|
| alg1 | Unidad 01 - Foundations.pdf | 120 | 11-130 | +10 | cap. 1: final de 1.1, 1.2 Use the Language of Algebra (p. 21), 1.3 Add and Subtract Integers (p. 41), 1.4-1.7, inicio de 1.8 (p. 130) |
| alg2 | Unidad 02 - Solving Linear Equations and Inequalities.pdf | 80 | 131-210 | +130 | 1.8 The Real Numbers (cont.), 1.9 Properties of Real Numbers (p. 146), 1.10, repaso cap. 1; cap. 2 desde p. 203: 2.1 (pp. 203-210) |
| alg3 | Unidad 03 - Math Models.pdf | 112 | 211-322 | +210 | 2.1 (cont.) a 2.7 Solve Linear Inequalities (p. 276), repaso cap. 2 (pp. 291-300); cap. 3 Math Models desde p. 301 |
| alg4 | Unidad 04 - Graphs.pdf | 164 | 323-486 | +322 | cap. 3 (cont.); cap. 4 desde p. 413: 4.1, 4.2, 4.3, 4.4 Understand Slope of a Line (p. 468, sigue en alg5) |
| alg5 | Unidad 05 - Systems of Linear Equations.pdf | 108 | 487-594 | +486 | 4.4 (cont.), 4.5 Slope-Intercept Form (p. 497), 4.6 Find the Equation of a Line (p. 524), 4.7 (p. 542), repaso cap. 4; cap. 5 desde p. 577: 5.1 |
| alg6 | Unidad 06 - Polynomials.pdf | 122 | 595-716 | +594 | 5.1 (cont.), 5.2 Substitution (p. 598), 5.3 Elimination (p. 614), 5.4-5.6, repaso cap. 5; cap. 6 desde p. 685: 6.1, 6.2, inicio de 6.3 |
| alg7 | Unidad 07 - Factoring.pdf | 104 | 717-820 | +716 | 6.3 (cont.) a 6.7, repaso cap. 6; cap. 7 desde p. 807: 7.1 |
| alg8 | Unidad 08 - Rational Expressions and Equations.pdf | 120 | 821-940 | +820 | 7.2 a 7.6, repaso cap. 7; cap. 8 desde p. 903: 8.1, 8.2, 8.3 |
| alg9 | Unidad 09 - Roots and Radicals.pdf | 124 | 941-1064 | +940 | 8.4 a 8.9, repaso cap. 8; cap. 9 desde p. 1033: 9.1, 9.2, 9.3 |
| alg10 | Unidad 10 - Quadratic Equations.pdf | 128 | 1065-1192 | +1064 | 9.4 a 9.8, repaso cap. 9; cap. 10 desde p. 1155: 10.1, 10.2, 10.3 hasta p. 1192 |
| alg11 | Unidad 11 - Apendices y Respuestas.pdf | 140 | 1193-... | +1192 | 10.3 (final), 10.4, 10.5 Graphing Quadratic Equations (p. 1208), repaso cap. 10 (desde p. 1229); luego respuestas e índice (no mapeados) |

El archivo "00 - Portada y Preliminares.pdf" (18 págs.) trae portada, índice, prefacio (pp. 1-4) y el comienzo de 1.1 (pp. 5-10). No se mapea.

**Cómo se leyó.** El texto de estos PDF sale con la matemática perdida (`pdftotext` no extrae dígitos ni fórmulas: la fuente de las
fórmulas no tiene tabla Unicode y sale como letras corridas). Por eso: estructura (ejemplos, cuadros, "How To", figuras) con `pdftotext`
página por página; contenido con OCR (tesseract) de cada página de las secciones mapeadas; y todo número de ejemplo o fórmula que se cita
aquí se comprobó además mirando la página renderizada (unas 70 páginas revisadas como imagen) o recalculando con python3/sympy.

**Estructura de cada sección** (útil para citar): "Learning Objectives" y "Be Prepared" al abrir; cuadros de definición con título;
ejemplos numerados "EXAMPLE c.n" (los que traen "HOW TO ..." en la cabecera están resueltos en tabla de pasos con columna gris);
"Try It" después de cada ejemplo; recuadro "HOW TO ::" con los pasos del procedimiento; al final "Section Exercises" (Practice Makes Perfect,
Everyday Math, Writing Exercises, Self Check). Al final de cada capítulo: Key Terms, Key Concepts, Review Exercises y Practice Test.

---

## alg1 — Unidad 01 - Foundations.pdf (impresa = PDF + 10)

### 1.2 Use the Language of Algebra (pp. 21-40, PDF 11-30)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Variable y constante | 11 | 21 | edades de Greg (g) y Alex (g + 3): Table 1.2 con 12/15, 20/23, 35/38; cuadros **Variable** ("letter that represents a number whose value may change") y **Constant** |
| Símbolos de operación | 12 | 22 | tabla de notación (a + b, a − b, a·b, ab, (a)(b), a ÷ b, a/b) y cómo se lee cada una ("the difference of 9 and 2"); por qué no se usa × en álgebra; cuadros Equality Symbol e Inequality (a < b: a a la izquierda de b en la recta) |
| Desigualdades en palabras | 13 | 23 | Table 1.3 (≠, <, ≤, >, ≥); Example 1.12 (17 ≤ 26, 8 ≠ 17 − 3, 12 > 27 ÷ 3, y + 7 < 19); cuadro Grouping Symbols (paréntesis, corchetes, llaves) |
| Expresión vs. ecuación | 14 | 24 | cuadros **Expression** ("a number, a variable, or a combination ... using operation symbols") y **Equation** ("two expressions connected by an equal sign"); analogía frase/oración; Example 1.13: 2(x + 3) = 10, 4(y − 1) + 1, x ÷ 25, y + 8 = 40 |
| Exponentes | 15 | 25 | cuadro Exponential Notation (aⁿ = a·a·...·a, n factores; base y exponente); Table 1.4; Example 1.14: 3⁴ = 81 (p. 25-26) |
| Simplificar | 16 | 26 | cuadro Simplify an Expression; el dilema 4 + 3·7: unos dicen 49, otros 25 |
| Orden de operaciones | 17 | 27 | **HOW TO Perform the Order of Operations** (4 pasos: agrupación, exponentes, multiplicación y división de izquierda a derecha, suma y resta de izquierda a derecha); "Please Excuse My Dear Aunt Sally"; Example 1.15: 4 + 3·7 = 25 y (4 + 3)·7 = 49 |
| Más orden de operaciones | 18-19 | 28-29 | Example 1.16: 18 ÷ 6 + 4(5 − 2) = 15 (dividir primero porque va de izquierda a derecha); Example 1.17: 5 + 2³ + 3[6 − 3(4 − 2)] = 13 (de adentro hacia afuera) |
| Evaluar una expresión | 19-20 | 29-30 | cuadro Evaluate an Expression (sustituir el valor de la variable y simplificar); Example 1.18: 7x − 4 con x = 5 da 31 y con x = 1 da 3; Example 1.19: x = 4, x² = 16 y 3ˣ = 81 |
| Evaluar un polinomio | 21 | 31 | Example 1.20: 2x² + 3x + 8 con x = 4 da 32 + 12 + 8 = 52 |
| Término y coeficiente | 21 | 31 | cuadros **Term** ("a constant, or the product of a constant and one or more variables") y **Coefficient**; ejemplos 7, y, 5x², 9a, b¹⁵; Example 1.21: coeficientes de 14y, 15x², a (es 1) |
| Términos semejantes | 22 | 32 | 5x, 7, n², 4, 3x, 9n²; cuadro **Like Terms**; Example 1.22 (y³ y 4y³; 7x² y 5x²; 14 y 23); Example 1.23: términos de 9x² + 7x + 12 y de 8x + 3y |
| Combinar términos semejantes | 23 | 33 | 4x + 7x + x = 12x con dibujo de doce x (4 naranjas + 7 + 1 = 12 naranjas); Example 1.24 (How To): 2x² + 3x + 7 + x² + 4x + 5 = 3x² + 7x + 12; **HOW TO Combine Like Terms** (3 pasos) |
| Traducir del inglés al álgebra | 24-26 | 34-36 | Table 1.5 (sum, difference, product, quotient, "more than", "less than"); Example 1.25 (diferencia de 17x y 5); Example 1.26 ("nine less than 9x²": el orden se invierte); Example 1.27 (cinco veces la suma de m y n, vs. la suma de cinco veces m y n: 5(m + n) vs. 5m + n); Example 1.28 (largo = w − 6); Example 1.29 (monedas: 4q − 3) |
| Ejercicios | 28-30 | 38-40 | ejercicios de la sección por tema |

### 1.3 Add and Subtract Integers: valor absoluto (pp. 41-47, PDF 31-37)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Recta numérica y opuestos | 31-33 | 41-43 | Figures 1.6-1.9 (recta, números negativos, opuesto de 3 es −3); cuadro Opposite Notation (−a, "the opposite of a"); Example 1.31: opuesto de 7, de −10, −(−6) |
| Enteros | 34 | 44 | cuadro Integers; Example 1.32: −x con x = 8 y con x = −8 |
| **Valor absoluto** | 35 | 45 | cuadro **Absolute Value**: "distance from 0 on the number line", notación \|n\|; Figure 1.10 (−5 y 5 a 5 unidades de 0); cuadro Property of Absolute Value: \|n\| ≥ 0 para todo n ("non-negative"); Example 1.33: \|3\|, \|−44\|, \|0\| |
| Comparar con valor absoluto | 36 | 46 | Example 1.34: \|−5\| vs −\|−5\|, 8 vs −\|−8\|, −9 vs −\|−9\|, −(−16) vs −\|−16\| (la trampa del signo fuera de las barras) |
| Barras como símbolo de agrupación | 37 | 47 | cuadro Grouping Symbols que ahora incluye \|\|; Example 1.35: 24 − \|19 − 3(6 − 2)\| = 24 − 7 = 17; Example 1.36: evaluar \|x\|, \|−y\|, −\|u\|, −\|p\| |

---

## alg2 — Unidad 02 - Solving Linear Equations and Inequalities.pdf (impresa = PDF + 130)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Raíz cuadrada principal (1.8) | 1-2 | 131-132 | cuadro Square Root Notation (√m es el número positivo cuyo cuadrado es m); Examples 1.108-1.109 (√144, −√289) |
| Racionales (1.8) | 2 | 132 | cuadro Rational Number (p/q con q ≠ 0); todo entero es racional; 7.3 = 73/10 |
| Conmutativa y asociativa (1.9) | 16-19 | 146-149 | cuadro Commutative Property (a + b = b + a; a·b = b·a); Example 1.122: 18p + 6q + 15p + 5q; Example 1.124: 6(3x) por asociativa |
| Inversos (1.9) | 21 | 151 | cuadro Inverse Property (a + (−a) = 0; a·(1/a) = 1); Examples 1.125-1.126 |
| Propiedades del cero (1.9) | 22-23 | 152-153 | cuadros Multiplication by Zero, Division of Zero (0/a = 0) y **Division by Zero** ("undefined"); Example 1.127; Example 1.128: 0/(n + 5) con n ≠ −5 |
| **Propiedad distributiva** (1.9) | 25-28 | 155-158 | cuadro Distributive Property: a(b + c) = ab + ac y (b + c)a = ba + ca; Example 1.134: 100(0.3 + 0.25q); Example 1.135: −2(4y + 1); Example 1.136: −11(4 − 3a); Example 1.137: −(y + 5) = −y − 5; Example 1.138: 8 − 2(x + 3) = 2 − 2x (la multiplicación va antes que la resta); Example 1.139: 4(x − 8) − (x + 3) = 3x − 35 |
| Resumen de propiedades | 30 | 160 | Table 1.57 con todas las propiedades de los reales |
| Apertura del cap. 2 | 73 | 203 | Figure 2.1 (rocas en equilibrio: la ecuación como balanza); lista de secciones 2.1-2.7 |
| Verificar una solución | 74 | 204 | cuadro **Solution of an equation**; HOW TO determinar si un número es solución (3 pasos); Example 2.1: ¿x = 3/2 es solución de 4x − 2 = 2x + 1? |
| **Modelo de sobres y fichas** | 75 | 205 | Figures 2.2-2.4: un sobre (la incógnita) y 3 fichas = 8 fichas; quitar 3 de cada lado deja 5; x + 3 = 8, x = 5. Imagen central de "lo que haces de un lado lo haces del otro" |
| Propiedades de igualdad (suma y resta) | 76 | 206 | cuadros Subtraction Property of Equality (si a = b, a − c = b − c) y Addition Property of Equality; Example 2.2: y + 37 = −13, y = −50 |
| Más ejemplos | 77-78 | 207-208 | Example 2.3: a − 28 = −37; Example 2.5: n − 0.63 = −4.2, n = −3.57; Example 2.6 (How To): 9x − 5 − 8x − 6 = 7, x = 18 (simplificar cada lado antes de despejar) |
| Ecuaciones que requieren simplificar | 79-80 | 209-210 | Examples 2.7-2.8, con distributiva en ambos lados |

---

## alg3 — Unidad 03 - Math Models.pdf (impresa = PDF + 210)

### 2.1-2.2 (pp. 211-231, PDF 1-21)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Traducir una oración a ecuación | 1 | 211 | Table 2.1; HOW TO translate an English sentence (3 pasos: buscar el "equals"); Example 2.9: "Eleven more than x is equal to 54", x = 43; Example 2.10 |
| Resolver aplicaciones | 3 | 213 | HOW TO Solve an Application (7 pasos: leer, identificar, nombrar, traducir, resolver, comprobar, responder) |
| Modelo con varios sobres | 8-9 | 218-219 | Figures 2.5-2.6: dos sobres = 6 fichas, 2x = 6, x = 3 |
| Propiedades de división y multiplicación | 9-10 | 219-220 | cuadros The Division Property of Equality y The Multiplication Property of Equality; Example 2.13: 5x = −27, x = −27/5; Example 2.14: y/(−7) = −14, y = 98 |
| Coeficiente −1 y fracciones | 11-12 | 221-222 | Examples 2.15-2.17 (−x = c; coeficiente fraccionario: multiplicar por el recíproco) |
| Simplificar y luego despejar | 12-13 | 222-223 | Example 2.18: 8x + 9x − 5x = −3 + 15; Example 2.19: −4(a − 3) − 7 = 25 |
| Resumen | 14 | 224 | cuadro **Properties of Equality** (las cuatro juntas) |
| Traducir y resolver | 14-16 | 224-226 | Examples 2.20-2.24 (143 = −11y; n/8 = −32, n = −256; y/(−4) = 68, y = −272; "three-fourths of p is 18") |
| Aplicaciones | 17-18 | 227-228 | Example 2.25: 6 libras de uvas por $10.74, $1.79 la libra; Example 2.26 (auto usado) |

### 2.3 Solve Equations with Variables and Constants on Both Sides (pp. 232-241, PDF 22-31)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Constantes en ambos lados | 22-23 | 232-233 | Example 2.27: 7x + 8 = −13, x = −3; Example 2.28: 8y − 9 = 31 |
| Variables en ambos lados | 23-25 | 233-235 | Example 2.29: 9x = 8x − 6; Example 2.30; Example 2.31: 12x = −x + 26, x = 2 |
| Variables y constantes en ambos lados | 25-26 | 235-236 | Example 2.32 (How To): 7x + 5 = 6x + 2, x = −3, con lado "variable" y lado "constante" |
| **Beginning Strategy** | 26 | 236 | HOW TO de 5 pasos (elegir el lado variable, juntar variables, juntar constantes, coeficiente 1, comprobar); consejo: el lado variable es el del coeficiente mayor; Example 2.33: 8n − 4 = −2n + 6, n = 1 |
| Más ejemplos | 27-28 | 237-238 | Example 2.34: 7a − 3 = 13a + 7 (variables a la derecha porque 13 > 7); Example 2.35 con fracciones; Example 2.36: 7.8x + 4 = 5.4x − 8, x = −5 |

### 2.4 Use a General Strategy to Solve Linear Equations (pp. 242-254, PDF 32-44)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Ejemplo guía | 32-33 | 242-243 | Example 2.37 (How To): −6(x + 3) = 24, x = −7, con comprobación |
| **General Strategy** | 33 | 243 | HOW TO de 5 pasos: simplificar cada lado (distributiva, semejantes); variables a un lado; constantes al otro; coeficiente 1; comprobar |
| Ejemplos | 33-38 | 243-248 | Example 2.38: −(y + 9) = 8, y = −17; Example 2.39: 5(a − 3) + 5 = −10, a = 0; Example 2.41: 8 − 2(3y + 5) = 0, y = −1/3; Example 2.42: 4(x − 1) − 2 = 5(2x + 3) + 6, x = −9/2; Example 2.43: 10[3 − 8(2s − 5)] = 15(40 − 5s), s = −2; Example 2.44: 0.36(100n + 5) = 0.6(30n + 15), n = 0.4 |
| **Clasificar ecuaciones** | 38-39 | 248-249 | cuadros **Conditional equation**, **Identity** ("true for any value ... solution is all real numbers") y **Contradiction** ("false for all values ... no solution") |
| Ejemplos de clasificación | 39-40 | 249-250 | Example 2.45: 6(2n − 1) + 3 = 2n − 8 + 5(2n + 1) es identidad; Example 2.46: 10 + 4(p − 5) = 0 es condicional, p = 5/2; Example 2.47: 5m + 3(9 + 3m) = 2(7m − 11) es contradicción (27 = −22) |
| Tabla resumen | 41 | 251 | Table 2.5: tipo de ecuación, qué pasa al resolver, solución |

### 2.5 Solve Equations with Fractions or Decimals (pp. 255-265, PDF 45-55)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Limpiar fracciones con el MCD | 46 | 256 | Example 2.48 (How To): (1/6)y − 1/3 = 5/6; MCD 6; queda y − 2 = 5, y = 7; **HOW TO Strategy to Solve Equations with Fraction Coefficients** (3 pasos) |
| Más fracciones | 46-51 | 256-261 | Example 2.49: 6 = (1/2)v + (2/5)v − (3/4)v, MCD 20, v = 40; Examples 2.50-2.55 (fracciones con distributiva, incógnita en ambos lados) |
| Coeficientes decimales | 52-53 | 262-263 | multiplicar por potencia de 10; Example 2.56: 0.06x + 0.02 = 0.25x − 1.5, x = 8; Example 2.57: 0.25x + 0.05(x + 3) = 2.85, x = 9 |

### 2.6 Solve a Formula for a Specific Variable (pp. 266-275, PDF 56-65)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| d = rt | 56-57 | 266-267 | cuadro Distance, Rate, and Time; HOW TO Solve an Application (with a Formula); Examples 2.58-2.59 (Jamal en bici; Rey, 520 millas) |
| Despejar una variable | 58-61 | 268-271 | Example 2.60: d = rt para t; Example 2.62: I = Prt para P; Example 2.63: 3x + 2y = 18 para y; Example 2.64: P = a + b + c para a; Example 2.65: 6x + 5y = 13 para y (antesala de la forma pendiente-intercepto) |

### 2.7 Solve Linear Inequalities (pp. 276-290, PDF 66-80)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Desigualdad en la recta | 66-67 | 276-277 | Figures 2.7-2.10: x > 3 (paréntesis), x ≥ 3 (corchete), x < 3, x ≤ 3; Example 2.66: x ≤ 1, x < 5, x > −1 |
| **Notación de intervalos** | 68 | 278 | cuadro Inequalities, Number Lines, and Interval Notation; Figure 2.11 (paréntesis o corchete según el extremo); Example 2.67: x ≥ −3 → [−3, ∞); x < 2.5 → (−∞, 2.5); x ≤ −3/5 → (−∞, −3/5] |
| Suma y resta | 69 | 279 | cuadros Properties of Equality y Properties of Inequality lado a lado; Table 2.6; Example 2.68 |
| **Multiplicar o dividir por un negativo** | 70-71 | 280-281 | experimento con 10 < 15: dividir por 5 conserva, dividir por −5 da −2 > −3 y multiplicar por −5 da −50 > −75 ("The inequality signs reversed their direction"); cuadro **Division and Multiplication Properties of Inequality** (si c > 0 se conserva, si c < 0 se invierte) |
| Ejemplos | 71-73 | 281-283 | Example 2.69: 7y < 42, y < 6, (−∞, 6); Example 2.70: −10a ≥ 50, a ≤ −5; cuadro Solving Inequalities (resumen); Examples 2.71-2.72 con fracciones y coeficiente negativo |
| Con simplificación | 73-75 | 283-285 | Example 2.74: 8p + 3(p − 12) > 7p − 28, p > 2, (2, ∞); Example 2.75: 8x − 2(5 − x) < 4(x + 9) + 6x queda −10 < 36: **identidad, solución todos los reales** (−∞, ∞) (las desigualdades también pueden ser identidades o contradicciones) |
| Traducir a desigualdad | 76-77 | 286-287 | Table 2.7: "at least" (≥), "at most" (≤), "no more than", "exceeds"; Examples 2.76-2.78 |
| Repaso del capítulo 2 | 81-90 | 291-300 | Key Terms, Key Concepts, Review Exercises por sección, Practice Test |

---

## alg4 — Unidad 04 - Graphs.pdf (impresa = PDF + 322)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Apertura cap. 4 | 91 | 413 | Figure 4.1 (ventas de vehículos); secciones 4.1-4.7 |
| Plano cartesiano | 92-96 | 414-418 | Figure 4.2 (cuadrantes); cuadros Ordered Pair y The Origin; Example 4.1 (ubicar puntos y cuadrante); Figure 4.3; cuadro Quadrants (signos); Figure 4.4 y cuadro Points on the Axes; Examples 4.2-4.3 |
| Ecuación lineal en dos variables | 97-98 | 419-420 | cuadro **Linear Equation** (Ax + By = C, A y B no ambos cero); cuadro Standard Form of Linear Equation; cuadro Solution of a Linear Equation in Two Variables; Table 4.1 |
| Verificar y completar tablas | 98-102 | 420-424 | Examples 4.4-4.7, Tables 4.2-4.7 |
| Hallar soluciones | 103-105 | 425-427 | Example 4.8: tres soluciones de y = −3x + 2; Examples 4.9 con Tables 4.8-4.9 |
| Graficar por puntos (4.2) | 111-121 | 433-443 | Table 4.10 y Figures 4.5-4.7 (todas las soluciones caen sobre una recta); HOW TO Graph a Linear Equation by Plotting Points (p. 438); Examples 4.10-4.15 |
| Rectas verticales y horizontales | 122-128 | 444-450 | cuadros **Vertical Line** (x = a) y **Horizontal Line** (y = b); Figures 4.12-4.17; Examples 4.16-4.18 |
| Interceptos (4.3) | 132-140 | 454-462 | cuadro Intercepts of a Line; Figure 4.18; Tables 4.24-4.26 (hacer x = 0 o y = 0); Examples 4.19-4.22; **HOW TO Graph a Linear Equation Using the Intercepts** (p. 461); Example 4.23: 4x − 3y = 12, interceptos (3, 0) y (0, −4); Example 4.24: y = 5x (pasa por el origen) |
| **Pendiente con geoplano** (4.4) | 146-147 | 468-469 | Figures 4.19-4.22: banda elástica en un geoplano, subida 2 y avance 3 |
| **Definición de pendiente** | 148 | 470 | cuadro **Slope of a Line**: m = rise/run; Example 4.25: subida 3, avance 4, m = 3/4 (Table 4.29) |
| Pendiente positiva y negativa | 150-152 | 472-474 | Figure 4.23; cuadro Positive and Negative Slopes; Example 4.27: modelar m = 1/2; Example 4.28: m = −1/4; Example 4.29 |
| Pendiente desde el gráfico | 154-156 | 476-478 | **HOW TO Find the Slope of a Line from its Graph** (4 pasos: dos puntos enteros, triángulo, contar, cociente); Example 4.30: puntos (0, 5) y (3, 3), m = −2/3; Example 4.31 |
| **Horizontal y vertical** | 157-159 | 479-481 | Table 4.34: y = 4 tiene subida 0, m = 0; Table 4.35: x = 3 tiene avance 0, m = 2/0 indefinida; cuadros Slope of a Horizontal Line y **Slope of a Vertical Line** ("undefined"); Example 4.32: x = 8 (indefinida), y = −5 (0); cuadro **Quick Guide to the Slopes of Lines** (positiva, negativa, cero, indefinida) |
| **Fórmula de la pendiente** | 160 | 482 | subíndices (x₁, y₁), (x₂, y₂); gráfico entre (2, 3) y (7, 6): subida 3 = 6 − 3, avance 5 = 7 − 2; cuadro **Slope Formula**: m = (y₂ − y₁)/(x₂ − x₁) |
| Ejemplos de la fórmula | 161-162 | 483-484 | Example 4.33: (1, 2) y (4, 5), m = 1, confirmado en el gráfico; "no importa cuál punto es el 1"; Example 4.34: (−2, −3) y (−7, 4), m = 7/(−5) = −7/5, confirmado contando en el gráfico |
| Graficar con punto y pendiente | 163-164 | 485-486 | Example 4.35 (How To): punto (1, −1) y m = 3/4; HOW TO Graph a Line Given a Point and the Slope (p. 486); Example 4.36 (intercepto en y 2 y pendiente negativa) |

---

## alg5 — Unidad 05 - Systems of Linear Equations.pdf (impresa = PDF + 486)

### 4.4 (final) y 4.5 Use the Slope-Intercept Form of an Equation of a Line (pp. 487-523, PDF 1-37)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Punto y pendiente entera | 1-2 | 487-488 | Example 4.37: punto (−1, −3) y m = 4, escrita como 4/1 o como −4/−1 para hallar un tercer punto |
| **Pendiente en la vida real** | 2-3 | 488-489 | Example 4.38: techo con subida 9 pies y avance 18 pies, m = 1/2; Example 4.39: tubería de desagüe que baja 1/4 de pulgada por pie, m = −1/48 (unidades iguales arriba y abajo) |
| De la recta a y = mx + b | 11-12 | 497-498 | Figure 4.24; la recta y = (1/2)x + 3 tiene m = 1/2 y corta en (0, 3); cuadro **Slope-Intercept Form of an Equation of a Line**: y = mx + b ("y-form") |
| Leer m y b del gráfico | 12-14 | 498-500 | Example 4.40: y = 2x + 1 con puntos (0, 1) y (1, 3), m = 2/1; Examples 4.41-4.42 (identificar m y b, incluso despejando y) |
| Graficar con m y b | 14-19 | 500-505 | Example 4.43 (How To); **HOW TO Graph a Line Using its Slope and y-Intercept** (6 pasos, p. 502); Example 4.44: y = −x + 4; Examples 4.45-4.47 |
| Interpretar m y b | 19-20 | 505-506 | Example 4.47 y siguientes (modelos de costo: b es el costo fijo y m el costo por unidad, como C = 1.8n + 35 del Try It 4.100) |
| **Métodos para graficar** | 20-24 | 506-510 | Figure 4.25: tabla de los cuatro métodos (puntos, pendiente-intercepto, interceptos, vertical u horizontal); seis ecuaciones con su método conveniente (x = 2, y = 4, −x + 2y = 6, 4x − 3y = 12, y = 4x − 2, y = −x + 4); Examples 4.48-4.50 |
| **Rectas paralelas** | 25-26 | 511-512 | Figure 4.27: misma pendiente m = 2/5 y distinto intercepto; Figure 4.28: verticales con distinto intercepto en x; cuadro **Parallel Lines**: m₁ = m₂ y b distintos; verticales paralelas; y = −2x + 3 y 2x + y = −1 |
| Ejemplos de paralelas | 27-29 | 513-515 | Example 4.51: 3x − 2y = 6 e y = (3/2)x + 1 son paralelas (Table 4.42); Example 4.52: y = −4 e y = 3; Example 4.53; Example 4.54: y = 2x − 3 y −6x + 3y = −9 **no son paralelas: son la misma recta** (Table 4.44) |
| **Rectas perpendiculares** | 30 | 516 | Figure 4.29: y = (1/4)x − 1 e y = −4x + 2; producto (1/4)(−4) = −1; cuadro **Perpendicular Lines**: m₁·m₂ = −1, m₂ = −1/m₁ ("negative reciprocals"); vertical y horizontal siempre perpendiculares |
| Ejemplos de perpendiculares | 30-31 | 516-517 | Example 4.55: y = −5x − 4 y x − 5y = 5 (−5 · 1/5 = −1, sí); Example 4.56: 7x + 2y = 3 y 2x + 7y = 5 tienen −7/2 y −2/7: **recíprocas pero del mismo signo, no son perpendiculares** (Table 4.45) |

### 4.6 Find the Equation of a Line (pp. 524-541, PDF 38-55)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Con pendiente e intercepto | 38-39 | 524-525 | por qué importa (modelar datos); Example 4.57: m = −7, intercepto (0, −1): y = −7x − 1; Example 4.58 (leer del gráfico) |
| **Derivación de punto-pendiente** | 40 | 526 | de m = (y − y₁)/(x − x₁) se multiplica por (x − x₁) (Table 4.46); cuadro **Point-slope Form of an Equation of a Line**: y − y₁ = m(x − x₁) |
| Pendiente y un punto | 41-42 | 527-528 | Example 4.59 (How To): m = 2/5 y (10, 3): y − 3 = (2/5)(x − 10), y = (2/5)x − 1; **HOW TO Find an Equation of a Line Given the Slope and a Point** (4 pasos); Example 4.60: m = −1/3 y (6, −4); Example 4.61 |
| Dos puntos | 42-44 | 528-530 | Example 4.62 (How To): (5, 4) y (3, 6): m = 2/(−2) = −1, y = −x + 9; "usa (3, 6) y verás que sale la misma"; **HOW TO Find an Equation of a Line Given Two Points** (p. 529); Example 4.63: (−3, −1) y (2, −2); Example 4.64 |
| Qué forma usar | 45 | 531 | **Table 4.47**: resumen de qué método según lo que te dan (m y b, m y un punto, dos puntos) |
| Paralela a una recta dada | 45-46 | 531-532 | Example 4.65 (How To): paralela a y = 2x − 3 por (−2, 1): y = 2x + 5; **HOW TO Find an Equation of a Line Parallel to a Given Line** (5 pasos) |
| Perpendicular a una recta dada | 46-48 | 532-534 | Example 4.66: perpendicular a y = 2x − 3 por (−2, 1): m⊥ = −1/2, y = −(1/2)x; **HOW TO Find an Equation of a Line Perpendicular to a Given Line** (p. 534) |
| Caso vertical | 48-50 | 534-536 | Example 4.67: perpendicular a x = 5 por (3, −2): horizontal, y = −2; Example 4.68 (perpendicular a una horizontal) |

### 4.7 Graphs of Linear Inequalities (pp. 542-559, PDF 56-73) y repaso

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Desigualdad lineal en dos variables | 56 | 542 | cuadros Linear Inequality y Solution of a Linear Inequality; Figure 4.30; Example 4.69 |
| Recta frontera | 58-60 | 544-546 | cuadro **Boundary Line** (continua si ≤ o ≥, punteada si < o >); Table 4.48; Figures 4.31-4.34 (un semiplano es la solución); Example 4.70 |
| Graficar | 64-68 | 550-554 | Example 4.72; **HOW TO Graph a Linear Inequality** (p. 552: frontera, punto de prueba, sombrear); Examples 4.73-4.75 |
| Repaso del capítulo 4 | 75-90 | 561-576 | Key Terms (p. 561-563), Key Concepts, Review Exercises por sección, Practice Test |

### 5.1 Solve Systems of Equations by Graphing (pp. 577-597, PDF 91-108; sigue en alg6)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Apertura cap. 5 | 91 | 577 | Figure 5.1 (diseño de una fuente de agua); secciones 5.1-5.6 |
| Sistema y su solución | 92 | 578 | cuadros **System of Linear Equations** (con llave) y **Solutions of a System of Equations** (par ordenado que cumple ambas); 3x − y = 7, x − 2y = 4: (2, −1) cumple ambas (7 = 7 y 4 = 4), (3, 2) cumple solo la primera (−2 ≠ 4) |
| Verificar | 93 | 579 | Example 5.1 (¿el par es solución?) |
| Resolver graficando | 94-96 | 580-582 | Example 5.2 (How To) con Figure 5.2; **HOW TO To Solve a System of Linear Equations by Graphing** (4 pasos: si se cortan hay una solución, si son paralelas no hay, si son la misma hay infinitas) |
| Ejemplos que se cortan | 96-99 | 582-585 | Example 5.3: y = 2x + 1, y = 4x − 1, se cortan en (1, 3), comprobado; Examples 5.4-5.6 (horizontal o vertical en el sistema) |
| **Sin solución** | 100 | 586 | Example 5.7: y = (1/2)x − 3 y x − 2y = 4: rectas paralelas, "There is no solution to this system" |
| **Infinitas soluciones** | 101 | 587 | Example 5.8: y = 2x − 3 y −6x + 3y = −9: "The lines are the same!", infinitas soluciones |
| **Contar soluciones sin graficar** | 102 | 588 | cuadro Coincident Lines (misma pendiente y mismo intercepto); Figure 5.3 (cortan: 1, paralelas: ninguna, misma recta: infinitas); Figure 5.4 (tabla pendientes/interceptos → tipo → número de soluciones) |
| **Consistente/inconsistente, independiente/dependiente** | 103 | 589 | cuadros **Consistent and Inconsistent Systems** y **Independent and Dependent Equations**; Figure 5.5 (los tres dibujos) y **Figure 5.6** (tabla completa: se cortan = 1 solución, consistente, independiente; paralelas = ninguna, inconsistente, independiente; coincidentes = infinitas, consistente, dependiente) |
| Clasificar sin graficar | 103-105 | 589-591 | Example 5.9: y = 3x − 1 y 6x − 2y = 12 → y = 3x − 6: misma pendiente, distinto intercepto, sin solución, inconsistente; Example 5.10: 2x + y = −3 y x − 5y = 5: pendientes −2 y 1/5, una solución; Example 5.11: 3x − 2y = 4 e y = (3/2)x − 2: coincidentes |
| Aplicación | 106-107 | 592-593 | HOW TO Use a Problem Solving Strategy for Systems of Linear Equations; Example 5.12: 10 cuartos de ponche, el jugo es 4 veces la soda |

---

## alg6 — Unidad 06 - Polynomials.pdf (impresa = PDF + 594)

### 5.2 Solving Systems of Equations by Substitution (pp. 598-613, PDF 4-19)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Ejemplo guía | 4-5 | 598-599 | Example 5.13 (How To): 2x + y = 7, x − 2y = 6; despejar y = 7 − 2x, sustituir, 5x = 20, x = 4, y = −1; (4, −1) comprobado en ambas |
| **HOW TO Substitution** | 5 | 599 | 6 pasos: despejar una variable, sustituir, resolver, volver a sustituir, escribir el par, comprobar en **ambas** ecuaciones |
| Ejemplos | 6-9 | 600-603 | Examples 5.14-5.15 (una ya está despejada); Example 5.16: x − 2y = −2, 3x + 2y = 34 → (8, 5); Example 5.17: y = −2x + 5 e y = (1/2)x → (2, 1) |
| Cuidado con los signos | 9-10 | 603-604 | Example 5.18: 4x + 2y = 4, 6x − y = 8 → (5/4, −1/2), con comprobación con fracciones |
| **Infinitas y ninguna por sustitución** | 10-11 | 604-605 | Example 5.19: 4x − 3y = 6 y 15y − 20x = −30: queda 0 = 0, "consistent ... dependent ... infinitely many solutions"; Example 5.20: 5x − 2y = −10 e y = (5/2)x: queda 0 = −10, falso, "inconsistent ... no solutions" |
| Aplicaciones | 11-15 | 605-609 | HOW TO de problemas (p. 606); Example 5.21: dos números que suman 0 y uno es 9 menos que el otro; Example 5.22: rectángulo de perímetro 88; Example 5.23: ángulos de un triángulo rectángulo; Example 5.24: Heather, $25,000 más $15 por cliente vs otra opción (punto de equilibrio) |

### 5.3 Solve Systems of Equations by Elimination (pp. 614-628, PDF 20-34)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Idea | 20-21 | 614-615 | sumar ecuaciones (si a = b y c = d, a + c = b + d); hacer opuestos los coeficientes; ejemplo 4x − 3y = 10 y 3x + 5y = −7: multiplicar por 3 y por −4 da 12x y −12x, queda −29y = 58 |
| Ejemplo guía | 21-22 | 615-616 | Example 5.25 (How To): 2x + y = 7, x − 2y = 6; multiplicar la primera por 2, 5x = 20, (4, −1) |
| **HOW TO Elimination** | 23 | 617 | 7 pasos: forma estándar y sin fracciones; hacer opuestos los coeficientes de una variable; sumar; resolver; sustituir; escribir el par; comprobar |
| Ejemplos | 23-26 | 617-620 | Example 5.26: x + y = 10, x − y = 12 → (11, −1) (ya opuestos); Example 5.27: 3x − 2y = −2, 5x − 6y = 10, multiplicar por −3, (−4, −5); Example 5.28: 4x − 3y = 9, 7x + 2y = −6, multiplicar ambas (por 2 y por 3), (0, −3); Example 5.29: con fracciones, x + (1/2)y = 6 y (3/2)x + (2/3)y = 17/2 → (3, 6) |
| **Casos especiales** | 27-28 | 621-622 | Example 5.30: 3x + 4y = 12 e y = 3 − (3/4)x: queda 0 = 0, infinitas (las dos ecuaciones eran la misma); Example 5.31: −6x + 15y = 10 y 2x − 5y = −5: queda 0 ≠ −5, sin solución |
| Aplicaciones | 28-30 | 622-624 | Example 5.32: dos números que suman 39 y difieren en 9 → 24 y 15; Example 5.33: Joe, papas y refrescos (precios) |
| **Elegir el método** | 30-31 | 624-625 | Choose the Most Convenient Method: sustitución si una ecuación ya está despejada, eliminación si ambas están en forma estándar; Example 5.34 |
| 5.4 Aplicaciones | 35-40 | 629-634 | traducir a sistema; Examples 5.35-5.39 (incluye ángulos complementarios y suplementarios, p. 634) |
| Repaso del capítulo 5 | 82-90 | 676-684 | Key Terms, Key Concepts, Review Exercises, Practice Test |

### 6.1 Add and Subtract Polynomials (pp. 685-699, PDF 91-105)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Monomio y polinomio | 92 | 686 | cuadros **Monomials** (axᵐ) y **Polynomials** (monomio, binomio, trinomio); tabla de ejemplos; Example 6.1: 4y² − 8y − 6 (trinomio), −5a⁴b² (monomio), 2x⁵ − 5x³ − 9x² + 3x + 4 (polinomio), 13 − 5m³ (binomio), q (monomio) |
| Grado | 93 | 687 | cuadro **Degree of a Polynomial** (grado de un término = suma de exponentes; constante, grado 0; polinomio = el mayor grado); tabla por tipos; standard form (de mayor a menor grado); Example 6.2: 10y, 4x³ − 7x + 5, −15, −8b² + 9b − 2, 8xy² + 2y |
| Sumar y restar monomios | 94-95 | 688-689 | Example 6.3: 25y² + 15y²; Example 6.4: 16p − (−7p); Examples 6.5-6.6 (no semejantes: c² + 7d² − 6c²) |
| Sumar y restar polinomios | 96-98 | 690-692 | Example 6.7: (5y² − 3y + 15) + (3y² − 4y − 11); Example 6.8: (9w² − 7w + 5) − (2w² − 4); Example 6.9: restar (c² − 4c + 7) de (7c² − 5c + 3) (el orden se invierte); Examples 6.10-6.12 con dos variables |
| Evaluar un polinomio | 98-100 | 692-694 | Example 6.13: 5x² − 8x + 4 en varios x; Example 6.14: altura −16t² + 250 de una pelota soltada desde 250 pies; Example 6.15: costo 6x² + 15xy de un contenedor |

### 6.2 Use Multiplication Properties of Exponents (pp. 700-713, PDF 106-119) e inicio de 6.3

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Notación exponencial | 106-107 | 700-701 | cuadro Exponential Notation; Example 6.16; Example 6.17: (−5)⁴ = 625 vs −5⁴ = −625 (el paréntesis cambia todo) |
| Propiedad del producto | 108-110 | 702-704 | x²·x³ = (x·x)(x·x·x) = x⁵; cuadro **Product Property for Exponents**: aᵐ·aⁿ = aᵐ⁺ⁿ; verificación 2²·2³ = 4·8 = 32 = 2⁵; Examples 6.18-6.21 (y⁵·y⁶; 2⁵·2⁹; a⁷·a; d⁴·d⁵·d²) |
| Potencia de una potencia | 110-111 | 704-705 | cuadro **Power Property for Exponents**: (aᵐ)ⁿ = aᵐ·ⁿ; Example 6.22 |
| Potencia de un producto | 112 | 706 | cuadro Product to a Power Property: (ab)ᵐ = aᵐbᵐ; Example 6.23: (−9d)² = 81d², (3mn)³ = 27m³n³ |
| Resumen y combinaciones | 113-115 | 707-709 | cuadro Properties of Exponents (las tres); Examples 6.24-6.25; multiplicar monomios: Examples 6.26-6.27 |
| Polinomio por monomio (6.3) | 120-122 | 714-716 | Examples 6.28-6.33: 4(x + 3), y(y − 2), 7x(2x + y), −2y(4y² + 3y − 5), 4x³(2x² − 3x + 5) (OCR dudoso en el último exponente), (x + 3)p |

---

## alg7 — Unidad 07 - Factoring.pdf (impresa = PDF + 716)

### 6.3 Multiply Polynomials (cont., pp. 717-730, PDF 1-14)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Binomio por binomio con distributiva | 1-2 | 717-718 | Examples 6.34-6.37: (y + 5)(y + 8), (2y + 5)(3y + 4), (4y + 3)(2y − 5), (x − 2)(x − y) |
| **FOIL** | 3-7 | 719-723 | derivación de FOIL (First, Outer, Inner, Last) a partir de la distributiva; **HOW TO Multiply Two Binomials Using the FOIL Method** (p. 721, con flechas); Example 6.39: (y − 7)(y + 4) = y² − 3y − 28; Examples 6.40-6.43 |
| Método vertical | 7-8 | 723-724 | Example 6.44: (3y − 1)(2y − 6) como multiplicación en columnas; cuadro Multiplying Two Binomials (tres métodos) |
| Trinomio por binomio | 8-9 | 724-725 | Example 6.45 (distributiva) y Example 6.46 (vertical): (b + 3)(2b² − 5b + 8); cuadro Multiplying a Trinomial by a Binomial |

### 6.4 Special Products (pp. 731-743, PDF 15-27)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| **Cuadrado de un binomio** | 15-16 | 731-732 | (x + 9)², (y − 7)², (2x + 3)² con FOIL; de ahí: primer término al cuadrado, último al cuadrado, término medio = doble del producto; cuadro **Binomial Squares Pattern**: (a + b)² = a² + 2ab + b², (a − b)² = a² − 2ab + b², con etiquetas "(first term)², 2(product of terms), (last term)²" |
| Ejemplos | 17-19 | 733-735 | Example 6.47: (x + 5)²; Example 6.48: (y − 3)²; Example 6.49: (4x + 6)²; Example 6.50: (2x − 3y)²; Example 6.51: (4u³ + 1)² |
| **Conjugados** | 19-20 | 735-736 | cuadro Conjugate Pair ((a − b) y (a + b)); (x − 9)(x + 9) = x² − 81, (y − 8)(y + 8), (2x − 5)(2x + 5): los términos medios se cancelan; cuadro **Product of Conjugates Pattern**: (a − b)(a + b) = a² − b², "difference of squares" |
| Ejemplos | 21-23 | 737-739 | Example 6.52: (x − 8)(x + 8); Example 6.53: (2x + 5)(2x − 5); Examples 6.54-6.57: (3 + 5x)(3 − 5x), (5m − 9n)(5m + 9n), (cd − 8)(cd + 8), con potencias |
| **Comparar los patrones** | 24 | 740 | cuadro Comparing the Special Product Patterns (cuadrado: trinomio, términos externos e internos iguales, término medio doble; conjugados: binomio, términos opuestos, sin término medio); Example 6.58: (2x − 3)(2x + 3) = 4x² − 9, (8x − 5)² = 64x² − 80x + 25, (6m + 7)² = 36m² + 84m + 49, (5x − 6)(6x + 5) (ningún patrón) |

### 6.5 Divide Monomials (pp. 744-762, PDF 28-46)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Propiedad del cociente | 28-31 | 744-747 | resumen de multiplicación y Equivalent Fractions Property; cuadro **Quotient Property for Exponents** (aᵐ/aⁿ = aᵐ⁻ⁿ si m > n, 1/aⁿ⁻ᵐ si n > m); Examples 6.59-6.61 |
| **Exponente cero** | 32 | 748 | 8/8 = 2³/2³ = 2⁰ = 1; aᵐ/aᵐ de dos maneras; cuadro **Zero Exponent**: a⁰ = 1 si a ≠ 0; Example 6.62: 9⁰ = 1, n⁰ = 1 |
| Cero con paréntesis | 33 | 749 | Table 6.1; Example 6.63: (5b)⁰ vs 5b⁰ |
| Cociente a una potencia | 34 | 750 | cuadro Quotient to a Power Property: (a/b)ᵐ = aᵐ/bᵐ; Example 6.64 |
| Resumen | 35 | 751 | cuadro **Summary of Exponent Properties** (producto, potencia, producto a potencia, cociente, exponente cero, cociente a potencia). Ver errata |
| Varias propiedades | 35-39 | 751-755 | Examples 6.65-6.71 |
| Dividir monomios | 39-42 | 755-758 | Examples 6.72-6.76 (56x⁷ ÷ 8x³ y similares) |

### 6.6 Divide Polynomials (pp. 763-775, PDF 47-59)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Polinomio entre monomio | 47-51 | 763-767 | cuadro Fraction Addition al revés; cuadro Division of a Polynomial by a Monomial; Examples 6.77-6.83 ((18x³ − 36x²) ÷ 6x; (15x²y − 35xy²) ÷ (−5xy)) |
| División larga | 51-57 | 767-773 | analogía con 875 ÷ 25; Example 6.84: (x² + 9x + 20) ÷ (x + 5) = x + 4; Example 6.85: (2x² − 5x − 3) ÷ (x − 3); Example 6.86 (con resto); Example 6.87: (x⁴ − x² + 5x − 2) ÷ (x + 2) (rellenar con 0x³); Example 6.88: (8a³ + 27) ÷ (2a + 3) |

### 6.7 Integer Exponents and Scientific Notation (pp. 776-796, PDF 60-80)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| **Exponente negativo** | 60-61 | 776-777 | x²/x⁵ = 1/x³ = x⁻³ (de la propiedad del cociente); cuadro **Negative Exponent**: a⁻ⁿ = 1/aⁿ si a ≠ 0; Example 6.89: 4⁻² = 1/16, 10⁻³ = 1/1000 |
| Propiedad del recíproco | 62 | 778 | 1/a⁻ⁿ = aⁿ (Property of Negative Exponents); Example 6.90 |
| Fracción a exponente negativo | 63 | 779 | (3/4)⁻² = 16/9 = (4/3)² (Table 6.4); cuadro Quotient to a Negative Exponent Property: (a/b)⁻ⁿ = (b/a)ⁿ; Example 6.91 |
| **Trampas de signo** | 64-67 | 780-783 | Example 6.92: (−3)⁻², −3⁻², (−1/3)⁻² (el signo no cambia por el exponente negativo); Examples 6.93-6.95: 5y⁻¹ vs (5y)⁻¹ vs (−5y)⁻¹ |
| Exponentes enteros | 67-70 | 783-786 | cuadro Summary of Exponent Properties ahora para enteros; Examples 6.96-6.101 (x⁻⁴·x⁶, (m⁴n⁻³)(m⁻⁵n⁻²), (6k³)⁻², r⁵/r⁻⁴ = r⁹) |
| **Notación científica** | 71 | 787 | 4,000 = 4 × 10³ y 0.004 = 4 × 10⁻³; cuadro **Scientific Notation**: a × 10ⁿ con 1 ≤ a < 10 y n entero; potencia positiva si el número es mayor que 1, negativa si está entre 0 y 1 |
| Decimal a científica | 71-73 | 787-789 | Example 6.102 (How To): 37,000 = 3.7 × 10⁴; **HOW TO Convert from Decimal Notation to Scientific Notation** (p. 788); Example 6.103: 0.0052 = 5.2 × 10⁻³ |
| Científica a decimal | 73-74 | 789-790 | Example 6.104 (How To): 6.2 × 10³ = 6,200; HOW TO Convert Scientific Notation to Decimal Form (p. 790); Example 6.105: 8.9 × 10⁻² = 0.089 |
| Multiplicar y dividir | 75 | 791 | Example 6.106: (4 × 10⁵)(2 × 10⁻⁷) = 8 × 10⁻² = 0.08; Example 6.107: (9 × 10³)/(3 × 10⁻²) = 3 × 10⁵ = 300,000 |
| Repaso del capítulo 6 | 81-90 | 797-806 | Key Terms, Key Concepts, Review Exercises, Practice Test |

### 7.1 Greatest Common Factor and Factor by Grouping (pp. 807-820, PDF 91-104)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Apertura cap. 7 | 91 | 807 | Figure 7.1 (puente de Sídney); secciones 7.1-7.6 |
| MCD de expresiones | 92-94 | 808-810 | cuadro **Greatest Common Factor**; Example 7.1; **HOW TO Find the GCF of Two Expressions** (p. 809); Example 7.2: 27x³ y 18x⁴; Example 7.3: 4x²y y 6xy³; Example 7.4: 21x³, 9x², 15x |
| **Sacar factor común** | 95 | 811 | cuadro Distributive Property en las dos direcciones (a(b + c) = ab + ac y ab + ac = a(b + c)); **HOW TO Factor the Greatest Common Factor from a Polynomial**; cuadro Factor as a Noun and a Verb |
| Ejemplos | 96-100 | 812-816 | Examples 7.6-7.11 (5a + 5, 12x − 60, 4y² + 24y + 28, 5x³ − 25x², 21x³ − 9x² + 15x, 8m³ − 12m²n + 20mn²); Example 7.12: −8y − 24 (sacar factor negativo); Example 7.13: −6a² + 36a; Example 7.14: 5x(x + 7) − 6(x + 7) = (x + 7)(5x − 6) (el factor común es un binomio) |
| Por agrupación | 101 | 817 | Example 7.15 (How To): xy + 3y + 2x + 6 = (x + 3)(y + 2); **HOW TO Factor by Grouping**; Example 7.16 |

---

## alg8 — Unidad 08 - Rational Expressions and Equations.pdf (impresa = PDF + 820)

### 7.2 Factor Trinomials of the Form x² + bx + c (pp. 821-833, PDF 1-13)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| La idea | 2 | 822 | Table 7.1: factores de 6 y sus sumas; x² + 5x + 6 = (x + 2)(x + 3): buscar m y n con producto c y suma b |
| Ejemplo guía | 2-3 | 822-823 | Example 7.17 (How To): x² + 7x + 12 = (x + 3)(x + 4) (tabla de factores de 12); **HOW TO Factor Trinomials of the Form x² + bx + c** |
| Ejemplos | 3-8 | 823-828 | Example 7.18: u² + 11u + 24; Example 7.19: y² + 17y + 60; Example 7.20: t² − 11t + 28 (ambos negativos); Examples 7.21-7.23: c negativo (z² + 4z − 5, z² − 4z − 5, q² − 2q − 15); Example 7.24: y² − 6y + 15 es **primo**; Example 7.25: 2x + x² − 48 (ordenar primero) |
| **Reglas de signos** | 9 | 829 | HOW TO Factor Trinomials: si c > 0, m y n tienen el mismo signo (el de b); si c < 0, signos opuestos y el de mayor valor absoluto lleva el signo de b |
| Dos variables | 9-10 | 829-830 | Example 7.26: x² + 12xy + 36y²; Example 7.27: r² − 8rs − 9s²; Example 7.28: u² − 9uv − 12v² (primo) |

### 7.3 Factor Trinomials of the Form ax² + bx + c (pp. 834-851, PDF 14-31)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Estrategia preliminar | 15-18 | 835-838 | HOW TO Choose a Strategy to Factor Polynomials Completely (p. 835); Example 7.29; Examples 7.30-7.32 (sacar el MCD primero: 2n² − 8n − 42, 4y² − 36y + 56, 4u³ + 16u² − 20u) |
| Prueba y error | 19-23 | 839-843 | Example 7.33 (How To): 3y² + 22y + 7; HOW TO Factor Trinomials of the Form ax² + bx + c Using Trial and Error (p. 840); Examples 7.34-7.37 (6b² − 13b + 5, 14x² − 47x − 7, 18n² − 37n + 15, 10y⁴ + 55y³ + 60y²) |
| **Método "ac"** | 24-26 | 844-846 | Example 7.38 (How To): 6x² + 7x + 2: ac = 12, 3·4 = 12 y 3 + 4 = 7, separar 7x = 3x + 4x, agrupar: (2x + 1)(3x + 2); **HOW TO ... Using the "ac" Method** (p. 845); Example 7.39: 8u² − 17u − 21; Example 7.40: 2x² + 6x + 5 (primo); Example 7.41: 10y² − 55y + 70 |
| Estrategia actualizada | 27-28 | 847-848 | Figure 7.2 (diagrama de la estrategia); HOW TO ... Completely (Updated) |

### 7.4 Factor Special Products (pp. 852-868, PDF 32-48)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| **Trinomio cuadrado perfecto** | 33 | 853 | cuadro Binomial Squares Pattern y su reverso, cuadro **Perfect Square Trinomials Pattern**: a² + 2ab + b² = (a + b)², a² − 2ab + b² = (a − b)²; cómo reconocerlo (primero y último cuadrados, el medio es 2ab) |
| Ejemplos | 33-36 | 853-856 | Example 7.42 (How To): 9x² + 12x + 4 = (3x + 2)²; HOW TO Factor Perfect Square Trinomials (p. 854); Example 7.43: 81y² − 72y + 16; Example 7.44: 36x² + 84xy + 49y²; Example 7.45: 9x² + 50x + 25 **no es** cuadrado perfecto (2·3·5 = 30 ≠ 50), sale (9x + 5)(x + 5); Example 7.46: 36x²y − 48xy + 16y = 4y(3x − 2)² (p. 856-857, ver errata) |
| **Diferencia de cuadrados** | 37-38 | 857-858 | (3x − 4)(3x + 4) = 9x² − 16; cuadros Product of Conjugates Pattern y **Difference of Squares Pattern**: a² − b² = (a − b)(a + b); Example 7.47 (How To): x² − 4; **HOW TO Factor Differences of Squares** |
| Ejemplos | 39-41 | 859-861 | Example 7.48: 64y² − 1; Example 7.49: 121x² − 49y²; Example 7.50: 100 − h²; Example 7.51: x⁴ − y⁴ = (x² + y²)(x − y)(x + y) (dos veces); Example 7.52 (ver errata) |
| **La suma de cuadrados no se factoriza** | 41 | 861 | Example 7.53: 6x² + 96 = 6(x² + 16): "Sums of squares do not factor!" |
| Suma y diferencia de cubos | 42-45 | 862-865 | verificación de a³ + b³ = (a + b)(a² − ab + b²); cuadro Sum and Difference of Cubes Pattern; Figure 7.3 (cubos del 1 al 10); Example 7.54 (How To): x³ + 64; HOW TO (p. 863); Examples 7.55-7.58 (x³ − 1000, 512 − 125p³, 27u³ − 125v³, 5m³ + 40n³) |

### 7.5 General Strategy for Factoring Polynomials (pp. 869-879, PDF 49-59)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Estrategia general | 49-50 | 869-870 | Figure 7.4 (diagrama: MCD, binomio, trinomio, más de tres términos); **HOW TO Factor Polynomials** |
| Ejemplos | 50-56 | 870-876 | Examples 7.59-7.68 (4x⁵ + 12x⁴, 12x² − 11x + 2, g³ + 25g, 12y² − 75, 4a² − 12ab + 9b², 6y² − 18y − 60, 24x³ + 81, 2x⁴ − 32, 3x² + 6bx − 3ax − 6ab, 10x² − 34x − 24) |

### 7.6 Quadratic Equations (pp. 880-894, PDF 60-74)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| **Ecuación cuadrática** | 60 | 880 | cuadro **Quadratic Equation**: ax² + bx + c = 0 con a ≠ 0; cuadro **Zero Product Property**: si a·b = 0 entonces a = 0 o b = 0 (o ambos) |
| Producto cero | 61-63 | 881-883 | Example 7.69 (How To): (x + 1)(x − 4) = 0 → −1 y 4, con comprobación; Example 7.70: (5n − 2)(6n − 1) = 0 → 2/5 y 1/6; Example 7.71: 3p(10p + 7) = 0; Example 7.72: (y − 8)² = 0, raíz doble ("double root") |
| Resolver factorizando | 63-67 | 883-887 | Example 7.73 (How To): x² + 2x − 8 = 0; **HOW TO Solve a Quadratic Equation by Factoring** (p. 884: forma estándar, factorizar, producto cero, resolver, comprobar); Example 7.74: 2y² = 13y + 45 → −5/2 y 9; Example 7.75: 5x² − 13x = 7x → 0 y 4 (no dividir por x); Example 7.76: 144q² = 25; Example 7.77: (3x − 8)(x − 1) = 3x → 2/3 y 4; Example 7.78; Example 7.79: 4x² = 16x + 84 → −3 y 7 |
| Aplicaciones | 68-71 | 888-891 | HOW TO de problemas; Example 7.80: dos enteros consecutivos con producto 132; Example 7.81: jardín de área 15 con largo = ancho + 2; Example 7.82: terraza en triángulo rectángulo (Pitágoras) |
| Repaso del capítulo 7 | 75-82 | 895-902 | Key Terms, Key Concepts, Review Exercises, Practice Test |

### 8.1-8.3 Rational Expressions (pp. 903-940, PDF 83-120)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Apertura cap. 8 | 83 | 903 | Figure 8.1 (remo río abajo); secciones 8.1-8.9 |
| **Expresión racional** | 84 | 904 | cuadro **Rational Expression**: p(x)/q(x) con p, q polinomios y q ≠ 0; ejemplos −13/42, 7y/8z, (5x + 2)/(x² − 7), (4x² + 3x − 1)/(2x − 8) |
| Cuándo no está definida | 84-85 | 904-905 | HOW TO Determine the Values for Which a Rational Expression is Undefined (igualar el denominador a cero); Example 8.1: 9y/x, (4b − 3)/(2b + 5), (x + 4)/(x² + 5x + 6) |
| Evaluar | 85-89 | 905-909 | Examples 8.2-8.4 (un valor deja el denominador en 0: "The expression is undefined", p. 909) |
| **Simplificar** | 89-91 | 909-911 | cuadro Simplified Rational Expression; cuadro Equivalent Fractions Property (a/b = ac/bc con b, c ≠ 0); Example 8.5: −36/63; Example 8.6; aviso con dibujo: en (x + 5)/x **no se cancela** la x (como no se cancelan los 2 en (2 + 5)/2) |
| Simplificar factorizando | 91-94 | 911-914 | Example 8.7 (How To): (2x + 8)/(5x + 20) = 2(x + 4)/5(x + 4) = 2/5; **HOW TO Simplify a Rational Expression** (factorizar, dividir factores comunes); Examples 8.8-8.13 (x² + 5x + 6 sobre x² + 8x + 12, etc.) |
| **Factores opuestos** | 94-96 | 914-916 | a/(−a) = −1; (x − 3)/(3 − x) = −1; cuadro **Opposites in a Rational Expression**: (a − b)/(b − a) = −1 si a ≠ b; Example 8.14: (x − 8)/(8 − x) = −1; Examples 8.15-8.16 |
| Multiplicar (8.2) | 100-103 | 920-923 | cuadro Multiplication of Rational Expressions (p/q · r/s = pr/qs); Examples 8.17-8.19; HOW TO Multiply (p. 922: factorizar, multiplicar, simplificar); Example 8.20: (n² − 7n)/(n² + 2n + 1) · (n + 1)/2n = (n − 7)/2(n + 1); Examples 8.21-8.22 |
| Dividir | 104-108 | 924-928 | cuadro Division of Rational Expressions (multiplicar por el recíproco); Example 8.23 (How To): (x + 9)/(6 − x) ÷ (x² − 81)/(x − 6) = −1/(x − 9) (opuestos que dan −1); HOW TO Divide (p. 925); Examples 8.24-8.29 |
| Sumar y restar con igual denominador (8.3) | 113-118 | 933-938 | cuadro Rational Expression Addition (p/r + q/r = (p + q)/r); Example 8.30: 5/18 + 7/18; Examples 8.31-8.32; cuadro Rational Expression Subtraction; Examples 8.33-8.35 ("cuidado con los signos al restar un binomio"); denominadores opuestos: Example 8.36: (4u − 1)/(3u − 1) + u/(1 − 3u) = 1; Example 8.37 |

---

## alg9 — Unidad 09 - Roots and Radicals.pdf (impresa = PDF + 940)

### 8.4-8.6 (pp. 942-983, PDF 2-43)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| **MCD de expresiones racionales** (8.4) | 3 | 943 | **HOW TO Find the Least Common Denominator of Rational Expressions** (factorizar, alinear factores en columnas, bajar, multiplicar); Example 8.38: 8/(x² − 2x − 3) y 3x/(x² + 4x + 3): MCD (x + 1)(x − 3)(x + 3) |
| Expresiones equivalentes | 3 | 943 | 7/12 + 5/18 con MCD 36 (21/36 + 10/36); Example 8.39: reescribir con denominador (x + 1)(x − 3)(x + 3) |
| Sumar con distinto denominador | 4-7 | 944-947 | Examples 8.40-8.41; Example 8.42: 3/(x − 3) + 2/(x − 2) = (5x − 12)/((x − 3)(x − 2)) (tabla de pasos p. 946); **HOW TO Add Rational Expressions** (p. 946); Examples 8.43-8.44 ("no simplifiques antes de tiempo") |
| Restar con distinto denominador | 8-11 | 948-951 | Example 8.45 (How To); **HOW TO Subtract Rational Expressions** (p. 949); Example 8.46: 8y/(y² − 16) − 4/(y − 4) = 4/(y + 4); Examples 8.47-8.48; HOW TO Add or Subtract Rational Expressions (p. 951); Example 8.49 |
| Expresión racional compleja (8.5) | 16-24 | 956-964 | cuadro Complex Rational Expression; método 1 escribirla como división (HOW TO p. 959, Examples 8.50-8.53); método 2 multiplicar por el MCD (HOW TO p. 962, Examples 8.54-8.58) |
| **Ecuación racional** (8.6) | 29-30 | 969-970 | cuadro **Rational Equation**; repaso: (1/8)x + 1/2 = 1/4 multiplicando por 8, x = −2; cuadro **Extraneous Solution to a Rational Equation** ("an algebraic solution that would cause any of the expressions in the original equation to be undefined") |
| Ejemplo guía | 30-31 | 970-971 | Example 8.59 (How To): 1/x + 1/3 = 5/6, x ≠ 0, MCD 6x, x = 2; **HOW TO Solve Equations with Rational Expressions** (5 pasos: anotar valores prohibidos, MCD, limpiar fracciones, resolver, comprobar y descartar) |
| Ejemplos | 31-33 | 971-973 | Example 8.60: 1 − 5/y = −6/y²; Example 8.61: 5/(3u − 2) = 3/(2u), u = −6; Example 8.62: 2/(p + 2) + 4/(p − 2) = (p − 1)/(p² − 4) |
| **Soluciones extrañas** | 34-39 | 974-979 | Example 8.64: la única solución algebraica es extraña, "no solution" (pp. 975-976); Example 8.65: n/12 + (n + 3)/(3n) = 1/n → n = 0 (extraña) o n = −4 (pp. 976-977); Example 8.66: y/(y + 6) = 72/(y² − 36) + 4 → y = −6 extraña, y = 4 válida (pp. 977-978); Example 8.67: x = 1 y x = −1 extrañas, sin solución (pp. 978-979) |
| Despejar una variable | 39-41 | 979-981 | Examples 8.68-8.70 (fórmulas con la variable en el denominador) |

### 8.7 Solve Proportion and Similar Figure Applications (pp. 984-999, PDF 44-59)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| **Proporción** | 44 | 984 | cuadro **Proportion**: a/b = c/d con b, d ≠ 0, "a is to b as c is to d"; 1/2 = 4/8; 1 maestro por 20 alumnos, ¿cuántos para 60?: 1/20 = x/60 (unidades iguales arriba, iguales abajo) |
| Resolver proporciones | 45-47 | 985-987 | x = 3 maestros (p. 985); Example 8.71: x/63 = 4/7, x = 36, con comprobación; Example 8.72: 144/a = 9/4 (excluir a = 0), a = 64; Examples 8.73-8.74 (binomios en la proporción) |
| Aplicaciones | 48-49 | 988-989 | Example 8.75: acetaminofén, 5 ml por cada 25 libras, niña de 80 libras → 16 ml (tabla completa con chequeo de razonabilidad); Example 8.76; Example 8.77: Josiah cambia $325 a pesos |
| **Figuras semejantes** | 50-51 | 990-991 | cuadro **Similar Figures** (ángulos iguales y lados en la misma razón); Figure 8.2: triángulo 12, 16, 20 vs 3, 4, 5 (razón 4); cuadro **Property of Similar Triangles** (a/x = b/y = c/z); HOW TO Solve Geometry Applications |
| Ejemplos | 51-54 | 991-994 | Example 8.78: ΔABC ∼ ΔXYZ, lados que faltan; Example 8.79: mapa San Francisco, Las Vegas, Los Ángeles; Example 8.80: Tyler mide 6 pies y su sombra 8, sombra de un árbol (alturas por sombras) |
| Variación directa e inversa (8.9) | 70-76 | 1010-1016 | cuadro **Direct Variation**: y = kx con k ≠ 0 (constante de variación); HOW TO Solve Direct Variation Problems; Example 8.88: galones de Eunice (469.8 millas, 14.5 galones); Example 8.89: carga de una viga ∝ diagonal²; cuadro **Inverse Variation**: y = k/x; Example 8.90: y = 20 cuando x = 8; Examples 8.91-8.92 (rendimiento vs peso del auto; frecuencia de una cuerda de 26") |
| Repaso del capítulo 8 | 82-92 | 1022-1032 | Key Terms, Key Concepts, Review Exercises, Practice Test |

### 9.1-9.3 (pp. 1033-1065, PDF 93-124)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Apertura cap. 9 | 93 | 1033 | Figure 9.1; secciones 9.1-9.8 |
| **Cuadrado y raíz cuadrada** | 94 | 1034 | cuadros Square of a Number (n² = m), Square Root of a Number (15 y −15 son raíces de 225); cuadro **Square Root Notation**: √m (radical, radicando) es el número positivo cuyo cuadrado es m ("principal square root"); Figure 9.2 (tabla de √1 a √225 para completar); −√225 = −15 |
| Ejemplos | 95 | 1035 | Example 9.1: √36, √196, −√81, −√289; Example 9.2: √−169 no es real, −√64 = −8; **Example 9.3: √25 + √144 = 5 + 12 = 17 pero √(25 + 144) = √169 = 13** (la raíz no se reparte en una suma) |
| Estimar y aproximar | 96-97 | 1036-1037 | Table 9.1 (cuadrados perfectos); Example 9.4: √60 entre 7 y 8; Example 9.5 (redondear con calculadora) |
| **Variables** | 98-100 | 1038-1040 | √(9x²) = 3x; "in this chapter we will assume that each variable in a square-root expression represents a non-negative number" (ver "Lo que no trae"); (aᵐ)² = a²ᵐ: √(25u⁸) = 5u⁴; Example 9.6: √x⁶ = x³, √y¹⁶ = y⁸; Examples 9.7-9.11 |
| **Raíz simplificada** (9.2) | 103 | 1043 | cuadro Simplified Square Root (sin factores cuadrados perfectos: √31 sí, √32 no); cuadro **Product Property of Square Roots**: √(ab) = √a·√b para a, b ≥ 0 |
| Simplificar con el producto | 103-106 | 1043-1046 | Example 9.12 (How To): √50 = √(25·2) = 5√2; **HOW TO Simplify a Square Root Using the Product Property** (p. 1044); Example 9.13: √500 = 10√5 (está entre 20 y 30); Examples 9.14-9.17 con variables (√x⁹, √(25y⁵), √(72n⁷), √(63u³v⁵)) |
| Con orden de operaciones | 106-107 | 1046-1047 | Example 9.18: 3 + √32 = 3 + 4√2; Example 9.19: (4 − √48)/2 |
| Propiedad del cociente | 107-111 | 1047-1051 | Examples 9.20-9.23 (simplificar la fracción dentro primero: √(48p⁷/3p³) = 4p²); cuadro **Quotient Property of Square Roots**: √(a/b) = √a/√b; Example 9.24: √(21/64) = √21/8; HOW TO (p. 1050); Examples 9.25-9.28 |
| Sumar y restar raíces (9.3) | 116-121 | 1056-1061 | cuadro **Like Square Roots** (mismo radicando, como términos semejantes); Example 9.29: 2√2 − 7√2 = −5√2; Examples 9.30-9.35; Example 9.36: √20 + 3√5 = 5√5; Example 9.37: √48 − √75 = 4√3 − 5√3 = −√3; Examples 9.38-9.43 |

---

## alg10 — Unidad 10 - Quadratic Equations.pdf (impresa = PDF + 1064)

### 9.4-9.8 (lo esencial, pp. 1066-1145, PDF 2-81)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Multiplicar raíces (9.4) | 2-5 | 1066-1069 | cuadro Product Property of Square Roots en las dos direcciones; Examples 9.44-9.48 (√2·√6, (4√3)(2√12), (6√2)(3√10)); cuadro **Squaring a Square Root**: (√a)² = a para a ≥ 0; Example 9.49 |
| Con productos notables | 6-10 | 1070-1074 | Examples 9.50-9.55 (distributiva y FOIL con raíces); cuadro Special Product Formulas; Example 9.56: (2 + √3)²; Example 9.58: (4 − √2)(4 + √2) = 16 − 2 = 14; Example 9.59: (5 − 2√3)(5 + 2√3) |
| **Racionalizar** (9.5) | 19-20 | 1083-1084 | Figure 9.3 (tabla de raíces para dividir a mano antes de las calculadoras); cuadro **Rationalizing the Denominator**; 1/√2 = √2/2 (en vez de dividir entre 1.41421); cuadro Simplified Square Roots (sin cuadrados perfectos, sin fracciones en el radicando, sin raíces en el denominador) |
| Racionalizar con conjugado | 22-24 | 1086-1088 | denominador de dos términos: multiplicar por el conjugado; Examples 9.70-9.73 |
| **Ecuación radical** (9.6) | 29-31 | 1093-1095 | cuadro Radical Equation; Example 9.74: en √(x + 2) = x, x = 2 sí es solución y x = −1 da 1 ≠ −1: **extraneous solution**; para a ≥ 0, (√a)² = a; Example 9.75 (How To): √(2x − 1) = 7 → 2x − 1 = 49, x = 25; **HOW TO Solve a Radical Equation** (p. 1095: aislar, elevar al cuadrado, resolver, comprobar) |
| Más ecuaciones radicales | 32-37 | 1096-1101 | Examples 9.76-9.84 (incluye cuadrado de un binomio al elevar: cuadro Binomial Squares, p. 1098) |
| Aplicaciones | 38-42 | 1102-1106 | HOW TO Solve Applications with Formulas; cuadro Area of a Square (s = √A); cuadro Falling Objects (t = √h/4); cuadro Skid Marks and Speed of a Car (s = √(24d)) |
| Raíces de índice n (9.7) | 47-50 | 1111-1114 | Figure 9.4 (potencias 1.ª a 5.ª); definición de ⁿ√a; raíz par de negativo no es real; cuadro **Simplifying Odd and Even Roots**: ⁿ√(aⁿ) = a si n es impar y **= \|a\| si n es par** |
| Producto y cociente de raíces n | 51-58 | 1115-1122 | cuadros Simplified nth Root, Product Property of nth Roots, Quotient Property of nth Roots, Like Radicals |
| **Exponentes racionales** (9.8) | 63-64 | 1127-1128 | cuadro Rational Exponent a^(1/n): a^(1/n) = ⁿ√a para n ≥ 2; Example 9.103: x^(1/2) = √x, y^(1/3), z^(1/4); Example 9.104 (al revés) |
| a^(m/n) | 67-68 | 1131-1132 | (16)^(−1/4) = 1/2; derivación (a^(1/n))ᵐ = a^(m/n) y (aᵐ)^(1/n) = a^(m/n); cuadro Rational Exponent a^(m/n) ("usually take the root first") |
| Leyes de exponentes con racionales | 72-77 | 1136-1141 | cuadro Summary of Exponent Properties para m, n racionales; Examples 9.113-9.118 |
| Repaso del capítulo 9 | 82-90 | 1146-1154 | Key Terms, Key Concepts, Review Exercises, Practice Test |

### 10.1 Solve Quadratic Equations Using the Square Root Property (pp. 1155-1166, PDF 91-102)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Apertura cap. 10 | 91 | 1155 | Figure 10.1 (fuegos artificiales); secciones 10.1-10.5 |
| **Propiedad de la raíz cuadrada** | 92 | 1156 | x² = 9 resuelta factorizando (x = ±3); x² = 7 no se factoriza; cuadro **Square Root Property**: si x² = k y k ≥ 0, x = √k o x = −√k (x = ±√k) |
| Ejemplos | 93-94 | 1157-1158 | Example 10.1: x² = 169; Example 10.2: x² − 48 = 0 → ±4√3; **HOW TO Solve a Quadratic Equation Using the Square Root Property** (aislar, coeficiente 1, raíz, simplificar, comprobar); Example 10.3: 5m² = 80 → m = ±4 |
| Sin solución real | 94-95 | 1158-1159 | "¿qué pasa si k < 0?"; Example 10.4: q² + 24 = 0 no tiene solución real |
| Con fracciones y binomios | 95-99 | 1159-1163 | Examples 10.5-10.6; Example 10.7: (x − 3)² = 16 → 7 y −1; Example 10.8: (y − 7)² = 12; Examples 10.9-10.11; Example 10.12: p² − 10p + 25 = 18 (reconocer el cuadrado perfecto); Example 10.13: 4n² + 4n + 1 = 16 |

### 10.2 Solve Quadratic Equations by Completing the Square (pp. 1167-1182, PDF 103-118)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| **Completar el cuadrado** | 103-105 | 1167-1169 | repaso del Binomial Squares Pattern (p. 1168); el número que falta es (b/2)²; **HOW TO Complete a Square** (3 pasos); Example 10.14: x² + 14x + 49 = (x + 7)²; Example 10.15: m² − 26m |
| Ejemplos | 106-108 | 1170-1172 | Examples 10.16-10.18 (b impar y b fraccionario) |
| **Resolver completando el cuadrado** | 109 | 1173 | **HOW TO Solve a Quadratic Equation of the Form x² + bx + c = 0 by Completing the Square** (6 pasos); Example 10.19: y² − 6y = 16: sumar 9, (y − 3)² = 25, y = 8 o −2, comprobado |
| Ejemplos | 109-112 | 1173-1176 | Example 10.20: x² + 4x = −21 (sin solución real); Example 10.21: p² − 18p = −6; Examples 10.22-10.23; Example 10.24: (x − 3)(x + 5) = 9 → (x + 1)² = 25, x = 4 o −6 (pp. 1176-1177) |
| Coeficiente principal distinto de 1 | 113-115 | 1177-1179 | Example 10.25: 3x² − 12x − 15 = 0 (sacar el 3); Example 10.26: 2x² − 3x = 20 (dividir por 2); Example 10.27: 3x² + 2x = 4 |

### 10.3 Solve Quadratic Equations Using the Quadratic Formula (pp. 1183-1192, PDF 119-128; sigue en alg11)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| **Derivación de la fórmula** | 119-120 | 1183-1184 | completar el cuadrado sobre ax² + bx + c = 0 paso a paso, con cada línea comentada: dividir por a, sumar (b/2a)² = b²/4a², (x + b/2a)² = (b² − 4ac)/4a², raíz, despejar |
| Fórmula | 120 | 1184 | cuadro **Quadratic Formula**: x = (−b ± √(b² − 4ac))/2a con a ≠ 0 |
| Ejemplo guía | 120-121 | 1184-1185 | Example 10.28 (How To): 2x² + 9x − 5 = 0; a = 2, b = 9, c = −5; √121 = 11; x = 1/2 y x = −5, con comprobación de ambas |
| Procedimiento | 122 | 1186 | **HOW TO Solve a Quadratic Equation Using the Quadratic Formula** (forma estándar, identificar a, b, c; sustituir; simplificar; comprobar); Example 10.29: x² − 6x + 5 = 0 |
| Ejemplos | 123-126 | 1187-1190 | Example 10.30: 4y² − 5y − 3 = 0; Example 10.31: 2x² + 10x + 11 = 0; **Example 10.32: 3p² + 2p + 9 = 0, sin solución real** (radicando negativo); Example 10.33: x(x + 6) + 4 = 0; Example 10.34: 3u² + 4u = 2 → u = (−2 ± √10)/3 (pp. 1189-1190) |
| Una sola solución | 126-127 | 1190-1191 | (x − 3)² = 0 tiene una solución; Example 10.35: 4x² − 20x = −25 → √0, x = 5/2 ("¿reconociste que 4x² − 20x + 25 es un cuadrado perfecto?") |
| **Discriminante** | 127 | 1191 | cuadro **Discriminant**: b² − 4ac; tabla con los tres ejemplos: 10.28 (2x² + 9x − 5): 9² − 4·2·(−5) = 121, +, 2 soluciones; 10.35 (4x² − 20x + 25): (−20)² − 4·4·25 = 0, 1 solución; 10.32 (3p² + 2p + 9): 2² − 4·3·9 = −104, −, 0 soluciones |
| Usar el discriminante | 128 | 1192 | positivo: dos soluciones; cero: una; negativo: ninguna real; **HOW TO Use the Discriminant**; Example 10.36: 2v² − 3v + 6 = 0 (−39, ninguna; ver errata), 3x² + 7x − 9 = 0 (157, dos), 5n² + n + 4 = 0 y 9y² − 6y + 1 = 0 (siguen en alg11) |

---

## alg11 — Unidad 11 - Apendices y Respuestas.pdf (impresa = PDF + 1192)

| Tema | PDF | Impresa | Qué hay |
|---|---|---|---|
| Discriminante (fin) | 1 | 1193 | Example 10.36 (c): 5n² + n + 4: 1 − 80 = −79, sin solución real; (d): 9y² − 6y + 1: 36 − 36 = 0, una solución |
| **Elegir el método** | 1-2 | 1193-1194 | cuatro métodos (factorizar, raíz cuadrada, completar el cuadrado, fórmula); **HOW TO Identify the Most Appropriate Method** (1. factorizar si es fácil, 2. raíz cuadrada si es ax² = k o a(x − h)² = k, 3. fórmula: sirve siempre); completar el cuadrado se incluyó porque deriva la fórmula; Example 10.37 |
| Aplicaciones (10.4) | 5-12 | 1197-1204 | HOW TO Use the Problem Solving Strategy; Example 10.38: dos impares consecutivos con producto 195; Example 10.39: ventana triangular (cuadro Area of a Triangle); cuadro Pythagorean Theorem (p. 1200); Example 10.40: árbol de luces con dos triángulos rectángulos; Example 10.41: Mike, 150 pies² de césped; cuadro **Projectile Motion**: h = −16t² + v₀t + h₀ (p. 1203); Example 10.42: fuego artificial con v₀ = 130 pies/s |
| **Ecuación cuadrática en dos variables** (10.5) | 16-17 | 1208-1209 | cuadro Quadratic Equation in Two Variables: y = ax² + bx + c, a ≠ 0; Table 10.1 (puntos de y = x²); Figure 10.2 (la parábola y = x²); Example 10.43 |
| **Orientación** | 19 | 1211 | Figure 10.3: y = x² + 4x + 3 abre hacia arriba (a > 0) e y = −x² + 4x + 3 abre hacia abajo (a < 0); cuadro **Parabola Orientation**; Example 10.44: y = −3x² + 2x − 4 (abajo), y = 6x² + 7x − 9 (arriba) |
| **Eje de simetría y vértice** | 20-21 | 1212-1213 | Figure 10.4 (eje de simetría como espejo); y = x² + 4x + 3: eje x = −2, vértice (−2, −1); y = −x² + 4x + 3: eje x = 2, vértice (2, 7); cuadro **Axis of Symmetry and Vertex of a Parabola**: x = −b/2a, el vértice está sobre el eje; Example 10.45: y = 3x² − 6x + 2: eje x = 1, vértice (1, −1) |
| **Interceptos de la parábola** | 22-24 | 1214-1216 | Figures 10.5-10.6 (parábolas con 2, 1 o 0 interceptos en x: el discriminante decide); comparación: resolver x² − 2x − 15 = 0 es hallar los interceptos en x de y = x² − 2x − 15, (5, 0) y (−3, 0); **HOW TO Find the Intercepts of a Parabola** (x = 0 para el de y, y = 0 para los de x); Example 10.46: y = x² − 2x − 8: (0, −8), (4, 0), (−2, 0) |
| Interceptos especiales | 25-26 | 1217-1218 | Example 10.47: y = 5x² + x + 4 sin interceptos en x (discriminante −79); Example 10.48: y = 4x² − 12x + 9 toca en un punto (cuadrado perfecto) |
| **Graficar una parábola** | 26-34 | 1218-1226 | Example 10.49; **HOW TO Graph a Quadratic Equation in Two Variables** (p. 1220: orientación, eje, vértice, interceptos, punto simétrico, graficar); Example 10.50 con tabla paso a paso; Example 10.51: y = x² + 4x + 5 (sin interceptos en x); Example 10.52: y = 2x² − 4x − 3 |
| **Máximo y mínimo** | 35-36 | 1227-1228 | Figure 10.7 (mínimo si abre hacia arriba, máximo si abre hacia abajo); cuadro Minimum or Maximum Values of a Quadratic Equation (la coordenada y del vértice); Example 10.53: y = x² + 2x − 8 tiene mínimo −9 en x = −1; Example 10.54: altura de un balón de voleibol h = −16t² + v₀t + h₀ (altura máxima y tiempo) |
| Repaso del capítulo 10 | 37-48 | 1229-1240 | Key Terms, Key Concepts, Review Exercises por sección, Practice Test |

---

## Erratas e inconsistencias

- **El reparto de archivos** (ver arriba): "Unidad N" no es el capítulo N. Error de quien partió el PDF, no del libro, pero cualquier cita
  que use el nombre del archivo como guía caerá en el capítulo equivocado.
- **p. 751 (alg7 PDF 35)**, cuadro Summary of Exponent Properties: la primera línea de la Quotient Property está impresa como
  aᵐ/**b**ᵐ = aᵐ⁻ⁿ; debe ser aᵐ/**a**ⁿ = aᵐ⁻ⁿ (la segunda línea sí dice aᵐ/aⁿ). Comprobado con zoom sobre la página.
- **p. 861 (alg8 PDF 41)**, Example 7.52: el enunciado dice "Factor: 8x²y − 18y" pero la solución trabaja con **8x²y − 98y**
  (2y(4x² − 49) = 2y(2x − 7)(2x + 7)). La respuesta al enunciado impreso es 2y(4x² − 9) = 2y(2x − 3)(2x + 3) (comprobado con sympy).
- **p. 857 (alg8 PDF 37)**, Example 7.46, línea de comprobación: "4y(9x)² − 12x + 4" debe ser 4y(9x² − 12x + 4); el resultado final
  4y(3x − 2)² y la verificación 36x²y − 48xy + 16y son correctos.
- **p. 1192 (alg10 PDF 128)**, Example 10.36(a), 2v² − 3v + 6 = 0: identifica bien b = −3 pero sustituye "(3)² − 4·2·6". Debe ser
  (−3)²; el resultado 9 − 48 = −39 no cambia porque se eleva al cuadrado, pero el paso escrito pierde el signo (justo lo que se suele
  pedir cuidar al usar la fórmula).
- **p. 686 (alg6 PDF 92)**: el texto dice que axᵐ es monomio si "m is a whole number" (incluye 0), pero el cuadro Monomials dice
  "m is a **positive** whole number". Con "positivo", las constantes 14 y −13 de la misma tabla no serían monomios, y en la p. 687 se dice
  que una constante es un monomio de grado 0. Lo correcto es "whole number" (entero no negativo).
- **p. 702 vs p. 707 (alg6 PDF 108 y 113)**: la Product Property se enuncia para m, n "counting numbers" (1, 2, 3, ...) y el resumen
  de la p. 707, para "whole numbers" (incluye el 0). Menor, pero conviene saberlo antes de llegar al exponente cero (p. 748).
- **p. 1038 (alg9 PDF 98)**: no es un error, es una simplificación declarada: "we will assume that each variable in a square-root expression
  represents a non-negative number", así √(x²) = x. La versión general √(x²) = |x| solo aparece en 9.7 (p. 1113, raíces de índice par).
  Una página que use √(x²) = x sin decir el supuesto estaría enseñando algo falso para x < 0.

## Lo que el material no trae (o trae poco)

- **Ecuaciones y desigualdades con valor absoluto** (\|x − a\| = b, \|x\| < b): no están en Elementary Algebra 2e. El valor absoluto solo
  aparece como distancia al 0 (1.3, pp. 45-47) y como \|a\| en raíces de índice par (p. 1113). Están en "Intermediate Algebra 2e" (no está
  en la carpeta). Tampoco hay **desigualdades compuestas** (a < x < b) ni la distancia entre dos puntos como \|a − b\|.
- **Forma vértice de la parábola** y(x) = a(x − h)² + k y las traslaciones: no está; la parábola se grafica con eje x = −b/2a, vértice e
  interceptos (10.5). Completar el cuadrado se usa solo para resolver ecuaciones, nunca para pasar a forma vértice.
- **Números complejos**: cuando el discriminante es negativo el libro dice "no real solutions" y no menciona i.
- **Factorizar la suma de cuadrados**: solo dice que "no se factoriza" (en los reales), sin explicar por qué.
- **Sistemas de 3×3, matrices y Cramer**: no. El cap. 5 es solo 2×2 (gráfico, sustitución, eliminación) y sistemas de desigualdades (5.6).
- **Función**: el libro no usa la palabra ni la notación f(x) en estos capítulos; habla de "ecuación en dos variables" y de "evaluar un
  polinomio". La pendiente se presenta como rise/run sin hablar de tasa de cambio de una función (salvo los ejemplos de costo de 4.5).
- **Pendiente-intercepto en forma general** Ax + By + C = 0: solo forma estándar Ax + By = C, pendiente-intercepto y punto-pendiente.
- **Teorema del resto o división sintética**: solo división larga (6.6).
- **Demostración del producto de pendientes −1**: la regla de perpendiculares se presenta con un ejemplo (p. 516), no se demuestra.

## Búsqueda rápida por concepto

| Concepto | Mejores páginas (id, PDF → impresa) |
|---|---|
| Variables, expresiones y ecuaciones | alg1 PDF 11 → p. 21 (variable, constante), PDF 14 → p. 24 (expresión vs ecuación), PDF 21-23 → pp. 31-33 (término, coeficiente, semejantes), PDF 17 → p. 27 (orden de operaciones), PDF 19-21 → pp. 29-31 (evaluar) |
| Propiedad distributiva | alg2 PDF 25-28 → pp. 155-158 |
| Ecuaciones lineales (una variable) | alg2 PDF 75 → p. 205 (sobres y fichas), PDF 76 → p. 206 (propiedades de igualdad); alg3 PDF 14 → p. 224 (resumen), PDF 26 → p. 236 (beginning strategy), PDF 33 → p. 243 (general strategy), PDF 38-41 → pp. 248-251 (identidad, contradicción), PDF 46 → p. 256 (fracciones), PDF 58-61 → pp. 268-271 (despejar en fórmulas) |
| Desigualdades lineales | alg3 PDF 66-68 → pp. 276-278 (recta e intervalos), PDF 70-71 → pp. 280-281 (invertir el signo), PDF 75 → p. 285 (desigualdad identidad); alg5 PDF 56-66 → pp. 542-552 (en dos variables) |
| Valor absoluto | alg1 PDF 35-37 → pp. 45-47; alg10 PDF 49 → p. 1113 (\|a\| en raíz par); ecuaciones con valor absoluto: no hay |
| Pendiente | alg4 PDF 146-148 → pp. 468-470 (geoplano y definición), PDF 157-159 → pp. 479-481 (horizontal y vertical), PDF 160-162 → pp. 482-484 (fórmula); alg5 PDF 2-3 → pp. 488-489 (techo y tubería) |
| Pendiente e intercepto (y = mx + b) | alg5 PDF 11-16 → pp. 497-502, PDF 20 → p. 506 (métodos de graficar) |
| Forma punto-pendiente | alg5 PDF 40-44 → pp. 526-530, PDF 45 → p. 531 (Table 4.47) |
| Rectas paralelas y perpendiculares | alg5 PDF 25-31 → pp. 511-517 (identificar), PDF 45-50 → pp. 531-536 (hallar la ecuación) |
| Sistemas 2×2: gráfico | alg5 PDF 92-101 → pp. 578-587 |
| Sistemas: número de soluciones y clasificación | alg5 PDF 102-105 → pp. 588-591 (Figures 5.3-5.6) |
| Sistemas: sustitución | alg6 PDF 4-11 → pp. 598-605 |
| Sistemas: eliminación | alg6 PDF 20-28 → pp. 614-622, PDF 30-31 → pp. 624-625 (elegir método) |
| Polinomios: definiciones y operaciones | alg6 PDF 92-98 → pp. 686-692; alg7 PDF 1-9 → pp. 717-725 (multiplicar, FOIL), PDF 47-57 → pp. 763-773 (dividir) |
| Productos notables | alg7 PDF 15-24 → pp. 731-740 |
| Leyes de exponentes y exponente cero | alg6 PDF 106-113 → pp. 700-707; alg7 PDF 29-35 → pp. 745-751 |
| Exponentes negativos | alg7 PDF 60-70 → pp. 776-786 |
| Notación científica | alg7 PDF 71-75 → pp. 787-791 |
| Factor común y agrupación | alg7 PDF 92-101 → pp. 808-817 |
| Factorizar trinomios | alg8 PDF 2-10 → pp. 822-830 (x² + bx + c), PDF 19-28 → pp. 839-848 (ax² + bx + c, método ac) |
| Diferencia de cuadrados y cuadrado perfecto | alg8 PDF 33-41 → pp. 853-861; estrategia general PDF 49-50 → pp. 869-870 |
| Ecuación cuadrática por factorización | alg8 PDF 60-67 → pp. 880-887 |
| Expresiones racionales: simplificar | alg8 PDF 84-96 → pp. 904-916 |
| Expresiones racionales: operar | alg8 PDF 100-118 → pp. 920-938; alg9 PDF 3-11 → pp. 943-951 (distinto denominador), PDF 16-24 → pp. 956-964 (complejas) |
| Ecuaciones racionales y soluciones extrañas | alg9 PDF 29-39 → pp. 969-979 |
| Proporciones y semejanza | alg9 PDF 44-54 → pp. 984-994; variación directa e inversa PDF 70-76 → pp. 1010-1016 |
| Raíces y radicales | alg9 PDF 94-100 → pp. 1034-1040 (definición), PDF 103-111 → pp. 1043-1051 (simplificar), PDF 116-121 → pp. 1056-1061 (sumar); alg10 PDF 19-20 → pp. 1083-1084 (racionalizar), PDF 29-31 → pp. 1093-1095 (ecuaciones radicales), PDF 63-68 → pp. 1127-1132 (exponentes racionales) |
| Ecuación cuadrática: raíz cuadrada | alg10 PDF 92-99 → pp. 1156-1163 |
| Ecuación cuadrática: completar el cuadrado | alg10 PDF 103-115 → pp. 1167-1179 |
| Fórmula cuadrática | alg10 PDF 119-126 → pp. 1183-1190 (derivación en pp. 1183-1184) |
| Discriminante | alg10 PDF 127-128 → pp. 1191-1192; alg11 PDF 1 → p. 1193 |
| Elegir método para la cuadrática | alg11 PDF 1-2 → pp. 1193-1194 |
| Parábola (orientación, vértice, interceptos, gráfico) | alg11 PDF 16-34 → pp. 1208-1226 |
| Máximo y mínimo | alg11 PDF 35-36 → pp. 1227-1228; movimiento de proyectiles PDF 11-12 → pp. 1203-1204 |

> Nota (2026-11-12): `~/brain/03-Matematicas` se reorganizó. Los libros enteros están en `03-Matematicas/Libros/` y los archivos por unidad quedaron directamente en la carpeta del nivel (sin la subcarpeta del libro). Las rutas vigentes están en `biblioteca/fuentes.js`; las páginas no cambian.
