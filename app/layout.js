import Menu from '../components/Menu';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import './css/base.css';
import './css/menu.css';
import './css/footer.css';
import './css/whatsapp.css';

export const metadata = {
  title: 'Matheus Oliveira - Psicólogo Clínico | CRP 04/81415',
  description: 'Psicoterapia com escuta acolhedora e empática. Atendimento online com abordagem psicanalítica. Agende sua consulta.',
  keywords: 'psicólogo, psicoterapia, psicanálise, terapia online, atendimento psicológico, CRP 04/81415',
  icons: {
    icon: '/Design sem nome.ICO',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SGH49B5" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SGH49B5" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <Menu />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
