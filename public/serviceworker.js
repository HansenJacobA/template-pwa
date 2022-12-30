const assets = [
  "/",
  "/app.webmanifest",
  "/icons/icon-512.png",
  "/favicon.ico",
  "/sw-register.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("assets")
      .then((cache) => {
        cache.addAll(assets);
      })
      .catch((error) => {
        console.error("Error adding assets in service worker ", error);
      })
  );
});

// Stale while revalidate strategy
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((cachedResponse) => {
        // Even if the response is in the cache, we fetch it
        // and update the cache for future usage
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            caches
              .open("assets")
              .then((cache) => {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
              })
              .catch((error) => {
                console.log(
                  "Error caching fetch response in service worker. ",
                  error
                );
              });
          })
          .catch((error) => {
            console.log(
              "Error dealing with receiving fetch response in service worker. ",
              error
            );
          });
        // We use the currently cached version if it's there
        return cachedResponse || fetchPromise; // cached or a network fetch
      })
      .catch((error) => {
        console.log(
          "You're probably offline. Error serving cache or fetch response in service worker. ",
          error
        );
      })
  );
});

// const assets = ["/"];

// self.addEventListener("install", async () => {
//   try {
//     const assetCache = await caches.open("assets");
//     await assetCache.addAll(assets);
//   } catch (error) {
//     console.error("Error adding assets to service worker ", error);
//   }
// });

// // Stale while revalidate strategy
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     (async () => {
//       try {
//         const cachedResponse = await caches.match(event.request);
//         const networkResponse = await fetch(event.request);
//         const cache = await caches.open("assets");
//         await cache.put(event.request, networkResponse.clone());

//         return cachedResponse || networkResponse;
//       } catch (error) {
//         console.error(
//           "Error either sending cached response or getting and sending a response in service worker ",
//           error
//         );
//       }
//     })()
//   );
// });
