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
import ArticlePage from './pages/ArticlePage'
// import { setAPIToken } from './api/init'
import * as authAPI from './api/auth'
import * as articlesAPI from './api/articles'
import * as commentsAPI from './api/comments'

const tokenKey = 'userToken'

class App extends Component {
  state = {
    articles: null,
    token: localStorage.getItem(tokenKey),
    error: null,
    comments: null
  }

  // loadPromises = {}

  setToken = (token) => {
    localStorage.setItem(tokenKey, token)
    // setAPIToken(token)
    // this.loadPromises = {}
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
          this.setError({ error })
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

  handleCreateComment = (newComment) => {
    this.setState(({ comments }) => ({
      comments: comments.concat(newComment)
    }))
    commentsAPI.create(newComment)
  }

  render() {
    const { error, token, articles, comments } = this.state
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

            <Route path='/articles/:id'  render={
              () => (
                <ArticlePage articles={ articles } comments={ comments } onCreate={ this.handleCreateComment } error={ error } />
              )
            }/>

            <Route path='/articles'  render={
              () => (
                <ArticlesPage articles={ articles } onCreate={ this.handleCreateArticle } error={ error } />
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

    commentsAPI.list()
      .then( comments => {
        this.setState({ comments })
      })
      .catch( error => {
        this.setState({ error })
    })

  }
}

export default App;
