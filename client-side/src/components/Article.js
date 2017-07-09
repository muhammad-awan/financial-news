import React from 'react'

export default function Article({
  title,
  by,
  comments
}){
  return(
    <div>
      <h2>{ title }</h2>
      <small>Written by: { by }</small>
      <p>Comments: {comments}</p>
    </div>
  )
}