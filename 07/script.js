const f_tipoMilitar = document.querySelector("#f_tipoMilitar");
const f_tipoNormal = document.querySelector("#f_tipoNormal");

const f_blindagem = document.querySelector("#f_blindagem");
const f_municao = document.querySelector("#f_municao");

f_tipoMilitar.addEventListener("click", (evt) => {
    console.log("cliquei tipo militar");
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
});

f_tipoNormal.addEventListener("click", (evt) => {
    console.log("cliquei tipo normal");
    f_blindagem.value = 0;
    f_municao.value = 0;
    f_blindagem.setAttribute("disabled", "disabled");
    f_municao.setAttribute("disabled", "disabled");
});