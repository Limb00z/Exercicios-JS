const olhos = [...document.getElementsByClassName("olho")];

let posX_mouse = 0;  
let posY_mouse = 0;

window.addEventListener("mousemove", (evento) => {
    posX_mouse = evento.clientX;
    posY_mouse = evento.clientY;
    console.log(posX_mouse);;// para ver a posição do mouse.
});