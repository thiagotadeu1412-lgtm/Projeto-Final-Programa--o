import { Jogos } from '../../../database/tables';
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";

async function editaJogos(formData) {
    'use server'

    const id = formData.get('id');
    const nome = formData.get('nome');
    const desenvolvedor = formData.get('desenvolvedor');
    const data_de_lancamento = formData.get('data_de_lancamento');
    const descricao = formData.get('descricao');

    const jogo = await Jogos.findByPk(id);

    jogo.nome = nome;
    jogo.desenvolvedor = desenvolvedor;
    jogo.data_de_lancamento = data_de_lancamento;
    jogo.descricao = descricao;

    await jogo.save();

    redirect('/jogos');
}



async function TelaEditaJogos({ searchParams }) {
    const id = searchParams.id;
    const jogo = await Jogos.findByPk(id);

    if (!jogo) {
        return <div>Jogo não encontrado.</div>;
    }

    return(
        <>
        <div>
            <h1>Editando Jogo</h1>
            <br/>
            <form action={editaJogos}>

            <input type= "hidden" name= "id" defaultValue={jogo.id_jogo} /> <br/>
            
            <label htmlFor="nome">Nome</label><br/>
            <input type="text" name="nome" defaultValue={jogo.nome} /> <br/>

            <label htmlFor="desenvolvedor">Desenvolvedor</label><br/>
            <input type="text" name="desenvolvedor" defaultValue={jogo.desenvolvedor} /> <br/>

            <label htmlFor="data_de_lancamento">Data de Lançamento</label><br/>
            <input type="text" name="data_de_lancamento" defaultValue={jogo.data_de_lancamento} /> <br/>

            <label htmlFor="descricao">Descrição</label><br/>
            <input type="text" name="descricao" defaultValue={jogo.descricao} /> <br/>

        <button>Salvar</button>
        </form>
        </div>
        </>
    );
}

export default TelaEditaJogos;
