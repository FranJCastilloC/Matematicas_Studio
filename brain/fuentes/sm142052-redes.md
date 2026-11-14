# Mapa de citas: SM142052 Arquitectura de computadores y redes, UD4 a UD6 (redes) y Proyecto final

Carpeta: `.../SEMESTRE 1 /SM142052 - Arquitectura de computadores y redes/` ("SEMESTRE 1 " lleva un espacio al final). Subcarpetas usadas:
`UD4. Fundamentos de redes/`, `UD5. Tecnologias y protocolos/`, `UD6. Seguridad en redes/` y `07 Proyecto final/`.
Todos los PDF tienen capa de texto. Las figuras (Figura 1 de UD5 teoría p.8, Figura 2 de UD5 teoría p.10) y las tablas con errores de
formato (UD4 Tablas 17, 19, 21, 22) se revisaron además en la página renderizada. No hay código, fórmulas numeradas ni ejemplos numerados
(solo "Tabla n" y "Figura n"). La unidad cita "Sesión/Módulo" pero nada de lo escrito se llama "Ejemplo n".

Ids de fuente y relación entre página del PDF y página impresa (verificada con varios ejemplos en cada archivo):

| Id | Archivo | Págs. PDF | Relación PDF / impresa |
|---|---|---|---|
| `red4` | UD4 `MUIA_SM142052_UD4_Contenido_teorico.pdf` (A4) | 19 | impresa = PDF − 2. Intro PDF 3 = p.1; OSI PDF 5 = p.3; encapsulación PDF 8 = p.6; máscara CIDR PDF 12 = p.10; glosario PDF 16 = p.14; bibliografía PDF 18 = p.16. Sin número: PDF 1 (portada), 2 (índice), 19 (© final). El índice de PDF 2 coincide con las páginas impresas en todas sus entradas |
| `red4diapo` | UD4 `MUIA_SM142052_UD4_Presentación.pdf` (22 diapositivas 16:9) | 22 | PDF = número de diapositiva = número impreso (esquina inferior derecha) desde la 3. Sin número: PDF 1 (portada) y 2 (índice) |
| `red5` | UD5 `MUIA_SM142052_UD5_Contenido_teórico.pdf` (A4) | 20 | impresa = PDF − 3. Intro PDF 4 = p.1; objetivos PDF 5 = p.2; Ethernet PDF 6 = p.3; VLSM PDF 9 = p.6; TCP PDF 11 = p.8; DNS Figura 2 PDF 13 = p.10; conclusiones PDF 16 = p.13; glosario PDF 18 = p.15; bibliografía PDF 19 = p.16. Sin número: PDF 1 (portada), 2-3 (índice), 20 (©). El índice coincide con las páginas impresas |
| `red5diapo` | UD5 `MUIA_SM142052_UD5_Presentación.pdf` (43 diapositivas) | 43 | PDF = número impreso en las diapositivas que lo llevan. Sin número: PDF 1 (portada), 2 (índice), 5, 11, 16, 22, 27, 31, 36 (separadores de sección) y 43 ("¡GRACIAS!") |
| `red5ej` | UD5 `MUIA_SM142052_UD5_Ejercicio_con_solucion.pdf` (A4) | 8 | impresa = PDF − 1. Enunciado PDF 2 = p.1; tareas PDF 3 = p.2; pautas PDF 7 = p.6. Sin número: PDF 1 (portada), 8 (©) |
| `red6` | UD6 `MUIA_SM142052_UD6_Contenido_teorico.pdf` (A4) | 22 | impresa = PDF − 3. Intro PDF 4 = p.1; cortafuegos PDF 8 = p.5; VPN PDF 11 = p.8; cifrado PDF 13 = p.10; TLS PDF 15 = p.12; buenas prácticas PDF 16 = p.13; glosario PDF 19 = p.16; bibliografía PDF 21 = p.18. Sin número: PDF 1 (portada), 2-3 (índice), 22 (©). El índice coincide con las páginas impresas |
| `red6diapo` | UD6 `MUIA_SM142052_UD6_Presentación.pdf` (32 diapositivas) | 32 | PDF = número impreso desde la 3. Sin número: PDF 1 (portada) y 2 (índice) |
| (sin id) | `MUIA_SM142052_Proyecto Final.pdf` (A4, 5 págs.) | 5 | impresa = PDF − 1 (PDF 2 = p.1, PDF 4 = p.3). Sin número: PDF 1 (portada) y 5 (©) |

Convención de la unidad: UD4 se imparte en dos sesiones (Sesión 4 modelos y encapsulación; Sesión 5 IPv4). UD5 en dos sesiones (1: Ethernet, switching, routing; 2: transporte,
DNS, HTTP, redes para IA) con el caso guía de la empresa TechNova y el bloque `192.168.10.0/24`. UD6 en dos módulos de 90 minutos.
**Citar siempre la página del PDF** (el campo `data-pag`); la impresa va en `data-pimp`.

## A. `red4` UD4 Fundamentos de redes, teoría (PDF = impresa + 2)

| Tema | pág. PDF | impresa | Qué hay exactamente |
|---|---|---|---|
| Portada e índice | 1, 2 | sin número | 13 apartados numerados, Conclusiones, Resumen, Glosario, Bibliografía |
| Introducción | 3 | 1 | por qué dividir en capas (si fuera un bloque monolítico sería difícil depurar); cada capa habla con la superior e inferior de su equipo y "de forma lógica" con su par remoto; OSI teórico (ISO) y TCP/IP práctico; analogía de la dirección postal para la IP |
| Objetivos | 3, 4 | 1, 2 | lista de 11 objetivos: siete capas, correspondencia TCP/IP-OSI, protocolos por capa, encapsulación, diagnóstico, estructura IPv4, públicas/privadas y clases A, B, C, máscaras decimal y CIDR, subnetting básico, caso práctico de cierre |
| Modelo OSI: presentación | 5 | 3 | propuesto por ISO en 1984; siete capas de la 1 (física) a la 7 (aplicación) |
| Capas 1, 2 y 3 (Tablas 1 a 3) | 5 | 3 | cada tabla con función, PDU, protocolos de ejemplo y dispositivos. Capa 1: bit; Ethernet físico, Wi-Fi PHY, USB; hubs y repetidores. Capa 2: trama; direccionamiento MAC; Ethernet 802.3, Wi-Fi 802.11, PPP, VLAN 802.1Q; switches. Capa 3: paquete; IPv4/IPv6, ICMP, OSPF, RIP; routers |
| Capas 4, 5, 6 y 7 (Tablas 4 a 7) | 6 | 4 | Capa 4: segmento (TCP) o datagrama (UDP); firewalls de capa 4 y balanceadores. Capa 5 (sesión): PDU "Datos"; NetBIOS, RPC, PPTP. Capa 6 (presentación): formato, cifrado, compresión; TLS, JPEG, MPEG, ASCII. Capa 7: HTTP/HTTPS, FTP, SMTP, DNS, DHCP, SSH |
| Modelo TCP/IP (Tablas 8 a 11) | 7, 8 | 5, 6 | también llamado DoD o de Internet, cuatro capas: acceso a la red (1+2), Internet (3), transporte (4), aplicación (5+6+7). ARP aparece en las capas de acceso e Internet ("frontera"). La Tabla 11 empieza en PDF 7 y termina en PDF 8 |
| Comparativa OSI vs TCP/IP (Tabla 12) | 8 | 6 | siete filas, número de capa, capa TCP/IP y función; tres diferencias: teórico/implementado, 7 frente a 4 capas, OSI se desarrolló antes que los protocolos y TCP/IP después |
| Encapsulación y desencapsulación (Tabla 13) | 8, 9 | 6, 7 | definición (cada capa añade cabecera y a veces cola). Tabla: aplicación "Datos" (p. ej. petición HTTP), transporte "cabecera TCP (puertos, nº de secuencia)" da Segmento, red "cabecera IP" da Paquete, enlace "cabecera y cola Ethernet (MAC origen/destino, FCS)" da Trama, física da Bits. PDF 9: el receptor invierte el proceso, cada capa retira su cabecera |
| Topologías de red (Tabla 14) | 9 | 7 | bus, estrella, anillo, malla, árbol: descripción, ventaja e inconveniente; hoy domina la estrella física con switch. Es vocabulario sin cálculo |
| Medios de transmisión (Tabla 15) | 9, 10 | 7, 8 | guiados y no guiados: UTP Cat. 6 (1-10 Gbps, hasta 100 m), coaxial, fibra monomodo (10-100+ Gbps, decenas de km), fibra multimodo (hasta 2 km), Wi-Fi 802.11ac/ax, Bluetooth (1-3 Mbps, hasta 10 m). Cifras orientativas |
| Dispositivos de interconexión (Tabla 16) | 10 | 8 | hub (capa 1, repite a todos), switch (capa 2, reenvía según tabla MAC), router (capa 3, tabla de rutas), punto de acceso (1-2), firewall (3-4). Frase clave: un switch trabaja con MAC y un router con IP |
| Estructura de la dirección IPv4 | 10 | 8 | 32 bits, cuatro octetos, notación decimal punteada, cada octeto de 0 a 255 |
| Ejemplo agrupado en octetos (Tabla 17) | 11 | 9 | 192.168.1.10 con los cuatro octetos en binario; dos partes net-id y host-id; el límite lo marca la máscara. Tabla con error de formato (ver erratas) |
| Conversión decimal-binario (Tablas 18 y 19) | 11 | 9 | valores posicionales 128, 64, 32, 16, 8, 4, 2, 1; 11000000 = 128 + 64 = 192 (la máscara 255.255.255.192, /26). Tabla 19: convertir 172.16.5.200 con el cálculo de cada octeto (128+32+8+4 = 172; 16; 4+1 = 5; 128+64+8 = 200). Errores de formato (ver erratas) |
| Clases de direcciones IP (Tabla 20) | 11, 12 | 9, 10 | históricamente cinco clases (A a E) por los primeros bits; hoy se usa CIDR. A: 1-126, /8, 126 redes, 16 777 214 hosts. B: 128-191, /16, 16 384 redes, 65 534 hosts. C: 192-223, /24, 2 097 152 redes, 254 hosts. D multicast 224-239; E experimental 240-255. No explica los bits iniciales (0, 10, 110) |
| Máscara de subred y notación CIDR | 12 | 10 | máscara de 32 bits: unos = red, ceros = host; CIDR = número de unos precedido de barra; 255.255.255.0 = /24; hosts útiles = 2^(bits de host) − 2 |
| Tabla de máscaras (Tabla 21) | 12 | 10 | filas /24 a /30 con máscara decimal, bits de host y hosts útiles (254, 126, 62, 30, 14, 6, 2). La columna de máscara está rota de /25 a /30 (ver erratas) |
| Metodología de cálculo de subredes | 12, 13 | 10, 11 | cinco pasos: datos de partida; bits a tomar prestados o dejar libres; nueva máscara; "salto" = 256 menos el valor del octeto de la máscara que varía; enumerar para cada subred red, primer host, último host y broadcast. No trae ejemplo resuelto |
| Introducción a VLSM | 13 | 11 | máscaras de distinta longitud dentro de la misma red para ajustar cada subred a los hosts reales y no desperdiciar; "la técnica que se emplea en el caso práctico integrador del siguiente apartado" (ese caso no está, ver erratas) |
| Direcciones especiales (Tabla 22) | 13 | 11 | 127.0.0.0/8 loopback (127.0.0.1), 169.254.0.0/16 APIPA o link-local (síntoma de fallo de DHCP), 0.0.0.0 no especificada, broadcast limitado (celda rota, ver erratas) |
| Conclusiones e ideas clave | 14, 15 | 12, 13 | por qué un switch usa MAC y un router IP; una IP solo tiene sentido con su máscara; las clases tienen hoy valor histórico; relación con IA (entrenamiento distribuido, API de inferencia, clústeres) |
| Resumen y mapa conceptual | 15 | 13 | Sesión 4 modelos y encapsulación; Sesión 5 direccionamiento y subredes; menciona "herramientas de diagnóstico, exámenes tipo test, rúbricas, anexos" que no están en este archivo |
| Glosario | 16, 17 | 14, 15 | 22 términos: APIPA, capa, CIDR, desencapsulación, dirección de broadcast (última de la subred), dirección de red (primera de la subred), dirección IP, dirección MAC (48 bits), encapsulación, firewall, hub, máscara, NAT, paquete, PDU, AP, router, segmento, switch, TCP, topología, trama, UDP, VLSM |
| Bibliografía | 18 | 16 | IEEE 802.11-2020 y 802.3-2022, RFC 791 y RFC 1918, Kurose y Ross (8.ª ed., 2021), Tanenbaum y Wetherall (5.ª ed., 2012) |

