const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

let myMap = L.map('main_map').setView([4.6534649, -74.0836453], 13);

    L.tileLayer(tilesProvider, {
        maxZoom:18,
    }).addTo(myMap);

    let  marker = L.marker([4.6534649, -74.0836453]).addTo(myMap);