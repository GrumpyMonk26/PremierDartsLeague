import "./PlayerSearch.css";
import { FaSearch } from "react-icons/fa";

function PlayerSearch() {
  return (
    <section className="player-search-card">
      <div className="player-search-header">
        <h2>Find Your Player</h2>

        <p>
          Search for your Premier League Darts profile to view your personal
          dashboard, league statistics and match history.
        </p>
      </div>

      <div className="player-search-form">
        <div className="search-input">
          <FaSearch className="search-icon" />

          <input type="text" placeholder="Search by player name..." />
        </div>

        <button className="search-button">Search</button>
      </div>

      <div className="remember-player">
        <input type="checkbox" id="rememberPlayer" />

        <label htmlFor="rememberPlayer">
          Remember my player on this device
        </label>
      </div>
    </section>
  );
}

export default PlayerSearch;
