// Exercicio 1 Animal de Estimação
// const rl = require("readline-sync");

// function cadastrarPet() {
//     let nome = rl.question("Digite o nome do pet: ")
//     let especie = rl.question("Digite a especie do pet: ")
//     let idade = rl.questionInt("Digite a idade do pet: ")
//     let pet = {
//         nome: nome,
//         especie: especie,
//         idade: Number(idade)
//     }
// console.log("\n=== Dados do Pet ===");
// console.log("Nome:", pet.nome);
// console.log("Espécie:", pet.especie);
// console.log("Idade:", pet.idade);
// }

// cadastrarPet()


// Exercicio 2 Alterando Informações
// const rl = require("readline-sync");

// function cadastrarFilme() {
//     let titulo = rl.question("Digite o titulo do filme: ");
//     let genero = rl.question("Digite o genero do filme: ");
//     let ano = rl.questionInt("Digite o ano do filme: ");
//     let novoAno = rl.questionInt("Digite o novo ano: ");
//     let diretor = rl.question("Digite o nome do diretor: ");
//     let filme = {
//         titulo: titulo,
//         genero: genero,
//         ano: ano
//     };

//     filme.ano = novoAno;
//     filme.diretor = diretor;

//     console.log("\n=== Objeto Filme ===");
//     console.log(filme);
// }

// cadastrarFilme();


// Exercicio 3 Saudação Personalizada
// const rl = require("readline-sync");

// function boasVindas(nome) {
//     console.log("\nSeja bem-vindo(a), " + nome + "!");
// }

// let nome1 = rl.question("Digite o primeiro nome: ");
// let nome2 = rl.question("Digite o segundo nome: ");
// let nome3 = rl.question("Digite o terceiro nome: ");

// boasVindas(nome1);
// boasVindas(nome2);
// boasVindas(nome3);


// Exercício 4 Conversor de Temperatura
// const rl = require("readline-sync")

// function celsiusParaFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }

// let celsius = rl.questionFloat("Digite a temperatura em Celsius: ");
// let fahrenheit = celsiusParaFahrenheit(celsius);

// console.log("Temperatura em Fahrenheit: " + fahrenheit + "°F");


// Exercício 5 Catálogo de Filmes
// const rl = require("readline-sync")

// function cadastrarFilmes() {
//     let filmes = [];
//     for (let i = 1; i <= 3; i++) {
//         console.log("\nFilme " + i);

//         let titulo = rl.question("Digite o titulo do filme: ");
//         let duracao = rl.questionInt("Digite a duracao (em minutos): ");
//         let filme = {
//             titulo: titulo,
//             duracao: duracao
//         };
//         filmes.push(filme);
//     }

//     console.log("\n=== Lista de Filmes ===");

//     for (let filme of filmes) {
//         console.log("Título: " + filme.titulo);
//         console.log("Duração: " + filme.duracao + " minutos");
//         console.log("------------------------");
//     }
// }

// cadastrarFilmes();


// Exercício 6 Verificando Maioridade
// const rl = require("readline-sync");

// function ehMaiorDeIdade(idade) {
//     if (idade >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let idade1 = rl.questionInt("Digite a primeira idade: ");
// let idade2 = rl.questionInt("Digite a segunda idade: ");
// let idade3 = rl.questionInt("Digite a terceira idade: ");

// console.log(idade1 + ": " + ehMaiorDeIdade(idade1));
// console.log(idade2 + ": " + ehMaiorDeIdade(idade2));
// console.log(idade3 + ": " + ehMaiorDeIdade(idade3));


// Exercicio 7 Agenda Telefônica
// const rl = require("readline-sync");

// function cadastrarContatos() {
//     let contatos = [];

//     for (let i = 1; i <= 3; i++) {
//         console.log("\nContato " + i);

//         let nome = rl.question("Digite o nome: ");
//         let telefone = rl.question("Digite o telefone: ");
//         let email = rl.question("Digite o e-mail: ");

//         let contato = {
//             nome: nome,
//             telefone: telefone,
//             email: email
//         };

//         contatos.push(contato);
//     }

//     console.log("\n=== Agenda Telefônica ===");

//     let numero = 1;

//     for (let contato of contatos) {
//         console.log("\nContato " + numero);
//         console.log("Nome: " + contato.nome);
//         console.log("Telefone: " + contato.telefone);
//         console.log("E-mail: " + contato.email);
//         numero++;
//     }
// }

// cadastrarContatos();