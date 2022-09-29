//variables
const carrito = document.querySelector('#Carrito');
const contenedorCarrito = document.querySelector('#lista-carrito');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarrito = document.querySelector('#vaciar-carrito');

cargarEventListener();
function cargarEventListener(){
    listaCursos.addEventListener('click', agregarCurso);
}

//Funciones 
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        console.log(e.target);
    }
}