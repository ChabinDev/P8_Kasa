import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/img/Logo_header.png'

const Header = () => {
  return (
    <header className="content-header">
      <img src={Logo} className="header_logo" alt="Logo_header" />
      <nav className="nav-header">
        <ul className="ul-header">
          <li className="li-header">
            <NavLink
              to="/P8_Kasa"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              Accueil
            </NavLink>
          </li>
          <li className="li-header">
            <NavLink
              to="P8_Kasa/a_propos"
              className={(nav) => (nav.isActive ? 'nav-active' : '')}
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
