/* Brain — Módulo 11 · Liderazgo y gestión del área (Nivel 3).
   Caso que atraviesa el módulo: vos como directora de marketing de Roble, con un equipo chico y una agencia. */

UNITS.push({
  n: 11,
  phase: 'f3',
  title: 'Liderazgo y gestión del área',
  goal: 'Dirigir el área de marketing: decidir quién hace qué, convertir la estrategia en trabajo y liderar personas.',
  summary: [
    'Una CMO conecta mercado y negocio, con límites claros de qué decide y qué propone.',
    'Los equipos y proveedores rinden con objetivos por resultado, acuerdos claros y delegación con criterios.',
    'Liderar es crear claridad y dar feedback sobre conductas, no sobre personas.',
  ],
  sections: [
    {
      code: '11.1', title: 'Rol y responsabilidades de la CMO',
      lessons: [
        {
          id: 'm11s1l1', title: 'Qué hace una CMO', icon: '👩‍💼',
          read: [
            { h: 'Un puente', body: `
<p>La <b>CMO</b> (directora de marketing) conecta lo que pasa en el mercado (clientes, competencia, demanda) con lo que la empresa necesita lograr (ventas, margen, crecimiento).</p>
<p>No es quien hace los posteos ni quien maneja las campañas: es quien decide hacia dónde va el área, coordina con las demás y responde por los resultados.</p>` },
            { h: 'Lo que no es', body: `
<p>La CMO no reemplaza a quien maneja las finanzas (CFO) ni a quien maneja operaciones. Trabaja con ellos:</p>
<ul>
<li>Propone crecimiento.</li>
<li>Operaciones valida si hay capacidad.</li>
<li>Finanzas valida si hay caja.</li>
</ul>
<div class="callout">Quedate con esto: la CMO responde por decisiones estratégicas, no por hacer todo.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'La CMO es quien publica en redes y arma las campañas.', a: false, why: 'Dirige y coordina; la ejecución suele estar en el equipo o la agencia.' },
            { t: 'match', q: 'Uní cada área con lo que valida.', pairs: [['Marketing', 'Propone crecimiento'], ['Operaciones', 'Valida capacidad'], ['Finanzas', 'Valida caja']] },
            { t: 'choice', q: '¿Qué conecta la CMO?', o: ['El mercado con los objetivos del negocio', 'Los anuncios con el diseño', 'El CRM con la web'], a: 0, why: 'Es su función central.' },
          ],
        },
        {
          id: 'm11s1l2', title: 'Quién decide qué', icon: '🗝️',
          read: [
            { h: 'Derechos de decisión', body: `
<p>Muchos conflictos en las empresas no son de personas sino de <b>decisiones sin dueño</b>. ¿Quién decide el precio de una promoción? ¿Marketing, ventas, el dueño?</p>
<p>Conviene dejar escrito, para las decisiones importantes, quién:</p>
<ul>
<li><b>Decide</b>.</li>
<li><b>Propone</b>.</li>
<li><b>Opina</b> (se le consulta antes).</li>
<li><b>Se entera</b> (se le informa después).</li>
</ul>` },
            { h: 'Un ejemplo en Roble', body: `
<table><thead><tr><th>Decisión</th><th>Decide</th><th>Propone</th><th>Opina</th></tr></thead><tbody>
<tr><td>Promoción de temporada</td><td>Dueño</td><td>CMO</td><td>Ventas, taller</td></tr>
<tr><td>Mensajes de campaña</td><td>CMO</td><td>Agencia</td><td>Ventas</td></tr>
<tr><td>Plazo de entrega prometido</td><td>Taller</td><td>CMO</td><td>Ventas</td></tr>
</tbody></table>
<div class="callout">Quedate con esto: cuando nadie sabe quién decide, todos opinan y nada avanza.</div>` },
          ],
          ex: [
            { t: 'order', q: 'Ordená los roles de mayor a menor responsabilidad sobre una decisión.', items: ['Decide', 'Propone', 'Opina', 'Se entera'], why: 'Quien decide responde por el resultado.' },
            { t: 'choice', q: 'En Roble, ¿quién decide el plazo de entrega que se promete?', o: ['La agencia', 'El taller, que lo tiene que cumplir', 'Quien hace los anuncios'], a: 1, why: 'Decide quien puede garantizarlo.' },
            { t: 'tf', q: 'Muchos conflictos vienen de decisiones que no tienen dueño claro.', a: true, why: 'Sin dueño, cada uno actúa según su criterio.' },
          ],
        },
        {
          id: 'm11s1l3', title: 'Límites de la autoridad', icon: '🧱',
          read: [
            { h: 'Hasta dónde llega marketing', body: `
<p>Como CMO de Roble podés decidir mensajes, canales y cómo repartir el presupuesto aprobado. Pero hay decisiones que cruzan áreas o arriesgan mucho, y esas suben al dueño (o CEO):</p>
<ul>
<li>Pasarte del presupuesto aprobado.</li>
<li>Cambiar precios de lista.</li>
<li>Prometer plazos o productos que dependen de otra área.</li>
<li>Entrar en un mercado nuevo.</li>
</ul>` },
            { h: 'Llevar decisiones, no problemas', body: `
<p>Cuando una decisión sube, conviene llevarla preparada: qué proponés, por qué, qué riesgos tiene y qué necesitás que se apruebe.</p>
<div class="callout">Quedate con esto: conocer tus límites te da más libertad dentro de ellos.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué decisión puede tomar sola la CMO?', o: ['Cambiar los precios de lista', 'Elegir los mensajes de la próxima campaña', 'Entrar a otro país'], a: 1, why: 'Está dentro de su área y presupuesto.' },
            { t: 'tf', q: 'Prometer un plazo que depende del taller requiere acordarlo con el taller.', a: true, why: 'Cruza áreas: lo cumple otra persona.' },
            { t: 'open', q: 'Como CMO de Roble, nombrá una decisión que requeriría aprobación del dueño y explicá por qué.', model: `<p>Lanzar una promoción del 20% en toda la línea de mesas. Requiere aprobación porque cambia el precio, afecta el margen de toda la empresa y puede aumentar la demanda más allá de lo que el taller puede fabricar.</p><p>La llevaría preparada: objetivo, cuánto bajaría lo que deja cada venta, cuántas ventas extra harían falta, si hay capacidad y qué alternativa propongo.</p>`, points: ['Nombra una decisión concreta', 'Explica que afecta a otras áreas o al margen', 'Menciona el riesgo', 'La lleva preparada con propuesta'] },
          ],
        },
      ],
    },
    {
      code: '11.2', title: 'Equipos y proveedores',
      lessons: [
        {
          id: 'm11s2l1', title: 'Organizar por resultados', icon: '🧑‍🤝‍🧑',
          read: [
            { h: 'Tareas o resultados', body: `
<p>Hay dos formas de repartir el trabajo:</p>
<ul>
<li><b>Por tareas</b>: “vos hacés posteos, vos hacés anuncios, vos respondés mensajes”. Cada uno cumple su parte, pero nadie responde por el resultado.</li>
<li><b>Por resultados</b>: “vos sos responsable de que las consultas pidan presupuesto; vos, de que los clientes vuelvan”. Cada uno decide cómo lograrlo.</li>
</ul>` },
            { h: 'La señal de alarma', body: `
<p>Si el equipo pasa el día en reuniones de coordinación, pidiendo aprobaciones y esperando respuestas, el problema no es la gente: faltan <b>procesos claros</b> y <b>criterios compartidos</b>.</p>
<div class="callout">Quedate con esto: la coordinación excesiva suele ser un síntoma de falta de reglas, no de falta de esfuerzo.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Clasificá cada asignación.', pairs: [['“Hacé tres posteos por semana”', 'Por tareas'], ['“Lográ que más consultas pidan presupuesto”', 'Por resultados']] },
            { t: 'tf', q: 'Muchas reuniones de coordinación suelen indicar falta de procesos claros.', a: true, why: 'Si las reglas están claras, se necesita coordinar menos.' },
            { t: 'choice', q: '¿Qué ventaja tiene organizar por resultados?', o: ['Que nadie piensa', 'Que alguien responde por el resultado y decide cómo lograrlo', 'Que hay más reuniones'], a: 1, why: 'Da responsabilidad y autonomía.' },
          ],
        },
        {
          id: 'm11s2l2', title: 'Agencias y freelancers', icon: '📑',
          read: [
            { h: 'Acuerdos claros', body: `
<p>Roble trabaja con una agencia para los anuncios y una diseñadora freelance. Para que funcione, cada relación necesita un <b>acuerdo de servicio</b>:</p>
<ul>
<li><b>Qué</b> entregan.</li>
<li><b>Cuándo</b> (plazos y ritmo de reuniones).</li>
<li><b>Con qué calidad</b> (qué se considera bien hecho).</li>
<li><b>Cómo se mide</b> (por resultados de negocio, no solo por entregas).</li>
</ul>` },
            { h: 'Evaluar proveedores', body: `
<p>Cada tanto, revisá: ¿cumplen plazos? ¿Proponen o solo ejecutan? ¿Sus resultados se ven en ventas, o solo en métricas de plataforma?</p>
<div class="callout">Quedate con esto: si no definís qué es “bien hecho”, no podés reclamar ni reconocer.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué NO forma parte de un acuerdo de servicio?', o: ['Qué entregan', 'Plazos', 'El horóscopo de la agencia'], a: 2, why: 'El acuerdo define entregas, plazos, calidad y medición.' },
            { t: 'tf', q: 'Una agencia se evalúa solo por la cantidad de piezas que entrega.', a: false, why: 'Importa el efecto en el negocio, no solo el volumen.' },
            { t: 'choice', q: '¿Qué pregunta ayuda a evaluar a la agencia?', o: ['¿Sus resultados se ven en ventas?', '¿Usan buenas tipografías?', '¿Responden con emojis?'], a: 0, why: 'Liga su trabajo con lo que le importa al negocio.' },
          ],
        },
        {
          id: 'm11s2l3', title: 'Delegar con criterios', icon: '🪁',
          read: [
            { h: 'Aprobar todo frena todo', body: `
<p>La diseñadora de Roble tenía que pedir aprobación para cambiar hasta un color. Cada cambio esperaba un día. El equipo se volvió lento y la diseñadora dejó de proponer.</p>` },
            { h: 'Delegar no es desentenderse', body: `
<p>Delegar bien es dar <b>autonomía dentro de límites claros</b>:</p>
<ul>
<li>Qué puede decidir sola (ajustes de piezas dentro de la guía de marca).</li>
<li>Qué tiene que consultar (mensajes nuevos, promesas de precio o plazo).</li>
<li>Con qué criterios se evalúa (claridad, marca, efecto).</li>
</ul>
<div class="callout">Quedate con esto: con criterios claros, la gente puede decidir sin pedir permiso para cada detalle.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Aprobar cada cambio menor asegura calidad sin costo.', a: false, why: 'Frena al equipo y le quita iniciativa.' },
            { t: 'match', q: 'Clasificá cada decisión de la diseñadora.', pairs: [['Ajustar una pieza dentro de la guía', 'Decide sola'], ['Prometer un plazo en un anuncio', 'Consulta antes']] },
            { t: 'open', q: '¿Qué decisión delegarías en la agencia de Roble y con qué límites?', model: `<p>Delegaría la gestión diaria de las campañas: pausar anuncios que no funcionan, probar variantes y mover presupuesto entre anuncios de una misma campaña.</p><p>Límites: no pasarse del presupuesto mensual, no cambiar las promesas de precio o plazo sin consultar y reportar cada semana con consultas, presupuestos y ventas, no solo con métricas de plataforma.</p>`, points: ['Delega una decisión concreta', 'Fija un límite de presupuesto', 'Reserva las promesas sensibles', 'Define cómo y con qué métricas reporta'] },
          ],
        },
      ],
    },
    {
      code: '11.3', title: 'Planificación y ejecución',
      lessons: [
        {
          id: 'm11s3l1', title: 'De la estrategia a la semana', icon: '🗓️',
          read: [
            { h: 'Lo que convierte planes en resultados', body: `
<p>Una estrategia en un documento no cambia nada. Se convierte en resultados con cuatro cosas:</p>
<ol>
<li><b>Prioridades</b>: qué va primero.</li>
<li><b>Responsables</b>: un nombre por iniciativa.</li>
<li><b>Plazos</b>.</li>
<li><b>Revisión</b> periódica.</li>
</ol>` },
            { h: 'Proyectos y operación', body: `
<p>Conviene separar:</p>
<ul>
<li><b>Operación recurrente</b>: lo que se hace siempre (responder consultas, publicar, reportar).</li>
<li><b>Proyectos</b>: lo que tiene principio y fin (armar el CRM, rediseñar la web).</li>
</ul>
<p>Si todo se mezcla, la operación se come los proyectos y nada nuevo avanza.</p>
<div class="callout">Quedate con esto: toda reunión termina con decisiones, responsables y fechas.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Clasificá cada trabajo de Roble.', pairs: [['Responder consultas', 'Operación recurrente'], ['Armar el CRM', 'Proyecto'], ['Reporte semanal', 'Operación recurrente'], ['Rediseñar la web', 'Proyecto']] },
            { t: 'tf', q: 'Una reunión puede terminar sin decisiones si se habló mucho.', a: false, why: 'Sin decisiones, responsables y fechas, la reunión no movió nada.' },
            { t: 'order', q: 'Ordená lo que convierte la estrategia en resultados.', items: ['Prioridades', 'Responsables', 'Plazos', 'Revisión'], why: 'Primero qué, después quién, cuándo y cómo se controla.' },
          ],
        },
        {
          id: 'm11s3l2', title: 'Objetivos que se pueden medir', icon: '🏁',
          read: [
            { h: 'OKR en simple', body: `
<p>Los <b>OKR</b> (objetivos y resultados clave) son una forma de escribir metas:</p>
<ul>
<li><b>Objetivo</b>: hacia dónde vamos, en palabras. “Que más consultas se conviertan en ventas.”</li>
<li><b>Resultados clave</b>: cómo sabemos que avanzamos, con números. “Pasar de 5 a 7 ventas cada 100 consultas.” “Responder en menos de 15 minutos el 90% de las consultas.”</li>
</ul>` },
            { h: 'Mal escrito vs. bien escrito', body: `
<p>❌ “Mejorar marketing.” No se sabe qué hacer ni cuándo se cumplió.</p>
<p>✅ “Elevar el cierre comercial del 5% al 7% en el trimestre.” Concreto, medible, con plazo.</p>
<div class="callout">Quedate con esto: si no se puede medir, no se puede gestionar.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Cuál es un resultado clave bien escrito?', o: ['“Mejorar marketing”', '“Pasar de 5 a 7 ventas cada 100 consultas este trimestre”', '“Ser más creativos”'], a: 1, why: 'Tiene número, punto de partida y plazo.' },
            { t: 'match', q: 'Uní cada parte del OKR con su ejemplo.', pairs: [['Objetivo', 'Que más consultas se conviertan en ventas'], ['Resultado clave', 'Responder en menos de 15 minutos el 90% de las consultas']] },
            { t: 'number', q: 'De cada 100 consultas, Roble cierra 5. Quiere llegar a 7. ¿Cuántas ventas más cada 100 consultas?', a: 2, unit: 'ventas', why: '7 − 5 = 2 ventas más cada 100 consultas.' },
          ],
        },
        {
          id: 'm11s3l3', title: 'Cuando el equipo no da abasto', icon: '🧯',
          read: [
            { h: 'Más proyectos que personas', body: `
<p>El equipo de marketing de Roble tiene abiertos: nueva web, CRM, campaña de temporada, catálogo de fotos y un podcast. Todo avanza un poco y nada termina.</p>
<p>Cuando el equipo está sobrecargado, sumar urgencia no ayuda. Lo que ayuda es <b>suspender</b> algo.</p>` },
            { h: 'Cómo elegir qué frenar', body: `
<ul>
<li>¿Qué proyecto tiene menos impacto en el objetivo del trimestre?</li>
<li>¿Cuál depende de otros que todavía no están listos? (Las <b>dependencias</b>: la campaña necesita las fotos, el CRM necesita definir el proceso.)</li>
<li>¿Cuál se puede retomar sin perder lo hecho?</li>
</ul>
<div class="callout">Quedate con esto: terminar pocas cosas vale más que avanzar un poco en muchas.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Con el equipo sobrecargado, conviene agregar urgencia a todos los proyectos.', a: false, why: 'Sin liberar capacidad, nada se termina.' },
            { t: 'choice', q: '¿Qué es una dependencia?', o: ['Un proyecto que necesita que otro termine antes', 'Un proyecto caro', 'Un proveedor'], a: 0, why: 'La campaña no puede salir sin las fotos.' },
            { t: 'open', q: 'De los cinco proyectos de Roble (web, CRM, campaña de temporada, fotos, podcast), ¿cuál suspenderías si el objetivo del trimestre es convertir más consultas en ventas?', model: `<p>Suspendería el podcast: tiene poco impacto en convertir consultas en ventas este trimestre y se puede retomar después sin perder nada.</p><p>Priorizaría el CRM (ordena el seguimiento de consultas) y las fotos (las necesita la campaña). La web nueva la acotaría a lo que más frena la conversión, por ejemplo, responder instalación y garantía.</p>`, points: ['Elige qué suspender', 'Lo justifica con el objetivo del trimestre', 'Considera dependencias', 'Prioriza lo que más impacta en conversión'] },
          ],
        },
      ],
    },
    {
      code: '11.4', title: 'Liderazgo y comunicación',
      lessons: [
        {
          id: 'm11s4l1', title: 'Crear claridad', icon: '🔦',
          read: [
            { h: 'La tarea número uno', body: `
<p>La mayor parte de los problemas de un equipo vienen de la falta de claridad: no saber qué se espera, para qué, ni qué va primero.</p>
<p>Liderar empieza por responder siempre tres preguntas:</p>
<ul>
<li><b>¿Qué</b> esperamos lograr?</li>
<li><b>¿Por qué</b> importa?</li>
<li><b>¿Qué va primero</b> si no llegamos con todo?</li>
</ul>` },
            { h: 'Claridad habilita autonomía', body: `
<p>Cuando el equipo de Roble sabe que este trimestre importa convertir consultas, la diseñadora puede decidir sola priorizar las piezas para WhatsApp antes que las de reconocimiento. No necesita preguntar.</p>
<div class="callout">Quedate con esto: un equipo con claridad necesita menos control.</div>` },
          ],
          ex: [
            { t: 'order', q: 'Ordená las preguntas que crean claridad.', items: ['¿Qué esperamos lograr?', '¿Por qué importa?', '¿Qué va primero?'], why: 'Del objetivo a la prioridad.' },
            { t: 'tf', q: 'Con claridad sobre objetivos y prioridades, el equipo puede decidir más solo.', a: true, why: 'Sabe qué criterio usar.' },
            { t: 'choice', q: '¿De dónde vienen muchos problemas de equipo?', o: ['De la falta de claridad', 'Del color de la oficina', 'De las herramientas'], a: 0, why: 'Sin claridad, cada uno prioriza distinto.' },
          ],
        },
        {
          id: 'm11s4l2', title: 'Feedback sobre conductas', icon: '💬',
          read: [
            { h: 'Etiquetas vs. hechos', body: `
<p>❌ “Sos desordenado.” Es una etiqueta sobre la persona: genera defensa y no dice qué cambiar.</p>
<p>✅ “Los últimos dos reportes llegaron el lunes a la tarde en vez del lunes a la mañana. Eso hizo que el dueño entrara a la reunión sin números. ¿Qué pasó y cómo lo resolvemos?”</p>` },
            { h: 'Una estructura simple', body: `
<ol>
<li><b>Conducta observable</b>: qué pasó, concreto.</li>
<li><b>Efecto</b>: qué consecuencia tuvo.</li>
<li><b>Pregunta o pedido</b>: abrir la conversación y acordar qué cambia.</li>
</ol>
<p>Sirve igual para reconocer algo bien hecho: “El reporte de hoy explicó por qué bajaron las ventas. Eso ayudó a decidir rápido.”</p>
<div class="callout">Quedate con esto: hablá de lo que la persona hizo, no de lo que es.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Cuál es feedback sobre una conducta?', o: ['“Sos desordenado”', '“Los últimos dos reportes llegaron tarde y el dueño entró sin números”', '“No te comprometés”'], a: 1, why: 'Describe un hecho y su efecto.' },
            { t: 'order', q: 'Ordená la estructura del feedback.', items: ['Conducta observable', 'Efecto', 'Pregunta o pedido'], why: 'Primero el hecho, después la consecuencia y al final el acuerdo.' },
            { t: 'tf', q: 'Esta estructura también sirve para reconocer algo bien hecho.', a: true, why: 'Reconocer con hechos concretos refuerza lo que funciona.' },
          ],
        },
        {
          id: 'm11s4l3', title: 'Antes de concluir que falta compromiso', icon: '🪞',
          read: [
            { h: 'Mirar el sistema primero', body: `
<p>Los presupuestos de Roble salen tarde una y otra vez. La conclusión fácil: “los vendedores no se comprometen”.</p>
<p>Antes de eso, mirá el sistema:</p>
<ul>
<li><b>Capacidad</b>: ¿cuántas consultas atiende cada uno?</li>
<li><b>Prioridades</b>: ¿saben qué va primero?</li>
<li><b>Proceso</b>: ¿tienen precios y plantillas a mano o tienen que pedirlos cada vez?</li>
</ul>
<p>Muchas veces la demora viene de un proceso roto, no de las personas.</p>` },
            { h: 'Conversaciones difíciles', body: `
<p>Cuando sí hay que hablar, conviene prepararlo: qué hechos tenés, qué querés lograr, qué estás dispuesta a ceder. En una negociación o un conflicto, buscá el interés de fondo de cada parte, no solo su postura.</p>
<div class="callout">Quedate con esto: si el problema se repite con distintas personas, probablemente sea del proceso.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Si algo sale tarde varias veces, seguro es falta de compromiso.', a: false, why: 'Puede ser falta de capacidad, de prioridades o de proceso.' },
            { t: 'match', q: 'Uní cada causa con su pregunta.', pairs: [['Capacidad', '¿Cuántas consultas atiende cada uno?'], ['Prioridades', '¿Saben qué va primero?'], ['Proceso', '¿Tienen precios y plantillas a mano?']] },
            { t: 'open', q: 'Un vendedor de Roble responde las consultas cada vez más tarde. ¿Cómo le darías feedback sin convertirlo en un juicio personal?', model: `<p>Primero revisaría si tiene más consultas que antes o si le falta algo del proceso. Después hablaría con hechos: “Esta semana, el tiempo promedio de respuesta fue de cinco horas, cuando acordamos quince minutos. Eso hace que perdamos consultas que ya pagamos. ¿Qué está pasando?”.</p><p>Escucharía su explicación y acordaríamos un cambio concreto (redistribuir consultas, una plantilla, un horario de guardia), con fecha para revisarlo.</p>`, points: ['Revisa capacidad o proceso antes de hablar', 'Describe una conducta con datos', 'Explica el efecto en el negocio', 'Abre con una pregunta y acuerda un cambio'] },
          ],
        },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, armá una tabla de quién decide, propone, opina y se entera para tres decisiones de marketing.',
    'Escribí un acuerdo de servicio para un proveedor: qué, cuándo, calidad y cómo se mide.',
    'Redactá un OKR para el próximo trimestre con dos resultados clave medibles.',
    'Prepará un feedback con la estructura conducta, efecto y pedido.',
  ],
  challenge: {
    key: 'm11', title: 'Un equipo desbordado',
    intro: `
<p>Asumís como directora de marketing de Roble. Encontrás:</p>
<ul>
<li>Cinco proyectos abiertos y ninguno terminado.</li>
<li>La diseñadora pide aprobación para cada cambio.</li>
<li>La agencia reporta clics y alcance, pero nadie sabe cuántas ventas trae.</li>
<li>El dueño dice que “el equipo no se compromete”.</li>
<li>El objetivo del trimestre: convertir más consultas en ventas.</li>
</ul>`,
    steps: [
      { t: 'choice', q: '¿Cuál es el diagnóstico más útil?', o: ['El equipo no se compromete', 'Faltan prioridades, criterios para delegar y medición por resultados', 'Faltan más proyectos'], a: 1, why: 'Los síntomas apuntan al sistema, no a las personas.' },
      { t: 'choice', q: '¿Qué le pedís a la agencia?', o: ['Más alcance', 'Reportar consultas, presupuestos y ventas por campaña', 'Más piezas por semana'], a: 1, why: 'Liga su trabajo al objetivo del negocio.' },
      { t: 'tf', q: 'Conviene suspender proyectos que no ayudan al objetivo del trimestre.', a: true, why: 'Libera capacidad para terminar lo importante.' },
      { t: 'open', q: 'Proponé dos alternativas para los primeros 30 días y cuál recomendarías.', model: `<p><b>A:</b> contratar a otra persona para sacar todos los proyectos. Suma costo y no resuelve la falta de prioridades ni de criterios.</p><p><b>B:</b> definir el OKR del trimestre, suspender lo que no aporta (por ejemplo, el podcast), escribir criterios para que la diseñadora decida sola los ajustes menores y acordar con la agencia un reporte semanal con consultas, presupuestos y ventas.</p><p>Recomiendo B: ataca las causas, cuesta poco y en 30 días muestra si hace falta sumar gente.</p>`, points: ['Prioriza según el objetivo', 'Propone delegar con criterios', 'Cambia la medición de la agencia a resultados', 'Compara contra sumar gente sin cambiar el sistema'] },
    ],
    reflect: '¿Qué le dirías al dueño cuando dice que “el equipo no se compromete”?',
    solution: `
<p><strong>Diagnóstico:</strong> el equipo trabaja mucho sin prioridades claras, con aprobaciones que frenan y sin medir resultados de negocio.</p>
<p><strong>Datos que faltan:</strong> carga real de cada persona, resultados en ventas de cada canal, qué proyectos dependen de otros.</p>
<p><strong>Recomendación:</strong> OKR del trimestre, suspender lo que no suma, delegar con criterios y medir por resultados. Al dueño: “Antes de juzgar el compromiso, ordenemos prioridades y procesos; en 30 días vamos a ver la diferencia con datos.”</p>`,
  },
  cards: [
    { q: 'Rol de la CMO', a: 'Conectar mercado y objetivos del negocio, coordinar áreas y responder por decisiones estratégicas.' },
    { q: 'Derechos de decisión', a: 'Para cada decisión: quién decide, propone, opina y se entera.' },
    { q: 'Acuerdo de servicio', a: 'Qué se entrega, cuándo, con qué calidad y cómo se mide.' },
    { q: 'OKR', a: 'Un objetivo en palabras y resultados clave medibles con plazo.' },
    { q: 'Feedback útil', a: 'Conducta observable, efecto y pregunta o pedido.' },
  ],
});
