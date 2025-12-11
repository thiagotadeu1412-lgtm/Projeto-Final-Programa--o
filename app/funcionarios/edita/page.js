import { Funcionario } from '../../../database/tables';
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";

async function editaFuncionario(formData) {
    'use server'

    const id = formData.get('id');
    const nome = formData.get('nome');
    const cargo = formData.get('cargo');
    const nascimento = formData.get('nascimento');

    const funcionario = await Funcionario.findByPk(id);

    funcionario.nome = nome;
    funcionario.cargo = cargo;
    funcionario.nascimento = nascimento;

    await funcionario.save();

    redirect('/funcionarios');
}



async function TelaEditaFuncionario({ searchParams }) {
    const id = searchParams.id;
    const funcionario = await Funcionario.findByPk(id);

    if (!funcionario) {
        return <div>Funcionário não encontrado.</div>;
    }

    return(
        <>
        <div>
            <h1>Editando Funcionário</h1>
            <br/>
            <form action={editaFuncionario}>

            <input type= "hidden" name= "id" defaultValue={funcionario.id_funcionario} /> <br/>
            
            <label htmlFor="nome">Nome</label><br/>
            <input type="text" name="nome" defaultValue={funcionario.nome} /> <br/>

            <label htmlFor="cargo">Cargo</label><br/>
            <input type="text" name="cargo" defaultValue={funcionario.cargo} /> <br/>

            <label htmlFor="nascimento">Data de Nascimento</label><br/>
            <input type="date" name="nascimento" defaultValue={funcionario.nascimento} /> <br/>

        <button className='bt-classico'>Salvar</button>
        </form>
        </div>
        </>
    );
}

export default TelaEditaFuncionario;

