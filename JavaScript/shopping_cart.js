
//Ver Carrito (Me conviene pasar esta variable a shopping_cart??)
const verCarrito = document.getElementById("verCarrito");
//Modal del carrito
const modalContainer = document.getElementById("modal-container");
//Modal de pago
const modalPay = document.getElementById("modal-pay");

const sold = () => {
    //Funcion de que desaparesca el modal del carrito y aparesca el de finalizar compra

    modalContainer.style.display = "none";
    modalPay.innerHTML = "";
    modalPay.style.display = "block";

    //div del header del modal para finalizar compra
    const payHeader = document.createElement("div");
    payHeader.className = "modal-header"
    payHeader.innerHTML =`
    <h1 class="modal-header">FINALIZAR COMPRA</h1>
    `;
    modalPay.append(payHeader);

    const payButton = document.createElement("h1");
    payButton.innerText = "X";
    payButton.className = "pay-header-button";
    

    payButton.addEventListener("click", () => {
        modalPay.style.display = "none";
    })
    payHeader.append(payButton);

    //contenedor con la tarjeta de credito

    const creditCart = document.createElement("div");
    creditCart.className = "creditCart"
    modalPay.append(creditCart);
    const creditForm = document.createElement("form");
    creditForm.className = "creditForm"
    creditForm.innerHTML = `
    <h1>AGREGUE SU TARJETA</h1>
    <input class="credit-input">
    <br></br>
    <i class="fa-brands fa-cc-visa"></i>
    <i class="fa-brands fa-cc-amex"></i>
    <i class="fa-brands fa-cc-mastercard"></i>
    `;

    creditCart.append(creditForm);

    new Cleave(`.credit-input`,{
        creditCard: true,
        // delimiter: "-",
        onCreditCardTypeChanged: function (type){
            console.log(type);
            if(type === "visa"){
                document.querySelector(`.fa-cc-visa`).classList.add(`active`);
            } else {
                document.querySelector(`.fa-cc-visa`).classList.remove(`active`);
            }
            if(type === "mastercard"){
                document.querySelector(`.fa-cc-mastercard`).classList.add(`active`);
            } else {
                document.querySelector(`.fa-cc-mastercard`).classList.remove(`active`);
            }
            if(type === "amex"){
                document.querySelector(`.fa-cc-amex`).classList.add(`active`);
            } else {
                document.querySelector(`.fa-cc-amex`).classList.remove(`active`);
            }
        }
    });

//revisar cleave.js
    //footer con el boton de pagar y la sweet alert

    const payFooter = document.createElement("div");
    payFooter.className = "payFooter",
    modalPay.append(payFooter);

    const buy = document.createElement("button");
    buy.className = "buyButton",
    buy.innerText = "PAGAR",
    buy.addEventListener("click", () =>{
        Swal.fire({
            title: 'Estas seguro',
            text: "No hay reembolsos!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3F88C5',
            cancelButtonColor: '#D00000',
            confirmButtonText: 'Comprar',
            customClass: {
                container: 'custom-swal-container'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                modalPay.style.display = "none",
                Swal.fire({
                    title: 'Compra Exitosa!',
                    text: 'Su pago se ha realizado con éxito',
                    icon: 'success',
                    customClass: {
                        container: 'custom-swal-container'
                    },
                });
            } else{
                modalPay.style.display = "none",
                Swal.fire({
                    icon: 'error',
                    title: 'Pago no Realizado',
                    customClass: {
                        container: 'custom-swal-container'
                    },
                })
            };
        })
    })

    payFooter.append(buy);


}



const pintarCarrito = () =>{

    modalContainer.innerHTML = "";
    
    //div del header del modal del carrito
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
    
    //Recorrer array para mostrarlos en el carrito, junto con la cantidad y precio
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

            eliminar.addEventListener("click", eliminarProducto);
    })
    //Calculo del total del precio final
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `<h1>TOTAL: ${total} $</h1>`;
    modalContainer.append(totalBuying);
    modalContainer.style.display = "block";

    let pay = document.createElement("button");
    pay.className = "pay"
    pay.innerText = "FINALIZAR COMPRA"
    totalBuying.append(pay);

    pay.addEventListener("click", sold);
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



