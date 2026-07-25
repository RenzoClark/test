/* Offline shell for the workshop inspection checklist.
   Bump CACHE_VERSION whenever app.js, styles.css or index.html change. */

const CACHE_PREFIX = "workshop-inspection-";
const CACHE_VERSION = `${CACHE_PREFIX}v22`;
const LEGACY_CACHE_PATTERN = /^inspection-v\d+$/;

const SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./shop-logo.png",
  "./icon-192.png",
  "./icon-512.png",
  "./manifest.webmanifest",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) =>
        cache.addAll(
          SHELL.map((url) => new Request(url, { cache: "reload" })),
        ),
      )
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (key) =>
                key !== CACHE_VERSION &&
                (key.startsWith(CACHE_PREFIX) ||
                  LEGACY_CACHE_PATTERN.test(key)),
            )
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // HTML: network first, so a deployed update is picked up straight away.
  if (request.mode === "navigate") {
    const cachePromise = caches.open(CACHE_VERSION);
    const networkPromise = fetch(request);

    event.waitUntil(
      Promise.all([cachePromise, networkPromise])
        .then(([cache, response]) => {
          if (!response.ok || response.type !== "basic") return undefined;
          return cache.put("./index.html", response.clone());
        })
        .catch(() => undefined),
    );

    event.respondWith(
      networkPromise
        .catch(() =>
          cachePromise
            .then((cache) =>
              cache.match("./index.html", { ignoreSearch: true }),
            )
            .then((cached) => cached || Response.error()),
        ),
    );
    return;
  }

  // Assets: serve from cache immediately, refresh in the background.
  const cachePromise = caches.open(CACHE_VERSION);
  const networkPromise = Promise.all([cachePromise, fetch(request)]).then(
    ([cache, response]) => {
      if (response.ok && response.type === "basic") {
        return cache.put(request, response.clone()).then(() => response);
      }
      return response;
    },
  );

  event.waitUntil(networkPromise.catch(() => undefined));
  event.respondWith(
    cachePromise
      .then((cache) => cache.match(request, { ignoreSearch: true }))
      .then((cached) => cached || networkPromise)
      .catch(() => Response.error()),
  );
});
