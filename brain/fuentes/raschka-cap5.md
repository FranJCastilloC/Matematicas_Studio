# Mapa de citas: Raschka, Liu y Mirjalili, cap. 5 "Compressing Data via Dimensionality Reduction"

Archivo: `/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap05 - Compressing Data via Dimensionality Reduction.pdf` (32 páginas PDF).
Correspondencia verificada: página PDF N = página impresa N + 138. Edición: Machine Learning with PyTorch and Scikit-Learn (Packt, 2022).

| Tema | PDF | Impresa | Sección | Qué hay |
|---|---|---|---|---|
| Introducción, las tres técnicas | 1 | 139 | encabezado del capítulo | feature selection vs feature extraction, curse of dimensionality |
| PCA: idea y figura PC1/PC2 | 2-3 | 140-141 | The main steps in principal component analysis | Figure 5.1, matriz W de d×k, PCA es sensible a la escala |
| Los 7 pasos de PCA | 3 | 141 | The main steps in PCA + recuadro Eigendecomposition | lista numerada; la matriz de covarianza es simétrica |
| Wine y StandardScaler | 4-5 | 142-143 | Extracting the principal components step by step | read_csv, train_test_split estratificado, fit_transform en train y transform en test |
| Matriz de covarianza, fórmula y np.cov | 5-6 | 143-144 | Extracting the principal components step by step | σ_jk = 1/(n−1) Σ (x_j − μ_j)(x_k − μ_k); `np.cov(X_train_std.T)` |
| np.linalg.eig, eig vs eigh | 6 | 144 | recuadro Eigendecomposition in NumPy | eigenvalores de Wine 4.84, 2.42, 1.55...; eigh es más estable para simétricas |
| Varianza explicada | 6-8 | 144-146 | Total and explained variance | λ_j / Σλ; cumsum; Figure 5.2; PC1 ≈ 40 %, dos primeras ≈ 60 % |
| Transformación de features | 8-10 | 146-148 | Feature transformation | eigen_pairs ordenados, W 13×2 con np.hstack, recuadro Mirrored projections (p. 147), X_train_std.dot(w), Figure 5.3 |
| PCA en scikit-learn | 11-14 | 149-152 | Principal component analysis in scikit-learn | plot_decision_regions, PCA(n_components=2) + LogisticRegression, Figures 5.4 y 5.5, espejo por signo de eigenvectores (p. 151), explained_variance_ratio_ con n_components=None |
| Loadings | 14-16 | 152-154 | Assessing feature contributions | loadings = eigen_vecs * sqrt(eigen_vals); Figures 5.6 y 5.7 |
| LDA: idea y comparación con PCA | 16-20 | 154-158 | Supervised data compression via LDA | Figure 5.8, supuestos, los 7 pasos, scatter matrices S_W y S_B |
| LDA paso a paso y en sklearn | 20-25 | 158-163 | Selecting linear discriminants... / LDA via scikit-learn | inv(S_W).dot(S_B), a lo sumo c−1 discriminantes, Figures 5.9 a 5.12 |
| No lineal y t-SNE | 25-30 | 163-168 | Nonlinear dimensionality reduction and visualization | Figure 5.13, Swiss roll 5.14, t-SNE con Digits, init='pca', perplexity, Figure 5.16, recuadro UMAP |
| Summary | 31 | 169 | Summary | dos párrafos |

Observaciones: la covarianza se escribe con 1/(n−1); el signo de los eigenvectores puede salir invertido (p. 147 y p. 151); estandarizar antes de PCA (p. 141); t-SNE no proyecta puntos nuevos (p. 166).
