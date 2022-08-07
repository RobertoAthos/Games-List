import React from "react";
import { Link } from "react-router-dom";

function Results(props) {
  return (
    <section className="results">
      <div className="results-container">
        <ul>
          {props.gameResults.map((game) => (
            <li key={game.id}>
              <Link
                to={{
                  pathname: `/game/${game.name}`,
                  gameProps: { game: game },
                }}
              />
              <div className="card-game">
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="img-game"
                />
                <label>{game.name}</label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Results;
