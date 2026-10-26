/* Brain — Módulo 07 · E-commerce y crecimiento (Nivel 2).
   Casos del módulo: la tienda de Lumen y los clientes de Flow. */

UNITS.push({
  n: 7,
  phase: 'f2',
  title: 'E-commerce y crecimiento',
  goal: 'Hacer crecer un negocio mirando la tienda completa, el valor del cliente en el tiempo y las palancas que más rinden.',
  summary: [
    'Una tienda online vende si resuelve confianza, costos claros, pago y entrega; los anuncios solo traen gente.',
    'El cliente vale por lo que deja mientras se queda, no por su primera compra.',
    'Las palancas chicas combinadas suman más que una grande, y se prueban de a una.',
  ],
  sections: [
    {
      code: '7.1', title: 'Modelo de e-commerce',
      lessons: [
        {
          id: 'm7s1l1', title: 'Una tienda es más que una web', icon: '🛒',
          read: [
            { h: 'Las piezas de una tienda', body: `
<p>Lumen pensaba que su tienda era la web. En realidad, una tienda online es un sistema de piezas que tienen que funcionar juntas:</p>
<ul>
<li><b>Catálogo</b>: fichas claras, con medidas, fotos reales y precio.</li>
<li><b>Confianza</b>: reseñas, garantía, datos de contacto.</li>
<li><b>Disponibilidad</b>: que lo que se ve, haya.</li>
<li><b>Pago</b>: medios que la gente usa.</li>
<li><b>Entrega</b>: plazos y costos claros, y que llegue sano.</li>
<li><b>Posventa</b>: cambios, dudas, reclamos.</li>
</ul>` },
            { h: 'La pieza más débil', body: `
<p>Si una pieza falla, las demás no alcanzan. Más anuncios llevan más gente a una tienda que igual pierde ventas en la pieza rota.</p>
<div class="callout">Quedate con esto: optimizar anuncios sin resolver la tienda aumenta el gasto, no las ventas.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada pieza con un ejemplo de Lumen.', pairs: [['Confianza', 'Reseñas y garantía visibles'], ['Disponibilidad', 'Que haya stock de lo que se muestra'], ['Entrega', 'Plazo y costo claros'], ['Posventa', 'Cómo se resuelve un cambio']] },
            { t: 'tf', q: 'Si los anuncios funcionan, la tienda vende sí o sí.', a: false, why: 'Los anuncios traen gente; la tienda tiene que convencerla y cumplir.' },
            { t: 'choice', q: 'Las lámparas más buscadas están sin stock. ¿Qué pieza falla?', o: ['Catálogo', 'Disponibilidad', 'Pago'], a: 1, why: 'La gente llega y no puede comprar lo que quería.' },
          ],
        },
        {
          id: 'm7s1l2', title: 'Costos que aparecen al final', icon: '💸',
          read: [
            { h: 'La sorpresa del checkout', body: `
<p>El <b>checkout</b> es el último paso de la compra: datos, envío, pago. En Lumen, muchos abandonan justo ahí.</p>
<p>¿Por qué? El envío aparece recién al final y a veces cuesta un tercio de la lámpara. La persona siente que le cambiaron el precio.</p>` },
            { h: 'Qué revisar', body: `
<ul>
<li>Mostrar el costo de envío (o un estimado) desde la ficha.</li>
<li>Pedir solo los datos necesarios.</li>
<li>Ofrecer los medios de pago que la gente usa.</li>
<li>Dejar claro el plazo de entrega antes de pagar.</li>
</ul>
<div class="callout">Quedate con esto: nadie abandona por sorpresa si no hay sorpresas.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué es el checkout?', o: ['La portada de la tienda', 'El último paso: datos, envío y pago', 'Un tipo de anuncio'], a: 1, why: 'Es donde se concreta (o se pierde) la compra.' },
            { t: 'tf', q: 'Mostrar el envío desde la ficha puede bajar el abandono del carrito.', a: true, why: 'Evita la sorpresa en el último paso.' },
            { t: 'choice', q: '¿Qué cambio reduce fricción en el checkout?', o: ['Pedir más datos “por las dudas”', 'Pedir solo lo necesario', 'Agregar un paso de registro obligatorio'], a: 1, why: 'Cada campo extra es una oportunidad de abandonar.' },
          ],
        },
        {
          id: 'm7s1l3', title: 'Antes de duplicar la pauta', icon: '🧰',
          read: [
            { h: 'Una lista de chequeo', body: `
<p>El dueño de Lumen quiere duplicar la inversión en anuncios. Antes, una directora revisa:</p>
<ol>
<li><b>Fichas</b>: ¿se entienden medidas, materiales y precio?</li>
<li><b>Navegación</b>: ¿se encuentra lo que se busca en pocos toques desde el celular?</li>
<li><b>Costos visibles</b>: ¿hay sorpresas al final?</li>
<li><b>Pago</b>: ¿están los medios que la gente usa?</li>
<li><b>Logística</b>: ¿se cumplen los plazos? ¿Llegan sanas?</li>
<li><b>Stock</b>: ¿hay de lo que se va a anunciar?</li>
</ol>` },
            { h: 'Por qué primero', body: `
<p>Cada mejora en la tienda hace rendir más a <b>cada peso</b> de publicidad, el de hoy y el de mañana. Duplicar la pauta sobre una tienda con agujeros duplica también lo que se pierde.</p>
<div class="callout">Quedate con esto: arreglá el balde antes de echar más agua.</div>` },
          ],
          ex: [
            { t: 'order', q: 'Ordená el recorrido que revisás, de la entrada a la entrega.', items: ['Ficha del producto', 'Carrito y costos', 'Pago', 'Entrega'], why: 'Seguís el camino que hace el cliente.' },
            { t: 'tf', q: 'Mejorar la tienda hace rendir más toda la publicidad futura.', a: true, why: 'Cada visita tiene más chances de convertirse en venta.' },
            { t: 'open', q: '¿Qué revisarías en la tienda de Lumen antes de aceptar duplicar la pauta?', model: `<p>Revisaría el recorrido completo desde el celular: que las fichas muestren medidas y precio, que el envío se vea antes del final, que estén los medios de pago habituales y que el checkout sea corto.</p><p>También confirmaría que hay stock de lo que se va a anunciar y que la logística cumple los plazos. Si encuentro agujeros, los arreglaría primero y después subiría la inversión de a poco.</p>`, points: ['Revisa fichas y costos visibles', 'Revisa pago y checkout', 'Confirma stock y logística', 'Propone arreglar antes de escalar'] },
          ],
        },
      ],
    },
    {
      code: '7.2', title: 'Economía del cliente',
      lessons: [
        {
          id: 'u3l1', title: 'Lo que importa es el cliente', icon: '👤',
          read: [
            { h: 'Una alumna de Flow', body: `
<p>Flow, el estudio de pilates, paga publicidad para conseguir una alumna nueva.</p>
<ul>
<li>Si viene un mes y no vuelve, quizás esa publicidad no se pagó.</li>
<li>Si viene todos los meses durante dos años, rindió muchísimo.</li>
</ul>
<p>Por eso lo que importa no es la campaña sino <b>el cliente</b>: cuánto costó traerlo y cuánto deja mientras se queda.</p>` },
            { h: 'Cuatro números para conocer a tus clientes', body: `
<ul>
<li><b>Ticket promedio</b>: cuánto gasta cada vez que compra.</li>
<li><b>Frecuencia</b>: cuántas veces compra en un período.</li>
<li><b>Recompra</b>: qué parte de los clientes vuelve.</li>
<li><b>CAC</b>: cuánto costó conseguir cada cliente <em>nuevo</em>.</li>
</ul>` },
            { h: 'El error más común con el CAC', body: `
<p>Si dividís lo que gastaste en publicidad por <b>todas</b> las ventas del mes, incluís gente que ya era clienta y hubiera comprado igual. El CAC se ve más barato de lo que es.</p>
<p>En Flow: si este mes se anotaron 40 alumnas, pero 30 ya venían de antes, la publicidad solo trajo a <b>10</b>. Hay que dividir por esas 10.</p>
<div class="callout warn">Separar clientes nuevos de los que ya estaban es de lo primero que tenés que pedir en una empresa.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada número con lo que mide.', pairs: [['Ticket promedio', 'Cuánto gasta por compra'], ['Frecuencia', 'Cuántas veces compra'], ['Recompra', 'Qué parte de los clientes vuelve'], ['CAC', 'Cuánto costó cada cliente nuevo']] },
            { t: 'tf', q: 'Para calcular el CAC conviene dividir por todas las ventas del mes.', a: false, why: 'Solo por los clientes nuevos. Si no, el CAC se ve más barato de lo que es.' },
            { t: 'number', q: 'Flow gastó $1.000 en publicidad y trajo 10 alumnas nuevas. ¿Cuánto costó cada una?', a: 100, unit: '$', why: '1.000 ÷ 10 = 100.' },
            { t: 'choice', q: '¿Por qué importa más el cliente que la campaña?', o: ['Porque la campaña no se puede medir', 'Porque lo que deja un cliente depende de cuánto tiempo se queda', 'Porque lo dice Meta'], a: 1, why: 'Un cliente que vuelve rinde mucho más que uno que compra una vez.' },
          ],
        },
        {
          id: 'u3l2', title: 'Tres formas de CAC', icon: '🧮',
          read: [
            { h: 'Cuánto cuesta de verdad un cliente', body: `
<p>Conseguir un cliente no solo cuesta los anuncios. También hay agencia, fotos, herramientas y parte del tiempo del equipo. Según qué incluyas, hay tres CAC:</p>
<ul>
<li><b>CAC de anuncios</b> (paid): solo lo que se pagó en publicidad.</li>
<li><b>CAC mezclado</b> (blended): todo el marketing dividido por todos los clientes nuevos, también los que llegaron solos o por recomendación.</li>
<li><b>CAC completo</b>: suma agencia, herramientas, contenido y parte del equipo de ventas.</li>
</ul>` },
            { h: '¿Cuál usar?', body: `
<p>Es como calcular cuánto te sale una torta casera: si solo contás la harina, parece regalada. Si sumás el gas, el tiempo y los moldes, ves lo que cuesta de verdad.</p>
<ul>
<li>Para decidir si subir la inversión en una campaña: el de <b>anuncios</b>.</li>
<li>Para saber si el negocio de conseguir clientes es sano: el <b>completo</b>.</li>
</ul>
<p>Si una empresa solo te muestra el de anuncios, preguntá: <em>“¿cuánto cuesta traer un cliente con todo incluido?”</em></p>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada tipo de CAC con lo que incluye.', pairs: [['De anuncios', 'Solo la publicidad'], ['Mezclado', 'Todo el marketing ÷ todos los clientes nuevos'], ['Completo', 'También agencia, herramientas y parte del equipo']] },
            { t: 'choice', q: '¿Qué CAC mirás para saber si conseguir clientes es un negocio sano?', o: ['El de anuncios', 'El completo', 'El que dé más bajo'], a: 1, why: 'Incluye todo lo que de verdad cuesta conseguir clientes.' },
            { t: 'tf', q: 'El CAC mezclado incluye clientes que llegaron por recomendación.', a: true, why: 'Divide todo el marketing por todos los clientes nuevos, vengan de donde vengan.' },
            { t: 'choice', q: '¿Cuál es siempre el más alto de los tres?', o: ['El de anuncios', 'El completo', 'Son iguales'], a: 1, why: 'Suma más costos que los otros.' },
          ],
        },
        {
          id: 'u3l3', title: 'LTV en contribución', icon: '💎',
          read: [
            { h: 'Cuánto vale un cliente', body: `
<p>El <b>LTV</b> (valor del cliente en el tiempo) responde: <em>¿cuánto me deja un cliente mientras se queda conmigo?</em></p>
<p>Una alumna de Flow paga la cuota todos los meses. De cada cuota, a Flow le queda una parte después de sus costos. El LTV es esa parte, sumada todos los meses que la alumna se queda.</p>
<div class="formula">LTV = lo que deja cada compra × cuántas veces compra</div>` },
            { h: 'Siempre con lo que queda', body: `
<p>Un error frecuente es calcular el LTV con lo que el cliente <b>paga</b> en vez de con lo que <b>deja</b>. Da un número mucho más grande, y con ese número terminás pagando de más por cada cliente.</p>
<div class="callout">Usá plazos razonables: uno o dos años. Un valor “de toda la vida” es una promesa, no un dato.</div>` },
            { h: 'Cuando se compra una sola vez', body: `
<p>Una mesa de Roble se compra una vez cada muchos años. ¿Entonces el cliente vale solo esa venta? No necesariamente:</p>
<ul>
<li>Puede sumar sillas, un aparador o almohadones.</li>
<li>Puede recomendar el taller a amigos.</li>
<li>Puede volver cuando se muda.</li>
</ul>
<p>Pregunta práctica: <em>de cada 10 personas que compran una mesa, ¿cuántas compran después otra cosa?</em></p>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué pregunta responde el LTV?', o: ['¿Cuánto cuesta un anuncio?', '¿Cuánto me deja un cliente mientras se queda?', '¿Cuántos seguidores tengo?'], a: 1, why: 'Mide el valor del cliente en el tiempo.' },
            { t: 'choice', q: '¿Por qué el LTV se calcula con lo que queda y no con lo que paga el cliente?', o: ['Porque da un número más lindo', 'Porque para pagar un cliente solo sirve lo que queda', 'Porque lo pide el contador'], a: 1, why: 'Con lo que paga sobreestimás el valor y terminás pagando de más.' },
            { t: 'number', q: 'Una alumna deja $20 por mes y se queda 10 meses. ¿Cuánto deja en total?', a: 200, unit: '$', why: '20 × 10 = 200. Ese es su LTV.' },
            { t: 'tf', q: 'Conviene calcular el LTV “de toda la vida” del cliente.', a: false, why: 'Mejor un plazo medible y prudente, de uno o dos años.' },
          ],
        },
        {
          id: 'u3l4', title: 'LTV/CAC y payback', icon: '⏱️',
          read: [
            { h: 'Comparar lo que vale con lo que cuesta', body: `
<p>Si un cliente te deja $300 en el tiempo y te costó $100 conseguirlo, deja tres veces lo que costó. Eso es el <b>LTV/CAC</b>.</p>
<ul>
<li><b>Menos de 1</b>: cada cliente cuesta más de lo que deja. Se pierde plata.</li>
<li><b>Entre 1 y 3</b>: funciona, pero con poco margen para errores.</li>
<li><b>3 o más</b>: la referencia habitual de un negocio sano (no es una ley).</li>
</ul>` },
            { h: 'Cuánto tarda en volver la plata', body: `
<p>Flow paga $100 para conseguir una alumna. La alumna le deja $20 por mes. ¿Cuánto tarda Flow en recuperar esos $100? <b>Cinco meses</b>. Eso es el <b>payback</b>.</p>
<p>Ahora imaginá que Flow consigue 50 alumnas en un mes: paga todo hoy y recupera de a poco. Si no tiene plata guardada para esos cinco meses, se queda sin caja <b>aunque el negocio sea bueno</b>.</p>
<div class="callout warn">En empresas sin mucho respaldo financiero, recuperar rápido vale tanto como que el cliente valga mucho.</div>` },
          ],
          ex: [
            { t: 'number', q: 'Un cliente deja $300 en el tiempo y costó $100 conseguirlo. ¿Cuántas veces deja lo que costó?', a: 3, unit: 'veces', why: '300 ÷ 100 = 3.' },
            { t: 'number', q: 'Conseguir una alumna cuesta $100 y deja $20 por mes. ¿En cuántos meses se recupera?', a: 5, unit: 'meses', why: '100 ÷ 20 = 5.' },
            { t: 'choice', q: 'LTV/CAC de 1,5. ¿Cómo lo leés?', o: ['Excelente', 'Funciona, pero con poco margen de error', 'Pierde plata'], a: 1, why: 'Gana, pero cualquier desvío lo da vuelta.' },
            { t: 'tf', q: 'Una empresa que gana plata puede quedarse sin caja si crece muy rápido.', a: true, why: 'Paga hoy por muchos clientes y recupera esa plata de a poco.' },
          ],
        },
        {
          id: 'u3l5', title: 'Cuánto pagar por un cliente', icon: '🎯',
          read: [
            { h: 'Tres criterios', body: `
<p>No hay una única respuesta. Depende de cómo es el negocio:</p>
<ol>
<li><b>Que la primera compra lo pague</b>: para negocios donde se compra una sola vez o donde hay poca plata en caja. Roble, por ejemplo.</li>
<li><b>Que el cliente valga bastante más de lo que cuesta</b>: para negocios donde está comprobado que la gente vuelve. Flow, por ejemplo.</li>
<li><b>Que la plata vuelva a tiempo</b>: en un plazo que la caja aguante.</li>
</ol>
<div class="callout">La decisión final es del dueño: cuánto “adelantar” por clientes que pagan después depende de la caja y del riesgo que quiera correr.</div>` },
            { h: 'Cuidado con lo que todavía no pasó', body: `
<p>Es tentador decir “este cliente va a comprar cinco veces, así que puedo pagar mucho por él”. Pero si esa recompra es una suposición y no un dato, estás apostando.</p>
<p>Usá recompras que ya viste en clientes reales, no las que te gustaría ver.</p>` },
          ],
          ex: [
            { t: 'choice', q: 'Empresa con poca caja y producto que se compra una vez. ¿Qué criterio usás?', o: ['Lo que vale el cliente en cinco años', 'Que la primera compra pague lo que costó conseguirlo', 'El costo por consulta más bajo'], a: 1, why: 'Sin recompra ni caja, la primera venta tiene que alcanzar.' },
            { t: 'tf', q: 'Cuánto pagar por un cliente es una decisión puramente matemática.', a: false, why: 'Depende también de la caja y del riesgo que la empresa quiere correr.' },
            { t: 'choice', q: '¿Qué recompra usás para decidir cuánto pagar por un cliente?', o: ['La que ya se vio en clientes reales', 'La que esperamos que pase', 'La de la competencia'], a: 0, why: 'Lo demás es una apuesta.' },
          ],
        },
        {
          id: 'w3', title: 'Caso: ¿qué clientes salir a buscar?', icon: '💼',
          read: [
            { h: '¿Qué clientes conviene salir a buscar?', body: `
<p>Flow puede hacer publicidad para dos cosas:</p>
<ul>
<li><b>Clase suelta</b>: atrae a mucha gente que viene una vez y casi nunca vuelve. Conseguir cada una es barato.</li>
<li><b>Plan mensual</b>: atrae menos gente y conseguir cada una cuesta el doble, pero 7 de cada 10 se quedan más de un año.</li>
</ul>` },
          ],
          ex: [
            { t: 'choice', q: '¿Cuál deja más en la primera compra?', o: ['La clase suelta, porque es barata de conseguir', 'El plan mensual', 'No se puede saber'], a: 0, why: 'Es más barato conseguirla, así que la primera venta rinde más.' },
            { t: 'choice', q: '¿Cuál vale más en el tiempo?', o: ['La clase suelta', 'El plan mensual, porque la mayoría se queda', 'Valen lo mismo'], a: 1, why: 'Una alumna que se queda un año deja muchas cuotas.' },
            { t: 'tf', q: 'Que conseguir una alumna del plan cueste el doble la hace peor negocio.', a: false, why: 'Si deja mucho más de lo que cuesta, pagar el doble conviene.' },
            { t: 'choice', q: '¿Dónde ponés el próximo peso?', o: ['En la clase suelta', 'En el plan mensual, si Flow tiene caja para esperar', 'En ninguno'], a: 1, why: 'Rinde más por peso invertido, pero recupera la plata más lento.' },
            { t: 'open', q: '¿Qué verificarías antes de mover la publicidad al plan mensual? ¿En qué caso seguirías con la clase suelta?', key: 'w3', model: `<p>Verificar que el “7 de cada 10 se quedan” salga de alumnas reales y no de una suposición, que el costo de conseguirlas se mantenga si se invierte más y que haya lugar en las clases. Seguiría con la clase suelta si Flow necesita plata rápido, o si se comprueba que de ahí salen alumnas que después se pasan al plan.</p>`, points: ['Verifica que la permanencia salga de alumnas reales', 'Revisa que el costo por alumna se sostenga al invertir más', 'Revisa si hay lugar en las clases', 'Explica cuándo conviene la clase suelta (caja o puerta de entrada)'] },
          ],
        },
      ],
    },
    {
      code: '7.3', title: 'Palancas de crecimiento',
      lessons: [
        {
          id: 'u1l5', title: 'Capacidad y palancas', icon: '🚦',
          read: [
            { h: 'Demanda que no se puede atender', body: `
<p>Roble lanza una campaña buenísima y le llegan pedidos para 70 muebles. Pero el taller solo puede hacer 50 por mes. ¿Qué pasa?</p>
<div class="chain">demoras → clientes enojados → cancelaciones → malas reseñas → la próxima campaña rinde menos</div>
<p>Por eso, antes de traer más clientes, una directora le pregunta a quien produce: <em>“Si te traigo 30% más de pedidos, ¿llegás?”</em></p>` },
            { h: 'Cinco formas de crecer', body: `
<p>Casi todo el mundo piensa que crecer es “conseguir más clientes”. Es solo una de cinco palancas:</p>
<ol>
<li><b>Más clientes</b>.</li>
<li><b>Más conversión</b>: que compre más gente de la que ya consulta.</li>
<li><b>Más ticket</b>: que cada uno gaste más por compra.</li>
<li><b>Más frecuencia</b>: que vuelvan a comprar.</li>
<li><b>Más margen</b>: que cada venta deje más.</li>
</ol>
<div class="callout strong">Marketing suele obsesionarse con la primera. Una directora mueve las cinco.</div>` },
            { h: 'Las palancas en Roble', body: `
<ul>
<li><b>Ticket</b>: a quien compra una mesa, ofrecerle las sillas que combinan.</li>
<li><b>Conversión</b>: responder WhatsApp en minutos, no en horas.</li>
<li><b>Frecuencia</b>: volver a escribirle cuando se muda o arma otro ambiente.</li>
<li><b>Margen</b>: empujar los muebles que dejan más.</li>
<li><b>Clientes</b>: sumar arquitectos y decoradores que lo recomienden.</li>
</ul>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada palanca con un ejemplo de Roble.', pairs: [['Más ticket', 'Ofrecer las sillas que combinan con la mesa'], ['Más conversión', 'Responder WhatsApp más rápido'], ['Más frecuencia', 'El cliente vuelve a comprar'], ['Más margen', 'Empujar lo que deja más']] },
            { t: 'tf', q: 'Crecer siempre significa conseguir más clientes.', a: false, why: 'También se crece vendiendo más a los que ya consultan, subiendo el ticket, la recompra o el margen.' },
            { t: 'choice', q: 'El taller de Roble ya trabaja al máximo. ¿Qué tiene más sentido?', o: ['Duplicar la publicidad', 'Ganar más con los pedidos que ya hay: ticket y margen', 'Hacer 30% de descuento'], a: 1, why: 'Si no podés fabricar más, conviene que cada venta deje más.' },
            { t: 'choice', q: '¿Qué le preguntás a quien produce antes de lanzar una campaña grande?', o: ['¿Te gusta el anuncio?', 'Si llegan más pedidos, ¿llegás a hacerlos?', '¿Qué color preferís?'], a: 1, why: 'Traer pedidos que no se pueden cumplir termina en clientes enojados.' },
          ],
        },
        {
          id: 'u10l1', title: 'El árbol de crecimiento', icon: '🌳',
          read: [
            { h: 'Una multiplicación', body: `
<p>Lo que vende una empresa se puede partir en cuatro ramas:</p>
<div class="formula">Ventas = gente que llega × cuántos compran × cuánto gasta cada uno × cuántas veces vuelve</div>
<p>Cada rama tiene sus propias ramitas. Por ejemplo, “cuánto gasta” depende del precio y de si suma complementos.</p>` },
            { h: 'Por qué conviene mover varias', body: `
<p>Como las ramas se multiplican, una mejora chica en cada una se <b>potencia</b>. Mejorar un poquito las cuatro suele dar más que lo que parece sumando.</p>
<p>Y además es más fácil: mejorar un poco en cuatro lados cuesta menos que duplicar uno solo.</p>
<div class="callout">Ejemplo en Brote: un poco más de gente que entra, un poco más que pide algo para acompañar el café, un poco más que vuelve a la semana. Ninguna es espectacular; juntas cambian el mes.</div>` },
          ],
          ex: [
            { t: 'order', q: 'Ordená las ramas como aparecen en la multiplicación.', items: ['Gente que llega', 'Cuántos compran', 'Cuánto gasta cada uno', 'Cuántas veces vuelve'], why: 'Ventas = gente × cuántos compran × cuánto gastan × cuántas veces vuelven.' },
            { t: 'tf', q: 'Mejorar un poco varias ramas suele dar más que lo que parece sumando.', a: true, why: 'Como se multiplican, las mejoras se potencian.' },
            { t: 'choice', q: '¿Qué suele ser más fácil?', o: ['Duplicar una sola rama', 'Mejorar un poco varias ramas', 'Las dos cosas cuestan igual'], a: 1, why: 'Las mejoras chicas son más alcanzables.' },
          ],
        },
        {
          id: 'u8l1', title: 'Lo que deja cada producto', icon: '📦',
          read: [
            { h: 'No todos los productos son iguales', body: `
<p>Roble vende mesas, sillas, estantes y almohadones. Para saber cuál empujar, mirá cuatro cosas:</p>
<ul>
<li><b>Cuánto deja</b> cada uno, después de pagar lo que cuesta conseguir al cliente.</li>
<li><b>Cuánta gente lo quiere</b>.</li>
<li><b>Si el taller puede hacerlo</b> y entregarlo.</li>
<li><b>Qué papel cumple</b>: atraer clientes nuevos, dejar ganancia, que vuelvan, o dar imagen.</li>
</ul>
<div class="callout">El producto más caro no siempre es el que más conviene empujar.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Qué producto conviene empujar?', o: ['El más caro', 'El que más deja, con demanda y capacidad para hacerlo', 'El más nuevo'], a: 1, why: 'Un precio alto no alcanza.' },
            { t: 'match', q: 'Uní cada papel con un ejemplo de Roble.', pairs: [['Atraer clientes nuevos', 'Un estante barato y fácil de comprar'], ['Dejar ganancia', 'Una mesa a medida'], ['Que vuelvan', 'Almohadones de temporada']] },
            { t: 'tf', q: 'Si un producto deja mucho pero el taller no puede hacerlo, no conviene empujarlo.', a: true, why: 'Traerías pedidos que no se pueden cumplir.' },
          ],
        },
        {
          id: 'u8l2', title: 'Margen × demanda', icon: '🗺️',
          read: [
            { h: 'Un mapa de cuatro casilleros', body: `
<table><thead><tr><th></th><th>Mucha demanda</th><th>Poca demanda</th></tr></thead><tbody>
<tr><td><b>Deja mucho</b></td><td>⭐ Empujar</td><td>Construir demanda</td></tr>
<tr><td><b>Deja poco</b></td><td>Usarlo como puerta de entrada</td><td>Revisar o dejar de vender</td></tr>
</tbody></table>
<p>Un producto que deja poco pero mucha gente quiere puede servir si <b>abre la puerta</b> a otras compras que dejan más. Sin esa segunda compra, es trabajo que no paga los gastos.</p>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada casillero con la acción.', pairs: [['Deja mucho, mucha demanda', 'Empujar'], ['Deja mucho, poca demanda', 'Construir demanda'], ['Deja poco, mucha demanda', 'Usar como puerta de entrada'], ['Deja poco, poca demanda', 'Revisar o dejar de vender']] },
            { t: 'tf', q: 'Un producto que deja poco siempre debería dejar de venderse.', a: false, why: 'Puede ser la puerta de entrada a compras que dejan más.' },
            { t: 'choice', q: 'Un producto deja mucho, pero casi nadie lo conoce. ¿Qué hacés?', o: ['Lo dejo de vender', 'Trabajo para que más gente lo conozca y lo quiera', 'Le bajo el precio a la mitad'], a: 1, why: 'Vale la pena construirle demanda.' },
          ],
        },
        {
          id: 'u8l3', title: 'El efecto mix', icon: '🎚️',
          read: [
            { h: 'Misma facturación, distinta ganancia', body: `
<p>El <b>mix</b> es la combinación de productos que vendés.</p>
<p>Imaginá dos meses en Lumen con la misma facturación. En el primero vendió sobre todo lámparas baratas que dejan poco. En el segundo, más lámparas de diseño que dejan mucho.</p>
<p>Vendió lo mismo, pero <b>el segundo mes ganó bastante más</b>.</p>
<div class="callout strong">Marketing decide el mix con lo que muestra, lo que promociona y dónde invierte.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Cómo sube marketing la ganancia sin vender más?', o: ['No se puede', 'Empujando los productos que dejan más', 'Bajando precios'], a: 1, why: 'Cambiar el mix cambia lo que queda.' },
            { t: 'tf', q: 'Dos meses con la misma facturación siempre dejan la misma ganancia.', a: false, why: 'Depende de qué productos se vendieron.' },
            { t: 'choice', q: '¿Con qué herramientas cambia marketing el mix?', o: ['Con lo que muestra, promociona y dónde invierte', 'Cambiando los costos de fábrica', 'Con el balance'], a: 0, why: 'Decide qué productos ve y desea el cliente.' },
          ],
        },
        {
          id: 'u8l4', title: 'Cross-sell', icon: '➕',
          read: [
            { h: 'Vender algo más', body: `
<p>El <b>cross-sell</b> es ofrecerle a quien ya compra algo que lo complemente. Como en el cine: “¿le agrego pochoclos?”.</p>
<p>En Roble: a quien compra una mesa, ofrecerle las sillas o un mantel. Lo que gasta cada cliente sube y, como los complementos suelen dejar buen margen, la ganancia sube todavía más.</p>` },
            { h: 'El momento justo', body: `
<ul>
<li><b>En el presupuesto</b>: armar un combo.</li>
<li><b>En la entrega</b>: cuando ve la mesa en su casa y le faltan sillas.</li>
<li><b>Unas semanas después</b>: un mensaje con algo que combine.</li>
</ul>
<div class="callout warn">Nunca antes de que elija lo principal: primero que decida, después ofrecés.</div>` },
          ],
          ex: [
            { t: 'choice', q: '¿Cuál NO es un buen momento para ofrecer un complemento?', o: ['En el presupuesto', 'En la entrega', 'Antes de que el cliente elija lo principal'], a: 2, why: 'Primero tiene que estar decidida la compra principal.' },
            { t: 'tf', q: 'El cross-sell sube lo que gasta cada cliente.', a: true, why: 'Suma un producto a la compra.' },
            { t: 'choice', q: '¿Cuál es un ejemplo de cross-sell en Lumen?', o: ['Bajar el precio de una lámpara', 'Ofrecer la lamparita que va con la lámpara elegida', 'Hacer más anuncios'], a: 1, why: 'Complementa lo que ya está comprando.' },
          ],
        },
      ],
    },
    {
      code: '7.4', title: 'Experimentación y growth',
      lessons: [
        {
          id: 'u10l4', title: 'Experimentar con método', icon: '🧪',
          read: [
            { h: 'Elegir qué probar primero', body: `
<p>Siempre hay más ideas que tiempo. Para ordenarlas, puntuá cada una del 1 al 10 en tres cosas (a esto se le dice <b>ICE</b>):</p>
<ul>
<li><b>Impacto</b>: si funciona, ¿cuánto cambia?</li>
<li><b>Confianza</b>: ¿qué tan segura estás de que va a funcionar?</li>
<li><b>Facilidad</b>: ¿qué tan fácil es hacerlo?</li>
</ul>
<p>Las ideas con mejor puntaje van primero.</p>` },
            { h: 'Cómo se arma una prueba', body: `
<p>Cada prueba necesita, antes de empezar:</p>
<ul>
<li><b>Una hipótesis</b>: “si respondemos en menos de 15 minutos, más gente va a llegar a hablar con un vendedor”.</li>
<li><b>Qué vas a medir</b>.</li>
<li><b>Cuánto dura</b>.</li>
<li><b>Qué vas a hacer según el resultado</b>.</li>
</ul>
<div class="callout">“Probemos TikTok a ver qué pasa” no es un experimento: es una actividad.</div>` },
          ],
          ex: [
            { t: 'match', q: 'Uní cada letra de ICE con su pregunta.', pairs: [['Impacto', 'Si funciona, ¿cuánto cambia?'], ['Confianza', '¿Qué tan segura estoy?'], ['Facilidad', '¿Qué tan fácil es hacerlo?']] },
            { t: 'choice', q: '¿Qué le falta a “probemos TikTok a ver qué pasa”?', o: ['Presupuesto', 'Hipótesis, qué medir y qué hacer según el resultado', 'Videos'], a: 1, why: 'Sin eso no sabés si funcionó ni qué hacer después.' },
            { t: 'tf', q: 'Qué hacer según el resultado se decide antes de empezar la prueba.', a: true, why: 'Si lo decidís después, el resultado se interpreta como te convenga.' },
          ],
        },
        {
          id: 'm7s4l1', title: 'Una prueba, una variable', icon: '🧫',
          read: [
            { h: 'El error de cambiar todo junto', body: `
<p>Lumen cambió la página de inicio y, la misma semana, duplicó el presupuesto. Las ventas subieron. ¿Qué funcionó? No hay forma de saberlo.</p>
<p>Un <b>experimento</b> útil cambia <b>una cosa</b> y deja el resto igual, para poder atribuirle el resultado.</p>` },
            { h: 'Los elementos de una prueba', body: `
<ul>
<li><b>Intervención</b>: qué cambiás.</li>
<li><b>Comparación</b>: contra qué lo comparás (un grupo que no ve el cambio, o un período parecido).</li>
<li><b>Horizonte</b>: cuánto dura, al menos un ciclo de venta.</li>
<li><b>Criterio de decisión</b>: qué resultado te hace seguir o volver atrás.</li>
<li><b>Aprendizaje</b>: qué anotás, salga bien o mal.</li>
</ul>
<div class="callout">Quedate con esto: no toda mejora aparente es consecuencia de lo que cambiaste.</div>` },
          ],
          ex: [
            { t: 'tf', q: 'Cambiar la página y el presupuesto a la vez permite saber qué funcionó.', a: false, why: 'Los efectos se mezclan y no se pueden separar.' },
            { t: 'match', q: 'Uní cada elemento de la prueba con su pregunta.', pairs: [['Intervención', '¿Qué cambio?'], ['Comparación', '¿Contra qué lo comparo?'], ['Horizonte', '¿Cuánto dura?'], ['Criterio', '¿Qué resultado me hace seguir?']] },
            { t: 'open', q: 'Lumen quiere probar si una nueva ficha de producto vende más. ¿Qué mantendrías constante durante la prueba?', model: `<p>Mantendría igual el presupuesto y los anuncios, los precios, las promociones y el stock de los productos involucrados. Solo cambiaría la ficha.</p><p>Si es posible, mostraría la ficha nueva a la mitad de las visitas y la vieja a la otra mitad al mismo tiempo, así la temporada afecta a los dos grupos por igual.</p>`, points: ['Cambia solo la ficha', 'Mantiene presupuesto, precios y promociones', 'Propone comparar dos grupos al mismo tiempo', 'Considera la temporada'] },
          ],
        },
        {
          id: 'u10l2', title: 'Retención y cohortes', icon: '🔁',
          read: [
            { h: 'Seguir a un grupo de clientes', body: `
<p>Una <b>cohorte</b> es un grupo de clientes que empezó en el mismo momento. Por ejemplo, las alumnas que se anotaron en Flow en enero.</p>
<p>Seguís a ese grupo y mirás: ¿cuántas siguen a los 3 meses? ¿Y a los 6? ¿Y al año?</p>
<p>Después comparás con el grupo de abril. Si las de abril se quedan más, algo mejoró: las clases, la atención, los mensajes de seguimiento.</p>` },
            { h: 'Retener suele ser más barato', body: `
<p>Para conseguir una alumna nueva, Flow tiene que pagar publicidad. Para que una alumna actual se quede, alcanza con que esté contenta.</p>
<div class="callout strong">Cuidar a los clientes que ya tenés casi siempre sale más barato que conseguir nuevos.</div>` },
          ],
          ex: [
            { t: 'choice', q: 'Las alumnas de abril siguen viniendo más que las de enero a los 6 meses. ¿Qué indica?', o: ['Nada', 'Algo mejoró en la experiencia o el seguimiento', 'Que abril tuvo más alumnas'], a: 1, why: 'Comparar cohortes muestra si los cambios funcionan.' },
            { t: 'tf', q: 'Retener clientes suele ser más barato que conseguir nuevos.', a: true, why: 'No hay que volver a pagar para traerlos.' },
            { t: 'choice', q: '¿Qué es una cohorte?', o: ['Un tipo de anuncio', 'Un grupo de clientes que empezó en el mismo momento', 'Un descuento'], a: 1, why: 'Se sigue al grupo para ver cuántos se quedan.' },
          ],
        },
      ],
    },
  ],
  lab: [
    'En tu empresa elegida (o en una tienda que conozcas), hacé una compra de prueba desde el celular y anotá cada fricción.',
    'Estimá cuánto deja un cliente típico en un año y compará con lo que cuesta conseguirlo.',
    'Elegí dos palancas de crecimiento que no dependan de traer clientes nuevos.',
    'Diseñá una prueba con una sola variable, su comparación y su criterio de decisión.',
  ],
  challenge: {
    key: 'w10', title: '¿De dónde sale el crecimiento?',
    intro: `<p>El dueño de Lumen quiere crecer 25% este año. Hoy:</p>
<ul>
<li>De cada 100 visitas a la tienda, compran pocas.</li>
<li>Muy pocos clientes suman una lamparita o una pantalla a su compra.</li>
<li>Casi nadie vuelve a comprar.</li>
</ul>`,
    steps: [
      { t: 'tf', q: 'La única forma de crecer 25% es traer 25% más de visitas.', a: false, why: 'También se puede mejorar cuántos compran, cuánto gastan y si vuelven.' },
      { t: 'choice', q: '¿Qué palanca suma ventas sin pagar más publicidad?', o: ['Ofrecer la lamparita o la pantalla en el carrito', 'Más anuncios', 'Bajar todos los precios'], a: 0, why: 'Sube lo que gasta cada cliente que ya está comprando.' },
      { t: 'choice', q: '¿Cuál es la mejor estrategia?', o: ['Solo más visitas', 'Combinar un poco de cada palanca', 'Bajar precios'], a: 1, why: 'Las mejoras chicas en varias ramas se multiplican.' },
    ],
    reflect: 'Armá tu combinación de palancas: ¿qué acción concreta harías en cada una?',
    solution: `<ul><li><b>Cuántos compran</b>: mejores fotos, reseñas visibles y responder rápido las dudas.</li><li><b>Cuánto gastan</b>: ofrecer la lamparita y la pantalla en el carrito.</li><li><b>Cuántas veces vuelven</b>: un mensaje a los 2 meses con algo que combine.</li><li><b>Gente que llega</b>: un poco más de publicidad.</li></ul><p>Ninguna sola llega al 25%; juntas, sí. Y antes, chequear que haya stock para vender más.</p>`,
  },
  cards: [
    { q: 'Piezas de una tienda online', a: 'Catálogo, confianza, disponibilidad, pago, entrega y posventa.' },
    { q: 'Checkout', a: 'El último paso de la compra. Los costos sorpresa ahí disparan el abandono.' },
    { q: 'LTV', a: 'Lo que deja un cliente mientras se queda, calculado con lo que deja y no con lo que paga.' },
    { q: 'Payback', a: 'Cuánto tarda en volver la plata que costó conseguir al cliente.' },
    { q: 'Efecto mix', a: 'Misma facturación con otra combinación de productos deja distinta ganancia.' },
    { q: 'Experimento', a: 'Cambiar una variable, comparar contra algo y decidir con un criterio definido antes.' },
  ],
});
