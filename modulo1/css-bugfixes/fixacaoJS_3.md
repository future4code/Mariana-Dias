```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let caluculo = (ex*1 + p1*2 + p2*3) / 6
if(caluculo > 9){
  return "A"
}else if( caluculo < 9 && caluculo >= 7.5){
  return "B"
}else if( caluculo < 7.5 && caluculo >= 6){
  return "C"
}else {
  return "D"
}
  return caluculo
  
}
```