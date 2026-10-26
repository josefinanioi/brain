// Valida el contenido de los 12 módulos: estructura, tipos de ejercicio, respuestas, ids únicos y metadatos.
// Uso: node scripts/validate.mjs
import { readFileSync, readdirSync } from 'node:fs';
import vm from 'node:vm';

const files = ['js/data.js', ...readdirSync('js/content').filter((f) => /^m\d\d\.js$/.test(f)).sort().map((f) => 'js/content/' + f)];
const ctx = vm.createContext({});
vm.runInContext(files.map((f) => readFileSync(f, 'utf8')).join('\n') + '\nthis.UNITS = UNITS; this.PHASES = PHASES;', ctx);
const { UNITS, PHASES } = ctx;

const errs = []; const warns = []; const ids = new Set(); const keys = new Set();
let sections = 0, lessons = 0, exercises = 0, open = 0;
const TYPES = ['choice', 'tf', 'number', 'match', 'order', 'open'];
const check = (ex, where, inChallenge = false) => {
  exercises++;
  if (!ex.q) errs.push(`${where}: falta la pregunta`);
  if (!TYPES.includes(ex.t)) return errs.push(`${where}: tipo desconocido "${ex.t}"`);
  if (ex.t === 'choice' && !(Number.isInteger(ex.a) && ex.a >= 0 && ex.a < ex.o?.length)) errs.push(`${where}: respuesta fuera de rango`);
  if (ex.t === 'tf' && typeof ex.a !== 'boolean') errs.push(`${where}: tf necesita true/false`);
  if (ex.t === 'number' && typeof ex.a !== 'number') errs.push(`${where}: number necesita un número`);
  if (ex.t === 'match' && !(ex.pairs?.length >= 2)) errs.push(`${where}: match necesita 2+ pares`);
  if (ex.t === 'order' && !(ex.items?.length >= 2)) errs.push(`${where}: order necesita 2+ ítems`);
  if (ex.t === 'open') { open++; if (!ex.model || !(ex.points?.length >= 2)) errs.push(`${where}: open necesita model y 2+ points`); }
  if (['choice', 'tf', 'number', 'order'].includes(ex.t) && !ex.why) warns.push(`${where}: sin explicación (why)`);
};
UNITS.forEach((u, i) => {
  if (u.n !== i + 1) errs.push(`módulo ${u.n}: fuera de orden`);
  if (!PHASES.find((p) => p.id === u.phase)) errs.push(`módulo ${u.n}: nivel inválido`);
  if (u.summary?.length !== 3 || !u.lab?.length || !u.cards?.length || !u.challenge || !u.goal) errs.push(`módulo ${u.n}: faltan objetivo, resumen, laboratorio, tarjetas o desafío`);
  if (!u.sections?.length) errs.push(`módulo ${u.n}: sin unidades`);
  u.sections?.forEach((s) => {
    sections++;
    if (!s.code || !s.title || !s.lessons?.length) errs.push(`módulo ${u.n}: unidad incompleta ${s.code}`);
    s.lessons.forEach((l) => {
      lessons++;
      if (ids.has(l.id)) errs.push(`${l.id}: id repetido`); ids.add(l.id);
      if (!l.title || !l.icon) errs.push(`${l.id}: falta título o ícono`);
      if (!l.read?.length || !l.ex?.length) errs.push(`${l.id}: sin lectura o sin ejercicios`);
      if (l.ex.length < 3 || l.ex.length > 5) warns.push(`${l.id}: ${l.ex.length} ejercicios (lo esperado es 3–5)`);
      l.ex.forEach((e, k) => check(e, `${l.id}e${k}`));
    });
  });
  const c = u.challenge;
  if (c) {
    if (!c.key || keys.has(c.key)) errs.push(`módulo ${u.n}: desafío sin clave o repetida`); keys.add(c.key);
    if (!c.intro || !c.reflect || !c.solution || !c.steps?.length) errs.push(`módulo ${u.n}: desafío incompleto`);
    c.steps?.forEach((e, k) => check(e, `${c.key} paso ${k}`, true));
  }
});
console.log(`${UNITS.length} módulos · ${sections} unidades · ${lessons} lecciones · ${exercises} ejercicios (${open} de respuesta escrita)`);
if (warns.length) console.warn('Avisos:\n  ' + warns.join('\n  '));
if (errs.length) { console.error(errs.join('\n')); process.exit(1); }
console.log('Contenido OK');
