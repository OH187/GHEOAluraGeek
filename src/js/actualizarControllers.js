import { productServices } from "./services.js";

// const formulario = document.querySelector('[data-form]');
const btnActualizar = document.querySelector('#btn_Actualizar');
const btnBuscar = document.querySelector('#btn_buscar');

//Obteniendo informacion del servidor y colocandola en los inputs
    const obtenerInfo = () => {
        const url = new URL(window.location); //Tomamos la url de la pagina actual
        const id = url.searchParams.get('id'); //Obtenemos el id segun el parametro que le pusimos
        const imagen = document.querySelector('[data-url]');
        const nombre = document.querySelector('[data-nombre]');
        const descripcion = document.querySelector('[data-descripcion]');
        const precio = document.querySelector('[data-precio]');
        const categoria = document.querySelector('[data-categoria]');

        if(id === null){
            window.location.href = '../screens/error.html';
        }

        productServices.obtenerProducto(id).then(productos => {
            imagen.value = productos.imagen;
            nombre.value = productos.nombre;
            categoria.value = productos.categoria;
            precio.value = productos.precio;
            descripcion.value = productos.descripcion;
            
        });
};

//Boton buscar imagen en el equipo
btnBuscar.addEventListener('click',(e) => {
    e.preventDefault();
    var win = window.open("https://www.google.com/", '_blank'); //Redireccionamos y abrimos otra pestaña
  // Cambiar el foco al nuevo tab (punto opcional)
    win.focus();
    
    /* window.location.href = "https://www.google.com/"; //Redireccionamos */

});


//Boton actualizar
btnActualizar.addEventListener('click', (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get('id'); //Obtenemos el id segun el parametro que le pusimos
    const imagen = document.querySelector('[data-url]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;
    const precio = document.querySelector('[data-precio]').value;
    const categoria = document.querySelector('[data-categoria]').value;
    const limpiandoCategoria = categoria.toLowerCase().replace(" ", "");

    productServices.actualizarProducto(imagen, nombre, limpiandoCategoria, precio, descripcion, id).then(() => {window.location.href = '../screens/mensaje-enviado.html'});

});
obtenerInfo();
