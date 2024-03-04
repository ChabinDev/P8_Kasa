import React from 'react'
import data from '../data/logements.json'
import { useParams } from 'react-router-dom'
import Collapse from './Collapse';


const Description = () => {
  
  const { id } = useParams();
  const logement = data.find(logement => logement.id === id);
  
  return (
      
    <div className='container-description'>
            <Collapse  className='collapse-logement' name='Description' content={logement.description} />
    </div>
  )
}
export default Description