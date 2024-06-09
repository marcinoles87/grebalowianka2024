import React from 'react'

import s1 from '../imgMecze/gre_1.jpg'

function Seniorzy() {

  const team = [
    {
      name : 'xxxxx' ,
      date : '1999-20-05' ,
      position : 'bramkarz' ,
      profil : s1
    } ,

    {
      name : 'xxxxx' ,
      date : '1999-20-05' ,
      position : 'bramkarz' ,
      profil : s1
    },

    {
      name : 'xxxxx' ,
      date : '1999-20-05' ,
      position : 'bramkarz' ,
      profil : s1
    },

    {
      name : 'xxxxx' ,
      date : '1999-20-05' ,
      position : 'bramkarz' ,
      profil : s1
    },

    {
      name : 'xxxxx' ,
      date : '1999-20-05' ,
      position : 'bramkarz' ,
      profil : s1
    },
  ]
  return (
    <div className='seniorzy-container'>
      <h1>I Drużyna KS Grębałowianka Kraków</h1>
      <div className='seniorzy-kadra'>
        {team.map( (item , index) => {
          return(
            <>
            <h3>{item.name}</h3>
            <h3>{item.date}</h3>
            <h3>{item.position}</h3>

            </>
          )
        })}
      </div>
    </div>
  )
}

export default Seniorzy