// src/pages/CharacterDetailsPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetails from '../components/CharacterDetails';
import witcherCharacters from '../data/witcherCharacters';
import '../css/style.css'
import Footer from '../components/Footer';

const CharacterDetailsPage = () => {
  const { id } = useParams(); // Obtém o ID do parâmetro da URL
  const character = witcherCharacters.find(char => char.id === parseInt(id)); // Encontra o personagem pelo ID

  return (
    <div className="character-list">
      
      <h1>Detalhes do Personagem</h1>
      {character ? <CharacterDetails character={character} /> : <p>Personagem não encontrado</p>}

      <Footer/>
    </div>
  );
};
export default CharacterDetailsPage;
