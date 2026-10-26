/* Brain — Módulo 08 · Datos, analítica e inteligencia artificial (Nivel 2).
   Casos del módulo: Flow ordena sus números; Roble prueba IA para atender consultas. */

UNITS.push({
  n: 8,
  phase: 'f2',
  title: 'Datos, analítica e inteligencia artificial',
  goal: 'Usar datos confiables para decidir, armar reportes que sirvan y aprovechar la IA con control.',
  summary: [
    'Un número solo sirve si todos lo definen igual y saben de dónde sale.',
    'Un tablero existe para decidir: tendencias, desvíos, causas posibles y decisiones pendientes.',
    'La IA ayuda en tareas concretas, con buenas instrucciones, buenos datos y revisión humana.',
  ],
  sections: [
    {
      code: '8.1', title: 'Fundamentos de analítica',
      lessons: [
        {
          id: 'm8s1l1', title: 'Definir antes de contar', icon: '🔤',
          read: [
            { h: '¿Qué es una “consulta”?', body: `
<p>En Roble, un vendedor cuenta como consulta cualquier “hola” por WhatsApp. Otro solo cuenta a quien preguntó por un mueble. A fin de mes, cada uno dice un número distinto y nadie sabe cuál es el real.</p>
<p>Un dato solo sirve si su <b>definición</b> es clara y compartida.</p>` },
            { h: 'El diccionario de métricas', body: `
<p>Un <b>diccionario de métricas</b> es una lista corta que dice, para cada número importante: qué cuenta, qué no cuenta y de dónde sale.</p>
<table><tbody>
<tr><td><b>Conversación</b></td><td>Cualquier mensaje entrante.</td></tr>
<tr><td><b>Lead</b></td><td>Persona única que preguntó por un producto.</td></tr>
<tr><td><b>Oportunidad</b></td><td>Lead que pidió presupuesto con medidas.</td></tr>
</tbody></table>
<div class="callout">Quedate con esto: una conversación iniciada no es necesariamente un lead, y un lead no es una oportunidad.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada término con su definición en Roble.', pairs: [['Conversación', 'Cualquier mensaje entrante'], ['Lead', 'Persona única que preguntó por un producto'], ['Oportunidad', 'Lead que pidió presupuesto con medidas']] },
            { t: 'tf', q: 'Si cada vendedor cuenta las consultas a su manera, los números se pueden comparar igual.', a: false, why: 'Con definiciones distintas, la diferencia puede ser solo de criterio.' },
            { t: 'choice', q: '¿Qué incluye un diccionario de métricas?', o: ['Qué cuenta, qué no cuenta y de dónde sale cada número', 'Los colores del tablero', 'Las contraseñas de las herramientas'], a: 0, why: 'Eso permite que todos hablen del mismo número.' },
          ],
        },
        {
          id: 'm8s1l2', title: 'Por qué no coinciden los números', icon: '🧷',
          read: [
            { h: 'Tres fuentes, tres números', body: `
<p>Flow mira sus nuevas alumnas del mes:</p>
<ul>
<li>Meta dice 30.</li>
<li>El CRM dice 22.</li>
<li>La caja dice 18 cuotas nuevas cobradas.</li>
</ul>
<p>Nadie miente. Cada fuente mide algo distinto o de forma distinta.</p>` },
            { h: 'Las causas habituales', body: `
<ul>
<li><b>Atribución</b>: Meta cuenta gente que vio el anuncio y se anotó en los días siguientes, aunque haya llegado por otro lado.</li>
<li><b>Duplicados</b>: la misma persona escribió dos veces y quedó cargada dos veces.</li>
<li><b>Momento</b>: se anotó el 30 pero pagó el 2 del mes siguiente.</li>
</ul>
<p>La salida es elegir una <b>fuente de verdad</b> para cada métrica (por ejemplo, la caja para alumnas nuevas) y usar las otras como pistas.</p>
<div class="callout">Quedate con esto: antes de sacar conclusiones, preguntá de dónde sale cada número.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Por qué Meta puede contar más alumnas que la caja?', o: ['Porque cuenta gente que vio un anuncio aunque haya llegado por otro lado', 'Porque la caja está rota', 'Porque Meta inventa datos'], a: 0, why: 'La atribución de la plataforma es generosa con su propio crédito.' },
            { t: 'tf', q: 'Conviene definir una fuente de verdad para cada métrica.', a: true, why: 'Así hay un número oficial y los demás se usan como contexto.' },
            { t: 'match', q: 'Uní cada causa con su ejemplo.', pairs: [['Duplicados', 'La misma persona cargada dos veces'], ['Momento', 'Se anotó el 30 y pagó el 2'], ['Atribución', 'La plataforma se adjudica la venta']] },
          ],
        },
        {
          id: 'm8s1l3', title: 'Adelantados y resultados', icon: '🌡️',
          read: [
            { h: 'Dos tipos de indicadores', body: `
<ul>
<li><b>Resultados</b>: lo que finalmente importa, pero se ve tarde. Ventas, ganancia, alumnas que siguen a los seis meses.</li>
<li><b>Adelantados</b>: señales tempranas que anticipan los resultados. Consultas calificadas, clases de prueba reservadas, tiempo de respuesta.</li>
</ul>` },
            { h: 'Para qué sirve separarlos', body: `
<p>Si Flow solo mira cuotas cobradas, se entera de un problema cuando ya pasó. Si además mira las clases de prueba de esta semana, puede reaccionar antes.</p>
<p>Pero cuidado: un indicador adelantado sirve solo si de verdad se relaciona con el resultado. Muchos “me gusta” no anticipan inscripciones.</p>
<div class="callout">Quedate con esto: mirá señales tempranas para actuar a tiempo, y resultados para saber si funcionó.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Clasificá cada indicador de Flow.', pairs: [['Clases de prueba reservadas', 'Adelantado'], ['Cuotas cobradas', 'Resultado'], ['Tiempo de respuesta', 'Adelantado'], ['Alumnas que siguen a los seis meses', 'Resultado']] },
            { t: 'tf', q: 'Cualquier número que suba antes que las ventas es un buen indicador adelantado.', a: false, why: 'Tiene que estar relacionado de verdad con el resultado.' },
            { t: 'open', q: '¿Cómo definirías “venta atribuida a marketing” en Roble para que todos la cuenten igual?', model: `<p>Una venta cobrada (fuente: caja o sistema de ventas) cuyo cliente tuvo su primer contacto registrado en el CRM a través de una acción de marketing: un anuncio, la web, redes o una campaña, identificada con UTM o con la respuesta a “¿cómo nos conociste?”.</p><p>No cuentan ventas a clientes que ya compraban ni recomendaciones directas, salvo que se defina otra categoría para ellas. La definición queda escrita en el diccionario de métricas.</p>`, points: ['Usa ventas cobradas como base', 'Define cómo se identifica el origen', 'Aclara qué no cuenta', 'La deja escrita y compartida'] },
          ],
        },
      ],
    },
    {
      code: '8.2', title: 'Dashboards y reporting',
      lessons: [
        {
          id: 'm8s2l1', title: 'Un tablero para decidir', icon: '🖥️',
          read: [
            { h: 'Mostrar todo es no mostrar nada', body: `
<p>Flow tenía un tablero con 40 números. Nadie lo miraba: no se entendía qué estaba bien, qué estaba mal ni qué hacer.</p>
<p>Un tablero sirve si ayuda a <b>decidir</b>. Para eso conviene separar dos vistas:</p>
<ul>
<li><b>Operativa</b> (para el equipo, semanal): consultas, clases de prueba, tiempo de respuesta, campañas.</li>
<li><b>Ejecutiva</b> (para dirección, mensual): alumnas activas, ingresos, costo por alumna, bajas.</li>
</ul>` },
            { h: 'Cada número con contexto', body: `
<p>Cada número va con su objetivo, la variación contra el período anterior y, si hace falta, separado por segmento (por ejemplo, por tipo de clase).</p>
<div class="callout">Quedate con esto: si un número no cambiaría ninguna decisión, sacalo del tablero.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada número con la vista que le corresponde.', pairs: [['Tiempo de respuesta de esta semana', 'Operativa'], ['Ingresos del mes contra el objetivo', 'Ejecutiva'], ['Resultados de cada anuncio', 'Operativa']] },
            { t: 'tf', q: 'Un buen tablero muestra todos los números disponibles.', a: false, why: 'Demasiados números esconden los importantes.' },
            { t: 'choice', q: '¿Qué acompaña a cada número?', o: ['Un emoji', 'Su objetivo y la variación contra el período anterior', 'El logo de la herramienta'], a: 1, why: 'Sin comparación no sabés si está bien o mal.' },
          ],
        },
        {
          id: 'm8s2l2', title: 'Tendencias, desvíos y causas', icon: '🛰️',
          read: [
            { h: 'Más que una foto', body: `
<p>Dirección no necesita saber solo cómo está hoy. Necesita:</p>
<ul>
<li><b>Tendencia</b>: ¿viene subiendo o bajando?</li>
<li><b>Desvío</b>: ¿cuánto nos separamos del objetivo?</li>
<li><b>Causas posibles</b>: ¿qué puede explicarlo?</li>
<li><b>Decisiones pendientes</b>: ¿qué hay que resolver?</li>
</ul>` },
            { h: 'Un reporte que dice algo', body: `
<p>❌ “El costo por consulta bajó 15%.”</p>
<p>✅ “El costo por consulta bajó 15%, pero las clases de prueba no subieron: las consultas nuevas vienen de un anuncio que atrae gente de lejos. Proponemos ajustar la zona del anuncio esta semana.”</p>
<p>El primero informa; el segundo ayuda a decidir. Y reconoce el <b>límite</b>: es una causa posible, a confirmar.</p>
<div class="callout">Quedate con esto: un reporte que solo dice “bajó el CPL” no explica si la empresa ganó más.</div>` },
          ],
          ex: [
            { t: 'order', q: 'Ordená lo que debería tener un buen reporte.', items: ['Qué pasó (dato)', 'Tendencia y desvío', 'Causa posible', 'Decisión propuesta'], why: 'Del hecho a la acción.' },
            { t: 'tf', q: '“El CPL bajó 15%” alcanza para saber si a la empresa le fue mejor.', a: false, why: 'Falta saber qué pasó con las ventas y la ganancia.' },
            { t: 'choice', q: '¿Por qué conviene aclarar que una causa es “posible”?', o: ['Para parecer humilde', 'Porque todavía no está confirmada', 'Porque lo exige la plataforma'], a: 1, why: 'Distinguir hecho de interpretación evita decisiones apuradas.' },
          ],
        },
        {
          id: 'm8s2l3', title: 'Lo que pondrías frente al dueño', icon: '🗣️',
          read: [
            { h: 'Pocos números, bien elegidos', body: `
<p>El dueño de Flow tiene cinco minutos. ¿Qué le mostrás primero? Los números que conectan marketing con la plata del negocio:</p>
<ul>
<li>Alumnas activas e ingresos del mes contra el objetivo.</li>
<li>Costo por alumna nueva.</li>
<li>Bajas del mes (cuántas dejaron).</li>
</ul>` },
            { h: 'Y cerrá con decisiones', body: `
<p>Después de los números, lo que el dueño necesita es saber qué tiene que decidir: “¿Aprobamos subir la inversión en el segmento de recuperación de lesiones?”.</p>
<div class="callout">Quedate con esto: un reporte al dueño termina con decisiones, no con más métricas.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué número conecta mejor marketing con el negocio de Flow?', o: ['Seguidores', 'Costo por alumna nueva', 'Alcance de las historias'], a: 1, why: 'Muestra cuánto cuesta crecer.' },
            { t: 'tf', q: 'El reporte al dueño debería terminar con decisiones claras.', a: true, why: 'Es lo que hace útil el reporte.' },
            { t: 'open', q: '¿Qué tres indicadores pondrías primero ante el dueño de Lumen y por qué?', model: `<p>1) Ventas y margen del mes contra el objetivo: dicen si el negocio va bien. 2) Costo por cliente nuevo: dice cuánto cuesta crecer. 3) Porcentaje de clientes que vuelven a comprar: dice si el crecimiento se sostiene.</p><p>Cada uno con su variación y una línea de qué significa y qué decisión propongo.</p>`, points: ['Incluye un indicador de resultado económico', 'Incluye costo de conseguir clientes', 'Incluye retención o recompra', 'Justifica cada elección'] },
          ],
        },
      ],
    },
    {
      code: '8.3', title: 'Automatización e integraciones',
      lessons: [
        {
          id: 'm8s3l1', title: 'Conectar sistemas', icon: '🔌',
          read: [
            { h: 'Datos que viajan solos', body: `
<p>En Roble, el formulario de la web mandaba un email, alguien lo copiaba al CRM y, cuando había venta, otra persona la anotaba en la planilla de caja. Tres copias a mano, tres oportunidades de error.</p>
<p><b>Integrar</b> es conectar esos sistemas para que el dato viaje solo: formulario → CRM → ventas.</p>` },
            { h: 'Lo que se gana', body: `
<ul>
<li>Menos trabajo manual y menos errores.</li>
<li>Seguir el recorrido completo: de qué campaña vino cada cliente y si compró.</li>
<li>Medir la <b>conversión real</b> por campaña, no la que dice la plataforma.</li>
</ul>
<div class="callout">Quedate con esto: integrar sirve si los sistemas usan los mismos identificadores y definiciones.</div>` },
          ],
          ex: [
            { t: 'order', q: 'Ordená el recorrido del dato en Roble.', items: ['Formulario de la web', 'CRM', 'Venta registrada'], why: 'Así se sigue cada cliente desde que llegó hasta que compró.' },
            { t: 'tf', q: 'Conectar formulario, CRM y ventas permite medir la conversión real por campaña.', a: true, why: 'Cada venta queda unida a su origen.' },
            { t: 'choice', q: '¿Qué problema resuelve integrar?', o: ['Copiar datos a mano con errores', 'Diseñar anuncios', 'Fijar precios'], a: 0, why: 'El dato viaja solo y de forma consistente.' },
          ],
        },
        {
          id: 'm8s3l2', title: 'Origen, transformación, destino', icon: '🛤️',
          read: [
            { h: 'Cómo se diseña un flujo', body: `
<p>Toda automatización tiene tres partes:</p>
<ol>
<li><b>Origen</b>: de dónde sale el dato (el formulario).</li>
<li><b>Transformación</b>: qué se hace con él (limpiar el teléfono, asignar vendedor, etiquetar el origen).</li>
<li><b>Destino</b>: dónde termina (el CRM).</li>
</ol>` },
            { h: 'Y lo que nadie piensa', body: `
<ul>
<li><b>Manejo de errores</b>: ¿qué pasa si el formulario llega sin teléfono?</li>
<li><b>Supervisión</b>: ¿quién se entera si el flujo deja de funcionar?</li>
<li><b>Permisos</b>: ¿quién puede ver y cambiar esos datos?</li>
</ul>
<div class="callout">Quedate con esto: una automatización sin supervisión puede fallar en silencio durante semanas.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada parte del flujo con su ejemplo.', pairs: [['Origen', 'El formulario de la web'], ['Transformación', 'Limpiar el teléfono y asignar vendedor'], ['Destino', 'El CRM']] },
            { t: 'tf', q: 'Una vez armada, una automatización no necesita supervisión.', a: false, why: 'Puede romperse sin que nadie lo note.' },
            { t: 'choice', q: 'El formulario llega sin teléfono. ¿Qué parte del diseño lo resuelve?', o: ['El manejo de errores', 'El color del formulario', 'El destino'], a: 0, why: 'Define qué hacer cuando el dato llega incompleto.' },
          ],
        },
        {
          id: 'm8s3l3', title: 'Identificadores y duplicados', icon: '🪪',
          read: [
            { h: 'Quién es quién', body: `
<p>Para saber que la persona que dejó el formulario es la misma que compró, los sistemas necesitan un <b>identificador</b> común: el teléfono, el email o un número de cliente.</p>
<p>Si el formulario guarda “+54 9 341…” y el sistema de ventas “341…”, para la computadora son dos personas distintas.</p>` },
            { h: 'El costo de los duplicados', body: `
<ul>
<li>Se cuentan más clientes de los que hay.</li>
<li>Dos vendedores llaman a la misma persona.</li>
<li>La conversión parece peor de lo que es.</li>
</ul>
<p>Se previenen con un formato único para el identificador y una regla: antes de crear un contacto, buscar si ya existe.</p>
<div class="callout">Quedate con esto: un identificador consistente es la base para seguir al cliente de punta a punta.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué puede funcionar como identificador común?', o: ['El teléfono con un formato único', 'El nombre de pila', 'La hora del mensaje'], a: 0, why: 'Es único por persona si se guarda siempre igual.' },
            { t: 'tf', q: 'Los duplicados pueden hacer que la conversión parezca peor de lo que es.', a: true, why: 'Se cuentan más contactos para las mismas ventas.' },
            { t: 'open', q: 'Roble conecta su formulario con el CRM. ¿Qué falla podría duplicar clientes y cómo la evitarías?', model: `<p>Si una persona completa el formulario dos veces, o escribe por WhatsApp y además completa el formulario, se pueden crear dos contactos. También pasa si el teléfono se guarda con formatos distintos.</p><p>Lo evitaría normalizando el teléfono (mismo formato siempre) y haciendo que el flujo busque si el contacto ya existe antes de crear uno nuevo; si existe, actualiza el registro.</p>`, points: ['Identifica una causa concreta de duplicado', 'Menciona formatos distintos del identificador', 'Propone normalizar el dato', 'Propone buscar antes de crear'] },
          ],
        },
      ],
    },
    {
      code: '8.4', title: 'IA aplicada al marketing',
      lessons: [
        {
          id: 'm8s4l1', title: 'Para qué sirve la IA', icon: '🦾',
          read: [
            { h: 'Cuatro tipos de ayuda', body: `
<ul>
<li><b>Investigación</b>: resumir entrevistas, ordenar reseñas por tema.</li>
<li><b>Producción</b>: primeros borradores de textos, variantes de anuncios, guiones.</li>
<li><b>Análisis</b>: encontrar patrones en datos, explicar una planilla.</li>
<li><b>Operaciones</b>: clasificar consultas, completar fichas, responder preguntas frecuentes.</li>
</ul>` },
            { h: 'De qué depende el resultado', body: `
<p>La IA rinde según lo que le das:</p>
<ul>
<li><b>Instrucciones</b> claras: qué tarea, para quién, con qué formato.</li>
<li><b>Contexto</b>: datos de la marca, el público, ejemplos buenos.</li>
<li><b>Datos</b> de calidad.</li>
<li><b>Evaluación humana</b>: alguien que revise antes de usar.</li>
</ul>
<div class="callout">Quedate con esto: la IA acelera el trabajo; el criterio sigue siendo tuyo.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada uso con su tipo.', pairs: [['Resumir entrevistas', 'Investigación'], ['Borradores de anuncios', 'Producción'], ['Clasificar consultas', 'Operaciones'], ['Encontrar patrones en ventas', 'Análisis']] },
            { t: 'tf', q: 'Con buenas instrucciones, la IA no necesita revisión humana.', a: false, why: 'Puede equivocarse con seguridad; siempre hace falta revisar.' },
            { t: 'choice', q: '¿Qué mejora más el resultado de la IA?', o: ['Pedirle “hacé algo lindo”', 'Darle instrucciones claras, contexto y ejemplos', 'Usarla más rápido'], a: 1, why: 'La calidad de lo que recibe define la calidad de lo que devuelve.' },
          ],
        },
        {
          id: 'm8s4l2', title: 'Elegir el primer caso de uso', icon: '🗳️',
          read: [
            { h: 'Tres preguntas', body: `
<p>Para decidir por dónde empezar con IA, cada tarea candidata se mira con tres preguntas:</p>
<ul>
<li><b>Ahorro</b>: ¿cuánto tiempo libera?</li>
<li><b>Impacto</b>: ¿mejora algo que le importa al negocio?</li>
<li><b>Riesgo</b>: ¿qué pasa si se equivoca?</li>
</ul>
<p>Conviene empezar por tareas con buen ahorro e impacto y bajo riesgo.</p>` },
            { h: 'El caso de Roble', body: `
<p>Roble recibe muchas consultas por WhatsApp. Un asistente con IA podría clasificarlas (tipo de mueble, medidas, urgencia) y pasarlas al vendedor correcto.</p>
<p>Pero tiene que saber decir “no sé”: si alguien pide un mueble que Roble no hace, o algo ambiguo, el asistente deriva a una persona en vez de inventar.</p>
<div class="callout">Quedate con esto: empezá donde equivocarse cuesta poco y aprender vale mucho.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué tarea conviene para empezar con IA?', o: ['Fijar precios sin revisión', 'Clasificar consultas con derivación a una persona cuando duda', 'Responder reclamos legales solo'], a: 1, why: 'Ahorra tiempo y el riesgo está controlado.' },
            { t: 'tf', q: 'Un asistente debería derivar a una persona cuando no reconoce lo que le piden.', a: true, why: 'Evita respuestas inventadas que dañan la confianza.' },
            { t: 'match', q: 'Uní cada pregunta con lo que evalúa.', pairs: [['Ahorro', '¿Cuánto tiempo libera?'], ['Impacto', '¿Mejora algo importante?'], ['Riesgo', '¿Qué pasa si se equivoca?']] },
          ],
        },
        {
          id: 'm8s4l3', title: 'Control, privacidad y sesgos', icon: '🛂',
          read: [
            { h: 'Lo que hay que cuidar', body: `
<ul>
<li><b>Hechos</b>: la IA puede inventar datos con total seguridad. Verificá cifras, nombres y promesas.</li>
<li><b>Privacidad</b>: no cargues datos personales de clientes en herramientas sin saber qué hacen con ellos.</li>
<li><b>Sesgos</b>: puede repetir estereotipos en textos o imágenes.</li>
<li><b>Decisiones críticas</b>: precios, reclamos, temas legales. No se delegan sin control.</li>
</ul>` },
            { h: 'Evaluar la calidad', body: `
<p>Antes de usar la IA en serio, probala con casos reales y medí: ¿cuántas veces clasificó bien? ¿Cuántas derivó cuando debía? Revisá una muestra cada semana.</p>
<div class="callout">Quedate con esto: si no medís la calidad, no sabés si la IA ayuda o empeora.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Si la IA lo dice con seguridad, el dato es correcto.', a: false, why: 'Puede inventar con total seguridad; hay que verificar.' },
            { t: 'choice', q: '¿Qué NO conviene delegar sin control?', o: ['Un primer borrador de posteo', 'La respuesta a un reclamo legal', 'Ordenar reseñas por tema'], a: 1, why: 'Es una decisión crítica con consecuencias.' },
            { t: 'open', q: '¿Qué tarea de marketing de Flow automatizarías primero con IA y cómo evaluarías la calidad?', model: `<p>Empezaría por responder preguntas frecuentes por WhatsApp (horarios, precios, qué llevar a la clase de prueba), con derivación a una persona ante cualquier duda o pedido especial.</p><p>Antes de activarla, la probaría con cien consultas reales anteriores y mediría cuántas respondió bien y cuántas derivó cuando correspondía. Después, revisaría una muestra semanal y cuidaría no cargar datos de salud de las alumnas.</p>`, points: ['Elige una tarea de bajo riesgo', 'Prevé derivar a una persona', 'Prueba con casos reales antes de usarla', 'Define cómo medir y revisar la calidad'] },
          ],
        },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, escribí un diccionario de cinco métricas: qué cuenta, qué no y de dónde sale.',
    'Compará un mismo número en dos fuentes y explicá por qué no coinciden.',
    'Diseñá un tablero ejecutivo de cinco números con objetivo y variación.',
    'Elegí una tarea para probar con IA y definí cómo vas a medir si salió bien.',
    'Proyecto integrador del Nivel 2: auditá campañas, web, CRM y funnel de tu empresa elegida; proponé tres experimentos, un tablero de medición y un plan de 90 días.',
  ],
  challenge: {
    key: 'm8', title: 'Tres números, ninguna respuesta',
    intro: `
<p>El dueño de Flow pregunta: <em>“¿Funcionó la campaña de marzo?”</em>. Lo que tenés:</p>
<ul>
<li>Meta dice que trajo 40 alumnas.</li>
<li>El CRM tiene 30 contactos nuevos, algunos repetidos.</li>
<li>La caja muestra 20 cuotas nuevas.</li>
<li>Nadie definió qué es una “alumna nueva”.</li>
</ul>`,
    steps: [
      { t: 'choice', q: '¿Qué número usarías como fuente de verdad para alumnas nuevas?', o: ['Los 40 de Meta', 'Las 20 cuotas cobradas de la caja', 'Los 30 del CRM'], a: 1, why: 'Es lo que realmente pasó en el negocio; las otras fuentes dan contexto.' },
      { t: 'tf', q: 'Los duplicados del CRM pueden explicar parte de la diferencia.', a: true, why: 'Una misma persona cargada dos veces infla el número.' },
      { t: 'choice', q: '¿Qué falta para responder si funcionó?', o: ['Una definición de “alumna nueva” y el costo por alumna real', 'Más seguidores', 'Un tablero con más colores'], a: 0, why: 'Sin definición ni costo, no se puede juzgar la campaña.' },
      { t: 'open', q: 'Proponé dos alternativas para responderle al dueño y cuál recomendarías.', model: `<p><b>A:</b> responder con el número de Meta (40). Rápido, pero sobreestima el resultado y puede llevar a invertir de más.</p><p><b>B:</b> definir “alumna nueva” (primera cuota cobrada), limpiar duplicados, cruzar con el origen en el CRM y calcular el costo por alumna real. Responder: “Trajo cerca de X alumnas a un costo de Y; propongo ordenar los datos así para las próximas campañas”.</p><p>Recomiendo B: da una respuesta honesta y deja un sistema para las siguientes.</p>`, points: ['Elige una fuente de verdad', 'Propone definir y limpiar los datos', 'Calcula costo por alumna real', 'Comunica con honestidad la incertidumbre'] },
    ],
    reflect: 'Escribí el mensaje de cinco líneas que le mandarías al dueño de Flow.',
    solution: `
<p><strong>Diagnóstico:</strong> cada fuente mide distinto y no hay definiciones compartidas.</p>
<p><strong>Datos que faltan:</strong> definición de alumna nueva, origen confiable de cada inscripción, costo total de la campaña.</p>
<p><strong>Recomendación:</strong> usar la caja como fuente de verdad, cruzar con el CRM limpio y dejar escrito un diccionario de métricas para las próximas campañas.</p>`,
  },
  cards: [
    { q: 'Diccionario de métricas', a: 'Para cada número: qué cuenta, qué no cuenta y de dónde sale.' },
    { q: 'Fuente de verdad', a: 'La fuente oficial de una métrica; las demás se usan como contexto.' },
    { q: 'Indicador adelantado vs. resultado', a: 'El adelantado anticipa; el resultado confirma.' },
    { q: 'Vista operativa vs. ejecutiva', a: 'Operativa: para el equipo, semanal. Ejecutiva: para dirección, con pocas métricas y decisiones.' },
    { q: 'IA con control', a: 'Instrucciones claras, buen contexto, verificación de hechos, privacidad y revisión humana.' },
  ],
});
