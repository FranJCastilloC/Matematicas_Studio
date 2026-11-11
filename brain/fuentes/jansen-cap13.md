# Mapa de citas: Jansen, cap. 13 "Data-Driven Risk Factors and Asset Allocation with Unsupervised Learning"

Archivo: `/Users/franciscocastillo/brain/02-Biblioteca/Finanzas-ML/ML4T/Cap13 - Data-Driven Risk Factors and Asset Allocation with Unsupervised Learning.pdf` (32 páginas PDF).
Correspondencia: página PDF N = impresa N + 406.

| Tema | PDF | Impresa | Sección | Qué hay |
|---|---|---|---|---|
| Qué es no supervisado y por qué en finanzas | 1-2 | 407-408 | encabezado del capítulo | reducción de dimensionalidad y clustering como tareas principales |
| Maldición de la dimensionalidad | 2-5 | 408-411 | Dimensionality reduction / The curse of dimensionality | Figure 13.2 (PDF 4): cuántos puntos hacen falta por dimensión; Figure 13.3 distancia promedio |
| PCA: idea, figura, supuestos | 5-7 | 411-413 | Principal component analysis / Key assumptions | Figure 13.4 (PDF 6): PC1 y PC2, error de reconstrucción, PCA vs OLS; supuestos; Figure 13.5 elipse 3D |
| PCA con covarianza y con SVD, código | 8-10 | 414-416 | PCA based on the covariance matrix / PCA using SVD | cov con N−1; np.cov, eig, comparación con sklearn (signo arbitrario); Figure 13.6 SVD |
| PCA con sklearn | 10-11 | 416-417 | PCA with sklearn | svd_solver, n_components float para retener varianza, explained_variance_ratio_ |
| Factores de riesgo con PCA | 15-18 | 421-424 | PCA for trading / Data-driven risk factors | 350 acciones 2010-2018; PC1 ≈ 55 % = "el mercado"; Figure 13.8 y 13.9; PC1 y PC2 no correlacionadas |
| Eigenportfolios | 18-20 | 424-426 | Eigenportfolios | componentes como pesos de cartera; Figure 13.11 y 13.12 |
| Advertencias: outliers, faltantes, estandarizar | 7, 9, 16, 18 | 413, 415, 422, 424 | varias | PCA es sensible a outliers (winsorizar), no admite faltantes, centrar antes de SVD |
| Resto: ICA, manifold, t-SNE (PDF 13-14), UMAP, clustering, HRP | 11-14, 20-32 | 417-420, 426-438 | varias | solo ubicación |
