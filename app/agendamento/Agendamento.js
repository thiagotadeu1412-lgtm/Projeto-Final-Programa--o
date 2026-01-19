'use client';
import React, { useState } from 'react';
import '../css/agendamento.css';

const perguntas = [
  {
    id: 1,
    pergunta: 'Qual é o seu nome completo?',
    tipo: 'texto',
    placeholder: 'Digite seu nome completo',
    obrigatorio: true
  },
  {
    id: 2,
    pergunta: 'Qual é a sua idade?',
    tipo: 'numero',
    placeholder: 'Ex: 25',
    obrigatorio: true
  },
  {
    id: 3,
    pergunta: 'Qual é o seu email para contato?',
    tipo: 'email',
    placeholder: 'seu@email.com',
    obrigatorio: true
  },
  {
    id: 4,
    pergunta: 'Qual é o principal motivo que te levou a buscar atendimento psicológico?',
    tipo: 'selecao',
    opcoes: ['Ansiedade', 'Depressão', 'Angústia', 'Problemas de Relacionamento', 'Desenvolvimento Pessoal', 'Luto e Perdas', 'Outro'],
    obrigatorio: true
  },
  {
    id: 5,
    pergunta: 'Conte um pouco sobre você e o que está sentindo:',
    tipo: 'textarea',
    placeholder: 'Sinta-se à vontade para compartilhar o que achar relevante sobre sua situação atual, seus sentimentos e expectativas...',
    obrigatorio: true
  },
  {
    id: 6,
    pergunta: 'Você já fez terapia anteriormente?',
    tipo: 'selecao',
    opcoes: ['Sim, estou em acompanhamento', 'Sim, mas já encerrei', 'Não, será minha primeira vez'],
    obrigatorio: true
  },
  {
    id: 7,
    pergunta: 'Qual modalidade de atendimento você prefere?',
    tipo: 'selecao',
    opcoes: ['Online (videoconferência)', 'Presencial', 'Tanto faz'],
    obrigatorio: true
  },
  {
    id: 8,
    pergunta: 'Qual período do dia é melhor para você?',
    tipo: 'selecao',
    opcoes: ['Manhã (8h - 12h)', 'Tarde (13h - 18h)', 'Noite (18h - 21h)', 'Flexível'],
    obrigatorio: true
  },
  {
    id: 9,
    pergunta: 'Como você ficou sabendo sobre meu trabalho?',
    tipo: 'selecao',
    opcoes: ['Instagram', 'LinkedIn', 'Google', 'Indicação de amigo/familiar', 'Outro'],
    obrigatorio: false
  }
];

