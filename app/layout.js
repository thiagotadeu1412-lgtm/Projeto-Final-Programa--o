import Menu from '../components/Menu';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import './css/base.css';
import './css/menu.css';
import './css/footer.css';
import './css/whatsapp.css';
import Script from 'next/script';

export const metadata = {
  title: 'Matheus Oliveira - Psicólogo Clínico | CRP 04/81415',
  description: 'Psicoterapia com escuta acolhedora e empática. Atendimento online com abordagem psicanalítica. Agende sua consulta.',
  keywords: 'psicólogo, psicoterapia, psicanálise, terapia online, atendimento psicológico, CRP 04/81415',
  icons: {
    icon: '/Design sem nome.ICO',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Aqui não coloque nada do GTM, apenas metadados (já estão no metadata) */}
      </head>
      <body>
        {/* Google Tag Manager - Script principal (carrega após a página) */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5SGH49B5');
            `,
          }}
        />

        {/* Google Tag Manager - Noscript (fallback para navegadores sem JS) - DEVE FICAR LOGO APÓS ABRIR <body> */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SGH49B5" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        {/* Conteúdo principal do site - ordem lógica: Menu, conteúdo, rodapé */}
        <Menu />
        <main>{children}</main>  {/* children aparece UMA ÚNICA VEZ dentro de <main> */}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}