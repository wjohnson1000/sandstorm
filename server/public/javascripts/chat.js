
$(document).ready(function(){
  socket = io();
  var $message = $('#m');
  var $messages = $('#messages');
  var $send = $('button');
  $send.on('click', function(event){
    event.preventDefault();
    socket.emit('chat message', $message.val());
    $message.val('');
  }); 
  socket.on('chat message', function(message){
    $('<li>').appendTo($messages).text(message); 
  });
});

