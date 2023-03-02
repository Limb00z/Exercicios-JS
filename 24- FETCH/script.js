const p_temp = document.getElementById("p_temp");
const p_nivel = document.getElementById("p_nivel");
const p_press = document.getElementById("p_press");

const btn = document.getElementById("btn");


const endpoint = "https://testenodejs.limb00z.repl.co/";

// document.getElementById("btn").addEventListener("click", () => {
//     fetch(endpoint).then(res => res.json()).then(dados => {
//     console.log(dados);
//     p_temp.innerHTML = `Temperatura: ${dados.temperatura}`;
//     p_nivel.innerHTML = `Nível: ${dados.nivel}`;
//     p_press.innerHTML = `Pressão: ${dados.pressao}`;
// })
// })

// let atualizar = () => {
//     if (document.getElementById("btn")) {
//         document.getElementById("btn").remove(); //Se atualizar automaticamente, ele remove o botão de fetch
//     };

//     fetch(endpoint).then(res => res.json()).then(dados => {
//         console.log(dados);
//         p_temp.innerHTML = `Temperatura: ${dados.temperatura}`;
//         p_nivel.innerHTML = `Nível: ${dados.nivel}`;
//         p_press.innerHTML = `Pressão: ${dados.pressao}`;
//     })
// };

// let intervalo = setInterval(atualizar,3000)


let dados = {
    nome: "Ruan",
    curso: "CFBCursos",
    curso: "JS"
};

let cabeçalho = {
    method: "POST",
    body: JSON.stringify(dados)
};

const gravardados = () =>{
    const endpoint = "https://testenodejs.limb00z.repl.co/";
    fetch(endpoint, cabeçalho)
        .then(res => res.json())
        .then(ret => {
        console.log(ret)
    })
}

btn.addEventListener("click", () => {
    gravardados();
})