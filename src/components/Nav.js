import React from 'react'

import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav-container'>
      <div className='nav-items'>
        <ul>
          <li><a href='#'>Główna</a></li>
          <li><a href='#'><Link to={'/seniorzy'} className='navbar-link'>Seniorzy</Link></a></li>
          <li><a href='https://www.akademiagrebalowianka.pl/'>Akademia</a></li>
          <li><a href='#'>Galeria</a></li>
          <li><a href='#'><Link to={'/rozgrywki'} className='navbar-link'>Rozgrywki</Link></a></li>
          <li><a href='#contact'>Kontakt</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav