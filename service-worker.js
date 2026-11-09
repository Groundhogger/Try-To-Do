const CACHE_NAME = "try-to-do-list-pwa-v31";
const APP_SHELL = [
  "./apple-touch-icon.png",
  "./apple-touch-icon-v5.png",
  "./icons/moss-home-icon-v5.png",
  "./icons/moss-home-icon-512-v5.png",
  "./icons/moss-home-icon-maskable-v5.png",
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/moss-home-icon-v4.png",
  "./icons/moss-home-icon-512-v4.png",
  "./icons/moss-home-icon-maskable-v4.png",
  "./icons/moss-home-apple-touch-v4.png",
  "./icons/icon-512.png",
  "./icons/icon-512-maskable.png",
  "./moss-form-1.webp",
  "./moss-form-2.webp",
  "./moss-form-3.webp",
  "./moss-form-4.webp",
  "./moss-form-5.webp",
  "./living-forest-scene.jpg",
  "./moss-breathing-scene-v1.jpg",
  "./forest-brook.jpg",
  "./forest-fern.jpg",
  "./forest-fireflies.jpg",
  "./forest-grove.jpg",
  "./forest-mushrooms.jpg",
  "./forest-stone-circle.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL).catch(() => Promise.resolve()))
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key.startsWith("try-to-do-list-pwa-") && key !== CACHE_NAME)
        .map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request, { cache: "no-store" }).then((response) => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", copy));
        }
        return response;
      }).catch(() => caches.match("./index.html").then((cached) => cached || caches.match("./")))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).then((response) => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
      }
      return response;
    }))
  );
});
