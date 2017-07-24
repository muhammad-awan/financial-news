import React from 'react'
import Field from './Field'

function handleSubmit(event, onCreate){
  event.preventDefault()
  const form = event.target
  const title = form.elements['title'].value
  const url = form.elements['url'].value
  onCreate({ title, url })
}

export default function CreateArticleForm({
  onCreate
}){
  return(
    <form onSubmit={ (event) => handleSubmit(event, onCreate) }>
      <Field label='Title' name='title'/>
      <Field label='Url' name='url'/>
      <button type='submit' >Submit Article</button>
    </form>
  )
}