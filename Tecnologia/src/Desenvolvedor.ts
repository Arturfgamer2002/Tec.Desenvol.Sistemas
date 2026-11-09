import { ITrabalhar, IProgramador } from "./interfaces";

export class Desenvolvedor implements ITrabalhar, IProgramador {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    trabalhar(): void {
        console.log(`${this.nome} está trabalhando.`);
    }

    programar(): void {
        console.log(`${this.nome} está programando.`);
    }
}