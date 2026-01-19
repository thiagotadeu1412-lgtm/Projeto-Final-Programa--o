'use client';
import React from 'react';
import '../css/servicos.css';

const servicos = [
  {
    icone: '🧠',
    titulo: 'Psicoterapia Individual',
    descricao: 'Sessões individuais de psicoterapia com abordagem psicanalítica, focadas no autoconhecimento e bem-estar emocional. O processo é conduzido de forma personalizada, respeitando o ritmo e as necessidades de cada pessoa.',
    detalhes: [
      'Sessões de 50 minutos',
      'Frequência semanal recomendada',
      'Abordagem psicanalítica',
      'Sigilo profissional garantido'
    ]
  },
  {
    icone: '💻',
    titulo: 'Atendimento Online',
    descricao: 'Sessões realizadas de forma remota através de videoconferência, proporcionando conforto e acessibilidade para você de qualquer lugar. A mesma qualidade e cuidado do atendimento presencial.',
    detalhes: [
      'Plataforma segura e privada',
      'Flexibilidade de horários',
      'Atendimento de qualquer lugar',
      'Mesma eficácia do presencial'
    ]
  },
  {
    icone: '👂',
    titulo: 'Escuta Psicanalítica',
    descricao: 'Espaço de escuta atenta e acolhedora, onde você pode expressar livremente seus pensamentos e emoções. Um ambiente livre de julgamentos para explorar suas questões mais profundas.',
    detalhes: [
      'Ambiente acolhedor',
      'Sem julgamentos',
      'Escuta ativa e empática',
      'Foco no autoconhecimento'
    ]
  }
];

const publicoAlvo = [
  { grupo: 'Adultos', descricao: 'Atendimento para adultos de todas as idades' },
  { grupo: 'Adolescentes', descricao: 'Apoio especializado para adolescentes' }
];

function Servicos() {
  const message = 'Olá! Gostaria de agendar uma consulta.';
  const agendarUrl = `https://wa.me/5533998779353?text=${encodeURIComponent(message)}`;

  return (
    <div className="servicos-page" data-testid="servicos-page">
      <section className="servicos-hero">
        <div className="servicos-hero-content">
          <span className="section-label">SERVIÇOS</span>
          <h1>Como posso ajudar</h1>
          <p>Conheça os serviços oferecidos e encontre o melhor caminho para o seu bem-estar.</p>
        </div>
      </section>

      <section className="servicos-lista">
        <div className="servicos-container">
          {servicos.map((servico, index) => (
            <div key={index} className="servico-item" data-testid={`servico-${index}`}>
              <div className="servico-header">
                <span className="servico-icone">{servico.icone}</span>
                <h2>{servico.titulo}</h2>
              </div>
              <p className="servico-descricao">{servico.descricao}</p>
              <ul className="servico-detalhes">
                {servico.detalhes.map((detalhe, i) => (
                  <li key={i}>
                    <span className="check">✓</span>
                    {detalhe}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="publico-alvo">
        <div className="publico-container">
          <h2>Público Atendido</h2>
          <div className="publico-grid">
            {publicoAlvo.map((item, index) => (
              <div key={index} className="publico-card">
                <h3>{item.grupo}</h3>
                <p>{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="como-funciona">
        <div className="funciona-container">
          <h2>Como Funciona</h2>
          <div className="passos-grid">
            <div className="passo">
              <div className="passo-numero">1</div>
              <h3>Entre em Contato</h3>
              <p>Preencha o formulário de agendamento ou entre em contato pelo WhatsApp.</p>
            </div>
            <div className="passo">
              <div className="passo-numero">2</div>
              <h3>Primeira Sessão</h3>
              <p>Realizamos uma sessão inicial para nos conhecermos e entender suas necessidades.</p>
            </div>
            <div className="passo">
              <div className="passo-numero">3</div>
              <h3>Início do Processo</h3>
              <p>Começamos o acompanhamento terapêutico de forma personalizada.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="servicos-cta">
        <div className="cta-container">
          <h2>Pronto para começar?</h2>
          <p>Dê o primeiro passo em direção ao seu bem-estar emocional.</p>
          <a
            href={agendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            data-testid="servicos-agendar"
          >
            Agendar Consulta
          </a>
        </div>
      </section>
    </div>
  );
}

export default Servicos;
