import Produto from "../../modelo/produto";
import Cliente from "../../modelo/cliente";
import Entrada from "../../io/entrada";
import Comprar from "../comprar";

export default class ComprarProduto extends Comprar {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public comprar(): void {
        let cpf = this.entrada.receberTexto('Insira o CPF de quem realizará a compra: ')
        for (let index = 0; index < this.clientes.length; index++) {
            if (this.clientes[index].getCpf.getValor == cpf) {
                var operacao = true
                while(operacao){     
                    console.log(`--------------------------------------`);
                    console.log(`Opções: `);
                    console.log(`1 - Novo pedido de Produto`);
                    console.log(`0 - Sair`);     
                    let opcao = this.entrada.receberNumero('Escolha o que deseja fazer: ')
                    switch (opcao) {
                        case 1 :   
                            for (let indexProduto = 0; indexProduto < this.produtos.length; indexProduto++) {
                                console.log(indexProduto +" - " + this.produtos[indexProduto].getNomeProduto);                 
                            }
                            let produto = this.entrada.receberNumero('Insira o número do produto desejado: ')
                            this.clientes[index].getProdutosConsumidos.push(this.produtos[produto])
                            break;
                        case 0:
                            operacao = false
                            break;    
                    }
                }
            }
        }
    }
}