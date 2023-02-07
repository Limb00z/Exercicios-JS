/*
    POLIMORFISMO  --  Em resumo é quando eu tenho metodos com os nomes iguais em herança, mas que desempenham papeis diferentes.    
        ex:
            class Carro {
                constructor(tipo, estagioTurbo) {
                    this.turbo = new Turbo(estagioTurbo);
                    if (tipo == 1) {
                    this.velMax = 120;
                    this.nome = "Normal";
                    } else if (tipo == 2) {
                    this.velMax = 160;
                    this.nome = "Esportivo";
                    } else if (tipo == 3) {
                    this.velMax = 200;
                    this.nome = "Super Esportivo";
                    }
                    this.velMax += this.turbo.potencia;
                }
                info(){
                    console.log(this.nome);
                    console.log(this.velMax);
                    console.log(this.turbo);
                }
            }

            class Turbo {
                constructor(estagioTurbo) {
                    if (estagioTurbo == 0) {
                    this.potencia = 0;
                    } else if (estagioTurbo == 1) {
                    this.potencia = 50;
                    } else if (estagioTurbo == 2) {
                    this.potencia = 75;
                    } else if (estagioTurbo == 3) {
                    this.potencia = 100;
                    }
                }
            }

            let c1 = new Carro(2,2);

            c1.info();

            class SuperEspecial extends Carro{
                constructor(estagioTurbo){
                    super(4,estagioTurbo);
                    this.velMax = 300 + this.turbo.potencia;
                    this.nome = "Carro Super Especial"
                }
                info(){
                    console.log(`Nome: ${this.nome}`);
                    console.log(`Velocidade Máxima: ${this.velMax}`);
                    console.log(`Turbo: ${this.turbo.potencia}`);
                }
            }

            let c2 = new SuperEspecial(3);

            c2.info();


















*/