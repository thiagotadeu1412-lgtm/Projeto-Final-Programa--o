'use client';
import React, { useState } from 'react';
import '../css/faq.css';

const perguntas = [
  {
    pergunta: 'Como funciona a terapia online?',
    resposta: 'A terapia online acontece através de videoconferência, em uma plataforma segura e privada. Você pode participar das sessões de qualquer lugar, desde que tenha uma conexão de internet estável e um ambiente privado. A eficácia do atendimento online é comprovada cientificamente e oferece a mesma qualidade do presencial.'
  },
  {
    pergunta: 'Qual é a duração de cada sessão?',
    resposta: 'Cada sessão tem duração de aproximadamente 50 minutos. Esse tempo é padrão na prática clínica e permite um trabalho profundo e significativo em cada encontro.'
  },
  {
    pergunta: 'Com que frequência devo fazer terapia?',
    resposta: 'A frequência recomendada é semanal, pois permite uma continuidade no processo terapêutico e um acompanhamento mais efetivo. No entanto, a frequência pode ser ajustada de acordo com suas necessidades e disponibilidade.'
  },
  {
    pergunta: 'O que é a abordagem psicanalítica?',
    resposta: 'A psicanálise é uma abordagem que busca compreender o funcionamento psíquico através da fala e da escuta. Ela valoriza a história de vida do sujeito, suas experiências e a forma como ele se relaciona consigo mesmo e com os outros. O objetivo é promover autoconhecimento e transformação.'
  },
  {
    pergunta: 'Como é garantido o sigilo das sessões?',
    resposta: 'O sigilo profissional é um princípio ético fundamental da psicologia. Todas as informações compartilhadas durante as sessões são confidenciais e protegidas pelo Código de Ética do Psicólogo. No caso do atendimento online, utilizo plataformas seguras com criptografia para garantir a privacidade.'
  },
  {
    pergunta: 'Quanto tempo dura um processo terapêutico?',
    resposta: 'Não existe um tempo definido para a duração da terapia, pois cada pessoa tem seu próprio ritmo e suas próprias demandas. O processo é construído em conjunto, respeitando suas necessidades. Algumas pessoas fazem acompanhamento por alguns meses, outras por anos.'
  },
  {
    pergunta: 'Como faço para agendar uma consulta?',
    resposta: 'Você pode agendar uma consulta através do formulário de agendamento aqui no site ou entrando em contato diretamente pelo WhatsApp. Responderei o mais breve possível para combinarmos os detalhes.'
  },
  {
    pergunta: 'Você atende convênio?',
    resposta: 'Atualmente trabalho apenas com atendimento particular. Posso fornecer recibo para reembolso, caso seu convênio ofereça essa possibilidade. Entre em contato para mais informações sobre valores.'
  },
  {
    pergunta: 'Preciso ter um diagnóstico para começar a terapia?',
    resposta: 'Não é necessário ter um diagnóstico para iniciar a terapia. Muitas pessoas buscam o processo terapêutico para autoconhecimento, desenvolvimento pessoal ou para lidar com questões do dia a dia. A terapia é para todos que desejam se conhecer melhor.'
  },
  {
    pergunta: 'O que devo esperar da primeira sessão?',
    resposta: 'A primeira sessão é um momento de conhecimento mútuo. É uma oportunidade para você compartilhar o que te levou a buscar terapia, suas expectativas e dúvidas. Também é um momento para eu explicar como trabalho e para avaliarmos juntos se faz sentido iniciarmos o processo.'
  }
];

function FAQ() {
  const message = 'Olá! Gostaria de agendar uma consulta.';
  const agendarUrl = `https://wa.me/5533998779353?text=${encodeURIComponent(message)}`;
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page" data-testid="faq-page">
      <section className="faq-hero">
        <div className="faq-hero-content">
          <span className="section-label">FAQ</span>
          <h1>Perguntas Frequentes</h1>
          <p>Encontre respostas para as dúvidas mais comuns sobre o processo terapêutico.</p>
        </div>
      </section>

      <section className="faq-lista">
        <div className="faq-container">
          {perguntas.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              data-testid={`faq-item-${index}`}
            >
              <button
                className="faq-pergunta"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                data-testid={`faq-toggle-${index}`}
              >
                <span>{item.pergunta}</span>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-resposta">
                <p>{item.resposta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-cta">
        <div className="cta-container">
          <h2>Ainda tem dúvidas?</h2>
          <p>Entre em contato e terei prazer em esclarecer suas questões.</p>
          <div className="cta-buttons">
            <a
              href={agendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-testid="faq-agendar"
            >
              Agendar Consulta
            </a>
            <a 
              href={agendarUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
              data-testid="faq-whatsapp"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
