
//Ver Carrito (Me conviene pasar esta variable a shopping_cart??)
const verCarrito = document.getElementById("verCarrito");
//Modal
const modalContainer = document.getElementById("modal-container");


const pintarCarrito = () =>{

    modalContainer.innerHTML = "";
    
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
    })
    modalHeader.append(modalButton);

    carrito.forEach((product) => {

        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src="${product.img}"/>
            <h3>${product.nombre}</h3>
            <p>${product.precio}$</p>
            <span class="restar"> - </span>
            <p>Cantidad: ${product.cantidad}</p>
            <span class="sumar"> + </span>
            <p>Total: ${product.cantidad * product.precio}</p>
            <span class="delete-produtc"> ❌ </span>
            `;

            modalContainer.append(carritoContent);

            let restar = carritoContent.querySelector(".restar");
            restar.addEventListener("click", () => {
                if(product.cantidad !== 1) {
                product.cantidad--;
                saveLocal();
                pintarCarrito();
                }
            })
            let sumar = carritoContent.querySelector(".sumar");
            sumar.addEventListener("click", () => {
                product.cantidad++;
                saveLocal();
                pintarCarrito();
            })

            let eliminar = carritoContent.querySelector(".delete-produtc");
            eliminar.addEventListener("click", () => {
                eliminarProducto(product.id);
            });
            // let eliminar = document.createElement("span");
            // eliminar.innerText = "❌";
            // eliminar.className = "delete-produtc";
            // carritoContent.append(eliminar);

            eliminar.addEventListener("click", eliminarProducto);
    })
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `TOTAL: ${total}$`;
    modalContainer.append(totalBuying);
    modalContainer.style.display = "block";


};


verCarrito.addEventListener("click", pintarCarrito);

//Funcion eliminar, find por id, filter prods del carrito que no coincidan con el id, para volver a hacer/pintar el carrito sin ese id

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) =>{
        return carritoId !== foundId;
    });
    saveLocal();
    pintarCarrito();
};