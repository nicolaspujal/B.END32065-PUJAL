const express = require('express');
const { response } = require('express');
const { Router } = express;
const app = express();



//para usar el html de /public
app.use(express.static('public'));

//routeo
const routerProductos = new Router();
routerProductos.use(express.json());
routerProductos.use(express.urlencoded({ extended: true }));

app.use('/api', routerProductos);


//server
const server = app.listen(8080, () => {
    console.log(`El servidor esta escuchando el puerto ${server.address().port}`)
});

// si hay error en server
server.on('error', error => console.log(`Error en el server : ${error}`));




routerProductos.get('/', (req,res)=>{
    res.send('<h1 style="color:blue;">/productos o /producto/:id </h1>')
});



//contenedor con los metodos
const Contenedor = require('./api/Contenedor.js');
const product = new Contenedor('./api/productos.txt');



//funcion productos

async function verProductos() {
    return await product.getAll();
};
routerProductos.get('/productos', async (req,res) =>{ 
     res.json(await verProductos());
});



//por id


async function productoID(id){
    return await product.getById(id);
};

routerProductos.get('/productos/:id' , async (req,res) =>{
    const { id } = req.params ;

    if(await productoId(id)) {
        res.json(await productoId(id));
        console.log(await productoId(id));
    } else {
        res.json({error});
    }
})



//post 

async function postProducto(prod) {
    return await product.save(prod)
}

routerProductos.post('/productos', async (req , res) =>{
    const producto =  req.body; 
    res.json(await postProducto(producto)); 
});



//funciones para el metodo delete

async function deleteProd(id){
    return await product.deleteById(id);
}

//
routerProductos.delete('/productos/:id', async(req,res)=>{
    const { id } = req.params;
    res.json(await deleteProd(parseInt(id))); //se llama al deleteById
});




// PUT

routerProductos.put('/productos/:id', async(req,res)=>{
    const { id } = req.params;
    const newProd = req.body;
    const producto = await productoID(id);
    const productos = await verProductos();
    const index = productos.findIndex(prod =>{  return prod.id == producto.id  });


    if(index>=0){

        productos[index] = newProd;
        newProd.id = producto.id;
        product.saveProduct(productos);
        res.send(`producto: ${JSON.stringify(producto)} Reemplazado por: ${JSON.stringify(newProd)}`);

    }else{res.sendStatus(400);}
});

//





