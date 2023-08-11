const scriptURL = "https://script.google.com/macros/s/AKfycbzrDQ6khdQxDaa-CK36SjtSU8Abyf9BpcA8yIOw1vQWXo1m_IcCR5fj4ZjkZHBannZBmA/exec";
const formSubmit = document.querySelector(".form-submit");
const forms = document.querySelectorAll('form[name="goshenspring-healthcare-services"]');

formSubmit.addEventListener('click', e => {
    e.preventDefault();
    let allFormsValid = [];

	forms.forEach(form => {
		if (!form.checkValidity()) {
			allFormsValid.push(false);
			form.reportValidity();
		} else {
			allFormsValid.push(true);
		}
	})

	if (allFormsValid.every(value => value === true)) {
		alert("Thank you for your submission!");

		forms.forEach(form => {
			// If all forms are valid, submit them
				formSubmit.disabled = true;
				formSubmit.classList.add('isLoading');
		
				fetch(scriptURL, {
					method: 'POST',
					body: new FormData(form)
				})
				.then(response => console.log(response.text()))
				.then(data => {
					form.reset();
					// alert('Thank you for your response!');
					formSubmit.disabled = false;
					formSubmit.classList.remove('isLoading');
					// console.log('Data sent successfully:', data)
				})
				.catch(error => {
					alert('Error:', error);
					formSubmit.disabled = false;
					formSubmit.classList.remove('isLoading');
					// console.error('Error!', error.message)
				})
			})
	}
})