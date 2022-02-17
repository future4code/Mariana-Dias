// Interpretaçao do código

/*  function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
Q1 : Será impresso no console 10 e 50 

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
Q2: iii questão correta */

// Exercícios de escrita

//a
function minhaFuncao() {
  const informacoes = "Me chamo Mariana, tenho 24 anos, moro em Aracaju e sou estudante";

  return (console.log(informacoes));
}

minhaFuncao() 

//b


function informacoes1(nome, idade, cidade, profissao) {
 nome = "Mariana"
 idade = 24
 cidade = "aracaju"
 profissao = "Estudante"

const frase = (`Me chamo ${nome}, tenho ${idade}, moro em ${cidade}, e atualmente sou ${profissao}`)

return console.log(frase)

}

informacoes1() 

//Q2
//a
function numeros(n1, n2) {
const soma = n1 + n2
    
return soma
}
const resultado = numeros(20, 62)
console.log(resultado)

//b

const maior = (n1, n2) =>  {
    const booleano = n1 >= n2
  return console.log(booleano);
}
    
maior(10, 20)

//c 

const par = (n1) =>  {
    const booleano = n1 % 2 == 0
  return console.log(booleano)
}
par(11) 

//d

function maisculo(mensagem) {
mensagem = "labenu".toUpperCase()
    return console.log(mensagem);
}

maisculo() 

//Q3

const pergunta = prompt ('Digite o primeiro numero?')
const pergunta1 = prompt ('Digite o segundo numero?')

function soma1(n1, n2) {
    const soma = Number(n1) + Number(n2)
    return console.log ("O resultado da soma é", soma);
    
}

function subtracao(n1, n2) {
    const subtracao1 = n1 - n2
    return console.log("O resultado da subrtração", subtracao1);
    
}

function multiplicacao(n1, n2) {
    const multiplicacao1 = n1 * n2
    return console.log("o resultado da multiplicaçāo", multiplicacao1);
    
}

function divisao(n1,n2) {
    const divisao1 = n1 / n2
    return console.log("O resultado da divisāo " , divisao1);
    
}

 soma1(pergunta, pergunta1)
 subtracao(pergunta, pergunta1)
 multiplicacao(pergunta, pergunta1)
 divisao(pergunta, pergunta1)