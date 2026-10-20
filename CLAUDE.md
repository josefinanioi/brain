# brain — instrucciones para Claude

PWA de estudio personal: **Mini MBA para Fractional CMO** con formato gamificado (estilo Duolingo). La usa una sola persona, Josefina, desde el celular. Está escrita en español rioplatense.

## Cómo hablar y escribir
- Español rioplatense con voseo ("vos sabés", "hacé la cuenta"), en todo: respuestas, contenido de la app, commits.
- Tono cercano y claro. Explicá los términos de negocio la primera vez que aparecen.

## Estructura
- `index.html`: shell de la app. Los scripts se cargan con `defer` y `?v=<versión>`.
- `js/data.js`: fases (colores), niveles, metas diarias y logros. Define `UNITS = []`.
- `js/content/u01-03.js` … `u10-12.js`: contenido. Cada archivo hace `UNITS.push({...})` por unidad.
- `js/tools.js`: calculadoras (`TOOLS`) y el Tablero de Dirección (`DASH_FIELDS`, `computeDashboard`).
- `js/app.js`: toda la app (router por hash, reproductor de lecciones, XP/racha/logros, práctica, herramientas, notas). Vanilla JS, sin dependencias ni build.
- `css/styles.css`: estilos. Colores como variables en `:root`, con modo oscuro.
- `sw.js`: service worker (archivos versionados primero desde la caché; HTML desde la red con tiempo límite).
- `fonts/`: Nunito y Fredoka (OFL), servidas localmente. No agregar fuentes ni scripts externos.
- `scripts/`: `validate.mjs` (contenido), `deploy.mjs` (versionado y publicación), `audit.js` (auditoría visual en el navegador). No se publican.

## Formato del contenido
Cada unidad: `n`, `phase` (`f1`–`f4`), `title`, `goal`, `summary` (exactamente 3 ideas), `lessons`, `lab`, `challenge`, `cards`.
Cada lección: `id` (`u<unidad>l<n>`, único), `title`, `icon` (emoji), `read` (2–3 pantallas `{h, body}` con HTML) y `ex` (3–5 ejercicios).
Tipos de ejercicio:
- `choice`: `{ t, q, o: [...], a: índice, why }`
- `tf`: `{ t, q, a: true|false, why }`
- `number`: `{ t, q, a: número, unit, tol?, why }`. La tolerancia por defecto es 0,5%.
- `match`: `{ t, q, pairs: [[término, definición], ...] }`
- `order`: `{ t, q, items: [en el orden correcto], why }`

Clases útiles en el HTML de lectura: `.formula`, `.chain` / `.chain.strong`, `.callout` / `.callout.warn` / `.callout.strong`, tablas y `blockquote`.
Reglas de contenido:
- Pedagógico antes que numérico: primero una situación cotidiana o una metáfora, después la idea, después (si hace falta) la fórmula. Pocas cuentas, con números chicos y redondos ($100, 10 ventas) que se resuelvan de cabeza. Preferí ejercicios `choice`, `tf`, `match` y `order` a `number`.
- Ejemplos con empresas ficticias que se repiten: **Roble** (taller de muebles a medida, vende por WhatsApp), **Lumen** (tienda online de lámparas), **Flow** (estudio de pilates con cuota mensual) y **Brote** (cafetería de barrio). No uses empresas reales.
- El laboratorio de cada unidad se aplica a "la empresa que elegiste" (un cliente o negocio real de la usuaria).
- Cada métrica de marketing traducida a negocio ("¿y esto qué significa para el negocio?"). Explicá las siglas (CAC, ROAS, LTV) con palabras simples.

**Después de tocar contenido, corré siempre `node scripts/validate.mjs`.** Los ids de lección son la clave del progreso guardado: no los renombres.

## Diseño
- Color predominante **violeta** (`--primary #7c4ddb`; fases en tonos de violeta). Verde y rojo solo para correcto/incorrecto; dorado para completado, XP y logros; naranja para la racha.
- Marca: "brain" en minúscula, tipografía Fredoka. Texto general en Nunito.
- Botones con volumen (borde inferior más grueso). Áreas táctiles de 44 px como mínimo.
- Comportamiento de app: sin zoom por pellizco ni doble toque, sin rebote, sin scroll horizontal. No uses `overflow-x: hidden` en `body` (rompe los encabezados fijos): usá `overflow-x: clip`.
- Mobile first. Revisá siempre en 320, 375, 768 y 1280 px de ancho.

## Probar
- Servidor local: `python -m http.server 8765` (o la configuración `brain` de `.claude/launch.json`).
- Auditoría de desbordes y superposiciones, desde la consola del navegador en la app local:
  `await eval(await (await fetch('/scripts/audit.js')).text()); window.__auditResult`
- El service worker cachea por versión: al probar cambios locales, corré `node scripts/deploy.mjs --no-deploy` para cambiar la versión, o desregistrá el service worker.

## Publicar
- Producción: https://brain.nioijosefina.workers.dev (Cloudflare Workers con archivos estáticos).
- **Cada push a `main` se publica solo** (Cloudflare Workers Builds conectado a este repo): comando de build `node scripts/deploy.mjs --no-deploy`, comando de deploy `npx wrangler deploy`.
- Trabajá en una rama y abrí un PR. Al hacer merge a `main` se publica.
- Desde una computadora con sesión de Cloudflare, también se puede publicar con `node scripts/deploy.mjs`.

## Datos
Todo el progreso, las notas y los tableros viven en `localStorage` del dispositivo (clave `brain.v1`). Nunca subas datos personales al repo: es público.
