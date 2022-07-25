const { Console } = require('console');
const Contenedor = require('./contenedor.js');

async function main(){

    const product = new Contenedor('./productos.txt');
    

    //metodo getAll
    console.log('Muestro productos');
    let allProducts = await product.getAll();
    console.log(allProducts);


    //metodo getById
    const idToSearch = 1;
    let productById = await product.getById(idToSearch);
    console.log(productById);

    //metodo save
    const obj ={
        nombre: 'Producto nuevo',
        precio: '100'
    }
    await product.save(obj);

    //metodos delete
    // await product.deleteAll();
    // await product.deletebyId(1);

}

main();