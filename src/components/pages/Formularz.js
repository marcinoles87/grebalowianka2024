import React, { useState } from 'react'

function Formularz() {

const [name , setName] = useState('');
const [email , setEmail] = useState('');
const [message , setMessage] = useState('');

const sendEmail = () =>{

}

console.log(name)
  return (
    <div className='formularz-container'>
      <div className='form'>
        <form action="send" autoComplete='off'>

          <h1>Wyślij nam zapytanie </h1>

          <label htmlFor="name">Name:</label>
          <input id='name' type="text" placeholder='name' autoComplete='off' onChange={ (e) => { setName(e.target.value)}}/>

          <label htmlFor="email">Email:</label>
          <input id='email' type="email" placeholder='email' autoComplete='off' onChange={ (e) => { setEmail(e.target.value)}}/>

          <label htmlFor="message">Message: </label>
          <textarea id='message' type="text" placeholder='message' autoComplete='off' onChange={ (e) => { setMessage(e.target.value)}}/>

        </form>

        <button onClick={sendEmail}>Wyślij</button>
      </div>

    </div>
  )
}

export default Formularz