
import { productServices } from "./services.js";

//Seleccion del contenedor en el DOM
const table = document.querySelector('.cartas_BD');



//DOM donde se va a mostrar la lista de los clientes
const crearNuevo = (imagen, nombre, categoria, precio, descripcion, id) => {
    // const linea = document.createElement('tr');
    const linea = document.createElement('div');
    linea.classList.add('carta');
    const contenido = 
        `
        <img class="cartas-img" src="${imagen}"/> 
            <p>Nombre: ${nombre}</p>
            <p>Categoria: ${categoria}</p>
            <p>Precio: $${precio}</p>
            <p>Descripción: ${descripcion}</p>
            
            <ul class="table__button-control">
            <li> <a href="./editar_producto.html?id=${id}">Editar</a> </li>
            <li> <button class="simple-button simple-button--delete" type="button" id="${id}">Eliminar</button> </li>
            </ul>
        `

        linea.innerHTML = contenido;

        //Obteniendo el id del Producto y eliminandolo
        const btn = linea.querySelector('button');
        btn.addEventListener('click', () => {
            const id = btn.id;
            productServices.eliminarProducto(id).then(respuesta => console.log(respuesta)).catch(() => alert('Ocurró un error'));
        });

        return linea;
};


//Mostrando los datos en la tabla
productServices.listaProductos().then(data => { //Lo que sale de la promesa, then (entonces) en caso de que tengas la informacion haz lo sigt
    data.forEach(({imagen, nombre, categoria, precio, descripcion, id}) => { //Usamos la desestructuracion (destructuring)
    const nuevaLinea = crearNuevo(imagen, nombre, categoria, precio, descripcion, id);
    table.appendChild(nuevaLinea);
});
}).catch(() => alert("Ocurrió un error"));

