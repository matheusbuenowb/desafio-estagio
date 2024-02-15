// src/components/MissionDetails.js

import React from 'react';

function MissionDetails({mission}) {
  return (
    <div className="character-details">
      <div className='character-img'>
          <img src={mission.image} alt={mission.name} />
      </div>
      <div className="character-info">
      <h2>{mission.name}</h2>
      <p><strong>Dificuldade:</strong> {mission.difficulty}</p>
      <p><strong>Status:</strong> {mission.status}</p>
      <p><strong>Descrição:</strong> {mission.description}</p>
      </div>
    </div>
  );
}

export default MissionDetails;
