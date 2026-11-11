"""
De 13 features estandarizadas a una matriz de covarianza 13x13.

Contexto: dataset Wine (Raschka), paso previo a PCA.

Los datos son sinteticos y deterministas: 10 filas, 13 columnas, estandarizadas
a media 0 y desvio 1 por columna, armadas con tres factores latentes para que el
patron de signos se parezca al de Wine. No son las medidas reales del dataset.

Render sugerido:
    manim -pqm matriz_covarianza.py MatrizCovarianza
"""

import math

from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService

# ---------------------------------------------------------------- paleta

FONDO = ManimColor("#0F1319")
TINTA = ManimColor("#E6E9EF")
GRIS = ManimColor("#8A94A6")
TENUE = ManimColor("#4A5363")
LINEA = ManimColor("#2C333F")
COL_J = ManimColor("#5B9BF8")   # feature j
COL_K = ManimColor("#8CC45C")   # feature k
POS = ManimColor("#2FB3B0")     # producto / covarianza positiva
NEG = ManimColor("#F08163")     # producto / covarianza negativa
PALE = ManimColor("#1E242E")    # celda sin calcular, covarianza cerca de cero

MONO = "Menlo"
SANS = "Helvetica Neue"

# ---------------------------------------------------------------- datos

N = 10
P = 13

DATA = [
    [0.04, 1.14, 1.94, -0.51, 0.69, -1.06, -1.08, 1.53, -0.55, 0.82, -1.33, -0.92, -0.09],
    [-0.71, 1.03, 0.28, 0.46, -0.48, -0.84, -1.46, 1.23, -1.05, 0.66, -1.51, -1.23, -1.00],
    [-0.50, -1.40, -0.02, 0.30, -0.32, 0.28, 0.48, -1.01, -0.57, -1.12, 1.09, 0.45, -0.50],
    [-0.61, -1.28, -0.80, 1.46, 0.36, 0.57, 0.73, -0.57, 0.78, -1.39, 0.82, 0.35, -0.67],
    [0.37, 0.74, -0.87, 0.36, -0.11, -1.54, -1.23, 1.04, -1.01, 0.12, -0.40, -1.58, -0.24],
    [-1.04, 0.80, 0.34, 0.84, 0.73, -0.46, -0.37, 0.44, -0.84, -0.21, -0.75, -0.10, -0.21],
    [-0.65, -0.73, -1.45, 0.23, 0.20, 0.02, 0.53, -0.81, 1.29, -1.13, 0.91, 0.40, -0.60],
    [2.45, 0.69, 1.12, -1.43, 1.77, 1.42, 1.44, -1.22, 1.64, 1.81, -0.44, 1.67, 2.56],
    [0.43, -0.92, -0.52, -1.83, -1.81, 0.15, 0.00, -0.04, -0.35, 0.16, 1.00, 0.03, 0.45],
    [0.22, -0.08, -0.03, 0.11, -1.03, 1.46, 0.96, -0.59, 0.67, 0.30, 0.61, 0.92, 0.29],
]


def r2(x):
    """Redondeo a 2 decimales, medio hacia arriba (igual que el de la version web)."""
    return math.floor(x * 100 + 0.5) / 100


def productos(j, k):
    return [r2(DATA[i][j] * DATA[i][k]) for i in range(N)]


def cov(j, k):
    s = 0.0
    for p in productos(j, k):
        s = r2(s + p)
    return r2(s / (N - 1))


def num(x):
    """Texto de un numero con dos decimales y signo menos tipografico."""
    s = "{:.2f}".format(abs(x))
    return ("−" + s) if x < 0 else s


def color_cov(v):
    """Color de celda del heatmap: teal si positiva, coral si negativa, palido cerca de cero."""
    t = min(abs(v), 1.0) * 0.88
    return interpolate_color(PALE, POS if v >= 0 else NEG, t)


# ---------------------------------------------------------------- escena

CW = 0.70          # ancho de columna de la tabla
RH = 0.345         # alto de fila de la tabla
MS = 0.30          # lado de celda de la matriz