## B. `red4diapo` UD4 presentación (PDF = número de diapositiva)

| Tema | pág. PDF | Qué hay exactamente |
|---|---|---|
| Portada e índice | 1, 2 | índice de 17 apartados; une "clases, especiales y reservadas" en un solo apartado (11) |
| Objetivos | 3 | los mismos objetivos que la teoría, más cuatro "objetivos específicos" en iconos; la cabecera dice "Unidad 3" (ver erratas) |
| Introducción | 4 | texto idéntico a la teoría p.3 (p.1 impresa) |
| Modelo OSI | 5, 6 | siete capas en viñetas, sin tablas de PDU, protocolos ni dispositivos |
| Modelo TCP/IP | 7 | cuatro capas en viñetas |
| Comparativa OSI vs TCP/IP | 8 | tabla de siete filas igual que Tabla 12 |
| Encapsulación y desencapsulación | 9 | texto y tabla de cinco filas igual que Tabla 13 |
| Topologías de red | 10 | tabla de cinco topologías |
| Medios de transmisión | 11 | tabla de seis medios |
| Dispositivos de interconexión | 12 | tabla de cinco dispositivos |
| Estructurado de la dirección IPv4 | 13 | 192.168.1.10 en binario; mismo error de octetos 3 y 4 que la teoría |
| Conversión decimal-binario | 14 | valores posicionales y tabla de 172.16.5.200 (mismos errores de ceros) |
| Clases de direcciones IP | 15 | tabla de clases A a E |
| Máscara de subred y CIDR | 16 | tabla /24 a /30 con la misma máscara rota "2,55255E+11" |
| Metodología de cálculo de subredes | 17 | los cinco pasos en viñetas |
| Introducción a VLSM | 18 | texto de la teoría, con la misma remisión al caso práctico inexistente |
| Direcciones IP especiales y reservadas | 19 | tabla de cuatro filas, con la misma celda rota del broadcast limitado |
| Conclusiones | 20 | menciona el caso práctico de la empresa "Redes Alfa S.L." que no está en ningún archivo de esta carpeta |
| Resumen y bibliografía | 21, 22 | resumen igual que la teoría; bibliografía de seis líneas sin datos |

## C. `red5` UD5 Tecnologías y protocolos, teoría (PDF = impresa + 3)

