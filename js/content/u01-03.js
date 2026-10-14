/* Brain — contenido. Unidades 1 a 3: cómo gana plata una empresa.
   Tipos de ejercicio: choice, tf, number, match, order. */

UNITS.push({
  n: 1,
  phase: 'f1',
  title: 'Cómo funciona económicamente una empresa',
  goal: 'Leer ingresos, costos y resultado, y entender dónde impacta marketing.',
  summary: [
    'Facturar no es ganar: entre una cosa y la otra hay costos variables y fijos.',
    'La eficiencia publicitaria (CPL barato) no garantiza eficiencia económica (clientes rentables).',
    'Antes de generar más demanda, hay que saber si la empresa puede absorberla.',
  ],
  lessons: [
    {
      id: 'u1l1', title: 'Vender no es ganar', icon: '🏪',
      read: [
        { h: 'Dos mapas de marketing', body: `
<p>Hasta cierto nivel, marketing se piensa así:</p>
<div class="chain">Inversión → campañas → tráfico → leads → ventas</div>
<p>Para dirigir marketing, ese mapa queda corto. El mapa completo sigue hasta donde la empresa realmente gana o pierde:</p>
<div class="chain strong">Inversión → demanda → ventas → facturación → margen → resultado → caja</div>
<p>Y alrededor hay <b>restricciones</b>: capacidad comercial, stock, producción, logística y financiación. Una campaña puede ser excelente y aun así chocar contra cualquiera de ellas.</p>` },
        { h: 'Facturación no es ganancia', body: `
<p>Pensá en un kiosco: vende un alfajor a $100 que le costó $60. Le quedan $40, y con eso todavía tiene que pagar alquiler, luz y sueldos.</p>
<p>Una empresa funciona igual, con más ceros:</p>
<table><tbody>
<tr><td>Facturación</td><td>$100 M</td></tr>
<tr><td>− Costos variables (mercadería, comisiones, envíos)</td><td>$60 M</td></tr>
<tr><td>= Margen de contribución</td><td><b>$40 M</b></td></tr>
<tr><td>− Costos fijos (alquiler, sueldos, sistemas)</td><td>$30 M</td></tr>
<tr><td>= Resultado</td><td><b>$10 M</b></td></tr>
</tbody></table>
<p>Cuando un cliente te dice “facturamos 100 millones”, todavía no sabés si gana plata.</p>` },
        { h: 'Eficiencia publicitaria ≠ eficiencia económica', body: `
<table><thead><tr><th></th><th>Campaña A</th><th>Campaña B</th></tr></thead><tbody>
<tr><td>Inversión</td><td>$1 M</td><td>$1 M</td></tr>
<tr><td>Leads</td><td>1.000</td><td>600</td></tr>
<tr><td>CPL</td><td>$1.000</td><td>$1.667</td></tr>
<tr><td>Ventas</td><td>20</td><td>30</td></tr>
<tr><td>Facturación (ticket $800.000)</td><td>$16 M</td><td>$24 M</td></tr>
</tbody></table>
<p>Mirando Meta, A parece mejor: su CPL es 40% más bajo. Mirando el negocio, B vende 50% más y factura $8 M más.</p>
<div class="callout">Tu trabajo como directora empieza donde termina el dashboard publicitario.</div>` },
      ],
      ex: [
        { t: 'choice', q: '¿Dónde termina el mapa completo de marketing de una directora?', o: ['En los leads', 'En las ventas', 'En el resultado y la caja'], a: 2, why: 'Una venta todavía tiene que convertirse en margen, resultado y caja.' },
        { t: 'number', q: 'Una empresa factura $100 M, tiene $60 M de costos variables y $30 M de costos fijos. ¿Cuál es el resultado, en millones?', a: 10, unit: 'M', why: '100 − 60 = 40 de contribución; 40 − 30 = 10 de resultado.' },
        { t: 'tf', q: 'Una campaña con CPL 40% más bajo siempre es la mejor opción.', a: false, why: 'En el ejemplo, la campaña con CPL más alto vendió 50% más.' },
        { t: 'order', q: 'Ordená la cadena económica, del primer eslabón al último.', items: ['Inversión', 'Ventas', 'Facturación', 'Margen', 'Resultado'], why: 'Marketing invierte, eso genera ventas; las ventas facturan; la facturación deja margen; el margen paga la estructura y deja resultado.' },
        { t: 'choice', q: 'Campaña A: 20 ventas. Campaña B: 30 ventas. Mismo ticket y misma inversión. ¿Cuál es económicamente mejor?', o: ['A, porque tiene el CPL más bajo', 'B, porque genera más ventas y facturación', 'Son iguales'], a: 1, why: 'Lo que importa es lo que termina en ventas y margen, no el costo del contacto.' },
      ],
    },
    {
      id: 'u1l2', title: 'Variables, fijos y márgenes', icon: '🧾',
      read: [
        { h: 'Dos tipos de costos', body: `
<ul>
<li><b>Costos variables</b>: aparecen con cada venta. Mercadería, materia prima, comisiones de vendedores, comisiones del medio de pago, envíos que asume la empresa.</li>
<li><b>Costos fijos</b>: se pagan vendas o no. Alquiler, administración, sueldos estructurales, sistemas, honorarios.</li>
</ul>
<p>La pregunta clave para marketing: <em>¿cuánto queda de cada venta después de sus propios costos?</em></p>` },
        { h: 'Los tres márgenes', body: `
<p>Una venta de <b>$1.000.000</b>:</p>
<table><tbody>
<tr><td>Precio</td><td>$1.000.000</td></tr>
<tr><td>− Costo del producto</td><td>$600.000</td></tr>
<tr><td>= <b>Margen bruto</b></td><td>$400.000 (40%)</td></tr>
<tr><td>− Comisión vendedor</td><td>$40.000</td></tr>
<tr><td>− Comisión medio de pago</td><td>$50.000</td></tr>
<tr><td>− Logística asumida</td><td>$20.000</td></tr>
<tr><td>= <b>Margen de contribución</b></td><td>$290.000</td></tr>
</tbody></table>
<p>Después de restar los costos fijos llegás al <b>margen neto</b> o resultado. El de contribución es el que más vas a usar: es lo que cada venta “contribuye” a pagar la estructura.</p>` },
        { h: 'Facturar más no es ganar más', body: `
<table><thead><tr><th></th><th>Producto A</th><th>Producto B</th></tr></thead><tbody>
<tr><td>Precio</td><td>$1.000.000</td><td>$700.000</td></tr>
<tr><td>Contribución</td><td>$300.000 (30%)</td><td>$350.000 (50%)</td></tr>
<tr><td>Costo de conseguir el cliente</td><td>$70.000</td><td>$40.000</td></tr>
<tr><td><b>Queda</b></td><td><b>$230.000</b></td><td><b>$310.000</b></td></tr>
</tbody></table>
<p>A factura más por venta; B deja más. Y si A tuviera más recompra o B problemas de stock, la respuesta podría cambiar. La pregunta deja de ser “¿qué campaña tiene mejor CPL?” y pasa a ser <b>“¿dónde conviene poner el próximo peso?”</b></p>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada concepto con su definición.', pairs: [['Margen bruto', 'Precio menos costo del producto'], ['Margen de contribución', 'Precio menos todos los costos variables'], ['Costos fijos', 'Se pagan vendas o no'], ['Resultado', 'Lo que queda después de todo']] },
        { t: 'choice', q: '¿Cuál de estos es un costo variable?', o: ['El alquiler de la oficina', 'La comisión del medio de pago', 'El sueldo del administrativo'], a: 1, why: 'Solo aparece cuando hay una venta.' },
        { t: 'number', q: 'Precio $500.000. Producto $250.000, comisión $25.000, medio de pago $15.000, envío $10.000. ¿Margen de contribución?', a: 200000, unit: '$', why: '500.000 − 250.000 − 25.000 − 15.000 − 10.000 = 200.000.' },
        { t: 'tf', q: 'El margen bruto ya incluye las comisiones de los vendedores.', a: false, why: 'El bruto solo resta el costo del producto. Las comisiones entran en el margen de contribución.' },
        { t: 'choice', q: 'Producto A deja $230.000 después de conseguir al cliente; B deja $310.000. Sin otros datos, ¿dónde ponés el próximo peso?', o: ['En A, porque factura más', 'En B, porque deja más', 'Mitad y mitad'], a: 1, why: 'B deja más plata por cada venta conseguida.' },
      ],
    },
    {
      id: 'u1l3', title: 'Punto de equilibrio', icon: '⚖️',
      read: [
        { h: 'Cuántas ventas para no perder', body: `
<p>El kiosco paga $4.000 de fijos por mes y cada alfajor le deja $40. Necesita vender <b>100</b> para cubrir los fijos. Desde el 101, gana.</p>
<div class="formula">Punto de equilibrio = costos fijos ÷ contribución por venta</div>
<p>Una empresa con $20 M de fijos y $250.000 de contribución por venta necesita <b>80 ventas</b>. Esa es la base; lo que se vende arriba de eso construye el resultado.</p>` },
        { h: 'Recorrer el funnel al revés', body: `
<p>El CEO dice “tenemos que crecer”. Tu respuesta no empieza por “subamos Meta”, sino por la cuenta inversa:</p>
<div class="chain strong">50 ventas ÷ 25% de cierre = 200 oportunidades ÷ 40% de calificación = 500 leads × $8.000 = $4 M</div>
<p>Ahora tu presupuesto tiene una hipótesis detrás.</p>` },
        { h: 'Cómo se dice frente a dirección', body: `
<blockquote>“Para 50 ventas incrementales necesitamos ~500 leads. Con el CPL histórico eso requiere ~$4 M. Pero Ventas tiene que poder procesar 500 leads y sostener 40% de calificación y 25% de cierre.”</blockquote>
<p>Compará con: <em>“Propongo invertir $4 M en Meta.”</em> La primera frase explica qué se compra con la plata y qué tiene que pasar para que funcione. La segunda pide confianza.</p>` },
      ],
      ex: [
        { t: 'number', q: 'Costos fijos $20 M. Cada venta deja $250.000. ¿Cuántas ventas para el equilibrio?', a: 80, unit: 'ventas', why: '20.000.000 ÷ 250.000 = 80.' },
        { t: 'tf', q: 'Después del punto de equilibrio, cada venta suma a la ganancia.', a: true, why: 'Los fijos ya están cubiertos; la contribución de las ventas siguientes es resultado.' },
        { t: 'order', q: 'Ordená la cuenta del funnel al revés.', items: ['Ventas que necesitamos', 'Oportunidades', 'Leads', 'Inversión'], why: 'Se parte del objetivo y se recorre hacia atrás hasta la plata necesaria.' },
        { t: 'number', q: 'Querés 30 ventas y se cierra el 30% de las oportunidades. ¿Cuántas oportunidades necesitás?', a: 100, unit: 'oportunidades', why: '30 ÷ 0,30 = 100.' },
        { t: 'choice', q: 'El CEO dice “hay que crecer”. ¿Cuál es tu primera pregunta?', o: ['¿Cuánto más ponemos en Meta?', '¿Cuántas ventas más necesitamos?', '¿Qué hace la competencia?'], a: 1, why: 'El objetivo de ventas es el punto de partida de la cuenta inversa.' },
      ],
    },
    {
      id: 'u1l4', title: 'CPL, CAC y el tope', icon: '🎣',
      read: [
        { h: 'El pique y el pescado', body: `
<p>Una cosa es cuánto te cuesta cada pique, y otra cuánto te cuesta cada pescado que llevás a casa.</p>
<ul>
<li><b>CPL</b> (costo por lead) = inversión ÷ leads.</li>
<li><b>CAC</b> (costo de adquisición de cliente) = inversión ÷ clientes que compraron.</li>
</ul>
<p>Con $5 M de inversión, 1.000 leads y 50 ventas: CPL $5.000, <b>CAC $100.000</b>. Meta puede mostrar un CPL hermoso mientras el CAC es un desastre.</p>` },
        { h: '¿Cuánto podemos pagar por un cliente?', body: `
<p>Si cada venta deja $300.000 antes de pagar la adquisición:</p>
<ul>
<li>CAC $50.000 → quedan $250.000.</li>
<li>CAC $200.000 → quedan $100.000.</li>
<li>CAC $320.000 → <b>se pierde plata</b>, salvo que haya recompra, accesorios o recomendaciones que lo compensen.</li>
</ul>
<p>Muchas empresas tienen objetivos del tipo “el lead tiene que costar menos de $5.000” sin saber de dónde sale ese número. Eso no es un criterio económico.</p>` },
        { h: 'Del CAC máximo al CPL máximo', body: `
<div class="formula">CPL máximo = CAC máximo × conversión lead → venta</div>
<p>Si el CAC máximo es $100.000 y compra 1 de cada 10 leads, el CPL máximo es <b>$10.000</b>. Si Ventas mejora y compra 1 de cada 5, sube a <b>$20.000</b>.</p>
<div class="callout">Meta podría pasar de CPL $10.000 a $15.000, alguien diría “empeoraron las campañas” y, mientras tanto, la empresa estaría ganando más porque Ventas duplicó la conversión.</div>` },
      ],
      ex: [
        { t: 'number', q: 'Inversión $2 M, 400 leads, 20 ventas. ¿Cuál es el CAC?', a: 100000, unit: '$', why: '2.000.000 ÷ 20 = 100.000.' },
        { t: 'number', q: 'Con los mismos datos (inversión $2 M, 400 leads), ¿cuál es el CPL?', a: 5000, unit: '$', why: '2.000.000 ÷ 400 = 5.000.' },
        { t: 'number', q: 'CAC máximo $80.000 y compra el 5% de los leads. ¿CPL máximo?', a: 4000, unit: '$', why: '80.000 × 0,05 = 4.000.' },
        { t: 'tf', q: 'Si el CPL sube 50%, las campañas necesariamente empeoraron.', a: false, why: 'Si la conversión subió más, el costo por cliente puede haber bajado.' },
        { t: 'choice', q: 'Cada venta deja $300.000 y el CAC es $320.000. ¿Qué concluís?', o: ['Está bien, se vende igual', 'Cada venta pierde plata, salvo que haya valor posterior', 'Hay que bajar el CPL'], a: 1, why: 'El costo de conseguir el cliente supera lo que deja su compra.' },
      ],
    },
    {
      id: 'u1l5', title: 'Capacidad y palancas', icon: '🚦',
      read: [
        { h: 'Demanda que no se puede atender', body: `
<p>Generás 70 ventas, pero la fábrica entrega 50. Resultado:</p>
<div class="chain">retrasos → reclamos → cancelaciones → vendedores saturados → reseñas malas → caja desordenada</div>
<p>Por eso una directora pregunta a Operaciones: <em>“Si aumento la demanda 30%, ¿la empresa puede atenderla?”</em> Y si la respuesta es no, el crecimiento tiene que venir de otro lado.</p>` },
        { h: 'Las cinco palancas', body: `
<div class="formula">Clientes × frecuencia × ticket = ingresos · ingresos × margen = plata generada</div>
<ol>
<li>Más clientes</li>
<li>Más conversión de los que ya consultan</li>
<li>Más ticket por compra</li>
<li>Más frecuencia o recompra</li>
<li>Más margen</li>
</ol>
<p>Marketing se suele obsesionar con la primera. Dirección trabaja todas las que puede mover.</p>` },
        { h: 'En Durabox', body: `
<ul>
<li><b>Ticket:</b> tapa → tapa + DRX, + bolso, + portaequipaje.</li>
<li><b>Conversión:</b> responder WhatsApp más rápido, mejores presupuestos.</li>
<li><b>Margen:</b> precio, mix de productos, menos descuento.</li>
<li><b>Clientes:</b> distribuidores, Paraguay.</li>
</ul>
<div class="callout strong">Marketing convierte recursos en demanda; la empresa convierte esa demanda en resultado.</div>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada palanca con un ejemplo de Durabox.', pairs: [['Más ticket', 'Tapa + bolso'], ['Más conversión', 'Responder WhatsApp más rápido'], ['Más frecuencia', 'El cliente vuelve a comprar'], ['Más margen', 'Vender más del producto que deja más']] },
        { t: 'number', q: 'La capacidad máxima es 130 por mes y hoy se venden 100. ¿Cuántas ventas más se pueden atender?', a: 30, unit: 'ventas', why: '130 − 100 = 30. Y hay que confirmar si 130 es sostenible o teórico.' },
        { t: 'tf', q: 'Crecer siempre significa conseguir más clientes.', a: false, why: 'También se crece con conversión, ticket, frecuencia y margen.' },
        { t: 'choice', q: 'La empresa trabaja casi al máximo. ¿Qué tiene más sentido?', o: ['Duplicar la pauta', 'Trabajar ticket, margen y mix', 'Hacer 30% OFF'], a: 1, why: 'Sin capacidad libre, conviene ganar más con la demanda que ya hay.' },
      ],
    },
  ],
  lab: [
    'Reconstruí la cascada de Durabox: facturación → costos variables → contribución → fijos → resultado (aunque sea con estimaciones).',
    'Calculá el punto de equilibrio mensual en cantidad de ventas.',
    'Listá qué datos no tenés y a quién se los pedirías (contador, ventas, producción).',
  ],
  challenge: {
    title: '“Quiero crecer 30%, metamos más publicidad”',
    intro: `
<p>Entrás como Directora de Marketing Externa de una empresa industrial. El dueño dice: <em>“Facturamos $100 M por mes y quiero crecer 30%. Tenemos que meter más publicidad.”</em></p>
<table><tbody>
<tr><td>Ventas</td><td>100 por mes</td></tr>
<tr><td>Ticket</td><td>$1.000.000</td></tr>
<tr><td>Costo variable por venta</td><td>$650.000</td></tr>
<tr><td>Costos fijos</td><td>$25 M</td></tr>
<tr><td>Publicidad</td><td>$5 M → 1.000 leads → 50 ventas</td></tr>
<tr><td>Capacidad máxima</td><td>130 por mes</td></tr>
</tbody></table>`,
    steps: [
      { t: 'number', q: '¿Cuánto deja cada venta antes de pagar los costos fijos?', a: 350000, unit: '$', why: '1.000.000 − 650.000 = 350.000.' },
      { t: 'number', q: '¿Cuántas ventas necesita para cubrir los fijos? (redondeá hacia arriba)', a: 72, tol: 1, unit: 'ventas', why: '25.000.000 ÷ 350.000 = 71,4 → 72. Hoy vende 100: está 28 por encima.' },
      { t: 'number', q: '¿Cuánto cuesta cada cliente que viene de la publicidad?', a: 100000, unit: '$', why: '5.000.000 ÷ 50 = 100.000. (El CPL es $5.000.)' },
      { t: 'number', q: 'Para sumar 30 ventas con la conversión actual (5%), ¿cuántos leads extra hacen falta?', a: 600, unit: 'leads', why: '30 ÷ 0,05 = 600 leads, unos $3 M más: +60% de presupuesto para +30% de ventas.' },
      { t: 'choice', q: '¿Cuál es el riesgo más importante escondido en el pedido?', o: ['Que el CPL es alto', 'Que 130 ventas es el 100% de la capacidad', 'Que la conversión de 5% es mala'], a: 1, why: 'Crecer 30% lleva a la fábrica a su máximo. Además, 5% no es “malo” sin un punto de comparación.' },
    ],
    reflect: '¿Qué le preguntarías al dueño antes de aprobar más presupuesto? ¿Hay otras formas de crecer 30%?',
    legacyKey: 'w1',
    solution: `
<p><strong>Preguntas de directora:</strong> ¿de dónde vienen las otras 50 ventas y cuánto cuestan? ¿Los $350.000 incluyen todos los variables? ¿130 es capacidad sostenible o teórica? ¿El CPL se mantiene si subimos inversión?</p>
<p><strong>La pregunta clave:</strong> “crecer 30%” no es lo mismo que “30% más clientes”. Se puede crecer por ticket, precio, accesorios, mix o recuperando oportunidades que ya existen en el pipeline.</p>
<div class="callout">Secuencia a entrenar: <b>dato → métrica → contexto → hipótesis → pregunta → decisión</b>. Primero la cuenta, después la conclusión.</div>`,
  },
  cards: [
    { q: '¿Facturar es lo mismo que ganar?', a: 'No. Entre una cosa y la otra están los costos variables y los fijos.' },
    { q: 'Margen de contribución', a: 'Precio menos todos los costos variables de la venta. Es lo que paga la estructura.' },
    { q: 'Punto de equilibrio', a: 'Costos fijos ÷ contribución por venta.' },
    { q: 'CPL vs CAC', a: 'CPL = inversión ÷ leads. CAC = inversión ÷ clientes que compraron.' },
    { q: 'CPL máximo', a: 'CAC máximo × conversión lead → venta.' },
    { q: 'Las 5 palancas', a: 'Clientes, conversión, ticket, frecuencia y margen.' },
  ],
});

UNITS.push({
  n: 2,
  phase: 'f1',
  title: 'Márgenes y cuánto puede pagar marketing',
  goal: 'Calcular el tope de inversión por cliente y leer el ROAS con criterio.',
  summary: [
    'El CAC máximo sale de lo que deja cada venta y de lo que la empresa quiere conservar.',
    'El ROAS no dice nada sin el margen: ROAS de equilibrio = 1 ÷ margen.',
    'Un descuento chico en el precio se come una parte enorme de la contribución.',
  ],
  lessons: [
    {
      id: 'u2l1', title: 'Desarmar una venta', icon: '🔧',
      read: [
        { h: 'De precio a contribución', body: `
<table><tbody>
<tr><td>Precio</td><td>$1.000.000</td></tr>
<tr><td>− Producto</td><td>$550.000</td></tr>
<tr><td>= Margen bruto</td><td>$450.000 (45%)</td></tr>
<tr><td>− Comisión vendedor</td><td>$40.000</td></tr>
<tr><td>− Medio de pago</td><td>$30.000</td></tr>
<tr><td>− Logística</td><td>$20.000</td></tr>
<tr><td>= Contribución antes de adquisición</td><td><b>$360.000</b></td></tr>
</tbody></table>
<div class="callout strong">Facturación ≠ margen ≠ ganancia.</div>` },
        { h: 'El mapa completo de una venta', body: `
<div class="chain strong">Precio → margen bruto → contribución antes de adquisición → contribución después del CAC → resultado</div>
<p>Marketing toca muchas partes de este mapa: el <b>precio</b> (con promociones), el <b>mix</b> (qué productos empuja), el <b>CAC</b>, la <b>conversión</b>, el <b>ticket</b> y la <b>frecuencia</b>. Por eso dirigir marketing no es “hacer mejor marketing”: es asignar recursos para generar crecimiento sano.</p>` },
      ],
      ex: [
        { t: 'number', q: 'Precio $1.000.000 y producto $550.000. ¿Margen bruto en %?', a: 45, unit: '%', why: '450.000 ÷ 1.000.000 = 45%.' },
        { t: 'number', q: 'Precio $800.000. Producto $400.000, comisión $30.000, medio de pago $20.000, logística $30.000. ¿Contribución?', a: 320000, unit: '$', why: '800.000 − 400.000 − 30.000 − 20.000 − 30.000 = 320.000.' },
        { t: 'order', q: 'Ordená el mapa de una venta.', items: ['Precio', 'Margen bruto', 'Contribución antes de adquisición', 'Contribución después del CAC', 'Resultado'], why: 'Se van restando costos en ese orden.' },
        { t: 'tf', q: 'El margen bruto es lo que la empresa gana por cada venta.', a: false, why: 'Todavía faltan los variables comerciales, el CAC y los costos fijos.' },
      ],
    },
    {
      id: 'u2l2', title: 'El CAC máximo', icon: '🚧',
      read: [
        { h: 'La frontera económica de marketing', body: `
<p>Con $360.000 de contribución, ¿podemos pagar hasta $359.999 por un cliente? En los números, sí. En la realidad, la empresa necesita quedarse con algo para pagar estructura y ganar.</p>
<p>Si Dirección define “queremos conservar $200.000 por venta”:</p>
<div class="formula">CAC máximo = contribución − lo que se quiere conservar = $360.000 − $200.000 = <b>$160.000</b></div>` },
        { h: 'Cómo lee campañas una directora', body: `
<table><thead><tr><th>Campaña</th><th>CAC</th><th>Lectura</th></tr></thead><tbody>
<tr><td>A</td><td>$80.000</td><td>Muy debajo del tope: potencial para escalar</td></tr>
<tr><td>B</td><td>$120.000</td><td>Atractiva</td></tr>
<tr><td>C</td><td>$155.000</td><td>Cerca del tope: revisar calidad, producto, recompra</td></tr>
<tr><td>D</td><td>$190.000</td><td>Pasa el tope… salvo que sus clientes recompren mucho</td></tr>
</tbody></table>
<p>Ni siquiera acá hay automatismos: si D trae clientes que vuelven y A trae compradores de una sola vez, la lectura cambia. Eso lo vas a ver con el LTV.</p>` },
      ],
      ex: [
        { t: 'number', q: 'Contribución $360.000. La empresa quiere conservar $200.000. ¿CAC máximo?', a: 160000, unit: '$', why: '360.000 − 200.000 = 160.000.' },
        { t: 'choice', q: 'CAC máximo $160.000. Una campaña tiene CAC $155.000. ¿Qué hacés?', o: ['Escalar fuerte', 'Revisar calidad, producto y recompra antes de escalar', 'Apagarla'], a: 1, why: 'Está pegada al tope: cualquier desvío la pasa.' },
        { t: 'tf', q: 'Existe un CAC máximo universal que sirve para todas las empresas.', a: false, why: 'Depende de la contribución y de lo que cada empresa quiere conservar.' },
        { t: 'choice', q: 'Una campaña pasa el CAC máximo, pero sus clientes compran 3 veces. ¿Qué hacés?', o: ['La apago sin mirar más', 'Evalúo el valor de vida del cliente antes de decidir', 'Le subo el presupuesto'], a: 1, why: 'La recompra puede justificar un CAC mayor.' },
      ],
    },
    {
      id: 'u2l3', title: 'ROAS con margen', icon: '📊',
      read: [
        { h: 'Mismo ROAS, resultados opuestos', body: `
<div class="formula">ROAS = facturación atribuida ÷ inversión publicitaria</div>
<p>Dos empresas con ROAS 5 ($25 M facturados con $5 M de pauta):</p>
<ul>
<li>Margen 50% → $12,5 M de contribución − $5 M = <b>+$7,5 M</b></li>
<li>Margen 15% → $3,75 M − $5 M = <b>−$1,25 M</b></li>
</ul>
<p>Ante “tenemos ROAS 4, está buenísimo”, la respuesta automática es: <em>¿con qué margen?</em></p>` },
        { h: 'ROAS de equilibrio y objetivo', body: `
<div class="formula">ROAS de equilibrio = 1 ÷ margen de contribución</div>
<p>Margen 25% → ROAS 4. Margen 50% → ROAS 2. Margen 20% → ROAS 5.</p>
<p>En el equilibrio, la pauta se come toda la contribución: no queda nada para estructura ni ganancia. Por eso el objetivo va más arriba. Si Dirección decide que marketing puede usar como máximo el 10% de la facturación:</p>
<div class="formula">ROAS objetivo = 1 ÷ 0,10 = <b>10</b></div>` },
      ],
      ex: [
        { t: 'number', q: 'Margen de contribución 20%. ¿ROAS de equilibrio?', a: 5, unit: 'x', why: '1 ÷ 0,20 = 5.' },
        { t: 'number', q: 'Marketing puede usar como máximo el 8% de la facturación. ¿ROAS objetivo?', a: 12.5, unit: 'x', why: '1 ÷ 0,08 = 12,5.' },
        { t: 'number', q: 'Facturación $25 M, margen 50%, pauta $5 M. ¿Cuánto queda después de la pauta, en millones?', a: 7.5, unit: 'M', why: '25 × 0,5 = 12,5; 12,5 − 5 = 7,5.' },
        { t: 'choice', q: 'ROAS 5 con margen 15%. ¿Qué pasa?', o: ['Gana bien', 'Empata', 'Pierde plata'], a: 2, why: 'El equilibrio con 15% es ROAS 6,7. Con 5 no alcanza.' },
      ],
    },
    {
      id: 'u2l4', title: 'MER y atribución', icon: '🧭',
      read: [
        { h: 'La lectura ejecutiva', body: `
<div class="formula">MER = facturación total ÷ inversión total en marketing</div>
<p>$100 M ÷ $10 M = MER 10.</p>
<p>La atribución es imperfecta: el cliente vio Instagram, buscó en Google, habló por WhatsApp y compró tres semanas después. Meta y Google se adjudican la misma venta. El MER no le pregunta a ninguna plataforma: mira cuánto factura la empresa por cada peso en marketing. No reemplaza el análisis por canal, lo complementa.</p>` },
        { h: 'Preguntas ante un ROAS espectacular', body: `
<p>“Meta funciona bárbaro, tenemos ROAS 8.” Preguntas de directora:</p>
<ul>
<li>¿Es ROAS de la plataforma o de ventas reales?</li>
<li>¿Qué margen tienen esas ventas?</li>
<li>¿Incluye cancelaciones y devoluciones?</li>
<li>¿Son clientes nuevos o gente que ya compraba?</li>
<li>¿Qué pasó cuando se subió la inversión?</li>
</ul>` },
      ],
      ex: [
        { t: 'number', q: 'Facturación total $60 M e inversión total en marketing $5 M. ¿MER?', a: 12, unit: 'x', why: '60 ÷ 5 = 12.' },
        { t: 'tf', q: 'El MER reemplaza el análisis por canal.', a: false, why: 'Es una lectura general; el análisis por canal sigue siendo necesario.' },
        { t: 'choice', q: '¿Para qué sirve sobre todo el MER?', o: ['Para optimizar anuncios', 'Para ver la eficiencia global sin depender de la atribución', 'Para calcular el CPL'], a: 1, why: 'No depende de lo que cada plataforma se atribuye.' },
        { t: 'choice', q: '“Tenemos ROAS 8 en Meta.” ¿Cuál es la mejor primera pregunta?', o: ['¿Es de ventas reales y con qué margen?', '¿Qué creatividad funcionó?', '¿Cuánto alcance tuvo?'], a: 0, why: 'Sin saber si es real y con qué margen, el número no dice nada.' },
      ],
    },
    {
      id: 'u2l5', title: 'Descuentos y cuotas', icon: '🏷️',
      read: [
        { h: 'La trampa del descuento', body: `
<p>Precio $1.000.000, costo variable $700.000, contribución $300.000. Con <b>20% OFF</b>:</p>
<div class="formula">$800.000 − $700.000 = $100.000</div>
<p>El precio bajó 20%, la contribución bajó <b>67%</b>. Para ganar lo mismo que con 100 ventas hay que hacer <b>300</b>.</p>
<div class="formula">Aumento de ventas necesario = descuento ÷ (margen − descuento) = 0,20 ÷ (0,30 − 0,20) = 200%</div>
<p>“En el Cyber vendimos 80% más” puede querer decir que ganamos menos.</p>` },
        { h: 'Las cuotas no son gratis', body: `
<p>Transferencia $900.000 vs. 6 cuotas $1.050.000. Si financiar cuesta $130.000, entran <b>$920.000</b>: la diferencia real es mucho menor de la que parece.</p>
<p>Y las cuotas pueden hacer comprar a más gente. La pregunta no es qué opción deja más por venta, sino cuál deja más <b>en total</b>.</p>` },
      ],
      ex: [
        { t: 'number', q: 'Margen 30% y hacés 10% de descuento. ¿Cuánto (%) tienen que subir las ventas para ganar lo mismo?', a: 50, unit: '%', why: '0,10 ÷ (0,30 − 0,10) = 0,5 → 50%.' },
        { t: 'number', q: 'Precio en cuotas $1.200.000 y la financiación cuesta 14%. ¿Cuánto entra de verdad?', a: 1032000, unit: '$', why: '1.200.000 × 0,86 = 1.032.000.' },
        { t: 'tf', q: 'Si con la promo se vendió 80% más, seguro se ganó más.', a: false, why: 'Depende de cuánto bajó la contribución por venta.' },
        { t: 'choice', q: '¿Qué alternativa suele cuidar más el margen que un % OFF?', o: ['Un regalo de bajo costo y alto valor percibido', 'Un descuento mayor', 'Bajar el precio de lista para siempre'], a: 0, why: 'El regalo cuesta poco y no toca el precio del producto principal.' },
      ],
    },
  ],
  lab: [
    'Calculá la contribución por producto de Durabox (tapa, DRX, bolso, portaequipaje).',
    'Definí un CAC máximo con la contribución que querés conservar.',
    'Calculá el ROAS de equilibrio de Durabox y comparalo con el que reporta Meta.',
    'Compará transferencia vs. cuotas con el costo financiero real.',
  ],
  challenge: {
    title: '¿Aprobás el 15% de descuento?',
    intro: `
<p>Sos Fractional CMO de un e-commerce. Valores en miles de pesos:</p>
<table><tbody>
<tr><td>Precio promedio</td><td>200</td></tr>
<tr><td>Costos variables (producto + pago + envío)</td><td>130</td></tr>
<tr><td>CAC</td><td>25</td></tr>
<tr><td>Ventas por mes</td><td>500</td></tr>
<tr><td>Costos fijos</td><td>20.000</td></tr>
</tbody></table>
<p>Marketing propone <b>15% OFF</b>. La agencia estima pasar de 500 a <b>650</b> ventas, con el mismo CAC y los mismos costos.</p>`,
    steps: [
      { t: 'number', q: '¿Cuánto queda hoy de cada venta después del CAC? (en miles)', a: 45, unit: 'mil', why: '200 − 130 − 25 = 45.' },
      { t: 'number', q: '¿Y con el descuento? (en miles)', a: 15, unit: 'mil', why: 'Precio 170 → 170 − 130 − 25 = 15.' },
      { t: 'number', q: 'Contribución total con la promo: 650 ventas × 15. ¿Cuánto da? (en miles)', a: 9750, unit: 'mil', why: 'Hoy son 500 × 45 = 22.500. Con promo, 9.750: menos de la mitad.' },
      { t: 'number', q: '¿Cuántas ventas harían falta con la promo para igualar los 22.500 de hoy?', a: 1500, unit: 'ventas', why: '22.500 ÷ 15 = 1.500 (+200%).' },
      { t: 'choice', q: '¿La aprobarías tal como está?', o: ['Sí, se vende 30% más', 'No: destruye contribución', 'Sí, pero solo por un mes'], a: 1, why: 'Con fijos de 20.000, pasaría de ganar 2.500 a perder 10.250.' },
    ],
    reflect: '¿Qué información le pedirías a la agencia antes de decidir? ¿Qué alternativa propondrías?',
    legacyKey: 'w2',
    solution: `
<p><strong>Información que falta:</strong> ¿las ventas extra son incrementales o gente que iba a comprar igual? ¿los que compran con descuento vuelven a comprar? ¿hay stock para 650? ¿el CAC se mantiene con más volumen? ¿el objetivo es caja o liquidar stock?</p>
<p><strong>Alternativas:</strong> descuento acotado (pocos días, productos de margen alto), regalo de bajo costo, combo con accesorio, envío gratis desde cierto monto.</p>`,
  },
  cards: [
    { q: 'CAC máximo', a: 'Contribución antes de adquisición − lo que la empresa quiere conservar por venta.' },
    { q: 'ROAS de equilibrio', a: '1 ÷ margen de contribución. Margen 25% → ROAS 4.' },
    { q: 'ROAS objetivo', a: '1 ÷ el % máximo de la facturación que puede usar marketing.' },
    { q: 'MER', a: 'Facturación total ÷ inversión total en marketing. No depende de la atribución.' },
    { q: 'Ventas necesarias para compensar un descuento', a: 'Descuento ÷ (margen − descuento).' },
  ],
});

UNITS.push({
  n: 3,
  phase: 'f1',
  title: 'Unit economics',
  goal: 'Pensar en el valor del cliente en el tiempo y en cuánto conviene pagar por él.',
  summary: [
    'La unidad de análisis es el cliente, no la campaña.',
    'El LTV se calcula con contribución, nunca con facturación.',
    'LTV/CAC dice si conviene; el payback dice si la caja lo aguanta.',
  ],
  lessons: [
    {
      id: 'u3l1', title: 'La unidad es el cliente', icon: '👤',
      read: [
        { h: 'Cuatro números básicos', body: `
<ul>
<li><b>Ticket promedio</b> = facturación ÷ cantidad de pedidos.</li>
<li><b>Frecuencia</b> = pedidos ÷ clientes únicos en un período.</li>
<li><b>Tasa de recompra</b> = % de clientes que vuelve a comprar en un período.</li>
<li><b>CAC</b> = inversión de adquisición ÷ clientes <em>nuevos</em>.</li>
</ul>
<p>Pensá en una peluquería: conseguir una clienta cuesta publicidad. Si viene una vez, quizás no rinde. Si viene todos los meses durante dos años, rinde muchísimo.</p>` },
        { h: 'El error más común con el CAC', body: `
<p>Si dividís la inversión por <b>todas</b> las ventas, incluyendo clientes que ya compraban, el CAC se ve artificialmente bajo.</p>
<p>Ejemplo: $3 M de inversión, 100 ventas, pero solo 40 son clientes nuevos. CAC “maquillado”: $30.000. CAC real: <b>$75.000</b>.</p>
<div class="callout warn">Separar clientes nuevos de recurrentes es de las primeras cosas que tenés que pedir en un cliente.</div>` },
      ],
      ex: [
        { t: 'number', q: 'Facturación $50 M en 100 pedidos. ¿Ticket promedio?', a: 500000, unit: '$', why: '50.000.000 ÷ 100 = 500.000.' },
        { t: 'number', q: 'Inversión $3 M. Hubo 100 ventas, pero solo 40 de clientes nuevos. ¿CAC real?', a: 75000, unit: '$', why: '3.000.000 ÷ 40 = 75.000.' },
        { t: 'tf', q: 'Para calcular el CAC conviene dividir por todas las ventas del mes.', a: false, why: 'Se divide solo por clientes nuevos; si no, el CAC se ve más bajo de lo que es.' },
        { t: 'match', q: 'Uní cada métrica con su fórmula.', pairs: [['Ticket promedio', 'Facturación ÷ pedidos'], ['Frecuencia', 'Pedidos ÷ clientes únicos'], ['CAC', 'Inversión ÷ clientes nuevos'], ['Recompra', '% de clientes que vuelve']] },
      ],
    },
    {
      id: 'u3l2', title: 'Tres formas de CAC', icon: '🧮',
      read: [
        { h: 'Paid, blended y completo', body: `
<ul>
<li><b>CAC paid</b>: inversión en medios ÷ clientes atribuidos a medios.</li>
<li><b>CAC blended</b>: inversión total de marketing ÷ todos los clientes nuevos (incluye orgánico y referidos).</li>
<li><b>CAC completo</b>: suma agencia, herramientas, contenido y parte del equipo comercial.</li>
</ul>
<p>Ejemplo: $3 M en ads + $1 M de agencia y producción + $1 M de comisiones comerciales fijas. 40 clientes nuevos.</p>
<div class="formula">CAC paid = $3 M ÷ 40 = $75.000 · CAC completo = $5 M ÷ 40 = <b>$125.000</b></div>` },
        { h: '¿Cuál usar?', body: `
<p>Para decidir si escalar una campaña, mirás el <b>paid</b> (y el marginal, que vas a ver en la unidad 6). Para decidir si el negocio de adquisición es sano, mirás el <b>completo</b>.</p>
<p>Si un cliente solo te muestra el CAC paid, la pregunta es: <em>¿cuánto cuesta realmente traer un cliente, con todo incluido?</em></p>` },
      ],
      ex: [
        { t: 'number', q: '$4 M en ads, $2 M en agencia y equipo. 50 clientes nuevos. ¿CAC completo?', a: 120000, unit: '$', why: '6.000.000 ÷ 50 = 120.000.' },
        { t: 'number', q: 'Con los mismos datos ($4 M en ads, 50 clientes), ¿CAC paid?', a: 80000, unit: '$', why: '4.000.000 ÷ 50 = 80.000.' },
        { t: 'choice', q: '¿Qué CAC mirás para saber si el negocio de adquisición es sano?', o: ['Paid', 'Completo', 'El que da más bajo'], a: 1, why: 'Incluye todos los costos reales de conseguir clientes.' },
        { t: 'tf', q: 'El CAC blended incluye clientes que llegaron por orgánico y referidos.', a: true, why: 'Divide toda la inversión por todos los clientes nuevos.' },
      ],
    },
    {
      id: 'u3l3', title: 'LTV en contribución', icon: '💎',
      read: [
        { h: 'Cuánto vale un cliente', body: `
<div class="formula">LTV = ticket × margen de contribución × compras esperadas</div>
<p>Ticket $200.000, margen 40%, compra 3 veces → LTV = <b>$240.000</b>.</p>
<p>Si lo calculás con facturación ($600.000) vas a justificar CAC que destruyen valor. Siempre en contribución.</p>
<div class="callout">Usá plazos razonables (12 a 24 meses). Un LTV “de toda la vida” es una promesa, no un dato.</div>` },
        { h: 'Cuando el producto se compra una vez', body: `
<p>Una tapa de camioneta se compra una sola vez. El valor extra viene de:</p>
<ul>
<li><b>Accesorios</b>: el <em>attach rate</em> es el % de compradores que también compra un complemento.</li>
<li><b>Recomendaciones</b>.</li>
<li><b>Recompra</b> cuando cambia de vehículo.</li>
</ul>
<p>Pregunta práctica para Durabox: <em>de cada 10 compradores de tapa, ¿cuántos compran después un accesorio?</em></p>` },
      ],
      ex: [
        { t: 'number', q: 'Ticket $100.000, margen 50%, 4 compras en 2 años. ¿LTV?', a: 200000, unit: '$', why: '100.000 × 0,5 × 4 = 200.000.' },
        { t: 'choice', q: '¿Por qué el LTV se calcula con contribución y no con facturación?', o: ['Porque da un número más lindo', 'Porque lo que paga la adquisición es lo que queda, no lo que entra', 'Porque lo pide el contador'], a: 1, why: 'Con facturación sobreestimás el valor y pagás de más por clientes.' },
        { t: 'tf', q: 'Conviene calcular el LTV “de toda la vida” del cliente.', a: false, why: 'Mejor un horizonte medible y conservador, como 12 a 24 meses.' },
        { t: 'choice', q: '¿Qué es el attach rate?', o: ['El % de leads que compra', 'El % de compradores que suma un complemento', 'El costo de un accesorio'], a: 1, why: 'Mide cuánto se suma a la compra principal.' },
      ],
    },
    {
      id: 'u3l4', title: 'LTV/CAC y payback', icon: '⏱️',
      read: [
        { h: 'La relación entre valor y costo', body: `
<div class="formula">LTV/CAC = valor del cliente ÷ costo de conseguirlo</div>
<ul>
<li><b>Menos de 1</b>: cada cliente destruye valor.</li>
<li><b>Entre 1 y 3</b>: frágil; depende de que se cumplan los supuestos.</li>
<li><b>3 o más</b>: referencia habitual de salud (no es ley universal).</li>
</ul>` },
        { h: 'Cuánto tarda en volver la plata', body: `
<div class="formula">Payback (meses) = CAC ÷ contribución mensual del cliente</div>
<p>Si un cliente cuesta $120.000 y deja $20.000 por mes, el payback es de <b>6 meses</b>.</p>
<p>Crecer rápido con payback largo exige financiar esos meses. En empresas medianas sin espalda financiera, un payback corto vale tanto como un LTV alto.</p>` },
      ],
      ex: [
        { t: 'number', q: 'LTV $300.000 y CAC $100.000. ¿LTV/CAC?', a: 3, unit: 'x', why: '300.000 ÷ 100.000 = 3.' },
        { t: 'number', q: 'CAC $120.000. El cliente deja $20.000 por mes. ¿Payback en meses?', a: 6, unit: 'meses', why: '120.000 ÷ 20.000 = 6.' },
        { t: 'choice', q: 'LTV/CAC de 1,5. ¿Cómo lo leés?', o: ['Excelente', 'Frágil: funciona pero con poco margen de error', 'Pierde plata'], a: 1, why: 'Gana, pero cualquier desvío lo da vuelta.' },
        { t: 'tf', q: 'Una empresa rentable con payback largo puede quedarse sin caja si crece rápido.', a: true, why: 'Tiene que adelantar el CAC de muchos clientes antes de recuperarlo.' },
      ],
    },
    {
      id: 'u3l5', title: 'Cuánto pagar por un cliente', icon: '🎯',
      read: [
        { h: 'Tres criterios combinados', body: `
<ol>
<li><b>Primera compra</b>: CAC ≤ contribución de la primera venta − lo que se quiere conservar. Para negocios de compra única o con poca caja.</li>
<li><b>LTV</b>: CAC ≤ LTV ÷ 3. Para negocios con recompra probada.</li>
<li><b>Payback</b>: CAC recuperado en un plazo que la caja tolere.</li>
</ol>
<div class="callout">La decisión es de Dirección: cuánto “invertir” en clientes que pagan después depende de la caja y del riesgo, no solo de la matemática.</div>` },
      ],
      ex: [
        { t: 'choice', q: 'Empresa con poca caja y producto de compra única. ¿Qué criterio priorizás?', o: ['LTV a 5 años', 'Que la primera compra cubra el CAC', 'El CPL más bajo'], a: 1, why: 'Sin recompra ni caja, la primera venta tiene que pagar la adquisición.' },
        { t: 'number', q: 'LTV probado de $450.000. Con el criterio LTV ÷ 3, ¿CAC máximo?', a: 150000, unit: '$', why: '450.000 ÷ 3 = 150.000.' },
        { t: 'tf', q: 'Cuánto pagar por un cliente es una decisión puramente matemática.', a: false, why: 'Depende también de la caja y del riesgo que la empresa quiere asumir.' },
      ],
    },
  ],
  lab: [
    'Separá ventas de clientes nuevos y recurrentes en Durabox.',
    'Calculá el attach rate de accesorios sobre compradores de tapa.',
    'Estimá el LTV a 24 meses en contribución y el LTV/CAC por producto de entrada.',
  ],
  challenge: {
    title: '¿Qué producto de entrada conviene adquirir?',
    intro: `
<p>Dos productos para atraer clientes nuevos (en miles):</p>
<table><thead><tr><th></th><th>X</th><th>Y</th></tr></thead><tbody>
<tr><td>CAC</td><td>150</td><td>60</td></tr>
<tr><td>Contribución de la primera compra</td><td>270</td><td>135</td></tr>
<tr><td>Contribución de compras posteriores (24 meses)</td><td>15</td><td>170</td></tr>
</tbody></table>`,
    steps: [
      { t: 'number', q: 'X: ¿cuánto queda de la primera compra después del CAC?', a: 120, unit: 'mil', why: '270 − 150 = 120.' },
      { t: 'number', q: 'Y: ¿cuánto queda de la primera compra después del CAC?', a: 75, unit: 'mil', why: '135 − 60 = 75.' },
      { t: 'number', q: 'LTV/CAC de Y (LTV = 135 + 170). Redondeá a un decimal.', a: 5.1, tol: 0.1, unit: 'x', why: '305 ÷ 60 ≈ 5,1. El de X es 285 ÷ 150 = 1,9.' },
      { t: 'choice', q: '¿Dónde ponés el próximo peso?', o: ['X, porque deja más en la primera compra', 'Y, porque rinde mucho más por peso invertido', 'En ninguno'], a: 1, why: 'Y genera más valor por peso, si la recompra está medida.' },
    ],
    reflect: '¿Qué verificarías antes de mover presupuesto hacia Y? ¿En qué caso mantendrías X?',
    legacyKey: 'w3',
    solution: `
<p>Verificar que la recompra de Y esté medida en clientes reales (no supuesta), que su CAC se mantenga al escalar y que haya capacidad. Mantendría X si la empresa necesita caja rápida, porque deja más en la primera compra.</p>`,
  },
  cards: [
    { q: 'LTV', a: 'Ticket × margen de contribución × compras esperadas en el horizonte.' },
    { q: 'LTV/CAC saludable', a: 'Referencia: 3 o más. Menos de 1 destruye valor.' },
    { q: 'Payback', a: 'CAC ÷ contribución mensual del cliente.' },
    { q: 'CAC paid vs completo', a: 'Paid: solo medios. Completo: agencia, herramientas y parte del equipo comercial.' },
    { q: 'Attach rate', a: '% de compradores que suma un complemento.' },
  ],
});
