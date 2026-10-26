/* Brain — Módulo 09 · Finanzas para Dirección de Marketing (Nivel 3).
   Reúne las lecciones de economía del negocio: márgenes, costo de adquisición, precio y presupuesto. */

UNITS.push({
  n: 9,
  phase: 'f3',
  title: 'Finanzas para Dirección de Marketing',
  goal: 'Entender cómo gana plata una empresa y decidir cuánto invertir en marketing sin perderla.',
  summary: [
    'Vender no es ganar: de cada venta, una parte se va en lo que cuesta hacerla y otra en mantener la empresa.',
    'El tope para pagar un cliente sale de lo que deja cada venta; el ROAS sin margen no dice nada.',
    'Un descuento chico puede comerse gran parte de la ganancia, y el presupuesto sale de un objetivo.',
  ],
  sections: [
    {
      code: '9.1', title: 'Cómo gana dinero una empresa',
      lessons: [
        {
          id: 'u1l1', title: 'Vender no es ganar', icon: '🏪',
          read: [
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
      ],
    },
    {
      code: '9.2', title: 'Economía de adquisición',
      lessons: [
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
<div class="callout">Eso último es clave: un cliente que vuelve vale más que uno que compra una sola vez. Lo vas a ver en el módulo 7, cuando hablemos de economía del cliente.</div>` },
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
      ],
    },
    {
      code: '9.3', title: 'Pricing y promociones',
      lessons: [
        {
          id: 'u7l1', title: 'La palanca más fuerte', icon: '💲',
          read: [
            { h: 'Un poco de precio, mucha ganancia', body: `
<p>Brote vende un café a $100 y le cuesta $80 hacerlo. Le quedan $20.</p>
<p>Si sube el precio a $110 y sigue vendiendo lo mismo, le quedan $30. El precio subió un poquito, pero <b>lo que gana por café subió la mitad</b>.</p>
<p>¿Por qué? Porque los $10 extra son pura ganancia: el café no cuesta más por cobrarlo más caro.</p>
<div class="callout strong">El precio es la palanca más potente… y la que marketing menos discute.</div>` },
            { h: 'Podés perder algunas ventas', body: `
<p>Si Brote sube el precio, quizás algún cliente deja de venir. ¿Es grave? Depende.</p>
<p>Como cada café ahora deja más, Brote puede vender <b>un poco menos</b> y ganar lo mismo que antes. Y cuanto menos margen tenía, más le rinde cada peso que sube.</p>` },
          ],
          ex: [
            { t: 'number', q: 'Un café a $100 cuesta $80. Si lo subís a $110 y vendés lo mismo, ¿cuánto te queda por café?', a: 30, unit: '$', why: '110 − 80 = 30. Antes quedaban 20.' },
            { t: 'tf', q: 'Si subís un poco el precio, podés vender algo menos y ganar lo mismo.', a: true, why: 'Cada venta deja más, así que necesitás menos ventas.' },
            { t: 'choice', q: '¿Por qué subir el precio rinde tanto?', o: ['Porque el producto cuesta menos', 'Porque lo que subís es casi todo ganancia', 'Porque se vende más'], a: 1, why: 'El costo no cambia: lo extra queda entero.' },
          ],
        },
        {
          id: 'u7l2', title: 'Valor percibido y elasticidad', icon: '🔮',
          read: [
            { h: 'Con qué compara el cliente', body: `
<p>A la clienta de Roble no le importa cuánto le costó la madera al taller. Compara el precio con sus <b>alternativas</b>: un mueble de cadena, uno usado, hacerlo ella misma o no comprar.</p>
<p>Y compara con el <b>valor que percibe</b>. Marketing construye ese valor: la garantía, las fotos de otros clientes, el diseño a medida, la entrega a tiempo.</p>` },
            { h: 'Elasticidad', body: `
<p>La <b>elasticidad</b> es cuánto cambian las ventas cuando cambia el precio.</p>
<ul>
<li><b>Mucha elasticidad</b>: productos iguales a los de la competencia. Si subís un poco, la gente se va.</li>
<li><b>Poca elasticidad</b>: productos únicos, urgentes o con pocas alternativas. Podés subir sin perder tanto.</li>
</ul>
<div class="callout">La elasticidad no se adivina: se prueba. Subís en un producto o una zona, y medís.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué ayuda a sostener un precio más alto?', o: ['Más anuncios', 'Que el cliente vea más valor que en sus alternativas', 'Bajar costos'], a: 1, why: 'El cliente paga más cuando ve más valor.' },
            { t: 'choice', q: '¿Dónde esperás que una suba de precio haga perder más ventas?', o: ['Un producto igual al de la competencia', 'Un mueble a medida con garantía', 'Un repuesto urgente'], a: 0, why: 'Si es igual a otro, el precio decide.' },
            { t: 'tf', q: 'La elasticidad se conoce mejor probando que calculando en teoría.', a: true, why: 'Se prueba en el mercado real y se mide.' },
          ],
        },
        {
          id: 'u7l3', title: 'Promociones inteligentes', icon: '🎁',
          read: [
            { h: 'Alternativas al % de descuento', body: `
<ul>
<li><b>Regalo</b> que cuesta poco y se valora mucho: Lumen regala una lamparita de diseño que le cuesta poco y el cliente siente que vale bastante.</li>
<li><b>Combo</b>: lámpara + pantalla, con descuento solo sobre la pantalla. Sube lo que gasta cada cliente.</li>
<li><b>Descuento con condiciones</b>: desde cierto monto, solo por unos días o solo en lo que sobra de stock.</li>
<li><b>Envío gratis</b> desde cierto monto.</li>
</ul>
<div class="callout">Toda promoción se evalúa por la ganancia extra que trae, no por las ventas extra.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué promoción suele cuidar más la ganancia?', o: ['20% en toda la tienda', 'Un regalo que cuesta poco y se valora mucho', 'Bajar el precio para siempre'], a: 1, why: 'Cuesta poco y no toca el precio principal.' },
            { t: 'tf', q: 'La mejor promoción es la que más ventas genera.', a: false, why: 'Es la que más ganancia extra genera.' },
            { t: 'choice', q: '¿Para qué sirve un combo?', o: ['Para que cada cliente gaste más', 'Para bajar el precio de todo', 'Para vender menos'], a: 0, why: 'Suma un producto a la compra principal.' },
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
        {
          id: 'u7l4', title: 'Precio en Argentina', icon: '🇦🇷',
          read: [
            { h: 'Lo que dice la etiqueta y lo que entra', body: `
<ul>
<li><b>Precio efectivo</b>: lo que de verdad entra después del descuento por transferencia, el costo de las cuotas y las comisiones.</li>
<li><b>Cuotas sin interés</b>: el interés lo paga la empresa. Es un descuento escondido.</li>
<li><b>Inflación</b>: si lo que cobrás hoy no alcanza para volver a comprar la mercadería mañana, la empresa se achica aunque parezca que gana.</li>
<li><b>Precio por canal</b>: si el distribuidor vende más barato que vos, te competís a vos misma.</li>
</ul>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué son, en el fondo, las cuotas sin interés?', o: ['Gratis', 'Un descuento escondido', 'Un aumento de precio'], a: 1, why: 'La empresa paga la financiación.' },
            { t: 'tf', q: 'Vender a un precio que no alcanza para reponer la mercadería puede achicar la empresa.', a: true, why: 'La próxima compra de mercadería cuesta más de lo que entró.' },
            { t: 'number', q: 'Una lámpara cuesta $100 de lista y tiene 10% de descuento por transferencia. ¿Cuánto entra si pagan así?', a: 90, unit: '$', why: '100 − 10 = 90.' },
          ],
        },
        {
          id: 'w2', title: 'Caso: ¿aprobás el 15% de descuento?', icon: '💼',
          read: [
            { h: '¿Aprobás el 15% de descuento?', body: `
<p>Sos la directora de marketing de Lumen. La agencia propone un <b>15% de descuento</b> en toda la tienda y promete vender 30% más.</p>
<p>Lo que sabés: hoy cada lámpara deja <b>$45</b> después de pagar el producto, el envío y la publicidad. Con el descuento pasaría a dejar <b>$15</b>.</p>` },
          ],
          ex: [
            { t: 'choice', q: 'Lo que deja cada lámpara pasa de $45 a $15. ¿Cómo lo describís?', o: ['Bajó un poco', 'Quedó en un tercio', 'Se mantuvo'], a: 1, why: '15 es un tercio de 45.' },
            { t: 'choice', q: 'Si lo que deja cada venta queda en un tercio, ¿cuánto hay que vender para ganar lo mismo?', o: ['30% más', 'El doble', 'El triple'], a: 2, why: 'Hay que compensar con tres ventas cada una de las de antes.' },
            { t: 'choice', q: 'La agencia promete 30% más de ventas. ¿Alcanza?', o: ['Sí, de sobra', 'No: harían falta muchas más', 'Justo empata'], a: 1, why: 'Para empatar haría falta el triple, no 30% más.' },
            { t: 'choice', q: '¿Qué propondrías en lugar del 15% en toda la tienda?', o: ['Un 30% para vender todavía más', 'Un regalo de bajo costo o un combo con otro producto', 'No hacer nunca promociones'], a: 1, why: 'Se puede atraer compradores sin destruir lo que queda de cada venta.' },
            { t: 'open', q: '¿Qué información le pedirías a la agencia antes de decidir? ¿Qué alternativa propondrías?', key: 'w2', model: `<p><strong>Lo que falta saber:</strong> ¿las ventas extra son de gente nueva o de gente que iba a comprar igual? ¿Los que compran con descuento vuelven? ¿Hay stock? ¿El objetivo es ganar plata o liquidar mercadería que no sale?</p>
<p><strong>Alternativas:</strong> descuento corto y solo en productos que dejan mucho margen, regalo de bajo costo, combo con un accesorio, envío gratis desde cierto monto.</p>`, points: ['Pregunta si las ventas extra son de gente nueva', 'Pregunta por stock o por si vuelven a comprar', 'Propone una alternativa que cuide el margen', 'Liga la decisión al objetivo del negocio'] },
          ],
        },
        {
          id: 'w7', title: 'Caso: ¿cuotas o transferencia?', icon: '💼',
          read: [
            { h: '¿Cuotas o transferencia?', body: `
<p>Roble ofrece dos formas de pago para una mesa:</p>
<ul><li><b>A</b>: 10% de descuento si pagás por transferencia.</li><li><b>B</b>: 6 cuotas sin interés. El interés lo paga Roble y le sale más caro que ese 10%.</li></ul>` },
          ],
          ex: [
            { t: 'choice', q: '¿Con cuál le queda más plata a Roble por cada mesa?', o: ['Con A, transferencia', 'Con B, cuotas', 'Igual'], a: 0, why: 'Las cuotas le cuestan más que el descuento.' },
            { t: 'choice', q: 'Además de dejar más, ¿qué otra ventaja tiene la transferencia?', o: ['Ninguna', 'La plata entra en el momento', 'Es más linda'], a: 1, why: 'Con cuotas, la plata entra más tarde o hay que pagar para adelantarla.' },
            { t: 'tf', q: 'Conviene eliminar las cuotas.', a: false, why: 'Las cuotas pueden traer gente que de otra forma no compraría.' },
            { t: 'choice', q: '¿Qué conviene comunicar más fuerte?', o: ['Solo las cuotas', 'La transferencia, sin eliminar las cuotas', 'Ninguna'], a: 1, why: 'Empujás la opción que deja más sin perder a quien solo puede pagar en cuotas.' },
            { t: 'open', q: '¿Qué medirías para decidir con datos?', key: 'w7', model: `<p>Medir cuántas ventas llegan por cada forma de pago y cuánto deja cada una. Si las cuotas traen mucha gente que no compraría de otra forma, compensan. Probar un mensaje que destaque la transferencia para quien puede pagar así.</p>`, points: ['Mide ventas por forma de pago', 'Compara lo que deja cada forma de pago', 'Considera si las cuotas traen compradores nuevos', 'Propone probar un mensaje'] },
          ],
        },
      ],
    },
    {
      code: '9.4', title: 'Presupuesto y rentabilidad',
      lessons: [
        {
          id: 'u6l1', title: 'Tres formas de presupuestar', icon: '💰',
          read: [
            { h: 'De la costumbre a la hipótesis', body: `
<ul>
<li><b>Un porcentaje de lo que se factura</b>: simple, pero mira hacia atrás. Si las ventas caen, recorta justo cuando más hace falta.</li>
<li><b>Lo del año pasado más la inflación</b>: costumbre, sin una idea detrás.</li>
<li><b>Desde el objetivo</b>: “queremos tantas ventas”, y caminás el funnel al revés hasta saber cuánta plata hace falta. Es el método de una directora.</li>
</ul>
<p>Después chequeás: ¿le entra a la empresa? ¿Lo que cuesta cada cliente queda debajo del tope?</p>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué método usa una directora?', o: ['Lo del año pasado más la inflación', 'Desde el objetivo', 'Lo que propone la agencia'], a: 1, why: 'Cada peso tiene una razón y se puede controlar.' },
            { t: 'tf', q: 'Presupuestar como porcentaje de lo que se factura puede recortar inversión justo cuando hace falta.', a: true, why: 'Si caen las ventas, cae el presupuesto.' },
            { t: 'number', q: 'Roble quiere 10 ventas más y compra 1 de cada 10 personas que consultan. ¿Cuántas consultas más necesita?', a: 100, unit: 'consultas', why: '10 × 10 = 100. Recién ahí se calcula cuánto cuestan.' },
          ],
        },
        {
          id: 'u6l2', title: 'Promedio vs. marginal', icon: '📈',
          read: [
            { h: 'Lo que esconde el promedio', body: `
<p>Lumen invierte un poco más cada mes. El costo <b>promedio</b> por cliente sube apenas, y todos tranquilos.</p>
<p>Pero si mirás solo los clientes <b>extra</b> (los que llegaron gracias a la plata nueva), puede que hayan salido carísimos. El promedio los esconde mezclándolos con los baratos de antes.</p>
<p>Ese costo de los clientes extra se llama <b>CAC marginal</b>.</p>` },
            { h: 'Un ejemplo con números chicos', body: `
<p>Mes 1: Lumen gasta $100 y consigue 10 clientes.<br>Mes 2: gasta $200 y consigue 14 clientes.</p>
<p>Los $100 extra trajeron solo 4 clientes más. Cada uno de esos 4 costó $25, mucho más que los $10 de antes.</p>
<div class="callout">Para decidir si invertir más, mirá cuánto costaron los clientes extra, no el promedio.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué mide el CAC marginal?', o: ['El costo promedio de todos los clientes', 'Cuánto costaron los clientes extra que trajo la plata nueva', 'El costo de una consulta'], a: 1, why: 'Mira solo lo que agregó la última inversión.' },
            { t: 'number', q: 'Lumen sumó $100 de inversión y consiguió 4 clientes más. ¿Cuánto costó cada uno de esos clientes extra?', a: 25, unit: '$', why: '100 ÷ 4 = 25.' },
            { t: 'tf', q: 'Si el costo promedio por cliente está bien, cualquier aumento de inversión conviene.', a: false, why: 'Los clientes extra pueden estar saliendo mucho más caros que el tope.' },
          ],
        },
        {
          id: 'u6l3', title: 'Repartir: 70/20/10', icon: '🥧',
          read: [
            { h: 'Lo probado y lo nuevo', body: `
<p>Una forma simple de repartir el presupuesto:</p>
<ul>
<li><b>70%</b> en lo que ya funciona.</li>
<li><b>20%</b> en mejorar o ampliar lo que funciona (otro público, otro formato).</li>
<li><b>10%</b> en probar cosas nuevas.</li>
</ul>
<p>Así no ponés en riesgo lo que anda y, a la vez, seguís aprendiendo.</p>` },
            { h: 'Comprar demanda y sostener el sistema', body: `
<p>También conviene separar dos tipos de gasto:</p>
<ul>
<li><b>Lo que compra demanda</b>: los anuncios.</li>
<li><b>Lo que hace funcionar el sistema</b>: contenido, la herramienta donde se anotan los clientes (CRM), la agencia.</li>
</ul>
<p>Si recortás el segundo para poner más en el primero, en un tiempo los anuncios rinden menos.</p>` },
          ],
          ex: [
            { t: 'choice', q: 'Querés probar TikTok por primera vez. ¿De qué parte sale?', o: ['Del 70%', 'Del 10% para probar cosas nuevas', 'De todo el presupuesto'], a: 1, why: 'Lo nuevo se prueba sin poner en riesgo lo que funciona.' },
            { t: 'match', q: 'Clasificá cada gasto.', pairs: [['Anuncios en Meta', 'Compra demanda'], ['CRM', 'Sostiene el sistema'], ['Canal nuevo para probar', 'Probar cosas nuevas'], ['Otro público en un canal que funciona', 'Mejorar lo que funciona']] },
            { t: 'number', q: 'Con un presupuesto de $100, ¿cuánto va a probar cosas nuevas según el 70/20/10?', a: 10, unit: '$', why: 'El 10% de 100 es 10.' },
          ],
        },
        {
          id: 'u6l4', title: 'Reglas y tramos', icon: '🚥',
          read: [
            { h: 'Decidir antes de empezar', body: `
<p>Si decidís en el momento, con la ansiedad del día, te equivocás. Mejor escribir las reglas antes:</p>
<ul>
<li><b>Subir</b> si los clientes extra salen bastante por debajo del tope durante algunas semanas y hay capacidad. Subir de a poco.</li>
<li><b>Mantener</b> si están cerca del tope.</li>
<li><b>Bajar</b> si pasan el tope durante un ciclo de venta completo. No antes: las ventas llegan con demora y engañan.</li>
</ul>` },
            { h: 'Plata por tramos', body: `
<blockquote>“Liberamos la segunda parte del presupuesto si en la primera los clientes salieron debajo del tope.”</blockquote>
<p>Así el dueño no tiene que confiar a ciegas: arriesga poco, ve resultados y después decide. Convierte el presupuesto en un experimento controlado.</p>` },
          ],
          ex: [
            { t: 'choice', q: 'Una campaña pasó el tope durante 2 días. ¿Qué hacés?', o: ['La corto ya', 'Espero un ciclo de venta antes de decidir', 'La duplico'], a: 1, why: 'Dos días no alcanzan: las ventas tardan.' },
            { t: 'tf', q: 'Liberar la plata por tramos ayuda a que el dueño confíe.', a: true, why: 'Arriesga menos y ve resultados antes de seguir.' },
            { t: 'choice', q: '¿Por qué conviene escribir las reglas antes de empezar?', o: ['Para tener más papeles', 'Para no decidir con la ansiedad del momento', 'Porque lo pide la agencia'], a: 1, why: 'Con reglas previas, los números deciden y no el humor del día.' },
          ],
        },
        {
          id: 'w6', title: 'Caso: el dueño quiere duplicar', icon: '💼',
          read: [
            { h: 'El dueño quiere duplicar', body: `
<p>En los últimos tres meses, Lumen subió la inversión de a poco. El costo promedio por cliente subió apenas. Pero:</p>
<ul>
<li>Los clientes extra del segundo mes salieron un poco por encima del tope.</li>
<li>Los del tercer mes salieron muy por encima.</li>
</ul>
<p>El dueño quiere <b>duplicar</b> la inversión porque “el promedio está bien”.</p>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué número mirás para decidir?', o: ['El costo promedio', 'Lo que costaron los clientes extra', 'Los seguidores'], a: 1, why: 'Es lo que te dice qué compra la próxima plata.' },
            { t: 'choice', q: 'Si los últimos clientes extra ya pasaron el tope, ¿qué pasaría al duplicar?', o: ['Saldrían más baratos', 'Saldrían todavía más caros', 'Nada'], a: 1, why: 'Cuanto más invertís en los mismos canales, más caro sale cada cliente nuevo.' },
            { t: 'choice', q: '¿Qué recomendás?', o: ['Duplicar', 'Volver a la inversión que funcionaba, probar canales nuevos con poco y liberar más por tramos', 'Cortar toda la publicidad'], a: 1, why: 'Protege lo que anda y busca nuevos lugares donde los clientes salgan más baratos.' },
            { t: 'open', q: '¿Cómo se lo explicarías al dueño en tres frases?', key: 'w6', model: `<blockquote>“El promedio se ve bien, pero los últimos clientes que conseguimos nos costaron más de lo que dejan. Si duplicamos en los mismos canales, los próximos van a salir todavía más caros. Propongo volver a la inversión que funcionaba, probar canales nuevos con una parte chica y subir cuando los clientes extra estén debajo del tope.”</blockquote>`, points: ['Distingue el promedio de lo que costaron los clientes extra', 'Explica que duplicar encarece los próximos clientes', 'Propone volver a la inversión que funcionaba', 'Propone probar canales nuevos y liberar por tramos'] },
          ],
        },
        {
          id: 'w8', title: 'Caso: ¿dónde ponés la plata extra?', icon: '💼',
          read: [
            { h: '¿Dónde ponés la plata extra?', body: `
<p>Roble tiene un presupuesto extra de publicidad y tres opciones:</p>
<ul>
<li><b>Mesa estándar</b>: deja bien, pero al taller le queda poco lugar para hacer más.</li>
<li><b>Mesa premium</b>: deja mucho, conseguir cada cliente es caro y hay lugar en el taller.</li>
<li><b>Almohadones para clientes que ya compraron</b>: dejan poco cada uno, pero conseguir esa venta es muy barato.</li>
</ul>` },
          ],
          ex: [
            { t: 'choice', q: '¿Por qué la venta de almohadones a clientes actuales sale tan barata?', o: ['Porque ya te conocen y confían', 'Porque son baratos', 'Porque no hay competencia'], a: 0, why: 'No hay que convencerlos de nuevo: ya compraron.' },
            { t: 'choice', q: '¿Qué limita a la mesa estándar?', o: ['La demanda', 'Que el taller tiene poco lugar para hacer más', 'El precio'], a: 1, why: 'Traer más pedidos de los que se pueden hacer no sirve.' },
            { t: 'choice', q: '¿Cómo repartís?', o: ['Todo a los almohadones', 'Almohadones a quienes ya compraron, un poco a la estándar hasta llenar el taller y el resto a la premium', 'Todo a la premium'], a: 1, why: 'Cada opción tiene un límite: hay pocos clientes para los almohadones y poco lugar para la estándar.' },
            { t: 'open', q: '¿Qué controlarías en cada parte de la inversión?', key: 'w8', model: `<p>Que conseguir cada cliente no se encarezca al invertir más, que los mensajes a clientes actuales no los cansen y que el taller pueda entregar las premium a tiempo.</p>`, points: ['Controla que el costo por cliente no suba al invertir más', 'Cuida no cansar a los clientes actuales', 'Verifica la capacidad del taller', 'Revisa cada parte de la inversión por separado'] },
          ],
        },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, separá sus costos en variables y fijos, y estimá cuánto deja una venta típica.',
    'Calculá cuántas ventas necesita por mes para cubrir los costos fijos.',
    'Preguntá cuánto quiere conservar el dueño de cada venta y calculá el tope para pagar un cliente.',
    'Revisá la última promoción: ¿cuánto bajó lo que queda de cada venta y cuánto más hubo que vender?',
    'Armá el presupuesto del próximo trimestre partiendo de un objetivo de ventas.',
  ],
  challenge: {
    key: 'w1', title: '“Quiero crecer 30%, metamos más publicidad”',
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
    solution: `
<p><strong>Preguntas de directora:</strong> ¿cuánto deja cada mueble? ¿130 es lo que el taller hace en un mes bueno o lo que puede sostener siempre? ¿de dónde vienen las ventas de hoy? ¿cuántas consultas se pierden por responder tarde?</p>
<p><strong>La idea clave:</strong> “crecer 30%” no es lo mismo que “30% más clientes”. Se puede crecer respondiendo más rápido, ofreciendo las sillas, cuidando los descuentos y empujando los muebles que dejan más.</p>
<div class="callout">El orden que vas a entrenar en todo el curso: <b>dato → qué significa → qué pregunto → qué decido</b>.</div>`,
  },
  cards: [
    { q: '¿Facturar es lo mismo que ganar?', a: 'No. De lo que entra hay que restar lo que cuesta cada venta y lo que cuesta tener la empresa abierta.' },
    { q: 'Margen de contribución', a: 'Lo que queda de una venta después de todos sus costos variables. Es lo que paga la estructura.' },
    { q: 'Punto de equilibrio', a: 'Costos fijos ÷ lo que deja cada venta.' },
    { q: 'CPL vs. CAC', a: 'CPL: lo que cuesta cada consulta. CAC: lo que cuesta cada cliente que compra.' },
    { q: 'CAC máximo', a: 'Lo que deja la venta menos lo que la empresa quiere conservar.' },
    { q: 'ROAS mínimo', a: '1 ÷ margen. Cuanto menos margen, más alto tiene que ser.' },
    { q: 'La trampa del descuento', a: 'Un descuento chico en el precio puede comerse gran parte de lo que queda de cada venta.' },
    { q: 'CAC marginal', a: 'Cuánto costaron los clientes extra que trajo la plata nueva.' },
  ],
});
