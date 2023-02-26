const carro = document.getElementById("carro");
const btn_esquerda = document.getElementById("btn_esquerda");
const btn_parar = document.getElementById("btn_parar");
const btn_direita = document.getElementById("btn_direita");




//console.log(carro,btn_direita,btn_esquerda);

const init = () => {
    carro.style.position = "relative";
    carro.style.left = "0px";
    carro.style.width = "100px";
    tamMax = window.innerWidth - parseInt(carro.style.width);
    alert("Setas Esquerda ou Direita: andar \nSetas Cima e Baixo: tamanho do carro \nENTER: Parar o carro");
};

let anima = null;
let tamMax = null; 

const move = (dir) => {
    if(dir > 0){
        if(parseInt(carro.style.left) <= tamMax){
            carro.style.left=parseInt(carro.style.left) + (10*dir) + 'px'
            anima=setTimeout(move,20,dir)
        
        if(parseInt(carro.style.left)>tamMax) {            
        anima=setTimeout(move,20,dir*-1)            
        }}
    }   
    if (dir < 0) {
        if (parseInt(carro.style.left) >= 0) {
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'
            anima = setTimeout(move, 20, dir)

            if (parseInt(carro.style.left) < 0) {
                anima = setTimeout(move, 20, dir * -1)
            }
        }
    }
    
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
            carro.style.height = parseInt(carro.style.height) - 10 + "px";
            carro.style.width = parseInt(carro.style.width) - 10 + "px";
            break;
        
        case "ArrowUp":
            carro.style.height = parseInt(carro.style.height) + 10 + "px";
            carro.style.width = parseInt(carro.style.width) + 10 + "px";
            break;
        
        case "Enter":
            clearTimeout(anima);           
        
        default:
            break;
    }
})

window.onload = init;
window.addEventListener("resize", () => {
    tamMax = window.innerWidth - parseInt(carro.style.width)
})