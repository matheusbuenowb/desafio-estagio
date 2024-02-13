// src/components/CharacterCard.js

import '../css/CharacterCard.css'
import React from 'react';
import { Link } from 'react-router-dom';

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <h2>{character.name}</h2>
     <img src={character.image} alt={character.name} />
      <p><strong>Profissão:</strong> {character.profession}</p>
      <p>{character.description}</p>

      <Link to ={`/characters/${character.id}`}>
      <button> Detalhes do personagem</button>
      </Link>
    </div>
  );
}

export default CharacterCard;
