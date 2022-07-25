const {promises: fs} = require('fs');


class Contenedor {
    constructor(ruta) {
        this.ruta = ruta;
    }



    async save(obj){
        try { 
            let inProducts = await fs.readFile(this.ruta, 'utf8');

            if(inProducts.lenght == 0){
                obj.id = 1;
                const arrayObj = [obj];
                const objeto = JSON.stringify(arrayObj);

                await fs.appendFile(this.ruta, objeto);
            } 
            else{
                const prodObj = JSON.parse(inProducts);
                let arrayLength = prodObj.length;
                obj.id = arrayLength + 1;
                prodsObj.push(obj);
                const objeto = JSON.stringify(prodObj);

                await fs.writeFile(this.ruta, objeto);
            }
            return console.log(`id : ${obj.id}`);
            
        } catch (error) {
            console.log(error);
        }
    }

    
    async getById(id){
        const products = await this.getAll();
        const productById = products.find(p => p.id === id);
        return productById;
    }

    
    async getAll(obj){
        try {
            const products = await fs.readFile(this.ruta, 'utf8');
            return JSON.parse(products);

        } catch (error) {
            return [];
        }
    }

    
    async deleteById(id){
        const products = await this.getAll();

        const newProducts = products.filter(prod => prod.id !== id);
        newProducts.forEach(prod =>{
            if (prod.id > id){
                prod.id --;
            }
        });
        // console.log()
        await fs.writeFile(this.ruta, JSON.stringify(newProducts));
    }

    
    async deleteAll(){
        const array = [];
        await fs.writeFile(this.ruta, array);
    }

}




module.exports = Contenedor;