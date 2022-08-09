const express = require('express');
const { promises: fs} = require('fs');
const app = express();


app.engine('ntl', async(filePath, options, callback)=>{
    try {
        const content = await fs.readFile(filePath);
        const rendered = content.toString().replace('#title#', '' + options.title + '')
            .replace('#message#', '' + options.message + '');

        return callback(null, rendered);    

    } catch (error) {
        return callback(new Error(error));
    }
});

app.set('views', './views');

app.set('view engine', 'ntl');


app.get('/', (req,res)=>{
    const datos = {
        title: 'Custom template',
        message: 'Custom template message'
    };

    res.render('index', datos);

});


// server
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on('error', error => console.log(`Error en servidor ${error}`));