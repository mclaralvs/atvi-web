import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import Excluir from "./excluir";

export default class ExcluirProduto extends Excluir {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public excluir(): void {
        var nomeProduto = this.entrada.receberTexto('Insira o nome do produto o qual quer excluir: ')

        var excluirProduto = (nomeProduto) => {
            for (let index = 0; index < this.produtos.length; index++) {
                if (this.produtos[index].getNomeProduto == nomeProduto) {
                    this.produtos.splice(index, 1)
                }                
            }
        }
        excluirProduto(nomeProduto)
        console.log(`--------------------------------------`);
    } 
} 