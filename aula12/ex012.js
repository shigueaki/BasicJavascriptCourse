var idade = 50;
if (idade < 16) {
  console.log("Não vota");
} else {
  if (idade < 18 || idade > 65) {
    console.log("Voto opcional");
  } else {
    console.log("Voto obrigatório");
  }
}

var agora = new Date();
var Dia = agora.getDay();
switch (Dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log(Dia);
    break;
}
