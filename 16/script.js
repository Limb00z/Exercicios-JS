const btn_imp = document.getElementById("btn_imp");

btn_imp.addEventListener("click", (evento) => {
    const conteudo = document.getElementById("tabela").innerHTML;

    let estilo = "<style>";
    estilo += "table {width: 100%; font: 25px Calibri;}";
    estilo += "table, th, td{border: 2px solid #888; border-collapse: collapse;";
    estilo += "padding: px 8px; text-align:center;}";
    estilo += "</style>";

    const win = window.open('', '', 'height=700,width=700');

    win.document.write('<html><head>');
    win.document.write("<title>Ruan Reis - Impressão</title>");
    win.document.write(estilo);
    win.document.write("</head>");
    win.document.write("<body>");
    win.document.write(conteudo);
    win.document.write("</body></html>");

    win.print();
})