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
        clientes["dataNascimento"] = 01/01/1994; // pronto, acabamos de add outra propriedade.





*/