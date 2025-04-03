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

document.addEventListener("DOMContentLoaded", function () {
    const mapsContainer = document.querySelector('.department-maps-container');

    // Función para pausar la animación al pasar el mouse
    mapsContainer.addEventListener('mouseenter', function () {
        mapsContainer.style.animationPlayState = 'paused';
    });

    // Función para reanudar la animación al quitar el mouse
    mapsContainer.addEventListener('mouseleave', function () {
        mapsContainer.style.animationPlayState = 'running';
    });

    // Función para detener el desplazamiento al hacer clic en un mapa
    const departmentMaps = document.querySelectorAll('.department-map');
    departmentMaps.forEach(map => {
        map.addEventListener('click', function () {
            // Detener la animación de desplazamiento
            mapsContainer.style.animationPlayState = 'paused';

            // Opcional: Puedes hacer algo cuando el mapa se hace clic (como mostrar más información)
            alert(`Has hecho clic en el mapa de ${map.id}`);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".departments-container");
    const wrapper = document.createElement("div");
    wrapper.classList.add("departments-wrapper");

    while (container.firstChild) {
        wrapper.appendChild(container.firstChild);
    }
    container.appendChild(wrapper);

    function duplicateContent() {
        const departments = wrapper.children;
        for (let i = 0; i < departments.length; i++) {
            let clone = departments[i].cloneNode(true);
            wrapper.appendChild(clone);
        }
    }

    duplicateContent();
});



