// src/components/CharacterCard.js

import React from 'react';

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p><strong>Profissão:</strong> {character.profession}</p>
      <p>{character.description}</p>
    </div>
  );
}

export default CharacterCard;
