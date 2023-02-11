const palco = document.getElementById("palco");
const num_objetos = document.getElementById("num_objetos");
const txt_qtde = document.getElementById("txt_qtde");
const btn_add = document.getElementById("btn_add");
const btn_remover = document.getElementById('btn_remover')

//console.log(palco,num_objetos,txt_qtde,btn_add,btn_remover);

let larguraPalco = palco.offsetWidth;
let alturaPalco = palco.offsetHeight;

let bolas = []; // array onde vão ficar as bolinhas
let numBola = 0; //qtd de bolas totais

class Bola {
    constructor(arrayBolas, palco) {
        this.tam = Math.floor((Math.random() * 15)) + 10; //tamanho de 0 á 15 +10( = de 10 a 25)
        this.r = Math.floor(Math.random() * 255); //coraleatória
        this.g = Math.floor(Math.random() * 255); //cor aleatória
        this.b = Math.floor(Math.random() * 255); //cor aleatória
        this.px = Math.floor(Math.random() * larguraPalco - this.tam); //posição x
        this.py = Math.floor(Math.random() * alturaPalco - this.tam); //posição y
        this.velx = Math.floor(Math.random() * 2) + 0.5; // velocidade x
        this.vely = Math.floor(Math.random() * 2) + 0.5; // velocidade y
        this.dirx = (Math.random() * 10) > 5 ? 1 : -1;  //direção x que ela tem que ir, com operrador ternário
        this.diry = (Math.random() * 10) > 5 ? 1 : -1;  //direção y que ela tem que ir, com operrador ternário
        this.arrayBolas = arrayBolas
        this.palco = palco;
        this.id = Date.now() + "_" + Math.floor(Math.random() * 999999999999999999999); // nomenando cada bola, colocando com um timestamp e id unico, dificilmente o id se repetiria com esse tanto de 9 kkkk
        this.desenhar();
        this.controle = setInterval(this.controlar, 10); //Executar controle a cada 10milisegundos.
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

    desenhar = () => { //construindo a bolinha como div com id e atribuindo o css
        const div = document.createElement("div");
        div.setAttribute("id", this.id);
        div.setAttribute("class", "bola");
        div.setAttribute("style", `left: ${this.px}px; top:${this.py}px; width:${this.tam}px; height:${this.tam}px; background-color:rgb(${this.r},${this.g},${this.b});`);
        this.palco.appendChild(div); 
    }

    controle_bordas = () => { //controle de colisão-------

        if (this.px + this.tam >= larguraPalco) { //se posição x + tamanho for maior ou igual a larguraPalco, direção x, recebe -1
            this.dirx = -1
        
        } else if (this.px <= 0) { //se posição x + tamanho for menor ou igual a 0(zero), direção x ,recebe 1
            this.dirx = 1
        };

        if (this.py + this.tam >= alturaPalco) { //se posição y + tamanho for maior ou igual a alturaPalco, direção x, recebe -1
            this.diry = -1
        
        } else if (this.py <= 0) {   //se posição y + tamanho for menor ou igual a 0(zero), direção x, recebe 1
            this.diry = 1
        };


    }

    controlar = () => {
        this.controle_bordas();
        this.px += this.dirx * this.velx; //posição x adiciona o valor da direção x  vezes velocidade x
        this.py += this.diry * this.vely; //posição y adiciona o valor da direção y  vezes velocidade y
        this.eu.setAttribute("style", `left: ${this.px}px; top:${this.py}px; width:${this.tam}px; height:${this.tam}px; background-color:rgb(${this.r},${this.g},${this.b});`); // atribuindo css nas bolas.
        if ((this.px > larguraPalco) || (this.py > alturaPalco)){ //Se por algum bug, popsições forem maior que limite da tela, será removido. 
            this.remover();
        };
    }
}

window.addEventListener("resize", (evento) => {  //definindo o tamanho apenas da tela, e eliminando qualquer coisa que tiver fora da tela
    //console.log('teste');
    larguraPalco = palco.offsetWidth;
    alturaPalco = palco.offsetHeight; 
})

btn_add.addEventListener("click", (evento) => { // evento de clicar no botão e criar novas bolas, pela classe Bola, já dento dp array. pelo metódo .push
    const qtde = txt_qtde.value;
    for (let i = 0; i < qtde; i++){
       bolas.push(new Bola(bolas, palco));
    }
});

btn_remover.addEventListener("click", (evento) => { //limpar a tela pelo botão
    bolas.map((b) => {
        b.remover()
    })
});