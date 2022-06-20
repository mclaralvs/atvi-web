import Servico from "../../modelo/servico";
import Cliente from "../../modelo/cliente";
import Entrada from "../../io/entrada";
import Comprar from "../comprar";

export default class ComprarServico extends Comprar {
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public comprar(): void {
        let cpf = this.entrada.receberTexto('Insira o CPF de quem realizará a compra: ')
        for (let index = 0; index < this.clientes.length; index++) {
            if (this.clientes[index].getCpf.getValor == cpf) {
                var operacao = true
                while(operacao){     
                    console.log(`--------------------------------------`);
                    console.log(`Opções: `);
                    console.log(`1 - Novo pedido de Produto`);
                    console.log(`0 - Sair`);     
                    let opcao = this.entrada.receberNumero('Escolha o que deseja fazer: ')
                    switch (opcao) {
                        case 1 :   
                            for (let indexServicos = 0; indexServicos < this.servicos.length; indexServicos++) {
                                console.log(indexServicos +" - " + this.servicos[indexServicos].getNomeServico);                 
                            }
                            
                            let servico = this.entrada.receberNumero('Insira o número do serviço desejado: ')
                            this.clientes[index].getServicosConsumidos.push(this.servicos[servico])
                            break;
                        case 0:
                            operacao = false
                            break;    
                    }
                }
            }
        }
    }
}