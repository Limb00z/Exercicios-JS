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
            obs²: O resultado da execução do indexOf() é um valor numérico.

        toUpperCase() e toLowerCase()

            São duas funções bastante utilizadas quando estamos trabalhando com string e precisamos deixar o texto todo em letras minúsculas (lower case) ou todo em maiúsculas (upper case). Vamos ver o código abaixo:

                const palavra = "Estudo";
                console.log(palavra.toLowerCase()); //"estudo";
                console.log(palavra.toUpperCase()); //"ESTUDO";

        substring()

            Outra função muito interessante é a substr() (substring), que permite que façamos a extração de parte de uma string, conforme o código abaixo:

                let frase= "Mergulhando em tecnologia."
                console.log(frase.substr(0,11)); // "Mergulhando"

            A função recebe como parâmetro o início e o fim da nova string a ser retirada da string principal. Na execução do código acima, temos como resultado a palavra Mergulhando. Bem útil, né?

            obs: O resultado da execução do métodosubstr() é uma nova string.

        slice()
            Ele faz a mesma coisa que o substring() 
                
        replace()

            Com a função replace() temos a possibilidade de substituir parte de uma string por outra. Essa função recebe como parâmetros duas informações: a string que você quer substituir e a string que será colocada no lugar. Olhe o exemplo abaixo, em que precisamos substituir a string nomeusuario no texto padrão de comunicacao.

                let nome = "André";
                let comunicacao = " Olá, sr. nomeusurario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
                console.log(comunicacao.replace("nomeusurario",nome));

            obs: Na execução deste exemplo, a string nomeusuario será substituída pelo conteúdo da variável nome. Como resultado da execução do método replace() teremos uma nova string.
            obs²: Ele apenas substituirá a primeira string encontrada, mesmo que ajam mais de uma.

        concat()

            O método concat() é uma opção para concatenar strings sem a utilização do operador de adição (+). Ele concatena duas strings, adicionando a nova string ao fim da anterior.

            Observe uma utilização do concat():

                let novaString = "Programe nas principais linguagens e plataformas. Explore linguagens como ";
                console.log(novaString.concat("JavaScript,").concat(" Python,").concat(" e C#."))
                
            O resultado obtido será: Programe nas principais linguagens e plataformas. Explore linguagens como JavaScript, Python, e C#.

            Para a execução do método concat() teremos como resultado uma nova string.

        split()

            O método split() é bem interessante, pois com ele conseguimos quebrar uma string com base em caracteres separadores que vamos informar para o método como parâmetro.

            Vamos ver um exemplo:

                let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
                let arrayLinguagens = linguagens.split(";");
                console.log(arrayLinguagens)

            Quando trabalhamos com o split(), devemos nos atentar, pois a execução gerará como resultado um array de strings com os elementos que foram separados com base no separador desejado. Portanto a execução do código resulta em um array como mostrado a seguir:

                [ 'JavaScript',
                'Java',
                'C#',
                'PHP',
                'Python',
                'Go',
                'Vb',
                'SQL',
                'C',
                'C++' ]

            Lembre-se que o resultado da execução do método split() é um array de strings.
          

        trim()

            O trim() remove os espaços em branco no início ou fim de uma string. Se em alguma situação precisarmos fazer uma verificação de que o usuário não digitou o login com espaços, faremos;

                let login = "   andre@emailteste.com      ";
                let loginSemEspaco = login.trim();
                console.log(loginSemEspaco); //andre@emailteste.com

            A variável loginSemEspaco conterá uma nova string, sem os espaços em branco no início ou fim que podem ter sido digitados. Então, quando executado o método trim(), o resultado é uma nova string.

            No JavaScript ainda temos algumas variações desta função como: trimEnd(),trimStart(),trimLeft() e trimRight(), teste também estas variantes e veja o resultado obtido, ok?

        includes()
            O metodo, faz uma verificação, retornando um booleano, se um determinado string, está dentro desse outro string na váriavel. 
            ex:
             
                const author = 'George Orwell';
                const procuraNome = 'George';
                const procuraSobreNome = 'Douglas';
                console.log( author. includes(procuraNome)); // true
                console.log( author. includes(procuraSobreNome)); // false

        charCodeAt()
            O método retorna o unicode do caractere em um índice especificado em uma cadeia de caracteres. Este é um inteiro de cone UTF-16 entre 0 e 65535.
            ex:
                const str = "Hello World";
                console.log(str.charCodeAt(0)); // 72
                console.log(str.charCodeAt(8)); // 114;



*/