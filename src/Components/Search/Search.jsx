import React from 'react'
import './styles.css'
/* import {BiSearchAlt2} from 'react-icons/bi' */
import Results from '../../pages/ResultsGames/Results'
import { useState } from 'react'

function Search() {

    const [searchTerm, setSearchTerm] = useState("")
    const [gameResults, setGameResults] = useState([])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let slug = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([])
    fetch(`https://rawg.io/api/games?search=${slug}`)
    .then(resp => resp.json())
    .then(({results}) => {
      results === undefined ? alert('no games found') : setGameResults(results)
    })
    setSearchTerm("")
  }
  return (
   <div className="search-container">
        <form onSubmit={onSubmit} className='input-search'>
          <input type="text" value={searchTerm} onChange={handleChange} placeholder='+ de 400,000 jogos'/>
          <br></br>
          <input type="submit" value="Search"/>
        </form>
        <Results gameResults={gameResults} />
   </div>
  )
}

export default Search