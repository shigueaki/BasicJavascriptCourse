function contar(){
    let inicio = document.getElementById('txtinicio').value;
    let fim = document.getElementById('txtfim').value;
    let passo = document.getElementById('txtpasso').value;

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || inicio.trim() == "" || fim.trim() == "" || passo.trim() == "" || inicio == fim) {
        alert(`[ERRO] - Por favor verifique os valores e tente novamente.`);
        return;
    }

    let newInicio = parseInt(inicio);
    let newFim = parseInt(fim);
    let newPasso = parseInt(passo);    
    let total = "";

    if (newPasso == 0)
    {
        alert(`[ERRO] - Por favor verifique os valores e tente novamente.`);
        return;
    }

    if (newInicio < newFim) {    
        for (let i = newInicio; i <= newFim; i += newPasso) {
            total += i + " \u{1F449} ";
        }               
    } else {
        for (let i = newInicio; i >= newFim; i -= newPasso) {
            total += i + " \u{1F449} ";
        }    
    }    
    let text = document.getElementById('lblresultado');
        text.innerHTML = `${total} \u{1F3C1}`;
}