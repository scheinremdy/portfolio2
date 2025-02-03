document.addEventListener("DOMContentLoaded", function () {
    console.log("script.js loaded and DOM fully loaded");

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        console.error("Error: Form not found in the DOM!");
        return;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Form submitted!");

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Bitte fülle alle Felder aus.");
            return;
        }

        alert(`Danke für deine Nachricht, ${name}!`);
        contactForm.reset();
    });
});
