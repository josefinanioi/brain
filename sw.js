/* brain — service worker.
   - Archivos versionados (?v=): de la caché al instante (nunca cambian para una misma versión).
   - Página principal: primero la red (con tiempo límite) para ver siempre la última versión; sin conexión, la guardada.
   - Resto (íconos, fuentes): caché al instante y actualización en segundo plano. */
const V = 'mvonfn2l';
const CACHE = 'brain-' + V;
const VERSIONED = ['css/styles.css', 'js/data.js', 'js/content/m01.js', 'js/content/m02.js', 'js/content/m03.js', 'js/content/m04.js', 'js/content/m05.js', 'js/content/m06.js', 'js/content/m07.js', 'js/content/m08.js', 'js/content/m09.js', 'js/content/m10.js', 'js/content/m11.js', 'js/content/m12.js', 'js/tools.js', 'js/app.js'].map((p) => p + '?v=' + V);
const SHELL = ['./', 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'fonts/nunito-latin.woff2', 'fonts/fredoka-600-latin.woff2', ...VERSIONED];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

const put = (req, res) => { if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); } return res; };

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  if (req.mode === 'navigate') {
    e.respondWith(new Promise((resolve) => {
      let done = false;
      const fallback = () => caches.match('./').then((r) => { if (!done) { done = true; resolve(r || Response.error()); } });
      const timer = setTimeout(fallback, 2500);
      fetch(req).then((res) => { clearTimeout(timer); put('./', res.clone()); if (!done) { done = true; resolve(res); } }).catch(() => { clearTimeout(timer); fallback(); });
    }));
    return;
  }

  if (url.searchParams.has('v')) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => put(req, res)).catch(() => caches.match(req, { ignoreSearch: true }))));
    return;
  }

  e.respondWith(caches.match(req).then((hit) => {
    const net = fetch(req).then((res) => put(req, res)).catch(() => hit);
    return hit || net;
  }));
});
