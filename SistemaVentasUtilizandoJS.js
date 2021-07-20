class producto{
    static contadorProducto = 0;
    constructor(nombre,precio){
        this._producto = ++producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    get IdProducto(){
        return this._producto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre (nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    ToString(){
        return `idProducto: ${this.IdProducto} \n nombre: ${this._nombre} \n precio: $${this._precio}`;
    }
}

class orden{
    static contadorOrdenes = 0;

    static get Max_Productos(){
        return 5;
    }

    constructor(){
        this._idOrden = ++orden.contadorOrdenes;
        this._productos = [];
        this.contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    AgregarProductos(producto){

        if(this._productos.length < orden.Max_Productos){
            this._productos.push(producto);
            //this._productos(this.contadorProductosAgregados++) = producto;
        }
        else{
            console.log("No se han agregado mas productos");
        }
    }

    CalcularTotal(){
        let totalventa = 0;

        for (let producto of this._productos){
            totalventa += producto._precio;
        }

        return totalventa;
    }

    MostrarOrden(){

        let productosOrden = "";

        for (let producto of this._productos){

            productosOrden += '\n{' + producto.ToString() + "} \n";
        }

        console.log(`Orden: ${this._idOrden} \n Total: $${this.CalcularTotal()} \n Productos: ${productosOrden} \n`);

    }
}






let producto1 = new producto("Pantalon",200);
let producto2 = new producto("Pantalon",100);

let orden1 = new orden();
orden1.AgregarProductos(producto1);
orden1.AgregarProductos(producto2);

orden1.MostrarOrden();


let orden2 = new orden();
let producto3 = new producto("calcetas",300);
orden2.AgregarProductos(producto3);
orden2.AgregarProductos(producto2);
orden2.AgregarProductos(producto1);

orden2.MostrarOrden();