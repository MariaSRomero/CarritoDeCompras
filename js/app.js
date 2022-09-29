//variables
const carrito = document.querySelector('#Carrito');
const contenedorCarrito = document.querySelector('#lista-carrito');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListener();
function cargarEventListener(){
    listaCursos.addEventListener('click', agregarCurso);
}

//Funciones 
function agregarCurso(e){
    e.preventDefault();
    
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//Leer el contenido de HTML para extraer la información
function leerDatosCurso(curso){
   // console.log(curso);

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

//Agrega alementos al arreglo del carrito 
articulosCarrito = [...articulosCarrito, infoCurso];
console.log(articulosCarrito);

carritoHTML();

}

//Muestra el carrito de compras en HTML
function carritoHTML() {

    //Limpiar el HTML

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso => {
       const {imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${imagen}" width="100">
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href"#" class="borrar-curso" data-id="${curso.id}"> x </td>
        
        `;

        //Agrega el HTML del carrito  en el tbody
        contenedorCarrito.appendChild(row);
    });
}

//Elimina los cursos del tbody
function limpiarHTML() {
    //Forma lenta
    //contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
        
    }
}