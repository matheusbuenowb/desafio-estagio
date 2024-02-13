// src/Home.js

import React from 'react';
import './css/style.css';
import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import Footer from './components/Footer';




function Home() {

  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Verifica se a posição vertical atual da barra de rolagem é maior ou igual à altura total da página
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // Se estiver no final da página, mostra o rodapé
        setShowFooter(true);
      } else {
        // Caso contrário, oculta o rodapé
        setShowFooter(false);
      }
    }

    // Adiciona um ouvinte de evento de rolagem ao carregar o componente
    window.addEventListener('scroll', handleScroll);

    // Remove o ouvinte de evento de rolagem ao descarregar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  return (
    <div className='container-inicial'>
      <h1 >O Artesão das Ilusões</h1>
      <p>Bem-vindo ao mundo the Witcher! Escolha uma das opções: </p>
      
      <Link to="/characters">
          <button > Personagens</button>
      </Link>
      <Link to ="/missions">
          <button> Missões</button>
      </Link>
      <Footer show ={showFooter}/>
    </div>
    
  );
}

export default Home;
