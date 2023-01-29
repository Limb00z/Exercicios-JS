/* Array é uma estrutura de dados, capaz de organizar  e armazenar outros dados.
Os dados são organizados em forma de lista, cada valor fica numa determinada posição[index]
Pode armazenar internamente qualquer outro tipo, (Number, string, boolean e etc... inclusive outro array )

Um array tem duas formas de ser declarado, entre colchetes [] e com a palavra new Array(). seguem os exemplos.

let numeros = [1,2,3,4,5]
ou 
let numeros = new Array(1,2,3,4,5)

a diferença pros dois é que o new array, consegue criar espaços na memória, mesmo que vazios. por convenção, só se usa ele pra criar espaços e não pra atribuir....
por ex. 

let numeros = new array(5) // automaticamente, ele vai criar 5 espaços dentro do array, ao invez de atribuir o valor 5. entendeu?

os arrays, pdoem receber diveros valores e tipos, não se limitam. Mesmo que sejam dentro do mesmo objeto. [um array é um objeto rs --- usa o typeof vai rs]

ex:
let pessoa = ["joao", 35, "solteiro", true];


função .PUSH(n) -> ela serve para adcionar um elemento no array, no final. dentro dos parenteses vai o valor a ser add
numeros.push(6); // [1,2,3,4,5,6] -- foi add o 6 ao final 

função .POP() -> serve para remover o ultimo elemente da lista, não precisa de parametros. 
numeros.pop();  // [1,2,3,4,5] -- foi removido o 6 do final 

uma coisa legal também do .POP() é que ele retorna esse elemento, se quisermos, paara uma variavel. 
vamos ignorar o pop acima então..

let removido = numeros.pop() // o valor 6 será atribuido a variavel removido e será excluida do array Numeros.

função .SHIFT() ->  Ela remove o primeiro elemento de um array e não precisa de parametro. Pode ser atribuida igualmente o .POP();
let primeiroSaiu = numeros.shift(); //A variavel vai receber o valor 1 e ele será apagado do array Numeros

função .UNSHIFT(n) -> Essa função ela insere um elemento, na primeira posição do array. precisa atribuir o elemento
numeros.unshift(10); // [10,2,3,4,5]

função .indexOf(n) -> Essa função faz retornar em que posição/indíce está o elemento procurado, para isso, você precisar saber o valor/elemento que está procurando
let posiDez = numeros.indexOf(10); // ele vai retornar para a váriavel posiDez o valor 0, que é onde se encontra no array.

mas e se por acaso não encontrar o elemento, seja por erro de escrita ou por inexistencia... ele retorna o valor -1

ARRAYS BIDIMENSIONAIS -- Em suma, eles são arrays, dentro de arrays.
ex
let estadoDDD = [ ['rj' , 21] , ["sp" , 11] , ['mg' , 31] , ['ce' , 85] ]  

sendo assim, pdoemos fazer tudo normalmente que fáriamos com um array normal, a diferença é que teremos apenas agora mais uma informação para dar nos parametros. segue eo ex.

cada colchete, representa uma posição/indice e dentro dela, cada valor tem sua posição/indice também.
Se eu quiser por exemplo, resgatar as informações de mg e 31

console.log(estadoDDD[2]); // vai retornar ['mg' , 31]

mas e seu quiser apenas um elemento, por exemplo, apenas o ddd basta adicionar mais um colchete com a posição/indicie

console.log(estadoDDD[2][1]); // vai retornar 31 .... ou seja, na posição 2 está o estado e ddd, mas dentro dele na posição 1 apenas o ddd... entendeu?


METODOS SPLICE E SLICE

    SPLICE -- Significa emendar ou costurar, substitui o array original.
    Ele espera um primeiro parametro que é um indice/posição do array, o segundo é a quantidade de elementos que queremos remover a partir desse indíce os próximos parametros são elementos que queremos add no lugar, obs** apenas o primeiro parametro é "obrigatório"
    ex: 
    let numeros = [40,10,25,13,4,85];
    numeros.splice(1,2,50,30); // vai remover do array o 10 e 25, porque estão na posição 1 e 2 valores... ou seja a partir da posição 1 remova 2... 10 e 25. E ele add o numero 50 e 30 em seus lugares.

    podemos atribuir também os valores retirados.
    vamos desconsiderar o código acima p/ ex

    let removidos = numeros.splice(1,2,50,30); // aqui ele vai executar como anterirormente explicado, mas ainda vai add esses valores a váriavel Removidos.

    **obs-- Não é obrigatória acrescentar elemento para substituição. apenas quis exemplificar. poderia ser assim também que funcionaria como o ex abaixo.
    numeros.splice(1,2); // removerá a partir da posição 1, 2 elementos...

    SLICE -- Significa fatiar ou dividir.
    Ele extrai uma parte do array, mas sem alterar o array original.
    Ele espera um primeiro parametro que é um indice/posição do array, o segundo é o índice final.
    Ele retorna todos os elementos entre o primeiro e segundo parametro.
    obs** - No segundo parametro, ele para antes... ex, se eu edir slice(1,4) ele vai pegar os elementos nos indices [1,2,3] e não exatamente até o 4... entendeu a sacada ? ex

    let numeros = [80,54,14,25,22,0,5,10,99];
    let numeros = [80,54,14,25,22,0,5,10,99];

    let removeSemAlterar = numeros.slice(2,5); // vai retornar um array com os valores [14,25,22]

  
  INTERAÇÃO EM ARRAYS
    AS FUNÇÕES DE INTERAÇÃO QUE VEREMOS SÃO HOF (FUNÇÕES QUE ENVIAMOS COMO PARAMETRO) CALLBACKS
    callback é chamado para cada elemento do array
    segue o formato de ex:
        array.funcaoInterar(function(elementoAtual, indice, array){
            <corpo da função
        });
    Espera um callback que receba como parametro o elemento atual, o indice e o array completo.

    para formalizar um exemplo prático, vamos passar pelo ForEach(revise aula de looping)

    let numeros = [80,54,14,25,22,0,5,10,99];
    numeros.forEach(function(numero, index){
        console.log(`Numero: ${numero} e posição: ${index}`)
    }); // Ele vai retonar cada valor com sua posição 

FUNÇÃO .MAP() -- Ela serve para você interar um array em um novo array com modificações, sem danificar o origninal. 
    ex. imgina que queremos pegar aqueles numeros acima e multiplicar por 5, teriamos que usar um laço com a estrutura for. Mas com o map dá pra fazer isso usando callback bem mais fácil.

    let numeros = [80,54,14,25,22,0,5,10,99];

    let numerosMultiplicados = numeros.map(function(elementos){
        return elementos * 5    
    }) // se dermos um console.log, veremos todos os numeros multiplciados por 5. testa ai
 
    console.log(numerosMultiplicados); // [400,270,70,125,110,0,25,50,495]



    
*/