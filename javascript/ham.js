const menu = document.querySelector('header .hamburgerMenu');
const nav = document.querySelector('header .nav-bar nav');
const nav2 = document.querySelectorAll('header .nav-bar nav a');
const closeButton = document.querySelector('.closeButton');
const overlay = document.querySelector(".nav_overlay");

menu.addEventListener('click', () => {
    overlay.classList.toggle("active");
    // overlay.style.pointerEvents = "auto";
    nav.classList.toggle('nav-toggle');
    menu.classList.toggle('close');
    document.body.style.overflow = "hidden"
});


function checkScreenWidth() {
    if (window.innerWidth < 878 || window.outerWidth < 878 || window.screen.availWidth || window.screen.width) {

        nav2.forEach((item) => {
            item.addEventListener('click', () => {
                overlay.classList.toggle("active");
                nav.classList.toggle('nav-toggle');
                menu.classList.toggle('close');
                document.body.style.overflow = "auto";
            });
        });

    }
}

closeButton.addEventListener('click', () => {
    overlay.classList.toggle("active");
    // overlay.style.pointerEvents = "none";
    nav.classList.toggle('nav-toggle');
    menu.classList.toggle('close');
    document.body.style.overflow = "auto";
});

overlay.addEventListener("click", () => {
    overlay.classList.toggle("active");
    // overlay.style.pointerEvents = "none";
    nav.classList.toggle('nav-toggle');
    menu.classList.toggle('close');
    document.body.style.overflow = "auto";
});

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);