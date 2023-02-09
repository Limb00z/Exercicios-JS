const numero = document.getElementById("numero");
console.log(numero);

let promisse = new Promise((resolvido, rejeitado) => {
    let resultado = false;
    let tempo = 3000;
    setTimeout(() => {
        if (resultado) {
            resolvido("Deu tudo certo");
        } else {
            rejeitado("Deu tudo errado")
        }
    }, tempo);
});

//caso dê certo
promisse.then();

//caso dê errado
promisse.catch();





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