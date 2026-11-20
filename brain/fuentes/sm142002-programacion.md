# Mapa de citas: SM142002 Programación y entorno de trabajo para la IA (UD1 Python y SQL, UD4 R; UD5 completa; remite a sm142002-eda.md para UD6)

Materia: SM142002 Programación y entorno de trabajo para la IA (máster IA, UAX, 1er cuatrimestre 2026-27; profesores Sebastián Abreu y Óscar Fernández).
Carpeta: `/Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE 1 /SM142002 - Programacion y entorno de trabajo para la IA/`
(ojo: "SEMESTRE 1 " lleva un espacio al final). Esta materia entra en la biblioteca como grupo "Infraestructura y programación".

Cómo se leyó: PDF con `pdftotext -layout` página a página (más render de las páginas que son imagen: p.28 y p.31 de UD1, figuras de UD5, ejercicios ggplot2);
pptx desempaquetado y cada diapositiva (todas son imágenes) vista renderizada; notebooks `.ipynb` leídos celda por celda con sus salidas guardadas;
HTML de Quarto con un parser que lista cada `<section id>`; las hojas de referencia (cheat sheets) solo se inventariaron (sin tabla fila por fila).
Todo lo que dice "verificado" se volvió a ejecutar en esta máquina: R 4.6.1 (dplyr, ggplot2), Python 3 con NumPy 2.1.3, pandas y SQLite 3.45.3.

## Archivos, ids, relación PDF/impresa y cómo enlazar

Relación PDF/impresa (verificada con el pie de página y con el índice de cada PDF):
- **prog1** (UD1 teoría): PDF = impresa en todas las páginas numeradas (p.3 -> 3, p.14 -> 14, p.25 -> 25, p.31 -> 31, p.36 -> 36). p.1 portada, p.2 índice, p.37 "GRACIAS". El índice coincide con las páginas reales en todas sus entradas.
- **prog4** (UD4 teoría): PDF = impresa (p.3 -> 3, p.4 -> 4, p.5 -> 5, p.16 -> 16, p.24 -> 24). p.1 portada, p.2 índice, p.26 "GRACIAS". El índice coincide.
- **eda5** (UD5 teoría, id ya registrado): PDF = impresa (p.5 -> 5 ... p.34 -> 34). p.35 "GRACIAS". El índice coincide (tidyverse 5, data.table 15, ggplot2 18, conclusiones 33, bibliografía 34).
- **R sesión 1.pdf** son diapositivas exportadas (32 páginas) y **la numeración impresa no coincide con la página del PDF**: PDF p.1->1, 2->2, 3->3, 4->6, 5->7, 6->8, 7->9, 8->11, 9 (portada "Unidad 4", sin número), 10->13, 11->14, 12->15, 13->16, 14->17, 15->18, 16->19, 17->20, 18->21, 19->22, 20->23, 21->24, 22->25, 23->26, 24->27, 25->28, 26->29, 27->30, 28->32, 29->33, 30->34, 31->35, 32->39. Citar siempre la página del PDF.
- **prog1diapo** (pptx): 16 diapositivas; el número que muestran es su posición (diapositiva N = número N). Casi todo es imagen.
- **prog1nb** (notebooks): se cita por nombre de archivo y número de celda. "Celda N" = posición N (desde 1) contando todas las celdas, Markdown incluidas (Colab y Jupyter no numeran las celdas de código igual). Las salidas guardadas existen, pero el contador de ejecución está vacío en los tres cuadernos de clase.

Ids pedidos (nuevos) y ids ya registrados que se reutilizan:

| id | archivo (bajo la carpeta de la materia) | formato | cómo se cita |
|---|---|---|---|
| `prog1` | `UD1. Python, IDEs y SQL/SM142002_MUIA_UD1_CONTENIDO TEÓRICO.pdf` | 37 págs, Word; metadatos dicen "UD5" por error (cabeceras dicen Unidad 1) | `data-pag` = pág. del PDF (= impresa) |
| `prog1diapo` | `UD1. Python, IDEs y SQL/SM142002_MUIA_UD1_PRESENTACIÓN.pptx` | 16 diapositivas (3 de portada/separador, 13 con imagen sin texto) | `tipo: "diapositivas"`, `data-pag` = nº de diapositiva. Un pptx no se abre con `#page=`; en la página, el botón copia la ruta |
| `prog1nb` | `UD1. Python, IDEs y SQL/Notebooks y otros recursos/UAX_20251020.ipynb`, `UAX_20251028.ipynb`, `UAX_20251105.ipynb` y `UD1. Python, IDEs y SQL/Clase 26 octubre/brazilian-ecomerce/analisis_olist.ipynb` | notebooks | "UAX_20251105, celda 80" |
| `prog4` | `UD4. R/SM142002_MUIA_UD4_CONTENIDO TEÓRICO.pdf` | 26 págs, Word | `data-pag` = pág. del PDF (= impresa) |
| `prog4html` | `UD4. R/Módulo 1 - Programación en R.html` | Quarto 1.7.32, 9.1 MB, un solo documento con índice lateral (no es reveal.js) | `data-ancla` = id de sección sin `#` (tiene tildes; el navegador las acepta) |
| `prog4ej` | `UD4. R/ejercicios sesión 1 resueltos.R`, `Ejercicios sesión 2 vectores.R` y `- soluciones.R`, `Ejercicios sesión 2 data frames.R` y `- soluciones.R` | scripts R | nombre de archivo y número de línea |
| `eda5` (existe) | `UD5. R/SM142002_MUIA_UD5_CONTENIDO TEÓRICO.pdf` | 35 págs | pág. del PDF (= impresa) |
| `eda6`, `eda6doc` (existen) | UD6 PDF y `Unidad 6 - EDA II.html` | ver `sm142002-eda.md` | no se repite aquí |

Ids extra que conviene registrar (no pedidos; propuesta): `prog1hojas` (las cuatro hojas de referencia, ver tabla), `prog4s1` (`UD4. R/R sesión 1.pdf`), `eda5doc` (`UD5. R/Unidad 5 - EDA I.html`, Quarto 1.7.32, 145 KB de texto, nunca mapeado antes salvo su lista de secciones) y `eda5ej` (`UD5. R/ejercicios ggplot2.pdf`, `Ejercicio EDA I.R`, `Ejercicio EDA I RESUELTO.R`).

Enlace base (cambiar el nombre del archivo; los espacios van como `%20`, el espacio final de "SEMESTRE 1 " como `%201%20`):
`file:///Users/franciscocastillo/brain/01-Academico/Master-IA-UAX/SEMESTRE%201%20/SM142002%20-%20Programacion%20y%20entorno%20de%20trabajo%20para%20la%20IA/UD1.%20Python,%20IDEs%20y%20SQL/SM142002_MUIA_UD1_CONTENIDO%20TE%C3%93RICO.pdf#page=N`

Otros archivos de la carpeta:
- `00 Bienvenida - guia y cronograma/02_MUIA_SM142002_Guia de aprendizaje.docx`: guía (6 créditos, online; evaluación 2 entregas de 25 % más examen de 50 %, según `resumen.pdf`). Describe 6 módulos. Ver inconsistencias en erratas.
- `resumen.pdf` (1 página): resumen de la materia (no es material del curso; es una nota de estudio): unidades, libros y la advertencia "Ninguno de tus libros trabaja con R".
- `UD1. Python, IDEs y SQL/Notebooks y otros recursos.zip` y `dataset.zip`: contienen los mismos archivos por nombre que la carpeta (no se compararon byte a byte). `dataset.zip` trae `clander.csv`, `customer.csv`, `order.csv`, `product.csv` (1000 filas cada uno), que son los datos de los tres cuadernos de clase.
- `UD1.../Clase 26 octubre/brazilian-ecomerce/data/*.csv`: Olist (e-commerce brasileño). Formas leídas con pandas: orders 99441x8, customers 99441x5, order_items 112650x7, order_payments 103886x5, order_reviews 99224x7, products 32951x9, sellers 3095x4, geolocation 1000163x5, category translation 71x2.
- UD6: `Quarto usado en clase grupo 1.qmd`, `grupo 2.qmd`, `st_hospital.xlsx`, ejercicios .R: ya descritos en `sm142002-eda.md`; no se releyeron.
- NO están en la carpeta: UD2 (Pandas, NumPy, SciPy, Matplotlib, Seaborn) ni UD3 (scikit-learn, TensorFlow, Git). La guía y el resumen dicen que "aún no están publicadas". De UD2 solo existen las hojas de referencia y los cuadernos de clase de UD1.

## Tabla de temas: UD1 teoría (prog1)

| Tema | pág. PDF (= impresa) | Qué hay exactamente |
|---|---|---|
| Introducción y objetivos | 3, 4 | p.3 promete "estructuras de datos clave" y librerías, pero ver "no aparece". p.4: dos objetivos específicos (IDEs: Jupyter, Colab, VS Code; SQL con joins) |
| Qué es Python | 5-6 | alto nivel, propósito general, "la legibilidad cuenta", interpretado (línea por línea), tipado dinámico, multiparadigma (objetos, funcional, imperativo), multiplataforma, comunidad. Sin una línea de código |
| Historia de Python | 6-7 | Guido van Rossum, CWI, finales de 1989; nombre por Monty Python; 0.9.0 en febrero de 1991, 1.0 en enero de 1994, 2.0 en 2000, 3.0 en 2008, fin de vida de Python 2 en enero de 2020 |
| Python en la industria | 7-10 | Imagen 1 (p.8): lenguajes más usados, fuente PYPL. Web (Django, Flask), automatización/DevOps (Ansible, SaltStack), big data (Spark, Hadoop), ciberseguridad (Scapy), portabilidad |
| Python en la ciencia de datos | 10-12 | Pandas (DataFrames "similares a las tablas relacionales", p.10), NumPy (arrays multidimensionales, "operaciones vectorizadas, significativamente más rápidas que los bucles tradicionales", p.10), Matplotlib y Seaborn (p.10-11), Scikit-learn (p.11), TensorFlow y PyTorch (p.11-12), nube (AWS, GCP, Azure, p.12). Imagen 2 (p.11): lenguajes en ciencia de datos, fuente GitHub |
| IDEs frente a frameworks | 13 | un IDE reúne editor, depurador y control de versiones; un framework da estructura base. Llama "frameworks" a Pandas, NumPy y Scikit-learn (ver erratas) |
| Jupyter Notebooks | 14-15 | celdas de código y de Markdown, resultado bajo la celda, formato `.ipynb` basado en JSON, "kernels" para más de 40 lenguajes, widgets (ipywidgets). El nombre sale de Julia, Python y R (p.14) |
| Conda y Anaconda | 16-18 | Conda: gestor de paquetes y de entornos virtuales aislados (cada entorno con sus versiones, p.16); Anaconda: distribución con más de 1,500 paquetes y Navigator (p.16); `environment.yml` para compartir el entorno (p.17); ventajas: reproducibilidad, escalabilidad, flexibilidad (p.18) |
| Google Colab | 18-21 | Jupyter en la nube, mismo `.ipynb`, GPU y TPU gratis, integración con Drive, `pip` dentro de la celda (p.19-20); límites: sesiones que se cierran, recursos limitados, requiere Internet (p.21) |
| VS Code, PyCharm y otros IDEs | 21-24 | VS Code (extensión Jupyter, depurador, Git, p.22), PyCharm (versión Professional de pago para Jupyter, p.23), Spyder (explorador de variables) y RStudio (también admite Python, p.24) |
| Qué es SQL; operaciones comunes | 25 | lenguaje estándar para bases relacionales (MySQL, PostgreSQL, SQLite, SQL Server, Oracle); filas = registros, columnas = atributos; sintaxis "declarativa" (se dice qué se quiere, no cómo); lista: SELECT, INSERT, UPDATE, DELETE, JOIN, GROUP BY y ORDER BY |
| Historia de SQL | 25-26 | IBM System R y SEQUEL, Codd 1970, Oracle 1979, ANSI 1986, ISO 1987 |
| SQL en la ciencia de datos | 26-27 | extraer y filtrar antes de pasar a Python o R; no cargar todo en memoria; Spark SQL; Imagen 3 (p.27): habilidades más pedidas, fuente LinkedIn |
| Estructura de una sentencia | 27-28 | Imagen 4 (p.28): "The Big 6 elements of a SQL SELECT statement" con SELECT, FROM, WHERE, GROUP BY, HAVING (cinco cajas; ver erratas) |
| SELECT | 28 | `SELECT column_name(s) FROM table_name;`; `SELECT *`; ejemplo `SELECT name, age FROM employees;` |
| WHERE | 28 | operadores `=, >, <, >=, <=, <>`; ejemplo `WHERE age > 30` |
| ORDER BY | 29 | `ASC|DESC`, ascendente por defecto; ejemplo `ORDER BY salary DESC` |
| LIMIT y TOP | 29 | `LIMIT n` (MySQL, PostgreSQL), `SELECT TOP n` (SQL Server); ejemplo `LIMIT 5` |
| GROUP BY | 29-30 | agrupa filas iguales; funciones `COUNT(), SUM(), AVG(), MIN(), MAX()`; ejemplo `SELECT department, COUNT(*) ... GROUP BY department` |
| HAVING | 30 | filtra después de agrupar; ejemplo `HAVING COUNT(*) > 10` |
| INSERT INTO, UPDATE | 30 | ejemplos `INSERT INTO employees (name, age, salary) VALUES ('John Doe', 30, 40000)` y `UPDATE employees SET salary = 45000 WHERE name = 'John Doe'` |
| DELETE | 31 | advierte que sin WHERE borra todo |
| Joins: idea | 31 | Imagen 5 (p.31): cuatro diagramas de Venn (INNER, FULL OUTER, LEFT OUTER, RIGHT OUTER) |
| INNER JOIN | 31-32 | solo filas con coincidencia en ambas; sintaxis `FROM table1 INNER JOIN table2 ON table1.column = table2.column`; ejemplo empleados con departamento |
| LEFT JOIN | 32 | todas las filas de la izquierda, `NULL` donde no hay coincidencia |
| RIGHT JOIN | 32-33 | todas las de la derecha; menos común |
| FULL OUTER JOIN | 33 | combina LEFT y RIGHT; ver erratas (no se avisa de que MySQL no lo trae) |
| CROSS JOIN | 33 | producto cartesiano; "número de filas de la primera por número de filas de la segunda" |
| UNION y UNION ALL | 34 | UNION quita duplicados, UNION ALL los conserva; ejemplo `employee_id` con `manager_id` |
| Conclusiones y bibliografía | 35, 36 | p.36: Anaconda Inc. (s. f.), Gron (2019), Harrington (2016), Hernandez (2017), Lutz (2013), McKinney (2017), VanderPlas (2016), Westra (2018) |

