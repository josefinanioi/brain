/* Brain — Módulo 01 · Fundamentos del marketing (Nivel 1).
   Cada módulo se divide en unidades (sections) y cada unidad en lecciones.
   Empresas ficticias del curso: Roble (muebles a medida), Lumen (tienda online de lámparas),
   Flow (estudio de pilates) y Brote (cafetería de barrio). */

UNITS.push({
  n: 1,
  phase: 'f1',
  title: 'Fundamentos del marketing',
  goal: 'Entender qué es marketing de verdad y cómo se conecta con las decisiones del negocio.',
  summary: [
    'Marketing es decidir a quién servir, qué ofrecer y cómo hacerlo llegar; la publicidad es solo una herramienta.',
    'Un mercado no es toda la gente: es quien tiene el problema, puede pagar y podés alcanzar.',
    'Una estrategia se nota en lo que elegís dejar de hacer.',
  ],
  sections: [
    {
      code: '1.1', title: 'Marketing y negocio',
      lessons: [
        {
          id: 'm1s1l1', title: 'Marketing no es publicidad', icon: '📣',
          read: [
            { h: 'Conocé a las empresas del curso', body: `
<p>Para aprender vamos a acompañar a cuatro negocios inventados. Van a aparecer una y otra vez, y en cada módulo vas a ver cómo crecen:</p>
<ul>
<li>🪑 <b>Roble</b>: un taller de muebles a medida. Vende por WhatsApp.</li>
<li>💡 <b>Lumen</b>: una tienda online de lámparas.</li>
<li>🧘 <b>Flow</b>: un estudio de pilates que cobra una cuota por mes.</li>
<li>☕ <b>Brote</b>: una cafetería de barrio.</li>
</ul>
<p>Son negocios distintos, pero todos tienen que resolver lo mismo: a quién venderle, qué ofrecer y cómo ganar plata haciéndolo.</p>` },
            { h: 'La palabra que todos usan mal', body: `
<p>Si le preguntás a alguien qué es marketing, probablemente diga “publicidad” o “redes sociales”. Es como decir que cocinar es prender la hornalla.</p>
<p><b>Marketing</b> es el conjunto de decisiones con las que una empresa:</p>
<ol>
<li>Descubre qué necesita la gente.</li>
<li>Elige a quién quiere servir.</li>
<li>Arma una oferta que valga la pena.</li>
<li>Hace que esa oferta llegue a esas personas.</li>
</ol>
<p>La publicidad aparece recién en el último paso, y es solo una de las formas de hacerlo.</p>
<div class="callout">Quedate con esto: si la oferta no sirve, la mejor publicidad del mundo solo acelera el fracaso.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Marketing y publicidad son lo mismo.', a: false, why: 'La publicidad es una herramienta dentro de marketing, que también decide a quién servir y qué ofrecer.' },
            { t: 'order', q: 'Ordená las decisiones de marketing, de la primera a la última.', items: ['Descubrir qué necesita la gente', 'Elegir a quién servir', 'Armar la oferta', 'Hacer que la oferta llegue'], why: 'Primero entendés, después elegís, después construís y recién al final comunicás.' },
            { t: 'choice', q: 'Brote vende poco. El dueño quiere hacer anuncios. ¿Qué preguntarías primero?', o: ['¿Cuánto cuesta un anuncio?', '¿Qué busca la gente del barrio que hoy no encuentra?', '¿Qué color tiene el logo?'], a: 1, why: 'Antes de comunicar, hay que saber si la oferta resuelve algo que la gente quiere.' },
          ],
        },
        {
          id: 'm1s1l2', title: 'Crear, comunicar y capturar valor', icon: '💎',
          read: [
            { h: 'Tres trabajos distintos', body: `
<p>Todo negocio que funciona hace bien tres cosas:</p>
<ul>
<li><b>Crear valor</b>: resolver un problema real. Brote ofrece un café rico y un lugar tranquilo para trabajar.</li>
<li><b>Comunicar valor</b>: que la gente entienda qué ganás eligiéndolo. Que el barrio sepa que en Brote hay wifi y enchufes.</li>
<li><b>Capturar valor</b>: que eso se convierta en ingresos y ganancia. Que quien se queda tres horas compre algo más que un café.</li>
</ul>` },
            { h: 'Se puede fallar en cualquiera', body: `
<p>Una campaña puede ser un éxito en clics y fallar en los otros trabajos:</p>
<ul>
<li>Mucha gente entra a la web de Lumen, pero las lámparas llegan rotas: falla la <b>creación</b> de valor.</li>
<li>Las lámparas son buenas, pero las fotos no muestran el tamaño: falla la <b>comunicación</b>.</li>
<li>Se venden muchas, pero con tanto descuento que no queda nada: falla la <b>captura</b>.</li>
</ul>
<div class="callout strong">Cuando algo no funciona, primero preguntate en cuál de los tres trabajos está el problema.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada trabajo con un ejemplo de Brote.', pairs: [['Crear valor', 'Un lugar tranquilo para trabajar'], ['Comunicar valor', 'Contar que hay wifi y enchufes'], ['Capturar valor', 'Que quien se queda compre algo más']] },
            { t: 'choice', q: 'Lumen vende mucho, pero con tanto descuento que no gana. ¿Qué trabajo falla?', o: ['Crear valor', 'Comunicar valor', 'Capturar valor'], a: 2, why: 'El producto se vende, pero la empresa no se queda con suficiente plata.' },
            { t: 'choice', q: 'Las lámparas llegan rotas y crecen las devoluciones. ¿Qué trabajo falla?', o: ['Crear valor', 'Comunicar valor', 'Capturar valor'], a: 0, why: 'Lo que recibe el cliente no resuelve su problema: se rompe la promesa del producto.' },
            { t: 'tf', q: 'Si una campaña tiene muchos clics, los tres trabajos están bien hechos.', a: false, why: 'Los clics solo muestran interés. Puede fallar la oferta o la ganancia.' },
          ],
        },
        {
          id: 'm1s1l3', title: '¿Problema de publicidad o de oferta?', icon: '🩺',
          read: [
            { h: 'El caso de Roble', body: `
<p>A Roble le llegan muchas consultas por WhatsApp, pero casi nadie compra. Cuando preguntan el precio, la conversación se corta.</p>
<p>El dueño quiere invertir más en publicidad. Pero pensalo como un médico: antes de recetar, hay que diagnosticar.</p>
<ul>
<li>Si casi <b>nadie consulta</b>, puede ser un problema de publicidad: no te conocen.</li>
<li>Si <b>consultan y no compran</b>, el problema suele estar en la oferta, el precio o la forma de explicarlo.</li>
</ul>` },
            { h: 'Qué datos pedir', body: `
<p>Para separar un problema del otro, una directora pide:</p>
<ul>
<li>¿En qué momento se corta la conversación? ¿Al ver el precio, el plazo, las formas de pago?</li>
<li>¿Qué dicen quienes no compran? ¿“Es caro”, “lo pienso”, “no me respondieron”?</li>
<li>¿Contra qué nos comparan? ¿Muebles de cadena, otro taller, no comprar?</li>
</ul>
<p>En Roble se descubrió que la gente no entendía por qué una mesa a medida costaba el doble que una de cadena. No faltaba publicidad: faltaba explicar el valor (madera maciza, medida exacta, garantía).</p>
<div class="callout">Quedate con esto: más publicidad sobre una oferta mal explicada trae más gente que tampoco compra.</div>` },
          ],
          ex: [
            { t: 'choice', q: 'Una marca casi no recibe consultas. ¿Qué es más probable?', o: ['Un problema de visibilidad', 'Un problema de precio', 'Un problema de stock'], a: 0, why: 'Si nadie pregunta, lo primero es que no te conocen o no te encuentran.' },
            { t: 'choice', q: 'Consultan mucho y la charla se corta al dar el precio. ¿Dónde mirás?', o: ['En los anuncios', 'En cómo se explica el valor frente a las alternativas', 'En el logo'], a: 1, why: 'El interés existe; lo que falla es que el precio no se justifica a ojos del cliente.' },
            { t: 'tf', q: 'Antes de subir la publicidad conviene saber en qué momento se pierden los clientes.', a: true, why: 'Así sabés si el problema es atraer o convencer.' },
            { t: 'open', q: '¿Qué información pedirías para distinguir un problema de publicidad de uno de oferta?', model: `<p>Pediría ver el recorrido completo: cuántas personas consultan, cuántas reciben precio, cuántas compran y por qué se pierden las demás.</p><p>Si pocas personas consultan, el problema está en llegar. Si consultan y no compran, miraría qué dicen al irse, contra qué nos comparan y si entienden lo que ganan eligiéndonos.</p>`, points: ['Pide datos de cada paso, no solo del total', 'Separa “no nos conocen” de “nos conocen y no compran”', 'Busca los motivos de quienes no compran', 'Mira contra qué alternativas nos comparan'] },
          ],
        },
      ],
    },
    {
      code: '1.2', title: 'El mercado',
      lessons: [
        {
          id: 'm1s2l1', title: 'Qué es un mercado', icon: '🧺',
          read: [
            { h: 'No es “toda la gente”', body: `
<p>Flow abre un estudio de pilates. ¿Su mercado son todos los habitantes de la ciudad? No.</p>
<p>Un <b>mercado</b> son las personas (o empresas) que cumplen tres condiciones a la vez:</p>
<ol>
<li><b>Tienen la necesidad</b>: quieren ponerse en forma, cuidar la espalda, moverse.</li>
<li><b>Pueden pagar</b>: la cuota les entra en el bolsillo.</li>
<li><b>Tienen alternativas</b> y eligen entre ellas: gimnasio, yoga, salir a correr, no hacer nada.</li>
</ol>` },
            { h: 'Las alternativas también son mercado', body: `
<p>Para Flow, la competencia no son solo otros estudios de pilates. Es todo lo que la persona podría hacer en lugar de ir: el gimnasio de la cuadra, una app de ejercicios en casa o, muy seguido, <b>no hacer nada</b>.</p>
<p>A esas alternativas que resuelven la misma necesidad de otra forma se les dice <b>sustitutos</b>.</p>
<div class="callout">Quedate con esto: contar gente no alcanza. Importa cuántos tienen el problema, pueden pagar y te pueden elegir.</div>` },
          ],
          ex: [
            { t: 'order', q: 'Ordená cómo se va achicando el mercado de Flow.', items: ['Toda la ciudad', 'Quienes quieren hacer ejercicio', 'Quienes pueden pagar la cuota', 'Quienes viven o trabajan cerca'], why: 'Cada condición deja afuera a una parte de la gente.' },
            { t: 'tf', q: 'No hacer nada también es una alternativa con la que compite Flow.', a: true, why: 'Muchas veces la decisión real es entre hacer algo o seguir igual.' },
            { t: 'choice', q: '¿Qué es un sustituto?', o: ['Un producto igual de otra marca', 'Otra forma de resolver la misma necesidad', 'Un producto más barato'], a: 1, why: 'Una app de ejercicios es un sustituto del pilates: resuelve la necesidad de otra forma.' },
          ],
        },
        {
          id: 'u11l1', title: 'TAM, SAM y SOM', icon: '🌎',
          read: [
            { h: 'Cuánto mercado hay', body: `
<p>Pensá en una pizza:</p>
<ul>
<li><b>TAM</b>: la pizza entera. Todos los que alguna vez podrían comprar algo como lo tuyo.</li>
<li><b>SAM</b>: las porciones que llegás a servir. La parte que tu producto y tus canales pueden atender.</li>
<li><b>SOM</b>: las porciones que realmente te podés comer en uno a tres años.</li>
</ul>` },
            { h: 'Para qué sirve', body: `
<p>Si Brote ya atiende a casi todo su barrio, más publicidad en el barrio rinde poco: queda poca pizza. Para crecer tiene que buscar otra pizza: otro barrio, otro producto (tortas para llevar), otro canal (delivery).</p>
<p>Si en cambio tiene una porción chica de un mercado grande, el camino es ganar más de ese mismo mercado.</p>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada sigla con su parte de la pizza.', pairs: [['TAM', 'La pizza entera'], ['SAM', 'Las porciones que llegás a servir'], ['SOM', 'Lo que te podés comer en 1–3 años']] },
            { t: 'choice', q: 'Brote ya atiende a casi todo su barrio. ¿Por dónde crece?', o: ['Más publicidad en el mismo barrio', 'Otro barrio, otro producto u otro canal', 'Bajar precios'], a: 1, why: 'Queda poco para ganar en el mismo lugar.' },
            { t: 'tf', q: 'Si tenés una parte chica de un mercado grande, todavía podés crecer mucho ahí.', a: true, why: 'Queda mucha pizza por ganar.' },
          ],
        },
        {
          id: 'm1s2l2', title: 'El mercado que de verdad podés atender', icon: '🚚',
          read: [
            { h: 'Los límites reales', body: `
<p>Roble quiere vender en otra provincia. Hay miles de casas allá, ¿no? Sí, pero el mercado que de verdad puede atender depende de cosas muy concretas:</p>
<ul>
<li><b>Distribución</b>: ¿cómo llega una mesa de 80 kilos sin romperse?</li>
<li><b>Precio</b>: con el envío, ¿sigue siendo competitivo frente a un taller local?</li>
<li><b>Capacidad</b>: ¿el taller puede fabricar más sin atrasar los pedidos de siempre?</li>
</ul>` },
            { h: 'Tendencias', body: `
<p>El mercado también se mueve. Si cada vez más gente trabaja desde su casa, crece la demanda de escritorios y sillas cómodas. Si suben los alquileres, la gente vive en departamentos más chicos y busca muebles que se adapten al espacio.</p>
<p>Leer esas tendencias ayuda a decidir qué ofrecer antes de que lo pida todo el mundo.</p>
<div class="callout">Quedate con esto: el tamaño total del mercado no es tu demanda. La distribución, el precio y la capacidad la recortan.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué limita más el mercado de Roble en otra provincia?', o: ['La cantidad de casas', 'Cómo llevar los muebles, el precio con envío y la capacidad del taller', 'El nombre de la marca'], a: 1, why: 'Hay casas de sobra; lo que define si se puede vender es llegar a un precio razonable y poder fabricar.' },
            { t: 'tf', q: 'Una tendencia puede crear demanda para un producto nuevo.', a: true, why: 'Más trabajo desde casa, por ejemplo, aumenta la demanda de escritorios.' },
            { t: 'open', q: 'Roble no tiene distribuidores en la otra provincia. ¿Cómo cambia eso tu estimación de la oportunidad?', model: `<p>Sin distribuidores, Roble tiene que vender directo y mandar cada mueble. Eso sube el costo de cada venta, alarga los plazos y hace más difícil resolver problemas como una mesa dañada.</p><p>La oportunidad real es más chica que el número de casas: estimaría solo la gente que acepta esperar y pagar el envío, y probaría con pocas ventas antes de invertir fuerte.</p>`, points: ['Reconoce que sube el costo por venta (envío)', 'Menciona plazos y problemas de posventa', 'Achica la estimación a quien acepta esas condiciones', 'Propone probar en pequeño antes de invertir'] },
          ],
        },
      ],
    },
    {
      code: '1.3', title: 'El consumidor',
      lessons: [
        {
          id: 'm1s3l1', title: 'Por qué compra la gente', icon: '🧠',
          read: [
            { h: 'Cuatro motivos que se mezclan', body: `
<p>Una clienta compra una lámpara en Lumen. ¿Por qué? Casi nunca hay un solo motivo:</p>
<ul>
<li><b>Funcional</b>: necesita luz para leer.</li>
<li><b>Emocional</b>: le gusta cómo queda, la hace sentir en casa.</li>
<li><b>Social</b>: la vio en la casa de una amiga y quedó encantada.</li>
<li><b>De contexto</b>: se mudó y el departamento nuevo no tiene luz en el living.</li>
</ul>` },
            { h: 'Nadie compra en el vacío', body: `
<p>La gente no evalúa productos “en abstracto”. Compara alternativas con restricciones: poco tiempo, poca plata, miedo a equivocarse, desconfianza de una marca que no conoce.</p>
<p>Por eso un mismo producto se puede vender con mensajes muy distintos según qué motivo pesa más en cada persona.</p>
<div class="callout">Quedate con esto: no todos compran por precio. Si suponés que sí, vas a terminar regalando margen.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada motivo con un ejemplo de Lumen.', pairs: [['Funcional', 'Necesita luz para leer'], ['Emocional', 'Le gusta cómo queda'], ['Social', 'La vio en lo de una amiga'], ['De contexto', 'Se mudó y le falta luz']] },
            { t: 'tf', q: 'La mayoría de la gente compra solo por precio.', a: false, why: 'El precio pesa, pero se mezcla con lo funcional, lo emocional, lo social y el contexto.' },
            { t: 'choice', q: '¿Qué restricción puede frenar una compra aunque el producto guste?', o: ['Desconfiar de una marca que no conoce', 'Que el producto sea lindo', 'Que tenga buenas fotos'], a: 0, why: 'El miedo a equivocarse o a que no llegue frena muchas compras online.' },
          ],
        },
        {
          id: 'm1s3l2', title: 'El disparador de compra', icon: '⏰',
          read: [
            { h: 'El momento en que pasa algo', body: `
<p>Mucha gente piensa “algún día voy a hacer pilates” durante años. Un día le duele la espalda, el médico le dice que fortalezca la zona, y esa semana se anota en Flow.</p>
<p>Eso es un <b>disparador</b>: el hecho que convierte una intención vaga en una decisión.</p>
<ul>
<li>Roble: una mudanza, un casamiento, un bebé en camino.</li>
<li>Lumen: un departamento nuevo, una lámpara que se rompió.</li>
<li>Brote: un día de lluvia, una reunión de trabajo cerca.</li>
</ul>` },
            { h: 'Por qué importa', body: `
<p>Si sabés qué dispara la compra, sabés <b>cuándo</b> hablarle a la gente y <b>qué</b> decirle. A quien se está mudando, Roble le puede hablar de muebles que se adaptan a espacios nuevos; a quien espera un bebé, de muebles seguros.</p>
<p>También sirve para detectar <b>objeciones</b> (lo que frena la compra) e <b>influenciadores</b> (quién más opina: la pareja, el médico, una amiga).</p>
<div class="callout">Quedate con esto: la gente no compra cuando vos querés vender, sino cuando le pasa algo.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Cuál es un disparador de compra para Roble?', o: ['Que haya un anuncio nuevo', 'Que la persona se mude', 'Que sea lunes'], a: 1, why: 'La mudanza crea la necesidad concreta de muebles.' },
            { t: 'match', q: 'Uní cada concepto con su ejemplo en Flow.', pairs: [['Disparador', 'Dolor de espalda'], ['Objeción', '“No tengo tiempo”'], ['Influenciador', 'El médico que lo recomienda']] },
            { t: 'tf', q: 'Conocer el disparador ayuda a decidir cuándo comunicar.', a: true, why: 'Le hablás a la gente en el momento en que la necesidad aparece.' },
          ],
        },
        {
          id: 'm1s3l3', title: 'Lo que dicen y lo que hacen', icon: '🎭',
          read: [
            { h: 'La trampa de preguntar', body: `
<p>Si le preguntás a alguien “¿pagarías más por una lámpara de mejor calidad?”, casi todos dicen que sí. Después compran la más barata.</p>
<p>No es que mientan: la gente es mala prediciendo lo que va a hacer. Por eso importa más <b>lo que hizo</b> que lo que dice que haría.</p>` },
            { h: 'Cómo preguntar mejor', body: `
<p>En vez de preguntar por el futuro, preguntá por el pasado reciente:</p>
<ul>
<li>❌ “¿Comprarías una mesa a medida?”</li>
<li>✅ “Contame la última vez que compraste un mueble. ¿Qué pasó para que lo buscaras? ¿Qué opciones miraste? ¿Por qué elegiste esa?”</li>
</ul>
<p>Las historias concretas muestran el disparador, las alternativas reales y lo que de verdad pesó en la decisión.</p>
<div class="callout">Quedate con esto: confiá más en comportamientos que en intenciones.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Si la gente dice que pagaría más, seguro lo va a hacer.', a: false, why: 'Lo que la gente dice que haría y lo que hace suelen ser distintos.' },
            { t: 'choice', q: '¿Qué pregunta da información más confiable?', o: ['“¿Comprarías en Roble?”', '“Contame la última vez que compraste un mueble”', '“¿Te gusta nuestra marca?”'], a: 1, why: 'Una historia real muestra qué pasó de verdad, no lo que la persona imagina.' },
            { t: 'open', q: 'Querés descubrir el verdadero disparador de compra de los clientes de Flow. ¿Qué preguntarías en una entrevista?', model: `<p>Le pediría a alumnas recientes que me cuenten la historia: qué estaba pasando en su vida cuando decidieron empezar, cuánto tiempo venían pensándolo, qué otras opciones miraron y qué las hizo elegir Flow.</p><p>Evitaría preguntas que sugieren la respuesta (“¿viniste por la calidad?”) y preguntaría por hechos concretos del pasado.</p>`, points: ['Entrevista a clientes reales y recientes', 'Pregunta por lo que pasó, no por lo que harían', 'Indaga alternativas que consideraron', 'Evita preguntas que sugieren la respuesta'] },
          ],
        },
      ],
    },
    {
      code: '1.4', title: 'La estrategia de marketing',
      lessons: [
        {
          id: 'm1s4l1', title: 'Estrategia y tácticas', icon: '♟️',
          read: [
            { h: 'El mapa y los pasos', body: `
<p>La <b>estrategia</b> es el mapa: define dónde competir, a quién priorizar, qué valor ofrecer y a qué renunciar.</p>
<p>Las <b>tácticas</b> son los pasos concretos: anuncios, posteos, promociones, eventos. Ejecutan la estrategia.</p>
<p>Sin estrategia, las tácticas son movimiento sin dirección: mucho trabajo, poco resultado.</p>` },
            { h: 'Un ejemplo con Brote', body: `
<p>Estrategia de Brote: <em>“Ser el lugar del barrio para trabajar tranquilo de mañana, para gente que trabaja desde casa, con buen café y enchufes.”</em></p>
<p>Tácticas que se desprenden:</p>
<ul>
<li>Abonos de cafés para la semana.</li>
<li>Mesas grandes y wifi estable.</li>
<li>Posteos mostrando el espacio a las 9 de la mañana.</li>
</ul>
<p>Y lo que la estrategia descarta: música fuerte, mesas chicas para rotar rápido, promociones de noche.</p>` },
          ],
          ex: [
            { t: 'match', q: 'Clasificá cada decisión.', pairs: [['A quién priorizar', 'Estrategia'], ['Un posteo del jueves', 'Táctica'], ['Qué valor ofrecer', 'Estrategia'], ['Un descuento de fin de semana', 'Táctica']] },
            { t: 'tf', q: 'Hacer muchas tácticas compensa no tener estrategia.', a: false, why: 'Sin dirección, las acciones no se suman entre sí.' },
            { t: 'choice', q: 'Según su estrategia, ¿qué NO haría Brote?', o: ['Wifi estable', 'Música fuerte para rotar mesas rápido', 'Abonos semanales'], a: 1, why: 'Iría contra el valor elegido: un lugar tranquilo para trabajar.' },
          ],
        },
        {
          id: 'm1s4l2', title: 'Del objetivo de negocio al de marketing', icon: '🎯',
          read: [
            { h: 'Empezá por lo que necesita la empresa', body: `
<p>Los objetivos de marketing no nacen solos: se desprenden de un objetivo de negocio.</p>
<ul>
<li>Si el negocio necesita <b>crecer en ventas</b>, marketing puede buscar más clientes o más conversión.</li>
<li>Si necesita <b>más rentabilidad</b>, marketing puede empujar los productos que dejan más, en vez de traer más consultas.</li>
<li>Si necesita <b>caja</b>, marketing puede promover pagos al contado o vender stock parado.</li>
</ul>` },
            { h: 'Que se pueda medir', body: `
<p>“Mejorar la marca” no es un objetivo: no sabés cuándo lo cumpliste. Un buen objetivo dice qué, cuánto y para cuándo.</p>
<ul>
<li>❌ “Tener más presencia.”</li>
<li>✅ “Que 3 de cada 10 clientes de Brote compren el abono semanal antes de fin de año.”</li>
</ul>
<div class="callout">Quedate con esto: si el objetivo es rentabilidad, conseguir más consultas puede ser menos útil que vender mejor lo que ya se vende.</div>` },
          ],
          ex: [
            { t: 'choice', q: 'Brote necesita ganar más, no vender más cafés. ¿Qué objetivo de marketing encaja?', o: ['Duplicar los seguidores', 'Que más clientes sumen algo para comer con el café', 'Hacer más descuentos'], a: 1, why: 'Sube lo que deja cada cliente sin depender de traer gente nueva.' },
            { t: 'choice', q: '¿Cuál es un objetivo bien escrito?', o: ['“Mejorar la marca”', '“Que 30% de los clientes compre el abono antes de diciembre”', '“Estar en todas las redes”'], a: 1, why: 'Dice qué, cuánto y para cuándo.' },
            { t: 'tf', q: 'Los objetivos de marketing se definen después de los objetivos del negocio.', a: true, why: 'Marketing está al servicio de lo que la empresa necesita lograr.' },
          ],
        },
        {
          id: 'm1s4l3', title: 'Elegir es renunciar', icon: '✂️',
          read: [
            { h: 'No se puede todo', body: `
<p>Una estrategia que quiere conformar a todos no es estrategia. Elegir un público, un valor y un precio implica <b>dejar cosas afuera</b>.</p>
<p>Lumen decidió vender lámparas de diseño a precio alto. Eso significa renunciar a competir con las lámparas baratas del supermercado, aunque ese mercado sea más grande.</p>` },
            { h: 'Las renuncias se ven en el día a día', body: `
<p>Si el negocio prioriza <b>margen</b> en vez de volumen, marketing podría:</p>
<ul>
<li>Dejar de hacer descuentos generales.</li>
<li>Dejar de pagar anuncios para productos que dejan poco.</li>
<li>Dejar de atender pedidos chicos que consumen mucho tiempo.</li>
</ul>
<p>Cada renuncia libera plata, tiempo y atención para lo que sí importa.</p>
<div class="callout">Quedate con esto: una estrategia se nota más en lo que dejás de hacer que en lo que decís.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Una buena estrategia intenta atraer a todo el mundo.', a: false, why: 'Querer a todos diluye la oferta y el mensaje.' },
            { t: 'choice', q: 'Lumen eligió diseño y precio alto. ¿A qué renuncia?', o: ['A tener buenas fotos', 'A competir con las lámparas baratas del supermercado', 'A vender online'], a: 1, why: 'Elegir un lugar implica no pelear por el otro.' },
            { t: 'open', q: 'Si la prioridad de Roble fuera el margen y no la cantidad de ventas, ¿qué dejarías de hacer?', model: `<p>Dejaría de hacer descuentos generales y de invertir en anuncios para los muebles que dejan poco. También revisaría pedidos chicos que ocupan mucho tiempo del taller sin dejar ganancia.</p><p>Esa plata y ese tiempo los pondría en los muebles que dejan más y en explicar mejor por qué valen lo que cuestan.</p>`, points: ['Deja de hacer descuentos generales', 'Corta inversión en productos que dejan poco', 'Libera capacidad del taller para lo rentable', 'Redirige recursos a lo que deja más'] },
          ],
        },
      ],
    },
  ],
  lab: [
    'Elegí una empresa que conozcas bien (un cliente, tu propio negocio o el de alguien cercano). Vas a usarla en todos los laboratorios.',
    'Escribí en una frase qué problema resuelve, para quién y contra qué alternativas compite.',
    'Identificá el disparador de compra más común de sus clientes.',
    'Revisá sus acciones de marketing actuales y separá estrategia de tácticas sueltas.',
  ],
  challenge: {
    key: 'm1', title: '“Necesitamos más Instagram”',
    intro: `
<p>El dueño de Roble te llama: <em>“Las ventas están flojas. Necesitamos más Instagram y más anuncios.”</em></p>
<p>Lo que sabés:</p>
<ul>
<li>Llegan bastantes consultas por WhatsApp.</li>
<li>Muchas conversaciones se cortan cuando se pasa el precio.</li>
<li>Nadie sabe bien contra quién los comparan los clientes.</li>
<li>El objetivo del año es ganar más, no necesariamente vender más muebles.</li>
</ul>`,
    steps: [
      { t: 'choice', q: '¿Cuál es el diagnóstico más probable?', o: ['Falta visibilidad', 'La oferta no se entiende frente a las alternativas', 'Faltan seguidores'], a: 1, why: 'Hay consultas; se pierden al hablar de precio. El valor no se está explicando.' },
      { t: 'choice', q: '¿Qué dato falta antes de decidir?', o: ['Cuántos seguidores tiene la competencia', 'Por qué no compran quienes consultan y contra qué los comparan', 'El color del feed'], a: 1, why: 'Sin saber por qué se pierden las ventas, cualquier acción es a ciegas.' },
      { t: 'tf', q: 'Si el objetivo es ganar más, traer más consultas es siempre la mejor jugada.', a: false, why: 'Puede convenir más vender mejor lo que ya llega, con productos que dejen más.' },
      { t: 'open', q: 'Proponé dos alternativas para Roble y cuál recomendarías.', model: `<p><b>Alternativa A</b>: subir la publicidad para traer más consultas. Rápida, pero si la oferta no se entiende, trae más gente que tampoco compra.</p><p><b>Alternativa B</b>: entrevistar a quienes no compraron, reescribir cómo se presenta el precio (madera maciza, medida exacta, garantía) y medir durante un mes.</p><p>Recomendaría B, porque ataca el problema que muestran los datos y cuida el margen. Si en un mes mejora cuántos compran, recién ahí conviene invertir más en anuncios.</p>`, points: ['Plantea dos alternativas distintas', 'Liga la recomendación con los datos del caso', 'Propone medir antes de invertir más', 'Cuida el objetivo de ganancia'] },
    ],
    reflect: '¿Qué le dirías al dueño en tres frases para que acepte probar antes de invertir más?',
    solution: `
<p><strong>Diagnóstico:</strong> el problema no es que no conozcan a Roble, sino que quienes consultan no entienden por qué vale lo que cuesta.</p>
<p><strong>Datos que faltan:</strong> motivos de quienes no compran, alternativas con las que comparan, qué muebles dejan más.</p>
<p><strong>Recomendación:</strong> primero ajustar cómo se explica el valor y medir; después decidir cuánto invertir en anuncios.</p>
<div class="callout">Para todas las evaluaciones del curso: diagnóstico breve → datos que faltan → dos alternativas → recomendación justificada.</div>`,
  },
  cards: [
    { q: '¿Qué es marketing?', a: 'Las decisiones para entender necesidades, elegir a quién servir, armar una oferta y hacerla llegar.' },
    { q: 'Crear, comunicar y capturar valor', a: 'Resolver un problema, que se entienda y que deje ganancia.' },
    { q: 'Mercado', a: 'Quienes tienen la necesidad, pueden pagar y eligen entre alternativas.' },
    { q: 'Disparador de compra', a: 'El hecho que convierte una intención vaga en una decisión.' },
    { q: 'Estrategia vs. tácticas', a: 'La estrategia elige dónde competir y a qué renunciar; las tácticas la ejecutan.' },
  ],
});
