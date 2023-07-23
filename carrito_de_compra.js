// Array de Objetos (Productos)
const productos = [
    { name: "Lampara de escritorio", price: 2000 },
    { name: "Araña antigua", price: 2500 },
    { name: "Escritorio en L", price: 3000 },
    { name: "Mesa ratona", price: 3500 }
];

// Variable carrito
let cart = [];

// Pregunta principal para iniciar el bucle
let selection = prompt("Bienvenido a Empresas. ¿Desea comprar algún producto? Si o No");

// Bucle con while para el correcto ingreso de la respuesta para comenzar el bucle
while (selection !== "Si" && selection !== "No") {
    alert("Respuesta no procesada, por favor ingrese Si o No");
    selection = prompt("¿Desea comprar algún producto? Si o No");
}

// Bucle con if una vez obtenida la respuesta del bucle con while, usamos map() para mostrar una lista de los productos uno por uno, usando el método join para recorrer el array
if (selection === "Si") {
    alert("Estos son nuestros productos");
    let allProduct = productos.map((producto) => producto.name + " " + producto.price);
    alert(allProduct.join(" - "));
} else if (selection === "No") {
    alert("Gracias por la atención, vuelva pronto");
}

// Bucle para seleccionar productos con while, y modificación del precio dependiendo del producto y las unidades, e ingresarlo al array del carrito
while (selection !== "No") {
    let product = prompt("Inserte productos a su carrito");
    let price = 0;

    if (product === "Lampara de escritorio" || product === "Araña antigua" || product === "Escritorio en L" || product === "Mesa ratona") {
        switch (product) {
            case "Lampara de escritorio":
                price = 2000;
                break;
            case "Araña antigua":
                price = 2500;
                break;
            case "Escritorio en L":
                price = 3000;
                break;
            case "Mesa ratona":
                price = 3500;
                break;
            default:
                break;
        }
        let unit = parseInt(prompt("Ingrese las unidades deseadas"));
        cart.push({ product, unit, price });
        console.log(cart);
    } else {
        alert("Producto no disponible");
    }

    // Interacción con el carrito
    selection = prompt("¿Desea seguir comprando? Si o No");

    if (selection === "No") {
        alert("Gracias por su compra");
        cart.forEach((finalCart) => console.log("Este es su carrito - Productos: " + finalCart.product + " - Unidades: " + finalCart.unit + " - Total a pagar: " + finalCart.unit * finalCart.price));
        break;
    }
}
//acc=acumulador de precio, el = representa los elementos del arreglo
const total = cart.reduce((acc, el) => acc + el.price * el.unit, acc = 0)
alert("El total a pagar por su compra es de: " + total)


