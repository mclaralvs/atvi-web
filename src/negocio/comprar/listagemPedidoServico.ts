import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemPedidoServico extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os pedidos de serviços por cliente:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome do Cliente: ${cliente.nome}`);

            for (let index = 0; index < cliente.getServicosConsumidos.length; index++) {
                console.log(`${index} - Serviço consumido: ${cliente.getServicosConsumidos[index].getNomeServico}`);
            }            
        })
    }
}