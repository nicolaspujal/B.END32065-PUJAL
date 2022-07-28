// const personas = [
//     { nombre: 'Juan', edad: 20 },
//     { nombre: 'Pedro', edad: 30 },
//     { nombre: 'Maria', edad: 40 },
// ];

// const mostrarPersonas = personas.map(persona => {
//     return `${persona.nombre} tiene ${persona.edad} años`;
// })

// console.log(mostrarPersonas);





//ejercicio 



//ejemplo 1




// const min = 1;
// const max = 20;
// const randCount = {};

// for (let i = 1; i < 21; i++) {
//   randCount[i] = 0;
// }

// for (let i = 0; i < 10000; i++) {
//   randCount[Math.floor(Math.random() * (max - min + 1) + min)]++;
// }
// console.log(randCount);




//ejemplo 2 del ejercicio





// const obj = {};
// for (let i = 0; i < 100; i++) {
//     let randomNumber = Math.ceil(Math.random() * 20);
//     if(obj[randomNumber]) {
//         obj[randomNumber]++ 
//     }else{ 
//         obj[randomNumber] = 1
//     } 
// }

// console.log(obj);






///// ejercicio 2

const productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 }
]


function getNombres(productos){

    const nombres = productos.map(producto => producto.nombre);

    return nombres.join(', ');

}

function getPrecioTotal(productos){
    let total = 0;
    for (const producto of productos){
        total += producto.precio;
    }
    return total;
}

function getPromedio(productos){
    return getPrecioTotal(productos) / productos.length;
}


function getMinPrice(productos) {
    if(productos.lenght === 0){
        throw new Error('No se puede calcular minimo de un arreglo vacio');
    }
    
    let min = productos[0].precio;
    let prod = productos[0];
    for (const producto of productos) {
        if(producto.precio < min){
            min = prod.precio;
            prod = producto;
        }
    }
    return prod;
}




function getMaxPrice(productos) {
    if(productos.lenght === 0){
        throw new Error('No se puede calcular max de un arreglo vacio');
    }
    
    let max = productos[0].precio;
    let prod = productos[0];
    for (const producto of productos) {
        if(producto.precio > max){
            max = prod.precio;
            prod = producto;
        }
    }
    return prod;
}

const info = {
    precioMaximo: getMaxPrice(productos),
    precioMinimo: getMinPrice(productos),
    productoNombre: getNombres(productos),
    promedio: getPromedio(productos)
};

console.log(info)



