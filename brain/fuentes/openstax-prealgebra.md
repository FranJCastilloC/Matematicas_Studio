# Mapa de citas: OpenStax, "Prealgebra 2e" (Marecek, Anthony-Smith y Honeycutt Mathis)

Carpeta: `/Users/franciscocastillo/brain/03-Matematicas/02-Prealgebra/openstax-prealgebra-2e/`. El libro viene partido en un PDF por
capítulo ("Unidad 01 - Whole Numbers.pdf" ... "Unidad 11 - Graphs.pdf", más "00 - Portada y Preliminares.pdf" y
"Unidad 12 - Apendices y Respuestas.pdf"). Licencia CC BY-NC-SA 4.0 (portada: ©2026 Rice University). Sin código: solo ejemplos resueltos.

**No es un mapa del libro entero.** Cubre solo las secciones que sirven para: tipos de números y recta numérica, fracciones, decimales y
porcentajes, orden de operaciones, potencias y raíces, razones y proporciones, notación científica, variables y expresiones,
propiedades de los reales, ecuaciones lineales (lo esencial) y la recta en el plano (lo esencial). Quedan fuera: suma/resta/multiplicación/
división de enteros positivos con algoritmo, múltiplos y factores (2.4, 2.5), números mixtos (4.6), media/mediana/moda (5.5),
impuestos e interés (6.3, 6.4), medidas (7.5), geometría (cap. 9, salvo una nota) y polinomios (10.1, 10.3, 10.6).

## Cómo se lee una cita

Las citas apuntan al archivo de cada unidad. `data-pag` es la página **dentro de ese archivo** y `data-pimp` la impresa del libro.
Cada archivo tiene su propio desfase constante (página impresa = página del archivo + desfase), verificado en el pie de página en
varias páginas de cada archivo (al principio, en el medio y en el repaso del capítulo):

| id propuesto | Archivo | Páginas | Desfase (impresa = PDF + k) | Comprobado en |
|---|---|---|---|---|
| `prealg1` | Unidad 01 - Whole Numbers.pdf | 88 (+1 vacía) | +6 | PDF 2 = p. 8, PDF 21 = p. 27, PDF 47 = p. 53, PDF 79 = p. 85 |
| `prealg2` | Unidad 02 - The Language of Algebra.pdf | 76 | +94 | PDF 2 = p. 96, PDF 14 = p. 108, PDF 21 = p. 115, PDF 68 = p. 162 |
| `prealg3` | Unidad 03 - Integers.pdf | 82 | +170 | PDF 2 = p. 172, PDF 22 = p. 192, PDF 53 = p. 223, PDF 74 = p. 244 |
| `prealg4` | Unidad 04 - Fractions.pdf | 114 | +252 | PDF 2 = p. 254, PDF 34 = p. 286, PDF 69 = p. 321, PDF 107 = p. 359 |
| `prealg5` | Unidad 05 - Decimals.pdf | 100 | +366 | PDF 2 = p. 368, PDF 24 = p. 390, PDF 80 = p. 446, PDF 91 = p. 457 |
| `prealg6` | Unidad 06 - Percents.pdf | 72 | +466 | PDF 2 = p. 468, PDF 19 = p. 485, PDF 52 = p. 518, PDF 66 = p. 532 |
| `prealg7` | Unidad 07 - The Properties of Real Numbers.pdf | 62 | +538 | PDF 2 = p. 540, PDF 20 = p. 558, PDF 35 = p. 573, PDF 57 = p. 595 |
| `prealg8` | Unidad 08 - Solving Linear Equations.pdf | 50 | +600 | PDF 2 = p. 602, PDF 15 = p. 615, PDF 29 = p. 629, PDF 47 = p. 647 |
| (`prealg9`) | Unidad 09 - Math Models and Geometry.pdf | 128 | +650 | PDF 1 = p. 651, PDF 37 = p. 687 (solo una nota abajo) |
| `prealg10` | Unidad 10 - Polynomials.pdf | 86 | +778 | PDF 2 = p. 780, PDF 16 = p. 794, PDF 61 = p. 839, PDF 79 = p. 857 |
| `prealg11` | Unidad 11 - Graphs.pdf | 96 | +864 | PDF 2 = p. 866, PDF 46 = p. 910, PDF 70 = p. 934, PDF 82 = p. 946 |
| (`prealg12`) | Unidad 12 - Apendices y Respuestas.pdf | 104 | +960 | PDF 1 = p. 961 (Apéndice B) |

Detalles de los archivos:
- La primera página de cada archivo es la portada del capítulo (foto, "Chapter Outline" y el comienzo de la sección 1); también lleva número impreso.
- El final de `prealg11` (PDF 91 en adelante = p. 955 y siguientes) ya es el Apéndice A "Cumulative Review" (solo enunciados, sin respuestas).
- **Las fórmulas y casi todos los números de los ejemplos son imágenes o glifos que `pdftotext` no extrae**: el texto sale con huecos.
  Todos los números de ejemplos de este mapa se leyeron en las páginas renderizadas.
- Estructura de cada sección: Learning Objectives, BE PREPARED (quiz), cuadros de definición (fondo gris), HOW TO (procedimientos por pasos),
  EXAMPLE n.m con "Solution" en tabla de dos columnas (explicación | cuenta), TRY IT sin resolver, MANIPULATIVE MATHEMATICS (actividad),
  y al final SECTION n.m EXERCISES. Al final del capítulo: Key Terms, Key Concepts (resumen de cuadros), Review Exercises, Practice Test.
- Convención del libro (Estados Unidos): *counting numbers* = 1, 2, 3, ... y *whole numbers* = 0, 1, 2, 3, .... En español "naturales"
  a veces incluye el 0 y a veces no: conviene decirlo en la página.

---

## prealg1: cap. 1 Whole Numbers (impresa = PDF + 6)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Apertura y 1.1 Introduction to Whole Numbers | 1 | 7 | objetivos: identificar counting y whole numbers, modelar, valor posicional, redondear |
| Counting numbers, recta numérica, whole numbers | 2 | 8 | cuadro "Counting Numbers" (1, 2, 3, 4, 5...); **Figure 1.2** recta numérica 0 a 6 ("larger" a la derecha, "smaller" a la izquierda); el punto 0 es el **origin**, el número asociado a un punto es su **coordinate**; cuadro "Whole Numbers" (counting numbers y cero); **Example 1.1**: de 0, 1/4, 3, 5.2, 15, 105, cuáles son counting (3, 15, 105) y cuáles whole (0, 3, 15, 105); 1/4 y 5.2 no son ninguno "lo veremos después" |
| Sistema de valor posicional (base 10) | 2-3 | 8-9 | "place value system": 537 vs 735; billetera con tres de 100, siete de 10 y cuatro de 1 = 374 (Figure 1.3); **bloques base 10** (Figure 1.4: unidad, barra de 10, cuadrado de 100) y el 138 modelado (Figure 1.5) con tabla dígito / valor posicional / valor / valor total |
| Tabla de valor posicional | 5 | 11 | **Figure 1.6**: tabla de valores posicionales (ones, thousands, millions, billions, trillions, agrupados en periodos de tres) con 5,278,194; cada lugar vale diez veces el de su derecha; Example 1.3 empieza (63,407,218) |
| Example 1.3 resuelto y nombrar números | 6 | 12 | 63,407,218 en la tabla: 7 en thousands, 0 en ten thousands, 1 en tens, 6 en ten millions, 3 en millions; nombrar 37,519,248 por periodos; HOW TO "Name a whole number in words"; Example 1.4 (8,165,432,098,710) |
| Redondear enteros | 9-12 | 15-18 | Example 1.7 (presupuesto en billones), Examples 1.8 (a la decena), 1.9 (a la centena) y 1.10 (al millar) |
| Propiedad de identidad de la suma | 20 | 26 | Table 1.1 (tabla de sumar 0-9); cuadro "Identity Property of Addition": a + 0 = a, 0 + a = a; "zero is called the additive identity"; Example 1.15 (0 + 11, 42 + 0) |
| Conmutativa de la suma | 21 | 27 | 2 + 3 = 3 + 2, 4 + 7 = 7 + 4, 8 + 9 = 9 + 8; cuadro "Commutative Property of Addition" a + b = b + a; Example 1.16 (8 + 7 y 7 + 8) |
| Multiplicación: propiedad del cero | 47 | 53 | Table 1.4 (tabla de multiplicar 0-9); cuadro "Multiplication Property of Zero" a·0 = 0, 0·a = 0; Example 1.41 |
| Identidad y conmutativa de la multiplicación | 48-49 | 54-55 | "Identity Property of Multiplication" (a·1 = a); "Commutative Property of Multiplication" |
| División: propiedades del uno y del cero | 65-66 | 71-72 | "Division Properties of One" (p. 71); Table 1.7 "Division Properties of Zero": 0 ÷ a = 0, a ÷ 0 indefinido; dos argumentos: no hay número que por 0 dé 10, y "división = resta repetida" (restar 0 nunca termina); Example 1.60 (0 ÷ 3, 10/0) |
| Key Concepts del capítulo | 79-81 | 85-87 | resumen de los cuadros de 1.1 a 1.5 |

## prealg2: cap. 2 The Language of Algebra (impresa = PDF + 94)

