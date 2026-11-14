# Mapa de citas: Africk, "Elementary College Geometry" (CUNY, edición LibreTexts), unidades 01 a 08

Carpeta: `/Users/franciscocastillo/brain/03-Matematicas/04-Geometria/` (hay también `INDICE.md` y `fuentes.md`; el PDF completo original de 367 páginas se cita en el índice como `Libros/africk-elementary-college-geometry.pdf`, aquí solo existen los trozos).
Libro de Henry Africk (New York City College of Technology, CUNY), licencia CC BY-NC-SA 4.0, copia de LibreTexts (math.libretexts.org). Geometría plana de nivel preuniversitario: pocos teoremas, pruebas cortas, énfasis en resolver numéricamente. Solo trigonometría del triángulo rectángulo. Las figuras son dibujos a mano (imágenes) y casi todos los enunciados de problemas son solo figura.

## Archivos y ids de la columna de fuente

| id | Archivo | Págs. PDF | Contenido (secciones impresas) |
|---|---|---|---|
| `geom1` | `Unidad 01 - Lines, Angles, and Triangles.pdf` | 59 | licencia, prefacio, 1.1 a 1.6 |
| `geom2` | `Unidad 02 - Congruent Triangles.pdf` | 53 | 2.1 a 2.7 (hasta 2.7.9) |
| `geom3` | `Unidad 03 - Quadrilaterals.pdf` | 31 | cola de 2.7, 3.1, 3.2, 4.1 y la primera página de 4.2 |
| `geom4` | `Unidad 04 - Similar Triangles.pdf` | 49 | 4.2 (desde 4.2.2), 4.3, 4.4, 4.5 (hasta 4.5.13) |
| `geom5` | `Unidad 05 - Trigonometry and Right Triangles.pdf` | 39 | cola de 4.5, 4.6, 5.1, 5.2, 5.3 y la primera página de 6.1 |
| `geom6` | `Unidad 06 - Area and Perimeter.pdf` | 43 | 6.1 (desde 6.1.2), 6.2 a 6.5, y 7.1.1 a 7.1.6 |
| `geom7` | `Unidad 07 - Regular Polygons and Circles.pdf` | 57 | 7.1 (desde 7.1.7), 7.2 a 7.5, 7.6.1 y 7.6.2 |
| `geom8` | `Unidad 08 - Apendice y Formulas.pdf` | 30 | cola de 7.6 (7.6.3 a 7.6.9), índice, apéndice, bibliografía, tabla trigonométrica, respuestas, símbolos, licencia |

(`00 - Portada y Preliminares.pdf`, 6 páginas, no se mapea.) Los cortes por unidad son arbitrarios (cortan secciones a la mitad), así que el contenido de un capítulo puede estar en dos archivos. Cuando cite una página hay que usar el id del archivo donde está.

## Relación página del PDF / página impresa (por archivo)

No hay un desfase constante. Cada página lleva al pie un número de LibreTexts de la forma `sección.página` (por ejemplo `4.4.5` = sección 4.4, página 5 de esa sección); el pie de cada página se leyó con `pdftotext` en las 8 unidades. Cada sección empieza en la página 1 de su propio conteo. Las portadas de capítulo ("CHAPTER OVERVIEW") llevan el número impreso `1` o ninguno. **`data-pag` = página del archivo PDF; `data-pimp` = el número `s.p.` del pie.** Verificado en todas las páginas (no solo en ejemplos). Tabla de conversión, con PDF `n` = página del archivo:

- **geom1**: PDF 1 = licencia (1), 2 = prefacio (1), 3 = portada cap. 1. PDF 4 a 8 = 1.1.1 a 1.1.5; 9 a 18 = 1.2.1 a 1.2.10; 19 a 28 = 1.3.1 a 1.3.10; 29 a 41 = 1.4.1 a 1.4.13; 42 a 51 = 1.5.1 a 1.5.10; 52 a 59 = 1.6.1 a 1.6.8. (Dentro de cada sección: impresa = `sección.(PDF − PDF de inicio + 1)`.)
- **geom2**: PDF 1 = portada cap. 2. PDF 2 a 6 = 2.1.1 a 2.1.5; 7 a 13 = 2.2.1 a 2.2.7; 14 a 21 = 2.3.1 a 2.3.8; 22 a 27 = 2.4.1 a 2.4.6; 28 a 37 = 2.5.1 a 2.5.10; 38 a 44 = 2.6.1 a 2.6.7; 45 a 53 = 2.7.1 a 2.7.9.
- **geom3**: PDF 1 = 2.7.10; 2 = portada cap. 3; 3 a 13 = 3.1.1 a 3.1.11; 14 a 26 = 3.2.1 a 3.2.13; 27 = portada cap. 4; 28 a 30 = 4.1.1 a 4.1.3; 31 = 4.2.1.
- **geom4**: PDF 1 a 14 = 4.2.2 a 4.2.15; 15 a 19 = 4.3.1 a 4.3.5; 20 a 36 = 4.4.1 a 4.4.17; 37 a 49 = 4.5.1 a 4.5.13.
- **geom5**: PDF 1 y 2 = 4.5.14 y 4.5.15; 3 a 6 = 4.6.1 a 4.6.4; 7 = portada cap. 5; 8 a 17 = 5.1.1 a 5.1.10; 18 a 33 = 5.2.1 a 5.2.16; 34 a 37 = 5.3.1 a 5.3.4; 38 = portada cap. 6; 39 = 6.1.1.
- **geom6**: PDF 1 a 8 = 6.1.2 a 6.1.9; 9 a 16 = 6.2.1 a 6.2.8; 17 a 25 = 6.3.1 a 6.3.9; 26 a 30 = 6.4.1 a 6.4.5; 31 a 36 = 6.5.1 a 6.5.6; 37 = portada cap. 7; 38 a 43 = 7.1.1 a 7.1.6.
- **geom7**: PDF 1 a 3 = 7.1.7 a 7.1.9; 4 a 14 = 7.2.1 a 7.2.11; 15 a 23 = 7.3.1 a 7.3.9; 24 a 45 = 7.4.1 a 7.4.22; 46 a 55 = 7.5.1 a 7.5.10; 56 y 57 = 7.6.1 y 7.6.2.
- **geom8**: PDF 1 a 7 = 7.6.3 a 7.6.9; 8 y 9 = Índice (1, 2); 10 y 11 = Apéndice (1, 2); 12 = Bibliografía (1); 13 a 15 = Tabla trigonométrica (1 a 3); 16 a 28 = Respuestas a los problemas impares (1 a 13, es decir impresa = PDF − 15); 29 = Lista de símbolos (1); 30 = Licencia (1).

Texto: los PDF tienen capa de texto, pero las fracciones, radicales y símbolos de arco salen desordenados en `pdftotext`; se verificaron en la página renderizada las de la prueba del teorema de Pitágoras (geom4 PDF 24), la tabla trigonométrica (geom8 PDF 15), la caja del postulado de las paralelas (geom1 PDF 29), el dibujo de la prueba por áreas (geom4 PDF 28), el ejemplo de la longitud de arco (geom7 PDF 48) y el de los triángulos 30-60-90 (geom4 PDF 37 y geom5 PDF 21). Los problemas de cada sección casi nunca se pueden leer en texto (solo traen un número; el enunciado es una figura).

## Resumen de teoremas y su numeración (tal como los numera el libro)

1.4.1 Z (alternos internos) · 1.4.2 F (correspondientes) · 1.4.3 C (interiores del mismo lado suplementarios) · 1.5.1 suma de ángulos de un triángulo = 180 · 1.5.2 ángulo exterior · 1.5.3 dos ángulos iguales implican el tercero · 1.6.1 desigualdad triangular · 2.2.1 LAL · 2.3.1 ALA · 2.3.2 AAL · 2.5.1 a 2.5.4 isósceles y equilátero · 2.6.1 LLL · 2.7.1 hipotenusa-cateto · 3.1.1 a 3.1.3 paralelogramo · 3.2.1 a 3.2.5 rombo, rectángulo, trapecio · 4.1.1, 4.1.2 proporciones · 4.2.1 AA · 4.2.2 lados proporcionales · 4.3.1 transversales a tres paralelas · 4.4.1 Pitágoras · 4.4.2 su recíproco · 4.5.1 triángulo 30-60-90 · 4.5.2 triángulo 45-45-90 · 4.6.1, 4.6.2 distancia punto-recta · 5.1.1 razones iguales para ángulos iguales · 6.1.1 a 6.5.1 áreas · 7.1.1 a 7.1.5 polígonos regulares · 7.2.1 a 7.2.4 cuerdas · 7.3.1 a 7.3.3 tangentes · 7.4.1 a 7.4.6 ángulos y arcos · 7.5.1 circunferencia · 7.6.1 área del círculo.

## Tabla de contenidos página por página

Columnas: tema | archivo (id) | PDF | impresa | qué hay exactamente. "Ej." = ejemplo con su número tal como está impreso.

### Unidad 01 (`geom1`): líneas, ángulos y triángulos

