const express = require('express');
const app = express();
const PORT = 8080;



//json

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//engine
app.set('views', './views');
app.set('view engine', 'ejs');

//productos
const Container = require('../../../api/productos');
const products = new Container('../../resources/products.txt');


//get - post

app.get('/', (req,res)=>{
    res.render('inicio', {});
});

app.post('/productos', async(req,res)=>{
    let product = req.body;

    if(product){
        await products.saveProduct(product);
        console.log(`Se guardo: ${JSON.stringify(product)}`);
        res.redirect('/');
    }else{res.sendStatus(400)}
});

app.get('/productos', async(req,res)=>{
    const productos = await products.getAll();
    res.render('productos', {productos});
});




//server
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on('error', error => console.log(`Error en servidor ${error}`));