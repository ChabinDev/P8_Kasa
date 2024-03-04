import React from 'react'

const Banner = ({ image, h1, className, alt }) => {
    
  return (
        <div className={className}>
            <img src={image} alt={alt} />
            <h1 className='section-body-p'>{h1}</h1>
        </div>
  )
}

export default Banner