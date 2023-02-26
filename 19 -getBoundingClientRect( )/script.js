const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const posx = document.getElementById("posx");
const posy = document.getElementById("posy");
const largura = document.getElementById("largura");
const altura = document.getElementById("altura");

let DOMRect_q1 = q1.getBoundingClientRect();

posx.innerHTML = `posx: ${DOMRect_q1.x}`;
posy.innerHTML = `posy: ${DOMRect_q1.y}`;
largura.innerHTML = `largura: ${DOMRect_q1.width}`;
altura.innerHTML = `altura: ${DOMRect_q1.height}`;

