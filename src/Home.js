// src/Home.js

import React from 'react';
import './css/style.css';
import { Link } from 'react-router-dom';

function Home() {
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
    </div>
  );
}

export default Home;
