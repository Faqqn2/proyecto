var botonMenu = document.getElementById("botonMenu");
var nav = document.getElementById("nav");

botonMenu.addEventListener('click', function(){
    nav.classList.toggle('mostrar');
})