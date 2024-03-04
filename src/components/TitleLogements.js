import React from 'react'

const TitleLogements = ({ title, subTitle}) => {
  return (
    <div className='title-content'>
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
    </div>
  )
}

export default TitleLogements