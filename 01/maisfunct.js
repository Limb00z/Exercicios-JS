/* Sobre funções...

funções são mecanicas de trabalho ocultas, que usam blocos de códigos para fazer algo em sua maioria. 

existem alguns tipos de funções...

as normais que usamos-- -
    function nomeDaFunção() { 
        //bloco de código ou comandos aqui 
    }

Normalmente, ela pode conter parametros ou não

    function calendario(dia, mes) {
    //exibir a data  segundo  os parametros pedidos acima. 
    }

mas além dos parametros, elas podem, e algumas, devem, para evitar erros de uso, conter valores pré - definidos nos parametros
    function calcular(n1 = 0, n2 = 0) {
        // o simbolo de igual serve para dizer que se caso um parametro não for declarado, será atribuido por padrão o valor 0
        //Obvio que você pode add qualquer padrão ao parametro, desde que seja coerente com a função.
}
    
mas precisamos nos atentar também a posição dos parametros. por isso não dá pra sair codando qualquer coisa e ver se funciona depois. O mais indicado, é que tenhamos um desenho do que estamos desenvolvendo, como se fosse um mapa. Imagina se tivessemos um mapa que diz, pule usando o cipó, e depois de mandar pular, mandar verificar se o cipó está seguro kkkkk olha o exemplo

function paciente(nome, peso, altura) {
    console.log(`O paciente ${nome} tem ${peso}kg e mede ${altura}`);
}
//chamando a função
paciente(josé, 1.74, 80)

Qual o erro? consegue ver?

Bom acabamos de dizer que ele tem 1 quilo e 740 gramas e mede 80 kkkkk parece um "gnomio" como meu filho fala. 
 
tirando a brincadeira, o mais ideal é semre observamos a estrutura do código e a direção que ele está indo, principalmente na construção. Então, tenham sempre um mapa dos seus projetos, não saiam codando como loucos 

Existe tambem as funções anônimas, elas se utilizam das váriaveis para existirem, olha o exemplo.

let velocidadeDobrada = function (velocidade){
    return velocidade * 2
    }

para chamar, velocidadeDobrada(60) // em resumo, como o nome já pressupoe, a velocidade 60 será dobrada.

a diferençã dela no escopo do código é que a função normal poderá ser lida em qualquer momento do código, mesmo que uma função normal esteja nas ultimas linhas e for chamada nas primeiras linhas, dará certo.
Já a função anonima, ela só conseguiré ser efetivamente chamada, se estiver linhas acima da chamada. Por exemplo. se a função anonima estiver na linha 37 e a chamada 15, não funcionará, mas se for o inverso funcionará normalmente. 

já que estamos falando de scopo, ainda tem as questão das váriaveis. 

var é escopo global, let nem tanto... Let dentro de função, fica limitada a função...




*/

