from manim import *
from manim_voiceover import VoiceoverScene
from manim_voiceover.services.gtts import GTTSService


class PrimerVideo(VoiceoverScene):
    def construct(self):
        self.set_speech_service(GTTSService(lang="es"))

        titulo = Text("La formula cuadratica", font_size=40)
        with self.voiceover(text="Vamos a ver la formula cuadratica.") as t:
            self.play(Write(titulo), run_time=t.duration)
        self.play(titulo.animate.to_edge(UP))

        ecuacion = MathTex("ax^2 + bx + c = 0", font_size=60)
        with self.voiceover(
            text="Partimos de una ecuacion cuadratica igualada a cero."
        ) as t:
            self.play(Write(ecuacion), run_time=t.duration)

        formula = MathTex(
            r"x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}",
            substrings_to_isolate=["b^2 - 4ac"],
            font_size=60,
        )
        with self.voiceover(
            text="Y su solucion es esta: la formula cuadratica."
        ) as t:
            self.play(Transform(ecuacion, formula), run_time=t.duration)

        discriminante = formula.get_part_by_tex("b^2 - 4ac")
        caja = SurroundingRectangle(discriminante, color=YELLOW)
        with self.voiceover(
            text="La parte dentro de la raiz se llama el discriminante, "
                 "y nos dice cuantas soluciones reales tiene la ecuacion."
        ) as t:
            self.play(Create(caja), run_time=t.duration)

        self.wait()
