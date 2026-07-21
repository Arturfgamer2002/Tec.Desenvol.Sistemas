// Exemplo 1 contsgem 
// for (let i = 1; i <= 5; i++) {

//     console.log(i);

// }

// Exemplo 2
// for (let i = 1; i <= 10; i++) {

//     console.log(i);

// }

// Exemplo 3 contagem regressiva
// for (let i = 10; i >= 1; i--) {

//     console.log(i);

// }

// Exemplo 4 Somando Valores
// let soma = 0;

// for (let i = 1; i <= 5; i++) {

//     soma += i;

// }

// console.log(soma);

// Exemplo 5 Estrutura while
// let contador = 1;

// while (contador <= 5) {

//     console.log(contador);

//     contador++;

// }

// Exemplo 6 Cuidado com Loop Infinito
// let contador = 1;

// while (contador <= 5) {

//     console.log(contador);

// }

// Exemplo 7 Array
// let nomes = [
//     "Ana",
//     "Carlos",
//     "João",
//     "Maria"
// ];

// Exemplo 8 Acessando Elementos
// let frutas = [
//     "Maçã",
//     "Banana",
//     "Laranja"
// ];

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);

// Exemplo 9 Alterando Valores
// let frutas = [
//     "Maçã",
//     "Banana"
// ];

// frutas[1] = "Uva";

// console.log(frutas);

// Exemplo 10 Adicionando Novos Valores
// let frutas = [
//     "Maçã",
//     "Banana"
// ];

// frutas.push("Laranja");

// console.log(frutas);

// Exemplo 11 Quantidade de Elementos
// let numeros = [10, 20, 30, 40];

// console.log(numeros.length);

// Exemplo 12 Percorrendo um Array com for
// let frutas = [
//     "Maçã",
//     "Banana",
//     "Laranja",
//     "Uva"
// ];

// for (let i = 0; i < frutas.length; i++) {

//     console.log(frutas[i]);

// }

// Exemplo 13 Percorrendo um Array com while
// let frutas = [
//     "Maçã",
//     "Banana",
//     "Laranja"
// ];

// let i = 0;

// while (i < frutas.length) {

//     console.log(frutas[i]);

//     i++;

// }

// Exemplo Prático Cadastro de 5 Nomes
// const rl = require("readline-sync");

// let nomes = [];

// for (let i = 0; i < 5; i++) {

//     nomes.push(
//         rl.question("Nome: ")
//     );

// }

// console.log();

// console.log("Lista de nomes:");

// for (let i = 0; i < nomes.length; i++) {

//     console.log(nomes[i]);

// }

// Exemplo com while Login
// const rl = require("readline-sync");

// let senha = "";

// while (senha !== "1234") {

//     senha = rl.question("Digite a senha: ");

//     if (senha !== "1234") {

//         console.log("Senha incorreta!");

//     }

// }

// console.log("Acesso permitido.");