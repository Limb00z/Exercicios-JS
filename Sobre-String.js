/*
     As strings são textos, e usamos para atribuição de tipo às varaiveis. 
     Nós podemos clasifcar uma variavel como string apenas usando aspas duplas entre o valor.
     ex:
        let nome = "Ruan"; Se fizermos um typeof(nome), o reultado erá string.
    E por ser uma string, nós temos diversos metodos para podermos usar a seu favor. 
    Alguns dos mais comuins são:
        .length
            A propriedade length serve para nos informar o tamanho de uma string.
            Para testar a propriedade length, vamos usar a string Estudo, que retornará o tamanho 6.
                const palavra="Estudo";
                console.log(palavra.length); //6
        
        charAt()

            Com o método charAt() conseguimos acessar um caractere de uma string. Lembre-se que, por baixo dos panos, strings são arrays de caracteres, e em cada posição temos o caractere que compõe a string.
            Veja o exemplo abaixo:
                console.log("Estudo".charAt(3)) ou console.log(palavra.charAt(3))  //"u"
            obs: Outra alternativa será usar a notação de colchetes para encontrar um caractere da string, da seguinte forma:
                console.log(palavra[0]) //"E"

        Mas e se quisermos saber qual a posição de um caractere dentro da string?

        indexOf()

            Respondendo a pergunta anterior, existe a função indexOf(), que retorna a posição de um caractere dentro da string.
            Por exemplo:
                const palavra="Estudo"
                console.log(palavra.indexOf("o")) //5 
            obs: fique atento caso o caractere que se busca na string seja encontrado em mais de uma posição, pois será retornada somente a primeira ocorrência.
        



*/