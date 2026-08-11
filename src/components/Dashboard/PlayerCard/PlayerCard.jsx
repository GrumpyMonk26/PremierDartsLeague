import { useState } from "react";
import "./PlayerCard.css";

function PlayerCard({ player, selectedPlayer }) {
  // Used only to trigger a re-render after localStorage changes
  const [, setRefresh] = useState(0);

  if (!player) return null;

  const initials = player.player.displayName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  /*
   * Check whether this player is currently remembered
   */
  let remembered = false;

  const savedPlayer = localStorage.getItem("rememberedPlayer");

  if (savedPlayer && selectedPlayer) {
    try {
      const saved = JSON.parse(savedPlayer);

      remembered = saved.name === selectedPlayer.name;
    } catch (error) {
      console.error("Failed to read remembered player:", error);

      localStorage.removeItem("rememberedPlayer");
    }
  }

  /*
   * Remember / forget player
   */
  const handleRememberPlayer = () => {
    if (!selectedPlayer) return;

    if (remembered) {
      localStorage.removeItem("rememberedPlayer");
    } else {
      localStorage.setItem("rememberedPlayer", JSON.stringify(selectedPlayer));
    }

    // Refresh the component so the button updates
    setRefresh((value) => value + 1);
  };

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

      <button
        className={`favourite-button ${remembered ? "remembered" : ""}`}
        onClick={handleRememberPlayer}
      >
        {remembered ? "✓ Player Remembered" : "⭐ Remember My Player"}
      </button>
    </section>
  );
}

export default PlayerCard;
