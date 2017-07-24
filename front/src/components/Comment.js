import React from 'react'

export default function Article({
  text,
  commentBy,
  create_date
}){
  return(
    <div>
        <p>{ text }</p>
        <h3>{ commentBy }</h3>
        <small>{ create_date }</small>
    </div>
  )
}