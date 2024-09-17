import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Contato from './paginas/Contato';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
