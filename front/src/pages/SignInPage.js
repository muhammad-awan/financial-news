import React from 'react'
import { Redirect } from 'react-router-dom'
import SignInForm from '../components/SignInForm'

const SignInPage = ({
  token,
  onSignIn
}) => (
  <div>
    {
    !!token ? (
      <Redirect to='/articles'/>
    ) : (
      <SignInForm onSignIn={ onSignIn } />
    )
    }
  </div>
)

export default SignInPage