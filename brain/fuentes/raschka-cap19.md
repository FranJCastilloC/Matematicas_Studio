# Mapa de citas: Raschka, Liu y Mirjalili, cap. 19 "Reinforcement Learning for Decision Making in Complex Environments"

Archivo: `/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/PyTorch-Scikit-Learn/Cap19 - Reinforcement Learning for Decision Making in Complex Environments.pdf` (46 páginas PDF).
Correspondencia verificada: página impresa = página PDF + 672, es decir, PDF N = impresa − 672. Comprobado en el encabezado de PDF 2 = p. 674,
PDF 3 = p. 675, PDF 10 = p. 682, PDF 20 = p. 692, PDF 44 = p. 716 (el número va en el encabezado, no al pie: par a la izquierda, impar a la derecha).
La PDF 1 no lleva número (abre el capítulo con un "19"); por el desfase le corresponde la 673. La PDF 45 es publicidad de Packt y la 46 está en blanco.
Cada página se leyó con `pdftotext -layout`; como `pdftotext` duplica los glifos de todas las fórmulas, las pp. 679-690, 694, 705, 707 y 709
se revisaron además como imagen (fórmulas, Figures 19.3, 19.5, 19.7, 19.9, 19.11, 19.12).
Edición: Machine Learning with PyTorch and Scikit-Learn (Packt, 2022). Es el último capítulo del libro.
Ejemplos del capítulo: el estudiante (proceso de Markov con estados A, B, C, T y γ = 0.9); la cuadrícula 5 × 6 con oro en 16 y trampas 10, 15 y 22
(Q-learning tabular); CartPole-v1 (deep Q-learning). Código con `gym==0.20`.

