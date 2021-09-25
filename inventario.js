
export default class Inventario{
    constructor(){
        this._inv = new Array();
    }

    prueba(){
        return this._inv;
    }

    añadir(producto){
        let pos = this._encontrarProd(producto);

        if(pos == false){
            this._inv[producto.getCod() - 1] = (producto);
            console.log(this._inv)
            return true;  
        }
        console.log(this._inv.length);
        return false;  
    }

    eliminar(code){
        let pos = null;

        this._inv.forEach((element, i) => {
            if (element != null || element != undefined) {
                if (element.getCod() === code) {

                    this._inv[i] = null;

                    this.actualizarHtml();
                    pos = false
                    return;
                }
            }
        });
        return pos;

    }

    buscar(code){
        let pos = null;

        this._inv.forEach((element, i) => {
            if (element != null || element != undefined) {
                if (element.getCod() === code) {

                    

                    this._inv[i];

                    this.actualizarHtmlB(code, true);
                    console.log(this._inv[i]);
                    pos = true;
                    return;
                }
            }
        });
        if (pos != true) {
            this.actualizarHtmlB(code, false);
        }
        return pos;
    }
    
    

    _encontrarProd(productos){
        let pos = false;
        this._inv.forEach((element, i) => {
            if (element != null || element != undefined) {
                if(element.getCod() > productos.getCod()){
                    
                }
                if (element.getCod() === productos.getCod()) {

                    pos = true;
                    return;
                }
            }
        });
        return pos;
        
    }
    

    actualizarHtml() {
        
        let textoParaInsertar;
        let localizarHtml;

        // Borrar Listado - (Evitar Repetidos)
        const array = document.getElementsByClassName('productosListados');
        while(array.length > 0){
            array[0].parentNode.removeChild(array[0]);
        }

        this._inv.forEach(element => {
            if (element != undefined || element != null) {

                //Agregar Listado - En forma de DIV
                textoParaInsertar = document.createElement( 'div' );
                textoParaInsertar.classList.add("productosListados");

                textoParaInsertar.innerHTML = `Codigo: ${element.getCod()} - Nombre: ${element.getName()} - Cantidad: ${element.getCan()} - Precio: $${element.getCos()} - Total: $${element.getTotal()}`;
                 
                localizarHtml = document.getElementById('productosHtml');
                localizarHtml.appendChild(textoParaInsertar);

            }
        })
        return;
    }

    actualizarHtmlB(id, trueFalse) {
        
        let textoParaInsertar;
        let localizarHtml;
        let texto;

                if (trueFalse === true) {
                    texto = 'fue encontrado'
                } else {
                    texto = 'NO fue encontrado'
                }

                //Agregar Listado - En forma de DIV
                textoParaInsertar = document.createElement( 'div' );
                textoParaInsertar.innerHTML = `Se busco el ID: ${id} y ${texto}`;
                 
                localizarHtml = document.getElementById('buscar');
                localizarHtml.appendChild(textoParaInsertar);
        return;
    }


    actualizarHtmlInverso() {
        
        let textoParaInsertar;
        let localizarHtml;

        // Borrar Listado - (Evitar Repetidos)
        const array = document.getElementsByClassName('productosListados');
        while(array.length > 0){
            array[0].parentNode.removeChild(array[0]);
        }

        this._inv.forEach(element => {
            if (element != undefined || element != null) {

                //Agregar Listado - En forma de DIV
                textoParaInsertar = document.createElement( 'div' );
                textoParaInsertar.classList.add("productosListados");

                textoParaInsertar.innerHTML = `Codigo: ${element.getCod()} - Nombre: ${element.getName()} - Peso: ${element.getCan()} - Precio: $${element.getCos()} - Total: $${element.getTotal()}`;
                 
                localizarHtml = document.getElementById('productosHtml');
                localizarHtml.prepend(textoParaInsertar);

            }
        })
        return;
    }
    


}