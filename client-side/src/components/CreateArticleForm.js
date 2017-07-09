import React from 'react'
import Field from './Field'

function handleSubmit(event, onCreate){
  event.preventDefault()
  const form = event.target
  const title = form.elements['title'].value
  const by = form.elements['by'].value
  onCreate({ title, by })
}

export default function CreateArticleForm({
  onCreate
}){
  return(
    <form onSubmit={ (event) => handleSubmit(event, onCreate) }>
      <Field label='Title' name='title'/>
      <Field label='By' name='by'/>
      <button 
        type='submit' 
      >
        Submit Article
      </button>
    </form>
  )
}