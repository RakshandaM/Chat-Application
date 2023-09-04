//Node server which will handle socket io connections.

const io = require('socket.io')(8000) //Server (listen incoming event)
const cors = require('cors'); // Require the 'cors' package

const user = {};

// Enable CORS for your server
io.use(cors());

io.on ('connection' , socket =>{            //Listen all the new user connection
    socket.on ('new-user-joined' , name =>{       //user join
        user[socket.id]=name;                 //When you get user call socket.on
        socket.broadcast.emit('user-joined' , name); //broadcast.emit (New user has joined the chat {excluding him})    
    });

    //Send Message
    socket.on('send' , message =>{
        socket.broadcast.emit('receive', {message:message ,uname: user[socket.id]})  //receive the message     
    });
})


