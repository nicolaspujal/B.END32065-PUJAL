const fs = require('fs');


fs.promises.readFile('info.txt', 'utf8')
    .then(contenido => {
        const info = JSON.parse(contenido);
        // console.log(info);

        //se selecciona el contenido del objeto para crear un autor nuevo
        const packageJsonObject = info.contenidoObj;
        packageJsonObject.author = 'CODER';
        console.log(packageJsonObject);

        //se crea un json con el objeto modificado
        fs.promises.writeFile('package.json.coder', JSON.stringify(packageJsonObject, null, 2))
            .then(() => {
                console.log('escritura exitosa');
            })
            .catch(error =>{
                console.log(error);
            })

    })
    
    .catch(error =>{
        console.log(error);
    })