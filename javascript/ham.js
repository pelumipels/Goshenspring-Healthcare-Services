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
    document.body.style.overflowY = "hidden";
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
        if (document.body.style.overflowY === "hidden") {
            document.body.style.overflowY = "auto";
        }
    });
});

closeButton.addEventListener('click', () => {
    overlay.classList.toggle("active");
    nav.classList.toggle('nav-toggle');
    menu.classList.toggle('close');
    document.body.style.overflowY = "auto";
});

overlay.addEventListener("click", () => {
    overlay.classList.toggle("active");
    overlay.style.overflow = "auto";
    nav.classList.toggle('nav-toggle');
    menu.classList.toggle('close');
    document.body.style.overflowY = "auto";
});

function checkScreenWidth() {

    if (window.innerWidth < 878) {
        if (nav.classList.contains("nav-toggle")) {
            document.body.style.overflowY = "hidden";
            nav.style.overflowY = "hidden"
        }
        if (overlay.classList.contains("active")) {
            overlay.style.overflow = "hidden";
        }
        if (document.body.style.overflowY = "hidden" && !nav.classList.contains("nav-toggle")) {
            document.body.style.overflowY = "auto";
        }
    }
    if (window.innerWidth >= 878) {
        if (nav.classList.contains("nav-toggle")) {
            nav.style.display = "flex";
            nav.classList.toggle('nav-toggle');
        }
        if (overlay.classList.contains("active")) {
            overlay.classList.toggle("active");
            overlay.style.overflow = "auto";
        }
        if (document.body.style.overflowY = "hidden" && !nav.classList.contains("nav-toggle")) {
            document.body.style.overflowY = "auto";
        }
    }
}
// Initial check
checkScreenWidth();

// Add event listener to re-check when the window is resized
window.addEventListener('resize', checkScreenWidth);