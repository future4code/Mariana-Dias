/*1
let a = 10
let b = 10

console.log(b)   imprimi number
b = 5 // novo valor variavel b
console.log(a, b)  imprimi number */

/*2
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) imprimi number number */

/*3
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

let jornadaDeHorasTrabalhadas = promot ("Quantas horas você trabalha por dia?)
let valorDiaria = ("Quanto você recebe por dia?")*/


// Atividade de escrita de código
//Questão 1

let nome 
let idade 
console.log (typeof nome)
console. log ( typeof idade) // retornou undefined pois a variavel está sem valor atribuido 

const meuNome =  prompt ("Qual seu nome e sua idade?")

let nome1 = "Mariana"
let idade1 = 24

console. log (typeof nome1)
console. log (typeof idade1) // ele identificou o tipo de variavel por estar com valor atribuido

console. log ("Olá", nome1, "você tem", idade1, "anos")
// imprimiu: Olá Mariana você tem 24 anos

// Questão 2

const pergunta = prompt ("Você comeu hoje? SIM OU NÃO") 
const pergunta1 = prompt ("Você bebeu água? SIM OU NÃO")
const pergunta2 = prompt ("Você me acha bonito? SIM OU NÃO")

let resposta = pergunta
let resposta1 = pergunta1
let resposta2 = pergunta2

console.log  ("Você comeu hoje?", resposta)
console.log("Você bebeu agua hoje?", resposta1)
console.log("Você me acha bonito?", resposta2)

// Questão 3

let a = 10
let b = 25
let c = a
a = b
b = c

console.log (" valor de a é", a)
console.log ("valor de b é", b)