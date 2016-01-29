var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
require('dotenv').load();

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
  socket.on('chat message', function(message){
    console.log(message);
    io.emit('chat message', message);
  });
});

app.get('/', function(request, response){
  response.render('index');
});

server.listen(process.env.PORT || 3000, function(){
  console.log('listening on localhost:3000');
});

