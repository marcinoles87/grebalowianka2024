import React from 'react'

import logo from '../img/logo.png'

function Kontakt() {
  return (
    <div className='contact-container' id='contact'>
      
        <div className='contact-item'>

            <div className='contact-item-adres'>
                <p><b>Klub Sportowy Grębałowianka Kraków</b></p>
                <p>ul.Grębałowska 30 </p>
                <p> 31-720 Kraków</p>
            </div>
            
            <img src={logo} alt='logo'></img>
            <h1><span style={{color:'orange'}}><b>#70LAT</b></span><span style={{color:'blue'}}>GRĘBAŁOWIANKI</span></h1>
        </div>
    </div>
  )
}

export default Kontakt