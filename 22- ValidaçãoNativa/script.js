const f_nome = document.getElementById("f_nome");
const f_nota = document.getElementById("f_nota");
const f_msg = document.getElementById("f_msg");

document.querySelector("btn_validar").addEventListener("click", (evento) => {
    let estadoValidação = f_nota.validity;
    
    if (estadoValidação.valueMissing) {
        f_nota.setCustomValidity("Campo vazio, cabeção")
    }
    f_nota.reportValidity();

    evento.preventDefault(); 
});

//Métodos  de validação do DOM
//checkValidity()
//setCustomValidity()

//Propriedade de validação do DOM
//validity
//validationMessage

//PropriedadeMessage
/*
customErro: True, se uma mensagemm de validação personalizada for definida.
patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
rangeOverflow: true, se o valor de um elemento for maior que seu atributo max.
rangeUnderflow: true, se o valor de um elemento for menor que seu atributo min.
stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
typeMismatch: true, se o valor de um elemento não corresponder ao seu atributo type.
tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
tooShort: true, se o valor de um elemento ficar menor que seu atributo minLength.
valueMissing: true, se um elemento(com um atributo obrigatório) não tiver valor.
valid: ture, se o valor de um elemento for válido.
*/