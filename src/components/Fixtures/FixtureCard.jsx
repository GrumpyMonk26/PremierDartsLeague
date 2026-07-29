import { useState } from "react";
import "./Fixtures.css";

export default function FixtureCard({ fixture }) {
  const [expanded, setExpanded] = useState(false);

  const completed = fixture.played;

  return (
    <article className="fixture-card">
      <div className="fixture-players">
        <div className="player-avatar home-avatar">H</div>

        <div className="home-player-name">{fixture.home.name}</div>

        <div className="fixture-centre">
          {completed ? (
            <>
              <div className="fixture-score">
                <span>{fixture.home.score}</span>
                <span className="score-divider">-</span>
                <span>{fixture.away.score}</span>
              </div>

              <span className="fixture-status completed">Final Score</span>
            </>
          ) : (
            <>
              <div className="fixture-vs">VS</div>

              <span className="fixture-status pending">Awaiting Result</span>
            </>
          )}
        </div>

        <div className="away-player-name">{fixture.away.name}</div>

        <div className="player-avatar away-avatar">A</div>
      </div>

      {completed && (
        <>
          <div className="fixture-summary">
            <div className="summary-row">
              <span>{fixture.home.average}</span>
              <span>Average</span>
              <span>{fixture.away.average}</span>
            </div>

            <div className="summary-row">
              <span>{fixture.home.checkout}</span>
              <span>Highest Checkout</span>
              <span>{fixture.away.checkout}</span>
            </div>

            <div className="summary-row">
              <span>{fixture.home.bestLeg}</span>
              <span>Best Leg</span>
              <span>{fixture.away.bestLeg}</span>
            </div>
          </div>

          <button
            className="fixture-expand"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "▲ Hide Match Statistics" : "▼ View Match Statistics"}
          </button>
          {expanded && (
            <div className="fixture-details">
              <div className="detail-row">
                <span>{fixture.home.average}</span>
                <span>Average</span>
                <span>{fixture.away.average}</span>
              </div>

              <div className="detail-row">
                <span>{fixture.home.first9}</span>
                <span>First 9</span>
                <span>{fixture.away.first9}</span>
              </div>

              <div className="detail-row">
                <span>{fixture.home.checkout}</span>
                <span>Highest Checkout</span>
                <span>{fixture.away.checkout}</span>
              </div>

              <div className="detail-row">
                <span>{fixture.home.bestLeg}</span>
                <span>Best Leg</span>
                <span>{fixture.away.bestLeg}</span>
              </div>

              <div className="detail-row">
                <span>{fixture.home.s60}</span>
                <span>60+</span>
                <span>{fixture.away.s60}</span>
              </div>

              <div className="detail-row">
                <span>{fixture.home.s80}</span>
                <span>80+</span>
                <span>{fixture.away.s80}</span>
              </div>

              <div className="detail-row">
                <span>{fixture.home.s100}</span>
                <span>100+</span>
                <span>{fixture.away.s100}</span>
              </div>

              <div className="detail-row">
                <span>{fixture.home.s120}</span>
                <span>120+</span>
                <span>{fixture.away.s120}</span>
              </div>

              <div className="detail-row">
                <span>{fixture.home.s140}</span>
                <span>140+</span>
                <span>{fixture.away.s140}</span>
              </div>

              <div className="detail-row">
                <span>{fixture.home.s180}</span>
                <span>180s</span>
                <span>{fixture.away.s180}</span>
              </div>
            </div>
          )}
        </>
      )}
    </article>
  );
}
