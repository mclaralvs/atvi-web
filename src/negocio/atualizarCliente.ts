import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Atualizar from "./atualizar";

export default class AtualizarCliente extends Atualizar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        let cpf = this.entrada.receberTexto('Insira o CPF de quem quer atualizar: ')
        var atualizarCliente = (cpf) => {
            for (let indexCliente = 0; indexCliente < this.clientes.length; indexCliente++) {
                if (this.clientes[indexCliente].getCpf.getValor == cpf) {
                    let operacao = true
                    const alvo = this.clientes[indexCliente]
                    console.log(alvo.getTelefones);
                    while (operacao) {
                        console.log(`--------------------------------------`);
                        console.log(`Escolha a opção que quer atualizar:`);
                        console.log(`1 - Nome`);
                        console.log(`2 - Nome social`);
                        console.log(`3 - Gênero`);
                        console.log(`4 - Novo RG`);
                        console.log(`5 - Telefone`);
                        console.log(`0 - Voltar`);

                        let opcao = this.entrada.receberNumero('Insira qual informação será alterada: ')

                        switch (opcao) {
                            case 1:
                                let nome = this.entrada.receberTexto('Insira o novo nome: ')
                                alvo.nome = nome
                                break;
                            case 2:
                                let nomeSocial = this.entrada.receberTexto('Insira o novo nome social: ');
                                alvo.nomeSocial = nomeSocial;
                                break;
                            case 3:
                                let genero = this.entrada.receberTexto('Insira o novo gênero: ')
                                alvo.atualizarGenero = genero;
                                break;
                            case 4:
                                let rgNum = this.entrada.receberTexto('Insira o novo rg')
                                let dataRG = this.entrada.receberTexto(`Por favor, informe a data de emissão do RG, no padrão dd/mm/yyyy: `)

                                let partesDataRG = dataRG.split('/')
                                let anoRG = new Number(partesDataRG[2].valueOf()).valueOf()
                                let mesRG = new Number(partesDataRG[1].valueOf()).valueOf()
                                let diaRG = new Number(partesDataRG[0].valueOf()).valueOf()
                                let dataEmissaoRG = new Date(anoRG, mesRG, diaRG)
                                let rg = new RG(rgNum, dataEmissaoRG)
                                alvo.getRgs.push(rg)
                            case 5:
                                let menuTel = true
                                while (menuTel) {
                                    console.log("1 - Deletar outro número");
                                    console.log("2 - Inserir mais um número");
                                    console.log("0 - Voltar");

                                    let opcaoMenuTel = this.entrada.receberNumero("Insira uma das opções acima: ")
                                    switch (opcaoMenuTel) {
                                        case 1:
                                            for (let index = 0; index < alvo.getTelefones.length; index++) {
                                                console.log("Opção " + index + ": ");
                                                console.log(alvo.getTelefones[index])
                                            }
                                            console.log("----------------------------------------------------------------------------")
                                            let opcaoTel = this.entrada.receberNumero("Digite a opção desejada: ")
                                            alvo.getTelefones.splice(opcaoTel, 1)
                                            break;
                                        case 2:
                                            let ddd = this.entrada.receberTexto(`Por favor, informe o DDD: `)
                                            let numero = this.entrada.receberTexto(`Por favor, informe número telefônico: `)
                                            let tel = new Telefone(ddd, numero)
                                            alvo.getTelefones.push(tel)
                                            break;
                                        case 0:
                                            menuTel = false
                                            break;
                                        default:
                                            console.log(`Operação não entendida :`)
                                    }
                                }
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
        atualizarCliente(cpf)
        console.log(`--------------------------------------`);
    }
}