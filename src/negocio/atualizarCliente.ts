import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Atualizar from "./atualizar";
import ExcluirCliente from "./excluirCliente";

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
            for (let index = 0; index < this.clientes.length; index++) {
                if (this.clientes[index].getCpf.getValor == cpf) {
                    let operacao = true
                    let alvo = this.clientes[index]
                    while(operacao){
                        console.log(`--------------------------------------`);
                        console.log(`Escolha a opção que quer atualizar:`);
                        console.log(`1 - Nome`);
                        console.log(`2 - Nome social`);
                        console.log(`3 - Gênero`);
                        console.log(`4 - Novo RG`);
                        console.log(`5 - Novo Telefone`);
                        console.log(`0 - Sair`);

                        let opcao = this.entrada.receberNumero('Insira qual informação será alterada: ')

                        switch(opcao) {
                            case 1:
                                let nome = this.entrada.receberTexto('Insira o novo nome: ')
                                this.clientes[index].nome = nome
                                break;
                            case 2:
                                let nomeSocial = this.entrada.receberTexto('Insira o novo nome social: ');
                                this.clientes[index].nomeSocial = nomeSocial;
                                break;
                            case 3:
                                let genero = this.entrada.receberTexto('Insira o novo gênero')
                                this.clientes[index].atualizarGenero = genero;
                                break;                       
                            case 4:
                                let rgNum = this.entrada.receberTexto('Insira o novo rg')
                                let dataRG = this.entrada.receberTexto(`Por favor, informe a data de emissão do RG, no padrão dd/mm/yyyy: `)

                                let partesDataRG = dataRG.split('/')
                                let anoRG = new Number(partesDataRG[2].valueOf()).valueOf()
                                let mesRG = new Number(partesDataRG[1].valueOf()).valueOf()
                                let diaRG = new Number(partesDataRG[0].valueOf()).valueOf()
                                let dataEmissaoRG = new Date(anoRG, mesRG, diaRG)  
                                let rg = new RG(rgNum,dataEmissaoRG)
                                this.clientes[index].getRgs.push(rg)
                            case 5:
                                let ddd = this.entrada.receberTexto(`Por favor, informe o DDD: `) 
                                let numero = this.entrada.receberTexto(`Por favor, informe número telefônico: `)
                                let tel = new Telefone (ddd, numero)
                                this.clientes[0].getTelefones.push(tel)
                                let escolha = this.entrada.receberTexto(`'Deletar os números antigos S = sim N = não': `)
                                if (escolha.toUpperCase() == 'S') {
                                    this.clientes[0].getTelefones
                                }    
                                                              
                            case 0:
                                operacao = false
                                break;
                        }
                    }    
                }
            }
        }
        atualizarCliente(cpf)
        console.log(`--------------------------------------`);
    }
}