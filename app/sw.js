var staticCacheName = 'say-what-v100';
var imageCache = 'say-what-images-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
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
    event.respondWith(serveProfileImage(event.request));
    return;
  }
	event.respondWith(
		caches.match(event.request).then(function(response){
			return response || fetch(event.request);
		})
	);
});
function serveProfileImage (request) {

  return caches.open(imageCache).then(cache=>{

    return cache.match(request.url).then(response=>{

      if (response) return response;

      return fetch(request).then(netResponse=>{

        cache.put(request.url,netResponse.clone());
        
        return netResponse;
      })

    })
  });
}