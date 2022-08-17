const express = require('express');
const app = express();


//set del directorio
app.set('views', './views');
//set engine
app.set('view engine', 'pug');



app.get('/hello', (req,res)=>{
    res.render('hello.pug', {
        mensaje: 'Usando pug js en express'
    });
});



app.listen(8080);