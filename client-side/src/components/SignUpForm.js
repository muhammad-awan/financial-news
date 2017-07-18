import React from 'react'
import Field from './Field'

function submitSignUp(event, onSignUp){
  event.preventDefault()
  const form = event.target
  const email = form.elements['email'].value
  const password = form.elements['password'].value
  onSignUp({ email, password })
}

export default function SignUpForm({
  onSignUp
}){
  return(
    <form onSubmit={ (event) => submitSignUp(event, onSignUp) } >
      <Field label= 'Email' name= 'email' />
      <Field label= 'Password' name= 'password' type= 'password' />
      <button 
        type='submit' 
      >
        Sign Up
      </button>
    </form>
  )
}