```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let resultado = 0
  for (let index of arrayDeNumeros ){
    if ( index === numeroEscolhido){
      resultado = resultado + 1
    }
  }
  if( resultado > 0){
  return `O número ${numeroEscolhido} aparece ${resultado}x`
    
  }else return "Número não encontrado"
}
```