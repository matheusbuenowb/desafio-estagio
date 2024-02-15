// src/pages/MissionDetailsPage.js

import React from 'react';
import MissionDetails from '../components/MissionDetails';
import { useParams } from 'react-router-dom';
import missionsData from '../data/missionData';
import '../css/style.css';

function MissionDetailsPage() {
  const { id } = useParams(); // Obtém o ID do parâmetro da URL
  const mission = missionsData.find(char => char.id === parseInt(id)); // Encontra o personagem pelo ID

  return (
    <div className="mission-list">
      
      <h1 className='titulo'>Detalhes da missão</h1>
      {mission ? <MissionDetails mission={mission} /> : <p>Personagem não encontrado</p>}

      
    </div>
  );
}

export default MissionDetailsPage;
