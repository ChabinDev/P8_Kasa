import React from 'react'
import Caroussel from '../components/Caroussel'
import { useParams } from 'react-router-dom'
import data from '../data/logements.json'
import LogementInfos from '../components/LogementInfos'
import Description from '../components/Description'
import Equipement from '../components/Equipements'
import Error from '../pages/Error'

const Logement = () => {
  // Récupération de l'ID du logement à partir des paramètres de l'url
  const { id } = useParams()

  // Recherche du logement correspondant à l'ID spécifié
  const logement = data.find((logement) => logement.id === id)

  if (!logement) {
    return <Error />
  }

  return (
    <div className="content-logement">
      <Caroussel id={logement.id} images={logement.pictures} />
      <div className="content-client">
        <LogementInfos id={logement.id} />
        <div className="content-desc-equip">
          <Description
            className="collapse-logement collapse"
            name="Description"
            content={logement.description}
          />
          <Equipement
            className="collapse-logement collapse"
            name="Equipements"
            content={logement.equipments.map((equipment, index) => (
              <ul key={index}>{equipment}</ul>
            ))}
          />
        </div>
      </div>
    </div>
  )
}

export default Logement
