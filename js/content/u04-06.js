/* Brain — contenido. Unidades 4 a 6: del lead a la venta. */

UNITS.push({
  n: 4,
  phase: 'f2',
  title: 'Funnel comercial',
  goal: 'Modelar lead → conversación → presupuesto → venta y detectar dónde se pierde negocio.',
  summary: [
    'El funnel termina en la venta, no en el lead: cada etapa tiene tasa, tiempo y responsable.',
    'Antes de comprar más leads, aprovechá mejor los que ya pagaste.',
    'Sin acuerdo entre marketing y ventas, cada uno culpa al otro.',
  ],
  lessons: [
    {
      id: 'u4l1', title: 'Las etapas', icon: '🪜',
      read: [
        { h: 'Un balde con agujeros', body: `
<div class="chain strong">Lead → conversación → presupuesto → venta</div>
<p>En cada etapa se pierde gente. Podés seguir echando agua (más leads) o tapar los agujeros. Marketing suele mirar hasta el lead; una directora mira el camino completo, porque la plata se gana al final.</p>` },
        { h: 'Leer un funnel', body: `
<table><thead><tr><th>Etapa</th><th>Cantidad</th><th>Conversión</th></tr></thead><tbody>
<tr><td>Leads</td><td>1.000</td><td>—</td></tr>
<tr><td>Conversación real</td><td>600</td><td>60%</td></tr>
<tr><td>Presupuesto enviado</td><td>240</td><td>40%</td></tr>
<tr><td>Venta</td><td>60</td><td>25%</td></tr>
</tbody></table>
<p>Conversión total: <b>6%</b> (60 ÷ 1.000). Pero la pregunta útil no es el total, sino <b>en qué etapa está la fuga más cara</b>. Cada etapa tiene una tasa, un tiempo y un responsable.</p>` },
      ],
      ex: [
        { t: 'order', q: 'Ordená las etapas del funnel comercial.', items: ['Lead', 'Conversación', 'Presupuesto', 'Venta'], why: 'Es el recorrido típico de una venta consultiva.' },
        { t: 'number', q: '600 conversaciones generaron 240 presupuestos. ¿Conversión de esa etapa en %?', a: 40, unit: '%', why: '240 ÷ 600 = 40%.' },
        { t: 'number', q: '2.000 leads terminaron en 80 ventas. ¿Conversión total en %?', a: 4, unit: '%', why: '80 ÷ 2.000 = 4%.' },
        { t: 'tf', q: 'Lo más útil de un funnel es la conversión total.', a: false, why: 'Lo más útil es saber en qué etapa se pierde más.' },
      ],
    },
    {
      id: 'u4l2', title: 'Dónde está la palanca', icon: '🔍',
      read: [
        { h: 'Mejorar 10 puntos, etapa por etapa', body: `
<p>Con el funnel 1.000 → 60% → 40% → 25% = 60 ventas, mejorar 10 puntos una sola etapa:</p>
<ul>
<li>Lead → conversación 60% → 70%: <b>70 ventas</b></li>
<li>Conversación → presupuesto 40% → 50%: <b>75 ventas</b></li>
<li>Presupuesto → venta 25% → 35%: <b>84 ventas</b></li>
</ul>
<p>Las etapas de abajo suelen tener más impacto por punto, pero también son más difíciles de mover. La decisión cruza <b>impacto × facilidad × costo</b>.</p>` },
        { h: 'La demanda que ya pagaste', body: `
<p>Si 4 de cada 10 leads nunca hablan con nadie, estás pagando contactos que tirás. Arreglar eso suele ser más barato que comprar más leads.</p>
<div class="callout">Antes de comprar más demanda, preguntate si estás aprovechando la que ya pagaste.</div>` },
      ],
      ex: [
        { t: 'number', q: '1.000 leads × 60% × 40% × 35%. ¿Cuántas ventas?', a: 84, unit: 'ventas', why: '1.000 × 0,6 × 0,4 × 0,35 = 84.' },
        { t: 'choice', q: 'La mitad de los leads nunca recibe respuesta. ¿Qué hacés primero?', o: ['Subir la inversión', 'Arreglar la respuesta a los leads', 'Cambiar las creatividades'], a: 1, why: 'Estás pagando leads que se pierden.' },
        { t: 'tf', q: 'La etapa con más impacto por punto es siempre la más fácil de mejorar.', a: false, why: 'Suele ser al revés: las etapas finales impactan más, pero cuestan más.' },
      ],
    },
    {
      id: 'u4l3', title: 'Ciclo y velocidad', icon: '⏳',
      read: [
        { h: 'El ciclo de venta', body: `
<p>Es el tiempo entre que entra el lead y se concreta la venta. Si es de 45 días, la campaña de este mes vende el mes que viene: <b>evaluarla a los 10 días es un error</b>.</p>` },
        { h: 'La velocidad del pipeline', body: `
<div class="formula">Velocidad = oportunidades × tasa de cierre × ticket ÷ días del ciclo</div>
<p>200 oportunidades × 25% × $1 M ÷ 40 días = <b>$1,25 M por día</b> de facturación que fluye por el pipeline.</p>
<p>Se acelera con cuatro palancas: más oportunidades, más cierre, más ticket o un ciclo más corto.</p>` },
      ],
      ex: [
        { t: 'number', q: '100 oportunidades × 20% de cierre × $500.000 de ticket ÷ 25 días. ¿Velocidad diaria?', a: 400000, unit: '$', why: '100 × 0,2 × 500.000 ÷ 25 = 400.000.' },
        { t: 'choice', q: 'El ciclo de venta es de 45 días. ¿Cuándo evaluás una campaña?', o: ['A la semana', 'Después de un ciclo completo', 'Al día siguiente'], a: 1, why: 'Antes, todavía no se ven las ventas que generó.' },
        { t: 'match', q: 'Uní cada palanca de velocidad con una acción.', pairs: [['Más oportunidades', 'Más leads calificados'], ['Más cierre', 'Mejor seguimiento de presupuestos'], ['Más ticket', 'Sumar accesorios'], ['Ciclo más corto', 'Responder y presupuestar en el día']] },
      ],
    },
    {
      id: 'u4l4', title: 'Capacidad y calidad', icon: '👥',
      read: [
        { h: '¿Cuántos leads puede atender ventas?', body: `
<p>Si un vendedor atiende bien unas 15 conversaciones activas por día y hay 3 vendedores, la capacidad es ~45. Duplicar leads sin duplicar capacidad <b>baja la conversión</b>: responden más tarde y hacen peor seguimiento.</p>
<p>Y el tiempo de respuesta importa: alguien que pregunta precio por WhatsApp está con ganas a los 5 minutos y ya le escribió a la competencia a las 5 horas.</p>` },
        { h: 'Calidad por origen y motivos de pérdida', body: `
<p>Medí conversión a venta y ticket por campaña, canal y producto. Un canal con CPL alto puede tener el mejor CAC.</p>
<p>Registrá <b>por qué se pierde</b> cada venta: precio, plazo, no responde, compró a la competencia, financiación. Si no está registrado, es la primera tarea.</p>` },
      ],
      ex: [
        { t: 'number', q: '4 vendedores, cada uno atiende bien 12 conversaciones por día. ¿Capacidad diaria?', a: 48, unit: 'conversaciones', why: '4 × 12 = 48.' },
        { t: 'choice', q: 'Canal A: CPL $3.000, compra 2%. Canal B: CPL $6.000, compra 6%. ¿Cuál tiene mejor CAC?', o: ['A', 'B', 'Iguales'], a: 1, why: 'A: 3.000 ÷ 0,02 = $150.000. B: 6.000 ÷ 0,06 = $100.000.' },
        { t: 'tf', q: 'Duplicar los leads con el equipo saturado duplica las ventas.', a: false, why: 'La atención empeora y se vende menos por lead.' },
        { t: 'choice', q: '¿Qué métrica simple medirías primero en un negocio que vende por WhatsApp?', o: ['Tiempo de primera respuesta', 'Seguidores', 'Alcance de historias'], a: 0, why: 'Es fácil de medir y tiene impacto directo en la conversión.' },
      ],
    },
    {
      id: 'u4l5', title: 'El acuerdo con ventas', icon: '🤝',
      read: [
        { h: 'Un SLA entre marketing y ventas', body: `
<p>Un acuerdo explícito y por escrito:</p>
<ul>
<li>Qué es un lead calificado (definición compartida).</li>
<li>Tiempo máximo de primera respuesta (por ejemplo, 15 minutos en horario comercial).</li>
<li>Cantidad mínima de intentos de contacto.</li>
<li>Cómo se registran el estado y el motivo de pérdida.</li>
<li>Una reunión semanal con los números del funnel.</li>
</ul>
<div class="callout">Sin acuerdo, marketing culpa a la calidad del lead y ventas culpa a marketing. Con acuerdo, discuten con datos.</div>` },
      ],
      ex: [
        { t: 'choice', q: '¿Qué NO forma parte de un SLA marketing–ventas?', o: ['Tiempo máximo de respuesta', 'Qué es un lead calificado', 'La paleta de colores de la marca'], a: 2, why: 'El SLA ordena el traspaso y el seguimiento de leads.' },
        { t: 'choice', q: '¿Qué dato ayuda más a mejorar ventas?', o: ['Por qué se pierde cada venta', 'Cuántos likes tuvo el anuncio', 'Los leads del año pasado'], a: 0, why: 'Los motivos de pérdida dicen qué cambiar.' },
        { t: 'tf', q: 'Con un SLA, las discusiones entre áreas pasan a basarse en datos.', a: true, why: 'Las reglas y los registros compartidos reemplazan las opiniones.' },
      ],
    },
  ],
  lab: [
    'Mapeá el funnel Meta → WhatsApp → oportunidad → presupuesto → venta de Durabox con un mes real.',
    'Medí el tiempo de primera respuesta en WhatsApp.',
    'Armá con ventas la lista de motivos de pérdida.',
  ],
  challenge: {
    title: '¿Más leads o mejor seguimiento?',
    intro: `
<p>Funnel mensual: <b>2.000 leads → 900 conversaciones → 270 presupuestos → 54 ventas</b>. Inversión $6 M. Primera respuesta: <b>5 horas</b> en promedio. Hay 2 vendedores.</p>
<p>La agencia propone duplicar la inversión.</p>`,
    steps: [
      { t: 'number', q: '¿Conversión lead → conversación en %?', a: 45, unit: '%', why: '900 ÷ 2.000 = 45%.' },
      { t: 'number', q: '¿CAC actual? (redondeá a miles)', a: 111000, tol: 1000, unit: '$', why: '6.000.000 ÷ 54 ≈ 111.000.' },
      { t: 'number', q: 'Si lead → conversación sube a 60% y el resto se mantiene (30% y 20%), ¿cuántas ventas?', a: 72, unit: 'ventas', why: '2.000 × 0,6 × 0,3 × 0,2 = 72: +33% sin invertir más.' },
      { t: 'choice', q: '¿Qué recomendás?', o: ['Duplicar la inversión ya', 'Primero arreglar respuesta y seguimiento; después escalar', 'Bajar la inversión a la mitad'], a: 1, why: 'Con 2 vendedores y 5 horas de respuesta, más leads se pierden igual.' },
    ],
    reflect: 'Armá un plan de 4 semanas para mejorar la primera etapa del funnel. ¿Qué medirías?',
    legacyKey: 'w4',
    solution: `
<p>Respuesta en menos de 15 minutos (mensaje automático de bienvenida + vendedor de guardia), 3 intentos de contacto, registro de motivos de pérdida y reunión semanal. Medir tiempo de respuesta y conversión por etapa durante 4 a 6 semanas. Con eso, el CAC bajaría a ~$83.000 y recién ahí se escala, dimensionando el equipo comercial.</p>`,
  },
  cards: [
    { q: 'Funnel comercial', a: 'Lead → conversación → presupuesto → venta. Cada etapa con tasa, tiempo y responsable.' },
    { q: 'Velocidad del pipeline', a: 'Oportunidades × cierre × ticket ÷ días del ciclo.' },
    { q: 'Ciclo de venta', a: 'Tiempo entre el lead y la venta. Define cuándo evaluar una campaña.' },
    { q: 'SLA marketing–ventas', a: 'Lead calificado, tiempo de respuesta, intentos de contacto, motivos de pérdida, reunión semanal.' },
  ],
});

