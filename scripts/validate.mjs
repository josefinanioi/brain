// Valida el contenido de las 12 unidades: tipos de ejercicio, respuestas, ids únicos y metadatos.
// Uso: node scripts/validate.mjs
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const files = ['js/data.js', 'js/content/u01-03.js', 'js/content/u04-06.js', 'js/content/u07-09.js', 'js/content/u10-12.js'];
const ctx = vm.createContext({});
vm.runInContext(files.map((f) => readFileSync(f, 'utf8')).join('\n') + '\nthis.UNITS = UNITS; this.PHASES = PHASES;', ctx);
const { UNITS, PHASES } = ctx;

const errs = []; const ids = new Set(); let lessons = 0, exercises = 0;
const check = (ex, where) => {
  exercises++;
  if (!ex.q) errs.push(`${where}: falta la pregunta`);
  if (ex.t === 'choice' && !(Number.isInteger(ex.a) && ex.a >= 0 && ex.a < ex.o?.length)) errs.push(`${where}: respuesta fuera de rango`);
  else if (ex.t === 'tf' && typeof ex.a !== 'boolean') errs.push(`${where}: tf necesita true/false`);
  else if (ex.t === 'number' && typeof ex.a !== 'number') errs.push(`${where}: number necesita un número`);
  else if (ex.t === 'match' && !(ex.pairs?.length >= 2)) errs.push(`${where}: match necesita 2+ pares`);
  else if (ex.t === 'order' && !(ex.items?.length >= 2)) errs.push(`${where}: order necesita 2+ ítems`);
  else if (!['choice', 'tf', 'number', 'match', 'order'].includes(ex.t)) errs.push(`${where}: tipo desconocido "${ex.t}"`);
};
UNITS.forEach((u, i) => {
  if (u.n !== i + 1) errs.push(`unidad ${u.n}: fuera de orden`);
  if (!PHASES.find((p) => p.id === u.phase)) errs.push(`unidad ${u.n}: fase inválida`);
  if (u.summary?.length !== 3 || !u.lab?.length || !u.cards?.length || !u.challenge) errs.push(`unidad ${u.n}: faltan resumen, laboratorio, tarjetas o desafío`);
  u.lessons.forEach((l) => {
    lessons++;
    if (ids.has(l.id)) errs.push(`${l.id}: id repetido`); ids.add(l.id);
    if (!l.read?.length || !l.ex?.length) errs.push(`${l.id}: sin lectura o sin ejercicios`);
    l.ex.forEach((e, k) => check(e, `${l.id}e${k}`));
  });
  u.challenge?.steps.forEach((e, k) => check(e, `u${u.n} desafío ${k}`));
});
console.log(`${UNITS.length} unidades · ${lessons} lecciones · ${exercises} ejercicios`);
if (errs.length) { console.error(errs.join('\n')); process.exit(1); }
console.log('Contenido OK');
