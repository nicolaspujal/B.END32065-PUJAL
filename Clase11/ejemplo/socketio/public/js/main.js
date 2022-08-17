const socket = io.connect();

const input = document.querySelector('input');



document.querySelector('button').addEventListener('click', ()=>{

    socket.emit('message', input.value);

});

//primera parte
// input.addEventListener('input', ()=>{
//     socket.emit('message', input.value);
// });

socket.on('message', msjs=>{
    const mensajesHTML = msjs.map(msj=>`SocketId: ${msj.socketid} -> Mensaje: ${msj.message}`).join('<br>');
    document.querySelector('p').innerHTML = mensajesHTML;
});