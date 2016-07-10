import Posts from './posts.js';
export default function Main(){
	var posts = new Posts()
	var postsArea = document.querySelector('main>section');
	var socket = io.connect('http://0.0.0.0:8080');
	socket.on('say',msg=>{
		posts.createPost(postsArea,msg);
		posts.checkPostsVolume(postsArea);
	});
	this._registerSW();
}
Main.prototype._registerSW = function(){
	if(!navigator.serviceWorker) return;
	navigator.serviceWorker.register('/sw.js').then(function(reg) {
		
	});
}