| Tema | PDF | Impresa | Sección | Notas |
|---|---|---|---|---|
| Introducción y temario | 1 | 673 | apertura | RL como tercera categoría; temario: interfaz agente-entorno, model-based/model-free, MC, TD, Q-learning tabular, deep Q-learning |
| RL frente a supervisado y no supervisado | 2 | 674 | Understanding reinforcement learning | aprender por interacción; maximizar una función de recompensa (análogo a minimizar la pérdida); agente; **episodio**; recompensas positivas o negativas, a veces solo al final; ejemplo del ajedrez (la recompensa llega al terminar la partida) |
| Por qué RL, efecto retardado | 3 | 675 | idem | no se le enseña al agente cómo, solo qué lograr; perro de asistencia que detecta convulsiones; inestabilidad porque las entradas dependen de acciones previas; **delayed effect**: la acción en t puede dar recompensa muchos pasos después |
| Interfaz agente-entorno, señal de recompensa | 3 | 675 | Defining the agent-environment interface... | agente = quien decide; entorno = todo lo que está fuera del agente; recompensa = escalar, positivo o negativo; ajedrez (al final) vs laberinto (cada paso) |
| Figura del ciclo agente-entorno | 4 | 676 | idem | Figure 19.1: estado (1), acción Aₜ (2), recompensa Rₜ₊₁ (3), nuevo estado Sₜ₊₁ (4); ejemplo del dron (posición, batería, velocidad de hélices) |
| Exploración vs explotación | 4 | 676 | idem | ejemplo del graduado: trabajar (explotación) vs máster o doctorado (exploración); no hay respuesta universal |
| Programación dinámica (recuadro) | 5 | 677 | Markov decision processes | Bellman, años 50; resolver subproblemas y guardar resultados en una tabla; no es factible con muchos estados, ahí RL es más práctico |
| Formulación del MDP | 5 | 677 | The mathematical formulation of Markov decision processes | secuencia {S₀, A₀, R₁}, {S₁, A₁, R₂}, ...; Sₜ, Aₜ, Rₜ₊₁ variables aleatorias en conjuntos finitos Ŝ, R̂, Â; **dinámica** p(s′, r | s, a) ≝ P(Sₜ₊₁ = s′, Rₜ₊₁ = r | Sₜ = s, Aₜ = a) |
| Model-based vs model-free | 6 | 678 | idem + recuadro Model-free and model-based RL | si se conoce p(s′, r | s, a): programación dinámica; si no: MC y TD; Figure 19.2 (árbol de métodos según la dinámica) |
| Determinista vs estocástico; transición | 6-7 | 678-679 | idem | determinista si p(s′, r | s, a) ∈ {0, 1}; **probabilidad de transición** p(s′ | s, a) = Σ_{r∈R̂} p(s′, r | s, a) (marginal sobre r); determinista ⇒ p(s′ | s, a) = 1 |
| Proceso de Markov del estudiante | 7 | 679 | Visualization of a Markov process | grafo dirigido con ciclos, nodos = estados, aristas = probabilidades; A estudiar en casa, B videojuegos, C biblioteca, T dormir (terminal); Figure 19.3 con tabla: A → (0.4, 0.5, 0.0, 0.1), B → (0.05, 0.8, 0.05, 0.1), C → (0.0, 0.1, 0.7, 0.2), T → (0, 0, 0, 1.0) en orden A, B, C, T; cada fila suma 1 |
| Tareas episódicas vs continuas | 7-8 | 679-680 | Episodic versus continuing tasks | trayectoria; episódica si termina en Sₜ (t = T); continua si no (robot de limpieza); el capítulo solo usa episódicas |
| Tres episodios del estudiante | 8 | 680 | idem | episodio S₀, A₀, R₁, ..., Sₜ; Episode 1: BBCCCCBAT (pass, +1); Episode 2: ABBBBBBBBBBT (fail, −1; A, diez B, T); Episode 3: BCCCCCT (pass, +1) |
| Retorno y descuento | 8 | 680 | The return | Gₜ ≝ Rₜ₊₁ + γRₜ₊₂ + γ²Rₜ₊₃ + ⋯ = Σ_{k=0}^∞ γᵏ Rₜ₊ₖ₊₁; γ ∈ [0, 1]; γ = 0 miope (solo la recompensa inmediata); γ = 1 suma sin pesos; **recursión** Gₜ = Rₜ₊₁ + γGₜ₊₁ = r + γGₜ₊₁ |
| Intuición del descuento (recuadro) | 9 | 681 | Intuition behind the discount factor | Figure 19.4: un billete de 100 USD hoy vale 90 en un año con γ = 0.9 (inflación) |
| Retornos del episodio 1 | 9 | 681 | idem | γ = 0.9, +1 aprobar, −1 suspender, 0 en pasos intermedios; G₀ = 0.9⁶ ≈ 0.531, G₁ = γ⁵ = 0.590, G₂ = γ⁴ = 0.656, ..., G₆ = γ = 0.9, G₇ = 1 (ver erratas: está corrido un índice) |
| Retornos del episodio 2 | 10 | 682 | idem | G₀ = −γ⁸ = −0.430, "G₀" = −γ⁷ = −0.478 (t = 1), ..., "G₀" = −γ = −0.9 (t = 8), "G₁₀" = −1 (t = 9) (ver erratas); el episodio 3 queda como ejercicio |
| Política | 10 | 682 | Policy | π(a | s) ≝ P[Aₜ = a | Sₜ = s]; determinista o estocástica; se empieza uniforme; política óptima π∗(a | s) = la de mayor retorno |
| Función de valor de estado | 10 | 682 | Value function | v_π(s) ≝ E_π[Gₜ | Sₜ = s] = E_π[Σ γ^(k+1) Rₜ₊ₖ₊₁ | Sₜ = s] (ver erratas: exponente k + 1); tabla V(s) como lista, arreglo de NumPy o diccionario ("aspecto de programación dinámica") |
| Función de valor de acción | 10-11 | 682-683 | idem | q_π(s, a) ≝ E_π[Gₜ | Sₜ = s, Aₜ = a] (mismo exponente k + 1); v∗(s) y q∗(s, a) óptimas, sin fórmula propia |
| Recompensa vs retorno vs valor (recuadro) | 11 | 683 | The difference between the reward, return, and value function | ajedrez: capturar la reina no da recompensa inmediata pero el nuevo estado tiene valor alto; retorno = suma ponderada de un episodio; valor = esperanza sobre todos los episodios |
| Ecuación de Bellman (derivación) | 12 | 684 | Dynamic programming using the Bellman equation | v_π(s) = E_π[r + γGₜ₊₁ | Sₜ = s] = r + γE_π[Gₜ₊₁ | Sₜ = s]; igual para q_π(s, a); luego v_π(s) = Σ_{a∈Â} π(a | s) Σ_{s′∈Ŝ, r∈R̂} p(s′, r | s, a)[r + γ v_π(s′)]; "elimina el bucle a lo largo del tiempo" |
| Familia de algoritmos | 12-13 | 684-685 | Reinforcement learning algorithms | Figure 19.5: DP (dinámica conocida) → MC (interactúa) → TD (actualiza cada paso) → SARSA on-policy y Q-learning off-policy |
| Programación dinámica: supuestos y objetivos | 13 | 685 | Dynamic programming | dinámica conocida y propiedad de Markov; no es práctica pero es didáctica; (1) predicción: v_π con policy evaluation; (2) v∗ con generalized policy iteration |
| Evaluación de política iterativa | 14 | 686 | Policy evaluation – predicting the value function with DP | v⁽⁰⁾(s) = 0; v⁽ⁱ⁺¹⁾(s) = Σₐ π(a | s) Σ_{s′, r} p(s′, r | s, a)[r + γ v⁽ⁱ⁾(s′)]; converge a v_π cuando i → ∞; no hace falta interactuar con el entorno |
| Mejora de política | 14 | 686 | Improving the policy using the estimated value function | objetivo v_π′(s) ≥ v_π(s) ∀s; calcular q_π(s, a) desde v_π y cambiar arg maxₐ π(a | s) por arg maxₐ q_π(s, a) (policy improvement algorithm) |
| Iteración de política, GPI | 15 | 687 | Policy iteration | la mejora es estricta salvo que ya sea óptima (v_π = v_π′ = v∗); alternar evaluación y mejora garantiza la óptima; recuadro: **generalized policy iteration (GPI)**, se reutiliza en MC y TD |
| Iteración de valor | 15 | 687 | Value iteration | v⁽ⁱ⁺¹⁾(s) = maxₐ Σ_{s′, r} p(s′, r | s, a)[r + γ v⁽ⁱ⁾(s′)]; máximo en vez de promedio sobre acciones; es la única forma de "Bellman de optimalidad" del capítulo |
| Notación V y Q (recuadro) | 15 | 687 | Notation for tabular estimates... | minúsculas v_π, q_π = funciones verdaderas; V(Sₜ = s) ≈ v_π(s) y Q_π(Sₜ = s, Aₜ = a) ≈ q_π(s, a) = tablas |
| Monte Carlo: idea | 15-16 | 687-688 | Reinforcement learning with Monte Carlo | dinámica desconocida; experiencia simulada; promedio del retorno de los estados visitados |
| MC para V: first-visit | 16 | 688 | State-value function estimation using MC | **first-visit Monte Carlo value prediction**: retorno desde la primera visita a s (solo en prosa, sin fórmula ni código) |
| MC para Q, exploring starts | 16 | 688 | Action-value function estimation using MC | visitas al par (s, a); falta de exploración; **exploratory start**; anuncia ε-greedy |
| MC control | 16 | 688 | Finding an optimal policy using MC control | π₀ →(E) q_π₀ →(I) π₁ →(E) q_π₁ →(I) π₂ ... → q∗ → π∗ |
| Política greedy y ε-greedy | 17 | 689 | Policy improvement – computing the greedy policy... | π(s) ≝ arg maxₐ q(s, a); ε-greedy: cada acción no óptima con probabilidad ε/|A(s)|, la óptima con 1 − (|A(s)| − 1)ε/|A(s)| |
| TD: idea y bootstrapping | 17 | 689 | Temporal difference learning | no requiere dinámica; a diferencia de MC no espera al final del episodio; **bootstrapping** (no confundir con el bootstrap del cap. 7) |
| Actualización incremental de MC | 17 | 689 | TD prediction | V(Sₜ) ← V(Sₜ) + α(Gₜ − V(Sₜ)); Gₜ = retorno objetivo; (Gₜ − V(Sₜ)) = término de corrección; α tasa de aprendizaje constante |
| TD(0) | 18 | 690 | idem | Gₜ renombrado Gₜ:T; V(Sₜ) ← V(Sₜ) + α(Gₜ:ₜ₊₁ − V(Sₜ)) con Gₜ:ₜ₊₁ ≝ Rₜ₊₁ + γV(Sₜ₊₁) = r + γV(Sₜ₊₁); basta mirar un paso adelante |
| TD de n pasos | 18 | 690 | idem | V(Sₜ) ← V(Sₜ) + α(Gₜ:ₜ₊ₙ − V(Sₜ)); Gₜ:ₜ₊ₙ = Rₜ₊₁ + γRₜ₊₂ + ⋯ + γⁿ⁻¹Rₜ₊ₙ + γⁿV(Sₜ₊ₙ) si t + n < T, si no Gₜ:T; n = 1 es TD(0), n → ∞ es MC |
| MC vs TD (recuadro) | 18 | 690 | MC versus TD: which method converges faster? | empíricamente TD converge más rápido; remite a Sutton y Barto |
| On-policy vs off-policy | 18 | 690 | idem | on-policy: actualiza con las acciones de la política que sigue; off-policy: con acciones fuera de ella; ambos con GPI |
| SARSA | 19 | 691 | On-policy TD control (SARSA) | Q(Sₜ, Aₜ) ← Q(Sₜ, Aₜ) + α[Rₜ₊₁ + γQ(Sₜ₊₁, Aₜ₊₁) − Q(Sₜ, Aₜ)]; nombre por la quíntupla (Sₜ, Aₜ, Rₜ₊₁, Sₜ₊₁, Aₜ₊₁); mejora con ε-greedy (sin código) |
| Q-learning (regla) | 19 | 691 | Off-policy TD control (Q-learning) | Q(Sₜ, Aₜ) ← Q(Sₜ, Aₜ) + α[Rₜ₊₁ + γ maxₐ Q(Sₜ₊₁, a) − Q(Sₜ, Aₜ)]; usa la mejor acción del estado siguiente aunque el agente no la tome (por eso off-policy); "compárala con SARSA" |
| OpenAI Gym, CartPole | 20-21 | 692-693 | Introducing the OpenAI Gym toolkit | `pip install gym==0.20`; `gym.make('CartPole-v1')`; observación Box de 4 reales (posición, velocidad, ángulo, velocidad angular); `Discrete(2)`; `reset()` uniforme en [−0.05, 0.05]; `step()` devuelve 4 elementos (estado, recompensa, done, info); termina con ángulo > 12° o posición > 2.4; Figure 19.6 |
| La cuadrícula (gridworld) | 22 | 694 | A grid world example | Figure 19.7: m = 5, n = 6, 30 estados numerados de abajo hacia arriba (0 abajo a la izquierda, 29 arriba a la derecha); oro en 16 (+1), trampas 10, 15, 22 (−1), resto 0; empieza siempre en 0; acciones arriba, abajo, izquierda, derecha; chocar con el borde no cambia el estado |
| gridworld_env.py: dibujo | 23-24 | 695-696 | Implementing the grid world environment in OpenAI Gym | `get_coords`, `draw_object` con `rendering` de Gym; recuadro: en Gym 0.22+ cambiar a `from gym.utils import pyglet_rendering` |
| GridWorldEnv: dinámica | 24-25 | 696-697 | idem | hereda de `discrete.DiscreteEnv`; acciones 0 arriba, 1 derecha, 2 abajo, 3 izquierda; `gold_cell = (num_rows//2, num_cols-2)`; trampas abajo, a la izquierda y arriba del oro; `P[s][a] = [(1.0, next_s, r, done)]` (determinista); `isd[0] = 1.0` |
| Render, cierre y prueba aleatoria | 26-28 | 698-700 | idem | `_build_display`, `render`, `close`; viñetas: lambdas, `isd`, `P` como diccionario de transiciones (no accesible al agente durante el aprendizaje); episodio aleatorio con `np.random.choice(env.nA)` |
| Visualización | 29 | 701 | idem | Figure 19.8 (la cuadrícula dibujada) |
| Agente de Q-learning | 30-31 | 702-703 | Solving the grid world problem with Q-learning | `agent.py`: `learning_rate=0.01, discount_factor=0.9, epsilon_greedy=0.9, epsilon_min=0.1, epsilon_decay=0.95`; `q_table = defaultdict(lambda: np.zeros(nA))`; `choose_action`: al azar si `uniform() < epsilon`, si no argmax con permutación aleatoria para desempatar; `_learn`: `q_target = r` si done, si no `r + gamma*np.max(q_table[next_s])`; `q_table[s][a] += lr*(q_target - q_val)` |
| Bucle de entrenamiento | 31-33 | 703-705 | idem | `qlearning.py`; `np.random.seed(1)`; `Transition` namedtuple; `run_qlearning(agent, env, num_episodes=50)` guarda (n_moves, final_reward); `plot_learning_history` |
| Resultados de la cuadrícula | 33-34 | 705-706 | idem | primer oro en el episodio 7; Figure 19.9: picos de 145, 133, 264 y 321 movimientos en los primeros 17 episodios; tras unos 30 episodios encuentra un camino corto y estable (comprobado, ver abajo) |
| Aproximación de funciones | 34 | 706 | A glance at deep Q-learning | estados demasiados, continuos o no visitados; v_w(x_s) ≈ v_π(s) con x_s = estado "featurizado"; q_w(x_s, a) con una red profunda = **DQN**; Figure 19.10 |
| Replay memory | 35-36 | 707-708 | Training a DQN model... / Replay memory | actualizar un par cambia otros; las muestras de un episodio no son IID; búfer acotado, se descarta la más vieja, mini-lote al azar; Figure 19.11; recuadro: `deque` con tamaño máximo, O(1) frente a `pop(0)` O(n) |
| Objetivo de la DQN | 36-37 | 708-709 | Determining the target values for computing the loss | quíntupla (x_s, a, r, x_s′, done); dos pasadas hacia adelante; objetivo escalar r + γ max_{a′∈Â} q_w(x_s′, a′) solo en la acción a; vector objetivo que copia las demás; Figure 19.12; MSE, pérdida cero salvo en a |
| DQNAgent | 38-40 | 710-712 | Implementing a deep Q-learning algorithm | PyTorch; `discount_factor=0.95, epsilon_greedy=1.0, epsilon_min=0.01, epsilon_decay=0.995, learning_rate=1e-3, max_memory_size=2000`; red 4 → 256 → 128 → 64 → 2 con ReLU; `nn.MSELoss`, Adam; `remember`, `choose_action`, `_learn`, `replay` (`random.sample`) |
| Entrenamiento en CartPole | 40-41 | 712-713 | idem | `EPISODES = 200`, `batch_size = 32`, `init_replay_memory_size = 500`; llenado inicial de la memoria; hasta 500 pasos por episodio; `replay` en cada paso |
| Resultado de la DQN | 42 | 714 | idem | Figure 19.13: tras unos 30 episodios sostiene el palo más de 200 pasos |
| Resumen del capítulo y del libro | 42-44 | 714-716 | Chapter and book summary | MDP, DP, MC, TD, Q-learning off-policy en la cuadrícula, aproximación de funciones y deep Q-learning; repaso de los 19 capítulos |

