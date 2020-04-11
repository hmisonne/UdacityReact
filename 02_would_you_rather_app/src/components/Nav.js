import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
      </ul>
      <ul style={{textAlign: "center"}}>  
        <li>
          <div>
            Hello, {props.authedUserName}
          </div>
        </li>
        <li>
          <NavLink to='/login' activeClassName='active'>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  )
} 

export default Nav