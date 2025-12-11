import { redirect } from 'next/navigation';
import { Usuarios } from '../../../database/tables.js';
import "../../css/listagem.css";
import "../../css/cadastro.css";

async function insereUsuario(formData) {
    'use server';
    const dados = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        data_de_nascimento: formData.get('data_de_nascimento'),
        senha: formData.get('senha'),
    };
    await Usuarios.create(dados);
    redirect('/usuarios');
}

function TelaNovoUsuario() {
    return (
        <>
        <div>
            <form action={insereUsuario}>
                <h1>Novo Usuário</h1>
                <label htmlFor="nome">Nome</label><br />
                <input type="text" name="nome"></input><br />
                <label htmlFor="email">E-Mail</label><br />
                <input type="email" name="email"></input><br />
                <label htmlFor="data_de_nascimento">Data de Nascimento</label><br />
                <input type="date" name="data_de_nascimento"></input><br />
                <label htmlFor="senha">Senha</label><br />
                <input type="password" name="senha"></input><br />

                <button className='bt-classico'>Cadastrar</button>
            </form>
        </div>
        </>
    )
}

export default TelaNovoUsuario;
