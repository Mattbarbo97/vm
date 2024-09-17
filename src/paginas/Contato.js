import React from 'react';

function Contato() {
  return (
    <div className="contato">
      <h2>Entre em Contato</h2>
      <p>Conecte-se com Victor Mendes para saber mais sobre os serviços oferecidos.</p>
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
    </div>
  );
}

export default Contato;
