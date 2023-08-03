//Variable del carrito
let cart = []

//Variable para ver el carrito
const showCart = document.getElementById("showCart")

//Variable para la pagina del carrito

const cart_content = document.getElementById("cart_content")

//1ero Recorrer el array para que se muestren los objetos
//Crear el div contenedor y sus elementos (productos) a partir de una variable 
//innerHTML permite agregar etiquetas dentro del div
const shopContent = document.getElementById("shop_content")  //Como seria con querySelector

products.forEach((producto) => {
    let content = document.createElement("div")
    content.className = "card";
    content.innerHTML =`
    <img src="${producto.img}"/>
    <h3>"${producto.name}"</h3>
    <p class="price">Precio: ${producto.price} $</p>
    `;
    
    shopContent.append(content)

    let buy = document.createElement("button")
    buy.innerText = "AGREGAR AL CARRITO" //Ya esta creado el HTML solo se le añade texto al boton
    buy.className = "comprar";

    content.append(buy);

    //Funcionalidad del boton para añadir elementos al carrito
    
    buy.addEventListener("click", () => {
        cart.push({
            id:producto.id,
            img:producto.img,
            name:producto.name,
            price:producto.price,
        })
    })
});

//Escuchador de cuando el usuario hace 1 click, y hacer una "paguina" para el carrito 

showCart.addEventListener("click", () => {
    cart_content.innerHTML= "";
    cart_content.style.display = "flex";
    const cartHeader = document.createElement("div")
    cartHeader.className = "cartHeader"
    cartHeader.innerHTML = `
    <h1>CARRITO</h1>`;

    cart_content.append(cartHeader);

    const cartButton = document.createElement("h1")
    cartButton.className = "cartButton"
    cartButton.innerText = "X"

    cartButton.addEventListener("click", () => {
        cart_content.style.display = "none";
    })
    
    cartHeader.append(cartButton)

    //Recorre el cart y va creando la pagina del carrito
    cart.forEach((producto) => {
        let cartContent = document.createElement("div")
        cartContent.className = "ContenidoCarrito"
        cartContent.innerHTML = `
        <img src="${producto.img}"/>
        <h3>"${producto.name}"</h3>
        <p class="price">Precio: ${producto.price} $</p>
        `;

        //Añadir productos a la pagina
        showCart.append(cartContent)
    })

    //Ver total (acc acumulador, el cada producto dentro del carrito)

    const total = cart.reduce((acc, el) => acc + el.price, acc = 0);

    const totalPrice = document.createElement("div")
    totalPrice.className = "totalPrice"
    totalPrice.innerHTML = `Total a pagar: ${total} $`;
    showCart.append(totalPrice)
});

