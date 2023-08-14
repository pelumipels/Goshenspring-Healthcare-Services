const menu = document.querySelector('header .hamburgerMenu');
const nav = document.querySelector('header .nav-bar');
const nav_links = document.querySelectorAll('header .nav-bar .nav-list a');
const closeButton = document.querySelector('.closeButton');
const overlay = document.querySelector(".nav_overlay");

menu.addEventListener('click', () => {
    overlay.classList.toggle("active");
    overlay.style.overflow = "hidden";
    nav.classList.toggle('nav-toggle');
    menu.classList.toggle('close');
    document.body.style.overflow = "hidden"
});

nav_links.forEach((nav_link) => {
    nav_link.addEventListener('click', () => {
        if (overlay.classList.contains("active")) {
            overlay.classList.toggle("active");
            overlay.style.overflow = "auto";
        }
        if (nav.classList.contains("nav-toggle")) {
            nav.classList.toggle('nav-toggle');
        }
        if (menu.classList.contains("close")) {
            menu.classList.toggle('close');
        }
        if (document.body.style.overflow === "hidden") {
            document.body.style.overflow = "auto";
        }
    });
});

closeButton.addEventListener('click', () => {
    overlay.classList.toggle("active");
    nav.classList.toggle('nav-toggle');
    menu.classList.toggle('close');
    document.body.style.overflow = "auto";
});

overlay.addEventListener("click", () => {
    overlay.classList.toggle("active");
    overlay.style.overflow = "auto";
    nav.classList.toggle('nav-toggle');
    menu.classList.toggle('close');
    document.body.style.overflow = "auto";
});