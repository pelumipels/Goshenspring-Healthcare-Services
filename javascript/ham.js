const menu = document.querySelector('header .hamburgerMenu');
const nav = document.querySelector('header .nav-bar');
const nav_links = document.querySelectorAll('header .nav-bar .nav-list a');
const closeButton = document.querySelector('.closeButton');
const overlay = document.querySelector(".nav_overlay");

menu.addEventListener('click', () => {
    overlay.classList.toggle("active");
    nav.classList.toggle('nav-toggle');
    menu.classList.toggle('close');
    document.body.style.position = "fixed";
});

nav_links.forEach((nav_link) => {
    nav_link.addEventListener('click', () => {
        if (overlay.classList.contains("active")) {
            overlay.classList.remove("active");
        }
        if (nav.classList.contains("nav-toggle")) {
            nav.classList.remove('nav-toggle');
        }
        if (menu.classList.contains("close")) {
            menu.classList.remove('close');
        }
        if (document.body.style.position === "fixed") {
            document.body.style.position = "relative";
        }
    });
});

closeButton.addEventListener('click', () => {
    overlay.classList.remove("active");
    nav.classList.remove('nav-toggle');
    menu.classList.remove('close');
    document.body.style.position = "relative";
});

overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    nav.classList.remove('nav-toggle');
    menu.classList.remove('close');
    document.body.style.position = "relative";
});

function checkScreenWidth() {

    if (window.innerWidth < 878) {
        if (nav.classList.contains("nav-toggle") || overlay.classList.contains("active") || menu.classList.contains("close")) {
            document.body.style.position = "fixed";
        } else {
            document.body.style.position = "relative";
        }
    }
    if (window.innerWidth >= 878) {
        if (nav.classList.contains("nav-toggle") || overlay.classList.contains("active") || menu.classList.contains("close") || document.body.style.position === "fixed") {
            nav.style.display = "flex";
            nav.classList.remove('nav-toggle');
            menu.classList.remove("close")
            overlay.classList.remove("active");
            document.body.style.position = "relative";
        }
    }
}
// Initial check
checkScreenWidth();

// Add event listener to re-check when the window is resized
window.addEventListener('resize', checkScreenWidth);