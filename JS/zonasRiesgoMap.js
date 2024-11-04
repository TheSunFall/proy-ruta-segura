 // Inicializar el mapa en la ubicación de la UNMSM
 let map = L.map('zonasRiesgoMap').setView([-12.0566, -77.0844], 16); // Coordenadas de la Ciudad Universitaria

 // Capa de mapa de OpenStreetMap
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '© OpenStreetMap'
 }).addTo(map);

 // Marcador para la UNMSM
 let marker = L.marker([-12.0566, -77.0844]).addTo(map);
 marker.bindPopup("<b>Universidad Nacional Mayor de San Marcos</b><br>Ciudad Universitaria, Lima, Perú").openPopup();

 let puerta_1 = L.circle([-12.061466, -77.085713], {radius: 20, color: "#ff8000"}).addTo(map);
    puerta_1.bindPopup(`<h3><b>Puerta 1</b></h3><div>Horas donde más roban</div><ul><li>6:00 p.m. 10 p.m.</li></ul>`)
 let puerta_7 = L.circle([-12.053782, -77.084433], {radius: 20, color: "#ffc100"}).addTo(map);
    puerta_7.bindPopup(`<h3><b>Puerta 7</b></h3><div>Horas donde más roban</div><ul><li>7 p.m. - 10 p.m.</li></ul>`)
 let puerta_8 = L.circle([-12.051823, -77.087571], {radius: 20, color: "#ff8000"}).addTo(map);
    puerta_8.bindPopup(`<h3><b>Puerta 8</b></h3><div>Horas donde más roban</div><ul><li>8 p.m. - 10 p.m.</li></ul>`)
 let puerta_4 = L.circle([-12.055759, -77.080733], {radius: 40, color: "#80ff00"}).addTo(map);
    puerta_4.bindPopup(`<h3><b>Puerta 4</b></h3><div>Horas donde más roban</div><ul><li>7 p.m. - 10 p.m.</li></ul>`)
 let puerta_2 = L.circle([-12.059459, -77.079179], {radius: 15, color: "#ffc100"}).addTo(map);
    puerta_2.bindPopup(`<h3><b>Puerta 2</b></h3><div>Horas donde más roban</div><ul><li>12 p.m. - 2 p.m.</li><li>7 p.m. - 10 p.m.</li></ul>`)
 let bajo_puente = L.circle([-12.060256, -77.079252], {radius: 15, color: "#ff0000"}).addTo(map);
    bajo_puente.bindPopup(`<h3><b>Bajo el puente</b></h3><div>Horas donde más roban</div><ul><li>7 p.m. - 10 p.m.</li></ul>`)
 let puerta_7_parque = L.circle([-12.051846, -77.084210], {radius: 100, color: "red"}).addTo(map);
    puerta_7_parque.bindPopup(`<h3><b>Parque puerta 7</b></h3><div>Horas donde más roban</div><ul><li>7 p.m. - 8 p.m.</li></ul>`)

    
 function zonasEvent(e){
    //alert("latitud:"  + e.latlng.lat+", longitud: "+e.latlng.lng);
 }

map.on("click", zonasEvent);