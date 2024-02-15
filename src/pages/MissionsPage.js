

import React from 'react';
import MissionList from '../components/MissionList'
import missionsData from '../data/missionData';
//import { Link } from 'react-router-dom';
import "../css/style.css"

function MissionsPage() {
  return (
    
       <div className="container-inicial">
        {missionsData.map(mission => (
          <MissionList key={mission.id} mission={mission} />
        ))}
      </div>
  );
}

export default MissionsPage;
