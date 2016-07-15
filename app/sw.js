var staticCacheName = 'say-what-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        'style/main.css',
        'style/post.css',
        'js/transp/all.js',
      ]);
    })
  );
});
self.addEventListener('fetch',function(event){
  const url = new URL(event.request.url);
  if(url.origin===location.origin && url.pathname==='/') {
    event.respondWith(caches.match('/index.html').catch(()=>{
      console.log(':(');
    }));
    return
  }
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
    })
  );
});