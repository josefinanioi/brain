# Brain

**Mini MBA para Fractional CMO** con formato gamificado: un camino de lecciones cortas con ejercicios, XP, racha, meta diaria, niveles y logros. PWA instalable que funciona offline; los datos quedan solo en tu dispositivo.

## Qué incluye
- **Programa de 12 módulos en 3 niveles** (Fundamentos · Aplicación y crecimiento · Dirección): 48 unidades, 163 lecciones y 564 ejercicios. Basado en el programa curricular de Brain.
- **Inicio**: “seguí donde quedaste” y la lista de módulos por nivel con su avance. Todos los módulos están abiertos; dentro de cada uno, las lecciones se desbloquean en orden.
- **Lecciones**: situación cotidiana → idea → ejemplo con empresas ficticias (Roble, Lumen, Flow y Brote) → ejercicios de opción múltiple, verdadero/falso, cuentas simples, unir pares, ordenar y **respuesta escrita** (“Pensalo vos”), con respuesta razonada y autoevaluación por puntos clave. Los errores vuelven al final de la lección.
- **Casos**: lecciones de caso dentro de las unidades y un **desafío integrador por módulo** (diagnóstico, datos que faltan, dos alternativas y recomendación).
- **Laboratorio por módulo**: tareas para aplicar lo aprendido a una empresa real que elijas, más un proyecto integrador al final de cada nivel.
- **Práctica**: repaso de errores, práctica rápida y tarjetas con repetición espaciada.
- **Gamificación**: XP, racha, meta diaria, 7 niveles (de Aprendiz de negocio a Fractional CMO) y 17 logros.
- **Herramientas**: 9 calculadoras y el Tablero de Dirección por empresa.
- **Cerebro**: notas en Markdown con `#etiquetas`, `[[enlaces]]` y backlinks.

## Publicación
Cloudflare (Workers con archivos estáticos): https://brain.nioijosefina.workers.dev

Cada push a `main` se publica solo con Cloudflare Workers Builds:
- Comando de build: `node scripts/deploy.mjs --no-deploy` (pone un número de versión nuevo a los archivos, para que el celular reciba cada versión nueva).
- Comando de deploy: `npx wrangler deploy`.

Desde una computadora con sesión de Cloudflare también se puede publicar a mano con `node scripts/deploy.mjs`.

## Trabajar con Claude
Las instrucciones del proyecto para Claude están en `CLAUDE.md`. Después de tocar contenido: `node scripts/validate.mjs`.

## Comportamiento de app
- Sin zoom por pellizco ni rebote de pantalla; sin desplazamiento lateral.
- Fuentes propias (Nunito y Fredoka, licencia OFL) en `fonts/`: no depende de servidores externos.
- Funciona sin conexión.

## Desarrollo local
```bash
python -m http.server 8765
```

El contenido de cada unidad está en `js/content/`.
