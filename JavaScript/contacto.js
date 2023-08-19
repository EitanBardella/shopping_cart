//const del body
const body = document.getElementById("contact");

const content = document.getElementById("content");
content.className = "content";
content.innerHTML = `
<h1 class="LC">Contact<span>Us</span></h1>
`;

body.append(content);
const wrapp = document.getElementById("wrapp");
content.append(wrapp);
console.log(wrapp);
const divForm = document.createElement("div");
divForm.className = "contact-form";
divForm.innerHTML = `
<h3>Contactanos</h3>
`;

wrapp.append(divForm);
console.log (wrapp);
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







