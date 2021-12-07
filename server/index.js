const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
 
const workspace = io.of("/radar")

setInterval(() => {
  const data = Array.from({ length: 50 }).map(() => ({
    pos: {
      x: Math.round(Math.random() * 400),
      y: Math.round(Math.random() * 400),
    },
    heading: Math.round(Math.random() * 360),
  }));
  workspace.emit("data", data);
}, 32);

server.listen(5000, () => {
  console.log("listening on *:5000");
});
