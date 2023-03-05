let valores = ['10', '5', '88', '45', '15', '2','11','5','50','77','10','60'];
let rendaMes = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez']

  const ctx = document.getElementById('grafico1');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: rendaMes,
      datasets: [{
        label: 'Renda-extra por mês',
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