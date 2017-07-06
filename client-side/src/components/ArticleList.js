import React from 'react'
import Article from './Article'

export default function ArticleList({
  items
}){
  return(
    <div>
    {
    items.map((item) => {
      <Article
      title = {item.title}
      by = {item.by}
      />
      })
    }
    </div>
  )
}