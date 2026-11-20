import numpy as np
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import KFold, cross_val_score
X = np.array([[10, 5500], [7, 2500], [9, 2000], [1, 3000], [2, 5500],
              [3, 6000], [7, 1000], [5, 1500], [1, 1500], [1, 2000]], dtype=float)
y = np.array([1, 1, 1, 0, 0, 0, 1, 1, 0, 0])
pipe = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=1))
print(cross_val_score(pipe, X, y, cv=KFold(5)).mean())
print(cross_val_score(pipe, X, y, cv=5).mean())
