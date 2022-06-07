import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);

        // NOME
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor, informe o nome social do cliente: `)

        // CPF
        let valor = this.entrada.receberTexto(`Por favor, informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor, informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);

        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)

        let cpf = new CPF(valor, dataEmissao);

        // GENERO 
        let genero = this.entrada.receberTexto(`Por favor, informe seu gênero: `)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero);

        // RGS
        let qtdRG = this.entrada.receberNumero(`Por favor, a quantidade de RG: `) 

        for (var x = 1; x <= qtdRG; x++ ) {
            let valorRG = this.entrada.receberTexto(`Por favor, informe o RG: `) 
            let dataRG = this.entrada.receberTexto(`Por favor, informe a data de emissão do RG, no padrão dd/mm/yyyy: `)

            let partesDataRG = dataRG.split('/')
            let anoRG = new Number(partesDataRG[2].valueOf()).valueOf()
            let mesRG = new Number(partesDataRG[1].valueOf()).valueOf()
            let diaRG = new Number(partesDataRG[0].valueOf()).valueOf()
            let dataEmissaoRG = new Date(anoRG, mesRG, diaRG)

            let rg = new RG (valorRG, dataEmissaoRG)
            cliente.getRgs.push(rg)
        }

        // TELEFONE
        let qtdTel = this.entrada.receberNumero(`Por favor, a quantidade de números telefônicos: `) 

        for (var x = 1; x <= qtdTel; x++ ) {
            let ddd = this.entrada.receberTexto(`Por favor, informe o DDD: `) 
            let numero = this.entrada.receberTexto(`Por favor, informe número telefônico: `)

            let tel = new Telefone (ddd, numero)
            cliente.getTelefones.push(tel)
        }

        // CADASTRO PRODUTOS

        this.clientes.push(cliente)
        
        console.log(`\nCadastro concluído :)\n`);
    }
}