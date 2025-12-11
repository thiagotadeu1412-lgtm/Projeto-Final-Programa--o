import { Cliente } from '../../../database/tables';
import { redirect } from 'next/navigation';
import "../../css/cadastro.css";

async function editaCliente(formData) {
    'use server'

    const id = formData.get('id');
    const nome = formData.get('nome');
    const email = formData.get('email');
    const telefone = formData.get('telefone');
    const data_de_nascimento = formData.get('data_de_nascimento');
    const endereco = formData.get('endereco');

    const cliente = await Cliente.findByPk(id);

    cliente.nome = nome;
    cliente.email = email;
    cliente.telefone = telefone;
    cliente.data_de_nascimento = data_de_nascimento;
    cliente.endereco = endereco;

    await cliente.save();

    redirect('/clientes');
}



async function TelaEditaCliente({ searchParams }) {
    const id = searchParams.id;
    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
        return <div>Cliente não encontrado.</div>;
    }

    return(
        <>
        <div>
            <h1>Editando Cliente</h1>
            <br/>
            <form action={editaCliente}>

            <input type= "hidden" name= "id" defaultValue={cliente.id_cliente} /> <br/>
            
            <label htmlFor="nome">Nome</label><br/>
            <input type="text" name="nome" defaultValue={cliente.nome} /> <br/>

            <label htmlFor="email">E-Mail</label><br/>
            <input type="email" name="email" defaultValue={cliente.email} /> <br/>

            <label htmlFor="telefone">Telefone</label><br/>
            <input type="text" name="telefone" defaultValue={cliente.telefone} /> <br/>

            <label htmlFor="data_de_nascimento">Data de Nascimento</label><br/>
            <input type="date" name="data_de_nascimento" defaultValue={cliente.data_de_nascimento} /> <br/>

            <label htmlFor="endereco">Endereço</label><br/>
            <input type="text" name="endereco" defaultValue={cliente.endereco} /> <br/>

        <button className='bt-classico'>Salvar</button>
        </form>
        </div>
        </>
    );
}

export default TelaEditaCliente;

