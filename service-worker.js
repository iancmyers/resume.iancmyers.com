self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

workbox.setConfig({ debug: false });
workbox.googleAnalytics.initialize();

workbox.core.setCacheNameDetails({
  prefix: 'resume',
  suffix: 'v2'
});

workbox.routing.registerRoute(
  /\/$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'root-html',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60 // 1 Week
      })
    ]
  })
);

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'googleapis'
  })
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images'
  })
);

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'static-resources'
  })
);
