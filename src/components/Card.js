import React from 'react'
import { NavLink } from 'react-router-dom'

const Bodyhome = ({ logementData }) => {


  // Utiliser les données récupérées dans votre composant
  return (
    <div className='gallery-body'>
      {logementData.map(logement => (
                <NavLink key={logement.id} to={`/Logement/${logement.id}`} className='content-h3'>
                <img className='itemCover' src={logement.cover} alt="Cover"/>
                <h3>{logement.location}</h3>
                </NavLink>
            ))
            }
    </div>
  );
};

export default Bodyhome