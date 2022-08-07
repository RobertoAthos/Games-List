import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Search from "../../Components/Search/Search";
import Title from "../../Components/Title/Title";
import "./styles.css";


function TopGames() {
  const [games, setGames] = useState([]);

  const fetchGames = () => {
    fetch("https://rawg.io/api/collections/must-play/games")
      .then((res) => res.json())
      .then(({ results }) => setGames(results));
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
                  <Link
                    to={{
                      pathname: `/game/${game.name}`,
                      gameProps: { game: game },
                    }}
                  >
                    <div className="card-game">
                      <img src={game.background_image} alt={game.name} className='img-game' />
                      <label>{game.name}</label>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TopGames;
