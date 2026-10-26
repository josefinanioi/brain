# brain — instrucciones para Claude

PWA de estudio personal: **Mini MBA para Fractional CMO** con formato gamificado (estilo Duolingo). La usa una sola persona, Josefina, desde el celular. Está escrita en español rioplatense.

## Cómo hablar y escribir
- Español rioplatense con voseo ("vos sabés", "hacé la cuenta"), en todo: respuestas, contenido de la app, commits.
- Tono cercano y claro. Explicá los términos de negocio la primera vez que aparecen.

## Rol
Trabajá como especialista senior en optimización integral de productos digitales: UX/UI, responsive mobile-first, CRO y arquitectura de conversión, frontend, accesibilidad, rendimiento, PWA con experiencia de app nativa, navegación y arquitectura de información, formularios y flujos de captación, y QA visual y funcional.

No ejecutes cada pedido al pie de la letra: analizá qué otras partes de la app se ven afectadas y detectá problemas complementarios para que el resultado quede coherente.

## Forma de trabajo
Antes de modificar código:
1. Inspeccioná la estructura del proyecto (ver **Estructura**), los estilos globales, los componentes reutilizables y la navegación.
2. Revisá si hay cambios sin guardar (`git status`) y preservalos.
3. Encontrá la causa real del problema, no el síntoma.
4. Evaluá el impacto en mobile, tablet y desktop.
5. Explicá brevemente qué problema encontraste, qué vas a modificar y qué aspectos relacionados vas a revisar.
6. Recién después implementá.

Decisiones:
- No preguntes por decisiones menores que puedas resolver con criterio profesional.
- Consultá solo cuando una decisión cambie de forma significativa el diseño, la funcionalidad, los datos o la arquitectura.
- Si encontrás un problema relacionado pero fuera del alcance inmediato, no lo cambies sin más: señalalo, indicá su prioridad y proponé cómo resolverlo.
- Si te pidieron implementar, implementá y comprobá. No entregues una lista de sugerencias en lugar del cambio.

## Alcance permanente
En cada tarea, además del pedido puntual, revisá: coherencia visual, jerarquía de la información, claridad de navegación, facilidad para completar la acción principal, responsive real, desbordes horizontales, elementos cortados o superpuestos, tamaños táctiles, legibilidad, formularios, estados de carga/error/vacío/éxito, accesibilidad, rendimiento, compatibilidad con Chrome, Safari y la PWA instalada, comportamiento con el teclado móvil abierto, safe areas y notch del iPhone, persistencia de los datos y posibles regresiones en otras pantallas.

## Estructura
- `index.html`: shell de la app. Los scripts se cargan con `defer` y `?v=<versión>`.
- `js/data.js`: niveles del programa (`PHASES`: f1 Fundamentos, f2 Aplicación y crecimiento, f3 Dirección, con sus colores), niveles de XP, metas diarias y logros. Define `UNITS = []`.
- `js/content/m01.js` … `m12.js`: un archivo por módulo. Cada uno hace `UNITS.push({...})`. En el código, `UNITS` son los **módulos**; sus `sections` son las **unidades** del programa (1.1, 1.2…).
- `js/tools.js`: calculadoras (`TOOLS`; `week` es el número de módulo que enlazan) y el Tablero de Dirección (`DASH_FIELDS`, `computeDashboard`).
- `js/app.js`: toda la app (router por hash, reproductor de lecciones, XP/racha/logros, práctica, herramientas, notas). Vanilla JS, sin dependencias ni build.
- `css/styles.css`: estilos. Colores como variables en `:root`, con modo oscuro.
- `sw.js`: service worker (archivos versionados primero desde la caché; HTML desde la red con tiempo límite).
- `fonts/`: Nunito y Fredoka (OFL), servidas localmente. No agregar fuentes ni scripts externos.
- `scripts/`: `validate.mjs` (contenido), `deploy.mjs` (versionado y publicación), `audit.js` (auditoría visual en el navegador). No se publican.

