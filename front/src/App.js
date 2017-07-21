import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import PrimaryNav from './components/PrimaryNav'
import ArticlesPage from './pages/ArticlesPage'
import SignInPage from './pages/SignInPage'
import './App.css';
import * as authAPI from './api/auth'
import * as articlesAPI from './api/articles'

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

  // handleCreateArticle = ({ title, url }) => {
  //   articlesAPI.create('/articles', { title, url })
  //     .then(newArticle => {
  //       this.setState(() => {
  //         return {
  //           articles: prevState.articles.concat(newArticle)
  //         }
  //       })
  //     })
  //     .catch( error => {
  //         this.setState({ error })
  //     })
  // }

  handleCreateArticle = (newArticle) => {
    this.setState(({ articles }) => ({
      articles: articles.concat(newArticle)
    }))

    articlesAPI.create(newArticle)
  }

  render() {
    const { error, token, articles } = this.state
    return (
      <Router>
        <main>
          <PrimaryNav/>
          <Switch>
            <Route path='/signin' render={
              () => (
                <SignInPage token={ token } onSignIn={ this.handleSignIn }/>
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
