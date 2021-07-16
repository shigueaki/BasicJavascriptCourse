function contar(){
    let numero = document.getElementById('txtnumero').value;    

    if (numero.lenght == 0){
        alert(`[ERRO] - Número inserido inválido`);
        return;
    }

    var newNumero = Number(numero);
    
    var table = document.getElementById('tblres');
    table.innerHTML = "<caption>Resultado das operações</caption>";
    for (var i = 10; i >= 1; i--) {
        let multiplicacao = i * newNumero;
        let resposta = `${newNumero} X ${i} = ${multiplicacao}`;
        let row = table.insertRow(0);
        let cell = row.insertCell(0);
        cell.innerHTML = resposta;
    }
}