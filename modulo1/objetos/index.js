// Exercicio de interpretaçao

/* irá imprimir o primeiro ator do elenco
irá imprimir o ultimo nome do elenco
irá imprimir ocanal globo e o horario 14h */

// Q2 - Será impresso as informacoes de dentro do objeto, em seguida os outros dois consoles estarão com o nome alterado.

//Q3 será impresso false e undefined

// Exercicos de escrita

//Q1
const pessoa = {
    nome: 'Mariana',
    apelidos: ['Mari', 'Nana','Galega']
}
function frase(pessoa) {
}

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[2]}, ${pessoa.apelidos[1]}.`)
console.log(pessoa)

const novaPessoa = {
... pessoa, 
apelidos: ["Marianinha", "Gaza", "Loira"] 

}
console.log(novaPessoa)

//Q2

const pessoa1 = {
    nome: "João",
    idade: 24,
    profissao: "estudante" 
}
const pessoa2 = {
    nome:'Clara',
    idade: 35,
    profissao: 'Médico'
}

function array(pessoa1, pessoa2){
    const resultado = []
   resultado.push(pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length)
   resultado.push(pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length)

    return resultado

}

console.log(array(pessoa1, pessoa2))

//Q3

 const carrinho = []

const sacolao = {
    nome: "Abacaxi",
    Disponibilidae: true,
}

const sacolao2 = {
    nome: "Caqui",
    disponibilidade: true,
}

const sacolao3 = {
    nome: "Banana",
    disponibilidade: true,
}
function fruta(fruta1, fruta2, fruta3){
carrinho.push(fruta1,fruta2, fruta3)
return carrinho

}
fruta(sacolao, sacolao2,sacolao3)
console.log(carrinho)