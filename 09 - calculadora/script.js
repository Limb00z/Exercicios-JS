const teclasNum = [...document.querySelectorAll(".num")];
console.log(teclasNum);

const teclasOp = [...document.querySelectorAll(".op")];
console.log(teclasOp);

const teclasRes = document.querySelector(".res");
console.log(teclasRes);

const display = document.querySelector(".display");
console.log(display);

const ton = document.querySelector("#ton");
console.log(ton);

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
    })
})

tlimpar.addEventListener("click", (evento) => {
    display.innerHTML = "0";
})