| Tema | id | PDF | Impresa | Qué hay |
|---|---|---|---|---|
| Prefacio | geom1 | 2 | 1 | para quién es, 45 horas, pruebas cortas e intuitivas, problemas en pares impares/pares |
| Cap. 1 temario | geom1 | 3 | 1 | lista de secciones 1.1 a 1.6 |
| Punto, recta, segmento, rayo | geom1 | 4 | 1.1.1 | origen de la palabra geometría; por dos puntos pasa una y solo una recta; notación de recta AB, segmento, rayo (Figura 1.1.1); distancia entre dos puntos = longitud del segmento; segmentos iguales (Figs. 1.1.2 y 1.1.3); Ej. 1.1.1 (hallar x con AB = CD, ecuación lineal, x = 3) |
| Punto medio | geom1 | 5 | 1.1.2 | definición (Fig. 1.1.4); nota de unidades omitidas; Ej. 1.1.2 (AB = 5(x − 3), BC = 9 − x, x = 4, AC = 10); empieza Ej. 1.1.3 |
| Colineales | geom1 | 6 | 1.1.3 | Ej. 1.1.3 con ecuación cuadrática (x² − 6 = 5x, se rechaza x = −1 porque la longitud es positiva, AB = 30); tres puntos colineales si y solo si AB + BC = AC (Figs. 1.1.5 y 1.1.6); empieza Ej. 1.1.4 |
| Nota histórica 1 | geom1 | 7 | 1.1.4 | Ej. 1.1.4 (x = 2); nota histórica: Egipto y Babilonia, Tales, Pitágoras, los Elementos de Euclides (axiomas/postulados); problemas 1 a 8 |
| Ángulo y transportador | geom1 | 9, 10 | 1.2.1, 1.2.2 | ángulo, lados, vértice, símbolo ∠, nombrar con tres letras (el vértice va en medio, Figs. 1.2.1 y 1.2.2); grado y transportador (Figs. 1.2.3 y 1.2.4); Ej. 1.2.1 (dibujar un ángulo de 40) |
| Bisectriz | geom1 | 11, 12 | 1.2.3, 1.2.4 | ángulos iguales, bisectriz (Figs. 1.2.5 y 1.2.6); Ej. 1.2.2 (x = 40 si AC biseca ∠BAD = 80); Ej. 1.2.3 (7x/2 = 3x + 5, x = 10) |
| Problemas de ángulos | geom1 | 13 a 18 | 1.2.5 a 1.2.10 | problemas 1 a 28 (nombrar, medir con transportador, dibujar, bisectrices); solo figuras |
| Clasificación de ángulos | geom1 | 19 | 1.3.1 | agudo, recto, obtuso, llano, cóncavo/reflejo (más de 180); un ángulo se puede medir de dos maneras, 240 o 120 (Fig. 1.3.2); perpendiculares (Fig. 1.3.3) |
| Mediatriz, complementarios | geom1 | 20, 21 | 1.3.2, 1.3.3 | mediatriz de un segmento (Fig. 1.3.4); complementarios (suman 90, Fig. 1.3.5); Ej. 1.3.1 (complemento de 40 es 50); Ej. 1.3.2 (x/2 + x = 90... se rechaza x = −10; en trigonometría los ángulos dirigidos pueden ser negativos) |
| Suplementarios | geom1 | 21, 22 | 1.3.3, 1.3.4 | suplementarios (suman 180, Fig. 1.3.6); Ej. 1.3.3 (suplemento de 40 es 140); Ej. 1.3.4 (4x − 20 + x = 180, x = 40) |
| Ángulos opuestos por el vértice | geom1 | 22 a 24 | 1.3.4 a 1.3.6 | Ej. 1.3.5 (x, y, z con un ángulo de 80); la prueba de que los ángulos opuestos por el vértice son iguales con suplementarios (Fig. 1.3.7, sin número de teorema); Ej. 1.3.5 repetido usando esa propiedad; Ej. 1.3.6 (10x² = 40, se aceptan x = 2 y x = −2 porque el ángulo es positivo, dos métodos) |
| Reflexión de la luz | geom1 | 24, 25 | 1.3.6, 1.3.7 | Ej. 1.3.7 (ángulo de incidencia = ángulo de reflexión; ∠CDE = 60 da 60) |
| Teoremas y postulados | geom1 | 25 | 1.3.7 | recuadro "Note on Theorems and Postulates": qué es un teorema, una prueba, un postulado/axioma |
| Problemas 1.3 | geom1 | 25 a 28 | 1.3.7 a 1.3.10 | complementos y suplementos, hallar x, y, z, ángulo de incidencia |
| Rectas paralelas, postulado | geom1 | 29 | 1.4.1 | paralelas (Figs. 1.4.1 y una segunda con el mismo número, rectas EF y GH que se cortan en P); postulado de las paralelas en la caja "Theorem 1.4.1: Parallel Postulate" (ver erratas): por un punto exterior pasa una y solo una paralela (Fig. 1.4.3); transversal (Fig. 1.4.4) |
| Teorema Z | geom1 | 30 | 1.4.2 | alternos internos forman una Z o una N (Fig. 1.4.5); **Th. 1.4.1 (Z)**: paralelas implican alternos internos iguales, y recíproco (Figs. 1.4.6 y 1.4.7); la prueba está en el apéndice |
| Ej. de Z; correspondientes | geom1 | 31 | 1.4.3 | Ej. 1.4.1 (x = 40, y = z = 140); correspondientes forman una F (Figs. 1.4.8 y 1.4.9) |
| Teorema F | geom1 | 32 | 1.4.4 | **Th. 1.4.2 (F)**; Ej. 1.4.2 (x = 110); todos los ángulos se pueden obtener de uno solo; prueba: F se sigue de Z; interiores del mismo lado forman una C (Fig. 1.4.11) |
| Teorema C | geom1 | 33 | 1.4.5 | **Th. 1.4.3 (C)** suplementarios; Ej. 1.4.3 (x + 2x + 30 = 180, x = 50, ángulos 50 y 130) |
| Ejemplos de paralelas | geom1 | 34, 35 | 1.4.6, 1.4.7 | Ej. 1.4.4 (3x + 40 y 2x + 50 suman 180, x = 18, ángulos 94 y 86); Ej. 1.4.5 (listar alternos internos de dos pares de paralelas, con Z/N, Fig. 1.4.12); Ej. 1.4.6 (telescopio con espejo, x + 70 + x = 180, x = 55) |
| Resumen y nota histórica | geom1 | 36, 37 | 1.4.8, 1.4.9 | SUMMARY de Z, F y C (ver erratas); nota: postulado de las paralelas = quinto de Euclides, Lobachevsky 1826, Riemann 1854, geometrías no euclidianas, Einstein (Fig. 1.4.13) |
| Problemas 1.4 | geom1 | 37 a 41 | 1.4.9 a 1.4.13 | 28 problemas (telescopio, periscopio con ∠ECF = 90) |
| Triángulo y suma de ángulos | geom1 | 42 | 1.5.1 | definición de triángulo, lados, vértices, ángulos (Fig. 1.5.1); los polígonos de más lados se dividen en triángulos (Fig. 1.5.2); **Th. 1.5.1**: la suma de los ángulos de un triángulo es 180 |
| Prueba de la suma de ángulos | geom1 | 43 | 1.5.2 | Ej. 1.5.1 (40 + 60 + C = 180, C = 80); prueba trazando por C la paralela DE a AB (Fig. 1.5.3), usa el postulado de las paralelas y los alternos internos; un transportador daría 179 o 182, la prueba asegura 180 exacto; Ej. 1.5.2 (2x + 3x + 4x = 180, x = 20) |
| Ángulo exterior | geom1 | 44, 45 | 1.5.3, 1.5.4 | Ej. 1.5.3 (y = 30, x = 150); definición de ángulo exterior y de interiores remotos (Fig. 1.5.4); **Th. 1.5.2**: exterior = suma de los dos remotos; prueba en dos columnas (enunciado/razón) |
| Ejemplo con fracciones | geom1 | 45, 46 | 1.5.4, 1.5.5 | Ej. 1.5.4 (ecuación con fracciones, mcd 15, x = 30) |
| Suma de ángulos de polígonos | geom1 | 46, 47 | 1.5.5, 1.5.6 | Ej. 1.5.5 (cuadrilátero = 2 triángulos = 360); Ej. 1.5.6 (pentágono = 3 triángulos = 540); sin fórmula general (n − 2)·180: solo pide hexágono y octágono en los problemas 21 y 22, con respuesta 720 para el hexágono (p. 17 de las respuestas) |
| Tercer ángulo | geom1 | 47 | 1.5.6 | **Th. 1.5.3**: si dos ángulos de un triángulo son iguales a dos de otro, los terceros son iguales; prueba de una línea |
| Nota histórica de Gauss | geom1 | 47, 48 | 1.5.6, 1.5.7 | Gauss midió el triángulo entre tres montañas: suma 14.85 segundos más que 180; Lobachevsky (menos de 180), Riemann (más de 180) |
| Problemas 1.5 | geom1 | 48 a 51 | 1.5.7 a 1.5.10 | 26 problemas de ángulos de triángulos |
| Clasificación de triángulos | geom1 | 52 | 1.6.1 | por lados: equilátero, isósceles, escaleno (Fig. 1.6.1); por ángulos: acutángulo, obtusángulo, equiangular (cada ángulo 60, se probará en 2.5), rectángulo con catetos e hipotenusa (Figs. 1.6.2 y 1.6.3) |
| Ejemplos de isósceles/equilátero | geom1 | 52 a 54 | 1.6.1 a 1.6.3 | Ej. 1.6.1 (x + 1/2 = 2x − 1/2, x = 1); Ej. 1.6.2 (x/2 + 5 = x/3 + 7, x = 12) |
| Altura, mediana, bisectriz | geom1 | 54, 55 | 1.6.3, 1.6.4 | altura (Fig. 1.6.4, puede caer fuera del triángulo), mediana (Fig. 1.6.5), bisectriz (Fig. 1.6.6) |
| Ejemplos | geom1 | 55, 56 | 1.6.4, 1.6.5 | Ej. 1.6.3 (mediana, x² /2 = 10x, x = 10, AB = 200, se rechaza x = 0); Ej. 1.6.4 (bisectriz, x² + x = 6x, x = 5, ∠ACB = 60) |
| Perímetro y desigualdad triangular | geom1 | 56, 57 | 1.6.5, 1.6.6 | perímetro de un triángulo, ejemplo 3-4-5 da 12 (Fig. 1.6.7); **Th. 1.6.1**: la suma de dos lados es mayor que el tercero (se justifica con "la distancia más corta es la recta"); Ej. 1.6.5 (perímetro en términos de x) |
| Problemas 1.6 | geom1 | 58, 59 | 1.6.7, 1.6.8 | 12 problemas |

### Unidad 02 (`geom2`): triángulos congruentes

