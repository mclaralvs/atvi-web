import Cliente from "../../modelo/cliente"
import Listagem from "../listagem";

export default class ListagemClientesConsumiram extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nTop 10 clientes que mais consumiram (Quantidade)`);

        this.clientes.sort((a, b) => (b.getProdutosConsumidos.length + b.getServicosConsumidos.length - a.getProdutosConsumidos.length + a.getServicosConsumidos.length) ? -1 : 1)

        let ordem = 1;

        if (this.clientes.length > 9) {
            for (let i = 0; i < 9; i++) {
                this.clientes.forEach(ord => {
                    console.log(`${ordem} - ${ord.nome}`);
                    ordem++;
                });
            }
        }
        else {
            this.clientes.forEach(ord => {
                console.log(`${ordem} - ${ord.nome}`);
                ordem++;
            });
        }
    }
}