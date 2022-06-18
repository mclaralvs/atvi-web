import Servico from "../../modelo/servico";
import Entrada from "../../io/entrada";
import Excluir from "../excluir";

export default class ExcluirServico extends Excluir {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public excluir(): void {
        var nomeServico = this.entrada.receberTexto('\nInsira o nome do serviço o qual quer excluir: ')

        var excluirServico = (nomeServico) => {
            for (let index = 0; index < this.servicos.length; index++) {
                if (this.servicos[index].getNomeServico == nomeServico) {
                    this.servicos.splice(index, 1)
                }                
            }
        }
        excluirServico(nomeServico)
        console.log(`--------------------------------------`);
    }
}