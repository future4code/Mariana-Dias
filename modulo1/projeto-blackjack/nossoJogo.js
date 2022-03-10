
 // EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 

    const mensagemUsuario = "Boas vindas ao jogo de Blackjack!"
    console.log(mensagemUsuario)


   if (confirm("Quer iniciar uma nova rodada?")){
     confirm === true

      } else {

 console.log("O jogo acabou.");
      
   }   
    const carta1User = comprarCarta()
      const carta2User = comprarCarta()
      let somaUser = carta1User.valor + carta2User.valor

      const compraCompu1 = comprarCarta()
      const compraCompu2 = comprarCarta()
      let somaComputer = compraCompu1.valor + compraCompu2.valor

      console.log(`Usuario - Cartas: ${carta1User.texto} ${carta2User.texto} - Pontuação: ${somaUser}`)
      console.log(`Computador - Cartas: ${compraCompu1.texto} ${compraCompu2.texto} - Pontuação ${somaComputer}`)

     if (somaUser > somaComputer){
        console.log("O usuario ganhou!");
     } else if (somaComputer > somaUser){
        console.log("O Computador ganhou!");
     } else {
        console.log("Empate!");
     }