Observaciones para citar:
- MDP y dinámica: pp. 677-679 (PDF 5-7). El ejemplo numérico es la tabla de transiciones del estudiante (Figure 19.3, p. 679). Ojo: es una **cadena
  de Markov** (sin acciones ni recompensas); las recompensas ±1 se agregan en la p. 681 para los retornos.
- Retorno y γ con números: pp. 680-682 (fórmula y recursión en la 680; billete de 100 USD y episodio 1 en la 681; episodio 2 en la 682). Los
  números tienen errores de índice (ver erratas): conviene que la página los recalcule y lo señale como trampa.
- V y Q: definiciones en las pp. 682-683, notación tabular en la 687. Bellman de esperanza: p. 684. Bellman de optimalidad: solo como regla de
  iteración de valor en la 687.
- Programación dinámica: evaluación y mejora p. 686, iteración de política y de valor p. 687. **Sin código ni ejemplo numérico**: para eso está
  el cap. 15 de Liu (FrozenLake, más abajo).
- MC: pp. 687-689 (solo prosa). TD(0), n pasos: p. 690. SARSA y Q-learning: p. 691. ε-greedy: p. 689 (fórmula) y p. 703 (código).
- Q-learning con código y resultado: pp. 694-706, el núcleo está en las pp. 702-703 (agente) y 705 (figura del aprendizaje).
- Deep Q-learning: pp. 706-714 (Figure 19.12 de la p. 709 es la imagen central del objetivo).
- El capítulo **no trae**: gradiente de política, REINFORCE ni actor-crítico (no aparecen ni por nombre); la ecuación de optimalidad de Bellman
  escrita para v∗ o q∗ (solo la regla de iteración de valor); código o pseudocódigo de evaluación de política, iteración de valor, MC o SARSA;
  every-visit MC; una cuenta a mano de una actualización de Q; condiciones de convergencia (α decreciente, visitar todos los pares); la **red
  objetivo** (target network) de la DQN: el código usa la misma red para el objetivo, y el texto no lo menciona.

