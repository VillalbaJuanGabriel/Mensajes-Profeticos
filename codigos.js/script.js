// Mobile Menu Toggle Script

const menuButton = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = document.querySelectorAll("#mobile-menu a");

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Cierra el menú cuando se hace clic en un enlace
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});