/*

Uma empresa precisa desenvolver um sistema para organizar as dunções de seus funcionários.

Cada funcionário possui responsabilidades diferentes:
- O DESENVOLVEDOR pode trabalhar e programar.
- O GERENTE pode trabalhar e gerenciar equipes.
- O LIDER TÉCNICO pode trabalhar, programar e gerenciar equipes.

Para organizar essas responsabilidades, você deverá utilizar 3 interfaces:
- ITrabalhar : possui o método trabalhar():void
- IProgamador : possui o método progamar():void
- IGerente : possui o método gerenciar():void

Todas as classes (desenvolvedor, gerente e liderTecnico) deverão possuir também um atributo nome. Cada método deve retornar uma mensagem.

Crie um objeto de cada no index e chame seus métodos

*/

import { Desenvolvedor } from "./Desenvolvedor";
import { Gerente } from "./Gerente";
import { LiderTecnico } from "./LiderTecnico";

// Criando os objetos
const desenvolvedor = new Desenvolvedor("Carlos");
const gerente = new Gerente("Mariana");
const liderTecnico = new LiderTecnico("João");

// Desenvolvedor
console.log("=== DESENVOLVEDOR ===");
desenvolvedor.trabalhar();
desenvolvedor.programar();

// Gerente
console.log("\n=== GERENTE ===");
gerente.trabalhar();
gerente.gerenciar();

// Líder Técnico
console.log("\n=== LÍDER TÉCNICO ===");
liderTecnico.trabalhar();
liderTecnico.programar();
liderTecnico.gerenciar();