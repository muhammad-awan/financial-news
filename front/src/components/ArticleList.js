import React from 'react'
import Article from './Article'

export default function ArticleList({
  items
}){
  return(
    <div>
    {
    items.map((item) => (
      <Article
        key={ item._id }
        { ... item }
      />
      ))
    }
    </div>
  )
}