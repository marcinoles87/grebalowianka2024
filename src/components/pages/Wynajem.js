import React from 'react'

import małe from '/web frontend/projekty React/grebalowianka2024/src/img/małeBoisko.webp'
import duze from '/web frontend/projekty React/grebalowianka2024/src/img/duzeBoisko.jpg'
import kort from '/web frontend/projekty React/grebalowianka2024/src/img/kort.webp'

function Wynajem() {

  const handleResize = () =>{
    const element = document.querySelector('zdj')
    const info = document.querySelector('info')
    element.classList.toggle('resize')
    info.classList.toggle('hidden')
  }
  return (
    <div className='wynajem-container'>
      <div className='wynajem-header'>
        <h1>Wynajem obiektów</h1>
      </div>

      <div class="boiska">

      <div class="male">

        <div class="zdj">
          <h2>Małe boisko</h2>
          <img src={małe} alt='male' onClick={handleResize}></img>
        </div>

        <div class="info">
          <p>Szatnia do przebierania</p>
          <p>Prysznice</p>
          <p>Wymiar boiska : 80x40</p>
          <p>90min - 500zl</p>
          <p>60min - 300zl</p>
        </div>
        
      </div>

      <div class="male">

        <div class="zdj">
          <h2>Duże boisko</h2>
          <img src={duze} alt='male'></img>
        </div>
        
        <div class="info">
          <p>Szatnia do przebierania</p>
          <p>Prysznice</p>
          <p>Wymiar boiska : 100x54</p>
          <p>90min - 700zl</p>
          <p>60min - 400zl</p>
        </div>
        
      </div>

      <div class="male">

        <div class="zdj">
          <h2>Kort tenisowy</h2>
          <img src={kort} alt='male'></img>
        </div>
        
        <div class="info">
          <p>Wymiar boiska : 30x20</p>
          <p>90min - 200zl</p>
          <p>60min - 100zl</p>
        </div>
        
      </div>
        
      {/* <div class="male">
         <h2>Duże boisko</h2>
        <img src={duze} alt='male'></img>
         <div class="info">
          <p>Szatnia do przebierania</p>
          <p>Prysznice</p>
          <p>Wymiar boiska : 80x40</p>
          <p>90min - 500zl</p>
          <p>60min - 300zl</p>
        </div>
        
      </div>
       
      <div class="male">
         <h2>Kort tenisowy</h2>
        <img src={kort} alt="kort"></img>
        <p>90min - 200zl <br></br>
          60min -100zl
        </p>
        
      </div> */}
       

      </div>
    </div>
  )
}

export default Wynajem