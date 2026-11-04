import { Navio } from "./Navio";

export class Galeao extends Navio {

    constructor(nome: string) {
        super(
            nome,
            50,  // Capacidade da tripulação
            200, // Vida máxima
            30,  // Velocidade
            20   // Canhões
        );
    }

    public override navegar(): void {
        console.log(
            `${this.nome} avança lentamente pelo mar devido ao seu enorme tamanho!`
        );
    }

    public override atacar(): void {
        console.log(
            `${this.nome} dispara uma poderosa salva de canhões!`
        );
    }

    public repararNavio(): void {
        const recuperacao = 30;

        this.vida = Math.min(
            this.getVidaMaxima(),
            this.vida + recuperacao
        );

        console.log(
            `${this.nome} foi reparado! Vida atual: ${this.vida}/${this.getVidaMaxima()}`
        );
    }
}
