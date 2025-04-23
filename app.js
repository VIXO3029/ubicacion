// Verifica si el navegador soporta geolocalización
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
  
        // Inicializa el mapa con Leaflet
        const map = L.map('map').setView([lat, lng], 13);
  
        // Carga de tiles desde OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);
  
        // Añadir marcador en tu ubicación
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup('Estás aquí')
          .openPopup();
      },
      function (error) {
        alert('Error al obtener tu ubicación: ' + error.message);
      }
    );
  } else {
    alert('Tu navegador no soporta geolocalización.');
  }
  