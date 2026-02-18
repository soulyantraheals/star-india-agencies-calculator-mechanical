const CACHE_NAME = 'mahindra-v1';
const ASSETS = ['./index.html', './manifest.json'];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

// Fetch logic
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});