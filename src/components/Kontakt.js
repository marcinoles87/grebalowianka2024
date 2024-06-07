import React from 'react'

import logo from '../img/logo.png'

function Kontakt() {
  return (
    <div className='contact-container'>
        <h1>Kontakt</h1>
        <div className='contact-item'>

            <div className='contact-item-adres'>
                <p><b>Klub Sportowy Grębałowianka Kraków</b></p>
                <p>ul.Grębałowska 30 </p>
                <p> 31-720 Kraków</p>
            </div>
            
            <img src={logo} alt='logo'></img>
            <h1><span style={{color:'#7FFF00'}}><b>#70Lat</b></span>Grębałowianki</h1>
        </div>
    </div>
  )
}

export default Kontakt