/* Brain — Módulo 03 · Marca, posicionamiento y comunicación (Nivel 1).
   Caso que atraviesa el módulo: Brote quiere dejar de ser “una cafetería más”. */

UNITS.push({
  n: 3,
  phase: 'f1',
  title: 'Marca, posicionamiento y comunicación',
  goal: 'Construir una marca creíble, elegir un lugar claro en la mente del cliente y comunicarlo bien.',
  summary: [
    'Una marca es lo que la gente espera de vos; se construye con pruebas, no con adjetivos.',
    'Posicionar es elegir una diferencia relevante y aceptar las renuncias que exige.',
    'Comunicar es decirle a cada persona lo que necesita para avanzar en su decisión.',
  ],
  sections: [
    {
      code: '3.1', title: 'Estrategia de marca',
      lessons: [
        {
          id: 'm3s1l1', title: 'Qué es una marca', icon: '🏷️',
          read: [
            { h: 'Más que un logo', body: `
<p>Cuando alguien escucha “Brote”, algo se le viene a la cabeza: “buen café”, “lugar tranquilo”, “caro”, “la chica que atiende es re amable”. Ese conjunto de <b>asociaciones y expectativas</b> es la marca.</p>
<p>El logo, los colores y el nombre ayudan a reconocerla, pero la marca vive en la cabeza de la gente.</p>` },
            { h: 'Identidad e imagen', body: `
<ul>
<li><b>Identidad</b>: lo que la empresa quiere proyectar. Brote quiere ser “el lugar del barrio para concentrarse con buen café”.</li>
<li><b>Imagen</b>: lo que la gente realmente percibe. Quizás piensan “es lindo pero siempre está lleno y hay ruido”.</li>
</ul>
<p>El trabajo de marca es achicar la distancia entre las dos. Y casi siempre se achica cambiando la experiencia, no el logo.</p>
<div class="callout">Quedate con esto: la marca no es lo que decís de vos; es lo que la gente espera cuando te elige.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'La marca es el logo y los colores.', a: false, why: 'Son elementos de reconocimiento; la marca son las asociaciones que la gente tiene.' },
            { t: 'match', q: 'Uní cada concepto con su ejemplo en Brote.', pairs: [['Identidad', 'Lo que Brote quiere proyectar'], ['Imagen', 'Lo que el barrio percibe de Brote']] },
            { t: 'choice', q: 'La gente percibe Brote como ruidoso, pero quiere ser un lugar para concentrarse. ¿Qué hace primero?', o: ['Cambiar el logo', 'Cambiar la experiencia: zonas silenciosas, música más baja', 'Hacer más posteos'], a: 1, why: 'La imagen cambia cuando cambia lo que la gente vive.' },
          ],
        },
        {
          id: 'm3s1l2', title: 'Promesa y personalidad', icon: '🤝',
          read: [
            { h: 'La promesa', body: `
<p>Toda marca hace una <b>promesa</b>: lo que el cliente puede esperar cada vez que la elige.</p>
<ul>
<li>Brote: “Un lugar tranquilo con café rico para trabajar.”</li>
<li>Lumen: “Lámparas de diseño que llegan rápido y sanas.”</li>
<li>Roble: “Muebles que entran justo y duran años.”</li>
</ul>
<p>Si la promesa no se cumple una y otra vez, la marca se gasta.</p>` },
            { h: 'Personalidad y valores', body: `
<p>La <b>personalidad</b> es cómo habla y se comporta la marca: Brote es cálida y cercana; Lumen, prolija y experta.</p>
<p>Los <b>valores</b> sirven si se pueden verificar. “Somos sustentables” no dice nada; “usamos granos de productores locales y tazas reutilizables” sí.</p>
<div class="callout">Quedate con esto: una promesa vale lo que la experiencia que la respalda.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Cuál es un valor verificable?', o: ['“Somos sustentables”', '“Usamos tazas reutilizables y granos de productores locales”', '“Nos importa el planeta”'], a: 1, why: 'Cualquiera lo puede comprobar.' },
            { t: 'tf', q: 'La personalidad de la marca se nota en cómo habla y se comporta.', a: true, why: 'Tono, trato y estilo construyen la personalidad.' },
            { t: 'choice', q: 'Lumen promete “llegan sanas”, pero suben los reclamos por roturas. ¿Qué pasa con la marca?', o: ['Nada, el mensaje sigue igual', 'Se gasta: la promesa no se cumple', 'Mejora porque hay más ventas'], a: 1, why: 'Cada promesa incumplida le resta credibilidad.' },
          ],
        },
        {
          id: 'm3s1l3', title: 'Pruebas, no adjetivos', icon: '🧾',
          read: [
            { h: 'Decir no alcanza', body: `
<p>Roble dice que sus muebles son “resistentes y de calidad”. Todos los talleres dicen lo mismo. Esas palabras no convencen a nadie.</p>
<p>Lo que convence son <b>pruebas</b>:</p>
<ul>
<li>Mostrar la madera maciza y las uniones por dentro.</li>
<li>Una garantía de cinco años por escrito.</li>
<li>Fotos de muebles con diez años de uso en casas de clientes.</li>
<li>Reseñas con nombre y foto.</li>
</ul>` },
            { h: 'Consistencia', body: `
<p>La marca también se construye siendo <b>consistente</b>: que el producto, la atención, el empaque y los mensajes digan lo mismo. Si los anuncios de Roble prometen calidad y el presupuesto llega con faltas de ortografía, la promesa pierde fuerza.</p>
<div class="callout">Quedate con esto: cambiá cada adjetivo por una prueba.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué hace más creíble la promesa “resistentes” de Roble?', o: ['Repetir la palabra en cada anuncio', 'Mostrar las uniones por dentro y dar garantía escrita', 'Usar una tipografía más gruesa'], a: 1, why: 'Una prueba concreta convence más que un adjetivo.' },
            { t: 'tf', q: 'Un presupuesto descuidado puede debilitar la marca aunque los anuncios sean buenos.', a: true, why: 'Cada contacto con el cliente suma o resta credibilidad.' },
            { t: 'open', q: 'Elegí la promesa principal de Roble. ¿Qué evidencia concreta la respalda?', model: `<p>Promesa: “Muebles que entran justo y duran años.”</p><p>Evidencia: medición en el lugar antes de fabricar, fotos de muebles con años de uso en casas de clientes, garantía escrita de varios años y reseñas reales que mencionen el calce y la duración.</p>`, points: ['Elige una promesa concreta', 'Propone pruebas verificables', 'Incluye garantía o reseñas reales', 'Evita adjetivos sin respaldo'] },
          ],
        },
      ],
    },
    {
      code: '3.2', title: 'Posicionamiento',
      lessons: [
        {
          id: 'm3s2l1', title: 'Elegir una diferencia', icon: '📍',
          read: [
            { h: 'Un lugar en la mente', body: `
<p><b>Posicionar</b> es lograr que, cuando alguien piense en cierta necesidad, tu marca aparezca como una opción clara y distinta.</p>
<p>Para eso hay que elegir tres cosas:</p>
<ol>
<li><b>Para quién</b>: el segmento.</li>
<li><b>Frente a qué</b>: las alternativas con las que te comparan.</li>
<li><b>Por qué vos</b>: una diferencia que a ese público le importe.</li>
</ol>` },
            { h: 'El error de siempre', body: `
<p>“Calidad, precio y buena atención.” Si lo dicen todos, no diferencia a nadie.</p>
<p>Una diferencia sirve si es <b>relevante</b> (le importa al cliente), <b>creíble</b> (la podés probar) y <b>distinta</b> (la competencia no la ocupa).</p>
<div class="callout">Quedate con esto: si tu diferencia podría estar en el cartel de cualquier competidor, no es una diferencia.</div>` },
          ],
          ex: [
            { t: 'order', q: 'Ordená las tres elecciones del posicionamiento.', items: ['Para quién', 'Frente a qué alternativas', 'Por qué vos'], why: 'La diferencia solo tiene sentido frente a un público y unas alternativas.' },
            { t: 'choice', q: '¿Cuál es una diferencia útil para Brote?', o: ['“Calidad y buena atención”', '“El único café del barrio con zona silenciosa para trabajar”', '“El mejor café”'], a: 1, why: 'Es relevante, concreta y la competencia no la ocupa.' },
            { t: 'match', q: 'Uní cada condición con su pregunta.', pairs: [['Relevante', '¿Le importa al cliente?'], ['Creíble', '¿La podemos probar?'], ['Distinta', '¿La competencia no la ocupa?']] },
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
          id: 'm3s2l2', title: 'Lo que cuesta sostener una posición', icon: '⚖️',
          read: [
            { h: 'Toda posición tiene un precio', body: `
<p>Si Brote quiere ser “el lugar silencioso para trabajar”, tiene que aceptar renuncias:</p>
<ul>
<li>No poner música fuerte aunque a algunos clientes les guste.</li>
<li>No apurar a la gente para rotar mesas.</li>
<li>No hacer eventos ruidosos a la mañana.</li>
</ul>
<p>Esas renuncias tienen un costo: quizás vende menos cafés por mesa. A cambio gana clientes fieles que vuelven todos los días.</p>` },
            { h: 'Si no renunciás, no te posicionás', body: `
<p>Una marca que quiere ser todo para todos termina sin lugar en la mente de nadie. La renuncia es lo que vuelve creíble la posición.</p>
<div class="callout">Quedate con esto: preguntate qué negocio estás dispuesta a dejar pasar para sostener tu diferencia.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Sostener una posición puede implicar perder algunas ventas.', a: true, why: 'Las renuncias tienen costo, pero hacen creíble la diferencia.' },
            { t: 'choice', q: 'Si Brote quiere ser el lugar silencioso, ¿qué NO debería hacer?', o: ['Wifi estable', 'Karaoke a las 10 de la mañana', 'Mesas con enchufes'], a: 1, why: 'Contradice la promesa principal.' },
            { t: 'open', q: 'Lumen quiere posicionarse por “asesoramiento experto”. ¿Qué renuncia exige sostener esa posición?', model: `<p>Exige dedicar tiempo a cada cliente: responder dudas, recomendar medidas y estilos. Eso implica renunciar a competir con las tiendas que venden más barato sin atención, y a vender productos que el equipo no conoce bien.</p><p>También puede requerir no aceptar más pedidos de los que el equipo puede asesorar bien.</p>`, points: ['Nombra una renuncia concreta', 'Reconoce su costo', 'Explica por qué vuelve creíble la posición', 'Menciona límites de capacidad o catálogo'] },
          ],
        },
      ],
    },
    {
      code: '3.3', title: 'Comunicación estratégica',
      lessons: [
        {
          id: 'm3s3l1', title: 'Comunicar no es publicar mucho', icon: '📢',
          read: [
            { h: 'Menos ruido, más avance', body: `
<p>Brote publicaba todos los días: fotos de cafés, frases motivacionales, memes. Muchos “me gusta”, pocas visitas nuevas.</p>
<p><b>Comunicar</b> es elegir qué necesita entender cada persona para dar el próximo paso en su decisión. No se trata de cantidad sino de dirección.</p>` },
            { h: 'Barreras y momentos', body: `
<p>Cada mensaje debería responder a una barrera concreta:</p>
<ul>
<li>“No sé si hay lugar para trabajar” → mostrar el espacio y los horarios tranquilos.</li>
<li>“Debe ser caro” → mostrar el abono semanal.</li>
<li>“No sé si se puede estar mucho tiempo” → contar que nadie te apura.</li>
</ul>
<div class="callout">Quedate con esto: cada pieza debería ayudar a alguien a avanzar un paso.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Publicar todos los días asegura una buena comunicación.', a: false, why: 'Sin una dirección clara, mucho contenido no mueve decisiones.' },
            { t: 'match', q: 'Uní cada barrera con el mensaje que la responde.', pairs: [['“¿Habrá lugar para trabajar?”', 'Mostrar el espacio y horarios tranquilos'], ['“Debe ser caro”', 'Mostrar el abono semanal'], ['“¿Me van a apurar?”', 'Contar que nadie te apura']] },
            { t: 'choice', q: '¿Qué pregunta guía una buena pieza de comunicación?', o: ['¿Cuántos likes va a tener?', '¿Qué necesita entender esta persona para avanzar?', '¿Está de moda?'], a: 1, why: 'El objetivo es mover una decisión, no juntar reacciones.' },
          ],
        },
        {
          id: 'm3s3l2', title: 'El brief de un mensaje', icon: '📝',
          read: [
            { h: 'Siete preguntas antes de crear', body: `
<p>Un <b>brief</b> es una hoja corta que ordena qué tiene que lograr una pieza. Responde:</p>
<ol>
<li><b>Objetivo</b>: ¿qué queremos que pase?</li>
<li><b>Audiencia</b>: ¿a quién le hablamos?</li>
<li><b>Idea central</b>: ¿qué tiene que quedar?</li>
<li><b>Evidencia</b>: ¿por qué nos creerían?</li>
<li><b>Tono</b>: ¿cómo lo decimos?</li>
<li><b>Canal</b>: ¿dónde lo ve?</li>
<li><b>Acción</b>: ¿qué tiene que hacer después?</li>
</ol>` },
            { h: 'Coherente, no repetido', body: `
<p>Con un buen brief, Brote puede hacer un video, un cartel y un mensaje de WhatsApp distintos que dicen lo mismo de fondo. Así la marca es coherente sin repetir la misma pieza en todos lados.</p>
<div class="callout">Quedate con esto: si no podés completar el brief, todavía no sabés qué querés comunicar.</div>` },
          ],
          ex: [
            { t: 'order', q: 'Ordená las primeras preguntas del brief.', items: ['Objetivo', 'Audiencia', 'Idea central', 'Evidencia'], why: 'Primero qué querés lograr y con quién; después qué decir y cómo probarlo.' },
            { t: 'choice', q: '¿Qué parte del brief responde “¿por qué nos creerían?”?', o: ['Tono', 'Evidencia', 'Canal'], a: 1, why: 'La evidencia sostiene la idea central.' },
            { t: 'tf', q: 'Ser coherente significa usar exactamente la misma pieza en todos los canales.', a: false, why: 'Coherencia es la misma idea de fondo adaptada a cada lugar.' },
          ],
        },
        {
          id: 'm3s3l3', title: 'Del reconocimiento al cierre', icon: '🪜',
          read: [
            { h: 'Cada momento pide otra cosa', body: `
<ul>
<li>Alguien que <b>no conoce</b> a Roble necesita entender el problema: “¿Te cuesta encontrar muebles que entren justo?”</li>
<li>Alguien que <b>está comparando</b> necesita razones para elegir: trabajos anteriores, garantía, reseñas.</li>
<li>Alguien <b>listo para comprar</b> necesita condiciones claras: precio, plazo, formas de pago, disponibilidad.</li>
</ul>` },
            { h: 'El error de saltarse pasos', body: `
<p>Mostrarle precio y cuotas a alguien que nunca escuchó de Roble no funciona. Y hablarle del problema a alguien que ya quiere comprar lo aburre y lo hace dudar.</p>
<div class="callout">Quedate con esto: decí lo que cada persona necesita según en qué momento está.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada momento con lo que necesita.', pairs: [['No conoce la marca', 'Entender el problema'], ['Está comparando', 'Razones para elegir'], ['Listo para comprar', 'Condiciones claras']] },
            { t: 'choice', q: 'A alguien que ya pidió presupuesto, ¿qué le mandás?', o: ['Un video sobre por qué importa el diseño', 'Plazo de entrega, formas de pago y disponibilidad', 'Un meme'], a: 1, why: 'Está cerca de decidir: necesita condiciones y confianza.' },
            { t: 'open', q: '¿Qué cambiarías del mensaje de Roble entre alguien que recién lo descubre y alguien listo para comprar?', model: `<p>A quien recién descubre a Roble le hablaría del problema y del resultado: “Muebles que entran justo en tu espacio”, con fotos de antes y después.</p><p>A quien está listo para comprar le daría certezas: plazo de entrega, garantía, formas de pago y cómo es la instalación. Cambia el objetivo del mensaje: despertar interés en un caso, sacar dudas para cerrar en el otro.</p>`, points: ['Distingue los dos momentos', 'En el primero habla del problema o resultado', 'En el segundo da condiciones y certezas', 'Explica que cambia el objetivo del mensaje'] },
          ],
        },
      ],
    },
    {
      code: '3.4', title: 'Creatividad y contenidos',
      lessons: [
        {
          id: 'm3s4l1', title: 'Creatividad que vende', icon: '🎨',
          read: [
            { h: 'Ingeniosa no es lo mismo que eficaz', body: `
<p>Lumen hizo un anuncio muy ingenioso: una lámpara con forma de signo de pregunta y la frase “¿Y si cambiás?”. Ganó comentarios… y nadie entendió qué vendía.</p>
<p>La creatividad eficaz une dos cosas: una idea <b>que se recuerda</b> y un <b>efecto buscado</b> (que entiendan, que consulten, que compren).</p>` },
            { h: 'Lo básico primero', body: `
<p>Antes de ser original, una pieza tiene que ser clara:</p>
<ul>
<li>¿Se entiende qué es y para quién?</li>
<li>¿Se ve la marca?</li>
<li>¿Queda claro qué hacer después?</li>
</ul>
<div class="callout">Quedate con esto: una pieza ingeniosa puede fracasar si nadie entiende qué vende.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Si una pieza genera muchos comentarios, es creatividad eficaz.', a: false, why: 'Tiene que lograr el efecto buscado, no solo llamar la atención.' },
            { t: 'choice', q: '¿Qué le faltó al anuncio de Lumen?', o: ['Más colores', 'Que se entendiera qué vendía', 'Más texto legal'], a: 1, why: 'Sin claridad, la atención no se convierte en interés por el producto.' },
            { t: 'choice', q: '¿Qué une la creatividad eficaz?', o: ['Una idea memorable y un efecto buscado', 'Muchas variantes', 'Un presupuesto grande'], a: 0, why: 'Recordarla sirve si mueve la decisión que se buscaba.' },
          ],
        },
        {
          id: 'm3s4l2', title: 'Variedad de verdad', icon: '🎲',
          read: [
            { h: 'Muchas piezas iguales no son variedad', body: `
<p>Hacer diez versiones del mismo anuncio cambiando el color del fondo no es diversidad creativa. Es el mismo mensaje diez veces.</p>
<p>La variedad real combina:</p>
<ul>
<li><b>Ángulos</b>: el problema, el resultado, la prueba, la comparación.</li>
<li><b>Formatos</b>: video corto, foto, testimonio, demostración.</li>
<li><b>Personas</b>: distintos segmentos con distintos motivos.</li>
</ul>` },
            { h: 'Un ejemplo con Flow', body: `
<ul>
<li>Ángulo dolor: “¿Te duele la espalda después de trabajar sentada?”</li>
<li>Ángulo resultado: “En tres meses, más fuerza y mejor postura.”</li>
<li>Ángulo prueba: una alumna real contando su experiencia.</li>
</ul>
<p>Tres ideas distintas que pueden llegar a personas distintas.</p>
<div class="callout">Quedate con esto: variá la idea, no solo el decorado.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Cambiar el color de fondo crea una pieza con otro ángulo.', a: false, why: 'El ángulo es la idea que se comunica, no la estética.' },
            { t: 'match', q: 'Uní cada ángulo con un ejemplo de Flow.', pairs: [['Dolor', '“¿Te duele la espalda?”'], ['Resultado', '“Más fuerza en tres meses”'], ['Prueba', 'Una alumna contando su experiencia']] },
            { t: 'choice', q: '¿Qué combina la diversidad creativa real?', o: ['Colores y tipografías', 'Ángulos, formatos y personas', 'Horarios de publicación'], a: 1, why: 'Esas tres dimensiones cambian a quién le llega y qué entiende.' },
          ],
        },
        {
          id: 'm3s4l3', title: 'Elegir ideas sin orgullo', icon: '🧐',
          read: [
            { h: 'Dos momentos separados', body: `
<p>Generar ideas y elegirlas son trabajos distintos:</p>
<ul>
<li>Al <b>generar</b>, todo vale: cantidad, mezcla, ideas raras.</li>
<li>Al <b>elegir</b>, hay que ser exigente y usar criterios.</li>
</ul>
<p>Mezclar los dos momentos hace que se descarten ideas antes de tiempo o que se defiendan malas ideas por cariño.</p>` },
            { h: 'Criterios para elegir', body: `
<ul>
<li><b>Claridad</b>: ¿se entiende rápido?</li>
<li><b>Relevancia</b>: ¿le importa al público?</li>
<li><b>Atención</b>: ¿frena el scroll?</li>
<li><b>Identidad</b>: ¿se reconoce la marca?</li>
<li><b>Efecto</b>: ¿mueve la acción buscada?</li>
</ul>
<p>Y probalas con personas que no participaron en crearlas: el equipo siempre entiende sus propias ideas.</p>
<div class="callout">Quedate con esto: corregí sin defender la pieza por orgullo.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Conviene criticar las ideas mientras se generan.', a: false, why: 'Frena la producción; el filtro va en otro momento.' },
            { t: 'choice', q: '¿A quién conviene mostrarle una pieza para probarla?', o: ['Al equipo que la creó', 'A personas que no participaron', 'Al dueño solamente'], a: 1, why: 'El equipo ya sabe qué quiso decir; alguien de afuera muestra si se entiende.' },
            { t: 'open', q: 'Al equipo le encanta una idea, pero dudás que funcione. ¿Qué criterio usarías para decidir si descartarla?', model: `<p>La evaluaría con los criterios acordados antes: si se entiende rápido, si le importa al público, si se reconoce la marca y si lleva a la acción buscada.</p><p>Después la mostraría a personas del público que no participaron. Si no entienden qué vendemos o no los mueve a actuar, la descartaría o la ajustaría, aunque al equipo le guste.</p>`, points: ['Usa criterios definidos de antemano', 'Menciona claridad y efecto', 'Propone probar con gente de afuera', 'Separa el gusto del equipo de la decisión'] },
          ],
        },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, escribí su promesa en una frase y tres pruebas que la respalden.',
    'Completá su frase de posicionamiento y anotá una renuncia que exige.',
    'Armá un brief de siete preguntas para su próxima pieza de comunicación.',
    'Revisá sus últimas cinco publicaciones: ¿qué barrera responde cada una?',
  ],
  challenge: {
    key: 'm3', title: 'Brote quiere “una marca más linda”',
    intro: `
<p>La dueña de Brote quiere cambiar el logo y los colores porque siente que “la marca no transmite”. Lo que sabés:</p>
<ul>
<li>Los clientes fieles dicen que vienen porque pueden trabajar tranquilos.</li>
<li>En las reseñas aparece seguido “a la tarde hay mucho ruido”.</li>
<li>Las redes muestran sobre todo fotos de cafés y frases.</li>
<li>Hay poca plata para invertir este trimestre.</li>
</ul>`,
    steps: [
      { t: 'choice', q: '¿Cuál es el problema de marca más probable?', o: ['El logo es feo', 'La experiencia de la tarde contradice la promesa, y las redes no la comunican', 'Faltan seguidores'], a: 1, why: 'La imagen se arma con la experiencia y con lo que se muestra.' },
      { t: 'choice', q: '¿Qué dato falta?', o: ['Qué tipografía usa la competencia', 'En qué horarios viene cada tipo de cliente y qué valora', 'Cuántas tazas hay'], a: 1, why: 'Sirve para decidir qué prometer y cuándo.' },
      { t: 'tf', q: 'Con poco presupuesto, cambiar el logo es la acción de mayor impacto.', a: false, why: 'No resuelve la contradicción entre promesa y experiencia.' },
      { t: 'open', q: 'Proponé dos alternativas para Brote y cuál recomendarías.', model: `<p><b>A:</b> rediseñar logo y colores. Cambia la superficie, cuesta plata y no toca el problema de fondo.</p><p><b>B:</b> definir la promesa (“lugar tranquilo para trabajar”), crear una zona o franja horaria silenciosa y mostrarla en redes con fotos del espacio y testimonios.</p><p>Recomiendo B: alinea experiencia y comunicación con lo que los clientes ya valoran y cuesta poco.</p>`, points: ['Detecta la distancia entre identidad e imagen', 'Plantea dos alternativas', 'Prioriza cambiar la experiencia', 'Considera la restricción de presupuesto'] },
    ],
    reflect: '¿Cómo medirías si la marca de Brote mejoró dentro de tres meses?',
    solution: `
<p><strong>Diagnóstico:</strong> la promesa que los clientes valoran (trabajar tranquilo) no se cumple a la tarde y no aparece en lo que Brote comunica.</p>
<p><strong>Datos que faltan:</strong> horarios por tipo de cliente, qué valoran los fieles, qué dicen las reseñas por franja.</p>
<p><strong>Recomendación:</strong> ajustar la experiencia y comunicar la promesa con pruebas; el logo puede esperar.</p>
<p><strong>Cómo medir:</strong> menciones a “tranquilo” o “ruido” en reseñas, clientes que vuelven por semana y ventas de abonos.</p>`,
  },
  cards: [
    { q: 'Marca', a: 'El conjunto de asociaciones y expectativas que la gente tiene sobre una empresa.' },
    { q: 'Identidad vs. imagen', a: 'Identidad: lo que la empresa quiere proyectar. Imagen: lo que la gente percibe.' },
    { q: 'Posicionamiento', a: 'Elegir para quién, frente a qué alternativas y por qué vos, con una diferencia relevante, creíble y distinta.' },
    { q: 'Brief', a: 'Objetivo, audiencia, idea central, evidencia, tono, canal y acción.' },
    { q: 'Diversidad creativa', a: 'Variar ángulos, formatos y personas, no solo la estética.' },
  ],
});
