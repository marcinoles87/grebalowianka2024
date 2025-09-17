import React, { useState } from 'react'

function Formularz() {

const [name , setName] = useState('');
const [email , setEmail] = useState('');
const [message , setMessage] = useState('');
const [placholderError , setPlaceholder] = useState(false)


const sendEmail = () =>{

  const names = document.querySelector('#name')
  const emails = document.querySelector('#email')
  const messages = document.querySelector('#message')


if(name.length < 3 || email.length < 2 || message.length < 1) {
  alert(`Imie zbyt krótkie , prosimy wpisac ponownie`)
  setPlaceholder(true)
  names.classList.toggle('error')
  emails.classList.toggle('error')
  messages.classList.toggle('error')
  names.value = '';
  emails.value = '';
  messages.value = '';
}else{

  alert(`Hello ${name} , thanks for your message , We feedback on ${email} as soon as possible ! team Greba . Wiadomość wysłana`)
  setPlaceholder(false)

  names.value = '';
  emails.value = '';
  messages.value = '';
  
}

}

console.log(name)
  return (
    <div className='formularz-container'>
      <div className='form'>
        <form action="send" autoComplete='off'>

          <h1>Wyślij nam zapytanie </h1>

          <label htmlFor="name">Name:</label>
          <input id='name' type="text" placeholder={placholderError ? 'name is to short !' : 'name'} autoComplete='off' onChange={ (e) => { setName(e.target.value)}}/>

          <label htmlFor="email">Email:</label>
          <input id='email' type="email" placeholder={placholderError ? 'email is to short !' : 'email'} autoComplete='off' onChange={ (e) => { setEmail(e.target.value)}}/>

          <label htmlFor="message">Message: </label>
          <textarea id='message' type="text" placeholder={placholderError ? 'message is to short !' : 'message'} autoComplete='off' onChange={ (e) => { setMessage(e.target.value)}}/>

        </form>

        <button onClick={sendEmail}>Wyślij</button>
      </div>

    </div>
  )
}

export default Formularz