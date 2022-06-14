import Entrada from "../io/entrada"
import produto from "../modelo/produto"
import Atualizar from "./atualizar"

export default class AtualizarProduto extends Atualizar {
    private produtos: Array<produto>
    private entrada: Entrada
    constructor(produtos: Array<produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        let nome = this.entrada.receberTexto('Insira o nome do produto de quem quer atualizar: ')
        var atualizarProduto = (nome) => {
            for (let indexProduto = 0; indexProduto < this.produtos.length; indexProduto++) {
                if (this.produtos[indexProduto].getNomeProduto == nome) {
                    let operacao = true;
                    const alvo = this.produtos[indexProduto]
                    
                    while (operacao) {
                        console.log(`--------------------------------------`);
                        console.log(`Escolha a opção que quer atualizar:`);
                        console.log(`1 - Nome`);
                        console.log(`2 - Preço`);
                        let opcao = this.entrada.receberNumero('Insira qual informação será alterada: ')
                        switch (opcao) {
                            case 1:
                                let nome = this.entrada.receberTexto('Insira o novo nome do produto: ')
                                alvo.nomeProduto = nome
                                break;
                            case 2:
                                let precoProduto = this.entrada.receberNumero('Insira o novo preço do produto: ');
                                alvo.precoProduto = precoProduto;
                                break;
                            case 0:
                                operacao = false
                                break;
                            default:
                                console.log(`Operação não entendida :(`)
                        }
                    }
                }
            }
        }
    }
}