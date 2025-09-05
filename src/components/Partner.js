import React from 'react'

import logo1 from '../img/logo1.jpg'
import emiaLogo from '../img/emia.jpg'
import mzpn from '../img/mzpn.jpg'
import pzpn from '../img/pzpn.png'

function Partner() {
  return (
    <div className='partner-container'>
      <h1>Partnerzy</h1>

      <div className='partner-logo'>
        <img src={logo1} alt='logo1'></img>
        <img src={emiaLogo} alt='logo1'></img>
        <img src={pzpn} alt='logo1'></img>
        <img src={mzpn} alt='logo1'></img>
      

      </div>

    </div>
  )
}

export default Partner