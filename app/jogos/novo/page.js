import { redirect } from 'next/navigation';
import { Jogos } from '../../../database/tables.js';
import "../../css/listagem.css";
import "../../css/cadastro.css";
async function insereJogo(formData) {
    'use server';
    const dados = {
        nome: formData.get('nome'),
        desenvolvedor: formData.get('desenvolvedor'),
        data_de_lancamento: formData.get('data_de_lancamento'),
        descricao: formData.get('descricao'),

    };
    await Jogos.create(dados);
    redirect('/jogos');
}

function TelaNovoJogo() {
    return (
        <>
        <div>
            <form action={insereJogo}>
                <h1>Novo Jogo</h1>
                <label htmlFor="nome">Nome do Jogo</label><br />
                <input type="text" name="nome"></input><br />
                <label htmlFor="desenvolvedor">Desenvolvedor</label><br />
                <input type="text" name="desenvolvedor"></input><br />
                <label htmlFor="data_de_lancamento">Data de Lançamento</label><br />
                <input type="date" name="data_de_lancamento"></input><br />
                <label htmlFor="descricao">Descrição</label><br />
                <input type="text" name="descricao"></input><br />

                <button className='bt-classico'>Cadastrar</button>
            </form>
        </div>
        </>
    )
}

export default TelaNovoJogo;
