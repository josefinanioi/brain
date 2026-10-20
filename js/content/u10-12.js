/* Brain — contenido. Unidades 10 a 12: dirigir. */

UNITS.push({
  n: 10,
  phase: 'f4',
  title: 'Growth',
  goal: 'Separar el crecimiento en sus palancas y elegir cuáles mover con método.',
  summary: [
    'Las ventas son una multiplicación: gente que llega × cuántos compran × cuánto gastan × cuántas veces vuelven.',
    'Mejorar un poco varias palancas suma más que mejorar mucho una sola.',
    'Una prueba sin una regla para decidir qué hacer después no es un experimento.',
  ],
  lessons: [
    {
      id: 'u10l1', title: 'El árbol de crecimiento', icon: '🌳',
      read: [
        { h: 'Una multiplicación', body: `
<p>Lo que vende una empresa se puede partir en cuatro ramas:</p>
<div class="formula">Ventas = gente que llega × cuántos compran × cuánto gasta cada uno × cuántas veces vuelve</div>
<p>Cada rama tiene sus propias ramitas. Por ejemplo, “cuánto gasta” depende del precio y de si suma complementos.</p>` },
        { h: 'Por qué conviene mover varias', body: `
<p>Como las ramas se multiplican, una mejora chica en cada una se <b>potencia</b>. Mejorar un poquito las cuatro suele dar más que lo que parece sumando.</p>
<p>Y además es más fácil: mejorar un poco en cuatro lados cuesta menos que duplicar uno solo.</p>
<div class="callout">Ejemplo en Brote: un poco más de gente que entra, un poco más que pide algo para acompañar el café, un poco más que vuelve a la semana. Ninguna es espectacular; juntas cambian el mes.</div>` },
      ],
      ex: [
        { t: 'order', q: 'Ordená las ramas como aparecen en la multiplicación.', items: ['Gente que llega', 'Cuántos compran', 'Cuánto gasta cada uno', 'Cuántas veces vuelve'], why: 'Ventas = gente × cuántos compran × cuánto gastan × cuántas veces vuelven.' },
        { t: 'tf', q: 'Mejorar un poco varias ramas suele dar más que lo que parece sumando.', a: true, why: 'Como se multiplican, las mejoras se potencian.' },
        { t: 'choice', q: '¿Qué suele ser más fácil?', o: ['Duplicar una sola rama', 'Mejorar un poco varias ramas', 'Las dos cosas cuestan igual'], a: 1, why: 'Las mejoras chicas son más alcanzables.' },
      ],
    },
    {
      id: 'u10l2', title: 'Retención y cohortes', icon: '🔁',
      read: [
        { h: 'Seguir a un grupo de clientes', body: `
<p>Una <b>cohorte</b> es un grupo de clientes que empezó en el mismo momento. Por ejemplo, las alumnas que se anotaron en Flow en enero.</p>
<p>Seguís a ese grupo y mirás: ¿cuántas siguen a los 3 meses? ¿Y a los 6? ¿Y al año?</p>
<p>Después comparás con el grupo de abril. Si las de abril se quedan más, algo mejoró: las clases, la atención, los mensajes de seguimiento.</p>` },
        { h: 'Retener suele ser más barato', body: `
<p>Para conseguir una alumna nueva, Flow tiene que pagar publicidad. Para que una alumna actual se quede, alcanza con que esté contenta.</p>
<div class="callout strong">Cuidar a los clientes que ya tenés casi siempre sale más barato que conseguir nuevos.</div>` },
      ],
      ex: [
        { t: 'choice', q: 'Las alumnas de abril siguen viniendo más que las de enero a los 6 meses. ¿Qué indica?', o: ['Nada', 'Algo mejoró en la experiencia o el seguimiento', 'Que abril tuvo más alumnas'], a: 1, why: 'Comparar cohortes muestra si los cambios funcionan.' },
        { t: 'tf', q: 'Retener clientes suele ser más barato que conseguir nuevos.', a: true, why: 'No hay que volver a pagar para traerlos.' },
        { t: 'choice', q: '¿Qué es una cohorte?', o: ['Un tipo de anuncio', 'Un grupo de clientes que empezó en el mismo momento', 'Un descuento'], a: 1, why: 'Se sigue al grupo para ver cuántos se quedan.' },
      ],
    },
    {
      id: 'u10l3', title: 'Expansión', icon: '🧭',
      read: [
        { h: 'Tres caminos para crecer', body: `
<ul>
<li><b>Producto nuevo para los mismos clientes</b>: Roble suma una línea de muebles de jardín. Poco riesgo: ya te conocen.</li>
<li><b>Mismo producto, otro canal</b>: vender a través de casas de decoración. Llega a más gente, pero deja menos y hay que cuidar que no compita con vos.</li>
<li><b>Mercado nuevo</b>: vender en Uruguay. Más riesgo: hay que confirmar que hay demanda y que los costos y el envío cierran.</li>
</ul>
<div class="callout">Cuanto más te alejás de lo que ya hacés y de a quién se lo vendés, más riesgo y más hay que invertir para aprender.</div>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada camino con un ejemplo de Roble.', pairs: [['Producto nuevo, mismos clientes', 'Muebles de jardín'], ['Mismo producto, otro canal', 'Vender en casas de decoración'], ['Mercado nuevo', 'Vender en Uruguay']] },
        { t: 'choice', q: '¿Qué camino tiene menos riesgo?', o: ['Producto nuevo en un mercado nuevo', 'Producto nuevo para los clientes actuales', 'Mercado nuevo'], a: 1, why: 'Aprovecha la confianza de quien ya te conoce.' },
        { t: 'tf', q: 'Vender por otro canal puede dejar menos por cada venta.', a: true, why: 'El intermediario se queda con una parte.' },
      ],
    },
    {
      id: 'u10l4', title: 'Experimentar con método', icon: '🧪',
      read: [
        { h: 'Elegir qué probar primero', body: `
<p>Siempre hay más ideas que tiempo. Para ordenarlas, puntuá cada una del 1 al 10 en tres cosas (a esto se le dice <b>ICE</b>):</p>
<ul>
<li><b>Impacto</b>: si funciona, ¿cuánto cambia?</li>
<li><b>Confianza</b>: ¿qué tan segura estás de que va a funcionar?</li>
<li><b>Facilidad</b>: ¿qué tan fácil es hacerlo?</li>
</ul>
<p>Las ideas con mejor puntaje van primero.</p>` },
        { h: 'Cómo se arma una prueba', body: `
<p>Cada prueba necesita, antes de empezar:</p>
<ul>
<li><b>Una hipótesis</b>: “si respondemos en menos de 15 minutos, más gente va a llegar a hablar con un vendedor”.</li>
<li><b>Qué vas a medir</b>.</li>
<li><b>Cuánto dura</b>.</li>
<li><b>Qué vas a hacer según el resultado</b>.</li>
</ul>
<div class="callout">“Probemos TikTok a ver qué pasa” no es un experimento: es una actividad.</div>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada letra de ICE con su pregunta.', pairs: [['Impacto', 'Si funciona, ¿cuánto cambia?'], ['Confianza', '¿Qué tan segura estoy?'], ['Facilidad', '¿Qué tan fácil es hacerlo?']] },
        { t: 'choice', q: '¿Qué le falta a “probemos TikTok a ver qué pasa”?', o: ['Presupuesto', 'Hipótesis, qué medir y qué hacer según el resultado', 'Videos'], a: 1, why: 'Sin eso no sabés si funcionó ni qué hacer después.' },
        { t: 'tf', q: 'Qué hacer según el resultado se decide antes de empezar la prueba.', a: true, why: 'Si lo decidís después, el resultado se interpreta como te convenga.' },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, partí las ventas del último año en: clientes × cuánto gasta cada uno × cuántas veces compra.',
    'Elegí un grupo de clientes de un mes y fijate cuántos volvieron después.',
    'Listá 5 ideas de crecimiento y puntuálas con ICE.',
  ],
  challenge: {
    title: '¿De dónde sale el crecimiento?',
    intro: `<p>El dueño de Lumen quiere crecer 25% este año. Hoy:</p>
<ul>
<li>De cada 100 visitas a la tienda, compran pocas.</li>
<li>Muy pocos clientes suman una lamparita o una pantalla a su compra.</li>
<li>Casi nadie vuelve a comprar.</li>
</ul>`,
    steps: [
      { t: 'tf', q: 'La única forma de crecer 25% es traer 25% más de visitas.', a: false, why: 'También se puede mejorar cuántos compran, cuánto gastan y si vuelven.' },
      { t: 'choice', q: '¿Qué palanca suma ventas sin pagar más publicidad?', o: ['Ofrecer la lamparita o la pantalla en el carrito', 'Más anuncios', 'Bajar todos los precios'], a: 0, why: 'Sube lo que gasta cada cliente que ya está comprando.' },
      { t: 'choice', q: '¿Cuál es la mejor estrategia?', o: ['Solo más visitas', 'Combinar un poco de cada palanca', 'Bajar precios'], a: 1, why: 'Las mejoras chicas en varias ramas se multiplican.' },
    ],
    reflect: 'Armá tu combinación de palancas: ¿qué acción concreta harías en cada una?',
    legacyKey: 'w10',
    solution: `<ul><li><b>Cuántos compran</b>: mejores fotos, reseñas visibles y responder rápido las dudas.</li><li><b>Cuánto gastan</b>: ofrecer la lamparita y la pantalla en el carrito.</li><li><b>Cuántas veces vuelven</b>: un mensaje a los 2 meses con algo que combine.</li><li><b>Gente que llega</b>: un poco más de publicidad.</li></ul><p>Ninguna sola llega al 25%; juntas, sí. Y antes, chequear que haya stock para vender más.</p>`,
  },
  cards: [
    { q: 'Árbol de crecimiento', a: 'Ventas = gente que llega × cuántos compran × cuánto gastan × cuántas veces vuelven.' },
    { q: 'Cohorte', a: 'Grupo de clientes que empezó en el mismo momento, seguido en el tiempo.' },
    { q: 'ICE', a: 'Impacto, confianza y facilidad. Sirve para elegir qué probar primero.' },
    { q: 'Expandirse', a: 'Cuanto más lejos de lo que ya hacés y de tus clientes, más riesgo.' },
  ],
});

UNITS.push({
  n: 11,
  phase: 'f4',
  title: 'Estrategia empresarial',
  goal: 'Mercado, competencia, posicionamiento, canales y en qué se pone la plata.',
  summary: [
    'El tamaño del mercado dice por dónde conviene crecer.',
    'Un buen posicionamiento permite sostener el precio.',
    'La estrategia real es en qué se ponen la plata, el tiempo y la gente.',
  ],
  lessons: [
    {
      id: 'u11l1', title: 'TAM, SAM y SOM', icon: '🌎',
      read: [
        { h: 'Cuánto mercado hay', body: `
<p>Pensá en una pizza:</p>
<ul>
<li><b>TAM</b>: la pizza entera. Todos los que alguna vez podrían comprar algo como lo tuyo.</li>
<li><b>SAM</b>: las porciones que llegás a servir. La parte que tu producto y tus canales pueden atender.</li>
<li><b>SOM</b>: las porciones que realmente te podés comer en uno a tres años.</li>
</ul>` },
        { h: 'Para qué sirve', body: `
<p>Si Brote ya atiende a casi todo su barrio, más publicidad en el barrio rinde poco: queda poca pizza. Para crecer tiene que buscar otra pizza: otro barrio, otro producto (tortas para llevar), otro canal (delivery).</p>
<p>Si en cambio tiene una porción chica de un mercado grande, el camino es ganar más de ese mismo mercado.</p>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada sigla con su parte de la pizza.', pairs: [['TAM', 'La pizza entera'], ['SAM', 'Las porciones que llegás a servir'], ['SOM', 'Lo que te podés comer en 1–3 años']] },
        { t: 'choice', q: 'Brote ya atiende a casi todo su barrio. ¿Por dónde crece?', o: ['Más publicidad en el mismo barrio', 'Otro barrio, otro producto u otro canal', 'Bajar precios'], a: 1, why: 'Queda poco para ganar en el mismo lugar.' },
        { t: 'tf', q: 'Si tenés una parte chica de un mercado grande, todavía podés crecer mucho ahí.', a: true, why: 'Queda mucha pizza por ganar.' },
      ],
    },
    {
      id: 'u11l2', title: 'Posicionamiento', icon: '🎯',
      read: [
        { h: 'Contra qué competís', body: `
<p>La competencia de Roble no son solo otros talleres. Son todas las <b>alternativas</b> que tiene el cliente: muebles de cadena, usados, armarlo uno mismo, o no comprar.</p>
<p>El <b>posicionamiento</b> es el lugar que querés ocupar en la cabeza del cliente frente a esas alternativas. Se puede escribir en una frase:</p>
<blockquote>Para [cliente] que [necesidad], [marca] es [qué es] que [beneficio principal], a diferencia de [alternativa], porque [por qué creerle].</blockquote>` },
        { h: 'No es solo comunicación', body: `
<p>Para Roble: <em>“Para familias que quieren un mueble que dure, Roble es un taller a medida que se adapta a tu espacio, a diferencia de los muebles de cadena, porque cada pieza se hace con madera maciza y tiene garantía.”</em></p>
<p>Una buena posición permite <b>cobrar más</b> sin perder clientes. Por eso es una decisión de negocio, no solo de cómo se habla.</p>` },
      ],
      ex: [
        { t: 'choice', q: '¿Quién es competencia de un mueble a medida?', o: ['Solo otros talleres', 'Talleres, muebles de cadena, usados y no comprar', 'Nadie'], a: 1, why: 'Cualquier alternativa que el cliente considere.' },
        { t: 'tf', q: 'El posicionamiento es solo un tema de comunicación.', a: false, why: 'Define cuánto podés cobrar.' },
        { t: 'choice', q: 'En la frase de posicionamiento, ¿para qué sirve “porque…”?', o: ['Para dar una razón para creerle', 'Para poner el precio', 'Para nombrar al dueño'], a: 0, why: 'Sin una prueba, el beneficio es una promesa vacía.' },
      ],
    },
    {
      id: 'u11l3', title: 'Canales', icon: '🛣️',
      read: [
        { h: 'Cada canal tiene su precio', body: `
<table><thead><tr><th>Canal</th><th>Cuánto deja</th><th>Control</th><th>Alcance</th></tr></thead><tbody>
<tr><td>Venta directa / WhatsApp</td><td>Mucho</td><td>Mucho</td><td>Lo que dé el equipo</td></tr>
<tr><td>Tienda online propia</td><td>Mucho</td><td>Mucho</td><td>Depende de las visitas</td></tr>
<tr><td>Revendedores</td><td>Menos</td><td>Poco</td><td>Mucho</td></tr>
<tr><td>Marketplaces</td><td>Menos</td><td>Algo</td><td>Mucho</td></tr>
</tbody></table>
<p>La pregunta no es qué canal es mejor, sino qué combinación deja más sin que los canales se peleen entre sí (precios parejos, zonas, roles claros).</p>` },
      ],
      ex: [
        { t: 'choice', q: '¿Qué riesgo hay al vender directo y por revendedores a la vez?', o: ['Ninguno', 'Que compitan en precio y se roben clientes', 'Vender demasiado'], a: 1, why: 'Sin reglas de precio y zonas, se pisan.' },
        { t: 'choice', q: '¿Qué canal suele llegar a más gente pero dejar menos?', o: ['Venta directa', 'Revendedores', 'Tienda online propia'], a: 1, why: 'El revendedor se queda con una parte a cambio de llegar más lejos.' },
        { t: 'tf', q: 'Hay un canal que es mejor para todas las empresas.', a: false, why: 'Se trata de encontrar la mejor combinación para cada una.' },
      ],
    },
    {
      id: 'u11l4', title: 'Nuevo mercado', icon: '🗺️',
      read: [
        { h: 'Antes de cruzar la frontera', body: `
<p>A Roble le llegan consultas desde Uruguay sin haber hecho publicidad allá. ¿Conviene ir? Antes, una lista de chequeo:</p>
<ol>
<li><b>Demanda</b>: ¿cuánta gente lo busca? ¿Cuántas consultas llegan solas?</li>
<li><b>Competencia y precios</b> de allá.</li>
<li><b>Costos</b>: envío, impuestos, tipo de cambio.</li>
<li><b>Canal</b>: ¿vender directo o con un socio local?</li>
<li><b>Capacidad</b>: ¿el taller y la atención aguantan?</li>
<li><b>Cuánto invertir para aprender</b> y cuándo frenar.</li>
</ol>
<div class="callout">Una prueba chica, con reglas de seguir o frenar decididas antes de empezar.</div>` },
      ],
      ex: [
        { t: 'choice', q: '¿Cuál es la forma más sensata de probar un mercado nuevo?', o: ['Invertir fuerte desde el inicio', 'Una prueba chica con reglas para seguir o frenar', 'Esperar a que vaya la competencia'], a: 1, why: 'Limita el riesgo y te deja aprender rápido.' },
        { t: 'tf', q: 'Que lleguen consultas solas desde otro país es una señal de demanda.', a: true, why: 'Es interés que aparece sin haber invertido.' },
        { t: 'choice', q: '¿Qué costo cambia al vender a otro país?', o: ['Ninguno', 'El envío y los impuestos', 'El nombre de la marca'], a: 1, why: 'Llevar el producto más lejos cuesta más.' },
      ],
    },
    {
      id: 'u11l5', title: 'Asignar recursos', icon: '⚖️',
      read: [
        { h: 'Decir que no', body: `
<p>La estrategia real no es lo que dice un documento: es <b>en qué se ponen la plata, el tiempo y la gente</b>. Un reparto sano:</p>
<ul>
<li><b>Cuidar lo principal</b>: lo que hoy paga las cuentas. Recibe la mayor parte.</li>
<li><b>Crecer al lado</b>: productos o clientes cercanos.</li>
<li><b>Explorar el futuro</b>: ideas nuevas, con poca plata.</li>
</ul>
<p>Cada idea nueva compite con las que ya existen por los mismos recursos. Decir que sí a algo es decir que no a otra cosa.</p>` },
      ],
      ex: [
        { t: 'choice', q: 'Aparece una idea atractiva. ¿Qué preguntás primero?', o: ['¿Cuándo arrancamos?', '¿Qué dejamos de hacer para hacerla?', '¿Quién la diseña?'], a: 1, why: 'Los recursos son limitados.' },
        { t: 'order', q: 'Ordená de lo que más recursos recibe a lo que menos.', items: ['Cuidar lo principal', 'Crecer al lado', 'Explorar el futuro'], why: 'Lo principal paga las cuentas; lo nuevo se explora con poca plata.' },
        { t: 'tf', q: 'La estrategia de una empresa se ve en dónde pone la plata y el tiempo.', a: true, why: 'Más que en lo que dice un documento.' },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, estimá la pizza: el mercado total, la parte que puede atender y la que puede ganar.',
    'Escribí su frase de posicionamiento.',
    'Si piensa crecer en un lugar nuevo, armá la lista de chequeo con lo que sabés y lo que falta.',
  ],
  challenge: {
    title: '¿Uruguay o más Argentina?',
    intro: `<p>Roble tiene un presupuesto para el semestre. En Argentina conoce bien sus números: sabe cuánto cuesta cada cliente y cuánto deja. En Uruguay no tiene datos, el mercado es mucho más chico y mandar cada mueble cuesta más. Pero llegan consultas desde allá sin haber invertido nada.</p>`,
    steps: [
      { t: 'choice', q: 'Si en Uruguay todo lo demás fuera igual, ¿cada venta dejaría más o menos?', o: ['Más', 'Menos, por el envío', 'Igual'], a: 1, why: 'El envío extra se come parte de lo que queda.' },
      { t: 'choice', q: '¿Cómo repartís?', o: ['Todo a Uruguay', 'La mayor parte a Argentina y una parte chica a probar en Uruguay', 'Todo a Argentina'], a: 1, why: 'Lo conocido rinde; la señal de Uruguay merece una prueba acotada.' },
      { t: 'tf', q: 'Antes de empezar la prueba en Uruguay, conviene decidir qué resultado haría seguir o frenar.', a: true, why: 'Así el resultado decide y no las ganas.' },
    ],
    reflect: '¿Qué regla pondrías para seguir o frenar la prueba?',
    legacyKey: 'w11',
    solution: `<p>Ejemplo: si en 3 meses cada venta en Uruguay deja al menos dos tercios de lo que deja en Argentina, y el taller puede atenderla, se invierte más; si no, se pausa y se anota lo aprendido. Medir cuánto cuesta cada cliente, cuántos compran y si conviene un socio local.</p>`,
  },
  cards: [
    { q: 'TAM / SAM / SOM', a: 'La pizza entera / las porciones que llegás a servir / lo que te podés comer en 1–3 años.' },
    { q: 'Frase de posicionamiento', a: 'Para [cliente] que [necesidad], [marca] es [qué es] que [beneficio], a diferencia de [alternativa], porque [razón].' },
    { q: 'Probar un mercado nuevo', a: 'Una prueba chica, con reglas de seguir o frenar decididas antes.' },
    { q: 'Estrategia en la práctica', a: 'En qué se ponen la plata, el tiempo y la gente, y a qué se dice que no.' },
  ],
});

UNITS.push({
  n: 12,
  phase: 'f4',
  title: 'Dirección de Marketing',
  goal: 'Armar el tablero y el plan, y defender decisiones frente al dueño.',
  summary: [
    'Un tablero de una página conecta lo que se invierte con lo que se gana.',
    'Al presentar: primero la recomendación, después los números.',
    'Las reuniones fijas sostienen el trabajo cuando no estás.',
  ],
  lessons: [
    {
      id: 'u12l1', title: 'El tablero de dirección', icon: '📋',
      read: [
        { h: 'Como el tablero de un auto', body: `
<p>Para manejar no necesitás ver el motor: necesitás velocidad, nafta y temperatura. El <b>tablero de dirección</b> hace lo mismo con la empresa: pocos números, en una página.</p>
<p>Tiene tres niveles:</p>
<ul>
<li><b>Negocio</b>: cuánto se vendió, cuánto quedó, si se ganó.</li>
<li><b>Motor</b>: consultas, cuántas compran en cada paso, cuánto cuesta cada cliente.</li>
<li><b>Canales</b>: cuánto se invierte y qué trae cada canal.</li>
</ul>` },
        { h: 'Cada número con su frase', body: `
<p>Un número solo no dice nada. Cada uno va con una <b>comparación</b> (contra el mes pasado, el año pasado o el objetivo) y una línea que diga <em>qué significa y qué decidimos</em>.</p>
<div class="callout">“Las consultas subieron” no es un tablero. “Las consultas subieron, pero compran menos: esta semana revisamos la respuesta de ventas” sí.</div>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada número con su nivel del tablero.', pairs: [['Si se ganó plata', 'Negocio'], ['Cuántos compran en cada paso', 'Motor'], ['Lo que cuesta cada consulta en Meta', 'Canales']] },
        { t: 'choice', q: '¿Qué acompaña a cada número del tablero?', o: ['Un gráfico lindo', 'Una comparación y qué decidimos', 'El logo de la plataforma'], a: 1, why: 'Sin comparación ni decisión, el número no dirige nada.' },
        { t: 'tf', q: 'Un buen tablero tiene muchísimos números.', a: false, why: 'Tiene los pocos que hacen falta para decidir.' },
      ],
    },
    {
      id: 'u12l2', title: 'Presentar a dirección', icon: '🎤',
      read: [
        { h: 'Cinco pasos', body: `
<ol>
<li><b>Recomendación</b>: “Propongo tal cosa”.</li>
<li><b>Por qué</b>: dos o tres datos, no veinte.</li>
<li><b>Supuestos</b>: qué tiene que pasar para que funcione.</li>
<li><b>Riesgos</b> y cómo los cuidás.</li>
<li><b>Qué decisión necesitás</b> y para cuándo.</li>
</ol>
<p>El dueño tiene poco tiempo. Si empezás por los datos, se pierde antes de saber qué le pedís.</p>` },
        { h: 'Un ejemplo', body: `
<blockquote>“No subiría la inversión todavía. Las consultas salen más baratas, pero no sabemos si compran. Necesito que ventas anote de dónde viene cada cliente. Si en un mes vemos que compran igual que antes, ahí sí hay espacio para invertir más.”</blockquote>` },
      ],
      ex: [
        { t: 'order', q: 'Ordená cómo se presenta a dirección.', items: ['Recomendación', 'Por qué (2–3 datos)', 'Supuestos', 'Riesgos', 'Decisión que necesitás'], why: 'Primero qué se decide; después lo que lo sostiene.' },
        { t: 'tf', q: 'Conviene mostrar todos los datos primero y dejar la recomendación para el final.', a: false, why: 'El dueño necesita saber primero qué se le pide.' },
        { t: 'choice', q: '¿Cuántos datos van en el “por qué”?', o: ['Todos los que tengas', 'Dos o tres', 'Ninguno'], a: 1, why: 'Los justos para sostener la recomendación.' },
      ],
    },
    {
      id: 'u12l3', title: 'El plan integral', icon: '🗂️',
      read: [
        { h: 'Del diagnóstico a las decisiones', body: `
<ol>
<li><b>Diagnóstico</b>: cómo gana plata la empresa, dónde se pierden ventas y qué la frena.</li>
<li><b>Objetivos de negocio</b> (no de marketing): ganar más, crecer, vender más de lo que deja más.</li>
<li><b>Palancas elegidas</b> y por qué esas.</li>
<li><b>Presupuesto</b> desde el objetivo, con escenarios y tramos.</li>
<li><b>Acciones</b>, cada una con responsable, qué se mide y para cuándo.</li>
<li><b>Tablero</b> y reuniones de seguimiento.</li>
</ol>` },
      ],
      ex: [
        { t: 'choice', q: '¿Cuál es un buen objetivo para un plan de dirección?', o: ['10.000 seguidores', 'Ganar más y vender más', 'Publicar todos los días'], a: 1, why: 'Los objetivos de dirección son de negocio.' },
        { t: 'tf', q: 'Cada acción del plan debería tener responsable, qué se mide y plazo.', a: true, why: 'Si no, nadie responde por ella.' },
        { t: 'choice', q: '¿Por dónde empieza el plan?', o: ['Por los anuncios', 'Por el diagnóstico', 'Por el presupuesto'], a: 1, why: 'Sin entender cómo funciona la empresa, no sabés qué mover.' },
      ],
    },
    {
      id: 'u12l4', title: 'Ritmo de gestión', icon: '🔔',
      read: [
        { h: 'Reuniones que sostienen el sistema', body: `
<ul>
<li><b>Semanal con ventas</b> (30 minutos): cuántos pasan cada paso, cuánto tardan en responder, por qué se pierden ventas.</li>
<li><b>Mensual con el dueño</b> (una hora): el tablero, el presupuesto y si hay que frenar algo.</li>
<li><b>Cada tres meses</b>: estrategia, precio, qué productos empujar, qué probar.</li>
</ul>
<p>Como directora externa, tu valor no está en las horas, sino en el <b>criterio y en dejar un sistema</b> que funcione aunque no estés.</p>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada reunión con su foco.', pairs: [['Semanal con ventas', 'Pasos del funnel y ventas perdidas'], ['Mensual con el dueño', 'Tablero y presupuesto'], ['Cada tres meses', 'Estrategia y precio']] },
        { t: 'choice', q: 'Como directora externa, ¿qué deja más valor?', o: ['Estar muchas horas', 'Un sistema que funciona cuando no estás', 'Hacer todo vos'], a: 1, why: 'Lo fractional se basa en criterio y sistema.' },
        { t: 'tf', q: 'Las reuniones fijas sirven para que el trabajo siga aunque no estés.', a: true, why: 'Crean un ritmo que no depende de vos.' },
      ],
    },
    {
      id: 'u12l5', title: 'Tu rol como Fractional CMO', icon: '🦒',
      read: [
        { h: 'Qué hacés y qué pedís', body: `
<table><thead><tr><th>Vos</th><th>Le pedís a otros</th></tr></thead><tbody>
<tr><td>Hacer las preguntas correctas</td><td>Contador: costos exactos e impuestos</td></tr>
<tr><td>Traducir números en decisiones</td><td>Ventas: qué presupuestos se van a cerrar y por qué se pierden ventas</td></tr>
<tr><td>Definir cuánto pagar por un cliente, el presupuesto y qué empujar</td><td>Operaciones: capacidad, stock y plazos</td></tr>
<tr><td>Diseñar el tablero y las reuniones</td><td>Agencia o equipo: la ejecución</td></tr>
</tbody></table>` },
        { h: 'Dónde encajás mejor', body: `
<p>Empresas medianas que ya funcionan (fábricas, distribuidoras, tiendas online, servicios) donde <em>“la empresa creció, hace muchas cosas de marketing y necesita alguien que piense, ordene y dirija”</em>.</p>
<p>Todavía no conviene venderte para startups de software con métricas muy específicas, empresas con inversores de riesgo o corporaciones enormes. Este tablero y este método pueden ser el framework de Jirafa como Dirección de Marketing Externa.</p>` },
      ],
      ex: [
        { t: 'choice', q: '¿Quién debería calcular los costos exactos de cada producto?', o: ['Vos', 'El contador', 'La agencia'], a: 1, why: 'Vos los usás para decidir.' },
        { t: 'choice', q: '¿Qué cliente encaja mejor con tu perfil hoy?', o: ['Una startup de software con inversores', 'Una empresa mediana que creció y necesita ordenar el marketing', 'Una multinacional'], a: 1, why: 'Es donde tu experiencia tiene más impacto.' },
        { t: 'tf', q: 'Una directora de marketing necesita saber contabilidad avanzada.', a: false, why: 'Necesita entender los números y hacer las preguntas correctas.' },
      ],
    },
  ],
  lab: [
    'Completá el Tablero de Dirección de tu empresa elegida en Herramientas.',
    'Escribí su plan para el próximo semestre (máximo 2 páginas).',
    'Prepará una recomendación con la estructura de 5 pasos.',
    'Convertí el tablero en una plantilla para la metodología de Jirafa.',
  ],
  challenge: {
    title: 'Tu primera reunión de directorio',
    intro: `<p>Con la empresa que elegiste para los laboratorios (o con Roble, si preferís), preparás una recomendación de una página para el dueño.</p>`,
    steps: [
      { t: 'order', q: 'Ordená tu documento.', items: ['Recomendación', 'Diagnóstico en 5 líneas', 'Qué frena a la empresa', 'Tres palancas', 'Presupuesto por tramos', 'Decisión que necesitás'], why: 'Empieza por lo que proponés y termina con lo que pedís.' },
      { t: 'tf', q: 'Cada número de marketing del documento debería estar traducido a negocio.', a: true, why: '¿Y esto qué significa para el negocio?' },
      { t: 'choice', q: '¿Con qué termina el documento?', o: ['Con un agradecimiento', 'Con la decisión concreta que necesitás', 'Con todos los datos'], a: 1, why: 'El dueño tiene que saber exactamente qué se le pide.' },
    ],
    reflect: 'Escribí tu recomendación de una página.',
    legacyKey: 'w12',
    solution: `<p>Para revisar: ¿empieza por la recomendación? ¿Traduce cada número a ganancia? ¿Distingue lo que cuesta una consulta de lo que cuesta un cliente? ¿Tiene en cuenta si la empresa puede atender más? ¿El presupuesto sale de un objetivo y se libera por tramos? ¿Cada supuesto tiene quién lo confirme? ¿Termina con una decisión concreta?</p>`,
  },
  cards: [
    { q: 'Presentar a dirección', a: 'Recomendación → por qué → supuestos → riesgos → decisión que necesitás.' },
    { q: 'Tres niveles del tablero', a: 'Negocio, motor y canales.' },
    { q: 'Ritmo de gestión', a: 'Semanal con ventas, mensual con el dueño, cada tres meses de estrategia.' },
    { q: 'Dónde encajás como Fractional CMO', a: 'Empresas medianas que crecieron y necesitan dirección de marketing.' },
  ],
});
