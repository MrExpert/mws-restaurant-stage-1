
const cacheName = 'restaurant-reviews-v4';

const cacheAssets = [
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/data/restaurants.json',
  ];

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches
      .open(cacheName)
      .then(function(cache) {
        return cache.addAll(cacheAssets);
      })
      .then(()=>self.skipWaiting())
    );
  });

self.addEventListener('acivate', event => {
  console.log('ServiceWorker: activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache =>{
          if(cache !== cacheName){
            console.log('ServiceWorker: Clearing old cache');
            return caches.delete(cache);
          }
        })
      )
    })
  )
})

// call Fetch event 
  self.addEventListener('fetch', event => {
    console.log('ServiceWorker: fetching');
    event.respondWith(
      fetch(event.request).catch(()=> caches.match(event.request))
 
    );
  });
  