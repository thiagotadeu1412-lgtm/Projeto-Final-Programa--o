import { redirect } from 'next/navigation';
import { Cliente } from '../../../database/tables.js';
import "../../css/listagem.css";
import "../../css/cadastro.css";

async function insereCliente(formData) {
    'use server';
    const dados = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        telefone: formData.get('telefone'),
        data_de_nascimento: formData.get('data_de_nascimento'),
        endereco: formData.get('endereco'),
    };
    await Cliente.create(dados);
    redirect('/clientes');
}

function TelaNovoCliente() {
    return (
        <>
        <div>
            <form action={insereCliente}>
                <h1>Novo Cliente</h1>
                <label htmlFor="nome">Nome</label><br />
                <input type="text" name="nome"></input><br />
                <label htmlFor="email">E-Mail</label><br />
                <input type="email" name="email"></input><br />
                <label htmlFor="telefone">Telefone</label><br />
                <input type="text" name="telefone"></input><br />
                <label htmlFor="data_de_nascimento">Data de Nascimento</label><br />
                <input type="date" name="data_de_nascimento"></input><br />
                <label htmlFor="endereco">Endereço</label><br />
                <input type="text" name="endereco"></input><br />

                <button className='bt-classico'>Cadastrar</button>
            </form>
        </div>
        </>
    )
}

export default TelaNovoCliente;