Aquí (y no en el cap. 1) están los exponentes y el orden de operaciones.

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Variables y constantes | 2 | 96 | Greg y Alex se llevan 3 años: la edad es **variable**, la diferencia 3 es **constante**; Table 2.1 (x y x + 3); cuadro "Variables and Constants"; tabla de las cuatro operaciones con notación y "the sum of", "the difference of", "the product of", "the quotient of"; no usar × porque se confunde con la x (usar · o paréntesis) |
| Traducir de álgebra a palabras | 3 | 97 | Example 2.1 (12 + 14, 30 · 5, 64 ÷ 8, x − y) |
| Igualdad y desigualdades | 4-5 | 98-99 | cuadro "Inequality": a < b significa a a la izquierda de b en la recta; Table 2.2 (=, ≠, <, >, ≤, ≥); los símbolos tienen un "lado chico" y un "lado grande"; Example 2.2 (20 ≤ 35, 11 ≠ 15 − 3, 9 > 10 ÷ 2, x + 2 < 10) |
| Comparar con datos | 6-7 | 100-101 | Example 2.3: Figure 2.2 rendimiento de autos (Prius 48, Mini Cooper 27, Versa 26, Fit 27, Corolla 28 mpg) |
| Símbolos de agrupación; expresión vs ecuación | 7-8 | 101-102 | Table 2.3 (paréntesis, corchetes, llaves); expresión = frase, ecuación = oración (el = es el verbo); cuadro "Expressions and Equations"; Example 2.4 |
| **Notación exponencial** | 9 | 103 | simplificar 4·2 + 1 = 9 escribiendo un paso por renglón; 2·2·2 = 2³ y 2·2·2·2·2·2·2·2·2 = 2⁹; **base** y **exponente** con flechas; cuadro "Exponential Notation": aⁿ = a·a·...·a (n factores), "a to the n-th power"; a² "a squared", a³ "a cubed"; Table 2.4 (7², 5³, 9⁴, 12⁵ en palabras) |
| Ejemplos de exponentes | 10-11 | 104-105 | Example 2.5 (16·16·16·16·16·16·16 = 16⁷; 9⁵; x⁴; a⁸); Example 2.6 (8⁶ y x⁵ en forma expandida); Example 2.7 3⁴ = 3·3·3·3 = 81; TRY IT 2.14 incluye 0⁵ |
| **Orden de operaciones: motivación y regla** | 11 | 105 | 4 + 3·7: "unos dicen 49, otros 25"; cuadro "Order of Operations": 1. paréntesis y otros símbolos de agrupación (los de más adentro primero), 2. exponentes, 3. multiplicación y división de izquierda a derecha (igual prioridad), 4. suma y resta de izquierda a derecha (igual prioridad) |
| Mnemotecnia PEMDAS | 12 | 106 | tabla "Please Excuse My Dear Aunt Sally"; "My Dear" juntos recuerda que multiplicación y división tienen la misma prioridad (no siempre se multiplica primero); igual "Aunt Sally"; actividad Game of 24; Example 2.8 a) 4 + 3·7 = 25 |
| Ejemplos resueltos | 13 | 107 | Example 2.8 b) (4 + 3)·7 = 49; Example 2.9 a) 18 ÷ 9·2 = 2·2 = 4 (dividir primero porque va a la izquierda) |
| Ejemplos resueltos | 14 | 108 | Example 2.9 b) 18·9 ÷ 2 = 162 ÷ 2 = 81; **Example 2.10** 18 ÷ 6 + 4(5 − 2) = 3 + 12 = 15; agrupaciones anidadas: de adentro hacia afuera; Example 2.11 empieza |
| Agrupaciones anidadas | 15 | 109 | **Example 2.11** 5 + 2³ + 3[6 − 3(4 − 2)] = 5 + 8 + 3[0] = 13; Example 2.12 empieza: 2³ + 3⁴ ÷ 3 − 5² ("varios exponentes se simplifican en el mismo paso") |
| Cierre del orden de operaciones | 16 | 110 | Example 2.12: 8 + 81 ÷ 3 − 25 = 8 + 27 − 25 = 10; TRY IT 2.23 (3² + 2⁴ ÷ 2 + 4³), 2.24 (6² − 5³ ÷ 5 + 8²); ejercicios 2.1 empiezan |
| Ejercicios de exponentes y orden de operaciones | 17 | 111 | "Simplify Expressions with Exponents" y "Simplify Expressions Using the Order of Operations" |
| 2.2 Evaluar expresiones | 19-20 | 113-114 | objetivos de 2.2; "evaluate" = sustituir y simplificar con el orden de operaciones; Example 2.13 x + 7 con x = 3 (10) y x = 12 (19): el valor depende de la variable; Example 2.14 9x − 2 con x = 5 |
| Evaluar con exponentes | 21-22 | 115-116 | Example 2.14 termina (43 y 7); Example 2.15 x² con x = 10 → 100; Example 2.16 2ˣ con x = 5 → 32 (la variable en el exponente); Example 2.17 3x + 4y − 6 con x = 10, y = 2 → 32 |
| Trampa 2x² vs (2x)² | 23 | 117 | **Example 2.18** 2x² + 3x + 8 con x = 4 → 2(16) + 12 + 8 = 52; "2x² significa 2·x·x y es distinto de (2x)² = 2x·2x"; términos y **coeficientes**, Table 2.5 (9a → 9, y → 1, 5x² → 5) |
| Términos semejantes | 24-25 | 118-119 | Table 2.6 (expresiones y sus términos); Example 2.19 (9b + 15x² + a + 6); cuadro "Like Terms"; Example 2.20; combinar: 3x + 6x = 9x visto como sumas repetidas; reordenar con la conmutativa |
| Combinar términos semejantes | 26 | 120 | HOW TO de 3 pasos; Example 2.21 3x + 7 + 4x + 5 = 7x + 12; Example 2.22 7x² + 8x − x² − 4x = 6x² + 4x |
| Traducir palabras a expresiones | 27-30 | 121-124 | tabla de palabras clave por operación; Examples 2.23 a 2.27 ("eight more than", "five times the sum of" vs "the sum of five times") |
| 2.3 Propiedades de igualdad (primer contacto) | 37-38 | 131-132 | cuadros "Subtraction Property of Equality" y "Addition Property of Equality" con modelos de sobres |
| Key Concepts | 68-69 | 162-163 | resumen: notación algebraica, orden de operaciones, evaluar, términos semejantes |

