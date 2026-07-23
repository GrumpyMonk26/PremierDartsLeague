import "./LeagueCentre.css";

import {
  tickerItems,
  latestResults,
  upcomingFixtures,
  spotlight,
} from "../../data/leagueData";

function LeagueCentre() {
  return (
    <section className="league-centre">
      {/* Live Ticker */}

      <div className="live-ticker">
        <div className="live-label">🔴 LIVE</div>

        <div className="ticker-wrapper">
          <div className="ticker-track">
            {tickerItems.concat(tickerItems).map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Heading */}

      <div className="section-header">
        <span className="section-tag">LEAGUE CENTRE</span>

        <h2>Live Around The League</h2>

        <p>
          Follow the latest results, upcoming fixtures and standout performances
          from across Premier League Darts.
        </p>
      </div>

      {/* Three Column Layout */}

      <div className="centre-grid">
        {/* Latest Results */}

        <div className="centre-card">
          <div className="card-title">
            <h3>📰 Latest Results</h3>

            <a href="/">View All</a>
          </div>

          {latestResults.map((match, index) => (
            <div className="result-row" key={index}>
              <div>
                <strong>{match.player1}</strong>

                <small>{match.division}</small>
              </div>

              <span className="score">{match.score}</span>

              <strong>{match.player2}</strong>
            </div>
          ))}
        </div>

        {/* Upcoming Fixtures */}

        <div className="centre-card">
          <div className="card-title">
            <h3>📅 Upcoming Fixtures</h3>

            <a href="/">View Fixtures</a>
          </div>

          {upcomingFixtures.map((fixture, index) => (
            <div className="fixture-row" key={index}>
              <strong>{fixture.home}</strong>

              <span>vs</span>

              <strong>{fixture.away}</strong>

              <small>
                {fixture.date} • {fixture.time}
              </small>
            </div>
          ))}
        </div>

        {/* Spotlight */}

        <div className="centre-card spotlight">
          <span className="spotlight-badge">PLAYER OF THE WEEK</span>

          <div className="player-avatar">JE</div>

          <h3>{spotlight.name}</h3>

          <p>{spotlight.description}</p>

          <div className="player-stats">
            <div>
              <strong>{spotlight.average}</strong>

              <span>Average</span>
            </div>

            <div>
              <strong>{spotlight.wins}</strong>

              <span>Wins</span>
            </div>

            <div>
              <strong>{spotlight.oneEighties}</strong>

              <span>180s</span>
            </div>

            <div>
              <strong>{spotlight.checkout}</strong>

              <span>Highest Checkout</span>
            </div>
          </div>

          <button>View Player Profile</button>
        </div>
      </div>
    </section>
  );
}

export default LeagueCentre;