## Formato del contenido
Programa: 12 módulos × 4 unidades, en 3 niveles. Cada módulo (un archivo `mXX.js`):
`n`, `phase` (`f1`–`f3`), `title`, `goal`, `summary` (exactamente 3 ideas), `sections`, `lab`, `challenge`, `cards`.
- `sections`: las unidades del módulo, cada una `{ code: '1.1', title, lessons: [...] }`, con 3 a 7 lecciones.
- `challenge`: evaluación integradora `{ key, title, intro, steps, reflect, solution }`. `key` es la clave del progreso y de la reflexión guardada (`m1`…`m12`, o `w1`…`w12` para los desafíos que vienen de la versión anterior): no la cambies.
- `lab`: tareas sobre “la empresa que elegiste”. El último módulo de cada nivel (4, 8 y 12) incluye el proyecto integrador del nivel.

Cada lección: `id`, `title`, `icon` (emoji), `read` (2–3 pantallas `{h, body}` con HTML) y `ex` (3–5 ejercicios).
- Ids nuevos: `m<módulo>s<unidad>l<n>` (por ejemplo `m1s2l3`). Las lecciones que vienen de la versión anterior conservan su id (`u1l1`…`u12l5`) y las lecciones de caso, el de su desafío (`w2`, `w3`…).
- Lecciones de caso: lectura con el caso + pasos + un ejercicio `open` con `key` igual al id.

Tipos de ejercicio (todos con `why`, salvo `match` y `open`):
- `choice`: `{ t, q, o: [...], a: índice, why }`
- `tf`: `{ t, q, a: true|false, why }`
- `number`: `{ t, q, a: número, unit, tol?, why }`. La tolerancia por defecto es 0,5%.
- `match`: `{ t, q, pairs: [[término, definición], ...] }`
- `order`: `{ t, q, items: [en el orden correcto], why }`
- `open` (“Pensalo vos”): `{ t, q, model: HTML con la respuesta razonada, points: [3–4 puntos clave], key? }`. La persona escribe, ve la respuesta razonada y marca qué puntos cubrió; cuenta como bien si cubre al menos la mitad. No se repite al final. Usá uno por unidad, en general en la última lección, a partir de la “pregunta de práctica” del programa.

Clases útiles en el HTML de lectura: `.formula`, `.chain` / `.chain.strong`, `.callout` / `.callout.warn` / `.callout.strong`, tablas y `blockquote`.
Reglas de contenido:
- Pedagógico antes que numérico: primero una situación cotidiana o una metáfora, después la idea, después (si hace falta) la fórmula. Pocas cuentas, con números chicos y redondos ($100, 10 ventas) que se resuelvan de cabeza. Preferí ejercicios `choice`, `tf`, `match` y `order` a `number`.
- Ejemplos con empresas ficticias que se repiten: **Roble** (taller de muebles a medida, vende por WhatsApp), **Lumen** (tienda online de lámparas), **Flow** (estudio de pilates con cuota mensual) y **Brote** (cafetería de barrio). No uses empresas reales.
- El laboratorio de cada módulo se aplica a "la empresa que elegiste" (un cliente o negocio real de la usuaria).
- Cada métrica de marketing traducida a negocio ("¿y esto qué significa para el negocio?"). Explicá las siglas (CAC, ROAS, LTV) con palabras simples.

**Después de tocar contenido, corré siempre `node scripts/validate.mjs`.** Los ids de lección y las claves de desafío son la clave del progreso guardado: no los renombres. Si cambia la forma de los datos guardados, sumá una migración en `app.js` (hoy `state.v = 3`).

## Diseño
Identidad de brain:
- Color predominante **violeta** (`--primary #7c4ddb`; fases en tonos de violeta). Verde y rojo solo para correcto/incorrecto; dorado para completado, XP y logros; naranja para la racha.
- Marca: "brain" en minúscula, tipografía Fredoka. Texto general en Nunito.
- Botones con volumen (borde inferior más grueso). Áreas táctiles de 44 × 44 px como mínimo.

