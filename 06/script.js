class Carro { //Classe PAI //BASE
    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.vel = 0;
        this.cor = undefined;
    }

    ligar = function () {
        this.ligado = true
    }

    desligar = function () {
        this.ligado = false
    }

    setCor = function (cor) {
        this.cor = cor
    }
}

class Militar extends Carro{ //classe filho 
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas);
        this.blindagem = blindagem;
        this.municao = municao;
        this.setCor("Verde");
    }

    atirar = function () {
        if (this.municao > 0) {
            console.log("Bang");
            this.municao--;
        } else {
            console.log('Você está sem munição soldado...');
        };
    };
};

let luxx = new Militar('Luxx', 5, 100, 50);

console.log(luxx);

luxx.atirar();
luxx.atirar();
luxx.atirar();
luxx.atirar();
luxx.atirar();

console.log(luxx);