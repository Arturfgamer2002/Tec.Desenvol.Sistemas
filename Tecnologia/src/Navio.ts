export class Navio {
    protected nome: string;
    protected capacidadeTripulacao: number;
    protected velocidade: number;
    protected canhoes: number;

    private _vida: number;
    private readonly vidaMaxima: number;

    constructor(
        nome: string,
        capacidadeTripulacao: number,
        vidaMaxima: number,
        velocidade: number,
        canhoes: number
    ) {
        if (capacidadeTripulacao <= 0 || canhoes < 0 || vidaMaxima <= 0 || velocidade <= 0) {
            throw new Error("Os atributos do navio possuem valores inválidos!");
        }

        this.nome = nome;
        this.capacidadeTripulacao = capacidadeTripulacao;
        this.vidaMaxima = vidaMaxima;
        this._vida = vidaMaxima;
        this.velocidade = velocidade;
        this.canhoes = canhoes;
    }

    public get vida(): number {
        return this._vida;
    }

    public set vida(valor: number) {
        if (valor < 0 || valor > this.vidaMaxima) {
            throw new Error("A vida deve estar entre 0 e a vida máxima!");
        }

        this._vida = valor;
    }

    public getVidaMaxima(): number {
        return this.vidaMaxima;
    }

    public navegar(): void {
        console.log(`${this.nome} está navegando pelos mares!`);
    }

    public atacar(): void {
        console.log(
            `${this.nome} está atacando com seus ${this.canhoes} canhões!`
        );
    }

    public receberDano(dano: number): void {
        if (dano < 0) {
            throw new Error("O dano não pode ser negativo!");
        }

        this.vida = Math.max(0, this._vida - dano);

        console.log(
            `${this.nome} recebeu ${dano} de dano. Vida atual: ${this._vida}`
        );
    }

    public exibirInformacoes(): void {
        console.log("------------------------------");
        console.log(`Navio: ${this.nome}`);
        console.log(`Capacidade da tripulação: ${this.capacidadeTripulacao}`);
        console.log(`Vida: ${this._vida}/${this.vidaMaxima}`);
        console.log(`Velocidade: ${this.velocidade}`);
        console.log(`Canhões: ${this.canhoes}`);
        console.log("------------------------------");
    }
}
