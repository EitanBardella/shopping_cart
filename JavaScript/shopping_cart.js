//Variable del carrito
let cart = []

//1ero Recorrer el array para que se muestren los objetos
//Crear el div contenedor y sus elementos (productos) a partir de una variable 
//innerHTML permite agregar etiquetas dentro del div
const shopContent = document.getElementById("shop_content"); //Como seria con querySelector

products.forEach((producto) => {
    let content = document.createElement("div")
    content.innerHTML =`
    <img scr="${producto.img}" >
    <h3>"${producto.name}"</h3>
    <p>Precio: ${producto.price} $</p>
    `;
    
    shopContent.append(content)
});
