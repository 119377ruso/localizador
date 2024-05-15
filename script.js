document.addEventListener("DOMContentLoaded", () => {
    // Mostrar hora y fecha
    function updateTimeAndDate() {
        const now = new Date();
        const time = now.toLocaleTimeString();
        const date = now.toLocaleDateString();

        document.getElementById('time').textContent = `Hora: ${time}`;
        document.getElementById('date').textContent = `Fecha: ${date}`;
    }

    // Actualizar cada segundo
    setInterval(updateTimeAndDate, 1000);
    updateTimeAndDate(); // Ejecutar inmediatamente

    // Obtener ubicación
    function showLocation(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        document.getElementById('coords').textContent = `Ubicación: Latitud ${latitude}, Longitud ${longitude}`;
    }

    function errorHandler(err) {
        document.getElementById('coords').textContent = "No se pudo obtener la ubicación.";
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation, errorHandler);
    } else {
        document.getElementById('coords').textContent = "Geolocalización no es soportada por este navegador.";
    }
});
