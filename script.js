// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Get the form element by ID
    const contactForm = document.getElementById("contactForm");

    // Check if the form exists to avoid errors if the element is missing
    if (contactForm) {
        // Add an event listener to handle form submission
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the form from submitting in the usual way

            // Get the values from the input fields
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            // Check if any of the fields are empty
            if (!name || !email || !message) {
                alert("Bitte fülle alle Felder aus.");
                return; // Exit the function if any field is empty
            }

            // If all fields are filled, show a success message
            alert("Danke für deine Nachricht, " + name + "!");
            
            // Optionally, you can reset the form after successful submission
            contactForm.reset();
        });
    } else {
        console.error("Kontaktformular nicht gefunden.");
    }

    // For debugging purposes, log that the script loaded successfully
    console.log("script.js successfully loaded!");
});
