import React from 'react'
import data from '../data/logements.json'
import { useParams } from 'react-router-dom';
import Collapse from './Collapse';

const Equipements = () => {

  const { id } = useParams();
  const logement = data.find(logement => logement.id === id);


  return (
      <Collapse className='collapse-logement' name='Equipements' content={logement.equipments.map((equipment, index) => (
        <ul key={index}>{equipment}</ul>
      ))} />        
  );
}

export default Equipements
