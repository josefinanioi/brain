/* Brain — contenido. Unidades 7 a 9: palancas además de la publicidad. */

UNITS.push({
  n: 7,
  phase: 'f3',
  title: 'Pricing',
  goal: 'Entender el precio como palanca, cómo lo percibe el cliente y qué promociones cuidan la ganancia.',
  summary: [
    'El precio es la palanca que más mueve la ganancia.',
    'El cliente compara tu precio con sus alternativas, no con tu costo.',
    'Una promoción se mide por la ganancia que suma, no por las ventas.',
  ],
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
  ],
  lab: [
    'En tu empresa elegida, averiguá cuánto entra de verdad por un producto según cómo paga el cliente.',
    'Diseñá una promoción con regalo o combo en vez de un % de descuento.',
    'Pensá qué producto tiene pocas alternativas y podría tolerar una suba de precio.',
  ],
  challenge: {
    title: '¿Cuotas o transferencia?',
    intro: `
<p>Roble ofrece dos formas de pago para una mesa:</p>
<ul><li><b>A</b>: 10% de descuento si pagás por transferencia.</li><li><b>B</b>: 6 cuotas sin interés. El interés lo paga Roble y le sale más caro que ese 10%.</li></ul>`,
    steps: [
      { t: 'choice', q: '¿Con cuál le queda más plata a Roble por cada mesa?', o: ['Con A, transferencia', 'Con B, cuotas', 'Igual'], a: 0, why: 'Las cuotas le cuestan más que el descuento.' },
      { t: 'choice', q: 'Además de dejar más, ¿qué otra ventaja tiene la transferencia?', o: ['Ninguna', 'La plata entra en el momento', 'Es más linda'], a: 1, why: 'Con cuotas, la plata entra más tarde o hay que pagar para adelantarla.' },
      { t: 'tf', q: 'Conviene eliminar las cuotas.', a: false, why: 'Las cuotas pueden traer gente que de otra forma no compraría.' },
      { t: 'choice', q: '¿Qué conviene comunicar más fuerte?', o: ['Solo las cuotas', 'La transferencia, sin eliminar las cuotas', 'Ninguna'], a: 1, why: 'Empujás la opción que deja más sin perder a quien solo puede pagar en cuotas.' },
    ],
    reflect: '¿Qué medirías para decidir con datos?',
    legacyKey: 'w7',
    solution: `<p>Medir cuántas ventas llegan por cada forma de pago y cuánto deja cada una. Si las cuotas traen mucha gente que no compraría de otra forma, compensan. Probar un mensaje que destaque la transferencia para quien puede pagar así.</p>`,
  },
  cards: [
    { q: '¿Por qué el precio es la palanca más fuerte?', a: 'Porque lo que subís es casi todo ganancia: el costo no cambia.' },
    { q: 'Elasticidad', a: 'Cuánto cambian las ventas cuando cambia el precio. Se prueba.' },
    { q: 'Cuotas sin interés', a: 'Un descuento escondido: la financiación la paga la empresa.' },
    { q: 'Promociones que cuidan la ganancia', a: 'Regalo de bajo costo, combo, envío gratis desde un monto, descuento acotado.' },
  ],
});

