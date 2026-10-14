/* Brain — contenido. Unidades 10 a 12: dirigir. */

UNITS.push({
  n: 10,
  phase: 'f4',
  title: 'Growth',
  goal: 'Separar el crecimiento en sus palancas y priorizarlas con método.',
  summary: [
    'El crecimiento es un árbol de multiplicadores: tráfico × conversión × ticket × frecuencia.',
    'Las mejoras chicas en varias ramas se potencian.',
    'Un experimento sin criterio de decisión es solo una actividad.',
  ],
  lessons: [
    {
      id: 'u10l1', title: 'El árbol de crecimiento', icon: '🌳',
      read: [
        { h: 'Multiplicadores', body: `
<div class="formula">Ingresos = tráfico × conversión × ticket × frecuencia</div>
<p>Cada rama tiene sub-ramas: tráfico = alcance × clics; conversión = lead → oportunidad → venta; ticket = precio + accesorios; frecuencia = recompra.</p>
<p>Como se multiplican, <b>mejorar 10% en cuatro ramas da +46%</b> (1,1 × 1,1 × 1,1 × 1,1), no +40%. Y suele ser más fácil mejorar un poco en cuatro lados que duplicar uno solo.</p>` },
      ],
      ex: [
        { t: 'number', q: 'Mejorás 10% tráfico y 10% conversión, el resto igual. ¿Cuánto % crecen los ingresos?', a: 21, unit: '%', why: '1,1 × 1,1 = 1,21 → +21%.' },
        { t: 'tf', q: 'Mejorar 10% en cuatro palancas da exactamente +40%.', a: false, why: 'Se multiplican: da +46%.' },
        { t: 'order', q: 'Ordená las ramas del árbol como aparecen en la fórmula.', items: ['Tráfico', 'Conversión', 'Ticket', 'Frecuencia'], why: 'Ingresos = tráfico × conversión × ticket × frecuencia.' },
      ],
    },
    {
      id: 'u10l2', title: 'Retención y cohortes', icon: '🔁',
      read: [
        { h: 'Seguir grupos de clientes', body: `
<p>Una <b>cohorte</b> es el grupo de clientes que compró por primera vez en el mismo período. Mirás qué % vuelve a los 3, 6 y 12 meses.</p>
<table><thead><tr><th>Cohorte</th><th>Mes 3</th><th>Mes 6</th><th>Mes 12</th></tr></thead><tbody>
<tr><td>Enero</td><td>8%</td><td>14%</td><td>20%</td></tr>
<tr><td>Abril</td><td>11%</td><td>18%</td><td>—</td></tr>
</tbody></table>
<p>Si las cohortes nuevas vuelven más, algo mejoró (producto, post-venta, comunicación). Retener casi siempre es más barato que adquirir.</p>` },
      ],
      ex: [
        { t: 'choice', q: 'La cohorte de abril vuelve más que la de enero a los 6 meses. ¿Qué indica?', o: ['Nada', 'Algo mejoró en la experiencia o el seguimiento', 'Abril tuvo más ventas'], a: 1, why: 'Comparar cohortes muestra si los cambios funcionan.' },
        { t: 'tf', q: 'Retener clientes suele ser más barato que conseguir nuevos.', a: true, why: 'No hay que pagar de nuevo para traerlos.' },
      ],
    },
    {
      id: 'u10l3', title: 'Expansión', icon: '🧭',
      read: [
        { h: 'Producto, canal y mercado', body: `
<ul>
<li><b>Producto nuevo al mismo cliente</b>: menor riesgo, aprovecha la confianza.</li>
<li><b>Mismo producto, canal nuevo</b> (distribuidores, marketplaces): más alcance, menos margen, riesgo de conflicto de canal.</li>
<li><b>Mercado nuevo</b> (ej. Paraguay): más riesgo; hay que validar demanda, costos, logística y regulación.</li>
</ul>
<p>Matriz de Ansoff: cuanto más te alejás del producto y el mercado actuales, más riesgo y más inversión de aprendizaje.</p>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada estrategia con un ejemplo de Durabox.', pairs: [['Producto nuevo, mismo cliente', 'Lanzar un accesorio nuevo'], ['Mismo producto, canal nuevo', 'Vender por distribuidores'], ['Mercado nuevo', 'Vender en Paraguay']] },
        { t: 'choice', q: '¿Qué opción tiene menos riesgo?', o: ['Mercado nuevo con producto nuevo', 'Producto nuevo al cliente actual', 'Mercado nuevo'], a: 1, why: 'Aprovecha la confianza y el conocimiento del cliente.' },
      ],
    },
    {
      id: 'u10l4', title: 'Experimentar con método', icon: '🧪',
      read: [
        { h: 'Priorizar y probar', body: `
<div class="formula">ICE = Impacto × Confianza × Facilidad (1 a 10 cada uno)</div>
<p>Cada experimento con:</p>
<ul>
<li><b>Hipótesis</b>: “si respondemos en menos de 15 minutos, lead → conversación sube de 45% a 60%”.</li>
<li><b>Métrica principal</b>.</li>
<li><b>Duración</b>.</li>
<li><b>Criterio de éxito y decisión</b> posterior.</li>
</ul>
<div class="callout">Un experimento sin criterio de decisión previo es una actividad, no un experimento.</div>` },
      ],
      ex: [
        { t: 'number', q: 'Una iniciativa tiene Impacto 8, Confianza 5, Facilidad 6. ¿Puntaje ICE?', a: 240, unit: 'puntos', why: '8 × 5 × 6 = 240.' },
        { t: 'choice', q: '¿Qué le falta a “probemos TikTok a ver qué pasa”?', o: ['Presupuesto', 'Hipótesis, métrica y criterio de decisión', 'Creatividades'], a: 1, why: 'Sin eso no sabés si funcionó ni qué hacer después.' },
      ],
    },
  ],
  lab: [
    'Descomponé la facturación de Durabox del último año en clientes × ticket × frecuencia.',
    'Armá una tabla de cohortes de recompra (aunque sea trimestral).',
    'Priorizá 5 iniciativas de growth con ICE.',
  ],
  challenge: {
    title: '¿De dónde sale el +25%?',
    intro: `<p>Una empresa vende 150 unidades por mes a $800.000 ($120 M). Quiere crecer 25%. Conversión lead → venta 5%; 15% de los compradores suma un accesorio de $120.000; casi nadie recompra.</p>`,
    steps: [
      { t: 'number', q: '¿Facturación objetivo en millones?', a: 150, unit: 'M', why: '120 × 1,25 = 150.' },
      { t: 'number', q: 'Si la conversión pasa de 5% a 5,5% con los mismos leads, ¿cuántas ventas?', a: 165, unit: 'ventas', why: '150 × 1,1 = 165.' },
      { t: 'choice', q: '¿Cuál es la mejor estrategia?', o: ['Subir los leads 25%', 'Combinar conversión, accesorios, precio y algo más de leads', 'Bajar precios'], a: 1, why: 'Varias palancas chicas se multiplican, y precio y accesorios además suben el margen.' },
    ],
    reflect: 'Armá tu combinación de palancas con un número para cada una.',
    legacyKey: 'w10',
    solution: `<ul><li>Conversión 5% → 5,5%: +15 ventas → +$12 M.</li><li>Attach 15% → 35%: +33 accesorios → +$4 M.</li><li>Precio +4%: +$5,3 M.</li><li>Leads +7%: +~12 ventas → +$9,5 M.</li></ul><p>Total ≈ +$31 M. Verificar capacidad para ~177 ventas.</p>`,
  },
  cards: [
    { q: 'Árbol de crecimiento', a: 'Ingresos = tráfico × conversión × ticket × frecuencia.' },
    { q: 'Cohorte', a: 'Clientes que compraron por primera vez en el mismo período, seguidos en el tiempo.' },
    { q: 'ICE', a: 'Impacto × Confianza × Facilidad.' },
    { q: 'Matriz de Ansoff', a: 'Cuanto más lejos del producto y mercado actuales, más riesgo.' },
  ],
});

UNITS.push({
  n: 11,
  phase: 'f4',
  title: 'Estrategia empresarial',
  goal: 'Mercado, competencia, posicionamiento, canales y asignación de recursos.',
  summary: [
    'El tamaño de mercado define por dónde conviene crecer.',
    'Un buen posicionamiento permite sostener precio.',
    'La estrategia real es dónde se ponen plata, tiempo y gente.',
  ],
  lessons: [
    {
      id: 'u11l1', title: 'TAM, SAM y SOM', icon: '🌎',
      read: [
        { h: 'Cuánto mercado hay', body: `
<ul>
<li><b>TAM</b>: el mercado total si vendieras a todos.</li>
<li><b>SAM</b>: la parte que tu oferta y tus canales pueden atender.</li>
<li><b>SOM</b>: lo que podés capturar en 1 a 3 años.</li>
</ul>
<p>Calculalo de abajo hacia arriba: compradores posibles × probabilidad de compra anual × ticket. 400.000 pickups × 3% × $1 M = <b>TAM anual $12.000 M</b>. Si vendés $1.200 M por año, tenés ~10%.</p>` },
      ],
      ex: [
        { t: 'number', q: '200.000 compradores posibles × 5% por año × $500.000. ¿TAM anual en millones?', a: 5000, unit: 'M', why: '200.000 × 0,05 = 10.000 compras × 500.000 = $5.000 M.' },
        { t: 'match', q: 'Uní cada sigla con su definición.', pairs: [['TAM', 'Mercado total'], ['SAM', 'Lo que tu oferta puede atender'], ['SOM', 'Lo que podés capturar en 1–3 años']] },
        { t: 'choice', q: 'Ya tenés el 60% del mercado local. ¿Por dónde crecés?', o: ['Más pauta en el mismo mercado', 'Nuevos productos o mercados', 'Bajar precios'], a: 1, why: 'Queda poco para ganar en el mismo lugar.' },
      ],
    },
    {
      id: 'u11l2', title: 'Posicionamiento', icon: '🎯',
      read: [
        { h: 'Contra qué competís', body: `
<p>La competencia son las <b>alternativas</b> del cliente: otros fabricantes, importados, soluciones caseras, no hacer nada.</p>
<blockquote>Para [cliente] que [necesidad], [marca] es [categoría] que [beneficio principal], a diferencia de [alternativa], porque [razón para creer].</blockquote>
<p>Una buena posición permite <b>sostener precio</b>: es una decisión económica, no solo de comunicación.</p>` },
      ],
      ex: [
        { t: 'choice', q: '¿Quién es competencia de una tapa de camioneta?', o: ['Solo otras marcas', 'Marcas, importados, soluciones caseras y no comprar', 'Nadie'], a: 1, why: 'Cualquier alternativa que el cliente considere.' },
        { t: 'tf', q: 'El posicionamiento es solo un tema de comunicación.', a: false, why: 'Define cuánto precio podés sostener.' },
      ],
    },
    {
      id: 'u11l3', title: 'Canales', icon: '🛣️',
      read: [
        { h: 'Margen, control y alcance', body: `
<table><thead><tr><th>Canal</th><th>Margen</th><th>Control</th><th>Alcance</th></tr></thead><tbody>
<tr><td>Venta directa / WhatsApp</td><td>Alto</td><td>Alto</td><td>Limitado por el equipo</td></tr>
<tr><td>E-commerce propio</td><td>Alto</td><td>Alto</td><td>Depende del tráfico</td></tr>
<tr><td>Distribuidores</td><td>Menor</td><td>Bajo</td><td>Alto</td></tr>
<tr><td>Marketplaces</td><td>Menor</td><td>Medio</td><td>Alto</td></tr>
</tbody></table>
<p>La pregunta no es qué canal es mejor, sino qué combinación maximiza contribución sin canibalizarse (precios coherentes, zonas, roles).</p>` },
      ],
      ex: [
        { t: 'choice', q: '¿Qué riesgo hay al vender directo y por distribuidores?', o: ['Ninguno', 'Que compitan en precio y se canibalicen', 'Vender demasiado'], a: 1, why: 'Sin reglas de precio y zonas, se pisan.' },
        { t: 'choice', q: '¿Qué canal suele dar más alcance con menos margen?', o: ['Venta directa', 'Distribuidores', 'E-commerce propio'], a: 1, why: 'El distribuidor se queda con una parte a cambio de llegar más lejos.' },
      ],
    },
    {
      id: 'u11l4', title: 'Nuevo mercado', icon: '🇵🇾',
      read: [
        { h: 'Checklist para expandir', body: `
<ol>
<li><b>Demanda</b>: parque, búsquedas, consultas que ya llegan.</li>
<li><b>Competencia y precios</b> locales.</li>
<li><b>Costos</b>: logística, aranceles, impuestos, tipo de cambio.</li>
<li><b>Canal</b>: directo o distribuidor local.</li>
<li><b>Capacidad</b>: ¿producción y atención aguantan?</li>
<li><b>Inversión de aprendizaje</b>: cuánto gastar para validar y con qué criterio de corte.</li>
</ol>
<div class="callout">Piloto acotado con criterios de seguir o frenar definidos antes de empezar.</div>` },
      ],
      ex: [
        { t: 'choice', q: '¿Cuál es la forma más sensata de probar un mercado nuevo?', o: ['Invertir fuerte desde el inicio', 'Un piloto acotado con criterios de corte', 'Esperar a la competencia'], a: 1, why: 'Limita el riesgo y acelera el aprendizaje.' },
        { t: 'tf', q: 'Que lleguen consultas espontáneas desde un país es una señal de demanda.', a: true, why: 'Es demanda que aparece sin inversión.' },
      ],
    },
    {
      id: 'u11l5', title: 'Asignar recursos', icon: '⚖️',
      read: [
        { h: 'Decir que no', body: `
<p>La estrategia real no es lo que dice el plan: es <b>dónde se pone la plata, el tiempo y la gente</b>. Un reparto sano:</p>
<ul>
<li>Proteger el núcleo (lo que hoy paga la estructura).</li>
<li>Crecer en lo adyacente.</li>
<li>Explorar opciones de futuro con poca plata.</li>
</ul>
<p>Cada iniciativa nueva compite con las existentes por los mismos recursos.</p>` },
      ],
      ex: [
        { t: 'choice', q: 'Aparece una idea atractiva. ¿Qué preguntás primero?', o: ['¿Cuándo arrancamos?', '¿Qué dejamos de hacer para hacerla?', '¿Quién la diseña?'], a: 1, why: 'Los recursos son limitados.' },
        { t: 'order', q: 'Ordená por cantidad de recursos que suele recibir cada categoría (de más a menos).', items: ['Proteger el núcleo', 'Crecer en lo adyacente', 'Explorar el futuro'], why: 'El núcleo paga la estructura; la exploración va con poca plata.' },
      ],
    },
  ],
  lab: [
    'Estimá TAM, SAM y SOM de Durabox en Argentina.',
    'Escribí la frase de posicionamiento de Durabox.',
    'Armá el checklist de Paraguay con lo que sabés y lo que falta.',
  ],
  challenge: {
    title: '¿Paraguay o más Argentina?',
    intro: `<p>Tenés $20 M para el semestre. Argentina: CAC $100.000, quedan $250.000 después del CAC. Paraguay: sin datos de CAC, mercado ~8% del argentino, logística +$80.000 por venta, 40 consultas por mes sin inversión.</p>`,
    steps: [
      { t: 'number', q: 'Si en Paraguay todo lo demás fuera igual, ¿cuánto quedaría por venta después de la logística extra?', a: 170000, unit: '$', why: '250.000 − 80.000 = 170.000.' },
      { t: 'choice', q: '¿Cómo repartís?', o: ['Todo a Paraguay', '80–85% Argentina y 15–20% a un piloto en Paraguay', 'Todo a Argentina'], a: 1, why: 'Lo conocido rinde; la señal de Paraguay merece una prueba acotada.' },
      { t: 'number', q: 'Si el piloto es el 15% de $20 M, ¿cuánto es en millones?', a: 3, unit: 'M', why: '20 × 0,15 = 3.' },
    ],
    reflect: '¿Qué criterio de seguir o frenar pondrías para el piloto?',
    legacyKey: 'w11',
    solution: `<p>Ejemplo: si en 3 meses lo que queda por venta en Paraguay es mayor al 60% de lo argentino y hay capacidad, escalar; si no, pausar y documentar lo aprendido. Medir CAC real, conversión y si conviene un distribuidor local.</p>`,
  },
  cards: [
    { q: 'TAM / SAM / SOM', a: 'Mercado total / atendible / capturable en 1–3 años.' },
    { q: 'Frase de posicionamiento', a: 'Para [cliente] que [necesidad], [marca] es [categoría] que [beneficio], a diferencia de [alternativa], porque [razón].' },
    { q: 'Inversión de aprendizaje', a: 'Presupuesto acotado para validar, con criterios de éxito y de corte definidos antes.' },
    { q: 'Estrategia en la práctica', a: 'Dónde se pone plata, tiempo y gente, y a qué se dice que no.' },
  ],
});

UNITS.push({
  n: 12,
  phase: 'f4',
  title: 'Dirección de Marketing',
  goal: 'Construir el tablero, el plan y defender decisiones frente a dirección.',
  summary: [
    'Un tablero de una página conecta inversión con resultado.',
    'Al presentar: recomendación primero, después los números.',
    'El ritmo de reuniones sostiene el trabajo cuando no estás.',
  ],
  lessons: [
    {
      id: 'u12l1', title: 'El tablero de dirección', icon: '📋',
      read: [
        { h: 'Una página, tres niveles', body: `
<div class="chain strong">Inversión → adquisición → pipeline → ventas → facturación → margen → resultado → crecimiento</div>
<ul>
<li><b>Negocio</b>: facturación, contribución, resultado, MER, uso de capacidad.</li>
<li><b>Motor</b>: leads, conversión por etapa, CAC promedio y marginal, ticket, recompra.</li>
<li><b>Canales</b>: inversión, CPL, CAC y contribución por canal y producto.</li>
</ul>
<p>Cada número con su comparación (mes anterior, año anterior, objetivo) y una línea: <em>qué significa y qué decidimos</em>.</p>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada métrica con su nivel del tablero.', pairs: [['Resultado', 'Negocio'], ['Conversión por etapa', 'Motor'], ['CPL de Meta', 'Canales']] },
        { t: 'choice', q: '¿Qué acompaña a cada número del tablero?', o: ['Un gráfico lindo', 'Una comparación y qué decidimos', 'El logo de la plataforma'], a: 1, why: 'Sin comparación ni decisión, el número no dirige nada.' },
      ],
    },
    {
      id: 'u12l2', title: 'Presentar a dirección', icon: '🎤',
      read: [
        { h: 'Cinco pasos', body: `
<ol>
<li><b>Recomendación</b>: “Propongo X”.</li>
<li><b>Por qué</b>: 2 o 3 números.</li>
<li><b>Supuestos</b> y qué los podría romper.</li>
<li><b>Riesgos</b> y cómo los mitigás.</li>
<li><b>Decisión</b> que necesitás y para cuándo.</li>
</ol>
<blockquote>“No escalaría todavía. El CPL mejora, pero no sabemos si llega a CAC. Necesito la conversión lead → venta por origen. Si Meta mantiene la tasa, el CAC proyectado sería X y el margen incremental Y. Con esos números sí hay espacio para invertir.”</blockquote>` },
      ],
      ex: [
        { t: 'order', q: 'Ordená la estructura de una presentación a dirección.', items: ['Recomendación', 'Por qué (2–3 números)', 'Supuestos', 'Riesgos', 'Decisión que necesitás'], why: 'Primero qué se decide; después lo que lo sostiene.' },
        { t: 'tf', q: 'Conviene empezar mostrando todos los datos y dejar la recomendación para el final.', a: false, why: 'La dirección necesita saber primero qué se le pide.' },
      ],
    },
    {
      id: 'u12l3', title: 'El plan integral', icon: '🗂️',
      read: [
        { h: 'De diagnóstico a decisiones', body: `
<ol>
<li>Diagnóstico económico: la cascada, unit economics, funnel, restricción.</li>
<li>Objetivos de negocio (no de marketing): contribución, crecimiento, mix.</li>
<li>Palancas elegidas y por qué.</li>
<li>Presupuesto por objetivo y tarea, con escenarios y compuertas.</li>
<li>Iniciativas con dueño, métrica y plazo.</li>
<li>Tablero y ritmo de seguimiento.</li>
</ol>` },
      ],
      ex: [
        { t: 'choice', q: '¿Cuál es un buen objetivo para un plan de dirección?', o: ['10.000 seguidores', 'Aumentar contribución y ventas', 'Publicar todos los días'], a: 1, why: 'Los objetivos de dirección son de negocio.' },
        { t: 'tf', q: 'Cada iniciativa del plan debería tener dueño, métrica y plazo.', a: true, why: 'Si no, nadie responde por ella.' },
      ],
    },
    {
      id: 'u12l4', title: 'Ritmo de gestión', icon: '🔔',
      read: [
        { h: 'Reuniones que sostienen el sistema', body: `
<ul>
<li><b>Semanal con ventas</b> (30 min): funnel, tiempo de respuesta, motivos de pérdida.</li>
<li><b>Mensual con dirección</b> (60 min): tablero, presupuesto, alertas de capacidad.</li>
<li><b>Trimestral</b>: estrategia, mix, precio, experimentos y plan siguiente.</li>
</ul>
<p>Como fractional, tu valor está en el <b>criterio y el sistema</b>, no en las horas.</p>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada reunión con su foco.', pairs: [['Semanal con ventas', 'Funnel y motivos de pérdida'], ['Mensual con dirección', 'Tablero y presupuesto'], ['Trimestral', 'Estrategia y precio']] },
        { t: 'choice', q: 'Como directora externa, ¿qué deja más valor?', o: ['Estar muchas horas', 'Un sistema que funciona cuando no estás', 'Hacer todo vos'], a: 1, why: 'Lo fractional se basa en criterio y sistema.' },
      ],
    },
    {
      id: 'u12l5', title: 'Tu rol como Fractional CMO', icon: '🦒',
      read: [
        { h: 'Qué hacés y qué delegás', body: `
<table><thead><tr><th>Vos</th><th>Le pedís a otros</th></tr></thead><tbody>
<tr><td>Hacer las preguntas correctas</td><td>Contador/CFO: costos exactos, impuestos</td></tr>
<tr><td>Traducir números en decisiones</td><td>Ventas: forecast de pipeline, motivos de pérdida</td></tr>
<tr><td>Definir CAC máximo, presupuesto y mix</td><td>Operaciones: capacidad, stock, plazos</td></tr>
<tr><td>Diseñar el tablero y el ritmo</td><td>Agencia o equipo: ejecución</td></tr>
</tbody></table>` },
        { h: 'Dónde encajás mejor', body: `
<p>Empresas medianas consolidadas (industriales, distribución, e-commerce, servicios) donde <em>“la empresa creció, hace muchas cosas de marketing y necesita alguien que piense, ordene y dirija”</em>.</p>
<p>No conviene venderte todavía para SaaS con métricas complejas, empresas con venture capital o corporaciones con P&L enorme. Este tablero y este método pueden ser el framework de Jirafa como Dirección de Marketing Externa.</p>` },
      ],
      ex: [
        { t: 'choice', q: '¿Quién debería calcular los costos exactos por producto?', o: ['Vos', 'El contador o CFO', 'La agencia'], a: 1, why: 'Vos los usás para decidir.' },
        { t: 'choice', q: '¿Qué cliente encaja mejor con tu perfil hoy?', o: ['Una startup SaaS con venture capital', 'Una industrial mediana que creció y necesita ordenar marketing', 'Una multinacional'], a: 1, why: 'Es donde tu experiencia actual tiene más impacto.' },
        { t: 'tf', q: 'Una CMO necesita saber hacer contabilidad avanzada.', a: false, why: 'Necesita entender los números y hacer las preguntas correctas.' },
      ],
    },
  ],
  lab: [
    'Completá el Tablero de Dirección de Durabox en Herramientas.',
    'Escribí el plan integral de Durabox para el próximo semestre (máximo 2 páginas).',
    'Prepará una recomendación con la estructura de 5 pasos.',
    'Convertí el tablero en plantilla para la metodología de Jirafa.',
  ],
  challenge: {
    title: 'Tu primera reunión de directorio',
    intro: `<p>Usando Durabox o un cliente real, preparás una recomendación de una página para dirección.</p>`,
    steps: [
      { t: 'order', q: 'Ordená tu documento.', items: ['Recomendación', 'Diagnóstico en 5 líneas', 'Restricción principal', 'Tres palancas con impacto', 'Presupuesto con compuertas', 'Decisión que necesitás'], why: 'Empieza por lo que proponés y termina con lo que pedís.' },
      { t: 'tf', q: 'Cada métrica de marketing del documento debería estar traducida a negocio.', a: true, why: '¿Y esto qué significa para el negocio?' },
    ],
    reflect: 'Escribí tu recomendación de una página.',
    legacyKey: 'w12',
    solution: `<p>Checklist: ¿empieza por la recomendación? ¿traduce métricas a contribución y resultado? ¿distingue CPL, CAC promedio y CAC marginal? ¿considera capacidad? ¿el presupuesto sale de un objetivo y tiene compuertas? ¿los supuestos tienen dueño? ¿termina con una decisión concreta?</p>`,
  },
  cards: [
    { q: 'Presentar a dirección', a: 'Recomendación → por qué → supuestos → riesgos → decisión que necesitás.' },
    { q: 'Tres niveles del tablero', a: 'Negocio, motor y canales.' },
    { q: 'Ritmo de gestión', a: 'Semanal con ventas, mensual con dirección, trimestral de estrategia.' },
    { q: 'Dónde encajás como Fractional CMO', a: 'Empresas medianas consolidadas que crecieron y necesitan dirección de marketing.' },
  ],
});
