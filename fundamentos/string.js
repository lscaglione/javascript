const escola = 'cod3r'

console.log(escola.charAt(4)) //charAt mostra a posição do caractere
console.log(escola.charAt(5)) 
console.log(escola.charCodeAt(3)) //mostra o numero da tabela unicode
console.log(escola.indexOf(3)) //mostra o indice da string

console.log(escola.substring(1)) //mostra a string sem o índice escolhido
console.log(escola.substring(0, 3)) //mostra a palabra do indice 0 por exemplo até antes do 3

console.log('Escola '.concat(escola).concat ('!')) //concatenação de strings
console.log('Escola ' + escola + '!') //mesma coisa que o concat
console.log(escola.replace(3, 'e')) // substituição de indice na string

console.log('Maria,Joao,Josias'.split(','))