//const del body
const body = document.getElementById("contact");
//Contenedor del titulo
const content = document.getElementById("content");
content.className = "content";
content.innerHTML = `
<h1 class="LC">Contact<span>Us</span></h1>
`;

body.append(content);

// Container for the contact information
const wrapp = document.createElement("div");
wrapp.className = "contact-wrapper";
content.append(wrapp);  // Añade "wrapp" antes de intentar agregar elementos a él

// Container for the contact form
const divForm = document.createElement("div");
divForm.className = "contact-form";
divForm.innerHTML = `
<h3>Contactanos</h3>
`;
wrapp.append(divForm);

//Formulario de Contacto

const contactForm = document.createElement("form");
contactForm.innerHTML = `
<p>
<label for="Nombre Completo" >Nombre Completo</label>
<input type="text" name="fullname">
</p>

<p>
<label for="">Correo Electronico</label>
<input type="email" name="email">
</p>

<p>
<label for="">Telefono</label>
<input type="tel" name="phone">
</p>

<p class="block">
<label for="Affair">Motivo</label>
<input type="text" name="Affair">
</p>

<p>
<label for="">Mensaje</label>
<textarea name="message" rows="3" cols="10"></textarea>
</p>

<p class="block">
<button type="submit" id="submit">Send</button>
</p>
`;

divForm.append(contactForm);


//Sweet alert para que aparesca Correo enviado 5 segundos despues de haber hecho click
const submit = document.getElementById("submit");
submit.addEventListener("click", async (event) => {
    event.preventDefault();

    // Mostrar la alerta de carga
    Swal.showLoading();

    // Simular un retraso de 5 segundos (5000 milisegundos) utilizando await
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Ocultar la alerta de carga y mostrar el mensaje de éxito
    Swal.close();
    Swal.fire({
        title: 'Correo enviado con exito!!',
        text: 'Gracias por contactar con nosotros',
        icon: 'success', 
        customClass: {
            container: 'custom-swal-container'
        }
    });
});


//Informacion de contacto

const contactInfo = document.createElement("div");
contactInfo.className = "contact-info"; 
contactInfo.innerHTML = `
<h4>Mas Informacion</h4>
<ul>
    <li><i class="fa fa-location-dot"></i>Baker Street</li>
    <li><i class="fa fa-phone-volume"></i>+54123456789</li>
    <li><i class="fa fa-envelope"></i>contact@website.com</li>
</ul>
<p>
Tienda especializada en mangas y comics hace 15 años. Somos distribuidor oficial de distintas editoriales. Contamos con distintos medios de pago y envio. Ante cualquier consulta no dudes en contactarnos!!
</p>
<p>
Company.com 
</p>
`;

wrapp.append(contactInfo);

//Contenedor de la Barra de navegacion

const navCont = document.createElement("div");
navCont.className = "navct"

body.append(navCont);

//Barra de navegacion

const navBar = document.createElement("ul");
navBar.innerHTML = `
<li ><a  target="_self" href="../html/comicymanga.html">Comic y manga</a></li>
<li ><a  target="_self" href="../html/merchandising.html">Merchandising</a></li>
<li ><a  target="_self" href="../html/faq.html">FAQ</a></li>
<li ><a  target="_self" href="../index.html">HOME</a></li>
`;

navCont.append(navBar);

