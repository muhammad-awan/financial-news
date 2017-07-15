import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import ArticleList from './components/ArticleList'
import CreateArticleForm from './components/CreateArticleForm'
import SignInForm from './components/SignInForm'
import * as authAPI from './api/auth'


class App extends Component {
  state = {
    articles: null,
    token: null,
    error: null
  }

  handleSignIn = ({ email, password }) => {
    authAPI.signIn({ email, password })
      .then( json => {
        this.setState({ token: json.token })
      })
      .catch(error => {
        this.setState({ error })
      })
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
    const { error, token, articles } = this.state
    return (
      <Router>
        <main>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/signin'>Sign In</Link>
            <Link to='/articles'>Articles</Link>
          </nav> 
          <Route exact path='/' render={
            () => (
              <h1>Trending Articles</h1>
            )
          }/>

          <Route exact path='/signin' render={
            () => (
              <div>
                {
                !!token ? (
                'Hiya'
                ) : (
                <SignInForm onSignIn={this.handleSignIn} />
                )
                }
              </div>
            )
          }/>

          <Route exact path='/articles' render={
            () => (
              <div>
                { !!error && <p>{error.message}</p>}
                <CreateArticleForm onCreate={ this.handleCreateArticle }/>
                {
                !!articles ? (
                <ArticleList items = { articles }/>
                ) : (
                'Loading articles...'
                )
                }
              </div>
            )
          }/>
        </main>
      </Router>
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
