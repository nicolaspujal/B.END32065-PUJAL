// class Persona {
//     constructor(nombre, apellido, libros, mascotas) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.libros = libros;
//         this.mascotas = mascotas;
//     }

//     obtenerNombre() {
//         return this.nombre;
//     }

//     obtenerApellido() {
//         return this.apellido;
//     }

//     obtenerLibros() {
//         return this.libros;
//     }

//     obtenerMascotas() {
//         return this.mascotas;
//     }
// }

// const persona1 = new Persona('Nico', 'Pujal', ['nombre: Libro1, autor: Autor1','nombre: Libro2, autor: Autor2'], ['Mascota1','Mascota2']);
// const persona2 = new Persona('Lucas', 'Pujal', ['nombre: Libro3, autor: Autor3','nombre: Libro4, autor: Autor4'], ['Mascota1','Mascota2']);

// console.log(persona1.obtenerNombre());
// console.log(persona1.obtenerApellido());
// console.log(persona1.obtenerLibros());
// console.log(persona1.obtenerMascotas());


// console.log(persona2.obtenerNombre());
// console.log(persona2.obtenerApellido());
// console.log(persona2.obtenerLibros());
// console.log(persona2.obtenerMascotas());


// funcion flecha

// const mostrarFlecha = (param1, param2)=>{
//     console.log(`${param1} ${param2}`)
// };

// mostrarFlecha('hola','mundo')




//func de un solo param

// const funcionUnSoloParametro = param =>{
//     console.log(param)
// };

// funcionUnSoloParametro(90);




//func una sola linea de ejec

// const funcUnaSolaLinea = (num1, num2) =>{
//     return num1 * num2;
// };


// console.log(funcUnaSolaLinea(90,53));


///callback

// const ejecutar = unaFuncion => unaFuncion();

// const saludar = () => console.log('saludos')

// ejecutar(saludar);




// simulacion

// function escribirYLoguear(texto, callbackParaLoguear){
//     console.log(texto);
//     //cuando finalice ejecutamos callback
//     callbackParaLoguear('archivo procesado con exito');
// }

// escribirYLoguear('callbacks', (mensajeParaLoguear)=>{
//     const fecha = new Date().toLocaleDateString();
//     console.log(`${fecha}: ${mensajeParaLoguear}`)
// });



//promesa

// function dividir(dividendo, divisor){
//     return new Promise((res, rej)=>{
//         if (divisor === 0 ){
//             rej('no se puede dividir para cero');
//         }else{
//             res(dividendo/divisor);
//         }
//     });
// };

// dividir(10,5)
//     .then(resultado=>{
//         console.log(`resultado ${resultado}`);
//     })
//     .catch(error=>{
//         console.error(`error: ${error}`);
//     });