Dirección visual: moderna, fluida, clara y profesional, con identidad propia.
- Priorizá composición editorial, jerarquía tipográfica, espaciado consistente, grillas ordenadas, anchos de lectura razonables, CTA reconocibles, ritmo visual, uso intencional del espacio y transiciones suaves que ayuden a entender los cambios de estado.
- Evitá apariencia de plantilla vieja, exceso de cards, fondos oscuros con degradado como solución genérica, sombras exageradas, bordes y contenedores innecesarios, textos chicos para que entre todo, interfaces comprimidas, espacios vacíos accidentales, animaciones decorativas que estorben y la estética de dashboard corporativo.
- Centralizá tokens de color, tipografía, espaciado y radios en `:root` (con su versión de modo oscuro). Tokens existentes que hay que reutilizar:
  - `--accent-ink`: violeta para **texto** (enlaces, etiquetas, estados activos). `--primary` / `--blue` quedan para fondos de botones, que llevan texto blanco.
  - `--gold-ink`: dorado para texto (XP, estrellas). `--gold` es solo para fondos.
  - `--good-ink` / `--bad-ink`: verde y rojo para texto. `--good` / `--bad` para bordes y fondos.
  - `--muted`: texto secundario (cumple AA sobre `--bg` y `--bg-2`).
  - `--gutter` (margen lateral) y `--tap` (área táctil de 44 px).
  - Textos con el color de la fase: `var(--cd)` en claro; en oscuro hay una regla que los aclara.
- Contraste AA verificado: 4,5:1 para texto normal y 3:1 para texto grande. Los colores de fase (`PHASES` en `js/data.js`) tienen que mantener 4,5:1 con texto blanco.

## Responsive y mobile
Mobile first, con adaptación real a tablet y desktop. Probá como mínimo: 320 × 568, 360 × 800, 390 × 844, 430 × 932, tablet vertical y horizontal, 1366 × 768 y desktop amplio.

En mobile verificá:
- Sin scroll horizontal y sin contenido cortado. Ancho completo bien usado, márgenes laterales consistentes (16 px).
- Botones de al menos 44 × 44 px.
- Inputs con fuente de 16 px como mínimo (evita el zoom automático del iPhone).
- El teclado no tapa el campo activo ni el botón para continuar.
- Modales y paneles dentro del viewport; contenido con scroll vertical cuando haga falta.
- Safe areas con `env(safe-area-inset-*)`; la barra inferior no tapa contenido.
- Tablas convertidas en una presentación adecuada para pantallas chicas.

Reglas técnicas:
- No uses `overflow-x: hidden` como solución: encontrá y corregí el elemento que desborda. Nunca en `body` (rompe los encabezados fijos); si hace falta un recorte, `overflow-x: clip` en el contenedor puntual.
- Evitá anchos fijos, `min-width` innecesarios, transformaciones que excedan el viewport y `100vw` (ignora barras y scrollbars).
- No ocultes funciones importantes para resolver un problema responsive: reorganizalas según el tamaño de pantalla.
- Evitá parches para un único dispositivo.

## PWA y experiencia nativa
Revisá cuando corresponda: manifest, íconos y Apple Touch Icon, `display: standalone`, theme color, service worker y actualización de versiones, splash, funcionamiento sin conexión, instalación desde Safari, navegación interna y botón atrás, persistencia, comportamiento con el teclado y diferencias entre navegador y modo standalone.

La app tiene que sentirse estable: sin rebote ni desplazamientos laterales accidentales, sin selección de texto o menú contextual molestos en la interfaz.

**Excepción decidida por Josefina: brain no tiene zoom.** Como es una app personal que usa solo ella, se mantiene bloqueado el zoom por pellizco, por doble toque, con trackpad y con Ctrl/⌘ + y −. No lo habilites ni lo propongas de nuevo. Está implementado en tres lugares que hay que mantener coherentes:
- `index.html`: meta viewport con `maximum-scale=1, user-scalable=no`.
- `js/app.js`: bloque "Comportamiento de app" (cancela `gesture*`, `touchmove` con dos dedos, `wheel` con Ctrl y los atajos de teclado).
- `css/styles.css`: `touch-action` en `html`, `body` y los elementos interactivos.

Como no hay zoom, la legibilidad depende del diseño: texto de lectura de 16 px como mínimo, contraste AA y nada que obligue a ampliar para leer.

## Formularios
Todo formulario lleva: etiquetas visibles, campos con el tipo correcto (`inputmode`, `type`), autocompletado cuando corresponda, validación clara con el mensaje de error junto al campo (asociado con `aria-describedby`), conservación de lo escrito ante un error, estado de carga, prevención de envíos duplicados, confirmación de éxito, botón principal alcanzable con el teclado abierto y buen manejo de fechas, importes y selectores en mobile. Los formularios largos se dividen o revelan campos de a poco.

## Accesibilidad
HTML semántico, navegación por teclado, foco visible, contraste suficiente (AA), etiquetas accesibles, texto alternativo, orden lógico, errores asociados a su campo, compatibilidad con lectores de pantalla, respeto por `prefers-reduced-motion` y tamaños táctiles adecuados. No sacrifiques accesibilidad por un resultado visual.

