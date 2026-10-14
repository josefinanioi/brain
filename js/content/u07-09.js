/* Brain — contenido. Unidades 7 a 9: palancas además de la pauta. */

UNITS.push({
  n: 7,
  phase: 'f3',
  title: 'Pricing',
  goal: 'Entender el precio como palanca, el valor percibido y las promociones que cuidan el margen.',
  summary: [
    'El precio es la palanca con más efecto sobre el resultado.',
    'El cliente compara con sus alternativas, no con tu costo.',
    'Toda promoción se mide por contribución incremental.',
  ],
  lessons: [
    {
      id: 'u7l1', title: 'La palanca más fuerte', icon: '💲',
      read: [
        { h: 'Un poco de precio, mucho resultado', body: `
<p>Contribución del 30%: precio $1.000.000, deja $300.000. Si subís 5% y el volumen se mantiene, deja $350.000: <b>+16,7%</b> de contribución.</p>
<p>Para lograr lo mismo por volumen tendrías que vender 16,7% más y pagar el CAC de esas ventas. Por eso el precio es la palanca más potente… y la que marketing menos discute.</p>` },
        { h: 'Cuánto volumen podés perder', body: `
<div class="formula">Caída de ventas tolerable al subir el precio = suba ÷ (margen + suba)</div>
<p>Margen 30%, suba 5%: 0,05 ÷ 0,35 = <b>14,3%</b>. Podés vender hasta 14% menos y ganar lo mismo.</p>` },
      ],
      ex: [
        { t: 'number', q: 'Vendés a $100, cuesta $80. Subís a $110 y vendés lo mismo. ¿Cuánto % más ganás por venta?', a: 50, unit: '%', why: 'De $20 a $30: +50%.' },
        { t: 'number', q: 'Margen 20%, suba de precio 5%. ¿Cuánto % de volumen podés perder y ganar lo mismo?', a: 20, unit: '%', why: '0,05 ÷ (0,20 + 0,05) = 20%.' },
        { t: 'tf', q: 'Con márgenes bajos, una suba de precio pequeña tiene un efecto grande en la contribución.', a: true, why: 'Cuanto menor el margen, más pesa cada punto de precio.' },
      ],
    },
    {
      id: 'u7l2', title: 'Valor percibido y elasticidad', icon: '🔮',
      read: [
        { h: 'Con qué compara el cliente', body: `
<p>El cliente no compara tu precio con tu costo: lo compara con sus <b>alternativas</b> (otra marca, algo importado, una solución casera, no comprar) y con el valor que percibe.</p>
<p>Marketing construye ese valor: posicionamiento, garantía, prueba social, servicio, instalación.</p>` },
        { h: 'Elasticidad', body: `
<p>Es cuánto cambia la demanda ante un cambio de precio. Es alta en productos comparables y commoditizados; baja cuando hay diferenciación, urgencia o pocas alternativas.</p>
<p>No se calcula en teoría: se <b>prueba</b> por producto, canal, zona o período, y se mide.</p>` },
      ],
      ex: [
        { t: 'choice', q: '¿Qué ayuda a sostener un precio más alto?', o: ['Más anuncios', 'Que el cliente perciba más valor que en sus alternativas', 'Bajar costos'], a: 1, why: 'El cliente paga más cuando ve más valor.' },
        { t: 'choice', q: '¿Dónde esperás más elasticidad?', o: ['Producto idéntico al de la competencia', 'Producto único con garantía e instalación', 'Repuesto urgente'], a: 0, why: 'Si es comparable, el precio decide.' },
        { t: 'tf', q: 'La elasticidad se calcula mejor con una fórmula que con pruebas.', a: false, why: 'Se prueba y se mide en el mercado real.' },
      ],
    },
    {
      id: 'u7l3', title: 'Promociones inteligentes', icon: '🎁',
      read: [
        { h: 'Alternativas al % OFF', body: `
<ul>
<li><b>Regalo</b> de alto valor percibido y bajo costo: un accesorio que cuesta $15.000 y se percibe en $60.000.</li>
<li><b>Combo</b>: tapa + accesorio, con descuento sobre el accesorio. Sube el ticket y el attach rate.</li>
<li><b>Descuento condicionado</b>: por ticket mínimo, por tiempo, por stock a liquidar.</li>
<li><b>Envío gratis</b> desde un umbral.</li>
</ul>
<div class="callout">Toda promoción se evalúa por contribución incremental, no por ventas incrementales.</div>` },
      ],
      ex: [
        { t: 'choice', q: '¿Qué promo suele cuidar más el margen?', o: ['20% OFF en todo', 'Regalo de bajo costo y alto valor percibido', 'Bajar la lista para siempre'], a: 1, why: 'Cuesta poco y no toca el precio principal.' },
        { t: 'number', q: 'Contribución $300.000. Opción A: 10% OFF sobre $1.000.000. Opción B: regalo que cuesta $15.000. ¿Cuánto deja B?', a: 285000, unit: '$', why: '300.000 − 15.000 = 285.000 (A dejaría 200.000).' },
        { t: 'tf', q: 'Una promo exitosa es la que más ventas genera.', a: false, why: 'Es la que más contribución adicional genera.' },
      ],
    },
    {
      id: 'u7l4', title: 'Precio en Argentina', icon: '🇦🇷',
      read: [
        { h: 'Lista, efectivo y reposición', body: `
<ul>
<li><b>Precio efectivo</b>: lo que entra después de descuento por transferencia, costo de cuotas y comisiones.</li>
<li><b>Cuotas sin interés</b>: las paga la empresa. Son un descuento encubierto.</li>
<li><b>Inflación y reposición</b>: si el precio de hoy no repone el stock de mañana, la empresa se descapitaliza aunque “gane”.</li>
<li><b>Precio por canal</b>: distribuidor, e-commerce y venta directa necesitan una arquitectura coherente para no canibalizarse.</li>
</ul>` },
      ],
      ex: [
        { t: 'choice', q: '¿Qué son, en el fondo, las cuotas sin interés?', o: ['Gratis', 'Un descuento encubierto', 'Un aumento de precio'], a: 1, why: 'La empresa paga la financiación.' },
        { t: 'number', q: 'Lista $1.000.000, 10% de descuento por transferencia. ¿Precio efectivo?', a: 900000, unit: '$', why: '1.000.000 × 0,9 = 900.000.' },
        { t: 'tf', q: 'Vender a un precio que no repone el stock puede descapitalizar la empresa.', a: true, why: 'La próxima compra de mercadería cuesta más de lo que entró.' },
      ],
    },
  ],
  lab: [
    'Calculá el precio efectivo de una tapa Durabox por medio de pago.',
    'Diseñá una promo con accesorio en vez de % OFF y calculá su contribución.',
    'Calculá cuánto volumen podrías perder con una suba de 5%.',
  ],
  challenge: {
    title: '¿Cuotas o transferencia?',
    intro: `
<p>Precio de lista <b>$1.200.000</b>. Costo variable <b>$780.000</b>.</p>
<ul><li>A: 10% de descuento por transferencia.</li><li>B: 6 cuotas sin interés con costo financiero de 14%.</li></ul>`,
    steps: [
      { t: 'number', q: '¿Contribución con A?', a: 300000, unit: '$', why: '1.080.000 − 780.000 = 300.000.' },
      { t: 'number', q: '¿Contribución con B?', a: 252000, unit: '$', why: '1.200.000 × 0,86 = 1.032.000 − 780.000 = 252.000.' },
      { t: 'choice', q: '¿Qué conviene comunicar más fuerte?', o: ['Las cuotas', 'La transferencia, sin eliminar las cuotas', 'Ninguna'], a: 1, why: 'Deja $48.000 más por venta y se cobra en el momento, pero las cuotas pueden traer compradores que de otra forma no comprarían.' },
    ],
    reflect: '¿Qué medirías para decidir con datos?',
    legacyKey: 'w7',
    solution: `<p>Medir la conversión por medio de pago: B tiene que convertir al menos ~19% más que A para igualar la contribución total. Testear un mensaje que destaque la transferencia para quien puede pagar así.</p>`,
  },
  cards: [
    { q: 'Caída tolerable al subir el precio', a: 'Suba ÷ (margen + suba).' },
    { q: 'Elasticidad', a: 'Cuánto cambia la demanda ante un cambio de precio. Se prueba.' },
    { q: 'Cuotas sin interés', a: 'Un descuento encubierto: la financiación la paga la empresa.' },
    { q: 'Promos que cuidan el margen', a: 'Regalo de bajo costo, combo, envío gratis con mínimo, descuento acotado.' },
  ],
});

