import React from 'react'

import gre_m1 from './imgMecze/gre_1.jpg'


function Galeria() {

    const gal =  [
        {
            img1: gre_m1,
          
        } ,

        {
            img1: gre_m1,
          
        } ,

        {
            img1: gre_m1,
          
        }
    ]
  return (
    <div>
        <div className='galeria-container'>
        <h1>Galeria</h1>
            <div className='galeria-items'>
               
                {gal.map( (item ,index) => {
                    return(
                        <div className='galeria-item' key={index}>
                            <img src={item.img1} alt=""></img>
                            <p>Grebalowianka-Gdów</p>
                            </div>
                        
                    )
                })}
                
                    
                
            </div>
        </div>
    </div>
  )
}

export default Galeria