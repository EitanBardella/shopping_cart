//const del section
const sectionContent = document.getElementById("contenedor");
sectionContent.innerHTML = `
<h2>Frequently Asked Question</h2>
`;

//Funcion para crear btns para el acordion

const Faq = (question, answer) => {
    //Contenedor de los btns con preguntas
    const faqContainer = document.createElement("div");
    faqContainer.className = "faq"
    //Creacion del btn
    const btnFaq = document.createElement("button");
    btnFaq.className = "acordion"
    btnFaq.innerText = question; 
    //Contenido del acordion
    const faqContent = document.createElement("div");
    faqContent.className = "panel"
    faqContent.innerHTML = ` <p>${answer}</p> `;

    //btn dentro del btnFaq para desplegar 

    const display = document.createElement("i");
    display.className = "fa-solid fa-arrow-turn-down"

    //Appends
    faqContainer.append(btnFaq);
    btnFaq.append(faqContent);
    btnFaq.append(display)

    //Evento para desplegar el acordion y que cambie el icono de flecha
    btnFaq.addEventListener("click", () => {
        faqContent.classList.toggle("active");
        if(faqContent.classList.contains("active")){
            display.classList.replace("fa-arrow-turn-down", "fa-arrow-turn-up");
        } else{
            display.classList.replace("fa-arrow-turn-up", "fa-arrow-turn-down");
        }
    });
    return(faqContainer);
};

const faqElement1 = Faq("¿Quienes somos?", "Somos un grupo con más de 15 años de experiencia en el mundo de las ventas y fanáticos del mundo del manga y los comics, los cuales cumplieron su sueño de abrir una tienda especializada en nuestra pasión, comics y manga.");
sectionContent.append(faqElement1);

const faqElement2 = Faq("¿Qué métodos de pago tenemos?", "Nostros nos manejamos con todo tipo de tarjetas de crédito (Visa, Mastercard), Tarjetas de debito y también mercado pago");
sectionContent.append(faqElement2);

const faqElement3 = Faq("¿Donde puedo retirar mi compra?", "Se puede retirar de forma presencial o tambien se puede enviar via Correo Argentino.");
sectionContent.append(faqElement3);

const faqElement4 = Faq("¿Cuanto tiempo de demora tiene el envio?", "El tiempo de envio de la compra va a depender del los tiempos que maneje Correo Argentino");
sectionContent.append(faqElement4);



