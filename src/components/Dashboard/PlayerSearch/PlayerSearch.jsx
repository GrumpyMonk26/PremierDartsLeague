import { useEffect, useState } from "react";
import "./PlayerSearch.css";
import { FaSearch } from "react-icons/fa";

import { searchPlayers } from "../../../Services/PlayerSearchService";

function PlayerSearch({ onPlayerSelected }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (search.trim().length < 2) {
        setResults([]);
        return;
      }

      const players = await searchPlayers(search);
      setResults(players);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <section className="player-search-card">
      <div className="player-search-header">
        <h2>Find Your Profile</h2>

        <p>
          Search for your player profile to access your dashboard, league
          statistics, recent matches and season performance.
        </p>
      </div>

      <div className="player-search-form">
        <div className="search-input">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search by player name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button
          className="search-button"
          type="button"
          disabled={search.trim() === ""}
        >
          Search
        </button>
      </div>

      {results.length > 0 && (
        <div className="search-results">
          {results.map((player) => (
            <button
              key={`${player.division}-${player.id}`}
              className="search-result"
              type="button"
              onClick={() => {
                setSearch(player.name);
                setResults([]);

                onPlayerSelected?.(player);

                setSearch("");
                setResults([]);
              }}
            >
              <span className="player-initial">
                {player.name.charAt(0).toUpperCase()}
              </span>

              <div className="player-details">
                <span className="player-name">{player.name}</span>

                <span className="player-division">{player.division}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      <div className="remember-player">
        <input
          type="checkbox"
          id="rememberPlayer"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />

        <label htmlFor="rememberPlayer">
          Remember my player on this device
        </label>
      </div>
    </section>
  );
}

export default PlayerSearch;
