import Menu from '../components/Menu';
import './css/base.css';

export const metadata = {
    title: 'Nothiga Store',
    description: 'Página de jogos da Nothiga Store',
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <header>
                    <Menu />
                 </header>
                <main>
                    {children}
            </main>
            <footer>
                <p>© 2024 Nothiga Store. Todos os direitos reservados.</p>
                </footer>
                </body>
        </html>
    )
}