## Erratas e inconsistencias

- **p. 681 (PDF 9), episodio 1**: BBCCCCBAT tiene 9 estados (S₀ a S₈ = T), así que la recompensa +1 es R₈. El propio libro dice G₇ = 1 y
  G₆ = γ = 0.9, que es coherente con eso; entonces G₂ = γ⁵ = 0.590, G₁ = γ⁶ = 0.531 y **G₀ = γ⁷ ≈ 0.478**. El libro escribe G₀ = γ⁶ ≈ 0.531
  (con R₇ como último término), G₁ = γ⁵ = 0.590 y G₂ = γ⁴ = 0.656: los tres primeros están corridos un índice respecto de G₆ y G₇.
- **p. 682 (PDF 10), episodio 2**: ABBBBBBBBBBT tiene 12 estados (A, diez B, T; contado en la imagen a 300 ppp), la recompensa −1 es R₁₁, el último
  estado no terminal es t = 10 y **G₀ = −γ¹⁰ ≈ −0.349**, G₁ = −γ⁹ ≈ −0.387, G₉ = −0.9, G₁₀ = −1. El libro escribe G₀ = −γ⁸ = −0.430 (t = 0),
  "G₀" = −γ⁷ = −0.478 (t = 1), "G₀" = −0.9 (t = 8) y "G₁₀" = −1 (t = 9): el subíndice G₀ se repite en t = 1 y t = 8, y el último no coincide con t.
  Las potencias (0.9⁷ = 0.478, 0.9⁸ = 0.430) están bien calculadas; lo que falla es qué exponente le toca a cada t.
