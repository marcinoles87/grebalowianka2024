import React from 'react'

import main1 from '../img/main.jpg'
import wydarzenie1 from '../img/wydarzenie1.jpg'
import wydarzenie2 from '../img/wydarzenie2.jpg'

function Main() {
  return (
    <div className='main-container'>
      <div className='first'>
      <div className='main-item'>
        <a href=''>Wysokie 4 miejsce na koniec sezonu</a>
        <img src={wydarzenie1} alt='main'></img>
      </div>

      <div className='main-item'>
        <a href=''>70-lecie KS GREBALOWIANKI</a>
        <img src={wydarzenie2} alt='main'></img>
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