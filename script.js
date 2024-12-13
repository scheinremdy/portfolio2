// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "🌞";  // Switch to light mode
    } else {
        darkModeToggle.textContent = "🌙";  // Switch to dark mode
    }
});
