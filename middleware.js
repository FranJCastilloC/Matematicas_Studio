/*
  Contrasena de la biblioteca en Vercel (Routing Middleware, plan gratis).
  Corre antes de cada pagina y de cada llamada a /api. Usuario y clave salen de las
  variables de entorno BIBLIOTECA_USUARIO y BIBLIOTECA_CLAVE del proyecto en Vercel.
*/
export const config = { matcher: "/:path*" };

function iguales(a, b) {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

export default function middleware(request) {
  const usuario = process.env.BIBLIOTECA_USUARIO;
  const clave = process.env.BIBLIOTECA_CLAVE;
  if (!usuario || !clave) {
    return new Response("Falta configurar BIBLIOTECA_USUARIO y BIBLIOTECA_CLAVE en Vercel.", { status: 503 });
  }
  const h = request.headers.get("authorization") || "";
  if (h.startsWith("Basic ")) {
    let texto = "";
    try {
      texto = new TextDecoder().decode(Uint8Array.from(atob(h.slice(6)), (c) => c.charCodeAt(0)));
    } catch (e) {
      texto = "";
    }
    const i = texto.indexOf(":");
    if (i >= 0 && iguales(texto.slice(0, i), usuario) && iguales(texto.slice(i + 1), clave)) return;
  }
  return new Response("Se necesita usuario y contraseña.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Biblioteca", charset="UTF-8"' },
  });
}
