// Exercicio interpretacao

// Q 1

/*a- sem valor
b sem valor
c 11
d 3
e 11
f 9 */

// Q 2 : 27

// Exercicios de escrita de código

//Q1

const nome = prompt ("Qual seu nome?")
const email = prompt ("Qual seu email?")

const resposta = `O email ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`
console.log(resposta)
// imprimiu : O email marianabd1908@gmail.com foi cadastrado com sucesso. Seja bem-vinda(o), Mariana! 

// Q 2

 const comidasPreferidas = ['Strogonoff', 'Macarrão', 'Bife acebolado', 'Hamburguer', 'Feijoada']
console.log(comidasPreferidas)
console.log('Essas são minhas comidas preferidas:', comidasPreferidas)

const perguntaUser = prompt ('Qual a sua comida preferida?')
comidasPreferidas.splice(1, 1, perguntaUser)
console.log(comidasPreferidas) 

// Q 3 

const listaDeTarefas = []
const tarefa1 = prompt('Você lava roupas todos os dias?')
const tarefa2 = prompt('Você limpa o quintal qual dia na semana?')
const tarefa3 = prompt('Você toma quantos banhos ao dia?') 
 
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

console.log(listaDeTarefas) 

const tarefaRealizada = prompt(`Digite o numero da tarefa ja realizada? \n ( 0  - Você lava roupas todos os dias?) \n (1 - Você limpa o quintal qual dia na semana?) \n (2 - Você toma quantos banhos ao dia?)`)
listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)