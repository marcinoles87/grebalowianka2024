import React from 'react'

import logo from '../img/logo.png'

function Header() {
  return (
    <div className='header-container'>
      <div className='header-logo'>
        <img src={logo} alt='logo'></img>
        <a href='#'><i className="fa-brands fa-square-facebook fa-2xl" style={{color:'grey'}}></i></a>
        <a href='#'><i className="fab fa-instagram fa-2xl" style={{color:'grey'}}></i></a>
        <a href='#'><i className="fab -brands fa-tiktok fa-2xl" style={{color:'grey'}}></i></a>
      </div>
    </div>
  )
}

export default Header