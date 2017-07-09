import React, { Component } from 'react';
import './App.css';
import ArticleList from './components/ArticleList'

class App extends Component {
  state = {
    articles: null,
    error: null
  }

  render() {
    const { error, articles } = this.state
    return (
      <main>
      { !!error && <p>{error.message}</p>}
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
