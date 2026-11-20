import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
X = np.array([[10, 5500], [7, 2500], [9, 2000], [1, 3000], [2, 5500],
              [3, 6000], [7, 1000], [5, 1500], [1, 1500], [1, 2000]], dtype=float)
y = np.array([1, 1, 1, 0, 0, 0, 1, 1, 0, 0])
esc = StandardScaler().fit(X)
knn = KNeighborsClassifier(n_neighbors=1).fit(esc.transform(X), y)
nuevo = np.array([[1.0, 6000.0]])                   # 1 hora, 6 km
print(knn.predict(esc.transform(nuevo)))
print(knn.predict(StandardScaler().fit_transform(nuevo)))
