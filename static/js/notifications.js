const socket = new WebSocket("ws://127.0.0.1:8000/ws/notifications/");

socket.onmessage = function (event) {
    const data = JSON.parse(event.data);
    console.log("Notification:", data.message);
};