function Agendamento() {
  const [currentStep, setCurrentStep] = useState(0);
  const [respostas, setRespostas] = useState({});
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState('');

  const perguntaAtual = perguntas[currentStep];
  const progresso = ((currentStep + 1) / perguntas.length) * 100;

  const handleChange = (valor) => {
    setRespostas({ ...respostas, [perguntaAtual.id]: valor });
    setErro('');
  };

  const validarResposta = () => {
    const resposta = respostas[perguntaAtual.id];
    if (perguntaAtual.obrigatorio && (!resposta || resposta.trim() === '')) {
      setErro('Por favor, responda esta pergunta para continuar.');
      return false;
    }
    if (perguntaAtual.tipo === 'email' && resposta) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(resposta)) {
        setErro('Por favor, insira um email válido.');
        return false;
      }
    }
    return true;
  };

  const proximaPergunta = () => {
    if (!validarResposta()) return;
    
    if (currentStep < perguntas.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      enviarParaWhatsApp();
    }
  };

  const perguntaAnterior = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setErro('');
    }
  };

  const enviarParaWhatsApp = () => {
    const phoneNumber = '5533998779353';

    const nome = respostas[1] || 'Não informado';
    const idade = respostas[2] || 'Não informado';
    const email = respostas[3] || 'Não informado';
    const motivo = respostas[4] || 'Não informado';
    const relato = respostas[5] || 'Não informado';
    const terapia = respostas[6] || 'Não informado';
    const modalidade = respostas[7] || 'Não informado';
    const periodo = respostas[8] || 'Não informado';
    const origem = respostas[9] || 'Não informado';

    let mensagem = `Olá! Meu nome é ${nome} e estou com problemas de ${motivo}.\n\n`;
    mensagem += 'Gostaria de agendar uma consulta. Seguem minhas informações:\n';
    mensagem += `- Idade: ${idade}\n`;
    mensagem += `- Email: ${email}\n`;
    mensagem += `- Descrição: ${relato}\n`;
    mensagem += `- Terapia anterior: ${terapia}\n`;
    mensagem += `- Modalidade preferida: ${modalidade}\n`;
    mensagem += `- Melhor período: ${periodo}\n`;
    mensagem += `- Como conheci o trabalho: ${origem}\n\n`;
    mensagem += '_Enviado pelo formulário do site_';
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
    setEnviado(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && perguntaAtual.tipo !== 'textarea') {
      proximaPergunta();
    }
  };

  if (enviado) {
    return (
      <div className="agendamento" data-testid="agendamento-page">
        <div className="agendamento-container">
          <div className="sucesso-card">
            <div className="sucesso-icon">✓</div>
            <h2>Questionário Enviado!</h2>
            <p>
              Suas respostas foram preparadas para envio via WhatsApp.
              Uma nova aba foi aberta para você finalizar o envio.
            </p>
            <p className="sucesso-info">
              Caso a aba não tenha aberto, clique no botão abaixo:
            </p>
            <button 
              onClick={enviarParaWhatsApp} 
              className="btn-primary"
              data-testid="reenviar-btn"
            >
              Abrir WhatsApp
            </button>
            <button 
              onClick={() => { setEnviado(false); setCurrentStep(0); setRespostas({}); }} 
              className="btn-secondary"
              data-testid="novo-agendamento-btn"
            >
              Fazer Novo Agendamento
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="agendamento" data-testid="agendamento-page">
      <div className="agendamento-container">
        <div className="agendamento-header">
          <span className="section-label">AGENDAMENTO</span>
          <h1>Agende sua Consulta</h1>
          <p>Responda as perguntas abaixo para que eu possa conhecer melhor você e suas necessidades.</p>
        </div>

        <div className="progress-container" data-testid="progress-bar">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progresso}%` }}></div>
          </div>
          <span className="progress-text">Pergunta {currentStep + 1} de {perguntas.length}</span>
        </div>

        <div className="pergunta-card" data-testid="pergunta-card">
          <h3>{perguntaAtual.pergunta}</h3>
          
          {perguntaAtual.tipo === 'texto' && (
            <input
              type="text"
              value={respostas[perguntaAtual.id] || ''}
              onChange={(e) => handleChange(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={perguntaAtual.placeholder}
              className="input-field"
              autoFocus
              data-testid="input-texto"
            />
          )}

          {perguntaAtual.tipo === 'numero' && (
            <input
              type="number"
              value={respostas[perguntaAtual.id] || ''}
              onChange={(e) => handleChange(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={perguntaAtual.placeholder}
              className="input-field"
              min="1"
              max="120"
              autoFocus
              data-testid="input-numero"
            />
          )}

          {perguntaAtual.tipo === 'email' && (
            <input
              type="email"
              value={respostas[perguntaAtual.id] || ''}
              onChange={(e) => handleChange(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={perguntaAtual.placeholder}
              className="input-field"
              autoFocus
              data-testid="input-email"
            />
          )}

          {perguntaAtual.tipo === 'textarea' && (
            <textarea
              value={respostas[perguntaAtual.id] || ''}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={perguntaAtual.placeholder}
              className="textarea-field"
              rows="6"
              autoFocus
              data-testid="input-textarea"
            />
          )}

          {perguntaAtual.tipo === 'selecao' && (
            <div className="opcoes-container" data-testid="opcoes-container">
              {perguntaAtual.opcoes.map((opcao, index) => (
                <button
                  key={index}
                  className={`opcao-btn ${respostas[perguntaAtual.id] === opcao ? 'selected' : ''}`}
                  onClick={() => handleChange(opcao)}
                  data-testid={`opcao-${index}`}
                >
                  {opcao}
                </button>
              ))}
            </div>
          )}

          {erro && <p className="erro-msg" data-testid="erro-msg">{erro}</p>}
        </div>

        <div className="navegacao-btns">
          <button
            onClick={perguntaAnterior}
            className="btn-nav prev"
            disabled={currentStep === 0}
            data-testid="btn-anterior"
          >
            ← Anterior
          </button>
          <button
            onClick={proximaPergunta}
            className="btn-nav next"
            data-testid="btn-proximo"
          >
            {currentStep === perguntas.length - 1 ? 'Enviar via WhatsApp' : 'Próxima →'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Agendamento;
