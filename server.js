
const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'client/index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

io.on('connection', (socket) => {
	console.log('Client connected');
	socket.on('disconnect', () => console.log('Client disconnected'));
	socket.on("me", (data) => {
		console.log(`is type ${data} socket`);
		if (data == "app") {
			app_socket(socket);
			socket.emit("notif", {notif: "Hello world"});
		} else if (data == "web") {
			web_socket(socket);
		}
	});
	socket.on("msg", (data) => {
		console.log(data);
	});
});

subscription_list = [];
notifs = [];

function app_socket(socket) {
	socket.on("notif_init", (last_notif_time) => {
		
	});
};

function web_socket(socket) {
	socket.on("notif", (notif) => {
		console.log(notif);
	});
};
