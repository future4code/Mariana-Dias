// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
 // return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  //const mensagem = prompt('Digite uma mensagem!')

 // console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt ("Qual altura do retangulo")
  const largura = prompt ('Qual a largura do retangulo?')
  const resultado = (altura * largura)
  return console.log(resultado);

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  
const ano = prompt("Digite o ano atual?")
const nasc = prompt ("Digite o ano de seu nascimento?")
const resultado1 = ano - nasc
console.log(resultado1)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  const imc = peso / (altura * altura1)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome= prompt("Digite seu nome?")
const idade= prompt("Digite sua idade?")
const email = prompt("Digite seu email?")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const perg1 = prompt ("Diga qual a sua cor favorita?")
const perg2= prompt ("Digite a segunda cor favorita?")
const perg3 = prompt ("Digite a terceira cor favorita?")
const respostas = [perg1, perg2, perg3]
console.log(respostas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const frase = (string)
  const frase1 = frase.toUpperCase()
 return frase1
   
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  const festa = custo / valorIngresso
  return festa
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const tamanho = (string1.length === string2.length) 
return tamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
  
}


// EXERCÍCIO 10

function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  const ultimo1 = (array[array.length -1])

  return ultimo1
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  array.push(array.splice(0,1)[0])
  const ultimo = (array[array.length -2])
  array.push(array.splice(ultimo,1)[array.length -1])
 
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const result = string1.toUpperCase() === string2.toUpperCase()
  return result

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}