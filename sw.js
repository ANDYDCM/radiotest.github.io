self.addEventListener("install", (e) => {
  console.log("Instalando Service Worker...");
  e.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (e) => {
  console.log("Service Worker activado.");
  e.waitUntil(self.clients.claim());
});
