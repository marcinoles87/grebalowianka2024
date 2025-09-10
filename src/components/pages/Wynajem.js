import React from 'react'

import małe from '/web frontend/projekty React/grebalowianka2024/src/img/małeBoisko.webp'
import duze from '/web frontend/projekty React/grebalowianka2024/src/img/duzeBoisko.jpg'

function Wynajem() {
  return (
    <div className='wynajem-container'>
      <div className='wynajem-header'>
        <h1>Wynajem obiektów</h1>
      </div>

      <div class="boiska">

        <h2>Małe boisko</h2>
        <img src={małe} alt='male'></img>

        <h2>Duże boisko</h2>
        <img src={duze} alt='male'></img>

        <h2>Kort tenisowy</h2>
        <img src="" alt="kort"></img>

      </div>
    </div>
  )
}

export default Wynajem