let lati = document.getElementById("lati");
let long = document.getElementById("long");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarLocalização);
}else{
    console.log("Gps não suportado");
}

function mostrarLocalização(pos) {
    lati.innerHTML = `Latitude: ${pos.coords.latitude}`;
    long.innerHTML = `Longitude: ${pos.coords.longitude}`;
}

function erroLocalização() {
    console.log("Erro ao obter gps");
}