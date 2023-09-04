//Node server which will handle socket io connections.

const io = require('socket.io')(8000) //Server (listen incoming event)

const user = {};


io.on ('connection' , socket =>{            //Listen all the new user connection
    socket.on ('new-user-joined' , name1 =>{       //user join
        user[socket.id]=name1;                 //When you get user call socket.on
        socket.broadcast.emit('user-joined' , name1); //broadcast.emit (New user has joined the chat {excluding him})    
    });

    //Send Message
    socket.on('send' , message =>{
        socket.broadcast.emit('receive', {message:message ,name1: users[socket.id]})  //receive the message     
    });
})


