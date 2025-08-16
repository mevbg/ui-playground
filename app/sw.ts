// Type declaration for Workbox manifest
import { /*PrecacheFallbackPlugin,*/ precacheAndRoute } from 'workbox-precaching';
// import { offlineFallback } from 'workbox-recipes';

declare const self: ServiceWorkerGlobalScope & {
  __WB_MANIFEST: string[];
};

// Remove old cache
caches
  .keys()
  .then((cacheNames) => Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName))));

precacheAndRoute(self.__WB_MANIFEST);

// const cacheStrategyGenerator = ({ urlPattern, cacheName }) =>
//   registerRoute(
//     ({ request }) => urlPattern.test(request.url),
//     new StaleWhileRevalidate({
//       cacheName,
//       ...(['lexeme-requests', 'lexeme-pages'].includes(cacheName)
//         ? {
//             // plugins: [
//             //   new PrecacheFallbackPlugin({
//             //     fallbackURL: '/offline'
//             //   })
//             // ]
//           }
//         : {}),
//       plugins: [
//         new ExpirationPlugin({
//           maxEntries: 350,
//           maxAgeSeconds: 7 * 24 * 60 * 60 // 1 week
//         }),
//         new CacheableResponsePlugin({
//           statuses: [0, 200]
//         })
//       ]
//     })
//   );

// cacheStrategyGenerator({ urlPattern: /\/api\/search(.*)/, cacheName: 'search-requests' });

// offlineFallback({ pageFallback: '/offline' });
