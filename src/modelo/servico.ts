export default class Servico {
    public nomeServico: string
    public precoServico: number
    constructor(nomeServico: string, precoServico: number) {
        this.nomeServico = nomeServico
        this.precoServico = precoServico
    }
    public get getNomeServico(): string {
        return this.nomeServico
    }
    public get getPrecoServico(): number {
        return this.precoServico
    }
}