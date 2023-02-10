const div_relogio = document.querySelector(".div_relogio");
console.log(div_relogio);



const relogio = () => {
   const data = new Date();
 console.log(data);

    let hora = data.getHours();
    hora = hora < 10 ? "0"+hora : hora; //Operarador ternario. lembra?
    console.log(hora);
}