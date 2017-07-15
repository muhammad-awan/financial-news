import React from 'react'
import { Link } from 'react-router-dom'

export default function Article({
  _id,
  title,
  by,
  comments
}){
  return(
    <div>
      <Link to={ `/articles/${_id}` }>
        <h2>{ title }</h2>
      </Link>
      <small>Written by: { by }</small>
      <p>Comments: {comments}</p>
    </div>
  )
}