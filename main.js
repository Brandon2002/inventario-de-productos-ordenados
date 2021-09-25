import Product from "./product.js";
import Inventario from "./inventario.js";

class App{
    constructor(){
        this._btnAdd = document.querySelector('#btnAdd');
        this._btnAdd.addEventListener('click', this.readForm);
        
        this._productos = new Inventario();
        
        this._btnE = document.querySelector('#btnE')
        this._btnE.addEventListener('click', this.readFormE);
        
        this._btnB = document.querySelector('#btnB')
        this._btnB.addEventListener('click', this.readFormB);
        
        this._btnR= document.querySelector('#btnR')
        this._btnR.addEventListener('click', this.readFormR);
        
        this._btnRI= document.querySelector('#btnRI')
        this._btnRI.addEventListener('click', this.readFormRI);

        this._countItems = 0;
        this._maxItems = 20;

    }

    readForm = () => {
        let producto = this._readForm();

        if(producto === false){
            Swal.fire('Espera', 'Aún no has terminado de llenar los campos', 'error');
            return;
        }

        if(this._countItems >= this._maxItems){
            Swal.fire('Error', 'Has alcanzado el número límite del inventario', 'error');
            return;
        } else {
            let n = this._productos.añadir(producto);
            if(n === false){
                Swal.fire('Error', 'Parece que este producto ya ha sido registrado', 'error');
                return;
            } else {
                Swal.fire('Correcto', 'Has llenado de forma correcta el inventario', 'success');
                this._countItems++;
                console.log(`Hay ${this._countItems} productos registrados`);
            }
        }

        

        this._productos.actualizarHtml();
        
    }

    readFormE = () =>{
        let producto = this._code();

        let p = this._productos.eliminar(producto);


        if(p === null){
            Swal.fire('Error', 'Este producto no existe en el inventario', 'error');
        } else {
            Swal.fire('Eliminado', 'Se ha eliminado exitosamente', 'success');
            this._countItems--;
            console.log(`Hay ${this._countItems} productos registrados`);
        }

        console.log(this._productos._inv);

    }

    readFormB = () => {
        let producto = this._buscar();
        let b = this._productos.buscar(producto);
        if(b === true){
            Swal.fire('Encontrado', 'Se ha encontrado el producto', 'success');
            
        }
        if(b === null){
            Swal.fire('Lo sentimos', 'No se ha encontrado el producto', 'error');
        }
        
    }

    readFormR = () => {
        this._productos.actualizarHtml();
    }

    readFormRI = () => {
        this._productos.actualizarHtmlInverso();
    }

    _readForm(){
        let labCod = document.querySelector('#code');
        let labName = document.querySelector('#name');
        let labCan = document.querySelector('#quantity');
        let labCos = document.querySelector('#cost');

        let code = Number(labCod.value);
        let name = labName.value;
        let cost = Number(labCos.value);
        let quantity = Number(labCan.value);
        
        

        if(code && name && cost && quantity){
            labCod.value = '';
            labName.value = '';
            labCos.value = '';
            labCan.value = '';

            let pr = new Product(code, name, quantity, cost);
            return pr;
        }
        return false;
    }
    _code(){
        let labCod = document.querySelector('#code');
        let code = Number(labCod.value);

        return code;
    }
    _buscar(){
        let labCod = document.querySelector('#code');
        let code = Number(labCod.value);
        return code;
    }
}
new App;