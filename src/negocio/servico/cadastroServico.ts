import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de serviço`);
        
        // NOME SERVIÇO
        let nomeServico = this.entrada.receberTexto(`Por favor, informe o nome do serviço: `)

        // PREÇO SERVIÇO
        let precoServico = this.entrada.receberNumero(`Por favor, informe o preço do Serviço: `)

        let servico = new Servico (nomeServico, precoServico)

        this.servicos.push(servico)
    }
}