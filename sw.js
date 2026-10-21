/* Lets Puzzles open with no internet. Change VERSION whenever you upload a new index.html. */
const VERSION = 'puzzles-13';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Try the internet first so updates show up, and fall back to the saved copy when offline.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Only the app's own files and its font are kept for offline use; leaderboard data always comes fresh.
  const host = new URL(e.request.url).hostname;
  if (host !== location.hostname && !/(^|\.)(gstatic|googleapis)\.com$/.test(host)) return;
  e.respondWith(fetch(e.request).then(r => {
    const copy = r.clone();
    caches.open(VERSION).then(c => c.put(e.request, copy));
    return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
