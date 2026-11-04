import { Navio } from "./Navio";
import { Bergantim } from "./Bergantim";
import { Chalupa } from "./Chalupa";
import { Galeao } from "./Galeao";

const bergantim = new Bergantim("Vingança dos Mares");
const chalupa = new Chalupa("Pérola Azul");
const galeao = new Galeao("Rei dos Oceanos");

console.log("\n===== INFORMAÇÕES DOS NAVIOS =====");

bergantim.exibirInformacoes();
chalupa.exibirInformacoes();
galeao.exibirInformacoes();

console.log("\n===== NAVEGAÇÃO =====");

bergantim.navegar();
chalupa.navegar();
galeao.navegar();

console.log("\n===== ATAQUES =====");

bergantim.atacar();
chalupa.atacar();
galeao.atacar();

console.log("\n===== RECEBENDO DANO =====");

bergantim.receberDano(30);
chalupa.receberDano(20);
galeao.receberDano(80);

console.log(`Vida do Bergantim: ${bergantim.vida}`);
console.log(`Vida da Chalupa: ${chalupa.vida}`);
console.log(`Vida do Galeão: ${galeao.vida}`);

console.log("\n===== EXPLORANDO ILHA =====");

chalupa.explorarIlha();

console.log("\n===== REPARANDO GALEÃO =====");

galeao.repararNavio();

console.log(`Vida do Galeão após reparo: ${galeao.vida}`);

console.log("\n===== POLIMORFISMO =====");

const frota: Navio[] = [
    bergantim,
    chalupa,
    galeao
];

for (const navio of frota) {
    console.log("\n------------------------------");

    navio.exibirInformacoes();
    navio.navegar();
    navio.atacar();
}

console.log("\n===== TESTANDO SITUAÇÕES INVÁLIDAS =====");

try {
    bergantim.receberDano(-10);
} catch (erro) {
    console.log("Erro:", (erro as Error).message);
}

try {
    chalupa.vida = 100;
} catch (erro) {
    console.log("Erro:", (erro as Error).message);
}

try {
    galeao.vida = -50;
} catch (erro) {
    console.log("Erro:", (erro as Error).message);
}

bergantim.receberDano(500);

console.log(`Vida final do Bergantim: ${bergantim.vida}`);

console.log("\n===== FIM DO PROGRAMA =====");
