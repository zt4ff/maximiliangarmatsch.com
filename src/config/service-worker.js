/* eslint-disable-line no-restricted-globals */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin('queue', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});

workbox.routing.registerRoute(
    ({ url }) => {
        return (url.origin.includes("yandex"));
    },
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin]
    }),
    'POST'
)

workbox.routing.registerRoute(
    ({ url }) => {
        return (url.origin.includes("google-analytics/r/collect"));
    },
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin]
    }),
    'GET'
)