| Tema | id | PDF | Impresa | Qué hay |
|---|---|---|---|---|
| Enunciado de congruencia | geom2 | 2, 3 | 2.1.1, 2.1.2 | congruentes = se pueden superponer; símbolo ≅; el orden de las letras da la correspondencia (Fig. 2.1.1); Ej. 2.1.1 (listar partes correspondientes, x = 6, y = 8) |
| Escribir congruencias | geom2 | 3, 4 | 2.1.2, 2.1.3 | Ej. 2.1.2 y 2.1.3 (a partir de marcas de igualdad en la figura, △ACD ≅ △BCD) |
| Problemas 2.1 | geom2 | 4 a 6 | 2.1.3 a 2.1.5 | problemas 1 a 10 |
| Construcción y LAL | geom2 | 7 | 2.2.1 | dibujar un triángulo con dos lados y el ángulo incluido (Figs. 2.2.1 y 2.2.2); ángulo incluido; **Th. 2.2.1 (SAS)** |
| Ejemplos de LAL | geom2 | 7 a 11 | 2.2.1 a 2.2.5 | Ej. 2.2.1 (nombrar el ángulo incluido); Ej. 2.2.2 (△ABD ≅ △CDB, lado común, x = 10); Ej. 2.2.3 (opuestos por el vértice, sistema 2x + y = 45, x = 20, y = 5); Ej. 2.2.4 (medir la distancia AB a través de un estanque: AC = 80, BC = 100, DE = 110, AB = 110) |
| Nota histórica LAL | geom2 | 11 | 2.2.5 | SAS es la Proposición 4 de Euclides; Russell y Hilbert lo toman como postulado (movimiento de figuras) |
| Problemas 2.2 | geom2 | 11 a 13 | 2.2.5 a 2.2.7 | problemas 1 a 26 (dibujar y medir, incluido, congruencias) |
| ALA | geom2 | 14 | 2.3.1 | construcción con dos ángulos y el lado incluido (Fig. 2.3.1); **Th. 2.3.1 (ASA)** |
| Ejemplos de ALA | geom2 | 14, 15 | 2.3.1, 2.3.2 | Ej. 2.3.1 (lado incluido); Ej. 2.3.2 (△ABC ≅ △CDA, AC = CA por identidad, x = 12, y = 11) |
| AAL | geom2 | 15, 16 | 2.3.2, 2.3.3 | lado no incluido (Fig. 2.3.3); **Th. 2.3.2 (AAS)** con prueba (tercer ángulo igual y ALA); ver erratas de la cita interna |
| Ejemplos de AAL | geom2 | 16 a 18 | 2.3.3 a 2.3.5 | Ej. 2.3.3 (x = 10, y = 6); Ej. 2.3.4 (sistema de dos ecuaciones, x = 2, y = 1); Ej. 2.3.5 (barco visto desde una torre, 3 millas) |
| Nota histórica ALA | geom2 | 18 | 2.3.5 | Tales midió barcos así; anécdota de un oficial de Napoleón y el ancho de un río |
| Problemas 2.3 | geom2 | 18 a 21 | 2.3.5 a 2.3.8 | problemas 1 a 26 (barcos, río, estanque) |
| Probar igualdades | geom2 | 22, 23 | 2.4.1, 2.4.2 | prueba en dos columnas; Ej. 2.4.1 (AB ∥ CD y AB = CD implica AD = BC); lista de razones válidas para lados y ángulos (dato, identidad, alternos, correspondientes, opuestos por el vértice); Ej. 2.4.2 |
| Problemas 2.4 | geom2 | 23 a 27 | 2.4.2 a 2.4.6 | problemas 1 a 14 de demostración |
| Isósceles | geom2 | 28, 29 | 2.5.1, 2.5.2 | **Th. 2.5.1**: lados iguales implican ángulos opuestos iguales (ángulos de la base, Fig. 2.5.1); Ej. 2.5.1; prueba con la bisectriz CD (Fig. 2.5.2) y LAL |
| Ejemplos | geom2 | 29, 30 | 2.5.2, 2.5.3 | Ej. 2.5.2 (4x + 5, 4x + 5, 2x − 10, x = 18, ángulos 77, 77, 26) |
| Recíproco | geom2 | 30, 31 | 2.5.3, 2.5.4 | **Th. 2.5.2** (recíproco) con prueba por AAL; Ej. 2.5.3 (x = 9); **Th. 2.5.3**: equilátero es equiangular (60 cada ángulo); **Th. 2.5.4**: equiangular es equilátero |
| Equilátero | geom2 | 31 a 33 | 2.5.4 a 2.5.6 | Ej. 2.5.4 (sistema, x = 2, y = 3, AC = 11); nota histórica: la prueba de Euclides ("puente de los tontos", Fig. 2.5.9) |
| Problemas 2.5 | geom2 | 33 a 37 | 2.5.6 a 2.5.10 | problemas 1 a 14 |
| LLL | geom2 | 38 | 2.6.1 | **Th. 2.6.1 (SSS)** (Fig. 2.6.1); Ej. 2.6.1 (correspondencia por el lado mayor, x = 44, y = 57, z = 79) |
| Prueba de LLL | geom2 | 38, 39 | 2.6.1, 2.6.2 | prueba pegando los triángulos por el lado mayor y usando el isósceles (Fig. 2.6.2); Ej. 2.6.2 |
| Arriostramiento triangular | geom2 | 40 | 2.6.3 | aplicación: un cuadrilátero se deforma, con una diagonal (viga) ya no (Figs. 2.6.3 y 2.6.4); el triángulo es una figura rígida |
| Problemas 2.6 | geom2 | 40 a 44 | 2.6.3 a 2.6.7 | problemas 1 a 14 |
| Hipotenusa-cateto | geom2 | 45, 46 | 2.7.1, 2.7.2 | **Th. 2.7.1 (Hyp-Leg)** solo para rectángulos (Fig. 2.7.1); Ej. 2.7.1 (x = 44, y = 46); prueba con AAL (Fig. 2.7.2); Ej. 2.7.2 |
| Casos que no valen | geom2 | 46 a 48 | 2.7.2 a 2.7.4 | contraejemplo LLA/SSA (Fig. 2.7.3); AAA no basta, da triángulos semejantes (Fig. 2.7.4); Ej. 2.7.3 (no se puede probar congruencia); **resumen**: válidos LAL, ALA, AAL, LLL, hipotenusa-cateto; inválidos LLA y AAA |
| Problemas 2.7 | geom2 | 48 a 53 | 2.7.4 a 2.7.9 | problemas 1 a 22; los 17 a 22 son pruebas |

### Unidad 03 (`geom3`): cuadriláteros y proporciones

| Tema | id | PDF | Impresa | Qué hay |
|---|---|---|---|---|
| Cola de 2.7 | geom3 | 1 | 2.7.10 | solo el pie de licencia |
| Polígonos y paralelogramo | geom3 | 3 | 3.1.1 | polígono, lados, vértices, nombres (triángulo, cuadrilátero, pentágono, hexágono, octágono, decágono); paralelogramo (Fig. 3.1.3); diagonal; prueba en dos columnas de que la diagonal AC lo parte en dos triángulos congruentes; **Th. 3.1.1**: lados opuestos y ángulos opuestos iguales |
| Ejemplos | geom3 | 4, 5 | 3.1.2, 3.1.3 | Ej. 3.1.1 (x = 120, y = 60, r = 15, s = 10); Ej. 3.1.2 (w = 115, x = z = 35, y = 30); Ej. 3.1.3 (ángulos sucesivos suplementarios) |
| Ángulos sucesivos | geom3 | 5, 6 | 3.1.3, 3.1.4 | **Th. 3.1.2**: ángulos sucesivos suplementarios (Fig. 3.1.6); Ej. 3.1.4 (x + 2x + 30 = 180, x = 50, ángulos 50, 130, 50, 130) |
| Diagonales | geom3 | 6, 7 | 3.1.4, 3.1.5 | prueba con △ABE ≅ △CDE (Fig. 3.1.7); **Th. 3.1.3**: las diagonales se bisecan (Fig. 3.1.8); Ej. 3.1.5 (x = 7, y = 9, AC = 18, BD = 14) |
| Más ejemplos | geom3 | 7, 8 | 3.1.5 a 3.1.6 | Ej. 3.1.6 (x = 3, y = 1, AC = 6, BD = 10); Ej. 3.1.7 (x = 9, y = 11, ángulos 50, 130) |
| Problemas 3.1 | geom3 | 8 a 13 | 3.1.7 a 3.1.11 | problemas 1 a 18 |
| Rombo | geom3 | 14, 15 | 3.2.1, 3.2.2 | rombo (Figs. 3.2.1 y 3.2.2); prueba con LLL de que las diagonales son perpendiculares y bisectrices; **Th. 3.2.1**; Ej. 3.2.1 (w = 40, x = 50, y = 40, z = 50, Fig. 3.2.4) |
| Rectángulo | geom3 | 15 a 17 | 3.2.2 a 3.2.4 | rectángulo (Fig. 3.2.5); **Th. 3.2.2**: un paralelogramo con un solo ángulo recto es rectángulo; Ej. 3.2.2; **Th. 3.2.3**: las diagonales de un rectángulo son iguales (prueba con LAL); Ej. 3.2.3 (x = y = z = 3, AC = BD = 6); Ej. 3.2.4 (x = y = 35, z = 110, Fig. 3.2.8) |
| Cuadrado y trapecio | geom3 | 18 | 3.2.5 | cuadrado = rectángulo con lados iguales = rombo; trapecio (dos y solo dos lados paralelos, bases y piernas); isósceles; **Th. 3.2.4**: ángulos de la base iguales; Ej. 3.2.5 (x = 55, y = z = 125) |
| Pruebas del trapecio | geom3 | 19, 20 | 3.2.6, 3.2.7 | prueba del 3.2.4 con la paralela DE a CB (Fig. 3.2.12); **Th. 3.2.5**: diagonales iguales; Ej. 3.2.6 (AC = 2/x y BD = 3 − x, x = 1 o x = 2) |
| Resumen y tabla | geom3 | 20 a 22 | 3.2.7 a 3.2.9 | definiciones de paralelogramo, rombo, rectángulo, cuadrado, trapecio, trapecio isósceles; tabla de propiedades (lados opuestos paralelos/iguales, ángulos opuestos, diagonales que se bisecan, iguales, perpendiculares, bisectrices, lados iguales, ángulos iguales) para paralelogramo, rombo, rectángulo, trapecio y trapecio isósceles (falta el cuadrado) |
| Problemas 3.2 | geom3 | 22 a 26 | 3.2.9 a 3.2.13 | problemas 1 a 20 |
| Cap. 4 temario | geom3 | 27 | 1 | secciones 4.1 a 4.6 |
| Proporciones | geom3 | 28 | 4.1.1 | proporción = igualdad de dos fracciones; extremos y medios (2/6 = 4/12, 2·12 = 6·4); **Th. 4.1.1**: a/b = c/d si y solo si ad = bc (ver erratas), con prueba por multiplicación por bd; **Th. 4.1.2**: se pueden intercambiar medios o extremos (cuatro formas equivalentes) |
| Multiplicación cruzada | geom3 | 29 | 4.1.2 | ejemplo numérico de las cuatro formas; nombre "cross multiplication"; Ej. 4.1.1 (3/x = 4/20, x = 15); Ej. 4.1.2 ((x − 1)/(x − 3) = (2x + 2)/(x + 1), x = 5, se descarta x = −1 por dar 0/0) |
| Problemas 4.1 | geom3 | 30 | 4.1.3 | problemas 1 a 12 (el texto sale desordenado en `pdftotext`) |
| Semejanza: definición | geom3 | 31 | 4.2.1 | semejantes = mismos ángulos; el símbolo ~; el orden de las letras da la correspondencia (Fig. 4.2.1); Ej. 4.2.1 (△ABC ~ △EFD con ángulos 65, 45, 70); empieza el **Th. 4.2.1 (AA)** |

### Unidad 04 (`geom4`): semejanza, Pitágoras, triángulos especiales

