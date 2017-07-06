import React from 'react'

export default function Article({
  title,
  by
}){
  return(
    <div>
      <h2>{ title }</h2>
      <h3>Written by: { by }</h3>
    </div>
  )
}