- **p. 682-683 (PDF 10-11)**: v_π(s) y q_π(s, a) se escriben con Σ γ^(k+1) Rₜ₊ₖ₊₁, pero el retorno de la p. 680 es Σ γᵏ Rₜ₊ₖ₊₁. Sobra el "+1"
  del exponente: así escrito, el valor sería γ veces el retorno.
- **p. 684 (PDF 12)**: la derivación de Bellman saca r de la esperanza "porque es constante y conocida en t". No lo es: Rₜ₊₁ depende de la acción y del
  estado siguiente, que son aleatorios. La línea correcta es la siguiente del propio libro (sumar sobre π(a | s) y p(s′, r | s, a)); el paso
  intermedio r + γE_π[Gₜ₊₁ | Sₜ = s] es un atajo informal.
- **p. 678 (PDF 6)**: dice que la dinámica es determinista "si ciertas acciones para estados dados se toman siempre o nunca"; lo que es 0 o 1 es
  p(s′, r | s, a), la probabilidad del resultado, no de tomar la acción.
- **p. 707 (PDF 35)**: "genera una quíntupla de transición q_w(x_s, a)": q_w(x_s, a) es la salida de la red, no la quíntupla. La quíntupla es
  (x_s, a, r, x_s′, done), como dice la p. 708.
- **p. 708 (PDF 36)**, recuadro: el argumento de `deque` es `maxlen`, no `max_len` (con `max_len` da TypeError, comprobado). El código de la p. 710 sí
  usa `maxlen`.
- **p. 695 (PDF 23)**: en `get_coords(..., loc='interior_corners')` se escribe `yt, yb = xc - half_size, xc + half_size`; debería ser `yc`. Solo se usa para
  dibujar el cuadrado del agente en la celda (0, 0), donde xc = yc, así que no se nota.