Los ejemplos SQL de la teoría usan tablas inventadas (`employees`, `departments`, `managers`) que no existen en ningún archivo. Los ejemplos que sí corren están en los cuadernos.

## Tabla de temas: UD1 presentación (prog1diapo)

| Diapositiva | Qué hay (todas imagen salvo los textos indicados) |
|---|---|
| 1 | texto: "Unidad 1 / Introducción a Python, IDEs y SQL / Programación y Entornos de Trabajo para la IA" |
| 2 | separador "Tema 1: Introducción a Python" |
| 3 | "ELT pipeline" (altexsoft): Source 1-3 -> Extract -> Load -> Data warehouse con tres "Transform" -> Analyze -> Prepared data (el orden es ELT: se carga antes de transformar) |
| 4 | "Data engineering lifecycle": Generation -> Ingestion, Transformation, Serving (sobre Storage) -> Analytics, Machine learning, Reverse ETL |
| 5 | "Undercurrents" (Security, Data management, DataOps, Data architecture, Orchestration, Software engineering) y diagrama de Google Cloud con cinco roles: data engineer (collect), data scientist (process), developer (store), data analyst (analyze), business user (activate) |
| 6 | flujo de datos: fuentes -> repositorio -> exploración de datos -> análisis/minería -> insights |
| 7 | "10 popular use cases of Python development" (web, ciencia de datos, IoT, ML, NLP, videojuegos, entretenimiento, cálculo científico, blockchain, fintech) |
| 8 | "The most popular programming languages" (PYPL vía Statista): Python 25.95 %, Java 21.42 %, JavaScript 8.26 %, C# 7.62 %, PHP 7.37 %, C/C++ 6.31 %, R 4.04 %, Objective-C 3.15 %, Swift 2.56 %, Matlab 2.04 %, TypeScript 1.57 %, Ruby 1.53 % |
| 9 | dos gráficas "2024 Programming Language Breakdown" (ZTM): salario medio en USD (Ruby, TypeScript, Kotlin arriba; Python cuarto) y número de ofertas en EE. UU. (Python primero, SQL segundo) |
| 10 | "Programming languages for data science by usage": Python 75.5 %, R 12.5 %, SQL 4.86 %, C++ 1.8 % |
| 11 | separador "Tema 2: IDEs en Ciencia de Datos" (no hay diapositivas de IDEs: la 12 ya es el siguiente separador) |
| 12 | separador "Tema 3: Introducción a SQL" |
| 13 | "Percent of all data jobs listing SQL" (Indeed, 9/8/2022): SQL cerca de 45 %, Python 40 %, Machine Learning 22 %, R 17 %, Spark 16 % (lectura de barras, valores aproximados) |
| 14 | "Technologies in data analyst job listings 2020": SQL (unos 53) y Excel (unos 45) al frente, luego Tableau, Python, R, SAS, PowerPoint, SQL Server, Oracle, Power BI |
| 15 | la misma figura "Big 6" de la teoría p.28 (cinco cajas: SELECT, FROM, WHERE, GROUP BY, HAVING) con una flecha "start of statement -> end of statement" |
| 16 | "SQL Joins": siete diagramas: left, right, full outer, left excluding inner, right excluding inner, inner, full outer excluding inner |

## Tabla de temas: UD1 cuadernos (prog1nb)

