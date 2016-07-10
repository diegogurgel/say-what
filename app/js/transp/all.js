(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _mainController = require('./mainController');

var _mainController2 = _interopRequireDefault(_mainController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _mainController2.default();

},{"./mainController":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Main;

var _posts = require('./posts.js');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Main() {
	var posts = new _posts2.default();
	var postsArea = document.querySelector('main>section');
	var socket = io.connect('http://0.0.0.0:8080');
	socket.on('say', function (msg) {
		posts.createPost(postsArea, msg);
		posts.checkPostsVolume(postsArea);
	});
	this._registerSW();
}
Main.prototype._registerSW = function () {
	if (!navigator.serviceWorker) return;
	navigator.serviceWorker.register('/sw.js').then(function (reg) {});
};

},{"./posts.js":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Posts;
function Posts() {}
Posts.prototype.createPost = function (postsArea, post) {
	var article = document.createElement('article');
	article.className = 'post elevation-1';
	article.innerHTML = '<img src="/images/avatar/' + post.avatar + '" alt="" class="avatar" />' + '<div class="text">' + '<h1 class="post-title">' + post.user + '</h1>' + '<p>' + post.phrases + '</p></div>';
	postsArea.insertBefore(article, postsArea.firstChild);
	postsArea.parentElement.scrollTop += article.getBoundingClientRect().height + 16;
};
Posts.prototype.checkPostsVolume = function (postsArea) {
	var postsQuantity = postsArea.querySelectorAll('.post').length;
	if (postsQuantity > 10) {
		postsArea.lastElementChild.remove();
	}
};

},{}]},{},[1]);
