import React from 'react'
import Logo from '../assets/img/Logo_footer.png'

const Footer = () => {
   const year = new Date()

  return (
    <footer className='content-footer'>
        <img src={Logo} className='footer_logo'  alt='Logo_Footer' />
        <p className='p-footer'>©️ {year.getFullYear()} Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer