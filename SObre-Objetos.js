/*
    OBJETOS
        Assim como os arrays, também são estruturas de dados, capazes de armazenar e organizar outros dados.
        Dados são organizados através de propriedades.
        Associação chave:valor ---
            Chave é o nome da propriedade;
            valor é o valor que esta propriedade vai receber.
        Também podem armazenar internamente qualquer outro tipo
            incluive arrays e outros objetos.

    CRIAÇÃO
        Para podermos criar um objeto, é parecido com array, mas tem algumas particularidades. ex:

        let clientes = {
            nome: "Ruan",
            idade: 28,
            pgtoEmDIa: true
        }

        se dermos um console.log(clientes); veremos todas as informações acima. 
        E se por acaso eu quiser apenas ver o nome? ex:
        console.log(clientes.nome); // natualmente ele vai retornar todos as propriedades nome e seus respectivos valores.
    
    ADIÇÃO
        Para podermos add algo nos objetos, é mais fácil que um array simples, não precisa de metódos nem funções.
        Suponhamos que eu quero add ao objt clientes a propriedade notaDada, ela seria um padrão para medir a qualidade do atendimento, dado pelo próprio cliente. ex:
            clientes.notaDada = 8; // vualá... adicionamos mais uma propriedade, não precisamos de push nem shift... simples e facil... 

        mas existe outro jeito também. ex:
            clientes["dataNascimento"] = '01/01/1994'; // pronto, acabamos de add outra propriedade.

        Uma coisa boa também, é que pdoemos usar um array dentro do objeto, nos facilitando bastante em estruras e manipulações, pega o ex:
        clientes.dependentes = ["Yasmin","Arthur"]; // quando formos olhar lá dentro, teremos um objeto e na propriedade dependentes, terá um array com valores(nomes).
        
        Ainda há a possibilidade de criarmos um arrray e dentro dele conter um objt. ex:

            let estadoDDD = [
                {estado: "rj", ddd: 21},
                {estado: "sp", ddd: 11},
                {estado: "mg", ddd: 31}
            ]; 
        E como é um array, para percorrer e trazer um elemento, devemos começar igualmente conhecemos e finalizar com a propriedade. ex:
            console.log(estadoDDD[2].estado); // Assim ele retornará apenas o valor contido no estado, na posição 2, que é MG
        
        E se quisermos um objeto inteiro, basta não especificar a propriedade. ex:
            console.log(estadoDDD[0]); // Assim ele trará o objeto inteiro ->  estado: 'rj', ddd: 21;

        Uma  coisa legal da manipulação é o ForEach, podemos usar tranquilamenete também quando um objeto está dentro de um array. ex:
            estadoDDD.forEach(dados => {
            alert(`O estado ${dados.estado} usa o ddd (0${dados.ddd})`)
            }); // Muito legal né? Ele vai retornar cada elemento contindo, então, cuidado!!!






*/