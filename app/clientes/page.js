import { revalidatePath } from "next/cache.js";
import { Cliente } from "../../database/tables.js";
import "../css/listagem.css";

async function getClientes() {
    const dados = await Cliente.findAll();
    return dados;
}

async function deleteCliente(formData) {
    'use server';
    const id = formData.get('id_cliente');
    await Cliente.destroy({
        where: {
            id_cliente: id
        }
    });
    revalidatePath('/clientes');
}


export default async function ClientesPage() {
    const dados = await getClientes();

    const formatarData = (data) => {
        if (!data) return 'N/A';
        const [ano, mes, dia] = data.split('-');
        return `${dia}/${mes}/${ano}`;
    };

    return (
        <div>
            <h1>Lista de Clientes</h1>
            <a href="/clientes/novo">Adicionar Cliente</a>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Data de Nascimento</th>
                        <th>Endereço</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item) => (
                        <tr key={item.id_cliente}>
                            <td>{item.id_cliente}</td>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>{item.telefone}</td>
                            <td>{formatarData(item.data_de_nascimento)}</td>
                            <td>{item.endereco}</td>
                            <td>
                                <form action={deleteCliente}>
                                    <input type="hidden" name="id_cliente" value={item.id_cliente} />
                                    <button type="submit">Excluir</button>
                                </form>
                                <form action={'/clientes/edita'}>
                                    <input type="hidden" name="id" defaultValue={item.id_cliente}/>
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

