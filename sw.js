// اسم النسخة المخزنة مؤقتاً
const CACHE_NAME = 'smarty-v1';

// الملفات التي تريد حفظها للعمل دون إنترنت
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/icon-192.png',
  '/icon-512.png'
];

// عند تثبيت الـ Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: تم التثبيت');
  // حفظ الملفات في الذاكرة المؤقتة
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: يتم تخزين الملفات');
        return cache.addAll(urlsToCache);
      })
  );
});

// عند تفعيل الـ Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: تم التفعيل');
  // حذف النسخ القديمة
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: حذف نسخة قديمة', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// عند طلب أي ملف من الموقع
self.addEventListener('fetch', event => {
  console.log('Service Worker: يتم جلب', event.request.url);
  // إما من الذاكرة المؤقتة أو من الإنترنت
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // وجدنا الملف في الذاكرة؟ نعطيه مباشرة
        if (response) {
          return response;
        }
        // لم نجده؟ نجلبه من الإنترنت
        return fetch(event.request);
      })
  );
});
