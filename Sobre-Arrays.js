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






*/