UNITS.push({
  n: 5,
  phase: 'f2',
  title: 'Forecast de ventas',
  goal: 'Proyectar ventas con supuestos explícitos y escenarios.',
  summary: [
    'Un forecast es un conjunto de supuestos que se pueden discutir.',
    'Siempre en rango: pesimista, base y optimista.',
    'Al subir la inversión, cada peso extra rinde un poco menos.',
  ],
  lessons: [
    {
      id: 'u5l1', title: 'Supuestos explícitos', icon: '📐',
      read: [
        { h: 'Una cuenta, no una adivinanza', body: `
<div class="formula">Ventas = inversión ÷ CPL × conversión lead → venta</div>
<p>$5 M ÷ $5.000 × 5% = <b>50 ventas</b>.</p>
<p>Tres supuestos: inversión, CPL y conversión. Cada uno tiene un dueño que puede confirmarlo (finanzas, la agencia, ventas). Lo valioso no es el número final: es que los supuestos estén a la vista para discutirlos y controlarlos.</p>` },
      ],
      ex: [
        { t: 'number', q: 'Inversión $3 M, CPL $6.000, conversión 4%. ¿Ventas esperadas?', a: 20, unit: 'ventas', why: '3.000.000 ÷ 6.000 = 500 leads × 0,04 = 20.' },
        { t: 'tf', q: 'Lo más importante de un forecast es que el número sea preciso.', a: false, why: 'Lo importante es que los supuestos sean explícitos y controlables.' },
        { t: 'choice', q: '¿Quién debería validar el supuesto de conversión lead → venta?', o: ['La agencia de medios', 'El equipo de ventas', 'El diseñador'], a: 1, why: 'Ventas es quien convierte los leads.' },
      ],
    },
    {
      id: 'u5l2', title: 'Tres métodos', icon: '🔭',
      read: [
        { h: 'Run-rate, funnel y pipeline', body: `
<ul>
<li><b>Run-rate</b>: “vendimos 100 por mes los últimos 3 meses, vamos a vender 100”. Rápido, pero ignora los cambios.</li>
<li><b>Por funnel</b>: proyecta desde leads y tasas. Permite simular decisiones.</li>
<li><b>Por pipeline</b> (lo usa ventas): oportunidades abiertas × probabilidad por etapa. Bueno para el corto plazo.</li>
</ul>
<p>Usá dos métodos y compará. Si dan muy distinto, algún supuesto está mal.</p>` },
      ],
      ex: [
        { t: 'match', q: 'Uní cada método con su descripción.', pairs: [['Run-rate', 'Repetir el promedio reciente'], ['Por funnel', 'Leads × tasas de conversión'], ['Por pipeline', 'Oportunidades abiertas × probabilidad']] },
        { t: 'choice', q: 'Dos métodos dan resultados muy distintos. ¿Qué hacés?', o: ['Me quedo con el más alto', 'Reviso los supuestos', 'Promedio los dos'], a: 1, why: 'La diferencia indica que algún supuesto no se sostiene.' },
        { t: 'choice', q: '¿Qué método te deja simular “qué pasa si invertimos más”?', o: ['Run-rate', 'Por funnel', 'Ninguno'], a: 1, why: 'Parte de la inversión y las tasas, así que podés cambiarlas.' },
      ],
    },
    {
      id: 'u5l3', title: 'Escenarios', icon: '📉',
      read: [
        { h: 'Pesimista, base y optimista', body: `
<table><thead><tr><th></th><th>Pesimista</th><th>Base</th><th>Optimista</th></tr></thead><tbody>
<tr><td>Inversión</td><td>$8 M</td><td>$8 M</td><td>$8 M</td></tr>
<tr><td>CPL</td><td>$6.500</td><td>$5.500</td><td>$5.000</td></tr>
<tr><td>Leads</td><td>1.231</td><td>1.455</td><td>1.600</td></tr>
<tr><td>Conversión</td><td>4%</td><td>5%</td><td>5,5%</td></tr>
<tr><td>Ventas</td><td><b>49</b></td><td><b>73</b></td><td><b>88</b></td></tr>
</tbody></table>
<p>Presentá el rango y explicá qué tendría que pasar para estar en cada escenario.</p>` },
        { h: 'Rendimientos decrecientes', body: `
<p>Pensá en pescar en un lago: los primeros pican fácil; cuanto más pescás, más cuesta cada uno.</p>
<p>Con la pauta pasa lo mismo: los primeros pesos llegan a la gente más interesada. Al subir la inversión llegás a gente menos interesada y <b>el CPL sube</b>. Por eso, en la tabla, el CPL base con $8 M ya no es el histórico de $5.000.</p>` },
      ],
      ex: [
        { t: 'number', q: 'Inversión $8 M y CPL $6.500. ¿Cuántos leads (redondeá)?', a: 1231, tol: 1, unit: 'leads', why: '8.000.000 ÷ 6.500 ≈ 1.231.' },
        { t: 'choice', q: 'Hoy con $5 M vendés 50. ¿Qué esperás con $10 M?', o: ['Exactamente 100', 'Menos de 100', 'Más de 100'], a: 1, why: 'Cada lead extra sale más caro.' },
        { t: 'tf', q: 'Presentar un forecast como rango es señal de inseguridad.', a: false, why: 'Es honesto y le sirve a Dirección para decidir.' },
      ],
    },
    {
      id: 'u5l4', title: 'Temporada y cohortes', icon: '📅',
      read: [
        { h: 'Comparar bien', body: `
<p><b>Estacionalidad</b>: compará contra el mismo mes del año anterior, no contra el mes previo. Aguinaldo, vacaciones, Hot Sale o temporada de rutas cambian todo.</p>` },
        { h: 'Las ventas llegan con demora', body: `
<p>Con un ciclo de 30 a 45 días, las ventas de este mes vienen en parte de leads del mes pasado. Un forecast serio usa <b>cohortes de leads</b>: de los leads de marzo, ¿cuántos compraron en marzo, abril y mayo?</p>
<div class="formula">Ventas de mayo = leads de mayo × % del mes 0 + leads de abril × % del mes 1 + …</div>` },
      ],
      ex: [
        { t: 'number', q: 'Leads de mayo 1.000 (convierten 3% en el mes) y leads de abril 800 (convierten 2% un mes después). ¿Ventas de mayo?', a: 46, unit: 'ventas', why: '1.000 × 0,03 + 800 × 0,02 = 30 + 16 = 46.' },
        { t: 'choice', q: '¿Contra qué comparás las ventas de diciembre?', o: ['Noviembre', 'Diciembre del año anterior', 'El promedio del año'], a: 1, why: 'Así descontás el efecto de temporada.' },
        { t: 'tf', q: 'Una cohorte de leads es un grupo de leads del mismo período seguido en el tiempo.', a: true, why: 'Sirve para ver cuándo terminan convirtiendo.' },
      ],
    },
  ],
  lab: [
    'Armá un forecast de 3 meses de Durabox en tres escenarios.',
    'Medí qué % de los leads de un mes compra ese mes, el siguiente y el subsiguiente.',
    'Identificá los 3 meses de mayor y menor demanda del año.',
  ],
  challenge: {
    title: '“Si invierto $10 M, ¿cuánto vendo?”',
    intro: `
<p>Histórico: $6 M de inversión, CPL $4.000, conversión lead → venta 6%. El 70% de las ventas se cierra el mismo mes y el 30% el siguiente. El dueño quiere invertir <b>$10 M</b>.</p>`,
    steps: [
      { t: 'number', q: 'Si todo escalara igual (CPL $4.000, 6%), ¿cuántas ventas daría?', a: 150, unit: 'ventas', why: '10.000.000 ÷ 4.000 = 2.500 leads × 0,06 = 150.' },
      { t: 'number', q: 'Ahora suponé que el CPL sube a $5.000. ¿Ventas de esa cohorte?', a: 120, unit: 'ventas', why: '2.000 leads × 0,06 = 120.' },
      { t: 'number', q: 'De esas 120, ¿cuántas se cierran el mismo mes?', a: 84, unit: 'ventas', why: '120 × 0,7 = 84.' },
      { t: 'choice', q: '¿Cómo se lo presentás?', o: ['“Vas a vender 150”', '“Entre 110 y 135, con el CPL como supuesto más frágil; propongo subir en dos tramos”', '“No se puede saber”'], a: 1, why: 'Rango, supuestos explícitos y una forma de reducir el riesgo.' },
    ],
    reflect: '¿Qué más chequearías antes de aprobar los $10 M?',
    legacyKey: 'w5',
    solution: `<p>Que ventas pueda atender ~2.000 leads, que producción pueda entregar el volumen y que el CAC resultante quede debajo del máximo. Subir en dos tramos permite medir el CPL real antes de comprometer todo.</p>`,
  },
  cards: [
    { q: 'Forecast por funnel', a: 'Inversión ÷ CPL × conversión lead → venta.' },
    { q: 'Rendimientos decrecientes', a: 'Al subir la inversión, cada peso extra compra leads más caros.' },
    { q: 'Cohorte de leads', a: 'Leads de un mismo período, seguidos para ver cuándo convierten.' },
    { q: '¿Cómo presentar un forecast?', a: 'En rango, con supuestos explícitos y qué tendría que pasar en cada escenario.' },
  ],
});

