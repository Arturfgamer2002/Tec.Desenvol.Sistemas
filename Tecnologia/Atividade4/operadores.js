//Exemplo 1
// let idade = 18

// console.log(idade > 15)
// console.log(idade < 20)
// console.log(idade >= 18)
// console.log(idade <= 18)
// console.log(idade == 20)
// console.log(idade != 20)

// Exemplo 2
// let idade = 18

// if (idade > 60) {
//     console.log("Voce e um idoso")
// }
// else if (idade >= 21) {
//     console.log("Voce e adulto!")
// }
// else if (idade >= 13) {
//     console.log("Voce e adolescente")
// } else {
//     console.log("Voce e uma crianca")
// }

// Exemplo 3
// const rl = require('readline-sync')

// let idade = rl.questionInt("Qual a sua idade? ")
// let pussuiCNH = rl.keyInYN("Possui CNH? ")

// if (idade >= 18 && pussuiCNH == true && idade < 80) {
//     console.log('Pode dirigir')
// } else {
//     console.log('🔞 Nao pode dirigir')
// }

// Exemplo 4
// let idade = 20;
// let possuiCNH = true;

// if (idade >= 18 && possuiCNH) {
//     console.log('Pode dirigir');
// }

// Exemplo 5
// let possuiIngresso = false;
// let nomeNaLista = true;

// if (possuiIngresso || nomeNaLista) {
//     console.log('Entrada liberada');
// }

// Exemplo 6
// let chovendo = false;

// if (!chovendo) {
//     console.log('Pode sair');
// }

// Exemplo completo 7
// const rl = require('readline-sync');

// let idade = rl.questionInt('Digite sua idade: ');

// if (idade >= 18) {
//     console.log('Você é maior de idade.');
// }
// else {
//     console.log('Você é menor de idade.');
// }