// 1) Indique as mensagens impressas no console


// let array
// console.log('a. ', array)
// array indefinida, pois não está definida em let. Então, no console vai aparecer como undefined.

// array = null
// console.log('b. ', array)
//array nula. No console vai aparecer null 

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// array.length vai dizer o tamanho da string. Então no console vai aparecer 11

// let i = 0
// console.log('d. ', array[i])
// i indica posição, pois abaixo está entre colchetes. Se a posição requerida é zero, então no console vai aparecer 3. Esse é o número na posição zero da array.

// array[i+1] = 19
// console.log('e. ', array)
// Não sei. Não entendi a declaração. Pois [i+1] seria o número 4 na array. Não entendi como ele pode carregar 19. É substituiído? Não entendi.

// const valor = array[i+6]
// console.log('f. ', valor)
// sendo i posição zero onde tem o número 3 na array, então no console vai aparecer o número 9, pois conta-se do 3 pra frente, mais seis números.




// 2) Leia o código abaixo com atenção:

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI NUM ÔNIBUS EM MIRROCOS

// Explicando: No console estariam todas as letras em maiúsculas em virtude do uso do toUpperCase e substituiria as letras A por I, por virtude do uso de replaceAll



// EXERÍCIO DE ESCRITA DE CÓDIGO

// 1)


// const nome = prompt("Qual é o seu nome?")
// const email = prompt ("Por favor, digite o seu e-mail.")

// console.log(`O e-mail` , email , `foi cadastrado com sucesso. Seja bem-vinda(o)` , nome)

// 2) 

// a)
// const comidasPreferidas = ["feijoada", "arroz", "macarronada" , "sorvete" , "pizza" ]
// console.log(comidasPreferidas)

// b)
// console.log("Essas são as minhas comidas preferidas:" , comidasPreferidas)
// OPS... NÃO SEI como faz para deixar uma embaixo da outra.

// c) Pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console noval ista.

// const comidaPrefeidaDoUsuario = prompt("Qual a sua comida preferida?")
// comidasPreferidas[1] = comidaPrefeidaDoUsuario
// console.log(comidasPreferidas)


// 3)
// a)Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas

const listaDeTarefas = []

// b)
const primeiraTarefaDoUsuario = prompt("Por favor, digite uma tarefa que você precisa realizar hoje.")
const segundaTarefaDoUsuario = prompt("Pode digitar outra tarefa, por favor?")
const terceiraTarefaDoUsuario = prompt("Agora digite só mais uma tarefa e concluiremos.")
// c)
console.log([primeiraTarefaDoUsuario , segundaTarefaDoUsuario , terceiraTarefaDoUsuario])
// d)
const usuarioIndice = prompt("Por favor, dentre as tarefas digitadas, diga-me o índice da tarefas já realizada hoje. Primeira tarefa considere 0, segunda tarefa 1 e terceira tarefa 2")


// e) Remova da lista o item de índice que o usuário escolheu.

// não sei como fazer

// f) Imprima o array no console



