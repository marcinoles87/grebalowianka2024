import React from 'react'

import gre_m1 from './imgMecze/gre_1.jpg'


function Galeria() {

    const gal =  [
        {
            img1: gre_m1,
            text:'Grębałowianka-Prądniczanka'
          
        } ,

        {
            img1: gre_m1,
            text:'Grębałowianka-Proszowianka'
          
        } ,

        {
            img1: gre_m1,
            text:'Grębałowianka-Pogoń Miechów'
          
        }
    ]
  return (
    <div>
        <div className='galeria-container'>
            <h1>Galeria</h1>
            <div className='galeria-items' id='galeria'>
               
                {gal.map( (item ,index) => {
                    return(
                        <div className='galeria-item' key={index}>
                            <img src={item.img1} alt=""></img>
                            <p>{item.text}</p>
                            </div>
                        
                    )
                })}
                
                    
                
            </div>
        </div>
    </div>
  )
}

export default Galeria