document.addEventListener("DOMContentLoaded", function () {
    const findRouteButton = document.getElementById("findRoute");
    const startLocation = document.getElementById("startLocation");
    const destination = document.getElementById("destination");
    const routeResult = document.getElementById("routeResult");

    findRouteButton.addEventListener("click", function () {
        if (!startLocation.value || !destination.value) {
            routeResult.textContent = "Please enter both start and destination.";
            return;
        }

        routeResult.textContent = `Calculating the most eco-friendly route from ${startLocation.value} to ${destination.value}...`;
        
        // Simulate fetching route
        setTimeout(() => {
            routeResult.textContent = `Best eco-friendly route from ${startLocation.value} to ${destination.value} found! 🚴‍♂️🚶‍♂️`;
        }, 2000);
    });
});
