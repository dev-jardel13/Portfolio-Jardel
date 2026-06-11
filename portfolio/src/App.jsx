import React, { useState } from 'react';
import Galaxy from './Galaxy';
import './Galaxy.css'; 
import minhaFoto from './assets/foto.jpeg'; 
import printSuplementos from './assets/site.png'; 
import printProjeto2 from './assets/gerador de css.jpeg'; 
import printProjeto3 from './assets/Calculadora.png'; 
import printProjeto4 from './assets/Sistema de Agendamento.png'; 


import certifClaude101 from './assets/Claude 101.png';
import certifAction from './assets/Claude Code in Action.png';
import certifCode101 from './assets/Claude Code 101.png';
import certificado from './assets/Imersao Dev com Google Gemini.png'; 
import certifingles from './assets/Curso de English .jpeg';
export default function App() {
  const [imagemZoom, setImagemZoom] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const meusCertificados = [
    {
      id: 1,
      titulo: "Claude 101",
      instituicao: "Anthropic",
      cargaHoraria: "1 h",
      ano: "2026",
      imagem: certifClaude101, 
    },
    {
      id: 2,
      titulo: "Claude Code In Action",
      instituicao: "Anthropic",
      cargaHoraria: "3 h",
      ano: "2026",
      imagem: certifAction, 
    },
    {
      id: 3,
      titulo: "Claude Code 101",
      instituicao: "Anthropic",
      cargaHoraria: "3 h",
      ano: "2026",
      imagem: certifCode101
    },
    { 
      id: 4,
      titulo: "Imersão Dev Com Google Gemini 10ª Edição",
      instituicao: "Alura Parceria com Google Gemini",
      cargaHoraria: "3 h",
      ano: "2025",
      imagem: certificado 
    },
    { 
      id: 5,
      titulo: "Curso de Inglês Nível Básico",
      instituicao: "ITEP - Instituto de Tecnologia e Educação Profissional",
      cargaHoraria: "100 h",
      ano: "2025",
      imagem: certifingles 
    },
    
  ];

  const outrosProjetos = [
    {
      id: 1,
      titulo: "Gerador de CSS com I.A Da GROK",
      descricao: "Desenvolvimento de uma aplicação web que utiliza inteligência artificial para gerar código CSS personalizado. O projeto envolve a integração de uma API de IA para processar as solicitações do usuário e retornar estilos CSS uniques com base nos preferências e requisitos fornecidos.",
      imagem: printProjeto2
    },
    {
      id: 2,
      titulo: "Calculadora Simples em Java",
      descricao: "calculadora em java usando swing e awt, onde o usuário pode realizar operações básicas como adição, subtração, multiplicação e divisão. O projeto envolve a criação de uma interface gráfica intuitiva e a implementação da lógica de cálculo para processar as entradas do usuário e exibir os resultados de forma clara.",
      imagem: printProjeto3
    },
    {
      id: 3,
      titulo: "Sistema de Agendamento de Horarios",
      descricao: "Desenvolvimento de um sistema de agendamento de horários utilizando Java e Spring Boot. O projeto envolve a criação de uma aplicação web que permite aos usuários marcar compromissos, visualizar disponibilidade e gerenciar seus horários de forma eficiente. A aplicação includes funcionalidades como cadastro de usuários, criação e gerenciamento de eventos, e integração com um banco de dados para armazenar as informações de agendamento.",
      imagem: printProjeto4
    },
  ];

  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      position: 'relative', 
      backgroundColor: '#000', 
      overflowX: 'hidden',
      overflowY: 'auto',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }}>
      
     
      <div style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'fixed', 
        top: 0,
        left: 0,
        zIndex: 1 
      }}>
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={0.8}          
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.05}   
          repulsionStrength={1.5}
          autoCenterRepulsion={0}
          starSpeed={0.3}
          speed={1}
        />
      </div>

   
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        minHeight: '60px',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        flexWrap: 'wrap', 
        padding: '8px 10px',
        boxSizing: 'border-box',
        zIndex: 100,
      }}>
        <button onClick={() => scrollToSection('inicio')} className="nav-link" style={navLinkStyle}>Início</button>
        <button onClick={() => scrollToSection('sobre')} className="nav-link" style={navLinkStyle}>Sobre</button>
        <button onClick={() => scrollToSection('certificados')} className="nav-link" style={navLinkStyle}>Certificados</button>
        <button onClick={() => scrollToSection('destaque')} className="nav-link" style={navLinkStyle}>Destaque</button>
        <button onClick={() => scrollToSection('galeria')} className="nav-link" style={navLinkStyle}>Projetos</button>
        <button onClick={() => scrollToSection('contato')} className="nav-link" style={navLinkStyle}>Redes</button>
      </nav>

    
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#fff',
        paddingTop: '90px', 
        boxSizing: 'border-box',
        pointerEvents: 'none'
      }}>
        
       
        <section id="inicio" style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 20px',
          pointerEvents: 'auto'
        }}>
          
          <div className="avatar-container" style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 0 25px rgba(255, 255, 255, 0.2)',
            marginBottom: '20px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#111',
            cursor: 'pointer'
          }}>
            <img 
              src={minhaFoto} 
              alt="Luiz Jardel" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<span style="font-size: 2rem; color: #666;">< /></span>';
              }}
            />
          </div>

          <h1 style={{ fontSize: 'calc(1.8rem + 1vw)', fontWeight: '700', margin: '0 0 8px 0', textShadow: '0 0 15px rgba(255,255,255,0.3)' }}>
            Luiz Jardel
          </h1>
          
          <p style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0' }}>
            Desenvolvedor Back-End Java
          </p>
        </section>

        <section id="sobre" style={{
          minHeight: '65vh',
          width: '100%',
          maxWidth: '680px',
          padding: '20px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          pointerEvents: 'auto'
        }}>
          <div style={{
            backgroundColor: 'rgba(15, 15, 15, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '25px', 
            boxSizing: 'border-box',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
          }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '600', margin: '0 0 15px 0', color: '#fff' }}>
              👨🏾‍💻 Sobre Mim
            </h2>
            
            <p style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: '1.6', margin: '0 0 25px 0' }}>
              Sou estudante de Análise e Desenvolvimento de Sistemas e estou em constante aprendizado na área de desenvolvimento de software.
              <br /><br />
              Tenho conhecimento básico em Java e Programação Orientada a Objetos, e atualmente estou me aprofundando em desenvolvimento backend com Spring Boot. Já desenvolvi alguns projetos utilizando o framework, o que tem me ajudado a entender melhor como funcionam APIs, banco de dados e a estrutura de aplicações reais.
              <br /><br />
              Também possuo noções de frontend com HTML, CSS e JavaScript, o que me permite construir interfaces simples para integração com o backend.
              <br /><br />
              Meu foco atual é evoluir como desenvolvedor backend Java, ganhar mais experiência prática e construir projetos cada vez mais completos e próximos do mercado. Estou aberto a oportunidades de estágio ou projetos colaborativos para continuar crescendo na área.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div>
                <h4 style={{ fontSize: '0.75rem', color: '#888', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Foco Principal (Back-End)
                </h4>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <span style={techTagStyle}>Java</span>
                  <span style={techTagStyle}>Spring Boot</span>
                  <span style={techTagStyle}>SQL</span>
                </div>
              </div>
              
              <div>
                <h4 style={{ fontSize: '0.75rem', color: '#888', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Conhecimento Básico (Front-End)
                </h4>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <span style={techTagStyle}>HTML</span>
                  <span style={techTagStyle}>CSS</span>
                  <span style={techTagStyle}>JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section id="certificados" style={{
          minHeight: '50vh',
          width: '100%',
          maxWidth: '680px',
          padding: '40px 20px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          pointerEvents: 'auto'
        }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>
            📜 Certificações & Cursos
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {meusCertificados.map((cert) => (
              <div 
                key={cert.id} 
                onClick={() => cert.imagem && setImagemZoom(cert.imagem)}
                style={{
                  backgroundColor: 'rgba(15, 15, 15, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '15px',
                  cursor: cert.imagem ? 'zoom-in' : 'default',
                  transition: 'transform 0.2s, border-color 0.2s',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: '600', margin: '0 0 4px 0', color: '#fff' }}>
                    {cert.titulo}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#aaa', margin: 0 }}>
                    {cert.instituicao} • <span style={{ color: '#888' }}>{cert.cargaHoraria}</span>
                  </p>
                </div>
                
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#666', fontWeight: '500' }}>
                    {cert.ano}
                  </span>
                  {cert.imagem && (
                    <span style={{ fontSize: '0.65rem', color: '#00ffaa', backgroundColor: 'rgba(0,255,170,0.08)', padding: '2px 6px', borderRadius: '4px' }}>
                      Ver documento
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        
        <section id="destaque" style={{
          minHeight: '70vh',
          width: '100%',
          maxWidth: '680px',
          padding: '20px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          
          <div className="card-destaque" style={{
            backgroundColor: 'rgba(20, 20, 20, 0.85)',
            border: '2px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '16px',
            padding: '25px',
            boxSizing: 'border-box',
            backdropFilter: 'blur(10px)',
            pointerEvents: 'auto',
            boxShadow: '0 20px 45px rgba(0,0,0,0.7)',
            cursor: 'pointer'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h2 style={{ fontSize: '1.3rem', margin: 0, fontWeight: '700', color: '#fff' }}>
                ⭐ PROJETO EM DESTAQUE
              </h2>
              <span style={{ fontSize: '0.7rem', color: '#fff', backgroundColor: '#333', padding: '3px 8px', borderRadius: '4px', fontWeight: '600' }}>
                Principal
              </span>
            </div>

            <div 
              onClick={() => setImagemZoom(printSuplementos)}
              style={{
                width: '100%',
                height: 'auto',
                minHeight: '160px',
                maxHeight: '240px',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'zoom-in',
                marginBottom: '15px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <img src={printSuplementos} alt="Loja de suplementos" className="img-hover-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <h3 style={{ fontSize: '1.15rem', margin: '0 0 10px 0', color: '#fff', fontWeight: '600' }}>
               Desenvolvimento de Loja de Suplementos com HTML, CSS E JAVASCRIPT
            </h3>

            <p style={{ fontSize: '0.88rem', color: '#ccc', lineHeight: '1.5', margin: '0 0 20px 0' }}>
              Aplicação web de uma Loja de Suplementos desenvolvida utilizando HTML, CSS E JAVASCRIPT. Esse foi meu primeiro projeto para um cliente real, onde eu consegui aplicar tudo que estava vendo nas aulas da faculdade.
            </p>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span style={techTagStyle}>HTML</span>
              <span style={techTagStyle}>CSS</span>
              <span style={techTagStyle}>JavaScript</span>
            </div>
          </div>
        </section>

       
        <section id="galeria" style={{
          minHeight: '65vh',
          width: '100%',
          maxWidth: '1000px',
          padding: '40px 20px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '25px', textAlign: 'center' }}>
            📦 Outros Projetos Desenvolvidos
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            width: '100%',
            pointerEvents: 'auto'
          }}>
            {outrosProjetos.map((proj) => (
              <div key={proj.id} className="card-projeto" style={{
                backgroundColor: 'rgba(15, 15, 15, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
                backdropFilter: 'blur(8px)',
                cursor: 'pointer'
              }}>
                <div 
                  onClick={() => setImagemZoom(proj.imagem)}
                  style={{ width: '100%', height: '160px', overflow: 'hidden', cursor: 'zoom-in', backgroundColor: '#111' }}
                >
                  <img src={proj.imagem} alt={proj.titulo} className="img-hover-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '15px' }}>
                  <h3 style={{ fontSize: '0.95rem', margin: '0 0 8px 0', fontWeight: '600', color: '#fff' }}>
                    {proj.titulo}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#aaa', lineHeight: '1.4', margin: 0 }}>
                    {proj.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO REDES / CONTATO */}
        <section id="contato" style={{
          minHeight: '55vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          padding: '0 20px',
          boxSizing: 'border-box',
          pointerEvents: 'auto',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1rem', color: '#ffffff', margin: '0 0 20px 0', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Sociais
          </h3>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '10px',
            width: '100%',
            maxWidth: '500px'
          }}>
            <a href="https://www.linkedin.com/in/luiz-jardel/?skipRedirect=true" target="_blank" rel="noreferrer" className="social-link" style={socialLinkStyle}>LinkedIn</a>
            <a href="https://github.com/dev-jardel13" target="_blank" rel="noreferrer" className="social-link" style={socialLinkStyle}>GitHub</a>
            <a href="https://www.instagram.com/dev.jardel/" target="_blank" rel="noreferrer" className="social-link" style={socialLinkStyle}>Instagram</a>
            <a href="mailto:luizjardel13@gmail.com" className="social-link" style={socialLinkStyle}>E-mail</a>
            <a href="https://www.youtube.com/@devjardel13" target="_blank" rel="noreferrer" className="social-link" style={socialLinkStyle}>YouTube</a>
          </div>
        </section>

      </div>

      
      {imagemZoom && (
        <div 
          onClick={() => setImagemZoom(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'zoom-out',
            backdropFilter: 'blur(6px)',
            padding: '10px',
            boxSizing: 'border-box'
          }}
        >
          <button style={{ position: 'absolute', top: '15px', right: '20px', background: 'none', border: 'none', color: '#fff', fontSize: '2.5rem', cursor: 'pointer' }}>&times;</button>
          <img src={imagemZoom} alt="Zoom" style={{ maxWidth: '100%', maxHeight: '80%', borderRadius: '6px', objectFit: 'contain' }} />
        </div>
      )}

    </div>
  );
}

const navLinkStyle = {
  background: 'none',
  border: 'none',
  color: '#aaa',
  fontSize: '0.82rem',
  fontWeight: '600',
  cursor: 'pointer',
  padding: '6px 8px',
  borderRadius: '4px'
};

const techTagStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '0.78rem',
  color: '#bbb'
};

const socialLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '0.85rem',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '8px 14px',
  borderRadius: '6px',
  fontWeight: '500',
  display: 'inline-block',
  flexGrow: 1,
  textAlign: 'center'
};