import { useEffect, useState } from "react";
import "./PlayerSearch.css";
import { FaSearch } from "react-icons/fa";

import { searchPlayers } from "../../../Services/PlayerSearchService";

function PlayerSearch({ onPlayerSelected }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  /*
   * Search players as the user types
   */
  useEffect(() => {
    let cancelled = false;

    const timeout = setTimeout(async () => {
      const searchTerm = search.trim();

      if (searchTerm.length < 2) {
        setResults([]);
        setSearched(false);
        setLoading(false);
        return;
      }

      setLoading(true);
      setSearched(false);

      try {
        const players = await searchPlayers(searchTerm);

        if (!cancelled) {
          setResults(players || []);
          setSearched(true);
        }
      } catch (error) {
        console.error("Player search failed:", error);

        if (!cancelled) {
          setResults([]);
          setSearched(true);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }, 300);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [search]);

  /*
   * Select player
   */
  const handlePlayerSelected = (player) => {
    setSearch("");
    setResults([]);
    setSearched(false);

    onPlayerSelected?.(player);
  };

  return (
    <section className="player-search-section">
      {/* Header */}

      <div className="player-search-header">
        <h2>Find Your Profile</h2>

        <p>
          Search for your player profile to access your dashboard, league
          statistics, recent matches and season performance.
        </p>
      </div>

      {/* Search area */}

      <div className="player-search-wrapper">
        <div className="player-search-form">
          <div className="search-input">
            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search by player name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
            />
          </div>

          {/* Only show Search button when nothing is being typed */}

          {search.trim() === "" && (
            <button className="search-button" type="button" disabled>
              Search
            </button>
          )}
        </div>

        {/* Loading */}

        {loading && <div className="search-status">Searching...</div>}

        {/* No results */}

        {!loading && searched && results.length === 0 && (
          <div className="search-status no-results">No players found.</div>
        )}

        {/* Results */}

        {!loading && results.length > 0 && (
          <div className="search-results">
            {results.map((player) => (
              <button
                key={`${player.division}-${player.id || player.name}`}
                className="search-result"
                type="button"
                onClick={() => handlePlayerSelected(player)}
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
      </div>

      {/* Remember player */}

      <div className="remember-player"></div>
    </section>
  );
}

export default PlayerSearch;
