// Exercicio de interpretacao

/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // Retorna false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // Retorna false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // Retorna True
*/

/* const primeiroNumero = prompt("Digite um numero!")
const segundoNumero = prompt("Digite outro numero!")
soma = primeiroNumero + segundoNumero
console.log(soma)  */


//Exercicio de escrita

// 1-
const idade1 = prompt("Qual a sua idade?")
const idadeAmigo =  prompt ("Qual a idade do seu melhor amigo?")
const resultado = idade1 > idadeAmigo
const diferenca = idade1 - idadeAmigo 

console.log("Sua idade é maior que a do seu amigo?", resultado)
console.log("Nossa diferença de idade é", diferenca, "anos")  

// 2-

const user = prompt ("Digite um número par?")
console.log(user % 2) // Ele sempre imprimi o numero 0 

const user1 = prompt ("Digite um numero impar?")
console.log(user1 % 2) // Ele imprimi o numero 1  


// 3

let idade = prompt("Diga sua idade em anos")

let meses = idade * 12
let dias = meses * 31
let horas = dias * 24


console.log("Idade em meses", meses, "idade em dias", dias, "idade em horas", horas)

// 4

const pergunta = prompt("Quantas irmas você tem?")
const pergunta1 = prompt("Quantas horas vc dorme no dia?") 

console.log("O primeiro numero é maior que segundo?", pergunta > pergunta1)
console.log("O primeiro numero é igual ao segundo?", pergunta === pergunta1)
console.log("O primeiro numero é divisível pelo segundo?", pergunta % pergunta1 === 0)
console.log("O segundo numero é divisível pelo primeiro? ", pergunta % pergunta1 === 0) 