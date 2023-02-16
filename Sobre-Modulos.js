/*
    Módulos -- Os módulos permitem que blocos de código como funções, classes e constantes em arquivos separados possam ser importados quando necessário, facilitando o processo de manutenção e reusabilidade de um projeto JavaScript.

        COMO FAZER?
            Depois que nós separarmos os arquivos as funções  e o que mais quisermos separar, usamos um export{função/array/class}-- O que você quiser exportar;
            
            E como utlizar? Usamos a a palavra import no começo do arquivo JS principal. 
            import {função/array/class} from "localização/pasta"
            ex; 
                import {calcular} from "./modulos/calcular.js"

            Vale ressaltar que, você deve sempre marcar com o export tudo que você quiser exportar. Caso tenha mais de uma função, array ou qualquer coisa no arquivo e você não use o metodo export, ele não constará na importação.
            
            DEFAULT -- Ele só pode ser aplicado a um elemento do arquivo, e tem uma diferenciação para ser instanciado no import, ele não vai dentro das chaves, ele fica do lado de fora. E para ser instanciado no export, ele usa a palavra dafault 
            ex: (Nós queremos chamar a função mostraResultado como default na importação);

                import mostraResultado,{calcular} from "./modulos/calcular.js"
            //Lembrando que não precisa ser junto a importação do default e dos demais elementos, podem ser importados em linhas diferentes.
        
        Usando O ALIAS -- Podemos renomear qualquer import usando o "as" como no banco de dados.
        ex:
            import {calcular as somar} from "./modulos/calcular.js"

        E ai quando formos chamar, basta chamarmos pelo novo nome.
        ex:
            console.log(somar);

           







*/