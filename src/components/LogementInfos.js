import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/logements.json'
import TitleLogements from './TitleLogements'
import Rating from './Rating'
import Tags from './Tags'


//
const LogementInfos = () => {

  //récupération de l'ID du logement à partir des paramètres de l'url
  const { id } = useParams();

  // Recherche du logement correspondant à l'ID spécifié
  const logement = data.find(logement => logement.id === id);

  return (
    <div className='description-content'>
      {/* Affichage du Caroussel avec les images du logement */}
        <div className='Title-logement'>
              <TitleLogements title={logement.title} subTitle={logement.location} />
              <Tags />
        </div>
        <div className='carousel-title'>
            <div className='carousel-host'>
                <h3 className='host-h3'>{logement.host.name}</h3>
                <img className='host' src={logement.host.picture} alt='Logement interieur'/>
            </div>
            <Rating rating={logement.rating} />
        </div>
                  
    </div>
  )
}

export default LogementInfos