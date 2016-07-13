var staticCacheName = 'say-what-v11';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/index.html ',
        'style/main.css',
        'style/post.css',
        'js/transp/all.js',
      ]);
    })
  );
});
self.addEventListener('fetch',function(event){
  var requestUrl = new URL(event.request.url);
  if(requestUrl.pathname.startsWith('/images')){
    return;
  }
	event.respondWith(
		caches.match(event.request).then(function(response){
			return response || fetch(event.request);
		})
	);
});