| Tema | pág. PDF | impresa | Qué hay exactamente |
|---|---|---|---|
| Portada e índice | 1-3 | sin número | índice con subapartados 1.1 a 7.3 |
| Introducción y caso TechNova | 4, 5 | 1, 2 | recorre la pila de abajo arriba; cuadro "Importante" con el reparto en dos sesiones; cuadro "Caso de referencia": TechNova, tres departamentos (Comercial, IT, laboratorio de IA), VLAN, bloque `192.168.10.0/24` en subredes distintas y router con acceso a Internet |
| Objetivos | 5 | 2 | ocho objetivos específicos (Ethernet y MAC, switch y VLAN, VLSM y tabla de rutas, TCP/UDP, DNS, HTTP, API REST, ancho de banda y latencia en IA) |
| 1.1 Papel de la capa de enlace | 6 | 3 | enmarcado, direccionamiento físico, detección de errores, control de acceso al medio |
| 1.2 Tramas Ethernet y direcciones MAC (Tabla 1) | 6 | 3 | campos: preámbulo 8 bytes, MAC destino 6, MAC origen 6, EtherType/Longitud 2 (faltan datos y FCS, ver erratas). MAC de 48 bits en seis grupos hexadecimales (`3C:A9:F4:1B:8E:02`); primeros tres bytes = OUI del fabricante; la MAC no cambia al mover el equipo de red |
| 1.3 CSMA/CD y Ethernet conmutada | 6, 7 | 3, 4 | escuchar antes de transmitir, abortar en colisión, señal de refuerzo, espera aleatoria; con switches y full-duplex ya no hay colisiones; se estudia por su valor histórico |
| 1.4 Dominios de colisión y de difusión | 7 | 4 | un hub es un solo dominio de colisión; un switch aísla cada puerto; broadcast a `FF:FF:FF:FF:FF:FF`; un switch no separa dominios de difusión y un router sí |
| 2.1 El switch | 7 | 4 | reenvía solo al puerto del destinatario; dos pares pueden hablar a la vez a velocidad completa |
| 2.2 Tabla de direcciones MAC (tabla CAM) | 7, 8 | 4, 5 | se aprende anotando MAC origen y puerto de entrada; las entradas caducan tras minutos de inactividad. Tabla 2 (PDF 8): tres filas MAC, puerto (Gi0/1, Gi0/2, Gi0/24) y VLAN (10, 20, 99) |
| 2.3 Inundación, reenvío y filtrado | 8 | 5 | tres reglas: destino broadcast o desconocido, inundar por todos los puertos de la misma VLAN salvo el de entrada; destino conocido en otro puerto, reenviar solo por él; destino en el mismo puerto, filtrar (descartar) |
| 2.4 VLAN y 802.1Q | 8, 9 | 5, 6 | agrupa puertos en un dominio de difusión lógico; VLAN distintas necesitan un dispositivo de capa 3; 802.1Q añade una etiqueta de 4 bytes en enlaces troncales. Ejemplo TechNova: VLAN 10 Comercial, 20 IT, 30 Laboratorio de IA, 99 servidores |
| 3.1 El router y la capa de red | 9 | 6 | conecta redes distintas por la IP de destino; separa dominios de difusión |
| 3.2 IPv4, máscaras y VLSM (Tabla 3) | 9 | 6 | Ejemplo resuelto sobre `192.168.10.0/24`: Comercial 50 hosts `/26` (.1-.62, broadcast .63); IT 20 hosts `/27` en .64 (.65-.94 / .95); Laboratorio de IA 10 `/28` en .96 (.97-.110 / .111); Servidores 2 con crecimiento `/29` en .112 (.113-.118 / .119). Libre .120-.255. Regla: asignar primero los bloques mayores. Todas las cuentas se verificaron con `ipaddress` |
| 3.3 Tablas de encaminamiento y ruta por defecto (Tabla 4) | 10 | 7 | siguiente salto e interfaz de salida; ruta por defecto `0.0.0.0/0`. Tabla 4 ("Esquema de prioridades"): cuatro redes conectadas a VLAN 10, 20, 30, 99 y `0.0.0.0/0` hacia `203.0.113.1` (ISP) por WAN. No explica el prefijo más largo |
| 3.4 Estático y dinámico | 10 | 7 | estáticas para redes pequeñas; OSPF dentro de una organización, BGP entre operadores (sistemas autónomos); no profundiza |
| 4.1 Puertos y multiplexación | 10, 11 | 7, 8 | puertos 0 a 65535; bien conocidos por debajo de 1024 (80 HTTP, 443 HTTPS, 53 DNS, 22 SSH); socket = IP + puerto en origen y destino |
| 4.2 TCP | 11 | 8 | orientado a conexión; número de secuencia y ACK; retransmisión; control de flujo (ventana del receptor) y de congestión; coste: cabeceras mayores y latencia |
| 4.3 Three-way handshake (Figura 1) | 11 | 8 | tres cuadros: Cliente a Servidor SYN, Servidor a Cliente SYN-ACK, Cliente a Servidor ACK; el cliente propone un número de secuencia inicial, el servidor confirma el recibido y propone el suyo. Cierre en cuatro pasos con FIN y ACK. No da números de secuencia concretos |
| 4.4 UDP | 11 | 8 | sin conexión ni garantías; cabecera de 8 bytes frente a 20 mínimo de TCP |
| 4.5 TCP frente a UDP (Tabla 5) | 12 | 9 | videollamada prefiere perder un fotograma; archivos y web necesitan todos los bytes; tabla de conexión, fiabilidad, latencia, uso típico |
| 5.1 y 5.2 DNS: por qué y jerarquía | 12 | 9 | traduce nombres a IP; árbol invertido: raíz (punto), TLD (.com, .es), segundo nivel (technova.com), subdominios; servidores autoritativos por nivel |
| 5.3 Resolución de un nombre (Figura 2) | 12, 13 | 9, 10 | resolutor recursivo; consulta en cadena raíz, TLD, autoritativo; caché según el TTL. Figura 2 (PDF 13): cadena Cliente, Resolutor recursivo, Raíz, TLD (.com), Autoritativo |
| 5.4 Tipos de registro (Tabla 6) | 13 | 10 | A, AAAA, CNAME, MX, NS, TXT |
| 6.1 Cliente-servidor y HTTP | 13 | 10 | solicitud-respuesta sobre TCP; el servidor se localiza por nombre (DNS) y recurso |
| 6.2 Métodos, códigos y cabeceras (Tabla 7) | 14 | 11 | GET, POST, PUT, PATCH, DELETE; 2xx éxito (200, 201), 3xx redirección (301), 4xx error del cliente (400, 404), 5xx error del servidor (500, 503); cabeceras `Content-Type: application/json` y `Authorization` |
| 6.3 HTTP/1.1, HTTP/2, HTTPS | 14 | 11 | conexiones persistentes pero secuenciales; HTTP/2 binario, multiplexación y compresión de cabeceras; HTTPS = HTTP sobre TLS con certificado |
| 6.4 APIs REST | 14 | 11 | recursos como URLs, métodos como CRUD, JSON; `GET /modelos/123`, `POST /modelos`; patrón de las APIs de modelos de IA en la nube |
| 7.1 a 7.3 Redes para la IA | 15 | 12 | sincronización de gradientes en cada paso; si la red no da abasto los nodos esperan; Ethernet de decenas de Gbps frente a InfiniBand y NVLink; latencia de inferencia = DNS + conexión TCP (y TLS) + ida y vuelta de red + cómputo. Sin cifras ni fórmula |
| Conclusiones y resumen | 16 | 13 | siete conclusiones y siete viñetas de resumen |
| Mapa conceptual | 17 | 14 | nueve cajas (ver erratas por el corte "TCP/UD P") |
| Glosario | 18 | 15 | 13 términos: BGP, MAC, DNS, dominio de difusión, HTTP, ruta por defecto, switch, TCP, three-way handshake, UDP, VLAN, VLSM |
| Bibliografía | 19 | 16 | RFC 9110 (HTTP), IEEE 802.3-2022 y 802.1Q-2022, RFC 791, RFC 793, RFC 1035, RFC 768, Kurose y Ross, Stallings, Tanenbaum |

## D. `red5diapo` UD5 presentación (PDF = número de diapositiva)

| Tema | pág. PDF | Qué hay exactamente |
|---|---|---|
| Portada, índice, objetivos, introducción | 1-4 | objetivos en ocho iconos; caso guía TechNova ("tres departamentos") |
| Capa de enlace y trama | 6, 7 | p.6: enmarcado, MAC, detección de errores (FCS/CRC), control de acceso. p.7: trama completa en una fila: Preámbulo 8B, MAC destino 6B, MAC origen 6B, EtherType 2B, Datos 46-1500B, FCS 4B. Es más completa que la teoría |
| CSMA/CD | 8 | definición de una frase y nota de que los switches full-duplex eliminan colisiones |
| Dominios de colisión y de difusión | 9 | tabla: hub 1 colisión y 1 difusión; switch 1 colisión por puerto y 1 difusión; router 1 colisión por puerto y 1 difusión por interfaz |
| Pregunta de repaso (switches y colisiones) | 10 | pregunta y respuesta |
| Tabla MAC | 12 | misma Tabla 2 de la teoría |
| Inundar, reenviar, filtrar | 13 | tres cajas con las tres reglas |
| VLAN | 14 | cuatro VLAN (10, 20, 30, 99) y ejemplo TechNova |
| Pregunta de repaso (VLAN) | 15 | por qué dos VLAN del mismo switch no se ven |
| Router | 17 | IP de destino, no MAC |
| VLSM TechNova | 18 | tabla de cuatro subredes (servidores con 2 hosts) |
| Tabla de encaminamiento | 19 | solo tres redes conectadas y la ruta por defecto (falta la VLAN 99, ver erratas) |
| Estático frente a dinámico | 20 | dos cuadros |
| Pregunta de repaso (/28) | 21 | 32 − 28 = 4 bits de host, 2^4 = 16 direcciones, menos red y broadcast = 14. Único cálculo escrito en las diapositivas |
| Puertos | 23 | 80, 443, 53, 22 |
| TCP y three-way handshake | 24 | tres cuadros SYN, SYN-ACK, ACK |
| UDP y comparativa | 25 | tabla de cuatro filas |
| Pregunta de repaso (videollamada con UDP) | 26 | la cabecera de la diapositiva dice "Acceso directo a memoria (DMA)" (ver erratas) |
| DNS: jerarquía y resolución | 28 | cadena Cliente, Resolutor, Raíz, TLD (.com), Autoritativo |
| Tipos de registro DNS | 29 | seis registros |
| Pregunta de repaso (TTL) | 30 | la cabecera dice "Buses y estándares de E/S" |
| Métodos y códigos HTTP | 32 | cinco métodos y cuatro rangos |
| HTTP/1.1, HTTP/2 y HTTPS | 33 | tres cuadros |
| APIs REST | 34 | ejemplo: `POST /modelos/inferencia {"prompt": "..."}` devuelve `200 OK {"resultado": "..."}` |
| Pregunta de repaso (HTTP/2) | 35 | multiplexación |
| Redes para IA | 37, 38 | entrenamiento distribuido; latencia de inferencia |
| Pregunta de repaso (ancho de banda) | 39 | la cabecera dice "RAID y almacenamiento para la IA" |
| Conclusiones, resumen, bibliografía | 40, 41, 42 | siete conclusiones; resumen en cuatro columnas; bibliografía de seis líneas |

## E. `red5ej` UD5 ejercicio con solución, "Reto de diseño de red" (PDF = impresa + 1)

