import React,{useState, useEffect} from 'react'
import '../TopGames/styles.css'
import Title from '../../Components/Title/Title';
import {AiFillStar} from 'react-icons/ai'
import Header from '../../Components/Header/Header';

function MusPlay() {
  const [games, setGames] = useState([]);

  const fetchGames = () => {
    fetch('https://rawg.io/api/collections/must-play/games')
      .then((res) => res.json())
      .then(({ results }) => setGames(results))
  };


  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <section className="hero-home-section">
    <Header />
    <div className="top-games-container">
      <Title title="Top Games you must play" className="section-title" />
      <div className="games">
          {games.map((game) => (
            <div key={game.id} className='grid-cards'>
                <div className="card-game">
                  <div className="game-img">
                    <img src={game.background_image} alt={game.name} className='img-game' />
                  </div>
                  <div className="game-text">
                  <h2>{game.name}</h2>
                  <span>Released : {game.released}</span>
                  <p className="rating"><AiFillStar/>{game.rating}</p>
                  <p>Updated: {game.updated}</p>
                  </div>
                </div>
            </div>
          ))}
      </div>
    </div>
  </section>
  )
}

export default MusPlay