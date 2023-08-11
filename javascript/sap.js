const scriptURL = "https://script.google.com/macros/s/AKfycbz_ia0byi-FW2Tlin_QHk61eTZbKuSPH0YgfaFZV-zgIcc3M5HwDu_IVcKJv18PDYAM/exec";
const form = document.forms["goshenspring-healthcare-services"];
const submitButton = document.querySelector(".form-submit");


form.addEventListener('submit', e => {
    e.preventDefault();
    submitButton.disabled = true;
    submitButton.classList.add('isLoading');

    fetch(scriptURL, { 
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => response.text())
    .then(data => {
        form.reset();
        alert('Thank you for your response, we will get back to you soon!');
        submitButton.disabled = false;
        submitButton.classList.remove('isLoading');
        // console.log('Data sent successfully:', data)
    })
      .catch(error => {
        alert('Error:', error);
        submitButton.disabled = false;
        submitButton.classList.remove('isLoading');
        // console.error('Error!', error.message)
      })
  })