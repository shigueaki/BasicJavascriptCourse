function parimpar(value) {
    if (value%2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

console.log(parimpar(165));

function soma(value1 = 0, value2 = 0) {
    return value1 + value2;
}

console.log(soma(165, 222));

let mult = function(value) {
    return value * 2;
}

console.log(mult(5));

function fatorialSimples(value) {
    let result = 1;
    for (let i = value; i >= 1; i--) {
        result *= i
    }
    return result;
}

console.log(fatorialSimples(5));

function fatorialRecursiva(value) {
    if (value == 1)
        return 1;
    else
        return value * fatorialRecursiva(value-1);
}

let result = fatorialRecursiva(5);
console.log(result);