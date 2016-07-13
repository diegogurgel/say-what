import Posts from './posts.js';
import idb from '../../node_modules/idb/lib/idb.js';

function openDatabase(){
	if(!navigator.serviceWorker) return;

	return idb.open('say-what',1,function(upgrade){
		var store = upgrade.createObjectStore('messages',{
			keyPath:'id'
		});
	});
}
var postsArea = document.querySelector('main>section');
var posts = new Posts();
export default function Main(){
	var main = this;

	this._dbPromise = openDatabase();
	this._showCachedMessages().then(function(){
		if(io){
			var socket = io.connect('http://0.0.0.0:8080');
			socket.on('say',msg=>{
				main._saveMessage(msg);
				posts.createPost(postsArea,msg);
				posts.checkPostsVolume(postsArea);
			});
		}
	});
	this._registerSW();
}
Main.prototype._showCachedMessages = function(){
	return this._dbPromise.then(db=>{
		if(!db) return;
		var transaction = db.transaction('messages','readwrite');
		var store = transaction.objectStore('messages');
		return store.getAll().then(messages=>{

				messages.forEach(msg=>{
					posts.createPost(postsArea,msg);
					posts.checkPostsVolume(postsArea);		
				});
				postsArea.parentElement.scrollTop=0;
		})

	});
}


Main.prototype._saveMessage = function(message){
	this._dbPromise.then(db=>{
		var transaction = db.transaction('messages','readwrite');
		var store = transaction.objectStore('messages');
		store.put(message);
	});
}

Main.prototype._registerSW = function(){
	if(!navigator.serviceWorker) return;
	navigator.serviceWorker.register('/sw.js').then(function(reg) {
		
	});
}

