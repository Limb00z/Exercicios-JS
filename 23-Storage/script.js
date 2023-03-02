let f_texto = document.getElementById("f_texto");
let tela = document.getElementById("tela");

document.getElementById("btn_texto").addEventListener("click", (evento) => {
    
    localStorage.setItem("algumaCoisa", f_texto.value);
    tela.innerHTML = `${localStorage.getItem("algumaCoisa")}`

    
});







