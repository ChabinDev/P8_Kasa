import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const Rating = ({ rating }) => {

    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

  return (
    <div className='rating'>
        {Array.from({ length: 5}, (_, index) => (
            <span key={index} className='stars_settings'>
                {index < filledStars ? (<FontAwesomeIcon icon={faStar} className='starFilled' />) : index === filledStars && hasHalfStar
                ? (<FontAwesomeIcon icon={faStarHalfAlt} />) : (<FontAwesomeIcon icon={faStar} className='starEmpty' />)}
            </span>
        ))}
    </div>
  );
}

export default Rating