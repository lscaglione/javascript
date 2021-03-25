console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bala'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj ('Cadeira')
const obj3 = new Obj ('Mesa')

console.log(obj2)
console.log(obj2.nome)

//this é pra crirar funções ou atributos que serão vistas fora da função