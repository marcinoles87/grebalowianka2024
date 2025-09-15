import React from 'react'

function Formularz() {
  return (
    <div className='formularz-container'>
      <div className='form'>
        <form action="send">

          <h1>Wyślij nam zapytanie </h1>

          <label for="name">Name:</label>
          <input type="text" placeholder='name'/>

          <label for="email">Email:</label>
          <input type="email" placeholder='email'/>

          <label for="message">Message: </label>
          <input type="text" placeholder='message'/>

        </form>
      </div>

    </div>
  )
}

export default Formularz