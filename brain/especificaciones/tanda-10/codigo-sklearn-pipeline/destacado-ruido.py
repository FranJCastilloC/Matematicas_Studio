import numpy as np
from sklearn.pipeline import make_pipeline
from sklearn.feature_selection import SelectKBest, f_classif
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import KFold, cross_val_score
rng = np.random.default_rng(3)
X = rng.normal(size=(40, 1000))          # 1000 columnas de puro ruido
y = np.array([0, 1] * 20)                # etiquetas sin relación con X
Xsel = SelectKBest(f_classif, k=5).fit_transform(X, y)    # fuga: elige mirando las 40 filas
print(cross_val_score(LogisticRegression(), Xsel, y, cv=KFold(5)).mean())
pipe = make_pipeline(SelectKBest(f_classif, k=5), LogisticRegression())
print(cross_val_score(pipe, X, y, cv=KFold(5)).mean())
