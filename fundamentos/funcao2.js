//armazenando função em variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(1, 2)


//armazenando função em arrow
const soma = (a, b) => {
    return a + b
}

console.log(soma(1, 2))

//retorno implícito
const subtração = (a, b) => a - b
console.log(subtração(2,3))