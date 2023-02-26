const carro = document.getElementById("carro");
const btn_esquerda = document.getElementById("btn_esquerda");
const btn_direita = document.getElementById("btn_direita");


//console.log(carro,btn_direita,btn_esquerda);

const init = () => {
    carro.style.position = "relative";
    carro.style.left = "0px";
};

btn_esquerda.addEventListener("click", () => {
    let pos = parseInt(carro.style.left);
    pos -= 10;
    carro.style.left =`${pos}px`;
});

btn_direita.addEventListener("click", () => {
    carro.style.left = parseInt(carro.style.left) + 10 + "px";
})

window.onload = init;