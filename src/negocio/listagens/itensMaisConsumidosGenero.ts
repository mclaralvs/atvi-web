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

        const topProdutosFeminino: Array<Produto> = []
        const topServicosFeminino: Array<Servico> = []

        const topProdutosMasculino: Array<Produto> = []
        const topServicosMasculino: Array<Servico> = []
  
        // PRODUTOS FEMININO
        this.produtos.forEach(produto => {
            topProdutosFeminino.push(produto)
        })

        topProdutosFeminino.forEach(prod => {
            let qtdProduto = 0
            
            this.clientes.forEach(cliente => {
                cliente.getProdutosConsumidos.forEach(prodConsumido => {
                    for (let indexProduto = 0; indexProduto < topProdutosFeminino.length; indexProduto++) {
                        if (prodConsumido.nomeProduto == prod.nomeProduto) {
                            if (cliente.genero.toUpperCase() == 'f' || cliente.genero.toUpperCase() == 'feminino') {
                                qtdProduto += 1
                            }
                        }     
                    }       
                })
            });

            prod.qtdProduto = qtdProduto;
        })
        
        topProdutosFeminino.sort((prod1, prod2) => (prod1.qtdProduto > prod2.qtdProduto) ? -1 : 1)
            console.log(`PRODUTOS:`);

            let ordemProdFeminino = 1;

            topProdutosFeminino.forEach(prod => {
                console.log(`${ordemProdFeminino} - ${prod.nomeProduto}`);
                ordemProdFeminino++;
        });

        // SERVIÇOS FEMININO
        this.servicos.forEach(servico => {
            topServicosFeminino.push(servico)
        })

        topServicosFeminino.forEach(serv => {
            let qtdServico = 0
            
            this.clientes.forEach(cliente => {
                cliente.getServicosConsumidos.forEach(servConsumido => {
                    for (let indexServico = 0; indexServico < topServicosFeminino.length; indexServico++) {
                        if (servConsumido.nomeServico == serv.nomeServico) {
                            if (cliente.genero.toUpperCase() == 'f' || cliente.genero.toUpperCase() == 'feminino') {
                                qtdServico += 1
                            }
                        }     
                    }       
                })
            });
            
            serv.qtdServico = qtdServico;
        })

        topServicosFeminino.sort((serv1, serv2) => (serv1.qtdServico > serv2.qtdServico) ? -1 : 1)
            console.log(`SERVIÇOS:`);

            let ordemServFeminino = 1;

            topServicosFeminino.forEach(serv => {
                console.log(`${ordemServFeminino} - ${serv.nomeServico}`);
                ordemServFeminino++;
        });


        // PRODUTOS MASCULINO
        this.produtos.forEach(produto => {
            topProdutosMasculino.push(produto)
        })

        topProdutosMasculino.forEach(prod => {
            let qtdProduto = 0
            prod.qtdProduto = qtdProduto;
            
            this.clientes.forEach(cliente => {
                cliente.getProdutosConsumidos.forEach(prodConsumido => {
                    for (let indexProduto = 0; indexProduto < topProdutosFeminino.length; indexProduto++) {
                        if (prodConsumido.nomeProduto == prod.nomeProduto) {
                            if (cliente.genero.toUpperCase() == 'm' || cliente.genero.toUpperCase() == 'masculino') {
                                qtdProduto += 1
                            }
                        }     
                    }       
                })
            });

            prod.qtdProduto = qtdProduto;
        })
        
        topProdutosMasculino.sort((prod1, prod2) => (prod1.qtdProduto > prod2.qtdProduto) ? -1 : 1)
            console.log(`PRODUTOS:`);

            let ordemProdMasculino = 1;

            topProdutosMasculino.forEach(prod => {
                console.log(`${ordemProdMasculino} - ${prod.nomeProduto}`);
                ordemProdMasculino++;
        });

        // SERVIÇOS FEMININO
        this.servicos.forEach(servico => {
            topServicosMasculino.push(servico)
        })

        topServicosMasculino.forEach(serv => {
            let qtdServico = 0
            serv.qtdServico = qtdServico;
            
            this.clientes.forEach(cliente => {
                cliente.getServicosConsumidos.forEach(servConsumido => {
                    for (let indexServico = 0; indexServico < topServicosMasculino.length; indexServico++) {
                        if (servConsumido.nomeServico == serv.nomeServico) {
                            if (cliente.genero.toUpperCase() == 'm' || cliente.genero.toUpperCase() == 'masculino') {
                                qtdServico += 1
                            }
                        }     
                    }       
                })
            });
            
            serv.qtdServico = qtdServico;
        })

        topServicosMasculino.sort((serv1, serv2) => (serv1.qtdServico > serv2.qtdServico) ? -1 : 1)
            console.log(`SERVIÇOS:`);

            let ordemServMasculino = 1;

            topServicosMasculino.forEach(serv => {
                console.log(`${ordemServMasculino} - ${serv.nomeServico}`);
                ordemServMasculino++;
        });
    }
}