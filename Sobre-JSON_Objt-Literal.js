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

*/

