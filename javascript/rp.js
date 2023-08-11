// Function to add the form on click
function addForm() {
    const formContainer = document.getElementById('formContainer');
    const formHTML = `
            <form action="" class="data-form">
                <div class="part4">
                    <div class="eachDiv refer">
                        <label class="refer" for="refer"><span>NAME OF REFEREE </span><span>*</span></label>
                        <input type="text" name="refer" id="refer" placeholder="Enter your city here" onkeypress="// noinspection JSDeprecatedSymbols
                        return a(event)" required>
                    </div>
                    
                    <div class="eachDiv emailA">
                        <label class="emailA" for="emailA"><span>EMAIL ADDRESS OF REFEREE</span><span>*</span></label>
                        <input type="email" name="emailAd" id="emailA" placeholder="Choose your state" required>
                    </div>
                </div>
            </form>
            <button class="remove-form">Delete</button>
    `;

    // Create a new form element and append it to the container
    const formElement = document.createElement('div');
    formElement.innerHTML = formHTML;
    formContainer.appendChild(formElement);

    // Add event listener for removing the form
    const removeButton = formElement.querySelector('.remove-form');
    removeButton.addEventListener('click', () => {
        formContainer.removeChild(formElement);
    });
};

// Function to send form data to Google Sheets
function sendDataToGoogleSheets(formData) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx1Zj4VyBBYvrSLr37SZw5URbqWe7fOi9P2DVQHUaGzFQxFdIzWGsXOO_bPBcLl-PIP1Q/exec';

    fetch(scriptURL, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        sendDataButton.disabled = false;
        sendDataButton.classList.remove('isLoading');
        // alert('Thank you for your response, we will get back to you soon!')
        // console.log('Data sent successfully:', data);
    })
    .catch(error => {
        alert('Error:', error);
        sendDataButton.disabled = false;
        sendDataButton.classList.remove('isLoading');
        // console.error('Error sending data:', error);
    });
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    sendDataToGoogleSheets(formData);
}

// Add event listener to the "Add Form" button
const addFormButton = document.querySelector('.referCircle');
addFormButton.addEventListener('click', () => {
    addForm();
    const forms = document.querySelectorAll('.data-form');
    forms.forEach(form => {
        form.addEventListener('submit', handleSubmit);
    });
});

// Add event listener to the "Send Data to Google Sheets" button
const sendDataButton = document.querySelector('.form-submit');
sendDataButton.addEventListener('click', () => {

    const formsDefault = document.querySelectorAll('form[name="goshenspring-healthcare-services"]');
    const nameDefault = document.querySelector('form[class="default12"]');
    const forms = document.querySelectorAll('.data-form');
    const formData = new FormData(nameDefault);
    sendDataButton.classList.add('isLoading');
    defaultEmail = formData.get('emailA');
    sendDataButton.disabled = true;
    let allFormsValid = [];
    var defaultEmail;

    formsDefault.forEach(form => {
        if (!form.checkValidity()) {
            allFormsValid.push(false);
            form.reportValidity(); // Display validation messages
        } else {
            allFormsValid.push(true);
        }
    });
    
    forms.forEach(form => {
        if (!form.checkValidity()) {
            allFormsValid.push(false);
            form.reportValidity(); // Display validation messages
        } else {
            allFormsValid.push(true);
        }
    });

    if (allFormsValid.every(value => value === true)) {
        alert("Thank you for your submission!");

        formsDefault.forEach(form => {
            const formData = new FormData(form);
            if (formData.get('emailA') === null) {
                formData.append('emailA', defaultEmail)
            }
            // If all forms are valid, submit them
            form.reset();
            sendDataToGoogleSheets(formData);
        });

        forms.forEach(form => {
            const formData = new FormData(form);
            if (formData.get('emailA') === null) {
                formData.append('emailA', defaultEmail)
            }
            // If all forms are valid, submit them
            form.reset();
            sendDataToGoogleSheets(formData);
        });

    } else {
        sendDataButton.disabled = false;
        sendDataButton.classList.remove('isLoading');
    }
});