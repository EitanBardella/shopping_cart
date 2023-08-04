//Div del shop content
const shopContent = document.getElementById("shop_content") ;
//Ver Carrito
const verCarrito = document.getElementById("verCarrito");
//Modal
const modalContainer = document.getElementById("modal-container");
//Array del carrito
let carrito = [];
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
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
    });
});

verCarrito.addEventListener("click", () => {
    
    
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header">CARRITO</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
        console.log("modalButton")
    })
    modalHeader.append(modalButton);

    carrito.forEach((product) => {

        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src="${product.img}"/>
            <h3>${product.nombre}</h3>
            <p>${product.precio}$</p>
            `;

            modalContainer.append(carritoContent);
    })
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `TOTAL: ${total}$`;
    modalContainer.append(totalBuying);
    console.log(verCarrito)
});
