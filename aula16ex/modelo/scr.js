function calcularNumeros() {
    let text = document.getElementById('txtnumero');
    if (text.value.lenght == 0) {
        alert(`[ERRO] - Por favor insira um número e tente novamente`);
        return;
    }

    let number = Number(text.value);
    if (!(number >= 1 && number <= 100)) {
        alert(`[ERRO] - Por favor, insira um valor entre 1 e 100`);
        return;
    }

    let table = document.getElementById('tbl');
    let row = table.insertRow(0);
    let cell = row.insertCell(0);    
    cell.innerHTML = `Valor ${number} adicionado`;
    text.value = ``;

    var allRows = document.getElementById('tbl').rows;
    var count = 0;
    var totalRowCount = 0;
    for (var i = 0; i < allRows.length; i++) {
        totalRowCount++;
        if (allRows[i].getElementsByTagName("td").length > 0) {
            count++;
        }
    }
    //alert(`${allRows[0].cells[0].innerHTML} ::::: ${count}`);
}

function finalizar(){
    var allRows = document.getElementById('tbl').rows;
    var count = 0;
    var totalRowCount = 0;
    for (var i = 0; i < allRows.length; i++) {
        totalRowCount++;
        if (allRows[i].getElementsByTagName("td").length > 0) {
            count++;
        }
    }

    var rowsArray = [];
    var sum = 0;
    var maxValue = 0
    for (let i = 0; i <= count-1; i++)
    {
        let actualRow = allRows[i].cells[0].innerHTML;
        let actualValue = actualRow.split(" ");
        let finalActualValue = Number(actualValue[1]);
        rowsArray.push(finalActualValue);
        sum += finalActualValue;

        if (finalActualValue > maxValue)
            maxValue = finalActualValue;
    }
    var avg = sum / count;
    rowsArray.sort();

    var p = document.getElementById('lblresult');
    p.innerHTML = `Ao todo, temos ${count} números cadastrados <br><br>
                    O maior valor informado foi ${maxValue} <br><br>
                    O menor valor informado foi ${rowsArray[0]} <br> <br>
                    Somando todos os valores, temos ${sum} <br><br>
                    A média dos valores digitados é ${avg}`
}