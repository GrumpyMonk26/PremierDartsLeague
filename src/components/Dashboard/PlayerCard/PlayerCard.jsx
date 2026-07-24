import "./PlayerCard.css";

function PlayerCard() {
  return (
    <section className="player-card">
      <div className="player-avatar">JE</div>

      <h2>Jason Evans</h2>

      <span className="division-badge">Division One</span>

      <div className="player-average">
        <span>Current Average</span>

        <h1>74.82</h1>
      </div>

      <div className="player-details">
        <div>
          <span>Current Rank</span>

          <strong>#2</strong>
        </div>

        <div>
          <span>Season</span>

          <strong>Season 5</strong>
        </div>
      </div>

      <button className="favourite-button">⭐ Favourite Player</button>
    </section>
  );
}

export default PlayerCard;
