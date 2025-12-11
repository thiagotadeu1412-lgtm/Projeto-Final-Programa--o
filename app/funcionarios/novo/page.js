import { redirect } from 'next/navigation';
import { Funcionario } from '../../../database/tables.js';
import "../../css/listagem.css";
import "../../css/cadastro.css";

async function insereFuncionario(formData) {
    'use server';
    const dados = {
        nome: formData.get('nome'),
        cargo: formData.get('cargo'),
        nascimento: formData.get('nascimento'),
    };
    await Funcionario.create(dados);
    redirect('/funcionarios');
}

function TelaNovoFuncionario() {
    return (
        <>
        <div>
            <form action={insereFuncionario}>
                <h1>Novo Funcionário</h1>
                <label htmlFor="nome">Nome</label><br />
                <input type="text" name="nome"></input><br />
                <label htmlFor="cargo">Cargo</label><br />
                <input type="text" name="cargo"></input><br />
                <label htmlFor="nascimento">Data de Nascimento</label><br />
                <input type="date" name="nascimento"></input><br />

                <button className='bt-classico'>Cadastrar</button>
            </form>
        </div>
        </>
    )
}

export default TelaNovoFuncionario;

