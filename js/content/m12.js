/* Brain — Módulo 12 · Dirección estratégica y Fractional CMO (Nivel 3).
   Cierre del programa: diagnosticar, planificar, gobernar y ofrecer dirección de marketing externa. */

UNITS.push({
  n: 12,
  phase: 'f3',
  title: 'Dirección estratégica y Fractional CMO',
  goal: 'Diagnosticar una empresa, armar su plan, gobernar su ejecución y ofrecer dirección de marketing externa.',
  summary: [
    'Un diagnóstico empieza por los objetivos y la economía del negocio, no por la publicidad.',
    'Un plan son elecciones con supuestos, prioridades y renuncias; se gobierna con un tablero y reuniones fijas.',
    'Como Fractional CMO, tu valor está en el criterio y el sistema, con un alcance explícito.',
  ],
  sections: [
    {
      code: '12.1', title: 'Diagnóstico empresarial',
      lessons: [
        {
          id: 'm12s1l1', title: 'Por dónde empieza un diagnóstico', icon: '🩻',
          read: [
            { h: 'El pedido y el problema', body: `
<p>El dueño de una empresa te dice: “Necesitamos más leads”. Es un pedido, no un diagnóstico. Puede que el problema esté en otro lado.</p>
<p>Un diagnóstico de directora mira, en este orden:</p>
<ol>
<li><b>Objetivos</b>: ¿qué quiere lograr la empresa?</li>
<li><b>Economía</b>: ¿cuánto deja cada venta? ¿Cuánto puede pagar por un cliente?</li>
<li><b>Clientes</b>: ¿quién compra y por qué?</li>
<li><b>Canales</b>: ¿de dónde vienen?</li>
<li><b>Proceso comercial</b>: ¿cuántos se pierden y dónde?</li>
<li><b>Capacidad</b>: ¿puede atender más?</li>
<li><b>Equipo</b>: ¿quién hace qué?</li>
</ol>` },
            { h: 'No presuponer la respuesta', body: `
<p>Si llegás con la solución (“hay que hacer más publicidad”), vas a ver solo lo que la confirma. El diagnóstico sirve para descubrir dónde está el freno real.</p>
<div class="callout">Quedate con esto: lo que pide el cliente es un síntoma; tu trabajo es encontrar la causa.</div>` },
          ],
          ex: [
            { t: 'order', q: 'Ordená por dónde empieza el diagnóstico.', items: ['Objetivos', 'Economía', 'Clientes', 'Proceso comercial', 'Capacidad'], why: 'Primero qué se quiere lograr y cómo se gana plata; después cómo funciona el motor.' },
            { t: 'tf', q: '“Necesitamos más leads” ya es un diagnóstico.', a: false, why: 'Es un pedido; el problema puede estar en otro lado.' },
            { t: 'choice', q: '¿Qué riesgo tiene llegar con la solución decidida?', o: ['Ninguno, ahorra tiempo', 'Ver solo los datos que la confirman', 'Que el cliente se ofenda'], a: 1, why: 'Se pierde la posibilidad de encontrar el freno real.' },
          ],
        },
        {
          id: 'm12s1l2', title: 'Percepciones y datos', icon: '👂',
          read: [
            { h: 'Escuchar a todos', body: `
<p>En los primeros días, entrevistá a quienes ven el negocio desde distintos lugares: el dueño, ventas, operaciones, administración, algún cliente.</p>
<p>Cada uno tiene una explicación de lo que pasa. “Los leads son malos” (ventas). “Ventas no responde” (marketing). “No nos dan los plazos” (taller).</p>` },
            { h: 'Contrastar', body: `
<p>Después, contrastá cada percepción con datos: tiempos de respuesta reales, conversión por etapa, plazos cumplidos, márgenes por producto.</p>
<p>Con eso armás un <b>mapa</b> de tres columnas:</p>
<ul>
<li><b>Problemas</b>: lo que hoy hace perder plata o clientes.</li>
<li><b>Oportunidades</b>: lo que se podría ganar.</li>
<li><b>Restricciones</b>: lo que limita (caja, capacidad, equipo).</li>
</ul>
<div class="callout">Quedate con esto: las opiniones te dicen dónde mirar; los datos, qué está pasando.</div>` },
          ],
          ex: [
            { t: 'choice', q: 'Ventas dice “los leads son malos”. ¿Qué hacés?', o: ['Le creés y cambiás la agencia', 'Lo contrastás con datos de conversión y tiempos de respuesta', 'Lo ignorás'], a: 1, why: 'Es una pista que hay que comprobar.' },
            { t: 'match', q: 'Uní cada columna del mapa con un ejemplo.', pairs: [['Problema', 'Se pierden consultas por responder tarde'], ['Oportunidad', 'Clientes que podrían sumar sillas'], ['Restricción', 'El taller está al máximo']] },
            { t: 'tf', q: 'Conviene entrevistar a varias áreas, no solo al dueño.', a: true, why: 'Cada área ve una parte distinta del problema.' },
          ],
        },
        {
          id: 'm12s1l3', title: 'Los primeros diez días', icon: '🔟',
          read: [
            { h: 'Un plan para empezar', body: `
<p>Cuando entrás a una empresa nueva, los primeros días definen mucho. Un plan posible:</p>
<ul>
<li><b>Días 1–3</b>: entrevistas con dueño, ventas, operaciones y administración.</li>
<li><b>Días 4–6</b>: pedir y revisar datos: ventas por producto, margen, inversión, consultas, conversión, tiempos.</li>
<li><b>Días 7–8</b>: recorrer la experiencia como cliente (consultar, pedir presupuesto).</li>
<li><b>Días 9–10</b>: mapa de problemas, oportunidades y restricciones, y tres prioridades para conversar.</li>
</ul>` },
            { h: 'Un caso real', body: `
<p>Una empresa pedía más leads. En el diagnóstico apareció que las respuestas comerciales tardaban un día y medio. La prioridad no era la publicidad sino el seguimiento.</p>
<div class="callout">Quedate con esto: al final de los diez días, tenés que poder explicar dónde se gana y dónde se pierde plata.</div>` },
          ],
          ex: [
            { t: 'order', q: 'Ordená el plan de los primeros diez días.', items: ['Entrevistas', 'Revisión de datos', 'Recorrer la experiencia como cliente', 'Mapa y prioridades'], why: 'Escuchar, comprobar, vivir y concluir.' },
            { t: 'tf', q: 'Recorrer la experiencia como cliente puede mostrar problemas que no aparecen en los datos.', a: true, why: 'Ves la demora, el tono y las dudas en primera persona.' },
            { t: 'open', q: 'Entrás como directora de marketing a Lumen. ¿Qué investigarías durante los primeros diez días?', model: `<p>Entrevistaría al dueño (objetivos y restricciones), a quien atiende consultas y a logística. Pediría ventas y margen por producto, inversión y resultados por canal, abandono del carrito, devoluciones y reclamos.</p><p>Haría una compra de prueba desde el celular para ver fricciones. Con todo eso armaría un mapa de problemas, oportunidades y restricciones, y propondría tres prioridades con datos.</p>`, points: ['Incluye entrevistas a varias áreas', 'Pide datos económicos por producto y canal', 'Recorre la experiencia como cliente', 'Cierra con un mapa y prioridades'] },
          ],
        },
      ],
    },
    {
      code: '12.2', title: 'Plan estratégico de marketing',
      lessons: [
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
        {
          id: 'm12s2l1', title: 'Priorizar con escenarios', icon: '📌',
          read: [
            { h: 'Elegir el orden', body: `
<p>Un plan expresa <b>elecciones</b>: metas, segmentos, propuesta de valor, palancas, canales, recursos y en qué orden se hacen las cosas.</p>
<p>Para priorizar, cada iniciativa se mira por <b>impacto</b> (cuánto mueve el objetivo) y <b>factibilidad</b> (qué tan posible es con los recursos actuales).</p>` },
            { h: 'Supuestos y renuncias a la vista', body: `
<p>En Roble, el plan puede poner el CRM y la conversión <b>antes</b> que abrir un canal publicitario nuevo: de nada sirve traer más consultas si se pierden la mitad.</p>
<p>Y el plan tiene que decir qué supuestos lo sostienen (“con respuesta en 15 minutos, la conversión sube”) y a qué se renuncia (“este semestre no abrimos TikTok”). Con escenarios (pesimista, base, optimista), el dueño ve qué pasa si los supuestos no se cumplen.</p>
<div class="callout">Quedate con esto: un plan que no renuncia a nada no está priorizando.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada criterio con su pregunta.', pairs: [['Impacto', '¿Cuánto mueve el objetivo?'], ['Factibilidad', '¿Se puede hacer con lo que hay?']] },
            { t: 'choice', q: 'Roble pierde la mitad de las consultas por responder tarde. ¿Qué va primero en el plan?', o: ['Abrir un canal publicitario nuevo', 'Ordenar CRM y respuesta', 'Cambiar el logo'], a: 1, why: 'Primero hay que dejar de perder lo que ya llega.' },
            { t: 'open', q: 'El plan de Roble prioriza CRM y conversión antes que un canal nuevo. ¿Qué evidencia justificaría cambiar esa prioridad?', model: `<p>Si después de ordenar el CRM la respuesta ya es rápida, la conversión dejó de mejorar y el taller tiene capacidad libre, el cuello de botella pasó a ser la cantidad de consultas. Ahí sí conviene sumar un canal.</p><p>También cambiaría la prioridad si los datos mostraran que la conversión ya era buena y lo que faltaba eran consultas de un segmento que los canales actuales no alcanzan.</p>`, points: ['Liga el cambio a datos concretos', 'Menciona que la conversión ya mejoró o se estancó', 'Considera la capacidad del taller', 'Identifica que el freno pasó a ser la demanda'] },
          ],
        },
      ],
    },
    {
      code: '12.3', title: 'Gobierno y medición',
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
          id: 'm12s3l1', title: 'Cuándo encender la alarma', icon: '🚨',
          read: [
            { h: 'Hechos, interpretación, riesgos y decisiones', body: `
<p>Un buen reporte de dirección separa cuatro cosas:</p>
<ul>
<li><b>Hechos</b>: qué pasó.</li>
<li><b>Interpretación</b>: qué creemos que significa.</li>
<li><b>Riesgos</b>: qué podría salir mal.</li>
<li><b>Decisiones solicitadas</b>: qué necesitamos que se apruebe.</li>
</ul>
<p>Un reporte al dueño debería cerrar con dos decisiones claras, no con veinte métricas.</p>` },
            { h: 'Revisiones extraordinarias', body: `
<p>Además de las reuniones fijas, conviene acordar de antemano qué señales disparan una <b>revisión extraordinaria</b>: algo tan importante que no puede esperar a fin de mes.</p>
<p>Por ejemplo: el costo por cliente supera el tope dos semanas seguidas, el plazo de entrega se duplica o las bajas de Flow suben de golpe.</p>
<div class="callout">Quedate con esto: definí las alarmas antes de necesitarlas.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Clasificá cada frase del reporte.', pairs: [['“Las ventas cayeron 10%”', 'Hecho'], ['“Creemos que es por los plazos”', 'Interpretación'], ['“Si sigue, perdemos la temporada”', 'Riesgo'], ['“Aprobar un turno extra en el taller”', 'Decisión solicitada']] },
            { t: 'tf', q: 'Un reporte al dueño debería terminar con muchas métricas para que no falte nada.', a: false, why: 'Debería cerrar con pocas decisiones claras.' },
            { t: 'open', q: 'Para Roble, ¿qué indicador dispararía una revisión extraordinaria y con qué umbral?', model: `<p>El plazo real de entrega: si supera en más de una semana el plazo prometido durante dos semanas seguidas, convoco una revisión con el taller y ventas.</p><p>Es grave porque genera cancelaciones y malas reseñas que encarecen conseguir clientes, y puede requerir frenar la publicidad o ajustar lo que se promete.</p>`, points: ['Elige un indicador concreto', 'Fija un umbral con número y tiempo', 'Explica por qué es grave', 'Dice qué se haría al dispararse'] },
          ],
        },
      ],
    },
    {
      code: '12.4', title: 'Modelo Fractional CMO',
      lessons: [
        {
          id: 'm12s4l1', title: 'Qué es ser Fractional CMO', icon: '🧳',
          read: [
            { h: 'Dirección, a tiempo parcial', body: `
<p>Una <b>Fractional CMO</b> presta dirección de marketing con dedicación parcial: algunas horas por semana, para una o varias empresas, con un alcance acordado.</p>
<p>Le sirve a empresas que necesitan dirección pero no pueden (o no necesitan) contratar a una directora a tiempo completo.</p>` },
            { h: 'Dónde está el valor', body: `
<p>Su valor no está en ejecutar todo (hacer posteos, armar campañas), sino en:</p>
<ul>
<li><b>Criterio</b>: saber qué priorizar y qué dejar.</li>
<li><b>Coordinación</b>: alinear marketing con ventas, operaciones y finanzas.</li>
<li><b>Resultados de negocio</b>: que se note en ventas y margen.</li>
</ul>
<div class="callout">Quedate con esto: prometer ejecutar todo es la forma más rápida de no dirigir nada.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Una Fractional CMO trabaja a tiempo completo en una sola empresa.', a: false, why: 'Trabaja con dedicación parcial y un alcance acordado.' },
            { t: 'choice', q: '¿Dónde está el valor de una Fractional CMO?', o: ['En hacer todos los posteos', 'En criterio, coordinación y resultados de negocio', 'En tener muchas herramientas'], a: 1, why: 'Dirige; la ejecución la hace el equipo o los proveedores.' },
            { t: 'choice', q: '¿A qué empresa le sirve más este modelo?', o: ['Una que necesita dirección sin contratar a alguien full time', 'Una multinacional con un área enorme', 'Una que no vende nada todavía'], a: 0, why: 'Es justo el hueco que cubre.' },
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
        {
          id: 'm12s4l2', title: 'Definir el alcance del servicio', icon: '📜',
          read: [
            { h: 'Qué se acuerda', body: `
<p>Antes de empezar con un cliente, conviene dejar por escrito:</p>
<ul>
<li><b>Diagnóstico inicial</b>: cuánto dura y qué entrega.</li>
<li><b>Responsabilidades</b>: qué hacés vos y qué hace el equipo o la agencia.</li>
<li><b>Gobierno</b>: qué reuniones, con quién y cada cuánto.</li>
<li><b>Entregables</b>: plan, tablero, reportes.</li>
<li><b>Límites</b>: qué queda fuera.</li>
<li><b>Honorarios</b> y forma de pago.</li>
<li><b>Relación con proveedores</b>: ¿coordinás a la agencia? ¿La elegís?</li>
</ul>` },
            { h: 'Los límites protegen a los dos', body: `
<p>Sin límites claros, el cliente espera que también hagas los posteos, respondas mensajes y diseñes piezas. Vos terminás ejecutando y nadie dirige.</p>
<div class="callout">Quedate con esto: lo que no está en el alcance termina siendo trabajo gratis o un conflicto.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué conviene dejar fuera del alcance de una Fractional CMO?', o: ['Definir el plan', 'Diseñar cada pieza y responder mensajes', 'Coordinar con ventas'], a: 1, why: 'Es ejecución; si entra, se come el tiempo de dirección.' },
            { t: 'tf', q: 'Los límites del servicio protegen tanto al cliente como a la consultora.', a: true, why: 'Ordenan expectativas y evitan conflictos.' },
            { t: 'open', q: 'Pensá en tu propio servicio de dirección de marketing externa. ¿Qué responsabilidades dejarías fuera y por qué?', model: `<p>Dejaría fuera la ejecución diaria: diseño de piezas, publicación en redes, carga de campañas y atención de mensajes. Eso lo hace el equipo o la agencia, y yo lo coordino y evalúo.</p><p>También dejaría fuera decisiones que no son de marketing (fijar sueldos, elegir proveedores de producción). Así mi tiempo se va en diagnóstico, plan, tablero y gobierno, que es donde está el valor del servicio.</p>`, points: ['Excluye tareas de ejecución diaria', 'Aclara quién las hace', 'Excluye decisiones de otras áreas', 'Justifica con el valor del servicio'] },
          ],
        },
      ],
    },
  ],
  lab: [
    'Hacé el diagnóstico de tu empresa elegida: objetivos, economía, clientes, canales, proceso comercial, capacidad y equipo.',
    'Completá su Tablero de Dirección en Herramientas.',
    'Escribí su plan para el próximo semestre (máximo dos páginas), con prioridades, supuestos y renuncias.',
    'Prepará una recomendación con la estructura de cinco pasos y dos decisiones claras.',
    'Proyecto integrador del Nivel 3: propuesta ejecutiva completa (diagnóstico, escenarios, prioridades, presupuesto y plan) para defender ante el dueño.',
    'Escribí el alcance de tu servicio de Fractional CMO: qué incluye, qué no y cómo se gobierna.',
  ],
  challenge: {
    key: 'w12', title: 'Tu primera reunión de directorio',
    intro: `<p>Con la empresa que elegiste para los laboratorios (o con Roble, si preferís), preparás una recomendación de una página para el dueño.</p>`,
    steps: [
      { t: 'order', q: 'Ordená tu documento.', items: ['Recomendación', 'Diagnóstico en 5 líneas', 'Qué frena a la empresa', 'Tres palancas', 'Presupuesto por tramos', 'Decisión que necesitás'], why: 'Empieza por lo que proponés y termina con lo que pedís.' },
      { t: 'tf', q: 'Cada número de marketing del documento debería estar traducido a negocio.', a: true, why: '¿Y esto qué significa para el negocio?' },
      { t: 'choice', q: '¿Con qué termina el documento?', o: ['Con un agradecimiento', 'Con la decisión concreta que necesitás', 'Con todos los datos'], a: 1, why: 'El dueño tiene que saber exactamente qué se le pide.' },
    ],
    reflect: 'Escribí tu recomendación de una página.',
    solution: `<p>Para revisar: ¿empieza por la recomendación? ¿Traduce cada número a ganancia? ¿Distingue lo que cuesta una consulta de lo que cuesta un cliente? ¿Tiene en cuenta si la empresa puede atender más? ¿El presupuesto sale de un objetivo y se libera por tramos? ¿Cada supuesto tiene quién lo confirme? ¿Termina con una decisión concreta?</p>`,
  },
  cards: [
    { q: 'Orden del diagnóstico', a: 'Objetivos, economía, clientes, canales, proceso comercial, capacidad y equipo.' },
    { q: 'Mapa del diagnóstico', a: 'Problemas, oportunidades y restricciones.' },
    { q: 'Priorizar', a: 'Impacto × factibilidad, con supuestos y renuncias explícitos.' },
    { q: 'Reporte de dirección', a: 'Hechos, interpretación, riesgos y decisiones solicitadas.' },
    { q: 'Fractional CMO', a: 'Dirección de marketing con dedicación parcial y alcance explícito; el valor está en el criterio y el sistema.' },
    { q: 'Presentar a dirección', a: 'Recomendación → por qué → supuestos → riesgos → decisión que necesitás.' },
  ],
});
