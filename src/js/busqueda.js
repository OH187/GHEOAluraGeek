
document.addEventListener("keyup", e =>{
    // Tomamos el input de busqueda
    if(e.target.matches('#buscador')){

    // Ocultamos los elementos segun la busqueda
        document.querySelectorAll('.carta').forEach(carta => {
            carta.textContent.toLowerCase().includes(e.target.value)
            ? carta.classList.remove('filtro')
            : carta.classList.add('filtro');
        });
    }
});
