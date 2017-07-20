import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ArticleList from '../components/ArticleList'
import Article from '../components/Article'
import CreateArticleForm from '../components/CreateArticleForm'

const ArticlesPage = ({
  articles,
  onCreate,
  error
}) => (
  <div>
  {
    !!articles ? (
      <Switch>
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
        <Route path='/articles' render={
          () => (
            <div>
            { !!error && <p>{error.message}</p>}
            <CreateArticleForm onCreate={ onCreate }/>
            <ArticleList items = { articles } />
            </div>
          )
        } />       
      </Switch>
    ) : (
    'Loading articles...'
    )
  }
  </div>
)

export default ArticlesPage