/* Brain — contenido del Mini MBA para Fractional CMO.
   Cada semana sigue la lógica: concepto → número → interpretación → decisión. */

const PRINCIPLES = {
  rule: '¿Y esto qué significa para el negocio?',
  ruleNote: 'Cada vez que aparezca una métrica de marketing, hacé esta pregunta. Si todavía no podés responderla, el análisis no terminó.',
  sequence: ['Dato', 'Métrica', 'Contexto', 'Hipótesis', 'Pregunta', 'Decisión'],
  chain: ['Inversión', 'Demanda', 'Ventas', 'Facturación', 'Margen', 'Resultado', 'Caja'],
  bar: 'Saber lo suficiente de negocio como para que una decisión de marketing nunca termine solamente en una métrica de marketing.',
};

const PHASES = [
  { id: 'f1', name: 'Fundamentos económicos', weeks: [1, 2, 3], desc: 'Leer una empresa como negocio: márgenes, rentabilidad y cuánto puede pagar marketing por vender.' },
  { id: 'f2', name: 'Motor comercial', weeks: [4, 5, 6], desc: 'Del lead a la venta: funnel, forecast y presupuesto con hipótesis económica.' },
  { id: 'f3', name: 'Palancas de valor', weeks: [7, 8, 9], desc: 'Precio, mix de productos y operaciones como restricciones y oportunidades.' },
  { id: 'f4', name: 'Dirección', weeks: [10, 11, 12], desc: 'Growth, estrategia y cómo defender un plan integral frente a dirección.' },
];

