// Exercicio 1 contsgem 
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// Exercício 2 Contagem Regressiva
// for (let i = 20; i >= 0; i--) {
//     console.log(i);
// }

// Exercício 3 Soma
// let soma = 0;

// for (let i = 1; i <= 100; i++) {
//     soma += i;
// }

// console.log(soma);

// Exercício 4 Cadastro de Frutas 
// const rl = require("readline-sync");

// let frutas = [];

// for (let i = 0; i < 5; i++) {
//     let resposta =  rl.question(`Digite o nome da ${i + 1} fruta: `)
//     frutas.push(resposta)
// }  

// console.log(`Frutas cadastradas: ${frutas}`);

// Exercício 5 Média da Turma
// const rl = require("readline-sync");

// let notas = [];
// let soma = 0;

// for (let i = 0; i < 5; i++) {
//     let resposta = rl.questionFloat(`Digite a ${i + 1} nota: `);
//     notas.push(resposta);
//     soma += resposta
// }

// console.log(soma)

// let media = soma / notas.length;
// let maior = notas[0];
// let menor = notas[0];

// for (let i = 0; i < notas.length; i++) {
//     if (notas[i] > maior) {
//         maior = notas[i];
//     }
//     if (notas[i] < menor) {
//         menor = notas[i];
//     }
// }

// console.log(`Média: ${media}`);
// console.log(`Maior nota: ${maior}`);
// console.log(`Menor nota: ${menor}`);

// // Exercício 6 Tabuada
// const rl = require("readline-sync");

// let numero = rl.questionInt("Digite um numero: ");

// for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }

// Exercicio 7 Desafio
// const rl = require("readline-sync");

// let quantidade = rl.questionInt("Quantos alunos serao cadastrados? ");
// let alunos = [];

// console.log("");

// for (let i = 0; i < quantidade; i++) {
//     let nome = rl.question(`Digite o nome do ${i + 1} aluno: `);
//     alunos.push(nome);
// }
// console.log("Alunos cadastrados:");

// for (let i = 0; i < alunos.length; i++) {
//     console.log(`${i + 1}º Nome: ${alunos[i]}`);
// }
// console.log(`Quantidade total de alunos cadastrados: ${alunos.length}`);

// let pesquisa = rl.question('Qual Aluno voce esta procurando: ')
// let taCadastrado = false

// for (let i = 0; i < alunos.length; i++) {
//     if (pesquisa === alunos[i]) {
//         taCadastrado = true
//         break
//     }
// }

// if (taCadastrado === true) {
//     console.log('O aluno esta cadastrado. ')
// } else {
//     console.log('O aluno nao esta cadastrado. ')
// }