## prealg3: cap. 3 Integers (impresa = PDF + 170)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Apertura y objetivos 3.1 | 1 | 171 | ubicar positivos y negativos en la recta, ordenarlos, opuestos, valor absoluto, traducir frases |
| Números negativos en la vida real | 2 | 172 | negativo = menor que 0; −1 °F; termómetro en −20 °F (Figure 3.2); Mar Muerto a −1,302 ft (Figure 3.3); submarino a −500 ft (Figure 3.4); el signo + se omite; Figure 3.5 recta solo con 0 a 6 |
| **Recta numérica completa** | 3 | 173 | **Figure 3.6** de −4 a 4 con "Negative numbers / Zero / Positive numbers": el cero no es positivo ni negativo; las flechas indican que sigue para siempre ("no hay mayor positivo ni menor negativo"); Example 3.1 ubicar 3, −3, −2 (Figures 3.7 a 3.9) |
| Ordenar positivos y negativos | 4-5 | 174-175 | Figure 3.10 (crece a la derecha, decrece a la izquierda); Figure 3.11 (3 < 5, 5 > 3); tres rectas: 4 > 1, −2 < 1, −1 > −3; **Example 3.2** 14 > 6, −1 < 9, **−1 > −4**, 2 > −20 (Figure 3.12 de −20 a 15) |
| **Opuestos** | 5-6 | 175-176 | "los negativos son la imagen especular de los positivos con el cero en el medio"; Figure 3.13 (2 y −2, 3 y −3); cuadro "Opposite" (misma distancia al cero, del otro lado); Example 3.3 opuesto de 7 y de −10 (Figures 3.14 y 3.15) |
| **Los tres significados del signo menos** | 6 | 176 | tabla: 10 − 4 (resta), −8 (número negativo), −x (el opuesto de x), −(−2) (el opuesto de menos 2); cuadro "Opposite Notation": −a se lee "el opuesto de a"; Example 3.4 −(−6) |
| Enteros | 7 | 177 | Example 3.4 resuelto (6); cuadro "Integers": counting numbers, sus opuestos y el cero, ...−3, −2, −1, 0, 1, 2, 3...; Example 3.5 −x con x = 8 (−8) y con x = −8 (8): "cuidado con los signos" |
| **Valor absoluto** | 8 | 178 | distancia al cero, nunca negativa; |5| y |−5| (Figure 3.16: "−5 is 5 units from 0"); cuadro "Absolute Value": |n| ≥ 0 para todo número; Example 3.6 |3| = 3, |−44| = 44, |0| = 0 |
| Evaluar con valor absoluto | 9-10 | 179-180 | "las barras se tratan como paréntesis"; **Example 3.7** |x| con x = −35 → 35; |−y| con y = −20 → 20; −|u| con u = 12 → −12; −|p| con p = −14 → −14; "el resultado es negativo solo cuando hay un signo fuera de las barras" |
| Comparar expresiones con valor absoluto | 10-11 | 180-181 | Example 3.8 |−5| > −|−5|, 8 > −|−8|, −9 = −|−9|, −|−7| = −7 |
| Barras como símbolo de agrupación | 11-12 | 181-182 | Example 3.9 |9 − 3| = 6, 4|−2| = 8; Example 3.10 |8 + 7| − |5 + 6| = 15 − 11 = 4; **Example 3.11** 24 − |19 − 3(6 − 2)| = 24 − 7 = 17 |
| Traducir frases con enteros | 12-13 | 182-183 | Example 3.12 ("the opposite of −11" = 11, "two minus negative seven" = 2 − (−7)); Example 3.13 (12 °F bajo cero = −12 °F; ganancia de 3 yardas; −1,302 ft; sobregiro de 40 = −$40) |
| 3.2 Sumar enteros con fichas | 17 | 187 | fichas azules (+1) y rojas (−1); par neutro 1 + (−1) = 0 (Figure 3.17); los cuatro casos 5 + 3, −5 + (−3), −5 + 3, 5 + (−3); Example 3.14 |
| Modelar sumas con signos distintos | 20 | 190 | 5 + (−3) = 2 quitando pares neutros; Example 3.18 (4 + 2, −3 + 6, 4 + (−5), −2 + (−3)) |
| Reglas de la suma | 22 | 192 | 37 + (−53) = −16 y −74 + (−27) = −101 sin contar fichas; **Table 3.1** resumen de los cuatro casos (mismos signos: sumar; signos distintos: restar y gana el signo del que tiene más); Example 3.19 19 + (−47) = −28, −32 + 40 = 8 |
| Sumas y orden de operaciones | 23 | 193 | Example 3.20 −14 + (−36) = −50; Example 3.21 −5 + 3(−2 + 7) = 10 |
| Restar es sumar el opuesto | 38 | 208 | 30 − (−12) = 42 con fichas; cuadro "Subtraction Property" a − b = a + (−b); 6 − 4 y 6 + (−4) con fichas; Example 3.36 13 − 8 = 13 + (−8) = 5 |
| **Signo del producto** | 51 | 221 | cuadro "Multiplication of Signed Numbers": mismos signos → positivo, distintos → negativo; Example 3.47 −9·3 = −27, −2(−5) = 10, 4(−8) = −32, 7·6 |
| Multiplicar por −1 | 52 | 222 | multiplicar por −1 da el opuesto |
| Signo del cociente | 53 | 223 | 15 ÷ 3 = 5 porque 5·3 = 15; −15 ÷ 3 = −5, etc.; cuadro "Division of Signed Numbers" (mismas reglas); Example 3.49 −27 ÷ 3, −100 ÷ (−4) |
| Expresiones con enteros | 55 | 225 | Example 3.51 7(−2) + 4(−7) − 6 = −14 + (−28) − 6 = −48 |
| **Trampa (−2)⁴ vs −2⁴** | 56 | 226 | **Example 3.52** (−2)⁴ = 16 (la base es −2) y −2⁴ = −16 (la base es 2, se eleva y luego se toma el opuesto), ambos en forma expandida; TRY IT (−3)⁴, −3⁴, (−7)², −7²; Example 3.53 empieza |
| Orden de operaciones con enteros | 57 | 227 | Example 3.53 12 − 3(9 − 12) = 12 − (−9) = 21; Example 3.54 8(−9) ÷ (−2)³ = −72 ÷ (−8) = 9; Example 3.55 −30 ÷ 2 + (−3)(−7) |
| Key Concepts | 74-75 | 244-245 | resumen: opuesto, valor absoluto, tablas de signos del producto y del cociente |

## prealg4: cap. 4 Fractions (impresa = PDF + 252)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Significado de una fracción | 2 | 254 | pizza en 2, 4 y 12 partes iguales (1/2, 1/4, 1/12); cuadro "Fractions": a/b con a, b enteros y **b ≠ 0**; numerador y denominador; el denominador no puede ser 0 "porque la división entre cero no está definida"; círculo de fracciones (Figure 4.2) |
| Propiedad del uno | 5 | 257 | **Figure 4.3** tiras de fracciones (1, mitades, tercios, cuartos, sextos); 2/2 = 3/3 = 4/4 = 6/6 = 24/24 = 1; cuadro "Property of One" a/a = 1 (a ≠ 0); Example 4.3 |
| Mixtos e impropias | 7-8 | 259-260 | cuadro "Mixed Numbers" (a b/c); cuadro "Proper and Improper Fractions" (propia si a < b, impropia si a ≥ b); Example 4.5 4/3 = 1 1/3 con círculos; Example 4.6 11/8 = 1 3/8; Example 4.7 11/6 = 1 5/6 |
| Mixto a impropia; **fracciones equivalentes** | 12 | 264 | 10 2/7 = 72/7 (cierra un ejemplo); cuadro "Equivalent Fractions" (mismo valor); con tiras: 2/4 = 1/2 y 3/6 = 1/2 |
| **Propiedad de fracciones equivalentes** | 14 | 266 | Figure 4.4 (1/2 y 4/8 en pizzas); 1·4/2·4 = 4/8; cuadro "Equivalent Fractions Property": a/b = a·c / b·c (b ≠ 0, c ≠ 0); 1/2 = 2/4 = 3/6 = 10/20; Example 4.14 equivalentes a 2/5: 4/10, 6/15, 10/25 |
| Denominador dado; fracciones en la recta | 15 | 267 | Example 4.15 2/7 = 6/21; ubicar 1/5, 4/5, 3, 3 1/3, 7/4, 9/2, 5 y 8/3 en la recta (las impropias se pasan a mixtas: 7/4 = 1 3/4, 9/2 = 4 1/2, 8/3 = 2 2/3) |
| Recta con fracciones; opuestos | 16 | 268 | recta con todos los puntos; Example 4.16 (3/4, 4/3, 5/3, 4 1/5, 7/2) dividiendo cada unidad en partes iguales; recordatorio: el opuesto de 7 es −7; "las fracciones también tienen opuestos": −3/4 |
| Ordenar fracciones | 18 | 270 | Example 4.18 |
| **Simplificar fracciones** | 23 | 275 | la propiedad en los dos sentidos: a/b = ac/bc y ac/bc = a/b; HOW TO "Simplify a fraction" (factorizar en primos, quitar factores comunes); Example 4.19 10/15 = 2·5 / 3·5 = 2/3; Example 4.20 −18/24 |
| Multiplicar fracciones (modelo) | 26 | 278 | Example 4.24 1/2 de 3/4 con diagrama |
| **Regla del producto** | 27 | 279 | 1/2 · 3/4 = 3/8; cuadro "Fraction Multiplication": a/b · c/d = ac/bd; Example 4.25 3/4 · 1/5 = 3/20; con negativos valen las reglas de signos |
| **Recíprocos** | 30 | 282 | 2/3 · 3/2 = 1 y −10/7 · (−7/10) = 1; cuadro "Reciprocal" (b/a, a ≠ 0, b ≠ 0; el producto es 1); recíprocos con el mismo signo (3 · 1/3, −3 · (−1/3)); **el 0 no tiene recíproco**; Example 4.29 |
| Opuesto, valor absoluto y recíproco | 32 | 284 | Table 4.1 (opuesto: cambia el signo; valor absoluto: nunca negativo; recíproco: mismo signo, se invierte); Example 4.30 con −3/8, 1/2, 9/5, −5 (recíprocos −8/3, 2, 5/9, −1/5) |
| **Dividir fracciones** | 34 | 286 | Example 4.32 2 ÷ 1/4 = 8 (cuántos cuartos caben en 2; moneda de 25 centavos, Figure 4.6); 1/2 ÷ 1/6 = 3 = 1/2 · 6/1; cuadro "Fraction Division": a/b ÷ c/d = a/b · d/c (b, c, d ≠ 0); Example 4.33 2/5 ÷ (−3/7) = −14/15 |
| Fracciones complejas; signo en una fracción | 42-45 | 294-297 | Examples 4.43 a 4.46 (en p. 297 cierra 2 3/4 ÷ 1/8 = 22); cuadro "Placement of Negative Sign in a Fraction": −a/b = a/(−b) = −(a/b); −1/−3 = 1/3 |
| Raya de fracción como agrupación | 46 | 298 | Example 4.48: se simplifica arriba y abajo antes de dividir |
| Sumar con denominador común | 51-52 | 303-304 | Example 4.52 3/8 + 2/8 = 5/8 con círculos; cuadro "Fraction Addition": a/c + b/c = (a + b)/c; Example 4.53 |
| Restar con denominador común | 55-56 | 307-308 | modelo y cuadro "Fraction Subtraction"; Examples 4.58 a 4.61 |
| **Mínimo común denominador** | 61 | 313 | cuadro "Least Common Denominator" (MCM de los denominadores); Example 4.63 7/12 y 5/18: árboles de factores, 12 = 2·2·3, 18 = 2·3·3, MCD = 36 |
| HOW TO del MCD; convertir | 62 | 314 | HOW TO de 5 pasos; Example 4.64 8/15 y 11/24 → 120; tiras: 1/4 = 3/12 y 1/6 = 2/12 |
| Convertir al MCD | 63 | 315 | Example 4.65 1/4 = 3/12, 1/6 = 2/12 ("no se reducen, se perdería el común denominador"); HOW TO; Example 4.66 empieza |
| Sumar con distinto denominador | 64 | 316 | Example 4.66 8/15 = 64/120, 11/24 = 55/120; HOW TO de 4 pasos; Example 4.67 1/2 + 1/3 (MCD 6) |
| Más sumas y restas | 65-68 | 317-320 | Examples 4.68 a 4.72 |
| **Resumen de operaciones con fracciones** | 69 | 321 | cuadro "Summary of Fraction Operations" (multiplicación, división, suma, resta, con fórmula); Example 4.73 a) −1/4 + 1/6 = −3/12 + 2/12 = −1/12; b) −1/4 ÷ 1/6 (no necesita común denominador) |
| Más operaciones; evaluar | 70-74 | 322-326 | Examples 4.74 a 4.76; Examples 4.77 a 4.80 evaluar expresiones con fracciones |
| Key Concepts | 107-109 | 359-361 | resumen del capítulo |

