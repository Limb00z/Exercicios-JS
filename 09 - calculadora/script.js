const teclasNum = [...document.querySelectorAll(".num")];
console.log(teclasNum);

const teclasOp = [...document.querySelectorAll(".op")];
console.log(teclasOp);

const teclasRes = document.querySelector(".res");
console.log(teclasRes);

const display = document.querySelector(".display");
console.log(display);

const tpower = document.querySelector("#tpower");
console.log(tpower);

const tlimpar = document.querySelector("#tlimpar");
console.log(tlimpar);





teclasNum.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        display.innerHTML += evento.target.innerHTML
    });
});


teclasOp.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => { 
        display.innerHTML += evento.target.innerHTML
    });
});

tlimpar.addEventListener("click", (evento) => {
   
});

tpower.addEventListener("click", () => {
    if (tpower.innerHTML == "ON") {
        tpower.innerHTML = "OFF";
        display.innerHTML = "DESLIGADA"
        tpower.style.background = "#e44";
        tpower.style.borderColor = "#800"
        display.style.background = "rgb(158, 158, 158)";
    } else {
        tpower.innerHTML = "ON";
        tpower.style.background = "rgb(56, 212, 108)";
        tpower.style.borderColor = "rgb(3, 71, 26)"
        display.style.background = "#8a8";
        display.innerHTML = "0";
    };
});