| Tema | id | PDF | Impresa | Qué hay |
|---|---|---|---|---|
| Criterio AA | geom4 | 1, 2 | 4.2.2, 4.2.3 | **Th. 4.2.1** (AA) con prueba (tercer ángulo, Fig. 4.2.2); Ej. 4.2.2 (paralela a un lado, △ABC ~ △DEC); Ej. 4.2.3 (altura sobre la hipotenusa: △ABC ~ △ACD ~ △CBD) |
| Lados proporcionales | geom4 | 2, 3 | 4.2.3, 4.2.4 | **Th. 4.2.2**: lados correspondientes proporcionales (AB/DE = BC/EF = AC/DF, con la regla de las letras); Ej. 4.2.4 (8/x = 2/3, x = 12, entre dos triángulos) |
| Ejemplos de semejanza | geom4 | 3 a 6 | 4.2.4 a 4.2.7 | Ej. 4.2.5 (5/(10 + x) = 10/15, x = 20); Ej. 4.2.6 ((x + 5)/4 = (x + 3)/3, x = 3); Ej. 4.2.7 (altura en un triángulo rectángulo, (x + 12)/8 = 8/x, x = 4, se rechaza x = −16) |
| Sombras | geom4 | 6 | 4.2.7 | Ej. 4.2.8 (árbol de 12 pies de sombra y hombre de 6 pies con sombra de 4, árbol de 18 pies, rayos del sol paralelos) |
| Prueba del Th. 4.2.2 | geom4 | 6 a 7 | 4.2.7, 4.2.8 | la prueba se hace con el caso del Ej. 4.2.4 (Figs. 4.2.3 a 4.2.6): rectas paralelas a los lados parten los triángulos en triángulos pequeños congruentes por AAL; es válida con longitudes racionales y "se extiende" por aproximación a las irracionales (nota al instructor) |
| Nota histórica | geom4 | 8 | 4.2.9 | Tales midió pirámides con sombras (Fig. 4.2.7) |
| Problemas 4.2 | geom4 | 8 a 14 | 4.2.9 a 4.2.15 | problemas 1 a 24 (semejanzas, bandera de 80 pies, ancho de un río) |
| Transversales a tres paralelas | geom4 | 15, 16 | 4.3.1, 4.3.2 | transversal a tres rectas (Fig. 4.3.1); **Th. 4.3.1**: los segmentos son proporcionales, a/b = c/d (Fig. 4.3.2); Ej. 4.3.1 (x/3 = 8/4, x = 6); prueba con triángulos semejantes (Fig. 4.3.3) |
| Ejemplo y problemas | geom4 | 16 a 19 | 4.3.2 a 4.3.5 | Ej. 4.3.2 (x/3 = (2x + 2)/(4x + 1), (x − 2)(4x + 3) = 0, x = 2, se rechaza −3/4); problemas 1 a 6 |
| Teorema de Pitágoras | geom4 | 20 | 4.4.1 | catetos e hipotenusa (Fig. 4.4.1); **Th. 4.4.1**: cateto² + cateto² = hipotenusa² (a² + b² = c²) |
| Ejemplos de Pitágoras | geom4 | 20 a 23 | 4.4.1 a 4.4.4 | Ej. 4.4.1 (3, 4, 5); Ej. 4.4.2 (5, x, 10, x = 5√3); Ej. 4.4.3 (5, 5, x, x = 5√2); Ej. 4.4.4 (x, x + 1, x + 2, x² − 2x − 3 = 0, x = 3) |
| **Prueba de Pitágoras** | geom4 | 23, 24 | 4.4.4, 4.4.5 | enunciado repetido; la prueba (Figs. 4.4.1 y 4.4.2): se baja CD perpendicular a AB, x = AD, BD = c − x; △ABC ~ △ACD da c/b = b/x, o sea cx = b²; △ABC ~ △CBD da c/a = a/(c − x), o sea c(c − x) = a²; se resta c² − cx = a² con cx = b² y queda c² = a² + b². **Las proporciones están en una imagen** (no en la capa de texto), geom4 PDF 24 |
| Recíproco | geom4 | 24, 25 | 4.4.5, 4.4.6 | **Th. 4.4.2**: si c² = a² + b² el triángulo es rectángulo (Fig. 4.4.3); prueba construyendo △DEF con ángulo recto y catetos a, b (Fig. 4.4.4) y LLL |
| Ejemplos | geom4 | 25 a 27 | 4.4.6 a 4.4.8 | Ej. 4.4.5 (7, 9, √130: 49 + 81 = 130, sí es rectángulo); Ej. 4.4.6 (x = 5, AB = 30, rectángulo y triángulo); Ej. 4.4.7 (rombo con diagonales, x = 10, AC = 16, BD = 12); Ej. 4.4.8 (escalera de 39 pies, pie a 15, altura 36) |
| Nota histórica | geom4 | 27, 28 | 4.4.8, 4.4.9 | Pitágoras no fue el primero (chinos, babilonios); prueba por áreas con la figura 4.4.5 (cuadrado de lado a + b dividido de dos formas: a² + b² más cuatro triángulos, o c² más cuatro triángulos); cientos de pruebas distintas; los pitagóricos y los números enteros |
| Problemas 4.4 | geom4 | 28 a 36 | 4.4.9 a 4.4.17 | problemas 1 a 34: radicales simples, rombos, rectángulos, ¿es rectángulo?, escalera de 25 pies, hombre que camina 24 y 10, mesa de 9 pies por una puerta, diamante de béisbol de 90 pies |
| Triángulo 30-60-90 | geom4 | 37, 38 | 4.5.1, 4.5.2 | prueba con la figura de dos triángulos 30-60-90 pegados (equilátero de lado 2, Figs. 4.5.1 a 4.5.3): hipotenusa 2, cateto corto 1, largo √3 (ver erratas de la línea 1² + x² = x²); semejanza con DF = 8; **Th. 4.5.1**: hip = 2s, L = s√3 (4.5.1) |
| Ejemplos 30-60-90 | geom4 | 39 | 4.5.3 | Ej. 4.5.1 (x = 7√3, y = 14); Ej. 4.5.2 (L = 10, x = 10√3/3, y = 20√3/3, racionalización) |
| Triángulo 45-45-90 | geom4 | 40, 41 | 4.5.4, 4.5.5 | prueba con catetos 1, 1 (Figs. 4.5.6 y 4.5.7); Ej. 4.5.3 (x = 8√2); **Th. 4.5.2**: hip = √2·L (4.5.2) |
| Ejemplos 45-45-90 | geom4 | 42, 43 | 4.5.6, 4.5.7 | Ej. 4.5.4 (hip 4, x = y = 2√2, por dos métodos); Ej. 4.5.5 (trapecio isósceles, AB = 10√2 + 10, Fig. 4.5.9) |
| Rombo con 30 | geom4 | 43, 44 | 4.5.7, 4.5.8 | Ej. 4.5.6 (rombo, △AEB 30-60-90, AC = 4√3, BD = 4); nota histórica de los irracionales (√2 irracional, pitagóricos, 1.4, 1.41, 1.414, referencia a Richardson) |
| Problemas 4.5 | geom4 | 44 a 49 | 4.5.8 a 4.5.13 | problemas 1 a 20 (y 21 a 26 continúan en geom5 PDF 1) |

### Unidad 05 (`geom5`): distancia punto-recta y trigonometría

| Tema | id | PDF | Impresa | Qué hay |
|---|---|---|---|---|
| Cola de 4.5 | geom5 | 1, 2 | 4.5.14, 4.5.15 | problemas 22 a 26 de 4.5 y la leyenda de licencia |
| Distancia de un punto a una recta | geom5 | 3, 4 | 4.6.1, 4.6.2 | pregunta: el segmento más corto de P a la recta (Fig. 4.6.1); **Th. 4.6.1**: la hipotenusa es mayor que cualquiera de los catetos (con c = √(a² + b²) > a y > b); **Th. 4.6.2**: la perpendicular es el segmento más corto (Fig. 4.6.3); definición: distancia de un punto a una recta = longitud de la perpendicular |
| Ejemplo y problemas | geom5 | 4 a 6 | 4.6.2 a 4.6.4 | Ej. 4.6.1 (PC = 8, ángulos 30-60-90, CD = 4, PD = 4√3, Fig. 4.6.4); problemas 1 a 6 |
| Cap. 5 temario | geom5 | 7 | 1 | 5.1, 5.2, 5.3; trigonometría = relaciones entre lados y ángulos |
| Definición de seno, coseno, tangente | geom5 | 8 | 5.1.1 | solo trigonometría del triángulo rectángulo (Figs. 5.1.1, 5.1.2); cateto adyacente y opuesto; sin A = op/hip, cos A = ady/hip, tan A = op/ady |
| Ejemplos | geom5 | 9, 10 | 5.1.2, 5.1.3 | mnemónico SOHCAHTOA; Ej. 5.1.1 (3-4-5, sin A = 4/5, cos A = 3/5, tan A = 4/3); Ej. 5.1.2 (mismo triángulo con B, sin B = 3/5, cos B = 4/5, tan B = 3/4); Ej. 5.1.3 (5-12-13) |
| Ángulos especiales | geom5 | 10, 11 | 5.1.3, 5.1.4 | Ej. 5.1.4 (30: sin = 1/2, cos = √3/2, tan = √3/3); Ej. 5.1.5 (otro triángulo con 30, mismos valores); conclusión: los valores dependen solo del ángulo porque los triángulos con el mismo ángulo son semejantes |
| Razones iguales | geom5 | 12 | 5.1.5 | **Th. 5.1.1**: las funciones de ángulos iguales son iguales; prueba con AA y el intercambio de medios del Th. 4.1.2 (ver erratas); consecuencia: se puede usar cualquier triángulo con ese ángulo |
| Dada una razón | geom5 | 12 a 14 | 5.1.5 a 5.1.7 | Ej. 5.1.6 (sin A = 12/13, cos A = 5/13, tan A = 12/5); Ej. 5.1.7 (tan A = 2, sin A = 2√5/5, cos A = √5/5) |
| Problemas 5.1 | geom5 | 14 a 17 | 5.1.7 a 5.1.10 | problemas 1 a 20 (de los 15 a 20, razones dadas) |
| Tabla y calculadora | geom5 | 18 | 5.2.1 | valores de 30 exactos y a cuatro decimales (sin 30 = 0.5000, cos 30 = 0.8660, tan 30 = 0.5774); la tabla aparece en el libro impreso en la "página 356" (aquí está en geom8 PDF 13 a 15); calculadora en modo grados; Ej. 5.2.1 (20: 0.3420, 0.9397, 0.3640) |
| Resolver triángulos | geom5 | 18 a 21 | 5.2.1 a 5.2.4 | Ej. 5.2.2 (sin 20 = x/10, x = 3.4); Ej. 5.2.3 (cos 20, x = 9.4); tercer ejemplo rotulado de nuevo 5.2.1 (en realidad 5.2.4, tan 20 = 10/x, x = 27.5, y el truco de usar el ángulo complementario 70 para multiplicar en vez de dividir); Ej. 5.2.5 (sin 14 = 7/x, x = 28.9, división inevitable, sin tablas de secante ni cosecante) |
| Ángulo desde una razón | geom5 | 21, 22 | 5.2.4, 5.2.5 | ejemplo repetido con el mismo texto y la leyenda "nearest degree" (ver erratas); Ej. 5.2.6 (sin x = 2/3 = .6667, en la tabla el más cercano es .6691 que es 42, tecla INV sin o sin⁻¹) |
| Más ejemplos | geom5 | 22, 23 | 5.2.5, 5.2.6 | Ej. 5.2.7 (sin 40 = x/4, x = 2.6); Ej. 5.2.8 (triángulo isósceles con 65 y 8, x = 7.3, y = 6.8) |
| Nota histórica de la trigonometría | geom5 | 23, 24 | 5.2.6, 5.2.7 | tabla de cuerdas de Hipparchus (Fig. 5.2.1), seno = "media cuerda" hindú, coseno = seno del complemento (cos 60 = sin 30), tangente (Fig. 5.2.2), serie sin x = x − x³/6 + x⁵/120 − x⁷/5040 + ... con x en radianes, 1 radián = 57.296 grados |
| Problemas 5.2 | geom5 | 24 a 33 | 5.2.7 a 5.2.16 | problemas 1 a 46 (10 de tabla, 11 a 30 hallar x, 31 a 38 ángulos, 39 a 46) |
| Ángulos de elevación y depresión | geom5 | 34, 35 | 5.3.1, 5.3.2 | elevación (Fig. 5.3.1), depresión (Fig. 5.3.2); Ej. 5.3.1 (árbol a 50 pies, 43, tan 43 = x/50, 46.6 pies); Ej. 5.3.2 (avión a 5000 pies, depresión 5, cos 85 = 5000/x, 57,300 pies) |
| Pendiente | geom5 | 35, 36 | 5.3.2, 5.3.3 | Ej. 5.3.3 (carretera que sube 30 en 300, tan A = .1000, 6) |
| Problemas 5.3 | geom5 | 36, 37 | 5.3.3, 5.3.4 | problemas 1 a 8 de aplicaciones |
| Portada cap. 6 | geom5 | 38 | 1 | 6.1 a 6.5 |
| 6.1 inicia | geom5 | 39 | 6.1.1 | unidad cuadrada, área = número de cuadrados; Ej. 6.1.1 (5 por 3 = 15); **Th. 6.1.1**: A = lw; Ej. 6.1.2 empieza |

### Unidad 06 (`geom6`): áreas y comienzo de polígonos regulares

