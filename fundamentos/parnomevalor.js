const saudacao = 1 //contexto léxico 1

function exec() {
    const saudacao = 'Fala' //contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome:  'Pedro',
    idade:  20,
    peso:  90,
    endereco: {
        logradouro: 'Rua taciba gonçales',
        numero: 66
    }
}


console.log(saudacao)
console.log(exec())
console.log(cliente)