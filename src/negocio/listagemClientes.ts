import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            
            console.log(`\nCPF: ` + cliente.getCpf.getValor);
            console.log(`Data de Emissão do CPF: ` + cliente.getCpf.getValor);

            console.log(`\nData de Cadastro: ${cliente.getDataCadastro}`);
            
            console.log(`\nGênero: ${cliente.getGenero}`);
            
            for (var index = 0; index < cliente.getRgs.length; index++) {
                console.log(`\nRG: ` + cliente.getRgs[0].getValor);
                console.log(`Data de Emissão do RG: ` + cliente.getRgs[0].getDataEmissao);
            }

            for (var indexTel = 0; indexTel < cliente.getTelefones.length; indexTel ++) {
                console.log(`\nDDD: ` + cliente.getTelefones[0].getDdd);
                console.log(`Número: ` + cliente.getTelefones[0].getNumero);
            }

            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}