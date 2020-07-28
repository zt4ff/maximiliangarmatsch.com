/* eslint-disable no-undef */
importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js'
);

/* eslint-disable no-restricted-globals */
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event =>
    event.waitUntil(self.clients.claim())
);

/* eslint-disable no-undef */
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin('queue', {
    maxRetentionTime: 24 * 60, // Retry for max of 24 Hours
});

workbox.routing.registerRoute(
    ({ url }) => url.href.includes('yandex'),
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin],
    }),
    'POST'
);

workbox.routing.registerRoute(
    ({ url }) => url.href.includes('yandex'),
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin],
    }),
    'GET'
);

workbox.routing.registerRoute(
    ({ url }) => url.href.includes('google-analytics'),
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin],
    }),
    'GET'
);

workbox.routing.registerRoute(
    ({ url }) => url.href.includes('google-analytics'),
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin],
    }),
    'POST'
);

workbox.routing.registerRoute(
    ({ url }) => url.href.includes('fonts.googleapis'),
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin],
    }),
    'GET'
);

workbox.routing.registerRoute(
    ({ url }) => url.href.includes('fonts.gstatic'),
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin],
    }),
    'GET'
);
