const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome +'!' //concatenação simples
const template = `
    Olá
    ${nome}!` //interpolação com $, tem que ser com crase, vai considerar espaços, quebra de linhas e etc

console.log(concatenacao, template)

//expressoes
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}`)