/* Brain — contenido del Mini MBA para Fractional CMO.
   Formato para retener: una idea por lección, lenguaje simple, pocos números,
   "quedate con esto" y una pregunta rápida para fijar. */

const PRINCIPLES = {
  rule: '¿Y esto qué significa para el negocio?',
  ruleNote: 'Cada vez que veas un número de marketing, hacete esta pregunta. Si no la podés responder, el análisis no terminó.',
  sequence: ['Dato', 'Contexto', 'Pregunta', 'Decisión'],
  chain: ['Inversión', 'Clientes', 'Ventas', 'Lo que queda', 'Ganancia'],
  bar: 'No necesitás ser contadora. Necesitás entender el negocio lo suficiente para que una decisión de marketing nunca termine en una métrica de marketing.',
};

const PHASES = [
  { id: 'f1', name: 'Cómo gana plata una empresa', weeks: [1, 2, 3], desc: 'Lo básico para mirar una empresa como negocio y no solo como campañas.' },
  { id: 'f2', name: 'Del lead a la venta', weeks: [4, 5, 6], desc: 'Cómo se convierte la demanda en ventas, cómo proyectar y cuánto invertir.' },
  { id: 'f3', name: 'Otras palancas además de pauta', weeks: [7, 8, 9], desc: 'Precio, qué productos empujar y los límites de la operación.' },
  { id: 'f4', name: 'Dirigir', weeks: [10, 11, 12], desc: 'Crecer con criterio, pensar estrategia y presentar decisiones.' },
];