class MatrizCovarianza(VoiceoverScene):
    def construct(self):
        self.set_speech_service(GTTSService(lang="es"))
        self.camera.background_color = FONDO

        self.seccion_titulo()
        self.seccion_tabla()
        self.seccion_formula()
        self.acomodar_escena()

        self.par_detallado(6, 11)
        self.par_rapido(
            6, 7,
            "Ahora v7 contra v8. Acá pasa justo lo contrario: cuando una está por "
            "encima del promedio, la otra está por debajo. Casi todos los productos "
            "salen negativos, y la covarianza da menos cero coma noventa y cinco.",
        )
        self.par_rapido(
            8, 9,
            "Este caso es el más interesante. v9 contra v10 mezcla productos positivos "
            "y negativos, y se cancelan entre sí. La covarianza queda en cero coma cero uno. "
            "Cerca de cero no significa que no pase nada: significa que lo que sube y lo que "
            "baja se compensan.",
        )
        self.par_rapido(
            6, 6,
            "¿Y si multiplicamos una columna por sí misma? Cada producto es un cuadrado, "
            "así que ninguno puede ser negativo: todas las barras apuntan hacia arriba. "
            "Eso es la varianza, y como estandarizamos los datos, da exactamente uno.",
        )

        self.llenar_resto()
        self.cierre()

    # ------------------------------------------------------------ secciones

    def seccion_titulo(self):
        titulo = Text("De 13 features a una matriz 13 × 13", font=SANS, font_size=46, color=TINTA)
        sub = Text(
            "Cómo se construye la matriz de covarianza, paso previo a PCA",
            font=SANS, font_size=24, color=GRIS,
        )
        sub.next_to(titulo, DOWN, buff=0.38)
        grupo = VGroup(titulo, sub).move_to(ORIGIN)

        with self.voiceover(
            text="Tenemos trece features ya estandarizadas, y las queremos convertir "
                 "en una matriz de covarianza de trece por trece."
        ) as t:
            self.play(Write(titulo), run_time=min(2.2, t.duration * 0.55))
            self.play(FadeIn(sub, shift=UP * 0.2), run_time=0.8)

        self.play(FadeOut(grupo), run_time=0.6)

    def seccion_tabla(self):
        self.tabla = self.construir_tabla()
        self.tabla.move_to(ORIGIN).scale(1.06)

        with self.voiceover(
            text="Estas son diez filas del conjunto. Cada columna es una feature, "
                 "de v1 hasta v13."
        ) as t:
            self.play(FadeIn(self.cabeceras, shift=DOWN * 0.2), run_time=1.0)
            self.play(
                LaggedStart(
                    *[FadeIn(fila, shift=LEFT * 0.15) for fila in self.filas],
                    lag_ratio=0.12,
                ),
                run_time=max(1.4, t.duration - 1.6),
            )

        with self.voiceover(
            text="Estandarizadas quiere decir que el promedio de cada columna es "
                 "exactamente cero, y su desvío es uno. Ese detalle va a simplificar "
                 "mucho la cuenta."
        ) as t:
            marca = Text("μ = 0     σ = 1   en cada columna", font=MONO, font_size=22, color=POS)
            marca.next_to(self.tabla, DOWN, buff=0.5)
            self.play(FadeIn(marca, shift=UP * 0.15), run_time=0.9)
            self.wait(max(0.3, t.duration - 1.6))
            self.play(FadeOut(marca), run_time=0.6)

    def seccion_formula(self):
        f1 = MathTex(
            r"\sigma_{jk} \;=\; \frac{1}{n-1}\sum_{i=1}^{n}",
            r"\left(x_{ji}-\mu_j\right)",
            r"\left(x_{ki}-\mu_k\right)",
            font_size=46,
            color=TINTA,
        )
        f1.to_edge(DOWN, buff=1.1)

        with self.voiceover(
            text="La covarianza entre dos features, j y k, se define así: para cada fila "
                 "se multiplican los dos desvíos respecto de sus promedios, se suma todo, "
                 "y se divide entre ene menos uno."
        ) as t:
            self.play(Write(f1), run_time=min(3.0, t.duration * 0.6))
            self.wait(max(0.3, t.duration - 3.2))

        f2 = MathTex(
            r"\sigma_{jk} \;=\; \frac{1}{n-1}\sum_{i=1}^{n}",
            r"x_{ji}\,",
            r"x_{ki}",
            font_size=46,
            color=TINTA,
        )
        f2.to_edge(DOWN, buff=1.1)

        with self.voiceover(
            text="Pero los promedios valen cero. Los dos restos desaparecen, y queda algo "
                 "mucho más simple: multiplicar las dos columnas fila por fila, sumar, "
                 "y dividir entre nueve."
        ) as t:
            tachas = VGroup(
                Line(color=NEG, stroke_width=4).put_start_and_end_on(
                    f1[1].get_corner(DL) + LEFT * 0.05, f1[1].get_corner(UR) + RIGHT * 0.05
                ),
                Line(color=NEG, stroke_width=4).put_start_and_end_on(
                    f1[2].get_corner(DL) + LEFT * 0.05, f1[2].get_corner(UR) + RIGHT * 0.05
                ),
            )
            self.play(Create(tachas), run_time=1.0)
            self.wait(0.4)
            self.play(FadeOut(tachas), TransformMatchingTex(f1, f2), run_time=1.4)
            self.wait(max(0.3, t.duration - 3.0))

        self.formula = f2

    def acomodar_escena(self):
        """Lleva la tabla arriba a la izquierda, encoge la formula y trae la matriz."""
        self.matriz, self.celdas_m, self.etiquetas_m = self.construir_matriz()
        titulo_m = Text("Matriz de covarianza", font=SANS, font_size=20, color=GRIS)
        titulo_m.next_to(self.matriz, UP, buff=0.42)
        self.titulo_matriz = titulo_m

        destino_tabla = self.tabla.copy().scale(0.74 / 1.06).move_to([-2.55, 2.15, 0])
        destino_formula = self.formula.copy().scale(0.52).move_to([-2.55, -3.45, 0])

        self.play(
            Transform(self.tabla, destino_tabla),
            Transform(self.formula, destino_formula),
            run_time=1.3,
        )
        self.play(
            FadeIn(self.matriz, shift=LEFT * 0.3),
            FadeIn(self.etiquetas_m),
            FadeIn(titulo_m),
            run_time=1.1,
        )

    # ------------------------------------------------------------ pares

    def par_detallado(self, j, k):
        prods = productos(j, k)
        v = cov(j, k)
        tope = max(abs(p) for p in prods) or 1.0

        with self.voiceover(
            text="Empecemos por un par: la feature v7, en azul, y la feature v12, en verde."
        ) as t:
            self.play(*self.resaltar_columnas(j, k), run_time=1.2)
            self.wait(max(0.3, t.duration - 1.4))

        panel, barras, linea_cero, eq, suma_num, etiqueta_fila = self.construir_panel(j, k)
        self.play(FadeIn(panel), FadeIn(linea_cero), FadeIn(eq), FadeIn(etiqueta_fila), run_time=0.8)

        marco = self.marco_fila(0)
        self.play(FadeIn(marco), run_time=0.4)

        acumulado = 0.0
        with self.voiceover(
            text="Fila por fila, multiplicamos el valor azul por el valor verde. "
                 "Mirá el signo: cuando los dos caen del mismo lado del cero, el producto "
                 "es positivo y la suma crece. Fila ocho es la más fuerte de las dos columnas, "
                 "y sola aporta casi dos y medio."
        ) as t:
            paso = max(0.55, (t.duration - 0.6) / N)
            for i in range(N):
                acumulado = r2(acumulado + prods[i])
                self.animar_fila(
                    i, j, k, prods[i], acumulado, tope,
                    marco, barras, eq, suma_num, etiqueta_fila,
                    dur=paso, detalle=True,
                )

        self.play(FadeOut(marco), run_time=0.4)

        with self.voiceover(
            text="Las diez filas suman ocho coma setenta y cuatro. Dividido entre nueve, "
                 "la covarianza entre v7 y v12 es cero coma noventa y siete: van casi "
                 "perfectamente juntas."
        ) as t:
            resultado = self.mostrar_resultado(acumulado, v, panel)
            self.wait(max(0.3, t.duration - 2.6))

        with self.voiceover(
            text="Ese número va a su celda de la matriz. Y también a la celda espejada, "
                 "porque multiplicar v7 por v12 es lo mismo que multiplicar v12 por v7: "
                 "la matriz es simétrica."
        ) as t:
            self.colocar(j, k, v, resultado)
            self.wait(max(0.3, t.duration - 2.8))

        self.limpiar_panel(panel, barras, linea_cero, eq, suma_num, etiqueta_fila, resultado)
        self.play(*self.apagar_columnas(j, k), run_time=0.5)

    def par_rapido(self, j, k, narracion):
        prods = productos(j, k)
        v = cov(j, k)
        tope = max(abs(p) for p in prods) or 1.0

        self.play(*self.resaltar_columnas(j, k), run_time=0.7)
        panel, barras, linea_cero, eq, suma_num, etiqueta_fila = self.construir_panel(j, k)
        self.play(FadeIn(panel), FadeIn(linea_cero), FadeIn(eq), FadeIn(etiqueta_fila), run_time=0.5)
        marco = self.marco_fila(0)
        self.play(FadeIn(marco), run_time=0.3)

        acumulado = 0.0
        with self.voiceover(text=narracion) as t:
            paso = max(0.3, (t.duration - 3.4) / N)
            for i in range(N):
                acumulado = r2(acumulado + prods[i])
                self.animar_fila(
                    i, j, k, prods[i], acumulado, tope,
                    marco, barras, eq, suma_num, etiqueta_fila,
                    dur=paso, detalle=False,
                )
            self.play(FadeOut(marco), run_time=0.3)
            resultado = self.mostrar_resultado(acumulado, v, panel)
            self.colocar(j, k, v, resultado)
            self.wait(0.3)

        self.limpiar_panel(panel, barras, linea_cero, eq, suma_num, etiqueta_fila, resultado)
        self.play(*self.apagar_columnas(j, k), run_time=0.4)

    def llenar_resto(self):
        pendientes = []
        for j in range(P):
            for k in range(P):
                if self.valores_m[j][k] is None:
                    pendientes.append((j, k))

        with self.voiceover(
            text="Repitiendo la misma cuenta para los noventa y un pares posibles, "
                 "la matriz se completa. Teal donde la covarianza es positiva, coral donde "
                 "es negativa, y casi sin color donde ronda el cero."
        ) as t:
            lote = []
            for (j, k) in pendientes:
                v = cov(j, k)
                self.valores_m[j][k] = v
                lote.append(self.celdas_m[j][k].animate.set_fill(color_cov(v), opacity=1))
            self.play(LaggedStart(*lote, lag_ratio=0.004), run_time=max(2.0, t.duration - 1.2))

        with self.voiceover(
            text="Y el reflejo perfecto a los dos lados de la diagonal es esa simetría. "
                 "La diagonal, donde una feature se multiplica por sí misma, es la varianza: "
                 "vale uno en las trece."
        ) as t:
            diag = VGroup(*[self.celdas_m[d][d] for d in range(P)])
            eje = Line(
                self.celdas_m[0][0].get_corner(UL),
                self.celdas_m[P - 1][P - 1].get_corner(DR),
                color=TINTA, stroke_width=2.5,
            )
            self.play(Create(eje), run_time=1.0)
            self.play(Indicate(diag, color=TINTA, scale_factor=1.04), run_time=1.4)
            self.wait(max(0.3, t.duration - 3.0))
            self.play(FadeOut(eje), run_time=0.5)

    def cierre(self):
        self.play(
            FadeOut(self.tabla), FadeOut(self.cabeceras), FadeOut(self.formula),
            run_time=0.9,
        )
        destino = self.matriz.copy().scale(1.5).move_to([-3.1, 0, 0])
        desplaz = destino.get_center() - self.matriz.get_center()
        self.play(
            Transform(self.matriz, destino),
            self.etiquetas_m.animate.scale(1.5, about_point=self.matriz.get_center()).shift(desplaz),
            FadeOut(self.titulo_matriz),
            run_time=1.3,
        )

        texto = VGroup(
            Text("Lo que sigue: PCA", font=SANS, font_size=34, color=TINTA),
            Text("Los eigenvectores de esta matriz", font=SANS, font_size=23, color=GRIS),
            Text("son las componentes principales.", font=SANS, font_size=23, color=GRIS),
            Text("Los eigenvalores dicen cuánta", font=SANS, font_size=23, color=GRIS),
            Text("varianza explica cada una.", font=SANS, font_size=23, color=GRIS),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.24)
        texto[1:].shift(DOWN * 0.18)
        texto.move_to([3.3, 0.5, 0])

        pie = Text(
            "Dataset Wine: 13 features químicas por vino",
            font=SANS, font_size=19, color=TENUE,
        )
        pie.next_to(texto, DOWN, buff=0.7, aligned_edge=LEFT)

        with self.voiceover(
            text="Esta matriz es la entrada de PCA. Sus eigenvectores son las componentes "
                 "principales, las direcciones en las que los datos se estiran más, y sus "
                 "eigenvalores dicen cuánta varianza explica cada una."
        ) as t:
            self.play(FadeIn(texto[0], shift=UP * 0.2), run_time=0.8)
            self.play(
                LaggedStart(*[FadeIn(l, shift=UP * 0.15) for l in texto[1:]], lag_ratio=0.25),
                run_time=max(1.2, t.duration - 1.6),
            )

        with self.voiceover(
            text="El contexto es el dataset Wine, con sus trece features químicas por vino."
        ) as t:
            self.play(FadeIn(pie), run_time=0.8)
            self.wait(max(0.5, t.duration - 1.0))

        self.wait(1.2)

    # ------------------------------------------------------------ construccion

    def construir_tabla(self):
        self.cabeceras = VGroup()
        self.filas = VGroup()
        self.celdas_t = [[None] * P for _ in range(N)]

        for j in range(P):
            h = Text("v{}".format(j + 1), font=MONO, font_size=19, color=GRIS)
            h.move_to([j * CW, 0, 0])
            self.cabeceras.add(h)

        for i in range(N):
            fila = VGroup()
            for j in range(P):
                c = Text(num(DATA[i][j]), font=MONO, font_size=18, color=GRIS)
                c.move_to([j * CW, -(i + 1) * RH - 0.12, 0])
                self.celdas_t[i][j] = c
                fila.add(c)
            self.filas.add(fila)

        tabla = VGroup(self.cabeceras, self.filas)
        tabla.move_to(ORIGIN)
        return tabla

    def construir_matriz(self):
        celdas = [[None] * P for _ in range(P)]
        self.valores_m = [[None] * P for _ in range(P)]
        grupo = VGroup()
        for j in range(P):
            for k in range(P):
                sq = Square(
                    side_length=MS,
                    fill_color=PALE, fill_opacity=1,
                    stroke_color=LINEA, stroke_width=0.9,
                )
                sq.move_to([k * MS, -j * MS, 0])
                celdas[j][k] = sq
                grupo.add(sq)
        grupo.move_to([4.55, 1.25, 0])

        etiquetas = VGroup()
        for d in range(P):
            arriba = Text("v{}".format(d + 1), font=MONO, font_size=11, color=TENUE)
            arriba.next_to(celdas[0][d], UP, buff=0.12)
            izq = Text("v{}".format(d + 1), font=MONO, font_size=11, color=TENUE)
            izq.next_to(celdas[d][0], LEFT, buff=0.12)
            etiquetas.add(arriba, izq)

        return grupo, celdas, etiquetas

    def construir_panel(self, j, k):
        """Panel de calculo: barras de producto, ecuacion de la fila y suma corriente."""
        ancho = 7.0
        panel = Rectangle(
            width=ancho, height=3.15,
            stroke_color=LINEA, stroke_width=1.2,
            fill_color=PALE, fill_opacity=0.35,
        )
        panel.move_to([-3.0, -1.35, 0])

        linea_cero = Line(
            panel.get_left() + RIGHT * 0.45 + DOWN * 0.25,
            panel.get_right() + LEFT * 0.45 + DOWN * 0.25,
            color=LINEA, stroke_width=1.5,
        )

        barras = VGroup()
        paso = (linea_cero.get_length()) / N
        for i in range(N):
            x = linea_cero.get_start()[0] + paso * (i + 0.5)
            b = Rectangle(
                width=paso * 0.52, height=0.001,
                stroke_width=0, fill_color=POS, fill_opacity=1,
            )
            b.move_to([x, linea_cero.get_center()[1], 0])
            barras.add(b)

        etiqueta_fila = Text("fila 1 de 10", font=MONO, font_size=18, color=TENUE)
        etiqueta_fila.move_to(panel.get_top() + DOWN * 0.36 + LEFT * 2.35)

        eq = self.linea_ecuacion(0, j, k, productos(j, k)[0])
        eq.move_to(panel.get_top() + DOWN * 0.36 + RIGHT * 0.6)

        suma_num = DecimalNumber(
            0.00, num_decimal_places=2, font_size=34, color=TINTA,
        )
        rotulo = Text("Σ =", font=MONO, font_size=24, color=GRIS)
        rotulo.move_to(panel.get_bottom() + UP * 0.38 + LEFT * 1.3)
        suma_num.next_to(rotulo, RIGHT, buff=0.22)
        self.rotulo_suma = rotulo

        self.add(barras, suma_num, rotulo)
        barras.set_opacity(0)
        suma_num.set_opacity(0)
        rotulo.set_opacity(0)
        self.play(
            barras.animate.set_opacity(1),
            suma_num.animate.set_opacity(1),
            rotulo.animate.set_opacity(1),
            run_time=0.01,
        )
        return panel, barras, linea_cero, eq, suma_num, etiqueta_fila

    def linea_ecuacion(self, i, j, k, p):
        col = POS if p > 0 else (NEG if p < 0 else TENUE)
        partes = VGroup(
            Text(num(DATA[i][j]), font=MONO, font_size=26, color=COL_J),
            Text("×", font=MONO, font_size=24, color=TENUE),
            Text(num(DATA[i][k]), font=MONO, font_size=26, color=COL_K),
            Text("=", font=MONO, font_size=24, color=TENUE),
            Text(num(p), font=MONO, font_size=30, color=col),
        ).arrange(RIGHT, buff=0.22)
        return partes

    def marco_fila(self, i):
        alto = RH * 0.92
        ancho = CW * (P - 1) + 0.7
        r = Rectangle(
            width=ancho * self.escala_tabla(), height=alto * self.escala_tabla(),
            stroke_color=TINTA, stroke_width=1.6,
            fill_opacity=0,
        )
        r.move_to(self.centro_fila(i))
        return r

    def escala_tabla(self):
        return 0.74

    def centro_fila(self, i):
        izq = self.celdas_t[i][0].get_center()
        der = self.celdas_t[i][P - 1].get_center()
        return (izq + der) / 2

    # ------------------------------------------------------------ animacion

    def resaltar_columnas(self, j, k):
        anims = []
        mismo = (j == k)
        for i in range(N):
            anims.append(self.celdas_t[i][j].animate.set_color(COL_J))
            if not mismo:
                anims.append(self.celdas_t[i][k].animate.set_color(COL_K))
        anims.append(self.cabeceras[j].animate.set_color(COL_J))
        if not mismo:
            anims.append(self.cabeceras[k].animate.set_color(COL_K))
        return anims

    def apagar_columnas(self, j, k):
        anims = []
        for i in range(N):
            anims.append(self.celdas_t[i][j].animate.set_color(GRIS))
            anims.append(self.celdas_t[i][k].animate.set_color(GRIS))
        anims.append(self.cabeceras[j].animate.set_color(GRIS))
        anims.append(self.cabeceras[k].animate.set_color(GRIS))
        return anims

    def animar_fila(self, i, j, k, p, acumulado, tope,
                    marco, barras, eq, suma_num, etiqueta_fila, dur, detalle):
        nueva_eq = self.linea_ecuacion(i, j, k, p)
        nueva_eq.move_to(eq.get_center())
        nueva_etq = Text("fila {} de 10".format(i + 1), font=MONO, font_size=18, color=TENUE)
        nueva_etq.move_to(etiqueta_fila.get_center())

        alto = max(0.02, abs(p) / tope * 1.05)
        barra = barras[i]
        destino = barra.copy()
        destino.stretch_to_fit_height(alto)
        destino.set_fill(POS if p >= 0 else NEG)
        base = barra.get_center()[1]
        destino.move_to([barra.get_center()[0], base + (alto / 2 if p >= 0 else -alto / 2), 0])

        anims = [
            marco.animate.move_to(self.centro_fila(i)),
            Transform(eq, nueva_eq),
            Transform(etiqueta_fila, nueva_etq),
            Transform(barra, destino),
            suma_num.animate.set_value(acumulado),
        ]

        if detalle:
            cj = self.celdas_t[i][j].copy().set_color(COL_J)
            ck = self.celdas_t[i][k].copy().set_color(COL_K)
            self.add(cj, ck)
            self.play(
                cj.animate.move_to(nueva_eq[0].get_center()).scale(1.3),
                ck.animate.move_to(nueva_eq[2].get_center()).scale(1.3),
                run_time=dur * 0.45,
            )
            self.remove(cj, ck)

        self.play(*anims, run_time=dur * (0.55 if detalle else 1.0))

    def mostrar_resultado(self, acumulado, v, panel):
        cuenta = VGroup(
            Text("{} / 9  =".format(num(acumulado)), font=MONO, font_size=26, color=GRIS),
            Text(num(v), font=MONO, font_size=38, color=POS if v >= 0 else NEG),
        ).arrange(RIGHT, buff=0.28)
        cuenta.move_to(panel.get_bottom() + UP * 0.38 + RIGHT * 1.35)

        caja = SurroundingRectangle(
            cuenta[1], color=POS if v >= 0 else NEG, buff=0.14, stroke_width=2.2,
        )
        self.play(FadeIn(cuenta, shift=UP * 0.15), run_time=0.7)
        self.play(Create(caja), run_time=0.5)
        return VGroup(cuenta, caja)

    def colocar(self, j, k, v, resultado):
        destino_a = self.celdas_m[j][k]
        destino_b = self.celdas_m[k][j]
        self.valores_m[j][k] = v
        self.valores_m[k][j] = v

        viajero_a = resultado[0][1].copy()
        anims = [
            viajero_a.animate.scale(0.22).move_to(destino_a.get_center()),
            destino_a.animate.set_fill(color_cov(v), opacity=1),
        ]
        viajeros = [viajero_a]
        if j != k:
            viajero_b = resultado[0][1].copy()
            anims.append(viajero_b.animate.scale(0.22).move_to(destino_b.get_center()))
            anims.append(destino_b.animate.set_fill(color_cov(v), opacity=1))
            viajeros.append(viajero_b)

        self.add(*viajeros)
        self.play(*anims, run_time=1.0)
        self.play(*[FadeOut(x) for x in viajeros], run_time=0.3)
        self.play(
            Flash(destino_a, color=TINTA, line_length=0.1, num_lines=10, flash_radius=0.26),
            run_time=0.5,
        )

    def limpiar_panel(self, panel, barras, linea_cero, eq, suma_num, etiqueta_fila, resultado):
        self.play(
            FadeOut(panel), FadeOut(barras), FadeOut(linea_cero), FadeOut(eq),
            FadeOut(suma_num), FadeOut(self.rotulo_suma), FadeOut(etiqueta_fila),
            FadeOut(resultado),
            run_time=0.6,
        )
