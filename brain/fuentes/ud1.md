# Mapa de citas: UD1 Estadística descriptiva y análisis (SM142001, máster IA UAX)

A = `.../UD1. Estadística descriptiva y análisis/SM142001_MUIA_UD1_CONTENIDO TEÓRICO-2.pdf` (30 páginas; PDF = impresa).
B = `.../UD1. Estadística descriptiva y análisis/V2k8es-Unidad_1.pdf` (56 diapositivas; PDF = impresa; el índice de B p.2 no coincide con las páginas reales).

| Tema | A (teoría) | B (diapositivas) | Notas |
|---|---|---|---|
| Introducción y objetivos | 3-5 | 3-9, 11 | B 4-6: tabla modelado estadístico vs ML |
| Tipos de variables | 5 (Tabla 1) | 12-13 (añade variable dummy) | sin escalas de medida |
| Media | 6 | 15 | B 14: mapa de todas las medidas |
| Mediana | 6-7 (4 casos, agrupada con F_{i-1}, f_i) | 16 (nota de robustez) | |
| Moda | 7 (Ilustración 1) | 17 | |
| Rango | no aparece | solo nombre en 14 | |
| Varianza | 7 (solo fórmula computacional con n) | 18 | no hay n−1 para la varianza |
| Desviación estándar | 8 | 18 | sin regla 68-95-99.7 |
| Coeficiente de variación | no aparece | no aparece | |
| Percentiles, cuartiles | 8 (solo definiciones) | 19-20 | |
| IQR, regla 1.5·IQR, box plot | no | 21-22 (figura clave con bigotes y outliers) | único lugar |
| Asimetría g1 | 9 (Ilustración 3) | 25, 23 | S_{c,x} nunca se define |
| Curtosis g2 | 9-10 (Ilustración 4) | 26, 23 | con el −3 |
| Aplicación en ML | 10-11 (Tabla 2) | 27 | |
| EDA | 11-14 (Tabla 3, Ilustración 5) | 28-33 (p.32 con script R de densidad) | A clasifica univariado/bivariado/multivariado |
| Covarianza | 20 (dentro de PCA, con n−1) | 34 (única slide dedicada), 45 | B 34: Cov centrada y Pearson = Cov/(s_X s_Y) |
| Correlación Pearson y Spearman | 15-17 (Ilustración 6 y 7; Spearman solo aquí) | 34-37 (p.36 matriz 3×3, p.37 script R) | |
| Z-score | 14-15 | 33 | |
| Normalización min-max | 18 | 38 | |
| Estandarización | 18 | 39 | |
| Datos faltantes | 17 | 27 | |
| Codificación categórica | 18-19 (6 técnicas) | 40 | sin ejemplo numérico |
| Pipeline y data leakage | no | no | |
| PCA | 19-21 (5 pasos) | 41-50 (autovector p.43, geometría p.44, pasos 45-46, codo, Iris 48-50) | B mucho más completo; único ejemplo numérico de la unidad |
| t-SNE | 21-23 (KL, ventajas) | 51-53 (gradiente, código R) | complementarios |
| LDA | no | no | |
| Selección de características | 23-24 | 54 | |

Errores del material: A p.20 "MC_v = λ_v"; A p.22 q_ij con y_i − y_i; A p.24 "Corrección de Pearson"; B 12-13 diapositiva duplicada; B p.44 confunde covarianza cero con independencia.
