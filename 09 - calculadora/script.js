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

const aba = document.querySelector("#calc_aba");
console.log(aba);

const calc = document.querySelector("#calc");
console.log(calc)

let sinal = false;

let decimal = false;


aba.addEventListener("click", (evento) => {
    calc.classList.toggle("calc_exibir");
    if (calc.classList.contains("calc_exibir")) {
        evento.target.setAttribute("src", "seta_esquerda.svg");
    } else {
        evento.target.setAttribute("src", "seta_direita.svg");
    }
});

teclasNum.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        sinal = false;
        
        if (tpower.innerHTML == "ON") {
            if (evento.target.innerHTML == ".") {
                if (!decimal) {
                    decimal = true;
                    if (display.innerHTML == "" || display.innerHTML == "0") {
                        display.innerHTML = "0."
                    } else {
                        display.innerHTML += evento.target.innerHTML
                    }
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

teclaRes.addEventListener("click", (evento) => {
    sinal = false;
    decimal = false;
    const res = eval(display.innerHTML);
    display.innerHTML = res;
    
});

display.addEventListener("click", (evento) => {
    navigator.clipboard.writeText(display.innerHTML); 
}); //Basta clicar no display para copiar o que conter nele.




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
