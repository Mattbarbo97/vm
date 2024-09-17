import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Guia de Emagrecimento e Nutrição</h1>
        <p>Transforme sua vida com ciência e saúde em um futuro iluminado por neon.</p>
        <div className="cta-buttons">
          <a href="https://wa.me/559999999999" target="_blank" rel="noopener noreferrer">
            <button className="whatsapp-btn">WhatsApp</button>
          </a>
          <a href="https://www.instagram.com/seu_instagram" target="_blank" rel="noopener noreferrer">
            <button className="instagram-btn">Instagram</button>
          </a>
          <a href="https://kiwify.com.br/seu-produto" target="_blank" rel="noopener noreferrer">
            <button className="kiwify-btn">Kiwify</button>
          </a>
        </div>
      </section>

      {/* Nova Seção com Imagens Inspiradas no Estilo Blade Runner */}
      <section className="neon-section">
        <h2>Visual Futurista</h2>
        <p>Explore um design que combina ciência, saúde e tecnologia de ponta.</p>
        <div className="image-gallery">
          <img src="/path-to-image1.jpg" alt="Imagem Futurista 1" />
          <img src="/path-to-image2.jpg" alt="Imagem Futurista 2" />
          <img src="/path-to-image3.jpg" alt="Imagem Futurista 3" />
        </div>
      </section>
    </div>
  );
}

export default Home;
