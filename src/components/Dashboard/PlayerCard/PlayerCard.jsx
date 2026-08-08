import "./PlayerCard.css";

function PlayerCard({ player }) {
  if (!player) return null;

  const initials = player.player.displayName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <section className="player-card">
      <div className="player-avatar">{initials}</div>

      <h2>{player.player.displayName}</h2>

      <span className="division-badge">{player.player.division}</span>

      <div className="player-average">
        <span>Best 3 Dart Average</span>

        <h1>{player.player.bestAverage}</h1>
      </div>

      <div className="player-details">
        <div>
          <span>Current Rank</span>

          <strong>#{player.league.position}</strong>
        </div>

        <div>
          <span>Best Leg</span>

          <strong>{player.stats.bestLeg}</strong>
        </div>
      </div>

      <button className="favourite-button">⭐ Favourite Player</button>
    </section>
  );
}

export default PlayerCard;
