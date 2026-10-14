# Brain

Segundo cerebro + **Mini MBA para Fractional CMO**. PWA instalable, funciona offline, sin servidor: los datos (notas, progreso, respuestas, tableros) quedan sólo en tu dispositivo.

## Qué incluye
- **Ruta de 12 semanas** en 4 fases (fundamentos económicos, motor comercial, palancas de valor, dirección) con lecciones *concepto → número → interpretación → decisión*, preguntas de CMO, laboratorio Durabox y un caso práctico con resolución.
- **Herramientas**: economía de una venta, CAC máximo → CPL máximo, ROAS de equilibrio, punto de equilibrio, funnel al revés, simulador de descuento, LTV/payback, CAC marginal, suba de precio.
- **Tablero de Dirección**: inversión → adquisición → pipeline → ventas → facturación → margen → resultado → crecimiento, por empresa y con historial mensual.
- **Cerebro**: notas en Markdown con `#etiquetas`, `[[enlaces]]` entre notas y backlinks.
- **Repaso**: tarjetas con repetición espaciada que se desbloquean por semana.
- **Respaldo**: exportar/importar JSON y exportar notas a Markdown.

## Desarrollo local
```bash
python -m http.server 8765
```

## Publicación
- **Cloudflare** (Workers con archivos estáticos): https://brain.nioijosefina.workers.dev — desplegar con `npx wrangler deploy`.
- **GitHub Pages**: https://josefinanioi.github.io/brain/ — se actualiza solo al hacer push a `main`.
