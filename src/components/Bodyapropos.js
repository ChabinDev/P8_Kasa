import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


const Bodyapropos = () => {
  return (
    <div className='preferences'>
        <Accordion defaultActiveKey={['']} alwaysOpen>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Fiabilité<FontAwesomeIcon icon={faChevronUp} /></Accordion.Header>
                  <Accordion.Body className='section-label'>
                  Les annonces postées sur Kasa garantissent une fiabilité totale. 
                  Les photos sont conformes aux logements, et toutes les informations sont 
                  régulièrement vérifiées par nos équipes.
                  </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>Respect<FontAwesomeIcon icon={faChevronUp} /></Accordion.Header>
                  <Accordion.Body className='section-label'>
                  La bienveillance fait partie des valeurs fondatrices de Kasa. 
                  Tout comportement discriminatoire ou de perturbation du voisinage 
                  entraînera une exclusion de notre plateforme.
                  </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='2'>
              <Accordion.Header>Service<FontAwesomeIcon icon={faChevronUp} /></Accordion.Header>
                  <Accordion.Body>
                  La bienveillance fait partie des valeurs fondatrices de Kasa. 
                  Tout comportement discriminatoire ou de perturbation du voisinage 
                  entraînera une exclusion de notre plateforme.
                  </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='3'>
              <Accordion.Header>Sécurité<FontAwesomeIcon icon={faChevronUp} /></Accordion.Header>
                  <Accordion.Body>
                  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes 
                  que pour les voyageurs, chaque logement correspond aux critères de 
                  sécurité établis par nos services. En laissant une note aussi bien à 
                  l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les 
                  standards sont bien respectés. Nous organisons également des ateliers 
                  sur la sécurité domestique pour nos hôtes.
                  </Accordion.Body>
            </Accordion.Item>
    </Accordion>    
        </div>
  );
}
export default Bodyapropos