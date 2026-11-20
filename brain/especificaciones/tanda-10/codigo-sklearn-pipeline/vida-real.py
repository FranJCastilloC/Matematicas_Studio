import numpy as np
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import KFold, cross_val_score
horas = np.array([10, 7, 9, 1, 2, 3, 7, 5, 1, 1])
dist = np.array([5500, 2500, 2000, 3000, 5500, 6000, 1000, 1500, 1500, 2000])  # metros
X = np.column_stack([horas, dist]).astype(float)
y = np.array([1, 1, 1, 0, 0, 0, 1, 1, 0, 0])       # inventado: 1 = aprobó
aciertos = []
for f in range(5):
    prueba = [2 * f, 2 * f + 1]
    entreno = [i for i in range(10) if i not in prueba]
    media = X[entreno].mean(axis=0)           # fit: solo con su train
    desv = X[entreno].std(axis=0)
    Ze = (X[entreno] - media) / desv          # transform del train
    Zp = (X[prueba] - media) / desv           # transform del test, con lo del train
    bien = 0
    for i in range(2):
        d2 = ((Ze - Zp[i]) ** 2).sum(axis=1)
        vecino = d2.argmin()
        if y[entreno][vecino] == y[prueba][i]:
            bien = bien + 1
    aciertos.append(bien / 2)
print(aciertos)
print(np.mean(aciertos))
pipe = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=1))
print(cross_val_score(pipe, X, y, cv=KFold(5)))
