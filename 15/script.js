const btn_alert = document.getElementById("btn_alert");
const btn_confirm = document.getElementById("btn_confirm");
const btn_prompt = document.getElementById("btn_prompt");


btn_alert.addEventListener("click", (evento) => {
    alert("Essa é uma função que exibe uma caixa sobre tudo suspensa");
});


btn_confirm.addEventListener("click", (evento) => {
    alert("Aqui eu vou fazer uma pergunta, vai aparecer OK = true e Cancelar = false... pois retorna um boolean");
    alert("E para capturar esse Boolean, basta associar o confirm a uma variavel ex: let duvida = confirm(você está feliz?); A resposta será atribuida a váriavel, lembre-se das aspas, aqui não deu por conta da sintaxe");
    let felicidade = confirm("Você está feliz?");
    alert("Ótimo, agora vamos exibir  para ver sua resposta.");
    
     if (felicidade) {
            alert(felicidade + "\nVocê está feliz!");
     } else {
         alert(felicidade + "\nVocê está triste :( ");
        }
    
});


btn_prompt.addEventListener("click", (evento) => {
    prompt("Digite seu nome");
    alert("Seu nome para ficar salvo, precisa estar atribuido a uma variavel o prompt, vamos repetir.")
    let nome = prompt("Diga seu nome, para eu guardar.");
    if (nome == null) {
        alert("Você não digitou nada");
    } else {
        alert(`Seja bem vindo, ${nome}`);
    }
});