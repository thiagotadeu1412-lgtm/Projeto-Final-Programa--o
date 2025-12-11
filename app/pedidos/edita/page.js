import { Pedido, Cliente, Jogos, ItemPedido } from '../../../database/tables';
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";
import "../../css/listagem.css";

async function getClientes() {
    const clientes = await Cliente.findAll();
    return clientes;
}

async function getJogos() {
    const jogos = await Jogos.findAll();
    return jogos;
}

async function editaPedido(formData) {
    'use server'

    const id = formData.get('id');
    const clienteId = formData.get('clienteId');
    const data_pedido = formData.get('data_pedido');
    const status = formData.get('status');
    const valor_total = parseFloat(formData.get('valor_total')) || 0;

    const pedido = await Pedido.findByPk(id, {
        include: [{ 
            model: Jogos, 
            through: ItemPedido,
            required: false
        }]
    });

    pedido.clienteId = clienteId;
    pedido.data_pedido = data_pedido;
    pedido.status = status;
    pedido.valor_total = valor_total;

    await pedido.save();

    redirect('/pedidos');
}

async function adicionaItemPedido(formData) {
    'use server';
    const pedidoId = formData.get('pedidoId');
    const jogoId = formData.get('jogoId');
    const quantidade = parseInt(formData.get('quantidade')) || 1;
    const preco_unitario = parseFloat(formData.get('preco_unitario')) || 0;

    const pedido = await Pedido.findByPk(pedidoId);
    const jogo = await Jogos.findByPk(jogoId);

    if (pedido && jogo) {
        await pedido.addJogos(jogo, { through: { quantidade, preco_unitario } });
    }

    redirect(`/pedidos/edita?id=${pedidoId}`);
}

async function removeItemPedido(formData) {
    'use server';
    const pedidoId = formData.get('pedidoId');
    const jogoId = formData.get('jogoId');

    const pedido = await Pedido.findByPk(pedidoId);
    const jogo = await Jogos.findByPk(jogoId);

    if (pedido && jogo) {
        await pedido.removeJogos(jogo);
    }

    redirect(`/pedidos/edita?id=${pedidoId}`);
}

export default async function TelaEditaPedido({ searchParams }) {
    const id = searchParams.id;
    const pedido = await Pedido.findByPk(id, {
        include: [
            { model: Cliente },
            { 
                model: Jogos, 
                through: ItemPedido,
                required: false
            }
        ]
    });

    if (!pedido) {
        return <div>Pedido não encontrado.</div>;
    }

    const clientes = await getClientes();
    const jogos = await getJogos();

    const formatarData = (data) => {
        if (!data) return '';
        const dataObj = new Date(data);
        const ano = dataObj.getFullYear();
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const hora = String(dataObj.getHours()).padStart(2, '0');
        const minuto = String(dataObj.getMinutes()).padStart(2, '0');
        return `${ano}-${mes}-${dia}T${hora}:${minuto}`;
    };

    return(
        <>
        <div>
            <h1>Editando Pedido</h1>
            <br/>
            <form action={editaPedido}>

            <input type= "hidden" name= "id" defaultValue={pedido.id_pedido} /> <br/>
            
            <label htmlFor="clienteId">Cliente</label><br/>
            <select name="clienteId" defaultValue={pedido.clienteId}>
                {clientes.map((cliente) => (
                    <option key={cliente.id_cliente} value={cliente.id_cliente}>
                        {cliente.nome}
                    </option>
                ))}
            </select> <br/>

            <label htmlFor="data_pedido">Data do Pedido</label><br/>
            <input type="datetime-local" name="data_pedido" defaultValue={formatarData(pedido.data_pedido)} /> <br/>

            <label htmlFor="status">Status</label><br/>
            <select name="status" defaultValue={pedido.status}>
                <option value="Pendente">Pendente</option>
                <option value="Processando">Processando</option>
                <option value="Enviado">Enviado</option>
                <option value="Entregue">Entregue</option>
                <option value="Cancelado">Cancelado</option>
            </select> <br/>

            <label htmlFor="valor_total">Valor Total</label><br/>
            <input type="number" step="0.01" name="valor_total" defaultValue={pedido.valor_total} /> <br/>

            <button className='bt-classico'>Salvar</button>
            </form>

            <br/><br/>
            <h2>Itens do Pedido</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Jogo</th>
                        <th>Quantidade</th>
                        <th>Preço Unitário</th>
                        <th>Subtotal</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {pedido.Jogos && pedido.Jogos.length > 0 ? pedido.Jogos.map((jogo) => {
                        const item = jogo.ItemPedido || {};
                        return (
                            <tr key={jogo.id_jogo}>
                                <td>{jogo.nome}</td>
                                <td>{item.quantidade || 1}</td>
                                <td>R$ {item.preco_unitario ? parseFloat(item.preco_unitario).toFixed(2) : '0.00'}</td>
                                <td>R$ {((item.quantidade || 1) * (parseFloat(item.preco_unitario) || 0)).toFixed(2)}</td>
                                <td>
                                    <form action={removeItemPedido}>
                                        <input type="hidden" name="pedidoId" value={pedido.id_pedido} />
                                        <input type="hidden" name="jogoId" value={jogo.id_jogo} />
                                        <button type="submit">Remover</button>
                                    </form>
                                </td>
                            </tr>
                        );
                    }) : (
                        <tr>
                            <td colSpan="5">Nenhum item adicionado</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <br/><br/>
            <h2>Adicionar Item</h2>
            <form action={adicionaItemPedido}>
                <input type="hidden" name="pedidoId" value={pedido.id_pedido} />
                <label htmlFor="jogoId">Jogo</label><br/>
                <select name="jogoId" required>
                    <option value="">Selecione um jogo</option>
                    {jogos.map((jogo) => (
                        <option key={jogo.id_jogo} value={jogo.id_jogo}>
                            {jogo.nome}
                        </option>
                    ))}
                </select><br/>
                <label htmlFor="quantidade">Quantidade</label><br/>
                <input type="number" name="quantidade" defaultValue="1" min="1" /><br/>
                <label htmlFor="preco_unitario">Preço Unitário</label><br/>
                <input type="number" step="0.01" name="preco_unitario" defaultValue="0" /><br/>
                <button className='bt-classico'>Adicionar</button>
            </form>
        </div>
        </>
    );
}


