const carousel = document.querySelectorAll('.carousel');
const images = document.querySelectorAll('.carousel img');
let index = 0;

function showNextImage() {
    images[index].style.display = 'none';
    index = (index + 1) % images.length;
    images[index].style.display = 'block';
}

setInterval(showNextImage, 2000);




//////////////////// Validacion de formilario/////////////

const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    if (!nombre || !apellido || !telefono || !email) {
        alert('Por favor, completa todos los campos.');
    } else {
        alert('Magnifico, hemos recibido tus datos! Pronto recibiras la informacion de los cursos!');
        formulario.submit();
    }
});


document.getElementById('btnComprar1').addEventListener('click', function () {
    
    alert('¡Excelente Elección! Completa tus datos y te enviaremos informacion de curso seleccionado.');
});

document.getElementById('btnComprar2').addEventListener('click', function () {
    
    alert('¡Excelente Elección! Completa tus datos y te enviaremos informacion de curso seleccionado.');
});

document.getElementById('btnComprar3').addEventListener('click', function () {
    
    alert('¡Excelente Elección! Completa tus datos y te enviaremos informacion de curso seleccionado.');
});