| Tema | pág. PDF | impresa | Qué hay exactamente |
|---|---|---|---|
| Enunciado y datos de partida | 2 | 1 | TechNova, una planta, tres áreas; bloque `192.168.10.0/24`; Comercial 50, IT 20, laboratorio de IA 10 y servidores hasta 6; router con enlace WAN, puerta de enlace `203.0.113.1`; `www.technova.com` resoluble desde Internet y `lab.technova.com` apuntando al mismo servidor que la API; entregable de 9 tareas |
| Nueve tareas | 3 | 2 | 1 VLAN y justificación; 2 VLSM; 3 direcciones libres y subred para Marketing (25 hosts); 4 tabla de rutas; 5 por qué Comercial e IT no se ven sin router; 6 TCP o UDP para videoconferencia y réplica de pesos; 7 registros DNS; 8 dos endpoints REST; 9 requisito de red al pasar de 1 a 4 servidores con GPU |
| Solución 1: VLAN | 4 | 3 | VLAN 10, 20, 30, 99; segmentar reduce el broadcast, permite políticas por área y aísla incidentes |
| Solución 2: VLSM | 4 | 3 | misma tabla que la teoría con servidores de 6 hosts; verificación: 64 + 32 + 16 + 8 = 120 direcciones consumidas de 256 |
| Solución 3: libres y Marketing | 4 | 3 | quedan libres .120 a .255 (136 direcciones); Marketing necesita "al menos 27 direcciones utilizables" y por eso `/27`: `192.168.10.128/27`, hosts .129-.158, broadcast .159 (verificado) |
| Solución 4: tabla de rutas | 5 | 4 | cinco filas: las cuatro redes conectadas y `0.0.0.0/0` hacia `203.0.113.1` por WAN |
| Solución 5: VLAN y router | 5 | 4 | el switch aísla cada VLAN; un router con interfaz o subinterfaz en cada VLAN reenvía entre ellas |
| Solución 6: TCP o UDP | 5 | 4 | videoconferencia con UDP (en tiempo real); réplica de pesos con TCP (ningún byte puede perderse) |
| Solución 7: DNS | 5, 6 | 4, 5 | `www.technova.com. A 203.0.113.50` y `lab.technova.com. CNAME www.technova.com.`; el alias sigue al registro A si cambia la IP |
| Solución 8: REST | 6 | 5 | `POST /inferencias` con cuerpo JSON devuelve `202 Accepted` con `id_solicitud` y estado; `GET /inferencias/a1b2c3` devuelve `200 OK` con el resultado |
| Solución 9: clúster | 6 | 5 | sincronización entre 4 servidores exige ancho de banda y latencia; si no basta los servidores esperan; solución: red dedicada de alta velocidad (VLAN separada o InfiniBand) |
| Pautas de evaluación | 7 | 6 | VLAN 1,5 puntos; VLSM 2,5; rutas 1,5; TCP/UDP 1,5; DNS 1; REST 1; clúster 1 (suman 10) |

## F. `red6` UD6 Seguridad en redes, teoría (PDF = impresa + 3)

| Tema | pág. PDF | impresa | Qué hay exactamente |
|---|---|---|---|
| Portada e índice | 1-3 | sin número | 29 apartados numerados (ver erratas sobre la numeración) |
| Introducción y objetivos | 4 | 1 | seguridad como requisito estructural; confidencialidad, integridad y disponibilidad; seis objetivos (vulnerabilidades, firewall, VPN, simétrico y asimétrico con TLS, buenas prácticas, proyecto transversal) |
| 1. Vulnerabilidad, amenaza, ataque | 5 | 2 | tres definiciones con ejemplos |
| 2. Clasificación (Tabla 1) | 5 | 2 | de diseño (ARP no autentica las respuestas), de configuración (regla "permitir todo"), de implementación (desbordamiento de búfer), humanas u organizativas |
| 3.1 Malware | 5, 6 | 2, 3 | virus y gusanos, troyanos (backdoors), ransomware |
| 3.2 DoS y DDoS | 6 | 3 | agotar ancho de banda, CPU, memoria o conexiones; botnet; SYN flood (SYN sin completar el handshake agota la tabla de conexiones); ataques volumétricos con amplificación (DNS, NTP) |
| 3.3 MITM | 6 | 3 | ARP spoofing (asociar la MAC del atacante con la IP de la puerta de enlace), DNS spoofing o cache poisoning, Evil twin |
| 3.4 Sniffing | 6 | 3 | Wireshark; en switch es limitado y se supera con ARP spoofing; con hub o Wi-Fi abierto es trivial si no hay cifrado |
| 3.5 y 3.6 Phishing, fuerza bruta y diccionario | 7 | 4 | ingeniería social; probar credenciales en SSH, VPN, paneles. Sin números de combinaciones |
| 4. Superficie de ataque y defensa en profundidad | 7 | 4 | reducir la superficie; capas: firewall, segmentación, cifrado, autenticación, monitorización. Recuadro "Recuerda": vulnerabilidad + amenaza = riesgo |
| 5. Patrones de incidentes reales (Tabla 2) | 7, 8 | 4, 5 | cadenas de ataque: correo (phishing, troyano, backdoor), Wi-Fi pública (Evil Twin, MITM), servicio expuesto (escaneo de puertos, explotación, acceso), fuerza bruta a VPN; cada una con la capa que la habría contenido; mención de MITRE ATT&CK |
| 6. Cortafuegos | 8 | 5 | controla tráfico por IP, puerto, protocolo o estado; punto de control entre zonas de distinta confianza; no es un antivirus |
| 7. Tipos de cortafuegos (Tabla 3) | 8, 9 | 5, 6 | filtrado de paquetes (capas 3-4, cada paquete aislado), inspección de estado (tabla de estados; permite solo respuestas coherentes), proxy o nivel de aplicación (capa 7), NGFW (3 a 7, IPS) con la limitación de cada uno |
| 8. Arquitecturas de despliegue | 9 | 6 | perimetral, DMZ (uno o dos firewalls), interno o de segmentación (movimiento lateral), personal o de host |
| 9. Reglas de filtrado (Tabla 4) | 9, 10 | 6, 7 | evaluación secuencial, primera coincidencia (first match). Cuatro reglas: red interna `192.168.1.0/24` a cualquiera por TCP/443 y TCP/80; cualquiera a servidor web DMZ por TCP/443; red interna a servidor DMZ por TCP/22; DENEGAR todo lo demás |
| 10. Topología con DMZ (Tabla 5) | 10 | 7 | firewall de tres interfaces: externa (no confiable), DMZ (confianza media), interna (confianza alta); el tráfico de menor a mayor confianza se restringe al máximo |
| 11. Limitaciones de los firewalls | 10, 11 | 7, 8 | no frenan amenazas internas; el filtrado de paquetes no ve el contenido (ataque dentro de HTTPS); no cifran |
| 12 y 13. VPN y tipos (Tabla 6) | 11 | 8 | túnel cifrado sobre red no confiable; "virtual" porque no hay enlace físico; acceso remoto, sitio a sitio, host a host |
| 14. Protocolos VPN (Tabla 7) | 11, 12 | 8, 9 | IPsec (capa 3; modos túnel y transporte), SSL/TLS VPN, WireGuard, L2TP con IPsec |
| 15. Qué garantiza una VPN | 12 | 9 | confidencialidad, integridad, autenticación de extremos; no protege de malware ya presente ni sustituye al firewall |
| 16. Establecimiento de un túnel VPN | 12, 13 | 9, 10 | cinco fases: autenticación, negociación de algoritmos, intercambio de claves (asimétrico para acordar clave simétrica), túnel con IP interna, transmisión cifrada. La latencia inicial corresponde a las fases 1 a 4 |
| Recuadro Firewall + VPN | 13 | 10 | el firewall perimetral suele terminar el túnel; el tráfico se descifra y luego se filtra |
| 17. Fundamentos del cifrado | 13 | 10 | texto en claro, texto cifrado, clave; base de VPN y HTTPS |
| 18. Cifrado simétrico | 13 | 10 | una clave compartida; AES con claves de 128, 192 o 256 bits; rapidez; problema de distribución de la clave |
| 19. Cifrado asimétrico | 13, 14 | 10, 11 | par de claves relacionadas por una función de un solo sentido; RSA y curvas elípticas; no requiere canal seguro previo; más costoso. No muestra ninguna cuenta de RSA |
| 20. Enfoque híbrido | 14 | 11 | asimétrico solo para acordar la clave de sesión; simétrico para los datos. Analogía del buzón (clave pública) y la caja fuerte compartida (simétrico) |
| 21. Funciones hash y firma digital | 14, 15 | 11, 12 | salida de longitud fija, resistencia a colisiones, efecto avalancha ("un cambio mínimo altera radicalmente la salida"); firma = hash cifrado con la clave privada; aporta autenticidad y no repudio. Sin ejemplo de hash ni longitud en bits |
| 22. Certificados digitales y TLS (Tabla 8) | 15 | 12 | certificado = clave pública + identidad, firmado por una CA; TLS sucesor de SSL; tabla de cuatro mecanismos (AES, RSA/ECC, hash SHA-256, firma) con qué aportan |
| 22.1 Negociación simplificada de TLS | 15, 16 | 12, 13 | cinco pasos: el cliente envía versiones y algoritmos; el servidor elige y envía su certificado; el cliente verifica la firma contra las CA de confianza; clave de sesión acordada con la clave pública; datos cifrados con AES |
| 23 a 28. Buenas prácticas | 16, 17 | 13, 14 | contraseñas largas, gestor, 2FA, evitar credenciales por defecto; parches; mínimo privilegio y segmentación; copias de seguridad offline; concienciación frente al phishing; logs |
| 29. Tabla-resumen de buenas prácticas | 17 | 14 | seis ámbitos con su riesgo (también rotulada "Tabla 8", ver erratas) |
| Conclusiones, resumen y mapa conceptual | 18 | 15 | la defensa en profundidad como idea central; Módulo 1 (vectores, firewall, VPN) y Módulo 2 (cifrado y buenas prácticas) |
| Glosario | 19, 20 | 16, 17 | incluye términos de otra unidad (ver erratas) |
| Bibliografía | 21 | 18 | RFC 7296 (IKEv2), RFC 8446 (TLS 1.3), NIST SP 800-41 Rev. 1, Kurose y Ross (2017), Stallings (2004), Tanenbaum |

