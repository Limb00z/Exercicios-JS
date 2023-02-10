/*
    PROMISSE -- Traduzindo para o português, seria promessa, e é exatamente isso que esse metodo é. Ele promete algo quando executado. Faz com que o programa, o aguarde para saber oq fazer depois. Pq normalmente, o JS ele lê e executa linha a linha, então ese metodo foi criado aprar poder fazer execuções depois, mesmo que o "leitor" já tenha passado. Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Essencialmente, uma promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função.
        Uma Promise está em um destes estados: (vemos no console)
    
        pending: estado inicial, nem cumprido nem rejeitado.
        fulfilled: significa que a operação foi concluída com sucesso.
        rejected: significa que a operação falhou.
        
        ***Uma promise é considerada resolvida se for cumprida ou rejeitada, mas não pendente.
       
       ex:
        const numero = document.getElementById("numero");
        console.log(numero);

        const btn_promessa = document.getElementById("btn_promessa");
        console.log(btn_promessa);


        const promessa = () => {
            let p = new Promise((resolve, reject) => {
                let resultado = true;
                let tempo = 3000; //3s para a execução!
                setTimeout(() => {
                    if (resultado) {
                        resolve("Deu tudo certo");
                        numero.innerHTML = "Deu tudo certo";
                        numero.classList.remove("erro");
                        numero.classList.add("ok");
                    } else {
                        reject("Deu tudo errado")
                        numero.innerHTML = "Deu tudo errado";
                        numero.classList.remove("ok");
                        numero.classList.add("erro");
                    }
                }, tempo ); //olha o tempo de execução aqui.
            });

            
        }



        btn_promessa.addEventListener("click", (evento) => {
            numero.innerHTML = "Processando...";
            promessa();
        })






*/