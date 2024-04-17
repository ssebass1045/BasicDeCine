class CarritoCompra {
    constructor (){
        this.productos = [];
    }

    agregarProducto(producto){
        this.productos.push(producto);
    }

    calcularTotal(){
        if(this.productos.length === 0){
            throw new Error("factura invalida");
        }
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.precio;
        });
        return total;
    }

    aplicarDescuento(porcentaje){
        const total = this.calcularTotal();
        const descuento = (porcentaje / 100) * total;
        return total - descuento;
    }
}


module.exports = CarritoCompra;
