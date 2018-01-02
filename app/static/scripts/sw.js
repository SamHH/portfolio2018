/* eslint-disable no-restricted-globals */

// Increment this value to force a clear and re-fetch of the cache via usual
// service worker processes. Caches key expects a string
const CACHE_VERSION = '1';

const assetsToCache = [
	'/',
	'/static/styles/main.css',
	'/static/scripts/app.js',
	'/static/scripts/modules/offline.js',
	'/static/scripts/modules/theme.js',
];

// Define which assets to cache
self.addEventListener('install', (evt) => {
	evt.waitUntil(caches.open(CACHE_VERSION)
		.then(cache => cache.addAll(assetsToCache)));
});

// Wipe old caches
self.addEventListener('activate', (evt) => {
	evt.waitUntil(caches.keys()
		.then(keys => Promise.all(keys.reduce((delProms, key) => {
			if (key !== CACHE_VERSION) return [...delProms, caches.delete(key)];

			return delProms;
		}, []))));
});

// Use cached assets by default
self.addEventListener('fetch', (evt) => {
	evt.respondWith(caches.match(evt.request)
		.then(res => res || fetch(evt.request)));
});
