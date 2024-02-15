// src/pages/CharactersPage.js

import React from 'react';
import witcherCharacters from '../data/witcherCharacters'; // Importe a lista de personagens
import CharacterCard from '../components/CharacterCard'; // Importe o componente de cartão de personagem
import "../css/style.css"
//import { useEffect, useState } from 'react';
//import Footer from '../components/Footer';

function CharactersPage() {

  return (
    <div>
      <h1 className='titulo'>Lista de Personagens</h1>
      <div className="character-list">
        {witcherCharacters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default CharactersPage;
