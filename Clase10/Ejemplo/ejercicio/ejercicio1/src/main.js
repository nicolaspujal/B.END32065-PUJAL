const express = require('express');
const app = express();


//set del directorio
app.set('views', './views');
//set engine
app.set('view engine', 'pug');



app.get('/datos', (req,res)=>{

    const params = req.query;

    res.render('nivel', params);
    
});



app.listen(8080);