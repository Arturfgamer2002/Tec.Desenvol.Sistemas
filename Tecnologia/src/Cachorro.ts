
export class Cachorro {
    private nome: string;
    private idade: number;
    private raca: string;

    constructor(nome: string, idade: number, raca: string) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    // Getters
    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public getRaca(): string {
        return this.raca;
    }

    // Setters
    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

    public setRaca(raca: string): void {
        this.raca = raca;
    }
}
