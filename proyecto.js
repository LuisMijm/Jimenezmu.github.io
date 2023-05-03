// const botonMenu = document.getElementById('boton-menu');
// const menuLateral = document.getElementById('menu-lateral');

// botonMenu.addEventListener('click', function() {
//     menuLateral.classList.toggle('mostrar-menu');
// });


// function toggleMenu() {
//     var menu = document.getElementById("menu");
//     menu.classList.toggle("show");
// }


// Funcion para la aparicion y desparicion de la barra superior 
// al subir y bajar con el ratón
var prevScrollpos = window.pageYOffset;
var navbar = document.querySelector('.navbar');
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (window.scrollY > 1200) {
        if (prevScrollpos > currentScrollPos) {
            navbar.classList.remove('hidden');
        } else {
            navbar.classList.add('hidden');
        }
    }
    prevScrollpos = currentScrollPos;
}
///////////////////////////////////////////////////////////////

// window.addEventListener("scroll", function() {
//     var barra = document.getElementById('navbar');
//     var boton = document.getElementById("button");

//     if (barra.offsetTop + barra.offsetHeight <= window.pageYOffset) {
//         boton.style.display = "block";
//     } else
//     {
//         boton.style.display = "none";
//     }

// });

// const character1 = document.getElementById("character1");
// const info = document.getElementById("info");

// character1.addEventListener("click", () => {
//     console.log("click activado");
//     character1.style.transform = "translateY(-50px)";
//     info.innerHTML = "Informacion del item 1";
//     info.style.display = "block";
// });

function showMessage() {
    console.log("Mensaje de consola al hacer click en el div.");
}
 
function DisplaySideInfo(){
    var x = document.getElementById("info");
    var y = document.getElementById("character-item")
    if (x.style.display == "none") {
        x.style.display = "block";
    }else
    {
        x.style.display = "none";
    }
}