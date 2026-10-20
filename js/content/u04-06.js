/* Brain — contenido. Unidades 4 a 6: de la consulta a la venta. */

UNITS.push({
  n: 4,
  phase: 'f2',
  title: 'Funnel comercial',
  goal: 'Seguir el camino de la consulta a la venta y encontrar dónde se pierde negocio.',
  summary: [
    'El camino termina en la venta, no en la consulta: en cada paso se pierde gente.',
    'Antes de comprar más consultas, aprovechá mejor las que ya pagaste.',
    'Sin un acuerdo entre marketing y ventas, cada uno culpa al otro.',
  ],
  lessons: [
    {
      id: 'u4l1', title: 'Las etapas', icon: '🪜',
      read: [
        { h: 'Un balde con agujeros', body: `
<p>Imaginá que llenás un balde que tiene agujeros. Podés echar más agua (más consultas) o tapar los agujeros. El <b>funnel</b> (embudo) es ese balde: el camino que hace una persona desde que pregunta hasta que compra.</p>
<div class="chain strong">Consulta → conversación → presupuesto → venta</div>
<p>En cada paso se pierde gente. Marketing suele mirar solo el primer paso; una directora mira todo el camino, porque la plata se gana al final.</p>` },
        { h: 'El funnel de Roble', body: `
<p>De cada 10 personas que le escriben a Roble por WhatsApp:</p>
<ul>
<li>6 llegan a tener una conversación real con un vendedor.</li>
<li>De esas, 2 o 3 piden presupuesto.</li>
<li>Y 1 termina comprando.</li>
</ul>
<p>Lo útil no es saber que “compra 1 de cada 10”, sino <b>en qué paso se pierde más gente</b>. Ahí está la oportunidad.</p>
<div class="callout">Cada paso tiene tres cosas: cuánta gente pasa, cuánto tarda y quién es responsable.</div>` },
      ],
      ex: [
        { t: 'order', q: 'Ordená los pasos del funnel.', items: ['Consulta', 'Conversación', 'Presupuesto', 'Venta'], why: 'Es el recorrido típico de alguien que compra algo que necesita asesoramiento.' },
        { t: 'tf', q: 'Lo más útil de un funnel es saber cuántos compran del total.', a: false, why: 'Lo más útil es saber en qué paso se pierde más gente.' },
        { t: 'choice', q: 'En el balde con agujeros, ¿qué son los agujeros?', o: ['Los anuncios', 'Los pasos donde se pierde gente', 'Los vendedores'], a: 1, why: 'Cada agujero es gente que se va antes de comprar.' },
        { t: 'choice', q: '¿Qué tiene cada paso del funnel?', o: ['Un color', 'Cuánta gente pasa, cuánto tarda y un responsable', 'Un anuncio propio'], a: 1, why: 'Con esos tres datos sabés qué mejorar y quién lo hace.' },
      ],
    },
    {
      id: 'u4l2', title: 'Dónde está la palanca', icon: '🔍',
      read: [
        { h: 'La demanda que ya pagaste', body: `
<p>En Roble, 4 de cada 10 personas que escriben nunca hablan con nadie: se cansan de esperar. Roble pagó por esas consultas y las tira.</p>
<p>Arreglar eso (responder más rápido, tener alguien de guardia) suele ser <b>mucho más barato</b> que comprar más consultas.</p>
<div class="callout">Antes de comprar más demanda, preguntate si estás aprovechando la que ya pagaste.</div>` },
        { h: 'No todos los pasos pesan igual', body: `
<p>Mejorar el último paso (que más presupuestos terminen en venta) suele tener más impacto, porque esa gente ya está casi decidida. Pero también suele ser lo más difícil de mover.</p>
<p>Mejorar el primero (responder rápido) es más fácil y más barato.</p>
<p>La decisión cruza tres preguntas: <b>¿cuánto impacto tiene? ¿qué tan fácil es? ¿cuánto cuesta?</b></p>` },
      ],
      ex: [
        { t: 'choice', q: 'La mitad de las consultas nunca recibe respuesta. ¿Qué hacés primero?', o: ['Subir la inversión', 'Arreglar la respuesta a las consultas', 'Cambiar los anuncios'], a: 1, why: 'Estás pagando consultas que se pierden.' },
        { t: 'tf', q: 'Aprovechar mejor las consultas que ya llegan suele ser más barato que comprar más.', a: true, why: 'Ya las pagaste: solo falta no perderlas.' },
        { t: 'tf', q: 'El paso con más impacto es siempre el más fácil de mejorar.', a: false, why: 'Suele ser al revés: los últimos pasos impactan más, pero cuestan más.' },
        { t: 'match', q: 'Uní cada pregunta con lo que evalúa.', pairs: [['¿Cuánto impacto tiene?', 'Cuántas ventas más trae'], ['¿Qué tan fácil es?', 'Cuánto esfuerzo lleva'], ['¿Cuánto cuesta?', 'Cuánta plata hace falta']] },
      ],
    },
    {
      id: 'u4l3', title: 'Ciclo y velocidad', icon: '⏳',
      read: [
        { h: 'El ciclo de venta', body: `
<p>El <b>ciclo de venta</b> es el tiempo entre que alguien consulta y compra. En Roble, la gente consulta, mide su living, lo habla en familia y compra unas semanas después.</p>
<p>Entonces, la campaña de este mes vende el mes que viene. <b>Juzgarla a los 10 días es un error</b>: todavía no se ven sus ventas.</p>` },
        { h: 'Que el camino fluya más rápido', body: `
<p>Pensá en una canilla: sale más agua si abrís más, si el caño es más ancho o si el agua llega antes. Las ventas fluyen igual. Se aceleran con cuatro palancas:</p>
<ul>
<li><b>Más oportunidades</b>: más gente interesada de verdad.</li>
<li><b>Más cierre</b>: que compre una parte mayor.</li>
<li><b>Más ticket</b>: que cada uno gaste más.</li>
<li><b>Ciclo más corto</b>: que decidan antes.</li>
</ul>` },
      ],
      ex: [
        { t: 'choice', q: 'En Roble se tarda unas semanas desde la consulta hasta la compra. ¿Cuándo evaluás una campaña?', o: ['A los pocos días', 'Después de un ciclo completo', 'Al día siguiente'], a: 1, why: 'Antes no se ven las ventas que generó.' },
        { t: 'match', q: 'Uní cada palanca con una acción.', pairs: [['Más oportunidades', 'Atraer gente con interés real'], ['Más cierre', 'Hacer seguimiento de los presupuestos'], ['Más ticket', 'Ofrecer las sillas que combinan'], ['Ciclo más corto', 'Presupuestar en el día']] },
        { t: 'tf', q: 'Si la gente tarda en decidir, una campaña puede parecer mala al principio y terminar vendiendo bien.', a: true, why: 'Las ventas llegan con demora.' },
      ],
    },
    {
      id: 'u4l4', title: 'Capacidad y calidad', icon: '👥',
      read: [
        { h: '¿Cuántas consultas puede atender ventas?', body: `
<p>Un vendedor puede atender bien una cantidad limitada de conversaciones por día. Si duplicás las consultas sin sumar gente, pasa esto:</p>
<div class="chain">responden más tarde → hacen peor seguimiento → se vende menos por consulta</div>
<p>Y el tiempo importa mucho: quien pregunta un precio por WhatsApp tiene ganas <b>ahora</b>. Cinco horas después, ya le escribió a la competencia.</p>` },
        { h: 'No todas las consultas valen igual', body: `
<p>Mirá cuántas compran según de dónde vienen. Un canal con consultas caras puede traer gente que compra mucho más, y terminar siendo el más barato por cliente.</p>
<p>Y anotá <b>por qué se pierde</b> cada venta: precio, plazo, no respondió, compró en otro lado. Si nadie lo registra, esa es la primera tarea.</p>` },
      ],
      ex: [
        { t: 'tf', q: 'Duplicar las consultas con el equipo saturado duplica las ventas.', a: false, why: 'La atención empeora y se vende menos por consulta.' },
        { t: 'choice', q: 'Canal A: consultas baratas, compra muy poca gente. Canal B: consultas caras, compra mucha gente. ¿Cuál puede ser mejor?', o: ['Siempre A', 'B puede salir más barato por cliente', 'Son iguales'], a: 1, why: 'Lo que importa es lo que cuesta cada cliente, no cada consulta.' },
        { t: 'choice', q: '¿Qué medirías primero en un negocio que vende por WhatsApp?', o: ['Cuánto tarda la primera respuesta', 'Seguidores', 'Cuántos vieron las historias'], a: 0, why: 'Es fácil de medir y cambia mucho cuántos compran.' },
        { t: 'choice', q: '¿Para qué sirve anotar por qué se pierde cada venta?', o: ['Para culpar a alguien', 'Para saber qué cambiar', 'Para llenar planillas'], a: 1, why: 'Si sabés por qué se pierden, sabés qué arreglar.' },
      ],
    },
    {
      id: 'u4l5', title: 'El acuerdo con ventas', icon: '🤝',
      read: [
        { h: 'Las reglas de juego', body: `
<p>Sin reglas claras, marketing dice “ventas no atiende bien” y ventas dice “marketing trae consultas malas”. Para salir de ahí se arma un <b>acuerdo por escrito</b> (en inglés le dicen SLA):</p>
<ul>
<li>Qué es una consulta buena (lo definen juntos).</li>
<li>En cuánto tiempo se responde como máximo.</li>
<li>Cuántas veces se intenta contactar a alguien.</li>
<li>Cómo se anota en qué quedó cada consulta y por qué se perdió.</li>
<li>Una reunión por semana para mirar los números juntos.</li>
</ul>
<div class="callout">Con acuerdo, las dos áreas discuten con datos en vez de con opiniones.</div>` },
      ],
      ex: [
        { t: 'choice', q: '¿Qué NO forma parte del acuerdo entre marketing y ventas?', o: ['En cuánto tiempo se responde', 'Qué es una consulta buena', 'Los colores de la marca'], a: 2, why: 'El acuerdo ordena cómo se atienden y siguen las consultas.' },
        { t: 'tf', q: 'Con un acuerdo, las discusiones entre áreas pasan a basarse en datos.', a: true, why: 'Las reglas y los registros compartidos reemplazan las opiniones.' },
        { t: 'choice', q: '¿Quién define qué es una consulta buena?', o: ['Solo marketing', 'Solo ventas', 'Marketing y ventas juntos'], a: 2, why: 'Si lo define uno solo, el otro no lo va a respetar.' },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, dibujá el camino de un cliente: desde que consulta hasta que compra.',
    'Mandale una consulta como si fueras cliente y medí cuánto tardan en responder.',
    'Armá con ventas la lista de motivos por los que se pierden ventas.',
  ],
  challenge: {
    title: '¿Más consultas o mejor seguimiento?',
    intro: `
<p>Roble recibe muchas consultas por mes, pero:</p>
<ul>
<li>Responden en <b>5 horas</b> en promedio.</li>
<li>Más de la mitad de la gente que escribe nunca llega a hablar con un vendedor.</li>
<li>Hay solo 2 vendedores y ya están desbordados.</li>
</ul>
<p>La agencia propone <b>duplicar la inversión</b> en anuncios.</p>`,
    steps: [
      { t: 'choice', q: '¿Dónde está el agujero más grande del balde?', o: ['En los anuncios', 'Entre la consulta y la conversación', 'En el precio'], a: 1, why: 'Más de la mitad se pierde antes de hablar con alguien.' },
      { t: 'choice', q: 'Si se duplican las consultas, ¿qué esperás que pase?', o: ['Se duplican las ventas', 'Se pierden todavía más consultas', 'Nada'], a: 1, why: 'Con 2 vendedores desbordados, más consultas esperan más.' },
      { t: 'tf', q: 'Responder más rápido puede traer más ventas sin gastar más en anuncios.', a: true, why: 'Aprovecha consultas que ya se pagaron.' },
      { t: 'choice', q: '¿Qué recomendás?', o: ['Duplicar la inversión ya', 'Primero arreglar la respuesta y el seguimiento; después invertir más', 'Bajar la inversión a la mitad'], a: 1, why: 'Primero tapar el agujero, después echar más agua.' },
    ],
    reflect: 'Armá un plan de 4 semanas para mejorar la respuesta a las consultas. ¿Qué medirías?',
    legacyKey: 'w4',
    solution: `
<p>Un mensaje automático de bienvenida, un vendedor de guardia para responder en menos de 15 minutos, tres intentos de contacto y el registro de por qué se pierde cada venta. Medir el tiempo de respuesta y cuánta gente pasa cada paso durante 4 a 6 semanas. Recién cuando el balde pierde menos, invertir más, y pensar si hace falta otro vendedor.</p>`,
  },
  cards: [
    { q: 'Funnel comercial', a: 'Consulta → conversación → presupuesto → venta. En cada paso se pierde gente.' },
    { q: 'Ciclo de venta', a: 'Tiempo entre la consulta y la compra. Define cuándo evaluar una campaña.' },
    { q: 'La demanda que ya pagaste', a: 'Antes de comprar más consultas, aprovechá las que ya llegan.' },
    { q: 'Acuerdo marketing–ventas', a: 'Qué es una consulta buena, en cuánto se responde, cuántos intentos, motivos de pérdida y reunión semanal.' },
  ],
});

UNITS.push({
  n: 5,
  phase: 'f2',
  title: 'Forecast de ventas',
  goal: 'Proyectar ventas a partir de supuestos claros y en escenarios.',
  summary: [
    'Un forecast es una lista de supuestos que se pueden discutir.',
    'Siempre se presenta como un rango: pesimista, base y optimista.',
    'Cuanto más invertís, cada peso extra rinde un poco menos.',
  ],
  lessons: [
    {
      id: 'u5l1', title: 'Supuestos explícitos', icon: '📐',
      read: [
        { h: 'Una cuenta, no una adivinanza', body: `
<p>Un <b>forecast</b> es una proyección: cuánto creemos que vamos a vender. No es magia ni intuición. Es una cadena de supuestos:</p>
<div class="chain strong">Cuánto invierto → cuántas consultas trae eso → cuántas terminan en venta</div>
<p>Cada eslabón es un supuesto, y cada supuesto tiene alguien que lo puede confirmar: finanzas confirma la inversión, la agencia el costo de cada consulta, ventas cuántas cierra.</p>
<div class="callout">Lo valioso de un forecast no es el número final, sino que los supuestos estén a la vista para discutirlos.</div>` },
      ],
      ex: [
        { t: 'tf', q: 'Lo más importante de un forecast es que el número sea exacto.', a: false, why: 'Lo importante es que los supuestos sean claros y se puedan controlar.' },
        { t: 'choice', q: '¿Quién debería confirmar cuántas consultas terminan en venta?', o: ['La agencia', 'El equipo de ventas', 'El diseñador'], a: 1, why: 'Ventas es quien convierte las consultas.' },
        { t: 'order', q: 'Ordená la cadena del forecast.', items: ['Cuánto invierto', 'Cuántas consultas trae', 'Cuántas terminan en venta'], why: 'Cada eslabón depende del anterior.' },
        { t: 'number', q: 'Lumen espera 100 consultas y compra 1 de cada 10. ¿Cuántas ventas proyecta?', a: 10, unit: 'ventas', why: '100 ÷ 10 = 10.' },
      ],
    },
    {
      id: 'u5l2', title: 'Tres métodos', icon: '🔭',
      read: [
        { h: 'Tres formas de mirar el futuro', body: `
<ul>
<li><b>Repetir el pasado</b> (run-rate): “vendimos 100 por mes, vamos a vender 100”. Rápido, pero ignora los cambios.</li>
<li><b>Por funnel</b>: desde las consultas y cuántas compran. Te deja simular “¿qué pasa si invierto más?”.</li>
<li><b>Por oportunidades abiertas</b> (pipeline): ventas mira los presupuestos que tiene abiertos y estima cuáles se cierran. Sirve para las próximas semanas.</li>
</ul>
<div class="callout">Usá dos métodos y compará. Si dan muy distinto, algún supuesto está mal.</div>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada método con su descripción.', pairs: [['Repetir el pasado', 'Usar el promedio reciente'], ['Por funnel', 'Consultas y cuántas compran'], ['Por oportunidades abiertas', 'Presupuestos abiertos y cuáles se cierran']] },
        { t: 'choice', q: 'Dos métodos dan resultados muy distintos. ¿Qué hacés?', o: ['Me quedo con el más alto', 'Reviso los supuestos', 'Promedio los dos'], a: 1, why: 'La diferencia avisa que algún supuesto no se sostiene.' },
        { t: 'choice', q: '¿Qué método te deja simular “qué pasa si invertimos más”?', o: ['Repetir el pasado', 'Por funnel', 'Ninguno'], a: 1, why: 'Parte de la inversión, así que podés cambiarla y ver qué pasa.' },
      ],
    },
    {
      id: 'u5l3', title: 'Escenarios', icon: '📉',
      read: [
        { h: 'Pesimista, base y optimista', body: `
<p>Nadie sabe exactamente cuánto se va a vender. Por eso se presenta un <b>rango</b>:</p>
<ul>
<li><b>Pesimista</b>: las consultas salen más caras y se vende menos.</li>
<li><b>Base</b>: lo más probable, según lo que ya pasó.</li>
<li><b>Optimista</b>: todo sale un poco mejor.</li>
</ul>
<p>Y para cada uno explicás <b>qué tendría que pasar</b> para estar ahí. Eso le sirve al dueño para decidir con los ojos abiertos.</p>` },
        { h: 'Pescar en un lago', body: `
<p>Los primeros peces pican fácil. Cuantos más sacás, más cuesta cada uno.</p>
<p>Con la publicidad pasa lo mismo: los primeros pesos llegan a la gente más interesada. Si seguís subiendo la inversión, llegás a gente menos interesada y <b>cada consulta sale más cara</b>.</p>
<div class="callout warn">Por eso duplicar la inversión casi nunca duplica las ventas.</div>` },
      ],
      ex: [
        { t: 'choice', q: 'Hoy con cierta inversión vendés 50. ¿Qué esperás si la duplicás?', o: ['Exactamente 100', 'Menos de 100', 'Más de 100'], a: 1, why: 'Cada consulta extra sale más cara.' },
        { t: 'tf', q: 'Presentar un forecast como rango es señal de inseguridad.', a: false, why: 'Es honesto y le sirve al dueño para decidir.' },
        { t: 'choice', q: '¿Qué acompaña a cada escenario?', o: ['Un gráfico de colores', 'Qué tendría que pasar para estar ahí', 'El logo de la agencia'], a: 1, why: 'Así se entiende qué cosas mirar para saber en cuál estás.' },
      ],
    },
    {
      id: 'u5l4', title: 'Temporada y cohortes', icon: '📅',
      read: [
        { h: 'Comparar bien', body: `
<p>Brote vende muchos más cafés en invierno que en verano. Si comparás julio con junio, sacás conclusiones equivocadas.</p>
<p>La <b>estacionalidad</b> son esos cambios que se repiten cada año: aguinaldo, vacaciones, Hot Sale, Navidad. Por eso se compara contra <b>el mismo mes del año anterior</b>.</p>` },
        { h: 'Las ventas llegan con demora', body: `
<p>En Roble, la gente consulta y compra semanas después. Entonces, las ventas de este mes vienen en parte de consultas del mes pasado.</p>
<p>Un forecast serio sigue a cada grupo de consultas en el tiempo. A ese grupo se le dice <b>cohorte</b>: <em>de las consultas de marzo, ¿cuántas compraron en marzo, cuántas en abril y cuántas en mayo?</em></p>` },
      ],
      ex: [
        { t: 'choice', q: '¿Contra qué comparás las ventas de diciembre?', o: ['Noviembre', 'Diciembre del año anterior', 'El promedio del año'], a: 1, why: 'Así descontás el efecto de la temporada.' },
        { t: 'tf', q: 'Una cohorte de consultas es un grupo del mismo mes que se sigue en el tiempo.', a: true, why: 'Sirve para ver cuándo terminan comprando.' },
        { t: 'choice', q: 'Las ventas de Roble subieron este mes. ¿De dónde pueden venir?', o: ['Solo de las consultas de este mes', 'También de consultas de meses anteriores', 'De ningún lado'], a: 1, why: 'Como la gente tarda en decidir, las ventas se arrastran.' },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, armá un forecast de 3 meses en tres escenarios: pesimista, base y optimista.',
    'Escribí al lado de cada supuesto quién lo puede confirmar.',
    'Identificá los meses de más y de menos ventas del año.',
  ],
  challenge: {
    title: '“Si invierto el doble, ¿cuánto vendo?”',
    intro: `
<p>El dueño de Lumen quiere <b>duplicar la inversión</b> en anuncios y pregunta: “¿Vamos a vender el doble?”.</p>
<p>Sabés que buena parte de la gente compra el mismo mes que consulta, pero otra parte compra el mes siguiente.</p>`,
    steps: [
      { t: 'tf', q: 'Si se duplica la inversión, seguro se duplican las ventas.', a: false, why: 'Las consultas extra suelen salir más caras.' },
      { t: 'choice', q: '¿Cuál es el supuesto más frágil?', o: ['El color de los anuncios', 'Cuánto va a costar cada consulta al invertir más', 'El nombre de la campaña'], a: 1, why: 'Es lo que más cambia al subir la inversión.' },
      { t: 'choice', q: '¿Cuándo vas a ver todas las ventas de esa inversión?', o: ['El mismo mes', 'Recién al mes siguiente, por la gente que tarda', 'Nunca'], a: 1, why: 'Parte de las compras llega después.' },
      { t: 'choice', q: '¿Cómo se lo presentás?', o: ['“Vamos a vender el doble”', '“Vamos a vender bastante más, pero menos del doble; propongo subir en dos pasos y medir”', '“No se puede saber”'], a: 1, why: 'Rango, supuestos claros y una forma de bajar el riesgo.' },
    ],
    reflect: '¿Qué más chequearías antes de aprobar el doble de inversión?',
    legacyKey: 'w5',
    solution: `<p>Que haya stock para vender más, que el equipo pueda atender más consultas y que lo que cuesta cada cliente siga debajo del tope. Subir en dos pasos permite ver cuánto cuestan de verdad las consultas extra antes de comprometer toda la plata.</p>`,
  },
  cards: [
    { q: 'Forecast', a: 'Una proyección de ventas armada con supuestos que se pueden discutir.' },
    { q: 'Rendimientos decrecientes', a: 'Cuanto más invertís, cada peso extra trae consultas más caras.' },
    { q: 'Cohorte de consultas', a: 'Consultas de un mismo período, seguidas para ver cuándo compran.' },
    { q: '¿Cómo presentar un forecast?', a: 'Como rango, con supuestos claros y qué tendría que pasar en cada escenario.' },
  ],
});

UNITS.push({
  n: 6,
  phase: 'f2',
  title: 'Presupuesto de marketing',
  goal: 'Decidir cuánto invertir, cómo repartirlo y cuándo subir o bajar.',
  summary: [
    'El presupuesto sale de un objetivo, recorriendo el camino al revés.',
    'Para decidir si invertir más, se mira cuánto costaron los clientes extra, no el promedio.',
    'Las reglas para subir o bajar se definen antes de empezar.',
  ],
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
  ],
  lab: [
    'En tu empresa elegida, armá el presupuesto del próximo trimestre partiendo de un objetivo de ventas.',
    'Si subió la inversión alguna vez, averiguá cuántos clientes extra trajo esa plata.',
    'Escribí tus reglas para subir, mantener y bajar la inversión.',
  ],
  challenge: {
    title: 'El dueño quiere duplicar',
    intro: `
<p>En los últimos tres meses, Lumen subió la inversión de a poco. El costo promedio por cliente subió apenas. Pero:</p>
<ul>
<li>Los clientes extra del segundo mes salieron un poco por encima del tope.</li>
<li>Los del tercer mes salieron muy por encima.</li>
</ul>
<p>El dueño quiere <b>duplicar</b> la inversión porque “el promedio está bien”.</p>`,
    steps: [
      { t: 'choice', q: '¿Qué número mirás para decidir?', o: ['El costo promedio', 'Lo que costaron los clientes extra', 'Los seguidores'], a: 1, why: 'Es lo que te dice qué compra la próxima plata.' },
      { t: 'choice', q: 'Si los últimos clientes extra ya pasaron el tope, ¿qué pasaría al duplicar?', o: ['Saldrían más baratos', 'Saldrían todavía más caros', 'Nada'], a: 1, why: 'Cuanto más invertís en los mismos canales, más caro sale cada cliente nuevo.' },
      { t: 'choice', q: '¿Qué recomendás?', o: ['Duplicar', 'Volver a la inversión que funcionaba, probar canales nuevos con poco y liberar más por tramos', 'Cortar toda la publicidad'], a: 1, why: 'Protege lo que anda y busca nuevos lugares donde los clientes salgan más baratos.' },
    ],
    reflect: '¿Cómo se lo explicarías al dueño en tres frases?',
    legacyKey: 'w6',
    solution: `<blockquote>“El promedio se ve bien, pero los últimos clientes que conseguimos nos costaron más de lo que dejan. Si duplicamos en los mismos canales, los próximos van a salir todavía más caros. Propongo volver a la inversión que funcionaba, probar canales nuevos con una parte chica y subir cuando los clientes extra estén debajo del tope.”</blockquote>`,
  },
  cards: [
    { q: 'Presupuesto desde el objetivo', a: 'Partir de cuántas ventas se quieren y caminar el funnel al revés hasta la plata.' },
    { q: 'CAC marginal', a: 'Cuánto costaron los clientes extra que trajo la plata nueva.' },
    { q: 'Regla 70/20/10', a: '70% lo que funciona, 20% mejorarlo, 10% probar cosas nuevas.' },
    { q: '¿Cuándo bajar la inversión?', a: 'Si pasa el tope durante un ciclo de venta completo, no antes.' },
  ],
});
