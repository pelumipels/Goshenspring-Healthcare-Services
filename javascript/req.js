const usernameInputs = document.querySelectorAll('input[type=radio], textarea');

function checkScreenWidth() {
    usernameInputs.forEach(input => {
        if (window.innerWidth >= 878) {
            input.setAttribute('required', true);
        } else {
            input.removeAttribute('required');
        };
    });
};

// Initial check
checkScreenWidth();

// Add event listener to re-check when the window is resized
window.addEventListener('resize', checkScreenWidth);