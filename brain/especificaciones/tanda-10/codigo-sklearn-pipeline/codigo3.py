import numpy as np
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import KFold, cross_val_score
df = pd.DataFrame({"horas": [10, 7, 9, 1, 2, 3, 7, 5, 1, 1],
                   "dist": [5500, 2500, 2000, 3000, 5500, 6000, 1000, 1500, 1500, 2000],
                   "turno": ["mañana", "tarde", "tarde", "noche", "mañana",
                             "tarde", "mañana", "mañana", "tarde", "tarde"]})
y = np.array([1, 1, 1, 0, 0, 0, 1, 1, 0, 0])
prep = ColumnTransformer([("num", StandardScaler(), ["horas", "dist"]),
                          ("cat", OneHotEncoder(), ["turno"])])
pipe = make_pipeline(prep, KNeighborsClassifier(n_neighbors=1))
print(cross_val_score(pipe, df, y, cv=KFold(5)))
pipe.set_params(columntransformer__cat__handle_unknown="ignore")
print(cross_val_score(pipe, df, y, cv=KFold(5)))
