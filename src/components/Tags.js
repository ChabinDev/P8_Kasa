import React from 'react'
import data from '../data/logements.json'
import { useParams } from 'react-router-dom'

const Tags = () => {

    const { id } = useParams();
    const logement = data.find(logement => logement.id === id);
  return (
    <div className='content-tag'>
        { logement.tags.map(( tag, index) => (
            <span key={index} className='tag'>{tag}</span>
        ))}
    </div>
  )
}

export default Tags