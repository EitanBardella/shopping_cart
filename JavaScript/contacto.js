//const del body
const body = document.getElementById("contact");
//Contenedor del titulo
const content = document.getElementById("content");
content.className = "content";
content.innerHTML = `
<h1 class="LC">Contact<span>Us</span></h1>
`;

body.append(content);

//Contenedor de la info de para Contactarse

const wrapp = document.getElementById("wrapp");
content.append(wrapp);

//Contenedor del formulario de conteacto

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
<label for="">Motivo</label>
<input type="text" name="Affair">
</p>

<p>
<label for="">Mensaje</label>
<textarea name="message" rows="3"></textarea>
</p>

<p class="block">
<button type="submit">Send</button>
</p>
`;

divForm.append(contactForm);

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
`;

divForm.append(contactInfo);

//Contenedor de la Barra de navegacion

const navCont = document.createElement("div");
navCont.className = "navct"

body.append(navCont);

//Barra de navegacion

const navBar = document.createElement("ul");
navBar.innerHTML = `
<li ><a  target="_self" href="../pags/comicymanga.html">Comic y manga</a></li>
<li ><a  target="_self" href="../pags/merchandising.html">Merchandising</a></li>
<li ><a  target="_self" href="../pags/faq.html">FAQ</a></li>
<li ><a  target="_self" href="../index.html">HOME</a></li>
`;

navCont.append(navBar);







