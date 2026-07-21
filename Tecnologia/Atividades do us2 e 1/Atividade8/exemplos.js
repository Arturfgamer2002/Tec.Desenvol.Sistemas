// Exemplo 1 
// let frutas = [ "Maçã", "Banana", "Uva", "Laranja" ];

// For tradicional
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// For usando of = mostrar os elementos
// for (let i of frutas) {
//     console.log(i)
// }

// For usando indice = elemento e da ordem
// for (let i in frutas) {
//     console.log(i)
// }

// for (let i in frutas) {
//     console.log(`${i} - ${frutas[i]}`)
// }

// Exemplo completo 2
// const rl = require('readline-sync')

// let compras = []

// for (let i = 1; i <= 5; i++) {
//     let compra = rl.question('Digite a sua compra: ')
//     compras.unshift(compra)
//     console.log(`Lista de compras atualizada: ${compras}`)
// }

// Exemplo completo 3
// let lista = ['elemento X']
// Adicionar no final da lista
// console.log(`Adicionar no final da lista`)

// lista.push('Açucar')

// console.log(`Lista atual: ${lista}`)

// Remover no final da lista
// console.log(`Remover no final da lista`)

// lista.pop()

// console.log(`Lista atual: ${lista}`)

// Adicionar no inicio da lista
// console.log(`Adicionar no inicio da lista`)

// lista.unshift('Tudo que há de bom')
// lista.unshift('Tempero')
// lista.unshift('Açucar')

// console.log(`Lista atual: ${lista}`)

// Remover no inicio da lista
// console.log(`Remover no inicio da lista`)

// lista.shift()

// console.log(`Lista atual: ${lista}`)

// Escoler numero para alterar, adicionar(opcional) e deletar usando numeros usando splice
// console.log('--------------------')

// console.log(`Lista atual: ${lista}`)

// for (let i in lista){
//     console.log(i)
// }

// lista.splice(1, 2, 'Vergonha da Profission')
// console.log(`Lista atual: ${lista}`)

// Exemplo 4
// const rl = require('readline-sync')

// let lista_nova = ['Ronaldo', 'Neymar', 'R2', 'V']
// usando join
// console.log(lista_nova.join(' | '))
// let qual = rl.question('Qual vc quer achar? ')
// let achou = lista_nova.includes(qual)
// ou 
// let n = lista_nova.indexOf(qual)

// if (!achou) {
//     console.log('Nao achou!')
// } else {
//     console.log(`O personagem que vc quer é numero ${n + 1}`)
// }

//  Exemplo 5 usando forEach
// lista_nova.forEach(function (lista, indece){
//     console.log(`${indece + 1}º - ${lista}`)
// });

// lista_nova.forEach((lista, indece) => {
//     console.log(`${indece + 1}º - ${lista}`)
// });

// for (let i in lista_nova) {
//     console.log(`${Number (i) + 1}º - ${lista_nova[i]}`)
// }