## G. `red6diapo` UD6 presentación (PDF = número de diapositiva)

| Tema | pág. PDF | Qué hay exactamente |
|---|---|---|
| Portada, índice, objetivos, introducción | 1-4 | índice de 16 apartados; objetivos con cuatro iconos |
| Vulnerabilidad, amenaza, ataque | 5 | las tres definiciones |
| Clasificación de vulnerabilidades | 6 | tabla de cuatro tipos |
| Principales vectores | 7 | lista de seis vectores; texto "estudiante de primer curso" |
| Malware, DoS y DDoS, MITM, sniffing, phishing, fuerza bruta | 8, 9, 10, 11, 12, 13 | una diapositiva por vector con el mismo texto de la teoría |
| Superficie de ataque y defensa en profundidad | 14 | texto y recuadro "Recuerda" |
| Patrones de incidentes reales | 15 | tabla de cuatro patrones y MITRE ATT&CK |
| Cortafuegos y tipos | 16 | definición y la tabla de cuatro tipos en una sola diapositiva |
| Arquitecturas de despliegue | 17 | perimetral, DMZ, interno, de host |
| Reglas de filtrado | 18 | tabla de cuatro reglas con first match |
| Topología con DMZ | 19 | tabla de tres interfaces |
| Limitaciones de los firewalls | 20 | tres viñetas |
| VPN y tipos | 21 | definición y tabla de tres tipos |
| Protocolos VPN | 22 | tabla de cuatro protocolos |
| Qué garantiza una VPN | 23 | tres propiedades y límites |
| Establecimiento de un túnel VPN | 24 | cinco fases en viñetas |
| Fundamentos del cifrado, simétrico y asimétrico | 25 | en una sola diapositiva; a la viñeta del cifrado simétrico le falta el nombre del algoritmo (ver erratas) |
| Enfoque híbrido y analogía | 26 | texto de la teoría |
| Funciones hash y firma digital | 27 | texto de la teoría |
| Certificados digitales y TLS | 28 | texto y tabla de cuatro mecanismos; no trae el ejemplo paso a paso de 22.1 |
| Buenas prácticas | 29 | solo la tabla-resumen de seis ámbitos |
| Conclusiones, resumen, bibliografía | 30, 31, 32 | igual que la teoría |

## H. Proyecto final (PDF = impresa + 1)

| Tema | pág. PDF | impresa | Qué hay exactamente |
|---|---|---|---|
| Objetivos y enunciado | 2 | 1 | integra UD1 a UD6 sobre un servicio de IA sencillo (chatbot interno, clasificador de imágenes, buscador semántico u otro aprobado); dimensionado con "pocas decenas de peticiones por segundo"; cuatro elementos: 1 servicio y requisitos (UD1); 2 cómputo CPU o GPU con la fórmula peticiones necesarias / capacidad de una unidad = unidades necesarias (UD2); 3 almacenamiento y red con tiempo de carga del modelo (UD3, UD4, UD5); 4 seguridad básica (UD6) |
| Entrega | 2, 3 | 1, 2 | memoria técnica de 3 a 5 páginas en PDF, nombre `Apellidos_Nombre_ProyectoFinal.pdf`; sin código ni despliegue |
| Evaluación | 4 | 3 | rúbrica: servicio 15 %, cómputo 35 %, almacenamiento y red 25 %, seguridad 15 %, presentación 10 % (suman 100) |

## Erratas e inconsistencias (verificadas)

**UD4 teoría `red4` y diapositivas `red4diapo`** (misma tabla rota en los dos archivos; se vio en la página renderizada)
1. **Máscaras de /25 a /30 ilegibles** (Tabla 21, red4 PDF 12 impresa 10; red4diapo PDF 16): la celda muestra `2,55255E+11` (hoja de cálculo que convirtió 255.255.255.x en un número). Valores correctos, calculados con `ipaddress`: /25 = 255.255.255.128, /26 = .192, /27 = .224, /28 = .240, /29 = .248, /30 = .252. Solo /24 (255.255.255.0) está bien.
2. **Broadcast limitado roto** (Tabla 22, red4 PDF 13 impresa 11; red4diapo PDF 19): la dirección aparece como `2,55255E+11`; debe ser `255.255.255.255`.
3. **Octetos sin ceros a la izquierda** (Tabla 17, red4 PDF 11 impresa 9; red4diapo PDF 13): 192.168.1.10 se muestra como `11000000 | 10101000 | 1 | 1010`. Lo correcto: `11000000.10101000.00000001.00001010` (el octeto 3 vale 1 = `00000001` y el 4 vale 10 = `00001010`). Con lo escrito no sumarían 32 bits.
4. **Mismo problema en la Tabla 19** (172.16.5.200; red4 PDF 11, red4diapo PDF 14): 16 aparece como `10000` (debe ser `00010000`) y 5 como `101` (debe ser `00000101`). 172 = `10101100` y 200 = `11001000` están bien.
5. **Remisiones a lo que no está**: "los rangos privados ya estudiados" (red4 PDF 13 impresa 11; red4diapo PDF 19) y el objetivo "diferenciar direcciones públicas y privadas" (PDF 4 impresa 2; diapositiva 3), pero **los rangos privados (10/8, 172.16/12, 192.168/16) no se explican en ningún sitio**; solo se cita RFC 1918 en la bibliografía. Igual con el "caso práctico integrador del siguiente apartado" (red4 PDF 13 impresa 11) y la "empresa Redes Alfa S.L." (red4diapo PDF 20): no hay caso práctico, ni en teoría ni en diapositivas.
6. Tabla 20 (red4 PDF 12): A = 126 redes (se excluyen 0 y 127); el primer octeto 127 (loopback, Tabla 22) queda entre clase A y B sin mención en esa tabla. La cuenta 2^7 − 2 = 126 es correcta.
7. Diapositiva 3 de `red4diapo` lleva la cabecera "Unidad 3. CPU, memoria y organización / Modelado Conceptual" (resto de otra unidad). Las diapositivas 5 a 12 usan "Unidad 4. fundamentos de Redes" en minúscula.
8. Glosario de red4 (PDF 16): define NAT, pero NAT no se explica en UD4 ni en UD5.

**UD5 teoría `red5`, diapositivas `red5diapo` y ejercicio `red5ej`**
9. **Cabeceras de otras unidades en diapositivas**: red5diapo PDF 26 (pregunta de UDP) lleva el título "Acceso directo a memoria (DMA)"; PDF 30 (pregunta del TTL) "Buses y estándares de E/S"; PDF 39 (pregunta de ancho de banda) "RAID y almacenamiento para la IA". Sobran de UD3. Además PDF 6-10 rotulan "Ethernet y a capa de enlace" (falta la "l" de "la").
10. **Servidores: 2 o 6 hosts**: la teoría (red5 PDF 9 impresa 6, Tabla 3) y la diapositiva 18 piden "2 (crecimiento)" y asignan `/29` (6 usables); el ejercicio (red5ej PDF 2 impresa 1) dice "hasta 6 hosts" y la solución usa `/29`. Con solo 2 hosts el mínimo desperdicio sería `/30`. El resultado `192.168.10.112/29` no cambia.
11. **Tabla de rutas incompleta en la diapositiva**: red5diapo PDF 19 omite `192.168.10.112/29` (VLAN 99); la Tabla 4 de la teoría (PDF 10) y la solución 4 del ejercicio (PDF 5) sí la traen (cinco filas).
12. **Trama Ethernet incompleta en la teoría** (Tabla 1, red5 PDF 6 impresa 3): solo cuatro campos (preámbulo, MAC destino, MAC origen, EtherType); faltan los datos (46 a 1500 bytes) y el FCS de 4 bytes. La diapositiva 7 sí los trae. UD4 (Tabla 13) ya nombra el FCS. El preámbulo de 8 bytes incluye el delimitador de inicio de trama (no se dice).
13. **"Esquema de prioridades"** (rótulo de la Tabla 4, red5 PDF 10 impresa 7): la tabla no trae prioridades; el texto no explica que gana la ruta con el prefijo más largo ni que `0.0.0.0/0` es la de menor prioridad.
14. **Ejercicio**: la solución 3 dice que Marketing necesita "al menos 27 direcciones utilizables (25 hosts + margen)" (red5ej PDF 4 impresa 3). El número 27 no sale de ninguna regla; 25 hosts caben ya en un `/27` (30 usables). Se pierde el hueco .120 a .127 (8 direcciones, un `/29`) por alinear el `/27` en .128. Cuentas de `192.168.10.128/27`: .129-.158, broadcast .159, correctas.
15. **Escenario sin NAT**: el ejercicio dice que el ISP asigna "un bloque de direcciones privadas" `192.168.10.0/24` (red5ej PDF 2) y da una IP pública `203.0.113.50` al servidor web, sin mencionar NAT. Un ISP no asigna rangos privados; `203.0.113.0/24` es un rango de documentación (TEST-NET-3).
16. El three-way handshake de UD5 (Figura 1, red5 PDF 11) son tres cuadros de texto sin números de secuencia ni ACK; no muestra que el SYN-ACK confirma el número recibido más uno.
17. Mapa conceptual de red5 (PDF 17 impresa 14): el texto sale cortado como "TCP/UD P". Solo es un artefacto de la maqueta.
18. Las diapositivas de UD5 se refieren a "tres departamentos" pero el esquema de VLAN muestra cuatro (servidores incluidos); lo cuenta bien la teoría (cuatro VLAN para tres departamentos).