const WEEKS = [
  /* ───────────────────────── SEMANA 1 ───────────────────────── */
  {
    n: 1,
    title: 'Cómo gana plata una empresa',
    goal: 'Entender la diferencia entre vender y ganar, y dónde entra marketing.',
    summary: [
      'Vender no es ganar: de cada venta, una parte se va en costos.',
      'Un lead barato no es lo mismo que una venta barata.',
      'Antes de traer más clientes, preguntá si la empresa los puede atender.',
    ],
    sections: [
      {
        title: 'Vender no es ganar',
        idea: 'Lo que entra por una venta no es lo que la empresa gana.',
        body: `
<p>Pensá en un kiosco. Vende un alfajor a <b>$100</b>. Ese alfajor le costó <b>$60</b>. Le quedan <b>$40</b>.</p>
<p>Con esos $40 todavía tiene que pagar el alquiler, la luz y su sueldo. Recién lo que sobra después de eso es ganancia.</p>
<p>Las empresas grandes funcionan igual, solo que con más ceros. Cuando un cliente te dice “facturamos 100 millones”, todavía no sabés si gana plata.</p>`,
        remember: 'Facturar es lo que entra. Ganar es lo que queda después de pagar todo.',
        check: {
          q: 'Un cliente factura mucho más que el año pasado. ¿Eso significa que gana más?',
          options: ['Sí, si factura más gana más', 'No necesariamente: depende de cuánto le queda de cada venta', 'Solo si invirtió más en publicidad'],
          answer: 1,
          why: 'Puede vender más y ganar menos, por ejemplo si vendió con descuentos o productos que dejan poco.',
        },
      },
      {
        title: 'Lo que queda de cada venta',
        idea: 'Hay costos que vienen con cada venta, y costos que están siempre.',
        body: `
<p>Seguimos con el kiosco:</p>
<ul>
<li><b>Costos de cada venta</b>: el alfajor, la comisión de la tarjeta. Si no vendés, no los pagás.</li>
<li><b>Costos fijos</b>: el alquiler, los sueldos. Los pagás vendas o no.</li>
</ul>
<p>Lo que queda de cada venta después de sus propios costos se llama <b>margen de contribución</b>. Es la plata que “contribuye” a pagar los costos fijos.</p>
<p>No hace falta memorizar el nombre. Lo importante es la pregunta: <em>“¿cuánto nos queda de cada venta?”</em></p>`,
        remember: 'La pregunta clave es: ¿cuánto nos queda de cada venta? Con eso se pagan los fijos.',
        check: {
          q: '¿Cuál de estos es un costo fijo?',
          options: ['La mercadería que se vende', 'La comisión del vendedor por cada venta', 'El alquiler del local'],
          answer: 2,
          why: 'El alquiler se paga aunque no vendas nada. Los otros dos aparecen solo cuando hay venta.',
        },
      },
      {
        title: 'Cuántas ventas para no perder',
        idea: 'Hay un número de ventas a partir del cual la empresa empieza a ganar.',
        body: `
<p>El kiosco paga <b>$4.000</b> por mes de alquiler y sueldos. Cada alfajor le deja <b>$40</b>.</p>
<p>¿Cuántos alfajores tiene que vender para cubrir esos $4.000? <b>100</b>.</p>
<p>Ese es el <b>punto de equilibrio</b>. Del alfajor 101 en adelante, empieza a ganar.</p>
<p>Para vos sirve así: si el dueño dice “tenemos que crecer”, la primera pregunta es <em>¿cuántas ventas más necesitamos?</em>, no <em>¿cuánto más ponemos en Meta?</em></p>`,
        remember: 'Punto de equilibrio = cuántas ventas hacen falta para pagar los fijos. Después de eso, se gana.',
        check: {
          q: 'Fijos de $10.000 por mes y cada venta deja $100. ¿Cuántas ventas para no perder?',
          options: ['10', '100', '1.000'],
          answer: 1,
          why: '$10.000 ÷ $100 = 100 ventas.',
        },
      },
      {
        title: 'Un lead barato no es una venta barata',
        idea: 'Lo que importa es cuánto cuesta conseguir un cliente, no un contacto.',
        body: `
<p>Pensalo como pescar: una cosa es cuánto te cuesta cada pique, y otra cuánto te cuesta cada pescado que llevás a casa.</p>
<ul>
<li><b>CPL</b> = lo que cuesta cada lead (cada pique).</li>
<li><b>CAC</b> = lo que cuesta cada cliente que compra (cada pescado).</li>
</ul>
<p>Dos campañas con la misma inversión: A trae 100 leads y 2 ventas; B trae 60 leads y 3 ventas. A tiene leads más baratos, pero <b>B vende más</b>.</p>
<p>Por eso, cuando Meta muestra un CPL hermoso, la pregunta es: <em>¿y esos leads compran?</em></p>`,
        remember: 'CPL es el costo del contacto. CAC es el costo del cliente. Decidí mirando el CAC.',
        check: {
          q: 'Invertiste $1.000, llegaron 100 leads y compraron 5. ¿Cuánto costó cada cliente?',
          options: ['$10', '$100', '$200'],
          answer: 2,
          why: '$1.000 ÷ 5 clientes = $200. Los $10 son el costo por lead.',
        },
      },
      {
        title: '¿Podemos atender más clientes?',
        idea: 'Traer más demanda de la que la empresa puede atender es un problema, no un éxito.',
        body: `
<p>Imaginá un restaurante lleno. Si hacés publicidad y llega el doble de gente: esperan una hora, la comida sale mal, se van enojados y dejan malas reseñas.</p>
<p>Con una empresa pasa lo mismo: si la fábrica entrega 50 por mes y vos generás 70 ventas, tenés retrasos, reclamos y vendedores saturados.</p>
<p>Por eso, antes de subir inversión, una directora pregunta: <em>“Si traigo 30% más de clientes, ¿los podemos atender?”</em></p>
<p>Y si la respuesta es no, hay otros caminos: vender productos que dejan más, sumar accesorios, mejorar precio.</p>`,
        remember: 'Marketing trae la demanda. La empresa tiene que poder convertirla en ventas bien hechas.',
        check: {
          q: 'La empresa ya trabaja casi al máximo de su capacidad. ¿Qué tiene más sentido?',
          options: ['Duplicar la pauta para vender más', 'Trabajar precio, productos que dejan más o accesorios', 'Bajar los precios'],
          answer: 1,
          why: 'Si no podés atender más clientes, conviene ganar más con los que ya tenés.',
        },
      },
    ],
    cmoQuestions: [
      '¿Esos leads compran?',
      '¿Cuánto nos queda de cada venta?',
      '¿Podemos atender más clientes?',
    ],
    lab: [
      'Averiguá cuánto le queda a Durabox de cada tapa vendida (aunque sea aproximado).',
      'Preguntá cuánto suman los costos fijos por mes y calculá cuántas tapas hacen falta para cubrirlos.',
      'Anotá qué datos no tenés y a quién se los pedirías.',
    ],
    case: {
      title: 'Caso 1 — “Quiero crecer 30%, metamos más publicidad”',
      prompt: `
<p>Un dueño te dice: <em>“Quiero vender 30% más. Pongamos más publicidad.”</em></p>
<p>Lo que sabés:</p>
<ul>
<li>Vende <b>100</b> equipos por mes. Cada uno le deja <b>$350.000</b> después de sus costos.</li>
<li>Los costos fijos son <b>$25 M</b> por mes.</li>
<li>Invierte <b>$5 M</b> en publicidad, que le trae <b>1.000 leads</b> y <b>50 ventas</b>.</li>
<li>La fábrica puede hacer <b>130</b> por mes como máximo.</li>
</ul>
<p>Pensá en estas preguntas:</p>
<ol><li>¿Hoy gana plata?</li><li>¿Cuánto cuesta cada cliente que viene de la publicidad?</li><li>¿Qué problema ves en crecer 30%?</li><li>¿Qué le preguntarías antes de aprobar más publicidad?</li></ol>`,
      starterAnswer: `1. Sí. Para alcanzar el costo fijo necesita 72 ventas, le quedan 58 ventas para generar rentabilidad dentro de su capacidad máxima.
2. $350.000
3. $10.000
4. Que la tasa de conversión es muy baja, y aumentar publicidad no cambia eso.
5. Cómo vamos a hacer para mejorar esa tasa de conversión. Que tenemos que conseguir 338.000 leads para conseguir 130 ventas, lo que significa mucho más de un 30% de aumento de la inversión.`,
      solution: `
<p><strong>1. ¿Gana plata?</strong> Sí. Necesita unas 72 ventas para pagar los fijos y hoy hace 100. Está unas 28 ventas por encima.</p>
<p><strong>2. ¿Cuánto cuesta cada cliente?</strong> $5 M ÷ 50 clientes = <b>$100.000</b>. (Ojo: $5.000 es lo que cuesta cada lead, no cada cliente.)</p>
<p><strong>3. El problema escondido:</strong> crecer 30% es llegar a 130… que es justo el máximo de la fábrica. Antes de invertir, hay que hablar con producción.</p>
<p>Además, la publicidad trae solo la mitad de las ventas. Para sumar 30 ventas con publicidad haría falta subir la inversión cerca de <b>60%</b>, no 30%.</p>
<p><strong>4. Preguntas de directora:</strong> ¿de dónde vienen las otras 50 ventas? ¿Podemos atender 130? ¿Y si en vez de más clientes vendemos productos que dejan más o accesorios?</p>
<div class="callout">Devolución: tu intuición fue buena (no aceptar “crecer = más publicidad”). Lo que hay que practicar: <strong>primero hacer la cuenta, después sacar conclusiones</strong>, y no confundir costo por lead con costo por cliente.</div>`,
    },
    cards: [
      { q: '¿Facturar es lo mismo que ganar?', a: 'No. Facturar es lo que entra; ganar es lo que queda después de pagar todos los costos.' },
      { q: '¿Qué es el margen de contribución, en simple?', a: 'Lo que queda de cada venta después de pagar lo que cuesta esa venta. Con eso se pagan los costos fijos.' },
      { q: '¿Qué es el punto de equilibrio?', a: 'La cantidad de ventas necesarias para pagar los costos fijos. Después de ese número, se gana.' },
      { q: 'CPL vs CAC', a: 'CPL: cuánto cuesta un contacto. CAC: cuánto cuesta un cliente que compra.' },
      { q: '¿Qué preguntar antes de subir la pauta?', a: '¿Podemos atender a los clientes nuevos? ¿Esos leads compran? ¿Cuánto nos deja cada venta?' },
    ],
  },

  /* ───────────────────────── SEMANA 2 ───────────────────────── */
  {
    n: 2,
    title: 'Cuánto puede gastar marketing para vender',
    goal: 'Saber hasta cuánto conviene pagar por un cliente y desconfiar de los números sueltos.',
    summary: [
      'Hay un tope de cuánto pagar por un cliente, y sale de lo que deja cada venta.',
      'Un ROAS solo no dice si se gana: depende de cuánto queda de cada venta.',
      'Un descuento chico se come mucha ganancia.',
    ],
    sections: [
      {
        title: 'El tope para conseguir un cliente',
        idea: 'Lo máximo que podés pagar por un cliente depende de lo que deja su compra.',
        body: `
<p>Una venta deja <b>$40</b>. La empresa quiere quedarse con al menos <b>$25</b> de cada venta.</p>
<p>Entonces, para conseguir ese cliente puede gastar como máximo <b>$15</b>.</p>
<p>Ese es el <b>CAC máximo</b>: el tope de lo que conviene pagar por un cliente.</p>
<p>Muchas empresas tienen objetivos tipo “el lead tiene que costar menos de $5.000” sin saber de dónde sale ese número. Este tope le da a marketing un criterio de verdad.</p>`,
        remember: 'Lo que puedo pagar por un cliente = lo que deja la venta − lo que la empresa quiere quedarse.',
        check: {
          q: 'Cada venta deja $100 y la empresa quiere quedarse con $70. ¿Cuánto puede costar como máximo conseguir un cliente?',
          options: ['$30', '$70', '$100'],
          answer: 0,
          why: '$100 − $70 = $30.',
        },
      },
      {
        title: 'Del tope de cliente al tope de lead',
        idea: 'Si ventas cierra mejor, cada lead puede costar más y seguir conviniendo.',
        body: `
<p>Si podés pagar <b>$15</b> por cliente y <b>1 de cada 10</b> leads compra, cada lead puede costar hasta <b>$1,50</b>.</p>
<p>Ahora, si el equipo de ventas mejora y compra <b>1 de cada 5</b>, cada lead puede costar hasta <b>$3</b>.</p>
<p>¿Ves lo que pasa? Alguien podría decir “empeoró Meta, el lead está más caro”, cuando en realidad la empresa gana más porque ventas cierra mejor.</p>`,
        remember: 'El costo del lead no se puede juzgar sin saber cuántos de esos leads compran.',
        check: {
          q: 'El costo por lead subió, pero ventas cierra el doble que antes. ¿Qué pensás?',
          options: ['Las campañas empeoraron', 'Puede estar perfecto: hay que mirar cuánto cuesta cada cliente', 'Hay que pausar Meta'],
          answer: 1,
          why: 'Si cada lead compra más, el costo por cliente puede ser igual o menor aunque el lead cueste más.',
        },
      },
      {
        title: 'ROAS: ¿bueno comparado con qué?',
        idea: 'Un ROAS alto puede estar perdiendo plata si cada venta deja poco.',
        body: `
<p>ROAS 5 significa que por cada $1 en publicidad se venden $5. Suena bien, pero:</p>
<ul>
<li>Si de esos $5 te quedan <b>$2,50</b> (la venta deja mucho), ganás.</li>
<li>Si de esos $5 te quedan <b>$0,75</b> (la venta deja poco), gastaste $1 para quedarte con $0,75. <b>Perdés.</b></li>
</ul>
<p>Mismo ROAS, resultados opuestos. Por eso, ante “tenemos ROAS 4, está buenísimo”, la respuesta es: <em>¿cuánto nos queda de cada venta?</em></p>
<div class="callout">Atajo: para no perder, el ROAS tiene que ser mayor que <b>100 ÷ el % que queda de cada venta</b>. Si queda 25%, el ROAS mínimo es 4.</div>`,
        remember: 'El ROAS solo no dice nada. Siempre preguntá: ¿con qué margen?',
        check: {
          q: 'De cada venta queda el 50%. ¿Cuál es el ROAS mínimo para no perder?',
          options: ['2', '5', '50'],
          answer: 0,
          why: '100 ÷ 50 = 2. Con ROAS 2, lo que queda de las ventas paga justo la publicidad.',
        },
      },
      {
        title: 'La trampa del descuento',
        idea: 'Un descuento chico en el precio puede comerse gran parte de la ganancia.',
        body: `
<p>Un producto se vende a <b>$100</b>, cuesta <b>$70</b>, quedan <b>$30</b>.</p>
<p>Hacemos <b>20% de descuento</b>: ahora se vende a $80, sigue costando $70, quedan <b>$10</b>.</p>
<p>El precio bajó 20%, pero lo que queda bajó a un tercio. Para ganar lo mismo que antes hay que vender <b>el triple</b>.</p>
<p>Por eso, “en el Cyber vendimos 80% más” puede significar que ganamos <em>menos</em>.</p>`,
        remember: 'Un descuento no se mide por cuánto más vendiste, sino por cuánto más ganaste.',
        check: {
          q: 'Una promo hizo vender 50% más. ¿Fue un éxito?',
          options: ['Sí, vendimos mucho más', 'No se sabe: hay que ver si lo que queda en total es mayor', 'No, los descuentos siempre pierden'],
          answer: 1,
          why: 'Hay que comparar la ganancia total antes y después, no las unidades.',
        },
      },
      {
        title: 'Las cuotas también cuestan',
        idea: 'Lo que importa es la plata que realmente entra, no el precio de lista.',
        body: `
<p>Precio en 6 cuotas: $1.050. Precio por transferencia: $900.</p>
<p>Parece que las cuotas dejan más, pero si financiarlas le cuesta a la empresa $130, en realidad entran <b>$920</b>. La diferencia es mucho menor de lo que parece.</p>
<p>Y puede que las cuotas hagan que compre más gente. Entonces la pregunta es: <em>¿qué opción deja más plata en total?</em></p>`,
        remember: 'Compará siempre lo que entra de verdad, después de comisiones y costos de financiación.',
        check: {
          q: '¿Qué deberías comparar entre cuotas y transferencia?',
          options: ['El precio de lista', 'Lo que entra de verdad y cuánta gente compra con cada uno', 'Lo que hace la competencia'],
          answer: 1,
          why: 'Lo que importa es la plata real que queda en total.',
        },
      },
    ],
    cmoQuestions: [
      '¿Hasta cuánto podemos pagar por un cliente?',
      'Este ROAS, ¿con qué margen?',
      'Con este descuento, ¿cuánto más tenemos que vender para ganar lo mismo?',
    ],
    lab: [
      'Averiguá cuánto deja cada producto de Durabox (tapa, DRX, bolso, portaequipaje).',
      'Definí cuánto podría pagar Durabox como máximo por un cliente.',
      'Compará cuánto entra de verdad por transferencia y en cuotas.',
    ],
    case: {
      title: 'Caso 2 — ¿Aprobás el 15% de descuento?',
      prompt: `
<p>Un e-commerce vende <b>500</b> productos por mes. Todos los números están en miles de pesos:</p>
<ul>
<li>Precio: <b>200</b></li>
<li>Lo que cuesta cada venta (producto + envío + comisión): <b>130</b></li>
<li>Lo que cuesta conseguir cada cliente: <b>25</b></li>
</ul>
<p>La agencia propone <b>15% de descuento</b> y dice que van a vender <b>650</b> en vez de 500.</p>
<ol>
<li>¿Cuánto queda de cada venta hoy? ¿Y con el descuento?</li>
<li>¿Cuánto queda en total en cada caso?</li>
<li>¿La aprobarías? ¿Qué le preguntarías a la agencia?</li>
</ol>`,
      solution: `
<p><strong>1. Por venta:</strong> hoy 200 − 130 − 25 = <b>45</b>. Con descuento el precio pasa a 170, entonces 170 − 130 − 25 = <b>15</b>. Cada venta deja un tercio.</p>
<p><strong>2. En total:</strong> hoy 500 × 45 = <b>22.500</b>. Con descuento 650 × 15 = <b>9.750</b>. Se vende más y se gana mucho menos.</p>
<p>Para ganar lo mismo habría que vender <b>1.500</b>, no 650.</p>
<p><strong>3. No la aprobaría así.</strong> Preguntaría: ¿esas ventas extra son clientes nuevos o gente que iba a comprar igual? ¿hay stock? ¿los que compran con descuento vuelven a comprar?</p>
<p><strong>Alternativas:</strong> un regalo que cueste poco y se perciba mucho, un combo con accesorio, envío gratis desde cierto monto, o descuento solo por pocos días.</p>`,
    },
    cards: [
      { q: '¿Cómo sé cuánto puedo pagar por un cliente?', a: 'Lo que deja la venta menos lo que la empresa quiere quedarse de cada venta.' },
      { q: '¿Por qué un ROAS alto puede perder plata?', a: 'Porque si cada venta deja poco margen, lo que queda no alcanza para pagar la publicidad.' },
      { q: 'Atajo del ROAS mínimo', a: '100 ÷ el % que queda de cada venta. Si queda 25%, el ROAS mínimo es 4.' },
      { q: '¿Cómo se evalúa un descuento?', a: 'Por cuánto más se ganó en total, no por cuánto más se vendió.' },
    ],
  },

  /* ───────────────────────── SEMANA 3 ───────────────────────── */
  {
    n: 3,
    title: 'Cuánto vale un cliente',
    goal: 'Pensar en el cliente a lo largo del tiempo, no solo en su primera compra.',
    summary: [
      'Un cliente vale lo que deja en el tiempo, no solo su primera compra.',
      'Lo que vale tiene que ser bastante más que lo que cuesta conseguirlo.',
      'Importa cuánto tarda en devolverte lo que gastaste.',
    ],
    sections: [
      {
        title: 'El cliente, no la campaña',
        idea: 'Un cliente que vuelve vale mucho más que uno que compra una sola vez.',
        body: `
<p>Pensá en una peluquería. Conseguir una clienta nueva le cuesta un poco de publicidad. Si viene una vez, quizás no rinde. Si viene todos los meses durante dos años, rinde muchísimo.</p>
<p>Por eso no alcanza con mirar la primera venta. Hay que preguntar: <em>¿este cliente vuelve? ¿compra otras cosas? ¿nos recomienda?</em></p>`,
        remember: 'Mirá al cliente completo: primera compra + lo que compra después + a quién trae.',
        check: {
          q: 'Dos campañas traen clientes al mismo costo. Los de A no vuelven; los de B vuelven 3 veces. ¿Cuál vale más?',
          options: ['A', 'B', 'Valen lo mismo'],
          answer: 1,
          why: 'B deja plata varias veces por el mismo costo de conseguirlo.',
        },
      },
      {
        title: 'Lo que deja un cliente en el tiempo',
        idea: 'El valor de un cliente se calcula con lo que deja, no con lo que paga.',
        body: `
<p>A esto se le dice <b>LTV</b> (valor de vida del cliente).</p>
<p>Un cliente compra 3 veces. Cada compra deja <b>$80</b>. Entonces deja <b>$240</b> en total.</p>
<p>Error común: calcularlo con lo que paga (el precio) en vez de con lo que deja. Así parece que vale mucho más de lo que vale, y se termina pagando de más por conseguirlo.</p>
<p>Usá un plazo razonable, como 1 o 2 años. “Toda la vida” es una promesa, no un dato.</p>`,
        remember: 'Valor del cliente = lo que deja cada compra × cuántas veces compra.',
        check: {
          q: 'Un cliente compra 2 veces y cada compra deja $50. ¿Cuánto vale?',
          options: ['$50', '$100', 'Depende del precio'],
          answer: 1,
          why: '$50 × 2 = $100. Se calcula con lo que deja, no con el precio.',
        },
      },
      {
        title: 'Valor vs. costo: la regla de 3 a 1',
        idea: 'Un cliente sano vale al menos 3 veces lo que costó conseguirlo.',
        body: `
<ul>
<li>Si un cliente vale <b>menos</b> de lo que costó: perdés plata con cada uno.</li>
<li>Si vale entre <b>1 y 3 veces</b>: funciona, pero es frágil.</li>
<li>Si vale <b>3 veces o más</b>: es un negocio sano.</li>
</ul>
<p>No es una ley, es una referencia útil para saber si conviene acelerar o ir con cuidado.</p>`,
        remember: 'Referencia: el cliente debería valer 3 veces lo que costó conseguirlo.',
        check: {
          q: 'Conseguir un cliente cuesta $100 y vale $120. ¿Cómo lo ves?',
          options: ['Excelente', 'Frágil: deja poco margen de error', 'Pierde plata'],
          answer: 1,
          why: 'Vale 1,2 veces lo que costó: gana, pero cualquier imprevisto lo da vuelta.',
        },
      },
      {
        title: '¿Cuánto tarda en devolverte la plata?',
        idea: 'Aunque un cliente valga mucho, si tarda en devolverte lo invertido, eso necesita caja.',
        body: `
<p>Si gastás $100 en conseguir un cliente y él te deja $25 por mes, tardás <b>4 meses</b> en recuperar lo invertido.</p>
<p>Mientras tanto, la empresa tiene que poner esa plata. Crecer rápido con clientes que devuelven lento puede dejar a la empresa sin caja, aunque “gane”.</p>
<p>En empresas medianas sin espalda financiera, recuperar rápido vale tanto como que el cliente valga mucho.</p>`,
        remember: 'Preguntá siempre: ¿en cuántos meses recuperamos lo que costó el cliente?',
        check: {
          q: 'Un cliente cuesta $120 y deja $40 por mes. ¿En cuánto se recupera?',
          options: ['3 meses', '4 meses', '12 meses'],
          answer: 0,
          why: '$120 ÷ $40 = 3 meses.',
        },
      },
      {
        title: 'En Durabox',
        idea: 'Si el producto principal se compra una vez, el valor extra está en lo que viene después.',
        body: `
<p>Una tapa de camioneta se compra una sola vez. Entonces, ¿de dónde puede salir más valor?</p>
<ul>
<li><b>Accesorios</b>: DRX, bolsos, portaequipaje.</li>
<li><b>Recomendaciones</b>: el que compra le cuenta a otros.</li>
<li><b>Cambio de vehículo</b>: vuelve cuando cambia de camioneta.</li>
</ul>
<p>La pregunta práctica: <em>de cada 10 personas que compran una tapa, ¿cuántas compran después un accesorio?</em></p>`,
        remember: 'Cuando el producto es de una sola compra, el valor está en accesorios y recomendaciones.',
        check: {
          q: '¿Qué dato te dice más sobre el valor extra de un cliente de Durabox?',
          options: ['El CPL de Meta', 'Cuántos compradores de tapa compran después un accesorio', 'El alcance de Instagram'],
          answer: 1,
          why: 'Eso muestra cuánto valor agrega cada cliente después de la primera compra.',
        },
      },
    ],
    cmoQuestions: [
      '¿Nuestros clientes vuelven a comprar?',
      '¿Cuánto vale un cliente comparado con lo que cuesta conseguirlo?',
      '¿En cuántos meses recuperamos lo invertido?',
    ],
    lab: [
      'Separá las ventas de Durabox entre clientes nuevos y clientes que ya habían comprado.',
      'Averiguá cuántos compradores de tapa compraron después un accesorio.',
      'Estimá cuánto vale un cliente de Durabox en 2 años.',
    ],
    case: {
      title: 'Caso 3 — ¿Qué producto conviene promocionar?',
      prompt: `
<p>Una empresa tiene dos productos para atraer clientes nuevos:</p>
<ul>
<li><b>Producto X</b>: conseguir el cliente cuesta <b>150</b>. La primera compra deja <b>270</b>. Casi nunca vuelve.</li>
<li><b>Producto Y</b>: conseguir el cliente cuesta <b>60</b>. La primera compra deja <b>135</b>. En 2 años vuelve y deja <b>170</b> más.</li>
</ul>
<ol><li>¿Cuál deja más en la primera compra, ya descontado lo que costó conseguirlo?</li><li>¿Cuánto vale cada cliente en total, y cuántas veces su costo?</li><li>¿Dónde pondrías la próxima inversión?</li></ol>`,
      solution: `
<p><strong>1.</strong> X: 270 − 150 = <b>120</b>. Y: 135 − 60 = <b>75</b>. En la primera compra, gana X.</p>
<p><strong>2.</strong> X vale unos <b>285</b> en total → menos de 2 veces su costo. Y vale <b>305</b> → unas <b>5 veces</b> su costo.</p>
<p><strong>3.</strong> Pondría el próximo peso en <b>Y</b>: rinde mucho más por cada peso invertido. Pero chequearía que esa recompra esté medida (no supuesta) y mantendría X si la empresa necesita caja rápida.</p>`,
    },
    cards: [
      { q: '¿Qué es el LTV, en simple?', a: 'Lo que deja un cliente en todas sus compras durante un período (por ejemplo, 2 años).' },
      { q: 'Regla de 3 a 1', a: 'Un cliente sano vale al menos 3 veces lo que costó conseguirlo.' },
      { q: '¿Qué es el payback?', a: 'Cuánto tarda un cliente en devolver lo que costó conseguirlo.' },
      { q: '¿De dónde sale valor extra si el producto se compra una vez?', a: 'Accesorios, recomendaciones y recompra cuando cambia el vehículo o la necesidad.' },
    ],
  },

  /* ───────────────────────── SEMANA 4 ───────────────────────── */
  {
    n: 4,
    title: 'Del lead a la venta',
    goal: 'Ver dónde se pierden clientes en el camino y arreglarlo antes de comprar más leads.',
    summary: [
      'Entre el lead y la venta hay etapas, y en cada una se pierde gente.',
      'Antes de comprar más leads, arreglá dónde se pierden.',
      'Marketing y ventas tienen que acordar reglas.',
    ],
    sections: [
      {
        title: 'El camino tiene etapas',
        idea: 'Un lead no es una venta: en el medio hay varios pasos.',
        body: `
<div class="chain strong">Lead → conversación → presupuesto → venta</div>
<p>En cada paso se pierde gente. Es como un balde con agujeros: podés seguir echando agua (más leads) o tapar los agujeros.</p>
<p>Marketing suele mirar hasta el lead. Una directora mira el camino completo, porque la plata se gana al final.</p>`,
        remember: 'Mirá el camino completo, no solo cuántos leads entran.',
        check: {
          q: '¿Qué es más útil saber?',
          options: ['Cuántos leads entraron', 'En qué paso del camino se pierden más clientes', 'Cuántos seguidores hay'],
          answer: 1,
          why: 'Saber dónde se pierde gente te dice qué arreglar.',
        },
      },
      {
        title: 'Tapar los agujeros antes de echar más agua',
        idea: 'Muchas veces es más barato mejorar el seguimiento que comprar más leads.',
        body: `
<p>De cada 10 leads, solo 4 llegan a hablar con un vendedor. Si lográs que lleguen 6, vendés bastante más <b>sin gastar un peso más en publicidad</b>.</p>
<p>Antes de pedir más presupuesto, la pregunta es: <em>¿estamos aprovechando los leads que ya pagamos?</em></p>`,
        remember: 'Primero aprovechá la demanda que ya pagaste. Después comprá más.',
        check: {
          q: 'La mitad de los leads nunca recibe respuesta. ¿Qué hacés primero?',
          options: ['Subir la inversión', 'Arreglar la respuesta a los leads', 'Cambiar los anuncios'],
          answer: 1,
          why: 'Estás pagando leads que se pierden. Arreglar eso es más barato que comprar más.',
        },
      },
      {
        title: 'La velocidad de respuesta',
        idea: 'Un lead que espera horas se enfría y se va con otro.',
        body: `
<p>Alguien escribe por WhatsApp preguntando precio. Si le respondés en 5 minutos, está con ganas. Si le respondés en 5 horas, ya le escribió a la competencia.</p>
<p>El tiempo de respuesta es uno de los datos más simples y más poderosos para mejorar ventas. Medilo.</p>`,
        remember: 'Medí cuánto tardan en responder. Responder rápido vende.',
        check: {
          q: '¿Qué métrica simple te recomendaría medir primero en un negocio que vende por WhatsApp?',
          options: ['Tiempo de primera respuesta', 'Cantidad de seguidores', 'Alcance de las historias'],
          answer: 0,
          why: 'Es fácil de medir y tiene un impacto directo en cuántos leads se convierten.',
        },
      },
      {
        title: '¿Cuántos leads puede atender ventas?',
        idea: 'Si ventas está saturado, más leads empeoran el resultado.',
        body: `
<p>Si cada vendedor puede atender bien unas 15 conversaciones por día y hay 2 vendedores, más de 30 por día no van a ser bien atendidos.</p>
<p>Duplicar los leads sin sumar gente hace que todos respondan peor y más tarde. Se venden menos de cada 100 leads.</p>`,
        remember: 'Antes de subir los leads, preguntá cuántos puede atender bien ventas.',
        check: {
          q: 'Ventas ya está saturado. ¿Qué pasa si duplicás los leads?',
          options: ['Se duplican las ventas', 'Probablemente se atiende peor y se vende menos de cada lead', 'No cambia nada'],
          answer: 1,
          why: 'Con el equipo saturado, la calidad de atención baja.',
        },
      },
      {
        title: 'Un acuerdo entre marketing y ventas',
        idea: 'Sin reglas claras, marketing culpa a ventas y ventas culpa a marketing.',
        body: `
<p>Acordá pocas cosas, por escrito:</p>
<ul>
<li>Qué es un lead bueno.</li>
<li>En cuánto tiempo se responde.</li>
<li>Cuántas veces se intenta contactar.</li>
<li>Por qué se pierde cada venta (precio, plazo, no contesta…).</li>
</ul>
<p>Y una reunión corta por semana para mirar esos números juntos.</p>`,
        remember: 'Reglas claras + una reunión semanal = discutir con datos, no con opiniones.',
        check: {
          q: '¿Qué dato ayuda más a mejorar las ventas?',
          options: ['Saber por qué se pierde cada venta', 'Saber cuántos likes tuvo el anuncio', 'Saber cuántos leads hubo el año pasado'],
          answer: 0,
          why: 'Los motivos de pérdida te dicen qué hay que cambiar.',
        },
      },
    ],
    cmoQuestions: [
      '¿En qué paso se pierden más clientes?',
      '¿Cuánto tardamos en responder?',
      '¿Cuántos leads puede atender bien ventas?',
    ],
    lab: [
      'Contá para un mes de Durabox: leads → conversaciones → presupuestos → ventas.',
      'Medí cuánto tardan en responder por WhatsApp.',
      'Armá con ventas una lista de motivos por los que se pierden ventas.',
    ],
    case: {
      title: 'Caso 4 — ¿Más leads o mejor seguimiento?',
      prompt: `
<p>Una empresa recibe <b>2.000 leads</b> por mes. Solo <b>900</b> llegan a hablar con un vendedor. Responden en promedio a las <b>5 horas</b>. Hay <b>2 vendedores</b>.</p>
<p>La agencia propone duplicar la inversión. ¿Qué hacés?</p>`,
      solution: `
<p>Más de la mitad de los leads (1.100) nunca llega a hablar con nadie. Y responden a las 5 horas.</p>
<p>Si duplicás los leads con 2 vendedores, probablemente se pierdan todavía más.</p>
<p><b>Mejor primero:</b> responder en minutos (con un mensaje automático de bienvenida y un vendedor de guardia), y hacer seguimiento. Si en vez de 900 llegan a hablar 1.200, se vende alrededor de un tercio más <b>sin invertir más en publicidad</b>.</p>
<p>Después de 1 mes de medir, se evalúa subir inversión, sumando gente en ventas si hace falta.</p>`,
    },
    cards: [
      { q: '¿Qué es el funnel o embudo comercial?', a: 'El camino lead → conversación → presupuesto → venta. En cada paso se pierde gente.' },
      { q: '¿Qué conviene antes de comprar más leads?', a: 'Aprovechar mejor los que ya tenés: responder rápido y hacer seguimiento.' },
      { q: '¿Por qué importa el tiempo de respuesta?', a: 'Porque un lead que espera se enfría y le compra a otro.' },
      { q: '¿Qué acuerdan marketing y ventas?', a: 'Qué es un lead bueno, en cuánto se responde, cuántos intentos de contacto y por qué se pierde cada venta.' },
    ],
  },

  /* ───────────────────────── SEMANA 5 ───────────────────────── */
  {
    n: 5,
    title: 'Proyectar ventas',
    goal: 'Poder decir “si invertimos esto, esperamos vender entre tanto y tanto”.',
    summary: [
      'Un pronóstico es una cuenta con supuestos a la vista.',
      'Siempre en rango: escenario malo, normal y bueno.',
      'Cada peso extra de publicidad suele rendir un poco menos que el anterior.',
    ],
    sections: [
      {
        title: 'Un pronóstico es una cuenta con supuestos',
        idea: 'No se trata de adivinar, sino de mostrar de dónde sale el número.',
        body: `
<p>Con tres datos ya podés proyectar:</p>
<div class="chain">Inversión → cuántos leads trae → cuántos compran</div>
<p>Si invertís $1.000, cada lead cuesta $10 y compra 1 de cada 20: 100 leads → <b>5 ventas</b>.</p>
<p>Lo valioso no es el número final, sino que todos puedan ver los supuestos y discutirlos.</p>`,
        remember: 'Mostrá los supuestos. Así el número se puede discutir y controlar.',
        check: {
          q: '¿Qué hace confiable a un pronóstico?',
          options: ['Que el número sea alto', 'Que los supuestos estén a la vista', 'Que lo haga la agencia'],
          answer: 1,
          why: 'Si los supuestos se ven, se pueden validar y corregir.',
        },
      },
      {
        title: 'Malo, normal y bueno',
        idea: 'Nunca des un solo número: da un rango.',
        body: `
<p>En vez de decir “vamos a vender 70”, decí:</p>
<ul>
<li><b>Si sale mal:</b> 50</li>
<li><b>Lo normal:</b> 70</li>
<li><b>Si sale bien:</b> 85</li>
</ul>
<p>Y explicá qué tendría que pasar para estar en cada uno. Eso le da tranquilidad al dueño y te cubre a vos.</p>`,
        remember: 'Proyectá siempre en tres escenarios y explicá qué los diferencia.',
        check: {
          q: 'El dueño pregunta cuánto se va a vender. ¿Cuál es la mejor respuesta?',
          options: ['Un número exacto', 'Un rango con lo que tendría que pasar en cada caso', '“Depende”, sin más'],
          answer: 1,
          why: 'El rango es honesto y útil para decidir.',
        },
      },
      {
        title: 'Cada peso extra rinde un poco menos',
        idea: 'Si duplicás la inversión, casi nunca duplicás las ventas.',
        body: `
<p>Pensá en pescar en un lago: los primeros peces pican fácil. Cuanto más pescás, más cuesta cada uno.</p>
<p>Con la publicidad pasa lo mismo. Los primeros pesos llegan a la gente más interesada. Al subir la inversión, llegás a gente menos interesada y <b>cada lead sale más caro</b>.</p>
<p>Por eso, al proyectar una suba fuerte, suponé que el costo por lead va a subir.</p>`,
        remember: 'Más inversión = leads más caros. Nunca supongas que todo escala igual.',
        check: {
          q: 'Hoy con $5 M vendés 50. ¿Qué esperás si invertís $10 M?',
          options: ['Exactamente 100', 'Menos de 100, porque cada lead extra sale más caro', 'Más de 100'],
          answer: 1,
          why: 'Los rendimientos bajan a medida que subís la inversión.',
        },
      },
      {
        title: 'Los tiempos importan',
        idea: 'Lo que invertís hoy puede vender el mes que viene.',
        body: `
<ul>
<li><b>Demora:</b> si una venta tarda un mes en cerrarse, una campaña no se puede juzgar a los 10 días.</li>
<li><b>Temporada:</b> compará con el mismo mes del año pasado, no con el mes anterior. Aguinaldo, vacaciones y fechas especiales cambian todo.</li>
</ul>`,
        remember: 'Antes de juzgar resultados, preguntá cuánto tarda una venta y contra qué mes comparás.',
        check: {
          q: 'Una venta tarda unos 40 días en cerrarse. ¿Cuándo evaluás una campaña?',
          options: ['A la semana', 'Después de que pase ese tiempo', 'Al día siguiente'],
          answer: 1,
          why: 'Si la evaluás antes, todavía no se ven las ventas que generó.',
        },
      },
    ],
    cmoQuestions: [
      '¿Qué supuestos hay detrás de este número?',
      '¿Qué pasa con el costo del lead si subimos la inversión?',
      '¿Cuánto tarda un lead en convertirse en venta?',
    ],
    lab: [
      'Armá un pronóstico de 3 meses para Durabox con escenario malo, normal y bueno.',
      'Averiguá cuántos días tarda en promedio una venta desde que entra el lead.',
      'Marcá los meses de más y menos ventas del año.',
    ],
    case: {
      title: 'Caso 5 — “Si invierto el doble, ¿cuánto vendo?”',
      prompt: `
<p>Hoy la empresa invierte <b>$6 M</b> y vende unas <b>90</b> unidades con publicidad. El dueño quiere invertir <b>$10 M</b> el mes que viene y te pregunta cuánto va a vender.</p>
<p>¿Qué le respondés?</p>`,
      solution: `
<p>Si todo escalara igual, serían unas 150 ventas. Pero cada lead extra va a salir más caro, así que lo realista es menos.</p>
<blockquote>“Con $10 M esperaría entre 110 y 135 ventas. Una parte se va a cerrar el mes siguiente, porque las ventas tardan. Lo más incierto es cuánto sube el costo del lead. Propongo subir en dos pasos y medir.”</blockquote>
<p>Y antes, chequear que ventas y producción puedan atender ese volumen.</p>`,
    },
    cards: [
      { q: '¿Cómo se arma un pronóstico simple?', a: 'Inversión → cuántos leads trae → cuántos compran. Con los supuestos a la vista.' },
      { q: '¿Por qué dar un rango?', a: 'Porque el futuro es incierto. Malo, normal y bueno, y qué tendría que pasar en cada uno.' },
      { q: '¿Qué pasa al subir mucho la inversión?', a: 'Cada lead extra sale más caro. Las ventas suben menos que la inversión.' },
      { q: '¿Contra qué comparar las ventas de un mes?', a: 'Contra el mismo mes del año anterior, por la temporada.' },
    ],
  },

  /* ───────────────────────── SEMANA 6 ───────────────────────── */
  {
    n: 6,
    title: 'El presupuesto de marketing',
    goal: 'Decidir cuánto invertir y cuándo subir o bajar, con criterio.',
    summary: [
      'El presupuesto sale de un objetivo, no de “lo del año pasado”.',
      'Mirá cuánto costaron los últimos clientes, no el promedio.',
      'Definí las reglas para subir o bajar antes de empezar.',
    ],
    sections: [
      {
        title: 'Del objetivo hacia atrás',
        idea: 'Primero cuántas ventas queremos; de ahí sale cuánto invertir.',
        body: `
<p>La forma floja de armar un presupuesto: “lo mismo que el año pasado más inflación”.</p>
<p>La forma de directora: recorrer el camino al revés.</p>
<div class="chain strong">Quiero 50 ventas → necesito 500 leads → a $8.000 cada uno → $4 M</div>
<p>Así el presupuesto tiene una razón detrás, y el dueño entiende qué compra con esa plata.</p>`,
        remember: 'Presupuesto = objetivo de ventas recorrido al revés hasta la inversión.',
        check: {
          q: '¿Cuál es la mejor forma de definir el presupuesto?',
          options: ['Igual que el año pasado', 'Partiendo del objetivo de ventas', 'Lo que propone la agencia'],
          answer: 1,
          why: 'Así cada peso tiene una razón y se puede controlar.',
        },
      },
      {
        title: 'Los últimos clientes salen más caros',
        idea: 'El promedio esconde que los clientes extra costaron mucho más.',
        body: `
<p>Con $5 M conseguiste 50 clientes. Subiste a $8 M y conseguiste 70.</p>
<p>El promedio dice que cada cliente cuesta unos $114.000. Pero mirá solo lo nuevo: pusiste $3 M más y trajiste 20 clientes más. <b>Esos 20 costaron $150.000 cada uno.</b></p>
<p>Si tu tope era $140.000, ese último aumento ya no conviene, aunque el promedio se vea bien.</p>`,
        remember: 'Para decidir si subir, mirá cuánto costaron los clientes extra, no el promedio.',
        check: {
          q: 'Subiste $2 M y conseguiste 10 clientes más. ¿Cuánto costó cada uno de esos 10?',
          options: ['$20.000', '$200.000', 'No se puede saber'],
          answer: 1,
          why: '$2 M ÷ 10 = $200.000.',
        },
      },
      {
        title: 'Cómo repartir: 70 / 20 / 10',
        idea: 'La mayor parte en lo que funciona, y una parte chica para probar.',
        body: `
<ul>
<li><b>70%</b> en lo que ya sabés que funciona.</li>
<li><b>20%</b> en mejorar o ampliar lo que funciona.</li>
<li><b>10%</b> en probar cosas nuevas.</li>
</ul>
<p>Así no ponés en riesgo lo que anda, pero tampoco te quedás sin aprender.</p>`,
        remember: '70% lo probado, 20% mejoras, 10% experimentos.',
        check: {
          q: 'Querés probar TikTok Ads por primera vez. ¿Cuánto del presupuesto?',
          options: ['La mitad', 'Una parte chica, como experimento', 'Todo, para ver si funciona'],
          answer: 1,
          why: 'Lo nuevo va en la parte de experimentos, sin poner en riesgo lo que funciona.',
        },
      },
      {
        title: 'Reglas para subir o bajar',
        idea: 'Decidí antes de empezar qué te haría subir, mantener o cortar.',
        body: `
<ul>
<li><b>Subir</b> (de a poco) si los clientes cuestan bastante menos que tu tope y se pueden atender.</li>
<li><b>Mantener</b> si están cerca del tope.</li>
<li><b>Bajar</b> si pasan el tope por un tiempo, no por un par de días.</li>
</ul>
<p>Un truco útil con el dueño: <em>“Arrancamos con la mitad. Si en 3 semanas el cliente cuesta menos de X, liberamos el resto.”</em> Baja el riesgo y genera confianza.</p>`,
        remember: 'Reglas definidas antes + inversión por tramos = decisiones tranquilas.',
        check: {
          q: 'Una campaña pasó el tope durante 2 días. ¿Qué hacés?',
          options: ['La corto ya', 'Espero un tiempo razonable antes de decidir', 'La duplico'],
          answer: 1,
          why: 'Dos días no alcanzan. Las ventas tardan y los números se mueven.',
        },
      },
    ],
    cmoQuestions: [
      '¿De qué objetivo sale este presupuesto?',
      '¿Cuánto costaron los clientes extra del último aumento?',
      '¿Qué tiene que pasar para invertir más?',
    ],
    lab: [
      'Armá el presupuesto del próximo trimestre de Durabox partiendo de un objetivo de ventas.',
      'Calculá cuánto costaron los clientes extra la última vez que subieron la inversión.',
      'Escribí tus reglas de subir, mantener y bajar.',
    ],
    case: {
      title: 'Caso 6 — El CEO quiere duplicar',
      prompt: `
<p>El tope por cliente es <b>$120.000</b>. Lo que pasó los últimos meses:</p>
<ul>
<li>Abril: $4 M → 40 clientes</li>
<li>Mayo: $6 M → 55 clientes</li>
<li>Junio: $8 M → 66 clientes</li>
</ul>
<p>El CEO quiere pasar a $16 M. ¿Qué le decís?</p>`,
      solution: `
<p>En promedio, junio parece cerca del tope (unos $121.000 por cliente).</p>
<p>Pero mirá lo nuevo: de mayo a junio se pusieron $2 M más y llegaron 11 clientes más. <b>Cada uno costó unos $180.000</b>, muy por encima del tope.</p>
<p>Duplicar en los mismos canales probablemente traiga clientes todavía más caros.</p>
<p><b>Recomendación:</b> volver a un nivel cercano a mayo, probar canales nuevos con una parte chica y mejorar ventas (que abarata todo). Subir más solo si los clientes extra cuestan menos que el tope.</p>`,
    },
    cards: [
      { q: '¿Cómo se arma un presupuesto con criterio?', a: 'Desde el objetivo de ventas, recorriendo al revés: ventas → leads → inversión.' },
      { q: '¿Qué es el costo de los clientes extra (CAC marginal)?', a: 'Lo que costaron los clientes adicionales del último aumento de inversión.' },
      { q: 'Regla 70/20/10', a: '70% en lo probado, 20% en mejoras, 10% en experimentos.' },
      { q: 'Truco para convencer al dueño', a: 'Invertir por tramos: el segundo tramo se libera si el primero cumple.' },
    ],
  },

  /* ───────────────────────── SEMANA 7 ───────────────────────── */
  {
    n: 7,
    title: 'El precio',
    goal: 'Entender por qué el precio es una palanca enorme y cómo hacer promos que no regalen ganancia.',
    summary: [
      'Subir un poco el precio puede valer más que vender mucho más.',
      'El cliente compara con sus alternativas, no con tu costo.',
      'Hay promociones que no regalan ganancia.',
    ],
    sections: [
      {
        title: 'La palanca más fuerte',
        idea: 'Un pequeño aumento de precio puede dar más ganancia que muchas ventas extra.',
        body: `
<p>Un producto se vende a $100, cuesta $70, quedan $30.</p>
<p>Si lo subís a $105 y vendés lo mismo, quedan $35. Son <b>5 pesos más sobre 30</b>: casi 17% más de ganancia por venta.</p>
<p>Para ganar eso vendiendo más, tendrías que vender 17% más… y pagar publicidad para conseguirlo.</p>
<p>Por eso el precio es la palanca más fuerte, y una de las que marketing menos discute.</p>`,
        remember: 'Un poco más de precio puede rendir más que mucho más volumen.',
        check: {
          q: 'Vendés a $100, cuesta $80. Subís a $110 y vendés lo mismo. ¿Cuánto más ganás por venta?',
          options: ['10% más', '50% más', '100% más'],
          answer: 1,
          why: 'Pasás de ganar $20 a ganar $30: 50% más.',
        },
      },
      {
        title: 'El cliente compara con sus alternativas',
        idea: 'Lo que el cliente está dispuesto a pagar depende del valor que percibe.',
        body: `
<p>Al cliente no le importa cuánto te cuesta hacer el producto. Lo compara con otras opciones: otra marca, algo importado, hacerlo casero o no comprar nada.</p>
<p>Marketing construye ese valor: garantía, instalación, reseñas, atención, marca. Cuanto más valor percibe, más precio sostenés.</p>
<p>Y el precio no se adivina: se prueba (por producto, zona o temporada) y se mide.</p>`,
        remember: 'Más valor percibido = más precio posible. El precio se prueba, no se adivina.',
        check: {
          q: '¿Qué ayuda a sostener un precio más alto?',
          options: ['Bajar costos', 'Que el cliente perciba más valor que en las alternativas', 'Poner más anuncios'],
          answer: 1,
          why: 'El cliente paga más cuando ve más valor que en otras opciones.',
        },
      },
      {
        title: 'Promos que no regalan ganancia',
        idea: 'En vez de bajar el precio, sumá algo que cueste poco y valga mucho para el cliente.',
        body: `
<ul>
<li><b>Regalo:</b> un accesorio que te cuesta poco y el cliente valora mucho.</li>
<li><b>Combo:</b> producto + accesorio, con descuento solo en el accesorio.</li>
<li><b>Envío gratis</b> desde cierto monto.</li>
<li><b>Descuento acotado:</b> pocos días, ciertos productos o stock a liquidar.</li>
</ul>`,
        remember: 'Antes de un % OFF, probá regalo, combo o envío gratis.',
        check: {
          q: '¿Qué promo suele cuidar más la ganancia?',
          options: ['20% OFF en todo', 'Regalar un accesorio que cuesta poco', 'Bajar el precio para siempre'],
          answer: 1,
          why: 'El regalo cuesta poco y se percibe mucho, sin tocar el precio del producto principal.',
        },
      },
      {
        title: 'Precio en Argentina',
        idea: 'Cuotas, transferencia e inflación cambian lo que realmente cobrás.',
        body: `
<ul>
<li><b>Cuotas sin interés:</b> el interés lo paga la empresa. Es un descuento escondido.</li>
<li><b>Transferencia:</b> cobrás en el momento y sin comisión.</li>
<li><b>Inflación:</b> si vendés a un precio que no alcanza para reponer el stock, la empresa se achica aunque parezca que gana.</li>
</ul>`,
        remember: 'Pensá en lo que cobrás de verdad y en si alcanza para reponer.',
        check: {
          q: '¿Qué son, en el fondo, las cuotas sin interés?',
          options: ['Gratis para la empresa', 'Un descuento escondido', 'Un aumento de precio'],
          answer: 1,
          why: 'La empresa paga el costo de financiar, así que cobra menos de lo que dice el precio.',
        },
      },
    ],
    cmoQuestions: [
      '¿Cuándo se probó el precio por última vez?',
      '¿Cuánto cobramos de verdad después de cuotas y comisiones?',
      '¿Esta promo hace ganar más o solo vender más?',
    ],
    lab: [
      'Calculá cuánto entra de verdad por una tapa de Durabox pagada por transferencia y en cuotas.',
      'Diseñá una promo con accesorio en vez de % OFF.',
      'Pensá en una prueba de precio que se pueda hacer sin riesgo.',
    ],
    case: {
      title: 'Caso 7 — ¿Cuotas o transferencia?',
      prompt: `
<p>Un producto cuesta <b>$1.200</b> de lista. Fabricarlo y venderlo cuesta <b>$780</b>.</p>
<ul>
<li>Opción A: <b>10% de descuento</b> por transferencia.</li>
<li>Opción B: <b>6 cuotas sin interés</b>, que le cuestan a la empresa un <b>14%</b>.</li>
</ul>
<p>¿Cuál conviene comunicar más fuerte?</p>`,
      solution: `
<p><strong>A:</strong> entran $1.080. Quedan $1.080 − $780 = <b>$300</b>.</p>
<p><strong>B:</strong> entran unos $1.032. Quedan <b>$252</b>.</p>
<p>La transferencia deja más por venta y se cobra en el momento. Conviene destacarla para quien puede pagar así, <b>sin sacar las cuotas</b>, que pueden atraer a gente que de otra forma no compraría. Medí cuánta gente compra con cada opción.</p>`,
    },
    cards: [
      { q: '¿Por qué el precio es la palanca más fuerte?', a: 'Porque un aumento chico suma directo a la ganancia de cada venta, sin pagar para conseguir clientes nuevos.' },
      { q: '¿Con qué compara el cliente tu precio?', a: 'Con sus alternativas y con el valor que percibe, no con tu costo.' },
      { q: 'Promos que cuidan la ganancia', a: 'Regalo de bajo costo, combo, envío gratis desde un monto, descuento por pocos días.' },
      { q: 'Cuotas sin interés', a: 'Son un descuento escondido: el costo de financiar lo paga la empresa.' },
    ],
  },

  /* ───────────────────────── SEMANA 8 ───────────────────────── */
  {
    n: 8,
    title: 'Qué productos empujar',
    goal: 'Decidir en qué productos poner la inversión según lo que deja cada uno.',
    summary: [
      'No todos los productos dejan lo mismo.',
      'Con la misma facturación se puede ganar más cambiando qué se vende.',
      'Un producto que deja poco puede valer por lo que trae después.',
    ],
    sections: [
      {
        title: 'No todos los productos dejan lo mismo',
        idea: 'Antes de decidir qué promocionar, mirá cuánto deja cada producto.',
        body: `
<p>Para cada producto, cuatro preguntas:</p>
<ul>
<li>¿Cuánto deja cada venta?</li>
<li>¿Cuánto cuesta conseguir al cliente?</li>
<li>¿Hay demanda?</li>
<li>¿Hay stock o capacidad para hacerlo?</li>
</ul>
<p>Con eso ya podés ordenar dónde conviene poner la plata.</p>`,
        remember: 'Promocioná lo que deja más, tiene demanda y se puede entregar.',
        check: {
          q: '¿Qué producto conviene promocionar más?',
          options: ['El más caro', 'El que más deja, con demanda y stock', 'El más nuevo'],
          answer: 1,
          why: 'El precio alto no alcanza: importa lo que queda y si se puede vender y entregar.',
        },
      },
      {
        title: 'Un mapa simple',
        idea: 'Ubicá cada producto según cuánto deja y cuánto se pide.',
        body: `
<table><thead><tr><th></th><th>Se pide mucho</th><th>Se pide poco</th></tr></thead><tbody>
<tr><td><b>Deja mucho</b></td><td>⭐ Empujar</td><td>Generar demanda</td></tr>
<tr><td><b>Deja poco</b></td><td>Puerta de entrada: vender accesorios después</td><td>Revisar o sacar</td></tr>
</tbody></table>`,
        remember: 'Deja mucho + se pide mucho = donde poner la inversión.',
        check: {
          q: 'Un producto se pide mucho pero deja poco. ¿Qué rol puede tener?',
          options: ['Sacarlo ya', 'Puerta de entrada para vender otras cosas después', 'Ponerle todo el presupuesto'],
          answer: 1,
          why: 'Puede atraer clientes que después compran productos que dejan más.',
        },
      },
      {
        title: 'Mismo total, distinta ganancia',
        idea: 'Si se vende más de lo que deja mucho, se gana más sin vender más.',
        body: `
<p>Dos meses con la misma facturación:</p>
<ul>
<li>Mes 1: se vendió sobre todo el producto que deja poco.</li>
<li>Mes 2: se vendió más del que deja mucho.</li>
</ul>
<p>El mes 2 gana bastante más, <b>sin vender un peso más</b>.</p>
<p>Marketing decide en gran parte qué se vende: con lo que comunica, lo que promociona y dónde invierte.</p>`,
        remember: 'Cambiar qué se vende puede subir la ganancia sin vender más.',
        check: {
          q: '¿Cómo puede marketing subir la ganancia sin aumentar las ventas?',
          options: ['No se puede', 'Empujando productos que dejan más', 'Bajando precios'],
          answer: 1,
          why: 'Cambiar la mezcla de productos vendidos cambia la ganancia.',
        },
      },
      {
        title: 'Vender algo más',
        idea: 'Sumar un accesorio a la compra sube el ticket y suele dejar buena ganancia.',
        body: `
<p>Si de cada 10 compradores de tapa, 3 compran un accesorio, y lográs que sean 5, cada cliente deja más.</p>
<p>Momentos para ofrecerlo:</p>
<ul>
<li>En el presupuesto (como combo).</li>
<li>En la entrega o instalación.</li>
<li>Uno o dos meses después de la compra.</li>
</ul>`,
        remember: 'Ofrecé el accesorio en el presupuesto, en la entrega y después.',
        check: {
          q: '¿Cuándo NO es un buen momento para ofrecer un accesorio?',
          options: ['En el presupuesto', 'En la entrega', 'Antes de que el cliente sepa qué producto quiere'],
          answer: 2,
          why: 'Primero tiene que estar decidido el producto principal.',
        },
      },
    ],
    cmoQuestions: [
      '¿Qué producto deja más después de pagar lo que cuesta conseguir al cliente?',
      '¿Qué producto abre la puerta a otras compras?',
      '¿Qué productos tienen stock disponible?',
    ],
    lab: [
      'Ubicá cada producto de Durabox en el mapa “deja mucho/poco × se pide mucho/poco”.',
      'Averiguá cuántos compradores de tapa se llevan un accesorio.',
      'Diseñá dos momentos para ofrecer accesorios.',
    ],
    case: {
      title: 'Caso 8 — ¿Dónde ponés la plata extra?',
      prompt: `
<p>Tenés presupuesto extra este mes y tres opciones:</p>
<ul>
<li><b>Tapa estándar:</b> deja bastante, pero solo hay stock para 10 más.</li>
<li><b>Tapa premium:</b> deja el doble que la estándar, pero conseguir el cliente cuesta más. Hay capacidad.</li>
<li><b>Accesorio para clientes que ya compraron:</b> deja poco por unidad, pero conseguir la venta es baratísimo.</li>
</ul>
<p>¿Cómo repartirías la plata?</p>`,
      solution: `
<p>No hay que elegir una sola:</p>
<ol>
<li><b>Accesorio a clientes actuales:</b> es lo que más rinde por peso invertido. Pero el límite es cuántos clientes hay, así que va primero y con poca plata.</li>
<li><b>Tapa estándar:</b> cubrir las 10 que hay en stock, no más.</li>
<li><b>Tapa premium:</b> el resto, porque deja mucho y hay capacidad.</li>
</ol>
<p>Y en cada tramo, chequear que el costo de conseguir el cliente se mantenga.</p>`,
    },
    cards: [
      { q: '¿Qué mirar de cada producto antes de promocionarlo?', a: 'Cuánto deja, cuánto cuesta conseguir al cliente, si hay demanda y si hay stock.' },
      { q: 'Producto que se pide mucho y deja poco', a: 'Puede servir como puerta de entrada para vender accesorios después.' },
      { q: '¿Qué es el mix de productos?', a: 'Qué proporción se vende de cada producto. Cambiarlo cambia la ganancia.' },
      { q: 'Momentos para ofrecer accesorios', a: 'En el presupuesto, en la entrega y uno o dos meses después.' },
    ],
  },

  /* ───────────────────────── SEMANA 9 ───────────────────────── */
  {
    n: 9,
    title: 'Los límites de la operación',
    goal: 'Entender que stock, producción, entregas y atención ponen el techo al crecimiento.',
    summary: [
      'La empresa vende al ritmo de su parte más lenta.',
      'Más demanda sin capacidad = clientes enojados.',
      'Crecer necesita plata antes de cobrar.',
    ],
    sections: [
      {
        title: 'El cuello de botella',
        idea: 'La empresa vende lo que puede entregar su parte más lenta.',
        body: `
<p>Pensá en una botella: no importa cuán ancha sea abajo, el agua sale al ritmo del cuello.</p>
<div class="chain">Marketing trae 200 → ventas atiende 150 → fábrica hace 100 → <b>instalación hace 80</b></div>
<p>La empresa vende <b>80</b>. Poner más plata en marketing no cambia nada: solo alarga la fila.</p>
<p>La primera pregunta de una directora: <em>¿qué es lo que hoy limita las ventas?</em> A veces no es la demanda.</p>`,
        remember: 'Encontrá la parte más lenta. Ahí está el límite real.',
        check: {
          q: 'Marketing trae 200 leads, ventas cierra 120, pero la fábrica hace 90. ¿Cuántas ventas entrega la empresa?',
          options: ['200', '120', '90'],
          answer: 2,
          why: 'La fábrica es la parte más lenta: pone el límite.',
        },
      },
      {
        title: 'Stock y tiempos de entrega',
        idea: 'Promocionar algo que no se puede entregar a tiempo hace perder clientes.',
        body: `
<ul>
<li>Si el plazo de entrega pasa de 15 a 45 días, compran menos y cancelan más.</li>
<li>Promocionar un producto sin stock es tirar plata y frustrar clientes.</li>
<li>Si sobra stock de algo, marketing puede ayudar a moverlo.</li>
</ul>
<p>Una reunión mensual con producción alcanza: qué hay, qué falta, qué empujar y qué frenar.</p>`,
        remember: 'Reunite cada mes con producción: qué empujar y qué frenar.',
        check: {
          q: 'Hay mucho stock acumulado de un producto. ¿Qué puede hacer marketing?',
          options: ['Nada, es tema de producción', 'Ayudar a moverlo con una promo puntual o combo', 'Dejar de venderlo'],
          answer: 1,
          why: 'Marketing puede dirigir la demanda hacia donde la empresa lo necesita.',
        },
      },
      {
        title: 'Crecer necesita plata antes de cobrar',
        idea: 'Una empresa que gana puede quedarse sin plata por crecer rápido.',
        body: `
<p>Para vender más hay que comprar materiales, pagar sueldos y publicidad <b>antes</b> de cobrar.</p>
<p>Si tardás 2 meses entre que pagás y cobrás, crecer mucho significa adelantar mucha plata. Por eso hay empresas que “ganan” y aun así no tienen plata para pagar.</p>
<p>Marketing puede ayudar: promover el pago por transferencia hace que se cobre antes.</p>`,
        remember: 'Ganancia y caja no son lo mismo. Crecer rápido necesita caja.',
        check: {
          q: '¿Por qué una empresa que gana puede quedarse sin plata?',
          options: ['Porque gasta en publicidad', 'Porque paga antes de cobrar y, al crecer, tiene que adelantar más', 'No puede pasar'],
          answer: 1,
          why: 'Cuanto más crece, más plata tiene que adelantar antes de cobrar.',
        },
      },
      {
        title: 'La experiencia también es marketing',
        idea: 'Cómo se atiende, se entrega y se resuelven los reclamos es parte del producto.',
        body: `
<p>La atención, la instalación y los reclamos definen las reseñas, las recomendaciones y si el cliente vuelve.</p>
<p>Una promesa incumplida no aparece en el panel de Meta, pero se paga después: con peores reseñas y clientes más caros de conseguir.</p>
<p>Medí pocas cosas: cuánto tardan en responder, cuántas entregas llegan a tiempo y cuántos reclamos hay.</p>`,
        remember: 'Una mala experiencia hoy encarece los clientes de mañana.',
        check: {
          q: 'Las malas reseñas subieron por demoras. ¿Qué efecto tiene en marketing?',
          options: ['Ninguno', 'Conseguir clientes nuevos se vuelve más difícil y caro', 'Mejora el alcance'],
          answer: 1,
          why: 'La gente lee reseñas antes de comprar.',
        },
      },
    ],
    cmoQuestions: [
      '¿Qué es lo que hoy limita las ventas?',
      'Si traemos 30% más de demanda, ¿qué se rompe primero?',
      '¿Qué productos tienen stock?',
    ],
    lab: [
      'Averiguá cuántas tapas por mes pueden vender, fabricar e instalar en Durabox.',
      'Identificá cuál es la parte más lenta.',
      'Proponé una reunión mensual con producción con 3 o 4 datos clave.',
    ],
    case: {
      title: 'Caso 9 — Demanda récord, clientes enojados',
      prompt: `
<p>Una campaña funcionó muy bien: llegaron 60% más leads. Pero ahora la entrega tarda 50 días en vez de 20, hay muchas más cancelaciones y las malas reseñas se triplicaron. La agencia quiere seguir invirtiendo “porque funciona”.</p>
<p>¿Qué hacés?</p>`,
      solution: `
<p>La empresa llegó a su límite de producción. Seguir invirtiendo solo alarga la espera y empeora las reseñas, lo que encarece los clientes futuros.</p>
<ul>
<li>Bajar la inversión al nivel que se puede atender.</li>
<li>Empujar productos que sí tienen stock.</li>
<li>Comunicar plazos reales.</li>
<li>Llamar a los clientes que están esperando.</li>
<li>Con tanta demanda, revisar si se pueden quitar descuentos o subir el precio.</li>
</ul>
<p>Cuando sobra demanda, la oportunidad es <strong>ganar más por venta</strong>, no vender más.</p>`,
    },
    cards: [
      { q: '¿Qué es el cuello de botella?', a: 'La parte más lenta de la empresa. Define cuánto puede vender en realidad.' },
      { q: '¿Ganancia y caja son lo mismo?', a: 'No. Se puede ganar y no tener plata, porque se paga antes de cobrar.' },
      { q: '¿Qué hacer si sobra demanda?', a: 'Ganar más por venta (precio, menos descuentos) y derivar a productos con stock.' },
      { q: '¿Por qué la experiencia es marketing?', a: 'Porque define reseñas, recomendaciones y recompra.' },
    ],
  },

  /* ───────────────────────── SEMANA 10 ───────────────────────── */
  {
    n: 10,
    title: 'Crecer con criterio',
    goal: 'Ver los distintos caminos para crecer y elegir los mejores.',
    summary: [
      'Se puede crecer por cinco caminos, no solo con más clientes.',
      'Mejoras chicas en varios lados suman mucho.',
      'Que un cliente vuelva es más barato que conseguir uno nuevo.',
    ],
    sections: [
      {
        title: 'Cinco caminos para crecer',
        idea: 'Más clientes es solo uno de los caminos.',
        body: `
<ol>
<li><b>Más clientes</b></li>
<li><b>Que compren más</b> de los que ya consultan</li>
<li><b>Que gasten más</b> por compra</li>
<li><b>Que vuelvan</b> a comprar</li>
<li><b>Que cada venta deje más</b></li>
</ol>
<p>Marketing suele obsesionarse con el primero. Una directora trabaja en todos los que puede mover.</p>`,
        remember: 'Más clientes, más conversión, más ticket, más recompra, más margen.',
        check: {
          q: '¿Cuál de estos NO es un camino para crecer?',
          options: ['Que el cliente gaste más por compra', 'Que vuelva a comprar', 'Tener más seguidores'],
          answer: 2,
          why: 'Los seguidores pueden ayudar, pero no son crecimiento del negocio por sí solos.',
        },
      },
      {
        title: 'Mejoras chicas que se suman',
        idea: 'Mejorar un poco en varios lados suele rendir más que mucho en uno solo.',
        body: `
<p>Si mejorás 10% en cuatro cosas a la vez (más leads, más conversión, más ticket, más recompra), el resultado no es 40% más: es casi <b>46%</b>, porque cada mejora se multiplica con las otras.</p>
<p>Y suele ser más fácil mejorar un poquito en cuatro lados que duplicar uno solo.</p>`,
        remember: 'Un poco en cada palanca > mucho en una sola.',
        check: {
          q: '¿Qué suele ser más fácil?',
          options: ['Duplicar los leads', 'Mejorar un poco en varias palancas', 'Las dos son iguales'],
          answer: 1,
          why: 'Las mejoras chicas son más alcanzables y se potencian entre sí.',
        },
      },
      {
        title: 'Clientes que vuelven',
        idea: 'Retener es casi siempre más barato que conseguir clientes nuevos.',
        body: `
<p>Tomá a los clientes que compraron por primera vez en enero y mirá cuántos volvieron a los 3, 6 y 12 meses. Repetí con los de abril.</p>
<p>Si los de abril vuelven más que los de enero, algo mejoró (atención, seguimiento, producto). Así sabés si lo que hacés está funcionando.</p>`,
        remember: 'Seguí a cada grupo de clientes nuevos y mirá cuántos vuelven.',
        check: {
          q: '¿Por qué conviene cuidar a los clientes actuales?',
          options: ['Porque ya confían en vos y venderles cuesta menos', 'Porque compran menos', 'No conviene'],
          answer: 0,
          why: 'No hay que pagar para conseguirlos de nuevo.',
        },
      },
      {
        title: 'Probar con método',
        idea: 'Una prueba sin criterio de éxito es solo una actividad.',
        body: `
<p>Cada prueba con cuatro cosas:</p>
<ul>
<li><b>Qué creés que va a pasar:</b> “si respondemos en 15 minutos, van a hablar más leads”.</li>
<li><b>Qué vas a medir.</b></li>
<li><b>Cuánto dura.</b></li>
<li><b>Qué decidís según el resultado.</b></li>
</ul>
<p>Para elegir qué probar primero: impacto, qué tan seguro estás y qué tan fácil es.</p>`,
        remember: 'Antes de probar, definí qué vas a decidir con el resultado.',
        check: {
          q: '¿Qué le falta a “probemos TikTok a ver qué pasa”?',
          options: ['Presupuesto', 'Qué medir y qué decidir según el resultado', 'Creatividades'],
          answer: 1,
          why: 'Sin eso, no sabés si funcionó ni qué hacer después.',
        },
      },
    ],
    cmoQuestions: [
      'Este año, ¿crecimos por más clientes, más ticket o más recompra?',
      '¿Cuántos clientes vuelven a comprar?',
      '¿Qué palanca es más fácil de mover hoy?',
    ],
    lab: [
      'Mirá si el crecimiento de Durabox del último año vino de más clientes, más ticket o más recompra.',
      'Contá cuántos clientes de hace un año volvieron a comprar.',
      'Elegí 3 pruebas para hacer, con qué medir y qué decidir.',
    ],
    case: {
      title: 'Caso 10 — Crecer 25% sin depender solo de leads',
      prompt: `
<p>Una empresa vende 150 unidades por mes y quiere crecer 25%. Datos: de cada 100 leads compran 5; de cada 100 compradores, 15 se llevan un accesorio; casi nadie vuelve a comprar.</p>
<p>¿De dónde sacarías ese crecimiento?</p>`,
      solution: `
<p>Combinando varias palancas en vez de duplicar leads:</p>
<ul>
<li><b>Que compren más</b> de los que consultan (de 5 a 5,5 de cada 100) → +10% de ventas.</li>
<li><b>Accesorios:</b> de 15 a 35 de cada 100 compradores → sube el ticket.</li>
<li><b>Precio:</b> probar una suba chica.</li>
<li><b>Un poco más de leads:</b> +7%.</li>
</ul>
<p>Juntas suman alrededor de 25%, y precio y accesorios además dejan más ganancia. Cada palanca con un responsable y una prueba.</p>`,
    },
    cards: [
      { q: 'Los 5 caminos para crecer', a: 'Más clientes, más conversión, más ticket, más recompra, más margen.' },
      { q: '¿Por qué conviene mejorar varias palancas?', a: 'Porque las mejoras se multiplican entre sí y son más alcanzables.' },
      { q: '¿Cómo saber si los clientes vuelven más?', a: 'Seguir cada grupo de clientes nuevos y ver cuántos vuelven a los 3, 6 y 12 meses.' },
      { q: '¿Qué tiene una buena prueba?', a: 'Qué creés que va a pasar, qué medís, cuánto dura y qué decidís.' },
    ],
  },

  /* ───────────────────────── SEMANA 11 ───────────────────────── */
  {
    n: 11,
    title: 'Pensar estrategia',
    goal: 'Mirar el mercado, la competencia y los canales para decidir dónde poner los recursos.',
    summary: [
      'Saber cuán grande es el mercado y cuánto ya tenés.',
      'Un buen posicionamiento te deja cobrar mejor.',
      'Estrategia es decidir dónde poner la plata y a qué decir que no.',
    ],
    sections: [
      {
        title: '¿Cuánto mercado hay?',
        idea: 'Antes de crecer, conviene saber cuánto lugar queda.',
        body: `
<p>Una cuenta simple: cuántos compradores posibles hay × cuántos compran por año × cuánto gastan.</p>
<p>Si hay 400.000 camionetas y por año compra tapa el 3%, son unas 12.000 tapas al año. Si vendés 1.200, tenés el 10%.</p>
<p>Con 10% hay mucho lugar para crecer. Con 60%, el crecimiento tiene que venir de otros lados (accesorios, otros mercados).</p>`,
        remember: 'Cuánto mercado hay y cuánto tenés define por dónde crecer.',
        check: {
          q: 'Ya tenés casi todo el mercado local. ¿Por dónde conviene crecer?',
          options: ['Más publicidad en el mismo mercado', 'Otros productos u otros mercados', 'Bajar precios'],
          answer: 1,
          why: 'Si ya tenés casi todo, queda poco por ganar en el mismo lugar.',
        },
      },
      {
        title: 'Competencia y posicionamiento',
        idea: 'Posicionarte es elegir qué lugar ocupás en la cabeza del cliente.',
        body: `
<p>Tu competencia no son solo otras marcas: también lo importado, lo casero o no comprar nada.</p>
<p>Una frase para ordenar el posicionamiento:</p>
<blockquote>Para [cliente] que [necesita algo], [marca] es [qué es] que [beneficio principal], a diferencia de [alternativa], porque [por qué creerte].</blockquote>
<p>Un buen posicionamiento no es solo comunicación: es lo que te permite cobrar mejor.</p>`,
        remember: 'Posicionarse bien = poder cobrar mejor que las alternativas.',
        check: {
          q: '¿Quién es competencia de una tapa de camioneta?',
          options: ['Solo otras marcas de tapas', 'Otras marcas, importados, soluciones caseras o no comprar', 'Nadie'],
          answer: 1,
          why: 'Cualquier alternativa que el cliente considere es competencia.',
        },
      },
      {
        title: 'Canales de venta',
        idea: 'Cada canal deja distinto, controla distinto y llega distinto.',
        body: `
<ul>
<li><b>Venta directa o WhatsApp:</b> deja más y controlás todo, pero depende del equipo.</li>
<li><b>E-commerce propio:</b> deja bien, depende de cuánto tráfico tengas.</li>
<li><b>Distribuidores:</b> llegan lejos, pero dejan menos y controlás menos.</li>
<li><b>Marketplaces:</b> mucho alcance, pero se llevan comisión.</li>
</ul>
<p>La pregunta no es cuál es mejor, sino cómo combinarlos sin que se pisen entre sí (por ejemplo, con precios coherentes).</p>`,
        remember: 'Combiná canales con reglas claras para que no compitan entre ellos.',
        check: {
          q: '¿Qué riesgo hay al vender por distribuidores y también directo?',
          options: ['Ninguno', 'Que compitan en precio y se pisen', 'Que se venda demasiado'],
          answer: 1,
          why: 'Sin reglas de precio y zonas, los canales se canibalizan.',
        },
      },
      {
        title: 'Probar un mercado nuevo',
        idea: 'Un mercado nuevo se prueba chico, con reglas para seguir o frenar.',
        body: `
<p>Para algo como Paraguay, preguntas básicas:</p>
<ul>
<li>¿Hay demanda? (¿ya llegan consultas de allá?)</li>
<li>¿Cuánto cuesta llegar? (envío, impuestos)</li>
<li>¿Vendemos directo o con un distribuidor?</li>
<li>¿Podemos atenderlo?</li>
</ul>
<p>Y lo más importante: decidir <b>antes</b> cuánta plata se pone para aprender y qué resultado haría seguir o frenar.</p>`,
        remember: 'Prueba chica + reglas de seguir o frenar definidas antes.',
        check: {
          q: '¿Cuál es la forma más sensata de probar un mercado nuevo?',
          options: ['Invertir fuerte desde el principio', 'Una prueba chica con reglas claras de éxito', 'Esperar a que la competencia vaya primero'],
          answer: 1,
          why: 'Limita el riesgo y te deja aprender rápido.',
        },
      },
      {
        title: 'Decir que no',
        idea: 'La estrategia real es dónde se pone la plata, el tiempo y la gente.',
        body: `
<p>No importa lo que diga el plan: la estrategia es a qué le dedicás recursos. Y eso implica decir que no a otras cosas.</p>
<p>Un reparto sano:</p>
<ul>
<li>Cuidar lo que hoy paga las cuentas.</li>
<li>Crecer en lo cercano.</li>
<li>Explorar algo nuevo, con poca plata.</li>
</ul>`,
        remember: 'Cada cosa nueva compite por los mismos recursos. Elegir es decir que no.',
        check: {
          q: 'Aparece una idea nueva muy atractiva. ¿Qué preguntás primero?',
          options: ['¿Cuándo arrancamos?', '¿Qué dejamos de hacer para hacerla?', '¿Quién la diseña?'],
          answer: 1,
          why: 'Los recursos son limitados: algo tiene que ceder.',
        },
      },
    ],
    cmoQuestions: [
      '¿Cuánto del mercado tenemos?',
      '¿Contra qué alternativas compite el cliente?',
      '¿Qué dejamos de hacer para hacer esto nuevo?',
    ],
    lab: [
      'Estimá cuánto mercado de tapas hay en Argentina y cuánto tiene Durabox.',
      'Escribí la frase de posicionamiento de Durabox.',
      'Armá la lista de preguntas para evaluar Paraguay.',
    ],
    case: {
      title: 'Caso 11 — ¿Paraguay o más Argentina?',
      prompt: `
<p>Tenés presupuesto para el próximo semestre. En Argentina sabés cuánto cuesta conseguir un cliente y cuánto deja. En Paraguay no tenés datos, pero llegan unas 40 consultas por mes sin hacer nada, y enviar allá cuesta más.</p>
<p>¿Cómo repartís?</p>`,
      solution: `
<p>No es elegir uno: es repartir.</p>
<ul>
<li><b>La mayor parte (80–85%) en Argentina</b>, donde los números son conocidos.</li>
<li><b>Una parte chica (15–20%) para probar Paraguay</b> durante 3 meses, para aprender: cuánto cuesta un cliente, cuánto compran, si conviene un distribuidor.</li>
</ul>
<p>Antes de empezar, definir: si después de 3 meses cada venta en Paraguay deja al menos un 60% de lo que deja en Argentina, se sigue. Si no, se frena y se guarda lo aprendido.</p>`,
    },
    cards: [
      { q: '¿Para qué sirve saber el tamaño del mercado?', a: 'Para saber cuánto lugar queda para crecer y por dónde conviene hacerlo.' },
      { q: 'Frase de posicionamiento', a: 'Para [cliente] que [necesidad], [marca] es [qué es] que [beneficio], a diferencia de [alternativa], porque [razón].' },
      { q: '¿Cómo probar un mercado nuevo?', a: 'Con una prueba chica y reglas de seguir o frenar definidas antes.' },
      { q: '¿Qué es la estrategia en la práctica?', a: 'Dónde se pone la plata, el tiempo y la gente, y a qué se dice que no.' },
    ],
  },

  /* ───────────────────────── SEMANA 12 ───────────────────────── */
  {
    n: 12,
    title: 'Dirigir marketing',
    goal: 'Armar un plan, un tablero y presentar decisiones frente a la dirección.',
    summary: [
      'Un tablero de una página que cuente la historia completa.',
      'Al presentar: primero la recomendación.',
      'Reuniones con ritmo fijo sostienen el trabajo cuando no estás.',
    ],
    sections: [
      {
        title: 'El tablero de una página',
        idea: 'Un solo tablero que conecte la inversión con la ganancia.',
        body: `
<div class="chain strong">Inversión → clientes → ventas → lo que queda → ganancia</div>
<p>Tres niveles, de arriba hacia abajo:</p>
<ul>
<li><b>Negocio:</b> facturación, lo que queda, ganancia.</li>
<li><b>Motor:</b> leads, cuántos compran, cuánto cuesta cada cliente.</li>
<li><b>Canales:</b> qué rinde cada uno.</li>
</ul>
<p>Cada número con una comparación (mes pasado, año pasado, objetivo) y una línea: <em>qué significa y qué decidimos</em>.</p>`,
        remember: 'Cada número del tablero tiene que responder: ¿y esto qué significa para el negocio?',
        check: {
          q: '¿Qué debería acompañar a cada número del tablero?',
          options: ['Un gráfico lindo', 'Una comparación y qué decidimos', 'El nombre de la herramienta'],
          answer: 1,
          why: 'Sin comparación ni decisión, el número no sirve para dirigir.',
        },
      },
      {
        title: 'Cómo presentar a la dirección',
        idea: 'Primero lo que proponés. Después por qué.',
        body: `
<ol>
<li><b>Lo que proponés.</b></li>
<li><b>Por qué:</b> 2 o 3 números, no más.</li>
<li><b>Qué tiene que pasar</b> para que funcione.</li>
<li><b>Riesgos</b> y cómo los cuidás.</li>
<li><b>Qué decisión necesitás</b> y para cuándo.</li>
</ol>
<blockquote>“Todavía no escalaría. El costo por lead mejoró, pero no sabemos si esos leads compran. Necesito ese dato de ventas. Si se confirma, hay espacio para invertir más.”</blockquote>`,
        remember: 'Recomendación → por qué → riesgos → qué decisión necesito.',
        check: {
          q: '¿Con qué empezás una presentación al dueño?',
          options: ['Con todos los datos', 'Con lo que proponés', 'Con lo que hizo la competencia'],
          answer: 1,
          why: 'La dirección necesita saber primero qué se decide; los datos lo sostienen.',
        },
      },
      {
        title: 'El plan',
        idea: 'Un plan corto que vaya del diagnóstico a las decisiones.',
        body: `
<ol>
<li>Cómo está hoy el negocio (en pocas líneas).</li>
<li>Qué queremos lograr (en ganancia y ventas, no en likes).</li>
<li>Qué caminos elegimos para crecer, y por qué.</li>
<li>Cuánto invertimos, por tramos.</li>
<li>Quién hace qué y para cuándo.</li>
<li>Cómo lo seguimos.</li>
</ol>`,
        remember: 'Diagnóstico → objetivo → caminos → inversión → responsables → seguimiento.',
        check: {
          q: '¿Cuál es un buen objetivo para un plan de dirección?',
          options: ['Llegar a 10.000 seguidores', 'Aumentar la ganancia por venta y las ventas', 'Publicar todos los días'],
          answer: 1,
          why: 'Los objetivos de dirección están en términos de negocio.',
        },
      },
      {
        title: 'Reuniones con ritmo',
        idea: 'Un ritmo fijo de reuniones sostiene el trabajo cuando no estás.',
        body: `
<ul>
<li><b>Semanal, con ventas</b> (30 min): leads, respuesta, por qué se pierden ventas.</li>
<li><b>Mensual, con dirección</b> (1 hora): tablero, presupuesto, capacidad.</li>
<li><b>Cada 3 meses:</b> estrategia, precios, qué probar.</li>
</ul>
<p>Como directora externa, tu valor no son las horas: es el criterio y el sistema que dejás funcionando.</p>`,
        remember: 'Semanal con ventas, mensual con dirección, trimestral de estrategia.',
        check: {
          q: 'Como directora externa, ¿qué deja más valor?',
          options: ['Estar muchas horas', 'Un sistema y un ritmo que funcionan cuando no estás', 'Hacer todo vos'],
          answer: 1,
          why: 'Lo fractional se basa en criterio y sistema, no en presencia.',
        },
      },
      {
        title: 'Qué hacés vos y qué no',
        idea: 'No tenés que saber todo: tenés que hacer las preguntas correctas.',
        body: `
<table><thead><tr><th>Vos</th><th>Le pedís a otros</th></tr></thead><tbody>
<tr><td>Hacer las preguntas correctas</td><td>Contador: costos exactos, impuestos</td></tr>
<tr><td>Convertir números en decisiones</td><td>Ventas: cómo vienen las oportunidades</td></tr>
<tr><td>Definir topes, presupuesto y qué empujar</td><td>Producción: stock y capacidad</td></tr>
<tr><td>Armar el tablero y las reuniones</td><td>Agencia o equipo: ejecutar campañas</td></tr>
</tbody></table>
<p><b>Dónde encajás mejor:</b> empresas medianas que crecieron, hacen muchas cosas de marketing y necesitan a alguien que ordene y dirija. Este método puede ser el de Jirafa.</p>`,
        remember: 'Tu trabajo es preguntar bien y decidir con los datos de otros, no producirlos todos.',
        check: {
          q: '¿Quién debería calcular los costos exactos de cada producto?',
          options: ['Vos', 'El contador o el CFO', 'La agencia'],
          answer: 1,
          why: 'Vos los usás para decidir; los produce quien maneja los números contables.',
        },
      },
    ],
    cmoQuestions: [
      '¿Qué decisión necesito de la dirección y para cuándo?',
      '¿Cuáles son los 3 números que sostienen esto?',
      '¿Qué tiene que pasar para que funcione?',
    ],
    lab: [
      'Completá el Tablero de Dirección de Durabox en Herramientas.',
      'Escribí un plan de una o dos páginas para el próximo semestre.',
      'Prepará una recomendación usando los 5 pasos.',
    ],
    case: {
      title: 'Caso final — Tu primera reunión con la dirección',
      prompt: `
<p>Con Durabox (o un cliente real), prepará una recomendación de una página con:</p>
<ul>
<li>Cómo está el negocio, en pocas líneas.</li>
<li>Qué es lo que hoy limita las ventas.</li>
<li>Tres caminos para crecer, con lo que esperás de cada uno.</li>
<li>Cuánto invertir, por tramos.</li>
<li>Qué decisión necesitás.</li>
</ul>`,
      solution: `
<p>No hay una única respuesta. Revisala con esta lista:</p>
<ul>
<li>¿Empieza por lo que proponés?</li>
<li>¿Cada número de marketing está traducido a negocio?</li>
<li>¿Distingue el costo del lead del costo del cliente?</li>
<li>¿Tiene en cuenta si la empresa puede atender más clientes?</li>
<li>¿La inversión sale de un objetivo y va por tramos?</li>
<li>¿Termina con una decisión concreta?</li>
</ul>`,
    },
    cards: [
      { q: '¿Cómo presentar a la dirección?', a: 'Recomendación → por qué (2 o 3 números) → qué tiene que pasar → riesgos → qué decisión necesitás.' },
      { q: '¿Qué tiene un buen tablero?', a: 'Una página que conecta inversión con ganancia, con comparación y decisión en cada número.' },
      { q: 'Ritmo de reuniones', a: 'Semanal con ventas, mensual con dirección, trimestral de estrategia.' },
      { q: '¿Qué hacés vos como directora externa?', a: 'Preguntar bien, convertir números en decisiones y dejar un sistema funcionando.' },
    ],
  },
];
