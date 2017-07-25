import React from 'react'
import { Link } from 'react-router-dom'

export default function Article({
  _id,
  title,
  url,
  articleBy,
  article_create_date
}){
  return(
    <div>
      <Link to={ `/articles/${_id}` }>
        <h2>{ title }</h2>
      </Link>
      <h3>Source: <a href={`${url}`}>{ url }</a></h3>
    </div>
  )
}