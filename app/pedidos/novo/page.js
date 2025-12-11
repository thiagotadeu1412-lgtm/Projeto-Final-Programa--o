import { redirect } from 'next/navigation';
import { Pedido, Cliente } from '../../../database/tables.js';
import "../../css/listagem.css";
import "../../css/cadastro.css";

async function getClientes() {
    const clientes = await Cliente.findAll();
    return clientes;
}

async function inserePedido(formData) {
    'use server';
    const dados = {
        clienteId: formData.get('clienteId'),
        data_pedido: formData.get('data_pedido') || new Date(),
        status: formData.get('status'),
        valor_total: parseFloat(formData.get('valor_total')) || 0,
    };
    await Pedido.create(dados);
    redirect('/pedidos');
}

export default async function TelaNovoPedido() {
    const clientes = await getClientes();

    return (
        <>
        <div>
            <form action={inserePedido}>
                <h1>Novo Pedido</h1>
                <label htmlFor="clienteId">Cliente</label><br />
                <select name="clienteId" required>
                    <option value="">Selecione um cliente</option>
                    {clientes.map((cliente) => (
                        <option key={cliente.id_cliente} value={cliente.id_cliente}>
                            {cliente.nome}
                        </option>
                    ))}
                </select><br />
                <label htmlFor="data_pedido">Data do Pedido</label><br />
                <input type="datetime-local" name="data_pedido"></input><br />
                <label htmlFor="status">Status</label><br />
                <select name="status">
                    <option value="Pendente">Pendente</option>
                    <option value="Processando">Processando</option>
                    <option value="Enviado">Enviado</option>
                    <option value="Entregue">Entregue</option>
                    <option value="Cancelado">Cancelado</option>
                </select><br />
                <label htmlFor="valor_total">Valor Total</label><br />
                <input type="number" step="0.01" name="valor_total"></input><br />

                <button className='bt-classico'>Cadastrar</button>
            </form>
        </div>
        </>
    )
}

