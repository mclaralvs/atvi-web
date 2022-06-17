export default class Produto {
    public nomeProduto: string
    public precoProduto: number
    constructor(nomeProduto: string, precoProduto: number) {
        this.nomeProduto = nomeProduto
        this.precoProduto = precoProduto
    }

    public get getNomeProduto(): string {
        return this.nomeProduto
    }

    public get getPrecoProduto(): number {
        return this.precoProduto
    }

}