## prealg5: cap. 5 Decimals (impresa = PDF + 366)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Nombrar decimales; potencias de 10 | 2 | 368 | almuerzo $3.45 + $1.25 + $0.33 = $5.03; un centavo = 1/100 = 0.01; "decimales = partes de un entero cuando el entero es una potencia de diez"; **Table 5.1** (1, 10, 10·10 = 100, 1000, 10,000 y sus nombres); **Table 5.2** (0.1 = 1/10 one tenth, 0.01 = 1/100, 0.001 = 1/1,000, 0.0001 = 1/10,000) |
| Tabla de valor posicional con decimales | 3 | 369 | **Figure 5.2** (de hundred thousands a hundred-thousandths); "th" al final indica fracción; tenths es el primer lugar a la derecha del punto, tens el segundo a la izquierda; cheque (Figure 5.3); 15.68 = "fifteen and sixty-eight hundredths" |
| Escribir decimales | 5-7 | 371-373 | Examples 5.2 y 5.3 (twenty-four thousandths = 0.024, con ceros de relleno); 5 = 5.0 = 5.00 y −2 = −2.0 |
| **Decimal a fracción** | 7-9 | 373-375 | 0.03 = 3/100, 5.03 = 5 3/100; HOW TO; Example 5.4 (3.7 = 3 7/10; −0.286 = −286/1000 = −143/500) |
| Decimales en la recta | 9-10 | 375-376 | Example 5.5 ubicar 0.4 (dividir [0, 1] en 10 partes; ver errata); Example 5.6 −0.74 entre −0.70 y −0.80 |
| **Ordenar decimales** | 10-11 | 376-377 | 0.04 vs 0.40 (dinero y recta); 0.31 vs 0.308: 310/1000 > 308/1000; cuadro "Equivalent Decimals" (0.31 = 0.310); HOW TO (igualar cantidad de decimales); Example 5.7 0.64 > 0.6 y 0.83 > 0.803 |
| Ordenar negativos | 12 | 378 | −2 > −3, −9 < −6; −0.2 > −0.3; Example 5.8 −0.1 > −0.8 |
| Redondear decimales | 13 | 379 | Figure 5.4 (2.72 más cerca de 3 y de 2.7); HOW TO de 4 pasos; Example 5.9 18.379 → 18.38 |
| Multiplicar decimales | 21-23 | 387-389 | regla de los lugares decimales; Example 5.17 (0.03)(0.045) = 0.00135 (5 lugares) |
| **Multiplicar por potencias de 10** | 23-24 | 389-390 | 1.9436 × 10, 100, 1000 = 19.436, 194.36, 1943.6; **Table 5.4** (ceros de la potencia = lugares que se mueve el punto); 45.86 × 100 = 4586, 2.4 × 100 = 240; HOW TO; Example 5.18 5.63 × 10, 100, 1000 (ver errata) |
| Dividir decimales | 25-29 | 391-395 | Examples 5.19 a 5.23 |
| **Fracción a decimal** | 36 | 402 | cuadro "Convert a Fraction to a Decimal" (dividir numerador entre denominador); Example 5.28 3/4 = 0.75 (división larga); Example 5.29 −7/2 = −3.5 |
| **Decimales periódicos** | 37 | 403 | 4/3 = 1.333...: siempre queda resto 1; cuadro "Repeating Decimal"; notación con barra 1.3̄; Table 5.5 (1.3̄, 4.16̄, 4.1̄6̄ (bloque 16), 0.2̄7̄1̄ (bloque 271)); Example 5.30 43/22 con la división marcando que los restos 120 y 100 se repiten |
| Periódico, mezclar formas | 38 | 404 | 43/22 = 1.95̄4̄ (el 9 no es parte del bloque); Example 5.31 7/8 + 6.4 = 0.875 + 6.4 = 7.275; Example 5.32 3/8 vs 0.4 (0.375 < 0.4) |
| Ordenar decimales y fracciones | 39-40 | 405-406 | Examples 5.33 y 5.34 (0.61, 13/20 = 0.65, 11/16 = 0.6875) |
| Orden de operaciones con decimales | 40 | 406 | "Please excuse my dear Aunt Sally" otra vez; Example 5.35 7(18.3 − 21.7) = −23.8; 2/3(8.3 − 3.8) = 2/3 · 9/2 = 3 |
| | 41 | 407 | Example 5.36 6 ÷ 0.6 + (0.2)4 − (0.1)² = 10.79; (1/10)² + (3.5)(0.9) = 0.01 + 3.15 = 3.16; empieza círculos |
| π como decimal que no termina ni se repite | 42 | 408 | Arquímedes, C = 2πr, A = πr², π ≈ 3.14; A = 100π ≈ 314 |
| 5.6 **Razones** | 67 | 433 | cuadro "Ratios": compara dos cantidades **con la misma unidad**; a to b, a/b, a:b; se simplifica pero se deja impropia (4/1, no 4) "para ver las dos partes"; Example 5.58 empieza (15 to 27, 45 to 18) |
| Razones simplificadas; con decimales | 68-69 | 434-435 | 15/27 = 5/9, 45/18 = 5/2; 0.8/0.05 = 80/5 = 16/1 ("mover el punto" multiplicando por 100); Example 5.59 4.8 to 11.2 = 3/7; 2.7 to 0.54 = 270/54 = 5/1 |
| Aplicaciones de razones | 70 | 436 | Example 5.60 (mixtos), Example 5.61 colesterol total / HDL |
| Unidades distintas; **tasas** | 71 | 437 | Example 5.62 rampa ADA: 1 inch / 1 foot = 1/12 (convertir a la misma unidad primero); cuadro "Rate": compara cantidades de **distinta unidad** (120 millas en 2 horas, $5 por 64 onzas); las unidades se quedan en la fracción |
| **Tasa unitaria** | 72-73 | 438-439 | Example 5.63 525 millas en 9 horas = 175/3; cuadro "Unit Rate" (denominador 1); tabla 68 mph y 36 mpg; Example 5.64 $384 / 32 horas = $12/hora; Example 5.65 455 millas / 14 galones = 32.5 mpg; cuadro "Unit price" |
| Precio unitario | 74 | 440 | Examples 5.66 y 5.67 (comparar paquetes) |
| 5.7 **Cuadrados** | 79 | 445 | cuadro "Square of a Number" (si n² = m, m es el cuadrado de n); 3 × 3 baldosas = 9; tabla de cuadrados de 1 a 15; cuadro "Perfect Squares"; (−8)² = 64: el cuadrado de un negativo es positivo |
| **Raíz cuadrada** | 80 | 446 | tabla de cuadrados de −1 a −15; cuadro "Square Root of a Number" (si n² = m, n es una raíz cuadrada de m); 10 y −10 son raíces de 100: "todo positivo tiene dos raíces"; signo radical = **raíz principal** (positiva); cuadro "Square Root Notation" (radicando); √0 = 0; tabla √1 a √225; Example 5.69 √25 = 5 |
| Raíz negativa vs raíz de un negativo | 81 | 447 | Example 5.69 b) √121 = 11; −√100 = −10; Example 5.70 −√9 = −3, −√144 = −12; "Square Root of a Negative Number": √−25 no es un número real (ningún real al cuadrado da negativo) |
| **Raíces y orden de operaciones** | 82 | 448 | Example 5.71 √−169 no es real; −√121 = −11; el radical es símbolo de agrupación; **Example 5.72** √25 + √144 = 17 vs √(25 + 144) = √169 = 13 |
| Estimar raíces | 83 | 449 | tabla √4 a √9: 2 < √5 < 3; Example 5.73 7 < √60 < 8 (entre 49 y 64); calculadora: √5 ≈ 2.236067978 (usar ≈) |
| Aproximación vs valor exacto | 84 | 450 | √5 ≈ 2.24; 2.236067978² = 5.000000002 y 2.24² = 5.0176 (cerca, no igual); Example 5.74 √17 ≈ 4.123105626 ≈ 4.12; √(9x²) = 3x con x ≥ 0; Example 5.75 √x² = x |
| Raíces con variables y aplicaciones | 85-88 | 451-454 | Examples 5.76 a 5.78; área (5.79), caída libre (5.80), marcas de frenado (5.81) |
| Key Concepts | 91-93 | 457-459 | resumen del capítulo |

