// Exemplo 1
// let idade = 20;
// let possuiCNH = true;

// if (idade >= 18) {

//     if (possuiCNH) {
//         console.log('Pode dirigir');
//     }
//     else {
//         console.log('Precisa tirar CNH');
//     }
// }
// else {
//     console.log('Menor de idade');
// }

// Exemplo Completo 1
// Sistema de Acesso
// Regras: Usuário correto, Senha correta, Conta ativa

// let usuario = 'admin';
// let senha = '1234';
// let ativo = true;

// if (usuario === 'admin') {
//     if (senha === '1234') {
//         if (ativo) {
//             console.log('Acesso liberado');
//         }
//         else {
//             console.log('Conta desativada');
//         }
//     }
//     else {
//         console.log('Senha incorreta');
//     }
// }
// else {
//     console.log('Usuário não encontrado');
// }

// Exemplo Prático 1
// Categoria de Campeonato
// const rl = require('readline-sync');

// let idade = rl.questionInt('Digite sua idade: ');
// if (idade < 12) {
//     console.log('Categoria Infantil');
// }
// else if (idade < 18) {
//     console.log('Categoria Juvenil');
// }
// else if (idade < 40) {
//     console.log('Categoria Adulto');
// }
// else {
//     console.log('Categoria Master');
// }

// const rl = require('readline-sync');

// let idade = rl.questionInt('Qual a sua idade: ')

// if (idade >= 18){
//     let CNH = rl.keyInYN('Possui CNH? ')
//     if (CNH === true) {
//         console.log('Pode dirigir')
//     } else {
//         console.log('Precisa tirar CNH')
//     }
// } else {
//     console.log('Voce e menor de idade')
// }

// Exercicio 1
// const rl = require('readline-sync');

// let idade = rl.questionInt('Digite sua idade: ');
// if (idade <= 12) {
//     console.log('Crianca');
// }
// else if (idade >= 13 && idade <= 17) {
//     console.log('Juvenil');
// }
// else if (idade >= 18 && idade <= 59) {
//     console.log('Adulto');
// }
// else {
//     console.log('Idoso');
// }

// Exercio 2
// const rl = require('readline-sync');

// let a = rl.questionInt('Digite o lado A: ')
// let b = rl.questionInt('Digite o lado B: ')
// let c = rl.questionInt('Digite o lado C: ')

// if (a == b && b == c) {
//     console.log('Triângulo equilátero')
// } else if (a == b || a == c || b == c) {
//     console.log('Triângulo isósceles')
// } else {
//     console.log('Triângulo escaleno')
// }

// Exercicio 3
// const rl = require('readline-sync');

// let valorCompra = rl.questionFloat('Digite o valor da compra: ');

// let desconto = 0;
// let percentual = 0;

// if (valorCompra <= 100) {
//     desconto = 0;
//     percentual = 0;
// } else if (valorCompra <= 300) {
//     desconto = 0.05;
//     percentual = 5;
// } else if (valorCompra <= 500) {
//     desconto = 0.10;
//     percentual = 10;
// } else {
//     desconto = 0.15;
//     percentual = 15;
// }

// let valorDesconto = valorCompra * desconto;
// let valorFinal = valorCompra - valorDesconto;

// console.log(`Seu desconto foi de ${valorFinal}`)

// Exercicio 4
// const rl = require('readline-sync')

// let nota = rl.questionFloat('Digite a sua nota final: ')
// let frequencia = rl.questionInt('Quantos % ficou a sua frequencia: ')

// if (frequencia >= 75) {
//     if (nota >= 7) {
//         console.log('Aprovado')
//     } else if (nota >= 5) {
//         console.log('Em recuperação')
//     } else {
//         console.log('Reprovado')
//     }
// } else {
//     console.log('Reprovado por frequência')
// }

// Exercicio 5
// const rl = require('readline-sync')

// let peso = rl.questionInt('Digite seu peso(kg): ')
// let altura = rl.questionFloat('Digite sua altura(m): ')

// let imc = peso / (altura * altura);

// if (imc <= 18.5) {
//     console.log("Abaixo do peso")
// } else if (imc >= 18.6 && imc <= 24.9) {
//    console.log("Peso normal")
// } else if (imc >= 25 && imc <= 29.9) {
//     console.log("Sobrepeso") 
// } else {
//     console.log("Obesidade")
// }

// Exercicio 6 Desafio
// const rl = require('readline-sync')

// let computador = Math.floor(Math.random() * 3);
// let usuario = rl.questionInt('Escolha (0) para Pedra, Escolha (1) Papel, Escolha (2) Tesoura: ');

// console.log("Computador:", computador);
// console.log("Usuário:", usuario);

// if (usuario === computador) {
//     console.log("Empate");
// }
// else if (
//     (usuario === 0 && computador === 2) || // Pedra ganha de Tesoura
//     (usuario === 1 && computador === 0) || // Papel ganha de Pedra
//     (usuario === 2 && computador === 1)    // Tesoura ganha de Papel
// ) {
//     console.log("Vitória");
// }
// else {
//     console.log("Derrota");
// }
