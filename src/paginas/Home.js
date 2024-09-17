import React from 'react';
import './Home.css';
import vic1 from '../imagens/victor/Vic1.jpeg';
import vic2 from '../imagens/victor/Vic2.jpeg';
import vic3 from '../imagens/victor/Vic3.jpeg';

function Home() {
  return (
    <div className="home">
      {/* Seção com Imagens Inspiradas no Estilo Blade Runner */}
      <section className="neon-section">
        <h2>Preparador físico Victor Mendes</h2>
        <p>Confira algumas imagens da última participação De Victor no Muscle Contest.</p>
        <div className="image-gallery">
          <img src={vic1} alt="Victor 1" />
          <img src={vic2} alt="Victor 2" />
          <img src={vic3} alt="Victor 3" />
        </div>
      </section>

      {/* Seção de História Resumida de Victor Mendes */}
      <section className="history-section">
        <h2>Conheça Victor Mendes</h2>
        <p>
          Victor Mendes de Siqueira é um profissional altamente qualificado no campo da preparação física, 
          especializado em atletas de força, luta e bodybuilding. Desde o início de sua carreira em 2012, 
          ele combinou experiência prática com conhecimento acadêmico avançado. Ele possui graduação em Educação Física, 
          mestrado em Engenharia Biomédica e está atualmente cursando Nutrição e Dietética.
        </p>
        <p>
          Ao longo de sua trajetória, Victor conquistou mais de 30 títulos nacionais e internacionais, 
          além de ter ajudado mais de 200 clientes a atingirem seus objetivos. Sua abordagem alia ciência de ponta com práticas 
          consolidadas, oferecendo uma consultoria esportiva personalizada e eficaz.
        </p>
        <p>
          Agora, com o "Guia de Emagrecimento e Nutrição", você tem a oportunidade de aprender com esse vasto conhecimento e 
          aplicar as mesmas estratégias usadas por Victor e seus atletas de sucesso.
        </p>
      </section>

      {/* Botões de CTA (WhatsApp, Instagram, Kiwify) */}
      <section className="cta-section">
        <h2>Adquira o eBook e comece a transformação em sua vida!</h2>
        <h3>Confira também seu Instagram ou Entre em contato pelo WhatsApp para conhecer sua consultoria esportiva</h3>
        <div className="cta-buttons">
          <a href="https://wa.me/559999999999" target="_blank" rel="noopener noreferrer">
            <button className="whatsapp-btn">WhatsApp</button>
          </a>
          <a href="https://www.instagram.com/seu_instagram" target="_blank" rel="noopener noreferrer">
            <button className="instagram-btn">Instagram</button>
          </a>
          <a href="https://kiwify.com.br/seu-produto" target="_blank" rel="noopener noreferrer">
            <button className="kiwify-btn">Adquira o eBook</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
