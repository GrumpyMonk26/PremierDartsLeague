import "./LastMatch.css";
import {
  FaBullseye,
  FaBolt,
  FaChartLine,
  FaFire,
  FaTrophy,
} from "react-icons/fa";

function LastMatch({ player }) {
  if (!player || !player.lastMatch) {
    return null;
  }

  const match = player.lastMatch;

  return (
    <section className="last-match">
      <div className="match-header">
        <div>
          <h2>Last Match</h2>
          <p>{match.fixture}</p>
        </div>

        <span className="match-result">{match.result}</span>
      </div>

      <div className="scoreboard">
        <div className="player-card-small">
          <h3>{match.player.name}</h3>
          <span>Avg {match.player.average}</span>
        </div>

        <div className="score">
          <span>{match.score.player}</span>

          <small>-</small>

          <span>{match.score.opponent}</span>
        </div>

        <div className="player-card-small">
          <h3>{match.opponent.name}</h3>
          <span>Avg {match.opponent.average}</span>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-box">
          <FaChartLine />
          <div>
            <label>Match Average</label>
            <strong>{match.player.average}</strong>
          </div>
        </div>

        <div className="stat-box">
          <FaFire />
          <div>
            <label>180s</label>
            <strong>{match.stats.oneEighties}</strong>
          </div>
        </div>

        <div className="stat-box">
          <FaBullseye />
          <div>
            <label>First 9</label>
            <strong>{match.player.first9}</strong>
          </div>
        </div>

        <div className="stat-box">
          <FaFire />
          <div>
            <label>140+</label>
            <strong>{match.stats.oneForties}</strong>
          </div>
        </div>

        <div className="stat-box">
          <FaBolt />
          <div>
            <label>Checkout</label>
            <strong>{match.player.checkout}</strong>
          </div>
        </div>

        <div className="stat-box">
          <FaFire />
          <div>
            <label>Ton+</label>
            <strong>{match.stats.tonPlus}</strong>
          </div>
        </div>

        <div className="stat-box">
          <FaTrophy />
          <div>
            <label>Best Leg</label>
            <strong>{match.player.bestLeg} Darts</strong>
          </div>
        </div>

        <div className="stat-box">
          <FaBullseye />
          <div>
            <label>Highest Finish</label>
            <strong>{match.stats.highestFinish}</strong>
          </div>
        </div>
      </div>

      <div className="match-actions">
        <button>Match Report</button>

        <button>Head-to-Head</button>
      </div>
    </section>
  );
}

export default LastMatch;
