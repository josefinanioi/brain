// Auditoría de desbordes y superposiciones (solo para pruebas locales; no se publica).
(async () => {
  const w = (ms = 220) => new Promise((r) => setTimeout(r, ms));
  const vis = (el) => { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' && !el.closest('[hidden]'); };
  const inScroller = (el) => { let p = el.parentElement; while (p && p !== document.body) { const o = getComputedStyle(p).overflowX; if (['auto', 'scroll', 'hidden', 'clip'].includes(o)) return true; p = p.parentElement; } return false; };
  const hit = (a, b) => !(a.right <= b.left + 1 || b.right <= a.left + 1 || a.bottom <= b.top + 1 || b.bottom <= a.top + 1);
  const issues = new Set();
  const check = (name) => {
    const W = document.documentElement.clientWidth;
    if (document.documentElement.scrollWidth > W + 1) issues.add(`${name}: scroll horizontal ${document.documentElement.scrollWidth}>${W}`);
    document.querySelectorAll('#app *, .topbar *, .bottomnav *').forEach((el) => {
      if (!vis(el) || inScroller(el) || el.closest('.confetti')) return;
      const r = el.getBoundingClientRect();
      if (r.right > W + 1 || r.left < -1) issues.add(`${name}: sale de pantalla <${el.tagName.toLowerCase()} class="${el.className}"> ${Math.round(r.left)}..${Math.round(r.right)} de ${W}`);
    });
    const groups = [['.topbar', ':scope > *:not([hidden]), .stats > *, .topnav > a'], ['.path', '.node, .node-label, .stars, .start-bubble'], ['.p-top', ':scope > *'], ['.tiles', '.tile-stat'], ['.opts', '.opt'], ['.match', '.tile'], ['.rate', '.btn'], ['.stat-grid', '.sg'], ['.row-btns', '.btn'], ['.bottomnav', 'a'], ['.unit-head', ':scope > *']];
    groups.forEach(([root, sel]) => document.querySelectorAll(root).forEach((R) => {
      const els = [...R.querySelectorAll(sel)].filter(vis); const rs = els.map((e) => e.getBoundingClientRect());
      for (let i = 0; i < els.length; i++) for (let j = i + 1; j < els.length; j++) {
        if (els[i].contains(els[j]) || els[j].contains(els[i])) continue;
        if (hit(rs[i], rs[j])) issues.add(`${name}: superposición en ${root}: "${(els[i].innerText || els[i].className).slice(0, 20).replace(/\n/g, ' ')}" / "${(els[j].innerText || els[j].className).slice(0, 20).replace(/\n/g, ' ')}"`);
      }
    }));
    const tb = document.querySelector('.topbar'); const uh = document.querySelector('.unit-head');
    if (tb && uh && vis(tb)) { const top = parseFloat(getComputedStyle(uh).top); if (Math.abs(top - tb.getBoundingClientRect().height) > 1) issues.add(`${name}: encabezado de unidad top ${top} vs barra ${tb.getBoundingClientRect().height}`); }
    // elementos fijos siguen arriba al bajar
    const se = document.scrollingElement; if (tb && vis(tb) && se.scrollHeight > innerHeight + 200) { const y = scrollY; scrollTo(0, 600); const t = tb.getBoundingClientRect().top; if (Math.abs(t) > 1) issues.add(`${name}: la barra superior no queda fija (top ${Math.round(t)})`); if (uh) { const u = document.querySelector('.unit').getBoundingClientRect(); } scrollTo(0, y); }
    // botones con área táctil chica
    document.querySelectorAll('#app .btn, #app .opt, #app .tile, .bottomnav a, #app .node, #pClose').forEach((el) => {
      if (!vis(el)) return; const r = el.getBoundingClientRect();
      if (r.height < 40 || r.width < 40) issues.add(`${name}: área táctil chica <${el.className}> ${Math.round(r.width)}x${Math.round(r.height)}`);
    });
  };
  for (const h of ['#/', '#/perfil', '#/practica', '#/practica/tarjetas', '#/herramientas', '#/herramientas/tablero', '#/herramientas/venta', '#/cerebro', '#/cerebro/nueva', '#/unidad/1', '#/lab/1']) { location.hash = h; await w(); check(h); }
  if (localStorage.getItem('brain.audit.progress')) { check('camino-con-progreso'); }
  // Recorre una lección entera, sin depender de qué ejercicios tenga
  location.hash = '#/leccion/u1l1'; await w(300); check('lección-lectura');
  const btn = () => document.querySelector('#pBtn');
  for (let step = 0; step < 40 && document.body.classList.contains('playing'); step++) {
    const opt = document.querySelector('.opt:not(:disabled)'), num = document.querySelector('#numIn:not(:disabled)');
    const bank = document.querySelector('#ordBank .tile'), tile = document.querySelector('.match .tile:not(:disabled)');
    if (opt) { opt.click(); check('ej-opción'); }
    else if (num) { num.value = '1'; num.dispatchEvent(new Event('input')); check('ej-número'); }
    else if (bank) { document.querySelectorAll('#ordBank .tile').forEach((t) => t.click()); check('ej-ordenar'); }
    else if (tile) {
      check('ej-unir');
      document.querySelectorAll('.match [data-side="l"]').forEach((l) => { l.click(); document.querySelector(`.match [data-side="r"][data-i="${l.dataset.i}"]`).click(); });
    }
    await w(60);
    if (btn() && !btn().disabled) { btn().click(); await w(120); if (document.querySelector('.p-foot.good, .p-foot.bad')) check('feedback'); }
    if (btn() && !btn().disabled && document.querySelector('.p-foot.good, .p-foot.bad')) { btn().click(); await w(120); }
    if (document.querySelector('.celebrate')) { check('celebración'); break; }
  }
  location.hash = '#/'; await w();
  window.__auditResult = { w: innerWidth, h: innerHeight, issues: [...issues] };
})();
