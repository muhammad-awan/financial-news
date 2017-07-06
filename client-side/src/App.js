import React, { Component } from 'react';
import './App.css';
import ArticleList from './components/ArticleList'

class App extends Component {
  state = {
    articles: null
  }

  render() {
    const {articles} = this.state

    return (
      <div className="App">
      {
        !!articles ? (
          <ArticleList items = {articles}/>
        ) : (
          'Loading articles...'
        )
      }
      </div>
      );
  }
  
  componentDidMount(){
    fetch('/api/articles')
      .then( res => res.json())
      .then( json => {
        this.setState({
          articles: json
        })
    })
  } 
}

export default App;
