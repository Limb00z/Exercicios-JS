const carro = document.getElementById("carro");
const btn_esquerda = document.getElementById("btn_esquerda");
const btn_parar = document.getElementById("btn_parar");
const btn_direita = document.getElementById("btn_direita");


//console.log(carro,btn_direita,btn_esquerda);

const init = () => {
    carro.style.position = "relative";
    carro.style.left = "0px";
};

let anima = null;

const move = (dir) => {
    carro.style.left = parseInt(carro.style.left) + (10*dir) + "px";
};

btn_parar.addEventListener("click", () => {
    clearInterval(anima);
})

btn_esquerda.addEventListener("click", () => {
    clearInterval(anima);
    anima = setInterval(move, 50, -1);
});

btn_direita.addEventListener("click", () => {
    clearInterval(anima);
    anima = setInterval(move, 50, 1);
})

document.addEventListener("keydown", (evento) => {
    let key = evento.key;

    switch (evento.key) {
        case "ArrowLeft":
            clearInterval(anima);
            anima = setInterval(move, 50, -1);
            break;
        
        case "ArrowRight":
            clearInterval(anima);
            anima = setInterval(move, 50, 1);
            break;
        
        case "ArrowDown":
            clearInterval(anima);
            break;
        
        case "ArrowUp":
            clearInterval(anima);
            break;
        
        default:
            break;
    }
})

window.onload = init;