Datos de los tres cuadernos de clase: `dataset.zip` (Kaggle "sales-of-company": https://www.kaggle.com/datasets/talhachoudary/sales-of-company/data), datos sintéticos: clientes (1000x10), órdenes (1000x13), productos (1000x9), calendario (1000x10). Las columnas `Unnamed: 6/7/8` están vacías (1000 nulos). Los cuadernos leen `./clander.csv`, etc.; los CSV están dentro de `dataset.zip`.
Parentesco: `UAX_20251028` y `UAX_20251105` tienen las **52 primeras celdas idénticas** (verificado); `UAX_20251105` continúa desde la 53 (la 53 de `20251028` está vacía). `UAX_20251020` es la versión solo SQL de las primeras celdas.

| Cuaderno y celdas | Tema | Qué hay exactamente |
|---|---|---|
| UAX_20251020, 1-3 | carga | celda 2: `import pandas, numpy, matplotlib.pyplot, seaborn` y `pd.read_csv` de los cuatro CSV; celda 3 muestra `clander` |
| UAX_20251020, 4-6 | SQL dentro de Jupyter | `%load_ext sql`, `%sql sqlite://`; `%sql --persist clientes` y `ordenes` vuelcan un DataFrame a una tabla SQLite; `%config SqlMagic.style = '_DEPRECATED_DEFAULT'` |
| UAX_20251020, 7-11 | SELECT, WHERE, alias, LIKE | c7 `WHERE Country = "China"`; c8 alias `AS` y `<>`; c9 `CustomerID > 10 AND CustomerID < 20` (devuelve 9 filas aunque `LIMIT 10`); c10 `LIKE 'S%'`; c11 `Country = 'China' AND Gender = 'Male'` |
| UAX_20251020, 12 | GROUP BY | cuenta, máximo y mínimo de `CustomerID` por país, `ORDER BY Clientes`; los países con 1 cliente salen primero (American Samoa, Angola, ...) |
| UAX_20251020, 13 | LEFT JOIN con WHERE | `ordenes LEFT JOIN clientes ... WHERE clientes.Country = 'China'`; sin salida guardada |
| UAX_20251020, 15 | fecha como texto | `WHERE DateofBirth > 01/01/2024`; ver erratas |
| UAX_20251028, 3-7 | inspección de un DataFrame | `ordenes.head(5)`, `.shape` = (1000, 13), `.tail()`, `.info()`, `.describe()` |
| UAX_20251028, 8-11 | set-up SQL | repite el de 20251020; c9-c10 dan `ValueError: Table 'ordenes' already exists` (ver erratas) |
| UAX_20251028, 12-16 | SQL frente a pandas: filtrar | c12 SQL `Country = "China"`; c13 `clientes.query('Country == "China"').reset_index(drop=True)`; c14 `clientes[clientes['Country'] == 'China'].head(10)`; c16 la máscara booleana sola (`clientes['Country'] == 'China'`, serie True/False de 1000) |
| UAX_20251028, 17-19 | `<>` frente a `!=` | c17 SQL; c18 `.loc[mask, ['CustomerID','Country','Gender']].head(10).reset_index(drop=True)`; c19 lo mismo en tres pasos; c19 conserva los índices originales (0, 2, 3, 4, 5, 7, 10, ...) |
| UAX_20251028, 20-21 | rango con AND frente a `&` | c21 `clientes[(clientes['CustomerID'] > 10) & (clientes['CustomerID'] < 20)]` (9 filas, índices 10 a 18) |
| UAX_20251028, 23-24 | LIKE frente a `str.startswith` | `Country LIKE 'S%'` y `str.startswith('S', na=False)` |
| UAX_20251028, 25-26 | AND frente a `&` con `rename` | c26 `.rename(columns={...})` (el comentario `##'Email': 'Correo'` deja Email sin renombrar) |
| UAX_20251028, 27-28 | GROUP BY frente a `groupby.agg` | c28 `clientes.groupby('Country').agg(MaxClientes=('CustomerID','max'), Clientes=('CustomerID','count'), MinClientes=('CustomerID','min')).reset_index().sort_values('Clientes', ascending=False)`: China 182 (máx 996, mín 2), Indonesia 111, Russia 53, Philippines 44, Portugal 35; c27 da `UsageError: Cell magic %%sql not found` |
| UAX_20251028, 29-31 | LEFT JOIN frente a `pd.merge` | c30 `pd.merge(ordenes, clientes, on='CustomerID', how='left')` y filtro por China; c31 `pd.merge(ordenes, ordenes, on='CustomerID', how='left')` (auto-unión; columnas `_x` y `_y`; 197 filas con `ShipCountry_x == 'China'`); c29 da el mismo `UsageError` |
| UAX_20251028, 33-34 | unión de tres tablas | c33 SQL con `JOIN ... ON ordenes.OrderID = productos.ProductID` (sin salida; ver erratas); c34 pandas: dos `merge` + `groupby([...]).agg({'OrderID': 'count', 'TotalAmount': 'sum'})` + `rename`, con salida (p. ej. cliente 1: Konstance Gate, Home Goods, 1 pedido, 1568.28) |
| UAX_20251028, 35-37 | fecha como texto, otra vez | repite la consulta de la c15; `clientes.info()` (10 columnas, `DateOfBirth` es `object`) |
| UAX_20251028, 38-45 | fechas con cadenas | `fechas['day'] = ...apply(lambda x: int(x.split('/')[1]))`, `month` con `[0]`, `year` con `[2]`; función `quarter(mes)` con `if/elif` y `.apply` |
| UAX_20251028, 46-48 | estaciones con diccionario | `estaciones = {1: "invierno", ... 11: "otoño"}` y `.map(estaciones)`; falta el 12: 82 filas en `NaN` (`Estacion2` 918 no nulos de 1000); c47 lista los meses 12 |
| UAX_20251028, 49-52 | fechas con pandas | `pd.to_datetime(fechas['DateOfBirth'], format='%m/%d/%Y')`, `.dt.day`, `.dt.month`, `.dt.year`, `.dt.quarter` (c52 reemplaza `Quarter`) |
| UAX_20251105, 53-58 | nulos y `dropna` | c54 `clander.isna().sum()` (las dos `Unnamed` con 1000); c56 `clander.dropna()` deja el DataFrame **vacío** (Empty DataFrame, columnas intactas); c57 `dropna(axis=1)` y c58 `dropna(axis=1, how='all')` quitan las columnas vacías |
| UAX_20251105, 59-64 | `fillna(0)` | c62 `fechas.fillna(0)`: la columna de texto `Estacion2` recibe el número 0 para diciembre |
| UAX_20251105, 65-70 | imputar la media y bfill | c65 `fechas['day'].replace(10, np.nan)` (31 nulos, c66); c67 `int(fechas_borrado.mean())` = 16; c68 `fillna(media)`; c70 `fillna(method='bfill')` con `FutureWarning` |
| UAX_20251105, 71-81 | NumPy | c74 `clander['day'].to_numpy()`; c76 `np.mean` = 16.195; c78 `dias[dias > np.mean(dias)]` (máscara booleana); c80 suma 16195, mín 1, máx 31, `np.std` 8.833740713876539; c81 los mismos con pandas: `.std()` 8.838160899649202 |
| UAX_20251105, 82-84 | aleatorios con semilla | c82 `np.random.seed(30)`, `np.random.rand(10)`: 0.644144, 0.380748, 0.663048, ... (verificado: 0.64414354, 0.38074849, 0.66304791); c83 fechas aleatorias 2015-2022 con `np.random.randint` y `pd.to_timedelta` |
| UAX_20251105, 85-97 | matplotlib: series de tiempo | c87 `to_datetime(ordenes['OrderDate'])`; c89 `sort_values`; c90 `cumsum` de `ShippingFee` y `TotalAmount`; c91-92 `plt.plot` de ventas acumuladas y de envío (con `figsize`, `label`, `legend`, `grid`); c93-95 `dt.to_period('M')` + `groupby` + media mensual; c96 línea, c97 barras (`width=20`) |
| UAX_20251105, 98-102 | dispersión | `plt.scatter(UnitPrice, UnitsInStock, alpha=0.3)` y solo `Category == 'Clothing'` |
| UAX_20251105, 103 | bucle con colores | `for categoria in category:` dibuja un `plt.scatter` por categoría con una lista de colores y `indice += 1`; leyenda por categoría |
| UAX_20251105, 104-109 | pastel, histograma, caja | c104 `value_counts()` (Clothing 356, Home Goods 335, Electronics 309); c105-106 `plt.pie` con `autopct`; c107 `plt.hist(UnitPrice, bins=40)`; c109 `productos.boxplot(column='UnitPrice', by='Category')` |
| analisis_olist, 1-5 | SQLite en memoria | c2 carga 7 CSV de Olist; c4 `sqlite3.connect(':memory:')`, `DataFrame.to_sql(... index=False, if_exists='replace')` por tabla y la función `sql(query)` con `pd.read_sql`; c5 `SELECT order_id, order_status, order_purchase_timestamp FROM orders LIMIT 5` (cinco pedidos `delivered` de 2017-2018). Es el único cuaderno con contadores de ejecución (1 a 5) |

## Hojas de referencia (prog1hojas): solo inventario

| Archivo | Págs. | Qué lista |
|---|---|---|
| `Numpy_Python_Cheat_Sheet.pdf` (DataCamp) | 1 | crear arrays (`np.array`, `zeros`, `ones`, `arange`, `linspace`, `eye`, `random`), E/S, tipos, `shape/ndim/size/dtype`, aritmética (con `a - b` entre formas (3,) y (2,3), es decir broadcasting sin nombrarlo), comparación, agregados, copias y vistas, orden, `transpose`, `ravel`, `reshape`, `resize`, `append/insert/delete`, `concatenate/vstack/hstack/column_stack`, `hsplit/vsplit`, indexación (posición, rebanadas, `a[::-1]`, booleana, fancy) |
| `Pandas_Cheat_Sheet.pdf` | 3 | p.1: crear DataFrames, `melt`/`pivot`, `concat`, `sort_values`, `rename`, `drop`, encadenado de métodos, lógica y regex, Tidy Data, `loc`/`iloc`/`at`/`iat`, `query`; p.2: `merge` (left, right, inner, outer), `groupby` y agregación, `shift`, `rank`, `cumsum`, `dropna`, `fillna`, `describe`; p.3: gráficos |
| `SQL-cheat-sheet.pdf` (sqltutorial.org) | 3 | p.1: SELECT, DISTINCT, WHERE, ORDER BY, LIMIT/OFFSET, GROUP BY, HAVING, joins (inner, left, right, full, cross, auto-unión), UNION, INTERSECT, MINUS, LIKE, IN, BETWEEN, IS NULL; p.2-3: INSERT, UPDATE, DELETE, CREATE/ALTER/DROP TABLE, claves primarias y foráneas, restricciones, índices, vistas, disparadores |
| `matplotlib_cheatsheets.pdf` (versión 3.9.4) | 2 | inicio rápido (`fig, ax = plt.subplots()`), anatomía de una figura (Figure, Axes, spine, tick, grid, legend), subplots y `gridspec`, gráficos básicos y avanzados, escalas, proyecciones, colores y colormaps, marcadores, leyendas, texto, estilos, animación, "ten simple rules" |

## Tabla de temas: UD4 teoría (prog4)

| Tema | pág. PDF (= impresa) | Qué hay exactamente |
|---|---|---|
| Introducción y objetivos | 3, 4 | R como complemento o herramienta única; objetivo 2: "replicar análisis hechos con SAS y Python" |
| Estructuras de R: vectores atómicos | 5 | Ilustración 1 (Advanced R): familia de vectores; tipos `Numero <- 1.0`, `Entero <- 1L`, `Caracter <- "ab"`, `Logico <- TRUE` (p.5-6); "similar a los arrays de numpy ... nativos de R" |
| `c()` y coerción | 6 | `c(1,10,49)`, `c(vector_numerico, c(8,3,12))`; `c(1,2,"a")` da `"1" "2" "a"`; orden de coerción: carácter > doble > entero > lógico |
| `seq()` y `rep()` | 7-8 | `1:5`, `seq(1,5)`, `seq(1,10, by = 2)`, `seq(1,10, length.out = 20)`, `seq(1,10, along.with = vector_1)` (1.00 3.25 5.50 7.75 10.00); `rep(4,10)`, `rep(1:4, 4)`, `rep(1:4, each = 4)`, `rep(1:4, each=2, times=2)`, `rep(1:4, c(2,3,4,5))` (14 elementos) |
| Vectores aleatorios | 8 | `rnorm(10)`, `runif(10)` **sin semilla** (los números impresos no se reproducen); `length()` |
| Operaciones vectorizadas | 8-9 | suma elemento a elemento (`vector_1 + vector_3` = 2 5 8 11 14), producto, `vector_numerico + 2`, `^2` (1 100 2401), `sqrt`, `log`; definición de "operación vectorizada" |
| Funciones sobre vectores | 9-10 | `length`, `summary(vector_4)` (1.00, 3.25, 5.50, 5.50, 7.75, 10.00), `head`, `tail`, `max`, `min`, `which.max` (7), `which.min` (1) |
| Indexación de vectores | 10-11 | "en R la primera posición es uno, no cero"; `vector_5[1]`, `[1:3]`, `[c(3,1)]`, `[-c(1,3)]`, lógico `[c(TRUE,FALSE,FALSE,TRUE,FALSE)]`, condición `vector_5[vector_5 < 5]` |
| Matrices | 11-13 | `set.seed(123)`, `runif(n = 20, min = 10, max = 50)`, `round`; `matrix(data, nrow = 5, ncol = 4)` (se llena por columnas) y `byrow = TRUE`; vector `22 42 26 45 48 12 31 46 32 28 48 28 37 33 14 46 20 12 23 48`. Indexación `matriz_1[3,2]` = 28, `[1,]`, `[, 2:3]`, `[2:3, 2:3]`; `dim`, `nrow`, `ncol` (p.12-13) |
| `cbind` y `rbind` | 13-14 | `cbind(matriz_1, matriz_3)` (5x6) y `rbind(matriz_1, matriz_4)` (7x4); matrices extra: matriz_3 = (46 38; 36 50; 36 38; 32 34; 22 16), matriz_4 = (49 46 38 42; 11 29 40 19) |
| Arrays | 14 | `array(data = vector_matriz, dim = c(5,2,2))` (dos capas de 5x2) |
| Álgebra lineal (solo mención) | 14 | cuadro "Reflexiona": buscar en la ayuda `t(), solve(), det(), diag(), svd(), eigen(), qr(), chol()` |
| Listas | 14-16 | `list(vector_matriz, letters[1:10], matriz_1)`; `lista_1[1]` sigue siendo lista (`class` = "list"), `lista_1[[1]]` devuelve el vector (`class` = "numeric", p.15); `names(lista_1) <- c(...)` y `$` (p.16) |
| Data frames | 16-17 | "listas de vectores de igual magnitud"; `mtcars` completo (32x11) impreso en p.17 |
| Explorar un data frame | 17-19 | `head`, `tail`, `head(mtcars, n = 3)`, `dim` = 32 11, `nrow`, `ncol`, `str(mtcars)` (todas `num`), `summary(mtcars)` (p.19) |
| Seleccionar | 19-20 | `mtcars[1,2]` = 6, `[1,4]` = 110, `[2, ]`, `[ , 4]`, `[ , "cyl"]`, `mtcars$cyl`, `mtcars[1:3, 4:5]` |
| Añadir columnas | 20-21 | `mtcars_mini <- mtcars[1:10, ]`; `mtcars_mini$new <- letters[1:10]`; `rbind` y `cbind` para data frames (mismo número de columnas o de filas); `mpgOvercyl <- mpg / cyl` (3.5, 3.5, 5.7, 3.5667, 2.3375, 3.0167, 1.7875, 6.1, 5.7, 3.2) |
| Filtrar filas | 22-23 | `mtcars[mtcars$cyl > 4 & mtcars$hp > 100, ]` (21 filas), `mtcars[mtcars$cyl > 4 | mtcars$hp < 100, ]` (30 filas, p.22-23), `mtcars[mtcars$cyl == 6, ]` (7 filas) |
| Conclusiones y bibliografía | 24, 25 | "un data frame es una lista de vectores de misma longitud"; bibliografía: Grolemund, Çetinkaya-Rundel y Wickham (2023) R for Data Science; Peng (2016) R Programming for Data Science |

Todas las salidas de p.5-14 y p.17-23 se reprodujeron en R 4.6.1 (incluidas las tres matrices de p.11-14: con `set.seed(123)` y las llamadas consecutivas salen idénticas). Reutilizables para páginas que cite este PDF.

## Tabla de temas: R sesión 1 (prog4s1, diapositivas)

| Tema | pág. PDF (nº de diapositiva) | Qué hay |
|---|---|---|
| Programa de las sesiones | 1 (1), 2-3 (2-3) | temario: Introducción a R y RStudio; Data frames, matrices, paquetes, funciones; EDA I (importación, Quarto, Tidyverse, data.table, funciones propias, descriptivo univariante); EDA II (bivariante, regresión simple, Shiny). Calendario de dos grupos (17 nov a 15 dic y 19 nov a 17 dic, 17 a 19 h) |
| IA en programación | 4 (6), 5-7 (7-9), 8 (11) | "el lado bueno" (lluvia de ideas, patito de goma, repeticiones, problemas que no sabes formular) y "el lado malo" (desactualización, demasiada seguridad, falta de comprobación); capturas de un chat que ordena el temario alfabéticamente y se equivoca (ordena por la primera letra de cada frase); p.8: "Con precaución", cita un estudio "Your Brain on ChatGPT" |
| R y RStudio | 9-16 (portada, 13-19) | portada "Unidad 4"; formularios; "Lenguaje y entorno ... estadística, matemáticas, econometría"; capturas de la consola de R; enlaces a CRAN y a posit.co |
| Recorrido por RStudio | 17-23 (20-26) | los paneles añadidos de a uno: scripts, consola, objetos actuales (Environment), gráficos, paquetes, ayuda |
| Aspecto y directorio de trabajo | 24-26 (27-29) | Tools > Global options; `getwd()`, `setwd()` (ctrl+mayús+h), `dir()` |
| Scripts | 27 (30) | ejecutar línea a línea o solo la selección |
| Operadores básicos | 28-30 (32-34) | asignación `<-` (`=` funciona pero no es buena práctica); con `a <- 15`, `b <- 27`: `a+b` 42, `a-b` -12, `a*b` 405, `a/b` 0.5555556, `a%%b` 15, `a^b` 5.681513e+31; `sqrt(a)` 3.872983, `log(b)` 3.295837, `factorial(5)` 120, `exp(b)` 532048240602 (todo verificado) |
| Operadores relacionales | 31 (35) | seis ejemplos `10 < a` TRUE, `b <= a` FALSE, `5>7` FALSE, `a >= 6` TRUE, `a == b` FALSE, `a != b` TRUE; texto con una errata (ver erratas) |
| Vectores (tipos) | 32 (39) | figura de Advanced R: logical, integer, numeric, double, character. La sesión termina aquí |

## Tabla de temas: UD4 HTML (prog4html; anclas)

Ancla = `#id`. Hay dos secciones `#subconjuntos` (vectores) y `#subconjuntos-1` (matrices).

| Tema | Ancla | Qué hay |
|---|---|---|
| Entorno y primeros pasos | `#r-y-rstudio-como-entorno-de-trabajo`, `#instalación-de-r-y-rstudio`, `#primeros-pasos-en-rstudio`, `#crear-y-guardar-scripts`, `#el-directorio-de-trabajo-o-working-directory`, `#proyectos-de-r-o-r-projects`, `#limpieza-de-las-ventanas`, `#comentarios` | instalación, scripts, working directory, proyectos (vocabulario y herramientas) |
| Asignación y nombres | `#asignaciones`, `#normas-para-nombrar-objetos` | `<-` frente a `=` (atajo Alt + -); camelCase, PascalCase, snake_case, dot.case; distingue mayúsculas (`variable` 54, `Variable` 21); palabras reservadas (`if else repeat while function for in next break TRUE FALSE NULL Inf NaN NA NA_integer_ ...`); `TRUE <- 1` da error pero `True <- 1` funciona |
| Environment | `#environment`, `#asignar-objetos-de-nombre-desconocido` | `ls()`, `rm(x, y)`, `rm(list = ls())`; **trampa**: `numero.pacientes < -5` (con espacio) es una comparación, no una asignación (devuelve FALSE y `insulina.total` sale 4 en vez de 20); `assign("medidas.paciente1", c(1.3, 5, 7.1))` y `get()` |
| Aritmética | `#operadores-aritméticos---r-como-calculadora` | tabla de operadores (`+ - * / ^ %/% %%`), `60/(1.8^2)` = 18.51852 (IMC), `3^3` = 27, `8%/%4`, `100%%4`; suma de vectores; **reciclaje**: `c(2,3,4) + c(1,1)` da `3 4 5` con aviso "longitud de objeto mayor no es múltiplo"; decimal con punto |
| Funciones básicas | `#funciones-de-operaciones-básicas` | con `x <- c(2.1, 3.3, 7.5, 4)`: `mean` 4.225, `median` 3.65, `sd` 2.320022, `sum` 16.9, `exp`, `sqrt`, `log`, `log10`, `round`, `floor`, `ceiling`, `trunc`, anidado `round(mean(x))` = 4 |
| Relacionales y lógicos | `#operadores-relacionales`, `#operadores-lógicos` | `"insulina" != "Insulina"` TRUE; `& && | || ! xor %in%`; `x > 5 & x < 15` |
| T y F | `#por-qué-no-deberíamos-usar-t-y-f-para-abreviar-true-y-false` | `T <- 0` rompe `mean(x, na.rm = T)` (da NA); con `TRUE` da 2.75; `table(..., useNA = "ifany")` y `"always"` |
| `%in%` | `#in` | `3 %in% c(1,2,3,4)` TRUE; `||` y `&&` no están vectorizados |
| Vectores, tipos | `#vectores` | atómicos (logical, double, integer, character) y listas; `typeof`, `mode`, `class` |
| Subconjuntos de vectores | `#subconjuntos` | `x[1]`, `x[c(1,3,5)]`, `x[1:3]`, `x[x > 25]`, `x[-(2:4)]` |
| Coerción | `#coerción` | `c(TRUE, FALSE, 3, 5)` da `1 0 3 5`; `c("insulina", 3, 5)` da texto; "R no avisa" |
| Listas | `#listas` | `list(c(1,2,3), c("insulina","metformina"), head(mtcars))`; `y[1]` (lista) frente a `y[[1]]` (objeto) con `class` y `typeof`; nombres y `y$caracteres`; `y[[1]][2]`; `length(y)` = 3 |
| Atributos | `#atributos-habituales`, `#nombres`, `#clases`, `#dimensiones`, `#otros-atributos` | `names(z) <- ...`; `class(z) <- "character"`; `dim(m) <- c(4, 3)` reacomoda la matriz **por columnas** (1:12 pasa de 3x4 a 4x3); `attr(m, "unidad") <- "mg/dL"` y `attributes(m)` |
| Subconjuntos de matrices | `#subconjuntos-1` | `m[2,3]`, `m[, 2]`, `m[3, ]` pasan a vectores (`class` "integer"); `drop = FALSE` conserva la matriz |
| Arrays | `#arrays` | `dim(m) <- c(2,2,3)`; `class(m)` pasa de "matrix" "array" a solo "array"; `m[1,2,3]` = 11 |
| Data frames | `#data-frames`, `#ejemplo-práctico-mtcars`, `#valores-perdidos`, `#data-frame-clásico-vs-tibble` | tabla `identificador, altura, color_pelo` (7 niños); `data.frame(nombre, edad, altura_m)`; `str` (chr, num); `starwars` (tibble 87x14, dplyr); `<NA>`; `as.data.frame(starwars)` cambia la clase de `"tbl_df" "tbl" "data.frame"` a `"data.frame"` |
| Resumen de data frames | `#funciones-resumen-para-data-frames`, `#exploración-de-variables-en-data-frames`, `#selección-de-variables` | `head`, `tail(starwars, 10)`, `dim`, `summary(starwars[, -c(12, 13, 14)])` (height 66 a 264 con 6 NA; mass 15 a 1358 con 28 NA; birth_year 8 a 896 con 44 NA), `str`, `View`, `edit` (desaconsejada); `starwars[,4]` frente a `starwars$hair_color`; `starwars[5, 4]` = "brown"; `colnames`/`names` |
| Funciones y ayuda | `#funciones`, `#pedirle-ayuda-a-r`, `#recursos-extra` | argumentos con nombre y por posición: `seq(from = 2, to = 20, by = 2)`, `length.out = 12`; `seq(20, 2, 2)` da error "wrong sign in 'by' argument"; `help("seq")`, `?seq`; `runif`; `set.seed(42)`: 0.9148060 0.9370754 0.2861395 0.8304476 0.6417455 (verificado); con una sola semilla antes de tres llamadas solo el primer vector se repite |

## Tabla de temas: UD4 ejercicios (prog4ej)

| Archivo y líneas | Qué pide y qué resuelve |
|---|---|
| `ejercicios sesión 1 resueltos.R`, 1-10 | `v <- 1:4`, `v2 <- c(5,3,8,7)`, `v/v2`, `v/4`, `v/3:4` (con precedencia `v/(3:4)`: 0.333 0.5 1 1) |
| mismo, 11-19 | `v[3]` frente a `v[-3]`; `v[4] <- 9` cambia un elemento; `v[5] <- 7` **alarga** el vector (queda `1 2 3 9 7`) |
| mismo, 21-33 | `v[c(T,F,T,F,T)]`; suma de impares con máscara `v %% 2 != 0` (resultado 20) |
| mismo, 37-69 | construir vectores con `1:20`, `20:1`, `rev`, `c(1:20, 19:1)`, `rep(c(4,6,3), 10)`, `table(rep(...))`, `c(rep(c(4,6,3), times = 10), 4)`, `rep(tmp, c(10,20,30))` |
| `Ejercicios sesión 2 vectores - soluciones.R`, 1-21 | `as.numeric("3,14")` da `NA` con aviso; solución con `gsub(",", ".", ...)`; `set.seed(42); sample(c("Cara","Cruz"), 100, replace = TRUE)`; `sum(lanzamientos == "Cara")` (44 en esta versión de R; la solución explica que TRUE vale 1) |
| `Ejercicios sesión 2 data frames - soluciones.R`, 11-107 | data frame con 5 variables y 10 filas (`rnorm`, `sample`); 9 NA en la columna de texto con `set.seed(42)` y `sample(nrow(df), 9, replace = FALSE)`; reemplazo por "x" con `is.na`; `df[8:10, c(1, 4)]`; `colnames(df)[c(2, 5)] <- ...`; `mean`, `median`, `quantile(x, 0.3)`, `sd`; `table` y `barplot(prop.table(table(...)))`. Ver erratas |

## Tabla de temas: UD5 teoría (eda5), cobertura completa

Complementa la tabla de `sm142002-eda.md` (que solo usaba p.6, 8-11, 19-32); no contradice nada de ella. PDF = impresa.

| Tema | pág. PDF (= impresa) | Qué hay exactamente |
|---|---|---|
| Introducción y objetivos | 3, 4 | mismo texto que UD4 p.3-4 |
| Tidyverse y dplyr | 5 | "una gramática de manipulación de datos"; cinco verbos listados: `mutate`, `select`, `filter`, `summarise`, `arrange` (`group_by` no aparece en la lista aunque se usa en p.11); `install.packages("dplyr")` y `library(dplyr)` |
| `starwars` y `glimpse` | 5-6 | tibble 87x14; `glimpse(starwars)` muestra tipos (`<chr>`, `<int>`, `<dbl>`, `<list>`) |
| El pipe `\|>` | 6 | "parte de la misma idea que el pipe de bash"; razones de magrittr: de izquierda a derecha en vez de dentro a fuera, evita llamadas anidadas y variables locales, facilita añadir pasos |
| `filter()` | 6-7 | `homeworld == "Tatooine"` (10 filas), `& gender == "masculine"` (8 filas), `species != "Human"` (48 filas; los NA se descartan) |
| `select()`, `distinct()`, `count()` | 8-9 | `select(name)` tras el filtro; `select(species) \|> distinct()` (38 especies, una es NA); `count(species)` y `count(species, sort = TRUE)` (Human 35, Droid 6, NA 4, Gungan 3) |
| `arrange()` y `desc()` | 9-10 | `select(name, mass) \|> arrange(mass)` (Ratts Tyerel 15, Yoda 17, Wicket 20, ...) y `arrange(desc(mass))` (Jabba 1358, Grievous 159, IG-88 140) |
| `mutate()` | 10-11 | `H_W = height / mass`; dos columnas a la vez con `fakeVar = sqrt(mass)` (tibble 87x16) |
| `group_by()` + `summarise()` | 11 | altura media por género: feminine 167., masculine 177., NA 175; peso medio por planeta de origen (49 grupos, `NaN` donde todas las masas son NA, p. ej. Champala) |
| `rename()` y `relocate()` | 12 | `rename(planeta = homeworld)`; `relocate(species, .after = mass)` |
| Joins en dplyr | 12-15 | lista `left_join`, `right_join`, `inner_join`, `full_join`, `anti_join`, `semi_join` (los dos últimos solo nombrados); `tribble` de juguete `df_A` (ID A, B, C, D, F; y 5, 5, 8, 0, 9) y `df_B` (ID A, B, C, D, E; z 30, 21, 22, 25, 29): left 5 filas con `F` y NA, right 5 filas con `E` y NA, inner 4 filas, full 6 filas; `by = c("ID" = "KL")` tras renombrar |
| data.table: idea | 15-16 | Ilustración 2: `DT[i, j, by]`; i = filas (filter, slice, arrange, WHERE), j = columnas u operación (select, mutate, SELECT), by = agrupar (group_by, GROUP BY); "muy rápido ... pero la sintaxis es menos amigable" |
| data.table: ejemplos | 16-18 | `as.data.table(starwars)`; `starwars_dt[homeworld == "Tatooine"]`; columnas con `list(name)` o `.(name)`; orden `[, .(name, mass)][order(mass)]` y `order(-mass)`; crear columnas con `:=` (`H_W := height / mass`, y varias con `` `:=`(H_W = ..., fakeVar = ...) ``) |
| ggplot2: esqueleto | 18-19 | `ggplot(data = <DATOS>, mapeo = aes(<MAPEO>)) + <GEOMETRIA>(OPCIONES)`; datos `mpg` (234x11); `ggplot(mpg, aes(x = displ, y = hwy))` dibuja solo el lienzo (p.19) |
| ggplot2: capas y estéticas | 20-25 | `+ geom_point()` (p.20); `color = class` (p.21); `shape = factor(cyl)` (p.22); `size = 3` (p.23); `color = factor(cyl)` con `shape = 23` (p.24) y `shape = 21, size = 4` (p.25) |
| ggplot2: datos dentro del gráfico y facetas | 26-27 | `mpg \|> dplyr::filter(cyl != 5)` como argumento; `facet_grid(class ~ cyl)` (figura de p.27 con 4, 6 y 8 en las columnas) |
| ggplot2: distribución y caja | 28-31 | histograma `cty` por defecto (30 barras, p.28), `binwidth = 3` (p.29), `fill = "blue", color = "black"` (p.30); `geom_boxplot()` con `x = factor(cyl)`, `y = hwy` (p.31; la caja de 5 cilindros es plana, casi sin datos) |
| ggplot2: etiquetas | 32 | `labs(title, subtitle, caption)`, `xlab`, `ylab` |
| Conclusiones y bibliografía | 33, 34 | dplyr = legibilidad y flujos (pipelines); data.table = velocidad; ggplot2 = "gramática de los gráficos"; Chang (2012) R Graphics Cookbook, Grolemund y otros (2023), Healy (2018) |

## Tabla de temas: UD5 HTML (eda5doc propuesto; anclas `#id`)

Documento Quarto 1.7.32 de una sola página. Datos: `gapminder.xlsx` (192 filas, 9 variables, modificado a propósito con errores; solo año 1960), `insurance` (1338 filas, 7 variables), `pivot.xlsx`, `polls_us_election_2016` (dslabs). **Ninguno de esos archivos está en la carpeta** (se descargan de https://github.com/ValeriaRolle/Data). Autoría: la misma de la UD6 (Valeria Rolle).

| Tema | Ancla | Qué hay |
|---|---|---|
| Datos problemáticos y ordenados | `#síntomas-de-datos-problemáticos`, `#síntomas-de-datos-ordenados` | ocho síntomas (caracteres especiales, números como texto, duplicados, ortografía, espacios, NA, ceros en vez de NA, atípicos) y seis rasgos de datos ordenados ("tidy data") |
| Carga de datos | `#carga-de-datos`, `#desde-base-de-datos`, `#desde-csv`, `#desde-excel`, `#desde-spss-sas-stata-etc.`, `#desde-un-pickle` | lectura desde SQL, CSV, Excel, SPSS/SAS/Stata y pickle (vocabulario de paquetes) |
| Exploración de `gapminder` | `#ejemplo-práctico-gapminder`, `#exploración-de-los-datos` | `dim` 192 x 9; `str`; `table(continent, useNA = "ifany")`: Africa 53, America 6, Americas 29, Asia 46, Euroep 5, Europe 34, Oceania 11, NA 8; `duplicated()`, `any(duplicated(...))`, `table(duplicated(...))` (185 únicas, 7 repetidas); histogramas y boxplot de R base; `summary`: esperanza de vida de 3.8 a 710 (valor 475 para Argelia en la primera fila), GDP con 91 NA, mortalidad infantil con ceros; seis medidas de limpieza |
| Tidyverse y dplyr | `#tidyverse`, `#el-paquete-dplyr`, `#el-operador-pipeline-o-pipe` | pipe con `\|>` y `%>%` (el título dice `%>%`); ejemplo `select(country, population) \|> filter(population > 4e+08)`; "cada función modifica el dataset y la siguiente actúa sobre esa modificación"; guardar con `<-` |
| Verbos | `#seleccionar-columnas-con-select`, `#filtrar-observaciones-con-filter`, `#crear-nuevas-variables-con-mutate`, `#crear-resúmenes-con-summarise`, `#ordenar-observaciones-con-arrange` | `select(-year)`, `select(!c(...))`, `select(fertility:región)`, `ends_with`, `everything()`; `filter(continent == "Africa" & life expectancy > 50)`; `mutate(new_var = GDP/population)`, `case_when(... ~ "rico", ... ~ "pobre", TRUE ~ "no_info")`; `summarise` y `group_by(continent)`, `summarise_all`; `arrange(desc(...))`, por dos variables |
| Limpieza completa | `#limpiar-nombres`, `#ejercicio` | `janitor::clean_names()`; cadena `select(-year) -> rename -> mutate(case_when) -> distinct -> filter(between(life_expectancy, 30, 200)) -> mutate(na_if(infant_mortality, 0))`; el texto dice que quedan 179 filas (13 menos) |
| Fechas con lubridate | `#manejando-fechas-y-horas-con-lubridate`, `#operaciones-con-fechas` | `ymd`, `dmy`, `ymd_hms`; `dmy("03/04/1987")` y `dmy("07-11-2021")` restadas = `Time difference of 12637 days` (verificado); `as.numeric` y `/365.25` (34.6 años); `year()`, `month(label = TRUE)`, `wday(label = TRUE, week_start = 7)`; `polls_us_election_2016` |
| Texto con stringr | `#manipulación-de-texto-con-stringr`, `#funciones-básicas-de-stringr`, `#búsqueda-de-patrones` | `str_to_title/upper/lower/sentence`, `str_sort`, `str_order`; patrón de teléfono `(6[0-9]{2})[\b .]([0-9]{3})[\b .]([0-9]{3})` con `str_detect`, `str_subset`, `str_count`, `str_extract`, `str_extract_all`, `str_match_all`, `str_replace_all` |
| Joins | `#joins` | `pacientes` (patient_id 1 a 4; Control o Medicación) y `laboratorio` (patient_id 2, 3, 5; tensión y colesterol): `inner_join` (2 filas), `left_join` (4, con NA), `right_join`, `full_join`, `semi_join` (filas de la izquierda con pareja, solo sus columnas) y `anti_join` (filas de la izquierda sin pareja) |
| ggplot2: básicos y distribuciones | `#gráficos-con-ggplot2`, `#cargar-los-datos`, `#gráficos-básicos`, `#diagramas-de-densidad`, `#histogramas` | `ggplot(insurance, aes(bmi, charges)) + geom_point() + geom_smooth(method = lm) + xlab + ylab + theme_classic()` explicado línea por línea; `geom_density()` por región; `geom_histogram(bins = 20, fill = "white", color = "black")`; `geom_vline(aes(xintercept = mean(charges)), linetype = 2)`; densidad superpuesta con `stat(density)`; histograma por fumador con `alpha = 0.5` y `position = "identity"` |
| ggplot2: dispersión, barras, cajas | `#gráficos-de-dispersión`, `#datos-agregados-y-desagregados`, `#la-gráfica-de-barras`, `#barras-de-error`, `#gráficos-de-cajas` | recta de regresión por fumador; datos agregados (`count(region)`: northeast 324, northwest 325, southeast 364, southwest 325, con `stat = "identity"`) frente a desagregados; `position_stack()` y `position_dodge(0.8)`; barras de error con `geom_errorbar(aes(ymin = mean - sd, ymax = mean + sd))`; `geom_boxplot()`, `geom_jitter`, `geom_violin(trim = FALSE)` |
| Ancho y largo | `#transformación-de-los-datos-para-su-visualización` | formato largo (varias filas por sujeto) frente a ancho (una fila por sujeto); `pivot_longer(!c(group2, group), names_to = "times", values_to = "values")` (7 mediciones `med.1` a `med.7` pasan a una columna) y `pivot_wider(names_from = times, values_from = values)`; mención de `reshape` (`melt`, `cast`) |
| Color y etiquetas | `#paletas`, `#gradientes-de-colores`, `#colores-y-paletas-para-personas-daltónicas`, `#etiquetas-título-y-leyenda` | `scale_color_manual`, `scale_fill_manual`, `scale_color_brewer`, `scale_color_npg`, `scale_color_gradient`, `gradient2`, `gradientn` |
| Facetas y composición | `#faceting`, `#combinación-de-varios-gráficos`, `#ggpubr`, `#cowplot`, `#gridextra`, `#otros-gráficos`, `#exportación-de-gráficos` | `facet_grid(.~smoker)`, `facet_grid(smoker ~ .)`, `facet_grid(sex ~ smoker)`, `facet_wrap`; ggpubr, cowplot, gridExtra; guardado de figuras |

## Tabla de temas: UD5 ejercicios (eda5ej)

| Archivo | Qué hay |
|---|---|
| `Ejercicio EDA I.R` y `Ejercicio EDA I RESUELTO.R` | los seis pasos de limpieza de `gapminder` (select, clean names con `rename`, `case_when` para "America" y "Euroep", `distinct`, `filter(between(life_expectancy, 30, 200))`, `na_if(.. , 0)`); el resuelto descarga `gapminder.xlsx` con `curl::curl_download` y es la misma cadena del HTML |
| `ejercicios ggplot2.pdf` (1 pág., con imagen) | seis ejercicios: con `cats` (paquete MASS: Bwt, Hwt, Sex) un histograma de `Bwt` con 15 barras, un boxplot por sexo con título, barras del sexo con un color distinto cada una, dispersión `Bwt` frente a `Hwt` con ejes renombrados; con `mtcars`, un gráfico "Gas mileage in 1973-1974" (lollipop de `mpg` estandarizado por coche, color por `cyl`, fuente "Henderson and Velleman (1981)") |

UD6 (EDA II, Quarto, correlación, faltantes con naniar, ggpairs) está en `sm142002-eda.md` con los ids `eda6` y `eda6doc`; no se repite.

## Fórmulas y código clave (todo verificado)

No hay ecuaciones matemáticas en ningún archivo de esta fuente. El material es código y salidas. Lo más reutilizable:
- SQL (misma consulta en SQL, pandas y dplyr): UAX_20251028 celdas 12-34 y UD5 teoría p.6-11.
- R (UD4 p.11-14): `set.seed(123); vector_matriz <- round(runif(20, 10, 50))` = `22 42 26 45 48 12 31 46 32 28 48 28 37 33 14 46 20 12 23 48`; `matrix(vector_matriz, 5, 4)` y `byrow = TRUE`.
- Toy de joins: `df_A` (ID A, B, C, D, F) con `df_B` (ID A, B, C, D, E) (UD5 p.13-15); `pacientes` y `laboratorio` (eda5doc `#joins`); `starwars` con los conteos de p.6-11.
- NumPy (UAX_20251105 c74-81): `dias[dias > np.mean(dias)]`; `np.std` (ddof=0) 8.8337 frente a `pandas .std()` (ddof=1) 8.8382. Con `x = [1,2,3,4,10]`: `np.std(x)` = 3.1623 y `pd.Series(x).std()` = 3.5355 (verificado).
- SQL/SQLite: la consulta `SELECT 01/01/2024` devuelve 0 (verificado), por eso `WHERE d > 01/01/2024` devuelve todas las filas.

## Erratas e inconsistencias

**prog1 (UD1 teoría y presentación)**
- p.28 (Imagen 4) y diapositiva 15: el título dice "Big 6 elements of a SQL SELECT statement" pero el dibujo trae **cinco** cajas (SELECT, FROM, WHERE, GROUP BY, HAVING). Falta ORDER BY (verificado en la imagen renderizada). La flecha lateral solo ordena la sintaxis; el material nunca explica el orden de ejecución lógico (FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT).
- p.13: llama "frameworks" a Pandas y NumPy (son librerías) y promete "exploraremos cada una de estas herramientas en profundidad"; en p.14-24 solo se tratan IDEs. Pandas, NumPy, Scikit-learn, TensorFlow y PyTorch solo se mencionan en p.10-12. La p.3 también promete "estructuras de datos clave" y no hay ninguna.
- p.33: presenta FULL OUTER JOIN como estándar sin avisar de que no todos los motores lo traen (MySQL no lo trae; dato de conocimiento general, no está en el material). SQLite lo admite desde 3.39 (verificado en 3.45.3).
- p.31 (Imagen 5) muestra cuatro diagramas de join y la diapositiva 16 siete; no es contradicción, pero la teoría no explica el anti-join (izquierda sin pareja) que sí dibuja la diapositiva ("left join excluding inner").
- Metadatos del PDF: título "SM142002_MUIA_UD5_CONTENIDO TEÓRICO" en un documento de UD1 (cosmético).

**prog1hojas (hojas de referencia)**
- NumPy: `b.median()` y `a.corrcoef()` aparecen como métodos de array; no existen (`hasattr` da False; lo correcto es `np.median(b)` y `np.corrcoef(a)`).
- NumPy: `np.float32` descrito como "Standard double-precision floating point"; float32 es de precisión simple (4 bytes; el doble es float64, 8 bytes; verificado).
- NumPy: `np.complex`, `np.object`, `np.string_`, `np.unicode_` ya no existen en NumPy 2.1.3 (verificado; `np.bool` existe de nuevo como alias de `np.bool_`).
- NumPy: `h.resize((2,6))` "Return a new array": `ndarray.resize` trabaja en el sitio y devuelve `None`, y falla si el array no posee sus datos (verificado: "cannot resize this array: it does not own its data"); la versión que devuelve un array nuevo es `np.resize`.
- NumPy: `g.reshape(3,-2)` es un -1 mal escrito (NumPy acepta cualquier negativo y da la misma forma (3,2), verificado).
- SQL: "Left join t1 and t1" (debe ser t2); `MINUS` es sintaxis de Oracle, en SQLite da error de sintaxis (verificado) y el estándar es `EXCEPT`.

**prog1nb (cuadernos)**
- Celda 15 de `UAX_20251020`, 35 de `UAX_20251028` y 35 de `UAX_20251105`: `WHERE DateofBirth > 01/01/2024`. `01/01/2024` no es una fecha, es una división entera (= 0 en SQLite) y las fechas están guardadas como texto "m/d/aaaa"; la condición es verdadera para todas las filas. La salida guardada incluye `10/19/2023`, `9/4/2023`, `12/2/2023` (verificado, también reproducido en SQLite 3.45.3 con 4 filas de prueba). Una consulta correcta necesita fechas ISO ("2024-01-01") o convertir a fecha.
- Celdas 9 y 10 de `UAX_20251028` y `UAX_20251105`: se escribe `%sql --persist ordenes` donde iba `productos`; da `ValueError: Table 'ordenes' already exists`. La tabla `productos` nunca se crea en SQL, así que la consulta de tres tablas (c33) no puede correr en SQL (no tiene salida guardada).
- Celdas 27 y 29 de `UAX_20251028` y `UAX_20251105`: `UsageError: Cell magic %%sql not found` (el kernel no tenía cargada la extensión: se ejecutó fuera de orden o tras reiniciar). En `UAX_20251105`, la celda 86 muestra `OrderDate` ya como fecha aunque la conversión ocurre en la 87: se ejecutaron en otro orden que el escrito. Buen ejemplo de estado oculto de un notebook.
- c33 y c34 (`UAX_20251028`): la unión `ordenes.OrderID = productos.ProductID` empareja el número de pedido con el número de producto; `order.csv` no tiene `ProductID` (columnas leídas: OrderID, CustomerID, OrderDate, OrderStatus, ShippedDate, ShipAddress, tres Unnamed, ShipCountry, ShippingFee, PaymentMethod, TotalAmount). Sin significado real: es solo una demostración de sintaxis.
- Celda 46 (`UAX_20251028` y `20251105`): el diccionario `estaciones` no tiene el mes 12; 82 de 1000 filas quedan en `NaN` (`Estacion2` 918 no nulos, c48). La celda 62 "arregla" con `fillna(0)`, que mete un 0 numérico en una columna de texto.
- c80 frente a c81 (`UAX_20251105`): `np.std` = 8.833740713876539 y pandas `.std()` = 8.838160899649202 para los mismos datos; la diferencia es `ddof` (0 en NumPy, 1 en pandas); el cuaderno no lo comenta. Comprobado: 8.8337407 x raiz(1000/999) = 8.83816.
- c9 y c20: "CustomerID > 10 AND < 20" deja fuera 10 y 20; con `LIMIT 10` devuelve 9 filas (11 a 19).
- c7 y siguientes de `UAX_20251020`: las tuplas de SQL traen una columna extra al inicio (el índice del DataFrame que `--persist` convierte en columna; 11 campos frente a 10 columnas del DataFrame).
- c3 / c53 `clander`: las columnas no son coherentes entre sí (fila 0: `date` 10/19/2013, `day` 19, `month` 9, `year` 1999, `weekday` Sunday, `season` Winter; fila 1: `date` 2/1/2005, `day` 30, `month` 12, `year` 1913). Son datos sintéticos aleatorios; no sirven para ejemplos de calendario.
- c68: `int(fechas_borrado.mean())` trunca 16.19 a 16 antes de imputar; c70: `fillna(method='bfill')` está obsoleto (FutureWarning guardado), se usa `.bfill()`.
- c56: `clander.dropna()` devuelve un DataFrame vacío porque dos columnas están enteras en NaN; el cuaderno lo usa como ejemplo, pero puede confundir.
- c26: el comentario `##'Email': 'Correo'` deja la columna sin renombrar; la salida lo muestra.

**prog4 (UD4 teoría)**
- p.21: la salida impresa de `mtcars_mini` trae una columna `new2` (valores k a t) que ningún código del texto crea; el código solo agrega `new` y luego `mpgOvercyl`.
- p.8: los vectores `rnorm` y `runif` se imprimen sin `set.seed`, así que no se reproducen al correr el código (lo contrario de p.11, donde sí hay semilla). El texto no avisa.
- p.14: el cuadro "Reflexiona" manda a buscar `svd()`, `eigen()`, `qr()` y `chol()` en la ayuda; no hay ningún ejemplo.
- p.24: "análisis da datos" (errata menor).
- El PDF no incluye la regla de reciclaje (la HTML sí, en `#operadores-aritméticos---r-como-calculadora`).

**prog4html (UD4 HTML)**
- `#operadores-aritméticos---r-como-calculadora`: la tabla pone `Elevar ^ 3^3 9`; 3^3 = 27, y el código de más abajo muestra `3^3` = 27.
- `#environment`: "rm(list = ls()" sin el paréntesis de cierre; `#operadores-relacionales`: "Maayor o igual".
- `#coerción` dice "el tipo menos restrictivo" y el PDF (p.6) "el tipo de mayor precisión"; la jerarquía es la misma (carácter > doble > entero > lógico).
- `#environment` trae una trampa intencional (`numero.pacientes < -5`): no es errata, pero conviene señalarlo si se cita.

**prog4s1 (R sesión 1)**
- PDF p.31 (diap. 35): "menor que (<=)", debe ser `<`; `<=` es "menor o igual". Los ejemplos de esa diapositiva están bien.
- PDF p.28 (diap. 32): la extracción de texto junta dos líneas (`b <- 27 a+b #suma`); en la diapositiva son líneas separadas.

**prog4ej (ejercicios R)**
- `ejercicios sesión 1 resueltos.R`, línea 48: el enunciado del 11c dice `(1, 2, 3, …, 19, 2, 19, 18, …, 2, 1)`, con un "2" sobrante; la solución `c(1:20, 19:1)` corresponde a (1, ..., 19, 20, 19, ..., 1).
- `Ejercicios sesión 2 data frames - soluciones.R`, línea 58: `df[tail(df, 3), c(1, 4)]` falla con `invalid subscript type 'list'` (verificado en R 4.6.1): `tail(df, 3)` es un data frame, no un vector de posiciones. Lo correcto es `tail(df, 3)[, c(1, 4)]` o `df[(nrow(df)-2):nrow(df), c(1, 4)]`.
- Mismo archivo, líneas 67 y 107: después de renombrar las columnas 2 y 5 (`colnames(df)[c(2, 5)] <- c("var1", "var2")`), la columna `mutant` ya no existe y `barplot(prop.table(table(df$mutant)))` falla (`table(NULL)` da una tabla vacía y `barplot` da "need finite 'xlim' values", verificado).
- Mismo archivo, líneas 15-19: no hay `set.seed` antes de crear `df` (`rnorm`, `sample`): el data frame no es reproducible; la semilla se fija recién en la línea 32.
- `Ejercicios sesión 2 vectores - soluciones.R`, línea 21: resultado 44 con `set.seed(42)` en R 4.6.1; en versiones anteriores a R 3.6 el muestreo es otro.

**eda5 (UD5 teoría)** (se agregan a las de `sm142002-eda.md`)
- p.16 y p.18: `install.packages(data.table)` e `install.packages(ggplot2)` sin comillas fallan (`object 'ggplot2' not found`, verificado); en p.5 sí están bien (`install.packages("dplyr")`).
- p.15 y p.34: el texto cita "R Graphics Cookbook, 2nd edition" (p.18) y la bibliografía da el año 2012 (primera edición).
- p.12-13: nombra `anti_join` y `semi_join` y no da ejemplo de ninguno; `starwars_dt[, H_W := height / mass]` (p.17) modifica la tabla **en el sitio** (por referencia) y el texto no lo dice.
- p.11: en el cálculo "peso medio por planeta" aparecen `NaN` (no `NA`) porque `mean(numeric(0))` da `NaN`; no se explica.

**eda5doc (UD5 HTML)**
- `#crear-resúmenes-con-summarise`: usa `select_if` y `summarise_all`, que dplyr ya considera reemplazados por `across()`.
- `#la-gráfica-de-barras`: el último ejemplo (`ggplot(insurance, aes(children, charges)) + geom_bar(stat = "identity")`) dice "Media de gastos" en el eje y en el texto habla de "la media"; con `stat = "identity"` las barras **suman** `charges` por categoría, no la promedian (comprobado con `mtcars`: `layer_data` da 293.3 = suma de `mpg` para 4 cilindros, no 26.66 = media).
- `#histogramas`: `stat(density)` obsoleto desde ggplot2 3.4.0 (aviso guardado en el HTML); se usa `after_stat(density)`.
- `#el-operador-pipeline-o-pipe`: el título habla de `%>%`; el primer ejemplo usa `|>`. Son equivalentes en estos casos, el texto no lo aclara.
- `#ejercicio`: dice que quedan 179 filas (13 menos). No se pudo comprobar: `gapminder.xlsx` no está en la carpeta. De los 192 registros, 7 son repetidos y se saben al menos dos atípicos (475 y 710); el resto de los 13 viene de más valores fuera de 30-200 (por ejemplo el mínimo 3.8).
- `#búsqueda-de-patrones`: en el patrón `"[\b .]"`, `\b` dentro de una cadena de R es el carácter de retroceso (backspace), no un límite de palabra; el patrón funciona por el espacio y el punto.

**eda5ej (ejercicios ggplot2)**
- La fórmula impresa para estandarizar es `MPG = MPG - (media de MPG) / (desviación estándar de MPG)`; la resta no está agrupada (verificado en la imagen) y daría otra cosa. Lo correcto es `(MPG - media) / desviación`.
- La lista está numerada 1 a 6 con el enunciado general como "1": en realidad son cuatro gráficos con `cats` (numerados 2 a 5) y uno con `mtcars` (6).

**Guía y resumen**
- La guía describe el Módulo 6 como "Entornos de desarrollo de aplicaciones (EDA) ... Pytest, Git y similares"; el material de UD6 en la carpeta es "Análisis exploratorio de datos" (Quarto, correlación, faltantes). El resumen y la carpeta usan EDA como análisis exploratorio.
- La guía y el resumen dicen que UD5 es "dplyr, tidymodels y ggplot2"; el PDF y el HTML de UD5 no mencionan tidymodels (0 apariciones).
- Hoja de NumPy (hojanumpy): describe `b.max(axis=0)` como el máximo "de una fila", pero `axis=0` recorre las filas y devuelve el máximo de cada columna. Las páginas `array-forma-ejes` y `numpy-estadistica-algebra` lo dicen con naturalidad.

## No aparece (lo que uno esperaría)

- **Sintaxis básica de Python**: variables, `if`, `for`, `while`, funciones, listas, tuplas, diccionarios, comprensiones. La teoría de UD1 (p.5-12) solo habla de Python; el único bucle `for`, la única `def` y los únicos `dict` y `lambda` están en el cuaderno `UAX_20251105` y en `UAX_20251028` (c40-46, c103). El resumen lo manda a libros (Think Python, Python Workout) que no están en la carpeta.
- **Estructuras de control en R**: ni `if`, `for`, `while`, `function()` ni la familia `apply` en UD4/UD5 (solo `functions` desde fuera en `#funciones`). R sesión 1 menciona "creación de funciones propias" en el programa, pero no hay material.
- **UD2 y UD3 (Pandas y NumPy a fondo, Matplotlib, Seaborn, scikit-learn, TensorFlow, Git)**: no están publicadas en la carpeta; solo hay las hojas de referencia y los cuadernos de clase de UD1.
- **Broadcasting**: ni el término ni una explicación (en la hoja de NumPy aparece `a - b` entre (3,) y (2,3) sin nombrarlo).
- **Reciclaje de vectores** en el PDF de UD4 (sí en el HTML).
- **Orden de ejecución lógico de SQL**; diferencia entre `WHERE` y `HAVING` explicada con un ejemplo que falle; `DISTINCT`, `LIKE`, `IN`, `BETWEEN`, `IS NULL`, alias `AS`, subconsultas, índices (solo en la hoja o en los cuadernos). Los joins no se muestran con datos reales (solo la sintaxis con `employees` y `departments`).
- **Qué ocurre con claves repetidas en un join** (las filas se multiplican): no se muestra en ningún archivo.
- **Semillas y reproducibilidad** como concepto: aparecen en UD4 HTML `#pedirle-ayuda-a-r` y en `set.seed`, pero no hay explicación del generador.
- **Regex**: solo un patrón de ejemplo (eda5doc `#búsqueda-de-patrones`).
- **Anti-join y semi-join con datos en la teoría** (sí en el HTML).
- **Gramática de gráficos como teoría** (capas, estética, geometría, escalas, estadística, facetas, coordenadas): solo el esqueleto de p.19; la palabra "gramática" aparece en p.5, p.33 y en el HTML.
- **Entornos**: ningún comando real de Conda (`conda create`, `activate`, `environment.yml` con contenido) en UD1 p.16-18; solo descripciones.
- **Fórmulas**: ninguna (ni Pearson, ni media, ni desviación estándar; las funciones se llaman sin definirlas).

## Búsqueda rápida por concepto candidato

| Candidato | Mejores páginas |
|---|---|
| Notebook, kernel y entorno | prog1 p.14-15 (celdas, `.ipynb`, kernels), p.16-18 (Conda, Anaconda, entornos aislados, `environment.yml`), p.18-21 (Colab), p.22-24 (VS Code, PyCharm); prog1nb UAX_20251105 c86-87 (orden de ejecución distinto del escrito), UAX_20251028 c9-11 y c27, c29 (errores de estado), analisis_olist c1-5; hoja NumPy (alias eliminados); prog4s1 p.17-27 (paneles de RStudio, directorio de trabajo) |
| Tipos y coerción | prog4 p.5-6; prog4html `#vectores`, `#coerción`; prog4ej sesión 2 vectores líneas 1-12; prog1nb UAX_20251028 c36 (`info()`: `object` frente a `int64`), c48-50 (`datetime64[ns]`), c40-43 (`int(x.split(...))`); eda6 p.7 (`summary` sobre columnas numéricas que son categorías) |
| Índices, rebanadas y máscaras | prog4 p.10-11 (vectores), p.12 (matrices), p.19-23 (data frames); prog4html `#subconjuntos`, `#subconjuntos-1`; prog4ej sesión 1 líneas 11-33; hoja NumPy (subsetting, slicing, booleana, fancy); prog1nb UAX_20251105 c74-79, UAX_20251028 c14-21 |
| Bucle frente a vectorización | prog1 p.10 ("operaciones vectorizadas ... más rápidas que los bucles"); prog4 p.8-9 (vectorización definida), prog4html `#operadores-aritméticos---r-como-calculadora`, `#funciones-de-operaciones-básicas` ("algunas funciones se aplican a todo el vector"); prog1nb UAX_20251105 c103 (único `for`), c40-45 (`.apply` con lambda y con `quarter()`), c76-81 (NumPy); prog4ej sesión 1 líneas 26-33 |
| Reciclaje y broadcasting | prog4html `#operadores-aritméticos---r-como-calculadora` (reciclaje con aviso); prog4ej sesión 1 líneas 5-10 (`v/v2`, `v/4`, `v/3:4`); hoja NumPy (`a - b` con (3,) y (2,3), `np.c_`, `np.r_`); prog4 p.9 (sumas elemento a elemento) |
| Listas y data frames | prog4 p.14-23, en especial p.15-16 (`[` frente a `[[`) y p.16-17 (data frame = lista de vectores); prog4html `#listas`, `#data-frames`, `#funciones-resumen-para-data-frames`, `#selección-de-variables`; prog1nb UAX_20251028 c3-7, c13-19 (índice que se conserva), c46 (diccionario) ; hoja Pandas p.1 (`loc`, `iloc`, `at`, `iat`) |
| NA y NaN | prog4html `#por-qué-no-deberíamos-usar-t-y-f-para-abreviar-true-y-false` (`na.rm`, `useNA`), `#valores-perdidos`; eda6 p.9-10, p.12 (`na.rm`, `use = "complete.obs"`); eda6doc `#descripción-de-valores-perdidos`; prog4ej sesión 2 data frames líneas 22-45; prog1nb UAX_20251105 c53-70 (`isna().sum()`, `dropna`, `fillna(0)`, media, `bfill`) y UAX_20251028 c46-48; hoja Pandas p.2 (`dropna`, `fillna`) |
| Fechas y formatos | prog1nb UAX_20251028 c38-52 (texto a fecha con `split` y con `to_datetime(format='%m/%d/%Y')`, `dt.*`), UAX_20251105 c83-97 (`randint`, `to_period('M')`, series); eda5doc `#manejando-fechas-y-horas-con-lubridate`, `#operaciones-con-fechas`; notebook c35 (trampa de comparar texto con `01/01/2024`) |
| Una consulta SQL | prog1 p.27-30 (Imagen 4, SELECT, WHERE, ORDER BY, LIMIT, GROUP BY, HAVING); prog1diapo 13-15; prog1nb UAX_20251020 c7-12, UAX_20251028 c12-28; hoja SQL p.1; eda5 p.6-10 (`filter`, `select`, `arrange`) como contraparte en dplyr; eda5 p.15-16 (data.table i, j, by como WHERE, SELECT, GROUP BY) |
| Agrupar y resumir | prog1 p.29-30 (GROUP BY, HAVING); prog1nb UAX_20251020 c12, UAX_20251028 c27-28 (`groupby.agg`); eda5 p.11 (`group_by` + `summarise`), p.16 (`by` de data.table); eda5doc `#crear-resúmenes-con-summarise`; eda6doc `#table1`; hoja Pandas p.2 (`groupby`, `agg`) |
| Joins entre tablas | prog1 p.31-34 (INNER, LEFT, RIGHT, FULL, CROSS, UNION), prog1diapo 16; prog1nb UAX_20251020 c13, UAX_20251028 c29-34 (`pd.merge` con `how='left'`/`'inner'`, auto-unión c31), analisis_olist c4; eda5 p.12-15 (`df_A` y `df_B`, `by = c("ID"="KL")`); eda5doc `#joins` (`pacientes`, `laboratorio`, `semi_join`, `anti_join`); hoja Pandas p.2 (`pd.merge`) y SQL p.1 |
| El pipe: verbos encadenados | eda5 p.5-12 (verbos, pipe `\|>` y magrittr p.6); eda5doc `#el-operador-pipeline-o-pipe`, `#seleccionar-columnas-con-select`, `#filtrar-observaciones-con-filter`, `#crear-nuevas-variables-con-mutate`, `#ordenar-observaciones-con-arrange`, `#ejercicio` (la cadena de seis pasos); eda5ej `Ejercicio EDA I RESUELTO.R` líneas 33-50; hoja Pandas p.1 (Method Chaining) |
| Datos anchos y largos | eda5doc `#transformación-de-los-datos-para-su-visualización` (`pivot_longer`, `pivot_wider`, tabla `med.1` a `med.7`); hoja Pandas p.1 (`melt`, `pivot`, Tidy Data); eda5doc `#síntomas-de-datos-ordenados`. En la teoría de UD1 y de UD4 no aparece |
| Gramática de gráficos | eda5 p.18-32 (lienzo, `geom_point`, `color`, `shape`, `facet_grid`, histograma, boxplot, `labs`); eda5doc `#gráficos-con-ggplot2`, `#gráficos-básicos`, `#histogramas`, `#la-gráfica-de-barras`, `#faceting`, `#paletas`; eda5ej `ejercicios ggplot2.pdf`; en Python: hoja matplotlib p.1 (anatomía de una figura, `fig, ax`), prog1nb UAX_20251105 c85-109 |

## Conceptos candidatos

Contexto: la biblioteca gana el grupo "Infraestructura y programación"; una página por concepto, con un escenario manipulable a la derecha. Se proponen 14, de lo más plano a lo más complejo. En el catálogo ya existen estos títulos que sirven de prerrequisito: "Tipos de variables", "Vectores: suma y escalado", "La matriz como transformación", "Qué es una función", "Conjuntos y eventos", "Media, mediana y moda", "Histograma y densidad", "Percentiles, cuartiles y box plot", "Valores atípicos", "Codificación y datos faltantes", "Imputación de datos faltantes", "Estandarización y normalización" (títulos exactos, tomados de `catalogo.js`). Dentro del grupo nuevo, los prerrequisitos se dan por título corto de esta lista.
Nota de citas: el material de la materia no trae Python básico ni estructuras de control (ver "No aparece"); donde una página lo necesite, sus citas salen de los cuadernos (por celda) y de las hojas de referencia, y para la sintaxis de Python habría que mapear un libro aparte (por ejemplo Think Python, que no está en la carpeta).

1. **Notebook, kernel y entorno**
   - Qué se ve: un notebook guarda un estado oculto (el kernel) que depende del orden en que se ejecutan las celdas y de las versiones de las librerías de su entorno.
   - Imagen central: una columna de celdas con un panel "memoria del kernel" al lado; Francisco ejecuta las celdas en el orden que quiera y ve cómo cambia lo guardado (por ejemplo, ejecutar la celda 86 antes de la 87 de `UAX_20251105`, o repetir una celda que crea una tabla y obtener "Table already exists"); debajo, dos estantes de paquetes ("entorno A" con NumPy 1.x, "entorno B" con NumPy 2.x) donde instalar un paquete en uno no toca al otro, y una celda con `np.object` que funciona en un entorno y falla en el otro.
   - Unidades: UD1 (p.14-18, cuadernos), R sesión 1 (RStudio, directorio de trabajo).
   - Prerrequisitos: ninguno.
   - Python y R: Python con Jupyter y `conda` (Conda y entornos, `.ipynb`); en R, el Environment (`ls()`, `rm`, `rm(list = ls())`, la trampa de `numero.pacientes < -5`) como el mismo estado oculto. Se fusionan aquí la instalación de Anaconda, Colab, VS Code, PyCharm y RStudio, que por sí solos son vocabulario.

2. **Tipos y coerción**
   - Qué se ve: cada valor tiene un tipo; los contenedores homogéneos convierten todo al tipo más general, y R lo hace sin avisar.
   - Imagen central: una escalera de cuatro peldaños (lógico, entero, doble, carácter) y un vector con casillas editables; al escribir un texto en una casilla, todas las demás suben de peldaño y cambian de forma (1 pasa a "1", TRUE pasa a 1).
   - Unidades: UD4 (p.5-6, `#coerción`), UD1 (cuadernos: `info()`, `to_datetime`).
   - Prerrequisitos: Notebook, kernel y entorno (opcional).
   - Python y R: R `c(TRUE, FALSE, 3, 5)`, `c("insulina", 3, 5)`, `class(z) <- "character"`; Python con una lista (no convierte) frente a un array de NumPy o una columna de pandas (sí homogéneas: `object` frente a `int64` en `.info()`), y `"1" + 1` que falla en Python. Complementa "Tipos de variables" (estadístico) con el lado del código.

3. **Índices, rebanadas y máscaras**
   - Qué se ve: tres formas de elegir elementos (por posición, por rebanada, por condición) y por qué Python empieza en 0 y R en 1.
   - Imagen central: una tira de casillas numeradas; Francisco arrastra un selector de rango (rebanada), marca posiciones sueltas o enciende una máscara de verdadero y falso construida con una condición (`x > 25`); el mismo resultado aparece en dos cajas: Python (desde 0, el final no incluido) y R (desde 1, el final incluido, `-c(1,3)` quita).
   - Unidades: UD4 (p.10-12, `#subconjuntos`), UD1 (cuadernos y hoja NumPy).
   - Prerrequisitos: Tipos y coerción.
   - Python y R: R `vector_5[c(3,1)]`, `[-c(1,3)]`, `[vector_5 < 5]`; Python `a[0:2]`, `a[::-1]`, `a[a < 2]`, `dias[dias > np.mean(dias)]`.

4. **Bucle frente a vectorización**
   - Qué se ve: la misma cuenta hecha con un bucle (un paso a la vez) y con una operación sobre todo el vector, con el mismo resultado.
   - Imagen central: a la izquierda un cursor que recorre una lista pintando cada paso y acumulando un total; a la derecha, la misma lista con una operación que se aplica a todas las casillas a la vez; un contador de pasos de cada lado y un deslizador del tamaño de la lista que muestra por qué el bucle "cuesta más".
   - Unidades: UD1 (p.10, cuadernos c74-81 y c103), UD4 (p.8-9).
   - Prerrequisitos: Índices, rebanadas y máscaras; "Orden de operaciones" (aritmética, ya en la biblioteca).
   - Python y R: Python `for x in lista:` con acumulador y `np.sum(dias)` o `dias.sum()`; R `for` con acumulador y `sum(x)`, `vector_1 * vector_2`, `sqrt(vector_numerico)`. Se incluye la trampa de `np.std` (ddof=0) frente a `.std()` de pandas (ddof=1).

5. **Reciclaje y broadcasting**
   - Qué se ve: qué pasa cuando se opera con dos vectores o dos arrays de formas distintas: R recicla el más corto, NumPy estira la dimensión de tamaño 1.
   - Imagen central: dos rejillas de colores que se superponen; con formas compatibles (3 con 2x3) el vector corto se "copia" fila a fila y se pinta la rejilla resultante; con formas incompatibles (3 con 2x2) aparece el rechazo; en R, el vector corto se repite en ciclo y se enciende el aviso de longitud no múltiplo.
   - Unidades: UD4 (p.9, `#operadores-aritméticos---r-como-calculadora`, ejercicios de sesión 1), UD1 (hoja NumPy).
   - Prerrequisitos: Bucle frente a vectorización; "Vectores: suma y escalado" (biblioteca).
   - Python y R: R `c(2,3,4) + c(1,1)` (avisa) y `v/3:4`; Python `a - b` con `a` de forma (3,) y `b` de (2,3); un error `ValueError` por formas incompatibles.

6. **Listas y data frames**
   - Qué se ve: un data frame es una lista de columnas del mismo largo; los corchetes simples y dobles devuelven cosas distintas.
   - Imagen central: una tabla (los 4 conocidos de `mi_df`, o `mtcars_mini`) que se desarma en columnas-vector y se vuelve a armar; un cursor muestra `df[2, 3]`, `df[, 2]`, `df$nombre`; al filtrar filas, el índice original se conserva (0, 2, 3, ... en pandas, como en UAX_20251028 c19), y con `[` frente a `[[` el contenido sale en su caja o sin ella.
   - Unidades: UD4 (p.14-23, `#listas`, `#data-frames`), UD1 (cuadernos).
   - Prerrequisitos: Tipos y coerción; Índices, rebanadas y máscaras.
   - Python y R: R `lista_1[1]` frente a `lista_1[[1]]`, `mtcars[ , "cyl"]`, `mtcars$cyl`, `mtcars[mtcars$cyl > 4 & mtcars$hp > 100, ]`; Python DataFrame con `.loc`, `.iloc`, `.shape`, `.head()`, `clientes[clientes['Country'] == 'China']` y `reset_index(drop=True)`.

7. **NA y NaN**
   - Qué se ve: el dato que falta se propaga por las cuentas hasta que se decide qué hacer: ignorarlo, borrarlo o rellenarlo.
   - Imagen central: una columna con huecos; un selector de operación (media, suma) que devuelve NA mientras haya huecos; tres botones (ignorar, borrar filas o columnas, rellenar con 0, con la media o con el valor siguiente) que muestran el efecto en la media, en el número de filas y en el tipo de la columna (rellenar texto con 0).
   - Unidades: UD4 (`#por-qué-no-deberíamos-usar-t-y-f...`), UD1 (cuadernos c53-70), UD5 y UD6 (eda6 p.9-12, eda6doc).
   - Prerrequisitos: Listas y data frames. Solapa con "Codificación y datos faltantes" e "Imputación de datos faltantes" (estadística); aquí el foco es la mecánica del código (propagación, `na.rm`, `dropna(axis=...)`, `fillna`).
   - Python y R: R `mean(x)` da NA, `mean(x, na.rm = TRUE)` da 2.75, `T <- 0` rompe `na.rm = T`, `table(useNA = "ifany")`, `is.na`, `na_if`; Python `isna().sum()`, `dropna()` (que puede dejar el DataFrame vacío), `dropna(axis=1, how='all')`, `fillna(0)`, `fillna(media)`, `.bfill()`, `np.nan`.

8. **Fechas y formatos**
   - Qué se ve: una fecha escrita como texto no es una fecha; el mismo texto "3/4/1987" significa dos días distintos según el formato.
   - Imagen central: un texto con separadores que se parte en piezas arrastrables (día, mes, año); un selector de formato (`%m/%d/%Y` frente a `%d/%m/%Y`, o `dmy` frente a `mdy`) que cambia el calendario resultante; un segundo panel donde restar dos fechas da un `difftime` y se divide entre 365.25 para obtener años.
   - Unidades: UD1 (cuadernos c38-52, c83-97), UD5 (eda5doc `#manejando-fechas-y-horas-con-lubridate`).
   - Prerrequisitos: Tipos y coerción.
   - Python y R: Python `pd.to_datetime(x, format='%m/%d/%Y')`, `.dt.month`, `.dt.quarter`, `.dt.day` y la comparación de texto (`'10/19/2023' > '0'` verdadero); R `dmy("03/04/1987")`, `ymd`, `month(label = TRUE)`, `wday()`, y la resta de fechas (12637 días, 34.6 años).

9. **Una consulta SQL**
   - Qué se ve: una consulta se describe en un orden y se ejecuta en otro; cada cláusula transforma una tabla.
   - Imagen central: una tabla de clientes inventados que fluye por estaciones (FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT) mostrando la tabla tras cada una; Francisco enciende y apaga cláusulas y ve cuántas filas quedan; la trampa de `WHERE` frente a `HAVING` como reto.
   - Unidades: UD1 (p.27-30, diap. 13-15, cuadernos c7-28).
   - Prerrequisitos: Listas y data frames; "Qué es una función" (biblioteca) como idea de entrada y salida.
   - Python y R: SQL en SQLite (la misma tabla que pandas) y a su lado la misma consulta como `clientes[clientes['Country'] == 'China'][['CustomerID','Country','Gender']].head(10)` y como dplyr `filter(...) |> select(...) |> arrange(...)`. Se corrige en la página la figura de las "cinco cajas" de la teoría.

10. **Agrupar y resumir**
    - Qué se ve: partir una tabla en grupos, resumir cada grupo en una fila y volver a juntar (dividir, aplicar, combinar).
    - Imagen central: filas de colores que se agrupan por una columna; cada grupo se colapsa en una fila con su cuenta, su media, su máximo y su mínimo; cambiar la columna de agrupación recompone los grupos; un filtro `HAVING` o un `filter` posterior deja o quita grupos.
    - Unidades: UD1 (p.29-30, cuadernos c12 y c27-28), UD5 (p.11, p.16).
    - Prerrequisitos: Una consulta SQL; "Media, mediana y moda" (biblioteca).
    - Python y R: SQL `GROUP BY` con `COUNT`, `MAX`, `MIN`; pandas `groupby('Country').agg(...)`; dplyr `group_by(gender) |> summarise(altura_media = mean(height, na.rm = TRUE))`; data.table `by`. Aviso de `NaN` en grupos sin datos.

11. **Joins entre tablas**
    - Qué se ve: unir dos tablas por una clave y qué se conserva cuando no hay pareja.
    - Imagen central: dos tablas con hilos entre las filas que comparten clave (`df_A` y `df_B` con A, B, C, D, F frente a A, B, C, D, E); cuatro botones (inner, left, right, full) más semi y anti; los hilos sueltos se llenan de NA; al repetir una clave, las filas se multiplican; la trampa de un `LEFT JOIN` con `WHERE` sobre la tabla derecha, que se vuelve inner.
    - Unidades: UD1 (p.31-34, diap. 16, cuadernos c29-34), UD5 (p.12-15, eda5doc `#joins`).
    - Prerrequisitos: Una consulta SQL; "Conjuntos y eventos" (biblioteca) para unión e intersección.
    - Python y R: SQL `INNER JOIN`, `LEFT JOIN`, `FULL OUTER JOIN`, `CROSS JOIN`, `UNION`; pandas `pd.merge(..., on=..., how='left')`; dplyr `left_join(by = c("ID" = "KL"))`, `semi_join`, `anti_join`.

12. **El pipe: verbos encadenados**
    - Qué se ve: una limpieza de datos como una cadena de pasos pequeños, cada uno con su verbo, donde cada paso recibe la salida del anterior.
    - Imagen central: una tubería con estaciones (filter, select, mutate, arrange, summarise); Francisco arrastra y reordena las estaciones, y debajo de cada una ve la tabla que sale; si se invierte el orden de dos estaciones, el resultado cambia o falla.
    - Unidades: UD5 (p.5-12, eda5doc `#el-operador-pipeline-o-pipe`, `#ejercicio`), UD1 (hoja Pandas, method chaining).
    - Prerrequisitos: Listas y data frames; Una consulta SQL (cada verbo es una cláusula); "Valores atípicos" (biblioteca) para el paso del filtro entre 30 y 200.
    - Python y R: R `starwars |> filter(homeworld == "Tatooine") |> select(name)` y la cadena de limpieza de `gapminder`; Python pandas encadenado con `.query()`, `.rename(columns=...)`, `.drop_duplicates()`, `.assign()` y data.table `DT[i, j, by]` como tercera notación.

13. **Datos anchos y largos**
    - Qué se ve: la misma información en dos formas (una fila por sujeto o una fila por medición) y por qué la gráfica la pide en una de ellas.
    - Imagen central: una tabla ancha con siete columnas de medidas que se pliega en una larga de tres columnas (sujeto, momento, valor), con animación de cada celda que viaja; y el mismo conjunto de datos dibujado como líneas, que solo sale bien con la tabla larga.
    - Unidades: UD5 (eda5doc `#transformación-de-los-datos-para-su-visualización`), UD1 (hoja Pandas p.1).
    - Prerrequisitos: Listas y data frames.
    - Python y R: R `pivot_longer(!c(group2, group), names_to = "times", values_to = "values")` y `pivot_wider(names_from = times, values_from = values)`; Python `pd.melt(df)` y `df.pivot(columns='var', values='val')`. Solo está en el HTML de UD5 (no en las teorías), así que la página cita el HTML.

14. **Gramática de gráficos**
    - Qué se ve: un gráfico se construye por capas: datos, estética (qué variable va a qué eje, color o forma), geometría, facetas y etiquetas.
    - Imagen central: un lienzo con interruptores de capa que se encienden de uno en uno (lienzo vacío, `geom_point`, `color = class`, `shape = factor(cyl)`, `facet_grid(class ~ cyl)`, `labs`); Francisco arrastra variables a las ranuras x, y, color y forma, y cambia la geometría (puntos, histograma, caja, barras con `stat = "identity"` frente a conteo); con datos agregados y desagregados ve cuándo hay que decir `stat`.
    - Unidades: UD5 (p.18-32, eda5doc de `#gráficos-con-ggplot2` a `#faceting`), UD1 (hoja matplotlib, cuadernos c85-109).
    - Prerrequisitos: Listas y data frames; Datos anchos y largos; "Histograma y densidad" (biblioteca).
    - Python y R: R `ggplot(mpg, aes(x = displ, y = hwy, color = factor(cyl))) + geom_point() + facet_grid(class ~ cyl)`; Python matplotlib con `fig, ax = plt.subplots()`, un `plt.scatter` por categoría dentro de un `for` con una lista de colores (c103) para mostrar que ggplot hace por sí solo lo que en matplotlib se arma a mano. Incluye el reto de "cazar el error" con la barra que suma en vez de promediar.

Orden: 1 a 3 (herramienta, valores, posiciones); 4 y 5 (operaciones sobre vectores); 6 y 7 (tablas y datos que faltan); 8 (fechas); 9 a 11 (consultar, agrupar, unir); 12 y 13 (encadenar y reformar); 14 (graficar).

Dejado fuera o fusionado, y por qué:
- Instalación y recorrido de R, RStudio, Anaconda, Colab, VS Code, PyCharm, Spyder: vocabulario y herramientas; fusionado en el candidato 1 (UD1 p.13-24; R sesión 1 p.9-27; prog4html `#instalación-de-r-y-rstudio` y siguientes).
- Historia de Python y de SQL, Python en la industria, estadísticas de uso de lenguajes (UD1 p.5-12, p.25-27; diapositivas 3-10 y 13-14): contexto sin objeto manipulable; no hay página propia.
- ELT y ciclo de vida de la ingeniería de datos (diapositivas 3-6): diagramas de flujo; se podría hacer una página de "tubería de datos" pero el material solo trae dibujos, sin ejemplo ejecutable; se deja fuera.
- Quarto, table1, gtsummary, naniar, ggpairs (UD6): ya cubiertos por `sm142002-eda.md` y por las páginas de estadística descriptiva; no se repiten.
- data.table (sintaxis `[i, j, by]` y `:=`): fusionado como tercera notación en los candidatos 9, 10 y 12; el material solo da seis ejemplos.
- Funciones y argumentos (nombrados frente a posicionales, `seq(20, 2, 2)` con error, `help()`): demasiado breve para una página; se usa como reto dentro de otros candidatos.
- Semillas aleatorias (`set.seed`, `np.random.seed`): con material (UD4 `#pedirle-ayuda-a-r`, UAX_20251105 c82-84, ejercicios) pero poco; posible 15.º candidato si se quiere ("Semillas y reproducibilidad": una rueda de números pseudoaleatorios que siempre da lo mismo con la misma semilla).
- Expresiones regulares con stringr (eda5doc `#búsqueda-de-patrones`): un solo ejemplo en el material; posible 16.º candidato ("Patrones de texto": un buscador de patrones que ilumina las coincidencias en una agenda), pendiente de decidir y de buscar una fuente mapeada de regex.
