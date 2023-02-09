const numero = document.getElementById("numero");
console.log(numero);

let resultado = false;

let tempo = 3000;

setTimeout(() => {
    resultado = true;
}, tempo);

if (resultado) {
    numero.innerHTML = "Deu tudo certo";
    numero.classList.remove("erro");
    numero.classList.add("ok");
} else {
    numero.innerHTML = "Não deu certo";
    numero.classList.remove("ok");
    numero.classList.add("erro");
};

numero.innerHTML = "Processando..."