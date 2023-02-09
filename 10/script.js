const numero = document.getElementById("numero");
console.log(numero);

const btn_promessa = document.getElementById("btn_promessa");
console.log(btn_promessa);


const promessa = () => {
    let p = new Promise((resolvido, rejeitado) => {
        let resultado = true;
        let tempo = 3000;
        setTimeout(() => {
            if (resultado) {
                resolvido("Deu tudo certo");
                numero.innerHTML = "Deu tudo certo";
                numero.classList.remove("erro");
                numero.classList.add("ok");
            } else {
                rejeitado("Deu tudo errado")
                numero.innerHTML = "Deu tudo errado";
                numero.classList.remove("ok");
                numero.classList.add("erro");
            }
        }, tempo);
    });

    
}



btn_promessa.addEventListener("click", (evento) => {
    numero.innerHTML = "Processando...";
    promessa();
})









// if (resultado) {
//     numero.innerHTML = "Deu tudo certo";
//     numero.classList.remove("erro");
//     numero.classList.add("ok");
// } else {
//     numero.innerHTML = "Não deu certo";
//     numero.classList.remove("ok");
//     numero.classList.add("erro");
// };

numero.innerHTML = "Esperando click <br/>"