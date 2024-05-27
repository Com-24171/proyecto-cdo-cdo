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
    let prefijo = document.getElementById('prefijo').value;
    let telefono = document.getElementById('telefono').value;
    let provincia = document.getElementById('provincia').value;
    let email = document.getElementById('email').value;


    if (!nombre || !apellido || !telefono || !email||!prefijo||!provincia){
        alert('Por favor, completa todos los campos.');
        
    } else {
        alert('Magnifico, hemos recibido tus datos! Pronto recibiras la informacion sobre el curso seleccionado!');
    }
    formulario.submit();

});


document.getElementById('btnComprar1').addEventListener('click', function () {
    
    alert('¡Te interesa saber mas de Python?! Completa tus datos y te enviaremos informacion de este curso!.');
});

document.getElementById('btnComprar2').addEventListener('click', function () {
    
    alert('¡Te interesa saber mas de JavaScript?! Completa tus datos y te enviaremos informacion de este curso!');
});

document.getElementById('btnComprar3').addEventListener('click', function () {
    
    alert('¡Te interesa saber mas de Angular?! Completa tus datos y te enviaremos informacion sobre este curso!');
});
