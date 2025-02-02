document.addEventListener("DOMContentLoaded", function () {
    console.log("script.js loaded and DOM fully loaded");

    const contactForm = document.getElementById("contactForm");

    // Check if the form is loaded
    if (!contactForm) {
        console.error("Error: Form not found in the DOM!");
        return;
    }

    console.log("Contact form found, adding submit event listener...");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Form submitted!");

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Log values to see what is being submitted
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        // Ensure all fields are filled
        if (!name || !email || !message) {
            console.error("Form validation failed: Missing name, email, or message.");
            alert("Bitte fülle alle Felder aus.");
            return;
        }

        // Everything is good, show success message
        console.log("Form data is valid.");
        alert(`Danke für deine Nachricht, ${name}!`);

        // Optional: Reset the form after submission
        contactForm.reset();
    });
});
