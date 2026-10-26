/* Brain — Módulo 04 · Canales y experiencia del cliente (Nivel 1).
   Caso que atraviesa el módulo: el recorrido de los clientes de Roble. */

UNITS.push({
  n: 4,
  phase: 'f1',
  title: 'Canales y experiencia del cliente',
  goal: 'Entender cómo llega, decide y vuelve un cliente, y qué canales y momentos lo hacen posible.',
  summary: [
    'El recorrido real del cliente va y viene entre canales; hay que observarlo, no imaginarlo.',
    'Cada canal cumple un rol distinto y no todos se miden por ventas inmediatas.',
    'La experiencia la arman todos los contactos con la empresa, y una promesa incumplida sale cara.',
  ],
  sections: [
    {
      code: '4.1', title: 'Customer journey',
      lessons: [
        {
          id: 'm4s1l1', title: 'El recorrido no es una línea recta', icon: '🗺️',
          read: [
            { h: 'Cómo compra de verdad la gente', body: `
<p>Una clienta de Roble vio un reel con una mesa a medida. Dos semanas después buscó “Roble muebles” en Google, leyó reseñas, le mostró fotos a su pareja, escribió por WhatsApp, desapareció un mes y volvió cuando se mudó.</p>
<p>Ese camino es el <b>customer journey</b>, o recorrido del cliente: todo lo que pasa desde que descubre la marca hasta que compra (y después).</p>` },
            { h: 'Idas y vueltas', body: `
<p>El recorrido casi nunca es lineal. La gente:</p>
<ul>
<li>Pasa por varios canales (redes, Google, WhatsApp, el local).</li>
<li>Abandona y vuelve.</li>
<li>Consulta a otros antes de decidir.</li>
</ul>
<p>Por eso, si Roble mira solo el último mensaje antes de la compra, cree que “vendió WhatsApp”, cuando en realidad el reel y las reseñas hicieron gran parte del trabajo.</p>
<div class="callout">Quedate con esto: el último contacto antes de la compra no es el único que importó.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'La mayoría de los clientes descubre, decide y compra en un solo canal.', a: false, why: 'Suelen pasar por varios canales y momentos antes de comprar.' },
            { t: 'choice', q: 'La clienta compró por WhatsApp después de ver un reel y leer reseñas. ¿Qué canal vendió?', o: ['Solo WhatsApp', 'Todos aportaron en distintos momentos', 'Solo el reel'], a: 1, why: 'Cada contacto cumplió un papel en el recorrido.' },
            { t: 'order', q: 'Ordená el recorrido de la clienta de Roble.', items: ['Ve un reel', 'Busca la marca en Google', 'Lee reseñas', 'Escribe por WhatsApp', 'Compra cuando se muda'], why: 'Así fue su camino real, con pausas en el medio.' },
          ],
        },
        {
          id: 'm4s1l2', title: 'Mapear el recorrido', icon: '🧭',
          read: [
            { h: 'Qué anotar en cada momento', body: `
<p>Un mapa del recorrido no es un dibujo lindo: es una tabla con lo que pasa en cada momento.</p>
<table><thead><tr><th>Momento</th><th>Pregunta del cliente</th><th>Canal</th><th>Fricción</th></tr></thead><tbody>
<tr><td>Descubre</td><td>¿Esto es para mí?</td><td>Instagram</td><td>No ve precios</td></tr>
<tr><td>Compara</td><td>¿Son confiables?</td><td>Google, reseñas</td><td>Pocas reseñas</td></tr>
<tr><td>Consulta</td><td>¿Cuánto y cuándo?</td><td>WhatsApp</td><td>Responden tarde</td></tr>
<tr><td>Recibe</td><td>¿Quedó bien?</td><td>Entrega</td><td>Demoras</td></tr>
</tbody></table>
<p>También vale anotar las <b>emociones</b>: ansiedad al pagar, alivio al recibir.</p>` },
            { h: 'Deseado vs. observado', body: `
<p>El error común es dibujar el recorrido que <b>nos gustaría</b> que hiciera el cliente. El útil es el que <b>realmente hace</b>, sacado de entrevistas, mensajes y datos.</p>
<div class="callout">Quedate con esto: cada fricción del mapa es una oportunidad de mejora concreta.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada momento con su fricción en Roble.', pairs: [['Descubre', 'No ve precios'], ['Compara', 'Pocas reseñas'], ['Consulta', 'Responden tarde'], ['Recibe', 'Demoras']] },
            { t: 'tf', q: 'El mapa útil es el recorrido que la empresa desea.', a: false, why: 'Sirve el recorrido observado en clientes reales.' },
            { t: 'choice', q: '¿Qué es una fricción?', o: ['Un anuncio', 'Algo que hace más difícil avanzar hacia la compra', 'Un cliente enojado'], a: 1, why: 'Las fricciones frenan o hacen abandonar el recorrido.' },
          ],
        },
        {
          id: 'm4s1l3', title: 'Dónde queda registrado', icon: '🗂️',
          read: [
            { h: 'Si no se anota, no existe', body: `
<p>Para entender el recorrido hace falta dejar rastros:</p>
<ul>
<li>Preguntar siempre <b>“¿cómo nos conociste?”</b> y anotarlo.</li>
<li>Usar enlaces con etiquetas (se llaman <b>UTM</b>) para saber de qué anuncio vino cada visita.</li>
<li>Registrar cada consulta en un <b>CRM</b> (una planilla o sistema con todos los contactos y en qué quedó cada uno).</li>
</ul>` },
            { h: 'Juntar las piezas', body: `
<p>Con esos registros, Roble puede ver que la mayoría de quienes compran vieron reels antes de escribir, aunque la venta se cierre por WhatsApp. Sin ellos, solo tiene intuiciones.</p>
<div class="callout">Quedate con esto: el recorrido se entiende cruzando datos de varios lugares.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Para qué sirve un enlace con UTM?', o: ['Para que cargue más rápido', 'Para saber de qué anuncio o canal vino la visita', 'Para cobrar'], a: 1, why: 'Las etiquetas UTM identifican el origen de cada visita.' },
            { t: 'tf', q: 'Preguntar “¿cómo nos conociste?” es una forma simple de registrar el recorrido.', a: true, why: 'Es barata y complementa los datos automáticos.' },
            { t: 'open', q: 'Un comprador de Roble vio un reel, buscó reseñas y compró por WhatsApp. ¿Dónde registrarías la información para entender ese recorrido?', model: `<p>En el CRM, en la ficha de cada contacto: origen del primer contacto (por ejemplo, el reel, si llegó con un enlace etiquetado), la respuesta a “¿cómo nos conociste?”, la fecha de la consulta y en qué quedó.</p><p>Además, usaría enlaces con UTM en los anuncios y en la bio para saber qué piezas generan visitas y consultas.</p>`, points: ['Usa una ficha por contacto (CRM o planilla)', 'Registra el origen y “cómo nos conociste”', 'Etiqueta los enlaces con UTM', 'Anota fechas y resultado de cada consulta'] },
          ],
        },
      ],
    },
    {
      code: '4.2', title: 'Ecosistema de canales',
      lessons: [
        {
          id: 'm4s2l1', title: 'Pagos, propios y ganados', icon: '🌐',
          read: [
            { h: 'Tres familias de canales', body: `
<ul>
<li><b>Pagos</b>: los alquilás. Anuncios en Meta o Google. Compran alcance rápido, pero si dejás de pagar, desaparecen.</li>
<li><b>Propios</b>: son tuyos. La web, la lista de WhatsApp o email, el local. Se construyen despacio y quedan.</li>
<li><b>Ganados</b>: dependen de otros. Recomendaciones, reseñas, notas en medios. No se compran: se merecen.</li>
</ul>` },
            { h: 'No depender de uno solo', body: `
<p>Si todas las ventas de Lumen vienen de anuncios en una sola plataforma, un cambio de precios o de algoritmo puede tumbar el negocio. Combinar las tres familias reduce esa dependencia.</p>
<div class="callout">Quedate con esto: lo pago te da velocidad; lo propio, estabilidad; lo ganado, confianza.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Clasificá cada canal.', pairs: [['Anuncios en Meta', 'Pago'], ['Lista de clientes por WhatsApp', 'Propio'], ['Reseñas de clientes', 'Ganado'], ['La web de Lumen', 'Propio']] },
            { t: 'tf', q: 'Depender de una sola plataforma pagada es un riesgo.', a: true, why: 'Un cambio ajeno puede cortar las ventas de golpe.' },
            { t: 'choice', q: '¿Qué aporta sobre todo un canal ganado?', o: ['Velocidad', 'Confianza', 'Control total'], a: 1, why: 'Que otros hablen bien de vos pesa más que lo que vos digas.' },
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
          id: 'm4s2l2', title: 'Un rol para cada canal', icon: '🎛️',
          read: [
            { h: 'No todos juegan de delanteros', body: `
<p>En un equipo de fútbol no se juzga al arquero por los goles que hace. Con los canales pasa lo mismo:</p>
<ul>
<li>Un video en Instagram puede tener el rol de <b>dar a conocer</b>.</li>
<li>Google Search, el de <b>capturar</b> a quien ya busca.</li>
<li>WhatsApp, el de <b>cerrar</b> la venta.</li>
<li>La lista de clientes, el de <b>hacer que vuelvan</b>.</li>
</ul>` },
            { h: 'Medir según el rol', body: `
<p>Si Lumen juzga su campaña de reconocimiento por ventas inmediatas, la va a apagar. Pero esa campaña puede estar haciendo que más gente busque “Lumen” en Google y compre después.</p>
<p>Por eso cada canal se evalúa con métricas acordes a su rol, y se mira también cómo se ayudan entre sí.</p>
<div class="callout">Quedate con esto: un canal que no cierra ventas puede ser el que las hace posibles.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada canal con su rol principal.', pairs: [['Video en Instagram', 'Dar a conocer'], ['Google Search', 'Capturar a quien busca'], ['WhatsApp', 'Cerrar la venta'], ['Lista de clientes', 'Que vuelvan']] },
            { t: 'tf', q: 'Una campaña de reconocimiento se evalúa solo por ventas inmediatas.', a: false, why: 'Su aporte suele verse después, por ejemplo en búsquedas de la marca.' },
            { t: 'open', q: '¿Qué canal podría sostener la relación con los clientes de Lumen después de la primera compra?', model: `<p>Un canal propio: una lista de clientes por email o WhatsApp, con su permiso. Sirve para mandar consejos de uso, avisar novedades que combinen con lo que compraron y pedir reseñas.</p><p>Es barato porque no hay que pagar para llegar a ellos, y construye recompra y recomendaciones.</p>`, points: ['Elige un canal propio', 'Pide permiso al cliente', 'Propone contenido útil, no solo ofertas', 'Lo liga a recompra o recomendación'] },
          ],
        },
      ],
    },
    {
      code: '4.3', title: 'Funnel y ciclo de vida',
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
          id: 'm4s3l1', title: 'Después de la compra: el ciclo de vida', icon: '🔄',
          read: [
            { h: 'La venta no es el final', body: `
<p>El funnel termina en la venta. El <b>ciclo de vida</b> sigue: el cliente usa el producto, queda satisfecho (o no), vuelve a comprar y recomienda.</p>
<div class="chain strong">Descubre → compra → usa → queda satisfecho → vuelve → recomienda</div>
<p>En Flow, la etapa más importante está después de la primera cuota: que la alumna siga viniendo.</p>` },
            { h: 'Definiciones claras', body: `
<p>Para medir cada etapa hace falta acordar qué cuenta: ¿qué es una “consulta”? ¿Un mensaje con “hola”? ¿Una persona que preguntó precio? Si cada mes se cuenta distinto, las tasas no se pueden comparar.</p>
<p>Y cuando una etapa cae, hay varias causas posibles: calidad de las consultas, seguimiento, precio, producto. La publicidad es solo una de ellas.</p>
<div class="callout">Quedate con esto: 1.000 consultas y 50 ventas dicen que compra el 5%, pero no dicen dónde está el problema.</div>` },
          ],
          ex: [
            { t: 'order', q: 'Ordená el ciclo de vida del cliente.', items: ['Compra', 'Usa', 'Queda satisfecho', 'Vuelve', 'Recomienda'], why: 'Cada etapa depende de la anterior.' },
            { t: 'tf', q: 'Para comparar meses, la definición de “consulta” tiene que ser siempre la misma.', a: true, why: 'Si cambia la definición, cambian los números aunque no cambie nada real.' },
            { t: 'open', q: 'Las ventas de Roble cayeron. ¿Qué etapa investigarías antes de culpar a la publicidad?', model: `<p>Miraría etapa por etapa: si siguen llegando consultas parecidas a las de antes, el problema no está en la publicidad sino más abajo.</p><p>Revisaría el tiempo de respuesta, cuántas consultas reciben presupuesto, cuántos presupuestos se cierran y por qué se pierden. Recién si cayeron las consultas o cambió su calidad, revisaría los anuncios.</p>`, points: ['Revisa el funnel etapa por etapa', 'Compara la cantidad y calidad de consultas', 'Mira respuesta y seguimiento comercial', 'Busca los motivos de pérdida'] },
          ],
        },
      ],
    },
    {
      code: '4.4', title: 'Experiencia del cliente',
      lessons: [
        {
          id: 'm4s4l1', title: 'Momentos que definen la experiencia', icon: '✨',
          read: [
            { h: 'Todos los contactos cuentan', body: `
<p>La experiencia no es solo el diseño de la web. Es cada contacto: el primer mensaje, el presupuesto, el pago, la entrega, el reclamo.</p>
<p>Algunos momentos pesan más que otros. En Lumen, el momento crítico es abrir la caja: si la lámpara llega rota, nada de lo anterior importa.</p>` },
            { h: 'Expectativas', body: `
<p>La satisfacción depende de la distancia entre lo que la persona esperaba y lo que vivió. Si Roble promete “entrega en 15 días” y entrega en 20, decepciona. Si promete 25 y entrega en 20, sorprende, con el mismo plazo real.</p>
<p>Por eso marketing tiene que coordinar con ventas, logística y posventa lo que se promete.</p>
<div class="callout">Quedate con esto: prometé lo que podés cumplir siempre, no lo que cumplís en un día bueno.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Cuál es el momento crítico en Lumen?', o: ['Ver el anuncio', 'Abrir la caja y encontrar la lámpara sana', 'Seguir la cuenta en Instagram'], a: 1, why: 'Ahí se confirma o se rompe la promesa.' },
            { t: 'tf', q: 'Prometer menos y cumplir de más puede mejorar la satisfacción con el mismo resultado real.', a: true, why: 'La satisfacción depende de la distancia entre lo esperado y lo vivido.' },
            { t: 'choice', q: '¿Con quién tiene que coordinar marketing lo que promete?', o: ['Solo con diseño', 'Con ventas, logística y posventa', 'Con nadie'], a: 1, why: 'Son quienes cumplen la promesa.' },
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
        {
          id: 'm4s4l2', title: 'Promesas que dependen de operaciones', icon: '📦',
          read: [
            { h: 'Lo que marketing no controla', body: `
<p>Muchas promesas de marketing las cumple otra área:</p>
<ul>
<li>“Entrega en 24 horas” depende del depósito y del correo.</li>
<li>“Te respondemos al instante” depende de cuántas personas atienden.</li>
<li>“Stock disponible” depende de compras y producción.</li>
</ul>` },
            { h: 'Hoy conversiones, mañana reclamos', body: `
<p>Lumen probó un anuncio con “entrega inmediata”. Las ventas subieron… y una semana después llegaron los reclamos porque no había stock de los modelos más vendidos.</p>
<p>La promesa trajo clientes a un costo alto: reseñas malas, devoluciones y gente que no vuelve.</p>
<div class="callout">Quedate con esto: antes de prometer algo nuevo, preguntá a quien lo tiene que cumplir.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Prometer entrega inmediata sin stock puede subir las ventas hoy y los reclamos mañana.', a: true, why: 'Una promesa incumplida se paga después.' },
            { t: 'match', q: 'Uní cada promesa con el área que la cumple.', pairs: [['Entrega en 24 horas', 'Logística'], ['Respuesta al instante', 'Atención o ventas'], ['Stock disponible', 'Compras o producción']] },
            { t: 'open', q: 'Elegí una promesa de marketing de Roble que dependa de operaciones. ¿Qué preguntarías antes de usarla en un anuncio?', model: `<p>Promesa: “Tu mueble listo en 15 días.”</p><p>Le preguntaría al taller: ¿cuál es el plazo real en un mes normal y en uno de mucha demanda? ¿Qué pasa si llegan el doble de pedidos? ¿Qué parte del plazo depende de proveedores?</p><p>Con esas respuestas prometería un plazo que se pueda cumplir siempre, no solo en un buen mes.</p>`, points: ['Elige una promesa concreta', 'Identifica el área que la cumple', 'Pregunta por el caso de mucha demanda', 'Ajusta la promesa a lo sostenible'] },
          ],
        },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, mapeá el recorrido de un cliente real: momentos, canales y fricciones.',
    'Clasificá sus canales en pagos, propios y ganados, y escribí el rol de cada uno.',
    'Medí cuántas consultas pasan a presupuesto y cuántos presupuestos a venta.',
    'Listá tres promesas de marketing y quién las cumple dentro de la empresa.',
    'Proyecto integrador del Nivel 1: armá un brief estratégico de tu empresa elegida con segmentos, barreras, competidores, posicionamiento y mensajes para tres etapas de compra.',
  ],
  challenge: {
    key: 'w9', title: 'Ventas récord, clientes enojados',
    intro: `<p>Tras una campaña exitosa, a Roble le llegaron muchas más consultas y vendió bastante más. Pero el plazo de entrega pasó de tres semanas a siete, muchos más clientes cancelan y las malas reseñas se triplicaron. La agencia quiere seguir invirtiendo “porque funciona”.</p>`,
    steps: [
      { t: 'choice', q: '¿Qué frena a Roble?', o: ['La falta de clientes', 'La fabricación y la entrega', 'Los anuncios'], a: 1, why: 'Sobran clientes y falta capacidad para atenderlos.' },
      { t: 'choice', q: 'Si sobran clientes, ¿qué oportunidad aparece?', o: ['Vender todavía más', 'Cobrar mejor: precio y menos descuentos', 'Más publicidad'], a: 1, why: 'Cuando hay más demanda que capacidad, se puede cobrar mejor.' },
      { t: 'tf', q: 'Conviene decir plazos reales aunque se pierdan algunas ventas.', a: true, why: 'Una promesa incumplida cuesta más que una venta perdida.' },
    ],
    reflect: 'Escribí el plan de acción en 5 puntos.',
    solution: `<ol><li>Bajar la publicidad hasta lo que se puede atender.</li><li>Empujar los productos que se pueden entregar rápido.</li><li>Decir plazos reales.</li><li>Contactar a los clientes que están esperando.</li><li>Revisar precios y descuentos, y usar los datos de demanda para discutir si conviene agrandar el taller.</li></ol>`,
  },
  cards: [
    { q: 'Customer journey', a: 'El recorrido del cliente desde que descubre la marca hasta que compra y vuelve. Rara vez es lineal.' },
    { q: 'Canales pagos, propios y ganados', a: 'Pagos: se alquilan. Propios: son tuyos. Ganados: dependen de que otros hablen de vos.' },
    { q: 'Rol de un canal', a: 'Cada canal se mide según su función: dar a conocer, capturar, cerrar o hacer volver.' },
    { q: 'Ciclo de vida', a: 'Compra, uso, satisfacción, recompra y recomendación.' },
    { q: 'Expectativa y satisfacción', a: 'La satisfacción depende de la distancia entre lo prometido y lo vivido.' },
  ],
});
