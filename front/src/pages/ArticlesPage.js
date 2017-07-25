import React from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../components/ArticleList'
import CreateArticleForm from '../components/CreateArticleForm'

const ArticlesPage = ({
  articles,
  onCreate,
  error
}) => (
  <div>
  {
    !!articles ? (
        <Route path='/articles' render={
          () => (
            <div>
            { !!error && <p>{error.message}</p>}
            <CreateArticleForm onCreate={ onCreate }/>
            <ArticleList items = { articles } />
            </div>
          )
        } />       

    ) : (
    'Loading articles...'
    )
  }
  </div>
)

export default ArticlesPage

