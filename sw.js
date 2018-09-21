
const cacheName = 'restaurant-reviews-v2';

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll([
          '/index.html',
          '/restaurant.html',
          '/css/styles.css',
          '/js/dbhelper.js',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/data/restaurants.json',
          ]);
      })
    );
  });

  self.addEventListener('fetch', event => {
    console.log(event.request.url);
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        return cachedResponse || fetch(event.request);
      })
    );
  });
  