UNITS.push({
  n: 8,
  phase: 'f3',
  title: 'Portfolio y mix',
  goal: 'Decidir qué productos empujar según demanda, margen, CAC y capacidad.',
  summary: [
    'Cada producto deja distinto después de pagar lo que cuesta conseguir al cliente.',
    'El mix cambia la ganancia sin cambiar la facturación.',
    'Un producto de entrada vale por lo que trae después.',
  ],
  lessons: [
    {
      id: 'u8l1', title: 'Lo que deja cada producto', icon: '📦',
      read: [
        { h: 'Cuatro variables', body: `
<ul>
<li><b>Contribución después del CAC</b> por unidad.</li>
<li><b>Demanda</b> disponible.</li>
<li><b>Capacidad</b> de producirlo y entregarlo.</li>
<li><b>Rol estratégico</b>: entrada, rentabilidad, fidelización, imagen.</li>
</ul>
<div class="formula">Retorno por peso invertido = contribución después del CAC ÷ CAC</div>` },
      ],
      ex: [
        { t: 'number', q: 'Un producto deja $252.000 de contribución y su CAC es $90.000. ¿Cuánto queda después del CAC?', a: 162000, unit: '$', why: '252.000 − 90.000 = 162.000.' },
        { t: 'number', q: 'Con esos números ($162.000 que quedan, CAC $90.000), ¿retorno por peso invertido? (un decimal)', a: 1.8, tol: 0.05, unit: 'x', why: '162.000 ÷ 90.000 = 1,8.' },
        { t: 'choice', q: '¿Qué producto conviene empujar?', o: ['El más caro', 'El que más deja, con demanda y capacidad', 'El más nuevo'], a: 1, why: 'El precio alto no alcanza.' },
      ],
    },
    {
      id: 'u8l2', title: 'Margen × demanda', icon: '🗺️',
      read: [
        { h: 'Un mapa de cuatro cuadrantes', body: `
<table><thead><tr><th></th><th>Demanda alta</th><th>Demanda baja</th></tr></thead><tbody>
<tr><td><b>Margen alto</b></td><td>⭐ Empujar con más inversión</td><td>Construir demanda</td></tr>
<tr><td><b>Margen bajo</b></td><td>Producto de entrada: vender complementos</td><td>Revisar o discontinuar</td></tr>
</tbody></table>
<p>Un producto de margen bajo y mucha demanda vale si <b>abre la puerta</b> a compras de margen alto. Sin esa segunda compra, es volumen que no paga la estructura.</p>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada cuadrante con la acción.', pairs: [['Margen alto, demanda alta', 'Empujar'], ['Margen alto, demanda baja', 'Construir demanda'], ['Margen bajo, demanda alta', 'Usar como entrada'], ['Margen bajo, demanda baja', 'Revisar o discontinuar']] },
        { t: 'tf', q: 'Un producto de margen bajo siempre debería discontinuarse.', a: false, why: 'Puede ser la puerta de entrada a compras rentables.' },
      ],
    },
    {
      id: 'u8l3', title: 'El efecto mix', icon: '🎚️',
      read: [
        { h: 'Misma facturación, distinta ganancia', body: `
<table><thead><tr><th></th><th>Mes 1</th><th>Mes 2</th></tr></thead><tbody>
<tr><td>Producto A (margen 25%)</td><td>$70 M</td><td>$40 M</td></tr>
<tr><td>Producto B (margen 50%)</td><td>$30 M</td><td>$60 M</td></tr>
<tr><td>Contribución</td><td><b>$32,5 M</b></td><td><b>$40 M</b></td></tr>
</tbody></table>
<p>Sin vender un peso más, el mes 2 deja 23% más. <b>Marketing decide el mix</b> con lo que comunica, promociona y dónde invierte.</p>` },
      ],
      ex: [
        { t: 'number', q: '$50 M de A (margen 20%) y $50 M de B (margen 40%). ¿Contribución total en millones?', a: 30, unit: 'M', why: '10 + 20 = 30.' },
        { t: 'choice', q: '¿Cómo sube marketing la ganancia sin vender más?', o: ['No se puede', 'Empujando productos de mayor margen', 'Bajando precios'], a: 1, why: 'Cambiar el mix cambia la contribución.' },
      ],
    },
    {
      id: 'u8l4', title: 'Cross-sell', icon: '➕',
      read: [
        { h: 'Vender algo más', body: `
<div class="formula">Ticket promedio = ticket base + attach rate × ticket del complemento</div>
<p>Tapa $1.000.000 + 30% compra un accesorio de $150.000 → ticket promedio $1.045.000. Si el attach sube a 50% → $1.075.000. Como el accesorio suele tener mejor margen, la contribución sube todavía más.</p>
<p>Momentos para ofrecerlo: en el presupuesto (combo), en la entrega o instalación, y entre 30 y 90 días después.</p>` },
      ],
      ex: [
        { t: 'number', q: 'Ticket base $800.000. 25% compra un accesorio de $200.000. ¿Ticket promedio?', a: 850000, unit: '$', why: '800.000 + 0,25 × 200.000 = 850.000.' },
        { t: 'choice', q: '¿Cuál NO es un buen momento para ofrecer un accesorio?', o: ['En el presupuesto', 'En la entrega', 'Antes de que el cliente elija el producto principal'], a: 2, why: 'Primero tiene que estar decidida la compra principal.' },
      ],
    },
  ],
  lab: [
    'Ubicá cada producto de Durabox en la matriz margen × demanda.',
    'Calculá la contribución total por producto de los últimos 3 meses.',
    'Diseñá 2 momentos de cross-sell en el recorrido del cliente.',
  ],
  challenge: {
    title: '¿Dónde ponés $3 M extra?',
    intro: `
<table><thead><tr><th></th><th>Tapa estándar</th><th>Tapa premium</th><th>Accesorio (remarketing)</th></tr></thead><tbody>
<tr><td>Contribución</td><td>$252.000</td><td>$532.000</td><td>$99.000</td></tr>
<tr><td>CAC</td><td>$90.000</td><td>$220.000</td><td>$20.000</td></tr>
<tr><td>Capacidad libre</td><td>10</td><td>25</td><td>sin límite</td></tr>
</tbody></table>`,
    steps: [
      { t: 'number', q: 'Premium: ¿cuánto queda después del CAC?', a: 312000, unit: '$', why: '532.000 − 220.000 = 312.000.' },
      { t: 'number', q: 'Accesorio: retorno por peso invertido (un decimal).', a: 4, tol: 0.1, unit: 'x', why: '79.000 ÷ 20.000 ≈ 3,95. Estándar 1,8; premium 1,42.' },
      { t: 'choice', q: '¿Cómo repartís?', o: ['Todo al accesorio', 'Accesorio hasta agotar la base, 10 estándar y el resto premium', 'Todo a premium'], a: 1, why: 'El remarketing está limitado por la base de compradores y la estándar por stock.' },
    ],
    reflect: '¿Qué chequearías en cada tramo de inversión?',
    legacyKey: 'w8',
    solution: `<p>Que el CAC se sostenga al escalar cada tramo, que el remarketing no sature a la base actual y que premium tenga capacidad real de entrega.</p>`,
  },
  cards: [
    { q: 'Matriz margen × demanda', a: 'Empujar, construir demanda, usar como entrada o revisar.' },
    { q: 'Efecto mix', a: 'Misma facturación con distinto mix deja distinta contribución.' },
    { q: 'Ticket con cross-sell', a: 'Ticket base + attach rate × ticket del complemento.' },
    { q: 'Retorno por peso invertido', a: 'Contribución después del CAC ÷ CAC.' },
  ],
});

UNITS.push({
  n: 9,
  phase: 'f3',
  title: 'Operaciones + marketing',
  goal: 'Entender stock, capacidad, logística y atención como límites del crecimiento.',
  summary: [
    'La empresa vende al ritmo de su etapa más lenta.',
    'Crecer consume caja antes de cobrar.',
    'La experiencia de entrega y atención también es marketing.',
  ],
  lessons: [
    {
      id: 'u9l1', title: 'El cuello de botella', icon: '🍾',
      read: [
        { h: 'La etapa más lenta manda', body: `
<p>No importa cuán ancha sea una botella abajo: el agua sale al ritmo del cuello.</p>
<div class="chain">Marketing 200 → ventas 150 → producción 100 → <b>instalación 80</b></div>
<p>La empresa vende <b>80</b>. Más inversión en marketing no mueve el resultado: alarga la fila de espera. La palanca está en la restricción.</p>
<div class="callout">Primera pregunta de Dirección: <b>¿cuál es la restricción hoy?</b> A veces no es la demanda.</div>` },
      ],
      ex: [
        { t: 'number', q: 'Marketing trae 200, ventas cierra 120, la fábrica hace 90 e instalación 110. ¿Cuántas ventas se entregan?', a: 90, unit: 'ventas', why: 'La fábrica es la etapa más lenta.' },
        { t: 'tf', q: 'Si la restricción está en producción, más pauta aumenta las entregas.', a: false, why: 'Solo alarga la espera.' },
      ],
    },
    {
      id: 'u9l2', title: 'Stock y tiempos', icon: '🚚',
      read: [
        { h: 'Lead time y quiebres', body: `
<ul>
<li><b>Lead time</b>: si el plazo de entrega pasa de 15 a 45 días, baja la conversión y suben las cancelaciones.</li>
<li><b>Quiebre de stock</b>: invertir en un producto sin stock quema presupuesto y frustra clientes.</li>
<li><b>Sobrestock</b>: capital inmovilizado; marketing puede ayudar a rotarlo.</li>
</ul>
<p>Reunión mensual mínima con operaciones: stock por producto, capacidad, plazo de entrega, qué empujar y qué frenar.</p>` },
      ],
      ex: [
        { t: 'choice', q: 'Hay mucho stock acumulado de un producto. ¿Qué hace marketing?', o: ['Nada', 'Lo mueve con una acción puntual o combo', 'Deja de venderlo'], a: 1, why: 'Marketing dirige la demanda hacia donde la empresa la necesita.' },
        { t: 'choice', q: '¿Qué pasa si el plazo de entrega se triplica?', o: ['Nada', 'Baja la conversión y suben las cancelaciones', 'Sube el ticket'], a: 1, why: 'El cliente no espera indefinidamente.' },
      ],
    },
    {
      id: 'u9l3', title: 'Caja', icon: '🏦',
      read: [
        { h: 'Crecer necesita plata antes de cobrar', body: `
<div class="formula">Ciclo de caja = días de stock + días de cobro − días de pago a proveedores</div>
<p>Si el ciclo es de 60 días y crecés 30%, tenés que financiar 60 días de un negocio 30% más grande. Una empresa rentable puede quedarse sin caja por crecer rápido.</p>
<p>Marketing impacta la caja: promover transferencia acorta el cobro; las cuotas lo alargan o lo encarecen.</p>` },
      ],
      ex: [
        { t: 'number', q: '45 días de stock + 30 de cobro − 20 de pago a proveedores. ¿Ciclo de caja en días?', a: 55, unit: 'días', why: '45 + 30 − 20 = 55.' },
        { t: 'tf', q: 'Una empresa que gana plata no puede quedarse sin caja.', a: false, why: 'Si crece rápido, adelanta más plata de la que cobra.' },
      ],
    },
    {
      id: 'u9l4', title: 'Experiencia', icon: '⭐',
      read: [
        { h: 'Parte del producto', body: `
<p>Tiempos de respuesta, instalación, garantía y reclamos definen reseñas, recomendaciones y recompra.</p>
<p>Métricas mínimas: tiempo de respuesta, % de entregas en fecha, reclamos cada 100 ventas, reseñas.</p>
<div class="callout warn">El costo de una promesa incumplida no aparece en Meta, pero sí en el CAC de los próximos meses.</div>` },
      ],
      ex: [
        { t: 'choice', q: 'Las malas reseñas subieron por demoras. ¿Efecto en marketing?', o: ['Ninguno', 'Conseguir clientes se vuelve más caro', 'Más alcance'], a: 1, why: 'La gente lee reseñas antes de comprar.' },
        { t: 'match', q: 'Uní cada métrica con lo que mide.', pairs: [['Tiempo de respuesta', 'Atención comercial'], ['Entregas en fecha', 'Cumplimiento de la promesa'], ['Reclamos cada 100 ventas', 'Calidad de la experiencia']] },
      ],
    },
  ],
  lab: [
    'Mapeá la capacidad mensual de cada etapa de Durabox: ventas, producción, instalación, logística.',
    'Identificá la restricción actual y su número.',
    'Proponé una reunión mensual marketing–operaciones con 5 indicadores.',
  ],
  challenge: {
    title: 'Demanda récord, clientes enojados',
    intro: `<p>Tras una campaña exitosa, los leads crecieron 60%. Las ventas subieron 35%, pero el plazo de entrega pasó de 20 a 50 días, las cancelaciones de 3% a 12% y las reseñas negativas se triplicaron. La agencia quiere seguir invirtiendo “porque funciona”.</p>`,
    steps: [
      { t: 'choice', q: '¿Cuál es la restricción?', o: ['La demanda', 'Producción y entrega', 'Las creatividades'], a: 1, why: 'Sobra demanda y falta capacidad de entrega.' },
      { t: 'choice', q: 'Con exceso de demanda, ¿cuál es la oportunidad?', o: ['Más volumen', 'Más margen: precio y menos descuento', 'Más pauta'], a: 1, why: 'Si sobra demanda, se puede cobrar mejor.' },
      { t: 'tf', q: 'Conviene comunicar plazos reales aunque se pierdan algunas ventas.', a: true, why: 'Una promesa incumplida cuesta más que una venta perdida.' },
    ],
    reflect: 'Escribí el plan de acción en 5 puntos.',
    legacyKey: 'w9',
    solution: `<ol><li>Bajar la inversión al nivel que se puede atender.</li><li>Derivar demanda a productos con stock y capacidad.</li><li>Comunicar plazos reales.</li><li>Contactar a los clientes en espera.</li><li>Revisar precio y descuentos, y usar los datos de demanda para discutir ampliar capacidad.</li></ol>`,
  },
  cards: [
    { q: 'Cuello de botella', a: 'La etapa más lenta del sistema. Define cuánto se vende.' },
    { q: 'Ciclo de caja', a: 'Días de stock + días de cobro − días de pago.' },
    { q: 'Exceso de demanda', a: 'Oportunidad de margen: precio, menos descuento, derivar a productos con capacidad.' },
    { q: 'Lead time', a: 'Plazo de entrega. Afecta conversión, cancelaciones y reseñas.' },
  ],
});