- **p. 696 (PDF 24)**: el valor por defecto es `num_rows=4`, pero todo el capítulo usa 5 filas (`GridWorldEnv(5, 6)`); no es error, pero confunde.
- **p. 703 (PDF 31)**: el texto habla de `_choose_action()`; el método se llama `choose_action`.
- **p. 703 (PDF 31)**, ε del agente tabular: `_adjust_epsilon()` se llama en cada `_learn`, es decir, en cada **paso**, no en cada episodio. Con
  0.9 · 0.95ᵏ, ε llega a 0.1 tras 43 pasos, o sea, ya dentro del primer o segundo episodio. El texto ("empezamos con ε alto y se reduce") no lo aclara.
- **p. 711-713 (PDF 39-41)**, DQN: `total_rewards.append(i)` guarda el índice del último paso, que es uno menos que la recompensa total (cada paso
  vale 1.0). Además el objetivo r + γ max q_w(x_s′, ·) se calcula con la misma red que se entrena, sin red objetivo.
- **Versiones** (gym y torch no están instalados en esta máquina; no se ejecutó el código original): `gym.envs.toy_text.discrete` y
  `gym.envs.classic_control.rendering` ya no existen en Gym 0.22+ ni en Gymnasium, y desde Gym 0.26 `reset()` devuelve (obs, info) y `step()`
  cinco valores (obs, reward, terminated, truncated, info), no cuatro como en las pp. 693, 704, 713. El cap. 15 de Liu ya usa la API nueva.
- **Comprobado**: se reimplementó la cuadrícula y el agente sin Gym (la dinámica es determinista, así que solo importa `np.random.seed(1)`), con
  NumPy 2.1.3. Estados terminales [16, 22, 15, 10] como imprime el constructor; el primer oro llega en el episodio 7 (contando desde 0), como dice
  la p. 705; los picos de 145, 133, 264 y 321 movimientos de la Figure 19.9 aparecen en los episodios 8, 11, 13 y 16 (la figura los dibuja
  corridos uno, con el eje desde 1). A partir del episodio 34 la secuencia se separa un poco de la figura (por ejemplo, la reimplementación cae en
  una trampa en el 34 y en el último), pero el patrón es el mismo: desde el episodio 25 las corridas exitosas tardan entre 8 y 12 movimientos.
  El camino más corto posible es de 8 movimientos (0 → 1 → 2 → 3 → 4 → 5 → 11 → 17 → 16: al oro solo se entra desde la derecha, porque las
  otras tres casillas vecinas son trampas).

## Liu, "Python Machine Learning by Example", cap. 15 "Making Decisions in Complex Environments with Reinforcement Learning"

Archivo: `/Users/franciscocastillo/brain/02-Biblioteca/Machine-Learning/ML-by-Example/Cap15 - Making Decisions in Complex Environments with Reinforcement Learning.pdf` (34 páginas PDF).
Correspondencia verificada: página impresa = página PDF + 446, es decir, PDF N = impresa − 446. Comprobado en el encabezado de PDF 2 = p. 448,
PDF 3 = p. 449, PDF 10 = p. 456, PDF 20 = p. 466, PDF 32 = p. 478. La PDF 1 (sin número) es la 447; la 33 es publicidad y la 34 está en blanco.
Todas las fórmulas son imagen (`pdftotext` las omite): se leyeron renderizadas las pp. 451-453, 458, 462, 465, 468, 470-471, 474-476.
Usa Gymnasium (API nueva) y PyTorch. Ejemplos: FrozenLake 4 × 4 resbaladizo (DP), Blackjack (MC y Q-learning).

