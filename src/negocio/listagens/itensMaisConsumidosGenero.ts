import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemMaisConsumidosGenero extends Listagem {
    private clientes: Array<Cliente> 
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
    }
    
    public listar(): void {
        console.log('Listagem de Produtos/Serviços mais consumidos:');

        const topProdutosFeminino: {nome: string, valor: number , quantidade: number }[] = []
        const topServicosFeminino: {nome: string, valor: number , quantidade: number }[] = []

        const topProdutosMasculino: {nome: string, valor: number , quantidade: number }[] = []
        const topServicosMasculino: {nome: string, valor: number , quantidade: number }[] = []
  
        // PRODUTOS FEMININO
        this.produtos.forEach(produto => {
            topProdutosFeminino.push({nome: produto.getNomeProduto, valor: produto.getPrecoProduto, quantidade: 0})
        })

        topProdutosFeminino.forEach(prod => {   
            this.clientes.forEach(cliente => {
                cliente.getProdutosConsumidos.forEach(prodConsumido => {       
                        if (prodConsumido.nomeProduto == prod.nome) {
                            if (cliente.genero.toUpperCase() == 'F' || cliente.genero.toUpperCase() == 'FEMININO') {
                                prod.quantidade = prod.quantidade + 1
                            }                 
                    }      
                })
            });

        })
        
        topProdutosFeminino.sort((prod1, prod2) => (prod1.quantidade > prod2.quantidade) ? -1 : 1)
            console.log(`PRODUTOS:`);

            
            let ordemProdFeminino = 1;

            topProdutosFeminino.forEach(prod => {
                console.log(`${ordemProdFeminino} - ${prod.nome}`);
                ordemProdFeminino++;
        });

        // SERVIÇOS FEMININO
        this.servicos.forEach(servico => {
            topServicosFeminino.push({nome:servico.getNomeServico,valor:servico.getPrecoServico,quantidade:0})
        })

        topServicosFeminino.forEach(serv => {      
            this.clientes.forEach(cliente => {
                cliente.getServicosConsumidos.forEach(servConsumido => { 
                        if (servConsumido.nomeServico == serv.nome) {
                            if (cliente.genero.toUpperCase() == 'F' || cliente.genero.toUpperCase() == 'FEMININO') {
                                serv.quantidade = serv.quantidade + 1
                            }
                        }                
                })
            });

        })

        topServicosFeminino.sort((serv1, serv2) => (serv1.quantidade > serv2.quantidade) ? -1 : 1)
            console.log(`SERVIÇOS:`);

            let ordemServFeminino = 1;

            topServicosFeminino.forEach(serv => {
                console.log(`${ordemServFeminino} - ${serv.nome}`);
                ordemServFeminino++;
        });


        // PRODUTOS MASCULINO
        this.produtos.forEach(produto => {
            topProdutosMasculino.push({nome: produto.getNomeProduto, valor: produto.getPrecoProduto, quantidade: 0})
        })

        topProdutosMasculino.forEach(prod => {           
            this.clientes.forEach(cliente => {
                cliente.getProdutosConsumidos.forEach(prodConsumido => {
                        if (prodConsumido.nomeProduto == prod.nome) {
                            if (cliente.genero.toUpperCase() == 'M' || cliente.genero.toUpperCase() == 'MASCULINO') {
                                prod.quantidade = prod.quantidade + 1
                            }
                        }                         
                })
            });
        })
        
        topProdutosMasculino.sort((prod1, prod2) => (prod1.quantidade > prod2.quantidade) ? -1 : 1)
            console.log(`PRODUTOS:`);

            let ordemProdMasculino = 1;

            topProdutosMasculino.forEach(prod => {
                console.log(`${ordemProdMasculino} - ${prod.nome}`);
                ordemProdMasculino++;
        });

        // SERVIÇOS FEMININO
        this.servicos.forEach(servico => {
            topServicosMasculino.push({nome:servico.getNomeServico,valor:servico.getPrecoServico,quantidade:0})
        })

        topServicosMasculino.forEach(serv => {
            
            this.clientes.forEach(cliente => {
                cliente.getServicosConsumidos.forEach(servConsumido => {
                    for (let indexServico = 0; indexServico < topServicosMasculino.length; indexServico++) {
                        if (servConsumido.nomeServico == serv.nome) {
                            if (cliente.genero.toUpperCase() == 'm' || cliente.genero.toUpperCase() == 'masculino') {
                                serv.quantidade = serv.quantidade + 1
                            }
                        }     
                    }       
                })
            });
        })

        topServicosMasculino.sort((serv1, serv2) => (serv1.quantidade > serv2.quantidade) ? -1 : 1)
            console.log(`SERVIÇOS:`);

            let ordemServMasculino = 1;

            topServicosMasculino.forEach(serv => {
                console.log(`${ordemServMasculino} - ${serv.nome}`);
                ordemServMasculino++;
        });
    }
}