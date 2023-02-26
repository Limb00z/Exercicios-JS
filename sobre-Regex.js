/*

    REGEX - 
        São padrões utilizados para identificar determinadas combinações ou cadeias de caracteres em uma string.
        Por meio dela, podemos validar a entrada de usuários ou encontrar alguma informação em logs, documentação ou saída de comando. O mais legal é que as Regex são escritas independentes de uma linguagem, como JavaScript ou C#. As expressões são definidas em sua própria linguagem formal e uma vez aprendida, podemos aplicar o conhecimento dentro da linguagem de nossa preferência.

        
        Classes de caracteres
        .	qualquer caractere, exceto newline
        \w\d\s	palavra, dígito, espaço em branco
        \W\D\S	não palavra, dígito, espaço em branco
        [abc]	qualquer um dos a, b ou c
        [^abc]	não a, b ou c
        [a-g]	caractere entre a & g

        Âncoras
        ^abc$	início / fim da cadeia de caracteres
        \b\B	palavra, limite sem palavra

        Personagens que escaparam
        \.\*\\	caracteres especiais escapados
        \t\n\r	guia, alimentação de linha, retorno de carro

        Grupos & Lookaround
        (abc)	grupo de captura
        \1	backreference para o grupo #1
        (?:abc)	grupo sem captura
        (?=abc)	olhar positivo
        (?! abc)	olhar negativo

        Quantificadores e Alternância
        a*a+a?	0 ou mais, 1 ou mais, 0 ou 1
        a{5}a{2,}	exatamente cinco, dois ou mais
        a{1,3}	entre um e três
        a+? a{2,}?	corresponder o menor número possível
        ab|cd	match ab ou cd
        









*/