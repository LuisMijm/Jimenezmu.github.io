// const botonMenu = document.getElementById('boton-menu');
// const menuLateral = document.getElementById('menu-lateral');

// botonMenu.addEventListener('click', function() {
//     menuLateral.classList.toggle('mostrar-menu');
// });


function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

var prevScrollpos = window.pageYOffset;
var navbar = document.querySelector('.navbar');
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos)
    {
        navbar.classList.remove('hidden');
    } else
    {
        navbar.classList.add('hidden');
    }
    prevScrollpos = currentScrollPos;
}

window.addEventListener("scroll", function() {
    var barra = document.getElementById('navbar');
    var boton = document.getElementById("button");

    if (barra.offsetTop + barra.offsetHeight <= window.pageYOffset) {
        boton.style.display = "block";
    } else
    {
        boton.style.display = "none";
    }

});
