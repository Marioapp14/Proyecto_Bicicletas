
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

let myMap = L.map('main_map').setView([4.6534649, -74.0836453], 13);

    L.tileLayer(tilesProvider, {
        maxZoom:18,
    }).addTo(myMap);

    let  marker = L.marker([4.6534649, -74.0836453], ).addTo(myMap);
    let  marker2 = L.marker([4.6187533, -74.1592163], ).addTo(myMap);

    $.ajax({
        dataType: "json",
        url: "/api/bicicletas",
        success: function(result){
            console.log(result);
            result.bicicletas.forEach(function(bici){
                let  marker = L.marker(bici.ubicacion, {title: bici.id}).addTo(myMap);            
            });
        }
    })