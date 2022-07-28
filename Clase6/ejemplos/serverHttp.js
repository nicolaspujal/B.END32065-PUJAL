const http = require('http');


const getMensaje= ()=>{
    let date = new Date().getHours();
    return date >= 6 && date <= 12 ? 'Buenos Dias' : (date >= 13 && date <= 19 ? 'Buenas Tardes' : 'Buenas Noches')
}


const server = http.createServer((peticion, respuesta)=>{
    respuesta.end(getMensaje())
    
})

const connectServer = server.listen(8080, ()=>{
    console.log(`server http escuchando en el puerto ${connectServer.address().port}`);
})