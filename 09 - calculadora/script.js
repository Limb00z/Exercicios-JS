const teclasNum = [...document.querySelectorAll(".num")];
console.log(teclasNum);

const teclasOp = [...document.querySelectorAll(".op")];
console.log(teclasOp);

const teclaRes = document.querySelector(".res");
console.log(teclaRes);

const display = document.querySelector(".display");
console.log(display);

const tpower = document.querySelector("#tpower");
console.log(tpower);

const tlimpar = document.querySelector("#tlimpar");
console.log(tlimpar);

let sinal = false;

let decimal = false;




teclasNum.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        sinal = false;
        if (tpower.innerHTML == "ON") {
            if (evento.target.innerHTML == ",") {
                if (!decimal) {
                    decimal = true;
                    if (display)
                        display.innerHTML += evento.target.innerHTML
                }
            
            } else {
                display.innerHTML += evento.target.innerHTML
            }
        }
    });
});


teclasOp.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => { 
        if (tpower.innerHTML == "ON"){

            if (!sinal) {
                sinal = true;
                if (evento.target.innerHTML == "x") {
                    display.innerHTML += "*"
                } else {
                    display.innerHTML += evento.target.innerHTML
                }
            }
        }
    });
});

tlimpar.addEventListener("click", (evento) => {
    if (tpower.innerHTML == "ON") {
        display.innerHTML = ""
    }
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
        display.innerHTML = "";
    };
});
