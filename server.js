
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const path = require("path");
const PORT = process.env.port || 8080;

app.use("/", express.static(path.join(__dirname, "client")));

server.listen(PORT, () => {
	console.log(`Started server, listening on port ${PORT}`);
});

io.on("connection", (socket) => {
	console.log(`Socket connected ${socket.id}`);
	socket.on("me", (data) => {
		if (data == "app") {
			app_socket(socket);
			socket.emit("notif", "Hello");
		} else if (data == "web") {
			web_socket(socket);
		}
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
