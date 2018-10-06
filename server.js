//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const routes = require("./routes");
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')();
io.listen(server);

//Port
const PORT = process.env.PORT || 3001;

//Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Routing, both API and view
//app.use(routes(io));

//Mongo DB


//Socket.io
io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});