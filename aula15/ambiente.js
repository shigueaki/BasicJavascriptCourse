let num = [5,8,4];
console.log(`Nosso vetor é o ${num}`);
num.push(6);
console.log(`Nosso agora vetor é o ${num}`);

let valores = [8,1,7,4,2,9];
valores.push(20)
valores.sort();

for (let i in valores)
    console.log(valores[i]);

let newvalue = [1,4,5,6,3,8,9,5,2];

newvalue.sort();
let indexOfaValue = newvalue.indexOf(2);

if (indexOfaValue > -1)
    console.log(`------>` + indexOfaValue)
else
    console.log('Não encontrado');