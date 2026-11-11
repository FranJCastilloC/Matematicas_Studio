/*
  Catalogo de la biblioteca. Una entrada por concepto.
  Claude agrega una entrada nueva cada vez que se suma un concepto.

  Campos:
    id            igual al id que usa la pagina en Biblioteca.concepto({id})
    titulo        nombre del concepto (los enlaces entre paginas se resuelven por este titulo exacto)
    area          Estadistica, Preprocesamiento, Algebra lineal, Reduccion de dimensionalidad, ...
    unidad        ruta de estudio a la que pertenece (por ejemplo la UD1 del master)
    orden         posicion dentro de la ruta
    archivo       ruta relativa desde biblioteca/
    resumen       una frase: que vas a ver
    fuente        de donde salio (libro, curso, materia)
    agregado      fecha AAAA-MM-DD
    prerequisitos titulos de conceptos que conviene tener antes
    siguientes    titulos de conceptos que se apoyan en este
    labs          paginas extra del concepto [{titulo, archivo}]
*/
window.UNIDADES = [
  { id: "ud1", titulo: "UD1 · Estadística descriptiva y análisis", descripcion: "La unidad 1 del máster: describir los datos, explorarlos, prepararlos y reducir sus dimensiones. En el orden en que conviene estudiarla." },
  { id: "bml1", titulo: "Álgebra lineal · Before Machine Learning, vol. 1", descripcion: "El libro de Jorge Brasil de punta a punta: de una flecha en el plano hasta la SVD y PCA. Incluye las páginas de eigenvectores y PCA de la UD1 en su lugar dentro del libro." }
];

