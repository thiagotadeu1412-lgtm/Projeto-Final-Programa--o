'use client';
import React from 'react';
import Link from 'next/link';
import Carousel from '../components/Carousel';
import './css/home.css';

function Home() {
  const phoneNumber = '5533998779353';
  const message = 'Olá! Gostaria de agendar uma consulta.';
  const agendarUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="home" data-testid="home-page">
      {/* Hero Section */}
      <section className="hero" data-testid="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Psicoterapia com<br />
              escuta acolhedora<br />
              e empática
            </h1>
            <p className="hero-description">
              Espaço seguro para você se reconectar consigo mesmo,
              compreender suas emoções e encontrar caminhos para uma vida
              mais plena e consciente.
            </p>
            <div className="hero-info">
              <p className="credentials">Matheus Oliveira | Psicólogo Clínico | CRP 04/81415</p>
              <div className="hero-buttons">
                <a href={agendarUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" data-testid="hero-agendar">
                  Agendar Consulta
                </a>
                <Link href="/sobre" className="btn-secondary" data-testid="hero-conhecer">
                  Conhecer Mais
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://customer-assets.emergentagent.com/job_web-styling/artifacts/ry3gkz0m_grok-image-45b09b39-5c6e-44ea-a98d-10c63fca27b0%282%29.jpg"
              alt="Matheus Oliveira - Psicólogo"
            />
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="sobre-preview" id="sobre" data-testid="sobre-section">
        <div className="sobre-content">
          <div className="sobre-image">
            <img
              src="https://customer-assets.emergentagent.com/job_web-styling/artifacts/g209pbw9_grok-image-42b92456-51af-4fe7-af55-15c19cc806c0.jpg"
              alt="Matheus Oliveira em consultório"
            />
          </div>
          <div className="sobre-text">
            <span className="section-label">SOBRE MIM</span>
            <h2>Matheus Oliveira</h2>
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
            <Link href="/sobre" className="btn-text" data-testid="sobre-link">
              Ler mais sobre mim →
            </Link>
          </div>
        </div>

        <div className="info-cards" data-testid="info-cards">
          <div className="info-card">
            <span className="card-label">REGISTRO PROFISSIONAL</span>
            <h3 className="card-info">CRP 04/81415</h3>
          </div>
          <div className="info-card">
            <span className="card-label">ABORDAGEM</span>
            <h3 className="card-info">Psicanálise</h3>
          </div>
          <div className="info-card">
            <span className="card-label">MODALIDADE</span>
            <h3 className="card-info">Online</h3>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="servicos" data-testid="servicos-section">
        <span className="section-label">SERVIÇOS</span>
        <h2>Como posso ajudar</h2>
        <div className="servicos-grid">
          <div className="servico-card">
            <div className="servico-icon">🧠</div>
            <h3>Psicoterapia Individual</h3>
            <p>Sessões individuais de psicoterapia com abordagem psicanalítica, focadas no autoconhecimento e bem-estar emocional.</p>
          </div>
          <div className="servico-card">
            <div className="servico-icon">💻</div>
            <h3>Atendimento Online</h3>
            <p>Sessões realizadas de forma remota, proporcionando conforto e acessibilidade para você de qualquer lugar.</p>
          </div>
          <div className="servico-card">
            <div className="servico-icon">👂</div>
            <h3>Escuta Psicanalítica</h3>
            <p>Espaço de escuta atenta e acolhedora, onde você pode expressar livremente seus pensamentos e emoções.</p>
          </div>
        </div>
      </section>

      {/* Áreas de Atendimento Section */}
      <section className="areas-atendimento" data-testid="areas-section">
        <span className="section-label">ÁREAS DE ATENDIMENTO</span>
        <h2>Principais áreas de atuação</h2>
        <p className="areas-subtitle">
          Atendimento especializado para diferentes formas de sofrimento psíquico,
          sempre com foco na singularidade de cada sujeito.
        </p>
        <Carousel />
      </section>

      {/* CTA Section */}
      <section className="cta-section" data-testid="cta-section">
        <div className="cta-content">
          <h2>Pronto para começar sua jornada?</h2>
          <p>O primeiro passo é o mais importante. Entre em contato e agende sua consulta.</p>
          <a
            href={agendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary large"
            data-testid="cta-agendar"
          >
            Agendar Consulta
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
