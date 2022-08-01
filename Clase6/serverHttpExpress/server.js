const express = require('express');
const { response } = require('express');
const app = express();

//server donde se abre el puerto
const server = app.listen(8080, () => {
    console.log(`El servidor esta escuchando el puerto ${server.address().port}`)
});


//si hay error se muestra en consola
server.on('error', error => console.log(`Error en el server : ${error}`));

app.get('/', (req , res) => {
    res.send('<h1 style="color:blue;">/productos o /productoRandom</h1>');
})

//imports
const Contenedor = require('./Contenedor.js'); //importar la class contenedor
const product = new Contenedor('./productos.txt');


//async function para ver productos
async function verProductos() {
    return await product.getAll();
};
app.get('/productos', async(req , res) => {
    res.send(await verProductos());
});


async function productoRandom() {
    //const de los productos
    const allProducts = await product.getAll(); 
    //seleccionar un producto random
    const random = allProducts[Math.floor(Math.random() * allProducts.length)];
    //retorna random
      return random ;
}

app.get('/productoRandom', async (req , res) => {
    res.send(await productoRandom());
});
