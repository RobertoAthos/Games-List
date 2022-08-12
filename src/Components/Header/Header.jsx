import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

function Header() {
  return (
   <header className='header'>
        <div className="nav-container">
            <div className="logo">
              <h1>Games Store</h1>
            <div className="nav">
            < NavLink to='/' activeclassname='active'>Home</ NavLink>
              < NavLink to='/mustplay' activeclassname='active'>More Games</ NavLink>
            </div>
              </div>


        </div>
   </header>
  )
}

export default Header