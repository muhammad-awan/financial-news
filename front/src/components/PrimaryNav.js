import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({
  isSignedIn = false
  // add user info like profile pic etc here
}) => (
  <nav>
    <NavLink to='/articles' activeClassName='active'>Articles</NavLink>
    {
      isSignedIn ? [
        <NavLink key='profile' to='/profile' activeClassName='active'>Profile</NavLink>
      ] : [
        <NavLink key='signin' to='/signin' activeClassName='active'>Sign In</NavLink>,
        <NavLink key='signup' to='/signup' activeClassName='active'>Sign Up</NavLink>
      ]
    }
  </nav> 
)