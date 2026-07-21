// Exetcicio 1 Lista de Nomes
// let nomes = ['Ana', 'Bruna', 'Carlos', 'Daniela', 'Eduardo']

// for (let nome of nomes) {
//     console.log(`${nome}`)
// }

// Exercicio 2 Índices
// let nomes = ['Ana', 'Bruna', 'Carlos', 'Daniela', 'Eduardo']

// for (let indice in nomes) {
//     console.log(`${indice} - ${nomes[indice]}`)
// }

// Exercicio 3 Produtos
// const rl = require('readline-sync')

// let produtos = [];

// for (let i = 0; i < 5; i++) {
//     let produto = rl.question(`Digite o ${i + 1} produto: `);
//     produtos.push(produto);
// }

// console.log("\nLista de produtos:");

// produtos.forEach(function(produto, indice) {
//     console.log(`${indice + 1} - ${produto}`);
// });

// Exercicio 4 Procurando uma Fruta
// const rl = require('readline-sync')

// let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];
// let fruta = rl.question("Digite o nome de uma fruta: ");

// if (frutas.includes(fruta)) {
//     console.log("A fruta está cadastrada.");
// } else {
//     console.log("A fruta não está cadastrada.");
// }

// Exercicio 5 Removendo Elementos
// let cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Fortaleza"];

// console.log("Cidades antes da remoção:");
// console.log(cidades);

// cidades.splice(2, 1);

// console.log("\nCidades após a remoção:");
// console.log(cidades);

// Exercício 6 Lista Formatada
// let linguagens = ["JavaScript", "Python", "Java", "C#", "PHP"];

// console.log(linguagens.join(" | "));

// Exercicio 7 Desafio Gerenciador de Lista de Compras
// const rl = require('readline-sync')

// let compras = [];

// for (let i = 0; i < 5; i++) {
//     let produto = rl.question(`Digite o ${i + 1} produto: `);
//     compras.push(produto);
// }
// console.log("\nLista de compras:");
// compras.forEach(function(produto, indice) {
//     console.log(`${indice + 1} - ${produto}`);
// });

// let remover = rl.question("\nQual produto deseja remover? ");
// let posicao = compras.indexOf(remover);

// if (posicao !== -1) {
//     compras.splice(posicao, 1);
//     console.log("\nProduto removido com sucesso!");
// } else {
//     console.log("\nProduto não encontrado.");
// }
// console.log("\nLista atualizada:");
// for (let produto of compras) {
//     console.log(produto);
// }
