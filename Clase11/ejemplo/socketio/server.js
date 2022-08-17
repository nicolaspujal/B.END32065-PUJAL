const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('public'));


const mensajes = [];

io.on('connection', socket=>{
    console.log('Nueva conexion');

    socket.emit('message', mensajes);

    socket.on('message', data=>{
        mensajes.push({socketid: socket.id, message: data});

        io.sockets.emit('message', mensajes);
    });

});











//server
const port = 8080;
const connectedServer = httpServer.listen(port, ()=>{
    console.log(`Server running en ${port}`);
})

connectedServer.on('error', error=>{console.log(`error en servidor ${error}`)});