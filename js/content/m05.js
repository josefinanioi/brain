/* Brain — Módulo 05 · Adquisición y publicidad digital (Nivel 2).
   Casos del módulo: Lumen reparte su presupuesto entre Meta y Google; Roble aprende a leer búsquedas. */

UNITS.push({
  n: 5,
  phase: 'f2',
  title: 'Adquisición y publicidad digital',
  goal: 'Decidir cómo conseguir clientes con publicidad digital y medirla por lo que deja al negocio.',
  summary: [
    'Capturar a quien ya busca y crear demanda nueva son trabajos distintos que se complementan.',
    'Las plataformas aprenden de las señales que les das: optimizá por lo que le importa al negocio.',
    'Lo que reporta una plataforma es una pista; las ventas reales y el margen son la prueba.',
  ],
  sections: [
    {
      code: '5.1', title: 'Estrategia de adquisición',
      lessons: [
        {
          id: 'm5s1l1', title: 'Capturar demanda o crearla', icon: '🎣',
          read: [
            { h: 'Dos trabajos distintos', body: `
<p>Hay gente que <b>ya está buscando</b> una lámpara de pie hoy. Y hay gente que todavía no sabe que la quiere, pero la querría si la viera.</p>
<ul>
<li><b>Capturar demanda</b>: aparecer cuando alguien ya busca. Ejemplo: Google Search.</li>
<li><b>Crear demanda</b>: mostrar el producto a quien no lo buscaba y despertar el interés. Ejemplo: videos en Instagram.</li>
</ul>` },
            { h: 'Por qué hacen falta los dos', body: `
<p>Capturar suele vender más rápido, pero la cantidad de gente que busca es limitada: cuando la agotás, crecer se encarece.</p>
<p>Crear demanda tarda más en mostrar resultados, pero agranda el grupo de gente que después va a buscar tu marca.</p>
<div class="callout">Quedate con esto: si solo capturás, competís por las mismas búsquedas que todos; si solo creás, tardás en ver ventas.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada acción con su trabajo.', pairs: [['Aparecer cuando buscan “lámpara de pie”', 'Capturar demanda'], ['Video mostrando un living antes y después', 'Crear demanda']] },
            { t: 'tf', q: 'Capturar demanda tiene un límite: la cantidad de gente que ya busca.', a: true, why: 'No podés capturar más búsquedas de las que existen.' },
            { t: 'choice', q: 'Lumen solo invierte en Google y las ventas se estancaron. ¿Qué le falta?', o: ['Más palabras clave iguales', 'Crear demanda nueva para que más gente busque', 'Bajar precios'], a: 1, why: 'Agotó a quienes ya buscaban; necesita ampliar el grupo.' },
          ],
        },
        {
          id: 'm5s1l2', title: 'Elegir canales con criterio', icon: '🧭',
          read: [
            { h: 'No repartir por costumbre', body: `
<p>“Siempre pusimos todo en Instagram” no es un criterio. Para elegir canales conviene mirar:</p>
<ul>
<li><b>Intención</b>: ¿la gente ya busca esto o hay que mostrárselo?</li>
<li><b>Público</b>: ¿dónde está la gente que quiero alcanzar?</li>
<li><b>Ciclo de compra</b>: ¿decide en minutos o en semanas?</li>
<li><b>Presupuesto</b>: ¿alcanza para aprender en ese canal?</li>
<li><b>Medición</b>: ¿puedo saber qué ventas trae?</li>
</ul>` },
            { h: 'Un ejemplo', body: `
<p>Roble vende algo caro que se decide en semanas, a gente que se muda o arma su casa. Le sirve:</p>
<ul>
<li>Google para quien busca “muebles a medida”.</li>
<li>Instagram para mostrar trabajos y despertar ganas.</li>
<li>Seguimiento por WhatsApp porque la decisión tarda.</li>
</ul>
<div class="callout">Quedate con esto: cada canal tiene que tener una razón para estar en el plan.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Repartir el presupuesto igual que el año pasado es una buena estrategia.', a: false, why: 'Es costumbre, no criterio: no mira intención, público ni resultados.' },
            { t: 'choice', q: 'Un producto caro que se decide en semanas necesita sobre todo…', o: ['Un anuncio de un día', 'Varios contactos y seguimiento en el tiempo', 'Solo descuentos'], a: 1, why: 'Las decisiones largas requieren acompañar a la persona.' },
            { t: 'match', q: 'Uní cada criterio con su pregunta.', pairs: [['Intención', '¿Ya busca o hay que mostrárselo?'], ['Ciclo de compra', '¿Decide en minutos o en semanas?'], ['Medición', '¿Puedo saber qué ventas trae?']] },
          ],
        },
        {
          id: 'm5s1l3', title: 'Mover la plata con evidencia', icon: '🔀',
          read: [
            { h: 'Qué mirar para cambiar el reparto', body: `
<p>Lumen pone 70% en Meta y 30% en Google. ¿Debería cambiar? Depende de la evidencia:</p>
<ul>
<li>¿Cuánto cuesta conseguir un <b>cliente</b> (no una visita) en cada canal?</li>
<li>¿Qué pasó con las ventas cuando se subió o bajó cada uno?</li>
<li>¿Qué productos y márgenes vende cada canal?</li>
<li>¿Los clientes de cada canal vuelven a comprar?</li>
</ul>` },
            { h: 'Cambios de a poco', body: `
<p>En vez de dar vuelta todo de golpe, conviene mover una parte (por ejemplo, 10% o 20%), medir unas semanas y seguir según el resultado.</p>
<div class="callout">Quedate con esto: el reparto ideal no se adivina, se va descubriendo con pruebas.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué número sirve más para comparar canales?', o: ['Costo por clic', 'Costo por cliente que compra', 'Cantidad de likes'], a: 1, why: 'Es el que más se acerca a lo que le importa al negocio.' },
            { t: 'tf', q: 'Conviene mover todo el presupuesto de golpe al canal que parece mejor.', a: false, why: 'Mover de a poco permite ver si el resultado se sostiene al escalar.' },
            { t: 'open', q: '¿Qué evidencia usarías para decidir si Lumen pasa plata de Meta a Google?', model: `<p>Compararía cuánto cuesta conseguir un cliente en cada canal (con ventas reales, no solo las que se atribuye cada plataforma), qué margen tienen esos pedidos y si esos clientes vuelven.</p><p>Después movería una parte chica del presupuesto y mediría unas semanas si las ventas totales y el costo por cliente mejoran.</p>`, points: ['Usa costo por cliente, no por clic', 'Mira ventas reales, no solo lo atribuido', 'Considera margen o recompra', 'Propone mover de a poco y medir'] },
          ],
        },
      ],
    },
    {
      code: '5.2', title: 'Meta Ads',
      lessons: [
        {
          id: 'm5s2l1', title: 'Cómo decide Meta a quién mostrar', icon: '🤖',
          read: [
            { h: 'Le pedís un resultado y lo busca', body: `
<p>En Meta (Facebook e Instagram) elegís un <b>objetivo</b>: visitas, mensajes, compras. El sistema muestra el anuncio a la gente que, según lo que aprendió, tiene más chances de hacer <b>eso</b>.</p>
<p>Si Roble pide “mensajes”, Meta busca gente que manda mensajes. No necesariamente gente que compra muebles caros.</p>` },
            { h: 'Las señales importan', body: `
<p>Meta aprende de las <b>señales</b> que recibe: qué personas hicieron la acción buscada. Si esas señales son pobres (muchos “hola” que no compran), aprende a traer más de eso.</p>
<p>Por eso conviene, cuando se puede, enviarle señales de eventos más valiosos: una compra, un presupuesto pedido, un cliente calificado.</p>
<div class="callout">Quedate con esto: la plataforma optimiza lo que le pedís, no lo que querías decir.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Si pedís “mensajes”, Meta busca gente que va a comprar.', a: false, why: 'Busca gente que manda mensajes; comprar es otra cosa.' },
            { t: 'choice', q: '¿Qué señal le enseña mejor a Meta qué cliente buscar?', o: ['Un “me gusta”', 'Una compra o un presupuesto pedido', 'Una visita de dos segundos'], a: 1, why: 'Es un evento más cercano a lo que le importa al negocio.' },
            { t: 'choice', q: 'Roble recibe muchos mensajes que no compran. ¿Qué puede cambiar?', o: ['Optimizar por un evento más valioso, como presupuesto pedido', 'Pedir todavía más mensajes', 'Apagar Instagram'], a: 0, why: 'Así el sistema aprende a buscar gente más interesada.' },
          ],
        },
        {
          id: 'm5s2l2', title: 'La creatividad elige al público', icon: '🎯',
          read: [
            { h: 'El anuncio también segmenta', body: `
<p>Hoy las plataformas deciden mucho de a quién mostrar. Entonces, el <b>contenido del anuncio</b> se vuelve una forma de elegir público: la gente que se siente identificada se detiene, y el sistema aprende de ella.</p>
<p>Roble probó dos anuncios del mismo producto:</p>
<ul>
<li>“Muebles que entran justo en departamentos chicos.”</li>
<li>“La mesa donde va a comer toda la familia por veinte años.”</li>
</ul>
<p>Cada uno atrajo gente distinta, con motivos distintos.</p>` },
            { h: 'Formatos, ángulos y personas', body: `
<p>Por eso conviene tener variedad real: distintos ángulos (el problema, el resultado, la prueba), formatos (video, foto, testimonio) y personas que se reconozcan en el anuncio.</p>
<div class="callout">Quedate con esto: cambiar el ángulo del anuncio es cambiar a quién le hablás.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'El contenido del anuncio influye en a quién le llega.', a: true, why: 'Quien se identifica interactúa, y el sistema aprende a buscar gente parecida.' },
            { t: 'match', q: 'Uní cada anuncio de Roble con quién lo frena.', pairs: [['“Entran justo en departamentos chicos”', 'Quien vive en un espacio reducido'], ['“La mesa de la familia por veinte años”', 'Quien piensa en durabilidad y familia']] },
            { t: 'choice', q: '¿Qué es variedad creativa real?', o: ['El mismo video con otra música', 'Ángulos y formatos distintos para motivos distintos', 'Publicar más seguido'], a: 1, why: 'Lo que cambia es la idea y a quién le habla.' },
          ],
        },
        {
          id: 'm5s2l3', title: 'Más allá del costo por consulta', icon: '🔎',
          read: [
            { h: 'El ángulo barato puede ser caro', body: `
<p>Roble ve en Meta que el anuncio “departamento chico” consigue consultas a la mitad de precio que el de “mesa familiar”. ¿Gana el primero?</p>
<p>No se sabe todavía. Hay que seguir cada consulta hasta el final: ¿cuántas pidieron presupuesto? ¿Cuántas compraron? ¿Qué gastaron?</p>` },
            { h: 'Unir anuncio y venta', body: `
<p>Para eso, cada consulta tiene que guardar de qué anuncio vino (con UTM o preguntando) y anotarse en el CRM hasta la venta. Recién ahí podés comparar <b>costo por cliente</b> y <b>lo que dejó cada venta</b>.</p>
<div class="callout">Quedate con esto: un anuncio no es bueno porque consigue consultas baratas, sino porque consigue clientes rentables.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'El anuncio con consultas más baratas es siempre el mejor.', a: false, why: 'Puede traer gente que no compra o que compra poco.' },
            { t: 'order', q: 'Ordená el seguimiento de una consulta.', items: ['Anuncio', 'Consulta', 'Presupuesto', 'Venta', 'Margen de la venta'], why: 'Así se ve qué anuncio genera clientes rentables.' },
            { t: 'open', q: '¿Cómo verificarías qué ángulo de Roble genera clientes, no solo consultas?', model: `<p>Etiquetaría cada anuncio para saber de dónde viene cada consulta (UTM o una pregunta al iniciar la charla) y lo registraría en el CRM.</p><p>Después de un ciclo de venta completo, compararía por ángulo: cuántas consultas pasaron a presupuesto, cuántas compraron, cuánto costó cada cliente y cuánto dejó cada venta.</p>`, points: ['Identifica el origen de cada consulta', 'Registra hasta la venta en el CRM', 'Espera un ciclo de venta completo', 'Compara costo por cliente y margen'] },
          ],
        },
      ],
    },
    {
      code: '5.3', title: 'Google Ads y búsqueda',
      lessons: [
        {
          id: 'm5s3l1', title: 'La búsqueda es intención', icon: '🔍',
          read: [
            { h: 'Alguien te está pidiendo algo', body: `
<p>Cuando alguien escribe en Google “lámpara de pie para leer”, te está diciendo qué necesita. Eso es <b>intención</b>.</p>
<p>Google Ads te deja aparecer en esas búsquedas. Pagás cuando alguien hace clic. La ventaja es enorme: no interrumpís a nadie, respondés a una pregunta.</p>` },
            { h: 'No todas las búsquedas valen igual', body: `
<p>“Lámpara” a secas puede ser cualquiera: alguien que busca ideas, una lámpara de auto, una canción. “Comprar lámpara de pie nórdica” tiene muchas más chances de terminar en compra.</p>
<div class="callout">Quedate con esto: el trabajo en búsqueda es unir palabras, anuncios, páginas y valor económico.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué búsqueda muestra más intención de compra?', o: ['“lámpara”', '“comprar lámpara de pie nórdica”', '“historia de la lámpara”'], a: 1, why: 'Incluye una acción (comprar) y un producto concreto.' },
            { t: 'tf', q: 'En búsqueda respondés a algo que la persona ya está pidiendo.', a: true, why: 'Por eso suele convertir mejor que interrumpir.' },
            { t: 'tf', q: 'Todas las búsquedas con la palabra del producto valen lo mismo.', a: false, why: 'Cambia mucho la probabilidad de compra según cómo se busca.' },
          ],
        },
        {
          id: 'm5s3l2', title: 'Tres tipos de búsqueda', icon: '📚',
          read: [
            { h: 'Informativa, comparativa y de compra', body: `
<ul>
<li><b>Informativa</b>: “cómo elegir una mesa para un comedor chico”. Quiere aprender.</li>
<li><b>Comparativa</b>: “mesas a medida vs. mesas de cadena”, “Roble opiniones”. Está evaluando.</li>
<li><b>De compra</b> (transaccional): “mesa de roble a medida precio Rosario”. Está lista para decidir.</li>
</ul>` },
            { h: 'Cada una pide otra respuesta', body: `
<p>A la informativa le sirve una guía útil (quizás un artículo con un formulario para medir). A la comparativa, reseñas y diferencias. A la de compra, precio, plazo y un botón para pedir presupuesto.</p>
<div class="callout">Quedate con esto: mandar a todos a la misma página desperdicia la intención de cada uno.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Clasificá cada búsqueda.', pairs: [['“cómo elegir mesa para comedor chico”', 'Informativa'], ['“Roble muebles opiniones”', 'Comparativa'], ['“mesa de roble a medida precio”', 'De compra']] },
            { t: 'choice', q: 'A una búsqueda de compra, ¿qué página le mostrás?', o: ['Un artículo largo de historia', 'Precio, plazo y botón para pedir presupuesto', 'La página de inicio genérica'], a: 1, why: 'La persona ya quiere decidir: necesita condiciones claras.' },
            { t: 'tf', q: 'Las búsquedas informativas pueden servir para captar clientes más adelante.', a: true, why: 'Con buen contenido, hoy aprende y mañana te elige.' },
          ],
        },
        {
          id: 'm5s3l3', title: 'Palabra, anuncio y página', icon: '🔗',
          read: [
            { h: 'Todo tiene que encajar', body: `
<p>Si alguien busca “mesa extensible a medida”, el anuncio tiene que hablar de mesas extensibles y la página tiene que mostrar mesas extensibles. Si lo mandás a la portada general, se va.</p>
<p>Esa coherencia entre <b>búsqueda, anuncio y página</b> mejora la conversión y también suele bajar el costo por clic.</p>` },
            { h: 'Revisar lo que se busca de verdad', body: `
<p>Google muestra las búsquedas reales que activaron tus anuncios. Ahí aparecen sorpresas: “mesa de roble usada”, “mesa de roble gratis”. Esas se excluyen para no pagar por clics que nunca van a comprar.</p>
<div class="callout">Quedate con esto: revisá qué buscó la gente, no solo qué palabras elegiste.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Mandar todas las búsquedas a la portada de la web es suficiente.', a: false, why: 'Cada búsqueda necesita una página que responda lo que pidió.' },
            { t: 'choice', q: 'Aparecen clics de “mesa de roble usada”. ¿Qué hace Roble?', o: ['Subir el presupuesto', 'Excluir esa búsqueda', 'Cambiar el logo'], a: 1, why: 'Es gente que no busca lo que Roble vende.' },
            { t: 'open', q: 'Roble tiene poco presupuesto. ¿Priorizarías “cómo elegir mesa para comedor chico” o “mesa de roble a medida precio”? ¿Por qué?', model: `<p>Priorizaría “mesa de roble a medida precio”: muestra intención de compra y está más cerca de la venta, así que cada peso tiene más chances de volver rápido.</p><p>La búsqueda informativa sirve, pero tarda más en convertir; la sumaría cuando la de compra esté funcionando o con contenido propio que no dependa de pagar cada clic.</p>`, points: ['Elige la búsqueda de compra', 'Justifica con la intención', 'Considera el presupuesto limitado', 'Propone qué hacer con la informativa'] },
          ],
        },
      ],
    },
    {
      code: '5.4', title: 'Medición publicitaria',
      lessons: [
        {
          id: 'm5s4l1', title: 'Métricas de plataforma y de negocio', icon: '📏',
          read: [
            { h: 'Una escalera de métricas', body: `
<p>Cada métrica mira una parte del camino:</p>
<ul>
<li><b>CTR</b> (porcentaje de clics): de cada 100 que vieron el anuncio, cuántos hicieron clic.</li>
<li><b>CPC</b> (costo por clic): cuánto costó cada clic.</li>
<li><b>CPL</b> (costo por lead): cuánto costó cada consulta.</li>
<li><b>CAC</b> (costo de adquisición): cuánto costó cada cliente que compró.</li>
<li><b>Contribución</b>: cuánto dejó esa venta después de sus costos.</li>
</ul>` },
            { h: 'Subir la escalera', body: `
<p>Las primeras las mide la plataforma sola. Las últimas necesitan datos de ventas. Cuanto más arriba de la escalera, más cerca del negocio.</p>
<div class="callout">Quedate con esto: un CTR alto con clientes que no compran no le sirve a nadie.</div>` },
          ],
          ex: [
            { t: 'order', q: 'Ordená de la métrica más lejana a la más cercana al negocio.', items: ['CTR', 'CPC', 'CPL', 'CAC', 'Contribución'], why: 'Cada paso se acerca más a lo que gana la empresa.' },
            { t: 'match', q: 'Uní cada sigla con lo que mide.', pairs: [['CTR', 'Qué parte de quienes lo vieron hizo clic'], ['CPC', 'Costo de cada clic'], ['CAC', 'Costo de cada cliente que compró']] },
            { t: 'tf', q: 'Un CTR alto asegura que la campaña es rentable.', a: false, why: 'Mide interés inicial, no ventas ni ganancia.' },
          ],
        },
        {
          id: 'u2l4', title: 'MER y atribución', icon: '🧭',
          read: [
            { h: '¿Quién se lleva el mérito?', body: `
<p>Una clienta de Lumen vio un anuncio en Instagram, días después buscó “lámparas de pie” en Google, consultó por WhatsApp y compró tres semanas más tarde.</p>
<p>¿Qué anuncio la trajo? Meta dice “yo”. Google dice “yo”. Los dos cuentan la misma venta. A eso se le dice <b>problema de atribución</b>: saber a quién darle el crédito.</p>` },
            { h: 'La mirada desde arriba', body: `
<p>El <b>MER</b> esquiva ese problema: no le pregunta a ninguna plataforma. Mira la foto completa:</p>
<div class="formula">MER = todo lo que vendió la empresa ÷ todo lo que gastó en marketing</div>
<p>No te dice qué canal funciona mejor, pero sí si el marketing <b>en conjunto</b> está rindiendo. Es como mirar la balanza del mes en vez de discutir cuál ingrediente engorda.</p>` },
            { h: 'Preguntas ante un número espectacular', body: `
<p>“Meta funciona bárbaro, tenemos ROAS 8.” Antes de festejar:</p>
<ul>
<li>¿Son ventas reales o lo que dice la plataforma?</li>
<li>¿Qué margen tienen esas ventas?</li>
<li>¿Descontamos devoluciones y cancelaciones?</li>
<li>¿Son clientes nuevos o gente que iba a comprar igual?</li>
</ul>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué problema resuelve el MER?', o: ['Elegir el mejor anuncio', 'Que cada plataforma se adjudique las mismas ventas', 'Calcular el costo por consulta'], a: 1, why: 'Mira el total de la empresa sin depender de lo que dice cada plataforma.' },
            { t: 'tf', q: 'El MER reemplaza el análisis por canal.', a: false, why: 'Es una mirada general. Para decidir entre canales todavía hace falta mirarlos por separado.' },
            { t: 'tf', q: 'Si Meta y Google se adjudican la misma venta, sumarlos cuenta esa venta dos veces.', a: true, why: 'Por eso los números de las plataformas suman más de lo que se vendió de verdad.' },
            { t: 'choice', q: '“Tenemos ROAS 8 en Meta.” ¿Qué preguntás primero?', o: ['¿Son ventas reales y con qué margen?', '¿Qué color tenía el anuncio?', '¿Cuántos likes tuvo?'], a: 0, why: 'Sin saber si es real y cuánto deja, el número no sirve para decidir.' },
          ],
        },
        {
          id: 'm5s4l2', title: 'Atribución no es causalidad', icon: '🧪',
          read: [
            { h: 'Dar crédito no es demostrar', body: `
<p>La <b>atribución</b> reparte el crédito de una venta entre los anuncios que la persona vio. Pero eso no prueba que el anuncio la haya <b>causado</b>: quizás esa persona iba a comprar igual.</p>
<p>Ejemplo: Lumen muestra anuncios a gente que ya visitó la web. Muchos compran, y Meta se lleva el crédito. ¿Cuántos hubieran comprado sin el anuncio?</p>` },
            { h: 'Medir lo incremental', body: `
<p>Lo que importa es lo <b>incremental</b>: las ventas que no hubieran ocurrido sin la publicidad. Formas de acercarse:</p>
<ul>
<li>Apagar una campaña en una zona o por un tiempo y comparar ventas totales.</li>
<li>Usar grupos de control que no ven el anuncio.</li>
<li>Contrastar lo que dice la plataforma con las ventas reales del sistema de la tienda.</li>
</ul>
<div class="callout">Quedate con esto: preguntate qué hubiera pasado sin el anuncio.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Si una plataforma se atribuye una venta, el anuncio la causó.', a: false, why: 'La persona podría haber comprado igual.' },
            { t: 'choice', q: '¿Qué son las ventas incrementales?', o: ['Todas las ventas del mes', 'Las que no hubieran ocurrido sin la publicidad', 'Las que vienen de Google'], a: 1, why: 'Son las que la publicidad realmente agregó.' },
            { t: 'open', q: 'Meta reporta un ROAS altísimo para Lumen. ¿Qué dato usarías para contrastarlo?', model: `<p>Miraría las ventas reales del sistema de la tienda (no las que se atribuye Meta), con su margen y descontando devoluciones, y vería si suben o bajan cuando cambia la inversión en Meta.</p><p>Si es posible, haría una prueba: bajar o apagar la campaña en una zona o unas semanas y comparar las ventas totales. También separaría compras de clientes nuevos de las de gente que ya compraba.</p>`, points: ['Usa ventas reales de la tienda', 'Considera margen y devoluciones', 'Propone una prueba de incrementalidad', 'Separa clientes nuevos de recurrentes'] },
          ],
        },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, separá su inversión en lo que captura demanda y lo que la crea.',
    'Elegí un anuncio activo y seguí sus consultas hasta la venta: ¿cuánto costó cada cliente?',
    'Revisá las búsquedas reales que activan sus anuncios de Google y marcá las que habría que excluir.',
    'Compará las ventas que reporta una plataforma con las ventas reales del mismo período.',
  ],
  challenge: {
    key: 'm5', title: '¿Más Meta o más Google?',
    intro: `
<p>Lumen tiene un presupuesto fijo. Hoy lo reparte 70% en Meta y 30% en Google. Lo que sabés:</p>
<ul>
<li>Meta trae muchas visitas baratas y reporta muchas ventas.</li>
<li>Google trae menos visitas, más caras, pero compran más seguido.</li>
<li>Nadie cruzó las ventas reales de la tienda con lo que reporta cada plataforma.</li>
<li>Las búsquedas de “Lumen” en Google crecen cuando hay campañas en Meta.</li>
</ul>`,
    steps: [
      { t: 'choice', q: '¿Qué conclusión es apresurada?', o: ['“Meta es mejor porque trae visitas baratas”', '“Falta cruzar ventas reales”', '“Los canales se ayudan entre sí”'], a: 0, why: 'Visitas baratas no dicen nada sobre clientes ni margen.' },
      { t: 'tf', q: 'Que suban las búsquedas de la marca con Meta sugiere que Meta crea demanda que después captura Google.', a: true, why: 'Es una señal de que los canales cumplen roles complementarios.' },
      { t: 'choice', q: '¿Qué dato falta primero?', o: ['Costo por cliente con ventas reales, por canal', 'Cantidad de seguidores', 'Diseño de los anuncios'], a: 0, why: 'Sin eso, se decide con lo que cada plataforma dice de sí misma.' },
      { t: 'open', q: 'Proponé dos alternativas y cuál recomendarías.', model: `<p><b>A:</b> pasar plata de Meta a Google porque sus clientes compran más. Riesgo: si Meta está creando la demanda que Google captura, las búsquedas caerían.</p><p><b>B:</b> cruzar primero las ventas reales por canal, y después mover 10–20% del presupuesto durante unas semanas, mirando ventas totales y búsquedas de marca.</p><p>Recomiendo B: decide con datos del negocio y protege la relación entre los canales.</p>`, points: ['Reconoce que los canales se complementan', 'Pide ventas reales, no atribuidas', 'Propone un cambio gradual y medido', 'Mira ventas totales, no solo por canal'] },
    ],
    reflect: '¿Qué resultado de la prueba te haría volver al reparto anterior?',
    solution: `
<p><strong>Diagnóstico:</strong> Lumen decide con los números de cada plataforma, que se pisan entre sí.</p>
<p><strong>Datos que faltan:</strong> ventas reales y margen por canal, clientes nuevos vs. recurrentes, efecto de Meta en las búsquedas.</p>
<p><strong>Recomendación:</strong> cruzar datos y probar cambios graduales mirando ventas totales.</p>`,
  },
  cards: [
    { q: 'Capturar vs. crear demanda', a: 'Capturar: aparecer cuando ya buscan. Crear: despertar interés en quien no buscaba.' },
    { q: 'Objetivo de campaña', a: 'La plataforma optimiza exactamente lo que le pedís; elegí un evento cercano a la venta.' },
    { q: 'Tipos de búsqueda', a: 'Informativa, comparativa y de compra. Cada una necesita otra página.' },
    { q: 'Escalera de métricas', a: 'CTR → CPC → CPL → CAC → contribución. Cuanto más arriba, más cerca del negocio.' },
    { q: 'Incrementalidad', a: 'Las ventas que no hubieran ocurrido sin la publicidad.' },
  ],
});
