/* Brain — contenido. Unidades 1 a 3: cómo gana plata una empresa.
   Tipos de ejercicio: choice, tf, number, match, order.
   Empresas ficticias que se repiten en el curso:
   - Roble: taller de muebles a medida; vende por WhatsApp.
   - Lumen: tienda online de lámparas.
   - Flow: estudio de pilates con cuota mensual.
   - Brote: cafetería de barrio. */

UNITS.push({
  n: 1,
  phase: 'f1',
  title: 'Cómo funciona económicamente una empresa',
  goal: 'Entender de dónde sale la ganancia y en qué parte del camino entra marketing.',
  summary: [
    'Vender no es ganar: de cada venta, una parte se va en lo que cuesta hacerla y otra en mantener la empresa abierta.',
    'Que un anuncio consiga contactos baratos no garantiza que la empresa gane plata.',
    'Antes de traer más clientes, hay que saber si la empresa puede atenderlos.',
  ],
  lessons: [
    {
      id: 'u1l1', title: 'Vender no es ganar', icon: '🏪',
      read: [
        { h: 'Conocé a las empresas del curso', body: `
<p>Para aprender vamos a acompañar a cuatro negocios inventados. Van a aparecer una y otra vez:</p>
<ul>
<li>🪑 <b>Roble</b>: un taller de muebles a medida. Vende por WhatsApp.</li>
<li>💡 <b>Lumen</b>: una tienda online de lámparas.</li>
<li>🧘 <b>Flow</b>: un estudio de pilates que cobra una cuota por mes.</li>
<li>☕ <b>Brote</b>: una cafetería de barrio.</li>
</ul>
<p>Son negocios distintos, pero los cuatro tienen el mismo problema: vender no alcanza, hay que <b>ganar</b>.</p>` },
        { h: 'El café de Brote', body: `
<p>Brote vende un café a $100. Ese café le cuesta $30 entre granos, leche y vaso. Le quedan $70.</p>
<p>¿Ganó $70? Todavía no. Con esa plata tiene que pagar el alquiler, la luz y el sueldo del barista. Recién lo que sobra después de todo eso es ganancia.</p>
<div class="chain strong">Lo que entra → lo que cuesta cada venta → lo que cuesta tener el local abierto → lo que sobra</div>
<div class="callout">Quedate con esto: cuando alguien te dice “facturamos mucho”, todavía no sabés si gana plata.</div>` },
        { h: 'Dónde mira una directora', body: `
<p>La mayoría de la gente de marketing mira hasta acá:</p>
<div class="chain">Inversión → anuncios → consultas → ventas</div>
<p>Una directora de marketing sigue mirando hasta el final, porque ahí es donde se sabe si valió la pena:</p>
<div class="chain strong">Inversión → consultas → ventas → lo que sobra de cada venta → ganancia → plata en la cuenta</div>
<div class="callout strong">Tu trabajo empieza donde termina el panel de Meta.</div>` },
      ],
      ex: [
        { t: 'tf', q: 'Si una empresa factura mucho, seguro gana plata.', a: false, why: 'Facturar es lo que entra. Ganar es lo que sobra después de pagar todo.' },
        { t: 'choice', q: 'Brote vende un café a $100 y le cuesta $30 hacerlo. ¿Qué tiene que pagar con los $70 que le quedan?', o: ['Nada, ya es ganancia', 'El alquiler, la luz y los sueldos', 'Otro café'], a: 1, why: 'Lo que queda de cada venta sirve primero para mantener el local abierto. Lo que sobra después es ganancia.' },
        { t: 'order', q: 'Ordená el camino completo, del primer paso al último.', items: ['Inversión', 'Consultas', 'Ventas', 'Lo que sobra de cada venta', 'Ganancia'], why: 'Marketing invierte, eso trae consultas, algunas compran, cada venta deja algo y, si alcanza para todo, queda ganancia.' },
        { t: 'choice', q: '¿Hasta dónde mira una directora de marketing?', o: ['Hasta las consultas', 'Hasta las ventas', 'Hasta la ganancia y la plata en la cuenta'], a: 2, why: 'Una venta todavía tiene que convertirse en ganancia para que valga la pena.' },
      ],
    },
    {
      id: 'u1l2', title: 'Variables, fijos y márgenes', icon: '🧾',
      read: [
        { h: 'Dos tipos de costos', body: `
<p>Pensá en Roble, el taller de muebles:</p>
<ul>
<li><b>Costos variables</b>: aparecen <em>cada vez</em> que vende una mesa. La madera, la comisión del vendedor, el envío. Si no vende, no los paga.</li>
<li><b>Costos fijos</b>: se pagan <em>vendas o no</em>. El alquiler del taller, el contador, el sueldo de la administrativa.</li>
</ul>
<div class="callout">Truco para distinguirlos: preguntate “si este mes no vendo nada, ¿lo tengo que pagar igual?”. Si la respuesta es sí, es fijo.</div>` },
        { h: 'El margen: lo que queda de cada venta', body: `
<p>El <b>margen</b> es lo que te queda de una venta después de restar lo que costó hacerla. Hay dos que vas a escuchar mucho:</p>
<ul>
<li><b>Margen bruto</b>: precio menos el costo del producto. En Roble, la mesa menos la madera y el trabajo de hacerla.</li>
<li><b>Margen de contribución</b>: precio menos <em>todos</em> los costos variables (producto, comisiones, envío). Es el que más vas a usar.</li>
</ul>
<p>Se llama “contribución” porque es lo que cada venta <b>aporta</b> para pagar los costos fijos y, después, dejar ganancia.</p>` },
        { h: 'Facturar más no es ganar más', body: `
<p>Roble vende mesas y sillas. Una mesa sale mucho más cara que una silla. Pero a la mesa le queda poco margen, porque la madera es cara, y a la silla le queda mucho.</p>
<p>Si Roble pone toda su publicidad en mesas porque “son las que más facturan”, puede terminar ganando menos que si empujara las sillas.</p>
<div class="callout strong">La pregunta no es “¿qué producto vende más caro?”, sino “¿dónde me conviene poner el próximo peso?”.</div>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada concepto con su definición.', pairs: [['Costo variable', 'Aparece con cada venta'], ['Costo fijo', 'Se paga vendas o no'], ['Margen bruto', 'Precio menos costo del producto'], ['Margen de contribución', 'Precio menos todos los costos variables']] },
        { t: 'choice', q: '¿Cuál de estos es un costo variable para Roble?', o: ['El alquiler del taller', 'La madera de cada mesa', 'El sueldo de la administrativa'], a: 1, why: 'Solo se gasta madera cuando se hace una mesa.' },
        { t: 'tf', q: 'El sueldo del contador es un costo fijo.', a: true, why: 'Se paga aunque ese mes no haya ventas.' },
        { t: 'choice', q: '¿Por qué se llama “margen de contribución”?', o: ['Porque es un impuesto', 'Porque es lo que cada venta aporta para pagar los fijos y dejar ganancia', 'Porque lo pone el dueño'], a: 1, why: 'Cada venta “contribuye” con esa parte a sostener la empresa.' },
        { t: 'choice', q: 'Las mesas facturan más, pero las sillas dejan más margen. Sin más datos, ¿qué conviene empujar?', o: ['Las mesas, porque son más caras', 'Las sillas, porque dejan más', 'Da igual'], a: 1, why: 'Lo que importa es lo que queda, no lo que entra.' },
      ],
    },
    {
      id: 'u1l3', title: 'Punto de equilibrio', icon: '⚖️',
      read: [
        { h: 'Cuántas ventas para no perder', body: `
<p>Brote tiene que pagar $7.000 por mes de alquiler, luz y sueldos. Cada café le deja $70.</p>
<p>¿Cuántos cafés tiene que vender para cubrir esos gastos? <b>100</b>. Ese es su <b>punto de equilibrio</b>: el café 100 empata; desde el 101, gana.</p>
<div class="formula">Punto de equilibrio = costos fijos ÷ lo que deja cada venta</div>
<div class="callout">Pensalo así: cada venta es un ladrillo. Primero tenés que llenar el pozo de los costos fijos. Recién después empezás a construir ganancia.</div>` },
        { h: 'Recorrer el camino al revés', body: `
<p>El dueño de Roble dice: “Quiero vender más”. La respuesta automática sería “pongamos más publicidad”. Una directora hace otra cosa: <b>empieza por el final</b>.</p>
<div class="chain strong">¿Cuántas ventas más quiero? → ¿cuántas conversaciones necesito para eso? → ¿cuántas consultas? → ¿cuánta inversión?</div>
<p>Si de cada 10 consultas compra 1, y querés 10 ventas más, necesitás unas 100 consultas más. Ahora sí podés hablar de plata.</p>` },
        { h: 'Cómo se dice frente al dueño', body: `
<blockquote>“Para vender 10 mesas más necesitamos unas 100 consultas más. Eso cuesta tanto. Y Ventas tiene que poder responderlas todas a tiempo.”</blockquote>
<p>Compará con: <em>“Propongo subir la publicidad”</em>. La primera frase explica qué se compra con la plata y qué tiene que pasar para que funcione. La segunda solo pide confianza.</p>` },
      ],
      ex: [
        { t: 'number', q: 'Brote paga $7.000 de fijos por mes y cada café le deja $70. ¿Cuántos cafés necesita vender para no perder?', a: 100, unit: 'cafés', why: '7.000 ÷ 70 = 100. Desde el café 101, gana.' },
        { t: 'tf', q: 'Después del punto de equilibrio, cada venta suma a la ganancia.', a: true, why: 'Los fijos ya están pagados, así que lo que deja cada venta nueva es ganancia.' },
        { t: 'order', q: 'Ordená la cuenta “al revés”, desde el objetivo.', items: ['Ventas que quiero', 'Conversaciones que necesito', 'Consultas que necesito', 'Inversión'], why: 'Se parte de lo que se quiere lograr y se camina hacia atrás hasta la plata necesaria.' },
        { t: 'choice', q: 'El dueño dice “hay que vender más”. ¿Cuál es tu primera pregunta?', o: ['¿Cuánto más ponemos en Meta?', '¿Cuántas ventas más queremos?', '¿Qué hace la competencia?'], a: 1, why: 'Sin un objetivo concreto no podés calcular qué hace falta para llegar.' },
      ],
    },
    {
      id: 'u1l4', title: 'CPL, CAC y el tope', icon: '🎣',
      read: [
        { h: 'El pique y el pescado', body: `
<p>Cuando salís a pescar, una cosa es cuántas veces pica y otra cuántos pescados llevás a casa.</p>
<ul>
<li><b>CPL</b> (costo por lead): cuánto te cuesta cada consulta. Es el pique.</li>
<li><b>CAC</b> (costo de adquisición de cliente): cuánto te cuesta cada persona que <em>compra</em>. Es el pescado.</li>
</ul>
<p>Un anuncio puede traer muchas consultas baratas de gente que nunca compra. El panel de Meta muestra el pique; al negocio le importa el pescado.</p>` },
        { h: '¿Cuánto podés pagar por un cliente?', body: `
<p>Si cada mesa de Roble deja $300 después de sus costos, conseguir ese cliente tiene que costar <b>bastante menos de $300</b>. Si cuesta $320, cada venta pierde plata, por más linda que se vea la campaña.</p>
<p>Ese límite se llama <b>CAC máximo</b>: lo más que podés pagar por un cliente sin perder.</p>
<div class="callout warn">Muchas empresas dicen “la consulta tiene que costar menos de tanto” sin saber de dónde sale ese número. El tope sale de lo que deja cada venta.</div>` },
        { h: 'Cuando el CPL sube y es una buena noticia', body: `
<p>Imaginá que Ventas de Roble empieza a responder más rápido y ahora compra el doble de gente que consulta.</p>
<p>Ahora Roble puede pagar <b>más</b> por cada consulta y aun así gastar lo mismo por cliente. Alguien mira el panel y dice “empeoraron los anuncios, la consulta está más cara”… mientras la empresa gana más que nunca.</p>
<div class="callout">Quedate con esto: el costo de la consulta no se juzga solo. Siempre se mira junto con cuántas consultas terminan comprando.</div>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada sigla con lo que mide.', pairs: [['CPL', 'Lo que cuesta cada consulta'], ['CAC', 'Lo que cuesta cada cliente que compra'], ['CAC máximo', 'Lo más que podés pagar por un cliente sin perder']] },
        { t: 'number', q: 'Lumen invirtió $1.000 y consiguió 10 clientes. ¿Cuánto le costó cada cliente?', a: 100, unit: '$', why: '1.000 ÷ 10 = 100. Ese es el CAC.' },
        { t: 'tf', q: 'Si el costo por consulta sube, los anuncios necesariamente empeoraron.', a: false, why: 'Si ahora compra más gente de la que consulta, cada cliente puede salir igual o más barato.' },
        { t: 'choice', q: 'Cada mesa deja $300 y conseguir el cliente cuesta $320. ¿Qué concluís?', o: ['Está bien, se vende igual', 'Cada venta pierde plata', 'Hay que bajar el costo por consulta y listo'], a: 1, why: 'Conseguir el cliente cuesta más de lo que deja su compra.' },
      ],
    },
    {
      id: 'u1l5', title: 'Capacidad y palancas', icon: '🚦',
      read: [
        { h: 'Demanda que no se puede atender', body: `
<p>Roble lanza una campaña buenísima y le llegan pedidos para 70 muebles. Pero el taller solo puede hacer 50 por mes. ¿Qué pasa?</p>
<div class="chain">demoras → clientes enojados → cancelaciones → malas reseñas → la próxima campaña rinde menos</div>
<p>Por eso, antes de traer más clientes, una directora le pregunta a quien produce: <em>“Si te traigo 30% más de pedidos, ¿llegás?”</em></p>` },
        { h: 'Cinco formas de crecer', body: `
<p>Casi todo el mundo piensa que crecer es “conseguir más clientes”. Es solo una de cinco palancas:</p>
<ol>
<li><b>Más clientes</b>.</li>
<li><b>Más conversión</b>: que compre más gente de la que ya consulta.</li>
<li><b>Más ticket</b>: que cada uno gaste más por compra.</li>
<li><b>Más frecuencia</b>: que vuelvan a comprar.</li>
<li><b>Más margen</b>: que cada venta deje más.</li>
</ol>
<div class="callout strong">Marketing suele obsesionarse con la primera. Una directora mueve las cinco.</div>` },
        { h: 'Las palancas en Roble', body: `
<ul>
<li><b>Ticket</b>: a quien compra una mesa, ofrecerle las sillas que combinan.</li>
<li><b>Conversión</b>: responder WhatsApp en minutos, no en horas.</li>
<li><b>Frecuencia</b>: volver a escribirle cuando se muda o arma otro ambiente.</li>
<li><b>Margen</b>: empujar los muebles que dejan más.</li>
<li><b>Clientes</b>: sumar arquitectos y decoradores que lo recomienden.</li>
</ul>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada palanca con un ejemplo de Roble.', pairs: [['Más ticket', 'Ofrecer las sillas que combinan con la mesa'], ['Más conversión', 'Responder WhatsApp más rápido'], ['Más frecuencia', 'El cliente vuelve a comprar'], ['Más margen', 'Empujar lo que deja más']] },
        { t: 'tf', q: 'Crecer siempre significa conseguir más clientes.', a: false, why: 'También se crece vendiendo más a los que ya consultan, subiendo el ticket, la recompra o el margen.' },
        { t: 'choice', q: 'El taller de Roble ya trabaja al máximo. ¿Qué tiene más sentido?', o: ['Duplicar la publicidad', 'Ganar más con los pedidos que ya hay: ticket y margen', 'Hacer 30% de descuento'], a: 1, why: 'Si no podés fabricar más, conviene que cada venta deje más.' },
        { t: 'choice', q: '¿Qué le preguntás a quien produce antes de lanzar una campaña grande?', o: ['¿Te gusta el anuncio?', 'Si llegan más pedidos, ¿llegás a hacerlos?', '¿Qué color preferís?'], a: 1, why: 'Traer pedidos que no se pueden cumplir termina en clientes enojados.' },
      ],
    },
  ],
  lab: [
    'Elegí una empresa que conozcas bien (un cliente, tu propio negocio o el de alguien cercano). Vas a usarla en todos los laboratorios.',
    'Hacé una lista de sus costos y separalos en dos columnas: variables y fijos.',
    'Preguntá (o estimá) cuánto le queda de una venta típica después de sus costos variables.',
    'Anotá qué datos no tenés y a quién se los pedirías.',
  ],
  challenge: {
    title: '“Quiero crecer 30%, metamos más publicidad”',
    intro: `
<p>El dueño de Roble te dice: <em>“Quiero vender 30% más. Tenemos que meter más publicidad.”</em></p>
<p>Lo que sabés:</p>
<ul>
<li>Hoy vende unos 100 muebles por mes y ya cubre sus costos fijos.</li>
<li>El taller puede hacer como mucho 130 por mes.</li>
<li>Responden los WhatsApp en unas 5 horas.</li>
<li>Casi nadie que compra una mesa se lleva también las sillas.</li>
</ul>`,
    steps: [
      { t: 'number', q: 'Si vende 100 y quiere 30% más, ¿cuántos muebles por mes tendría que hacer el taller?', a: 130, unit: 'muebles', why: '100 + 30 = 130. Justo el máximo del taller.' },
      { t: 'choice', q: '¿Cuál es el riesgo más grande escondido en el pedido?', o: ['Que los anuncios sean feos', 'Que el taller quede trabajando al 100%, sin margen para imprevistos', 'Que la competencia se entere'], a: 1, why: 'Cualquier demora o pedido extra ya no se podría cumplir.' },
      { t: 'choice', q: '¿Qué palanca podría crecer sin traer más clientes?', o: ['Ofrecer las sillas a quien compra una mesa', 'Más publicidad', 'Cambiar el logo'], a: 0, why: 'Sube el ticket con los clientes que ya están comprando.' },
      { t: 'choice', q: 'Responden en 5 horas. ¿Qué te dice eso?', o: ['Nada importante', 'Se están perdiendo consultas que ya se pagaron', 'Que hay que contratar otra agencia'], a: 1, why: 'A las 5 horas mucha gente ya le escribió a otro. Mejorar eso es crecer sin gastar más en anuncios.' },
    ],
    reflect: '¿Qué le preguntarías al dueño antes de aprobar más publicidad? ¿Qué otras formas de crecer 30% le propondrías?',
    legacyKey: 'w1',
    solution: `
<p><strong>Preguntas de directora:</strong> ¿cuánto deja cada mueble? ¿130 es lo que el taller hace en un mes bueno o lo que puede sostener siempre? ¿de dónde vienen las ventas de hoy? ¿cuántas consultas se pierden por responder tarde?</p>
<p><strong>La idea clave:</strong> “crecer 30%” no es lo mismo que “30% más clientes”. Se puede crecer respondiendo más rápido, ofreciendo las sillas, cuidando los descuentos y empujando los muebles que dejan más.</p>
<div class="callout">El orden que vas a entrenar en todo el curso: <b>dato → qué significa → qué pregunto → qué decido</b>.</div>`,
  },
  cards: [
    { q: '¿Facturar es lo mismo que ganar?', a: 'No. De lo que entra hay que restar lo que cuesta cada venta y lo que cuesta tener la empresa abierta.' },
    { q: 'Costo variable vs. fijo', a: 'El variable aparece con cada venta; el fijo se paga vendas o no.' },
    { q: 'Margen de contribución', a: 'Lo que queda de una venta después de todos sus costos variables. Es lo que paga la estructura.' },
    { q: 'Punto de equilibrio', a: 'Cuántas ventas necesitás para cubrir los costos fijos. Costos fijos ÷ lo que deja cada venta.' },
    { q: 'CPL vs CAC', a: 'CPL: lo que cuesta cada consulta. CAC: lo que cuesta cada cliente que compra.' },
    { q: 'Las 5 palancas', a: 'Clientes, conversión, ticket, frecuencia y margen.' },
  ],
});

UNITS.push({
  n: 2,
  phase: 'f1',
  title: 'Márgenes y cuánto puede pagar marketing',
  goal: 'Saber hasta cuánto conviene pagar por un cliente y leer el ROAS con criterio.',
  summary: [
    'El tope para pagar un cliente sale de lo que deja cada venta.',
    'El ROAS no dice nada si no sabés cuánto margen tiene lo que se vende.',
    'Un descuento que parece chico puede comerse casi toda la ganancia.',
  ],
  lessons: [
    {
      id: 'u2l1', title: 'Desarmar una venta', icon: '🔧',
      read: [
        { h: 'Pelar una venta como una cebolla', body: `
<p>Lumen vende una lámpara. Del precio, capa por capa, se van restando costos:</p>
<div class="chain strong">Precio → menos el producto → menos comisiones y envío → menos lo que costó conseguir al cliente → lo que queda</div>
<p>Cada capa tiene un nombre: después del producto queda el <b>margen bruto</b>; después de comisiones y envío, el <b>margen de contribución</b>; después de conseguir al cliente, lo que realmente aporta esa venta.</p>
<div class="callout strong">Facturación, margen y ganancia son tres cosas distintas.</div>` },
        { h: 'Dónde mete la mano marketing', body: `
<p>Marketing no solo trae clientes. También toca casi todas las capas:</p>
<ul>
<li>El <b>precio</b>, cuando hace promociones.</li>
<li>El <b>producto que se vende</b>, según qué lámpara empuja.</li>
<li>El <b>costo de conseguir al cliente</b>.</li>
<li>Cuánto gasta cada cliente y si vuelve.</li>
</ul>
<p>Por eso dirigir marketing no es “hacer anuncios mejores”: es decidir dónde poner los recursos para que la empresa crezca <b>sana</b>.</p>` },
      ],
      ex: [
        { t: 'order', q: 'Ordená las capas de una venta, de afuera hacia adentro.', items: ['Precio', 'Margen bruto', 'Margen de contribución', 'Lo que queda después de conseguir al cliente'], why: 'Se van restando costos en ese orden.' },
        { t: 'tf', q: 'El margen bruto es lo que la empresa gana por cada venta.', a: false, why: 'Todavía faltan comisiones, envío, lo que costó conseguir al cliente y los costos fijos.' },
        { t: 'choice', q: '¿Cuál de estas cosas también toca marketing, además de traer clientes?', o: ['El precio, con las promociones', 'El sueldo del contador', 'El alquiler'], a: 0, why: 'Cada promoción cambia lo que queda de cada venta.' },
        { t: 'number', q: 'Una lámpara se vende a $100. El producto cuesta $40 y el envío $10. ¿Cuánto queda?', a: 50, unit: '$', why: '100 − 40 − 10 = 50. Eso es el margen de contribución.' },
      ],
    },
    {
      id: 'u2l2', title: 'El CAC máximo', icon: '🚧',
      read: [
        { h: 'La frontera de marketing', body: `
<p>Si cada lámpara de Lumen deja $50, ¿podés pagar hasta $49 por conseguir al cliente? En teoría, sí: no perdés. Pero entonces la venta no aporta casi nada para pagar el alquiler ni deja ganancia.</p>
<p>Por eso el dueño define cuánto quiere <b>conservar</b> de cada venta. Si quiere quedarse con $30, lo que queda para conseguir al cliente es $20.</p>
<div class="formula">CAC máximo = lo que deja la venta − lo que la empresa quiere conservar</div>` },
        { h: 'Leer campañas con el tope en la mano', body: `
<p>Con el tope definido, cada campaña se lee distinto:</p>
<ul>
<li><b>Muy debajo del tope</b>: hay lugar para invertir más.</li>
<li><b>Cerca del tope</b>: cuidado, cualquier cambio la pasa.</li>
<li><b>Arriba del tope</b>: pierde plata… salvo que esos clientes vuelvan a comprar.</li>
</ul>
<div class="callout">Eso último es clave: un cliente que vuelve vale más que uno que compra una sola vez. Lo vas a ver en la unidad 3.</div>` },
      ],
      ex: [
        { t: 'number', q: 'Cada venta deja $50 y el dueño quiere conservar $30. ¿Cuánto es lo máximo que podés pagar por un cliente?', a: 20, unit: '$', why: '50 − 30 = 20.' },
        { t: 'choice', q: 'Una campaña consigue clientes casi al precio del tope. ¿Qué hacés?', o: ['Invertir mucho más ya', 'Mirarla con cuidado antes de invertir más', 'Apagarla'], a: 1, why: 'Está al límite: cualquier desvío la vuelve negativa.' },
        { t: 'tf', q: 'Existe un CAC máximo que sirve para todas las empresas.', a: false, why: 'Depende de lo que deja cada venta y de lo que cada empresa quiere conservar.' },
        { t: 'choice', q: 'Una campaña pasa el tope, pero sus clientes compran tres veces. ¿Qué hacés?', o: ['La apago sin mirar más', 'Miro cuánto valen esos clientes en el tiempo antes de decidir', 'Le duplico la inversión'], a: 1, why: 'La recompra puede justificar pagar más por el cliente.' },
      ],
    },
    {
      id: 'u2l3', title: 'ROAS con margen', icon: '📊',
      read: [
        { h: 'Qué es el ROAS', body: `
<p>El <b>ROAS</b> responde: <em>por cada peso que puse en anuncios, ¿cuántos pesos vendí?</em> Un ROAS de 4 quiere decir que por cada $1 en anuncios se vendieron $4.</p>
<p>Suena bien. Pero acordate: <b>vender no es ganar</b>. De esos $4, una parte se va en el producto, el envío y las comisiones.</p>` },
        { h: 'Mismo ROAS, resultados opuestos', body: `
<p>Dos tiendas tienen ROAS 4:</p>
<ul>
<li><b>Lumen</b> vende lámparas que dejan la mitad del precio. De $4 vendidos le quedan $2; pagó $1 de anuncios: <b>gana $1</b>.</li>
<li>Otra tienda vende celulares que dejan muy poco. De $4 vendidos le quedan $0,60; pagó $1 de anuncios: <b>pierde</b>.</li>
</ul>
<div class="callout">Ante “tenemos ROAS 4, está buenísimo”, tu pregunta automática es: <b>¿con qué margen?</b></div>` },
        { h: 'El ROAS mínimo', body: `
<p>Cada negocio tiene un ROAS por debajo del cual pierde plata. Depende de su margen: <b>cuanto menos margen, más alto tiene que ser el ROAS</b>.</p>
<div class="formula">ROAS mínimo = 1 ÷ margen</div>
<p>Si una venta deja la mitad (50%), el mínimo es 2. Si deja un cuarto (25%), el mínimo es 4. Y como también hay que pagar el alquiler y dejar ganancia, el objetivo real siempre va por encima del mínimo.</p>` },
      ],
      ex: [
        { t: 'choice', q: 'ROAS 5 significa que…', o: ['Se ganaron $5 por cada $1 en anuncios', 'Se vendieron $5 por cada $1 en anuncios', 'Hubo 5 ventas'], a: 1, why: 'Mide ventas, no ganancia.' },
        { t: 'tf', q: 'Dos empresas con el mismo ROAS ganan lo mismo.', a: false, why: 'Depende de cuánto margen deja lo que venden.' },
        { t: 'choice', q: '¿Qué negocio necesita un ROAS más alto para no perder?', o: ['Uno que deja mucho margen', 'Uno que deja poco margen', 'Los dos igual'], a: 1, why: 'Si cada venta deja poco, necesitás vender mucho más por cada peso de anuncios.' },
        { t: 'choice', q: '“Tenemos ROAS 4.” ¿Cuál es tu primera pregunta?', o: ['¿Con qué margen?', '¿Qué anuncio funcionó?', '¿Cuánta gente lo vio?'], a: 0, why: 'Sin el margen, el ROAS no dice si se gana o se pierde.' },
      ],
    },
    {
      id: 'u2l4', title: 'MER y atribución', icon: '🧭',
      read: [
        { h: '¿Quién se lleva el mérito?', body: `
<p>Una clienta de Lumen vio un anuncio en Instagram, días después buscó “lámparas de pie” en Google, consultó por WhatsApp y compró tres semanas más tarde.</p>
<p>¿Qué anuncio la trajo? Meta dice “yo”. Google dice “yo”. Los dos cuentan la misma venta. A eso se le dice <b>problema de atribución</b>: saber a quién darle el crédito.</p>` },
        { h: 'La mirada desde arriba', body: `
<p>El <b>MER</b> esquiva ese problema: no le pregunta a ninguna plataforma. Mira la foto completa:</p>
<div class="formula">MER = todo lo que vendió la empresa ÷ todo lo que gastó en marketing</div>
<p>No te dice qué canal funciona mejor, pero sí si el marketing <b>en conjunto</b> está rindiendo. Es como mirar la balanza del mes en vez de discutir cuál ingrediente engorda.</p>` },
        { h: 'Preguntas ante un número espectacular', body: `
<p>“Meta funciona bárbaro, tenemos ROAS 8.” Antes de festejar:</p>
<ul>
<li>¿Son ventas reales o lo que dice la plataforma?</li>
<li>¿Qué margen tienen esas ventas?</li>
<li>¿Descontamos devoluciones y cancelaciones?</li>
<li>¿Son clientes nuevos o gente que iba a comprar igual?</li>
</ul>` },
      ],
      ex: [
        { t: 'choice', q: '¿Qué problema resuelve el MER?', o: ['Elegir el mejor anuncio', 'Que cada plataforma se adjudique las mismas ventas', 'Calcular el costo por consulta'], a: 1, why: 'Mira el total de la empresa sin depender de lo que dice cada plataforma.' },
        { t: 'tf', q: 'El MER reemplaza el análisis por canal.', a: false, why: 'Es una mirada general. Para decidir entre canales todavía hace falta mirarlos por separado.' },
        { t: 'tf', q: 'Si Meta y Google se adjudican la misma venta, sumarlos cuenta esa venta dos veces.', a: true, why: 'Por eso los números de las plataformas suman más de lo que se vendió de verdad.' },
        { t: 'choice', q: '“Tenemos ROAS 8 en Meta.” ¿Qué preguntás primero?', o: ['¿Son ventas reales y con qué margen?', '¿Qué color tenía el anuncio?', '¿Cuántos likes tuvo?'], a: 0, why: 'Sin saber si es real y cuánto deja, el número no sirve para decidir.' },
      ],
    },
    {
      id: 'u2l5', title: 'Descuentos y cuotas', icon: '🏷️',
      read: [
        { h: 'La trampa del descuento', body: `
<p>Lumen vende una lámpara a $100. Le cuesta $70 entre producto y envío, así que le quedan <b>$30</b>.</p>
<p>Hace un 20% de descuento: la lámpara pasa a $80. Los costos siguen siendo $70. Ahora le quedan <b>$10</b>.</p>
<p>El precio bajó un poquito, pero <b>lo que queda bajó a un tercio</b>. Para ganar lo mismo que antes, Lumen tiene que vender el triple de lámparas.</p>
<div class="callout warn">“En el Cyber vendimos 80% más” puede querer decir que ganamos menos.</div>` },
        { h: 'Las cuotas no son gratis', body: `
<p>Cuando una tienda ofrece cuotas sin interés, el interés existe igual: lo paga <b>la tienda</b>. A la empresa le entra menos plata de la que dice el precio.</p>
<p>Pero las cuotas también hacen que compre gente que de otra forma no compraría. La pregunta no es qué opción deja más por venta, sino cuál deja más <b>en total</b>.</p>` },
      ],
      ex: [
        { t: 'tf', q: 'Si con la promo se vendió 80% más, seguro se ganó más.', a: false, why: 'Depende de cuánto bajó lo que queda de cada venta.' },
        { t: 'number', q: 'Una lámpara a $100 deja $30. Con descuento pasa a dejar $10. ¿Cuántas veces más lámparas hay que vender para ganar lo mismo?', a: 3, unit: 'veces', why: '30 ÷ 10 = 3. El triple.' },
        { t: 'choice', q: '¿Quién paga las cuotas “sin interés”?', o: ['Nadie, son gratis', 'La tienda', 'El banco, como regalo'], a: 1, why: 'La tienda recibe menos plata de la que dice el precio.' },
        { t: 'choice', q: '¿Qué alternativa suele cuidar más la ganancia que un % de descuento?', o: ['Un regalo que cuesta poco y se valora mucho', 'Un descuento más grande', 'Bajar el precio para siempre'], a: 0, why: 'El regalo cuesta poco y no toca el precio del producto principal.' },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, tomá un producto y desarmá su venta capa por capa: precio, producto, comisiones y envío.',
    'Preguntale al dueño cuánto quiere conservar de cada venta y calculá el tope para pagar un cliente.',
    'Si hace publicidad, averiguá qué ROAS reporta y preguntá con qué margen.',
    'Revisá la última promoción que hizo: ¿cuánto bajó lo que queda de cada venta?',
  ],
  challenge: {
    title: '¿Aprobás el 15% de descuento?',
    intro: `
<p>Sos la directora de marketing de Lumen. La agencia propone un <b>15% de descuento</b> en toda la tienda y promete vender 30% más.</p>
<p>Lo que sabés: hoy cada lámpara deja <b>$45</b> después de pagar el producto, el envío y la publicidad. Con el descuento pasaría a dejar <b>$15</b>.</p>`,
    steps: [
      { t: 'choice', q: 'Lo que deja cada lámpara pasa de $45 a $15. ¿Cómo lo describís?', o: ['Bajó un poco', 'Quedó en un tercio', 'Se mantuvo'], a: 1, why: '15 es un tercio de 45.' },
      { t: 'choice', q: 'Si lo que deja cada venta queda en un tercio, ¿cuánto hay que vender para ganar lo mismo?', o: ['30% más', 'El doble', 'El triple'], a: 2, why: 'Hay que compensar con tres ventas cada una de las de antes.' },
      { t: 'choice', q: 'La agencia promete 30% más de ventas. ¿Alcanza?', o: ['Sí, de sobra', 'No: harían falta muchas más', 'Justo empata'], a: 1, why: 'Para empatar haría falta el triple, no 30% más.' },
      { t: 'choice', q: '¿Qué propondrías en lugar del 15% en toda la tienda?', o: ['Un 30% para vender todavía más', 'Un regalo de bajo costo o un combo con otro producto', 'No hacer nunca promociones'], a: 1, why: 'Se puede atraer compradores sin destruir lo que queda de cada venta.' },
    ],
    reflect: '¿Qué información le pedirías a la agencia antes de decidir? ¿Qué alternativa propondrías?',
    legacyKey: 'w2',
    solution: `
<p><strong>Lo que falta saber:</strong> ¿las ventas extra son de gente nueva o de gente que iba a comprar igual? ¿Los que compran con descuento vuelven? ¿Hay stock? ¿El objetivo es ganar plata o liquidar mercadería que no sale?</p>
<p><strong>Alternativas:</strong> descuento corto y solo en productos que dejan mucho margen, regalo de bajo costo, combo con un accesorio, envío gratis desde cierto monto.</p>`,
  },
  cards: [
    { q: 'CAC máximo', a: 'Lo que deja la venta menos lo que la empresa quiere conservar.' },
    { q: 'ROAS', a: 'Cuánto se vendió por cada peso en anuncios. Mide ventas, no ganancia.' },
    { q: 'ROAS mínimo', a: '1 ÷ margen. Cuanto menos margen, más alto tiene que ser.' },
    { q: 'MER', a: 'Todo lo que vendió la empresa ÷ todo lo que gastó en marketing. No depende de las plataformas.' },
    { q: 'La trampa del descuento', a: 'Un descuento chico en el precio puede comerse gran parte de lo que queda de cada venta.' },
  ],
});

UNITS.push({
  n: 3,
  phase: 'f1',
  title: 'Unit economics',
  goal: 'Pensar en cuánto vale un cliente a lo largo del tiempo y cuánto conviene pagar por él.',
  summary: [
    'Lo que se analiza es el cliente, no la campaña.',
    'El valor de un cliente se calcula con lo que deja, no con lo que paga.',
    'Que un cliente convenga no alcanza: la plata para conseguirlo tiene que volver a tiempo.',
  ],
  lessons: [
    {
      id: 'u3l1', title: 'La unidad es el cliente', icon: '👤',
      read: [
        { h: 'Una alumna de Flow', body: `
<p>Flow, el estudio de pilates, paga publicidad para conseguir una alumna nueva.</p>
<ul>
<li>Si viene un mes y no vuelve, quizás esa publicidad no se pagó.</li>
<li>Si viene todos los meses durante dos años, rindió muchísimo.</li>
</ul>
<p>Por eso lo que importa no es la campaña sino <b>el cliente</b>: cuánto costó traerlo y cuánto deja mientras se queda.</p>` },
        { h: 'Cuatro números para conocer a tus clientes', body: `
<ul>
<li><b>Ticket promedio</b>: cuánto gasta cada vez que compra.</li>
<li><b>Frecuencia</b>: cuántas veces compra en un período.</li>
<li><b>Recompra</b>: qué parte de los clientes vuelve.</li>
<li><b>CAC</b>: cuánto costó conseguir cada cliente <em>nuevo</em>.</li>
</ul>` },
        { h: 'El error más común con el CAC', body: `
<p>Si dividís lo que gastaste en publicidad por <b>todas</b> las ventas del mes, incluís gente que ya era clienta y hubiera comprado igual. El CAC se ve más barato de lo que es.</p>
<p>En Flow: si este mes se anotaron 40 alumnas, pero 30 ya venían de antes, la publicidad solo trajo a <b>10</b>. Hay que dividir por esas 10.</p>
<div class="callout warn">Separar clientes nuevos de los que ya estaban es de lo primero que tenés que pedir en una empresa.</div>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada número con lo que mide.', pairs: [['Ticket promedio', 'Cuánto gasta por compra'], ['Frecuencia', 'Cuántas veces compra'], ['Recompra', 'Qué parte de los clientes vuelve'], ['CAC', 'Cuánto costó cada cliente nuevo']] },
        { t: 'tf', q: 'Para calcular el CAC conviene dividir por todas las ventas del mes.', a: false, why: 'Solo por los clientes nuevos. Si no, el CAC se ve más barato de lo que es.' },
        { t: 'number', q: 'Flow gastó $1.000 en publicidad y trajo 10 alumnas nuevas. ¿Cuánto costó cada una?', a: 100, unit: '$', why: '1.000 ÷ 10 = 100.' },
        { t: 'choice', q: '¿Por qué importa más el cliente que la campaña?', o: ['Porque la campaña no se puede medir', 'Porque lo que deja un cliente depende de cuánto tiempo se queda', 'Porque lo dice Meta'], a: 1, why: 'Un cliente que vuelve rinde mucho más que uno que compra una vez.' },
      ],
    },
    {
      id: 'u3l2', title: 'Tres formas de CAC', icon: '🧮',
      read: [
        { h: 'Cuánto cuesta de verdad un cliente', body: `
<p>Conseguir un cliente no solo cuesta los anuncios. También hay agencia, fotos, herramientas y parte del tiempo del equipo. Según qué incluyas, hay tres CAC:</p>
<ul>
<li><b>CAC de anuncios</b> (paid): solo lo que se pagó en publicidad.</li>
<li><b>CAC mezclado</b> (blended): todo el marketing dividido por todos los clientes nuevos, también los que llegaron solos o por recomendación.</li>
<li><b>CAC completo</b>: suma agencia, herramientas, contenido y parte del equipo de ventas.</li>
</ul>` },
        { h: '¿Cuál usar?', body: `
<p>Es como calcular cuánto te sale una torta casera: si solo contás la harina, parece regalada. Si sumás el gas, el tiempo y los moldes, ves lo que cuesta de verdad.</p>
<ul>
<li>Para decidir si subir la inversión en una campaña: el de <b>anuncios</b>.</li>
<li>Para saber si el negocio de conseguir clientes es sano: el <b>completo</b>.</li>
</ul>
<p>Si una empresa solo te muestra el de anuncios, preguntá: <em>“¿cuánto cuesta traer un cliente con todo incluido?”</em></p>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada tipo de CAC con lo que incluye.', pairs: [['De anuncios', 'Solo la publicidad'], ['Mezclado', 'Todo el marketing ÷ todos los clientes nuevos'], ['Completo', 'También agencia, herramientas y parte del equipo']] },
        { t: 'choice', q: '¿Qué CAC mirás para saber si conseguir clientes es un negocio sano?', o: ['El de anuncios', 'El completo', 'El que dé más bajo'], a: 1, why: 'Incluye todo lo que de verdad cuesta conseguir clientes.' },
        { t: 'tf', q: 'El CAC mezclado incluye clientes que llegaron por recomendación.', a: true, why: 'Divide todo el marketing por todos los clientes nuevos, vengan de donde vengan.' },
        { t: 'choice', q: '¿Cuál es siempre el más alto de los tres?', o: ['El de anuncios', 'El completo', 'Son iguales'], a: 1, why: 'Suma más costos que los otros.' },
      ],
    },
    {
      id: 'u3l3', title: 'LTV en contribución', icon: '💎',
      read: [
        { h: 'Cuánto vale un cliente', body: `
<p>El <b>LTV</b> (valor del cliente en el tiempo) responde: <em>¿cuánto me deja un cliente mientras se queda conmigo?</em></p>
<p>Una alumna de Flow paga la cuota todos los meses. De cada cuota, a Flow le queda una parte después de sus costos. El LTV es esa parte, sumada todos los meses que la alumna se queda.</p>
<div class="formula">LTV = lo que deja cada compra × cuántas veces compra</div>` },
        { h: 'Siempre con lo que queda', body: `
<p>Un error frecuente es calcular el LTV con lo que el cliente <b>paga</b> en vez de con lo que <b>deja</b>. Da un número mucho más grande, y con ese número terminás pagando de más por cada cliente.</p>
<div class="callout">Usá plazos razonables: uno o dos años. Un valor “de toda la vida” es una promesa, no un dato.</div>` },
        { h: 'Cuando se compra una sola vez', body: `
<p>Una mesa de Roble se compra una vez cada muchos años. ¿Entonces el cliente vale solo esa venta? No necesariamente:</p>
<ul>
<li>Puede sumar sillas, un aparador o almohadones.</li>
<li>Puede recomendar el taller a amigos.</li>
<li>Puede volver cuando se muda.</li>
</ul>
<p>Pregunta práctica: <em>de cada 10 personas que compran una mesa, ¿cuántas compran después otra cosa?</em></p>` },
      ],
      ex: [
        { t: 'choice', q: '¿Qué pregunta responde el LTV?', o: ['¿Cuánto cuesta un anuncio?', '¿Cuánto me deja un cliente mientras se queda?', '¿Cuántos seguidores tengo?'], a: 1, why: 'Mide el valor del cliente en el tiempo.' },
        { t: 'choice', q: '¿Por qué el LTV se calcula con lo que queda y no con lo que paga el cliente?', o: ['Porque da un número más lindo', 'Porque para pagar un cliente solo sirve lo que queda', 'Porque lo pide el contador'], a: 1, why: 'Con lo que paga sobreestimás el valor y terminás pagando de más.' },
        { t: 'number', q: 'Una alumna deja $20 por mes y se queda 10 meses. ¿Cuánto deja en total?', a: 200, unit: '$', why: '20 × 10 = 200. Ese es su LTV.' },
        { t: 'tf', q: 'Conviene calcular el LTV “de toda la vida” del cliente.', a: false, why: 'Mejor un plazo medible y prudente, de uno o dos años.' },
      ],
    },
    {
      id: 'u3l4', title: 'LTV/CAC y payback', icon: '⏱️',
      read: [
        { h: 'Comparar lo que vale con lo que cuesta', body: `
<p>Si un cliente te deja $300 en el tiempo y te costó $100 conseguirlo, deja tres veces lo que costó. Eso es el <b>LTV/CAC</b>.</p>
<ul>
<li><b>Menos de 1</b>: cada cliente cuesta más de lo que deja. Se pierde plata.</li>
<li><b>Entre 1 y 3</b>: funciona, pero con poco margen para errores.</li>
<li><b>3 o más</b>: la referencia habitual de un negocio sano (no es una ley).</li>
</ul>` },
        { h: 'Cuánto tarda en volver la plata', body: `
<p>Flow paga $100 para conseguir una alumna. La alumna le deja $20 por mes. ¿Cuánto tarda Flow en recuperar esos $100? <b>Cinco meses</b>. Eso es el <b>payback</b>.</p>
<p>Ahora imaginá que Flow consigue 50 alumnas en un mes: paga todo hoy y recupera de a poco. Si no tiene plata guardada para esos cinco meses, se queda sin caja <b>aunque el negocio sea bueno</b>.</p>
<div class="callout warn">En empresas sin mucho respaldo financiero, recuperar rápido vale tanto como que el cliente valga mucho.</div>` },
      ],
      ex: [
        { t: 'number', q: 'Un cliente deja $300 en el tiempo y costó $100 conseguirlo. ¿Cuántas veces deja lo que costó?', a: 3, unit: 'veces', why: '300 ÷ 100 = 3.' },
        { t: 'number', q: 'Conseguir una alumna cuesta $100 y deja $20 por mes. ¿En cuántos meses se recupera?', a: 5, unit: 'meses', why: '100 ÷ 20 = 5.' },
        { t: 'choice', q: 'LTV/CAC de 1,5. ¿Cómo lo leés?', o: ['Excelente', 'Funciona, pero con poco margen de error', 'Pierde plata'], a: 1, why: 'Gana, pero cualquier desvío lo da vuelta.' },
        { t: 'tf', q: 'Una empresa que gana plata puede quedarse sin caja si crece muy rápido.', a: true, why: 'Paga hoy por muchos clientes y recupera esa plata de a poco.' },
      ],
    },
    {
      id: 'u3l5', title: 'Cuánto pagar por un cliente', icon: '🎯',
      read: [
        { h: 'Tres criterios', body: `
<p>No hay una única respuesta. Depende de cómo es el negocio:</p>
<ol>
<li><b>Que la primera compra lo pague</b>: para negocios donde se compra una sola vez o donde hay poca plata en caja. Roble, por ejemplo.</li>
<li><b>Que el cliente valga bastante más de lo que cuesta</b>: para negocios donde está comprobado que la gente vuelve. Flow, por ejemplo.</li>
<li><b>Que la plata vuelva a tiempo</b>: en un plazo que la caja aguante.</li>
</ol>
<div class="callout">La decisión final es del dueño: cuánto “adelantar” por clientes que pagan después depende de la caja y del riesgo que quiera correr.</div>` },
        { h: 'Cuidado con lo que todavía no pasó', body: `
<p>Es tentador decir “este cliente va a comprar cinco veces, así que puedo pagar mucho por él”. Pero si esa recompra es una suposición y no un dato, estás apostando.</p>
<p>Usá recompras que ya viste en clientes reales, no las que te gustaría ver.</p>` },
      ],
      ex: [
        { t: 'choice', q: 'Empresa con poca caja y producto que se compra una vez. ¿Qué criterio usás?', o: ['Lo que vale el cliente en cinco años', 'Que la primera compra pague lo que costó conseguirlo', 'El costo por consulta más bajo'], a: 1, why: 'Sin recompra ni caja, la primera venta tiene que alcanzar.' },
        { t: 'tf', q: 'Cuánto pagar por un cliente es una decisión puramente matemática.', a: false, why: 'Depende también de la caja y del riesgo que la empresa quiere correr.' },
        { t: 'choice', q: '¿Qué recompra usás para decidir cuánto pagar por un cliente?', o: ['La que ya se vio en clientes reales', 'La que esperamos que pase', 'La de la competencia'], a: 0, why: 'Lo demás es una apuesta.' },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, separá las ventas del último mes entre clientes nuevos y clientes que ya estaban.',
    'Averiguá qué parte de los clientes vuelve a comprar en un año.',
    'Estimá cuánto deja un cliente típico en un año y comparalo con lo que cuesta conseguirlo.',
  ],
  challenge: {
    title: '¿Qué clientes conviene salir a buscar?',
    intro: `
<p>Flow puede hacer publicidad para dos cosas:</p>
<ul>
<li><b>Clase suelta</b>: atrae a mucha gente que viene una vez y casi nunca vuelve. Conseguir cada una es barato.</li>
<li><b>Plan mensual</b>: atrae menos gente y conseguir cada una cuesta el doble, pero 7 de cada 10 se quedan más de un año.</li>
</ul>`,
    steps: [
      { t: 'choice', q: '¿Cuál deja más en la primera compra?', o: ['La clase suelta, porque es barata de conseguir', 'El plan mensual', 'No se puede saber'], a: 0, why: 'Es más barato conseguirla, así que la primera venta rinde más.' },
      { t: 'choice', q: '¿Cuál vale más en el tiempo?', o: ['La clase suelta', 'El plan mensual, porque la mayoría se queda', 'Valen lo mismo'], a: 1, why: 'Una alumna que se queda un año deja muchas cuotas.' },
      { t: 'tf', q: 'Que conseguir una alumna del plan cueste el doble la hace peor negocio.', a: false, why: 'Si deja mucho más de lo que cuesta, pagar el doble conviene.' },
      { t: 'choice', q: '¿Dónde ponés el próximo peso?', o: ['En la clase suelta', 'En el plan mensual, si Flow tiene caja para esperar', 'En ninguno'], a: 1, why: 'Rinde más por peso invertido, pero recupera la plata más lento.' },
    ],
    reflect: '¿Qué verificarías antes de mover la publicidad al plan mensual? ¿En qué caso seguirías con la clase suelta?',
    legacyKey: 'w3',
    solution: `
<p>Verificar que el “7 de cada 10 se quedan” salga de alumnas reales y no de una suposición, que el costo de conseguirlas se mantenga si se invierte más y que haya lugar en las clases. Seguiría con la clase suelta si Flow necesita plata rápido, o si se comprueba que de ahí salen alumnas que después se pasan al plan.</p>`,
  },
  cards: [
    { q: 'LTV', a: 'Cuánto deja un cliente mientras se queda: lo que deja cada compra × cuántas veces compra.' },
    { q: 'LTV/CAC', a: 'Cuántas veces deja lo que costó. Referencia sana: 3 o más. Menos de 1 pierde plata.' },
    { q: 'Payback', a: 'Cuánto tarda en volver la plata que costó conseguir al cliente.' },
    { q: 'CAC de anuncios vs. completo', a: 'De anuncios: solo publicidad. Completo: también agencia, herramientas y parte del equipo.' },
    { q: 'Error común con el CAC', a: 'Dividir por todas las ventas en vez de solo por los clientes nuevos.' },
  ],
});
