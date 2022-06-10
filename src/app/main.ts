import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";
import ExcluirCliente from "../negocio/excluirCliente"
import ExcluirProduto from "../negocio/excluirProduto";
import ExcluirServico from "../negocio/excluirServicos";
import ComprarProduto from "../negocio/comprarProduto"
import AtualizarCliente from "../negocio/atualizarCliente";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`--------------------------------------`);
    
    console.log(`CLIENTE`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar um cliente`);
    console.log(`4 - Excluir um cliente\n`);

    console.log(`PRODUTO`);
    console.log(`5 - Cadastrar produto`);
    console.log(`6 - Listar todos os produtos`);
    console.log(`7 - Atualizar um cliente`);
    console.log(`8 - Excluir um produto\n`);

    console.log(`SERVIÇOS`);
    console.log(`9 - Cadastrar serviço`);
    console.log(`10 - Listar todos os serviços`);
    console.log(`11 - Atualizar um cliente`);
    console.log(`12 - Excluir um serviço\n`);

    console.log(`PEDIDOS`);
    console.log(`13. Registrar pedido de produtos`);
    console.log(`14. Listar pedidos de produtos`);
    console.log(`15. Registrar pedido de serviços`);
    console.log(`16. Listar pedidos de serviços`);

    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    console.log(`--------------------------------------`);

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualizar = new AtualizarCliente(empresa.getClientes)
            atualizar.atualizar()
            break;
        case 4:
            let excluir = new ExcluirCliente(empresa.getClientes)
            excluir.excluir()
            break;
        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 6:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        /*case 7:
            ATUALIZAR PRODUTO*/
        case 8: 
            let excluirProduto = new ExcluirProduto(empresa.getProdutos)
            excluirProduto.excluir()
            break;
        case 9:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 10:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break;
        /*case 11:
            ATUALIZAR SERVIÇO*/
        case 12:
            let excluirServico = new ExcluirServico(empresa.getServicos)
            excluirServico.excluir()
            break;
        case 13:
            //let comprarProduto = new ComprarProduto()
            //comprarProduto.comprar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}