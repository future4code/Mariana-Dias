// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a-b )
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numPares = [];
    for(let i = 0; i < array.length; i++){
       if(array [i] % 2 == 0){
          numPares.push(array[i])
       }
    }
    return numPares;
  }

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosPares = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            numerosPares.push (array[i])
        }
    }
    
    let numerosMultipli = []
    for (let i = 0; i < numerosPares.length; i++){
      let multiplicar =  numerosPares[i]*numerosPares[i]
            numerosMultipli.push (multiplicar)
        
    }
    return numerosMultipli

}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for(let i = 0; i < array.length; i++) {
    if(array [i] > maior) {
        maior = array [i]
    }
    }
    return maior
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let tipoTriangulo 
    if((ladoA === ladoB) && (ladoA === ladoC)) {
        return tipoTriangulo = "Equilátero"
    } else if ((ladoA === ladoB) || (ladoA === ladoC) || ( ladoB === ladoC)) {
        return tipoTriangulo = "Isósceles"
    } else if ((ladoA !== ladoB) && (ladoB !== ladoC) && (ladoA !== ladoC)) {
        return tipoTriangulo = "Escaleno"
    } else return null
    

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    const frase = (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)

    return frase
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novaPessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
    }

    return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    const brinquedos = pessoas.filter((item) => {
        if ((item.altura > 1.5) && (item.idade > 14) && (item.idade < 60))
        {
            return true
        }
        
     })
 return brinquedos
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const brinquedos1 = pessoas.filter((item) => {
        if ((item.altura < 1.5) || (item.idade <= 14) || (item.idade > 60))
        {
            return true
        }
        
     })
 return brinquedos1

  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   
}


// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}