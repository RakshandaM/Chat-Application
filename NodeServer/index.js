//Node server which will handle socket io connections.

const io = require('socket.io')(8000) //Server (listen incoming event)

const user = {};

io.on ('connection' , socket =>{            //Listen all the new user connection
    socket.on ('new-user-joined' , name =>{ 
        console.log ("New user" , Uname );      //user join
        user[socket.id]=name;                 //When you get user call socket.om
        socket.broadcast.emit('user-joined' , name); //broadcast.emit (New user has joined the chat {excluding him})    
    });

    //Send Message
    socket.on('send' , message =>{
        socket.broadcast.emit('receive', {message:message ,name: user[socket.id]})  //receive the message     
    });

})

