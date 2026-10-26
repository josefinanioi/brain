/* Brain — Módulo 06 · Conversión, ventas y CRM (Nivel 2).
   Caso que atraviesa el módulo: Roble ordena cómo convierte consultas en ventas. */

UNITS.push({
  n: 6,
  phase: 'f2',
  title: 'Conversión, ventas y CRM',
  goal: 'Convertir el interés en ventas: quitar barreras, ordenar el proceso comercial y proyectar con realismo.',
  summary: [
    'Convertir mejor es quitar las barreras que importan, no cambiar colores.',
    'Un CRM simple y bien cargado vale más que uno completo que nadie usa.',
    'Un forecast es una estimación con supuestos, no una promesa ni un objetivo.',
  ],
  sections: [
    {
      code: '6.1', title: 'Conversión digital',
      lessons: [
        {
          id: 'm6s1l1', title: 'Convertir es quitar barreras', icon: '🚪',
          read: [
            { h: 'Qué es convertir', body: `
<p><b>Convertir</b> es lograr que una persona complete una acción valiosa: pedir presupuesto, comprar, anotarse. La <b>tasa de conversión</b> es qué parte de los que llegan lo hace.</p>
<p>Si 100 personas entran a la página de Flow y 4 reservan una clase de prueba, la conversión es 4%.</p>` },
            { h: 'Lo lindo no siempre convierte', body: `
<p>Flow cambió los colores de su web y las fotos. Quedó hermosa. Las reservas no cambiaron.</p>
<p>La gente no dejaba de reservar por los colores, sino porque <b>no encontraba los horarios</b> y no sabía si podía ir sin experiencia.</p>
<div class="callout">Quedate con esto: primero encontrá qué frena a la gente; después cambiá eso.</div>` },
          ],
          ex: [
            { t: 'number', q: 'Entran 100 personas y reservan 4. ¿Qué porcentaje convierte?', a: 4, unit: '%', why: '4 de cada 100 es 4%.' },
            { t: 'tf', q: 'Un rediseño más lindo siempre mejora la conversión.', a: false, why: 'Si no ataca lo que frena a la gente, no cambia el resultado.' },
            { t: 'choice', q: '¿Qué frenaba las reservas en Flow?', o: ['Los colores', 'No encontrar horarios ni saber si podían ir sin experiencia', 'El logo'], a: 1, why: 'Eran dudas concretas que la página no respondía.' },
          ],
        },
        {
          id: 'm6s1l2', title: 'Observar antes de cambiar', icon: '👀',
          read: [
            { h: 'Cómo encontrar las barreras', body: `
<ul>
<li><b>Mirar cómo se usa</b>: grabaciones de sesiones o mapas de dónde hace clic la gente.</li>
<li><b>Preguntar</b>: una encuesta de una pregunta en la página (“¿Qué te falta para reservar?”).</li>
<li><b>Leer consultas</b>: las preguntas que llegan por WhatsApp muestran lo que la página no explica.</li>
</ul>` },
            { h: 'Hipótesis y prioridad', body: `
<p>Con eso armás hipótesis (“si mostramos los horarios arriba, van a reservar más”) y las ordenás por impacto y facilidad.</p>
<p>Y cuidado con confundir <b>correlación con efecto</b>: si las reservas suben el mismo mes que cambiaste la página, puede ser por la página… o porque empezó marzo y todos vuelven al gimnasio.</p>
<div class="callout">Quedate con esto: si algo mejoró, preguntate qué más cambió al mismo tiempo.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué fuente muestra lo que la página no explica?', o: ['Las preguntas que llegan por WhatsApp', 'La cantidad de seguidores', 'El color del botón'], a: 0, why: 'Si mucha gente pregunta lo mismo, la página no lo responde.' },
            { t: 'tf', q: 'Si las reservas suben el mismo mes del cambio, el cambio seguro fue la causa.', a: false, why: 'Puede haber otras causas, como la temporada.' },
            { t: 'order', q: 'Ordená el proceso para mejorar la conversión.', items: ['Observar el comportamiento', 'Armar hipótesis', 'Priorizar', 'Cambiar y medir'], why: 'Primero entender, después decidir qué tocar.' },
          ],
        },
        {
          id: 'm6s1l3', title: 'Una página que responde', icon: '📄',
          read: [
            { h: 'Muchas visitas, pocas consultas', body: `
<p>La página de Roble recibe muchas visitas, pero pocas personas piden presupuesto. Las consultas que sí llegan repiten lo mismo:</p>
<ul>
<li>“¿Quién lo instala?”</li>
<li>“¿Qué garantía tiene?”</li>
<li>“¿Cuánto tarda?”</li>
</ul>
<p>La página muestra fotos lindas, pero no responde nada de eso.</p>` },
            { h: 'Qué cambiar primero', body: `
<p>Lo más probable es que la duda sobre instalación, garantía y plazo frene a muchos que nunca escribieron. El primer cambio sería responder esas tres preguntas arriba, con el botón para pedir presupuesto al lado.</p>
<div class="callout">Quedate con esto: la página tiene que responder las dudas que hoy responde el vendedor.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué cambio priorizás en la página de Roble?', o: ['Más fotos', 'Responder instalación, garantía y plazo arriba de todo', 'Cambiar la tipografía'], a: 1, why: 'Son las dudas que más se repiten.' },
            { t: 'tf', q: 'Las preguntas repetidas por WhatsApp son una pista de qué falta en la página.', a: true, why: 'Muestran las dudas que frenan a otros que no escribieron.' },
            { t: 'open', q: '¿Qué cambiarías primero en la página de Roble y cómo sabrías si funcionó?', model: `<p>Agregaría arriba de todo una respuesta clara a instalación, garantía y plazo, junto al botón de pedir presupuesto. No cambiaría nada más al mismo tiempo.</p><p>Mediría durante algunas semanas qué parte de las visitas pide presupuesto y lo compararía con un período similar anterior. También miraría si bajan las preguntas repetidas sobre esos temas.</p>`, points: ['Prioriza las dudas más repetidas', 'Cambia una cosa por vez', 'Define una métrica (visitas que piden presupuesto)', 'Compara contra un período similar'] },
          ],
        },
      ],
    },
    {
      code: '6.2', title: 'Proceso comercial',
      lessons: [
        {
          id: 'm6s2l1', title: 'Un lead no es una venta', icon: '🎟️',
          read: [
            { h: 'El proceso comercial', body: `
<p>Un <b>lead</b> es alguien que mostró interés: escribió, dejó su teléfono. Todavía no compró nada.</p>
<p>El <b>proceso comercial</b> convierte ese interés en oportunidades reales y después en ventas. Para eso hace falta definir:</p>
<ul>
<li>Las <b>etapas</b> (consulta, presupuesto, negociación, venta).</li>
<li>Quién es <b>responsable</b> de cada una.</li>
<li>Los <b>tiempos</b> de respuesta.</li>
<li>Los <b>motivos de pérdida</b>.</li>
</ul>` },
            { h: '“Sin respuesta” no es un diagnóstico', body: `
<p>Si en la planilla de Roble la mitad de las ventas perdidas dice “no respondió”, no sabemos nada. ¿No respondió porque tardamos dos días? ¿Porque el precio lo asustó? ¿Porque ya compró en otro lado?</p>
<div class="callout">Quedate con esto: si los vendedores tardan dos días en contestar, comprar más leads empeora el problema.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Un lead es un cliente.', a: false, why: 'Es alguien interesado; todavía falta convertirlo en venta.' },
            { t: 'choice', q: '¿Por qué “no respondió” es un mal motivo de pérdida?', o: ['Porque es largo', 'Porque no explica qué pasó ni qué cambiar', 'Porque es grosero'], a: 1, why: 'Un buen motivo dice qué falló.' },
            { t: 'order', q: 'Ordená las etapas del proceso de Roble.', items: ['Consulta', 'Presupuesto', 'Negociación', 'Venta'], why: 'Cada etapa acerca a la persona a decidir.' },
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
    },
    {
      code: '6.3', title: 'CRM y automatización',
      lessons: [
        {
          id: 'm6s3l1', title: 'Memoria compartida', icon: '📇',
          read: [
            { h: 'Qué es un CRM', body: `
<p>Un <b>CRM</b> es la memoria del área comercial: dónde queda anotado quién consultó, qué necesita, quién lo atiende y en qué quedó.</p>
<p>Puede ser un sistema específico o, al principio, una planilla bien ordenada. Lo importante no es la herramienta sino que todos la usen igual.</p>` },
            { h: 'Sin CRM', body: `
<p>Roble trabajaba con el WhatsApp de cada vendedor. Cuando uno se fue de vacaciones, nadie sabía qué presupuestos tenía abiertos. Varios clientes se enfriaron.</p>
<p>Con un CRM, cualquiera puede retomar una conversación, y la directora puede ver cuántas consultas hay en cada etapa.</p>
<div class="callout">Quedate con esto: si la información vive en la cabeza o el teléfono de una persona, la empresa la puede perder.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué es lo más importante de un CRM?', o: ['Que sea caro', 'Que todos lo usen igual y esté al día', 'Que tenga muchas funciones'], a: 1, why: 'Una herramienta que nadie carga no sirve.' },
            { t: 'tf', q: 'Una planilla ordenada puede funcionar como primer CRM.', a: true, why: 'Lo esencial es registrar cada contacto y su estado.' },
            { t: 'choice', q: '¿Qué problema evitó Roble al tener CRM?', o: ['Perder presupuestos cuando un vendedor no está', 'Pagar impuestos', 'Diseñar anuncios'], a: 0, why: 'La información queda en la empresa, no en un teléfono.' },
          ],
        },
        {
          id: 'm6s3l2', title: 'Pocos campos, bien cargados', icon: '✍️',
          read: [
            { h: 'Menos es más', body: `
<p>Un CRM con 40 campos obligatorios termina vacío o lleno de datos inventados. Mejor pocos campos que todos completen siempre.</p>
<p>Para Roble podrían alcanzar:</p>
<ul>
<li><b>Origen</b>: de dónde vino (anuncio, recomendación, Google).</li>
<li><b>Qué busca</b>: tipo de mueble y medidas.</li>
<li><b>Estado</b>: consulta, presupuesto, negociación, ganada, perdida.</li>
<li><b>Motivo de pérdida</b>, si se perdió.</li>
</ul>` },
            { h: 'Calidad del dato', body: `
<p>Además de pocos campos, hacen falta reglas: opciones cerradas en vez de texto libre (“Instagram” y no “insta”, “IG”, “instagram”), y alguien que revise cada semana que esté al día.</p>
<div class="callout">Quedate con esto: no acumules datos que nadie va a usar para decidir.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Cuantos más campos obligatorios tenga el CRM, mejor.', a: false, why: 'Demasiados campos hacen que se carguen mal o no se carguen.' },
            { t: 'choice', q: '¿Por qué conviene usar opciones cerradas para el origen?', o: ['Para que se vea más prolijo', 'Para poder contar y comparar sin errores', 'Porque es obligatorio'], a: 1, why: 'Si cada uno escribe distinto, no se puede sumar.' },
            { t: 'open', q: '¿Qué cuatro campos serían imprescindibles en el primer CRM de Flow?', model: `<p>1) Origen del contacto (cómo llegó). 2) Qué busca o qué segmento es (recuperación, ponerse en forma, embarazo). 3) Estado (consultó, clase de prueba, se anotó, se fue). 4) Motivo de pérdida o de baja.</p><p>Con esos cuatro, Flow puede saber qué canales traen alumnas que se quedan y por qué se pierden las demás.</p>`, points: ['Incluye origen', 'Incluye necesidad o segmento', 'Incluye estado en el proceso', 'Incluye motivo de pérdida o baja'] },
          ],
        },
        {
          id: 'm6s3l3', title: 'Automatizar lo que ya funciona', icon: '⚙️',
          read: [
            { h: 'Qué se puede automatizar', body: `
<ul>
<li>Un mensaje de bienvenida apenas llega una consulta.</li>
<li>Un recordatorio al vendedor si un presupuesto lleva tres días sin respuesta.</li>
<li>Un aviso al cliente cuando su mueble sale del taller.</li>
</ul>
<p>Bien hechas, estas automatizaciones ahorran tiempo y evitan olvidos.</p>` },
            { h: 'La trampa', body: `
<p>Automatizar un proceso que está mal hecho <b>lo hace mal más rápido</b>. Si los presupuestos de Roble salen con errores, mandarlos automáticamente solo multiplica los errores.</p>
<p>Primero ordená el proceso a mano, comprobá que funciona y recién ahí automatizá.</p>
<div class="callout">Quedate con esto: la automatización amplifica; asegurate de amplificar algo bueno.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué automatización tiene más sentido para Roble?', o: ['Recordar al vendedor un presupuesto sin respuesta', 'Mandar 10 mensajes diarios a cada cliente', 'Responder todo con un bot sin revisión'], a: 0, why: 'Evita olvidos sin molestar al cliente.' },
            { t: 'tf', q: 'Automatizar un proceso defectuoso lo mejora.', a: false, why: 'Lo repite más rápido y a más gente.' },
            { t: 'order', q: 'Ordená cómo se automatiza bien.', items: ['Ordenar el proceso a mano', 'Comprobar que funciona', 'Automatizar', 'Revisar los resultados'], why: 'Se automatiza lo que ya demostró funcionar.' },
          ],
        },
      ],
    },
    {
      code: '6.4', title: 'Gestión comercial y forecast',
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
        {
          id: 'w5', title: 'Caso: “Si invierto el doble…”', icon: '💼',
          read: [
            { h: '“Si invierto el doble, ¿cuánto vendo?”', body: `
<p>El dueño de Lumen quiere <b>duplicar la inversión</b> en anuncios y pregunta: “¿Vamos a vender el doble?”.</p>
<p>Sabés que buena parte de la gente compra el mismo mes que consulta, pero otra parte compra el mes siguiente.</p>` },
          ],
          ex: [
            { t: 'tf', q: 'Si se duplica la inversión, seguro se duplican las ventas.', a: false, why: 'Las consultas extra suelen salir más caras.' },
            { t: 'choice', q: '¿Cuál es el supuesto más frágil?', o: ['El color de los anuncios', 'Cuánto va a costar cada consulta al invertir más', 'El nombre de la campaña'], a: 1, why: 'Es lo que más cambia al subir la inversión.' },
            { t: 'choice', q: '¿Cuándo vas a ver todas las ventas de esa inversión?', o: ['El mismo mes', 'Recién al mes siguiente, por la gente que tarda', 'Nunca'], a: 1, why: 'Parte de las compras llega después.' },
            { t: 'choice', q: '¿Cómo se lo presentás?', o: ['“Vamos a vender el doble”', '“Vamos a vender bastante más, pero menos del doble; propongo subir en dos pasos y medir”', '“No se puede saber”'], a: 1, why: 'Rango, supuestos claros y una forma de bajar el riesgo.' },
            { t: 'open', q: '¿Qué más chequearías antes de aprobar el doble de inversión?', key: 'w5', model: `<p>Que haya stock para vender más, que el equipo pueda atender más consultas y que lo que cuesta cada cliente siga debajo del tope. Subir en dos pasos permite ver cuánto cuestan de verdad las consultas extra antes de comprometer toda la plata.</p>`, points: ['Revisa stock o capacidad para vender más', 'Revisa si el equipo puede atender más consultas', 'Controla que el costo por cliente quede bajo el tope', 'Propone subir la inversión en etapas'] },
          ],
        },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, listá las tres dudas que más se repiten en las consultas y fijate si su web las responde.',
    'Escribí las etapas de su proceso comercial, con responsable y tiempo máximo de respuesta.',
    'Diseñá su CRM mínimo: cuatro campos con opciones cerradas.',
    'Armá un forecast de tres meses en tres escenarios, con quién confirma cada supuesto.',
  ],
  challenge: {
    key: 'w4', title: '¿Más consultas o mejor seguimiento?',
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
    solution: `
<p>Un mensaje automático de bienvenida, un vendedor de guardia para responder en menos de 15 minutos, tres intentos de contacto y el registro de por qué se pierde cada venta. Medir el tiempo de respuesta y cuánta gente pasa cada paso durante 4 a 6 semanas. Recién cuando el balde pierde menos, invertir más, y pensar si hace falta otro vendedor.</p>`,
  },
  cards: [
    { q: 'Conversión', a: 'Qué parte de los que llegan completa una acción valiosa.' },
    { q: 'Correlación vs. efecto', a: 'Que dos cosas pasen juntas no prueba que una cause la otra.' },
    { q: 'Lead', a: 'Alguien que mostró interés. Todavía no es una venta.' },
    { q: 'CRM', a: 'La memoria compartida del área comercial: quién consultó, qué necesita y en qué quedó.' },
    { q: 'Automatización', a: 'Amplifica lo que ya existe: primero ordená el proceso, después automatizá.' },
    { q: 'Forecast', a: 'Una estimación con supuestos explícitos, presentada como rango.' },
  ],
});
