import React, { useState } from 'react'
import Caroussel from '../components/Caroussel'
import { useParams } from 'react-router-dom'
import data from '../data/logements.json'
import LogementInfos from '../components/LogementInfos'
import Description from '../components/Description'
import Equipement from '../components/Equipements'

const Logement = () => {

  // Récupération de l'ID du logement à partir des paramètres de l'url
  const { id } = useParams();

   // Recherche du logement correspondant à l'ID spécifié
  const logement = data.find(logement => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const handleDescriptionClick = () => {
    console.log('Description Cliqué');
    <Description style={{paddingbottom: '200px'}} />
  }

  const handleEquipmentClick = () => {
    console.log('Equipement Cliqué');
  }

  return (
    <div className='content-logement'>
          <Caroussel id={logement.id} images={logement.pictures} />
          <div className='content-client'>
          <LogementInfos id={logement.id} />
          <div className='content-desc-equip'>
            <Description className='collapse-logement collapse' name='Description' content={logement.description} onClick={handleDescriptionClick} />
            <Equipement className='collapse-logement collapse' name='Equipements' content={logement.equipments.map((equipment, index) => (
              <ul key={index}>{equipment}</ul>
            ))} />
            onClick={handleEquipmentClick}
          </div>
          </div> 
    </div>
  )
}

export default Logement