import React from 'react'
import { Link } from 'react-router-dom'

export default function Article({
  _id,
  title,
  url
}){
  return(
    <div>
      <Link to={ `/articles/${_id}` }>
        <h2>{ title }</h2>
      </Link>
      <small>Source: { url }</small>
    </div>
  )
}