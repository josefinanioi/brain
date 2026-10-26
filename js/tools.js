/* Brain — calculadoras de negocio. Cada herramienta: inputs → compute → outputs + lectura. */

const fmtMoney = (v) => {
  if (!isFinite(v)) return '—';
  const sign = v < 0 ? '−' : '';
  return sign + '$' + Math.round(Math.abs(v)).toLocaleString('es-AR');
};
const fmtNum = (v, d = 0) => (isFinite(v) ? v.toLocaleString('es-AR', { maximumFractionDigits: d, minimumFractionDigits: 0 }) : '—');
const fmtPct = (v, d = 1) => (isFinite(v) ? (v * 100).toLocaleString('es-AR', { maximumFractionDigits: d }) + '%' : '—');
const fmtX = (v) => (isFinite(v) ? v.toLocaleString('es-AR', { maximumFractionDigits: 2 }) + 'x' : '—');

const TOOLS = [
  {
    id: 'venta',
    week: 9,
    title: 'Economía de una venta',
    desc: 'Precio → margen bruto → contribución → contribución post-CAC.',
    inputs: [
      { k: 'precio', label: 'Precio de venta', def: 1000000, unit: '$' },
      { k: 'costo', label: 'Costo del producto', def: 550000, unit: '$' },
      { k: 'comision', label: 'Comisión vendedor', def: 40000, unit: '$' },
      { k: 'pago', label: 'Comisión medio de pago', def: 30000, unit: '$' },
      { k: 'logistica', label: 'Logística asumida', def: 20000, unit: '$' },
      { k: 'cac', label: 'CAC', def: 100000, unit: '$' },
    ],
    compute: (v) => {
      const mb = v.precio - v.costo;
      const contrib = mb - v.comision - v.pago - v.logistica;
      const post = contrib - v.cac;
      return [
        { label: 'Margen bruto', value: fmtMoney(mb), sub: fmtPct(mb / v.precio) },
        { label: 'Contribución antes de adquisición', value: fmtMoney(contrib), sub: fmtPct(contrib / v.precio) },
        { label: 'Contribución post-CAC', value: fmtMoney(post), sub: fmtPct(post / v.precio), tone: post < 0 ? 'bad' : 'good' },
        { label: 'ROAS de equilibrio', value: fmtX(v.precio / contrib) },
      ];
    },
    insight: (v) => {
      const contrib = v.precio - v.costo - v.comision - v.pago - v.logistica;
      if (v.cac > contrib) return 'El CAC supera la contribución: cada venta adquirida así destruye valor, salvo que haya recompra o accesorios que lo justifiquen.';
      return `Marketing consume ${fmtPct(v.cac / contrib, 0)} de la contribución de cada venta. ¿Cuánto quiere conservar la empresa por venta?`;
    },
  },
  {
    id: 'cacmax',
    week: 9,
    title: 'CAC máximo → CPL máximo',
    desc: 'La frontera económica de marketing, traducida a la métrica de Meta.',
    inputs: [
      { k: 'contrib', label: 'Contribución antes de adquisición', def: 360000, unit: '$' },
      { k: 'conservar', label: 'Contribución a conservar por venta', def: 200000, unit: '$' },
      { k: 'conv', label: 'Conversión lead → venta', def: 10, unit: '%' },
      { k: 'cplActual', label: 'CPL actual', def: 9000, unit: '$' },
    ],
    compute: (v) => {
      const cacMax = v.contrib - v.conservar;
      const cplMax = cacMax * (v.conv / 100);
      const cacReal = v.cplActual / (v.conv / 100);
      return [
        { label: 'CAC máximo', value: fmtMoney(cacMax) },
        { label: 'CPL máximo', value: fmtMoney(cplMax) },
        { label: 'CAC implícito con CPL actual', value: fmtMoney(cacReal), tone: cacReal > cacMax ? 'bad' : 'good' },
        { label: 'Leads necesarios por venta', value: fmtNum(100 / v.conv, 1) },
      ];
    },
    insight: (v) => {
      const cacMax = v.contrib - v.conservar;
      const cplMax = cacMax * (v.conv / 100);
      const ratio = v.cplActual / cplMax;
      if (ratio > 1) return `El CPL actual está ${fmtPct(ratio - 1, 0)} por encima del máximo. Antes de culpar a Meta, revisá la conversión: si sube, el CPL máximo también.`;
      if (ratio > 0.8) return 'Cerca del límite: revisá calidad de leads, producto y LTV antes de escalar.';
      return 'Hay espacio económico para escalar, si el CAC marginal se sostiene y hay capacidad comercial.';
    },
  },
  {
    id: 'roas',
    week: 9,
    title: 'ROAS de equilibrio y objetivo',
    desc: '¿Ese ROAS es bueno? Depende del margen.',
    inputs: [
      { k: 'margen', label: 'Margen de contribución antes de ads', def: 25, unit: '%' },
      { k: 'maxMkt', label: '% máximo de facturación para marketing', def: 10, unit: '%' },
      { k: 'roasActual', label: 'ROAS actual', def: 5, unit: 'x' },
    ],
    compute: (v) => {
      const eq = 1 / (v.margen / 100);
      const obj = 1 / (v.maxMkt / 100);
      const contribPorPeso = v.roasActual * (v.margen / 100) - 1;
      return [
        { label: 'ROAS de equilibrio', value: fmtX(eq) },
        { label: 'ROAS objetivo', value: fmtX(obj) },
        { label: 'Contribución por $1 en ads', value: fmtMoney(contribPorPeso * 100) + ' c/ $100', tone: contribPorPeso < 0 ? 'bad' : 'good' },
      ];
    },
    insight: (v) => {
      const eq = 1 / (v.margen / 100);
      if (v.roasActual < eq) return 'Con este margen, el ROAS actual destruye contribución: cada peso en ads devuelve menos de lo que cuesta.';
      if (v.roasActual < 1 / (v.maxMkt / 100)) return 'Por encima del equilibrio pero debajo del objetivo: aporta, pero marketing consume más de lo que dirección tolera.';
      return 'Por encima del objetivo. Confirmá que sea ROAS de ventas reales, sin cancelaciones y de clientes nuevos.';
    },
  },
  {
    id: 'equilibrio',
    week: 9,
    title: 'Punto de equilibrio',
    desc: '¿Cuántas ventas cubren la estructura?',
    inputs: [
      { k: 'fijos', label: 'Costos fijos mensuales', def: 25000000, unit: '$' },
      { k: 'contrib', label: 'Contribución por venta', def: 350000, unit: '$' },
      { k: 'ventas', label: 'Ventas actuales', def: 100, unit: '#' },
      { k: 'capacidad', label: 'Capacidad máxima', def: 130, unit: '#' },
    ],
    compute: (v) => {
      const pe = v.fijos / v.contrib;
      const res = v.ventas * v.contrib - v.fijos;
      return [
        { label: 'Punto de equilibrio', value: fmtNum(Math.ceil(pe)) + ' ventas' },
        { label: 'Ventas sobre el equilibrio', value: fmtNum(v.ventas - Math.ceil(pe)), tone: v.ventas < pe ? 'bad' : 'good' },
        { label: 'Resultado mensual', value: fmtMoney(res), tone: res < 0 ? 'bad' : 'good' },
        { label: 'Uso de capacidad', value: fmtPct(v.ventas / v.capacidad, 0) },
      ];
    },
    insight: (v) => {
      const libre = v.capacidad - v.ventas;
      return `Hay capacidad para ${fmtNum(libre)} ventas más (${fmtPct(libre / v.ventas, 0)} de crecimiento) antes de chocar con el techo operativo. ¿Es capacidad teórica o sostenible?`;
    },
  },
  {
    id: 'funnel',
    week: 9,
    title: 'Funnel al revés',
    desc: 'Del objetivo de ventas a la inversión necesaria.',
    inputs: [
      { k: 'ventas', label: 'Ventas objetivo (incrementales)', def: 50, unit: '#' },
      { k: 'cierre', label: 'Oportunidad → venta', def: 25, unit: '%' },
      { k: 'calif', label: 'Lead → oportunidad', def: 40, unit: '%' },
      { k: 'cpl', label: 'CPL esperado', def: 8000, unit: '$' },
      { k: 'capLeads', label: 'Leads que ventas puede atender', def: 600, unit: '#' },
    ],
    compute: (v) => {
      const opps = v.ventas / (v.cierre / 100);
      const leads = opps / (v.calif / 100);
      const inv = leads * v.cpl;
      return [
        { label: 'Oportunidades necesarias', value: fmtNum(Math.ceil(opps)) },
        { label: 'Leads necesarios', value: fmtNum(Math.ceil(leads)), tone: leads > v.capLeads ? 'bad' : 'good' },
        { label: 'Inversión necesaria', value: fmtMoney(inv) },
        { label: 'CAC resultante', value: fmtMoney(inv / v.ventas) },
      ];
    },
    insight: (v) => {
      const leads = v.ventas / (v.cierre / 100) / (v.calif / 100);
      if (leads > v.capLeads) return `Ventas no puede procesar ${fmtNum(Math.ceil(leads))} leads: la restricción es comercial, no publicitaria. Más inversión bajaría la conversión.`;
      return `“Para ${v.ventas} ventas necesitamos ~${fmtNum(Math.ceil(leads))} leads y ${fmtMoney(leads * v.cpl)}, si ventas sostiene ${v.calif}% de calificación y ${v.cierre}% de cierre.”`;
    },
  },
  {
    id: 'descuento',
    week: 9,
    title: 'Simulador de descuento',
    desc: '¿Cuánto tienen que subir las ventas para compensar?',
    inputs: [
      { k: 'precio', label: 'Precio', def: 200000, unit: '$' },
      { k: 'variable', label: 'Costos variables por venta', def: 130000, unit: '$' },
      { k: 'cac', label: 'CAC', def: 25000, unit: '$' },
      { k: 'desc', label: 'Descuento', def: 15, unit: '%' },
      { k: 'ventas', label: 'Ventas actuales', def: 500, unit: '#' },
      { k: 'ventasPromo', label: 'Ventas estimadas con promo', def: 650, unit: '#' },
    ],
    compute: (v) => {
      const cAntes = v.precio - v.variable - v.cac;
      const cDesp = v.precio * (1 - v.desc / 100) - v.variable - v.cac;
      const totalAntes = cAntes * v.ventas;
      const totalDesp = cDesp * v.ventasPromo;
      const necesarias = cDesp > 0 ? totalAntes / cDesp : Infinity;
      return [
        { label: 'Contribución post-CAC por venta', value: `${fmtMoney(cAntes)} → ${fmtMoney(cDesp)}`, sub: 'cae ' + fmtPct(1 - cDesp / cAntes, 0) },
        { label: 'Ventas necesarias para igualar', value: isFinite(necesarias) ? fmtNum(Math.ceil(necesarias)) : 'Imposible', sub: isFinite(necesarias) ? '+' + fmtPct(necesarias / v.ventas - 1, 0) : '' },
        { label: 'Contribución total', value: `${fmtMoney(totalAntes)} → ${fmtMoney(totalDesp)}`, tone: totalDesp < totalAntes ? 'bad' : 'good' },
      ];
    },
    insight: (v) => {
      const cAntes = (v.precio - v.variable - v.cac) * v.ventas;
      const cDesp = (v.precio * (1 - v.desc / 100) - v.variable - v.cac) * v.ventasPromo;
      return cDesp < cAntes
        ? `La promo vende ${fmtPct(v.ventasPromo / v.ventas - 1, 0)} más pero genera ${fmtMoney(cAntes - cDesp)} menos de contribución. Probá regalo, bundle o descuento acotado.`
        : 'La promo aumenta la contribución total con estos supuestos. Validá que las ventas extra sean incrementales y que haya stock.';
    },
  },
  {
    id: 'ltv',
    week: 7,
    title: 'LTV, LTV/CAC y payback',
    desc: 'Cuánto vale un cliente y cuándo devuelve lo que costó.',
    inputs: [
      { k: 'ticket', label: 'Ticket promedio', def: 200000, unit: '$' },
      { k: 'margen', label: 'Margen de contribución', def: 40, unit: '%' },
      { k: 'compras', label: 'Compras en el horizonte', def: 3, unit: '#' },
      { k: 'meses', label: 'Horizonte', def: 24, unit: 'meses' },
      { k: 'cac', label: 'CAC', def: 60000, unit: '$' },
    ],
    compute: (v) => {
      const ltv = v.ticket * (v.margen / 100) * v.compras;
      const mensual = ltv / v.meses;
      const ratio = ltv / v.cac;
      const primera = v.ticket * (v.margen / 100);
      return [
        { label: 'LTV (contribución)', value: fmtMoney(ltv) },
        { label: 'LTV / CAC', value: fmtNum(ratio, 1), tone: ratio < 1 ? 'bad' : ratio < 3 ? 'warn' : 'good' },
        { label: 'Primera compra post-CAC', value: fmtMoney(primera - v.cac), tone: primera < v.cac ? 'warn' : 'good' },
        { label: 'Payback aprox.', value: primera >= v.cac ? 'En la 1ª compra' : fmtNum(v.cac / mensual, 1) + ' meses' },
      ];
    },
    insight: (v) => {
      const r = (v.ticket * (v.margen / 100) * v.compras) / v.cac;
      if (r < 1) return 'Cada cliente destruye valor en el horizonte elegido.';
      if (r < 3) return 'Frágil: depende de que la recompra supuesta se cumpla. ¿Está medida o es una hipótesis?';
      return 'Saludable. Verificá que la recompra esté medida en cohortes reales y que la caja tolere el payback.';
    },
  },
  {
    id: 'marginal',
    week: 9,
    title: 'CAC marginal',
    desc: 'Cuánto costaron los últimos clientes, no el promedio.',
    inputs: [
      { k: 'inv1', label: 'Inversión período anterior', def: 6000000, unit: '$' },
      { k: 'cli1', label: 'Clientes período anterior', def: 55, unit: '#' },
      { k: 'inv2', label: 'Inversión período actual', def: 8000000, unit: '$' },
      { k: 'cli2', label: 'Clientes período actual', def: 66, unit: '#' },
      { k: 'cacMax', label: 'CAC máximo', def: 120000, unit: '$' },
    ],
    compute: (v) => {
      const marg = (v.inv2 - v.inv1) / (v.cli2 - v.cli1);
      return [
        { label: 'CAC promedio anterior', value: fmtMoney(v.inv1 / v.cli1) },
        { label: 'CAC promedio actual', value: fmtMoney(v.inv2 / v.cli2) },
        { label: 'CAC marginal', value: v.cli2 > v.cli1 ? fmtMoney(marg) : 'Sin clientes extra', tone: marg > v.cacMax || v.cli2 <= v.cli1 ? 'bad' : 'good' },
      ];
    },
    insight: (v) => {
      const marg = (v.inv2 - v.inv1) / (v.cli2 - v.cli1);
      if (v.cli2 <= v.cli1) return 'La inversión adicional no trajo clientes adicionales.';
      return marg > v.cacMax
        ? 'El último tramo de inversión compra clientes por encima del CAC máximo, aunque el promedio se vea bien. No escalar en los mismos canales.'
        : 'El último tramo sigue dentro del CAC máximo. Se puede seguir escalando de a 20–30% si hay capacidad.';
    },
  },
  {
    id: 'precio',
    week: 9,
    title: 'Suba de precio',
    desc: 'Cuánto volumen podés perder y ganar lo mismo.',
    inputs: [
      { k: 'margen', label: 'Margen de contribución actual', def: 30, unit: '%' },
      { k: 'suba', label: 'Suba de precio', def: 5, unit: '%' },
    ],
    compute: (v) => {
      const m = v.margen / 100, p = v.suba / 100;
      return [
        { label: 'Contribución por venta', value: '+' + fmtPct(p / m, 1) },
        { label: 'Caída de volumen tolerable', value: fmtPct(p / (m + p), 1) },
      ];
    },
    insight: (v) => `Con margen ${v.margen}%, subir ${v.suba}% el precio equivale a vender ${fmtPct((v.suba / 100) / (v.margen / 100), 0)} más sin pagar CAC adicional.`,
  },
];

