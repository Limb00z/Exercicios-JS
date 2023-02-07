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

            c1.info(); padrão do pai

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

            c2.info(); //diferente

        E ainda podemos usar o metodo super também em conjunto do polimorfismo!!!!
    
    ABSTRACT -- É uma forma de codificar que usa uma classe apenas para servir de herança e não pode ser instanciada, ou seja, não podemos criar nenhum objeto usando ela, apenas servirá como base para ser usada por outras classes via extends.
    Tem um porém, não existe oficialmente uma solução para usa-la, nós temos que fazer gambiarras rs (concenso da comunidade).
        ex:
            class CarroPadrao {
                constructor(){
                    if(this.constructor === CarroPadrao){
                        throw new TypeError("Essa classe não pode ser instânciada, ela é abstrata");
                    }; //Isso vai gerar um erro no console caso tentem instanciar a classe.

                    if(this.ligar === underfined){
                        throw new TypeError("É obrigatório implementar o metódo ligar");
                    }; //Obriga as classes que vao herdar a ter esse metodo em seus moldes.

                    if(this.desligar === underfined){
                        throw new TypeError("É obrigatório implementar o metódo desligar");
                    }; //Obriga as classes que vao herdar a ter esse metodo em seus moldes. 

                    this.rodas = 4;
                    this.portas = 4;
                    this.ligado = false;

                };
            };

            class Carro extends CarroPadrao{
                constructor(tipo, estagioTurbo) {
                    super(); // Usando o super, pra importar do pai os atributos rodas, portas e ligar...
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
                    console.log(this.rodas);
                    console.log(this.portas);
                    console.log(this.ligado)
                };
                ligar(){
                    this.ligado = true;       //eu sou obrigado a colocar esses metodos na minha classe herdeira
                }
                desligar(){
                    this.ligado = false;      //eu sou obrigado a colocar esses metodos na minha classe herdeira
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

            c1.info(); //padrão do pai

            class SuperEspecial extends Carro{  //Mesmo esse não sendo direto do CarroPadrão, ele também vai herdar os parametros, pq  a classe Carro é herdeira
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

            c2.info(); //diferente




















*/