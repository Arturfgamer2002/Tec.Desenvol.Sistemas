// Exercicio 6
// const rl = require('readline-sync')

// let nota = rl.questionFloat("Digite a nota: ")

//   if (nota >= 9) {
//     console.log("Conceito A");
//   } else if (nota >= 7) {
//     console.log("Conceito B");
//   } else if (nota >= 5) {
//     console.log("Conceito C");
//   } else {
//     console.log("Conceito D");
//   }

// Exercicio 7
// const rl = require('readline-sync')

//   let numero = rl.questionInt("Digite um numero: ")
//   let tipoNumero = "";
//   let tipoParidade = "";

//   if (numero > 0) {
//     tipoNumero = "positivo";
//   } else if (numero < 0) {
//     tipoNumero = "negativo";
//   } else {
//     tipoNumero = "zero";
//   }

//   if (numero % 2 === 0) {
//     tipoParidade = "par";
//   } else {
//     tipoParidade = "ímpar";
//   }

//   console.log(`Número ${tipoNumero} e ${tipoParidade}`);

// Exercicio 8 
// const rl = require('readline-sync')

// let n1 = rl.questionInt("Digite o primeiro numero: ")
// let n2 = rl.questionInt("Digite o segundo numero: ")
// let n3 = rl.questionInt("Digite o terceiro numero: ")

// if (n1 === n2 && n2 === n3) {
//         console.log("Todos os números são iguais.");
//       } 
//       else {
//         if (n1 === n2 || n1 === n3 || n2 === n3) {
//           console.log("Há pelo menos dois números iguais.");
//         } else {
//           console.log("Todos os números são diferentes.");
//         }
//         let maior = Math.max(n1, n2, n3);
//         console.log(`Maior número: ${maior}`);
//       }

// Exercicio 9
// const rl = require('readline-sync')

// let ano = rl.questionInt("Digite o ano: ")

//   if (ano % 4 === 0) {
//     console.log("Ano bissexto");
//   } else {
//     console.log("Ano não bissexto");
//   }

// Exercicio 10
// const rl = require('readline-sync')

// let salario = rl.questionFloat("Digite o salario do funcionario: ")

//   let taxa = 0;

//   if (salario <= 2000) {
//     taxa = 0;
//   } else if (salario <= 4000) {
//     taxa = 0.075;
//   } else if (salario <= 6000) {
//     taxa = 0.15;
//   } else {
//     taxa = 0.22;
//   }

//   const imposto = salario * taxa;
//   const salarioLiquido = salario - imposto;

//   console.log(`Salario informado: R$ ${salario}`);

//   if (taxa === 0) {
//     console.log("Percentual aplicado: isento");
//   } else {
//     console.log(`Percentual aplicado: ${(taxa * 100).toFixed(1)}%`);
//   }

//   console.log(`Valor do imposto: R$ ${imposto.toFixed(2)}`);
//   console.log(`Salario liquido: R$ ${salarioLiquido.toFixed(2)}`);

// Exercicio 11
// const rl = require('readline-sync')

// let idade = rl.questionInt("Digite sua idade: ")

//   if (idade < 16) {
//     console.log("Não vota");
//   } else if (idade >= 16 && idade <= 17) {
//     console.log("Voto facultativo");
//   } else if (idade >= 18 && idade <= 69) {
//     console.log("Voto obrigatório");
//   } else {
//     console.log("Voto facultativo");
//   }

// Execicio 12
// const rl = require('readline-sync')

// const usuarioCorreto = "admin"
// const senhaCorreta = "1234"

// let usuario = rl.questionFloat("Digite o usuario: ")
// let senha =  rl.questionFloat("Digite a senha: ")
// let nivel =  rl.question("Digite o nivel de acesso (1, 2 ou 3): ")

//       if (usuario === usuarioCorreto && senha === senhaCorreta) {

//         if (nivel === "1") {
//           console.log("Acesso básico");
//         } else if (nivel === "2") {
//           console.log("Acesso intermediário");
//         } else if (nivel === "3") {
//           console.log("Acesso administrador");
//         } else {
//           console.log("Nível de acesso inválido");
//         }

//       } else {
//         console.log("Usuário ou senha inválidos");
//       }

// Exercicio 13
// const rl = require('readline-sync')

// let valorCompra = rl.questionFloat("Digite o valor da compra: R$ ")
// let regiao = rl.question("Digite a regiao (sul, sudeste, centro-oeste, nordeste ou norte): ")

//     let frete;

//     if (valorCompra > 200) {
//       frete = 0;
//     } else {
//       if (regiao === "sul") {
//         frete = 20;
//       } else if (regiao === "sudeste") {
//         frete = 25;
//       } else if (regiao === "centro-oeste") {
//         frete = 30;
//       } else if (regiao === "nordeste") {
//         frete = 35;
//       } else if (regiao === "norte") {
//         frete = 40;
//       } else {
//         console.log("Região inválida.");
//       }
//     }

//     console.log("\n--- Resultado ---");
//     console.log(`Valor da compra: R$ ${valorCompra.toFixed(2)}`);
//     console.log(`Regiao: ${regiao}`);
//     console.log(`Valor do frete: R$ ${frete.toFixed(2)}`);

// Exercicio 14
// const rl = require('readline-sync')

// let valor = rl.questionFloat("Digite o valor da compra: R$ ")
// let vip = rl.question("O cliente e VIP? (sim/nao): ").toLowerCase() === "sim";

// let desconto = 0;
// let tipoCliente = vip ? "VIP" : "Comum";

// if (vip) {
//   if (valor <= 100) {
//     desconto = 0.05;
//   } else if (valor <= 300) {
//     desconto = 0.10;
//   } else {
//     desconto = 0.15;
//   }
// } else {
//   if (valor <= 100) {
//     desconto = 0;
//   } else if (valor <= 300) {
//     desconto = 0.05;
//   } else {
//     desconto = 0.10;
//   }
// }

// let valorDesconto = valor * desconto;
// let valorFinal = valor - valorDesconto;

// console.log("\n--- Resultado ---");
// console.log(`Tipo do cliente: ${tipoCliente}`);
// console.log(`Percentual aplicado: ${(desconto * 100).toFixed(0)}%`);
// console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);

// Exercicio 15
// const rl = require('readline-sync')

// let nome = rl.question("Digite o nome do aluno: ")
// let frequencia = rl.questionInt("Digite a frequencia (%): ")
// let trabalho = rl.question("Entregou o trabalho final? (sim/nao): ")

//     console.log("\n--- Resultado ---");
//       console.log(`Aluno: ${nome}`);

//       if (frequencia < 75) {
//         console.log("Impedido de fazer a prova final por falta");
//       } else {
//         if (trabalho) {
//           console.log("Pode fazer a prova final");
//         } else {
//           console.log("Não pode fazer a prova final (trabalho pendente)");
//         }
//       }
