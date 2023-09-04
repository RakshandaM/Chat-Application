const socket = io('http://localhost:8000');

const form = document.getElementsById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

//User Joins

const name1 = prompt("Enter your name to join LetsChat")
socket.emit('new-user-joined', name1)


