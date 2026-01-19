'use client';
import React, { useState, useEffect, useCallback } from 'react';
import '../app/css/carousel.css';

const servicos = [
  {
    titulo: 'Psicoterapia Individual',
    descricao: 'Sessões individuais de psicoterapia com abordagem psicanalítica, focadas no autoconhecimento e bem-estar emocional.',
    icone: '🧠',
  },
  {
    titulo: 'Atendimento Online',
    descricao: 'Sessões realizadas de forma remota, proporcionando conforto e acessibilidade para você de qualquer lugar.',
    icone: '💻',
  },
  {
    titulo: 'Escuta Psicanalítica',
    descricao: 'Espaço de escuta atenta e acolhedora, onde você pode expressar livremente seus pensamentos e emoções.',
    icone: '👂',
  },
];

function ServicosCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, servicos.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="carousel-container" data-testid="servicos-carousel">
      <button
        className="carousel-btn prev"
        onClick={prevSlide}
        aria-label="Slide anterior"
        data-testid="servicos-carousel-prev"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div className="carousel-track-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{ flex: `0 0 ${100 / itemsPerView}%` }}
              data-testid={`servicos-carousel-item-${index}`}
            >
              <div className="area-card">
                <span className="area-icon">{servico.icone}</span>
                <h4>{servico.titulo}</h4>
                <p>{servico.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel-btn next"
        onClick={nextSlide}
        aria-label="Próximo slide"
        data-testid="servicos-carousel-next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div className="carousel-dots" data-testid="servicos-carousel-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ServicosCarousel;
