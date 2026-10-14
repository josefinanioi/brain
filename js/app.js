/* Brain — segundo cerebro + Mini MBA para Fractional CMO. Vanilla JS, datos en localStorage. */
(() => {
  'use strict';

  /* ───────── Estado ───────── */
  const KEY = 'brain.v1';
  const blank = () => ({
    read: {},          // 'w1s0': timestamp
    answers: {},       // 'w1': texto
    lab: {},           // 'w1-0': true
    labNotes: {},      // 'w1': texto
    notes: [],         // {id,title,body,tags[],week,created,updated}
    srs: {},           // cardId: {due, interval, ease, reps}
    customCards: [],   // {id,q,a}
    toolInputs: {},    // toolId: {k:v}
    companies: [],     // {id,name,data,history:[{label,data,at}]}
    activeCompany: null,
    days: [],          // 'YYYY-MM-DD'
  });

  let state;
  try { state = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch { state = blank(); }

  let saveTimer;
  const save = () => {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { toast('No se pudo guardar (almacenamiento lleno o bloqueado)'); }
    }, 250);
  };
  const today = () => new Date().toISOString().slice(0, 10);
  const markDay = () => { const t = today(); if (!state.days.includes(t)) { state.days.push(t); save(); } };
  const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

  // Prellenar la respuesta del Caso 1 la primera vez
  WEEKS.forEach((w) => {
    if (w.case && w.case.starterAnswer && state.answers['w' + w.n] === undefined) state.answers['w' + w.n] = w.case.starterAnswer;
  });
  if (!state.companies.length) {
    const data = {}; DASH_FIELDS.forEach((f) => (data[f.k] = f.def));
    state.companies.push({ id: uid(), name: 'Durabox (laboratorio)', data, history: [] });
    state.activeCompany = state.companies[0].id;
  }
  save();

  /* ───────── Utilidades ───────── */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const app = $('#app');

  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2200);
  }

  const weekProgress = (w) => {
    const total = w.sections.length;
    const done = w.sections.filter((_, i) => state.read[`w${w.n}s${i}`]).length;
    return { done, total, pct: total ? done / total : 0 };
  };
  const weekStatus = (w) => {
    const p = weekProgress(w);
    const answered = (state.answers['w' + w.n] || '').trim().length > 0;
    if (p.done === p.total && answered) return 'done';
    if (p.done > 0 || answered) return 'progress';
    return 'todo';
  };
  const overall = () => {
    let done = 0, total = 0;
    WEEKS.forEach((w) => { const p = weekProgress(w); done += p.done; total += p.total; });
    return { done, total, pct: done / total };
  };
  const nextStep = () => {
    for (const w of WEEKS) {
      const i = w.sections.findIndex((_, i) => !state.read[`w${w.n}s${i}`]);
      if (i >= 0) return { w, i };
      if (!(state.answers['w' + w.n] || '').trim()) return { w, i: -1 };
    }
    return null;
  };
  const streak = () => {
    const set = new Set(state.days);
    let n = 0; const d = new Date();
    if (!set.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
    while (set.has(d.toISOString().slice(0, 10))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  };

  /* Markdown liviano + [[enlaces]] entre notas */
  function md(src) {
    const lines = esc(src).split('\n');
    let html = '', list = null;
    const inline = (s) => s
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*(?!\s)(.+?)\*/g, '$1<em>$2</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\[\[(.+?)\]\]/g, (_, t) => {
        const n = state.notes.find((x) => x.title.toLowerCase() === t.toLowerCase());
        return n ? `<a href="#/cerebro/${n.id}" class="wikilink">${t}</a>` : `<a href="#/cerebro/nueva?t=${encodeURIComponent(t)}" class="wikilink missing">${t}</a>`;
      })
      .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>')
      .replace(/(^|\s)#([\wáéíóúñ-]+)/gi, '$1<span class="tag">#$2</span>');
    const close = () => { if (list) { html += `</${list}>`; list = null; } };
    for (const raw of lines) {
      const l = raw.trimEnd();
      let m;
      if ((m = l.match(/^(#{1,3})\s+(.*)/))) { close(); html += `<h${m[1].length + 2}>${inline(m[2])}</h${m[1].length + 2}>`; }
      else if ((m = l.match(/^\s*[-*]\s+\[( |x)\]\s+(.*)/i))) { if (list !== 'ul') { close(); html += '<ul class="checks">'; list = 'ul'; } html += `<li class="${m[1].trim() ? 'checked' : ''}">${inline(m[2])}</li>`; }
      else if ((m = l.match(/^\s*[-*]\s+(.*)/))) { if (list !== 'ul') { close(); html += '<ul>'; list = 'ul'; } html += `<li>${inline(m[1])}</li>`; }
      else if ((m = l.match(/^\s*\d+[.)]\s+(.*)/))) { if (list !== 'ol') { close(); html += '<ol>'; list = 'ol'; } html += `<li>${inline(m[1])}</li>`; }
      else if ((m = l.match(/^&gt;\s?(.*)/))) { close(); html += `<blockquote>${inline(m[1])}</blockquote>`; }
      else if (!l.trim()) { close(); }
      else { close(); html += `<p>${inline(l)}</p>`; }
    }
    close();
    return html;
  }

  const ring = (pct, size = 92) => {
    const r = size / 2 - 7, c = 2 * Math.PI * r;
    return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true">
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" class="ring-bg"/>
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" class="ring-fg" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - pct)}" transform="rotate(-90 ${size / 2} ${size / 2})"/>
      <text x="50%" y="50%" dy=".35em" text-anchor="middle">${Math.round(pct * 100)}%</text></svg>`;
  };

  /* ───────── Flashcards (repetición espaciada) ───────── */
  const allCards = () => {
    const unlocked = WEEKS.filter((w) => w.n === 1 || weekStatus(w) !== 'todo');
    const cards = [];
    unlocked.forEach((w) => w.cards.forEach((c, i) => cards.push({ id: `w${w.n}c${i}`, week: w.n, ...c })));
    state.customCards.forEach((c) => cards.push({ ...c, week: null, custom: true }));
    return cards;
  };
  const dueCards = () => {
    const now = Date.now();
    return allCards().filter((c) => !state.srs[c.id] || state.srs[c.id].due <= now);
  };
  function rate(id, q) { // q: 0 otra vez, 1 difícil, 2 bien, 3 fácil
    const s = state.srs[id] || { interval: 0, ease: 2.5, reps: 0 };
    if (q === 0) { s.interval = 0; s.reps = 0; s.ease = Math.max(1.3, s.ease - 0.2); }
    else {
      s.reps += 1;
      if (s.reps === 1) s.interval = q === 3 ? 3 : 1;
      else if (s.reps === 2) s.interval = q === 1 ? 3 : 6;
      else s.interval = Math.round(s.interval * (q === 1 ? 1.2 : q === 3 ? s.ease + 0.3 : s.ease));
      s.ease = Math.max(1.3, s.ease + (q === 1 ? -0.15 : q === 3 ? 0.15 : 0));
    }
    s.due = q === 0 ? Date.now() + 60 * 1000 : Date.now() + s.interval * 86400000;
    state.srs[id] = s; markDay(); save();
  }

  /* ───────── Vistas ───────── */
  const views = {};

  views.home = () => {
    const o = overall();
    const nx = nextStep();
    const due = dueCards().length;
    const recent = [...state.notes].sort((a, b) => b.updated - a.updated).slice(0, 3);
    const hour = new Date().getHours();
    const hi = hour < 12 ? 'Buen día' : hour < 20 ? 'Buenas tardes' : 'Buenas noches';
    return `
    <section class="hero">
      <div>
        <p class="eyebrow">${hi} · Mini MBA para Fractional CMO</p>
        <h1>Tu segundo cerebro para dirigir marketing con números de negocio.</h1>
        <p class="lede">${esc(PRINCIPLES.bar)}</p>
      </div>
      <div class="hero-stats">
        ${ring(o.pct)}
        <div><b>${o.done}/${o.total}</b> lecciones<br><b>${streak()}</b> días de racha</div>
      </div>
    </section>

    ${nx ? `<a class="card continue" href="#/semana/${nx.w.n}${nx.i >= 0 ? '?s=' + nx.i : '?caso'}">
      <span class="eyebrow">Continuar · Semana ${nx.w.n}</span>
      <strong>${nx.i >= 0 ? esc(nx.w.sections[nx.i].title) : esc(nx.w.case.title)}</strong>
      <span class="muted">${esc(nx.w.title)}</span><span class="arrow">→</span></a>`
      : `<div class="card continue"><span class="eyebrow">Programa completo</span><strong>Terminaste las 12 semanas. Ahora, a aplicarlo con clientes.</strong></div>`}

    <div class="grid-2">
      <div class="card rule">
        <span class="eyebrow">La regla</span>
        <p class="big">${esc(PRINCIPLES.rule)}</p>
        <p class="muted">${esc(PRINCIPLES.ruleNote)}</p>
        <div class="seq">${PRINCIPLES.sequence.map((s) => `<span>${s}</span>`).join('<i>→</i>')}</div>
      </div>
      <div class="card">
        <span class="eyebrow">Captura rápida</span>
        <form id="quick" class="quick">
          <textarea name="body" rows="3" placeholder="Una idea, una pregunta de cliente, un número que viste… (usá #etiquetas y [[enlaces]])" required></textarea>
          <button class="btn primary">Guardar en Cerebro</button>
        </form>
        <div class="mini-links">
          <a href="#/repaso" class="pill ${due ? 'accent' : ''}">${due} tarjetas para repasar</a>
          <a href="#/herramientas/tablero" class="pill">Tablero de Dirección</a>
        </div>
      </div>
    </div>

    <h2 class="section-title">Ruta de aprendizaje</h2>
    <div class="phases">
      ${PHASES.map((p) => {
        const ws = p.weeks.map((n) => WEEKS[n - 1]);
        const pr = ws.reduce((a, w) => a + weekProgress(w).pct, 0) / ws.length;
        return `<a class="phase card" href="#/ruta#${p.id}">
          <span class="eyebrow">Semanas ${p.weeks[0]}–${p.weeks[p.weeks.length - 1]}</span>
          <strong>${esc(p.name)}</strong>
          <div class="bar"><span style="width:${pr * 100}%"></span></div></a>`;
      }).join('')}
    </div>

    ${recent.length ? `<h2 class="section-title">Últimas notas</h2>
    <div class="notes-list">${recent.map(noteRow).join('')}</div>` : ''}

    <p class="footer-links"><a href="#/ajustes">Respaldo y ajustes</a></p>`;
  };

  views.ruta = () => `
    <header class="page-head"><p class="eyebrow">12 semanas · concepto → número → interpretación → decisión</p>
    <h1>Ruta de aprendizaje</h1>
    <p class="lede">Formación de negocio para dirigir marketing, con Durabox como empresa-laboratorio. Cada semana: lecciones, preguntas de CMO, laboratorio aplicado y un caso para resolver.</p></header>
    ${PHASES.map((p) => `
      <section class="phase-block" id="${p.id}">
        <h2>${esc(p.name)}</h2><p class="muted">${esc(p.desc)}</p>
        <ol class="week-list">
          ${p.weeks.map((n) => {
            const w = WEEKS[n - 1]; const pr = weekProgress(w); const st = weekStatus(w);
            return `<li><a href="#/semana/${n}" class="week-row ${st}">
              <span class="wnum">${n}</span>
              <span class="wbody"><strong>${esc(w.title)}</strong><span class="muted">${esc(w.goal)}</span>
              <span class="bar"><span style="width:${pr.pct * 100}%"></span></span></span>
              <span class="wstatus">${st === 'done' ? '✓' : st === 'progress' ? pr.done + '/' + pr.total : ''}</span></a></li>`;
          }).join('')}
        </ol>
      </section>`).join('')}`;

  views.semana = (n, query) => {
    const w = WEEKS[n - 1];
    if (!w) return views.notfound();
    const p = weekProgress(w);
    const key = 'w' + n;
    const weekNotes = state.notes.filter((x) => x.week === n);
    const openIdx = query.has('s') ? +query.get('s') : -1;
    return `
    <header class="page-head">
      <a href="#/ruta" class="back">← Ruta</a>
      <p class="eyebrow">Semana ${n} de 12 · ${p.done}/${p.total} lecciones</p>
      <h1>${esc(w.title)}</h1>
      <p class="lede"><b>Al terminar vas a poder:</b> ${esc(w.goal)}</p>
      <div class="bar big"><span style="width:${p.pct * 100}%"></span></div>
    </header>

    <div class="lessons">
      ${w.sections.map((s, i) => {
        const done = !!state.read[`${key}s${i}`];
        return `<details class="lesson ${done ? 'done' : ''}" id="s${i}" ${i === openIdx ? 'open' : ''}>
          <summary><span class="check" aria-hidden="true">${done ? '✓' : i + 1}</span><span>${esc(s.title)}</span></summary>
          <div class="prose">${s.body}</div>
          <div class="lesson-actions">
            <button class="btn ${done ? '' : 'primary'}" data-read="${i}">${done ? 'Marcar como no leída' : 'Marcar como leída'}</button>
            <button class="btn ghost" data-note-from="${i}">Tomar nota</button>
          </div>
        </details>`;
      }).join('')}
    </div>

    <section class="card questions">
      <span class="eyebrow">Preguntas de CMO de esta semana</span>
      <ul>${w.cmoQuestions.map((q) => `<li>${esc(q)}</li>`).join('')}</ul>
    </section>

    <section class="card lab">
      <span class="eyebrow">Laboratorio Durabox</span>
      <p class="muted">Llevá cada concepto a una pregunta concreta de la empresa.</p>
      <ul class="tasks">${w.lab.map((t, i) => `<li><label><input type="checkbox" data-lab="${i}" ${state.lab[`${key}-${i}`] ? 'checked' : ''}><span>${esc(t)}</span></label></li>`).join('')}</ul>
      <label class="field"><span>Hallazgos y números de Durabox</span>
      <textarea data-labnotes rows="4" placeholder="Anotá los números reales que vayas encontrando…">${esc(state.labNotes[key] || '')}</textarea></label>
    </section>

    <section class="card case" id="caso">
      <span class="eyebrow">Caso práctico</span>
      <h2>${esc(w.case.title)}</h2>
      <div class="prose">${w.case.prompt}</div>
      <label class="field"><span>Tu razonamiento (se guarda solo)</span>
      <textarea data-answer rows="8" placeholder="Calculá, identificá qué falta, armá escenarios y terminá con una decisión.">${esc(state.answers[key] || '')}</textarea></label>
      <details class="solution"><summary>Ver resolución y devolución</summary><div class="prose">${w.case.solution}</div></details>
    </section>

    ${weekNotes.length ? `<section><h2 class="section-title">Tus notas de esta semana</h2><div class="notes-list">${weekNotes.map(noteRow).join('')}</div></section>` : ''}

    <nav class="pager">
      ${n > 1 ? `<a class="btn ghost" href="#/semana/${n - 1}">← Semana ${n - 1}</a>` : '<span></span>'}
      ${n < 12 ? `<a class="btn" href="#/semana/${n + 1}">Semana ${n + 1} →</a>` : '<a class="btn" href="#/herramientas/tablero">Ir al Tablero →</a>'}
    </nav>`;
  };

  views.herramientas = () => `
    <header class="page-head"><p class="eyebrow">Calculadoras de negocio</p><h1>Herramientas</h1>
    <p class="lede">Para hacer las cuentas en vivo frente a un cliente. Los valores que cargues se recuerdan.</p></header>
    <a class="card tool-feature" href="#/herramientas/tablero">
      <span class="eyebrow">Semana 12 · tu framework</span>
      <strong>Tablero de Dirección de Marketing</strong>
      <div class="chain">${PRINCIPLES.chain.join(' → ')}</div>
      <span class="arrow">→</span>
    </a>
    <div class="tool-grid">
      ${TOOLS.map((t) => `<a class="card tool" href="#/herramientas/${t.id}">
        <span class="eyebrow">Semana ${t.week}</span><strong>${esc(t.title)}</strong><span class="muted">${esc(t.desc)}</span></a>`).join('')}
    </div>`;

  const inputField = (f, val, attr) => `
    <label class="field num"><span>${esc(f.label)}</span>
      <span class="input-wrap" data-unit="${f.unit === '#' ? '' : esc(f.unit)}">
        <input type="text" inputmode="decimal" ${attr}="${f.k}" value="${fmtInput(val)}">
      </span></label>`;
  const fmtInput = (v) => (typeof v === 'number' ? v.toLocaleString('es-AR', { maximumFractionDigits: 4 }) : v);
  const parseNum = (s) => { const n = parseFloat(String(s).replace(/\./g, '').replace(',', '.')); return isFinite(n) ? n : 0; };
  const outCard = (o) => `<div class="out ${o.tone || ''}"><span>${esc(o.label)}</span><b>${o.value}</b>${o.sub ? `<small>${o.sub}</small>` : ''}</div>`;

  views.tool = (id) => {
    if (id === 'tablero') return views.tablero();
    const t = TOOLS.find((x) => x.id === id);
    if (!t) return views.notfound();
    const vals = toolVals(t);
    return `
    <header class="page-head"><a href="#/herramientas" class="back">← Herramientas</a>
      <p class="eyebrow">Semana ${t.week}</p><h1>${esc(t.title)}</h1><p class="lede">${esc(t.desc)}</p></header>
    <div class="tool-layout">
      <form class="card inputs" data-tool="${t.id}">${t.inputs.map((f) => inputField(f, vals[f.k], 'data-k')).join('')}
        <button type="button" class="btn ghost" data-reset>Restaurar ejemplo</button></form>
      <div class="results">
        <div class="outs" id="outs"></div>
        <div class="card insight" id="insight"></div>
        <button class="btn" data-save-tool>Guardar cálculo en Cerebro</button>
        <a class="btn ghost" href="#/semana/${t.week}">Repasar la Semana ${t.week}</a>
      </div>
    </div>`;
  };
  const toolVals = (t) => {
    const saved = state.toolInputs[t.id] || {};
    const v = {}; t.inputs.forEach((f) => (v[f.k] = saved[f.k] ?? f.def));
    return v;
  };
  function renderToolOutputs(t) {
    const v = toolVals(t);
    $('#outs').innerHTML = t.compute(v).map(outCard).join('');
    $('#insight').innerHTML = `<span class="eyebrow">Lectura de directora</span><p>${esc(t.insight(v))}</p>`;
  }

  const activeCompany = () => state.companies.find((c) => c.id === state.activeCompany) || state.companies[0];
  views.tablero = () => {
    const c = activeCompany();
    return `
    <header class="page-head"><a href="#/herramientas" class="back">← Herramientas</a>
      <p class="eyebrow">Tu framework de Dirección de Marketing Externa</p><h1>Tablero de Dirección</h1>
      <p class="lede">Conecta inversión → adquisición → pipeline → ventas → facturación → margen → resultado → crecimiento. Un tablero por empresa, con historial mensual.</p></header>
    <div class="company-bar card">
      <label class="field"><span>Empresa</span>
        <select id="company">${state.companies.map((x) => `<option value="${x.id}" ${x.id === c.id ? 'selected' : ''}>${esc(x.name)}</option>`).join('')}</select></label>
      <div class="row-btns">
        <button class="btn ghost" data-co="new">+ Nueva</button>
        <button class="btn ghost" data-co="rename">Renombrar</button>
        <button class="btn ghost danger" data-co="delete">Eliminar</button>
      </div>
    </div>
    <div class="chain-viz" id="chainviz"></div>
    <div class="tool-layout">
      <form class="card inputs" id="dashform">${DASH_FIELDS.map((f) => inputField(f, c.data[f.k] ?? f.def, 'data-d')).join('')}</form>
      <div class="results">
        <div class="card"><span class="eyebrow">Alertas y lectura</span><ul class="alerts" id="alerts"></ul></div>
        <div class="card">
          <span class="eyebrow">Historial</span>
          <form id="snap" class="snap"><input name="label" placeholder="Período (ej. Octubre 2026)" required><button class="btn">Guardar período</button></form>
          <div id="history"></div>
        </div>
      </div>
    </div>`;
  };
  function renderDashboard() {
    const c = activeCompany();
    const r = computeDashboard(c.data);
    $('#chainviz').innerHTML = r.chain.map((s, i) => `<div class="node ${s.tone || ''}"><span>${s.label}</span><b>${s.value}</b>${s.sub ? `<small>${s.sub}</small>` : ''}</div>${i < r.chain.length - 1 ? '<i>→</i>' : ''}`).join('');
    $('#alerts').innerHTML = r.alerts.map((a) => `<li class="${a.tone}">${esc(a.text)}</li>`).join('');
    $('#history').innerHTML = c.history.length ? `<div class="table-wrap"><table class="hist"><thead><tr><th>Período</th><th>Inversión</th><th>Ventas</th><th>CAC</th><th>Facturación</th><th>Resultado</th><th></th></tr></thead><tbody>
      ${c.history.map((h, i) => { const d = h.data; const f = d.ventasTot * d.ticket; const res = f * d.margen / 100 - d.inversion - d.fijos;
        return `<tr><td>${esc(h.label)}</td><td>${fmtMoney(d.inversion)}</td><td>${fmtNum(d.ventasTot)}</td><td>${fmtMoney(d.inversion / d.ventasMkt)}</td><td>${fmtMoney(f)}</td><td class="${res < 0 ? 'bad' : ''}">${fmtMoney(res)}</td><td><button class="link" data-load="${i}">cargar</button> <button class="link danger" data-del="${i}">×</button></td></tr>`; }).join('')}
      </tbody></table></div>` : '<p class="muted">Guardá cada mes para ver la evolución.</p>';
  }

  /* Cerebro */
  const noteRow = (n) => `<a class="note-row" href="#/cerebro/${n.id}">
    <strong>${esc(n.title || 'Sin título')}</strong>
    <span class="muted">${esc((n.body || '').replace(/\s+/g, ' ').slice(0, 110))}</span>
    <span class="meta">${n.week ? `<span class="pill sm">Semana ${n.week}</span>` : ''}${(n.tags || []).map((t) => `<span class="tag">#${esc(t)}</span>`).join('')}<span>${new Date(n.updated).toLocaleDateString('es-AR')}</span></span></a>`;

  const extractTags = (body) => [...new Set((body.match(/(^|\s)#([\wáéíóúñ-]+)/gi) || []).map((t) => t.trim().slice(1).toLowerCase()))];

  views.cerebro = (query) => {
    const q = (query.get('q') || '').toLowerCase();
    const tag = query.get('tag') || '';
    const tags = [...new Set(state.notes.flatMap((n) => n.tags || []))].sort();
    const notes = state.notes
      .filter((n) => (!q || (n.title + ' ' + n.body).toLowerCase().includes(q)) && (!tag || (n.tags || []).includes(tag)))
      .sort((a, b) => b.updated - a.updated);
    return `
    <header class="page-head"><p class="eyebrow">Segundo cerebro</p><h1>Cerebro</h1>
    <p class="lede">Notas conectadas: usá <code>#etiquetas</code> para clasificar y <code>[[Título de otra nota]]</code> para enlazar ideas.</p></header>
    <div class="toolbar">
      <input type="search" id="search" placeholder="Buscar en tus notas…" value="${esc(query.get('q') || '')}">
      <a class="btn primary" href="#/cerebro/nueva">+ Nueva nota</a>
    </div>
    ${tags.length ? `<div class="chips"><a href="#/cerebro" class="chip ${!tag ? 'on' : ''}">Todas</a>${tags.map((t) => `<a href="#/cerebro?tag=${encodeURIComponent(t)}" class="chip ${t === tag ? 'on' : ''}">#${esc(t)}</a>`).join('')}</div>` : ''}
    <div class="notes-list">${notes.length ? notes.map(noteRow).join('') : `<div class="empty card"><p><b>Tu cerebro está vacío.</b></p><p class="muted">Empezá con una nota sobre algo que aprendiste esta semana, una pregunta de un cliente o un número de Durabox.</p></div>`}</div>`;
  };

  views.nota = (id, query) => {
    let n = state.notes.find((x) => x.id === id);
    const isNew = id === 'nueva';
    if (!n && !isNew) return views.notfound();
    if (isNew) n = { id: '', title: query.get('t') || '', body: query.get('b') || '', week: query.get('w') ? +query.get('w') : null };
    const backlinks = n.title ? state.notes.filter((x) => x.id !== n.id && x.body.toLowerCase().includes(`[[${n.title.toLowerCase()}]]`)) : [];
    return `
    <header class="page-head"><a href="#/cerebro" class="back">← Cerebro</a></header>
    <form class="note-editor card" id="noteform" data-id="${esc(n.id)}">
      <input name="title" class="title-input" placeholder="Título" value="${esc(n.title)}" required>
      <div class="editor-meta">
        <label>Semana <select name="week"><option value="">—</option>${WEEKS.map((w) => `<option value="${w.n}" ${n.week === w.n ? 'selected' : ''}>${w.n}. ${esc(w.title)}</option>`).join('')}</select></label>
        <div class="seg"><button type="button" class="on" data-mode="edit">Editar</button><button type="button" data-mode="view">Ver</button></div>
      </div>
      <textarea name="body" rows="14" placeholder="Escribí… Markdown simple: # título, **negrita**, - listas, - [ ] tareas, > cita, #etiqueta, [[otra nota]]">${esc(n.body)}</textarea>
      <div class="prose preview" hidden></div>
      <div class="row-btns">
        <button class="btn primary">Guardar</button>
        ${!isNew ? '<button type="button" class="btn ghost" data-card>Crear tarjeta de repaso</button><button type="button" class="btn ghost danger" data-delete>Eliminar</button>' : ''}
      </div>
    </form>
    ${backlinks.length ? `<section><h2 class="section-title">Notas que enlazan acá</h2><div class="notes-list">${backlinks.map(noteRow).join('')}</div></section>` : ''}`;
  };

  /* Repaso */
  let session = null;
  views.repaso = () => {
    const due = dueCards();
    const total = allCards().length;
    if (!session || !session.queue.length) session = { queue: due.map((c) => c.id), flipped: false, done: 0 };
    const card = allCards().find((c) => c.id === session.queue[0]);
    return `
    <header class="page-head"><p class="eyebrow">Repetición espaciada · ${total} tarjetas desbloqueadas</p><h1>Repaso</h1>
    <p class="lede">Las tarjetas de cada semana se desbloquean cuando la empezás. Las que sabés aparecen cada vez menos.</p></header>
    ${card ? `
      <div class="flash ${session.flipped ? 'flipped' : ''}" id="flash" tabindex="0" role="button" aria-label="Dar vuelta la tarjeta">
        <span class="eyebrow">${card.week ? 'Semana ' + card.week : 'Tu tarjeta'} · quedan ${session.queue.length}</span>
        <p class="q">${esc(card.q)}</p>
        ${session.flipped ? `<p class="a">${esc(card.a)}</p>` : '<p class="hint muted">Pensá la respuesta y tocá para verla</p>'}
      </div>
      ${session.flipped ? `<div class="rate">
        <button class="btn" data-rate="0">Otra vez</button><button class="btn" data-rate="1">Difícil</button>
        <button class="btn primary" data-rate="2">Bien</button><button class="btn" data-rate="3">Fácil</button></div>` : ''}`
    : `<div class="card empty"><p><b>Nada para repasar ahora.</b> ${session.done ? `Repasaste ${session.done} tarjetas. ` : ''}Volvé mañana o avanzá con la próxima semana.</p></div>`}
    <details class="card"><summary><b>Crear tarjeta propia</b></summary>
      <form id="newcard" class="stack"><input name="q" placeholder="Pregunta o concepto" required><textarea name="a" rows="3" placeholder="Respuesta" required></textarea><button class="btn">Agregar</button></form>
      ${state.customCards.length ? `<ul class="custom-cards">${state.customCards.map((c) => `<li><span>${esc(c.q)}</span><button class="link danger" data-delcard="${c.id}">eliminar</button></li>`).join('')}</ul>` : ''}
    </details>`;
  };

  views.ajustes = () => `
    <header class="page-head"><a href="#/" class="back">← Inicio</a><h1>Respaldo y ajustes</h1>
    <p class="lede">Tus datos viven sólo en este dispositivo (no se suben a ningún servidor). Exportá un respaldo periódicamente o para pasarlos a otro dispositivo.</p></header>
    <div class="card stack">
      <button class="btn primary" id="export">Exportar respaldo (.json)</button>
      <label class="btn ghost file-btn">Importar respaldo<input type="file" id="import" accept="application/json" hidden></label>
      <button class="btn ghost" id="exportmd">Exportar notas como Markdown</button>
    </div>
    <div class="card stack">
      <p class="muted">${state.notes.length} notas · ${Object.keys(state.read).length} lecciones leídas · ${state.companies.length} empresas en el tablero · ${state.days.length} días de estudio</p>
      <button class="btn ghost danger" id="reset">Borrar todos mis datos</button>
    </div>`;

  views.notfound = () => `<div class="card empty"><p>No encontré esa página.</p><a class="btn" href="#/">Volver al inicio</a></div>`;

  /* ───────── Router ───────── */
  function route() {
    const [path, qs] = location.hash.slice(1).split('?');
    const query = new URLSearchParams(qs || '');
    const parts = (path || '/').split('/').filter(Boolean);
    let html, nav = parts[0] || 'home', after;
    switch (parts[0]) {
      case undefined: html = views.home(); after = bindHome; break;
      case 'ruta': html = views.ruta(); break;
      case 'semana': html = views.semana(+parts[1], query); after = () => bindSemana(+parts[1], query); nav = 'ruta'; break;
      case 'herramientas':
        if (parts[1]) { html = views.tool(parts[1]); after = parts[1] === 'tablero' ? bindTablero : () => bindTool(parts[1]); }
        else html = views.herramientas();
        break;
      case 'cerebro':
        if (parts[1]) { html = views.nota(parts[1], query); after = () => bindNota(parts[1]); }
        else { html = views.cerebro(query); after = bindCerebro; }
        break;
      case 'repaso': html = views.repaso(); after = bindRepaso; break;
      case 'ajustes': html = views.ajustes(); after = bindAjustes; nav = 'home'; break;
      default: html = views.notfound();
    }
    app.innerHTML = html;
    $$('[data-nav]').forEach((a) => a.classList.toggle('active', a.dataset.nav === nav));
    if (!route.keepScroll) window.scrollTo(0, 0);
    after && after();
    route.keepScroll = false;
  }
  const rerender = () => { const y = window.scrollY; route.keepScroll = true; route(); window.scrollTo(0, y); };

  /* ───────── Bindings ───────── */
  function bindHome() {
    $('#quick').addEventListener('submit', (e) => {
      e.preventDefault();
      const body = e.target.body.value.trim(); if (!body) return;
      const first = body.split('\n')[0];
      const title = first.length > 60 ? first.slice(0, 57) + '…' : first;
      state.notes.push({ id: uid(), title, body, tags: extractTags(body), week: null, created: Date.now(), updated: Date.now() });
      markDay(); save(); toast('Guardado en Cerebro'); rerender();
    });
  }

  function bindSemana(n, query) {
    const key = 'w' + n;
    $$('[data-read]').forEach((b) => b.addEventListener('click', () => {
      const i = +b.dataset.read, k = `${key}s${i}`;
      if (state.read[k]) delete state.read[k];
      else { state.read[k] = Date.now(); markDay(); }
      save();
      const nextOpen = state.read[k] ? i + 1 : i;
      rerender();
      const nx = $('#s' + nextOpen);
      if (state.read[k]) {
        $('#s' + i)?.removeAttribute('open');
        if (nx) { nx.setAttribute('open', ''); nx.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        else $('#caso')?.scrollIntoView({ behavior: 'smooth' });
      } else $('#s' + i)?.setAttribute('open', '');
    }));
    $$('[data-note-from]').forEach((b) => b.addEventListener('click', () => {
      const s = WEEKS[n - 1].sections[+b.dataset.noteFrom];
      location.hash = `#/cerebro/nueva?w=${n}&t=${encodeURIComponent(s.title)}&b=${encodeURIComponent('Semana ' + n + ' #mba\n\n')}`;
    }));
    $$('[data-lab]').forEach((c) => c.addEventListener('change', () => { state.lab[`${key}-${c.dataset.lab}`] = c.checked; markDay(); save(); }));
    $('[data-labnotes]').addEventListener('input', (e) => { state.labNotes[key] = e.target.value; save(); });
    $('[data-answer]').addEventListener('input', (e) => { state.answers[key] = e.target.value; markDay(); save(); });
    if (query.has('caso')) $('#caso').scrollIntoView();
    else if (query.has('s')) $('#s' + query.get('s'))?.scrollIntoView();
  }

  function bindTool(id) {
    const t = TOOLS.find((x) => x.id === id); if (!t) return;
    renderToolOutputs(t);
    const form = $('[data-tool]');
    form.addEventListener('input', (e) => {
      if (!e.target.dataset.k) return;
      state.toolInputs[t.id] = state.toolInputs[t.id] || {};
      state.toolInputs[t.id][e.target.dataset.k] = parseNum(e.target.value);
      save(); renderToolOutputs(t);
    });
    form.addEventListener('focusout', (e) => { if (e.target.dataset.k) e.target.value = fmtInput(parseNum(e.target.value)); });
    $('[data-reset]').addEventListener('click', () => { delete state.toolInputs[t.id]; save(); rerender(); });
    $('[data-save-tool]').addEventListener('click', () => {
      const v = toolVals(t);
      const body = `#calculo #${t.id}\n\n## Supuestos\n${t.inputs.map((f) => `- ${f.label}: ${f.unit === '$' ? fmtMoney(v[f.k]) : fmtNum(v[f.k], 2) + (f.unit === '%' ? '%' : f.unit === 'x' ? 'x' : '')}`).join('\n')}\n\n## Resultado\n${t.compute(v).map((o) => `- ${o.label}: ${o.value.replace(/<[^>]+>/g, '')}${o.sub ? ' (' + o.sub + ')' : ''}`).join('\n')}\n\n> ${t.insight(v)}\n\n## ¿Y esto qué significa para el negocio?\n`;
      const n = { id: uid(), title: `${t.title} — ${new Date().toLocaleDateString('es-AR')}`, body, tags: extractTags(body), week: t.week, created: Date.now(), updated: Date.now() };
      state.notes.push(n); markDay(); save();
      location.hash = '#/cerebro/' + n.id;
    });
  }

  function bindTablero() {
    renderDashboard();
    $('#dashform').addEventListener('input', (e) => {
      const k = e.target.dataset.d; if (!k) return;
      activeCompany().data[k] = parseNum(e.target.value); save(); renderDashboard();
    });
    $('#dashform').addEventListener('focusout', (e) => { if (e.target.dataset.d) e.target.value = fmtInput(parseNum(e.target.value)); });
    $('#company').addEventListener('change', (e) => { state.activeCompany = e.target.value; save(); rerender(); });
    $$('[data-co]').forEach((b) => b.addEventListener('click', () => {
      const c = activeCompany();
      if (b.dataset.co === 'new') {
        const name = prompt('Nombre de la empresa'); if (!name) return;
        const data = {}; DASH_FIELDS.forEach((f) => (data[f.k] = f.def));
        const nc = { id: uid(), name, data, history: [] }; state.companies.push(nc); state.activeCompany = nc.id;
      } else if (b.dataset.co === 'rename') {
        const name = prompt('Nuevo nombre', c.name); if (!name) return; c.name = name;
      } else if (b.dataset.co === 'delete') {
        if (state.companies.length === 1) return toast('Necesitás al menos una empresa');
        if (!confirm(`¿Eliminar “${c.name}” y su historial?`)) return;
        state.companies = state.companies.filter((x) => x.id !== c.id); state.activeCompany = state.companies[0].id;
      }
      save(); rerender();
    }));
    $('#snap').addEventListener('submit', (e) => {
      e.preventDefault(); const c = activeCompany();
      c.history.push({ label: e.target.label.value, data: { ...c.data }, at: Date.now() });
      markDay(); save(); toast('Período guardado'); renderDashboard(); e.target.reset();
    });
    $('#history').addEventListener('click', (e) => {
      const c = activeCompany();
      if (e.target.dataset.load) { c.data = { ...c.history[+e.target.dataset.load].data }; save(); rerender(); }
      if (e.target.dataset.del && confirm('¿Eliminar este período?')) { c.history.splice(+e.target.dataset.del, 1); save(); renderDashboard(); }
    });
  }

  function bindCerebro() {
    const s = $('#search');
    s.addEventListener('input', () => {
      clearTimeout(s._t);
      s._t = setTimeout(() => { history.replaceState(null, '', '#/cerebro' + (s.value ? '?q=' + encodeURIComponent(s.value) : '')); route.keepScroll = true; route(); const ns = $('#search'); ns.focus(); ns.setSelectionRange(ns.value.length, ns.value.length); }, 200);
    });
  }

  function bindNota(id) {
    const form = $('#noteform'); if (!form) return;
    const ta = form.body, preview = $('.preview', form);
    $$('[data-mode]', form).forEach((b) => b.addEventListener('click', () => {
      $$('[data-mode]', form).forEach((x) => x.classList.toggle('on', x === b));
      const view = b.dataset.mode === 'view';
      ta.hidden = view; preview.hidden = !view;
      if (view) preview.innerHTML = md(ta.value) || '<p class="muted">Nota vacía.</p>';
    }));
    if (id !== 'nueva') $('[data-mode="view"]', form).click();
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = { title: form.title.value.trim(), body: ta.value, week: form.week.value ? +form.week.value : null };
      data.tags = extractTags(data.body);
      let n = state.notes.find((x) => x.id === form.dataset.id);
      if (n) Object.assign(n, data, { updated: Date.now() });
      else { n = { id: uid(), ...data, created: Date.now(), updated: Date.now() }; state.notes.push(n); }
      markDay(); save(); toast('Nota guardada');
      location.hash = '#/cerebro/' + n.id;
      if (id === n.id) rerender();
    });
    $('[data-delete]', form)?.addEventListener('click', () => {
      if (!confirm('¿Eliminar esta nota?')) return;
      state.notes = state.notes.filter((x) => x.id !== id); save(); location.hash = '#/cerebro';
    });
    $('[data-card]', form)?.addEventListener('click', () => {
      const q = prompt('Pregunta de la tarjeta', form.title.value); if (!q) return;
      const a = prompt('Respuesta', ta.value.replace(/[#*>\[\]]/g, '').trim().slice(0, 240)); if (!a) return;
      state.customCards.push({ id: 'c' + uid(), q, a }); save(); toast('Tarjeta agregada al repaso');
    });
  }

  function bindRepaso() {
    const flip = () => { if (!session.flipped) { session.flipped = true; rerender(); } };
    $('#flash')?.addEventListener('click', flip);
    $('#flash')?.addEventListener('keydown', (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } });
    $$('[data-rate]').forEach((b) => b.addEventListener('click', () => {
      const id = session.queue.shift(); const q = +b.dataset.rate;
      rate(id, q);
      if (q === 0) session.queue.push(id); else session.done++;
      session.flipped = false; rerender();
    }));
    $('#newcard').addEventListener('submit', (e) => {
      e.preventDefault();
      const c = { id: 'c' + uid(), q: e.target.q.value.trim(), a: e.target.a.value.trim() };
      state.customCards.push(c); save(); session.queue.push(c.id); toast('Tarjeta agregada'); rerender();
    });
    $$('[data-delcard]').forEach((b) => b.addEventListener('click', () => {
      state.customCards = state.customCards.filter((c) => c.id !== b.dataset.delcard);
      session.queue = session.queue.filter((x) => x !== b.dataset.delcard); save(); rerender();
    }));
  }

  function download(name, text, type) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type }));
    a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  function bindAjustes() {
    $('#export').addEventListener('click', () => download(`brain-respaldo-${today()}.json`, JSON.stringify(state, null, 2), 'application/json'));
    $('#exportmd').addEventListener('click', () => download(`brain-notas-${today()}.md`,
      state.notes.map((n) => `# ${n.title}\n\n${n.body}\n`).join('\n---\n\n'), 'text/markdown'));
    $('#import').addEventListener('change', async (e) => {
      const f = e.target.files[0]; if (!f) return;
      try {
        const data = JSON.parse(await f.text());
        if (!data || typeof data !== 'object' || !('notes' in data)) throw new Error();
        if (!confirm('Esto reemplaza los datos actuales por los del respaldo. ¿Continuar?')) return;
        state = Object.assign(blank(), data); save(); toast('Respaldo importado'); rerender();
      } catch { toast('El archivo no es un respaldo válido de Brain'); }
    });
    $('#reset').addEventListener('click', () => {
      if (!confirm('Se borran notas, progreso, respuestas y tableros de este dispositivo. ¿Seguro?')) return;
      localStorage.removeItem(KEY); location.hash = '#/'; location.reload();
    });
  }

  /* ───────── PWA ───────── */
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredPrompt = e; $('#installBtn').hidden = false; });
  $('#installBtn').addEventListener('click', async () => {
    if (!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; $('#installBtn').hidden = true;
  });
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }

  window.addEventListener('hashchange', route);
  route();
})();
