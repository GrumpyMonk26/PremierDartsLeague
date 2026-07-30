import "./Fixtures.css";

export default function FixturesStats({ fixtures }) {
  const played = fixtures.filter((fixture) => fixture.played).length;

  const pending = fixtures.filter((fixture) => !fixture.played).length;

  return (
    <section className="fixtures-stats">
      <div className="fixtures-stat-card">
        <span className="fixtures-stat-icon">🎯</span>

        <div>
          <h3>{played}</h3>
          <p>Matches Played</p>
        </div>
      </div>

      <div className="fixtures-stat-card">
        <span className="fixtures-stat-icon">⏳</span>

        <div>
          <h3>{pending}</h3>
          <p>Results Pending</p>
        </div>
      </div>
    </section>
  );
}
