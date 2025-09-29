const express = require("express");

const { join } = require("path");

const http = require("http");

const app = express();

const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected with socket id:", socket.id);

  socket.on("chat message", (msg) => {
    console.log("message: " + msg);

    io.emit("send_messages_to_all_users", msg);
  });

  socket.on("typing", () => {
    socket.broadcast.emit("show_typing_status");
  });

  socket.on("stop_typing", () => {
    socket.broadcast.emit("clear_typing_status");
  });

  socket.on("disconnect", () => {
    console.log("Left chat with socket id:", socket.id);
  });
});

/*
** emit => publish to an event using emit('eventName', data).

** on => listen to event using .on('eventName', callback).
*/

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
