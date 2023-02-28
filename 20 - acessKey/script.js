const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const posx = document.getElementById("posx");
const posy = document.getElementById("posy");
const largura = document.getElementById("largura");
const altura = document.getElementById("altura");


const info = (el) => {
    let DOMRect_q = el.getBoundingClientRect();
    posx.innerHTML = `posx: ${DOMRect_q.x}`;
    posy.innerHTML = `posy: ${DOMRect_q.y}`;
    largura.innerHTML = `largura: ${DOMRect_q.width}`;
    altura.innerHTML = `altura: ${DOMRect_q.height}`;
}

window.addEventListener("click", (evento) => {
    info(evento.target);// onde cliccar mostrará a posição
});

