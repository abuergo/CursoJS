// Implemento funcionalidad de carrito
const carrito = document.querySelector('#carrito');
const contenedorComidas = document.querySelector('.comidas');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const botonVaciarCarrito = document.querySelector('#vaciar-carrito');
let carritoComidas = [];

cargarEventListeners();

function cargarEventListeners(){
    contenedorComidas.addEventListener('click', agregarAlCarrito);

    // Eliminar comidas del carrito
    carrito.addEventListener('click', eliminarComidas);

    // Eliminar todas las comidas (vaciar carrito)
    botonVaciarCarrito.addEventListener('click', eliminarTodasLasComidas);

    // Obtener los cursos del localStorage
    document.addEventListener('DOMContentLoaded', () => {
        // Obtener el string de comidas, castear a objetos y sumarlo al carrito
        carritoComidas = JSON.parse(localStorage.getItem('carrito')) || [];
        cargarEnCarritoHTML();
    })
    
}

function agregarAlCarrito(e){
    e.preventDefault();
    if(e.target.classList.contains('btn-danger')){
        const comidaSeleccionada = e.target.parentElement.parentElement.parentElement;
        crearObjetoYAgregarACarritoLista(comidaSeleccionada);
    }
}

function crearObjetoYAgregarACarritoLista(curso){
    const infoComida = {
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h2').textContent,
        precio: curso.querySelector('h3').textContent,
        id: curso.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }

    // Reviso si algun elemento ya existe en el carrito
    const existeComida = carritoComidas.some((comida) => comida.id === infoComida.id);

    if(existeComida){ 
        const comidas = carritoComidas.map((comida) => {
            if(comida.id === infoComida.id){
                comida.cantidad++;
                return comida;
            }else{
                return comida;
            }
        });
        carritoComidas = [...comidas];
    } else {        
        // Agrego la info de la comida elegida al carrito
        carritoComidas = [...carritoComidas, infoComida];
    }
    cargarEnCarritoHTML();
}

function cargarEnCarritoHTML(){
    limpiarContenedorCarrito();
    
    carritoComidas.forEach((curso) => {
        const fila = document.createElement('tr');
        const {imagen, nombre, precio, cantidad, id} = curso;
        fila.innerHTML = `
        <td>
            <img src= "${imagen}" width="100"> 
        </td>        
        <td>${nombre}</td>        
        <td>${precio}</td>        
        <td>${cantidad}</td>        
        <td>
            <a href="#" class="borrar-comida" data-id="${id}">X</a>
        </td>
        `;
        contenedorCarrito.appendChild(fila);
    });

    sincronizarConLocalStorage();
}

function eliminarComidas(e){
    if(e.target.classList.contains('borrar-comida')){
        const comidaId = e.target.getAttribute('data-id'); 

        carritoComidas = carritoComidas.filter((comida) => comida.id !== comidaId);

        cargarEnCarritoHTML();
    }
}

function eliminarTodasLasComidas(){
    carritoComidas = [];
    cargarEnCarritoHTML();
}

function sincronizarConLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carritoComidas));
}

function limpiarContenedorCarrito(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
