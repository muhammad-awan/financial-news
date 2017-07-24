import React from 'react'
import Comment from './Comment'

export default function CommentList({
  items
}){
  return(
    <div>
    {
    items.map((item) => (
      <Comment
        key={ item._id }
        { ... item }
      />
      ))
    }
    </div>
  )
}