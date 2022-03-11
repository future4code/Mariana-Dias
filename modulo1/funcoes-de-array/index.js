  // Exercicio de interpretacao

  // 1 irá imprimir nome e apelidos respectivamente em cd array
  // 2 um array com todos os nomes dentro
  // 3 um array com os dois primeiros indices
  
  // Exercicio de escrita
  // A
  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
  
  const novoArray = pets.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArray)

  // B


  const novoArray1 = pets.filter((item) => {
     return item.raca === "Salsicha"

  })
  
  console.log(novoArray1)

  // c

const mensagem = pets.filter((pets)=>{
        return pets.raca ===  "Poodle"
    }).map((pets)=> { console.log (`Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`)
})

    // 2 a

    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]

     const materiais = produtos.map((item, index, array) => {
        return item.nome
     })
     
     console.log(materiais)

     // b
     const mater = produtos.map((item, index, array) => {
         const novoArray = {nome: item.nome, preco: item.preco* 0.95}
        return novoArray
     })
     
     console.log(mater)

 
     // c 

     const materiais1 = produtos.filter((item) => {
        return item.categoria === "Bebidas"
   
     })
     
     console.log(materiais1)

     // d

     const materiais2 = produtos.filter((item) => {
        return item.nome.includes("Ypê") 
     })
     console.log(materiais2);

     //e
     const frase1 = produtos.filter((produtos)=>{
        return produtos.nome.includes("Ypê") 
    }).map((produt)=> { console.log (`Compre ${produt.nome} por ${produt.preco}`)
})