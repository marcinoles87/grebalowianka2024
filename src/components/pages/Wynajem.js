import React from 'react'

import małe from '/web frontend/projekty React/grebalowianka2024/src/img/małeBoisko.webp'
import duze from '/web frontend/projekty React/grebalowianka2024/src/img/duzeBoisko.jpg'
import kort from '/web frontend/projekty React/grebalowianka2024/src/img/kort.webp'

function Wynajem() {
  return (
    <div className='wynajem-container'>
      <div className='wynajem-header'>
        <h1>Wynajem obiektów</h1>
      </div>

      <div class="boiska">

      <div class="male">
        <h2>Małe boisko</h2>
        <img src={małe} alt='male'></img>
        <p>90min - 500zl</p>
        <p>60min - 300zl</p>
      </div>
        
      <div class="male">
         <h2>Duże boisko</h2>
        <img src={duze} alt='male'></img>
        <p>90min - 700zl</p>
        <p>60min - 400zl</p>
      </div>
       
      <div class="male">
         <h2>Kort tenisowy</h2>
        <img src={kort} alt="kort"></img>
        <p>90min - 200zl <br></br>
          60min -100zl
        </p>
        
      </div>
       

      </div>
    </div>
  )
}

export default Wynajem