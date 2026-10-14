# Brain

**Mini MBA para Fractional CMO** con formato gamificado: un camino de lecciones cortas con ejercicios, XP, racha, meta diaria, niveles y logros. PWA instalable que funciona offline; los datos quedan solo en tu dispositivo.

## Qué incluye
- **Camino de 12 unidades** (54 lecciones, 207 ejercicios) en 4 fases: cómo gana plata una empresa, del lead a la venta, palancas de valor y dirigir.
- **Lecciones**: pantallas de lectura cortas + ejercicios de opción múltiple, verdadero/falso, cálculo, unir pares y ordenar. Los errores vuelven al final de la lección.
- **Desafío por unidad**: un caso con cálculos guiados, una reflexión escrita y la resolución.
- **Laboratorio Durabox**: tareas para aplicar cada unidad a una empresa real.
- **Práctica**: repaso de errores, práctica rápida y tarjetas con repetición espaciada.
- **Gamificación**: XP, racha, meta diaria, 6 niveles (de Aprendiz de negocio a Fractional CMO) y 17 logros.
- **Herramientas**: 9 calculadoras y el Tablero de Dirección por empresa.
- **Cerebro**: notas en Markdown con `#etiquetas`, `[[enlaces]]` y backlinks.

## Publicación
Cloudflare (Workers con archivos estáticos): https://brain.nioijosefina.workers.dev

```bash
npx wrangler deploy
```

## Desarrollo local
```bash
python -m http.server 8765
```

El contenido de cada unidad está en `js/content/`.
