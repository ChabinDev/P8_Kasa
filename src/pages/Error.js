import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className='content-error'>
      <h1 className='h1-error'>404</h1>
    <div className='content-error-first'>
      <h2 className='h2-error'>Oups! La page que vous demandez n'existe pas.</h2>
    </div>
      <NavLink to="/P8_Kasa/">
          <p className='p-error'>Retourner sur la page d'accueil</p>
      </NavLink>
      </div>
  )
}

export default Error
