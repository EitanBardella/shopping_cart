//Div del shop content
const shopContent = document.getElementById("shop_content");

//Array del carrito
let carrito = JSON.parse(localStorage.getItem("totalCart")) || [];

//productos de la página
productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}"/>,
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio}$</p>
    `;

    shopContent.append(content)

    let comprar = document.createElement("button");
    comprar.innerText = "AGREGAR AL CARRITO";
    comprar.className = "comprar";

    content.append(comprar)
    comprar.addEventListener("click", () => {
        // Repetir => Aumentar la cantida del prod y que no este 2 veces
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id );
        
        if(repeat === true) {
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        }else {

        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
    }
        console.log(carrito);
        saveLocal();
    });
});



//Set item
const saveLocal = () => {
localStorage.setItem("totalCart", JSON.stringify(carrito));
};

//Get item

JSON.parse(localStorage.getItem("totalCart"))