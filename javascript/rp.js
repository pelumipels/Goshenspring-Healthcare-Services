// Function to add the form on click
var number = 1;
function addForm() {
    const formContainer = document.getElementById('formContainer');
    const formHTML = `
        <div class="frame41"></div>
        <form action="" class="data-form">
            <div class="part6">
                <div>
                    <label for="refer${number}"><span>NAME OF REFEREE </span><span>*</span></label>
                    <input type="text" name="refer" id="refer${number}" placeholder="Enter your city here" onkeypress="// noinspection JSDeprecatedSymbols
                    return a(event)" required>
                </div>
                
                <div>
                    <label for="emailAd${number}"><span>EMAIL ADDRESS OF REFEREE </span><span>*</span></label>
                    <input type="email" name="emailAd" id="emailAd${number}" placeholder="Choose your state" required>
                </div>
            </div>
        </form>
        <button class="remove-form">Remove</button>
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

// Add event listener to the "Add Form" button
const addFormButton = document.querySelector('.referCircle');
addFormButton.addEventListener('click', () => {
    addForm();
    number++;
});

// Add event listener to the "Send Data to Google Sheets" button
const sendDataButton = document.querySelector('.form-submit');
sendDataButton.addEventListener('click', () => {

    const formsDefault = document.querySelector('form[name="goshenspring-healthcare-services"]');
    const nameDefault = document.querySelector('form[class="default12"]');
    const forms = document.querySelectorAll('.data-form');
    const formData = new FormData(nameDefault);
    sendDataButton.classList.add('isLoading');
    var defaultEmail;
    defaultEmail = formData.get('emailA');
    sendDataButton.disabled = true;
    let allFormsValid = [];

    // formsDefault.forEach(form => {
        if (!formsDefault.checkValidity()) {
            formsDefault.reportValidity(); // Display validation messages
            sendDataButton.disabled = false;
            sendDataButton.classList.remove('isLoading');
        }
        if (forms.length > 0) {
            forms.forEach(form => {
                if (!form.checkValidity()) {
                    allFormsValid.push(false);
                    form.reportValidity(); // Display validation messages
                    sendDataButton.disabled = false;
                    sendDataButton.classList.remove('isLoading');
                } else {
                    allFormsValid.push(true);
                }
            });
        }


        if (formsDefault.checkValidity() && allFormsValid.every(value => value === true)) {
            alert("Thank you for your submission!");
            const formData1 = new FormData(formsDefault);
            sendDataToGoogleSheets(formData1);
            formsDefault.reset();
            
            if (forms.length > 0) {
                forms.forEach(form => {
                    const formData2 = new FormData(form);
                    if (formData2.get('emailA') === null) {
                        formData2.append('emailA', defaultEmail)
                    }
                    // If all forms are valid, submit them
                    sendDataToGoogleSheets(formData2);
                    form.reset();
                });
            }
            sendDataButton.disabled = false;
            sendDataButton.classList.remove('isLoading');
        }
});