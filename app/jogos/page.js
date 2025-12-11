import { revalidatePath } from "next/cache.js";
import { Jogos } from "../../database/tables.js";
import "../css/listagem.css";
async function getJogos() {
    const dados = await Jogos.findAll();
    return dados;
}

async function deleteJogo(formData) {
    'use server';
    const id = formData.get('id_jogo');
    await Jogos.destroy({
        where: {
            id_jogo: id
        }
    });
    revalidatePath('/jogos');
}


export default async function JogosPage() {
    const dados = await getJogos();

    const formatarData = (data) => {
        if (!data) return 'N/A';
        const [ano, mes, dia] = data.split('-');
        return `${dia}/${mes}/${ano}`;
    };

    return (
        <div>
            <h1>Catálogo de Jogos</h1>
            <a href="/jogos/novo">Adicionar Jogos</a>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Jogo</th>
                        <th>Desenvolvedor</th>
                        <th>Data de Lançamento</th>
                        <th>Descrição</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item) => (
                        <tr key={item.id_jogo}>
                            <td>{item.id_jogo}</td>
                            <td>{item.nome}</td>
                            <td>{item.desenvolvedor}</td>
                            <td>{formatarData(item.data_de_lancamento)}</td>
                            <td>{item.descricao}</td>
                            <td>
                                <form action={deleteJogo}>
                                    <input type="hidden" name="id_jogo" value={item.id_jogo} />
                                    <button type="submit">Excluir</button>

                                </form>
                                   <form action= {'/jogos/edita'}>
                                            <input type= "hidden" name = "id"  defaultValue= {item.id_jogo}/>
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