/* Tablero de Dirección: cadena completa inversión → crecimiento */
const DASH_FIELDS = [
  { k: 'inversion', label: 'Inversión en marketing', unit: '$', def: 5000000 },
  { k: 'leads', label: 'Leads', unit: '#', def: 1000 },
  { k: 'oportunidades', label: 'Oportunidades / presupuestos', unit: '#', def: 300 },
  { k: 'ventasMkt', label: 'Ventas de marketing', unit: '#', def: 50 },
  { k: 'ventasTot', label: 'Ventas totales', unit: '#', def: 100 },
  { k: 'ticket', label: 'Ticket promedio', unit: '$', def: 1000000 },
  { k: 'margen', label: 'Margen de contribución', unit: '%', def: 35 },
  { k: 'fijos', label: 'Costos fijos', unit: '$', def: 25000000 },
  { k: 'capacidad', label: 'Capacidad máxima (ventas)', unit: '#', def: 130 },
];

function computeDashboard(d) {
  const fact = d.ventasTot * d.ticket;
  const contrib = fact * (d.margen / 100);
  const resultado = contrib - d.inversion - d.fijos;
  const cpl = d.inversion / d.leads;
  const cac = d.inversion / d.ventasMkt;
  const contribVenta = d.ticket * (d.margen / 100);
  const pe = d.fijos / contribVenta;
  const out = {
    chain: [
      { label: 'Inversión', value: fmtMoney(d.inversion) },
      { label: 'Adquisición', value: fmtNum(d.leads) + ' leads', sub: 'CPL ' + fmtMoney(cpl) },
      { label: 'Pipeline', value: fmtNum(d.oportunidades) + ' opps', sub: fmtPct(d.oportunidades / d.leads, 0) + ' de leads' },
      { label: 'Ventas', value: fmtNum(d.ventasTot), sub: fmtNum(d.ventasMkt) + ' de marketing · CAC ' + fmtMoney(cac) },
      { label: 'Facturación', value: fmtMoney(fact), sub: 'MER ' + fmtX(fact / d.inversion) },
      { label: 'Margen', value: fmtMoney(contrib), sub: d.margen + '% contribución' },
      { label: 'Resultado', value: fmtMoney(resultado), tone: resultado < 0 ? 'bad' : 'good', sub: 'equilibrio ' + fmtNum(Math.ceil(pe)) + ' ventas' },
      { label: 'Crecimiento', value: fmtNum(d.capacidad - d.ventasTot) + ' ventas libres', sub: fmtPct(d.ventasTot / d.capacidad, 0) + ' de capacidad' },
    ],
    alerts: [],
  };
  const cacMaxTeor = contribVenta;
  if (cac > cacMaxTeor) out.alerts.push({ tone: 'bad', text: 'El CAC supera la contribución por venta: marketing destruye valor en la primera compra.' });
  else if (cac > cacMaxTeor * 0.5) out.alerts.push({ tone: 'warn', text: `Marketing consume ${fmtPct(cac / cacMaxTeor, 0)} de la contribución de cada venta adquirida.` });
  if (d.ventasTot / d.capacidad > 0.85) out.alerts.push({ tone: 'warn', text: 'Uso de capacidad > 85%: hablá con Operaciones antes de aumentar la demanda.' });
  if (d.ventasTot < pe) out.alerts.push({ tone: 'bad', text: 'Las ventas están por debajo del punto de equilibrio.' });
  const roasEq = 1 / (d.margen / 100);
  const roasMkt = (d.ventasMkt * d.ticket) / d.inversion;
  out.alerts.push({ tone: roasMkt < roasEq ? 'bad' : 'good', text: `ROAS de marketing ${fmtX(roasMkt)} vs. equilibrio ${fmtX(roasEq)}.` });
  out.alerts.push({ tone: 'info', text: `Conversión lead → venta ${fmtPct(d.ventasMkt / d.leads)}; oportunidad → venta ${fmtPct(d.ventasMkt / d.oportunidades)}. ¿Es buena? Compará contra tu histórico, no contra la intuición.` });
  return out;
}
