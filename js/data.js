/* Brain — definiciones base: fases, niveles, logros. El contenido de cada unidad está en js/content/. */

const PRINCIPLES = {
  rule: '¿Y esto qué significa para el negocio?',
  ruleNote: 'Cada vez que aparezca una métrica de marketing, hacete esta pregunta. Si no la podés responder, el análisis no terminó.',
  chain: ['Inversión', 'Adquisición', 'Pipeline', 'Ventas', 'Facturación', 'Margen', 'Resultado', 'Crecimiento'],
};

const PHASES = [
  { id: 'f1', name: 'Cómo gana plata una empresa', color: '#22a55b', dark: '#178244' },
  { id: 'f2', name: 'Del lead a la venta', color: '#2b8be6', dark: '#1d6bb8' },
  { id: 'f3', name: 'Palancas de valor', color: '#8a5cf0', dark: '#6b3fd1' },
  { id: 'f4', name: 'Dirigir', color: '#ee7b22', dark: '#c45f0e' },
];

const UNITS = [];

const LEVELS = [
  { xp: 0, name: 'Aprendiz de negocio', icon: '🌱' },
  { xp: 100, name: 'Analista', icon: '🔎' },
  { xp: 300, name: 'Estratega', icon: '♟️' },
  { xp: 700, name: 'Gerenta de marketing', icon: '📈' },
  { xp: 1200, name: 'Directora de marketing', icon: '🧭' },
  { xp: 2000, name: 'Fractional CMO', icon: '🦒' },
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
  { id: 'unit1', icon: '🏅', name: 'Primera unidad', desc: 'Completá todas las lecciones de una unidad.', test: (s) => s.unitsDone >= 1 },
  { id: 'boss', icon: '🏆', name: 'Desafío superado', desc: 'Completá un desafío de unidad.', test: (s) => s.challenges >= 1 },
  { id: 'lab', icon: '🧪', name: 'Manos a la obra', desc: 'Completá un laboratorio Durabox.', test: (s) => s.labsDone >= 1 },
  { id: 'note', icon: '🧠', name: 'Segundo cerebro', desc: 'Guardá tu primera nota.', test: (s) => s.notes >= 1 },
  { id: 'notes10', icon: '📚', name: 'Biblioteca', desc: 'Guardá 10 notas.', test: (s) => s.notes >= 10 },
  { id: 'practice', icon: '🔁', name: 'Repaso', desc: 'Completá una práctica.', test: (s) => s.practices >= 1 },
  { id: 'half', icon: '🧗', name: 'Mitad del camino', desc: 'Completá 6 unidades.', test: (s) => s.unitsDone >= 6 },
  { id: 'grad', icon: '🦒', name: 'Fractional CMO', desc: 'Completá las 12 unidades.', test: (s) => s.unitsDone >= 12 },
];
