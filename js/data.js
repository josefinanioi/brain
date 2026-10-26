/* Brain — definiciones base: niveles del programa (PHASES), niveles de XP, metas y logros.
   El contenido está en js/content/mXX.js: 12 módulos, cada uno con unidades (sections) y lecciones. */

const PRINCIPLES = {
  rule: '¿Y esto qué significa para el negocio?',
  ruleNote: 'Cada vez que aparezca una métrica de marketing, hacete esta pregunta. Si no la podés responder, el análisis no terminó.',
  chain: ['Inversión', 'Adquisición', 'Pipeline', 'Ventas', 'Facturación', 'Margen', 'Resultado', 'Crecimiento'],
};

const PHASES = [
  { id: 'f1', name: 'Fundamentos', desc: 'Comprender mercado, clientes, marca, comunicación y recorrido de compra.', color: '#8352ec', dark: '#6d3fd6' },
  { id: 'f2', name: 'Aplicación y crecimiento', desc: 'Adquirir, convertir, medir, experimentar y automatizar.', color: '#6a3cc4', dark: '#4f279c' },
  { id: 'f3', name: 'Dirección', desc: 'Entender la economía de la empresa, la estrategia, las operaciones, el liderazgo y el gobierno.', color: '#572aa8', dark: '#3d1c80' },
];

const UNITS = [];

const LEVELS = [
  { xp: 0, name: 'Aprendiz de negocio', icon: '🌱' },
  { xp: 100, name: 'Analista', icon: '🔎' },
  { xp: 300, name: 'Estratega', icon: '♟️' },
  { xp: 700, name: 'Gerenta de marketing', icon: '📈' },
  { xp: 1200, name: 'Directora de marketing', icon: '🧭' },
  { xp: 2000, name: 'Directora estratégica', icon: '🏛️' },
  { xp: 3200, name: 'Fractional CMO', icon: '🦒' },
];

const DAILY_GOALS = [
  { xp: 20, name: 'Tranqui' },
  { xp: 40, name: 'Regular' },
  { xp: 60, name: 'Seria' },
  { xp: 100, name: 'Intensa' },
];

/* Cada logro recibe un resumen del estado (s) y devuelve true si está desbloqueado. */
const ACHIEVEMENTS = [
  { id: 'first', icon: '🎓', name: 'Primer paso', desc: 'Completá tu primera lección.', test: (s) => s.lessonsDone >= 1 },
  { id: 'perfect', icon: '💯', name: 'Sin errores', desc: 'Terminá una lección sin equivocarte.', test: (s) => s.perfects >= 1 },
  { id: 'perfect5', icon: '🎯', name: 'Precisión', desc: '5 lecciones perfectas.', test: (s) => s.perfects >= 5 },
  { id: 'streak3', icon: '🔥', name: 'En racha', desc: '3 días seguidos.', test: (s) => s.bestStreak >= 3 },
  { id: 'streak7', icon: '🔥', name: 'Semana completa', desc: '7 días seguidos.', test: (s) => s.bestStreak >= 7 },
  { id: 'streak30', icon: '🌋', name: 'Hábito', desc: '30 días seguidos.', test: (s) => s.bestStreak >= 30 },
  { id: 'xp100', icon: '⚡', name: '100 XP', desc: 'Sumá 100 XP.', test: (s) => s.xp >= 100 },
  { id: 'xp500', icon: '⚡', name: '500 XP', desc: 'Sumá 500 XP.', test: (s) => s.xp >= 500 },
  { id: 'xp1000', icon: '🌟', name: '1.000 XP', desc: 'Sumá 1.000 XP.', test: (s) => s.xp >= 1000 },
  { id: 'unit1', icon: '🏅', name: 'Primer módulo', desc: 'Completá todas las lecciones de un módulo.', test: (s) => s.unitsDone >= 1 },
  { id: 'boss', icon: '🏆', name: 'Desafío superado', desc: 'Completá un desafío de módulo.', test: (s) => s.challenges >= 1 },
  { id: 'lab', icon: '🧪', name: 'Manos a la obra', desc: 'Completá un laboratorio.', test: (s) => s.labsDone >= 1 },
  { id: 'note', icon: '🧠', name: 'Segundo cerebro', desc: 'Guardá tu primera nota.', test: (s) => s.notes >= 1 },
  { id: 'notes10', icon: '📚', name: 'Biblioteca', desc: 'Guardá 10 notas.', test: (s) => s.notes >= 10 },
  { id: 'practice', icon: '🔁', name: 'Repaso', desc: 'Completá una práctica.', test: (s) => s.practices >= 1 },
  { id: 'half', icon: '🧗', name: 'Mitad del camino', desc: 'Completá 6 módulos.', test: (s) => s.unitsDone >= 6 },
  { id: 'grad', icon: '🦒', name: 'Fractional CMO', desc: 'Completá los 12 módulos.', test: (s) => s.unitsDone >= 12 },
];
