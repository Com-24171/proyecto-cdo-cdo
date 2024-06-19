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


function mostrarDatos() {
    document.getElementById("datosUser").style.visibility = "visible";

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
    let edad = document.getElementById("edad").value;
    let select = document.getElementById("cursos").value;

    const regexLetras = /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ\s]+$/;
    if (!regexLetras.test(apellido) || apellido.length > 15) {
      alert('Por favor, ingrese apellidos válidos (solo letras y máximo 15 caracteres).');
      return;
    }else   if (!regexLetras.test(nombre) || nombre.length > 10) {
        alert('Por favor, ingrese un nombre válido (solo letras y máximo 10 caracteres).');
        return;
    }else   if (isNaN(edad) || edad < 0 || edad > 99) {
        alert('Por favor, ingrese una edad válida (número entre 0 y 99).');
        return;
    }else if (isNaN(dni) || dni.length< 6 || dni.length > 12) {
        alert('Por favor, ingrese un DNI valido!.');
        return;

    }

    if (nombre === '' || apellido === '' || dni === '' || edad === '' || select === 'none') {
        alert('Por favor, complete todos los campos.');
        document.getElementById("datosUser").style.visibility = "hidden";
        return;
    } else {
        let correo = apellido.split(' ').join('') + "." + nombre.split(' ').join('') + "@IFA.com.ar";
        let password = apellido.split(' ').join('') + "-" + dni % 1000 + "!";

        document.getElementById("datosUser").style.visibility = "visible";


        document.getElementById("mostrarNombre").textContent = nombre;
        document.getElementById("mostrarApellido").textContent = apellido.toUpperCase();
        document.getElementById("mostrarDNI").textContent = dni;
        document.getElementById("mostrarEdad").textContent = edad;
        document.getElementById("mostrarCorreo").textContent = correo.toLowerCase();
        document.getElementById("mostrarPassword").textContent = password;
        document.getElementById("mostrarSelect").textContent = select;

    }
}

function cursoSelect() {
    let select = document.getElementById('cursos');
    let cardContenido = document.getElementById('card-contenido');
    cardContenido.innerHTML = select.value;
}

function borrarDatos() {
    document.getElementById("miFormulario").reset();
    document.getElementById("mostrarNombre").textContent = "";
    document.getElementById("mostrarApellido").textContent = "";
    document.getElementById("mostrarDNI").textContent = "";
    document.getElementById("mostrarEdad").textContent = "";
    document.getElementById("mostrarCorreo").textContent = "";
    document.getElementById("mostrarPassword").textContent = "";
    document.getElementById("datosUser").style.visibility = "hidden";
}

window.onload = function () {
    document.getElementById("datosUser").style.visibility = "hidden";
}

function toggleMenu() {
    let navbar = document.querySelector('.navbar');
    let menuDesplegable = document.querySelector('.menu-desplegable');

    if (window.innerWidth <= 768) {
        navbar.style.display = 'none';
        menuDesplegable.style.display = 'block';
    } else {
        navbar.style.display = 'flex';
        menuDesplegable.style.display = 'none';
    }
}

window.addEventListener('resize', toggleMenu);
toggleMenu();


const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        radioButtons.forEach(rb => {
            rb.checked = false;
            });
            this.checked = true;
    });
});