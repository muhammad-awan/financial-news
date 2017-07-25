import React from 'react'

export default function Comment({
  _id,
  text
  // commentBy
}){
  return(
    <div>
        <p>{ text }</p>
    </div>
  )
}