## prealg6: cap. 6 Percents (impresa = PDF + 466)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| **Definición de porcentaje** | 2 | 468 | "per cent" = por cada cien; cuadro "Percent": una razón con denominador 100; Figure 6.2 cuadrícula de 100 con 57 sombreados (57 %); 25 % = 25/100, 3 % = 3/100, 100 % = 100/100 = 1; Example 6.1 44 % = 44/100; Example 6.2 empieza (21 de cada 100) |
| Porcentaje a fracción | 3-4 | 469-470 | Example 6.2 → 21 %; HOW TO; Example 6.3 36 % = 36/100 = 9/25; 125 %; Example 6.4 |
| Porcentaje a decimal | 5-6 | 471-472 | Example 6.5; Example 6.6 135 % = 1.35, 12.5 % = 12.5/100 = 0.125; **Table 6.1** (6 % = 0.06, 78 % = 0.78, 135 % = 1.35, 12.5 % = 0.125) |
| Las tres formas a la vez | 7-8 | 473-474 | Example 6.7; Example 6.8 probabilidad de un corazón: 25 % = 1/4 = 0.25 (Figure 6.4) |
| **Decimal a porcentaje** | 8-10 | 474-476 | HOW TO (escribir como fracción sobre 100); Example 6.9 0.05 = 5 %, 0.83 = 83 %; Example 6.10 1.05 = 105 % ("como 1.05 > 1, da más de 100 %"), 0.075 = 7.5/100 = 7.5 % |
| Atajo de las dos posiciones | 10 | 476 | **Table 6.2** (0.05, 0.83, 1.05, 0.075 y sus porcentajes); "mover el punto dos lugares a la derecha y agregar %"; **Figure 6.5** muestra el movimiento; HOW TO fracción a porcentaje (primero a decimal) |
| Fracción a porcentaje | 11-12 | 477-478 | Example 6.11 3/4 = 75 %, 11/8 = 1.375 = 137.5 %, 2 1/5 = 11/5 = 220 %; se redondea al milésimo; Example 6.12 5/7 ≈ 0.714 = 71.4 %; Example 6.13 1/3 = 0.333... = 33 1/3 % = 33.3̄ % |
| 6.2 **Ecuaciones de porcentaje** | 17 | 483 | propina de 20 % sobre $80 = 0.20(80) = $16 (Figure 6.6); "amount" y "base"; cambiar el porcentaje a decimal al traducir; Example 6.14 "What number is 35 % of 90?" n = 0.35·90 = 31.5 |
| Buscar la base | 18-19 | 484-485 | Example 6.15 (125 % de 28); Example 6.16 36 is 75 % of what number → b = 48; Example 6.17 6.5 % de qué número es $1.17 → 18 (ver errata) |
| Buscar el porcentaje | 19-20 | 485-486 | Example 6.18 what percent of 36 is 9 → p = 1/4 = 0.25 = 25 %; Example 6.19 144 is what percent of 96 |
| Aplicaciones | 20-23 | 486-489 | Examples 6.20 (propina), 6.21 (potasio del cereal), 6.22 brownie con 240 de 480 calorías de grasa → 50 % |
| **Aumento porcentual** | 23-24 | 489-490 | HOW TO: aumento = nuevo − original; luego qué porcentaje del original es; Example 6.23 tasas de $26 a $36: 10/26 ≈ 0.385 = 38.5 % |
| **Disminución porcentual** | 24-25 | 490-491 | HOW TO: disminución = original − nuevo; Example 6.24 gasolina de $3.71 a $3.64: 0.07/3.71 ≈ 0.019 = 1.9 % |
| 6.5 **Proporciones** | 50 | 516 | objetivos; cuadro "Proportion": ecuación a/b = c/d con b ≠ 0, d ≠ 0, se lee "a es a b como c es a d"; 1/2 = 4/8; con unidades: 20 estudiantes / 1 profesor = 60 estudiantes / 3 profesores (mismas unidades arriba y abajo) |
| Escribir proporciones | 51 | 517 | Example 6.40 3/7 = 15/35; 5 hits en 8 at-bats = 30 en 48 → 5/8 = 30/48; $1.50 por 6 onzas = $2.25 por 9 → 1.50/6 = 2.25/9; productos cruzados empiezan |
| **Productos cruzados** | 52 | 518 | 8·1 = 8 = 2·4 y 9·2 = 18 = 3·6; cuadro "Cross Products of a Proportion": a·d = b·c; Example 6.41 4/9 vs 12/28: 28·4 = 112 ≠ 9·12 = 108 (no es proporción); 17.5/37.5 = 7/15: 15·17.5 = 262.5 = 37.5·7 (sí) |
| **Resolver proporciones** | 53 | 519 | Example 6.42 x/63 = 4/7: multiplicar por el MCD 63 → x = 36, con comprobación; Example 6.43 144/a = 9/4 (variable en el denominador: productos cruzados; da a = 64) |
| Proporciones con negativos | 54-55 | 520-521 | Example 6.44 52/91 = −4/y → y = −7, con comprobación |
| **Aplicación tipo "regla de tres"** | 55-56 | 521-522 | Example 6.45 acetaminofén: 5 ml por cada 25 libras, ¿cuánto para 80 libras? ml/libras = ml/libras, 5/25 = a/80 (resultado 16 ml); Examples 6.46 y 6.47 |
| Porcentaje como proporción | 58 | 524 | 60 % = 60/100 = 3/5; cuadro "Percent Proportion": amount/base = percent/100; Example 6.48 n/90 = 75/100 |
| Traducir y resolver | 59-61 | 525-527 | Example 6.49 19/n = 25/100; Example 6.50 9/27 = p/100; Examples 6.51 a 6.53 se resuelven |
| Key Concepts | 66-67 | 532-533 | resumen del capítulo |

## prealg7: cap. 7 The Properties of Real Numbers (impresa = PDF + 538)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| **Números racionales** | 2 | 540 | repaso en tabla: counting 1, 2, 3, 4...; whole 0, 1, 2, 3, 4...; integers ...−3, −2, −1, 0, 1, 2, 3, 4...; cuadro "Rational Numbers": p/q con p, q enteros y q ≠ 0; 4/5, −7/8, 13/4, −20/3; todo entero es racional (3 = 3/1, −8 = −8/1, 0 = 0/1); 7.3 = 73/10; "todo decimal que termina es racional" |
| Escribir como razón de enteros | 3 | 541 | Example 7.1 −15 = −15/1; 6.81 = 6 81/100 = 681/100; −3 6/7 = −27/7; formas decimales: enteros (−2.0, ...), fracciones (0.8, −0.875, 3.25, −6.666... = −6.6̄): "terminan o se repiten" |
| **Irracionales** | 4 | 542 | tabla resumen de racionales (fracción / entero / razón / decimal); π = 3.141592654...; √5 = 2.236067978...; cuadro "Irrational Number" (no es razón de enteros; su decimal no termina ni se repite); regla: si termina o se repite es racional, si no, irracional; Example 7.2 0.58̄3 racional, 0.475 racional, 3.605551275... irracional |
| **Clasificar reales** | 5 | 543 | Example 7.3 √36 = 6 racional, √44 irracional (no es cuadrado perfecto: 36 < 44 < 49); **Figure 7.2** diagrama de conjuntos anidados (Counting ⊂ Whole ⊂ Integers ⊂ Rational, e Irrational aparte, todo dentro de Real); cuadro "Real Numbers" (racionales o irracionales) |
| Tabla de clasificación | 6 | 544 | menciona que existen los imaginarios (no en este curso); **Example 7.4** clasifica −7, 14/5, 8, √5, 5.9, −√64 en whole / integer / rational / irrational / real con tabla de marcas (−√64 = −8 es entero) |
| 7.2 Conmutativas | 8-9 | 546-547 | a + b = b + a, a·b = b·a; Example 7.5 (−1 + 3, 4·9); **resta y división no son conmutativas**: 7 − 3 = 4 ≠ 3 − 7 = −4; 12 ÷ 4 = 3 ≠ 4 ÷ 12 = 1/3 |
| Asociativas | 10-11 | 548-549 | Figure 7.3 (7 + 8) + 2 = 7 + (8 + 2) = 17; Figure 7.4 (5·1/3)·3 = 5·(1/3·3) = 5; cuadro "Associative Properties"; Examples 7.6 y 7.7 (reagrupar para que la cuenta sea fácil) |
| Evaluar usando las propiedades | 12-16 | 550-554 | Examples 7.8 a 7.16 |
| **Distributiva** | 19 | 557 | tres amigos al cine a $9.25: 3 × $9 = $27 más 3 × $0.25 = $0.75, total $27.75; cuadro "Distributive Property" a(b + c) = ab + ac; 3(9.25) = 3(9) + 3(0.25); 3(x + 4) no se puede sumar adentro; Example 7.17 |
| Otras formas | 20 | 558 | 3(x + 4) = 3x + 12 con flechas; Example 7.18 6(5y + 1) = 30y + 6; cuadro con a(b − c) = ab − ac y (b + c)a = ba + ca |
| Más distributiva | 21-27 | 559-565 | Examples 7.19 a 7.32 (con fracciones, negativos, −(x − y), combinar después) |
| **Identidades** | 30 | 568 | 13 + 0 = 13, 43·1 = 43; cuadro "Identity Properties": a + 0 = a (0 es la identidad aditiva), a·1 = a (1 es la identidad multiplicativa); Example 7.33 |
| **Inversos** | 31 | 569 | 5 + (−5) = 0, 2/3 · 3/2 = 1, 2 · 1/2 = 1; −a es el **inverso aditivo**, 1/a el **inverso multiplicativo** (a ≠ 0); cuadro "Inverse Properties"; Example 7.34 |
| Inversos y multiplicación por cero | 32 | 570 | Example 7.34 (13 → −13, −5/8 → 5/8, 0.6 → −0.6); Example 7.35 (9 → 1/9, −1/9 → −9, 0.9 = 9/10 → 10/9); cuadro "Multiplication by Zero"; Example 7.36 |
| Cero dividido entre algo | 33 | 571 | 0 ÷ 3 = 0 porque 0·3 = 0 (galletas); cuadro "Division of Zero": 0/a = 0 para a ≠ 0; Example 7.37 |
| **División entre cero** | 34 | 572 | 4 ÷ 0 = ? significaria ?·0 = 4: no existe; cuadro "Division by Zero": a/0 y a ÷ 0 indefinidos; Example 7.38 7.5 ÷ 0, −32/0, 4/9 ÷ 0 |
| Resumen de propiedades del cero | 35 | 573 | cuadro "Properties of Zero" (0/a = 0 salvo a = 0; a/0 indefinido); Example 7.39 3x + 15 − 3x = 15 usando inversos aditivos |
| **Tabla resumen de propiedades** | 37 | 575 | Example 7.43 3/4 · 4/3 (6x + 12) = 6x + 12; **Table 7.1** "Properties of Real Numbers" (conmutativa, asociativa, identidad, inverso para suma y multiplicación, distributiva; la fila de propiedades del cero sigue en la página siguiente) |
| Key Concepts | 57-59 | 595-597 | resumen del capítulo |

