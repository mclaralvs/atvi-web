import Cliente from "../../modelo/cliente"
import Listagem from "../listagem"

export default class ListagemClienteGenero extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log('Listagem de Clientes por Gênero');
        
        const clientesFeminino: string[] = []
        const clientesMasculino: string[] = []

        this.clientes.forEach(cliente => {
            if (cliente.genero.toUpperCase() == 'F' || cliente.genero.toUpperCase() == 'FEMININO') {
                clientesFeminino.push(cliente.nome)
            }
            else if (cliente.genero.toUpperCase() == 'M' || cliente.genero.toUpperCase() == 'MASCULINO') {
                clientesMasculino.push(cliente.nome)
            }
        });

        console.log('Feminino: ');
        for (let index = 0; index < clientesFeminino.length; index++) {
            console.log(`${index} - ${clientesFeminino[index]}`);
        }      
        
        console.log(`--------------------------------------`);

        console.log('Masculino: ');
        for (let indexM = 0; indexM < clientesMasculino.length; indexM++) {
            console.log(`${indexM} - ${clientesMasculino[indexM]}`);
        }  
    }
}