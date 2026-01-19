'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import '../app/css/menu.css';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const message = 'Olá! Gostaria de agendar uma consulta.';
  const whatsappUrl = `https://wa.me/5533998779353?text=${encodeURIComponent(message)}`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" data-testid="navbar">
      <div className="nav-brand">
        <Link href="/" data-testid="logo-link">
          <img
            src="https://customer-assets.emergentagent.com/job_web-styling/artifacts/1k226m4v_Design%20sem%20nome%281%29.png"
            alt="Logo Matheus Oliveira"
            className="logo"
          />
        </Link>
      </div>

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        data-testid="menu-toggle"
      >
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} data-testid="nav-links">
        <Link href="/" onClick={() => setIsMenuOpen(false)} data-testid="nav-inicio">Início</Link>
        <Link href="/sobre" onClick={() => setIsMenuOpen(false)} data-testid="nav-sobre">Sobre</Link>
        <Link href="/servicos" onClick={() => setIsMenuOpen(false)} data-testid="nav-servicos">Serviços</Link>
        <Link href="/faq" onClick={() => setIsMenuOpen(false)} data-testid="nav-faq">Perguntas Frequentes</Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-agendar"
          onClick={() => setIsMenuOpen(false)}
          data-testid="nav-agendar"
        >
          Agendar Consulta
        </a>
      </div>
    </nav>
  );
}

export default Menu;
