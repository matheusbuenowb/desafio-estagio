import React from 'react';
import '../css/CharacterDetails.css';

const CharacterDetails = ({ character }) => {
  /*return (
    <div className="character-details">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p><strong>Profissão:</strong> {character.profession}</p>
      <p><strong>Descrição:</strong> {character.description}</p>
      <p><strong>Idade:</strong> {character.idade}</p>
      <p><strong>Raça:</strong> {character.race}</p>
      <p><strong>Local de Origem:</strong> {character.origin}</p>
      <p><strong>Aparência Física:</strong> {character.appearance}</p>
      <p><strong>Armas e Habilidades:</strong> {character.weaponsAndAbilities}</p>
      <p><strong>Companheiros:</strong> {character.companions}</p>
      <p><strong>História Pessoal:</strong> {character.personalHistory}</p>
    </div>
  );*/

  return (
    <div className="character-details">
      <div className="character-image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="character-info">
        <h2>{character.name}</h2>
        <p><strong>Profissão:</strong> {character.profession}</p>
        <p><strong>Descrição:</strong> {character.description}</p>
        <p><strong>Idade:</strong> {character.idade}</p>
        <p><strong>Raça:</strong> {character.race}</p>
        <p><strong>Local de Origem:</strong> {character.origin}</p>
        <p><strong>Aparência Física:</strong> {character.appearance}</p>
        <p><strong>Armas e Habilidades:</strong> {character.weaponsAndAbilities}</p>
        <p><strong>Companheiros:</strong> {character.companions}</p>
        <p><strong>História Pessoal:</strong> {character.personalHistory}</p>
      </div>
    </div>
  );
};

export default CharacterDetails;