**UD6 teoría `red6` y diapositivas `red6diapo`**
19. **TLS simplificado de más** (apartado 22.1 paso 4, red6 PDF 15 impresa 12): dice que la clave pública del certificado se usa para acordar la clave de sesión. Eso describe el intercambio de clave con RSA de TLS 1.2. En **TLS 1.3**, la versión que la propia bibliografía cita (RFC 8446, PDF 21), la clave de sesión se acuerda con Diffie-Hellman efímero y la clave del certificado solo sirve para verificar una firma. Diffie-Hellman no se menciona en ninguna página.
20. **Firma digital**: "se cifra el hash con la clave privada" (red6 PDF 14, 15 impresa 11, 12; red6diapo PDF 27) es una simplificación didáctica: la firma real (RSA, ECDSA) no es literalmente "cifrar" el hash. Además, "lo que se cifra con una clave solo se descifra con la otra" (PDF 14) vale para RSA pero mezcla dos usos distintos (confidencialidad: se cifra con la pública; firma: con la privada).
21. **Reglas de filtrado sin DNS** (Tabla 4, red6 PDF 9-10 impresa 6-7; red6diapo PDF 18): permitir solo TCP/443 y TCP/80 desde la red interna deja sin salida las consultas DNS (UDP/53), de modo que la navegación por nombre fallaría; la regla por defecto "denegar todo" las bloquearía. Tampoco se indica el tráfico de respuesta (lo da la inspección de estado, sin decirlo en la tabla).
22. **"Tabla 8" repetida**: la tabla de mecanismos criptográficos (red6 PDF 15 impresa 12) y la de buenas prácticas (PDF 17 impresa 14) se rotulan ambas "Tabla 8". La de PDF 15 además se titula "Certificados digitales" aunque contiene AES, RSA, hash y firma.
23. **Glosario ajeno** (red6 PDF 19-20 impresa 16-17): incluye JDBC, ODBC, ORM, RAG, Repository, Rollback y SGBD, que no aparecen en la unidad (son de otra unidad de bases de datos).
24. **Numeración**: el índice de red6 (PDF 2-3) numera 29 apartados, pero en el texto el 22.1 y los 27, 28 y 29 aparecen con sangría inconsistente; los números del texto sí coinciden con el índice. En la teoría y en las diapositivas, "un estudiante de primer curso" (red6 PDF 5 impresa 2; red6diapo PDF 7) en un máster.
25. **Remisión a "Módulo 2"** (red6 PDF 12 impresa 9; red6diapo PDF 24): "se detallará en el Módulo 2"; en la teoría esa explicación está en la misma unidad (apartado 20), no hay división visible en módulos.
26. **Diapositiva 25 de `red6diapo`**: la viñeta del cifrado simétrico dice "... es el estándar actual utilizado en VPN, Wi-Fi..." sin sujeto; falta "AES (Advanced Encryption Standard), con claves de 128, 192 o 256 bits" que sí está en la teoría (PDF 13). Diapositiva 3: "Red Privada VP." (falta la "N") y los iconos "22" por "2". Diapositiva 7: falta el paréntesis de cierre en "(DoS y DDoS". Diapositiva 6 muestra "ARP no autentica" sin explicar qué es ARP.
27. Resumen de red6 (PDF 18 impresa 15): dice "dos módulos de 90 minutos"; la tabla "Mapa conceptual" no corresponde a ningún apartado numerado.

**Proyecto final**
28. La rúbrica suma 100 % (15 + 35 + 25 + 15 + 10). Imprime "Alfonso1X el Sabio" por el número de página pegado al pie de © (PDF 2 y 5); no afecta al contenido.

## Lo que el material NO trae (y uno esperaría)

- **ARP**: aparece solo como nombre (UD4 Tablas 8 y 9; UD6 Tabla 1, ARP spoofing) y nunca se explica cómo un equipo averigua la MAC de un destino con su IP. Sin ARP no se entiende bien cómo el router entrega tras mirar la tabla de rutas.
- **Cálculo de subredes resuelto en UD4**: el método de cinco pasos (red4 PDF 12-13 impresa 10-11) no trae ningún ejemplo numérico; los únicos cálculos completos están en UD5 (Tabla 3 y el ejercicio). No hay un ejemplo de "¿a qué subred pertenece esta IP?" ni del AND bit a bit entre IP y máscara.
- **Rangos privados (RFC 1918), NAT y DHCP**: nombrados pero no explicados.
- **Prefijo más largo en routing**, TTL de los paquetes IP, ICMP y `ping`/`traceroute`.
- **Cabecera IP y cabecera TCP**: no hay diagrama de campos (solo "20 bytes mínimos" de TCP y "8 bytes" de UDP).
- **Números de secuencia concretos, ventana, retransmisión y cierre de conexión con valores**, control de congestión sin detalle.
- **Cifras de latencia y de ancho de banda para IA**: ninguna fórmula como tiempo = tamaño / ancho de banda + latencia; ni ejemplos de all-reduce ni de cuántos GB de gradientes se sincronizan.
- **Criptografía con números**: ningún ejemplo de cifrado clásico, ni RSA con números pequeños, ni Diffie-Hellman, ni un hash real (solo se nombra SHA-256), ni la longitud de la salida (256 bits), ni el coste de la fuerza bruta (2^n claves), ni salado de contraseñas.
- **HTTP**: no hay una petición y respuesta completas con cabeceras escritas, ni cookies, ni el handshake TLS dentro de la conexión TCP en el tiempo.
- **DNS**: no distingue consulta recursiva e iterativa con nombre, no hay ejemplo de TTL con número, ni de la salida de `dig` o `nslookup`.
- **IPv6**: solo se menciona; no hay estructura de dirección.
- **Códigos o scripts**: el material de las tres unidades no trae ni una línea de código.

## Búsqueda rápida por concepto

Páginas PDF (entre paréntesis la impresa cuando difiere de la del PDF; "d" = diapositivas).

| Concepto | Mejores páginas |
|---|---|
| Capas OSI (las siete) | red4 5-6 (3-4); red4diapo 5-6; red4 8 Tabla 12 (6) |
| TCP/IP de cuatro capas y correspondencia con OSI | red4 7-8 (5-6); red4diapo 7-8 |
| PDU: bit, trama, paquete, segmento | red4 5-6 y 8 (3, 4, 6); red4 15-17 glosario (13-15) |
| Encapsulación y desencapsulación | red4 8-9 Tabla 13 (6-7); red4diapo 9 |
| Dispositivos por capa (hub, switch, router, firewall) | red4 10 Tabla 16 (8); red4diapo 12; red5 7 (4) |
| Topologías y medios | red4 9-10 (7-8); red4diapo 10-11 |
| Dirección IPv4, octetos y binario | red4 10-11 (8-9) Tablas 17 a 19; red4diapo 13-14 |
| Clases de direcciones y direcciones especiales | red4 11-12 y 13 (9-11) Tablas 20 y 22; red4diapo 15 y 19 |
| Máscara de subred y CIDR | red4 12 (10) Tabla 21; red4diapo 16; red5 9 (6) |
| Cálculo de subredes, salto y hosts útiles | red4 12-13 (10-11); red5diapo 21; red5 9 (6) Tabla 3 |
| VLSM y reparto de un /24 (TechNova) | red5 9 (6) Tabla 3; red5ej 4 (3) soluciones 2 y 3; red5diapo 18 |
| Dirección MAC y trama Ethernet | red5 6 (3) Tabla 1; red5diapo 7; red4 8 (6) |
| CSMA/CD, dominios de colisión y de difusión | red5 6-7 (3-4); red5diapo 8-9 |
| Switch, tabla MAC, inundar, reenviar, filtrar | red5 7-8 (4-5) Tabla 2; red5diapo 12-13 |
| VLAN y 802.1Q | red5 8-9 (5-6); red5diapo 14-15; red5ej 4-5 (3-4) |
| Router, tabla de encaminamiento y ruta por defecto | red5 9-10 (6-7) Tabla 4; red5diapo 17 y 19; red5ej 5 (4) |
| Encaminamiento estático y dinámico (OSPF, BGP) | red5 10 (7); red5diapo 20 |
| Puertos y sockets | red5 10-11 (7-8); red5diapo 23 |
| TCP: fiabilidad, secuencia, ACK, flujo y congestión | red5 11 (8); red5diapo 24 |
| Three-way handshake y cierre | red5 11 (8) Figura 1; red5diapo 24; red6 6 (3) SYN flood |
| UDP y TCP frente a UDP | red5 11-12 (8-9) Tabla 5; red5diapo 25-26; red5ej 5 (4) |
| DNS: jerarquía, resolución, caché y TTL | red5 12-13 (9-10) Figura 2; red5diapo 28 y 30; red5ej 5-6 (4-5) |
| Registros DNS (A, CNAME, MX, NS, TXT) | red5 13 (10) Tabla 6; red5diapo 29; red5ej 5-6 (4-5) |
| HTTP: métodos, códigos de estado, cabeceras | red5 13-14 (10-11) Tabla 7; red5diapo 32 |
| HTTP/1.1, HTTP/2 y HTTPS | red5 14 (11); red5diapo 33 |
| API REST y JSON | red5 14 (11); red5diapo 34; red5ej 6 (5) solución 8 |
| Ancho de banda y latencia en entrenamiento distribuido | red5 15 (12); red5diapo 37 y 39; red5ej 6 (5) solución 9 |
| Latencia de inferencia (DNS, TCP, TLS, ida y vuelta) | red5 15 (12) apartado 7.3; red5diapo 38 |
| Vulnerabilidad, amenaza y ataque; tipos de vulnerabilidad | red6 5 (2) Tabla 1; red6diapo 5-6 |
| Malware, DoS y SYN flood, MITM (ARP spoofing, DNS spoofing), sniffing | red6 5-6 (2-3); red6diapo 8-11 |
| Fuerza bruta y diccionario | red6 7 (4); red6diapo 13 |
| Defensa en profundidad y cadenas de ataque | red6 7-8 (4-5) Tabla 2; red6diapo 14-15 |
| Firewall: tipos, reglas con first match, DMZ | red6 8-10 (5-7) Tablas 3 a 5; red6diapo 16-19 |
| Limitaciones de los firewalls | red6 10-11 (7-8); red6diapo 20 |
| VPN: tipos, protocolos, fases del túnel | red6 11-13 (8-10) Tablas 6 y 7; red6diapo 21-24 |
| Cifrado simétrico (AES) | red6 13 (10); red6diapo 25 |
| Cifrado asimétrico (RSA, ECC) y analogía del buzón | red6 13-14 (10-11); red6diapo 25-26 |
| Cifrado híbrido y clave de sesión | red6 14 (11); red6diapo 26; red6 12 (9) fase 3 de la VPN |
| Hash (SHA-256), integridad y firma digital | red6 14-15 (11-12); red6diapo 27-28 |
| Certificados, CA y handshake TLS simplificado | red6 15-16 (12-13) apartado 22.1; red6diapo 28 |
| Contraseñas, 2FA, parches, copias, registros (buenas prácticas) | red6 16-17 (13-14); red6diapo 29 |
| Proyecto final: red y seguridad de un servicio de IA | proyecto 2-3 (1-2); rúbrica proyecto 4 (3) |

