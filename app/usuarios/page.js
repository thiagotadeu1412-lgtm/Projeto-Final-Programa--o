import { revalidatePath } from "next/cache.js";
import { Usuarios } from "../../database/tables.js";
import "../css/listagem.css";

async function getUsuarios() {
    const dados = await Usuarios.findAll();
    return dados;
}

async function deleteUsuario(formData) {
    'use server';
    const id = formData.get('id_usuario');
    await Usuarios.destroy({
        where: {
            id_usuario: id
        }
    });
    revalidatePath('/usuarios');
}

export default async function UsuariosPage() {
    const dados = await getUsuarios();

    const formatarData = (data) => {
        if (!data) return 'N/A';
        const [ano, mes, dia] = data.split('-');
        return `${dia}/${mes}/${ano}`;
    };

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <a href="/usuarios/novo">Adicionar Usuário</a>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Data de Nascimento</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item) => (
                        <tr key={item.id_usuario}>
                            <td>{item.id_usuario}</td>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>{formatarData(item.data_de_nascimento)}</td>
                            <td>
                                <form action={deleteUsuario}>
                                    <input type="hidden" name="id_usuario" value={item.id_usuario} />
                                    <button type="submit">Excluir</button>
                                </form>
                                <form action={'/usuarios/edita'}>
                                    <input type="hidden" name="id" defaultValue={item.id_usuario}/>
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