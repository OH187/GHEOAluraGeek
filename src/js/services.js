//Generando la promise para conectarse al servidor. Para trabajar con esto necesitamos instalar json-server
const listaProductos = () => fetch('http://localhost:3000/productos').then(respuesta =>  respuesta.json()); //Abre una conexion o promesa y recibela con then, convierte el resultado a .json

//Creamos un promesa para crear un cliente
const crearProducto = (imagen, nombre, categoria, precio, descripcion) => {
    return fetch('http://localhost:3000/productos', {
        method: "POST",
        headers: { //Que tipo de archivo va a recibir
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen, nombre, categoria, precio, descripcion, id: uuid.v4()}) //Formateando a texto co stringify
    });
};



//Eliminar cliente
const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE"
    });
};


//Obtener el id del cliente con funcion asincrona y con try catch
const obtenerProducto = async (id) => {
    const respuesta = await fetch(`http://localhost:3000/productos/${id}`);
    return await respuesta.json();
};


//Actualizando los datos del cliente
const actualizarProducto = async (imagen, nombre, categoria, precio, descripcion, id) =>{
    try { //try = intenta
        const respuesta = await fetch(`http://localhost:3000/productos/${id}`, { //await = espera
            method: "PUT",
            headers: {
                //Que tipo de archivo va a recibir
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ imagen, nombre, categoria, precio, descripcion })
        });
        return respuesta;
    } catch (err) { //Si hay algun error muestra esto
        window.location.href = "../screens/error.html";
        return console.log(err);
        
    }
};


//Objeto que contiene las funciones establecidas
export const productServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    obtenerProducto,
    actualizarProducto
};

