import React from "react";

function GameDetail(props) {
  const { game } = props.location.gameProps;

  return (
    <section className="detail-game">
      <div className="container-detail">
        <h1>{game.name}</h1>
        <p>Released: {game.released}</p>
        <p>Rating: {game.rating}</p>
        <h3>Genre(s):</h3>
        {game.genres.map((g) => `${g.name} | `)}
        <h3>Plataforms:</h3>
        {game.plataforms.map((p) => `${p.plataform.name} | `)}
        <aside>
          {game.short_screenshots.map((ss) => (
            <img src={ss.image} alt="screenshot" />
          ))}
        </aside>
      </div>
    </section>
  );
}

export default GameDetail;
