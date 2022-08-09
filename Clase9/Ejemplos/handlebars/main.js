const express = require('express');
const handlebars = require('handlebars');
const app = express();

app.engine('hbs',handlebars({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials' 
    })
);

app.set('view engine', 'hbs');
app.set('views', './views');

fakeApi = ()=>[
    { name: 'Katarina', lane: 'Midlaner' },
    { name: 'Jayce', lane: 'Toplaner' },
    { name: 'Senna', lane: 'Botlaner' },
    { name: 'Lucian', lane: 'Botlaner' },

];

app.get('/', (req,res)=>{
    app.render('main', { suggestedChamps: fakeApi(), listExists: true });
})


// server
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on('error', error => console.log(`Error en servidor ${error}`));