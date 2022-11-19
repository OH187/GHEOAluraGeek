import { productServices } from "./services.js";

const todos = document.querySelector('#todos');
const diversos = document.querySelector('#diversos');
const consolas = document.querySelector('#consolas');
const starWars = document.querySelector('#star-wars');


//DOM donde se va a mostrar la lista de los clientes
const crearNuevo = (imagen, nombre, precio, id) => {
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('carta');
  const contenido = 
          `      
              <img class="cartas-img" src="${imagen}"/> 
              <p class='carta_nombre'>${nombre}</p>
              <strong><p>$${precio}</p></strong> 
              <a href="/src/screens/diversos.html?id=${id}"> Ver producto</a>          
          
      `;
      tarjeta.innerHTML = contenido;

      return tarjeta;
};

//Mostrando los datos en el div
productServices.listaProductos().then(data => { //Lo que sale de la promesa, then (entonces) en caso de que tengas la informacion haz lo sigt
  data.forEach(({imagen, nombre, categoria, precio, id}) => { //Usamos la desestructuracion (destructuring)
  const nuevaLinea = crearNuevo(imagen, nombre, precio, id);
    

    if(categoria === 'consola'){
      consolas.appendChild(nuevaLinea);
    }
    else if(categoria === 'starwars'){
      starWars.appendChild(nuevaLinea);
    }else if(categoria === 'diversos'){
      diversos.appendChild(nuevaLinea);
    }else{
      todos.appendChild;
    }

   
    
    
});
}).catch(() => alert("Ocurrió un error"));
