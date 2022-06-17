import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class MaisConsumidos extends Listagem {
    private clientes: Array<Cliente> 
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    
    public listar(): void {
        console.log('Listagem de Produtos/Serviços mais consumidos:');

        const produtos: string[] = []
        const servicos: string[] = []

        this.clientes.forEach(cliente => {
            /*for (let index = 0; index < cliente.getProdutosConsumidos.length; index++) {
                produtos.push(cliente.getProdutosConsumidos)                
            }*/
        });
    }
}