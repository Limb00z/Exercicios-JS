// POO ( ou OOP) e Classes

/*
    **Todo objeto é criado a partir de uma classe.
    **A classe é uum molde utilizado pra criar um objeto.
        dentro da classe nós conseguimos defifnir atributos e métodos que um objeto receberá.
    ex: 
        class Nave {
        };  // a classe é criada assim. 

        let maquinaVoadora = new Nave(); // para chamarmos a classe, temos que usar os parenteses. 

    **Conseguimos também alem de aceitar todos os tipos que já conhecemos, (string, number, bolean e etc), Com as classes também podemos criar uma especie de tipo prórpio, digamos, derivado. 

    CONSTRUTORES & INSTÂNCIAS
        Em grande maioria, as clasees podem ser instanciadas.
            grande maioria pq algumas linguagens podem impedir isso.
        Instância de uma classe é o que dá origem ao objeto
            Quando dizemos que uma classe foi isntanciada, estamos dizendo que um objeto foi criado a partir daquela classe.
        A classe vêm com um método especial que chamamos de construtor.
            Utilizamos para definir valores iniciais dos atributos de um objeto.
            Esse método é chamado quando criamos uma instância de uma classe com a palavra---> new
        Vamos criar uma classe e um construtor agora para exemplificar.
        ex:
            class EstacaoEspacial {
                constructor(nome,vagasNaPlataforma){
                    this.nome = nome
                    this.vagasNaPlataforma = vagasNaPlataforma
                }
            }; // Por isso que dizemos que ela serve como um molde, pq a partir dela, criaremos outros objetos conforme o construtor dela. 

            let observatorio = new EstacaoEspacial("Observatório", 40);

            se dermos um console log, veremos que o observatorio foi criado como um objeto, já tendo as propriedades criadas e seus respectivos valores que passamos como paramêtro na criação, conforme pede o construtor. 

        obs-- O construtor aceita que as váriaveis usem parametro pré definido como nos objetos, caso na criação esteja vazio ele virá preenchido com o padrão de criação. 
        Temos duas formas de pré-definir.
        ex:
            class EstacaoEspacial {
                constructor (nome){
                    this.nome = nome
                    this.velocidade = 0 // Não pedi velocidade como parametro, mas eu digo que ao criar, já contenha o valor 0
                }
            };

            //// outra forma \\\\\

            class EstacaoEspacial {
                constructor (nome,velocidade = 0){
                    this.nome = nome
                    this.velocidade = velocidade //aqui eu peço, mas se não for informado, ele já começa com 0.
                }
            };

        Assim como o constructor, que é um método dos objetos, podemos ter mais de um dentro de um objeto. E naturalmente podemos cita-los também. 
        ex:
            class EstacaoEspacial {
                constructor (nome){
                    this.nome = nome
                    this.velocidade = 0 // Não pedi velocidade como parametro, mas eu digo que ao criar, já contenha o valor 0
                }
                aceleracao(acelerar){
                    this.velocidade += acelerar // velocidade vai receber o acelerar + o que já tem. 
                }
            };

            e para poder chamar será assim:
            ex:

            let golias = new EstacaoEspacial('Golias'); // aqui atribuo o nome e pré-defino q velocidade será 0.
                                    
            golias.aceleracao(50); //velocidade atual, 50
            golias.aceleracao(100); // velocidade atual, 150 ---- somou os 100 com os 50 que já tinha.

    CLASSES DENTRO DE CLASSES
        Ela segue o mesmo padrão de objetos, até pq é um objeto, meio obvio né? 
        E para instanciar também é bem simples. olha a criação e como instanciamos. 
        ex:
            class  Capitao {
                constructor(capitaoNome, capitaoIdade,capitaoHorasVooTotal){
                    this.nomeCapitao = capitaoNome;
                    this.idadeCapitao = capitaoIdade;
                    this.horasDeVooCapitao = capitaoHorasVooTotal;}
                    };

            class EspacoNave {
                constructor (nomeNave, tripulacaoTotal, capitaoNome, capitaoIdade, capitaoHorasVooTotal){
                    this.nomeDaNave = nomeNave;
                    this.qtdTripulacao = tripulacaoTotal;
                    this.capitao = new Capitao (capitaoNome, capitaoIdade,capitaoHorasVooTotal);  //instanciando a class acima
                    };
            };                  // criamos uma calss, um molde pros nossos objetos. 

            let golias = new EspacoNave("Golias", 20, "Vander Stapen", 45, 15000);

            console.log(golias); // Trará um objeto dentro de outro objeto  rs

    HERANÇA (extends)
        Como o nome já diz, é sobre herdar... Quando criamos uma classe, podemos criar outra classe e economizar código herdando os atributo e construtores dela. Isso facilita na criação de códigos semelhantes e agiliza o processo. Para fazer uso de herença, usamos a sintaxe ( class <NomeDaClassNova> extends <ClassHerdada> )
        ex;
            class OnibusEspacial extends EspacoNave {
                autorizadoTransporte = false;
                transportar() {
                    this.autorizadoTransporte = true;
                };
            };     // estamos herdando todos os atributos de EspacoNave e criando mais um particular atributo com construtor, bora ver?

            let busaoGalatico = new OnibusEspacial ("457 Deprê" , 200 , "Tião" , 65 , 10000); // Na class OnibusEspacial não tem  todos esses atributos que passei como parametro, mas ai que entra a função herdar (extends). 

            busaoGaltico.transportar(); // com isso, eu mudo um parametro incial do OnibusEspacial de false pra true;

            Se dermos um console.log veremos tudo que tem na Class EspacoNave + OnibusEspacial. entendeu?
    
    SOBRESCRITA DE MÉTODO

        Nós podemos sobrescrever um metodo já definido para usarmos em uma classe que herdará.
        ex:
           class Pessoa {
                constructor(nome, idade, estado) {
                    this.nome = nome;
                    this.idade = idade;
                    this.estado = estado;
                }
                superPoder(tipo) {
                    this.tipoPoder = tipo;
                }
            }

            let ruan = new Pessoa("ruan", 28, "rj");

            console.log(ruan);

            ruan.superPoder("fogo");

            console.log(ruan);

            class PoderZero extends Pessoa {
                superPoder() {
                    this.tipoPoder = 0;
                }
            }

            let yasmin = new PoderZero("yasmin", 28, "rj");

            console.log(yasmin);

            yasmin.superPoder();

            console.log(yasmin);

            yasmin.superPoder("água"); // mesmo se eu tentar passar um parametro dentro do superPoder, se eu atribuir  uma vairavel a class Pessoa, ela não mudará..

            console.log(yasmin);


           

        





*/