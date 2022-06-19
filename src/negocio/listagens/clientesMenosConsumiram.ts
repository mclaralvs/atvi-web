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

       this.clientes.sort((a,b)=>( a.getProdutosConsumidos.length + a.getServicosConsumidos.length - b.getProdutosConsumidos.length + b.getServicosConsumidos.length))
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