/* Service worker شفاخانه رهنورد — برای کار کردن بدون اینترنت
   اگر ساختار را تغییر دادید، شماره VERSION را بالا ببرید */
const VERSION = "rw-v4";
const CORE = ["./", "index.html", "data.js", "health-diseases.js", "health-diet.js", "health-diet-i18n.js", "health-sexual.js", "hospital-profile.js", "logo.png", "building.jpg", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // فونت و تلگرام: بدون تغییر

  // فایل‌های صوتی: مستقیم از شبکه (موبایل/Safari درخواست Range می‌فرستد؛ کش آن را خراب می‌کند)
  if (/\.(mp3|m4a|aac|ogg|wav)$/i.test(url.pathname) || req.headers.has("range")) return;

  const isCode = req.mode === "navigate" || /\.(html|js|webmanifest)$/.test(url.pathname) || url.pathname.endsWith("/");
  if (isCode) {
    // اول اینترنت (تا تغییرات data.js فوراً بیاید)، اگر نبود کش
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then((r) => r || caches.match("index.html")))
    );
  } else {
    // عکس‌ها: اول کش
    e.respondWith(
      caches.match(req).then((r) => r || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put(req, copy));
        return res;
      }))
    );
  }
});
