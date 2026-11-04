import { Navio } from "./Navio";

export class Bergantim extends Navio {

    constructor(nome: string) {
        super(
            nome,
            20,  // Capacidade da tripulação
            100, // Vida máxima
            80,  // Velocidade
            6    // Canhões
        );
    }

    public override navegar(): void {
        console.log(
            `${this.nome} aproveita os ventos favoráveis para navegar rapidamente!`
        );
    }

    public override atacar(): void {
        console.log(
            `${this.nome} realiza uma sequência rápida de disparos!`
        );
    }
}
