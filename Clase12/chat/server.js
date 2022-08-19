const express = require('express');
const { Server: HttpServer, Server } = require('http');
const { Server: IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('./public'));



const messages = [
    { author: 'Nico', text: 'Hola, Como estan?' },
    { author: 'Lucas', text: 'Bien y tu?' },
    { author: 'Ema', text: 'Hola!' }
];


io.on('connection', socket =>{
    console.log('Nuevo cliente conectado');
    //Evento para cargar el historial de mensajes cuando alguien se conecta
    socket.emit('messages', messages);
    
    socket.on('new-message', data =>{
        messages.push(data);
        //envia mensajes a todos los clientes que esten conectados en el momento (socket.on render del main y el push)
        io.sockets.emit('messages', messages);
    });
});








//server listen
const PORT = 8080;
httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


