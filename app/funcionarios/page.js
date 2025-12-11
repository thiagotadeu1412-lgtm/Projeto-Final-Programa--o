import { revalidatePath } from "next/cache.js";
import { Funcionario } from "../../database/tables.js";
import "../css/listagem.css";

async function getFuncionarios() {
    const dados = await Funcionario.findAll();
    return dados;
}

async function deleteFuncionario(formData) {
    'use server';
    const id = formData.get('id_funcionario');
    await Funcionario.destroy({
        where: {
            id_funcionario: id
        }
    });
    revalidatePath('/funcionarios');
}


export default async function FuncionariosPage() {
    const dados = await getFuncionarios();

    const formatarData = (data) => {
        if (!data) return 'N/A';
        const [ano, mes, dia] = data.split('-');
        return `${dia}/${mes}/${ano}`;
    };

    return (
        <div>
            <h1>Lista de Funcionários</h1>
            <a href="/funcionarios/novo">Adicionar Funcionário</a>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Data de Nascimento</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item) => (
                        <tr key={item.id_funcionario}>
                            <td>{item.id_funcionario}</td>
                            <td>{item.nome}</td>
                            <td>{item.cargo}</td>
                            <td>{formatarData(item.nascimento)}</td>
                            <td>
                                <form action={deleteFuncionario}>
                                    <input type="hidden" name="id_funcionario" value={item.id_funcionario} />
                                    <button type="submit">Excluir</button>
                                </form>
                                <form action={'/funcionarios/edita'}>
                                    <input type="hidden" name="id" defaultValue={item.id_funcionario}/>
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

