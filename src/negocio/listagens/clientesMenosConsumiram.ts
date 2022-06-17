import Cliente from "../../modelo/cliente"
import Listagem from "../listagem";

export default class ListagemClientesMenosConsumiram extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super ()
        this.clientes = clientes
    }
    public listar(): void {
       console.log(`\nTop 10 clientes que menos consumiram (Quantidade)`);
       console.log( this.clientes.sort((a,b)=>( a.getProdutosConsumidos.length + a.getServicosConsumidos.length - b.getProdutosConsumidos.length + b.getServicosConsumidos.length)))
    }
}