| Tema | id | PDF | Impresa | Qué hay |
|---|---|---|---|---|
| Cuadrado, perímetro | geom6 | 1 | 6.1.2 | Ej. 6.1.2 (A = 9); **Th. 6.1.2**: A = s²; perímetro de un polígono = suma de los lados (rectángulo de 5 por 3, P = 16); Ej. 6.1.3 empieza |
| Rectángulo con Pitágoras | geom6 | 1, 2 | 6.1.2, 6.1.3 | Ej. 6.1.3 ((3x − 1)² + (2x)² = (2x + 4)², 9x² − 22x − 15 = 0, x = 3, AB = 8, BC = 6, A = 48, P = 28, se rechaza x = −5/9); Ej. 6.1.4 (A = 40 = (x + 3)x, x = 5) |
| L de baldosas | geom6 | 2, 3 | 6.1.3, 6.1.4 | Ej. 6.1.5 (habitación en L, dos rectángulos, 140 + 24 = 164) ; nota histórica: egipcios y babilonios, fórmulas del capítulo conocidas por los griegos (Elementos) |
| Problemas 6.1 | geom6 | 3 a 8 | 6.1.4 a 6.1.9 | problemas 1 a 26 (área y perímetro, hallar x, baldosas, peso por pie²) |
| Paralelogramo | geom6 | 9 | 6.2.1 | base y altura (Fig. 6.2.1); **Th. 6.2.1**: A = bh; prueba con △ADE ≅ △BCF y el rectángulo CDEF (Fig. 6.2.2) |
| Ejemplos | geom6 | 10 a 12 | 6.2.2 a 6.2.4 | Ej. 6.2.1 (b = 8, h = 3, A = 24, P = 26); Ej. 6.2.2 (h por Pitágoras, h = √5, A = 8√5, P = 22); Ej. 6.2.3 (h = 4 sin 40 = 2.5712, A = 25.7, P = 28); Ej. 6.2.4 (A = 21 con 12/x, x = 4); Ej. 6.2.5 (A = 48, P = 34, x = 12, y = 4) |
| Problemas 6.2 | geom6 | 13 a 15 | 6.2.5 a 6.2.7 | problemas 1 a 14 |
| Triángulo | geom6 | 17 | 6.3.1 | base y altura, la altura puede caer fuera o ser un cateto (Fig. 6.3.1); **Th. 6.3.1**: A = ½bh; prueba completando el paralelogramo ABCE (Fig. 6.3.2) |
| Ejemplos | geom6 | 17 a 20 | 6.3.1 a 6.3.4 | Ej. 6.3.1 (½·9·4 = 18); Ej. 6.3.2 (h = 10 sin 40 = 6.428, A = 48.2); Ej. 6.3.3 (A = 15, AB = 10, BC = 3√5, P = 15 + 3√5); Ej. 6.3.4 (isósceles con 30, AD = 5√3, A = 25√3, P = 20 + 10√3) |
| Problemas 6.3 | geom6 | 20 a 25 | 6.3.4 a 6.3.9 | problemas 1 a 24 |
| Rombo | geom6 | 26 | 6.4.1 | A = bh como paralelogramo; con diagonales (Figs. 6.4.1 y 6.4.2); **Th. 6.4.1**: A = ½d₁d₂, con prueba por dos triángulos ABC y ADC de ¼d₁d₂ cada uno |
| Ejemplos | geom6 | 26 a 28 | 6.4.1 a 6.4.3 | Ej. 6.4.1 (A = ½·8·6 = 24); Ej. 6.4.2 (rombo con 5, x, x + 1: x = 12, d₁ = 24, d₂ = 10, A = 120, lado 13, P = 52); Ej. 6.4.3 (vuelve al Ej. 4.5.6: AC = 4√3, BD = 4, A = 8√3) |
| Problemas 6.4 | geom6 | 28 a 30 | 6.4.3 a 6.4.5 | problemas 1 a 10 |
| Trapecio | geom6 | 31 | 6.5.1 | **Th. 6.5.1**: A = ½h(b₁ + b₂), prueba con la diagonal BD (dos triángulos, Fig. 6.5.2) |
| Ejemplos | geom6 | 31, 32 | 6.5.1, 6.5.2 | Ej. 6.5.1 (A = ½·6·(28 + 16) = 132); Ej. 6.5.2 (isósceles con 10, 22, AE = 5, h = 5√3, BC = 2√31, A = 80√3, P = 42 + 2√31, Fig. 6.5.3) |
| Problemas 6.5 | geom6 | 32 a 36 | 6.5.2 a 6.5.6 | problemas 1 a 16 |
| Cap. 7 temario | geom6 | 37 | 1 | 7.1 a 7.6 |
| Polígono regular, centro | geom6 | 38 | 7.1.1 | regular = lados y ángulos iguales (Fig. 7.1.1); bisectrices concurren (Fig. 7.1.2); **Th. 7.1.1** (centro), radios; **Th. 7.1.2**: los radios lo dividen en triángulos isósceles congruentes, radios iguales (Fig. 7.1.3) |
| Ejemplo y prueba | geom6 | 39, 40 | 7.1.2, 7.1.3 | Ej. 7.1.1 (octágono de radio 3, x = 45, y = z = 67½); prueba para el pentágono (Figs. 7.1.4 y 7.1.5) con LAL |
| Apotema | geom6 | 40, 41 | 7.1.3, 7.1.4 | apotema (Fig. 7.1.6); el teorema de las apotemas (impreso como "Theorem 7.1.1", es el 7.1.3, ver erratas): iguales y bisecan los lados (Fig. 7.1.7); Ej. 7.1.2 (pentágono de lado 20, ángulos 72, 36, 54, tan 54 = a/10, a = 13.8) |
| Área de un polígono regular | geom6 | 41, 42 | 7.1.4, 7.1.5 | **Th. 7.1.4**: A = ½aP (7.1.1); prueba con n triángulos de área ½as (Fig. 7.1.9); Ej. 7.1.3 (pentágono de lado 20, A = 688.2) |
| Perímetro con el radio | geom6 | 42, 43 | 7.1.5, 7.1.6 | **Th. 7.1.5**: P = 2rn sin(180/n) (7.1.2), con prueba (Fig. 7.1.10, sin(180/n) = AC/r); Ej. 7.1.4 (pentágono de radio 10, P = 58.8) |
| Tabla 7.1.1 | geom6 | 43 | 7.1.6 | P = 2rn sin(180/n) para triángulo (5.1960r), cuadrado (5.6568r), pentágono (5.8780r), hexágono (6.0000r), decágono (6.180r), 45 lados (6.278r), 90 lados (6.282r) y 1000 lados (6.283r); n sin(180/n) se acerca a π; cita a 7.5 |

### Unidad 07 (`geom7`): polígonos regulares y círculos

| Tema | id | PDF | Impresa | Qué hay |
|---|---|---|---|---|
| Polígonos con radio | geom7 | 1 | 7.1.7 | Ej. 7.1.4 repetido con la tabla (58.78 = 58.8); Ej. 7.1.5 (pentágono de radio 10: cos 36 = a/10, a = 8.1, P = 58.78, A = 237.8); nota histórica: tablillas babilónicas de 1936, construcción con regla y compás |
| Problemas 7.1 | geom7 | 2, 3 | 7.1.8, 7.1.9 | problemas 1 a 18 (ángulos, apotema, perímetro y área de pentágonos, hexágonos, decágonos, nonágonos) |
| Círculo | geom7 | 4, 5 | 7.2.1, 7.2.2 | compás (Fig. 7.2.1); definición de círculo (todos los puntos a una distancia dada del centro, Fig. 7.2.2); radio, cuerda, diámetro = 2 radios |
| Ejemplo de radios | geom7 | 5, 6 | 7.2.2, 7.2.3 | Ej. 7.2.1 (radios iguales, x/2 + 9 = 3x − 2, x = 4.4, radio 11.2, diámetro 22.4) |
| Cuerdas | geom7 | 6 a 8 | 7.2.3 a 7.2.5 | **Th. 7.2.1**: un diámetro perpendicular a una cuerda la biseca (prueba con hipotenusa-cateto); Ej. 7.2.2 (AB = 48, con 7, 25, 24); **Th. 7.2.2**: un diámetro que biseca una cuerda que no es diámetro es perpendicular (prueba LLL); Ej. 7.2.3 (x = 7) |
| Mediatriz de una cuerda | geom7 | 9, 10 | 7.2.6, 7.2.7 | **Th. 7.2.3**: la mediatriz de una cuerda pasa por el centro; Ej. 7.2.4 (r: 3² + (r − 1)² = r², r = 5) |
| Longitud de cuerdas | geom7 | 10, 11 | 7.2.7, 7.2.8 | Ej. 7.2.5 (radio 25: AB = 48 a distancia 7 del centro, CD = 40 a distancia 15); **Th. 7.2.4** (sin prueba): cuanto más cerca del centro, más larga la cuerda; la cuerda de un círculo está en el Libro III de Euclides |
| Problemas 7.2 | geom7 | 11 a 14 | 7.2.8 a 7.2.11 | problemas 1 a 12 |
| Tangente | geom7 | 15 | 7.3.1 | tangente = recta con un solo punto en común (Fig. 7.3.1); **Th. 7.3.1**: la tangente es perpendicular al radio en el punto de contacto, con prueba usando el Th. 4.6.2 |
| Ejemplos | geom7 | 15, 16 | 7.3.1, 7.3.2 | Ej. 7.3.1 (6, 8, x = 10); **Th. 7.3.2**: recíproco, con prueba usando el Th. 4.6.1 (Figs. 7.3.3 y 7.3.4) |
| Cuadrilátero con tangentes | geom7 | 17 | 7.3.3 | Ej. 7.3.2 (3x/2 + 10 y 4x/3 con dos ángulos de 90, suma 360: x = 60, ∠O = 100, ∠P = 80, remite al Ej. 1.5.5) |
| Tangentes desde un punto | geom7 | 18, 19 | 7.3.4, 7.3.5 | **Th. 7.3.3**: dos tangentes desde un punto exterior son iguales (prueba con hipotenusa-cateto, Figs. 7.3.5 y 7.3.6); Ej. 7.3.3 (x = 3√5, y = 6); Ej. 7.3.4 (x = 15) |
| Círculo inscrito | geom7 | 19 | 7.3.5 | inscrito/circunscrito (Fig. 7.3.7); Ej. 7.3.5 (perímetro 34 con 3, 4, 10) |
| Problemas 7.3 | geom7 | 20 a 23 | 7.3.6 a 7.3.9 | problemas 1 a 16 |
| Arcos | geom7 | 24 | 7.4.1 | arco menor y mayor (Fig. 7.4.1); ángulo central; grados de un arco = grados del ángulo central; semicírculo (Fig. 7.4.2); círculo completo 360; el símbolo =° para grados y = para longitud |
| Ejemplos de arcos | geom7 | 24, 25 | 7.4.1, 7.4.2 | Ej. 7.4.1 (arco 70, arco mayor 290); segundo ejemplo rotulado también 7.4.1 (x = 50, y = z = 65, isósceles) |
| Ángulo inscrito | geom7 | 25, 26 | 7.4.2, 7.4.3 | ángulo inscrito (Fig. 7.4.3); **Th. 7.4.1**: un ángulo inscrito mide la mitad de su arco; Ej. 7.4.3 (70 implica arco 140); comprobación con el diámetro BD (30 y 40, Figs. 7.4.4 y 7.4.5) |
| Prueba del Th. 7.4.1 | geom7 | 26 a 28 | 7.4.3 a 7.4.5 | tres casos: centro en un lado, dentro y fuera del ángulo (Figs. 7.4.6 a 7.4.8), ecuaciones (7.4.2) y (7.4.3) |
| Ejemplos | geom7 | 28 a 30 | 7.4.5 a 7.4.7 | Ej. 7.4.4 (100 implica arco ADC = 200, ABC = 160, x = 80); Ej. 7.4.5 (x = ½(x + 40), x = 40); Ej. 7.4.6 (semicírculo, x = 90); **Th. 7.4.2**: ángulo inscrito en un semicírculo es recto; Ej. 7.4.7 (catetos x + 1 y x + 3, hipotenusa 2x, x = 5, 6-8-10) |
| Paralelas y arcos | geom7 | 30, 31 | 7.4.7, 7.4.8 | **Th. 7.4.3**: paralelas interceptan arcos iguales (Fig. 7.4.9); Ej. 7.4.8 (x = 40, y = z = 20) |
| Tangente y cuerda | geom7 | 31, 32 | 7.4.8, 7.4.9 | **Th. 7.4.4**: ángulo entre tangente y cuerda = ½ del arco interceptado (Fig. 7.4.10, con prueba por el diámetro PD); Ej. 7.4.9 (x = 40, y = 50, CD = 100) |
| Cuerdas que se cortan | geom7 | 32, 33 | 7.4.9, 7.4.10 | **Th. 7.4.5**: ángulo entre dos cuerdas que se cortan = ½(suma de arcos), prueba con el ángulo exterior (Fig. 7.4.11); Ej. 7.4.10 (x = 55, y = 20, z = 35) |
| Ángulos exteriores | geom7 | 33, 34 | 7.4.10, 7.4.11 | secante; **Th. 7.4.6**: ángulo formado fuera del círculo por dos secantes, secante y tangente, o dos tangentes = ½ de la diferencia de arcos (Figs. 7.4.12 a 7.4.14); Ej. 7.4.11 (x = 30, y = 20, z = 50) |
| Nota histórica | geom7 | 34 | 7.4.11 | origen de los 360 grados (babilonios, base 60, el año de 360 días) |
| Problemas 7.4 | geom7 | 34 a 45 | 7.4.11 a 7.4.22 | problemas 1 a 46 |
| Circunferencia | geom7 | 46, 47 | 7.5.1, 7.5.2 | idea de "enderezar" el círculo (Fig. 7.5.1); hexágono inscrito de radio r (Fig. 7.5.2), polígonos de más lados; se recuerda el de 90 lados (3.141 d) y el de 1000 (3.1416 d), por 7.1; **Th. 7.5.1**: C = πd = 2πr; π ≈ 3.14, 3.1416 o 22/7, irracional, 50 decimales |
| Ejemplos | geom7 | 47 a 49 | 7.5.2 a 7.5.4 | Ej. 7.5.1 (C = π·4 = 12.56); longitud de arco como fracción de C; Ej. 7.5.2 (arco de 90 en radio 10, C = 62.8, arco 15.7); símbolo = vs =°; fórmula L = (D/360)·C (7.5.3 y 7.5.4); Ej. 7.5.3 (diámetro 4, 30 inscrito, arco 60, L = 2.09); Ej. 7.5.4 (C = 628, d = 200) |
| Aplicación y notas históricas | geom7 | 49, 50 | 7.5.4, 7.5.5 | odómetro (5280 ÷ 6.28 = 841 vueltas por milla); Eratóstenes (7.2 = 1/50 de 360, 500 millas, 25,000 millas, Fig. 7.5.4); aproximaciones antiguas de π (chinos 3, babilonios 3 o 3⅛, egipcios 3.16, la Biblia 3); Arquímedes con polígonos de 96 lados (entre 3 10/71 y 3 1/7, Fig. 7.5.5); serie π/4 = 1 − 1/3 + 1/5 − 1/7 + 1/9 − ... (7.5.6) |
| Problemas 7.5 | geom7 | 50 a 55 | 7.5.5 a 7.5.10 | problemas 1 a 28 (π = 3.14) |
| Área del círculo | geom7 | 56 | 7.6.1 | **Th. 7.6.1**: A = πr² (7.6.1), prueba aproximando con un polígono circunscrito de apotema r (Fig. 7.6.1) y A = ½aP = ½r(2πr) (7.6.2); Ej. 7.6.1 (r = 3, 28.26) |
| Sector | geom7 | 56, 57 | 7.6.1, 7.6.2 | Ej. 7.6.2 (sector de 60: ⅙ de 28.26 = 4.71, Fig. 7.6.2); sector: A = (D/360)·πr² (7.6.3 y 7.6.4, y su ejemplo 7.6.5); Ej. 7.6.3 empieza |

