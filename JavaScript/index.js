//Div del shop content
const shopContent = document.getElementById("shop_content");

//Array del carrito
let cart = JSON.parse(localStorage.getItem("totalCart")) || [];

//productos de la página

const getProducts = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();

    data.forEach((product) => {
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
            const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id );
            
            if(repeat === true) {
                cart.map((prod) => {
                    if(prod.id === product.id){
                        prod.cantidad++;
                    }
                });
            }else {
    
            cart.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        }
            saveLocal();
            //Notificacion de producto agregado o eliminado
            Toastify({
                text: "Producto Agregado",
                duration: 3000,
                destination: "",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #B74F6F, #ADBDFF)",
                },
                onClick: function(){} // Callback after click
            }).showToast();
        });
    });
};

getProducts();





//Set item
const saveLocal = () => {
localStorage.setItem("totalCart", JSON.stringify(cart));
};

//Get item

JSON.parse(localStorage.getItem("totalCart"))