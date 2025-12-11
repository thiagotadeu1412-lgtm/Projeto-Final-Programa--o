import Link from 'next/link';
import '../app/css/base.css';

function Home() {
    return (
      <div>
        <h1>Bem-vindo à Nothiga Store!</h1>
        <p>Seu destino para os melhores jogos do mercado</p>
        
        <div>
          <h2>Sobre Nós</h2>
          <p>A Nothiga Store é uma loja especializada em jogos digitais e físicos. 
          Oferecemos uma ampla variedade de títulos para todas as plataformas, 
          desde os clássicos até os lançamentos mais recentes.</p>
        </div>

        <div>
          <h2>Nossos Serviços</h2>
          <ul>
            <li>Catálogo completo de jogos</li>
            <li>Atendimento personalizado</li>
            <li>Entrega rápida e segura</li>
            <li>Suporte técnico especializado</li>
          </ul>
        </div>

        <div>
          <h2>Últimos Lançamentos</h2>
          <p>Confira nossa seleção dos jogos mais recentes e populares do momento.</p>
          <Link href="/jogos">Ver Catálogo Completo</Link>
        </div>

        <div>
          <h2>Acesso Rápido</h2>
          <Link href="/jogos">Jogos</Link> | 
          <Link href="/clientes">Clientes</Link> | 
          <Link href="/pedidos">Pedidos</Link> | 
          <Link href="/funcionarios">Funcionários</Link> | 
          <Link href="/usuarios">Usuários</Link>
        </div>
      </div>
    );
  }
  
export default Home;
