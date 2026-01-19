'use client';
import React, { useState, useEffect, useCallback } from 'react';
import '../app/css/carousel.css';

const areasAtuacao = [
  {
    titulo: 'Angústia',
    descricao: 'Trabalho focado na compreensão e elaboração dos sentimentos de angústia, buscando ressignificar experiências e encontrar caminhos para o alívio emocional.',
    icone: '💭'
  },
  {
    titulo: 'Ansiedade',
    descricao: 'Acompanhamento terapêutico para compreender as raízes da ansiedade e desenvolver estratégias para lidar com suas manifestações no dia a dia.',
    icone: '🌊'
  },
  {
    titulo: 'Depressão',
    descricao: 'Suporte psicológico para enfrentar o sofrimento depressivo, promovendo o autoconhecimento e a reconexão com o sentido da vida.',
    icone: '🌱'
  },
  {
    titulo: 'Problemas de Relacionamento',
    descricao: 'Apoio para compreender padrões relacionais, melhorar a comunicação e construir vínculos mais saudáveis e significativos.',
    icone: '🤝'
  },
  {
    titulo: 'Desenvolvimento Pessoal',
    descricao: 'Acompanhamento para quem busca autoconhecimento, crescimento pessoal e deseja viver de forma mais autêntica e consciente.',
    icone: '✨'
  },
  {
    titulo: 'Luto e Perdas',
    descricao: 'Espaço acolhedor para elaborar perdas significativas e encontrar formas de ressignificar a dor, respeitando o tempo de cada um.',
    icone: '🕊️'
  }
];

function Carousel() {
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

  const maxIndex = Math.max(0, areasAtuacao.length - itemsPerView);

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
    <div className="carousel-container" data-testid="carousel">
      <button
        className="carousel-btn prev"
        onClick={prevSlide}
        aria-label="Slide anterior"
        data-testid="carousel-prev"
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
          {areasAtuacao.map((area, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{ flex: `0 0 ${100 / itemsPerView}%` }}
              data-testid={`carousel-item-${index}`}
            >
              <div className="area-card">
                <span className="area-icon">{area.icone}</span>
                <h4>{area.titulo}</h4>
                <p>{area.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel-btn next"
        onClick={nextSlide}
        aria-label="Próximo slide"
        data-testid="carousel-next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div className="carousel-dots" data-testid="carousel-dots">
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

export default Carousel;
