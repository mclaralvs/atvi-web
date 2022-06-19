import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import CadastroServico from "../negocio/servico/cadastroServico";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import ListagemProdutos from "../negocio/produto/listagemProdutos";
import ListagemServicos from "../negocio/servico/listagemServicos";
import ExcluirCliente from "../negocio/cliente/excluirCliente"
import ExcluirProduto from "../negocio/produto/excluirProduto";
import ExcluirServico from "../negocio/servico/excluirServicos";
import ComprarProduto from "../negocio/comprar/comprarProduto";
import ComprarServico from "../negocio/comprar/comprarServicos";
import AtualizarCliente from "../negocio/cliente/atualizarCliente";
import AtualizarProduto from "../negocio/produto/atualizarProduto";
import AtualizarServico from "../negocio/servico/atualizarServico";
import ListagemPedidoProduto from "../negocio/comprar/listagemPedidoProduto";
import ListagemPedidoServico from "../negocio/comprar/listagemPedidoServico";
import ListagemClientesConsumiram from "../negocio/listagens/clientesMaisConsumiram";
import ListagemClienteGenero from "../negocio/listagens/clientesGenero";
import ListagemClientesMenosConsumiram from "../negocio/listagens/clientesMenosConsumiram";
import ListagemMaisConsumidos from "../negocio/listagens/itensMaisConsumidos";
import ListagemMaisConsumidosGenero from "../negocio/listagens/itensMaisConsumidosGenero";
import ListagemClientesMaisConsumiramValor from "../negocio/listagens/clientesMaisConsumiramValor";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`--------------------------------------`);

    console.log(`CLIENTE`);
    console.log(`1. Cadastrar cliente`);
    console.log(`2. Listar todos os clientes`);
    console.log(`3. Atualizar um cliente`);
    console.log(`4. Excluir um cliente\n`);

    console.log(`PRODUTO`);
    console.log(`5. Cadastrar produto`);
    console.log(`6. Listar todos os produtos`);
    console.log(`7. Atualizar um produto`);
    console.log(`8. Excluir um produto\n`);

    console.log(`SERVIÇOS`);
    console.log(`9. Cadastrar serviço`);
    console.log(`10. Listar todos os serviços`);
    console.log(`11. Atualizar um serviço`);
    console.log(`12. Excluir um serviço\n`);

    console.log(`PEDIDOS`);
    console.log(`13. Registrar pedido de produtos`);
    console.log(`14. Listar pedidos de produtos`);
    console.log(`15. Registrar pedido de serviços`);
    console.log(`16. Listar pedidos de serviços\n`);

    console.log(`LISTAGENS`);
    console.log(`17. Top 10 clientes que mais consumiram (Quantidade)`);
    console.log(`18. Top 10 clientes que menos consumiram (Quantidade)`);
    console.log(`19. Lista de clientes por gênero`);
    console.log(`20. Lista geral de itens mais consumidos`);
    console.log(`21. Lista itens mais consumidos por gênero`);
    console.log(`22. Top 5 clientes que mais consumiram (Valor)`);

    console.log(`0. Sair`);

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
        case 7:
            let atualizarProduto = new AtualizarProduto(empresa.getProdutos)
            atualizarProduto.atualizar()
            break;
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
        case 11:
            let atualizarServico = new AtualizarServico(empresa.getServicos)
            atualizarServico.atualizar()
            break;
        case 12:
            let excluirServico = new ExcluirServico(empresa.getServicos)
            excluirServico.excluir()
            break;
        case 13:
            let comprarProduto = new ComprarProduto(empresa.getClientes,empresa.getProdutos)
            comprarProduto.comprar()
            break;
        case 14:
            let listarPedidoProduto = new ListagemPedidoProduto(empresa.getClientes)
            listarPedidoProduto.listar()
            break;
        case 15:
            let comprarServico = new ComprarServico(empresa.getClientes,empresa.getServicos)
            comprarServico.comprar()
            break;
        case 16:
            let listarPedidoServico = new ListagemPedidoServico(empresa.getClientes)
            listarPedidoServico.listar()
            break;
        case 17:
            let listarClientesConsumiram = new ListagemClientesConsumiram(empresa.getClientes)
            listarClientesConsumiram.listar()
            break;
        case 18:
            let listarClientesMenosConsumiram = new ListagemClientesMenosConsumiram(empresa.getClientes)
            listarClientesMenosConsumiram.listar()
            break;
        case 19:
            let listarClienteGenero = new ListagemClienteGenero(empresa.getClientes)
            listarClienteGenero.listar()
            break;
        case 20:
            let listarItensConsumidos = new ListagemMaisConsumidos(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            listarItensConsumidos.listar()
            break;
        case 21:
            let listarItensConsumidosGenero = new ListagemMaisConsumidosGenero(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            listarItensConsumidosGenero.listar()
            break;
        case 22:
            let listarClientesValor = new ListagemClientesMaisConsumiramValor(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            listarClientesValor.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :`)
    }
}