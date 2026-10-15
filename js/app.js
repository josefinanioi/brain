/* Brain — Mini MBA para Fractional CMO, con gamificación. Vanilla JS, datos en localStorage. */
(() => {
  'use strict';

  /* ═════════ Estado ═════════ */
  const KEY = 'brain.v1';
  const blank = () => ({
    v: 2,
    xp: 0, xpDays: {}, days: [], bestStreak: 0,
    lessons: {},        // id: {stars, acc, at, plays}
    challenges: {},     // n: {at, plays}
    labs: {}, labNotes: {},
    answers: {},        // reflexiones de desafíos (claves w1..w12)
    mistakes: {},       // exId: veces
    practices: 0,
    dailyGoal: 40, sound: true,
    achievements: {},
    notes: [], srs: {}, customCards: [], toolInputs: {},
    companies: [], activeCompany: null,
  });

  let state;
  try { state = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch { state = blank(); }
  // Migración desde la versión anterior
  if (state.v !== 2) {
    state.v = 2;
    delete state.read; delete state.lab;
    if (state.labNotes) Object.keys(state.labNotes).forEach((k) => { if (/^w\d+$/.test(k)) { state.labNotes['u' + k.slice(1)] = state.labNotes[k]; delete state.labNotes[k]; } });
  }
  if (state.answers.w1 === undefined) state.answers.w1 = `1. Sí. Para alcanzar el costo fijo necesita 72 ventas, le quedan 58 ventas para generar rentabilidad dentro de su capacidad máxima.
2. $350.000
3. $10.000
4. Que la tasa de conversión es muy baja, y aumentar publicidad no cambia eso.
5. Cómo vamos a hacer para mejorar esa tasa de conversión. Que tenemos que conseguir 338.000 leads para conseguir 130 ventas.`;
  if (!state.companies.length) {
    const data = {}; DASH_FIELDS.forEach((f) => (data[f.k] = f.def));
    state.companies.push({ id: uid(), name: 'Durabox (laboratorio)', data, history: [] });
    state.activeCompany = state.companies[0].id;
  }

  let saveTimer;
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { toast('No se pudo guardar'); }
    }, 200);
  }
  save();

  /* ═════════ Utilidades ═════════ */
  function uid() { return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4); }
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const app = $('#app');

  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2200);
  }

  /* ═════════ Sonido y vibración ═════════ */
  let actx;
  function tone(freqs, dur = 0.09, type = 'sine', gap = 0.07) {
    if (!state.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      freqs.forEach((f, i) => {
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = type; o.frequency.value = f;
        const t0 = actx.currentTime + i * gap;
        g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.18, t0 + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur + 0.1);
        o.connect(g).connect(actx.destination); o.start(t0); o.stop(t0 + dur + 0.12);
      });
    } catch { /* sin audio */ }
  }
  const sfx = {
    right: () => { tone([660, 880]); navigator.vibrate?.(15); },
    wrong: () => { tone([220, 180], 0.14, 'triangle', 0.1); navigator.vibrate?.([30, 40, 30]); },
    done: () => tone([523, 659, 784, 1047], 0.12, 'sine', 0.1),
    tap: () => tone([440], 0.03),
  };

  function confetti() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const box = document.createElement('div'); box.className = 'confetti';
    const colors = ['#8b5cf6', '#6a3cc4', '#c4b0f7', '#ffc531', '#22a55b', '#ff8fb1'];
    for (let i = 0; i < 70; i++) {
      const p = document.createElement('i');
      p.style.left = Math.random() * 100 + '%';
      p.style.background = colors[i % colors.length];
      p.style.animationDelay = Math.random() * 0.4 + 's';
      p.style.animationDuration = 1.6 + Math.random() * 1.2 + 's';
      p.style.transform = `rotate(${Math.random() * 360}deg)`;
      box.appendChild(p);
    }
    document.body.appendChild(box); setTimeout(() => box.remove(), 3400);
  }

  const mascot = (mood = 'happy', size = 120) => `
    <svg class="mascot ${mood}" width="${size}" height="${size}" viewBox="0 0 120 120" aria-hidden="true">
      <ellipse cx="60" cy="108" rx="34" ry="6" class="m-shadow"/>
      <path class="m-body" d="M58 18c-9-8-27-7-33 6-14 1-22 15-17 27-10 8-9 25 3 31 0 14 15 23 28 18 7 9 19 9 22 1 3 8 15 8 22-1 13 5 28-4 28-18 12-6 13-23 3-31 5-12-3-26-17-27-6-13-24-14-33-6z"/>
      <path class="m-line" d="M60 22v74M40 40c6 2 8 8 6 14M80 40c-6 2-8 8-6 14M30 70c6-2 11 1 13 6M90 70c-6-2-11 1-13 6"/>
      ${mood === 'sad'
        ? '<circle cx="47" cy="62" r="5" class="m-eye"/><circle cx="73" cy="62" r="5" class="m-eye"/><path d="M50 82q10-7 20 0" class="m-mouth"/>'
        : '<circle cx="47" cy="60" r="5.5" class="m-eye"/><circle cx="73" cy="60" r="5.5" class="m-eye"/><circle cx="49" cy="58" r="1.8" fill="#fff"/><circle cx="75" cy="58" r="1.8" fill="#fff"/><path d="M48 75q12 11 24 0" class="m-mouth"/>'}
    </svg>`;

  /* ═════════ Progreso, racha, nivel ═════════ */
  const ALL_LESSONS = () => UNITS.flatMap((u) => u.lessons.map((l) => ({ ...l, unit: u })));
  const phaseOf = (u) => PHASES.find((p) => p.id === u.phase);
  const lessonDone = (id) => !!state.lessons[id];
  const unitLessonsDone = (u) => u.lessons.every((l) => lessonDone(l.id));
  const firstOpenLesson = () => ALL_LESSONS().find((l) => !lessonDone(l.id));
  const lessonUnlocked = (id) => {
    const all = ALL_LESSONS(); const idx = all.findIndex((l) => l.id === id);
    const first = all.findIndex((l) => !lessonDone(l.id));
    return first === -1 || idx <= first;
  };
  const unitUnlocked = (u) => lessonUnlocked(u.lessons[0].id);

  function addXP(n) {
    if (n <= 0) return;
    const d = dayKey();
    state.xp += n; state.xpDays[d] = (state.xpDays[d] || 0) + n;
    if (!state.days.includes(d)) state.days.push(d);
    state.bestStreak = Math.max(state.bestStreak, streak());
    save(); renderStats();
  }
  const todayXP = () => state.xpDays[dayKey()] || 0;
  function streak() {
    const set = new Set(state.days); let n = 0; const d = new Date();
    if (!set.has(dayKey(d))) d.setDate(d.getDate() - 1);
    while (set.has(dayKey(d))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  const levelOf = (xp) => { let L = LEVELS[0], i = 0; LEVELS.forEach((l, k) => { if (xp >= l.xp) { L = l; i = k; } }); return { ...L, i, next: LEVELS[i + 1] }; };

  function summaryStats() {
    return {
      xp: state.xp,
      lessonsDone: Object.keys(state.lessons).length,
      perfects: Object.values(state.lessons).filter((l) => l.acc === 1).length,
      bestStreak: Math.max(state.bestStreak, streak()),
      unitsDone: UNITS.filter(unitLessonsDone).length,
      challenges: Object.keys(state.challenges).length,
      labsDone: UNITS.filter((u) => u.lab.every((_, i) => state.labs[`u${u.n}-${i}`])).length,
      notes: state.notes.length,
      practices: state.practices,
    };
  }
  function newAchievements() {
    const s = summaryStats(); const out = [];
    ACHIEVEMENTS.forEach((a) => { if (!state.achievements[a.id] && a.test(s)) { state.achievements[a.id] = Date.now(); out.push(a); } });
    if (out.length) save();
    return out;
  }

  function renderStats() {
    const el = $('#stats'); if (!el) return;
    const goal = state.dailyGoal, t = todayXP(), pct = Math.min(1, t / goal);
    const lv = levelOf(state.xp);
    const st = streak();
    el.innerHTML = `
      <a href="#/perfil" class="stat ${st ? 'fire' : 'off'}" title="Racha"><span>🔥</span>${st}</a>
      <a href="#/perfil" class="stat xp" title="XP total"><span>⚡</span>${state.xp}</a>
      <a href="#/perfil" class="stat goal" title="Meta diaria: ${t}/${goal} XP">
        <svg viewBox="0 0 36 36" width="26" height="26"><circle cx="18" cy="18" r="15" class="g-bg"/><circle cx="18" cy="18" r="15" class="g-fg" stroke-dasharray="94.2" stroke-dashoffset="${94.2 * (1 - pct)}" transform="rotate(-90 18 18)"/></svg>
        <small>${t}/${goal}</small></a>
      <a href="#/perfil" class="stat lvl" title="${esc(lv.name)}"><span>${lv.icon}</span></a>`;
    window.__setTopH?.();
  }

  /* ═════════ Markdown liviano para notas ═════════ */
  function md(src) {
    const lines = esc(src).split('\n'); let html = '', list = null;
    const inline = (s) => s
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*(?!\s)(.+?)\*/g, '$1<em>$2</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\[\[(.+?)\]\]/g, (_, t) => {
        const n = state.notes.find((x) => esc(x.title).toLowerCase() === t.toLowerCase());
        return n ? `<a href="#/cerebro/${n.id}" class="wikilink">${t}</a>` : `<a href="#/cerebro/nueva?t=${encodeURIComponent(t)}" class="wikilink missing">${t}</a>`;
      })
      .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>')
      .replace(/(^|\s)#([\wáéíóúñ-]+)/gi, '$1<span class="tag">#$2</span>');
    const close = () => { if (list) { html += `</${list}>`; list = null; } };
    for (const raw of lines) {
      const l = raw.trimEnd(); let m;
      if ((m = l.match(/^(#{1,3})\s+(.*)/))) { close(); html += `<h${m[1].length + 2}>${inline(m[2])}</h${m[1].length + 2}>`; }
      else if ((m = l.match(/^\s*[-*]\s+\[( |x)\]\s+(.*)/i))) { if (list !== 'ul') { close(); html += '<ul class="checks">'; list = 'ul'; } html += `<li class="${m[1].trim() ? 'checked' : ''}">${inline(m[2])}</li>`; }
      else if ((m = l.match(/^\s*[-*]\s+(.*)/))) { if (list !== 'ul') { close(); html += '<ul>'; list = 'ul'; } html += `<li>${inline(m[1])}</li>`; }
      else if ((m = l.match(/^\s*\d+[.)]\s+(.*)/))) { if (list !== 'ol') { close(); html += '<ol>'; list = 'ol'; } html += `<li>${inline(m[1])}</li>`; }
      else if ((m = l.match(/^&gt;\s?(.*)/))) { close(); html += `<blockquote>${inline(m[1])}</blockquote>`; }
      else if (!l.trim()) close();
      else { close(); html += `<p>${inline(l)}</p>`; }
    }
    close(); return html;
  }
  const extractTags = (body) => [...new Set((body.match(/(^|\s)#([\wáéíóúñ-]+)/gi) || []).map((t) => t.trim().slice(1).toLowerCase()))];

  /* ═════════ Vista: camino de aprendizaje ═════════ */
  const OFFSETS = [0, 52, 78, 52, 0, -52, -78, -52];
  const views = {};

  views.learn = () => {
    const current = firstOpenLesson();
    let k = 0;
    const units = UNITS.map((u) => {
      const ph = phaseOf(u); const unlocked = unitUnlocked(u);
      const done = u.lessons.filter((l) => lessonDone(l.id)).length;
      const nodes = [];
      u.lessons.forEach((l) => {
        const isDone = lessonDone(l.id); const isCur = current && current.id === l.id; const open = lessonUnlocked(l.id);
        const stars = isDone ? state.lessons[l.id].stars : 0;
        nodes.push(`<div class="node-wrap" style="--x:${OFFSETS[k++ % 8]}px">
          ${isCur ? '<span class="start-bubble">EMPEZAR</span>' : ''}
          <a class="node ${isDone ? 'done' : ''} ${isCur ? 'current' : ''} ${open ? '' : 'locked'}" ${open ? `href="#/leccion/${l.id}"` : ''} aria-label="${esc(l.title)}${open ? '' : ' (bloqueada)'}">
            <span class="node-ic">${open ? l.icon : '🔒'}</span>
          </a>
          <span class="node-label">${esc(l.title)}</span>
          ${isDone ? `<span class="stars">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</span>` : ''}
        </div>`);
      });
      const labDone = u.lab.every((_, i) => state.labs[`u${u.n}-${i}`]);
      nodes.push(`<div class="node-wrap" style="--x:${OFFSETS[k++ % 8]}px">
        <a class="node chest ${labDone ? 'done' : ''} ${unlocked ? '' : 'locked'}" ${unlocked ? `href="#/lab/${u.n}"` : ''} aria-label="Laboratorio Durabox"><span class="node-ic">🧪</span></a>
        <span class="node-label">Laboratorio</span></div>`);
      const chOpen = unitLessonsDone(u); const chDone = !!state.challenges[u.n];
      nodes.push(`<div class="node-wrap" style="--x:${OFFSETS[k++ % 8]}px">
        ${chOpen && !chDone && !current ? '<span class="start-bubble">DESAFÍO</span>' : ''}
        <a class="node boss ${chDone ? 'done' : ''} ${chOpen ? '' : 'locked'} ${chOpen && !chDone ? (current ? 'ready' : 'current') : ''}" ${chOpen ? `href="#/desafio/${u.n}"` : ''} aria-label="Desafío de la unidad"><span class="node-ic">${chOpen ? '🏆' : '🔒'}</span></a>
        <span class="node-label">Desafío</span></div>`);
      return `<section class="unit" id="u${u.n}" style="--c:${ph.color};--cd:${ph.dark}">
        <header class="unit-head ${unlocked ? '' : 'dim'}">
          <div><span class="unit-k">Unidad ${u.n} · ${esc(ph.name)}</span><h2>${esc(u.title)}</h2>
          <span class="unit-p">${done}/${u.lessons.length} lecciones${chDone ? ' · 🏆' : ''}</span></div>
          <a class="guide-btn" href="#/unidad/${u.n}" aria-label="Guía de la unidad">📖<span>Guía</span></a>
        </header>
        <div class="path">${nodes.join('')}</div>
      </section>`;
    }).join('');
    return `<div class="learn">
      <div class="rule-strip"><span>🧠</span><p><b>La regla:</b> ${esc(PRINCIPLES.rule)}</p></div>
      ${units}
      <div class="path-end">${mascot('happy', 90)}<p>Al final del camino: <b>Fractional CMO</b>.</p></div>
    </div>`;
  };

  views.unidad = (n) => {
    const u = UNITS[n - 1]; if (!u) return views.notfound();
    const ph = phaseOf(u);
    return `<div class="page" style="--c:${ph.color};--cd:${ph.dark}">
      <a href="#/" class="back">← Camino</a>
      <header class="guide-hero"><span class="unit-k">Unidad ${u.n} · Guía</span><h1>${esc(u.title)}</h1><p>${esc(u.goal)}</p></header>
      <section class="card"><h3>En 3 ideas</h3><ol class="big-list">${u.summary.map((x) => `<li>${esc(x)}</li>`).join('')}</ol></section>
      <section class="card"><h3>Conceptos clave</h3>
        <dl class="concepts">${u.cards.map((c) => `<div><dt>${esc(c.q)}</dt><dd>${esc(c.a)}</dd></div>`).join('')}</dl></section>
      <section class="card"><h3>Lecciones</h3><ul class="lesson-list">
        ${u.lessons.map((l) => { const d = state.lessons[l.id]; const open = lessonUnlocked(l.id);
          return `<li><a ${open ? `href="#/leccion/${l.id}"` : ''} class="${open ? '' : 'locked'}"><span class="ll-ic">${open ? l.icon : '🔒'}</span><span>${esc(l.title)}</span><span class="stars">${d ? '★'.repeat(d.stars) + '☆'.repeat(3 - d.stars) : ''}</span></a></li>`; }).join('')}
      </ul></section>
      <div class="row-btns"><a class="btn" href="#/lab/${u.n}">🧪 Laboratorio</a>${unitLessonsDone(u) ? `<a class="btn primary" href="#/desafio/${u.n}">🏆 Desafío</a>` : ''}</div>
    </div>`;
  };

  /* ═════════ Reproductor de lecciones ═════════ */
  let P = null; // sesión activa

  function startSession(opts) {
    P = Object.assign({ i: 0, firstTry: {}, requeued: new Set(), combo: 0, start: Date.now(), answer: null, checked: false, matchState: null }, opts);
    document.body.classList.add('playing');
    $('#toast').classList.remove('show');
    renderPlayer();
  }
  function endSession(toHash) {
    P = null; document.body.classList.remove('playing');
    if (location.hash === toHash) route(); else location.hash = toHash;
  }

  function renderPlayer() {
    const s = P.screens[P.i];
    const pct = P.i / P.screens.length;
    app.innerHTML = `<div class="player" style="--c:${P.color};--cd:${P.dark}">
      <div class="p-top">
        <button class="p-close" id="pClose" aria-label="Salir">✕</button>
        <div class="p-bar"><span style="width:${pct * 100}%"></span></div>
        ${P.combo >= 3 ? `<span class="combo">🔥 ${P.combo}</span>` : '<span class="combo-ph"></span>'}
      </div>
      <div class="p-body" id="pBody">${s.type === 'read' ? readScreen(s) : exScreen(s.ex)}</div>
      <div class="p-foot" id="pFoot"></div>
    </div>`;
    $('#pClose').onclick = () => { if (confirm('¿Salir? Vas a perder el progreso de esta sesión.')) endSession(P.exit); };
    P.answer = null; P.checked = false;
    if (s.type === 'read') footer('Continuar', next, true);
    else bindExercise(s.ex);
    window.scrollTo(0, 0);
  }

  const readScreen = (s) => `<div class="read">
      ${s.kicker ? `<span class="read-k">${esc(s.kicker)}</span>` : ''}
      ${s.h ? `<h2>${esc(s.h)}</h2>` : ''}<div class="prose">${s.body}</div></div>`;

  function exScreen(ex) {
    const label = { choice: 'Elegí la respuesta correcta', tf: '¿Verdadero o falso?', number: 'Hacé la cuenta', match: 'Uní los pares', order: 'Ordená', reflect: 'Tu turno' }[ex.t];
    let body = '';
    if (ex.t === 'choice') body = `<div class="opts">${ex.o.map((o, j) => `<button class="opt" data-v="${j}"><kbd>${j + 1}</kbd>${esc(o)}</button>`).join('')}</div>`;
    if (ex.t === 'tf') body = `<div class="opts tf"><button class="opt" data-v="true"><kbd>1</kbd>Verdadero</button><button class="opt" data-v="false"><kbd>2</kbd>Falso</button></div>`;
    if (ex.t === 'number') body = `<label class="num-in"><input id="numIn" inputmode="decimal" enterkeyhint="go" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Tu respuesta">${ex.unit ? `<span>${esc(ex.unit)}</span>` : ''}</label><p class="hint">Podés escribir 100000, 100.000 o 7,5.</p>`;
    if (ex.t === 'match') {
      const L = shuffle(ex.pairs.map((p, i) => ({ i, t: p[0] }))), R = shuffle(ex.pairs.map((p, i) => ({ i, t: p[1] })));
      body = `<div class="match"><div>${L.map((x) => `<button class="tile" data-side="l" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div><div>${R.map((x) => `<button class="tile" data-side="r" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div></div>`;
    }
    if (ex.t === 'order') body = `<div class="order-ans" id="ordAns"></div><div class="order-bank" id="ordBank">${shuffle(ex.items.map((t, i) => ({ t, i }))).map((x) => `<button class="tile" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div>`;
    if (ex.t === 'reflect') body = `<textarea id="reflectIn" rows="9" placeholder="Escribí tu razonamiento. Se guarda solo.">${esc(state.answers[ex.key] || '')}</textarea>`;
    return `<div class="ex"><span class="ex-k">${label}</span><h2 class="ex-q">${esc(ex.q)}</h2>${body}</div>`;
  }

  function footer(label, fn, enabled = false, cls = '') {
    const f = $('#pFoot');
    f.className = 'p-foot ' + cls;
    f.innerHTML = `<div class="p-foot-in"><div class="fb" id="fb"></div><button class="btn big primary" id="pBtn" ${enabled ? '' : 'disabled'}>${label}</button></div>`;
    $('#pBtn').onclick = fn;
  }
  const enable = (on = true) => { const b = $('#pBtn'); if (b) b.disabled = !on; };

  function bindExercise(ex) {
    const body = $('#pBody');
    if (ex.t === 'choice' || ex.t === 'tf') {
      footer('Comprobar', check);
      body.addEventListener('click', (e) => {
        const b = e.target.closest('.opt'); if (!b || P.checked) return;
        $$('.opt', body).forEach((x) => x.classList.toggle('sel', x === b));
        P.answer = b.dataset.v; enable(); sfx.tap();
      });
    }
    if (ex.t === 'number') {
      footer('Comprobar', check);
      const inp = $('#numIn'); if (matchMedia('(hover: hover)').matches) inp.focus();
      inp.addEventListener('input', () => { P.answer = inp.value; enable(inp.value.trim().length > 0); });
    }
    if (ex.t === 'order') {
      footer('Comprobar', check);
      const ans = $('#ordAns'), bank = $('#ordBank');
      const sync = () => { P.answer = $$('.tile', ans).map((t) => +t.dataset.i); enable(P.answer.length === ex.items.length); };
      bank.addEventListener('click', (e) => { const t = e.target.closest('.tile'); if (!t || P.checked) return; ans.appendChild(t); sfx.tap(); sync(); });
      ans.addEventListener('click', (e) => { const t = e.target.closest('.tile'); if (!t || P.checked) return; bank.appendChild(t); sync(); });
    }
    if (ex.t === 'match') {
      footer('Continuar', next, false);
      let sel = null, left = ex.pairs.length, errors = 0;
      body.addEventListener('click', (e) => {
        const t = e.target.closest('.tile'); if (!t || t.disabled) return;
        if (!sel || sel.dataset.side === t.dataset.side) { $$('.tile.sel', body).forEach((x) => x.classList.remove('sel')); sel = t; t.classList.add('sel'); sfx.tap(); return; }
        if (sel.dataset.i === t.dataset.i) {
          [sel, t].forEach((x) => { x.classList.remove('sel'); x.classList.add('ok'); x.disabled = true; });
          sfx.right(); left--;
          if (!left) {
            const ok = errors === 0;
            settle(ok, ok ? '¡Todos los pares!' : `Completado con ${errors} ${errors === 1 ? 'error' : 'errores'}.`, ex, true);
          }
        } else {
          errors++; sfx.wrong();
          [sel, t].forEach((x) => { x.classList.remove('sel'); x.classList.add('bad'); setTimeout(() => x.classList.remove('bad'), 450); });
        }
        sel = null;
      });
    }
    if (ex.t === 'reflect') {
      footer('Guardar y continuar', () => { state.answers[ex.key] = $('#reflectIn').value; save(); next(); }, true);
      $('#reflectIn').addEventListener('input', (e) => { state.answers[ex.key] = e.target.value; save(); });
    }
  }

  function parseUserNum(s) {
    s = String(s).trim().toLowerCase().replace(/[$%\sx]/g, '').replace(/mil$/, '');
    let mult = 1;
    if (/m$/.test(s)) { mult = 1e6; s = s.slice(0, -1); } else if (/k$/.test(s)) { mult = 1e3; s = s.slice(0, -1); }
    if (s.includes(',')) s = s.replace(/\./g, '').replace(',', '.');
    else if ((s.match(/\./g) || []).length === 1 && /\.\d{1,2}$/.test(s)) { /* decimal con punto */ }
    else s = s.replace(/\./g, '');
    const n = parseFloat(s); return isFinite(n) ? n * mult : NaN;
  }
  const fmtAns = (ex) => (ex.unit === '$' ? '$' + ex.a.toLocaleString('es-AR') : ex.a.toLocaleString('es-AR') + (ex.unit ? ' ' + ex.unit : ''));

  function check() {
    if (P.checked) return next();
    const ex = P.screens[P.i].ex; let ok = false, correctTxt = '';
    if (ex.t === 'choice') { ok = +P.answer === ex.a; correctTxt = ex.o[ex.a]; markOpts(ex.a, +P.answer); }
    if (ex.t === 'tf') { ok = (P.answer === 'true') === ex.a; correctTxt = ex.a ? 'Verdadero' : 'Falso'; markOpts(String(ex.a), P.answer); }
    if (ex.t === 'number') {
      const v = parseUserNum(P.answer); const tol = ex.tol ?? Math.max(Math.abs(ex.a) * 0.005, 0.01);
      ok = Math.abs(v - ex.a) <= tol; correctTxt = fmtAns(ex);
      $('#numIn').disabled = true; $('#numIn').parentElement.classList.add(ok ? 'ok' : 'bad');
    }
    if (ex.t === 'order') {
      ok = P.answer.every((v, i) => v === i); correctTxt = ex.items.join(' → ');
      $$('#ordAns .tile').forEach((t, i) => t.classList.add(+t.dataset.i === i ? 'ok' : 'bad'));
    }
    settle(ok, ok ? '' : `Respuesta correcta: <b>${esc(correctTxt)}</b>`, ex);
  }
  function markOpts(right, picked) {
    $$('.opt').forEach((b) => { b.disabled = true; if (b.dataset.v === String(right)) b.classList.add('ok'); else if (b.dataset.v === String(picked)) b.classList.add('bad'); });
  }

  function settle(ok, extra, ex, isMatch = false) {
    P.checked = true;
    const sid = P.screens[P.i].id;
    if (!(sid in P.firstTry)) P.firstTry[sid] = ok;
    if (ok) { P.combo++; sfx.right(); if (P.kind === 'practice') delete state.mistakes[sid]; }
    else {
      P.combo = 0; sfx.wrong();
      state.mistakes[sid] = (state.mistakes[sid] || 0) + 1; save();
      if (!isMatch && !P.requeued.has(sid) && P.requeue !== false) { P.requeued.add(sid); P.screens.push({ ...P.screens[P.i], retry: true }); }
    }
    const praise = ['¡Bien!', '¡Excelente!', '¡Correcto!', '¡Eso!', '¡Muy bien!'];
    const title = ok ? (P.combo >= 3 ? `¡${P.combo} seguidas!` : praise[Math.floor(Math.random() * praise.length)]) : (isMatch ? '¡Listo!' : 'No exactamente');
    footer('Continuar', next, true, ok || isMatch ? 'good' : 'bad');
    $('#fb').innerHTML = `<strong>${ok || isMatch ? '✓' : '✗'} ${title}</strong>${extra ? `<p>${extra}</p>` : ''}${ex.why ? `<p class="why">${esc(ex.why)}</p>` : ''}${!ok && !isMatch && P.requeue !== false ? '<p class="why">La vas a ver de nuevo al final.</p>' : ''}`;
    $('#pBtn').focus();
  }

  function next() {
    P.i++;
    if (P.i >= P.screens.length) return finish();
    renderPlayer();
  }

  function finish() {
    const ids = Object.keys(P.firstTry);
    const right = ids.filter((k) => P.firstTry[k]).length;
    const acc = ids.length ? right / ids.length : 1;
    const secs = Math.round((Date.now() - P.start) / 1000);
    const beforeLevel = levelOf(state.xp).i; const beforeGoal = todayXP() >= state.dailyGoal;
    const xp = P.reward({ acc, right, total: ids.length });
    addXP(xp);
    const stars = acc >= 0.9 ? 3 : acc >= 0.7 ? 2 : 1;
    if (P.onDone) P.onDone({ acc, stars });
    save();
    sfx.done(); confetti();
    const queue = [];
    queue.push(`<div class="celebrate">${mascot('happy')}
      <h1>${P.doneTitle || '¡Lección completa!'}</h1>
      ${P.kind === 'lesson' ? `<div class="big-stars">${'★'.repeat(stars)}<span>${'★'.repeat(3 - stars)}</span></div>` : ''}
      <div class="tiles">
        <div class="tile-stat xp"><span>XP</span><b>+${xp}</b></div>
        ${ids.length ? `<div class="tile-stat acc"><span>Precisión</span><b>${Math.round(acc * 100)}%</b></div>` : ''}
        <div class="tile-stat time"><span>Tiempo</span><b>${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}</b></div>
      </div></div>`);
    if (!beforeGoal && todayXP() >= state.dailyGoal) queue.push(`<div class="celebrate"><div class="big-emoji">🎯</div><h1>¡Meta diaria cumplida!</h1><p>${todayXP()} XP hoy. Racha de <b>${streak()} ${streak() === 1 ? 'día' : 'días'}</b> 🔥</p></div>`);
    const lv = levelOf(state.xp);
    if (lv.i > beforeLevel) queue.push(`<div class="celebrate"><div class="big-emoji">${lv.icon}</div><h1>¡Subiste de nivel!</h1><p>Ahora sos <b>${esc(lv.name)}</b>.</p></div>`);
    newAchievements().forEach((a) => queue.push(`<div class="celebrate"><div class="badge-big">${a.icon}</div><span class="read-k">Nuevo logro</span><h1>${esc(a.name)}</h1><p>${esc(a.desc)}</p></div>`));
    const show = () => {
      const html = queue.shift();
      if (!html) return endSession(P.exit);
      $('#pBody').innerHTML = html; $('.p-bar span').style.width = '100%';
      footer('Continuar', show, true);
      $('#pBtn').focus();
    };
    show();
  }

  /* Constructores de sesión */
  function playLesson(id) {
    const l = ALL_LESSONS().find((x) => x.id === id);
    if (!l) return (app.innerHTML = views.notfound());
    if (!lessonUnlocked(id)) { toast('Completá las lecciones anteriores primero'); location.hash = '#/'; return; }
    const ph = phaseOf(l.unit); const replay = lessonDone(id);
    const screens = [
      ...l.read.map((r, i) => ({ type: 'read', h: r.h, body: r.body, kicker: i === 0 ? `Unidad ${l.unit.n} · ${l.title}` : '' })),
      ...l.ex.map((ex, i) => ({ type: 'ex', ex, id: `${id}e${i}` })),
    ];
    startSession({
      kind: 'lesson', screens, color: ph.color, dark: ph.dark, exit: '#/',
      reward: ({ acc, right }) => (replay ? 5 : 10) + right + (acc === 1 ? 5 : 0),
      onDone: ({ acc, stars }) => {
        const prev = state.lessons[id];
        state.lessons[id] = { stars: Math.max(stars, prev?.stars || 0), acc: Math.max(acc, prev?.acc || 0), at: Date.now(), plays: (prev?.plays || 0) + 1 };
      },
    });
  }

  function playChallenge(n) {
    const u = UNITS[n - 1]; if (!u) return (app.innerHTML = views.notfound());
    if (!unitLessonsDone(u)) { toast('Terminá las lecciones de la unidad para desbloquear el desafío'); location.hash = '#/'; return; }
    const ph = phaseOf(u); const c = u.challenge; const replay = !!state.challenges[n];
    const screens = [
      { type: 'read', kicker: `Desafío · Unidad ${n}`, h: c.title, body: c.intro },
      ...c.steps.map((ex, i) => ({ type: 'ex', ex, id: `u${n}c${i}` })),
      { type: 'ex', ex: { t: 'reflect', q: c.reflect, key: c.legacyKey }, id: `u${n}r` },
      { type: 'read', kicker: 'Resolución y devolución', h: 'Cómo lo pensaría una directora', body: c.solution + `<details class="recap"><summary>Volver a ver el caso</summary>${c.intro}</details>` },
    ];
    startSession({
      kind: 'challenge', requeue: false, screens, color: ph.color, dark: ph.dark, exit: '#/', doneTitle: '¡Desafío superado!',
      reward: ({ right }) => (replay ? 10 : 30) + right * 2,
      onDone: () => { const prev = state.challenges[n]; state.challenges[n] = { at: Date.now(), plays: (prev?.plays || 0) + 1 }; },
    });
  }

  function practicePool() {
    return ALL_LESSONS().filter((l) => lessonDone(l.id)).flatMap((l) => l.ex.map((ex, i) => ({ ex, id: `${l.id}e${i}`, unit: l.unit })));
  }
  function playPractice(mode) {
    let pool = practicePool();
    if (mode === 'errores') pool = pool.filter((p) => state.mistakes[p.id]);
    if (!pool.length) { toast(mode === 'errores' ? 'No tenés errores pendientes 🎉' : 'Completá una lección para desbloquear la práctica'); location.hash = '#/practica'; return; }
    const pick = shuffle(pool).slice(0, mode === 'errores' ? 12 : 10);
    startSession({
      kind: 'practice', screens: pick.map((p) => ({ type: 'ex', ex: p.ex, id: p.id })), color: '#7c4ddb', dark: '#5d32b4', exit: '#/practica',
      doneTitle: mode === 'errores' ? '¡Errores repasados!' : '¡Práctica completa!',
      reward: ({ right }) => Math.max(5, right * 2),
      onDone: () => { state.practices++; },
    });
  }

  /* ═════════ Laboratorio ═════════ */
  views.lab = (n) => {
    const u = UNITS[n - 1]; if (!u) return views.notfound(); const ph = phaseOf(u);
    return `<div class="page" style="--c:${ph.color};--cd:${ph.dark}">
      <a href="#/" class="back">← Camino</a>
      <header class="guide-hero"><span class="unit-k">Unidad ${n} · Laboratorio Durabox</span><h1>Llevalo a la empresa real</h1>
      <p>Cada concepto, a una pregunta concreta de Durabox. +5 XP por tarea.</p></header>
      <section class="card"><ul class="tasks">${u.lab.map((t, i) => `<li><label><input type="checkbox" data-lab="${i}" ${state.labs[`u${n}-${i}`] ? 'checked' : ''}><span>${esc(t)}</span></label></li>`).join('')}</ul></section>
      <section class="card"><label class="field"><span>Hallazgos y números de Durabox</span>
        <textarea id="labNotes" rows="7" placeholder="Anotá lo que vayas encontrando…">${esc(state.labNotes['u' + n] || '')}</textarea></label>
        <button class="btn" id="labToNote">Guardar como nota en Cerebro</button></section>
    </div>`;
  };
  function bindLab(n) {
    $$('[data-lab]').forEach((c) => c.addEventListener('change', () => {
      const k = `u${n}-${c.dataset.lab}`;
      const first = c.checked && !state.labs[k + ':xp'];
      state.labs[k] = c.checked;
      if (first) { state.labs[k + ':xp'] = true; addXP(5); sfx.right(); toast('+5 XP'); }
      save(); celebrateAchievements();
    }));
    $('#labNotes').addEventListener('input', (e) => { state.labNotes['u' + n] = e.target.value; save(); });
    $('#labToNote').addEventListener('click', () => {
      const body = `#durabox #laboratorio\n\n${state.labNotes['u' + n] || ''}`;
      const note = { id: uid(), title: `Laboratorio Durabox — Unidad ${n}`, body, tags: extractTags(body), unit: n, created: Date.now(), updated: Date.now() };
      state.notes.push(note); save(); celebrateAchievements(); location.hash = '#/cerebro/' + note.id;
    });
  }
  function celebrateAchievements() {
    newAchievements().forEach((a) => { toast(`${a.icon} Logro: ${a.name}`); sfx.done(); });
  }

  /* ═════════ Práctica ═════════ */
  const allCards = () => {
    const cards = [];
    UNITS.filter((u) => u.lessons.some((l) => lessonDone(l.id))).forEach((u) => u.cards.forEach((c, i) => cards.push({ id: `u${u.n}c${i}card`, unit: u.n, ...c })));
    state.customCards.forEach((c) => cards.push({ ...c, unit: null }));
    return cards;
  };
  const dueCards = () => allCards().filter((c) => !state.srs[c.id] || state.srs[c.id].due <= Date.now());
  function rate(id, q) {
    const s = state.srs[id] || { interval: 0, ease: 2.5, reps: 0 };
    if (q === 0) { s.interval = 0; s.reps = 0; s.ease = Math.max(1.3, s.ease - 0.2); }
    else {
      s.reps += 1;
      if (s.reps === 1) s.interval = q === 3 ? 3 : 1;
      else if (s.reps === 2) s.interval = q === 1 ? 3 : 6;
      else s.interval = Math.round(s.interval * (q === 1 ? 1.2 : q === 3 ? s.ease + 0.3 : s.ease));
      s.ease = Math.max(1.3, s.ease + (q === 1 ? -0.15 : q === 3 ? 0.15 : 0));
    }
    s.due = q === 0 ? Date.now() + 60000 : Date.now() + s.interval * 86400000;
    state.srs[id] = s; save();
  }

  views.practica = () => {
    const pool = practicePool().length, errs = practicePool().filter((p) => state.mistakes[p.id]).length, due = dueCards().length;
    return `<div class="page">
      <header class="page-head"><h1>Práctica</h1><p class="lede">Repasar es lo que hace que lo aprendido se quede. Cada práctica suma XP y cuida tu racha.</p></header>
      <div class="practice-grid">
        <a class="pcard red ${errs ? '' : 'off'}" href="#/practica/errores"><span class="pc-ic">🩹</span><b>Repasar errores</b><small>${errs ? `${errs} ejercicios para corregir` : 'Sin errores pendientes'}</small></a>
        <a class="pcard blue ${pool ? '' : 'off'}" href="#/practica/rapida"><span class="pc-ic">⚡</span><b>Práctica rápida</b><small>${pool ? '10 ejercicios al azar de lo que ya viste' : 'Completá una lección primero'}</small></a>
        <a class="pcard purple" href="#/practica/tarjetas"><span class="pc-ic">🃏</span><b>Tarjetas</b><small>${due} para repasar hoy</small></a>
      </div>
    </div>`;
  };

  let cardSession = null;
  views.tarjetas = () => {
    if (!cardSession || !cardSession.queue.length) cardSession = { queue: dueCards().map((c) => c.id), flipped: false, done: 0 };
    const card = allCards().find((c) => c.id === cardSession.queue[0]);
    return `<div class="page">
      <a href="#/practica" class="back">← Práctica</a>
      <header class="page-head"><h1>Tarjetas</h1><p class="lede">Pensá la respuesta, dala vuelta y decí qué tan bien la sabías. Las que sabés aparecen cada vez menos.</p></header>
      ${card ? `<div class="flash ${cardSession.flipped ? 'flipped' : ''}" id="flash" tabindex="0" role="button">
          <span class="read-k">${card.unit ? 'Unidad ' + card.unit : 'Tu tarjeta'} · quedan ${cardSession.queue.length}</span>
          <p class="q">${esc(card.q)}</p>
          ${cardSession.flipped ? `<p class="a">${esc(card.a)}</p>` : '<p class="hint">Tocá para ver la respuesta</p>'}
        </div>
        ${cardSession.flipped ? `<div class="rate"><button class="btn" data-rate="0">Otra vez</button><button class="btn" data-rate="1">Difícil</button><button class="btn primary" data-rate="2">Bien</button><button class="btn blue" data-rate="3">Fácil</button></div>` : ''}`
      : `<div class="card empty">${mascot('happy', 90)}<p><b>Nada para repasar ahora.</b> ${cardSession.done ? `Repasaste ${cardSession.done} tarjetas.` : 'Volvé mañana o avanzá en el camino.'}</p></div>`}
      <details class="card"><summary><b>Crear tarjeta propia</b></summary>
        <form id="newcard" class="stack"><input name="q" placeholder="Pregunta o concepto" required><textarea name="a" rows="3" placeholder="Respuesta" required></textarea><button class="btn">Agregar</button></form>
        ${state.customCards.length ? `<ul class="custom-cards">${state.customCards.map((c) => `<li><span>${esc(c.q)}</span><button class="link danger" data-delcard="${c.id}">eliminar</button></li>`).join('')}</ul>` : ''}
      </details></div>`;
  };
  function bindTarjetas() {
    const flip = () => { if (!cardSession.flipped) { cardSession.flipped = true; rerender(); } };
    $('#flash')?.addEventListener('click', flip);
    $('#flash')?.addEventListener('keydown', (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } });
    $$('[data-rate]').forEach((b) => b.addEventListener('click', () => {
      const id = cardSession.queue.shift(); const q = +b.dataset.rate;
      rate(id, q);
      if (q === 0) cardSession.queue.push(id); else { cardSession.done++; addXP(1); }
      cardSession.flipped = false;
      if (!cardSession.queue.length && cardSession.done) { state.practices++; save(); celebrateAchievements(); }
      rerender();
    }));
    $('#newcard').addEventListener('submit', (e) => {
      e.preventDefault();
      const c = { id: 'c' + uid(), q: e.target.q.value.trim(), a: e.target.a.value.trim() };
      state.customCards.push(c); save(); cardSession.queue.push(c.id); toast('Tarjeta agregada'); rerender();
    });
    $$('[data-delcard]').forEach((b) => b.addEventListener('click', () => {
      state.customCards = state.customCards.filter((c) => c.id !== b.dataset.delcard);
      cardSession.queue = cardSession.queue.filter((x) => x !== b.dataset.delcard); save(); rerender();
    }));
  }

  /* ═════════ Perfil ═════════ */
  views.perfil = () => {
    const lv = levelOf(state.xp); const s = summaryStats();
    const nextTxt = lv.next ? `${lv.next.xp - state.xp} XP para ${lv.next.icon} ${esc(lv.next.name)}` : 'Nivel máximo alcanzado';
    const pct = lv.next ? (state.xp - lv.xp) / (lv.next.xp - lv.xp) : 1;
    const days = [...Array(7)].map((_, i) => { const d = new Date(); d.setDate(d.getDate() - (6 - i)); return { k: dayKey(d), l: d.toLocaleDateString('es-AR', { weekday: 'narrow' }) }; });
    const max = Math.max(state.dailyGoal, ...days.map((d) => state.xpDays[d.k] || 0));
    return `<div class="page">
      <header class="profile-hero">
        <div class="lvl-badge">${lv.icon}</div>
        <div><span class="read-k">Nivel ${lv.i + 1}</span><h1>${esc(lv.name)}</h1>
        <div class="bar"><span style="width:${pct * 100}%"></span></div><small class="muted">${nextTxt}</small></div>
      </header>
      <div class="stat-grid">
        <div class="sg"><span>🔥</span><b>${streak()}</b><small>días de racha</small></div>
        <div class="sg"><span>⚡</span><b>${state.xp}</b><small>XP total</small></div>
        <div class="sg"><span>📘</span><b>${s.lessonsDone}</b><small>lecciones</small></div>
        <div class="sg"><span>🏆</span><b>${s.challenges}</b><small>desafíos</small></div>
      </div>
      <section class="card"><h3>Esta semana</h3>
        <div class="week-chart">${days.map((d) => { const v = state.xpDays[d.k] || 0; return `<div class="wc"><span class="wc-bar ${v >= state.dailyGoal ? 'hit' : ''}" style="height:${Math.max(4, (v / max) * 100)}%" title="${v} XP"></span><small>${d.l}</small></div>`; }).join('')}</div>
        <p class="muted">Mejor racha: ${s.bestStreak} días</p></section>
      <section class="card"><h3>Meta diaria</h3>
        <div class="goal-opts">${DAILY_GOALS.map((g) => `<button class="goal-opt ${state.dailyGoal === g.xp ? 'on' : ''}" data-goal="${g.xp}"><b>${g.name}</b><small>${g.xp} XP por día</small></button>`).join('')}</div></section>
      <section class="card"><h3>Logros <small class="muted">${Object.keys(state.achievements).length}/${ACHIEVEMENTS.length}</small></h3>
        <div class="badges">${ACHIEVEMENTS.map((a) => `<div class="badge ${state.achievements[a.id] ? 'on' : ''}" title="${esc(a.desc)}"><span>${a.icon}</span><b>${esc(a.name)}</b><small>${esc(a.desc)}</small></div>`).join('')}</div></section>
      <section class="card stack"><h3>Ajustes</h3>
        <label class="switch"><input type="checkbox" id="soundT" ${state.sound ? 'checked' : ''}><span>Sonidos</span></label>
        <p class="muted">Tus datos viven solo en este dispositivo. Exportá un respaldo de vez en cuando.</p>
        <div class="row-btns">
          <button class="btn" id="export">Exportar respaldo</button>
          <label class="btn file-btn">Importar respaldo<input type="file" id="import" accept="application/json" hidden></label>
          <button class="btn" id="exportmd">Exportar notas (.md)</button>
          <button class="btn danger" id="reset">Borrar todo</button>
        </div></section>
    </div>`;
  };
  function download(name, text, type) {
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type }));
    a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  function bindPerfil() {
    $$('[data-goal]').forEach((b) => b.addEventListener('click', () => { state.dailyGoal = +b.dataset.goal; save(); renderStats(); rerender(); }));
    $('#soundT').addEventListener('change', (e) => { state.sound = e.target.checked; save(); if (state.sound) sfx.right(); });
    $('#export').addEventListener('click', () => download(`brain-respaldo-${dayKey()}.json`, JSON.stringify(state, null, 2), 'application/json'));
    $('#exportmd').addEventListener('click', () => download(`brain-notas-${dayKey()}.md`, state.notes.map((n) => `# ${n.title}\n\n${n.body}\n`).join('\n---\n\n'), 'text/markdown'));
    $('#import').addEventListener('change', async (e) => {
      const f = e.target.files[0]; if (!f) return;
      try {
        const data = JSON.parse(await f.text());
        if (!data || typeof data !== 'object' || !('notes' in data)) throw new Error();
        if (!confirm('Esto reemplaza los datos actuales por los del respaldo. ¿Continuar?')) return;
        localStorage.setItem(KEY, JSON.stringify(data)); location.reload();
      } catch { toast('El archivo no es un respaldo válido de Brain'); }
    });
    $('#reset').addEventListener('click', () => {
      if (!confirm('Se borran progreso, XP, notas y tableros de este dispositivo. ¿Seguro?')) return;
      localStorage.removeItem(KEY); location.hash = '#/'; location.reload();
    });
  }

  /* ═════════ Herramientas ═════════ */
  const fmtInput = (v) => (typeof v === 'number' ? v.toLocaleString('es-AR', { maximumFractionDigits: 4 }) : v);
  const parseNum = (s) => { const n = parseFloat(String(s).replace(/\./g, '').replace(',', '.')); return isFinite(n) ? n : 0; };
  const outCard = (o) => `<div class="out ${o.tone || ''}"><span>${esc(o.label)}</span><b>${o.value}</b>${o.sub ? `<small>${o.sub}</small>` : ''}</div>`;
  const inputField = (f, val, attr) => `<label class="field num"><span>${esc(f.label)}</span>
      <span class="input-wrap" data-unit="${f.unit === '#' ? '' : esc(f.unit)}"><input type="text" inputmode="decimal" ${attr}="${f.k}" value="${fmtInput(val)}"></span></label>`;

  views.herramientas = () => `<div class="page">
    <header class="page-head"><h1>Herramientas</h1><p class="lede">Calculadoras para hacer las cuentas en vivo frente a un cliente.</p></header>
    <a class="card tool-feature" href="#/herramientas/tablero"><span class="read-k">Tu framework</span><strong>Tablero de Dirección de Marketing</strong>
      <div class="chain">${PRINCIPLES.chain.join(' → ')}</div></a>
    <div class="tool-grid">${TOOLS.map((t) => `<a class="card tool" href="#/herramientas/${t.id}"><span class="read-k">Unidad ${t.week}</span><strong>${esc(t.title)}</strong><span class="muted">${esc(t.desc)}</span></a>`).join('')}</div>
  </div>`;

  const toolVals = (t) => { const saved = state.toolInputs[t.id] || {}; const v = {}; t.inputs.forEach((f) => (v[f.k] = saved[f.k] ?? f.def)); return v; };
  views.tool = (id) => {
    if (id === 'tablero') return views.tablero();
    const t = TOOLS.find((x) => x.id === id); if (!t) return views.notfound();
    const vals = toolVals(t);
    return `<div class="page wide"><a href="#/herramientas" class="back">← Herramientas</a>
      <header class="page-head"><h1>${esc(t.title)}</h1><p class="lede">${esc(t.desc)}</p></header>
      <div class="tool-layout">
        <form class="card inputs" data-tool="${t.id}">${t.inputs.map((f) => inputField(f, vals[f.k], 'data-k')).join('')}<button type="button" class="btn" data-reset>Restaurar ejemplo</button></form>
        <div class="results"><div class="outs" id="outs"></div><div class="card insight" id="insight"></div>
          <div class="row-btns"><button class="btn primary" data-save-tool>Guardar en Cerebro</button><a class="btn" href="#/unidad/${t.week}">Repasar la unidad ${t.week}</a></div></div>
      </div></div>`;
  };
  function renderToolOutputs(t) {
    const v = toolVals(t);
    $('#outs').innerHTML = t.compute(v).map(outCard).join('');
    $('#insight').innerHTML = `<span class="read-k">Lectura de directora</span><p>${esc(t.insight(v))}</p>`;
  }
  function bindTool(id) {
    const t = TOOLS.find((x) => x.id === id); if (!t) return;
    renderToolOutputs(t);
    const form = $('[data-tool]');
    form.addEventListener('input', (e) => { if (!e.target.dataset.k) return; (state.toolInputs[t.id] ||= {})[e.target.dataset.k] = parseNum(e.target.value); save(); renderToolOutputs(t); });
    form.addEventListener('focusout', (e) => { if (e.target.dataset.k) e.target.value = fmtInput(parseNum(e.target.value)); });
    $('[data-reset]').addEventListener('click', () => { delete state.toolInputs[t.id]; save(); rerender(); });
    $('[data-save-tool]').addEventListener('click', () => {
      const v = toolVals(t);
      const body = `#calculo #${t.id}\n\n## Supuestos\n${t.inputs.map((f) => `- ${f.label}: ${f.unit === '$' ? fmtMoney(v[f.k]) : fmtNum(v[f.k], 2) + (f.unit === '%' ? '%' : f.unit === 'x' ? 'x' : '')}`).join('\n')}\n\n## Resultado\n${t.compute(v).map((o) => `- ${o.label}: ${o.value}${o.sub ? ' (' + o.sub + ')' : ''}`).join('\n')}\n\n> ${t.insight(v)}\n\n## ¿Y esto qué significa para el negocio?\n`;
      const n = { id: uid(), title: `${t.title} — ${new Date().toLocaleDateString('es-AR')}`, body, tags: extractTags(body), unit: t.week, created: Date.now(), updated: Date.now() };
      state.notes.push(n); save(); celebrateAchievements(); location.hash = '#/cerebro/' + n.id;
    });
  }

  const activeCompany = () => state.companies.find((c) => c.id === state.activeCompany) || state.companies[0];
  views.tablero = () => {
    const c = activeCompany();
    return `<div class="page wide"><a href="#/herramientas" class="back">← Herramientas</a>
      <header class="page-head"><h1>Tablero de Dirección</h1><p class="lede">Un tablero por empresa, con historial mensual.</p></header>
      <div class="company-bar card"><label class="field"><span>Empresa</span>
        <select id="company">${state.companies.map((x) => `<option value="${x.id}" ${x.id === c.id ? 'selected' : ''}>${esc(x.name)}</option>`).join('')}</select></label>
        <div class="row-btns"><button class="btn" data-co="new">+ Nueva</button><button class="btn" data-co="rename">Renombrar</button><button class="btn danger" data-co="delete">Eliminar</button></div></div>
      <div class="chain-viz" id="chainviz"></div>
      <div class="tool-layout">
        <form class="card inputs" id="dashform">${DASH_FIELDS.map((f) => inputField(f, c.data[f.k] ?? f.def, 'data-d')).join('')}</form>
        <div class="results">
          <div class="card"><span class="read-k">Alertas y lectura</span><ul class="alerts" id="alerts"></ul></div>
          <div class="card"><span class="read-k">Historial</span>
            <form id="snap" class="snap"><input name="label" placeholder="Período (ej. Octubre 2026)" required><button class="btn">Guardar</button></form>
            <div id="history"></div></div>
        </div></div></div>`;
  };
  function renderDashboard() {
    const c = activeCompany(); const r = computeDashboard(c.data);
    $('#chainviz').innerHTML = r.chain.map((s, i) => `<div class="cnode ${s.tone || ''}"><span>${s.label}</span><b>${s.value}</b>${s.sub ? `<small>${s.sub}</small>` : ''}</div>${i < r.chain.length - 1 ? '<i>→</i>' : ''}`).join('');
    $('#alerts').innerHTML = r.alerts.map((a) => `<li class="${a.tone}">${esc(a.text)}</li>`).join('');
    $('#history').innerHTML = c.history.length ? `<div class="table-wrap"><table class="hist"><thead><tr><th>Período</th><th>Inversión</th><th>Ventas</th><th>CAC</th><th>Facturación</th><th>Resultado</th><th></th></tr></thead><tbody>
      ${c.history.map((h, i) => { const d = h.data; const f = d.ventasTot * d.ticket; const res = f * d.margen / 100 - d.inversion - d.fijos;
        return `<tr><td>${esc(h.label)}</td><td>${fmtMoney(d.inversion)}</td><td>${fmtNum(d.ventasTot)}</td><td>${fmtMoney(d.inversion / d.ventasMkt)}</td><td>${fmtMoney(f)}</td><td class="${res < 0 ? 'bad' : ''}">${fmtMoney(res)}</td><td><button class="link" data-load="${i}">cargar</button> <button class="link danger" data-del="${i}">×</button></td></tr>`; }).join('')}
      </tbody></table></div>` : '<p class="muted">Guardá cada mes para ver la evolución.</p>';
  }
  function bindTablero() {
    renderDashboard();
    $('#dashform').addEventListener('input', (e) => { const k = e.target.dataset.d; if (!k) return; activeCompany().data[k] = parseNum(e.target.value); save(); renderDashboard(); });
    $('#dashform').addEventListener('focusout', (e) => { if (e.target.dataset.d) e.target.value = fmtInput(parseNum(e.target.value)); });
    $('#company').addEventListener('change', (e) => { state.activeCompany = e.target.value; save(); rerender(); });
    $$('[data-co]').forEach((b) => b.addEventListener('click', () => {
      const c = activeCompany();
      if (b.dataset.co === 'new') { const name = prompt('Nombre de la empresa'); if (!name) return; const data = {}; DASH_FIELDS.forEach((f) => (data[f.k] = f.def)); const nc = { id: uid(), name, data, history: [] }; state.companies.push(nc); state.activeCompany = nc.id; }
      else if (b.dataset.co === 'rename') { const name = prompt('Nuevo nombre', c.name); if (!name) return; c.name = name; }
      else { if (state.companies.length === 1) return toast('Necesitás al menos una empresa'); if (!confirm(`¿Eliminar “${c.name}” y su historial?`)) return; state.companies = state.companies.filter((x) => x.id !== c.id); state.activeCompany = state.companies[0].id; }
      save(); rerender();
    }));
    $('#snap').addEventListener('submit', (e) => { e.preventDefault(); const c = activeCompany(); c.history.push({ label: e.target.label.value, data: { ...c.data }, at: Date.now() }); save(); toast('Período guardado'); renderDashboard(); e.target.reset(); });
    $('#history').addEventListener('click', (e) => {
      const c = activeCompany();
      if (e.target.dataset.load) { c.data = { ...c.history[+e.target.dataset.load].data }; save(); rerender(); }
      if (e.target.dataset.del && confirm('¿Eliminar este período?')) { c.history.splice(+e.target.dataset.del, 1); save(); renderDashboard(); }
    });
  }

  /* ═════════ Cerebro ═════════ */
  const noteRow = (n) => `<a class="note-row" href="#/cerebro/${n.id}"><strong>${esc(n.title || 'Sin título')}</strong>
    <span class="muted">${esc((n.body || '').replace(/\s+/g, ' ').slice(0, 110))}</span>
    <span class="meta">${n.unit ? `<span class="pill">Unidad ${n.unit}</span>` : ''}${(n.tags || []).map((t) => `<span class="tag">#${esc(t)}</span>`).join('')}<span>${new Date(n.updated).toLocaleDateString('es-AR')}</span></span></a>`;

  views.cerebro = (query) => {
    const q = (query.get('q') || '').toLowerCase(), tag = query.get('tag') || '';
    const tags = [...new Set(state.notes.flatMap((n) => n.tags || []))].sort();
    const notes = state.notes.filter((n) => (!q || (n.title + ' ' + n.body).toLowerCase().includes(q)) && (!tag || (n.tags || []).includes(tag))).sort((a, b) => b.updated - a.updated);
    return `<div class="page">
      <header class="page-head"><h1>Cerebro</h1><p class="lede">Tus notas conectadas. Usá <code>#etiquetas</code> y <code>[[Título de otra nota]]</code> para enlazar ideas.</p></header>
      <form id="quick" class="card quick"><textarea name="body" rows="2" placeholder="Captura rápida: una idea, una pregunta de cliente, un número…" required></textarea><button class="btn primary">Guardar</button></form>
      <div class="toolbar"><input type="search" id="search" placeholder="Buscar en tus notas…" value="${esc(query.get('q') || '')}"><a class="btn" href="#/cerebro/nueva">+ Nota</a></div>
      ${tags.length ? `<div class="chips"><a href="#/cerebro" class="chip ${!tag ? 'on' : ''}">Todas</a>${tags.map((t) => `<a href="#/cerebro?tag=${encodeURIComponent(t)}" class="chip ${t === tag ? 'on' : ''}">#${esc(t)}</a>`).join('')}</div>` : ''}
      <div class="notes-list">${notes.length ? notes.map(noteRow).join('') : `<div class="card empty">${mascot('happy', 80)}<p><b>Tu cerebro está vacío.</b></p><p class="muted">Empezá con algo que aprendiste hoy.</p></div>`}</div>
    </div>`;
  };
  function bindCerebro() {
    const s = $('#search');
    s.addEventListener('input', () => { clearTimeout(s._t); s._t = setTimeout(() => { history.replaceState(null, '', '#/cerebro' + (s.value ? '?q=' + encodeURIComponent(s.value) : '')); keep = true; route(); const ns = $('#search'); ns.focus(); ns.setSelectionRange(ns.value.length, ns.value.length); }, 200); });
    $('#quick').addEventListener('submit', (e) => {
      e.preventDefault(); const body = e.target.body.value.trim(); if (!body) return;
      const first = body.split('\n')[0]; const title = first.length > 60 ? first.slice(0, 57) + '…' : first;
      state.notes.push({ id: uid(), title, body, tags: extractTags(body), unit: null, created: Date.now(), updated: Date.now() });
      save(); toast('Guardado'); celebrateAchievements(); rerender();
    });
  }

  views.nota = (id, query) => {
    let n = state.notes.find((x) => x.id === id); const isNew = id === 'nueva';
    if (!n && !isNew) return views.notfound();
    if (isNew) n = { id: '', title: query.get('t') || '', body: query.get('b') || '', unit: query.get('u') ? +query.get('u') : null };
    const unit = n.unit ?? n.week ?? null;
    const backlinks = n.title ? state.notes.filter((x) => x.id !== n.id && x.body.toLowerCase().includes(`[[${n.title.toLowerCase()}]]`)) : [];
    return `<div class="page"><a href="#/cerebro" class="back">← Cerebro</a>
      <form class="note-editor card" id="noteform" data-id="${esc(n.id)}">
        <input name="title" class="title-input" placeholder="Título" value="${esc(n.title)}" required>
        <div class="editor-meta"><label>Unidad <select name="unit"><option value="">—</option>${UNITS.map((u) => `<option value="${u.n}" ${unit === u.n ? 'selected' : ''}>${u.n}. ${esc(u.title)}</option>`).join('')}</select></label>
          <div class="seg"><button type="button" class="on" data-mode="edit">Editar</button><button type="button" data-mode="view">Ver</button></div></div>
        <textarea name="body" rows="14" placeholder="Markdown simple: # título, **negrita**, - listas, - [ ] tareas, > cita, #etiqueta, [[otra nota]]">${esc(n.body)}</textarea>
        <div class="prose preview" hidden></div>
        <div class="row-btns"><button class="btn primary">Guardar</button>${!isNew ? '<button type="button" class="btn" data-card>Crear tarjeta</button><button type="button" class="btn danger" data-delete>Eliminar</button>' : ''}</div>
      </form>
      ${backlinks.length ? `<h3 class="section-title">Notas que enlazan acá</h3><div class="notes-list">${backlinks.map(noteRow).join('')}</div>` : ''}</div>`;
  };
  function bindNota(id) {
    const form = $('#noteform'); if (!form) return;
    const ta = form.body, preview = $('.preview', form);
    $$('[data-mode]', form).forEach((b) => b.addEventListener('click', () => {
      $$('[data-mode]', form).forEach((x) => x.classList.toggle('on', x === b));
      const view = b.dataset.mode === 'view'; ta.hidden = view; preview.hidden = !view;
      if (view) preview.innerHTML = md(ta.value) || '<p class="muted">Nota vacía.</p>';
    }));
    if (id !== 'nueva') $('[data-mode="view"]', form).click();
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = { title: form.title.value.trim(), body: ta.value, unit: form.unit.value ? +form.unit.value : null }; data.tags = extractTags(data.body);
      let n = state.notes.find((x) => x.id === form.dataset.id);
      if (n) { Object.assign(n, data, { updated: Date.now() }); delete n.week; }
      else { n = { id: uid(), ...data, created: Date.now(), updated: Date.now() }; state.notes.push(n); }
      save(); toast('Nota guardada'); celebrateAchievements();
      if (location.hash === '#/cerebro/' + n.id) rerender(); else location.hash = '#/cerebro/' + n.id;
    });
    $('[data-delete]', form)?.addEventListener('click', () => { if (!confirm('¿Eliminar esta nota?')) return; state.notes = state.notes.filter((x) => x.id !== id); save(); location.hash = '#/cerebro'; });
    $('[data-card]', form)?.addEventListener('click', () => {
      const q = prompt('Pregunta de la tarjeta', form.title.value); if (!q) return;
      const a = prompt('Respuesta', ta.value.replace(/[#*>[\]]/g, '').trim().slice(0, 240)); if (!a) return;
      state.customCards.push({ id: 'c' + uid(), q, a }); save(); toast('Tarjeta agregada a Práctica');
    });
  }

  views.notfound = () => `<div class="page"><div class="card empty">${mascot('sad', 90)}<p>No encontré esa página.</p><a class="btn primary" href="#/">Volver al camino</a></div></div>`;

  /* ═════════ Router ═════════ */
  let keep = false;
  function route() {
    if (P) { P = null; document.body.classList.remove('playing'); }
    const [path, qs] = location.hash.slice(1).split('?');
    const query = new URLSearchParams(qs || '');
    const parts = (path || '/').split('/').filter(Boolean);
    let html, nav = parts[0] || 'learn', after;
    switch (parts[0]) {
      case undefined: html = views.learn(); nav = 'learn'; after = scrollToCurrent; break;
      case 'unidad': html = views.unidad(+parts[1]); nav = 'learn'; break;
      case 'leccion': return playLesson(parts[1]);
      case 'desafio': return playChallenge(+parts[1]);
      case 'lab': html = views.lab(+parts[1]); nav = 'learn'; after = () => bindLab(+parts[1]); break;
      case 'practica':
        nav = 'practica';
        if (parts[1] === 'errores' || parts[1] === 'rapida') return playPractice(parts[1]);
        if (parts[1] === 'tarjetas') { html = views.tarjetas(); after = bindTarjetas; } else html = views.practica();
        break;
      case 'herramientas': nav = 'herramientas';
        if (parts[1]) { html = views.tool(parts[1]); after = parts[1] === 'tablero' ? bindTablero : () => bindTool(parts[1]); } else html = views.herramientas();
        break;
      case 'cerebro': nav = 'cerebro';
        if (parts[1]) { html = views.nota(parts[1], query); after = () => bindNota(parts[1]); } else { html = views.cerebro(query); after = bindCerebro; }
        break;
      case 'perfil': html = views.perfil(); after = bindPerfil; break;
      default: html = views.notfound();
    }
    app.innerHTML = html;
    $$('[data-nav]').forEach((a) => a.classList.toggle('active', a.dataset.nav === nav));
    renderStats();
    if (!keep) window.scrollTo(0, 0);
    keep = false;
    after && after();
  }
  const rerender = () => { const y = window.scrollY; keep = true; route(); window.scrollTo(0, y); };
  function scrollToCurrent() {
    const cur = $('.node.current');
    if (cur && Object.keys(state.lessons).length) cur.scrollIntoView({ block: 'center' });
  }

  /* Teclado en el reproductor */
  document.addEventListener('keydown', (e) => {
    if (!P || e.target.matches('textarea')) return;
    if (e.key === 'Enter') { const b = $('#pBtn'); if (b && !b.disabled) { e.preventDefault(); b.click(); } return; }
    if (/^[1-4]$/.test(e.key) && !e.target.matches('input')) { const o = $$('.opt')[+e.key - 1]; o?.click(); }
  });

  /* ═════════ Comportamiento de app ═════════ */
  // Sin zoom: pellizco (iOS Safari ignora user-scalable), trackpad con ctrl y atajos de teclado
  const stop = (e) => e.preventDefault();
  ['gesturestart', 'gesturechange', 'gestureend'].forEach((t) => document.addEventListener(t, stop, { passive: false }));
  document.addEventListener('touchmove', (e) => { if (e.touches.length > 1 || (e.scale && e.scale !== 1)) e.preventDefault(); }, { passive: false });
  document.addEventListener('wheel', (e) => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });
  document.addEventListener('keydown', (e) => { if ((e.ctrlKey || e.metaKey) && ['+', '-', '=', '0'].includes(e.key)) e.preventDefault(); });
  // Altura real de la barra superior, para que los encabezados fijos no se superpongan
  const topbar = $('.topbar');
  const setTopH = () => document.documentElement.style.setProperty('--top-h', topbar.getBoundingClientRect().height + 'px');
  window.__setTopH = setTopH;
  setTopH();
  if ('ResizeObserver' in window) new ResizeObserver(() => window.__setTopH()).observe(topbar, { box: 'border-box' });
  window.addEventListener('resize', window.__setTopH);
  window.addEventListener('orientationchange', window.__setTopH);
  document.fonts?.ready.then(window.__setTopH);
  // Tocar algo bloqueado explica qué falta
  app.addEventListener('click', (e) => {
    const n = e.target.closest('.node.locked, .lesson-list a.locked'); if (!n) return;
    e.preventDefault();
    toast(n.classList.contains('boss') ? '🔒 Terminá las lecciones de la unidad para el desafío' : '🔒 Completá la lección anterior para desbloquear esta');
    navigator.vibrate?.(20);
  });

  /* ═════════ PWA ═════════ */
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredPrompt = e; $('#installBtn').hidden = false; });
  $('#installBtn').addEventListener('click', async () => { if (!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; $('#installBtn').hidden = true; });
  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));

  window.addEventListener('hashchange', route);
  route();
})();