UNITS.push({
  n: 6,
  phase: 'f2',
  title: 'Presupuesto de marketing',
  goal: 'Decidir cuánto invertir, cómo repartirlo y cuándo escalar o recortar.',
  summary: [
    'El presupuesto sale de un objetivo recorrido al revés.',
    'Para escalar se mira el CAC marginal, no el promedio.',
    'Las reglas de escalar y recortar se definen antes de empezar.',
  ],
  lessons: [
    {
      id: 'u6l1', title: 'Tres formas de presupuestar', icon: '💰',
      read: [
        { h: 'De la inercia a la hipótesis', body: `
<ul>
<li><b>% de facturación</b> (ej. 5–10%): simple, pero mira hacia atrás. Si las ventas caen, recorta justo cuando hace falta demanda.</li>
<li><b>Lo del año pasado + inflación</b>: inercia sin hipótesis.</li>
<li><b>Objetivo y tarea</b>: del objetivo de ventas, recorrés el funnel al revés hasta la inversión. Es el de una directora.</li>
</ul>
<p>Después contrastás: ¿cabe en el % de facturación que la empresa tolera? ¿El CAC resultante queda debajo del máximo?</p>` },
      ],
      ex: [
        { t: 'choice', q: '¿Qué método usa una directora?', o: ['Lo del año pasado + inflación', 'Objetivo y tarea', 'Lo que propone la agencia'], a: 1, why: 'Cada peso tiene una razón y se puede controlar.' },
        { t: 'tf', q: 'Presupuestar como % de la facturación puede recortar inversión justo cuando hace falta.', a: true, why: 'Si caen las ventas, cae el presupuesto.' },
        { t: 'number', q: 'Objetivo 40 ventas, conversión lead → venta 5%, CPL $4.000. ¿Inversión necesaria?', a: 3200000, unit: '$', why: '40 ÷ 0,05 = 800 leads × 4.000 = 3.200.000.' },
      ],
    },
    {
      id: 'u6l2', title: 'Promedio vs. marginal', icon: '📈',
      read: [
        { h: 'Lo que esconde el promedio', body: `
<p>Mes 1: $5 M → 50 clientes (CAC $100.000). Mes 2: $8 M → 70 clientes (CAC promedio $114.000).</p>
<div class="formula">CAC marginal = Δ inversión ÷ Δ clientes = $3 M ÷ 20 = <b>$150.000</b></div>
<p>El promedio dice “subió poco”. El marginal dice que <b>los últimos 20 clientes costaron 50% más</b>. Si tu tope es $140.000, los últimos $3 M destruyen valor aunque el promedio se vea bien.</p>
<div class="callout">Las decisiones de escalar se toman con el CAC marginal.</div>` },
      ],
      ex: [
        { t: 'number', q: 'Subiste $2 M y conseguiste 10 clientes más. ¿CAC marginal?', a: 200000, unit: '$', why: '2.000.000 ÷ 10 = 200.000.' },
        { t: 'number', q: 'Mes 1: $4 M → 40 clientes. Mes 2: $6 M → 50 clientes. ¿CAC marginal?', a: 200000, unit: '$', why: 'Δ $2 M ÷ Δ 10 clientes = 200.000. El promedio es solo 120.000.' },
        { t: 'tf', q: 'Si el CAC promedio está debajo del tope, todo aumento de inversión conviene.', a: false, why: 'El marginal puede estar muy por encima del tope.' },
      ],
    },
    {
      id: 'u6l3', title: 'Repartir: 70/20/10', icon: '🥧',
      read: [
        { h: 'Lo probado y lo nuevo', body: `
<ul>
<li><b>70%</b> en lo probado (canales con números conocidos).</li>
<li><b>20%</b> en optimizar y extender (nuevas audiencias, formatos, productos).</li>
<li><b>10%</b> en experimentos (canales nuevos, mercados, ideas).</li>
</ul>
<p>Además separá la <b>inversión de trabajo</b> (compra demanda: pauta) de la <b>inversión de base</b> (hace funcionar el sistema: contenido, CRM, herramientas, agencia).</p>` },
      ],
      ex: [
        { t: 'number', q: 'Presupuesto $10 M. Con 70/20/10, ¿cuánto va a experimentos?', a: 1000000, unit: '$', why: '10% de 10 M = 1 M.' },
        { t: 'choice', q: 'Querés probar TikTok Ads por primera vez. ¿De qué parte sale?', o: ['Del 70%', 'Del 10% de experimentos', 'De todo el presupuesto'], a: 1, why: 'Lo nuevo va a experimentos sin poner en riesgo lo que funciona.' },
        { t: 'match', q: 'Clasificá cada gasto.', pairs: [['Pauta en Meta', 'Inversión de trabajo'], ['CRM', 'Inversión de base'], ['Canal nuevo a probar', 'Experimento'], ['Nueva audiencia en canal probado', 'Optimización']] },
      ],
    },
    {
      id: 'u6l4', title: 'Reglas y tramos', icon: '🚥',
      read: [
        { h: 'Decidir antes de empezar', body: `
<ul>
<li><b>Escalar</b> si el CAC marginal está debajo del 80% del tope durante 2–3 semanas y hay capacidad. Subir de a 20–30%.</li>
<li><b>Mantener</b> entre el 80% y el 100% del tope.</li>
<li><b>Recortar</b> si pasa el tope durante más de un ciclo de venta completo (no antes: la demora engaña).</li>
</ul>` },
        { h: 'Presupuesto con compuertas', body: `
<blockquote>“Liberamos el segundo tramo si en el primero el CAC se mantuvo debajo de $X.”</blockquote>
<p>Baja el riesgo, genera confianza con el dueño y convierte el presupuesto en un experimento controlado.</p>` },
      ],
      ex: [
        { t: 'choice', q: 'Una campaña pasó el tope durante 2 días. ¿Qué hacés?', o: ['La corto ya', 'Espero un ciclo de venta antes de decidir', 'La duplico'], a: 1, why: 'Dos días no alcanzan: las ventas tardan.' },
        { t: 'number', q: 'Tope de CAC $150.000. ¿Debajo de qué CAC marginal escalarías (80% del tope)?', a: 120000, unit: '$', why: '150.000 × 0,8 = 120.000.' },
        { t: 'tf', q: 'Liberar inversión por tramos ayuda a convencer al dueño.', a: true, why: 'Reduce el riesgo y muestra criterio.' },
      ],
    },
  ],
  lab: [
    'Armá el presupuesto del próximo trimestre de Durabox por objetivo y tarea.',
    'Calculá el CAC marginal del último aumento de inversión.',
    'Escribí tus reglas de escalar, mantener y recortar con números.',
  ],
  challenge: {
    title: 'El CEO quiere duplicar',
    intro: `
<p>Contribución por venta antes de adquisición: $300.000. Dirección quiere conservar $180.000.</p>
<table><thead><tr><th>Mes</th><th>Inversión</th><th>Clientes</th></tr></thead><tbody>
<tr><td>Abril</td><td>$4 M</td><td>40</td></tr>
<tr><td>Mayo</td><td>$6 M</td><td>55</td></tr>
<tr><td>Junio</td><td>$8 M</td><td>66</td></tr>
</tbody></table>
<p>El CEO quiere pasar a <b>$16 M</b>.</p>`,
    steps: [
      { t: 'number', q: '¿CAC máximo?', a: 120000, unit: '$', why: '300.000 − 180.000 = 120.000.' },
      { t: 'number', q: 'CAC marginal de abril a mayo (redondeá a miles).', a: 133000, tol: 1000, unit: '$', why: '2.000.000 ÷ 15 ≈ 133.000.' },
      { t: 'number', q: 'CAC marginal de mayo a junio (redondeá a miles).', a: 182000, tol: 1000, unit: '$', why: '2.000.000 ÷ 11 ≈ 182.000.' },
      { t: 'choice', q: '¿Qué recomendás?', o: ['Duplicar a $16 M', 'Volver cerca de $6 M, testear canales nuevos y liberar más solo con compuertas', 'Mantener $8 M'], a: 1, why: 'Los últimos tramos ya superan el tope; duplicar compraría clientes aún más caros.' },
    ],
    reflect: '¿Cómo se lo explicarías al CEO en tres frases?',
    legacyKey: 'w6',
    solution: `<blockquote>“El promedio se ve bien, pero los últimos clientes nos costaron $182.000 y nuestro tope es $120.000. Duplicar en los mismos canales compraría clientes todavía más caros. Propongo volver a ~$6 M, probar canales nuevos con una parte chica y liberar más inversión cuando el CAC de los clientes extra esté debajo del tope.”</blockquote>`,
  },
  cards: [
    { q: 'Presupuesto por objetivo y tarea', a: 'Del objetivo de ventas, recorrer el funnel al revés hasta la inversión.' },
    { q: 'CAC marginal', a: 'Δ inversión ÷ Δ clientes. Cuánto costaron los clientes extra.' },
    { q: 'Regla 70/20/10', a: '70% lo probado, 20% optimización, 10% experimentos.' },
    { q: '¿Cuándo recortar?', a: 'Si supera el tope durante más de un ciclo de venta completo.' },
  ],
});
