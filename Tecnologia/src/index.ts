import { Cachorro } from "./Cachorro";

const cachorro1 = new Cachorro("Rex", 3, "Pastor Alemão");
const cachorro2 = new Cachorro("Mel", 2, "Labrador");
const cachorro3 = new Cachorro("Thor", 5, "Golden Retriever");

console.log("=== Cachorro 1 ===");
console.log("Nome:", cachorro1.getNome());
console.log("Idade:", cachorro1.getIdade());
console.log("Raça:", cachorro1.getRaca());

console.log("\n=== Cachorro 2 ===");
console.log("Nome:", cachorro2.getNome());
console.log("Idade:", cachorro2.getIdade());
console.log("Raça:", cachorro2.getRaca());

// Consultando os dados do cachorro 3
console.log("\n=== Cachorro 3 ===");
console.log("Nome:", cachorro3.getNome());
console.log("Idade:", cachorro3.getIdade());
console.log("Raça:", cachorro3.getRaca());

cachorro1.setNome("Max");
cachorro1.setIdade(4);
cachorro1.setRaca("Border Collie");

cachorro2.setIdade(3);
cachorro2.setRaca("Beagle");

cachorro3.setNome("Bob");

console.log("\n=== Dados Atualizados ===");

console.log(
    cachorro1.getNome(),
    cachorro1.getIdade(),
    cachorro1.getRaca()
);

console.log(
    cachorro2.getNome(),
    cachorro2.getIdade(),
    cachorro2.getRaca()
);

console.log(
    cachorro3.getNome(),
    cachorro3.getIdade(),
    cachorro3.getRaca()
);
