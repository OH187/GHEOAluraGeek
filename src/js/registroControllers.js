import { productServices } from "./services.js"; //Importamos el objeto con las funciones
import { validar } from "./validacion.js";

const formulario = document.querySelector('[data-form]');
const btnAgregar = document.querySelector('#btnAgregar');
const btnBuscar = document.querySelector('#buscador');


//Boton de buscar una imagen
/* btnBuscar.addEventListener("click", (event) => {
    event.preventDefault();
    var win = window.open("https://www.google.com/", '_blank'); //Redireccionamos y abrimos otra pestaña
    // Cambiar el foco al nuevo tab (punto opcional)
    win.focus();
}); */


//Boton de registrar contenido
formulario.addEventListener('submit', (event) => { //Tomamos el click del boton dle formulario
    event.preventDefault();

    const inputs = document.querySelectorAll("input");

        //Validando los demás inputs
        inputs.forEach( entrada => {
        entrada.addEventListener('click', (entrada) => {
            validar(entrada.target);            
        }); 
    });
    
    const imagen = document.querySelector('[data-url]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;
    const precio = document.querySelector('[data-precio]').value;
    const categoria = document.querySelector('[data-categoria]').value;
    const limpiandoCategoria = categoria.toLowerCase().replace(" ", "");

    console.log(limpiandoCategoria);

    productServices.crearProducto(imagen, nombre, limpiandoCategoria, precio, descripcion).then(() => {
        window.location.href = "../screens/lista_productos.html"; //Redireccionamos
    }).catch(error => console.log(error)); //Muestra algun error por si hubo algún problema

});