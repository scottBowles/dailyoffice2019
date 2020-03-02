'use strict';

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');


// This will trigger the importScripts() for workbox.strategies and its dependencies:
workbox.loadModule('workbox-strategies');

self.addEventListener('fetch', (event) => {
    const networkFirst = new workbox.strategies.NetworkFirst();
    console.log(event);
    event.respondWith(networkFirst.handle({request: event.request}));
});

// if (workbox) {
//   console.log(`Yay! Workbox is loaded 🎉`);
// } else {
//   console.log(`Boo! Workbox didn't load 😬`);
// }
//
// // CODELAB: Update cache names any time any of the cached files change.
// const CACHE_NAME = 'static-cache-v1';
//
//
// const FILES_TO_CACHE = [
//   '/offline.html',
// ];
//
// self.addEventListener('install', (evt) => {
//   console.log('[ServiceWorker] Install');
//   evt.waitUntil(
//         caches.open(CACHE_NAME).then((cache) => {
//           console.log('[ServiceWorker] Pre-caching offline page');
//           return cache.addAll(FILES_TO_CACHE);
//         })
//     );
//
//   self.skipWaiting();
// });
//
// self.addEventListener('activate', (evt) => {
//   console.log('[ServiceWorker] Activate');
//   // CODELAB: Remove previous cached data from disk.
//   evt.waitUntil(
//     caches.keys().then((keyList) => {
//       return Promise.all(keyList.map((key) => {
//         if (key !== CACHE_NAME) {
//           console.log('[ServiceWorker] Removing old cache', key);
//           return caches.delete(key);
//         }
//       }));
//     })
//   );
//   self.clients.claim();
// });
//
// self.addEventListener('fetch', (evt) => {
//   console.log('[ServiceWorker] Fetch', evt.request.url);
//   if (evt.request.mode !== 'navigate') {
//       // Not a page navigation, bail.
//       return;
//     }
//     evt.respondWith(
//         fetch(evt.request)
//             .catch(() => {
//               return caches.open(CACHE_NAME)
//                   .then((cache) => {
//                     return cache.match('offline.html');
//                   });
//             })
//     );
//
// });
