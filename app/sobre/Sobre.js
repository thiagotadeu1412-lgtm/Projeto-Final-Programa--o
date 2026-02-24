'use client';
import React from 'react';
import Link from 'next/link';
import '../css/sobre.css';

function Sobre() {
  const phoneNumber = '5531971466033';
  const message = 'Olá! Gostaria de agendar uma consulta.';
  const agendarUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="sobre-page" data-testid="sobre-page">
      <section className="sobre-hero">
        <div className="sobre-hero-content">
          <span className="section-label">SOBRE MIM</span>
          <h1>Matheus Oliveira</h1>
          <p className="subtitle">Psicólogo Clínico | CRP 04/81415</p>
        </div>
      </section>

      <section className="sobre-bio">
        <div className="bio-container">
          <div className="bio-image">
            <img
              src="Gemini_Generated_Image_l41hpil41hpil41h.png"
              alt="Matheus Oliveira em consultório"
            />
          </div>
          <div className="bio-text">
            <h2>Minha História</h2>
            <p>
              Olá, meu nome é Matheus Oliveira e sou Psicólogo. Minha atuação é orientada 
              pela abordagem psicanalítica, que me permite compreender o sujeito em sua 
              singularidade e complexidade, valorizando sua subjetividade e história de vida.
            </p>
            <p>
              No meu trabalho, acredito que cada pessoa traz consigo uma experiência única, 
              e é a partir da escuta atenta que podemos construir caminhos de compreensão 
              e transformação.
            </p>
            <p>
              O cerne do meu trabalho é o diálogo. Acredito que o tratamento psicológico 
              acontece através da fala, onde o sujeito tem a oportunidade de expressar seus 
              sentimentos, pensamentos e angústias. Para que isso seja possível, é essencial 
              o engajamento do próprio sujeito, pois o processo terapêutico se constrói 
              conjuntamente, exigindo reflexão, envolvimento e disposição para se conhecer 
              mais profundamente.
            </p>
          </div>
        </div>
      </section>

      <section className="sobre-filosofia">
        <div className="filosofia-container">
          <h2>Minha Abordagem</h2>
          <div className="filosofia-content">
            <p>
              Meu objetivo é proporcionar um espaço seguro, acolhedor e livre de julgamentos, 
              em que cada indivíduo possa se sentir à vontade para se expressar. Entendo que 
              o sofrimento, a angústia e os desafios emocionais fazem parte da experiência 
              humana, e que o processo de escuta e reflexão permite que o sujeito possa se 
              reconectar consigo mesmo, encontrar sentido em suas experiências e desenvolver 
              recursos internos para lidar com suas dificuldades.
            </p>
            <p>
              Mais do que tratar sintomas, busco apoiar o sujeito na compreensão de si mesmo, 
              na valorização de suas emoções e na construção de estratégias para viver de 
              forma mais plena e consciente. Cada sessão é um espaço de encontro, onde o 
              sujeito pode falar o que lhe vier à mente, acolher suas próprias emoções e, 
              assim, avançar no caminho do autoconhecimento e do bem-estar.
            </p>
          </div>
        </div>
      </section>

      <section className="sobre-credenciais">
        <div className="credenciais-container">
          <h2>Formação e Credenciais</h2>
          <div className="credenciais-grid">
            <div className="credencial-card">
              <div className="credencial-icon">🎓</div>
              <h3>Formação</h3>
              <p>- Graduação em Psicologia (UNI Bh) 2020-2025</p> 
              <p>- Pós-Graduação em Gestão (USP) 2025-</p> 

            </div>
            <div className="credencial-card">
              <div className="credencial-icon">📋</div>
              <h3>Registro</h3>
              <p>CRP 04/81415</p>
            </div>
            <div className="credencial-card">
              <div className="credencial-icon">🧠</div>
              <h3>Abordagem</h3>
              <p>Psicanálise</p>
            </div>
            <div className="credencial-card">
              <div className="credencial-icon">💻</div>
              <h3>Modalidade</h3>
              <p>Atendimento Online</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sobre-cta">
        <div className="cta-container">
          <h2>Vamos Conversar?</h2>
          <p>Estou aqui para te acompanhar nessa jornada de autoconhecimento.</p>
          <div className="cta-buttons">
            <a
              href={agendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-testid="sobre-agendar"
            >
              Agendar Consulta
            </a>
            <a href={agendarUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary" data-testid="sobre-whatsapp">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sobre;
