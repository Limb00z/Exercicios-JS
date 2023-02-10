const div_relogio = document.querySelector(".div_relogio");  //Capturando a div
//console.log(div_relogio);

//console.log(som_alarme será add via JS puro);

const btn_ativar = document.querySelector("#btn_ativar");
//console.log(btn_ativar);

const btn_parar = document.querySelector("btn_parar");
//console.log(btn_parar);

const tmp_alarme = document.querySelector("#tmp_alarme");
//console.log(tmp_alarme);

const hora_alarme = document.querySelector("#hora_alarme");
//console.log(hora_alarme);

const timer = document.querySelector("#alarme");
//console.log(timer);


const relogio = () => {
   
    const data = new Date();
    //console.log(data);

    let hora = data.getHours();  //Capiturando a hora
    hora = hora < 10 ? "0"+hora : hora; //Operarador ternario. lembra?
    //console.log(hora);

    let min = data.getMinutes();   //capiturando os minutos
    min = min < 10 ? "0" + min : min;
    //console.log(min);

    let seg = data.getSeconds(); //capiturando os segundos
    seg = seg < 10 ? "0" + seg : seg;
    //console.log(seg);
    
    let horaCompleta = `${hora}:${min}:${seg}`;   // Jjuntando tudo numa formatação 
    //console.log(horaCompleta);

    div_relogio.innerHTML = horaCompleta;  // Transferindo para tela, onde capituramos a div


}

const intervalo = setInterval(relogio, 1000); //Pronto, criado a atualização constante.

/* EXPLICAÇÃO 

A função setInterval, permite uma atualização a cada milisegundo, 1000 = 1s. com isso o relogio fica sempre atualizando.


obs >>> Os console.log são formas de etstar durante a criação, por isso estão comentados agora, para não ficarem aparecendo toda hora no navegador e sobrecaregando a memória :)


*/
