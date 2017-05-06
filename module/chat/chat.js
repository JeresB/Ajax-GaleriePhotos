var websocket;

function createWebSocket() {
  websocket = new WebSocket('ws://172.17.5.43:10000');

  var textarea = document.getElementById('chat-room');

  websocket.onmessage = function (event) {
    textarea.value += event.data;
    textarea.value += "\n";
  }

  textarea.scrollTop = textarea.scrollHeight;

  $("#chat-send").click(function (event) {
    var message = $("#chat-message").val();
    websocket.send(message);
    $("#chat-message").val('');
  });
}

createWebSocket();
