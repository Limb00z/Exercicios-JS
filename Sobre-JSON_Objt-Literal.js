/*
    OBJETOS E JSON -- 
        Nós podemos constuir um objeto para qualquer coisa.
        ex:
            const pessoa = {
                nome: "ruan",
                idade: 28,
                sexo: "M",
                magias:{
                    tipo: "fogo",
                    duraçao: "longo",
                    metodo: "invocação"
                }
            }; // pronto, já temos um objeto criado, formalmente para uso!

        Mas existe também o tratamento para JSON, por exemplo, quando queremos pegar algo, via api, ele vem em formato JSON, e como podemos também mandar algo em JSON? com objetos é simples.

        Temos dois metodos pra isso: .stringify e .parse

    .STRINGIFY -- Converte de objeto para JSON em string
        ex:

            const json_pessoa = JSON.stringify(pessoa); // pronto, convertemos um objeto para formato json, em forma de string, pronto pra uso!

    .PARSE -- Converte de string JSON, para objeto.
        ex:
            const objeto_pessoa = JSON.parse(string_pessoa); // Pronto, peguei um json e tansformei novamente em OBJETO!
    
        Finalizando os estudos básicos!


    PROTOTYPE --  É uma função dos objetos para poder adicionar uma propriedade ou metodos dentro deles. podemos usar a vontade, desde criação de propriedades básicas como metodos/funções complexas, que serão adicionadas posteriormente. 
        ex:
            const Nave=function (energia){
                this.energia = energia
                this.disparos=50
            }; //criamos o objeto

            const n1 = new Nave(100); criamos uma constante, objeto, com 100 de energia

            nave.prototype.vidas = 5; // Estamos criando mais uma propriedade e atribuindo um valor, estamos modificando o "molde" assim podemos dizer. 

            nave.prototype.disparar = function(){
                if(this.disparos > 0){
                    this.disparos--
                    console.log("bang");
                };
            }; //Estamos criando agora via prototype, um metodo/função para o objeto 

        Um questionamento: Pq usar prototype se podemos criar oq ue queremos, já dentro do escopo, a resposta é que essa função ela é usada para condições posteriores e necessárias.



*/