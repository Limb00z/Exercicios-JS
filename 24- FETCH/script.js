const endpoint = "https://testenodejs.limb00z.repl.co/";

fetch(endpoint).then(res => res.json()).then(dados => {
    console.log(dados);
})