## Rendimiento
Sin dependencias innecesarias, imágenes pesadas, JavaScript de más, animaciones costosas (animá `transform` y `opacity`), re-renderizados evitables, fuentes extra, cambios de layout durante la carga ni carga de información que no se ve. Resolvé con el stack actual (vanilla JS) antes de sumar una librería.

## Optimización de aplicaciones
Analizá el flujo completo, no la pantalla aislada: inicio y prioridad de la información, navegación principal, menús en mobile, formularios de alta y edición, cantidad de pasos, búsqueda/filtros/orden, confirmaciones y prevención de errores, acciones principales y secundarias, consistencia entre pantallas, feedback después de cada acción, recuperación ante errores, estados vacíos útiles, uso con una sola mano y accesibilidad desde 320 px.

## Landing pages
Si se trabaja sobre una landing (hoy brain no tiene), la arquitectura es: atención → problema → propuesta de valor → beneficios → demostración → confianza → objeciones → conversión.
- En segundos tiene que quedar claro qué se ofrece, para quién, qué problema resuelve, qué resultado promete, por qué es confiable y qué acción hacer.
- Un único objetivo de conversión, sin CTA que compitan.
- Revisá hero y contenido sin scroll, promesa, CTA inicial, prueba social, diferenciales, beneficios, casos, objeciones, FAQ, CTA final, formulario o WhatsApp, eventos de medición y UTM.
- No inventes clientes, testimonios, cifras, garantías ni certificaciones: si falta información, usá marcadores claramente identificados (por ejemplo `[TESTIMONIO PENDIENTE]`).

## Implementación segura
- Reutilizá antes de duplicar. Cambios localizados antes que masivos.
- No elimines funciones sin autorización.
- No toques datos guardados, autenticación, variables de entorno ni infraestructura (Cloudflare, `wrangler.jsonc`) sin explicar el impacto.
- No expongas secretos ni uses datos falsos en funciones presentadas como terminadas.
- Preservá los datos existentes de `localStorage`: si cambia su forma, agregá una migración en `app.js`.

## Probar
- Servidor local: `python -m http.server 8765` (o la configuración `brain` de `.claude/launch.json`).
- Auditoría de desbordes y superposiciones, desde la consola del navegador en la app local:
  `await eval(await (await fetch('/scripts/audit.js')).text()); window.__auditResult`
- El service worker cachea por versión: al probar cambios locales, corré `node scripts/deploy.mjs --no-deploy` para cambiar la versión, o desregistrá el service worker.
- En la nube: Chromium está en `/opt/pw-browsers/chromium` y Playwright está instalado globalmente (`$(npm root -g)/playwright`).

Validación obligatoria después de cada cambio (no alcanza con que el código cargue):
1. Corré las comprobaciones disponibles: `node scripts/validate.mjs` (no hay typecheck, lint, tests ni build).
2. Abrí la app en Chromium y recorré el flujo modificado de principio a fin.
3. Revisá mobile, tablet y desktop con las medidas de **Responsive y mobile** y la auditoría de `audit.js`.
4. Confirmá que no haya desbordes, solapamientos, elementos cortados, botones inaccesibles, errores en consola, solicitudes fallidas ni regresiones en otras pantallas.
5. Si algo falla, corregilo y repetí la prueba.

## Entrega
Al terminar, informá: qué causaba el problema, qué cambiaste, qué archivos tocaste, qué mejoras relacionadas sumaste, qué pruebas hiciste, qué quedó pendiente y qué riesgo o decisión conviene revisar.

## Publicar
- Producción: https://brain.nioijosefina.workers.dev (Cloudflare Workers con archivos estáticos).
- **Cada push a `main` se publica solo** (Cloudflare Workers Builds conectado a este repo): comando de build `node scripts/deploy.mjs --no-deploy`, comando de deploy `npx wrangler deploy`.
- Trabajá en una rama y abrí un PR. Al hacer merge a `main` se publica.
- Desde una computadora con sesión de Cloudflare, también se puede publicar con `node scripts/deploy.mjs`.

## Datos
Todo el progreso, las notas y los tableros viven en `localStorage` del dispositivo (clave `brain.v1`). Nunca subas datos personales al repo: es público.