## Conceptos candidatos

Orden de estudio, de lo más plano a lo más complejo. Catorce candidatos. Los temas que son solo vocabulario (topologías, medios de transmisión, tabla de dispositivos, glosarios, buenas prácticas, catálogo de malware y vectores sin mecanismo) no tienen página propia: se funden en el candidato indicado como "incluye".
Recomendación general: los datos de ejemplo salen del caso TechNova (`192.168.10.0/24`, VLAN 10, 20, 30, 99, ISP `203.0.113.1`) para que Francisco reconozca lo mismo que vio en clase. Las "trampas reales" de cada página salen de las erratas de este mapa (por ejemplo la máscara rota, el DNS que falta en el firewall, TLS 1.3).

**1. Capas y encapsulación**
- Qué se ve: por qué la comunicación se divide en capas y cómo cada capa envuelve lo que recibe con su cabecera (OSI de siete, TCP/IP de cuatro).
- Imagen central: un mensaje HTTP que baja por la pila del emisor. Cada capa lo mete en una caja con su cabecera (puertos, IP, MAC, FCS) hasta convertirse en bits; Francisco arrastra el paquete de un equipo a otro pasando por un switch (se abre hasta la capa 2) y un router (hasta la 3), y sube por la pila del receptor quitando cabeceras. Un interruptor enciende OSI o TCP/IP. Incluye topologías, medios y la tabla de dispositivos por capa como "dónde actúa cada aparato".
- Unidad: UD4.
- Prerrequisitos: ninguno.
- Python y R: construir cabeceras como cadenas de bytes con `struct` (Python) y `packBits`/`raw` o `rawToChar` (R) para ver cómo crece el tamaño del paquete al encapsular y cómo se retira capa por capa; contar cuántos bytes añade cada capa.

**2. La dirección IPv4 en 32 bits**
- Qué se ve: una IP es un número de 32 bits escrito en cuatro octetos; conversión decimal-binario con valores posicionales.
- Imagen central: 32 interruptores agrupados en cuatro octetos con pesos 128, 64, 32, 16, 8, 4, 2, 1; Francisco enciende bits y ve el decimal de cada octeto y la dirección completa (192.168.1.10, 172.16.5.200), o escribe un decimal y ve qué bits se encienden. Incluye clases A, B, C y direcciones especiales (loopback, APIPA, 0.0.0.0, broadcast limitado) como regiones coloreadas del espacio de 32 bits.
- Unidad: UD4.
- Prerrequisitos: "Binario y otras bases" (biblioteca).
- Python y R: convertir con bucle explícito (restas de 128, 64, ...) y comparar con `format(n, "08b")`, `ipaddress.IPv4Address` y `int(ip)`; en R con `bitwAnd` y `strtoi`. Trampa real del material: los ceros a la izquierda que la Tabla 17 pierde.

**3. Máscara de subred y CIDR**
- Qué se ve: la máscara marca dónde termina la red y empieza el host; /n = n unos.
- Imagen central: una máscara que se desliza sobre los 32 bits. Al arrastrar el borde, la parte de red se pinta de un color y la de host de otro; abajo se actualizan en vivo la dirección de red (AND bit a bit con la IP), el broadcast, el primer y último host y los hosts útiles 2^k − 2 (tabla /24 a /30 con las máscaras correctas).
- Unidad: UD4 (con el repaso de red5 9).
- Prerrequisitos: La dirección IPv4 en 32 bits (de esta lista); "Binario y otras bases".
- Python y R: calcular red, broadcast y hosts con operaciones de bits en un bucle y cerrar comparando con `ipaddress.ip_network(strict=False)`; en R con `bitwAnd`/`bitwNot`. Trampas: `/31` y `/32`, y el valor `/25 = 255.255.255.128` que el PDF muestra roto.

**4. Subredes y VLSM**
- Qué se ve: dividir un bloque en subredes del tamaño justo y por qué se asignan primero los bloques grandes.
- Imagen central: la barra de 256 direcciones de `192.168.10.0/24`; Francisco arrastra bloques de tamaño potencia de dos (64, 32, 16, 8) para cada departamento (50, 20, 10, 6 hosts) y la barra rechaza solapamientos o desalineaciones; cuenta el desperdicio y el espacio libre (.120 a .255). Variante: probar el orden equivocado (pequeños primero) y ver que ya no cabe Marketing.
- Unidad: UD4 (metodología) y UD5 (Tabla 3 y ejercicio).
- Prerrequisitos: Máscara de subred y CIDR.
- Python y R: algoritmo VLSM con bucle (ordenar demandas de mayor a menor, bits de host = ceil(log2(hosts + 2)), alinear al siguiente múltiplo); comparar con `ipaddress.subnet_of`, `subnets(new_prefix=...)` y `address_exclude`; en R con aritmética entera. Comprueba la solución del ejercicio, incluido Marketing en `192.168.10.128/27`.

**5. El switch aprende: tabla MAC y VLAN**
- Qué se ve: cómo un switch construye solo su tabla y decide inundar, reenviar o filtrar; qué hace una VLAN con los dominios de difusión.
- Imagen central: un switch de 6 puertos con equipos; Francisco envía tramas de un equipo a otro y ve cómo se llena la tabla MAC fila a fila; las flechas se encienden por todos los puertos (inundar), por uno (reenviar) o se apagan (filtrar). Un selector pinta puertos en VLAN 10, 20, 30, 99 y el broadcast se corta en la frontera de la VLAN; un botón "caducar" borra entradas con el tiempo.
- Unidad: UD5.
- Prerrequisitos: Capas y encapsulación.
- Python y R: simular el switch con un diccionario (lista nombrada en R) y un bucle sobre una lista de tramas, registrando acción (inundar, reenviar, filtrar) y estado de la tabla en cada paso; contar dominios de difusión según las VLAN. Incluye dominios de colisión, hub frente a switch y la trampa de la MAC de origen que cambia de puerto.

**6. Routing: tabla de rutas y ruta por defecto**
- Qué se ve: cómo un router elige por dónde sale un paquete.
- Imagen central: un router con cuatro interfaces (VLAN 10, 20, 30, 99) y WAN; Francisco arrastra una IP de destino y se enciende la fila de la tabla que coincide; si coinciden varias, gana la de prefijo más largo; si ninguna, la ruta por defecto `0.0.0.0/0` hacia el ISP. Un paso adicional muestra que el siguiente salto cambia la MAC pero no la IP (dos ventanas lado a lado).
- Unidad: UD5 (Tablas 3 y 4, ejercicio) con apoyo de UD4.
- Prerrequisitos: Máscara de subred y CIDR; Subredes y VLSM; El switch aprende.
- Python y R: búsqueda de la ruta con bucle sobre las filas (¿IP & máscara == red?) y elección del prefijo más largo; comparar con `ipaddress` (`ip in network`). Trampa real: el "esquema de prioridades" que el material nunca explica. Incluye estático frente a dinámico (OSPF, BGP) como nota.

