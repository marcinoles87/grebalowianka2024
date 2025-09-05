import React from 'react'

import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav-container'>
      <div className='nav-items'>
        <ul>
          <li><a href='#'>Główna</a></li>
          <Link to={'/seniorzy'} className='navbar-link'>Seniorzy</Link>
          <Link  className='navbar-link'>Akademia</Link>
          <li><a href='#galeria'>Galeria</a></li>
          <Link to={'/rozgrywki'} className='navbar-link'>Rozgrywki</Link>
          <li><a href='#contact'>Kontakt</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav