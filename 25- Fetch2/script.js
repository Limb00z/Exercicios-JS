const texto = document.getElementById("texto");

const endpoint = "teste.txt";

fetch(endpoint)
    .then(res => res.text())
    .then(res => {
        console.log(res);
    })