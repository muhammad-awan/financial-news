import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import decodeJWT from 'jwt-decode'
import './App.css';
import PrimaryNav from './components/PrimaryNav'
import ErrorMessage from './components/ErrorMessage'
import HomePage from './pages/HomePage'
import ArticlesPage from './pages/ArticlesPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import ProfilePage from './pages/ProfilePage'
import { setAPIToken } from './api/init'
import * as authAPI from './api/auth'
import * as articlesAPI from './api/articles'

class App extends Component {
  state = {
    articles: null,
    token: null,
    error: null
  }

  loadPromises = {}

  setToken = (token) => {
    setAPIToken(token)
    this.loadPromises = {}
    this.setState({ token })
  }

  setError = (error) => {
    if (error.response && error.response.data && error.response.data.error) {
      error = error.response.data.error
    }
    this.setState({ error })
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

  handleSignUp = ({ email, password }) => {
      authAPI.register({ email, password })
        .then(json => {
          this.setToken(json.token)
        })
        .catch(error => {
          this.setError(error)
        })
  }

  handleSignOut = () => {
    this.setState({ token: null })
  }

  handleCreateArticle = (newArticle) => {
    this.setState(({ articles }) => ({
      articles: articles.concat(newArticle)
    }))

    articlesAPI.create(newArticle)
  }

  render() {
    const { error, token, articles } = this.state
    const userInfo = !!token ? decodeJWT(token) : null

    return (
      <Router>
        <main>
          <PrimaryNav isSignedIn={ !!token } />
          { !!error && <ErrorMessage error={ error } /> }

          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route exact path='/signin' render={
              () => (
                <SignInPage token={ token } onSignIn={ this.handleSignIn }/>
              )
            }/>
            <Route path='/signup' render={
              () => (
                <SignUpPage token={ token } onSignUp={ this.handleSignUp } />
              )
            }/>       
            <Route path='/profile' render={
              () => (
                <ProfilePage userInfo={ userInfo } onSignOut={ this.handleSignOut } />
              )
            }/>                 

            <Route path='/articles'  render={
              () => (
                <ArticlesPage articles={ articles } onCreate={ this.handleCreateArticle } error={ error }/>
              )
            }/>

            <Route render={ ({location}) => <p>'{location.pathname}' not found</p> }/>
          </Switch>
        </main>
      </Router>
      );
  }
  
  componentDidMount(){
    articlesAPI.list()
      .then( articles => {
        this.setState({ articles })
      })
      .catch( error => {
        this.setState({ error })
    })
  } 
}

export default App;
