import Produto from "../modelo/produto";
import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Comprar from "./comprar";

export default class ComprarProdutar extends Comprar {
    private clientes: Array<Cliente>
    private produtosConsumidos: Array<Produto>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtosConsumidos: Array<Produto>) {
        super()
        this.clientes = clientes
        this.produtosConsumidos = produtosConsumidos
        this.entrada = new Entrada()
    }
    public comprar(): void {
        let cpf = this.entrada.receberTexto('Insira o CPF de quem realizará a compra: ')

        for (let index = 0; index < this.clientes.length; index++) {
            if (this.clientes[index].getCpf.getValor == cpf) {
                console.log(Produto);
                   
            }
        }
    }
}