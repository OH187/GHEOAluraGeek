document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form_login').addEventListener('submit', validarLogin);
});

const btnEntrar = document.querySelector('.button-login');

function validarLogin(event){
    event.preventDefault();
        var correo = document.querySelector('#correo').value;
        var pass = document.querySelector('#password').value;
        console.log(correo);

    if(correo === 'correo@correo.com' && pass === '12345'){
        window.location.href = './../screens/lista_productos.html';
        return;
    }else{
        correo.focus;
        alert('Escriba los datos válidos');
    }
    this.submit();
}

/* btnEntrar.addEventListener('click', () => {
    

}); */
