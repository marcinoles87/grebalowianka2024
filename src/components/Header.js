import React from 'react'

import logo from '../img/logo.png'

function Header() {
  return (
    <div className='header-container'>
      <div className='header-logo'>
        <img src={logo} alt='logo'></img>
        <a href='#'>Facebook</a>
        <a href='#'>Futmal</a>
        <a href='#'>Instagram</a>
      </div>
    </div>
  )
}

export default Header