## prealg8: cap. 8 Solving Linear Equations (impresa = PDF + 600), solo lo esencial

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Solución de una ecuación | 2 | 602 | resolver = descubrir la respuesta de un acertijo; cuadro "Solution of an Equation"; HOW TO comprobar (sustituir, simplificar, ver si es verdadero); Example 8.1 y = 3/4 en 4y + 3 = 8y: 3 + 3 = 6 ✓ |
| **Propiedades de igualdad: la balanza** | 3 | 603 | cuadro "Subtraction and Addition Properties of Equality" (si a = b, a − c = b − c y a + c = b + c, para todos los reales); Figure 8.2 sobre y fichas para x + 3 = 8; **Figure 8.3 balanza** (equilibrada / desequilibrada): lo que se hace a un lado se hace al otro |
| Primeros ejemplos | 4-7 | 604-607 | Examples 8.2 a 8.8 (sumar o restar a ambos lados, simplificar antes) |
| División y multiplicación | 15 | 615 | "deshacer" la operación; Example 8.13 4x = −28 → x = −7 con comprobación; Example 8.14 a/(−7) = −42 → a = 294 |
| Variable en ambos lados | 21-22 | 621-622 | Example 8.20 4x + 6 = −14 → 4x = −20 → x = −5 con comprobación; Example 8.21 2y − 7 = 15 |
| **Estrategia general** | 29 | 629 | cierre de Example 8.29 (3.4x + 4 = 1.6x − 5, comprobación con x = −5: −13 = −13); HOW TO de 5 pasos (simplificar cada lado con la distributiva, juntar variables, juntar constantes, coeficiente 1, comprobar); Example 8.30 3(x + 2) = 18 empieza |
| Estrategia aplicada | 30 | 630 | Example 8.30 → x = 4 (3(6) = 18 ✓); Example 8.31 −(x + 5) = 7 → −x = 12 → x = −12 |
| Más ejemplos | 31-34 | 631-634 | Examples 8.32 a 8.36 |
| Limpiar fracciones | 38 | 638 | **Example 8.37** 1/8 x + 1/2 = 1/4: multiplicar todo por el MCD 8 → x + 4 = 2 → x = −2, con comprobación ("clearing the equation of fractions") |
| Limpiar decimales | 43 | 643 | cierre de Example 8.42 0.8x − 5 = 7: ×10 → 8x − 50 = 70 → x = 15; Example 8.43 0.06x + 0.02 = 0.25x − 1.5: ×100 → 6x + 2 = 25x − 150 |
| Key Concepts | 47 | 647 | resumen del capítulo |

## prealg10: cap. 10 Polynomials, solo exponentes y notación científica (impresa = PDF + 778)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| 10.2 Simplificar con exponentes | 11-12 | 789-790 | Examples 10.11 a 10.13 (repaso de potencias, incluye (−2)⁴ vs −2⁴ en los TRY IT de p. 791) |
| **Propiedad del producto** | 13 | 791 | x²·x³ = (x·x)(x·x·x) = x⁵: 2 + 3 factores; cuadro "Product Property of Exponents" aᵐ·aⁿ = aᵐ⁺ⁿ ("con la misma base, se suman los exponentes"); comprobación 2²·2³ = 4·8 = 32 = 2⁵; Example 10.14 x⁵·x⁷ |
| Más productos | 14-15 | 792-793 | Examples 10.15 a 10.18 |
| **Potencia de una potencia** | 16 | 794 | (x²)³ = x²·³ = x⁶; cuadro "Power Property" (aᵐ)ⁿ = aᵐ·ⁿ; comprobación (5²)³ = 25³ = 15,625 = 5⁶; Example 10.19 (x⁵)⁷ = x³⁵, (3⁶)⁸ = 3⁴⁸ (ver errata) |
| **Producto elevado a una potencia** | 17 | 795 | (2x)³ = 2x·2x·2x = 2³·x³; cuadro "Product to a Power Property" (ab)ᵐ = aᵐbᵐ; (2·3)² = 36 = 4·9; Example 10.20 (−11x)² = 121x² |
| Resumen de propiedades (enteros positivos) | 18 | 796 | Example 10.21 (3xy)³ = 27x³y³; cuadro "Properties of Exponents" (producto, potencia, producto a una potencia); Example 10.22 (x²)⁶(x⁵)⁴ = x¹²·x²⁰ = x³² |
| 10.4 Propiedad del cociente | 37-39 | 815-817 | cuadro "Quotient Property" (aᵐ/aⁿ = aᵐ⁻ⁿ si m > n; 1/aⁿ⁻ᵐ si n > m); Example 10.47 a⁵/a⁹ = 1/a⁴, x¹¹/x⁷ = x⁴ |
| **Exponente cero** | 40 | 818 | 2/2 = 17/17 = −43/−43 = 1; 8/8 = 2³/2³ = 2³⁻³ = 2⁰ = 1; en general aᵐ/aᵐ = a⁰ = 1; cuadro "Zero Exponent" (a ≠ 0); Example 10.48 12⁰ = 1, y⁰ |
| Resumen con cociente y cero | 44 | 822 | cuadro "Summary of Exponent Properties" (exponentes enteros no negativos, con a⁰ = 1 y (a/b)ᵐ = aᵐ/bᵐ); Example 10.52 (x²)³/x⁵ = x |
| 10.5 **Exponente negativo** | 53 | 831 | x²/x⁵ = x²⁻⁵ = x⁻³ y también 1/x³; cuadro "Negative Exponent" a⁻ⁿ = 1/aⁿ (n entero positivo, a ≠ 0); "no se considera simplificada con exponentes negativos"; Example 10.63 4⁻² = 1/16 |
| Trampa de la base | 54 | 832 | 10⁻³ = 1/10³ = 1/1000; **Example 10.64** (−3)⁻² = 1/9 y −3⁻² = −1/9: "el signo negativo del exponente no cambia el signo de la base" |
| Exponentes enteros | 57 | 835 | cuadro "Summary of Exponent Properties" para exponentes enteros con la definición del negativo; Example 10.68 x⁻⁴·x⁶ = x², y⁻⁶·y⁴ = 1/y² |
| Antesala de la notación científica | 60 | 838 | "nuestro sistema se basa en potencias de 10" (place value); 4000 = 4 × 1000 = 4 × 10³, 0.004 = 4 × 10⁻³; definición en palabras |
| **Notación científica** | 61 | 839 | cuadro "Scientific Notation": a × 10ⁿ con 1 ≤ a < 10 y n entero; aquí sí se usa ×; 4000 = 4 × 10³ (el punto se movió 3 a la izquierda), 0.004 = 4 × 10⁻³ (3 a la derecha); potencia positiva si el número es mayor que 1, negativa si está entre 0 y 1; Example 10.74 37,000 = 3.7 × 10⁴ |
| Decimal a científica | 62 | 840 | HOW TO de 4 pasos; Example 10.75 0.0052 = 5.2 × 10⁻³ (comprobación 5.2 × 0.001); 9.12 × 10⁴ = 91,200 y 9.12 × 10⁻⁴ = 0.000912 |
| Científica a decimal | 63-64 | 841-842 | el punto se mueve 4 lugares en los dos casos, a la derecha si el exponente es positivo; Example 10.76 6.2 × 10³ = 6,200; HOW TO; Example 10.77 8.9 × 10⁻² = 0.089 |
| **Multiplicar y dividir en científica** | 64-65 | 842-843 | Example 10.78 (4 × 10⁵)(2 × 10⁻⁷) = 8 × 10⁻² = 0.08 (conmutativa + propiedad del producto); Example 10.79 (9 × 10³)/(3 × 10⁻²) = 3 × 10⁵ = 300,000 |
| Ejercicios con datos reales | 66 | 844 | 384-395: 45,000, 0.036, población de EE. UU. 310,000,000, del mundo 6,850,000,000, cabello 0.0018 cm, lotería 0.0000000057; 396-407: déficit 1.5 × 10¹³, CO₂ 3.9 × 10⁻⁴, protón 1 × 10⁻⁵ del átomo |
| Key Concepts | 79-80 | 857-858 | resumen de exponentes y notación científica |

## prealg11: cap. 11 Graphs, solo lo esencial de la recta (impresa = PDF + 864)

| Tema | PDF | Impresa | Qué hay exactamente |
|---|---|---|---|
| Del mapa al plano | 2 | 866 | Figure 11.2 mapa del campus con cuadrícula (Example 11.1); eje x = recta numérica horizontal; eje y vertical por el 0 |
| **Plano cartesiano y pares ordenados** | 3 | 867 | Figure 11.3 sistema rectangular (también "Cartesian", por Descartes); **Figure 11.4** cuadrantes I a IV en sentido antihorario; cuadro "Ordered Pair" (x, y): primero la coordenada x, después la y; ubicar (2, 5) |
| Puntos | 4-9 | 868-873 | Examples 11.2 a 11.5 (ubicar y cuadrante), puntos en los ejes y el **origen** (pp. 871-872), Examples 11.6 y 11.7 (leer coordenadas) |
| **Ecuación lineal en dos variables** | 11 | 875 | 3x + 5 = 17 → x = 4 (una variable); cuadro "Linear Equation": Ax + By = C con A y B no ambos cero; x + 4y = 8; y = −5x + 1 reescrita como 5x + y = 1; cuadro "Solution to a Linear Equation in Two Variables"; Example 11.8 ¿cuáles de (0, 2), (2, −4), (−4, 3) satisfacen x + 4y = 8? |
| Tablas de soluciones | 12-18 | 876-882 | Examples 11.9 a 11.14 (completar tablas, elegir x y despejar y) |
| Gráfica de una ecuación lineal | 24 | 888 | "Graph of a Linear Equation"; Example 11.15 |
| **Graficar con tres puntos** | 27 | 891 | Figure 11.10 recta por (−2, −3), (0, 1), (1, 3); HOW TO de 3 pasos; por qué tres puntos y no dos (Figure 11.11: si uno está mal, no quedan alineados); Example 11.16 y = −3x con (0, 0), (1, −3), (−2, 6) |
| Rectas verticales y horizontales | 33-36 | 897-900 | Figure 11.12 x = −3; cuadro "Vertical Line" x = a pasa por (a, 0); Example 11.20 x = 2 (tabla con x siempre 2); horizontal y = b (p. 899), Examples 11.21 y 11.22 |
| **Interceptos** | 42-46 | 906-910 | Example 11.23 (leer interceptos); Example 11.24 2x + y = 6 → (3, 0) y (0, 6) (Figure 11.16); Example 11.25 4x − 3y = 12 (ver errata) |
| Graficar con interceptos | 47-51 | 911-915 | Examples 11.26 a 11.28; Example 11.29 elegir el método más conveniente |
| **Pendiente: rise over run** | 57 | 921 | geoplano Figure 11.21 (sube 2, avanza 3); cuadro "Slope of a line": m = rise/run (rise = cambio vertical, run = horizontal); m = 2/3; contar la subida primero (negativa si baja), el avance siempre a la derecha; Example 11.30 |
| Pendiente desde la gráfica | 61-66 | 925-930 | Examples 11.34 a 11.36 (marcar dos puntos y dibujar el triángulo) |
| Horizontal: pendiente 0 | 67 | 931 | Figure 11.24 y = 4 con (0, 4) y (3, 4): rise 0, run 3, m = 0; cuadro "Slope of a Horizontal Line"; Figure 11.25 x = 3 con (3, 0) y (3, 2): rise 2, run 0, m = 2/0 |
| Vertical: indefinida; subíndices | 68 | 932 | "no se puede dividir entre 0": pendiente indefinida; cuadro "Slope of a Vertical Line"; Example 11.37 x = 8 (indefinida), y = −5 (0); **"Quick Guide to the Slopes of Lines"** (positiva, negativa, cero, indefinida, con dibujos); notación (x₁, y₁), (x₂, y₂); puntos (2, 3) y (7, 6) |
| **Fórmula de la pendiente** | 69 | 933 | Figure 11.26: rise = y₂ − y₁ = 6 − 3 = 3, run = x₂ − x₁ = 7 − 2 = 5, m = 3/5; derivación paso a paso desde rise/run; cuadro "Slope Formula" m = (y₂ − y₁)/(x₂ − x₁); "y del segundo menos y del primero, sobre x del segundo menos x del primero" |
| Usar la fórmula | 70 | 934 | Example 11.38 entre (1, 2) y (4, 5): m = 3/3 = 1, confirmado contando en la gráfica; luego se intercambian los puntos y sale lo mismo |
| Orden de los puntos; graficar con punto y pendiente | 71-72 | 935-936 | Example 11.39 (pendiente −7/5); Example 11.40 recta por (1, −1) con m = 3/4: rise 3, run 4 |
| Intercepto y pendiente; aplicaciones | 73-76 | 937-940 | Example 11.41 (intercepto en y y pendiente); Example 11.42; Example 11.43 pendiente de un techo; Example 11.44 tubería que baja 1/4 de pulgada por pie |
| Key Concepts | 82-83 | 946-947 | resumen del capítulo |

## Notas de otros archivos (fuera del alcance, por si sirven)

- **`prealg9`** (cap. 9, impresa = PDF + 650): triángulos semejantes con razones entre lados correspondientes (Example 9.21, PDF 37 = p. 687,
  aplicación de proporciones); el teorema de Pitágoras empieza en PDF 38 = p. 688 y sus ejemplos (9.22 a 9.24, PDF 39-41 = pp. 689-691) usan raíces cuadradas.
- **`prealg12`** (impresa = PDF + 960): Apéndice B "Powers and Roots Tables", Table B1 en PDF 1-6 = pp. 961-966, con columnas n, n², √n, n³ y ∛n
  (por ejemplo √2 = 1.414214, ∛2 = 1.259921). Es el único lugar donde aparece la raíz cúbica. Le siguen el Apéndice C (fórmulas geométricas, pp. 967-968) y el Answer Key.

---

## Erratas e inconsistencias (verificadas)

1. **`prealg5` PDF 9, p. 375, Example 5.5.** Pide ubicar 0.4 y el texto lo hace bien, pero la figura de la solución marca **dos** puntos:
   el de 0.4 (sin etiqueta) y otro rotulado "0.04" casi pegado al 0.0 (en una recta graduada en décimas, 0.04 ni siquiera cae en una marca).
   La figura parece reciclada de la comparación 0.04 vs 0.40 de la página siguiente (p. 376), donde sí corresponde. Comprobado con zoom.
2. **`prealg5` PDF 24, p. 390, Example 5.18 a).** Pide multiplicar 5.63 por 10. La primera fila de la solución dice "56.3(10)" en vez de
   "5.63(10)"; las filas siguientes sí parten de 5.63 y llegan a 56.3 (correcto: 5.63 × 10 = 56.3). Las partes b) y c) arrancan bien ("5.63(100)").
3. **`prealg6` PDF 19, p. 485, Example 6.17.** "6.5 % of what number is $1.17?" La solución dice "Let b = the number" y escribe 0.065 · b = 1.17,
   pero en la fila siguiente divide "0.065n / 0.065" y concluye "n = 18": la variable cambia de b a n a mitad de camino. El resultado es correcto
   (1.17 / 0.065 = 18).
4. **`prealg10` PDF 16, p. 794, Example 10.19.** Los dos incisos del enunciado están rotulados ⓐ: "ⓐ (x⁵)⁷ ⓐ (3⁶)⁸"; el segundo debería ser ⓑ
   (en la solución sí aparecen ⓐ y ⓑ). Resultados correctos: x³⁵ y 3⁴⁸.
5. **`prealg11` PDF 46, p. 910, Example 11.25.** Para 4x − 3y = 12 calcula bien "The x-intercept is (3, 0)" y "The y-intercept is (0, −4)",
   pero la conclusión dice "The intercepts are the points **(−3, 0)** and (0, −4)". Lo correcto es (3, 0): 4·3 − 3·0 = 12, mientras que 4·(−3) = −12.
   Comprobado con zoom.

