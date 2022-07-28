const express = require('express');

const app = express();


// otros metodos aparte de get: post, put(actualizar 'x'), delete(cuando el frontend quiere borrar 'x'), patch(similar al PUT peor menos), options(las opciones que le da el backend para frontend)
app.get("/", (req, res) => {
    res.send('<h1 style="color:blue">Bienvenidos al servidor express</h1>');
  });
  

let contador = 0;

app.get("/visitas", (req, res) => {
    res.send(`La cantidad de visitas es ${contador++}`);
  });
  


const date = new Date();
app.get("/fyh", (req, res) => {
  res.send(`la fecha del dia de hoy es ${date.toLocaleString()}`);
});



const server = app.listen(8080, ()=>{
    console.log(`servidor en el puerto ${server.address().port}`);
});


server.on('error', error => console.log(`Error en servidor ${error}`));