### Unidad 08 (`geom8`): fin de 7.6, apéndice, tablas, respuestas

| Tema | id | PDF | Impresa | Qué hay |
|---|---|---|---|---|
| Segmento circular | geom8 | 1 | 7.6.3 | Ej. 7.6.3 (r = 10, sector de 60 menos △OAB equilátero de base 10 y altura 5√3, 50π/3 − 25√3 = 9.03, con 3.14 y 1.732, Fig. 7.6.3); un segmento = sector menos triángulo; Ej. 7.6.4 empieza (semicírculos) |
| Semicírculos | geom8 | 1, 2 | 7.6.3, 7.6.4 | Ej. 7.6.4 (semicírculo de radio 20 menos dos de radio 10: 200π − 100π = 100π = 314) |
| Notas históricas del círculo | geom8 | 2 | 7.6.4 | papiro de Rhind, problema 50 (círculo de diámetro 9 = cuadrado de lado 8, A = (8d/9)² = 256r²/81 ≈ 3.16 r², o sea π ≈ 3.16); Arquímedes: A = ½·C·r = ½(2πr)r = πr² |
| Problemas 7.6 | geom8 | 2 a 7 | 7.6.4 a 7.6.9 | problemas 1 a 30 (áreas de círculos con π = 3.14 y áreas sombreadas) |
| Índice | geom8 | 8, 9 | 1, 2 | índice alfabético de términos con la sección, p. ej. ángulos (1.2), apotema (7.1), Pitágoras (4.4), semejanza (4.2), tangente (5.2, 7.3), transversal (1.4) |
| Apéndice: prueba del teorema Z | geom8 | 10, 11 | 1, 2 | segunda parte: si los alternos internos son iguales las rectas son paralelas (por contradicción, si se cortaran en G se forma un triángulo KLG y por ALA otro congruente LKH, con lo cual dos rectas pasarían por G y H, Figs. 1 a 3); primera parte: si son paralelas los alternos son iguales (por contradicción con el postulado de las paralelas, Figs. 4 y 5) |
| Bibliografía | geom8 | 12 | 1 | libros de texto (Jacobs, Moise y Downs, Richardson, Zlot et al.) e historias (Boyer, Eves, Heath, Kline, Smith) |
| Tabla trigonométrica | geom8 | 13 a 15 | 1 a 3 | seno, coseno y tangente de 1 a 90 en pasos de 1 a cuatro decimales (ver erratas de valores) |
| Respuestas a los problemas impares | geom8 | 16 a 28 | 1 a 13 | solo los impares y solo lo que da número: 1.1 a 1.6 (PDF 16 a 18), 2.1 a 2.7 (PDF 18 a 21, con congruencias y razones), 3.1 y 3.2 (PDF 21 y 22), 4.1 a 4.3 (PDF 22), 4.4 a 4.6 (PDF 22 y 23), 5.1 a 5.3 (PDF 23 y 24), 6.1 a 6.5 (PDF 25 y 26), 7.1 a 7.4 (PDF 26 y 27), 7.5 y 7.6 (PDF 27 y 28) |
| Lista de símbolos | geom8 | 29 | 1 | puntos, recta, segmento, rayo, =, ∠, °, ⊥, ∥, △, ≅, ~, >, arco, =°, π |
| Licencia | geom8 | 30 | 1 | detalle de licencias de LibreTexts, 59 páginas |

Importante: este archivo **no** tiene "Fórmulas" a pesar de su nombre; no hay hoja de fórmulas resumida.

## Erratas e inconsistencias (verificadas)

Cálculos recomprobados con Python y con las páginas renderizadas.

**Tabla trigonométrica (geom8 PDF 13 a 15, impresa 1 a 3).** Se recomputó la tabla entera con `math.sin/cos/tan` redondeando a 4 decimales; 89 de 90 filas se comparan y estas están mal:
- 12: sen impreso 0.2097, correcto 0.2079 (la respuesta de 12 en la columna del coseno de 78 sí dice 0.2079; esa fila está bien).
- 22: tan impresa 0.4640, correcta 0.4040.
- 32: sen impreso 0.5290, correcto 0.5299.
- 64: cos impreso 0.4884, correcto 0.4384.
- 88: cos impreso 0.0340, correcto 0.0349.
- 90: sen impreso "10.0000" (geom8 PDF 15, verificado en la imagen), correcto 1.0000. La tangente de 90 queda vacía (no existe).
Ningún ejemplo del texto usa las filas erróneas (los valores que usa, 14, 20, 40, 43, 65, 85, 70, coinciden con lo correcto), pero un reto que pida leer la tabla las debe evitar.

