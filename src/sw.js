
const cacheName = 'restaurant-reviews-v14';

const cacheAssets = [
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png'
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
  