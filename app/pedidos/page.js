import { revalidatePath } from "next/cache.js";
import { Pedido, Cliente } from "../../database/tables.js";
import "../css/listagem.css";

async function getPedidos() {
    const dados = await Pedido.findAll({
        include: [{ model: Cliente }]
    });
    return dados;
}

async function deletePedido(formData) {
    'use server';
    const id = formData.get('id_pedido');
    await Pedido.destroy({
        where: {
            id_pedido: id
        }
    });
    revalidatePath('/pedidos');
}


export default async function PedidosPage() {
    const dados = await getPedidos();

    const formatarData = (data) => {
        if (!data) return 'N/A';
        const dataObj = new Date(data);
        return dataObj.toLocaleDateString('pt-BR');
    };

    return (
        <div>
            <h1>Lista de Pedidos</h1>
            <a href="/pedidos/novo">Adicionar Pedido</a>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Data do Pedido</th>
                        <th>Status</th>
                        <th>Valor Total</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item) => (
                        <tr key={item.id_pedido}>
                            <td>{item.id_pedido}</td>
                            <td>{item.Cliente ? item.Cliente.nome : 'Sem cliente'}</td>
                            <td>{formatarData(item.data_pedido)}</td>
                            <td>{item.status}</td>
                            <td>R$ {item.valor_total ? item.valor_total.toFixed(2) : '0.00'}</td>
                            <td>
                                <form action={deletePedido}>
                                    <input type="hidden" name="id_pedido" value={item.id_pedido} />
                                    <button type="submit">Excluir</button>
                                </form>
                                <form action={'/pedidos/edita'}>
                                    <input type="hidden" name="id" defaultValue={item.id_pedido}/>
                                    <button>Editar</button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

