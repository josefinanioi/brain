/* Brain — Módulo 02 · Investigación y conocimiento del cliente (Nivel 1).
   Caso que atraviesa el módulo: Lumen evalúa lanzar una línea de lámparas de escritorio. */

UNITS.push({
  n: 2,
  phase: 'f1',
  title: 'Investigación y conocimiento del cliente',
  goal: 'Conocer al cliente con evidencia, no con suposiciones, antes de invertir.',
  summary: [
    'Investigar sirve para bajar la incertidumbre antes de gastar plata.',
    'Segmentar es agrupar a la gente por cómo decide, no por su edad.',
    'Un insight explica por qué pasa algo y se convierte en una hipótesis para probar.',
  ],
  sections: [
    {
      code: '2.1', title: 'Investigación de mercado',
      lessons: [
        {
          id: 'm2s1l1', title: 'Investigar es bajar la incertidumbre', icon: '🔬',
          read: [
            { h: 'Antes de comprar el stock', body: `
<p>Lumen quiere lanzar una línea de lámparas de escritorio. Comprar el primer lote cuesta mucha plata. Si nadie las quiere, esa plata queda parada en el depósito.</p>
<p><b>Investigar</b> no es hacer un estudio enorme: es buscar evidencia para bajar la incertidumbre <em>antes</em> de arriesgar recursos.</p>` },
            { h: 'Dos tipos de evidencia', body: `
<ul>
<li><b>Cualitativa</b> (entrevistas, observación): explica el <em>por qué</em>. “Trabajo de noche y la luz del techo me cansa la vista.”</li>
<li><b>Cuantitativa</b> (encuestas, datos de ventas, búsquedas): estima el <em>cuánto</em>. “3 de cada 10 clientes compraron algo para el escritorio.”</li>
</ul>
<p>Ninguna alcanza sola. Las entrevistas sin números pueden ser casos aislados; los números sin entrevistas no explican qué hacer.</p>
<div class="callout">Quedate con esto: investigar es comprar certeza barata antes de pagar un error caro.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada tipo de evidencia con lo que responde.', pairs: [['Cualitativa', 'Por qué pasa'], ['Cuantitativa', 'Cuánto pasa']] },
            { t: 'choice', q: 'Lumen quiere saber por qué la gente busca lámparas de escritorio. ¿Qué método usa primero?', o: ['Entrevistas a clientes', 'Contar visitas a la web', 'Mirar el precio de la competencia'], a: 0, why: 'Las entrevistas explican motivos; los números vienen después para dimensionar.' },
            { t: 'tf', q: 'Una sola fuente de datos alcanza para tomar una decisión segura.', a: false, why: 'Cada fuente ve una parte; conviene combinarlas.' },
          ],
        },
        {
          id: 'm2s1l2', title: 'Pregunta, método y muestra', icon: '🧪',
          read: [
            { h: 'Empezá por la pregunta de negocio', body: `
<p>Una investigación útil empieza con una pregunta que, según la respuesta, cambia una decisión:</p>
<ul>
<li>❌ “¿Qué piensan de Lumen?” (demasiado amplia, no decide nada)</li>
<li>✅ “¿Hay suficientes clientes que trabajan desde casa y comprarían una lámpara de escritorio de más de cierto precio?”</li>
</ul>` },
            { h: 'Método, muestra y registro', body: `
<ol>
<li><b>Método</b>: entrevistas si buscás motivos; encuesta o datos si buscás cantidades.</li>
<li><b>Muestra</b>: a quién preguntás. Clientes reales que se parecen a quienes comprarían, no amigos ni familia.</li>
<li><b>Registro</b>: anotar lo que la gente dijo y hizo, textual, antes de interpretarlo.</li>
</ol>
<div class="callout warn">Si preguntás solo a gente que ya te quiere, vas a escuchar lo que querés oír.</div>` },
          ],
          ex: [
            { t: 'order', q: 'Ordená los pasos de una investigación.', items: ['Pregunta de negocio', 'Método', 'Muestra', 'Registro de evidencia', 'Decisión'], why: 'La pregunta define todo lo demás; la decisión es el para qué.' },
            { t: 'choice', q: '¿Cuál es una buena pregunta de investigación?', o: ['“¿Qué opinan de nosotros?”', '“¿Comprarían una lámpara de escritorio de diseño quienes trabajan desde casa?”', '“¿Les gusta el logo?”'], a: 1, why: 'Es concreta y su respuesta cambia la decisión de lanzar o no.' },
            { t: 'tf', q: 'Entrevistar a amigos es una buena muestra porque responden con sinceridad.', a: false, why: 'Suelen ser complacientes y no se parecen a los clientes reales.' },
          ],
        },
        {
          id: 'm2s1l3', title: 'Cuando la pregunta trae la respuesta', icon: '🙈',
          read: [
            { h: 'Sesgos frecuentes', body: `
<p>Un <b>sesgo</b> es algo que inclina el resultado sin que te des cuenta.</p>
<ul>
<li><b>Pregunta que induce</b>: “¿No te parece que una lámpara linda mejora tu trabajo?” Casi todos van a decir que sí.</li>
<li><b>Intención no es compra</b>: “¿Comprarías?” suele dar un sí que después no se cumple.</li>
<li><b>Buscar confirmación</b>: anotar solo lo que coincide con lo que ya creías.</li>
</ul>` },
            { h: 'Preguntas abiertas', body: `
<p>Una pregunta abierta deja que la persona cuente su experiencia sin empujarla:</p>
<ul>
<li>“Contame cómo es un día de trabajo en tu casa.”</li>
<li>“¿Qué te molesta de la luz donde trabajás?”</li>
<li>“¿Qué hiciste la última vez que quisiste resolverlo?”</li>
</ul>
<div class="callout">Quedate con esto: si tu pregunta se puede contestar con “sí”, probablemente estás empujando la respuesta.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Cuál es una pregunta neutral?', o: ['“¿No te parece genial nuestra lámpara?”', '“¿Qué te molesta de la luz donde trabajás?”', '“¿Comprarías una lámpara mejor?”'], a: 1, why: 'Es abierta y no sugiere ninguna respuesta.' },
            { t: 'tf', q: 'Que mucha gente diga “la compraría” asegura que se va a vender.', a: false, why: 'La intención declarada suele ser mucho mayor que la compra real.' },
            { t: 'open', q: '¿Qué pregunta abierta usarías para descubrir una necesidad no resuelta de los clientes de Lumen?', model: `<p>Algo como: “Contame la última vez que la luz de tu casa te complicó algo que querías hacer. ¿Qué hiciste?”.</p><p>Es abierta, pregunta por un hecho real del pasado y deja ver si la persona ya intentó resolverlo (lo que muestra que el problema le importa).</p>`, points: ['La pregunta no se responde con sí o no', 'Pregunta por un hecho del pasado', 'No menciona el producto ni sugiere la respuesta', 'Busca ver qué hizo la persona para resolverlo'] },
          ],
        },
      ],
    },
    {
      code: '2.2', title: 'Segmentación y buyer persona',
      lessons: [
        {
          id: 'm2s2l1', title: 'No todos son iguales', icon: '🧩',
          read: [
            { h: 'Qué es segmentar', body: `
<p><b>Segmentar</b> es dividir a la gente en grupos que necesitan o deciden de forma tan distinta que vale la pena tratarlos distinto.</p>
<p>En Flow hay al menos tres grupos:</p>
<ul>
<li>Quienes vienen a <b>recuperarse</b> de una lesión: buscan cuidado y profesores formados.</li>
<li>Quienes quieren <b>ponerse en forma</b>: buscan resultados y horarios flexibles.</li>
<li>Embarazadas: buscan seguridad y clases específicas.</li>
</ul>` },
            { h: 'Criterios que sirven', body: `
<p>La edad o el barrio a veces ayudan, pero los criterios más útiles suelen ser:</p>
<ul>
<li>El <b>problema</b> que quieren resolver y qué tan <b>urgente</b> es.</li>
<li>El <b>contexto</b> de uso.</li>
<li>La <b>sensibilidad al precio</b>.</li>
<li>El <b>canal</b> por el que buscan y compran.</li>
<li>Las <b>barreras</b> que los frenan.</li>
</ul>
<div class="callout">Quedate con esto: un segmento vale si te lleva a hacer algo distinto (otro mensaje, otra oferta, otro canal).</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué hace útil a un segmento?', o: ['Que sea grande', 'Que justifique tratarlo distinto', 'Que tenga un nombre lindo'], a: 1, why: 'Si todos los grupos recibirían lo mismo, segmentar no sirvió de nada.' },
            { t: 'match', q: 'Uní cada segmento de Flow con lo que busca.', pairs: [['Recuperación de lesión', 'Cuidado y profesores formados'], ['Ponerse en forma', 'Resultados y horarios flexibles'], ['Embarazadas', 'Seguridad y clases específicas']] },
            { t: 'tf', q: 'La edad es siempre el mejor criterio para segmentar.', a: false, why: 'Personas de la misma edad pueden comprar por motivos opuestos.' },
          ],
        },
        {
          id: 'm2s2l2', title: 'Un buyer persona que sirva', icon: '👤',
          read: [
            { h: 'No es una biografía inventada', body: `
<p>Un <b>buyer persona</b> es un retrato del tipo de cliente que querés atender. El error común es llenarlo de detalles que no ayudan a decidir:</p>
<blockquote>“Carla, 35 años, le gusta el yoga y tiene un perro llamado Toto.”</blockquote>
<p>¿Qué hace Roble con eso? Nada.</p>` },
            { h: 'Patrones de decisión', body: `
<p>Uno útil resume lo que se observó en clientes reales:</p>
<blockquote>“Pareja que se muda a un departamento chico. Necesita muebles que entren justo. Le preocupa equivocarse con las medidas. Compara con muebles de cadena. Decide en dos o tres semanas, después de ver fotos de trabajos anteriores.”</blockquote>
<p>Con eso Roble sabe qué mostrar (trabajos en espacios chicos), qué miedo resolver (las medidas) y cuándo hacer seguimiento.</p>
<div class="callout">Quedate con esto: un buyer persona sirve si cambia lo que decís, ofrecés o hacés.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué dato es más útil en un buyer persona?', o: ['El nombre de su mascota', 'Qué le preocupa al momento de comprar', 'Su color favorito'], a: 1, why: 'Las preocupaciones guían el mensaje y la oferta.' },
            { t: 'tf', q: 'Un buyer persona debería salir de patrones observados en clientes reales.', a: true, why: 'Si es inventado, refleja tus suposiciones, no a los clientes.' },
            { t: 'choice', q: 'La pareja teme equivocarse con las medidas. ¿Qué hace Roble?', o: ['Ofrece medir en el lugar o mostrar trabajos en espacios chicos', 'Baja el precio', 'Publica más seguido'], a: 0, why: 'Ataca directamente la barrera que frena la compra.' },
          ],
        },
        {
          id: 'm2s2l3', title: 'El trabajo que el cliente contrata', icon: '🛠️',
          read: [
            { h: 'Jobs to Be Done', body: `
<p>Hay una idea que ayuda mucho: la gente no compra productos, <b>“contrata”</b> productos para que le hagan un trabajo. En inglés se llama <em>Jobs to Be Done</em> (el trabajo por hacer).</p>
<p>En Brote, dos personas de la misma edad piden el mismo café:</p>
<ul>
<li>Una lo “contrata” para <b>despertarse rápido</b> antes de entrar a la oficina.</li>
<li>Otra lo “contrata” para <b>tener un rato tranquilo</b> y concentrarse dos horas.</li>
</ul>` },
            { h: 'Mismo producto, otro mensaje', body: `
<p>A la primera le importa la rapidez: pedir por app, retirar sin fila. A la segunda, la mesa cómoda, el silencio y el wifi.</p>
<p>Si Brote le habla igual a las dos, a una de ellas no le está hablando.</p>
<div class="callout">Quedate con esto: preguntate qué progreso quiere lograr la persona, no solo qué compra.</div>` },
          ],
          ex: [
            { t: 'choice', q: 'Según Jobs to Be Done, ¿qué compra la gente?', o: ['Productos', 'Un progreso en su vida', 'Descuentos'], a: 1, why: 'El producto es el medio; lo que busca es el resultado.' },
            { t: 'match', q: 'Uní cada trabajo con lo que más le importa.', pairs: [['Despertarse antes de la oficina', 'Rapidez y retirar sin fila'], ['Concentrarse dos horas', 'Silencio, mesa y wifi']] },
            { t: 'open', q: 'Para esos dos clientes de Brote, ¿qué mensaje cambiarías para cada uno?', model: `<p>Para quien quiere despertarse rápido: “Tu café listo en dos minutos. Pedilo por la app y retiralo sin hacer fila.”</p><p>Para quien quiere concentrarse: “Mesas grandes, enchufes y silencio de 8 a 12. Tu oficina con buen café.”</p><p>Mismo producto, distinto trabajo: cambio qué beneficio destaco, en qué momento hablo y por qué canal.</p>`, points: ['Escribe un mensaje distinto para cada uno', 'Liga cada mensaje al trabajo que contrata', 'Destaca un beneficio concreto (rapidez / tranquilidad)', 'Considera momento o canal'] },
          ],
        },
      ],
    },
    {
      code: '2.3', title: 'Competencia y oportunidades',
      lessons: [
        {
          id: 'm2s3l1', title: 'Con quién competís de verdad', icon: '🥊',
          read: [
            { h: 'Tres tipos de competencia', body: `
<p>Competir es disputar <b>la elección del cliente</b>. Para Brote:</p>
<ul>
<li><b>Directa</b>: la otra cafetería de la esquina.</li>
<li><b>Indirecta</b>: el café de la oficina, la cafetera en casa, una panadería que también vende café.</li>
<li><b>No comprar</b>: seguir sin tomar café afuera.</li>
</ul>
<p>Muchas veces la competencia más fuerte no es otra marca: es la costumbre.</p>` },
            { h: 'Por qué importa', body: `
<p>Si Brote solo mira a la cafetería de la esquina, va a pelear por precio. Si entiende que compite con la cafetera de casa, puede ofrecer lo que la casa no tiene: un lugar para salir, ver gente y concentrarse.</p>
<div class="callout">Quedate con esto: definí la competencia desde el cliente, no desde tu rubro.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Clasificá la competencia de Brote.', pairs: [['La cafetería de enfrente', 'Directa'], ['La cafetera en casa', 'Indirecta'], ['Seguir sin salir', 'No comprar']] },
            { t: 'tf', q: 'La competencia de una marca son solo las empresas de su mismo rubro.', a: false, why: 'Cualquier alternativa que el cliente considere compite por su elección.' },
            { t: 'choice', q: 'Frente a la cafetera en casa, ¿qué conviene destacar?', o: ['Que el café es más barato', 'Lo que la casa no da: salir, ver gente, concentrarse', 'Más variedad de tazas'], a: 1, why: 'Ahí Brote tiene una ventaja que la alternativa no puede igualar.' },
          ],
        },
        {
          id: 'm2s3l2', title: 'Comparar sin copiar', icon: '🔍',
          read: [
            { h: 'Qué mirar', body: `
<p>Un <b>benchmark</b> es comparar tu oferta con la de otros. No sirve para copiar diseños: sirve para encontrar diferencias que le importan al cliente.</p>
<table><thead><tr><th></th><th>Lumen</th><th>Tienda A</th><th>Tienda B</th></tr></thead><tbody>
<tr><td>Precio</td><td>Alto</td><td>Bajo</td><td>Medio</td></tr>
<tr><td>Entrega</td><td>24 h</td><td>7 días</td><td>3 días</td></tr>
<tr><td>Garantía</td><td>1 año</td><td>No</td><td>3 meses</td></tr>
<tr><td>Asesoramiento</td><td>Sí</td><td>No</td><td>No</td></tr>
</tbody></table>` },
            { h: 'Buscar el espacio', body: `
<p>La oportunidad aparece donde se cruzan dos cosas: <b>algo que vos hacés mejor</b> y <b>algo que al cliente le importa mucho</b>.</p>
<p>Si a los clientes de Lumen les preocupa que la lámpara llegue rota o no combine, la entrega rápida, la garantía y el asesoramiento valen más que unos pesos de diferencia.</p>
<div class="callout">Quedate con esto: una marca puede cobrar más si reduce el riesgo del cliente.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Para qué sirve un benchmark?', o: ['Para copiar lo que hacen otros', 'Para encontrar diferencias que le importan al cliente', 'Para bajar precios'], a: 1, why: 'Lo útil es detectar dónde podés destacarte.' },
            { t: 'tf', q: 'Una marca más cara puede ganar si reduce el riesgo de la compra.', a: true, why: 'Garantía, entrega rápida y asesoramiento bajan el miedo a equivocarse.' },
            { t: 'choice', q: '¿Dónde está la oportunidad?', o: ['Donde la competencia es más barata', 'Donde algo que hacés mejor coincide con algo que el cliente valora', 'Donde hay menos competidores'], a: 1, why: 'Una ventaja que al cliente no le importa no sirve.' },
          ],
        },
        {
          id: 'm2s3l3', title: 'Ventajas que duran', icon: '🛡️',
          read: [
            { h: 'Copiable en una semana', body: `
<p>Algunas ventajas se copian enseguida: un descuento, envío gratis, un formato de anuncio. Si tu diferencia es esa, dura hasta que el otro reacciona.</p>` },
            { h: 'Difícil de copiar', body: `
<p>Otras cuestan mucho más:</p>
<ul>
<li><b>Saber hacer</b>: el oficio del taller de Roble.</li>
<li><b>Relaciones</b>: arquitectos que recomiendan a Roble hace años.</li>
<li><b>Reputación</b>: cientos de reseñas buenas de Lumen.</li>
<li><b>Ubicación</b>: Brote está frente a un coworking.</li>
</ul>
<div class="callout">Quedate con esto: construí sobre lo que al otro le cuesta tiempo copiar.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Clasificá cada ventaja.', pairs: [['Un descuento del 10%', 'Fácil de copiar'], ['Años de reseñas buenas', 'Difícil de copiar'], ['Envío gratis', 'Fácil de copiar'], ['Oficio del taller', 'Difícil de copiar']] },
            { t: 'tf', q: 'Una ventaja basada en precio bajo suele ser fácil de igualar.', a: true, why: 'Cualquiera puede bajar el precio si está dispuesto a ganar menos.' },
            { t: 'open', q: 'Pensá en Lumen: ¿qué ventaja sería defendible y cuál podría copiarse en una semana?', model: `<p>Copiable en una semana: envío gratis o un descuento. Cualquier tienda lo puede ofrecer mañana.</p><p>Defendible: la reputación de entregar en 24 horas sin roturas, con asesoramiento para elegir. Requiere logística, experiencia y reseñas que se juntan con el tiempo.</p>`, points: ['Nombra una ventaja fácil de copiar', 'Nombra una ventaja difícil de copiar', 'Explica por qué cuesta copiarla', 'La liga con algo que el cliente valora'] },
          ],
        },
      ],
    },
    {
      code: '2.4', title: 'Insights del consumidor',
      lessons: [
        {
          id: 'm2s4l1', title: 'Dato no es insight', icon: '💡',
          read: [
            { h: 'La diferencia', body: `
<ul>
<li>Un <b>dato</b> describe lo que pasa: “7 de cada 10 personas abandonan el carrito de Lumen.”</li>
<li>Un <b>insight</b> propone por qué pasa: “Temen descubrir costos al final.”</li>
</ul>
<p>El insight es más valioso porque te dice qué hacer. Pero al principio es solo una <b>hipótesis</b>: una explicación posible que hay que comprobar.</p>` },
            { h: 'Una tensión', body: `
<p>Los buenos insights suelen mostrar una tensión: algo que la persona quiere y algo que la frena.</p>
<blockquote>“Quiero comprar online porque es cómodo, pero me da miedo que al final me cobren un envío carísimo.”</blockquote>
<div class="callout">Quedate con esto: el dato dice qué; el insight intenta explicar por qué.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Clasificá cada frase.', pairs: [['“7 de cada 10 abandonan el carrito”', 'Dato'], ['“Temen descubrir costos al final”', 'Insight'], ['“La web tuvo 2.000 visitas”', 'Dato']] },
            { t: 'tf', q: 'Un insight es un hecho comprobado desde el principio.', a: false, why: 'Empieza como hipótesis y hay que validarlo.' },
            { t: 'choice', q: '¿Qué tiene un buen insight?', o: ['Un número grande', 'Una tensión entre lo que la persona quiere y lo que la frena', 'Una frase graciosa'], a: 1, why: 'La tensión muestra dónde intervenir.' },
          ],
        },
        {
          id: 'm2s4l2', title: 'De la evidencia a la hipótesis', icon: '🧵',
          read: [
            { h: 'Juntar las piezas', body: `
<p>Lumen tiene dos pistas:</p>
<ul>
<li><b>Cuantitativa</b>: la mayoría abandona en el paso donde aparece el envío.</li>
<li><b>Cualitativa</b>: en las entrevistas, varios dijeron “no sabía cuánto salía el envío hasta el final”.</li>
</ul>
<p>Juntas apuntan al mismo lugar. Eso hace más fuerte la hipótesis.</p>` },
            { h: 'Escribir la hipótesis', body: `
<p>Una hipótesis comprobable dice qué vas a cambiar y qué esperás que pase:</p>
<div class="formula">Si mostramos el costo de envío desde la ficha del producto, menos gente va a abandonar el carrito.</div>
<p>Así la podés probar: cambiás eso, medís el abandono y comparás.</p>
<div class="callout">Quedate con esto: una buena hipótesis se puede demostrar falsa.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Cuando datos y entrevistas apuntan al mismo lugar, la hipótesis se vuelve más fuerte.', a: true, why: 'Dos fuentes distintas que coinciden dan más confianza.' },
            { t: 'choice', q: '¿Cuál es una hipótesis comprobable?', o: ['“La gente no nos quiere”', '“Si mostramos el envío desde la ficha, baja el abandono”', '“Hay que mejorar la web”'], a: 1, why: 'Dice qué cambiar y qué resultado medir.' },
            { t: 'order', q: 'Ordená el camino del insight.', items: ['Dato', 'Entrevistas', 'Hipótesis', 'Prueba', 'Decisión'], why: 'Primero observás, después explicás, después comprobás.' },
          ],
        },
        {
          id: 'm2s4l3', title: 'Probar un insight', icon: '✅',
          read: [
            { h: 'El caso de Roble', body: `
<p>Muchas personas le preguntan a Roble si el mueble viene armado y quién lo instala. Varias no vuelven a escribir.</p>
<p>Hipótesis: <b>la incertidumbre sobre la instalación frena más que el precio</b>.</p>` },
            { h: 'Cómo comprobarlo', body: `
<ul>
<li>Agregar desde el primer mensaje: “Entregamos e instalamos sin costo en la ciudad.”</li>
<li>Durante un mes, medir cuántos piden presupuesto y cuántos compran.</li>
<li>Comparar con el mes anterior, cuidando que no cambie nada más al mismo tiempo (precio, anuncios).</li>
</ul>
<div class="callout">Quedate con esto: si cambiás muchas cosas a la vez, no vas a saber cuál funcionó.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué cambio pone a prueba la hipótesis de Roble?', o: ['Bajar el precio', 'Aclarar desde el inicio que entregan e instalan', 'Cambiar el logo'], a: 1, why: 'Ataca justo la barrera que se quiere comprobar.' },
            { t: 'tf', q: 'Conviene cambiar precio y mensaje a la vez para ver resultados más rápido.', a: false, why: 'No sabrías cuál de los dos cambios produjo el resultado.' },
            { t: 'open', q: '¿Cómo probarías si la duda sobre la instalación es la causa de que la gente no compre?', model: `<p>Cambiaría una sola cosa: aclarar desde el primer mensaje que Roble entrega e instala. Mantendría igual el precio y los anuncios.</p><p>Mediría durante un mes cuántos piden presupuesto y cuántos compran, y lo compararía con un período parecido. Además, preguntaría a quienes no compran por qué, para ver si la instalación dejó de aparecer como motivo.</p>`, points: ['Cambia una sola variable', 'Define qué medir (presupuestos y compras)', 'Compara contra un período o grupo similar', 'Confirma con lo que dicen los clientes'] },
          ],
        },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida, escribí una pregunta de negocio que hoy no puedas responder con certeza.',
    'Entrevistá a tres clientes recientes con preguntas abiertas sobre la última vez que compraron.',
    'Armá dos segmentos que necesiten mensajes distintos y anotá qué trabajo “contrata” cada uno.',
    'Hacé un benchmark simple con dos competidores y marcá una ventaja difícil de copiar.',
  ],
  challenge: {
    key: 'm2', title: '¿Lanzamos la línea de escritorio?',
    intro: `
<p>Lumen tiene que decidir si compra un primer lote de lámparas de escritorio. Lo que sabe:</p>
<ul>
<li>En diez entrevistas, seis personas que trabajan desde casa dijeron que la luz les cansa la vista.</li>
<li>Una encuesta en Instagram dio 80% de “la compraría”.</li>
<li>Las búsquedas de “lámpara de escritorio” crecieron este año.</li>
<li>No sabe cuánto pagarían ni qué tienda elegirían.</li>
</ul>`,
    steps: [
      { t: 'choice', q: '¿Qué evidencia es menos confiable?', o: ['Las entrevistas', 'El 80% de “la compraría” en Instagram', 'El crecimiento de búsquedas'], a: 1, why: 'Es intención declarada, de seguidores que ya quieren a la marca.' },
      { t: 'choice', q: '¿Qué dato falta antes de comprar todo el lote?', o: ['Cuánto pagarían de verdad', 'El color del packaging', 'Cuántos seguidores tiene la competencia'], a: 0, why: 'Sin saber el precio aceptable, no sabés si el negocio cierra.' },
      { t: 'tf', q: 'Con lo que hay, conviene comprar el lote completo.', a: false, why: 'Hay señales, pero falta validar la compra real a un precio rentable.' },
      { t: 'open', q: 'Proponé dos alternativas y cuál recomendarías.', model: `<p><b>A:</b> comprar el lote completo y lanzar con publicidad. Rápido, pero arriesga mucha plata con evidencia débil.</p><p><b>B:</b> comprar pocas unidades (o tomar preventa), publicarlas con precio real y medir cuántas se venden en un mes.</p><p>Recomiendo B: transforma la intención en compras reales y define el precio con datos antes de arriesgar el lote.</p>`, points: ['Distingue intención de compra real', 'Plantea dos alternativas', 'Propone una prueba chica con precio real', 'Justifica con el riesgo de stock parado'] },
    ],
    reflect: '¿Qué resultado de la prueba te haría comprar el lote completo? Escribí un número concreto.',
    solution: `
<p><strong>Diagnóstico:</strong> hay señales de una necesidad real (entrevistas y búsquedas), pero la evidencia de compra es débil.</p>
<p><strong>Datos que faltan:</strong> precio aceptable, cuántos compran de verdad, con qué otras opciones comparan.</p>
<p><strong>Recomendación:</strong> preventa o lote chico con precio real; definir antes qué cantidad vendida justifica el lote completo.</p>`,
  },
  cards: [
    { q: 'Investigación cualitativa vs. cuantitativa', a: 'Cualitativa explica por qué; cuantitativa estima cuánto.' },
    { q: 'Sesgo de la pregunta', a: 'Una pregunta que sugiere la respuesta. Se evita con preguntas abiertas sobre hechos pasados.' },
    { q: 'Segmentar', a: 'Agrupar personas que necesitan o deciden distinto, si eso justifica tratarlas distinto.' },
    { q: 'Jobs to Be Done', a: 'La gente “contrata” productos para lograr un progreso.' },
    { q: 'Dato vs. insight', a: 'El dato dice qué pasa; el insight propone por qué, como hipótesis a probar.' },
  ],
});