const WEEKS = [
  /* ───────────────────────── SEMANA 1 ───────────────────────── */
  {
    n: 1,
    title: 'Cómo funciona económicamente una empresa',
    goal: 'Leer ingresos, costos, gastos y resultado, y entender dónde impacta marketing.',
    sections: [
      {
        title: 'Marketing no produce métricas, produce efectos económicos',
        body: `
<p>Hasta cierto nivel profesional, marketing se piensa así:</p>
<div class="chain">Inversión → campañas → tráfico → leads → ventas</div>
<p>Para Dirección de Marketing ese mapa queda corto. El mapa completo es:</p>
<div class="chain strong">Inversión → demanda → ventas → facturación → margen → resultado → caja</div>
<p>Y alrededor hay <strong>restricciones</strong>: capacidad comercial, stock, producción, logística, financiación, operaciones.</p>
<table>
<thead><tr><th></th><th>Campaña A</th><th>Campaña B</th></tr></thead>
<tbody>
<tr><td>Inversión</td><td>$1 M</td><td>$1 M</td></tr>
<tr><td>Leads</td><td>1.000</td><td>600</td></tr>
<tr><td>CPL</td><td>$1.000</td><td>$1.667</td></tr>
<tr><td>Ventas</td><td>20</td><td>30</td></tr>
<tr><td>Ticket</td><td>$800.000</td><td>$800.000</td></tr>
<tr><td>Facturación</td><td>$16 M</td><td>$24 M</td></tr>
</tbody></table>
<p>Mirando Meta, A parece mejor (CPL 40% menor). Mirando el negocio, B genera 50% más ventas y $8 M más de facturación.</p>
<div class="callout"><strong>La eficiencia publicitaria no necesariamente equivale a eficiencia económica.</strong> Tu trabajo como directora empieza donde termina el dashboard publicitario.</div>`,
      },
      {
        title: 'La anatomía económica básica',
        body: `
<div class="chain strong">Ingresos → costos variables → margen de contribución → costos fijos → resultado</div>
<p>Una empresa factura <strong>$100 M</strong> por mes. Eso no significa que gane $100 M.</p>
<p>Los <strong>costos variables</strong> están asociados a cada venta: mercadería, materia prima, comisiones, envíos asumidos, comisiones de medios de pago. Supongamos $60 M.</p>
<div class="formula">$100 M − $60 M = <b>$40 M de margen de contribución</b></div>
<p>Esos $40 M pagan la <strong>estructura</strong> (costos fijos): alquileres, administración, sueldos estructurales, sistemas, honorarios. Si la estructura cuesta $30 M:</p>
<div class="formula">$40 M − $30 M = <b>$10 M de resultado</b></div>
<p>Este esquema simple ya te permite hacer mejores preguntas de marketing.</p>`,
      },
      {
        title: 'Facturación no es rentabilidad',
        body: `
<table>
<thead><tr><th></th><th>Producto A</th><th>Producto B</th></tr></thead>
<tbody>
<tr><td>Precio</td><td>$1.000.000</td><td>$700.000</td></tr>
<tr><td>Costo variable</td><td>$700.000</td><td>$350.000</td></tr>
<tr><td>Contribución</td><td>$300.000 (30%)</td><td>$350.000 (50%)</td></tr>
<tr><td>CAC</td><td>$70.000</td><td>$40.000</td></tr>
<tr><td><b>Contribución post-CAC</b></td><td><b>$230.000</b></td><td><b>$310.000</b></td></tr>
</tbody></table>
<p>A factura más por venta. B deja más dinero para cubrir estructura. Y ahora sumá complejidad: ¿A convierte mejor en WhatsApp? ¿B tiene problemas de stock? ¿A genera compras de accesorios? ¿B exige el doble de horas de producción?</p>
<div class="callout">La pregunta deja de ser <em>“¿qué campaña tiene mejor CPL?”</em> y pasa a ser <strong>“¿dónde conviene colocar el próximo peso de inversión de marketing?”</strong>. Esa es una pregunta de Dirección.</div>`,
      },
      {
        title: 'Los tres márgenes',
        body: `
<p><strong>Margen bruto</strong> = ventas − costo directo del producto. Vendés a $1.000.000 algo que cuesta $600.000 → $400.000 (40%).</p>
<p><strong>Margen de contribución</strong> = margen bruto − otros costos variables de concretar la venta.</p>
<div class="formula">$1.000.000 − $600.000 producto − $40.000 comisión − $50.000 medio de pago − $20.000 logística = <b>$290.000</b></div>
<p>Ese dinero “contribuye” a pagar la estructura y después a generar beneficio.</p>
<p><strong>Margen neto</strong>: después de descontar administración, alquileres, sueldos estructurales, impuestos, servicios y sistemas.</p>
<div class="callout warn">Una venta puede ser muy atractiva en facturación y mediocre en contribución. Eso tiene consecuencias enormes para marketing.</div>`,
      },
      {
        title: 'Aparece marketing: el CAC máximo',
        body: `
<p>Precio $1.000.000, costos variables $700.000 → <strong>$300.000 de contribución antes de adquisición</strong>.</p>
<ul>
<li>CAC $50.000 → quedan $250.000</li>
<li>CAC $200.000 → quedan $100.000</li>
<li>CAC $320.000 → <strong>destruye contribución</strong>, salvo que haya valor posterior (recompra, accesorios, referidos).</li>
</ul>
<div class="callout"><strong>¿Cuál es nuestro CAC máximo económicamente tolerable?</strong> Muchas empresas tienen objetivos de CPL (“menos de $5.000”) sin ningún criterio económico detrás: “porque antes costaba $4.000”, “porque la agencia dijo”.</div>`,
      },
      {
        title: 'De CAC máximo a CPL máximo',
        body: `
<div class="formula">CPL máximo = CAC máximo × conversión lead → venta</div>
<p>CAC máximo $100.000 y 10% de los leads compra → <b>CPL máximo $10.000</b>.</p>
<p>Si Ventas mejora la conversión de 10% a 20% → <b>CPL máximo $20.000</b>.</p>
<div class="callout">Meta podría pasar de CPL $10.000 a $15.000 y alguien diría “empeoraron las campañas un 50%”, mientras la empresa gana más porque Ventas duplicó la conversión. <strong>Una CMO no puede mirar marketing aislado de ventas.</strong></div>`,
      },
      {
        title: 'Punto de equilibrio y funnel al revés',
        body: `
<div class="formula">Punto de equilibrio = costos fijos ÷ contribución por venta</div>
<p>$20 M ÷ $250.000 = <b>80 ventas</b> para cubrir la estructura. A partir de ahí, cada venta suma resultado.</p>
<p>Cuando el CEO dice “tenemos que crecer”, no empieces por “subamos Meta”. Recorré el funnel <strong>de atrás hacia adelante</strong>:</p>
<div class="formula">50 ventas ÷ 25% cierre = 200 oportunidades ÷ 40% calificación = 500 leads × $8.000 CPL = <b>$4 M</b></div>
<blockquote>“Para 50 ventas incrementales necesitamos ~500 leads. Con el CPL histórico eso requiere ~$4 M. Pero Ventas tiene que poder procesar 500 leads y sostener 40% de calificación y 25% de cierre.”</blockquote>
<p>Eso es muy distinto de “propongo invertir $4 M en Meta”: el presupuesto tiene una hipótesis económica detrás.</p>`,
      },
      {
        title: 'Capacidad y las cinco palancas de crecimiento',
        body: `
<p>Si generás 70 ventas y la fábrica entrega 50, marketing generó demanda que la empresa no puede absorber: retrasos → reclamos → cancelaciones → vendedores saturados → reputación dañada → caja desordenada.</p>
<div class="callout">Pregunta obligatoria a Operaciones: <strong>“Si aumento la demanda un 30%, ¿la empresa puede atenderla?”</strong></div>
<div class="formula">Clientes × frecuencia × ticket = ingresos &nbsp;·&nbsp; ingresos × margen = capacidad económica</div>
<ol><li>Más clientes</li><li>Mayor conversión de los potenciales existentes</li><li>Mayor ticket</li><li>Mayor frecuencia / recompra</li><li>Mayor margen</li></ol>
<p>Marketing se obsesiona con la primera. Dirección trabaja todas las que puede influir. En Durabox: tapa → tapa + DRX, + bolso, + portaequipaje; precio; conversión de WhatsApp; distribuidores; Paraguay.</p>
<div class="callout strong">Marketing convierte recursos de la empresa en demanda; la empresa convierte esa demanda en resultado económico.</div>`,
      },
    ],
    cmoQuestions: [
      '¿Esos leads venden? ¿Con qué margen?',
      '¿Cuánto tarda la venta?',
      '¿Podemos absorber más demanda?',
      '¿Qué canal deja más rentabilidad, no más leads?',
    ],
    lab: [
      'Reconstruí la cascada de Durabox: facturación → costos variables → contribución → fijos → resultado (aunque sea con estimaciones).',
      'Calculá el punto de equilibrio mensual en cantidad de ventas.',
      'Listá qué datos no tenés y a quién se los pedirías (contador, ventas, producción).',
    ],
    case: {
      title: 'Caso 1 — Crecer 30% “metiendo más publicidad”',
      prompt: `
<p>Entrás como Directora de Marketing Externa de una empresa industrial. El dueño dice: <em>“Facturamos $100 M mensuales y quiero crecer 30%. Tenemos que meter más publicidad.”</em></p>
<table><tbody>
<tr><td>Facturación mensual</td><td>$100 M</td></tr>
<tr><td>Ventas</td><td>100</td></tr>
<tr><td>Ticket promedio</td><td>$1 M</td></tr>
<tr><td>Costo variable por venta</td><td>$650.000</td></tr>
<tr><td>Costos fijos</td><td>$25 M</td></tr>
<tr><td>Inversión publicitaria</td><td>$5 M</td></tr>
<tr><td>Leads</td><td>1.000</td></tr>
<tr><td>Ventas de marketing</td><td>50</td></tr>
<tr><td>Capacidad máxima</td><td>130 ventas/mes</td></tr>
</tbody></table>
<ol><li>¿La empresa parece rentable? ¿Por qué?</li><li>¿Cuánto deja cada venta antes de costos fijos?</li><li>¿Cuánto cuesta adquirir un cliente de marketing?</li><li>¿Qué riesgo ves en crecer 30% solo con publicidad?</li><li>¿Qué preguntarías antes de aprobar más presupuesto?</li></ol>`,
      starterAnswer: `1. Sí. Para alcanzar el costo fijo necesita 72 ventas, le quedan 58 ventas para generar rentabilidad dentro de su capacidad máxima.
2. $350.000
3. $10.000
4. Que la tasa de conversión es muy baja, y aumentar publicidad no cambia eso.
5. Cómo vamos a hacer para mejorar esa tasa de conversión. Que tenemos que conseguir 338.000 leads para conseguir 130 ventas, lo que significa mucho más de un 30% de aumento de la inversión.`,
      solution: `
<p><strong>1. Rentabilidad.</strong> Contribución $350.000; equilibrio $25 M ÷ $350.000 ≈ <b>72 ventas</b>. Vende 100 → está <b>28 ventas</b> por encima del equilibrio (no 58: eso compara contra la capacidad, no contra lo que vende hoy). Margen de capacidad libre: 130 − 100 = <b>30 ventas</b>.</p>
<p><strong>2.</strong> $1.000.000 − $650.000 = <b>$350.000</b> ✅</p>
<p><strong>3. CAC.</strong> $10.000 no es CAC (y el CPL es $5 M ÷ 1.000 = $5.000). <b>CAC = $5 M ÷ 50 = $100.000</b>. Cada venta de marketing aporta $350.000 − $100.000 = $250.000 antes de estructura.</p>
<p><strong>4. Riesgo.</strong> 5% de conversión: ¿es bajo? <em>Todavía no lo sabemos</em> — falta benchmark interno, calidad de leads, funnel y motivos de pérdida. El riesgo grande estaba escondido: <b>+30% = 130 ventas = 100% de la capacidad</b>. Antes de invertir, hablar con Operaciones: ¿130 es teórico o sostenible?</p>
<p><strong>5. La cuenta.</strong> Hacen falta 30 ventas adicionales, no 130 nuevas: 30 ÷ 5% = <b>600 leads</b> × $5.000 = <b>$3 M extra</b> → presupuesto de $5 M a $8 M = <b>+60%</b> para +30% de ventas, porque marketing genera sólo la mitad de las ventas. Y eso asumiendo linealidad (Meta se satura, el CPL sube, la calidad baja, los vendedores se saturan).</p>
<p><strong>Preguntas de CMO:</strong> ¿de dónde vienen las otras 50 ventas y cuál es su CAC? ¿los $350.000 incluyen todos los variables? ¿margen por producto? ¿cuántos leads atiende bien cada vendedor? Y la clave: <em>“quiero crecer 30%” no es “quiero 30% más clientes”</em> — ¿se puede crecer por ticket, precio, cross-sell, mix o recuperando pipeline?</p>
<div class="callout">Devolución: buena intuición (no aceptar “crecer = más publicidad”). A entrenar: no saltar a diagnosticar antes de calcular, y soltura con CPL vs CAC. Secuencia: <strong>Dato → métrica → contexto → hipótesis → pregunta → decisión</strong>.</div>`,
    },
    cards: [
      { q: '¿Cuál es el mapa económico completo de marketing?', a: 'Inversión → demanda → ventas → facturación → margen → resultado → caja, con restricciones de capacidad, stock, logística y financiación.' },
      { q: 'Margen de contribución', a: 'Precio − todos los costos variables de concretar la venta (producto, comisiones, medio de pago, logística). Es lo que queda para pagar estructura.' },
      { q: 'Punto de equilibrio (en ventas)', a: 'Costos fijos ÷ contribución por venta.' },
      { q: 'CPL máximo', a: 'CAC máximo × tasa de conversión lead → venta.' },
      { q: 'CPL vs CAC', a: 'CPL = inversión ÷ leads. CAC = inversión ÷ clientes adquiridos. Un CPL hermoso puede esconder un CAC desastroso.' },
      { q: 'Las 5 palancas de crecimiento', a: 'Más clientes, más conversión, más ticket, más frecuencia/recompra, más margen.' },
    ],
  },

  /* ───────────────────────── SEMANA 2 ───────────────────────── */
  {
    n: 2,
    title: 'Márgenes, rentabilidad y cuánto puede pagar marketing',
    goal: 'Calcular contribución, CAC máximo, ROAS de equilibrio y el efecto real de un descuento.',
    sections: [
      {
        title: 'Una venta, desarmada',
        body: `
<p>Precio <b>$1.000.000</b>. Costo del producto $550.000 → margen bruto <b>$450.000 (45%)</b>.</p>
<p>Pero además: comisión vendedor $40.000, medio de pago $30.000, logística $20.000.</p>
<div class="formula">$1.000.000 − $550.000 − $40.000 − $30.000 − $20.000 = <b>$360.000 de contribución antes de adquisición</b></div>
<div class="callout strong">Facturación ≠ margen ≠ ganancia.</div>`,
      },
      {
        title: 'CAC máximo: la frontera económica de marketing',
        body: `
<p>Con $360.000 de contribución y CAC $100.000, la venta aporta $260.000. ¿Podemos pagar hasta $359.999 de CAC? Matemáticamente sí; estratégicamente sería una locura.</p>
<p>Dirección decide: <em>“necesitamos conservar al menos $200.000 por venta”</em>.</p>
<div class="formula">CAC máximo = contribución − contribución a conservar = $360.000 − $200.000 = <b>$160.000</b></div>
<table><thead><tr><th>Campaña</th><th>CAC</th><th>Lectura de directora</th></tr></thead><tbody>
<tr><td>A</td><td>$80.000</td><td>Muy por debajo del límite → potencial para escalar</td></tr>
<tr><td>B</td><td>$120.000</td><td>Sigue siendo atractiva</td></tr>
<tr><td>C</td><td>$155.000</td><td>Cerca del límite → revisar calidad, producto, LTV</td></tr>
<tr><td>D</td><td>$190.000</td><td>No cumple la rentabilidad buscada… salvo que sus clientes recompren mucho (LTV)</td></tr>
</tbody></table>`,
      },
      {
        title: 'ROAS: “no lo sé todavía”',
        body: `
<div class="formula">ROAS = ingresos atribuidos ÷ inversión</div>
<p>Dos empresas con ROAS 5 ($25 M facturados con $5 M de ads):</p>
<ul>
<li><strong>Margen 50%</strong> → $12,5 M de contribución − $5 M = <b>+$7,5 M</b></li>
<li><strong>Margen 15%</strong> → $3,75 M − $5 M = <b>−$1,25 M</b></li>
</ul>
<div class="callout">Ante “tenemos ROAS 4 y está buenísimo”, la pregunta inmediata es: <strong>¿con qué margen?</strong></div>`,
      },
      {
        title: 'ROAS de equilibrio y ROAS objetivo',
        body: `
<div class="formula">ROAS de equilibrio = 1 ÷ margen de contribución</div>
<p>Margen 25% → ROAS 4 · margen 50% → ROAS 2 · margen 20% → ROAS 5.</p>
<p>En el equilibrio, marketing consume <em>toda</em> la contribución: queda $0 para estructura y beneficio. Por eso el objetivo está por encima. Si dirección define que marketing puede consumir como máximo el 10% de la facturación:</p>
<div class="formula">ROAS objetivo = 1 ÷ % máximo de marketing = 1 ÷ 0,10 = <b>10</b></div>`,
      },
      {
        title: 'MER: la lectura ejecutiva',
        body: `
<div class="formula">MER = facturación total ÷ inversión total en marketing</div>
<p>$100 M ÷ $10 M = MER 10. La atribución de plataformas es imperfecta: el cliente vio Instagram, buscó en Google, habló por WhatsApp y compró tres semanas después. El MER responde: <strong>por cada peso en marketing, ¿cuánto factura la empresa globalmente?</strong> No reemplaza CAC ni ROAS por canal, los complementa.</p>
<p>Si te dicen “Meta funciona bárbaro, ROAS 8”, preguntás: ¿ROAS de plataforma o ventas reales? ¿qué margen? ¿incluye cancelaciones? ¿primera compra o clientes existentes? ¿cuál es el CAC? ¿qué pasó cuando subió la inversión?</p>`,
      },
      {
        title: 'Descuentos: donde marketing destruye margen',
        body: `
<p>Precio $1.000.000, costo variable $700.000 → contribución $300.000 (30%). Hacemos <b>20% OFF</b>:</p>
<div class="formula">$800.000 − $700.000 = $100.000 → el precio cae 20%, la contribución cae <b>66,7%</b></div>
<p>Para generar la misma contribución total que con 100 ventas ($30 M) necesitás $30 M ÷ $100.000 = <b>300 ventas (+200%)</b>.</p>
<div class="formula">Aumento de ventas necesario = d ÷ (m − d) &nbsp;→&nbsp; 0,20 ÷ (0,30 − 0,20) = 200%</div>
<div class="callout warn">“Cyber Monday funcionó porque vendimos 80% más” puede significar que generamos <strong>menos</strong> contribución.</div>`,
      },
      {
        title: 'Las cuotas tampoco son gratis',
        body: `
<p>Transferencia $900.000 vs. 6 cuotas $1.050.000. Si financiar cuesta $130.000, el ingreso económico es <b>$920.000</b>. Recién ahí podés comparar. Y las cuotas pueden aumentar la conversión: quizá con menor margen unitario producen más contribución total.</p>
<p><strong>El mapa que tenés que poder reconstruir en cualquier cliente:</strong></p>
<div class="chain strong">Precio → − costo producto → margen bruto → − variables comerciales → contribución antes de adquisición → − CAC → contribución después de adquisición → − estructura → resultado</div>
<p>Marketing interviene en precio, mix, CAC, conversión, ticket, frecuencia, promoción y canal.</p>`,
      },
    ],
    cmoQuestions: [
      '¿Cuál es nuestro CAC máximo y quién lo definió?',
      '¿Este ROAS es de plataforma o de ventas reales? ¿Con qué margen?',
      '¿Cuánto tienen que subir las ventas para compensar este descuento?',
      '¿Cuánto nos cuesta realmente vender en cuotas?',
    ],
    lab: [
      'Calculá la contribución por producto de Durabox (tapa, DRX, bolso, portaequipaje).',
      'Definí un CAC máximo con la contribución que querés conservar.',
      'Calculá el ROAS de equilibrio de Durabox y comparalo con el ROAS que reporta Meta.',
      'Compará transferencia vs. cuotas con el costo financiero real.',
    ],
    case: {
      title: 'Caso 2 — ¿Aprobás el 15% OFF?',
      prompt: `
<p>Sos Fractional CMO de un e-commerce.</p>
<table><tbody>
<tr><td>Precio promedio</td><td>$200.000</td></tr>
<tr><td>Costo producto</td><td>$110.000</td></tr>
<tr><td>Comisión medio de pago</td><td>$10.000</td></tr>
<tr><td>Logística subsidiada</td><td>$10.000</td></tr>
<tr><td>CAC</td><td>$25.000</td></tr>
<tr><td>Ventas mensuales</td><td>500</td></tr>
<tr><td>Inversión ads</td><td>$12,5 M</td></tr>
<tr><td>Costos fijos</td><td>$20 M</td></tr>
</tbody></table>
<p>Marketing propone <b>15% OFF</b>. La agencia estima pasar de 500 a 650 ventas. El CAC se mantiene en $25.000 y los costos variables quedan constantes en pesos.</p>
<p>Armá vos el razonamiento: qué pasa antes vs. después, <strong>¿la aprobarías?</strong> y qué información te falta pedir antes de convertir la conclusión en decisión.</p>`,
      solution: `
<table><thead><tr><th></th><th>Hoy</th><th>Con 15% OFF</th></tr></thead><tbody>
<tr><td>Precio</td><td>$200.000</td><td>$170.000</td></tr>
<tr><td>Costos variables</td><td>$130.000</td><td>$130.000</td></tr>
<tr><td>Contribución antes de ads</td><td>$70.000 (35%)</td><td>$40.000 (23,5%)</td></tr>
<tr><td>Contribución post-CAC</td><td>$45.000</td><td>$15.000 (−66,7%)</td></tr>
<tr><td>Ventas</td><td>500</td><td>650</td></tr>
<tr><td>Contribución total post-ads</td><td>$22,5 M</td><td>$9,75 M</td></tr>
<tr><td>Costos fijos</td><td>$20 M</td><td>$20 M</td></tr>
<tr><td><b>Resultado</b></td><td><b>+$2,5 M</b></td><td><b>−$10,25 M</b></td></tr>
</tbody></table>
<p>Para igualar los $22,5 M con $15.000 por venta harían falta <b>1.500 ventas (+200%)</b>, no 650 (+30%). El punto de equilibrio sube de ~445 a ~1.334 ventas. <b>No la aprobaría</b> así.</p>
<p><strong>Información que falta:</strong> ¿las 150 ventas extra son incrementales o canibalizan compras que iban a ocurrir igual? ¿los compradores con descuento recompran (LTV)? ¿hay stock y capacidad logística para 650? ¿el CAC se sostiene con más volumen? ¿el objetivo es caja/liquidar stock o margen? ¿qué hace la competencia?</p>
<p><strong>Alternativas de directora:</strong> descuento acotado (por tiempo, producto de alto margen o segmento), regalo/bundle con bajo costo variable, envío gratis con ticket mínimo, cuotas sin interés si su costo es menor que el descuento.</p>`,
    },
    cards: [
      { q: 'ROAS de equilibrio', a: '1 ÷ margen de contribución (antes de publicidad). Margen 25% → ROAS 4.' },
      { q: 'ROAS objetivo', a: '1 ÷ % máximo de la facturación que puede consumir marketing. 10% → ROAS 10.' },
      { q: 'MER', a: 'Facturación total ÷ inversión total en marketing. Lectura ejecutiva, independiente de la atribución.' },
      { q: 'Aumento de ventas necesario para compensar un descuento', a: 'd ÷ (m − d), con d = descuento % y m = margen de contribución %.' },
      { q: 'CAC máximo', a: 'Contribución antes de adquisición − contribución mínima que la empresa quiere conservar por venta.' },
      { q: '“Tenemos ROAS 4, está buenísimo.” ¿Qué preguntás?', a: '¿Con qué margen? ¿Es ROAS de plataforma o ventas reales? ¿Incluye cancelaciones? ¿Primera compra?' },
    ],
  },

  /* ───────────────────────── SEMANA 3 ───────────────────────── */
  {
    n: 3,
    title: 'Unit economics',
    goal: 'Trabajar con ticket, CAC, LTV, recompra y payback para decidir cuánto pagar por un cliente.',
    sections: [
      {
        title: 'La unidad de análisis es el cliente, no la campaña',
        body: `
<p>Unit economics responde: <strong>¿cuánto valor económico genera un cliente y cuánto nos cuesta conseguirlo?</strong></p>
<ul>
<li><strong>Ticket promedio</strong> = facturación ÷ cantidad de pedidos.</li>
<li><strong>Frecuencia</strong> = pedidos ÷ clientes únicos en un período.</li>
<li><strong>Tasa de recompra</strong> = % de clientes que vuelve a comprar en un período definido.</li>
<li><strong>CAC</strong> = inversión de adquisición ÷ clientes <em>nuevos</em>.</li>
</ul>
<div class="callout warn">Cuidado con el CAC: si dividís por todas las ventas (incluyendo clientes que ya compraban), el CAC se ve artificialmente bajo.</div>`,
      },
      {
        title: 'CAC paid, CAC blended y CAC completo',
        body: `
<ul>
<li><strong>CAC paid</strong>: inversión en medios ÷ clientes atribuidos a medios.</li>
<li><strong>CAC blended</strong>: inversión total de marketing ÷ todos los clientes nuevos (incluye orgánico, referidos).</li>
<li><strong>CAC completo</strong>: suma agencia, herramientas, contenido, parte del equipo comercial.</li>
</ul>
<p>Ejemplo: $3 M en ads + $1 M en agencia y producción + $1 M de comisiones comerciales fijas. 40 clientes nuevos.</p>
<div class="formula">CAC paid = $3 M ÷ 40 = $75.000 · CAC completo = $5 M ÷ 40 = <b>$125.000</b></div>
<p>Para escalar campañas mirás el paid marginal; para decidir si el negocio de adquisición es sano, mirás el completo.</p>`,
      },
      {
        title: 'LTV: siempre en contribución, no en facturación',
        body: `
<div class="formula">LTV = ticket × margen de contribución % × compras esperadas en la vida del cliente</div>
<p>Ticket $200.000, margen 40%, compra 3 veces → LTV = $200.000 × 0,40 × 3 = <b>$240.000</b>.</p>
<p>Si lo calculás en facturación ($600.000) vas a justificar CAC que destruyen valor.</p>
<p><strong>Productos de una sola compra</strong> (como una tapa de camioneta): el LTV viene de accesorios, referidos y reposición. Ahí la pregunta es el <em>attach rate</em>: ¿qué % de compradores de tapa compra después un accesorio?</p>
<div class="callout">Usá horizontes conservadores (12–24 meses). Un LTV a “toda la vida” es una promesa, no un dato.</div>`,
      },
      {
        title: 'LTV/CAC y payback',
        body: `
<div class="formula">LTV/CAC = LTV ÷ CAC &nbsp;·&nbsp; Payback (meses) = CAC ÷ contribución mensual por cliente</div>
<ul>
<li><b>&lt; 1</b>: cada cliente destruye valor.</li>
<li><b>1–3</b>: frágil; depende de que se cumplan los supuestos.</li>
<li><b>≥ 3</b>: referencia habitual de salud (no ley universal).</li>
</ul>
<p>El <strong>payback</strong> importa por la caja: si el cliente devuelve el CAC en 14 meses, crecer rápido exige financiar esos 14 meses. En empresas medianas argentinas sin financiamiento externo, un payback corto vale tanto como un LTV alto.</p>`,
      },
      {
        title: '¿Cuánto puede pagar la empresa por un cliente?',
        body: `
<p>Tres criterios combinados:</p>
<ol>
<li><strong>Primera compra</strong>: CAC ≤ contribución de la primera venta − margen a conservar (negocios de compra única o con poca caja).</li>
<li><strong>LTV</strong>: CAC ≤ LTV ÷ 3 (negocios con recompra probada).</li>
<li><strong>Payback</strong>: CAC recuperado dentro de un plazo que la caja tolere.</li>
</ol>
<div class="callout">La decisión es de Dirección: cuánto “invertir” en clientes que pagan después depende de la caja y del riesgo, no sólo de la matemática.</div>`,
      },
    ],
    cmoQuestions: [
      '¿Qué porcentaje de las ventas son clientes nuevos?',
      '¿El CAC cambia por producto o canal?',
      '¿Qué compra un cliente después de su primera compra?',
      '¿En cuántos meses recuperamos lo que pagamos por un cliente?',
    ],
    lab: [
      'Separá ventas de clientes nuevos vs. recurrentes en Durabox.',
      'Calculá el attach rate de accesorios sobre compradores de tapa.',
      'Estimá LTV a 24 meses en contribución y el LTV/CAC por producto de entrada.',
    ],
    case: {
      title: 'Caso 3 — ¿Qué producto de entrada conviene adquirir?',
      prompt: `
<p>Una empresa vende dos productos de entrada:</p>
<table><thead><tr><th></th><th>Producto X</th><th>Producto Y</th></tr></thead><tbody>
<tr><td>Ticket primera compra</td><td>$900.000</td><td>$300.000</td></tr>
<tr><td>Margen de contribución</td><td>30%</td><td>45%</td></tr>
<tr><td>CAC</td><td>$150.000</td><td>$60.000</td></tr>
<tr><td>Compras adicionales en 24 meses</td><td>0,2 (ticket $150.000, margen 50%)</td><td>1,5 (ticket $250.000, margen 45%)</td></tr>
</tbody></table>
<p>¿Dónde pondrías el próximo peso? Calculá contribución primera compra post-CAC, LTV a 24 meses y LTV/CAC.</p>`,
      solution: `
<p><strong>X:</strong> primera compra $270.000 − CAC $150.000 = $120.000. LTV = $270.000 + 0,2 × $75.000 = <b>$285.000</b>. LTV/CAC = <b>1,9</b>.</p>
<p><strong>Y:</strong> primera compra $135.000 − $60.000 = $75.000. LTV = $135.000 + 1,5 × $112.500 = <b>$303.750</b>. LTV/CAC = <b>5,1</b>.</p>
<p>X deja más en la primera venta (mejor para la caja inmediata), pero Y genera más valor por peso invertido. Pondría el próximo peso en <b>Y</b>, verificando: ¿la recompra de 1,5 está medida o es supuesta? ¿escalar Y mantiene el CAC? ¿hay capacidad? Y mantendría X si la caja necesita contribución inmediata.</p>`,
    },
    cards: [
      { q: 'LTV (fórmula operativa)', a: 'Ticket × margen de contribución % × compras esperadas en el horizonte. Siempre en contribución, no en facturación.' },
      { q: 'Payback', a: 'CAC ÷ contribución mensual por cliente. Cuántos meses tarda el cliente en devolver lo que costó.' },
      { q: 'LTV/CAC saludable', a: 'Referencia ≥ 3. Menos de 1 destruye valor; 1–3 es frágil.' },
      { q: 'CAC blended vs paid', a: 'Blended: toda la inversión ÷ todos los clientes nuevos. Paid: medios ÷ clientes atribuidos a medios.' },
      { q: 'Attach rate', a: '% de compradores de un producto que también compran un complemento (accesorio, servicio).' },
    ],
  },

  /* ───────────────────────── SEMANA 4 ───────────────────────── */
  {
    n: 4,
    title: 'Funnel comercial',
    goal: 'Modelar lead → conversación → presupuesto → venta y detectar dónde se pierde negocio.',
    sections: [
      {
        title: 'El funnel termina en la venta, no en el lead',
        body: `
<div class="chain strong">Impresión → clic → lead → conversación → oportunidad → presupuesto → venta → entrega</div>
<p>Cada etapa tiene una <strong>tasa de conversión</strong>, un <strong>tiempo</strong> y un <strong>responsable</strong>. Marketing suele ser dueño hasta el lead; Dirección de Marketing necesita ver todo.</p>
<table><thead><tr><th>Etapa</th><th>Cantidad</th><th>Conversión</th></tr></thead><tbody>
<tr><td>Leads</td><td>1.000</td><td>—</td></tr>
<tr><td>Conversación real</td><td>600</td><td>60%</td></tr>
<tr><td>Presupuesto enviado</td><td>240</td><td>40%</td></tr>
<tr><td>Venta</td><td>60</td><td>25%</td></tr>
</tbody></table>
<p>Conversión total: 6%. Pero la pregunta útil es <strong>en qué etapa está la fuga más cara</strong>.</p>`,
      },
      {
        title: 'Dónde está la palanca',
        body: `
<p>Con el funnel anterior, mejorar <em>10 puntos</em> cada etapa (por separado):</p>
<ul>
<li>Lead → conversación 60% → 70%: ventas 60 → <b>70</b></li>
<li>Conversación → presupuesto 40% → 50%: 60 → <b>75</b></li>
<li>Presupuesto → venta 25% → 35%: 60 → <b>84</b></li>
</ul>
<p>Las etapas más bajas del funnel suelen tener más palanca por punto porcentual, pero también son más difíciles de mover. La decisión cruza <strong>impacto × facilidad × costo</strong>.</p>
<div class="callout">Antes de comprar más leads, preguntate si estás aprovechando los que ya pagaste.</div>`,
      },
      {
        title: 'Ciclo de venta y velocidad del pipeline',
        body: `
<p>El <strong>ciclo de venta</strong> es el tiempo entre el lead y la venta. Si es de 45 días, la campaña de este mes vende el mes que viene: evaluarla a los 10 días es un error.</p>
<div class="formula">Velocidad del pipeline = oportunidades × tasa de cierre × ticket ÷ ciclo (días)</div>
<p>200 oportunidades × 25% × $1 M ÷ 40 días = <b>$1,25 M por día</b> de facturación que fluye por el pipeline. Podés acelerar con más oportunidades, más cierre, más ticket o un ciclo más corto.</p>`,
      },
      {
        title: 'Capacidad comercial y calidad de leads',
        body: `
<p>Si un vendedor atiende bien 15 conversaciones activas por día y hay 3 vendedores, la capacidad es ~45. Duplicar leads sin duplicar capacidad <strong>baja la conversión</strong>: tiempos de respuesta más largos, seguimiento peor.</p>
<p>Medí la <strong>calidad por origen</strong>: conversión lead → venta y ticket por campaña, canal y producto. Un canal con CPL alto puede tener el mejor CAC.</p>
<p><strong>Motivos de pérdida</strong>: precio, plazo, no responde, compró a la competencia, no era el producto, financiación. Si no están registrados, es la primera tarea.</p>`,
      },
      {
        title: 'SLA marketing–ventas',
        body: `
<p>Un acuerdo explícito entre áreas:</p>
<ul>
<li>Qué es un lead calificado (definición compartida).</li>
<li>Tiempo máximo de primera respuesta (ej.: 15 minutos en horario comercial).</li>
<li>Cantidad mínima de intentos de contacto.</li>
<li>Cómo se registran estado y motivo de pérdida.</li>
<li>Reunión semanal con los números del funnel.</li>
</ul>
<div class="callout">Sin SLA, marketing culpa a la calidad del lead y ventas culpa a marketing. Con SLA, discuten con datos.</div>`,
      },
    ],
    cmoQuestions: [
      '¿En qué etapa se pierde más negocio y por qué?',
      '¿Cuánto tardamos en responder un lead?',
      '¿Qué origen de leads tiene mejor conversión a venta?',
      '¿Cuántos leads puede atender bien cada vendedor?',
    ],
    lab: [
      'Mapeá el funnel Meta → WhatsApp → oportunidad → presupuesto → venta de Durabox con cantidades de un mes.',
      'Medí el tiempo de primera respuesta en WhatsApp.',
      'Armá una lista de motivos de pérdida con el equipo comercial.',
    ],
    case: {
      title: 'Caso 4 — ¿Más leads o mejor funnel?',
      prompt: `
<p>Funnel mensual: 2.000 leads → 900 conversaciones → 270 presupuestos → 54 ventas. Ticket $800.000. Inversión $6 M (CPL $3.000). Tiempo medio de primera respuesta: 5 horas. Hay 2 vendedores.</p>
<p>La agencia propone duplicar la inversión. ¿Qué hacés?</p>`,
      solution: `
<p>Conversiones: lead → conversación <b>45%</b>, conversación → presupuesto <b>30%</b>, presupuesto → venta <b>20%</b>. CAC = $6 M ÷ 54 ≈ <b>$111.000</b>.</p>
<p>La primera fuga es grande: 55% de los leads nunca llega a conversación, con 5 horas de respuesta. Con 2 vendedores, duplicar a 4.000 leads probablemente empeore la respuesta y la conversión.</p>
<p>Si sólo llevamos lead → conversación a 60% (respuesta &lt; 15 min, automatización de primer contacto), las ventas pasan a <b>72 (+33%) sin invertir un peso más en medios</b>, y el CAC baja a ~$83.000.</p>
<p><b>Decisión:</b> no duplicar todavía. Primero arreglar respuesta y seguimiento, medir 4–6 semanas, y escalar inversión con la capacidad comercial dimensionada.</p>`,
    },
    cards: [
      { q: 'Velocidad del pipeline', a: 'Oportunidades × tasa de cierre × ticket ÷ duración del ciclo.' },
      { q: 'Ciclo de venta', a: 'Tiempo entre que entra un lead y se concreta la venta. Define cuándo se puede evaluar una campaña.' },
      { q: 'SLA marketing–ventas', a: 'Acuerdo sobre definición de lead calificado, tiempo de respuesta, intentos de contacto y registro de motivos de pérdida.' },
      { q: '¿Por qué duplicar leads puede bajar las ventas por lead?', a: 'Porque la capacidad comercial se satura: responde más tarde y hace peor seguimiento.' },
    ],
  },

  /* ───────────────────────── SEMANA 5 ───────────────────────── */
  {
    n: 5,
    title: 'Forecast de ventas',
    goal: 'Proyectar ventas desde tráfico, leads y conversión, y construir escenarios.',
    sections: [
      {
        title: 'Un forecast es un conjunto de supuestos explícitos',
        body: `
<p>No es adivinar un número. Es decir: <strong>“si se cumplen estos supuestos, pasa esto”</strong>. Lo valioso es que los supuestos se puedan discutir y monitorear.</p>
<div class="formula">Ventas = inversión ÷ CPL × conversión lead → venta</div>
<p>$5 M ÷ $5.000 × 5% = <b>50 ventas</b>. Tres supuestos: inversión, CPL y conversión. Cada uno tiene un dueño que puede confirmarlo.</p>`,
      },
      {
        title: 'Run-rate vs. funnel',
        body: `
<ul>
<li><strong>Run-rate</strong>: “vendimos 100 por mes los últimos 3 meses → vamos a vender 100”. Rápido, ignora cambios.</li>
<li><strong>Funnel-based</strong>: proyecta desde leads y tasas. Permite simular decisiones.</li>
<li><strong>Pipeline-based</strong> (ventas): oportunidades abiertas × probabilidad por etapa. Bueno para el corto plazo.</li>
</ul>
<p>Usá dos métodos y compará. Si difieren mucho, algún supuesto está mal.</p>`,
      },
      {
        title: 'Escenarios',
        body: `
<table><thead><tr><th></th><th>Pesimista</th><th>Base</th><th>Optimista</th></tr></thead><tbody>
<tr><td>Inversión</td><td>$8 M</td><td>$8 M</td><td>$8 M</td></tr>
<tr><td>CPL</td><td>$6.500</td><td>$5.500</td><td>$5.000</td></tr>
<tr><td>Leads</td><td>1.231</td><td>1.455</td><td>1.600</td></tr>
<tr><td>Conversión</td><td>4%</td><td>5%</td><td>5,5%</td></tr>
<tr><td>Ventas</td><td><b>49</b></td><td><b>73</b></td><td><b>88</b></td></tr>
</tbody></table>
<p>Fijate: al subir inversión, el CPL base ya no es el histórico ($5.000). <strong>Los rendimientos son decrecientes</strong>: cada peso extra suele comprar leads más caros.</p>
<div class="callout">Presentá siempre el rango, y decí qué tendría que pasar para estar en cada escenario.</div>`,
      },
      {
        title: 'Estacionalidad y desfase',
        body: `
<p><strong>Estacionalidad</strong>: comparar contra el mismo mes del año anterior, no contra el mes previo. Aguinaldo, vacaciones, Hot Sale, temporada de rutas.</p>
<p><strong>Desfase (lag)</strong>: con ciclo de 30–45 días, las ventas de este mes vienen de leads del mes pasado. Un forecast serio usa <em>cohortes de leads</em>: de los leads de marzo, ¿cuántos compraron en marzo, abril y mayo?</p>
<div class="formula">Ventas de mayo = leads de mayo × %mes 0 + leads de abril × %mes 1 + leads de marzo × %mes 2</div>`,
      },
    ],
    cmoQuestions: [
      '¿Qué supuestos sostienen este número y quién los valida?',
      '¿Qué pasa con el CPL si subimos la inversión?',
      '¿Cuántos días tarda un lead en convertirse en venta?',
      '¿Contra qué período estamos comparando?',
    ],
    lab: [
      'Armá un forecast de 3 meses de Durabox en tres escenarios.',
      'Medí qué % de los leads de un mes compra en ese mes, el siguiente y el subsiguiente.',
      'Identificá los 3 meses de mayor y menor demanda del año.',
    ],
    case: {
      title: 'Caso 5 — El dueño quiere un número',
      prompt: `
<p>El dueño pregunta: <em>“Si invierto $10 M el próximo mes, ¿cuánto vendo?”</em>. Histórico: $6 M de inversión, CPL $4.000, conversión lead → venta 6%, 70% de las ventas ocurre el mismo mes y 30% el siguiente. Ticket $900.000.</p>
<p>¿Qué le respondés?</p>`,
      solution: `
<p>Base lineal: $10 M ÷ $4.000 = 2.500 leads × 6% = 150 ventas. Pero el CPL va a subir. Con escenarios de CPL $4.500 / $5.000 / $5.500 → 2.222 / 2.000 / 1.818 leads → <b>133 / 120 / 109 ventas</b> totales de esa cohorte.</p>
<p>Por el desfase, el mes próximo verás ~70%: <b>~93 / 84 / 76</b> ventas de esa inversión, y el resto al mes siguiente.</p>
<blockquote>“Con $10 M esperaría entre 110 y 135 ventas de esa cohorte, de las cuales ~70% se concretan el mismo mes. El supuesto más frágil es el CPL al escalar 67%: propongo subir en dos tramos y medir.”</blockquote>
<p>Y verificar capacidad: ¿pueden atender y entregar ese volumen?</p>`,
    },
    cards: [
      { q: 'Forecast funnel-based', a: 'Inversión ÷ CPL × conversión lead → venta (× ticket para facturación).' },
      { q: 'Rendimientos decrecientes', a: 'Al aumentar inversión, cada peso adicional compra leads/clientes más caros. El CPL marginal sube.' },
      { q: 'Cohorte de leads', a: 'Grupo de leads de un mismo período, seguido en el tiempo para ver cuándo convierten.' },
      { q: '¿Cómo se presenta un forecast?', a: 'Como rango (pesimista/base/optimista) con supuestos explícitos y qué tendría que pasar para cada escenario.' },
    ],
  },

  /* ───────────────────────── SEMANA 6 ───────────────────────── */
  {
    n: 6,
    title: 'Presupuesto de marketing',
    goal: 'Decidir cuánto invertir, cómo distribuirlo y bajo qué condiciones escalar o recortar.',
    sections: [
      {
        title: 'Tres formas de fijar el presupuesto',
        body: `
<ul>
<li><strong>% de facturación</strong> (ej. 5–10%): simple, pero mira hacia atrás. Si las ventas caen, recorta justo cuando hace falta demanda.</li>
<li><strong>Igual que el año pasado + inflación</strong>: inercia, sin hipótesis.</li>
<li><strong>Objetivo y tarea</strong> (bottom-up): desde el objetivo de ventas, recorrés el funnel al revés y llegás a la inversión necesaria. <b>Este es el de una directora.</b></li>
</ul>
<p>Después contrastás: ¿la inversión resultante cabe en el % de facturación que la empresa tolera? ¿el CAC resultante está debajo del máximo?</p>`,
      },
      {
        title: 'Promedio vs. marginal',
        body: `
<p>Mes 1: $5 M → 50 clientes (CAC $100.000). Mes 2: $8 M → 70 clientes (CAC promedio $114.000).</p>
<div class="formula">CAC marginal = Δ inversión ÷ Δ clientes = $3 M ÷ 20 = <b>$150.000</b></div>
<p>El promedio dice “subió poco”. El marginal dice que <strong>los últimos 20 clientes costaron 50% más</strong>. Si tu CAC máximo es $140.000, los últimos $3 M destruyen valor aunque el promedio se vea bien.</p>
<div class="callout">Las decisiones de escalar se toman con el CAC <strong>marginal</strong>, no con el promedio.</div>`,
      },
      {
        title: 'Distribuir: 70/20/10',
        body: `
<ul>
<li><b>70%</b> en lo probado (canales y campañas con economics conocidos).</li>
<li><b>20%</b> en optimización y extensiones (nuevas audiencias, formatos, productos).</li>
<li><b>10%</b> en experimentos (canales nuevos, mercados, ideas).</li>
</ul>
<p>Más allá de canales, el presupuesto incluye contenido, herramientas, agencia, eventos, CRM. Separá <strong>inversión de trabajo</strong> (compra demanda) de <strong>inversión de base</strong> (la que hace funcionar el sistema).</p>`,
      },
      {
        title: 'Reglas de escalar y recortar',
        body: `
<p>Definilas antes de empezar, no cuando aparece la ansiedad:</p>
<ul>
<li><b>Escalar</b> si CAC marginal &lt; 80% del CAC máximo durante 2–3 semanas y hay capacidad comercial y operativa. Subir de a 20–30%.</li>
<li><b>Mantener</b> si está entre 80% y 100% del máximo.</li>
<li><b>Recortar</b> si supera el máximo por más de un ciclo de venta completo (no antes: el desfase engaña).</li>
</ul>
<p>Un presupuesto con <strong>gates</strong>: “liberamos el segundo tramo si en el primero el CAC se mantuvo bajo $X”. Reduce el riesgo y genera confianza con el dueño.</p>`,
      },
    ],
    cmoQuestions: [
      '¿De qué objetivo de ventas sale este presupuesto?',
      '¿Cuánto costaron los últimos clientes, no el promedio?',
      '¿Qué condiciones tienen que cumplirse para liberar más inversión?',
      '¿Qué parte del presupuesto es experimentación?',
    ],
    lab: [
      'Armá el presupuesto de Durabox para el próximo trimestre por objetivo y tarea.',
      'Calculá el CAC marginal de los últimos aumentos de inversión.',
      'Escribí las reglas de escalar/mantener/recortar con números.',
    ],
    case: {
      title: 'Caso 6 — Duplicar el presupuesto',
      prompt: `
<p>Contribución por venta antes de adquisición: $300.000. Dirección quiere conservar $180.000. Datos de los últimos meses:</p>
<table><thead><tr><th>Mes</th><th>Inversión</th><th>Clientes</th></tr></thead><tbody>
<tr><td>Abril</td><td>$4 M</td><td>40</td></tr>
<tr><td>Mayo</td><td>$6 M</td><td>55</td></tr>
<tr><td>Junio</td><td>$8 M</td><td>66</td></tr>
</tbody></table>
<p>El CEO quiere pasar a $16 M. ¿Qué recomendás?</p>`,
      solution: `
<p>CAC máximo = $300.000 − $180.000 = <b>$120.000</b>.</p>
<p>CAC promedio: abril $100.000, mayo $109.000, junio $121.000.<br>CAC marginal: abril→mayo $2 M ÷ 15 = <b>$133.000</b>; mayo→junio $2 M ÷ 11 = <b>$182.000</b>.</p>
<p>Ya el último tramo supera el CAC máximo. Duplicar a $16 M en los mismos canales probablemente compre clientes a $200.000+ y destruya contribución.</p>
<p><b>Recomendación:</b> volver a ~$6 M en lo probado, usar 10–20% para testear nuevos canales/productos con mejor CAC, trabajar conversión (que baja el CAC en todos los niveles) y liberar más inversión sólo con gates de CAC marginal.</p>`,
    },
    cards: [
      { q: 'CAC marginal', a: 'Δ inversión ÷ Δ clientes. Cuánto costaron los clientes adicionales de la última suba de inversión.' },
      { q: 'Presupuesto por objetivo y tarea', a: 'Desde el objetivo de ventas, recorrer el funnel al revés hasta la inversión necesaria, y contrastarlo con CAC máximo y % de facturación.' },
      { q: 'Regla 70/20/10', a: '70% en lo probado, 20% en optimización/extensiones, 10% en experimentos.' },
      { q: '¿Cuándo recortar una campaña?', a: 'Cuando supera el CAC máximo por más de un ciclo de venta completo (no antes, por el desfase).' },
    ],
  },

  /* ───────────────────────── SEMANA 7 ───────────────────────── */
  {
    n: 7,
    title: 'Pricing',
    goal: 'Entender precio, descuento, cuotas, promociones, elasticidad y margen.',
    sections: [
      {
        title: 'El precio es la palanca más potente',
        body: `
<p>Contribución 30%. Subir el precio 5% (si el volumen se mantiene) lleva la contribución de $300.000 a $350.000: <b>+16,7%</b> de contribución.</p>
<p>Para lograr lo mismo por volumen necesitás vender 16,7% más, con su costo de adquisición. Por eso el precio es la palanca con mayor efecto sobre el resultado… y la que marketing menos discute.</p>
<div class="formula">Caída de ventas tolerable al subir precio = p ÷ (m + p)</div>
<p>Con margen 30% y suba de 5%: 0,05 ÷ 0,35 = <b>14,3%</b>. Podés perder hasta 14% del volumen y ganar lo mismo.</p>`,
      },
      {
        title: 'Valor percibido y elasticidad',
        body: `
<p>El cliente no compara tu precio con tu costo: lo compara con <strong>sus alternativas</strong> y con el valor que percibe. Marketing construye ese valor: posicionamiento, garantía, prueba social, servicio, instalación.</p>
<p><strong>Elasticidad</strong>: cuánto cambia la demanda ante un cambio de precio. Es alta en productos comparables y commoditizados; baja cuando hay diferenciación, urgencia o poca alternativa.</p>
<p>No se calcula en teoría: se <strong>testea</strong> (por producto, canal, región o período) y se observa.</p>`,
      },
      {
        title: 'Promociones que no destruyen margen',
        body: `
<ul>
<li><b>Regalo de alto valor percibido y bajo costo</b> (un accesorio que cuesta $15.000 y se percibe $60.000) en lugar de 10% OFF.</li>
<li><b>Bundle</b>: tapa + accesorio con descuento sobre el accesorio, no sobre la tapa. Sube ticket y attach rate.</li>
<li><b>Descuento condicionado</b>: por ticket mínimo, por tiempo, por stock a liquidar.</li>
<li><b>Envío gratis</b> sobre un umbral.</li>
</ul>
<div class="callout">Toda promoción se evalúa por <strong>contribución incremental</strong>, no por ventas incrementales.</div>`,
      },
      {
        title: 'Precio en Argentina: cuotas, transferencia e inflación',
        body: `
<ul>
<li><b>Precio de lista vs. precio efectivo</b>: después de descuento por transferencia, costo de cuotas, comisiones del medio de pago.</li>
<li><b>Cuotas sin interés</b>: las paga la empresa. Su costo es un descuento encubierto. Compará: ¿qué convierte más por peso de margen cedido, 10% por transferencia o 6 cuotas sin interés?</li>
<li><b>Inflación y reposición</b>: si vendés hoy a precio que no repone el stock mañana, estás descapitalizando la empresa aunque “ganes”.</li>
<li><b>Precio por canal</b>: distribuidor, e-commerce y venta directa necesitan una arquitectura coherente para no canibalizarse.</li>
</ul>`,
      },
    ],
    cmoQuestions: [
      '¿Cuándo fue la última vez que se testeó el precio?',
      '¿Cuál es el precio efectivo después de cuotas y comisiones?',
      '¿Esta promoción aumenta la contribución total o sólo las ventas?',
      '¿El precio de hoy repone el stock de mañana?',
    ],
    lab: [
      'Calculá el precio efectivo de una tapa Durabox por medio de pago (transferencia, tarjeta, cuotas).',
      'Diseñá una promo alternativa al % OFF con accesorios y calculá su contribución.',
      'Calculá cuánto volumen podrías perder con una suba de 5%.',
    ],
    case: {
      title: 'Caso 7 — Cuotas vs. transferencia',
      prompt: `
<p>Precio de lista $1.200.000. Costo variable $780.000. Opciones:</p>
<ul><li>A: 10% de descuento por transferencia.</li><li>B: 6 cuotas sin interés con costo financiero de 14% para la empresa.</li></ul>
<p>Hoy, 40% paga en transferencia y 60% en cuotas. ¿Qué opción conviene empujar en la comunicación?</p>`,
      solution: `
<p>A: ingreso $1.080.000 → contribución <b>$300.000</b>.<br>B: ingreso efectivo $1.200.000 × 0,86 = $1.032.000 → contribución <b>$252.000</b>.</p>
<p>Por venta, la transferencia deja $48.000 más (+19%) y además mejora la caja (cobro inmediato). Comunicar fuerte el precio por transferencia conviene… <em>si no cae la conversión</em>. B debe convertir al menos 19% más que A para igualar la contribución total.</p>
<p>Siguiente paso: medir conversión por medio de pago y testear un mensaje que destaque transferencia para quien puede pagar así, sin eliminar cuotas para quien las necesita.</p>`,
    },
    cards: [
      { q: 'Caída de volumen tolerable al subir precio', a: 'p ÷ (m + p), con p = suba % y m = margen de contribución %.' },
      { q: 'Elasticidad', a: 'Cuánto cambia la demanda ante un cambio de precio. Se testea, no se supone.' },
      { q: 'Cuotas sin interés', a: 'Un descuento encubierto: el costo financiero lo paga la empresa.' },
      { q: '¿Cómo se evalúa una promoción?', a: 'Por contribución incremental total, no por ventas incrementales.' },
    ],
  },

  /* ───────────────────────── SEMANA 8 ───────────────────────── */
  {
    n: 8,
    title: 'Portfolio y mix',
    goal: 'Decidir qué productos empujar según demanda, margen, CAC y capacidad.',
    sections: [
      {
        title: 'No todos los productos merecen el mismo peso',
        body: `
<p>Ordená cada producto por cuatro variables:</p>
<ul>
<li><b>Contribución post-CAC</b> por unidad.</li>
<li><b>Demanda</b> disponible (búsquedas, consultas, mercado).</li>
<li><b>Capacidad</b> de producirlo/entregarlo.</li>
<li><b>Rol estratégico</b>: entrada, rentabilidad, fidelización, imagen.</li>
</ul>
<div class="formula">Contribución total por producto = unidades × (contribución unitaria − CAC)</div>`,
      },
      {
        title: 'La matriz margen × demanda',
        body: `
<table><thead><tr><th></th><th>Demanda alta</th><th>Demanda baja</th></tr></thead><tbody>
<tr><td><b>Margen alto</b></td><td>⭐ Empujar: más inversión</td><td>Construir demanda / nicho</td></tr>
<tr><td><b>Margen bajo</b></td><td>Producto de entrada: vender complementos</td><td>Revisar o discontinuar</td></tr>
</tbody></table>
<p>Un producto de margen bajo y mucha demanda puede ser valioso si <strong>abre la puerta</strong> a compras de alto margen (attach rate). Sin esa segunda compra, es volumen que no paga la estructura.</p>`,
      },
      {
        title: 'Mix y margen promedio',
        body: `
<p>Dos meses con la misma facturación ($100 M) pueden dejar contribuciones muy distintas:</p>
<table><thead><tr><th></th><th>Mes 1</th><th>Mes 2</th></tr></thead><tbody>
<tr><td>Producto A (margen 25%)</td><td>$70 M</td><td>$40 M</td></tr>
<tr><td>Producto B (margen 50%)</td><td>$30 M</td><td>$60 M</td></tr>
<tr><td>Contribución</td><td><b>$32,5 M</b></td><td><b>$40 M</b></td></tr>
</tbody></table>
<p>Sin vender un peso más, el mes 2 deja 23% más contribución. <strong>Marketing decide el mix</strong> con lo que comunica, dónde invierte y qué promociona.</p>`,
      },
      {
        title: 'Cross-sell y attach rate',
        body: `
<div class="formula">Ticket promedio = ticket base + attach rate × ticket del complemento</div>
<p>Tapa $1.000.000 + 30% compra accesorio de $150.000 → ticket promedio $1.045.000. Si el attach rate sube a 50%: $1.075.000 (+3%), y como el accesorio suele tener mejor margen, la contribución sube más.</p>
<p>Momentos de cross-sell: en el presupuesto (bundle), en la entrega/instalación, post-venta (30–90 días).</p>`,
      },
    ],
    cmoQuestions: [
      '¿Qué producto deja más contribución después de CAC?',
      '¿Qué producto abre la puerta a la segunda compra?',
      '¿Cómo cambió el mix este mes y qué hizo con el margen?',
      '¿Qué productos tienen capacidad disponible?',
    ],
    lab: [
      'Ubicá cada línea de Durabox en la matriz margen × demanda.',
      'Calculá la contribución total por producto en los últimos 3 meses.',
      'Diseñá 2 momentos de cross-sell en el recorrido del cliente.',
    ],
    case: {
      title: 'Caso 8 — ¿Qué producto empujar?',
      prompt: `
<table><thead><tr><th></th><th>Tapa estándar</th><th>Tapa premium</th><th>Accesorio</th></tr></thead><tbody>
<tr><td>Precio</td><td>$900.000</td><td>$1.400.000</td><td>$180.000</td></tr>
<tr><td>Margen contribución</td><td>28%</td><td>38%</td><td>55%</td></tr>
<tr><td>CAC</td><td>$90.000</td><td>$220.000</td><td>$20.000 (remarketing)</td></tr>
<tr><td>Capacidad libre/mes</td><td>10</td><td>25</td><td>sin límite</td></tr>
</tbody></table>
<p>Tenés $3 M extra este mes. ¿Dónde los ponés?</p>`,
      solution: `
<p>Contribución post-CAC por unidad: estándar $252.000 − $90.000 = <b>$162.000</b>; premium $532.000 − $220.000 = <b>$312.000</b>; accesorio $99.000 − $20.000 = <b>$79.000</b>.</p>
<p>Por peso invertido: estándar $162.000/$90.000 = 1,8; premium 1,42; accesorio <b>3,95</b>.</p>
<p>Con $3 M: accesorio rinde más por peso pero depende del tamaño de la base de compradores (remarketing limitado). Estándar sólo tiene 10 unidades libres ($0,9 M). Premium tiene capacidad.</p>
<p><b>Propuesta:</b> agotar remarketing de accesorios (ej. $0,6 M → 30 unidades, $2,4 M de contribución), cubrir las 10 estándar ($0,9 M → $1,6 M), y el resto en premium ($1,5 M → ~7 unidades, $2,1 M). Verificar si el CAC se sostiene en cada tramo.</p>`,
    },
    cards: [
      { q: 'Matriz margen × demanda: margen bajo, demanda alta', a: 'Producto de entrada: vale si abre la puerta a complementos de alto margen.' },
      { q: 'Efecto mix', a: 'Misma facturación con distinto mix de productos genera distinta contribución.' },
      { q: 'Ticket promedio con cross-sell', a: 'Ticket base + attach rate × ticket del complemento.' },
      { q: 'Retorno por peso invertido en un producto', a: 'Contribución post-CAC ÷ CAC.' },
    ],
  },

  /* ───────────────────────── SEMANA 9 ───────────────────────── */
  {
    n: 9,
    title: 'Operaciones + marketing',
    goal: 'Entender stock, capacidad, logística, atención y ventas como restricciones del crecimiento.',
    sections: [
      {
        title: 'El cuello de botella manda',
        body: `
<p>La capacidad de un sistema la define su <strong>etapa más lenta</strong>. Si marketing genera 200 leads, ventas atiende 150, producción fabrica 100 e instalación hace 80, la empresa vende <b>80</b>.</p>
<div class="chain">Demanda 200 → Ventas 150 → Producción 100 → <b>Instalación 80</b></div>
<p>Más inversión en marketing no mueve el resultado: mueve la fila de espera. La palanca está en la restricción.</p>
<div class="callout">Primera pregunta de Dirección: <strong>¿cuál es la restricción hoy?</strong> Puede ser demanda, pero muchas veces no lo es.</div>`,
      },
      {
        title: 'Stock y lead time',
        body: `
<ul>
<li><b>Lead time</b>: tiempo desde el pedido hasta la entrega. Si sube de 15 a 45 días, la conversión baja y las cancelaciones suben.</li>
<li><b>Quiebre de stock</b>: invertir en un producto sin stock quema presupuesto y genera frustración.</li>
<li><b>Sobrestock</b>: capital inmovilizado. Marketing puede ayudar a rotarlo (promoción dirigida, bundle).</li>
</ul>
<p>Reunión mensual mínima marketing–operaciones: stock por producto, capacidad, lead time, productos a empujar y a frenar.</p>`,
      },
      {
        title: 'Caja: crecer también consume dinero',
        body: `
<p>Para vender más hay que comprar materia prima, pagar sueldos y pauta <strong>antes</strong> de cobrar.</p>
<div class="formula">Ciclo de caja = días de stock + días de cobro − días de pago a proveedores</div>
<p>Si el ciclo es 60 días y crecés 30%, necesitás financiar 60 días de un negocio 30% más grande. Una empresa rentable puede quedarse sin caja por crecer rápido.</p>
<p>Marketing impacta la caja: promover transferencia/contado acorta el cobro; las cuotas lo alargan (o lo encarecen si se adelantan).</p>`,
      },
      {
        title: 'Experiencia y atención como parte del producto',
        body: `
<p>Tiempos de respuesta, instalación, garantía y reclamos son <strong>marketing</strong>: definen reseñas, referidos y recompra.</p>
<p>Métricas mínimas: tiempo de respuesta, % de entregas en fecha, reclamos por cada 100 ventas, NPS o reseñas.</p>
<div class="callout warn">El costo de una promesa incumplida no aparece en el dashboard de Meta, pero sí en el CAC de los próximos meses.</div>`,
      },
    ],
    cmoQuestions: [
      '¿Cuál es la restricción del sistema hoy?',
      '¿Si aumento la demanda 30%, qué se rompe primero?',
      '¿Qué productos tienen stock y cuáles no?',
      '¿Cuántos días tarda en volver a la caja el peso que invertimos?',
    ],
    lab: [
      'Mapeá la capacidad mensual de cada etapa de Durabox (ventas, producción, instalación, logística).',
      'Identificá la restricción actual y su número.',
      'Proponé una reunión mensual marketing–operaciones con 5 indicadores.',
    ],
    case: {
      title: 'Caso 9 — Demanda récord, clientes enojados',
      prompt: `
<p>Tras una campaña exitosa, los leads crecieron 60%. Las ventas subieron 35%, pero el lead time pasó de 20 a 50 días, las cancelaciones de 3% a 12% y las reseñas negativas se triplicaron. La agencia propone seguir invirtiendo “porque funciona”. ¿Qué hacés?</p>`,
      solution: `
<p>El sistema llegó a su restricción (producción/entrega). Seguir invirtiendo agranda la fila, sube cancelaciones y daña la reputación — lo que encarece el CAC futuro.</p>
<p><b>Acciones:</b> 1) bajar inversión al nivel que la capacidad absorbe; 2) desviar demanda a productos con stock/capacidad; 3) comunicar plazos reales (mejor perder una venta que generar un reclamo); 4) evaluar suba de precio o reducción de descuentos, ya que hay exceso de demanda; 5) gestionar a los clientes en espera (contacto proactivo); 6) con Dirección, evaluar ampliar capacidad usando los números de demanda como argumento.</p>
<p>Exceso de demanda es una oportunidad de <strong>margen</strong>, no de volumen.</p>`,
    },
    cards: [
      { q: 'Restricción / cuello de botella', a: 'La etapa más lenta del sistema; define cuánto puede vender la empresa.' },
      { q: 'Ciclo de caja', a: 'Días de stock + días de cobro − días de pago a proveedores.' },
      { q: '¿Qué hacer con exceso de demanda?', a: 'Capturar margen (precio, menos descuento), derivar a productos con capacidad, comunicar plazos reales.' },
      { q: 'Lead time', a: 'Tiempo desde el pedido hasta la entrega. Afecta conversión, cancelaciones y reseñas.' },
    ],
  },

  /* ───────────────────────── SEMANA 10 ───────────────────────── */
  {
    n: 10,
    title: 'Growth',
    goal: 'Separar el crecimiento en adquisición, conversión, ticket, frecuencia, retención y expansión.',
    sections: [
      {
        title: 'El árbol de crecimiento',
        body: `
<div class="formula">Ingresos = tráfico × conversión × ticket × frecuencia (× margen = contribución)</div>
<p>Cada rama tiene sub-ramas: tráfico = alcance × CTR; conversión = lead → oportunidad → venta; ticket = precio + attach; frecuencia = recompra.</p>
<p>Como son multiplicadores, <strong>mejorar 10% cuatro variables da +46%</strong> (1,1⁴), no +40%. Los pequeños avances en varias palancas superan al gran esfuerzo en una sola.</p>`,
      },
      {
        title: 'Retención y cohortes',
        body: `
<p>Una <strong>cohorte</strong> es el grupo de clientes que compró por primera vez en un mismo período. Mirás qué % vuelve a comprar a 3, 6 y 12 meses.</p>
<table><thead><tr><th>Cohorte</th><th>Mes 3</th><th>Mes 6</th><th>Mes 12</th></tr></thead><tbody>
<tr><td>Ene</td><td>8%</td><td>14%</td><td>20%</td></tr>
<tr><td>Abr</td><td>11%</td><td>18%</td><td>—</td></tr>
</tbody></table>
<p>Si las cohortes nuevas recompran más, algo mejoró (producto, post-venta, comunicación). Retener es casi siempre más barato que adquirir.</p>`,
      },
      {
        title: 'Expansión: nuevos productos, canales y mercados',
        body: `
<ul>
<li><b>Nuevo producto al mismo cliente</b>: menor riesgo, aprovecha confianza.</li>
<li><b>Mismo producto, nuevo canal</b> (distribuidores, marketplaces): más alcance, menor margen, riesgo de conflicto de canal.</li>
<li><b>Nuevo mercado</b> (ej. Paraguay): mayor riesgo, exige validar demanda, costos, logística, regulación.</li>
</ul>
<p>Matriz de Ansoff: cuanto más te alejás de producto actual + mercado actual, más riesgo y más inversión de aprendizaje.</p>`,
      },
      {
        title: 'Priorizar y experimentar',
        body: `
<div class="formula">ICE = Impacto × Confianza × Facilidad (1–10 cada uno)</div>
<p>Cada experimento con: hipótesis (“si respondemos en &lt;15 min, lead → conversación sube de 45% a 60%”), métrica principal, duración, criterio de éxito y decisión posterior.</p>
<div class="callout">Un experimento sin criterio de decisión previo es una actividad, no un experimento.</div>`,
      },
    ],
    cmoQuestions: [
      '¿El crecimiento de este año vino de más clientes, más ticket o más frecuencia?',
      '¿Qué % de clientes vuelve a comprar a los 12 meses?',
      '¿Qué palanca tiene mejor relación impacto/esfuerzo hoy?',
      '¿Qué experimento estamos corriendo y qué decisión habilita?',
    ],
    lab: [
      'Descomponé la facturación de Durabox del último año en clientes × ticket × frecuencia.',
      'Armá una tabla de cohortes de recompra (aunque sea trimestral).',
      'Priorizá 5 iniciativas de growth con ICE.',
    ],
    case: {
      title: 'Caso 10 — ¿De dónde sale el +25%?',
      prompt: `
<p>Una empresa factura $120 M/mes: 150 ventas × $800.000. Quiere crecer 25%. Datos: conversión lead → venta 5%, attach rate de accesorios 15% (accesorio $120.000), 8% de clientes recompra al año. ¿Cómo armarías el crecimiento sin depender sólo de más leads?</p>`,
      solution: `
<p>Objetivo: $150 M (+$30 M). Combinación posible:</p>
<ul>
<li><b>Conversión</b> 5% → 5,5% (+10%): +15 ventas → +$12 M.</li>
<li><b>Attach</b> 15% → 35% sobre 165 ventas: +33 accesorios × $120.000 → +$4 M (ticket +3%).</li>
<li><b>Precio</b> +4% (testear): +$5,3 M.</li>
<li><b>Leads</b> +7%: +~12 ventas → +$9,5 M.</li>
</ul>
<p>Total ≈ <b>+$31 M</b>, con sólo +7% de leads. Además precio y attach suben el margen. Cada palanca tiene dueño, métrica y experimento, y se verifica la capacidad para ~177 ventas.</p>`,
    },
    cards: [
      { q: 'Árbol de crecimiento', a: 'Ingresos = tráfico × conversión × ticket × frecuencia. Son multiplicadores: mejoras chicas en varias ramas se potencian.' },
      { q: 'Cohorte', a: 'Grupo de clientes que compró por primera vez en un mismo período, seguido en el tiempo.' },
      { q: 'ICE', a: 'Impacto × Confianza × Facilidad. Método rápido para priorizar iniciativas.' },
      { q: 'Matriz de Ansoff', a: 'Penetración, desarrollo de producto, desarrollo de mercado, diversificación: el riesgo crece al alejarte del producto y mercado actuales.' },
    ],
  },

  /* ───────────────────────── SEMANA 11 ───────────────────────── */
  {
    n: 11,
    title: 'Estrategia empresarial',
    goal: 'Mercado, competencia, posicionamiento, canales, expansión y asignación de recursos.',
    sections: [
      {
        title: 'Tamaño de mercado: TAM, SAM, SOM',
        body: `
<ul>
<li><b>TAM</b>: mercado total si vendieras a todos los posibles compradores.</li>
<li><b>SAM</b>: la porción que tu oferta y canales pueden atender.</li>
<li><b>SOM</b>: lo que razonablemente podés capturar en 1–3 años.</li>
</ul>
<p>Calculalo <strong>bottom-up</strong>: cantidad de compradores potenciales × probabilidad de compra anual × ticket. Ej.: 400.000 pickups en circulación × 3% compra tapa por año × $1 M = <b>TAM anual $12.000 M</b>. Si vendés $1.200 M/año, tenés ~10%.</p>`,
      },
      {
        title: 'Competencia y posicionamiento',
        body: `
<p>La competencia incluye las <strong>alternativas</strong> del cliente: otros fabricantes, importados, soluciones caseras, no hacer nada.</p>
<p>Posicionamiento = la idea que querés ocupar en la mente del cliente frente a esas alternativas. Una frase útil:</p>
<blockquote>Para [cliente] que [necesidad], [marca] es [categoría] que [beneficio principal], a diferencia de [alternativa], porque [razón para creer].</blockquote>
<p>Una buena posición permite <strong>sostener precio</strong>: es una decisión económica, no sólo de comunicación.</p>`,
      },
      {
        title: 'Canales de venta',
        body: `
<table><thead><tr><th>Canal</th><th>Margen</th><th>Control</th><th>Alcance</th></tr></thead><tbody>
<tr><td>Venta directa / WhatsApp</td><td>Alto</td><td>Alto</td><td>Limitado por equipo</td></tr>
<tr><td>E-commerce propio</td><td>Alto</td><td>Alto</td><td>Depende de tráfico</td></tr>
<tr><td>Distribuidores / instaladores</td><td>Menor</td><td>Bajo</td><td>Alto, geográfico</td></tr>
<tr><td>Marketplaces</td><td>Menor (comisión)</td><td>Medio</td><td>Alto</td></tr>
</tbody></table>
<p>La pregunta no es “qué canal es mejor” sino qué <strong>combinación</strong> maximiza contribución sin canibalizarse (precios coherentes, zonas, roles).</p>`,
      },
      {
        title: 'Expansión a un nuevo mercado',
        body: `
<p>Checklist para evaluar (ej. Paraguay):</p>
<ol>
<li><b>Demanda</b>: parque de vehículos, búsquedas, consultas recibidas desde allá.</li>
<li><b>Competencia y precios</b> locales.</li>
<li><b>Costos</b>: logística, aranceles, impuestos, tipo de cambio.</li>
<li><b>Canal</b>: venta directa vs. distribuidor local.</li>
<li><b>Capacidad</b>: ¿producción y atención aguantan?</li>
<li><b>Retorno esperado</b> y <b>inversión de aprendizaje</b>: cuánto estás dispuesta a gastar para validar, con qué criterio de éxito.</li>
</ol>
<div class="callout">Expandir con un piloto acotado y criterios de corte definidos antes de empezar.</div>`,
      },
      {
        title: 'Asignar recursos es la estrategia',
        body: `
<p>La estrategia real de una empresa no es lo que dice el plan: es <strong>dónde pone la plata, el tiempo y la gente</strong>. Como CMO, tu herramienta es asignar recursos entre:</p>
<ul><li>Proteger el núcleo (lo que hoy paga la estructura).</li><li>Crecer en lo adyacente.</li><li>Explorar opciones de futuro.</li></ul>
<p>Decir que no es parte de la estrategia: cada iniciativa nueva compite con las existentes por los mismos recursos.</p>`,
      },
    ],
    cmoQuestions: [
      '¿Qué porción del mercado tenemos y cuánto queda por capturar?',
      '¿Contra qué alternativas compite realmente el cliente?',
      '¿Nuestro posicionamiento nos permite sostener precio?',
      '¿Qué vamos a dejar de hacer para financiar lo nuevo?',
    ],
    lab: [
      'Estimá TAM/SAM/SOM de Durabox en Argentina (bottom-up).',
      'Escribí la frase de posicionamiento de Durabox.',
      'Armá el checklist de Paraguay con los datos que tenés y los que faltan.',
    ],
    case: {
      title: 'Caso 11 — ¿Paraguay o más Argentina?',
      prompt: `
<p>Tenés $20 M para el próximo semestre. Opción A: profundizar Argentina (participación actual 10%, CAC $100.000, contribución post-CAC $250.000). Opción B: piloto en Paraguay (sin datos de CAC; mercado ~8% del argentino; logística +$80.000 por venta; 40 consultas/mes orgánicas desde allá). ¿Cómo lo resolvés?</p>`,
      solution: `
<p>No es A o B: es <b>asignación</b>. A tiene economics conocidos; B tiene una señal (40 consultas/mes sin inversión) y mucha incertidumbre.</p>
<p>Propuesta: ~80–85% en A con reglas de CAC marginal; ~15–20% ($3–4 M) como <b>inversión de aprendizaje</b> en B durante 3 meses, con objetivos claros: CAC real, conversión, contribución neta de logística (≈ $170.000 si el resto se mantiene), canal (¿distribuidor local?).</p>
<p>Criterio de corte: si al cabo del piloto la contribución post-CAC en Paraguay es &gt; 60% de la argentina y hay capacidad, escalar; si no, pausar y documentar lo aprendido.</p>`,
    },
    cards: [
      { q: 'TAM / SAM / SOM', a: 'Mercado total / porción atendible con tu oferta y canales / lo que podés capturar en 1–3 años.' },
      { q: 'Estructura de posicionamiento', a: 'Para [cliente] que [necesidad], [marca] es [categoría] que [beneficio], a diferencia de [alternativa], porque [razón para creer].' },
      { q: 'Inversión de aprendizaje', a: 'Presupuesto acotado para validar una apuesta, con criterios de éxito y de corte definidos antes.' },
      { q: '¿Qué es la estrategia en la práctica?', a: 'Dónde la empresa pone plata, tiempo y gente — y a qué le dice que no.' },
    ],
  },

  /* ───────────────────────── SEMANA 12 ───────────────────────── */
  {
    n: 12,
    title: 'Dirección de Marketing',
    goal: 'Construir un plan integral y defender decisiones frente a dirección.',
    sections: [
      {
        title: 'El tablero de Dirección de Marketing',
        body: `
<div class="chain strong">Inversión → adquisición → pipeline → ventas → facturación → margen → rentabilidad → crecimiento</div>
<p>Un tablero de una página, mensual, con tres niveles:</p>
<ul>
<li><b>Negocio</b>: facturación, contribución, resultado, MER, uso de capacidad.</li>
<li><b>Motor</b>: leads, conversión por etapa, CAC (promedio y marginal), ticket, attach, recompra.</li>
<li><b>Canales</b>: inversión, CPL, CAC y contribución por canal y producto.</li>
</ul>
<p>Cada número con su comparación (mes anterior, mismo mes del año anterior, objetivo) y una línea de lectura: <em>qué significa y qué decidimos</em>.</p>`,
      },
      {
        title: 'Cómo presentar a dirección',
        body: `
<ol>
<li><b>Recomendación primero</b>: “Propongo X”.</li>
<li><b>Por qué</b>: los 2–3 números que la sostienen.</li>
<li><b>Supuestos</b> y qué los podría romper.</li>
<li><b>Riesgos</b> y cómo los mitigamos (gates, pilotos).</li>
<li><b>Qué decisión necesito</b> de ustedes, y para cuándo.</li>
</ol>
<blockquote>“No escalaría todavía. El CPL mejora, pero no sabemos si llega a CAC. Necesito conversión lead→venta por origen. Si Meta mantiene la tasa actual, el CAC proyectado sería X y el margen incremental Y. Con esos números sí hay espacio para invertir.”</blockquote>`,
      },
      {
        title: 'El plan integral',
        body: `
<p>Estructura de un plan de marketing de dirección:</p>
<ol>
<li>Diagnóstico económico (la cascada, unit economics, funnel, restricción).</li>
<li>Objetivos de negocio (no de marketing): contribución, crecimiento, mix.</li>
<li>Palancas elegidas y por qué (árbol de crecimiento).</li>
<li>Presupuesto por objetivo y tarea, con escenarios y gates.</li>
<li>Iniciativas con dueño, métrica y plazo.</li>
<li>Tablero y ritual de seguimiento.</li>
</ol>`,
      },
      {
        title: 'El ritual de gestión',
        body: `
<ul>
<li><b>Semanal</b> (30 min, con ventas): funnel, tiempo de respuesta, motivos de pérdida.</li>
<li><b>Mensual</b> (60 min, con dirección): tablero completo, decisiones de presupuesto, alertas de capacidad.</li>
<li><b>Trimestral</b>: revisión de estrategia, mix, precio, experimentos y plan siguiente.</li>
</ul>
<p>Como fractional, tu valor está en el <strong>criterio y el sistema</strong>, no en las horas. El ritual es lo que sostiene el impacto cuando no estás.</p>`,
      },
      {
        title: 'Qué hacés vos y qué delegás',
        body: `
<table><thead><tr><th>Vos (CMO)</th><th>Delegás / pedís</th></tr></thead><tbody>
<tr><td>Hacer las preguntas correctas</td><td>Contador/CFO: costos exactos, impuestos, estados contables</td></tr>
<tr><td>Traducir números en decisiones de marketing</td><td>Ventas: forecast de pipeline, motivos de pérdida</td></tr>
<tr><td>Definir CAC máximo, presupuesto y mix</td><td>Operaciones: capacidad, stock, lead time</td></tr>
<tr><td>Diseñar el tablero y el ritual</td><td>Agencia/equipo: ejecución de campañas</td></tr>
</tbody></table>
<p><strong>Posicionamiento recomendado</strong>: empresas medianas consolidadas (industriales, distribución, e-commerce, servicios) donde “la empresa creció, hace muchas cosas de marketing y necesita alguien que piense, ordene y dirija todo”. Este tablero y método pueden ser el framework de Jirafa como Dirección de Marketing Externa.</p>`,
      },
    ],
    cmoQuestions: [
      '¿Qué decisión necesito de dirección y para cuándo?',
      '¿Cuáles son los 3 números que sostienen esta recomendación?',
      '¿Qué supuesto, si falla, cambia la decisión?',
      '¿Qué ritual sostiene esto cuando no estoy?',
    ],
    lab: [
      'Completá el Tablero de Dirección de Durabox en la sección Herramientas.',
      'Escribí el plan integral de Durabox para el próximo semestre (máx. 2 páginas).',
      'Prepará la presentación de una recomendación con la estructura de 5 pasos.',
      'Convertí el tablero en plantilla para la metodología de Jirafa.',
    ],
    case: {
      title: 'Caso final — Tu primera reunión de directorio',
      prompt: `
<p>Usando Durabox (o un cliente real), prepará una recomendación de 1 página para dirección que incluya: diagnóstico económico en 5 líneas, la restricción principal, 3 palancas elegidas con su impacto estimado, presupuesto con escenarios y gates, y la decisión que necesitás.</p>`,
      solution: `
<p>No hay una única respuesta. Checklist de autoevaluación:</p>
<ul>
<li>¿Empieza por la recomendación?</li>
<li>¿Cada métrica de marketing está traducida a negocio (contribución, resultado, caja)?</li>
<li>¿Diferencia CPL, CAC promedio y CAC marginal?</li>
<li>¿Considera capacidad y restricción?</li>
<li>¿El presupuesto sale de un objetivo y tiene gates?</li>
<li>¿Los supuestos están explícitos, con dueño?</li>
<li>¿Termina con una decisión concreta pedida?</li>
</ul>`,
    },
    cards: [
      { q: 'Estructura para presentar a dirección', a: 'Recomendación → por qué (2–3 números) → supuestos → riesgos y mitigación → decisión que necesitás.' },
      { q: 'Tres niveles del tablero de dirección', a: 'Negocio (facturación, contribución, resultado), motor (funnel, CAC, ticket, recompra) y canales.' },
      { q: 'Ritual de gestión', a: 'Semanal con ventas (funnel), mensual con dirección (tablero y presupuesto), trimestral (estrategia).' },
      { q: 'Posicionamiento recomendado como Fractional CMO', a: 'Empresas medianas consolidadas (industria, distribución, e-commerce, servicios) que crecieron y necesitan dirección de marketing.' },
    ],
  },
];
