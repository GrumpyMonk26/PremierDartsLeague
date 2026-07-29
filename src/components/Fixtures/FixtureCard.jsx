import "./Fixtures.css";

export default function FixtureCard({ fixture }) {
  const completed = fixture.status === "Completed";

  return (
    <article className="fixture-card">
      <div className="fixture-players">
        <div className="fixture-player">
          <div className="player-avatar home-avatar">H</div>

          <span>{fixture.home.name}</span>
        </div>

        <div className="fixture-centre">
          {completed ? (
            <>
              <div className="fixture-score">
                <span>{fixture.homeScore}</span>
                <span className="score-divider">-</span>
                <span>{fixture.awayScore}</span>
              </div>

              <span className="fixture-status completed">✓ Played</span>
            </>
          ) : (
            <>
              <div className="fixture-vs">VS</div>

              <span className="fixture-status pending">Result Pending</span>
            </>
          )}
        </div>

        <div className="fixture-player">
          <div className="player-avatar away-avatar">A</div>

          <span>{fixture.away.name}</span>
        </div>
      </div>

      {completed && (
        <div className="fixture-footer">
          <div className="fixture-stat">
            <span>Highest Checkout</span>
            <strong>{fixture.highCheckout}</strong>
          </div>

          <div className="fixture-stat">
            <span>Average</span>
            <strong>{fixture.average}</strong>
          </div>

          <div className="fixture-stat">
            <span>Date</span>
            <strong>
              {new Date(fixture.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </strong>
          </div>
        </div>
      )}
    </article>
  );
}
