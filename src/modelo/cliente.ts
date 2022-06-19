import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    public genero: string    
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    public precoPedido: number = Number[0]
    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.genero = genero
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    public get getCpf(): CPF {
        return this.cpf
    }
  
    public get getRgs(): Array<RG> {
        return this.rgs
    }

    public get getGenero(): String {
        return this.genero
    }

    public set atualizarGenero(genero) {
        this.genero = genero
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro
    }

    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }

    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }

    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
}