/* Brain — Módulo 10 · Estrategia de negocio y crecimiento (Nivel 3).
   Caso que atraviesa el módulo: Roble piensa cómo crecer sin perder lo que lo hace fuerte. */

UNITS.push({
  n: 10,
  phase: 'f3',
  title: 'Estrategia de negocio y crecimiento',
  goal: 'Entender cómo gana cada modelo de negocio, dónde está su ventaja y cómo crecer sin romper la operación.',
  summary: [
    'Cada modelo de negocio gana plata distinto y tiene sus propios límites para crecer.',
    'Una ventaja competitiva es valor difícil de reemplazar a un costo sostenible; el precio solo no alcanza.',
    'Expandirse se hace con pilotos y criterios de corte, y nunca más rápido de lo que la operación aguanta.',
  ],
  sections: [
    {
      code: '10.1', title: 'Modelos de negocio',
      lessons: [
        {
          id: 'm10s1l1', title: 'Cómo gana cada negocio', icon: '🏭',
          read: [
            { h: 'Cuatro negocios, cuatro lógicas', body: `
<ul>
<li><b>Roble</b> fabrica a pedido: cobra una seña, produce y entrega. Ventas grandes y poco frecuentes.</li>
<li><b>Lumen</b> revende online: compra stock, lo guarda y lo vende. Su plata está en el depósito hasta que vende.</li>
<li><b>Flow</b> cobra una suscripción: ingresos chicos que se repiten cada mes mientras la alumna se queda.</li>
<li><b>Brote</b> vende servicio en el local: muchas ventas chicas, todos los días, limitadas por las mesas y las horas.</li>
</ul>` },
            { h: 'Por qué importa para marketing', body: `
<p>Cada <b>modelo de negocio</b> tiene ciclos de venta, costos y retención distintos. Lo que funciona en uno puede ser un error en otro: hacer descuentos agresivos para traer alumnas a Flow puede atraer gente que se va al mes; en Lumen puede servir para liquidar stock parado.</p>
<div class="callout">Quedate con esto: antes de proponer acciones, entendé cómo gana plata ese negocio.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada negocio con su lógica.', pairs: [['Roble', 'Fabrica a pedido'], ['Lumen', 'Compra stock y lo revende'], ['Flow', 'Cobra una suscripción mensual'], ['Brote', 'Muchas ventas chicas en el local']] },
            { t: 'tf', q: 'Una misma acción de marketing sirve igual para cualquier modelo de negocio.', a: false, why: 'Cada modelo tiene ciclos, costos y retención distintos.' },
            { t: 'choice', q: '¿Dónde está la plata de Lumen antes de vender?', o: ['En el banco', 'En el stock del depósito', 'En los anuncios'], a: 1, why: 'Compra primero y recupera cuando vende.' },
          ],
        },
        {
          id: 'm10s1l2', title: 'Recursos críticos y límites', icon: '🔩',
          read: [
            { h: 'Qué no puede faltar', body: `
<p>Cada negocio depende de unos pocos <b>recursos críticos</b>, y ahí suelen estar sus límites para crecer:</p>
<ul>
<li>Roble: el taller, los carpinteros y los plazos de fabricación.</li>
<li>Lumen: el stock, la logística y la plata para comprar mercadería.</li>
<li>Flow: las salas, los horarios y los profesores formados.</li>
<li>Brote: las mesas y las horas pico.</li>
</ul>` },
            { h: 'Demanda que no se puede cumplir', body: `
<p>Un negocio industrial como Roble puede tener mucha demanda y plazos de producción largos. Más publicidad no acorta los plazos: los alarga.</p>
<div class="callout">Quedate con esto: conocé el recurso que limita el crecimiento antes de empujar la demanda.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada negocio con su recurso crítico.', pairs: [['Roble', 'Taller y carpinteros'], ['Flow', 'Salas y profesores'], ['Brote', 'Mesas en horas pico']] },
            { t: 'tf', q: 'Más publicidad acorta los plazos de un taller saturado.', a: false, why: 'Suma pedidos a una fila que ya es larga.' },
            { t: 'choice', q: 'Flow tiene las clases de la tarde llenas. ¿Qué hace marketing?', o: ['Más anuncios para la tarde', 'Empujar horarios con lugar, como la mañana', 'Subir el precio de la mañana'], a: 1, why: 'Dirige la demanda hacia donde hay capacidad.' },
          ],
        },
        {
          id: 'm10s1l3', title: 'Suscripción o venta única', icon: '♻️',
          read: [
            { h: 'Qué mirar en cada caso', body: `
<ul>
<li>En una <b>venta única</b> (una mesa de Roble), importa sobre todo que esa venta deje más de lo que costó conseguirla.</li>
<li>En una <b>suscripción</b> (Flow), importa cuántos meses se queda cada persona. Una alumna que se va al segundo mes puede no pagar lo que costó traerla.</li>
</ul>` },
            { h: 'El indicador que cambia', body: `
<p>En la suscripción, el número clave pasa a ser la <b>retención</b> (qué parte sigue cada mes) o su contracara, las <b>bajas</b>. Bajar las bajas puede valer más que traer alumnas nuevas.</p>
<div class="callout">Quedate con esto: en una suscripción, el cliente se gana cada mes.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué número es clave en una suscripción?', o: ['El ticket de la primera compra', 'Cuántos meses se queda cada persona', 'Los seguidores'], a: 1, why: 'El valor se arma mes a mes.' },
            { t: 'tf', q: 'En Flow, reducir las bajas puede valer más que traer alumnas nuevas.', a: true, why: 'Cada alumna que se queda sigue dejando plata sin costo de adquisición.' },
            { t: 'open', q: '¿Qué indicador cambia más entre una suscripción como Flow y una venta única como Roble? Explicá por qué.', model: `<p>Cambia sobre todo el peso de la retención. En Roble, lo que deja la primera venta casi define el negocio, así que miro margen por venta y costo por cliente.</p><p>En Flow, el valor depende de cuántos meses se queda la alumna: miro retención o bajas mensuales y cuánto deja cada alumna en el tiempo. Una campaña que trae alumnas que se van rápido puede ser mala aunque traiga muchas.</p>`, points: ['Identifica la retención o las bajas', 'Explica por qué en suscripción el valor se arma en el tiempo', 'Contrasta con margen por venta en venta única', 'Liga el indicador con decisiones de adquisición'] },
          ],
        },
      ],
    },
    {
      code: '10.2', title: 'Estrategia competitiva',
      lessons: [
        {
          id: 'm10s2l1', title: 'Ventaja competitiva', icon: '🏰',
          read: [
            { h: 'Lo que te hace difícil de reemplazar', body: `
<p>Una <b>ventaja competitiva</b> es ofrecer algo que el cliente valora y que a otros les cuesta igualar, a un costo que podés sostener.</p>
<p>Roble no es el más barato, pero mide en tu casa, fabrica a medida, instala y da garantía. Para un cliente que se muda a un departamento chico, eso es difícil de reemplazar.</p>` },
            { h: 'El problema de competir solo por precio', body: `
<p>Si tu única ventaja es ser más barato, cualquiera con más espalda o costos más bajos te la saca. Y mientras tanto ganás poco por venta.</p>
<p>El precio bajo solo es una ventaja sostenible si tenés una razón estructural: costos realmente más bajos que los demás.</p>
<div class="callout">Quedate con esto: competir solo por precio es vulnerable si no tenés una ventaja de costos.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Ser el más barato es siempre una ventaja duradera.', a: false, why: 'Solo si tenés costos estructuralmente más bajos; si no, te lo igualan.' },
            { t: 'choice', q: '¿Cuál es una ventaja competitiva de Roble?', o: ['Precio más bajo que los importados', 'Medir, fabricar a medida, instalar y garantizar', 'Publicar más seguido'], a: 1, why: 'Es valioso para su cliente y difícil de copiar rápido.' },
            { t: 'choice', q: '¿Qué tiene que tener una ventaja competitiva?', o: ['Valor para el cliente, difícil de igualar y costo sostenible', 'Un buen logo', 'Muchos seguidores'], a: 0, why: 'Si falta alguna de las tres, no se sostiene.' },
          ],
        },
        {
          id: 'm10s2l2', title: 'Las fuerzas alrededor', icon: '🌪️',
          read: [
            { h: 'Cinco presiones sobre el negocio', body: `
<p>Hay una forma clásica de mirar qué presiona la ganancia de un negocio (la propuso Michael Porter). En Roble:</p>
<ul>
<li><b>Rivalidad</b>: otros talleres de la ciudad.</li>
<li><b>Sustitutos</b>: muebles de cadena, importados, usados.</li>
<li><b>Nuevos competidores</b>: ¿qué tan fácil es abrir un taller?</li>
<li><b>Proveedores</b>: si hay un solo aserradero, puede subir el precio de la madera.</li>
<li><b>Compradores</b>: si comparan mucho y cambian fácil, presionan el precio.</li>
</ul>` },
            { h: 'Para qué sirve', body: `
<p>No es para llenar un cuadro: es para ver de dónde viene el riesgo. Si el aserradero es uno solo, buscar un segundo proveedor puede proteger más el margen que cualquier campaña.</p>
<div class="callout">Quedate con esto: la ganancia no depende solo de tus competidores directos.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada fuerza con su ejemplo en Roble.', pairs: [['Sustitutos', 'Muebles importados'], ['Proveedores', 'Un solo aserradero'], ['Compradores', 'Clientes que comparan mucho'], ['Rivalidad', 'Otros talleres']] },
            { t: 'tf', q: 'Depender de un solo proveedor es un riesgo para el margen.', a: true, why: 'Puede subir precios o fallar sin alternativa.' },
            { t: 'choice', q: '¿Para qué sirve este análisis?', o: ['Para decorar una presentación', 'Para ver de dónde viene el riesgo sobre la ganancia', 'Para elegir colores'], a: 1, why: 'Ayuda a decidir qué proteger.' },
          ],
        },
        {
          id: 'm10s2l3', title: 'Dónde no competir', icon: '🚫',
          read: [
            { h: 'Elegir la cancha', body: `
<p>Llegan mesas importadas mucho más baratas que las de Roble. ¿Bajar el precio para pelear? Probablemente pierda: sus costos no le permiten.</p>
<p>Mejor elegir dónde <b>no</b> competir (precio bajo, catálogo masivo) y dónde sí: garantía, instalación, medida exacta, disponibilidad rápida de repuestos.</p>` },
            { h: 'Ventajas que duran', body: `
<p>La pregunta útil es: ¿qué ventaja podría sostener Roble durante los próximos dos años, aunque los competidores reaccionen? Las que dependen de oficio, relaciones y reputación suelen durar más que las de precio o promoción.</p>
<div class="callout">Quedate con esto: no todas las peleas valen la pena; elegí las que podés ganar.</div>` },
          ],
          ex: [
            { t: 'choice', q: 'Llegan importados más baratos. ¿Qué hace Roble?', o: ['Bajar el precio para igualarlos', 'Competir donde los importados no llegan: medida, instalación, garantía', 'Copiar los diseños importados'], a: 1, why: 'Elige una cancha donde tiene ventaja.' },
            { t: 'tf', q: 'Elegir dónde no competir es parte de la estrategia.', a: true, why: 'Evita peleas que no se pueden ganar.' },
            { t: 'open', q: '¿Qué ventaja podría sostener Roble durante dos años frente a los importados más baratos? ¿Por qué?', model: `<p>La combinación de fabricar a medida, medir e instalar en la casa del cliente y dar garantía con respuesta rápida. Los importados venden medidas estándar y no tienen servicio local.</p><p>Es sostenible porque depende del oficio del taller, de la logística local y de la reputación acumulada, que llevan años construir. Bajar el precio, en cambio, se iguala enseguida.</p>`, points: ['Nombra una ventaja concreta', 'La compara con los importados', 'Explica por qué es difícil de copiar', 'Descarta pelear solo por precio'] },
          ],
        },
      ],
    },
    {
      code: '10.3', title: 'Expansión y crecimiento',
      lessons: [
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
          id: 'm10s3l1', title: 'Pilotos con señales tempranas', icon: '🚩',
          read: [
            { h: 'Probar antes de apostar', body: `
<p>Expandirse tiene incertidumbre en todo: demanda, distribución, costos, normas, operación. Y el TAM o el SAM son estimaciones, no ventas aseguradas.</p>
<p>Por eso, antes de comprometer mucha plata, conviene un <b>piloto</b>: un lanzamiento chico, con tiempo y presupuesto acotados.</p>` },
            { h: 'Qué definir antes de empezar', body: `
<ul>
<li><b>Supuestos</b>: qué tiene que ser cierto para que funcione (“la gente acepta esperar 30 días”).</li>
<li><b>Señales tempranas</b>: qué mirar en las primeras semanas (consultas, presupuestos, quejas por el envío).</li>
<li><b>Criterio de continuidad</b>: qué resultado te hace seguir, ajustar o frenar.</li>
</ul>
<div class="callout">Quedate con esto: si no definís antes qué te haría frenar, nunca vas a frenar.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'El TAM de un mercado nuevo es una venta asegurada.', a: false, why: 'Es una estimación del tamaño, no de lo que vas a vender.' },
            { t: 'order', q: 'Ordená cómo se arma un piloto.', items: ['Definir supuestos', 'Definir señales tempranas', 'Definir criterio de continuidad', 'Lanzar en pequeño', 'Decidir'], why: 'Las reglas se fijan antes de ver los resultados.' },
            { t: 'open', q: 'Roble hace un piloto vendiendo en otra provincia. ¿Qué resultado te haría frenar la expansión?', model: `<p>Frenaría si, después de un ciclo de venta completo, pasa alguna de estas cosas: lo que deja cada venta, con el envío, queda muy por debajo de lo que deja en la ciudad; los plazos de entrega generan cancelaciones o reclamos frecuentes; o el taller empieza a atrasar los pedidos locales.</p><p>Esos umbrales los escribiría antes de empezar, con números concretos.</p>`, points: ['Define un umbral económico', 'Considera la experiencia del cliente (plazos o reclamos)', 'Considera el impacto en la operación actual', 'Fija los criterios antes de empezar'] },
          ],
        },
      ],
    },
    {
      code: '10.4', title: 'Operaciones y capacidad',
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
          id: 'm10s4l1', title: 'Capacidad sostenible', icon: '🏗️',
          read: [
            { h: 'El máximo no es el normal', body: `
<p>El taller de Roble puede hacer, como mucho, 130 muebles en un mes. ¿Debería prometer 130 todos los meses? No.</p>
<p>Ese máximo se alcanza con horas extra, sin imprevistos y sin vacaciones. La <b>capacidad sostenible</b> es la que se puede cumplir mes a mes sin quemar al equipo ni bajar la calidad.</p>` },
            { h: 'Crecer cuesta distinto', body: `
<p>Además, cada mueble extra no cuesta lo mismo: pasado cierto punto hay que pagar horas extra, sumar un turno o comprar otra máquina. Eso es el <b>costo marginal</b> de crecer.</p>
<p>Marketing tiene que coordinar sus promesas con esa capacidad real, y hablar con producción antes de escalar.</p>
<div class="callout">Quedate con esto: prometé según lo que el equipo puede sostener, no según su mejor mes.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Si el máximo del taller es 130, se pueden prometer 130 todos los meses.', a: false, why: 'El máximo no es sostenible: no deja margen para imprevistos.' },
            { t: 'choice', q: '¿Qué es el costo marginal de crecer?', o: ['El costo de la primera venta', 'Lo que cuesta producir cada unidad extra pasado cierto punto', 'El costo de la publicidad'], a: 1, why: 'Horas extra, turnos o máquinas nuevas encarecen las unidades extra.' },
            { t: 'open', q: '¿Qué le preguntarías al responsable del taller de Roble antes de escalar la publicidad?', model: `<p>Le preguntaría: ¿cuántos muebles por mes podemos hacer sin horas extra y sin atrasos? ¿Qué pasa si llegan 20% más pedidos: cuánto se alarga el plazo? ¿Qué parte depende de proveedores (madera, herrajes)? ¿Qué costaría sumar capacidad (un turno, una persona, una máquina)?</p><p>Con eso definiría hasta dónde escalar y qué plazos prometer.</p>`, points: ['Pregunta por la capacidad sostenible', 'Pregunta qué pasa con los plazos si sube la demanda', 'Pregunta por dependencias de proveedores', 'Pregunta cuánto cuesta sumar capacidad'] },
          ],
        },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, describí cómo gana plata y cuál es su recurso crítico.',
    'Escribí su ventaja competitiva y una cancha donde no le conviene competir.',
    'Si piensa expandirse, armá un piloto con supuestos, señales tempranas y criterio para frenar.',
    'Preguntá cuál es su capacidad sostenible por mes y comparala con su máximo.',
  ],
  challenge: {
    key: 'w11', title: '¿Uruguay o más Argentina?',
    intro: `<p>Roble tiene un presupuesto para el semestre. En Argentina conoce bien sus números: sabe cuánto cuesta cada cliente y cuánto deja. En Uruguay no tiene datos, el mercado es mucho más chico y mandar cada mueble cuesta más. Pero llegan consultas desde allá sin haber invertido nada.</p>`,
    steps: [
      { t: 'choice', q: 'Si en Uruguay todo lo demás fuera igual, ¿cada venta dejaría más o menos?', o: ['Más', 'Menos, por el envío', 'Igual'], a: 1, why: 'El envío extra se come parte de lo que queda.' },
      { t: 'choice', q: '¿Cómo repartís?', o: ['Todo a Uruguay', 'La mayor parte a Argentina y una parte chica a probar en Uruguay', 'Todo a Argentina'], a: 1, why: 'Lo conocido rinde; la señal de Uruguay merece una prueba acotada.' },
      { t: 'tf', q: 'Antes de empezar la prueba en Uruguay, conviene decidir qué resultado haría seguir o frenar.', a: true, why: 'Así el resultado decide y no las ganas.' },
    ],
    reflect: '¿Qué regla pondrías para seguir o frenar la prueba?',
    solution: `<p>Ejemplo: si en 3 meses cada venta en Uruguay deja al menos dos tercios de lo que deja en Argentina, y el taller puede atenderla, se invierte más; si no, se pausa y se anota lo aprendido. Medir cuánto cuesta cada cliente, cuántos compran y si conviene un socio local.</p>`,
  },
  cards: [
    { q: 'Modelo de negocio', a: 'Cómo gana plata una empresa: fabricar a pedido, revender, suscripción, servicio.' },
    { q: 'Ventaja competitiva', a: 'Valor que el cliente aprecia, difícil de igualar y a un costo sostenible.' },
    { q: 'Cinco fuerzas', a: 'Rivalidad, sustitutos, nuevos competidores, proveedores y compradores.' },
    { q: 'Piloto', a: 'Lanzamiento acotado con supuestos, señales tempranas y criterio para seguir o frenar.' },
    { q: 'Cuello de botella', a: 'El paso más lento. Define cuánto se puede vender.' },
    { q: 'Capacidad sostenible', a: 'Lo que se puede cumplir mes a mes sin horas extra ni atrasos; menor que el máximo.' },
  ],
});
