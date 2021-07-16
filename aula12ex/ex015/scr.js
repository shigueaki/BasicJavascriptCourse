function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value == "" || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem';          
            if (idade >= 0 && idade <= 12){
                img.setAttribute('src', 'crianca-homem.png');
            } else if (idade <= 21) {
                img.setAttribute('src', 'jovem-homem.png');
            } else if (idade <= 50) {
                img.setAttribute('src', 'adulto-homem.png');
            } else {
                img.setAttribute('src', 'idoso-homem.png');
            }
            
        } else {
            genero = 'Mulher';
            if (idade >= 0 && idade <= 12){
                img.setAttribute('src', 'crianca-mulher.png');
            } else if (idade <= 21) {
                img.setAttribute('src', 'jovem-mulher.png');
            } else if (idade <= 50) {
                img.setAttribute('src', 'adulto-mulher.png');
            } else {
                img.setAttribute('src', 'idoso-mulher.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}