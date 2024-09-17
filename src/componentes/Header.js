import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../imagens/logo.jpeg'; // Caminho para a sua imagem de logo

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Victor Mendes" className="logo" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

