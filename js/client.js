const socket = io('http://localhost:8000');

const form = document.getElementsById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

const append = (message,position)=>{         //to add message
    const messageElement = document.createElement('div'); //div(box) chatbox
    messageElement.innerHTML=message; 
    message.classList.add('message')  //add message
    message.classList.add (position)
    messageContainer.append(messageElement);
}

//Send message (Eventlistner)
form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    append(`You : ${message}` , right)
    socket.emit('send' , message);
    messageInput.value=''
})


//User Joins
const name1 = prompt("Enter your name to join LetsChat") //user joined
socket.emit('new-user-joined', name1)

//listen to new user join
socket.on('user-joined' , data=>{
    append (`${name1} joined the chat` , 'right')
})  //anyone who joins the chats will display


//Receive a message
socket.on('receive' , data=>{
    append (`${data.name1}: ${data.message}` , 'left')
}) //when message is received