Revisadas y correctas (por si alguien duda): 2.11 da 13, 2.12 da 10, 3.11 da 17, 3.51 da −48, 3.54 da 9, 4.63 da 36, 4.64 da 120,
4.73 a) da −1/12, 5.17 da 0.00135, 5.30 da 1.95̄4̄, 5.36 da 10.79 y 3.16, 2.236067978² = 5.000000002 (p. 450), √17 = 4.123105626,
6.12 da 71.4 %, 6.23 da 38.5 %, 6.24 da 1.9 % (0.07/3.71 = 0.01887), 6.41 (112 ≠ 108; 262.5 = 262.5), 8.29 y 8.31 con comprobación,
10.78 da 0.08, 10.79 da 300,000, 11.38 da 1.

## Lo que el libro NO trae (y uno esperaría)

- **Sistema binario y bases de numeración: no aparecen en ninguna parte.** Se buscó en los 13 archivos (texto completo, incluidos preliminares,
  apéndices e índice) "binary", "base two/2/eight/sixteen", "hexadecimal", "numeration", "Roman numeral", "Mayan", "Babylon": cero resultados.
  Lo único cercano es el sistema de valor posicional en base 10: los bloques "base-10" (`prealg1` PDF 2-3, pp. 8-9, Figures 1.4 y 1.5) y la
  frase "our number system is based on powers of 10" (`prealg5` PDF 2, p. 368; `prealg10` PDF 60, p. 838). Sirve como punto de partida
  ("esto es base 10; en base 2 cada lugar vale el doble del de la derecha en vez de diez veces"), pero el libro no da el paso.
- El orden de operaciones no está en el cap. 1: está en 2.1 (`prealg2` PDF 11-16). El libro no nombra BODMAS ni discute la ambigüedad
  de expresiones tipo 6 ÷ 2(1 + 2); sí insiste en que multiplicación y división tienen la misma prioridad y van de izquierda a derecha.
  Los otros símbolos de agrupación se agregan después: barras de valor absoluto (`prealg3` PDF 9, p. 179), raya de fracción (`prealg4` PDF 46, p. 298)
  y signo radical (`prealg5` PDF 82, p. 448).
- Los exponentes aparecen en 2.1 (base, exponente, potencias de enteros positivos); las leyes de los exponentes, el exponente cero y el negativo
  recién en el cap. 10. No hay exponentes fraccionarios ni raíces n-ésimas en el texto (la raíz cúbica solo en la tabla del Apéndice B).
- No hay "regla de tres" con ese nombre: es la sección 6.5 de proporciones (productos cruzados y Example 6.45).
- No hay forma pendiente-ordenada y = mx + b ni punto-pendiente como fórmula: solo pendiente (rise/run y fórmula), interceptos, y graficar con un punto y la pendiente.
  Eso lo cubre el mapa de Elementary Algebra.
- No se demuestra que √2 o √5 sean irracionales; se afirma a partir del decimal que "no termina ni se repite".
- No se usa la palabra "naturales": counting numbers (desde 1) y whole numbers (desde 0).

## Búsqueda rápida por concepto

| Concepto | Mejores páginas |
|---|---|
| **Tipos de números** | `prealg1` PDF 2 (p. 8) counting y whole; `prealg3` PDF 7 (p. 177) enteros; `prealg4` PDF 2 (p. 254) fracciones; `prealg7` PDF 2-6 (pp. 540-544): racionales, irracionales, Figure 7.2 de conjuntos anidados y la tabla del Example 7.4 |
| **Recta numérica** | `prealg1` PDF 2 (p. 8) Figure 1.2; `prealg3` PDF 3-4 (pp. 173-174) Figures 3.6 y 3.10, orden; `prealg4` PDF 15-16 (pp. 267-268) fracciones en la recta; `prealg5` PDF 9-10 (pp. 375-376) decimales y negativos |
| **Opuestos** | `prealg3` PDF 5-7 (pp. 175-177): definición, Figure 3.13, los tres significados del menos, −(−6) |
| **Valor absoluto** | `prealg3` PDF 8-12 (pp. 178-182): distancia al cero, Figure 3.16, Examples 3.6 a 3.11 |
| **Reglas de signos** | `prealg3` PDF 22 (p. 192) Table 3.1 suma; PDF 38 (p. 208) restar = sumar el opuesto; PDF 51 y 53 (pp. 221, 223) producto y cociente |
| **Fracciones: significado y equivalencia** | `prealg4` PDF 2 (p. 254), PDF 5 (p. 257) tiras y propiedad del uno, PDF 12-15 (pp. 264-267) equivalentes, PDF 23 (p. 275) simplificar |
| **Operar fracciones** | `prealg4` PDF 27 (p. 279) multiplicar, PDF 30 (p. 282) recíproco, PDF 34 (p. 286) dividir, PDF 52 (p. 304) sumar, PDF 61-64 (pp. 313-316) MCD, PDF 69 (p. 321) resumen |
| **Decimales** | `prealg5` PDF 2-3 (pp. 368-369) valor posicional, PDF 10-11 (pp. 376-377) ordenar, PDF 23-24 (pp. 389-390) por potencias de 10 |
| **Convertir fracción, decimal y porcentaje** | decimal → fracción `prealg5` PDF 7-9 (pp. 373-375); fracción → decimal y periódicos `prealg5` PDF 36-38 (pp. 402-404); porcentaje → fracción y decimal `prealg6` PDF 3-6 (pp. 469-472, Table 6.1); decimal y fracción → porcentaje `prealg6` PDF 8-12 (pp. 474-478, Table 6.2 y Figure 6.5) |
| **Porcentajes en uso** | `prealg6` PDF 17-20 (pp. 483-486) ecuaciones de porcentaje; PDF 23-25 (pp. 489-491) aumento y disminución porcentual |
| **Orden de operaciones** | `prealg2` PDF 11-16 (pp. 105-110): regla, PEMDAS, Examples 2.8 a 2.12; trampas: `prealg3` PDF 56 (p. 226) (−2)⁴ vs −2⁴, `prealg2` PDF 23 (p. 117) 2x² vs (2x)², `prealg5` PDF 82 (p. 448) √25 + √144 vs √(25 + 144); con decimales `prealg5` PDF 40-41 (pp. 406-407) |
| **Potencias y exponentes** | `prealg2` PDF 9-11 (pp. 103-105) notación; `prealg10` PDF 13-18 (pp. 791-796) leyes; PDF 40 (p. 818) exponente cero; PDF 53-54 y 57 (pp. 831-832, 835) exponente negativo |
| **Raíz cuadrada** | `prealg5` PDF 79-84 (pp. 445-450): cuadrados, dos raíces y raíz principal, raíz de un negativo, estimar, calculadora; `prealg7` PDF 5 (p. 543) √44 irracional; tabla `prealg12` PDF 1 (p. 961) |
| **Razones y tasas** | `prealg5` PDF 67-74 (pp. 433-440): razón (misma unidad), razones con decimales, tasa (distinta unidad), tasa y precio unitario |
| **Proporciones / regla de tres** | `prealg6` PDF 50-56 (pp. 516-522): definición, productos cruzados, resolver, Example 6.45; porcentaje como proporción PDF 58-59 (pp. 524-525) |
| **Notación científica** | `prealg10` PDF 60-65 (pp. 838-843): definición, HOW TO de ida y de vuelta, multiplicar y dividir; base 10 en `prealg5` PDF 23-24 (pp. 389-390) |
| **Variables y expresiones** | `prealg2` PDF 2 (p. 96) variable y constante; PDF 7-8 (pp. 101-102) expresión vs ecuación; PDF 19-23 (pp. 113-117) evaluar; PDF 23-26 (pp. 117-120) términos, coeficientes, semejantes |
| **Propiedades de los reales** | `prealg1` PDF 20-21, 47-49, 65-66 (versión con enteros positivos); `prealg7` PDF 8-11 (pp. 546-549) conmutativa y asociativa, PDF 19-20 (pp. 557-558) distributiva, PDF 30-35 (pp. 568-573) identidad, inversos, cero, PDF 37 (p. 575) Table 7.1 |
| **División entre cero** | `prealg1` PDF 66 (p. 72); `prealg4` PDF 2 (p. 254) b ≠ 0; `prealg4` PDF 30 (p. 282) el 0 no tiene recíproco; `prealg7` PDF 33-34 (pp. 571-572) |
| **Ecuaciones lineales** | `prealg8` PDF 2-3 (pp. 602-603) solución y balanza; PDF 15 (p. 615) dividir; PDF 29-30 (pp. 629-630) estrategia general; PDF 38 y 43 (pp. 638, 643) limpiar fracciones y decimales |
| **La recta en el plano** | `prealg11` PDF 3 (p. 867) plano y pares ordenados; PDF 11 (p. 875) Ax + By = C; PDF 27 (p. 891) graficar con tres puntos; PDF 45-46 (pp. 909-910) interceptos; PDF 57 y 67-70 (pp. 921, 931-934) pendiente y fórmula |
| **Sistema binario / bases** | no está en el libro; lo más cercano: base 10 en `prealg1` PDF 2-3 (pp. 8-9) |

> Nota (2026-11-12): `~/brain/03-Matematicas` se reorganizó. Los libros enteros están en `03-Matematicas/Libros/` y los archivos por unidad quedaron directamente en la carpeta del nivel (sin la subcarpeta del libro). Las rutas vigentes están en `biblioteca/fuentes.js`; las páginas no cambian.
