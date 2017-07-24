import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CommentList from '../components/CommentList'
import Article from '../components/Article'
import CommentForm from '../components/CommentForm'

const ArticlePage = ({
  articles,
  onCreate,
  comments,
  error
}) => (
  <Route path='/articles/:id' render={
      ({ match }) => {
          const id = match.params.id
          const article = articles.find((article) => article._id === id)
          if (!article) {
              return (
                  <p>Article with id "{ id }" not found</p>
              )
          }
          return (
              <Article { ...article } />
          )
      }
    } />
)

export default ArticlePage