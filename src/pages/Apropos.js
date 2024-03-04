import React from 'react'
import Bodyapropos from '../components/Bodyapropos'
import Banner from '../components/Banner'
import imageApropos from '../assets/img/kalen-emsley.png'

const Apropos = () => {
  return (
    <div className='content-Apropos'>
        <Banner image={imageApropos} className='imgApropos'  alt='ImgApropos' />
        <Bodyapropos />
    </div>
  )
}

export default Apropos
