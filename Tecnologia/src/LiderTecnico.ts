import { ITrabalhar, IProgramador, IGerente } from "./interfaces";

export class LiderTecnico implements ITrabalhar, IProgramador, IGerente {
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

    gerenciar(): void {
        console.log(`${this.nome} está gerenciando a equipe.`);
    }
}