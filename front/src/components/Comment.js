import React from 'react'

export default function Article({
  text,
  commentBy,
  comment_create_date
}){
  return(
    <div>
        <p>{ text }</p>
        <h3>{ commentBy }</h3>
        <small>{ comment_create_date }</small>
    </div>
  )
}