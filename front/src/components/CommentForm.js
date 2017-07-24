import React from 'react'
import Field from './Field'

function handleSubmit(event, onCreate){
  event.preventDefault()
  const form = event.target
  const text = form.elements['text'].value
  onCreate({ text })
}

export default function CommentForm({
  onCreate
}){
  return(
    <form onSubmit={ (event) => handleSubmit(event, onCreate) }>
      <Field label='Comment' name='text'/>
      <button type='submit'>Submit</button>
    </form>
  )
}