**Teoremas, numeración y referencias cruzadas.**
- geom1 PDF 29 (1.4.1): la caja titulada "Theorem 1.4.1: Parallel Postulate" contiene una frase que no pertenece ("The probabilities assigned to events by a distribution function on a sample space are given by"), copiada de otro libro de LibreTexts (verificado en la imagen); el enunciado real del postulado es el párrafo siguiente. Además el número 1.4.1 se vuelve a usar en PDF 30 para el teorema Z, y hay dos figuras rotuladas "Figure 1.4.1" (paralelas AB y CD, y rectas EF y GH que se cortan); la 1.4.2 falta.
- geom1 PDF 36 (1.4.8): el SUMMARY llama "G" a la forma de los interiores del mismo lado; en el teorema (PDF 33, 1.4.5) es "C". También el pie de la figura "PageIndex10" (PDF 32) y "PageIndex13" (PDF 37) son nombres rotos de la conversión.
- geom1 PDF 34 (1.4.6): Ej. 1.4.4 la solución escribe ∠AEC y la respuesta ∠AEG para el mismo ángulo.
- geom2 PDF 16 (2.3.3): la prueba del AAL cita "Theorem 2.3.3, section 1.5"; es el 1.5.3. geom2 PDF 39 (2.6.2): la prueba del LLL cita "Theorem 2.6.1, section 2.5"; es el 2.5.1. geom2 PDF 45 (2.7.1): la prueba de hipotenusa-cateto cita "Theorem 2.7.1, section 2.5"; es el 2.5.1. En ese mismo enunciado (Fig. 2.7.1) dice "if AB = DE and BC = BF"; debe ser BC = EF.
- geom2 PDF 31 (2.5.4): la figura del Th. 2.5.3 dice "∠ABC is equilateral"; es △ABC. El Ej. 2.1.1 imprime la correspondencia con "∠R = ∠R" que se aclara en el texto (no hay error de fondo).
- geom3 PDF 14 (3.2.1): "By Theorem 3.2.3 of section 3.1" debe ser 3.1.3. PDF 16 (3.2.3): la prueba del Th. 3.2.2 cita "Theorem 3.2.1, section 3.1" (es 3.1.1) y "Theorem 3.2.2, section 3.2" (es 3.1.2). PDF 5 (3.1.3): Ej. 3.1.3 cita "Theorem 3.1.3, section 1.4" (es 1.4.3, la C). PDF 18 (3.2.5): Ej. 3.2.5 cita "Theorem 3 section 1.4" (1.4.3). PDF 19 (3.2.6): la prueba del 3.2.4 cita "Theorem 3.2.3, section 1.4" (es 1.4.3).
- geom3 PDF 17 (3.2.4): Ej. 3.2.4 termina con "Answer: x = y = z = 3, AC = BD = 6", que es la respuesta del ejemplo anterior copiada; la solución a su lado da x = y = 35 y z = 110.
- geom3 PDF 18 y 19 (3.2.5, 3.2.6): Ej. 3.2.5 deduce x = 55, y = z = 125, pero "Answer: x = 22, y = z = 125". Debe ser x = 55.
- geom3 PDF 18 (3.2.5): "In Figure 3.2.8 AB and CD are the bases": la figura del trapecio es la 3.2.10 (la 3.2.8 es el rectángulo).
- geom3 PDF 5 (3.1.2): "Find x, y, x and z" debe ser w, x, y, z. PDF 22 (3.2.9): la tabla de propiedades no tiene fila del cuadrado y la del trapecio isósceles queda con "diagonales iguales" como única propiedad marcada.
- geom3 PDF 28 (4.1.1): el Th. 4.1.1 dice "ad = be"; debe ser ad = bc. La ecuación (4.1.2) pone "dd/bd = bc/bd"; debe ser ad/bd.
- geom4 PDF 24 (4.4.5): la prueba de Pitágoras cita "Example 4.4.3, section 4.2"; es el Ej. 4.2.3.
- geom4 PDF 20 y 23 (4.4.1, 4.4.4): el Th. 4.4.1 se enuncia dos veces con el mismo número (antes de los ejemplos y de nuevo antes de la prueba).
- geom4 PDF 37 (4.5.1): en la prueba del 30-60-90 la línea dice "1² + x² = x²" (verificado en la imagen); la hipotenusa es 2, o sea 1² + x² = 2². La línea siguiente "1 + x² = 4" ya es correcta.
- geom4 PDF 43 (4.5.7) y 44 (4.5.8): Ej. 4.5.6 dice "∠ABE = 180 − (90 − 30) = 60"; debe ser 180 − (90 + 30). El resultado 60 es correcto. Escribe "bd = 2 + 2 = 4" en minúscula por BD.
- geom4 PDF 28 (4.4.9): en la nota histórica el texto se corta ("the angle s / um theorem", falta "sum").
- geom5 PDF 12 (5.1.5): la prueba del Th. 5.1.1 escribe "△ABC ≅ △DEF by AA = AA"; son semejantes (~), no congruentes.
- geom5 PDF 19 a 21 (5.2.2 a 5.2.4): numeración repetida y ejemplos duplicados. El tercer ejemplo de 5.2 se rotula "Example 5.2.1" (debe ser 5.2.4); luego "Example 5.2.5 Find x to the nearest tenth" (sen 14 = 7/x, x = 28.9) y otro "Example 5.2.5 Find x to the nearest degree" con el mismo texto y las mismas cuentas (x = 28.9), que no pide grados. El ejemplo que sí es "a la unidad de grado" es el 5.2.6. La misma frase sobre "tablas de secante y cosecante" se repite.
- geom5 PDF 18 (5.2.1): "page 356" remite a la paginación del libro impreso; en esta copia la tabla está en geom8 PDF 13 a 15.
- geom6 PDF 40 y 41 (7.1.3, 7.1.4): el teorema de las apotemas se imprime como "Theorem 7.1.1" (otra vez); en la secuencia es el 7.1.3 (la prueba del 7.1.5, PDF 43, lo cita como "Theorem 7.1.3"). Las figuras PageIndex6 y PageIndex9 (PDF 40, 42) llevan nombres rotos.
- geom6 PDF 26 (6.4.1): la prueba del Th. 6.4.1 muestra código LaTeX sin renderizar ("\dfrac{1}{4}d_1d_2") y la fórmula 6.4.1 con "a₁a₂" por d₁d₂ en un punto; la prueba de ADC escribe "bh = (AC)(DE)" donde falta ½.
- geom6 PDF 43 (7.1.6): "He can also give explicit formulas" es "We can".
- geom7 PDF 4, 5 (7.2.1, 7.2.2): el Ej. 7.2.1 se titula "Find the radius and diameter and diameter" y tiene LaTeX sin renderizar. El Ej. 7.2.2 (PDF 7): "AE² + CE² = CA²" debería escribirse con O (AE² + OE² = OA²), el resto es correcto (AE = 24).
- geom7 PDF 15 y 16 (7.3.1, 7.3.2): la prueba del 7.3.1 cita "Theorem 7.3.2, section 4.6" y la del 7.3.2 cita "Theorem 7.3.1, section 4.6"; son 4.6.2 y 4.6.1.
- geom7 PDF 25 (7.4.2): hay dos ejemplos rotulados "Example 7.4.1" (el segundo es el 7.4.2). El Ej. 7.4.3 se vuelve a llamar con otras letras ("EXAMPLE 7.4.3").
- geom7 PDF 31 (7.4.8): el Th. 7.4.4 se enuncia "∠APC = ½ arco PDC" pero su prueba y el Ej. 7.4.9 usan "∠APC = ½ arco PC" (el menor); la prueba da además ∠BPC = ½ arco PDC. Es el menor para APC y el mayor para BPC.
- geom7 PDF 48 (7.5.3): Ej. 7.5.2 imprime "C = 2πr = 3(3.14)(10) = 62.8" (verificado en la imagen); es 2(3.14)(10).
- geom7 PDF 47 (7.5.2): el texto dice que "π usualmente se toma 3.14"; en 7.5.5 la aproximación de Egipto "π = 3.16" y Babilonia "3 o 3⅛": en el texto salen desordenados ("3 or 3", "1 over 8").
- geom8 PDF 2 (7.6.4): en la nota del papiro de Rhind, la fórmula (8d/9)² da 256r²/81 ≈ 3.16 r²: 256/81 = 3.160..., correcto (la nota lo dice).
- Cuentas recalculadas y bien: Ej. 6.1.3, 6.4.2, 6.5.2, 7.1.2 (a = 13.764), 7.1.3 (688.2), 7.1.5 (237.8), tabla 7.1.1, Ej. 7.3.2, 7.4.7, 7.5.4 y la nota de Eratóstenes (50 × 500 = 25,000), la de odómetro (841), respuestas 7.1 impares y varias de 5.3.

**Preferencia de enunciados cuando la figura es imagen.** En casi todos los ejemplos el diagrama define los datos (p. ej. Ej. 2.3.4, 3.1.6, 4.3.2): un lector que quiera reutilizarlos debe mirar la página renderizada, porque las ecuaciones en `pdftotext` salen mezcladas.

## Lo que el material NO trae (y se esperaría)

- **Distancia entre dos puntos en coordenadas y geometría analítica**: no hay ejes, coordenadas, plano cartesiano, pendientes, ecuación de la recta ni del círculo, ni vectores. La palabra "analytic geometry" solo aparece en la primera frase de geom1 PDF 4 (1.1.1) como curso posterior. "Distancia" aparece como longitud de un segmento (1.1) y como la perpendicular de un punto a una recta (4.6); nunca la fórmula √((x₂ − x₁)² + (y₂ − y₁)²). Para eso, el catálogo remite a OpenStax Álgebra y trigonometría (`fuentes.md`: "geometria analitica, conicas, vectores").
- **Volúmenes y áreas de sólidos**: no hay prismas, cilindros, conos ni esferas, ni área superficial. La palabra "volúmenes" aparece solo en la nota histórica de geom1 PDF 7 (1.1.4). El libro es de geometría plana.
- **Razones de áreas y volúmenes entre figuras semejantes**: no se enuncia que la razón de áreas es el cuadrado de la razón de semejanza (ni la de volúmenes el cubo). La semejanza (4.2) solo lleva lados proporcionales (Th. 4.2.2); no hay razón de perímetros enunciada, no hay "factor de escala" ni homotecia. No hay semejanza LAL ni LLL (solo AA).
- **Fórmula general de la suma de los ángulos de un polígono** ((n − 2)·180): solo se hacen el cuadrilátero y el pentágono (Ej. 1.5.5 y 1.5.6) y los problemas del hexágono y octágono.
- **Fórmulas de las áreas de un triángulo con trigonometría (½ab sen C), Herón, ley de senos y cosenos, círculo unitario, identidades, secante/cosecante/cotangente, radianes** (solo se menciona "1 radián = 57.296 grados" en geom5 PDF 24); la trigonometría es solo la del triángulo rectángulo con seno, coseno y tangente, y el ángulo a partir de una razón con la tabla o INV sin.
- **Teorema de Pitágoras**: sí trae la prueba por semejanza (geom4 PDF 23 y 24) y menciona una por áreas (geom4 PDF 27 y 28, figura 4.4.5, con la figura pero sin cuenta algebraica explícita). Además trae el recíproco. No trae ternas pitagóricas como concepto (aparecen 3-4-5, 5-12-13, 8-15-17, 6-8-10, 7-24-25 solo en ejemplos y respuestas).
- **Ángulos en el círculo**: están completos (central, inscrito, semicírculo, tangente-cuerda, cuerdas que se cortan, secantes y tangentes exteriores). No trae potencia de un punto, cuadriláteros cíclicos como tema, ni longitud de segmentos de cuerdas/secantes.
- **Polígonos regulares**: no trae la fórmula del ángulo interior (se hace caso por caso con 360/n) ni la fórmula del área con el lado s en términos de n; sí A = ½aP y P = 2rn sen(180/n).
- **Construcciones con regla y compás**: solo se menciona (7.1.7, 7.2.1); no hay construcciones ni lugares geométricos.
- **Hoja de fórmulas**: el archivo se llama "Apéndice y Fórmulas" pero no hay una hoja de fórmulas, solo la prueba del teorema Z, el índice, la bibliografía, la tabla trigonométrica, las respuestas y los símbolos.
- Los problemas del libro no están en texto (son figuras), y las respuestas son solo las impares y no incluyen pruebas largas.

## Búsqueda rápida por concepto

