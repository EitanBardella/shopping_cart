
//Ver Carrito (Me conviene pasar esta variable a shopping_cart??)
const verCarrito = document.getElementById("verCarrito");
//Modal del carrito
const modalContainer = document.getElementById("modal-container");
//Modal de pago
const modalPay = document.getElementById("modal-pay");


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
                Toastify({
                    text: "Producto Eliminado",
                    duration: 3000,
                    destination: "",
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "linear-gradient(to right, #3185FC, #34E5FF)",
                    },
                    onClick: function(){} // Callback after click
                }).showToast();
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

    let pay = document.createElement("button");
    pay.className = "pay";
    pay.innerText = "FINALIZAR COMPRA";
    totalBuying.append(pay);

    pay.addEventListener("click", () => {
        const payHeader = document.createElement("div");
        payHeader.className = "pay-header";
        payHeader.innerHTML = `
        <h1 class="modal-header">PAGO</h1>
        `;
        modalPay.append(payHeader);
    
        payHeader.append(modalButton);
    } );


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