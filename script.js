document.addEventListener("DOMContentLoaded", function () {
    // Select the form using its ID
    const contactForm = document.getElementById("contactForm");

    // If the form exists, add a submit event listener
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            // Get values from the input fields
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            // Validate if the fields are not empty
            if (!name || !email || !message) {
                alert("Bitte fülle alle Felder aus.");
                return; // Exit if any field is empty
            }

            // Display success message
            alert("Danke für deine Nachricht, " + name + "!");
            contactForm.reset(); // Reset the form after submission
        });
    } else {
        console.error("Kontaktformular nicht gefunden.");
    }

    // For debugging purposes
    console.log("script.js successfully loaded!");
});
