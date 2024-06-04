import React from 'react'

import main1 from '../img/main.jpg'

function Main() {
  return (
    <div className='main-container'>
      <div className='first'>
      <div className='main-item'>
        <a href=''>Greba - Wieczysta</a>
        <img src={main1} alt='main'></img>
      </div>

      <div className='main-item'>
        <a href=''>Dzien dziecka w grebalowie</a>
        <img src={main1} alt='main'></img>
      </div>
      </div>
     
        <div className='second'>
        <div className='main-item2'>
      <a href=''>Nowe stroje</a>
        <img src={main1} alt='main'></img>
      </div>

      <div className='main-item2'>
      <a href=''>Ciekawostki okolofutbolowe</a>
        <img src={main1} alt='main'></img>
      </div>

      <div className='main-item2'>
      <a href=''>Kadra</a>
        <img src={main1} alt='main'></img>
      </div>
        </div>
     
    </div>
  )
}

export default Main