document.addEventListener("DOMContentLoaded", function () {
    console.log("script.js is loading");

    const contactForm = document.getElementById("contactForm");

    // Ensure the form exists
    if (!contactForm) {
        console.error("Form not found on this page.");
        return;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Form submitted!");

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check if all fields are filled
        if (!name || !email || !message) {
            console.error("One or more fields are empty!");
            alert("Bitte fülle alle Felder aus.");
            return;
        }

        console.log(`Form submitted by: ${name}, ${email}`);
        alert("Danke für deine Nachricht, " + name + "!");

        // Optional: Reset the form after submission
        contactForm.reset();
    });
});
