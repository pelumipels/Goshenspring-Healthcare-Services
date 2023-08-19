const scriptURL = "https://script.google.com/macros/s/AKfycbzrDQ6khdQxDaa-CK36SjtSU8Abyf9BpcA8yIOw1vQWXo1m_IcCR5fj4ZjkZHBannZBmA/exec";
const form = document.querySelector('form[name="goshenspring-healthcare-services"]');
const formSubmit = document.querySelector(".form-submit");

formSubmit.addEventListener('click', e => {
    e.preventDefault();

		if (!form.checkValidity()) {
			form.reportValidity();
		} else {

			alert("Thank you for your submission!");

			formSubmit.disabled = true;
			formSubmit.classList.add('isLoading');
	
			fetch(scriptURL, {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.text())
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
}})