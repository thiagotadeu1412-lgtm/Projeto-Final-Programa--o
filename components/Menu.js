import Link from 'next/link';
import '../app/css/menu.css';
function Menu() {
    return (
        
            <nav>
                <div>
                    <Link href="/"><img src='/menu.png' alt="Logo Nothiga Store" width="100" height="50" /></Link>
                </div>
                <div>
                    <Link href="/">Início </Link>
                    <Link href="/jogos">Jogos </Link>
                    <Link href="/clientes">Clientes </Link>
                    <Link href="/pedidos">Pedidos </Link>
                    <Link href="/funcionarios">Funcionários </Link>
                    <Link href="/usuarios">Usuários </Link>
                </div>
            </nav>

            
    );
}

export default Menu;