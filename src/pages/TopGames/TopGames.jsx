import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
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
        <div className="top-games-container">
          <Title title="Top Games" className="section-title" />
          <div className="games">
            <ul>
              {games.map((game) => (
                <li key={game.id}>
                  <Link
                    to={{
                      pathname: `/game/${game.name}`,
                      gameProp: { game: game },
                    }}
                  >
                    <div className="card-game">
                      <img src={game.background_image} alt={game.name} className='img-game' />
                      <label>{game.name}</label>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopGames;
