// Exercicio de interpretacao

// 1 O código testa se um numero é impar ou par, ao digitar um numero par imprime " Passou no teste", digitar um impar imprime "Nao passou no teste"

// 2 o codigo serve para informar o valor de uma fruta// ao colocarmos "Maça" irá imprimir (O preço da fruta  maça  é  R$  5) //  Se retirarmos o default ele não retornará o valor correto

// 3 a primeira linha quer saber um numero do usuario. // ele está verificando se o numero digitado é maior que 0 // se colocarmos o numero 10 que é maior que 0 irá imprimir "esse numero passou no teste"



// Exercicio de escrita 
//Q1
const idade = Number(prompt("Qual a sua idade?"))

function paraMaiores(idade1){
    if (idade >= 18){
        console.log("você já pode dirigir.");
    }else {
        console.log("você nāo pode dirigir.");
    }
}
 
paraMaiores(idade)


//Q2
const turno = prompt("Qual turno que voce estuda? Digete M (manha), V (Tarde), N (noite)")
function horario1(manhaTardeNoite){
    if (manhaTardeNoite === "M"){
        console.log("Bom Dia!")
    }else if (manhaTardeNoite === "V"){
        console.log("Boa Tarde!")
    }else  if(manhaTardeNoite === "N"){
    console.log("Boa noite!")


    }else {
    console.log("Opção invalida")
    }
}
horario1(turno)


//Q3

const horario = (prompt("Qual turno você estuda? Digite M (manhã) , V (tarde), N (noturno)."))

function qualTurno(turno){
    switch (turno){
        case "M":
        console.log("Bom dia!");
        break;
        case "V":
            console.log("Boa tarde!");
            break;
            case "N":
                console.log("Boa noite!");
                break;
            
        
    }
}
qualTurno(horario) 

//Q4

const genero = prompt ("Qual genero de filme você vai assistir?")
const valor = Number(prompt ("Qual valor do ingresso?"))

function filme (genero1, valor1){
    if ((genero1 === "fantasia") && (valor1 <= 15)){
    console.log("Bom Filme!")
     } else {
         console.log("Escolha outro filme! :(")
     }
}

filme(genero, valor)