window.CATALOGO = [
  {
    id: "media-mediana-moda",
    titulo: "Media, mediana y moda",
    area: "Estadística",
    unidad: "ud1", orden: 1,
    archivo: "conceptos/media-mediana-moda.html",
    resumen: "Tres formas de decir dónde está el centro de los datos, y por qué un solo valor extremo arrastra a una y no a las otras.",
    fuente: "UD1 §2 y §3, Nield cap. 3",
    agregado: "2026-11-05",
    prerequisitos: [],
    siguientes: ["Varianza y desviación estándar", "Percentiles, cuartiles y box plot", "Asimetría y curtosis"]
  },
  {
    id: "varianza-desviacion",
    titulo: "Varianza y desviación estándar",
    area: "Estadística",
    unidad: "ud1", orden: 2,
    archivo: "conceptos/varianza-desviacion.html",
    resumen: "Cuánto se alejan los datos de su centro: cada desvío es el lado de un cuadrado, y la varianza es el área promedio.",
    fuente: "UD1 §4, Nield cap. 3",
    agregado: "2026-11-05",
    prerequisitos: ["Media, mediana y moda"],
    siguientes: ["Covarianza", "Estandarización y normalización", "Asimetría y curtosis"]
  },
  {
    id: "percentiles-iqr",
    titulo: "Percentiles, cuartiles y box plot",
    area: "Estadística",
    unidad: "ud1", orden: 3,
    archivo: "conceptos/percentiles-iqr.html",
    resumen: "Cortar los datos ordenados en partes iguales, dibujar la caja y decidir con una regla quién es un valor atípico.",
    fuente: "UD1 §4.5",
    agregado: "2026-11-05",
    prerequisitos: ["Media, mediana y moda"],
    siguientes: ["Asimetría y curtosis", "Estandarización y normalización"]
  },
  {
    id: "asimetria-curtosis",
    titulo: "Asimetría y curtosis",
    area: "Estadística",
    unidad: "ud1", orden: 4,
    archivo: "conceptos/asimetria-curtosis.html",
    resumen: "La silueta de la distribución: hacia qué lado se estira la cola y cuánto pesan los extremos.",
    fuente: "UD1 §5",
    agregado: "2026-11-05",
    prerequisitos: ["Media, mediana y moda", "Varianza y desviación estándar"],
    siguientes: ["Estandarización y normalización"]
  },
  {
    id: "covarianza",
    titulo: "Covarianza",
    area: "Estadística",
    unidad: "ud1", orden: 5,
    archivo: "conceptos/covarianza.html",
    resumen: "Cómo se mueven juntas dos variables: cada punto aporta un rectángulo con signo, y de dos variables se pasa a la matriz.",
    fuente: "UD1 §7.2, Raschka cap. 5",
    agregado: "2026-11-05",
    prerequisitos: ["Media, mediana y moda", "Varianza y desviación estándar", "Estandarización y normalización"],
    siguientes: ["Correlación de Pearson", "PCA", "Eigenvectores y eigenvalores"],
    labs: [{ titulo: "Matriz 13×13 del dataset Wine, fila por fila", archivo: "conceptos/covarianza-matriz-lab.html" }]
  },
  {
    id: "correlacion-pearson",
    titulo: "Correlación de Pearson",
    area: "Estadística",
    unidad: "ud1", orden: 6,
    archivo: "conceptos/correlacion-pearson.html",
    resumen: "La covarianza sin unidades: un número entre −1 y 1 que dice qué tan cerca de una recta están los puntos.",
    fuente: "UD1 §7.2",
    agregado: "2026-11-05",
    prerequisitos: ["Covarianza", "Varianza y desviación estándar"],
    siguientes: ["PCA"]
  },
  {
    id: "estandarizacion",
    titulo: "Estandarización y normalización",
    area: "Preprocesamiento",
    unidad: "ud1", orden: 7,
    archivo: "conceptos/estandarizacion.html",
    resumen: "Poner todas las variables en la misma escala para que ninguna domine, y por qué los parámetros salen solo del entrenamiento.",
    fuente: "UD1 §8.1 y §8.2, Raschka cap. 5",
    agregado: "2026-11-05",
    prerequisitos: ["Media, mediana y moda", "Varianza y desviación estándar"],
    siguientes: ["Covarianza", "PCA", "Codificación y datos faltantes"]
  },
  {
    id: "codificacion-faltantes",
    titulo: "Codificación y datos faltantes",
    area: "Preprocesamiento",
    unidad: "ud1", orden: 8,
    archivo: "conceptos/codificacion-faltantes.html",
    resumen: "Convertir categorías en números sin inventar un orden que no existe, y rellenar huecos sin mentirle al modelo.",
    fuente: "UD1 §8.3 a §8.5",
    agregado: "2026-11-05",
    prerequisitos: ["Media, mediana y moda", "Estandarización y normalización"],
    siguientes: ["PCA"]
  },
  {
    id: "eigenvectores",
    titulo: "Eigenvectores y eigenvalores",
    area: "Álgebra lineal",
    unidad: "ud1", orden: 9,
    tambien: [{ unidad: "bml1", orden: 7 }],
    archivo: "conceptos/eigenvectores.html",
    resumen: "Una matriz mueve todos los vectores menos unos pocos, que solo se estiran: esas direcciones son los ejes de los datos.",
    fuente: "Nield cap. 4, Brasil caps. 4 y 5",
    agregado: "2026-11-05",
    prerequisitos: ["Covarianza", "La matriz como transformación", "Determinante"],
    siguientes: ["Diagonalización", "PCA"]
  },
  {
    id: "pca",
    titulo: "PCA",
    area: "Reducción de dimensionalidad",
    unidad: "ud1", orden: 10,
    tambien: [{ unidad: "bml1", orden: 10 }],
    archivo: "conceptos/pca.html",
    resumen: "Girar los ejes hasta que el primero capture la mayor varianza posible, y quedarse con los pocos que explican casi todo.",
    fuente: "UD1 §9, Raschka cap. 5, Brasil cap. 6, Jansen cap. 13",
    agregado: "2026-11-05",
    prerequisitos: ["Covarianza", "Eigenvectores y eigenvalores", "Estandarización y normalización"],
    siguientes: ["LDA y t-SNE"]
  },
  {
    id: "lda-tsne",
    titulo: "LDA y t-SNE",
    area: "Reducción de dimensionalidad",
    unidad: "ud1", orden: 11,
    archivo: "conceptos/lda-tsne.html",
    resumen: "Dos alternativas a PCA: una que usa las etiquetas para separar clases, y otra que no es lineal y solo sirve para mirar.",
    fuente: "UD1 §9.2, Raschka cap. 5",
    agregado: "2026-11-05",
    prerequisitos: ["PCA"],
    siguientes: []
  }
  ,
  {
    id: "vectores-suma-escalado",
    titulo: "Vectores: suma y escalado",
    area: "Álgebra lineal",
    unidad: "bml1", orden: 1,
    archivo: "conceptos/vectores-suma-escalado.html",
    resumen: "Una flecha desde el origen: sumar es poner una a continuación de otra, escalar es estirarla, encogerla o darla vuelta.",
    fuente: "Brasil cap. 3, Nield cap. 4",
    agregado: "2026-11-06",
    prerequisitos: [],
    siguientes: ["Producto punto y similitud coseno", "Span, base y cambio de base"]
  },
  {
    id: "producto-punto-coseno",
    titulo: "Producto punto y similitud coseno",
    area: "Álgebra lineal",
    unidad: "bml1", orden: 2,
    archivo: "conceptos/producto-punto-coseno.html",
    resumen: "Cuánto de una flecha apunta en la dirección de otra: la sombra, la norma, el ángulo, y cómo recomendar películas con un coseno.",
    fuente: "Brasil cap. 3",
    agregado: "2026-11-06",
    prerequisitos: ["Vectores: suma y escalado"],
    siguientes: ["Span, base y cambio de base", "La matriz como transformación", "Covarianza", "Correlación de Pearson"]
  },
  {
    id: "span-base-cambio-de-base",
    titulo: "Span, base y cambio de base",
    area: "Álgebra lineal",
    unidad: "bml1", orden: 3,
    archivo: "conceptos/span-base-cambio-de-base.html",
    resumen: "Con dos flechas que no apuntan igual llegas a cualquier punto del plano; cambiar de base es medir lo mismo con otra regla.",
    fuente: "Brasil cap. 3, Nield cap. 4",
    agregado: "2026-11-06",
    prerequisitos: ["Vectores: suma y escalado"],
    siguientes: ["La matriz como transformación", "PCA"]
  },
  {
    id: "matriz-transformacion",
    titulo: "La matriz como transformación",
    area: "Álgebra lineal",
    unidad: "bml1", orden: 4,
    archivo: "conceptos/matriz-transformacion.html",
    resumen: "Una matriz dice adónde van i y j, y con eso mueve todo el plano. Multiplicar matrices es encadenar movimientos.",
    fuente: "Brasil cap. 4, Nield cap. 4",
    agregado: "2026-11-06",
    prerequisitos: ["Producto punto y similitud coseno", "Span, base y cambio de base"],
    siguientes: ["Determinante", "Inversa y sistemas de ecuaciones", "Eigenvectores y eigenvalores"]
  },
  {
    id: "determinante",
    titulo: "Determinante",
    area: "Álgebra lineal",
    unidad: "bml1", orden: 5,
    archivo: "conceptos/determinante.html",
    resumen: "Cuánto agranda o achica el área una matriz, con signo: negativo da vuelta el plano y cero lo aplasta en una recta.",
    fuente: "Brasil cap. 4, Nield cap. 4",
    agregado: "2026-11-06",
    prerequisitos: ["La matriz como transformación"],
    siguientes: ["Inversa y sistemas de ecuaciones", "Eigenvectores y eigenvalores"]
  },
  {
    id: "inversa-sistemas",
    titulo: "Inversa y sistemas de ecuaciones",
    area: "Álgebra lineal",
    unidad: "bml1", orden: 6,
    archivo: "conceptos/inversa-sistemas.html",
    resumen: "Resolver Ax = b es buscar qué vector cae en b. La inversa deshace el movimiento, salvo que la matriz haya aplastado el plano.",
    fuente: "Brasil cap. 4, Nield cap. 4",
    agregado: "2026-11-06",
    prerequisitos: ["La matriz como transformación", "Determinante"],
    siguientes: ["Eigenvectores y eigenvalores", "Diagonalización"]
  },
  {
    id: "diagonalizacion",
    titulo: "Diagonalización",
    area: "Álgebra lineal",
    unidad: "bml1", orden: 8,
    archivo: "conceptos/diagonalizacion.html",
    resumen: "Mirada desde sus eigenvectores, una matriz solo estira por ejes. Así se elevan matrices a potencias sin multiplicar cien veces.",
    fuente: "Brasil cap. 4",
    agregado: "2026-11-06",
    prerequisitos: ["Eigenvectores y eigenvalores", "Inversa y sistemas de ecuaciones"],
    siguientes: ["SVD", "PCA"]
  },
  {
    id: "svd",
    titulo: "SVD",
    area: "Álgebra lineal",
    unidad: "bml1", orden: 9,
    archivo: "conceptos/svd.html",
    resumen: "Toda matriz, cuadrada o no, es rotar, estirar y rotar: el círculo se vuelve elipse. Y quedarse con pocas piezas comprime casi sin perder.",
    fuente: "Brasil cap. 5",
    agregado: "2026-11-06",
    prerequisitos: ["Diagonalización", "Eigenvectores y eigenvalores", "La matriz como transformación"],
    siguientes: ["PCA"]
  }
];
