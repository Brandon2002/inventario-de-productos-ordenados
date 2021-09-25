export default class Product{
    constructor(codigo, nombre, cantidad, costo){
        this._codigo = codigo;
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._costo = costo;
    }

    getCod(){
        return this._codigo;
    }
    getName(){
        return this._nombre;
    }
    getCan(){
        return this._cantidad;
    }
    getCos(){
        return this._costo;
    }
    
    getTotal(){
        let tot = this._costo * this._cantidad;
        return Number(tot);
    }


    
}