**7. TCP y UDP: puertos y el apretón de manos**
- Qué se ve: puertos y sockets, la conexión TCP en tres pasos, qué ocurre cuando se pierde un segmento y por qué UDP no lo espera.
- Imagen central: diagrama de secuencia cliente-servidor con SYN, SYN-ACK, ACK y números de secuencia reales; Francisco envía segmentos, pierde uno con un botón y ve la retransmisión; a la derecha el mismo flujo en UDP sin conexión. Un control cambia la pérdida para ver el coste en latencia, y un video simulado "se corta" o "se atrasa" según el protocolo.
- Unidad: UD5 (apartado 4), con SYN flood de UD6 (apartado 3.2).
- Prerrequisitos: Capas y encapsulación.
- Python y R: máquina de estados del handshake con números de secuencia (ISN, ACK = seq + 1) escrita con bucles, y un `socket` de bucle local (`127.0.0.1`) para ver un SYN real en Python; en R `socketConnection`. SYN flood como tabla de conexiones que se llena con medias conexiones.

**8. DNS: resolución en cadena y caché**
- Qué se ve: cómo un nombre se convierte en IP recorriendo raíz, TLD y autoritativo, y cómo el TTL evita repetir el viaje.
- Imagen central: el árbol invertido de dominios; Francisco pregunta por `www.technova.com` y una flecha recorre Cliente, Resolutor, Raíz, TLD (.com), Autoritativo y vuelve; la segunda consulta aparece más corta por el caché hasta que caduca el TTL (reloj arrastrable). Un selector cambia el tipo de registro (A, AAAA, CNAME, MX, NS, TXT) y el CNAME añade un salto: `lab.technova.com` apunta a `www.technova.com`.
- Unidad: UD5 (apartado 5, solución 7 del ejercicio).
- Prerrequisitos: Capas y encapsulación; TCP y UDP: puertos y el apretón de manos (DNS usa UDP/53).
- Python y R: resolutor simulado con diccionarios anidados (zonas), caché con TTL y bucle por niveles; comparar con `socket.gethostbyname` en Python y `nsl`/`system("nslookup")` en R. Trampa real: un CNAME no apunta a una IP, apunta a otro nombre.

**9. HTTP y APIs REST**
- Qué se ve: una petición HTTP y su respuesta, qué dicen los métodos y los códigos de estado, y cómo se parece una API de IA a una página web.
- Imagen central: un constructor de peticiones: Francisco elige método (GET, POST, PUT, PATCH, DELETE), ruta (`/inferencias`, `/inferencias/a1b2c3`) y cuerpo JSON; un servidor de juguete responde con código (200, 201, 202, 404, 500) y el cuerpo, y una línea de tiempo muestra DNS, TCP, TLS y la petición. Incluye HTTP/1.1 frente a HTTP/2 (peticiones secuenciales frente a entreveradas) y HTTPS como la misma petición dentro de una caja cifrada.
- Unidad: UD5 (apartado 6, solución 8 del ejercicio).
- Prerrequisitos: DNS: resolución en cadena; TCP y UDP.
- Python y R: servidor mínimo con `http.server` y cliente con `urllib`/`requests` en Python; `httr`/`jsonlite` en R; implementar el patrón asíncrono `POST` con `202 Accepted` y `GET` del estado como el ejercicio.

**10. La red como cuello de botella en IA**
- Qué se ve: tiempo = latencia + tamaño / ancho de banda; por qué más GPU no acelera si la red no da abasto, y de qué se compone la latencia de una inferencia.
- Imagen central: una gráfica de un paso de entrenamiento con barras de cómputo y de comunicación para 1, 2, 4 y 8 servidores; Francisco arrastra el ancho de banda (10 Gbps, 100 Gbps, InfiniBand) y ve cómo las barras de comunicación dejan los nodos ociosos y el tiempo total no baja. Segunda escena: la línea de tiempo de una inferencia (DNS, TCP, TLS, ida y vuelta, cómputo) con la distancia al servidor y la reutilización de conexiones como controles.
- Unidad: UD5 (apartado 7, solución 9) y proyecto final (tiempo de carga del modelo).
- Prerrequisitos: TCP y UDP; HTTP y APIs REST; la biblioteca existente sobre promedio de gradientes si la hay.
- Python y R: modelo de tiempo de paso con bucle sobre número de nodos (tamaño de gradientes = parámetros x bytes, tiempo de sincronización = tamaño / ancho de banda), con cálculos del estilo del proyecto final. Los números salen del propio concepto (el material no trae cifras) y la página debe decirlo.

**11. Firewall: reglas, estado y DMZ**
- Qué se ve: cómo se evalúan las reglas de arriba abajo con primera coincidencia, qué cambia con inspección de estado y por qué se usa una DMZ.
- Imagen central: un firewall con tres interfaces (Internet, DMZ, red interna) y una lista ordenable de reglas (la Tabla 4); Francisco arrastra paquetes (origen, destino, protocolo, puerto) y se enciende la primera regla que coincide; reordenar las reglas cambia el resultado; un interruptor activa la tabla de estados y el tráfico de respuesta pasa solo si lo inició alguien de dentro. Escenarios: SYN flood, escaneo de puertos y la salida DNS que la tabla del material olvida.
- Unidad: UD6 (apartados 6 a 11).
- Prerrequisitos: Máscara de subred y CIDR; TCP y UDP: puertos y el apretón de manos; Routing.
- Python y R: motor de reglas con bucle y primera coincidencia (con `ipaddress` para el origen en `192.168.1.0/24`); versión con tabla de estados como un conjunto de conexiones activas. Trampa real: la regla "denegar todo" bloquea UDP/53.

**12. Hash e integridad**
- Qué se ve: una función hash comprime cualquier entrada en un resumen de longitud fija, un cambio mínimo cambia todo, y encontrar una colisión es inviable.
- Imagen central: un cuadro de texto con el mensaje y debajo los 256 bits del hash como una cuadrícula que se enciende y apaga; Francisco cambia una letra y ve voltearse en promedio la mitad de los bits (avalancha). Un contador compara con un hash de 8 bits donde sí se halla una colisión a fuerza bruta en pocos intentos, y muestra por qué en 256 bits no (2^128 intentos por la paradoja del cumpleaños). Incluye verificar una descarga comparando hashes.
- Unidad: UD6 (apartado 21 y la Tabla 8).
- Prerrequisitos: "Binario y otras bases" (biblioteca).
- Python y R: `hashlib.sha256` y, para ver el algoritmo, un hash de juguete de 8 bits con bucles explícitos; cuenta de bits distintos entre dos hashes (distancia de Hamming) y búsqueda de colisión por fuerza bruta; en R con `digest::digest` y un hash de juguete equivalente. El material nombra SHA-256 pero no da ejemplo, así que la cuenta de la avalancha se verifica en la página.

**13. Cifrado simétrico y fuerza bruta**
- Qué se ve: una clave compartida cifra y descifra; con claves cortas se rompe probando todas; con 128 bits no.
- Imagen central: una rueda tipo César (o XOR con una clave corta) que Francisco gira para cifrar y descifrar; un botón "fuerza bruta" prueba las 25 claves y reconoce el texto; luego un deslizador de bits de clave muestra 2^n claves y el tiempo que tardaría un ordenador (sin "reconocer" nada con 128 bits). Aparece el problema real: ¿cómo se pasan la clave dos personas que nunca se han visto? Incluye fuerza bruta y diccionario contra contraseñas.
- Unidad: UD6 (apartados 17, 18, 3.6).
- Prerrequisitos: Hash e integridad (opcional); "Binario y otras bases".
- Python y R: cifrado César con bucles y operador módulo (`chr`, `ord` / `utf8ToInt`), ataque de fuerza bruta con frecuencia de letras, y XOR con clave repetida; cierre con AES real de `cryptography` en Python y `openssl` o `digest::AES` en R (la versión de juguete es la que se anima). El material solo cita AES; la página debe aclarar que César y XOR son solo didácticos.

**14. Clave pública, firma y TLS**
- Qué se ve: dos claves matemáticamente ligadas resuelven el reparto de claves; la firma prueba quién envió; el certificado enlaza una clave con una identidad; y TLS combina todo con una clave de sesión simétrica.
- Imagen central: RSA con números pequeños (p = 61, q = 53, n = 3233, e = 17, d = 2753): Francisco elige un mensaje, lo cifra con la clave pública, y solo la privada lo revierte; un segundo modo firma el hash con la privada y verifica con la pública. A la derecha el apretón de manos TLS simplificado, paso a paso (versiones y algoritmos, certificado, verificación de la CA, clave de sesión, AES). Se enciende un intermedio que altera un byte y la verificación falla, y se muestra la corrección sobre TLS 1.3 (Diffie-Hellman efímero), que el material no trae.
- Unidad: UD6 (apartados 19 a 22, 12 a 16 para el túnel VPN).
- Prerrequisitos: Cifrado simétrico y fuerza bruta; Hash e integridad; TCP y UDP; HTTP y APIs REST.
- Python y R: RSA de juguete con `pow(m, e, n)` y `pow(c, d, n)` y el inverso modular calculado con el algoritmo de Euclides extendido en bucle, y una firma con el hash reducido módulo n; Diffie-Hellman con números pequeños como extensión; comparar con `cryptography` y con `openssl` en R. Trampas: mensaje mayor que n, y por qué la "firma = cifrar el hash" del material es una simplificación.
