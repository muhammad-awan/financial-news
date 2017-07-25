import React from 'react'
import { Route } from 'react-router-dom'
import CommentList from '../components/CommentList'
import Article from '../components/Article'
import CommentForm from '../components/CommentForm'

const ArticlePage = ({
  articles,           
  onCreate,
  comments,
  error
}) => (
<div>
  {
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
                    <div>
                    <Article { ...article } />
                    <CommentForm onCreate={ onCreate }/>
                    { !! comments ? (<CommentList items= { comments }/>) : ('loading comments ... ') }
                    </div>
                )
            }
        } />
  }
  </div>
)

export default ArticlePage