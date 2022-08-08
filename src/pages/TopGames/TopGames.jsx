import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import Header from "../../Components/Header/Header";
import Search from "../../Components/Search/Search";
import Title from "../../Components/Title/Title";
import "./styles.css";
import {AiFillStar} from 'react-icons/ai'


function TopGames() {
 
  const [games, setGames] = useState([]);

  const fetchGames = () => {
    fetch("https://api.rawg.io/api/games?key=d89551853c5047bfb1a1937f8701bcd0&dates=2019-09-01,2019-09-30&platforms=18,1,7")
      .then((res) => res.json())
      .then(({ results }) => setGames(results))
  };


  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      <section className="hero-home-section">
        <Header />
        <Search/>
        <div className="top-games-container">
          <Title title="Top Games" className="section-title" />
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
                      <p>About: {game.description}</p>
                      </div>
                    </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TopGames;
