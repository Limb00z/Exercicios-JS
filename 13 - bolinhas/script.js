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

class Bola {
    constructor(arrayBolas, palco) {
        this.tam = Math.floor((Math.random() * 15)) + 10;
        this.r = Math.floor(Math.random() * 255);
        this.g = Math.floor(Math.random() * 255);
        this.b = Math.floor(Math.random() * 255);
        this.px = Math.floor(Math.random() * larguraPalco - this.tam);
        this.py = Math.floor(Math.random() * alturaPalco - this.tam);
        this.velx = Math.floor(Math.random() * 2) + 0.5;
        this.vely = Math.floor(Math.random() * 2) + 0.5;
        this.dirx = (Math.random() * 10) > 5 ? 1 : -1;
        this.diry = (Math.random() * 10) > 5 ? 1 : -1;
        this.arrayBolas = arrayBolas
        this.palco = palco;
        this.id = Date.now() + "_" + Math.floor(Math.random() * 999999999999999999999);
        this.desenhar();
        this.controle = setInterval(this.controlar, 10);
        this.eu = document.getElementById(this.id);
        numBola++;
        num_objetos.innerHTML = numBola;
    }
    minhaPos = () => {
        return this.arrayBolas.indexOf(this)
    }

    remover = () => {
        clearInterval(this.controle);
        bolas = bolas.filter((b) => {
            if (b.id != this.id) {
                return b;
            };
        });
        this.eu.remove();
        numBola--;
        num_objetos.innerHTML = numBola;
    }

    desenhar = () => {
        
    }

    controlar = () => {
        
    }
}

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