| Concepto | Dónde (id, PDF, impresa) |
|---|---|
| **Teorema de Pitágoras: enunciado y ejemplos** | geom4 PDF 20 (4.4.1) enunciado; PDF 20 a 23 (4.4.1 a 4.4.4) Ej. 4.4.1 a 4.4.4 (3-4-5, 5-x-10, 5-5-x, x, x + 1, x + 2); PDF 26 y 27 (4.4.7, 4.4.8) Ej. 4.4.6 a 4.4.8 (rectángulo, rombo, escalera de 39); problemas PDF 28 a 36 (4.4.9 a 4.4.17) |
| **Prueba del teorema de Pitágoras** | por semejanza: geom4 PDF 23 y 24 (4.4.4, 4.4.5), Figs. 4.4.1 y 4.4.2, con las dos proporciones en imagen (PDF 24), cx = b², c(c − x) = a², c² = a² + b²; usa el Ej. 4.2.3 (PDF 2, 4.2.3, triángulos ABC ~ ACD ~ CBD). Por áreas: nota histórica geom4 PDF 27 y 28 (4.4.8, 4.4.9), Fig. 4.4.5. Recíproco: Th. 4.4.2, PDF 24 y 25 (4.4.5, 4.4.6), con Ej. 4.4.5 (PDF 25 y 26, 4.4.6, 4.4.7) |
| Pitágoras: cateto menor que la hipotenusa | Th. 4.6.1, geom5 PDF 3 (4.6.1) |
| **Distancia entre puntos** (en coordenadas) | **NO aparece** (ver sección anterior). Distancia como longitud de segmento: geom1 PDF 4 (1.1.1). Distancia de punto a recta (la perpendicular, la más corta): Th. 4.6.1 y 4.6.2, geom5 PDF 3 y 4 (4.6.1, 4.6.2), Ej. 4.6.1 PDF 4 y 5 (4.6.2, 4.6.3). Distancia con triángulos: Ej. 2.2.4 (geom2 PDF 10 y 11, 2.2.4, 2.2.5) y Ej. 2.3.5 (geom2 PDF 18, 2.3.5) |
| **Triángulos semejantes**: criterio y definición | AA: Th. 4.2.1, geom3 PDF 31 (4.2.1) y geom4 PDF 1 (4.2.2); definición y notación PDF 31 de geom3; AAA vs congruente: geom2 PDF 47 (2.7.3) |
| **Razón de semejanza / lados proporcionales** | Th. 4.2.2, geom4 PDF 2 (4.2.3); Ej. 4.2.4 a 4.2.8, PDF 2 a 6 (4.2.3 a 4.2.7); sombras Ej. 4.2.8 PDF 6 (4.2.7); prueba PDF 6 y 7 (4.2.7, 4.2.8) (solo con longitudes racionales); Tales y la pirámide, PDF 8 (4.2.9); transversales a tres paralelas Th. 4.3.1, PDF 15 y 16 (4.3.1, 4.3.2). Proporciones y multiplicación cruzada: Th. 4.1.1 y 4.1.2, geom3 PDF 28 y 29 (4.1.1, 4.1.2) |
| **Cómo se relacionan áreas y volúmenes con la razón de semejanza** | **NO aparece**: el libro no trae que la razón de áreas es el cuadrado de la razón de semejanza ni la de volúmenes el cubo, ni razón de perímetros. Lo más cercano: lados proporcionales (geom4 PDF 2) y el hecho de que las funciones trigonométricas de ángulos iguales coinciden por semejanza (geom5 PDF 12, 5.1.5) |
| **Triángulos congruentes** | LAL geom2 PDF 7 (2.2.1); ALA y AAL PDF 14 a 16 (2.3.1 a 2.3.3); LLL PDF 38 (2.6.1); hipotenusa-cateto PDF 45 (2.7.1); casos inválidos (LLA, AAA) PDF 46 a 48 (2.7.2 a 2.7.4) |
| **Área del triángulo** | Th. 6.3.1, geom6 PDF 17 (6.3.1); Ej. 6.3.1 a 6.3.4, PDF 17 a 20 (6.3.1 a 6.3.4); área con trigonometría PDF 18 (6.3.2, h = 10 sen 40) |
| **Área del rectángulo y del cuadrado** | Th. 6.1.1 geom5 PDF 39 (6.1.1) y geom6 PDF 1 (6.1.2, Th. 6.1.2); Ej. 6.1.1 a 6.1.5 en geom6 PDF 1 a 3 (6.1.2 a 6.1.4); L de baldosas PDF 2 y 3 (6.1.3, 6.1.4) |
| **Área del paralelogramo** | Th. 6.2.1, geom6 PDF 9 (6.2.1); Ej. 6.2.1 a 6.2.5, PDF 9 a 12 (6.2.1 a 6.2.4) |
| **Área del trapecio** | Th. 6.5.1, geom6 PDF 31 (6.5.1); Ej. 6.5.1 y 6.5.2, PDF 31 y 32 (6.5.1, 6.5.2) |
| Área del rombo | Th. 6.4.1, geom6 PDF 26 (6.4.1); Ej. 6.4.1 a 6.4.3, PDF 26 a 28 (6.4.1 a 6.4.3) |
| **Área del círculo** | Th. 7.6.1, geom7 PDF 56 (7.6.1); Ej. 7.6.1 PDF 56; sector PDF 57 (7.6.2) (fórmula 7.6.3 y 7.6.4); segmento y áreas sombreadas geom8 PDF 1 (7.6.3); nota del papiro de Rhind y de Arquímedes geom8 PDF 2 (7.6.4) |
| **Área de un polígono regular** | Th. 7.1.4 (A = ½aP), geom6 PDF 41 y 42 (7.1.4, 7.1.5); Ej. 7.1.3 PDF 42 (7.1.5); Ej. 7.1.5 geom7 PDF 1 (7.1.7). Apotema: geom6 PDF 40 y 41 (7.1.3, 7.1.4) |
| **Polígonos regulares: ángulos, centro, radio, apotema, perímetro** | centro y radios Th. 7.1.1 y 7.1.2, geom6 PDF 38 (7.1.1); Ej. 7.1.1 PDF 39 (7.1.2); perímetro con el radio Th. 7.1.5 PDF 42 y 43 (7.1.5, 7.1.6); tabla 7.1.1 PDF 43 (7.1.6); Ej. 7.1.4 PDF 43 (7.1.6) y geom7 PDF 1 (7.1.7). Suma de ángulos de un polígono: geom1 PDF 46 y 47 (1.5.5, 1.5.6) |
| **Perímetros** | polígono en general geom6 PDF 1 (6.1.2); triángulo geom1 PDF 56 y 57 (1.6.5, 1.6.6) y Ej. 1.6.5; paralelogramo Ej. 6.2.1, 6.2.2, 6.2.5 (geom6 PDF 10 y 12); polígono regular Th. 7.1.5 (geom6 PDF 42 y 43); circunferencia Th. 7.5.1 (geom7 PDF 47, 7.5.2); perímetros y tangentes Ej. 7.3.5 (geom7 PDF 19, 7.3.5) |
| **Circunferencia y longitud de arco** | Th. 7.5.1 (C = πd = 2πr), geom7 PDF 47 (7.5.2); arco L = (D/360)·C, Ej. 7.5.2 y 7.5.3, PDF 48 y 49 (7.5.3, 7.5.4); Eratóstenes, Arquímedes y series de π, PDF 49 y 50 (7.5.4, 7.5.5); hexágono inscrito y polígonos inscritos, PDF 46 y 47 (7.5.1, 7.5.2) |
| **Volúmenes de prismas, cilindros, conos, esferas** | **NO aparecen**: el libro es de geometría plana (solo mención histórica de "volúmenes", geom1 PDF 7, 1.1.4) |
| **Razones trigonométricas en el triángulo rectángulo (Unidad 05)** | definición geom5 PDF 8 (5.1.1); Ej. 5.1.1 a 5.1.7 PDF 9 a 14 (5.1.2 a 5.1.7); valores de 30 PDF 10 y 11 (5.1.3, 5.1.4), 45 por geom4 PDF 40 y 41 (4.5.4, 4.5.5); invariancia Th. 5.1.1 PDF 12 (5.1.5); tabla y calculadora PDF 18 (5.2.1) y tabla en geom8 PDF 13 a 15; resolver triángulos Ej. 5.2.2 a 5.2.8 PDF 18 a 23 (5.2.1 a 5.2.6); aplicaciones elevación y depresión PDF 34 a 36 (5.3.1 a 5.3.3); historia y serie del seno PDF 23 y 24 (5.2.6, 5.2.7). Triángulos especiales 30-60-90 y 45-45-90: Th. 4.5.1 y 4.5.2, geom4 PDF 37 a 44 (4.5.1 a 4.5.8) |
| **Ángulos en el círculo** | central y arco: geom7 PDF 24 y 25 (7.4.1, 7.4.2); inscrito Th. 7.4.1 PDF 25 a 28 (7.4.2 a 7.4.5), prueba de tres casos PDF 26 a 28 (7.4.3 a 7.4.5); semicírculo Th. 7.4.2 PDF 29 (7.4.6); paralelas Th. 7.4.3 PDF 30 y 31 (7.4.7, 7.4.8); tangente-cuerda Th. 7.4.4 PDF 31 y 32 (7.4.8, 7.4.9); cuerdas que se cortan Th. 7.4.5 PDF 32 y 33 (7.4.9, 7.4.10); secantes y tangentes exteriores Th. 7.4.6 PDF 33 y 34 (7.4.10, 7.4.11); problemas PDF 34 a 45 |
| Cuerdas, diámetros, tangentes | cuerdas Th. 7.2.1 a 7.2.4, geom7 PDF 6 a 11 (7.2.3 a 7.2.8); tangentes Th. 7.3.1 a 7.3.3 PDF 15 a 19 (7.3.1 a 7.3.5) |
| Ángulos y rectas (base) | suma de ángulos del triángulo Th. 1.5.1, geom1 PDF 42 y 43 (1.5.1, 1.5.2); ángulo exterior Th. 1.5.2 PDF 44 y 45 (1.5.3, 1.5.4); opuestos por el vértice PDF 23 (1.3.5); paralelas Th. 1.4.1 a 1.4.3 (Z, F, C) PDF 30 a 33 (1.4.2 a 1.4.5), prueba del Z en geom8 PDF 10 y 11; complementarios y suplementarios geom1 PDF 20 a 22 |
| Cuadriláteros | paralelogramo Th. 3.1.1 a 3.1.3, geom3 PDF 3 a 7 (3.1.1 a 3.1.5); rombo, rectángulo, cuadrado, trapecio Th. 3.2.1 a 3.2.5, PDF 14 a 20 (3.2.1 a 3.2.7); tabla de propiedades PDF 22 (3.2.9) |
| Triángulos isósceles y equiláteros | Th. 2.5.1 a 2.5.4, geom2 PDF 28 a 31 (2.5.1 a 2.5.4); nota del "puente de los tontos" PDF 33 (2.5.6) |
| Ángulos del triángulo rectángulo y rígido | triángulo rígido y arriostramiento: geom2 PDF 40 (2.6.3) |
| Geometría analítica / coordenadas | **NO aparece** (ver arriba) |
| Historia (Tales, Pitágoras, Euclides, Arquímedes, Eratóstenes, Gauss, no euclidianas) | geom1 PDF 7 (1.1.4), 36 y 37 (1.4.8, 1.4.9), 47 y 48 (1.5.6, 1.5.7); geom2 PDF 11 (2.2.5), 18 (2.3.5), 33 (2.5.6); geom4 PDF 8 (4.2.9), 27 y 28 (4.4.8, 4.4.9), 44 (4.5.8); geom5 PDF 23 y 24 (5.2.6, 5.2.7); geom6 PDF 3 (6.1.4); geom7 PDF 34 (7.4.11), 49 y 50 (7.5.4, 7.5.5); geom8 PDF 2 (7.6.4) |

## Observaciones para citar

- Citar siempre `data-fuente` = `geom1` a `geom8` según el archivo, `data-pag` = página PDF de ese archivo y `data-pimp` = `s.p` (p. ej. `4.4.5`). El libro es de licencia libre (CC BY-NC-SA); la cita puede ser larga.
- La prueba de Pitágoras por semejanza está en geom4 PDF 23 y 24 y su figura central (altura sobre la hipotenusa) en geom4 PDF 1 y 2 (Ej. 4.2.3). La prueba por áreas (dos cuadrados de lado a + b) es la figura de geom4 PDF 28.
- Los datos numéricos más limpios para reusar: 3-4-5 (Ej. 4.4.1), 5-12-13 (Ej. 5.1.3), 7-24-25 (Ej. 7.2.2), 8-15-17 (respuestas 5.1.3), 39-36-15 (Ej. 4.4.8), triángulos 30-60-90 y 45-45-90 (Ej. 4.5.1 a 4.5.6), pentágono regular de lado 20 (Ej. 7.1.2 y 7.1.3, apotema 13.8, área 688.2) y de radio 10 (Ej. 7.1.4 y 7.1.5, perímetro 58.8, área 237.8).
- Los libros de Africk marcan cada paso con "Check" (comprobación) y rechazan raíces con significado geométrico negativo (Ej. 1.1.3, 1.3.2, 4.4.4, 6.1.3, 7.4.7): un buen reto de "cazar el error".
