const palco = document.getElementById("palco");
const num_objetos = document.getElementById("num_objetos");
const txt_qtde = document.getElementById("txt_qtde");
const btn_add = document.getElementById("btn_add");
const btn_remover = document.getElementById('btn_remover')

//console.log(palco,num_objetos,txt_qtde,btn_add,btn_remover);

let larguraPalco = palco.offsetWidth;
let alturaPalco = palco.offsetHeight;

let bolas = [];
let numBola = 0;

window.addEventListener("resize", (evento) => {
    //console.log('teste');
    larguraPalco = palco.offsetWidth;
    alturaPalco = palco.offsetHeight;
})

btn_add.addEventListener("click", (evento) => {
    const qtde = txt_qtde.ariaValueMax;
    for (let i = 0; i < qtde; i++){
        //instanciar novas bolinhas
    }
});

btn_remover.addEventListener("click", (evento) => {
    bolas.map((b) => {
        //remover a bolinha
    })
});