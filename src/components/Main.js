import React from 'react'

import main1 from '../img/main.jpg'
import wydarzenie1 from '../img/wydarzenie1.jpg'
import wydarzenie2 from '../img/wydarzenie2.jpg'
import wydarzenie3 from '../img/wydarzenie3.png'

function Main() {
  return (
    <div className='main-container'>
      <div className='first'>
      <div className='main-item'>
        <a href='' className='main-item-link'>Wysokie 4 miejsce na koniec sezonu</a>
        <img src={wydarzenie1} alt='main' className='main-item-img'></img>
      </div>

      <div className='main-item'>
        <a href=''  className='main-item-link'>70-lecie KS GREBALOWIANKI</a>
        <img src={wydarzenie2} alt='main' className='main-item-img'></img>
      </div>
      </div>
     
        <div className='second'>
        <div className='main-item2'>
      <a href=''  className='main-item-link'>Nowe stroje</a>
        <img src={wydarzenie3} alt='main' className='main-item-img'></img>
      </div>

      <div className='main-item2'>
      <a href=''  className='main-item-link'>Ciekawostki okolofutbolowe</a>
        <img src={main1} alt='main' className='main-item-img'></img>
      </div>

      <div className='main-item2'>
      <a href=''  className='main-item-link'>Kadra</a>
        <img src={main1} alt='main' className='main-item-img'></img>
      </div>
        </div>
     
    </div>
  )
}

export default Main