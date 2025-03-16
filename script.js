// Cambio automático de imágenes en el slider
let currentIndex = 0;
const images = document.querySelectorAll(".slider img");

function changeImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
}

// Cambia la imagen cada 4 segundos
setInterval(changeImage, 4000);

// Seleccionamos todas las tarjetas
const cards = document.querySelectorAll(".card");

// Recorremos cada tarjeta y le añadimos eventos
cards.forEach((card) => {
    const button = card.querySelector(".ver-mas"); // Encontramos el botón dentro de la card

    // Cuando el mouse entra a la card, cambiamos el botón
    card.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "white";
        button.style.color = "black";
        button.style.border = "1px solid #007BFF";
    });

    // Cuando el mouse sale de la card, volvemos al estado original
    card.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "#007BFF";
        button.style.color = "white";
        button.style.border = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".notaria-logo");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function () {
        let currentScrollY = window.scrollY;
        let rotation = currentScrollY > lastScrollY ? 10 : -10; // Baja = derecha, Sube = izquierda

        logo.style.transform = `translateX(-50%) rotate(${rotation}deg)`;

        lastScrollY = currentScrollY;
    });
});

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}


