import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <nav>
    <NavLink to='/signup' activeClassName='active'>Sign Up</NavLink>
    <NavLink to='/signin' activeClassName='active'>Sign In</NavLink>
    <NavLink to='/articles' activeClassName='active'>Articles</NavLink>
  </nav> 
)