UNITS.push({
  n: 8,
  phase: 'f3',
  title: 'Portfolio y mix',
  goal: 'Decidir qué productos empujar según lo que dejan, la demanda y la capacidad.',
  summary: [
    'Cada producto deja distinto después de pagar lo que cuesta conseguir al cliente.',
    'Cambiar qué se vende cambia la ganancia sin cambiar la facturación.',
    'Un producto que deja poco puede valer por lo que trae después.',
  ],
  lessons: [
    {
      id: 'u8l1', title: 'Lo que deja cada producto', icon: '📦',
      read: [
        { h: 'No todos los productos son iguales', body: `
<p>Roble vende mesas, sillas, estantes y almohadones. Para saber cuál empujar, mirá cuatro cosas:</p>
<ul>
<li><b>Cuánto deja</b> cada uno, después de pagar lo que cuesta conseguir al cliente.</li>
<li><b>Cuánta gente lo quiere</b>.</li>
<li><b>Si el taller puede hacerlo</b> y entregarlo.</li>
<li><b>Qué papel cumple</b>: atraer clientes nuevos, dejar ganancia, que vuelvan, o dar imagen.</li>
</ul>
<div class="callout">El producto más caro no siempre es el que más conviene empujar.</div>` },
      ],
      ex: [
        { t: 'choice', q: '¿Qué producto conviene empujar?', o: ['El más caro', 'El que más deja, con demanda y capacidad para hacerlo', 'El más nuevo'], a: 1, why: 'Un precio alto no alcanza.' },
        { t: 'match', q: 'Uní cada papel con un ejemplo de Roble.', pairs: [['Atraer clientes nuevos', 'Un estante barato y fácil de comprar'], ['Dejar ganancia', 'Una mesa a medida'], ['Que vuelvan', 'Almohadones de temporada']] },
        { t: 'tf', q: 'Si un producto deja mucho pero el taller no puede hacerlo, no conviene empujarlo.', a: true, why: 'Traerías pedidos que no se pueden cumplir.' },
      ],
    },
    {
      id: 'u8l2', title: 'Margen × demanda', icon: '🗺️',
      read: [
        { h: 'Un mapa de cuatro casilleros', body: `
<table><thead><tr><th></th><th>Mucha demanda</th><th>Poca demanda</th></tr></thead><tbody>
<tr><td><b>Deja mucho</b></td><td>⭐ Empujar</td><td>Construir demanda</td></tr>
<tr><td><b>Deja poco</b></td><td>Usarlo como puerta de entrada</td><td>Revisar o dejar de vender</td></tr>
</tbody></table>
<p>Un producto que deja poco pero mucha gente quiere puede servir si <b>abre la puerta</b> a otras compras que dejan más. Sin esa segunda compra, es trabajo que no paga los gastos.</p>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada casillero con la acción.', pairs: [['Deja mucho, mucha demanda', 'Empujar'], ['Deja mucho, poca demanda', 'Construir demanda'], ['Deja poco, mucha demanda', 'Usar como puerta de entrada'], ['Deja poco, poca demanda', 'Revisar o dejar de vender']] },
        { t: 'tf', q: 'Un producto que deja poco siempre debería dejar de venderse.', a: false, why: 'Puede ser la puerta de entrada a compras que dejan más.' },
        { t: 'choice', q: 'Un producto deja mucho, pero casi nadie lo conoce. ¿Qué hacés?', o: ['Lo dejo de vender', 'Trabajo para que más gente lo conozca y lo quiera', 'Le bajo el precio a la mitad'], a: 1, why: 'Vale la pena construirle demanda.' },
      ],
    },
    {
      id: 'u8l3', title: 'El efecto mix', icon: '🎚️',
      read: [
        { h: 'Misma facturación, distinta ganancia', body: `
<p>El <b>mix</b> es la combinación de productos que vendés.</p>
<p>Imaginá dos meses en Lumen con la misma facturación. En el primero vendió sobre todo lámparas baratas que dejan poco. En el segundo, más lámparas de diseño que dejan mucho.</p>
<p>Vendió lo mismo, pero <b>el segundo mes ganó bastante más</b>.</p>
<div class="callout strong">Marketing decide el mix con lo que muestra, lo que promociona y dónde invierte.</div>` },
      ],
      ex: [
        { t: 'choice', q: '¿Cómo sube marketing la ganancia sin vender más?', o: ['No se puede', 'Empujando los productos que dejan más', 'Bajando precios'], a: 1, why: 'Cambiar el mix cambia lo que queda.' },
        { t: 'tf', q: 'Dos meses con la misma facturación siempre dejan la misma ganancia.', a: false, why: 'Depende de qué productos se vendieron.' },
        { t: 'choice', q: '¿Con qué herramientas cambia marketing el mix?', o: ['Con lo que muestra, promociona y dónde invierte', 'Cambiando los costos de fábrica', 'Con el balance'], a: 0, why: 'Decide qué productos ve y desea el cliente.' },
      ],
    },
    {
      id: 'u8l4', title: 'Cross-sell', icon: '➕',
      read: [
        { h: 'Vender algo más', body: `
<p>El <b>cross-sell</b> es ofrecerle a quien ya compra algo que lo complemente. Como en el cine: “¿le agrego pochoclos?”.</p>
<p>En Roble: a quien compra una mesa, ofrecerle las sillas o un mantel. Lo que gasta cada cliente sube y, como los complementos suelen dejar buen margen, la ganancia sube todavía más.</p>` },
        { h: 'El momento justo', body: `
<ul>
<li><b>En el presupuesto</b>: armar un combo.</li>
<li><b>En la entrega</b>: cuando ve la mesa en su casa y le faltan sillas.</li>
<li><b>Unas semanas después</b>: un mensaje con algo que combine.</li>
</ul>
<div class="callout warn">Nunca antes de que elija lo principal: primero que decida, después ofrecés.</div>` },
      ],
      ex: [
        { t: 'choice', q: '¿Cuál NO es un buen momento para ofrecer un complemento?', o: ['En el presupuesto', 'En la entrega', 'Antes de que el cliente elija lo principal'], a: 2, why: 'Primero tiene que estar decidida la compra principal.' },
        { t: 'tf', q: 'El cross-sell sube lo que gasta cada cliente.', a: true, why: 'Suma un producto a la compra.' },
        { t: 'choice', q: '¿Cuál es un ejemplo de cross-sell en Lumen?', o: ['Bajar el precio de una lámpara', 'Ofrecer la lamparita que va con la lámpara elegida', 'Hacer más anuncios'], a: 1, why: 'Complementa lo que ya está comprando.' },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, ubicá cada producto en el mapa de cuatro casilleros.',
    'Averiguá qué productos dejan más y cuáles se venden más. ¿Coinciden?',
    'Diseñá dos momentos para ofrecer un complemento en el recorrido del cliente.',
  ],
  challenge: {
    title: '¿Dónde ponés la plata extra?',
    intro: `
<p>Roble tiene un presupuesto extra de publicidad y tres opciones:</p>
<ul>
<li><b>Mesa estándar</b>: deja bien, pero al taller le queda poco lugar para hacer más.</li>
<li><b>Mesa premium</b>: deja mucho, conseguir cada cliente es caro y hay lugar en el taller.</li>
<li><b>Almohadones para clientes que ya compraron</b>: dejan poco cada uno, pero conseguir esa venta es muy barato.</li>
</ul>`,
    steps: [
      { t: 'choice', q: '¿Por qué la venta de almohadones a clientes actuales sale tan barata?', o: ['Porque ya te conocen y confían', 'Porque son baratos', 'Porque no hay competencia'], a: 0, why: 'No hay que convencerlos de nuevo: ya compraron.' },
      { t: 'choice', q: '¿Qué limita a la mesa estándar?', o: ['La demanda', 'Que el taller tiene poco lugar para hacer más', 'El precio'], a: 1, why: 'Traer más pedidos de los que se pueden hacer no sirve.' },
      { t: 'choice', q: '¿Cómo repartís?', o: ['Todo a los almohadones', 'Almohadones a quienes ya compraron, un poco a la estándar hasta llenar el taller y el resto a la premium', 'Todo a la premium'], a: 1, why: 'Cada opción tiene un límite: hay pocos clientes para los almohadones y poco lugar para la estándar.' },
    ],
    reflect: '¿Qué controlarías en cada parte de la inversión?',
    legacyKey: 'w8',
    solution: `<p>Que conseguir cada cliente no se encarezca al invertir más, que los mensajes a clientes actuales no los cansen y que el taller pueda entregar las premium a tiempo.</p>`,
  },
  cards: [
    { q: 'Mapa deja × demanda', a: 'Empujar, construir demanda, usar como puerta de entrada o revisar.' },
    { q: 'Efecto mix', a: 'Misma facturación con otra combinación de productos deja distinta ganancia.' },
    { q: 'Cross-sell', a: 'Ofrecer un complemento a quien ya compra. Después de que eligió lo principal.' },
    { q: '¿Qué producto empujar?', a: 'El que más deja, con demanda y capacidad para hacerlo.' },
  ],
});

UNITS.push({
  n: 9,
  phase: 'f3',
  title: 'Operaciones + marketing',
  goal: 'Entender el stock, la capacidad, las entregas y la atención como límites del crecimiento.',
  summary: [
    'La empresa vende al ritmo de su paso más lento.',
    'Crecer necesita plata antes de cobrar.',
    'La entrega y la atención también son marketing.',
  ],
  lessons: [
    {
      id: 'u9l1', title: 'El cuello de botella', icon: '🍾',
      read: [
        { h: 'El paso más lento manda', body: `
<p>Una botella puede ser muy ancha abajo: el agua sale al ritmo del cuello.</p>
<p>En Roble, marketing trae muchos pedidos, ventas cierra muchos, el taller fabrica bastantes… pero el que <b>entrega e instala</b> solo llega a una parte. Roble vende lo que se puede entregar.</p>
<p>Más publicidad no ayuda: solo alarga la fila de espera. La solución está en el cuello.</p>
<div class="callout">La primera pregunta de una directora: <b>¿qué nos frena hoy?</b> A veces no es la falta de clientes.</div>` },
      ],
      ex: [
        { t: 'choice', q: 'Marketing trae muchos pedidos, pero el taller no da abasto. ¿Qué limita las ventas?', o: ['Marketing', 'El taller', 'Los anuncios'], a: 1, why: 'El paso más lento define cuánto se vende.' },
        { t: 'tf', q: 'Si lo que frena es la fábrica, más publicidad aumenta las entregas.', a: false, why: 'Solo alarga la espera.' },
        { t: 'choice', q: '¿Cuál es la primera pregunta de una directora?', o: ['¿Qué anuncio usamos?', '¿Qué nos frena hoy?', '¿Cuántos seguidores tenemos?'], a: 1, why: 'Si no sabés qué frena, podés invertir donde no sirve.' },
      ],
    },
    {
      id: 'u9l2', title: 'Stock y tiempos', icon: '🚚',
      read: [
        { h: 'Cuando falta y cuando sobra', body: `
<ul>
<li><b>Plazo de entrega</b>: si pasa de dos semanas a seis, compra menos gente y más gente cancela.</li>
<li><b>Falta de stock</b>: hacer publicidad de algo que no hay es tirar plata y enojar clientes.</li>
<li><b>Stock de más</b>: plata parada en el depósito. Marketing puede ayudar a moverlo.</li>
</ul>
<p>Por eso marketing y operaciones se juntan una vez por mes: qué hay, qué falta, cuánto se tarda, qué empujar y qué frenar.</p>` },
      ],
      ex: [
        { t: 'choice', q: 'Lumen tiene mucho stock acumulado de una lámpara. ¿Qué hace marketing?', o: ['Nada', 'La mueve con una acción puntual o un combo', 'Deja de venderla'], a: 1, why: 'Marketing dirige la demanda hacia donde la empresa la necesita.' },
        { t: 'choice', q: '¿Qué pasa si el plazo de entrega se triplica?', o: ['Nada', 'Compra menos gente y más gente cancela', 'Se vende más caro'], a: 1, why: 'Nadie espera para siempre.' },
        { t: 'tf', q: 'Hacer publicidad de un producto sin stock es tirar plata.', a: true, why: 'Traés gente que no vas a poder atender.' },
      ],
    },
    {
      id: 'u9l3', title: 'Caja', icon: '🏦',
      read: [
        { h: 'Crecer necesita plata antes de cobrar', body: `
<p>Roble compra madera hoy, fabrica durante semanas y cobra cuando entrega. Durante ese tiempo, la plata está “afuera”.</p>
<p>Si Roble crece mucho de golpe, tiene que comprar mucha más madera antes de cobrar. Una empresa que gana plata puede quedarse <b>sin caja</b> por crecer demasiado rápido.</p>
<div class="callout">Marketing también toca la caja: promover el pago por transferencia hace que la plata entre antes; las cuotas hacen que entre después.</div>` },
      ],
      ex: [
        { t: 'tf', q: 'Una empresa que gana plata no puede quedarse sin caja.', a: false, why: 'Si crece rápido, pone más plata antes de cobrar.' },
        { t: 'choice', q: '¿Qué acción de marketing ayuda a que la plata entre antes?', o: ['Promover el pago por transferencia', 'Más cuotas', 'Más anuncios'], a: 0, why: 'Se cobra en el momento.' },
        { t: 'choice', q: '¿Por qué crecer rápido puede ser un problema?', o: ['Porque hay que pagar materiales antes de cobrar las ventas', 'Porque se vende demasiado', 'Porque la gente se enoja'], a: 0, why: 'La plata sale antes de que entre.' },
      ],
    },
    {
      id: 'u9l4', title: 'Experiencia', icon: '⭐',
      read: [
        { h: 'Parte del producto', body: `
<p>Cuánto tardan en responderte, si te entregan cuando dijeron, cómo resuelven un problema… todo eso es parte de lo que el cliente compra.</p>
<p>Y define lo que pasa después: reseñas, recomendaciones y si vuelve a comprar.</p>
<div class="callout warn">Una promesa incumplida no aparece en el panel de Meta, pero hace que conseguir clientes cueste más en los próximos meses.</div>` },
      ],
      ex: [
        { t: 'choice', q: 'Las malas reseñas subieron por demoras. ¿Qué le pasa a marketing?', o: ['Nada', 'Conseguir clientes se vuelve más caro', 'Llega a más gente'], a: 1, why: 'La gente lee reseñas antes de comprar.' },
        { t: 'match', q: 'Uní cada medida con lo que muestra.', pairs: [['Tiempo de respuesta', 'Atención al cliente'], ['Entregas en fecha', 'Si se cumple lo prometido'], ['Reclamos', 'Calidad de la experiencia']] },
        { t: 'tf', q: 'La entrega y la atención también son marketing.', a: true, why: 'Definen reseñas, recomendaciones y recompra.' },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, dibujá cada paso desde la venta hasta la entrega.',
    'Identificá qué paso es el más lento hoy.',
    'Proponé una reunión mensual entre marketing y operaciones con 5 temas fijos.',
  ],
  challenge: {
    title: 'Ventas récord, clientes enojados',
    intro: `<p>Tras una campaña exitosa, a Roble le llegaron muchas más consultas y vendió bastante más. Pero el plazo de entrega pasó de tres semanas a siete, muchos más clientes cancelan y las malas reseñas se triplicaron. La agencia quiere seguir invirtiendo “porque funciona”.</p>`,
    steps: [
      { t: 'choice', q: '¿Qué frena a Roble?', o: ['La falta de clientes', 'La fabricación y la entrega', 'Los anuncios'], a: 1, why: 'Sobran clientes y falta capacidad para atenderlos.' },
      { t: 'choice', q: 'Si sobran clientes, ¿qué oportunidad aparece?', o: ['Vender todavía más', 'Cobrar mejor: precio y menos descuentos', 'Más publicidad'], a: 1, why: 'Cuando hay más demanda que capacidad, se puede cobrar mejor.' },
      { t: 'tf', q: 'Conviene decir plazos reales aunque se pierdan algunas ventas.', a: true, why: 'Una promesa incumplida cuesta más que una venta perdida.' },
    ],
    reflect: 'Escribí el plan de acción en 5 puntos.',
    legacyKey: 'w9',
    solution: `<ol><li>Bajar la publicidad hasta lo que se puede atender.</li><li>Empujar los productos que se pueden entregar rápido.</li><li>Decir plazos reales.</li><li>Contactar a los clientes que están esperando.</li><li>Revisar precios y descuentos, y usar los datos de demanda para discutir si conviene agrandar el taller.</li></ol>`,
  },
  cards: [
    { q: 'Cuello de botella', a: 'El paso más lento. Define cuánto se puede vender.' },
    { q: 'Caja al crecer', a: 'Crecer exige poner plata antes de cobrar. Se puede ganar y quedarse sin caja.' },
    { q: 'Cuando sobran clientes', a: 'Oportunidad de cobrar mejor y empujar lo que se puede entregar.' },
    { q: 'Plazo de entrega', a: 'Si se alarga, compra menos gente, cancelan más y empeoran las reseñas.' },
  ],
});
