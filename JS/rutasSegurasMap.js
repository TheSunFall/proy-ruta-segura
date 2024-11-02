  // Inicializar el mapa en la ubicación de la UNMSM
  var map = L.map('rutasSegurasMap').setView([-12.0566, -77.0844], 16);

  // Capa de mapa de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
  }).addTo(map);

  // Marcador para la UNMSM
  var marker = L.marker([-12.0566, -77.0844]).addTo(map);
  marker.bindPopup("<b>Universidad Nacional Mayor de San Marcos</b><br>Ciudad Universitaria, Lima, Perú").openPopup();

  var latlngs = [
    [-12.059517, -77.079330],
    [-12.059497, -77.079258],
    [-12.060018, -77.079132],
    [-12.060105, -77.079235],
    [-12.060432, -77.079240],
    [-12.061014, -77.079151],
    [-12.061711, -77.078983],
];
var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(map);
// zoom the map to the polyline
map.fitBounds(polyline.getBounds());