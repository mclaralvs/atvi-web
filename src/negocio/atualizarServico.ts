import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Atualizar from "./atualizar";

export default class AtualizarServico extends Atualizar {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        let nome = this.entrada.receberTexto('Insira o nome do serviço o qual quer atualizar: ')
        var atualizarServico = (nome) => {
            for (let indexServico = 0; indexServico < this.servicos.length; indexServico++) {
                if (this.servicos[indexServico].getNomeServico == nome) {
                    let operacao = true;
                    const alvo = this.servicos[indexServico]

                    while (operacao) {
                        console.log(`--------------------------------------`);
                        console.log(`Escolha a opção que quer atualizar:`);
                        console.log(`1 - Nome`);
                        console.log(`2 - Preço`);
                        console.log(`0 - Voltar`);
                        
                        let opcao = this.entrada.receberNumero('Insira qual informação será alterada: ')
                        switch (opcao) {
                            case 1:
                                let nome = this.entrada.receberTexto('Insira o novo nome do servico: ')
                                alvo.nomeServico = nome
                                break;
                            case 2:
                                let precoServico = this.entrada.receberNumero('Insira o novo preço do serviço: ');
                                alvo.precoServico = precoServico;
                                break;
                            case 0:
                                operacao = false
                                break;
                            default:
                                console.log(`Operação não entendida :(`)
                        }
                    }
                }
            }
        }
        atualizarServico(nome)
        console.log(`--------------------------------------`);
    }
}