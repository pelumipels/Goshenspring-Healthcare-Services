const selectElement = document.getElementById("state");

// Get the array of all states in the USA
const allStatesArray = getAllStates();

allStatesArray.forEach((state) => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    selectElement.appendChild(option);
});

// Function to get an array of all states in the USA
function getAllStates() {
    return [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ];
};

// Function to populate the timezone drop-down list
function populateTimezones() {
    const selectElement = document.getElementById("ptz");
    const timezones = moment.tz.names();

    // Create options for each timezone
    timezones.forEach((timezone) => {
        const option = document.createElement("option");
        option.value = timezone;
        option.textContent = timezone;
        selectElement.appendChild(option);
    });
};

// Call the function to populate the timezone and getting all the states drop-down list on page load
window.onload = function () {
    populateTimezones();
    getAllStates();
};