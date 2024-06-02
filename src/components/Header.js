import React from 'react'

import logo from '../img/logo.png'

function Header() {
  return (
    <div className='header-container'>
      <div className='header-logo'>
        <img src={logo} alt='logo'></img>
        <a href='#'><i class="fa-brands fa-square-facebook fa-2xl" style={{color:'grey'}}></i></a>
        <a href='#'><i class="fa-brands fa-square-facebook fa-2xl" style={{color:'grey'}}></i></a>
        <a href='#'><i class="fa-brands fa-square-facebook fa-2xl" style={{color:'grey'}}></i></a>
      </div>
    </div>
  )
}

export default Header