| Tema | PDF | Impresa | Sección | Notas |
|---|---|---|---|---|
| Elementos de RL | 4-5 | 450-451 | Elements of reinforcement learning | entorno, agente, acción, estados, recompensas con Super Mario (+1 moneda, +2 esquivar, −10 chocar); Figure 15.1 (ciclo) |
| Retorno sin y con descuento | 5-6 | 451-452 | Cumulative rewards | Gₜ = Σ_{k=0}^T Rₜ₊ₖ₊₁; ejemplo de las acciones bursátiles A (+6, −5) y B (−5, +6): mismo total, se prefiere A; Gₜ = Σ γᵏ Rₜ₊ₖ₊₁; γ = 1 sin descuento, γ = 0 solo Rₜ₊₁ |
| Política y valor | 6-7 | 452-453 | Policy-based / Value-based approach | a = π(s); determinista o P(A = a | s); V(s) = E[Σ γᵏ Rₜ₊ₖ₊₁ | sₜ = s]; llama "policy-based" a la iteración de política (ver erratas) |
| FrozenLake: el entorno | 7-8 | 453-454 | Simulating the FrozenLake environment | 4 × 4: inicio 0, meta 15 (+1), hielo 1, 2, 3, 4, 6, 8, 9, 10, 13, 14, agujeros 5, 7, 11, 12 (0 y termina); acciones 0 izq., 1 abajo, 2 der., 3 arriba; resbala |
| Paso estocástico | 9-10 | 455-456 | idem | `env.step(2)` (derecha) lleva al estado 4 con `{'prob': 0.333}`; también podría ir a 1 o quedarse en 0; terminated vs truncated |
| Política al azar y matriz de transición | 10-11 | 456-457 | idem | éxito medio 0.016 en 1000 episodios; `env.env.P[6]`: cada acción va a tres destinos con 1/3 (acción 1 desde 6: 5 agujero, 10, 7 agujero) |
| Iteración de valor | 12-13 | 458-459 | Solving FrozenLake with the value iteration algorithm | V∗(s) := maxₐ[R(s, a, s′) + γ Σ_{s′} T(s, a, s′)V∗(s′)] (ver erratas); π∗(s) := argmaxₐ Σ_{s′} T(s, a, s′)[R + γV∗(s′)]; γ = 0.99, umbral 0.0001; función `value_iteration` con bucles explícitos |
| Valores y política óptimos | 13-14 | 459-460 | idem | V∗ = [0.5404, 0.4966, 0.4681, 0.4541, 0.5569, 0, 0.3572, 0, 0.5905, 0.6421, 0.6144, 0, 0, 0.7410, 0.8625, 0]; π∗ = [0, 3, 3, 3, 0, 0, 0, 0, 3, 1, 0, 0, 0, 2, 1, 0] (en el estado 0 conviene "izquierda" por el resbalón) |
| Evaluar la política óptima | 14-15 | 460-461 | idem | 1000 episodios: éxito 0.738 (74 %); recuadro sobre cómo elegir γ |
| Iteración de política | 16-18 | 462-464 | Solving FrozenLake with the policy iteration algorithm | Bellman de esperanza V(s) := Σ_{s′} T(s, a, s′)[R + γV(s′)] y mejora con argmax; `policy_evaluation`, `policy_improvement`, `policy_iteration` (para cuando la política no cambia); mismos V∗ y π∗ |
| Gradiente de política (recuadro) y tabla | 19 | 465 | Best practice / Table 15.4 | **único lugar donde aparece el gradiente de política**: REINFORCE (con estimaciones MC) y PPO, solo nombrados; Table 15.4: cuándo preferir iteración de política o de valor |
| Blackjack | 20-21 | 466-467 | Simulating the Blackjack environment | reglas; estado (suma del jugador, carta visible del crupier, as usable); `reset(seed=0)` = (11, 10, False); hit 1, stick 0; ejemplo que pierde con 13 |
| MC first-visit vs every-visit | 21 | 467 | Performing Monte Carlo policy evaluation | media empírica del retorno en vez de la esperanza; first-visit vs every-visit; solo implementa first-visit |
| Evaluación MC de "pedir hasta 18" | 22-24 | 468-470 | idem | `mc_prediction_first_visit`; γ = 1; 500 000 episodios; valores como (13, 10, False) ≈ −0.274, (19, 7, True) ≈ 0.629; 280 estados |
| MC control on-policy | 24-26 | 470-472 | Performing on-policy Monte Carlo control | Q(s, a); mejora π(s) = argmaxₐ Q(s, a); **exploring start** (primera acción al azar); `mc_control_on_policy` con suma y conteo de retornos |
| Comparar políticas | 26-27 | 472-473 | idem | 100 000 episodios: ganar 0.40256 con "pedir hasta 18" y 0.43148 con la política de MC |
| Q-learning: regla y ε-greedy | 28-29 | 474-475 | Introducing the Q-learning algorithm | Q(s, a) := Q(s, a) + α(r + γ max_{a′} Q(s′, a′) − Q(s, a)); ε-greedy: cada acción ε/|A| y la mejor 1 − ε adicional; `epsilon_greedy_policy` con `torch.multinomial` |
| Q-learning: código | 29-30 | 475-476 | Developing the Q-learning algorithm | ε de 1.0 a 0.1 con decremento lineal ε/(n_episode/2); 10 000 episodios; γ = 1, α = 0.003; promedio móvil de la recompensa |
| Q-learning: resultado | 31 | 477 | idem | Figure 15.5 (promedio de recompensa que sube y se estabiliza); ganar 0.42398 |
| Resumen y ejercicios | 32 | 478 | Summary / Exercises | FrozenLake 8 × 8; implementar every-visit MC |

Erratas e inconsistencias de Liu:
- **p. 447 (PDF 1)**: el temario promete "Solving the Taxi problem with the Q-learning algorithm", pero el capítulo resuelve Blackjack (p. 474).
- **p. 458 (PDF 12)**: la iteración de valor está escrita como maxₐ[R(s, a, s′) + γ Σ_{s′} T(s, a, s′)V∗(s′)], con R fuera de la suma y s′ libre.
  Lo correcto es maxₐ Σ_{s′} T(s, a, s′)[R(s, a, s′) + γV∗(s′)], que es lo que hace el código de la p. 459 y la fórmula de π∗ en la misma página.
- **p. 452 y 465 (PDF 6 y 19)**: llama "policy-based approach" a la iteración de política (que es programación dinámica basada en valores); el
  recuadro de la p. 465 usa "policy-based" en el sentido habitual (gradiente de política, REINFORCE, PPO). Son dos cosas distintas con el mismo nombre.
- **p. 474 (PDF 28)**: dice que la política de comportamiento es la greedy y la política objetivo la ε-greedy. Es al revés: en Q-learning se
  actúa con ε-greedy (comportamiento) y se aprende la greedy (objetivo, el max de la regla). El código de la p. 475 sí actúa con ε-greedy.
- **p. 475 (PDF 29)**: el objetivo r + γ max Q(s′, ·) no se anula cuando el episodio termina. En Blackjack, al plantarse se devuelve un estado
  (por ejemplo (13, 10, False)) que también existe como estado no terminal, así que se mezcla su Q en un objetivo que debería ser solo r.
- **p. 468 (PDF 22)**: `zip(states_t[1::-1], rewards_t[::-1])` solo toma los estados 1 y 0 y los empareja con las dos últimas recompensas
  (confirmado en la imagen). Debe ser `states_t[-2::-1]` (los estados sin el final, invertidos).
- **p. 471 (PDF 25)**: `zip(state_t[::-1], ...)` usa `state_t` (NameError); la variable es `states_t`. Además `torch.empty` no inicializa "al
  azar", como dice la p. 472: deja memoria sin inicializar.
- **Erratas de tipeo en el código**: `torch.abs–V - V_temp)` (p. 462), docstring `""""""` (p. 463), `print('Optimal values'\n', ...)` (p. 464),
  `gym.make('Blackjack'v1')` (p. 466). Todas son errores de sintaxis si se copian.
- **p. 451 (PDF 5)**: el retorno sin descuento suma k = 0 hasta T con Rₜ₊ₖ₊₁; si T es el instante final, el límite debería ser T − t − 1.
- **Comprobado** (reimplementando FrozenLake 4 × 4 resbaladizo sin Gymnasium, con NumPy): la iteración de valor con γ = 0.99 y umbral 0.0001 da
  exactamente los V∗ y π∗ de la p. 459-460, y `P[6]` coincide con la p. 457. La probabilidad de éxito de π∗ es 0.824 sin límite de pasos y 0.740
  con el límite de 100 pasos de FrozenLake-v1, coherente con el 0.738 empírico de la p. 461.

## Búsqueda rápida por concepto

- **Proceso de Markov y MDP**: Raschka pp. 677-679 (dinámica p(s′, r | s, a), transición marginal, determinista vs estocástico; tabla del
  estudiante, Figure 19.3, p. 679); interfaz agente-entorno p. 675-676 (Figure 19.1); propiedad de Markov p. 685. Ejemplo con acciones y
  transiciones estocásticas: Liu pp. 453-457 (FrozenLake, `P[6]` en la 457). Cuadrícula determinista: Raschka p. 694 y 697 (`P[s][a]`).
- **Retorno y descuento γ**: Raschka p. 680 (fórmula y recursión), p. 681 (billete de 100 USD; episodio 1), p. 682 (episodio 2) (con erratas de
  índice); Liu pp. 451-452 (retorno sin descuento y ejemplo de las acciones bursátiles A y B).
- **Funciones de valor V y Q**: Raschka pp. 682-683 (definiciones, recuadro recompensa vs retorno vs valor) y p. 687 (notación tabular); Liu p. 453
  (V) y p. 470 (Q).
- **Ecuación de Bellman**: esperanza en Raschka p. 684; optimalidad solo como iteración de valor en p. 687. Liu p. 458 (optimalidad, con errata) y
  p. 462 (esperanza y mejora).
- **Programación dinámica (iteración de política y de valor)**: Raschka pp. 685-687 (teoría, sin código); Liu pp. 458-465 (código completo y
  números de FrozenLake: V∗ y π∗ en las pp. 459-460, 0.738 en la 461, tabla de cuándo usar cada uno en la 465).
- **Monte Carlo**: Raschka pp. 687-689 (first-visit, exploring starts, MC control, actualización incremental); Liu pp. 467-473 (first-visit con
  código en Blackjack, MC control con exploring starts, 0.40 vs 0.43).
- **Diferencias temporales TD(0), SARSA**: Raschka p. 689 (bootstrapping), p. 690 (TD(0), n pasos, MC vs TD), p. 691 (SARSA). Ningún libro trae
  código de SARSA.
- **Q-learning**: regla Raschka p. 691 y Liu p. 474; ε-greedy Raschka p. 689 (fórmula) y Liu pp. 474-475 (código); cuadrícula 5 × 6 Raschka
  p. 694 (Figure 19.7), código pp. 696-697 y 702-705, resultado p. 705 (Figure 19.9); Blackjack Liu pp. 475-477.
- **Deep Q-learning**: Raschka pp. 706-714 (aproximación de funciones p. 706, replay memory pp. 707-708, objetivo pp. 708-709 con Figure 19.12,
  código pp. 710-713, resultado p. 714).
- **Gradiente de política y actor-crítico**: Raschka no los trae. Liu solo nombra REINFORCE y PPO en un recuadro de la p. 465. Actor-crítico no
  aparece en ninguno de los dos.
