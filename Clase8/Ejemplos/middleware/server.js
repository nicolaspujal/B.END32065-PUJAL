const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


//mdl1
function middleware1(req,res,next){
    if(req.query.rol == 'admin'){
        next();
    }else{
        res.status(500).send('no se puede acceder');
    }
}

//mdl2
function middleware2(req,res,next){
    req.miAporteMdl2 = 'dato asignado mdl2';
    next();
}


app.get('/ruta1',(req,res)=>{
    console.log('ruta1');
    res.send({});
});

app.get('/ruta2',(req,res)=>{
    try {
        console.log(variale);
        res.send({});
    } catch (error) {
        res.status(500).send('something broke jijo');
        
    }
});

//manejo de errores
app.use((err,req,res,next)=>{
    console.log('entra por manejo de err');
    console.error(err.stack); 
    res.status(500).send('algo hizo pupa');
});


// server
const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});

server.on('error', error => console.log(`Error en servidor ${error}`));