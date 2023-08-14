document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.querySelector("svg");
    
    backButton.addEventListener("click", function () {
      history.back(); // Go back to the previous page
    });
  });