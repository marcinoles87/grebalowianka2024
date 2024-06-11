import React from 'react'

function Mecze() {

    const matchDay = [
        {
            goście :'' ,
            gospodarze : '' ,
            godzinaMeczu : '' ,
            wynik : '' ,


        }
    ]


  return (
    <div className='mecze-container'>
            {
                matchDay.map( (item , index) => {
                    return(
                        <div className='matchDay' key={index}>
                                <p>{item.gospodarze} vs {item.goście}</p> 
                                <p> {item.godzinaMeczu}</p>
                                <p> {item.wynik}</p>
                            </div>
                        
                    )
                })
            }
        </div>
  )
}

export default Mecze