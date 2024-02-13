// Footer.js

import React from 'react';
import '../css/Footer.css'; // Importe o arquivo CSS para estilizar o rodapé, se necessário

function Footer({show}) {
  return (
    <footer className={show ? 'footer show' : 'footer hide'}>
    <div className="footer-column">
      <h3>Contatos</h3>
      <ul>
        <li>GitHub: matheusbuenowb</li>
        <li>Telefone: (43) 99986-2205</li>
        <li>Linkedin: Matheus Bueno Faria</li>
        {/* Adicione mais informações de contato, se desejar */}
      </ul>
    </div>
    <div className="footer-column">
      <h3>Outros RPGs</h3>
      <ul>
        <li>Dungeons & Dragons</li>
        <li>Pathfinder</li>
        <li>Call of Cthulhu</li>
        {/* Adicione mais jogos de RPG, se desejar */}
      </ul>
    </div>
    <div className="footer-column">
      <h3>Política</h3>
      <ul>
        <li>Cookies</li>
        <li>Privacidade</li>
        </ul>
    </div>
  </footer>
  );
}

export default Footer;
