'use strict'
const Hapi = require('hapi');
const messages = require('./messages.js');

const server = new Hapi.Server()


server.connection({port:8080})

server.route({
	method:'GET',
	path:'/messages',
	handler:(equest,reply)=>{
		reply(messages.getRandom())
	}
});

let io = require('socket.io')(server.listener);

this._send = function() {
	setTimeout(()=>{
		io.volatile.emit('say', messages.getRandom());
		this._send();
	},20000);
}

io.on('connection',conn=>{
	this._send();
});




server.start(err=>{
	if(err){
		throw err
	}
	console.log('Running at', server.info.uri)
});