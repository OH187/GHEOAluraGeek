import { productServices } from "./services.js";

// const carta = document.querySelector('.cartaGrande');
const diversos = document.querySelector('#cartas');


//Obteniendo informacion del servidor y colocandola en los inputs
const obtenerInfo = () => {
    const url = new URL(window.location); //Tomamos la url de la pagina actual
    const id = url.searchParams.get('id'); //Obtenemos el id segun el parametro que le pusimos

    //Seleccionamos los elementos donde mostraremos los datos
    const imagen = document.querySelector('[data-imagen]');
    const nombre = document.querySelector('[data-nombre]');
    const descripcion = document.querySelector('[data-descripcion]');
    const precio = document.querySelector('[data-precio]');

    if(id === null){
        window.location.href = '../screens/error.html';
    }

    //Obtenemos los datos y los enlazamos a los elementos del html
    productServices.obtenerProducto(id).then(productos => {
        imagen.src = productos.imagen;
        nombre.innerText = productos.nombre;
        precio.innerText = productos.precio;
        descripcion.innerText = productos.descripcion;

        
            
                //Mostrando los datos en el div
                productServices.listaProductos().then(data => { //Lo que sale de la promesa, then (entonces) en caso de que tengas la informacion haz lo sigt
                data.forEach(({imagen, nombre, categoria, precio, id}) => { //Usamos la desestructuracion (destructuring)
                const nuevaLinea = mostrar(imagen, nombre, precio, id);

                
                //Mostramos los productos en la parte de "similares" segun la categoria
                if(categoria ===  productos.categoria){
                    diversos.appendChild(nuevaLinea);
                }
                //Removemos del apartado similares el elemento que estamos viendo
                if(id === productos.id){
                    diversos.removeChild(nuevaLinea);
                }

            });
        }).catch(() => alert("Ocurrió un error"));
    });

};

const mostrar = (imagen, nombre, precio, id) => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('carta');
    const contenido = 
            `      
                <img class="cartas-img" src="${imagen}"/> 
                <p>${nombre}</p>
                <strong><p>$${precio}</p></strong> 
                <a href="/src/screens/diversos.html?id=${id}"> Ver producto</a>          
            
        `;
        tarjeta.innerHTML = contenido;
        return tarjeta;
  };

obtenerInfo();
