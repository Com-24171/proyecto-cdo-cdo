// Función tarjeta curso 1
function cardCurso1() {
 
    let card = document.createElement('div');
    card.classList.add('card');

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let titulo = document.createElement('h5');
    titulo.classList.add('card-title');
    titulo.textContent = 'Curso de Python';

    let descripcion = document.createElement('p');
    descripcion.classList.add('card-text');
    descripcion.textContent = '18hs. de clases online y acceso por 2 años para que lo puedas hacer y reveer las veces que quieras.'; // Descripción del producto

    let precio = document.createElement('p');
    precio.classList.add('card-text');
    precio.textContent = 'Precio: us$55';

    
    cardBody.appendChild(titulo);
    cardBody.appendChild(descripcion);
    cardBody.appendChild(precio);
    card.appendChild(cardBody);

    let productoContainer = document.getElementById('cardContainer1');
    productoContainer.innerHTML = '';
    productoContainer.appendChild(card);
}

let btnCardCurso1 = document.getElementById('btnCurso1');
btnCardCurso1.addEventListener('click', cardCurso1);

// Función tarjeta curso 2
function cardCurso2() {
 
    let card = document.createElement('div');
    card.classList.add('card');

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let titulo = document.createElement('h5');
    titulo.classList.add('card-title');
    titulo.textContent = 'Curso de JavaScript';

    let descripcion = document.createElement('p');
    descripcion.classList.add('card-text');
    descripcion.textContent = '140hs. de clases online y acceso ilimitado para que lo puedas hacer y reveer las veces que quieras.'; // Descripción del producto

    let precio = document.createElement('p');
    precio.classList.add('card-text');
    precio.textContent = 'Precio: us$225';

    
    cardBody.appendChild(titulo);
    cardBody.appendChild(descripcion);
    cardBody.appendChild(precio);
    card.appendChild(cardBody);

    let productoContainer = document.getElementById('cardContainer2');
    productoContainer.innerHTML = '';
    productoContainer.appendChild(card);
}

let btnCardCurso2 = document.getElementById('btnCurso2');
btnCardCurso2.addEventListener('click', cardCurso2);

////////////////////////////////////////////////////////

// Función tarjeta curso 3
function cardCurso3() {
 
    let card = document.createElement('div');
    card.classList.add('card');

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let titulo = document.createElement('h5');
    titulo.classList.add('card-title');
    titulo.textContent = 'Curso de Angular';

    let descripcion = document.createElement('p');
    descripcion.classList.add('card-text');
    descripcion.textContent = '72hs. de clases online, acceso ilimitado mas descargas locales en video para que lo puedas hacer y reveer las veces que quieras.'; // Descripción del producto

    let precio = document.createElement('p');
    precio.classList.add('card-text');
    precio.textContent = 'Precio: us$125';

    
    cardBody.appendChild(titulo);
    cardBody.appendChild(descripcion);
    cardBody.appendChild(precio);
    card.appendChild(cardBody);

    let productoContainer = document.getElementById('cardContainer3');
    productoContainer.innerHTML = '';
    productoContainer.appendChild(card);
}

let btnCardCurso3 = document.getElementById('btnCurso3');
btnCardCurso3.addEventListener('click', cardCurso3);

///////////////////////////////////////////////////////////////////////////////

// Función tarjeta curso 4
function cardCurso4() {
 
    let card = document.createElement('div');
    card.classList.add('card');

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let titulo = document.createElement('h5');
    titulo.classList.add('card-title');
    titulo.textContent = 'Curso de Vue Js';

    let descripcion = document.createElement('p');
    descripcion.classList.add('card-text');
    descripcion.textContent = '80hs. de clases online y acceso ilimitado para que lo puedas hacer y reveer las veces que quieras.';

    let precio = document.createElement('p');
    precio.classList.add('card-text');
    precio.textContent = 'Precio: us$225';

    
    cardBody.appendChild(titulo);
    cardBody.appendChild(descripcion);
    cardBody.appendChild(precio);
    card.appendChild(cardBody);

    let productoContainer = document.getElementById('cardContainer4');
    productoContainer.innerHTML = '';
    productoContainer.appendChild(card);
}

let btnCardCurso4 = document.getElementById('btnCurso4');
btnCardCurso4.addEventListener('click', cardCurso4);

////////////////////////////////////////////////////////////////////////7

// Función tarjeta curso 5
function cardCurso5() {
 
    let card = document.createElement('div');
    card.classList.add('card');

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let titulo = document.createElement('h5');
    titulo.classList.add('card-title');
    titulo.textContent = 'Curso de PHP';

    let descripcion = document.createElement('p');
    descripcion.classList.add('card-text');
    descripcion.textContent = '140hs. de clases online y acceso ilimitado para que lo puedas hacer y reveer las veces que quieras.'; // Descripción del producto

    let precio = document.createElement('p');
    precio.classList.add('card-text');
    precio.textContent = 'Precio: us$255';

    
    cardBody.appendChild(titulo);
    cardBody.appendChild(descripcion);
    cardBody.appendChild(precio);
    card.appendChild(cardBody);

    let productoContainer = document.getElementById('cardContainer5');
    productoContainer.innerHTML = '';
    productoContainer.appendChild(card);
}

let btnCardCurso5 = document.getElementById('btnCurso5');
btnCardCurso5.addEventListener('click', cardCurso5);

//////////////////////////////////////////////////////////////

// Función tarjeta curso 6
function cardCurso6() {
 
    let card = document.createElement('div');
    card.classList.add('card');

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let titulo = document.createElement('h5');
    titulo.classList.add('card-title');
    titulo.textContent = 'Curso de C#';

    let descripcion = document.createElement('p');
    descripcion.classList.add('card-text');
    descripcion.textContent = '140hs. de clases online y acceso ilimitado para que lo puedas hacer y reveer las veces que quieras.'; // Descripción del producto

    let precio = document.createElement('p');
    precio.classList.add('card-text');
    precio.textContent = 'Precio: us$215';

    
    cardBody.appendChild(titulo);
    cardBody.appendChild(descripcion);
    cardBody.appendChild(precio);
    card.appendChild(cardBody);

    let productoContainer = document.getElementById('cardContainer6');
    productoContainer.innerHTML = '';
    productoContainer.appendChild(card);
}

let btnCardCurso6 = document.getElementById('btnCurso6');
btnCardCurso6.addEventListener('click', cardCurso6);



/////////////////////////////////////////////////////////////////

