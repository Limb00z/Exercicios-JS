let valores = [];
let labelx = ['Temperatura','Nível','Pressão']

const ctx = document.getElementById('grafico1');

const obterDados = () => {
  const endpoint = 'https://testeNodeJS.limb00z.repl.co';
fetch(endpoint)
  .then(res => res.json())
  .then(res => {
    valores[0] = res.temperatura 
    valores[1] = res.nivel
    valores[2] = res.pressao
    grafico1.update()
  })
  .catch(erro = ()=>{
    alert("ERRO: " + erro)
  })
}

let intervalo = setInterval(obterDados,3000)

let grafico1 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelx,
      datasets: [{
        label: 'Clima Local',
        data: valores,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});