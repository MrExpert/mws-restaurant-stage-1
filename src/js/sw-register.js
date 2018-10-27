
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('sw.js')
          .then(reg => console.log('ServiceWorker: registered!'))
              .catch(err => console.log(`ServiceWorker: Error: ${err}`))
        });
      }
        