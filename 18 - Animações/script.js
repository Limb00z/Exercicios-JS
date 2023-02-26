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
    carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px";
    anima = setTimeout(move, 50, dir);
};

btn_parar.addEventListener("click", () => {
    clearTimeout(anima);
})

btn_esquerda.addEventListener("click", () => {
    clearTimeout(anima);
    move(-1)
});

btn_direita.addEventListener("click", () => {
    clearTimeout(anima);
    move(1)
})

document.addEventListener("keydown", (evento) => {
    let key = evento.key;

    switch (evento.key) {
        case "ArrowLeft":
            clearTimeout(anima);
            move(-1)
            break;
        
        case "ArrowRight":
            clearTimeout(anima);
            move(1)
            break;
        
        case "ArrowDown":
            clearTimeout(anima);
            break;
        
        case "ArrowUp":
            clearTimeout(anima);
            break;
        
        default:
            break;
    }
})

window.onload = init;