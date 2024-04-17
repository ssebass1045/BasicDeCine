const CarritoCompra = require("../index");

describe("la clase CarritoCompra", () => {
    it("Debe calcular el total de una compra con un solo item", () => {
        const carrito = new CarritoCompra();
        carrito.agregarProducto({ nombre: "producto A", precio: 10 });
        expect(carrito.calcularTotal()).toEqual(10);
    });

    it("debe calcular el total de una compra con varios items", () => {
        const carrito = new CarritoCompra();
        carrito.agregarProducto({ nombre: "producto A", precio: 10 });
        carrito.agregarProducto({ nombre: "producto B", precio: 20 });
        carrito.agregarProducto({ nombre: "producto C", precio: 5 });
        expect(carrito.calcularTotal()).toEqual(35);
    });

    it("debe arrojar un error 'factura invalida' en caso de recibir un arreglo vacio", () => {
        const carrito = new CarritoCompra();
        expect(() => carrito.calcularTotal()).toThrowError("factura invalida");
    });

    it("debe aplicar un descuento correctamente al total de la compra", () => {
        const carrito = new CarritoCompra();
        carrito.agregarProducto({ nombre: "producto A", precio: 100 });
        carrito.agregarProducto({ nombre: "producto B", precio: 200 });
        carrito.agregarProducto({ nombre: "producto C", precio: 300 });
        // Aplicar un descuento del 10%
        const totalConDescuento = carrito.aplicarDescuento(10);
        // El total original es 600, el descuento del 10% sería 60, entonces el total debería ser 540.
        expect(totalConDescuento).toEqual(540);
    });
});
