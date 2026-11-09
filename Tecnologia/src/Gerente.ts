import { ITrabalhar, IGerente } from "./interfaces";

export class Gerente implements ITrabalhar, IGerente {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    trabalhar(): void {
        console.log(`${this.nome} está trabalhando.`);
    }

    gerenciar(): void {
        console.log(`${this.nome} está gerenciando a equipe.`);
    }
}