import React from 'react'
import {MdSearch} from 'react-icons/md'
import './styles.css'

function Header() {
  return (
   <header className='header'>
        <div className="nav-container">
            <div className="logo"><h1>GamesStore</h1></div>
            <div className="input-search"><input type="text" placeholder='+ de 483,563 jogos' /><button><MdSearch className='icon'/></button></div>
        </div>
   </header>
  )
}

export default Header