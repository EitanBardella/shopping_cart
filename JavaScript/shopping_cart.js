
//Ver Carrito (Me conviene pasar esta variable a shopping_cart??)
const seeCart = document.getElementById("verCarrito");
//Modal del carrito
const modalContainer = document.getElementById("modal-container");
//Modal de pago
const modalPay = document.getElementById("modal-pay");

const sold = () => {

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

    //contenedor para el formulario para agregar la tarjeta de credito

    const creditCart = document.createElement("div");
    creditCart.className = "creditCart"
    modalPay.append(creditCart);
    const creditForm = document.createElement("form");
    creditForm.className = "creditForm"
    creditForm.innerHTML = `
    <h1>AGREGUE SU TARJETA</h1>
    <input class="credit-input" id="credit-input">
    <br></br>
    <i class="fa-brands fa-cc-visa"></i>
    <i class="fa-brands fa-cc-amex"></i>
    <i class="fa-brands fa-cc-mastercard"></i>
    `;

    creditCart.append(creditForm);
    //Libreria Cleave.js para modificar el input para agregar tarjeta de credito
    new Cleave(`.credit-input`, {
        creditCard: true,
        onCreditCardTypeChanged: function (type) {
            console.log(type);
            document.querySelector(`.fa-cc-visa`).classList.toggle(`active`, type === "visa");
            document.querySelector(`.fa-cc-mastercard`).classList.toggle(`active`, type === "mastercard");
            document.querySelector(`.fa-cc-amex`).classList.toggle(`active`, type === "amex");
    
            // se añade una clase de remove para una back transition mas suave
            document.querySelector(`.fa-cc-visa`).classList.toggle(`remove`, type !== "visa");
            document.querySelector(`.fa-cc-mastercard`).classList.toggle(`remove`, type !== "mastercard");
            document.querySelector(`.fa-cc-amex`).classList.toggle(`remove`, type !== "amex");
        }
    });
    

    //footer con el boton de pagar y la sweet alert

    const payFooter = document.createElement("div");
    payFooter.className = "payFooter",
    modalPay.append(payFooter);

    const buy = document.createElement("button");
    buy.className = "buyButton",
    buy.innerText = "PAGAR",
    buy.addEventListener("click", () =>{
        const input = document.getElementById("credit-input");
        if(input.value ==="") {
            Swal.fire({
                title: 'No se han ingresado datos!!',
                text: "Por favor ingrese, los datos requeridos",
                icon: 'warning',
                customClass: {
                    container: 'custom-swal-container'
                    }
                });
        } else {Swal.fire({
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
    }})

    payFooter.append(buy);


}



const showCart = () =>{

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
    cart.forEach((product) => {

        let cartContent = document.createElement("div");
        cartContent.className = "modal-content"
        cartContent.innerHTML = `
            <img src="${product.img}"/>
            <h3>${product.nombre}</h3>
            <p>${product.precio}$</p>
            <span class="restar"> - </span>
            <p>Cantidad: ${product.cantidad}</p>
            <span class="sumar"> + </span>
            <p>Total: ${product.cantidad * product.precio}</p>
            <span class="delete-produtc"> ❌ </span>
            `;

            modalContainer.append(cartContent);

            let restar = cartContent.querySelector(".restar");
            restar.addEventListener("click", () => {
                if(product.cantidad !== 1) {
                product.cantidad--;
                saveLocal();
                showCart();
                }
            })
            let sumar = cartContent.querySelector(".sumar");
            sumar.addEventListener("click", () => {
                product.cantidad++;
                saveLocal();
                showCart();
            })

            let eliminar = cartContent.querySelector(".delete-produtc");
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
    const total = cart.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

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


seeCart.addEventListener("click", showCart);

//Funcion eliminar, find por id, filter prods del carrito que no coincidan con el id, para volver a hacer/pintar el carrito sin ese id

const eliminarProducto = (id) => {
    const foundId = cart.find((element) => element.id === id);

    cart = cart.filter((cartId) =>{
        return cartId !== foundId;
    });
    saveLocal();
    showCart();
};



