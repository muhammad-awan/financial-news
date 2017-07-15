import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ArticleList from '../components/ArticleList'
import Article from '../components/Article'

const ArticlesPage = ({
  articles
}) => (
  <div>
  {
    !!articles ? (
      <Switch>
         <Route path='/articles/:id' render={
            ({ match }) => {
                console.log('hi')
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
            <ArticleList items = { articles } />
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