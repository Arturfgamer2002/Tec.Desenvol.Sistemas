// Exemplo 1
// let opcao = 1;

// switch (opcao) {
//     case 1:
//         console.log("Cadastrar");
//         break;
//     case 2:
//         console.log("Alterar");
//         break;
//     case 3:
//         console.log("Excluir");
//         break;
//     default:
//         console.log("Opção inválida");
// }

// Exemplo 2 incorreto
// let numero = 1;

// switch (numero) {
//     case 1:
//         console.log("Um");
//     case 2:
//         console.log("Dois");
//     case 3:
//         console.log("Três");
// }

// Exemplo 2 correto
// let numero = 1;

// switch (numero) {
//     case 1:
//         console.log("Um");
//         break;
//     case 2:
//         console.log("Dois");
//         break;
//     case 3:
//         console.log("Três");
//         break;
// }

//Exemplo 3 
// let dia = 2;

// switch (dia) {
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Segunda");
//         break;
//     default:
//         console.log("Dia inválido");
// }

//Exemplo Prático Calculadora Soma e Subtração 1
// const rl = require("readline-sync");

// let n1 = rl.questionFloat("Primeiro numero: ");
// let n2 = rl.questionFloat("Segundo numero: ");

// console.log();
// console.log("1 - Soma");
// console.log("2 - Subtração");

// let opcao = rl.questionInt("Escolha: ");

// switch (opcao) {
//     case 1:
//         console.log("Resultado:", n1 + n2);
//         break;
//     case 2:
//         console.log("Resultado:", n1 - n2);
//         break;
//     default:
//         console.log("Opção inválida.");
// }

// Exemplo Completo Dias da Semana 2
// const rl = require("readline-sync");

// let dia = rl.questionInt("Digite um numero de 1 a 7: ");

// switch (dia) {
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Segunda-feira");
//         break;
//     case 3:
//         console.log("Terça-feira");
//         break;
//     case 4:
//         console.log("Quarta-feira");
//         break;
//     case 5:
//         console.log("Quinta-feira");
//         break;
//     case 6:
//         console.log("Sexta-feira");
//         break;
//     case 7:
//         console.log("Sábado");
//         break;
//     default:
//         console.log("Dia inválido.");
// }

// Exemplo 4
// let nota = "A";

// switch (nota) {
//     case "A":
//     case "B":
//         console.log("Aprovado");
//         break;
//     case "C":
//         console.log("Recuperação");
//         break;
//     case "D":
//     case "F":
//         console.log("Reprovado");
//         break;
// }

//Exemplo 5 
// let valor = "10";

// switch (valor) {
//     case 10:
//         console.log("Número");
//         break;
//     default:
//         console.log("Não encontrou");
// }

//Exercicio 1
// const rl = require("readline-sync");

// console.log("=== Menu de Restaurante ===");
// console.log("1 - Hambúrguer");
// console.log("2 - Pizza");
// console.log("3 - Cachorro-quente");
// console.log("4 - Refrigerante");
// console.log("5 - Sorvete");
// console.log("==========================");

// let opcao = rl.questionInt("Digite um numero no cardapio de 1 a 5: ");

// console.log("==========================");

// switch (opcao) {
//     case 1:
//       console.log("Você escolheu: Hambúrguer");
//       break;
//     case 2:
//       console.log("Você escolheu: Pizza");
//       break;
//     case 3:
//       console.log("Você escolheu: Cachorro-quente");
//       break;
//     case 4:
//       console.log("Você escolheu: Refrigerante");
//       break;
//     case 5:
//       console.log("Você escolheu: Sorvete");
//       break;
//     default:
//       console.log("Opção inválida.");
//   }

//Exercicio 2
// const rl = require("readline-sync");

// console.log("==========================");

// let numero = rl.questionInt("Digite um numero do ano de 1 a 12: ");

// console.log("==========================");

// switch (numero) {
//     case 1:
//       console.log("Janeiro");
//       break;
//     case 2:
//       console.log("Fevereiro");
//       break;
//     case 3:
//       console.log("Março");
//       break;
//     case 4:
//       console.log("Abril");
//       break;
//     case 5:
//       console.log("Maio");
//       break;
//     case 6:
//       console.log("Junho");
//       break;
//     case 7:
//       console.log("Julho");
//       break;
//     case 8:
//       console.log("Agosto");
//       break;
//     case 9:
//       console.log("Setembro");
//       break;
//     case 10:
//       console.log("Outubro");
//       break;
//     case 11:
//       console.log("Novembro");
//       break;
//     case 12:
//       console.log("Dezembro");
//       break;
//     default:
//       console.log("Número inválido.");
//   }

//Exercicio 3
// const rl = require("readline-sync");

// let n1 = rl.questionFloat("Primeiro numero: ");
// let n2 = rl.questionFloat("Segundo numero: ");

// console.log("1 - Soma");
// console.log("2 - Subtração");
// console.log("3 - Multiplicação");
// console.log("4 - Divisão");

// let opcao = rl.questionInt("Escolha: ");

//  switch (opcao) {
//           case 1:
//             console.log("Resultado:", n1 + n2);
//             break;
//           case 2:
//             console.log("Resultado:", n1 - n2);
//             break;
//           case 3:
//             console.log("Resultado:", n1 * n2);
//             break;
//           case 4:
//              if (n2 === 0) {
//               console.log("Erro: divisão por zero não é permitida.");
//             } else {
//               console.log("Resultado:", n1 / n2);
//             }
//             break;
//           default:
//             console.log("Opção inválida.");
//         }

//Exercicio 4
// const rl = require("readline-sync");

// console.log("==========================");
// console.log("Escolha uma linguagem:");
// console.log("1 - JavaScript");
// console.log("2 - Python");
// console.log("3 - Java");
// console.log("4 - PHP");
// console.log("==========================");

// let opcao = rl.questionInt("Digite um numero da sua linguagem de 1 a 4: ");
// console.log("==========================");

//  switch (opcao) {
//     case 1:
//       console.log("JavaScript → Front-end e Back-end");
//       break;
//     case 2:
//       console.log("Python → Dados e IA");
//       break;
//     case 3:
//       console.log("Java → Desktop e Back-end");
//       break;
//     case 4:
//       console.log("PHP → Desenvolvimento Web");
//       break;
//     default:
//       console.log("Opção inválida.");
//   }

//Exercicio 5 Desafio extra
// const rl = require("readline-sync");

// let n1 = rl.questionInt("Primeiro numero: ");
// let n2 = rl.questionInt("Segundo numero: ");

// console.log("=== Calculadora de Áreas ===");
// console.log("1 - Quadrado");
// console.log("2 - Retângulo");
// console.log("3 - Triângulo");
// console.log("4 - Círculo");
// console.log("==========================");

// let opcao = rl.questionInt("Escolha uma opcao: ")
// console.log("==========================");

//   switch (opcao) {
//     case 1: 
//     console.log("Sua Área do Quadrado é de: ", n1 * n1)
//     break;
//     case 2: 
//     console.log("Sua Área do Retângulo é de: ", n1 * n2)
//     break;
//     case 3: 
//     console.log("Sua Área do Triângulo é de: ", (n1 * n2) / 2)
//     break;
//     case 4: 
//     console.log("Sua Área do Círculo é de: ", Math.PI * n1 * n1)
//     break;
//     default:
//     console.log("Opção inválida.");
//   }
