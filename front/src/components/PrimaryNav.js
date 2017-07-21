import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <nav>
    <NavLink to='/articles' activeClassName='active'>Articles</NavLink>
    <NavLink to='/profile' activeClassName='active'>Profile</NavLink>
    <NavLink to='/signin' activeClassName='active'>Sign In</NavLink>
    <NavLink to='/signup' activeClassName='active'>Sign Up</NavLink>
  </nav> 
)