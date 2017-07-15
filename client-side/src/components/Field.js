import React from 'react'

export default function Field({
  label,
  name,
  type
}){
  return(
      <label>
        {label + ' '}
        <input name={ name } type={ type }/>
      </label>
  )
}