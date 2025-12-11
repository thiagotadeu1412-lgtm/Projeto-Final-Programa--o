import { Usuarios } from '../../../database/tables';
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";

async function editaUsuario(formData) {
    'use server'

    const id = formData.get('id');
    const nome = formData.get('nome');
    const email = formData.get('email');
    const data_de_nascimento = formData.get('data_de_nascimento');
    const senha = formData.get('senha');

    const usuario = await Usuarios.findByPk(id);

    usuario.nome = nome;
    usuario.email = email;
    usuario.data_de_nascimento = data_de_nascimento;
    usuario.senha = senha;

    await usuario.save();

    redirect('/usuarios');
}



async function TelaEditaUsuario({ searchParams }) {
    const id = searchParams.id;
    const usuario = await Usuarios.findByPk(id);

    if (!usuario) {
        return <div>Usuário não encontrado.</div>;
    }

    return(
        <>
        <div>
            <h1>Editando Usuário</h1>
            <br/>
            <form action={editaUsuario}>

            <input type= "hidden" name= "id" defaultValue={usuario.id_usuario} /> <br/>
            
            <label htmlFor="nome">Nome</label><br/>
            <input type="text" name="nome" defaultValue={usuario.nome} /> <br/>

            <label htmlFor="email">E-Mail</label><br/>
            <input type="email" name="email" defaultValue={usuario.email} /> <br/>

            <label htmlFor="data_de_nascimento">Data de Nascimento</label><br/>
            <input type="date" name="data_de_nascimento" defaultValue={usuario.data_de_nascimento} /> <br/>

            <label htmlFor="senha">Senha</label><br/>
            <input type="password" name="senha" defaultValue={usuario.senha} /> <br/>

        <button className='bt-classico'>Salvar</button>
        </form>
        </div>
        </>
    );
}

export default TelaEditaUsuario;

