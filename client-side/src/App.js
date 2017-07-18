import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import PrimaryNav from './components/PrimaryNav'
import ArticlesPage from './pages/ArticlesPage'
import SignInPage from './pages/SignInPage'
import HomePage from './pages/HomePage'
import './App.css';
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

  handleCreateArticle = ({ title, url }) => {
    fetch('/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, url })
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
          <PrimaryNav/>
          <Switch>
            <Route exact path='/' render={
              () => (
                <HomePage onCreate={ this.handleCreateArticle } error={ error } />
              )
            }/>

            <Route path='/signin' render={
              () => (
                <SignInPage token={ token } onSignIn={ this.handleSignIn }/>
              )
            }/>

            <Route path='/articles' render={
              () => (
                <ArticlesPage articles={ articles }/>
              )
            }/>

            <Route render={ ({location}) => <p>'{location.pathname}' not found</p> }/>
          </Switch>
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
