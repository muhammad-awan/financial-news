import React, { Component } from 'react';
import './App.css';
import ArticleList from './components/ArticleList'
import CreateArticleForm from './components/CreateArticleForm'

class App extends Component {
  state = {
    articles: null,
    error: null
  }

  handleCreateArticle = ({ title, by }) => {
    fetch('/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, by })
    })
      .then(res => res.json())
      .then(newArticle => {
        this.setState((prevState) => {
          return {
            articles: prevState.articles.concat(newArticle)
          }
        })
      })
      .catch( error => {
          this.setState({ error })
      })
  }

  render() {
    const { error, articles } = this.state
    return (
      <main>
      { !!error && <p>{error.message}</p>}
      <CreateArticleForm onCreate={ this.handleCreateArticle }/>
      {
        !!articles ? (
          <ArticleList items = { articles }/>
        ) : (
          'Loading articles...'
        )
      }
      </main>
      );
  }
  
  componentDidMount(){
    fetch('/articles')
      .then(res => res.json())
      .then( articles => {
        this.setState({ articles })
      })
      .catch( error => {
        this.setState({ error })
    })
  } 
}

export default App;
