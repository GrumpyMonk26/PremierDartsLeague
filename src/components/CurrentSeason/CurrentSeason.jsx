import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCurrentSeason } from "../../Services/seasonService";
import "./CurrentSeason.css";

function CurrentSeason() {
  const [divisions, setDivisions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSeason() {
      const data = await getCurrentSeason();

      setDivisions(data);
      setLoading(false);
    }

    loadSeason();
  }, []);

  if (loading) {
    return (
      <section id="current-season" className="current-season">
        <div className="section-header">
          <span className="section-tag">CURRENT SEASON</span>

          <h2>Season 4 Dashboard</h2>

          <p>Loading latest season information...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="current-season" className="current-season">
      <div className="section-header">
        <span className="section-tag">CURRENT SEASON</span>

        <h2>Season 4 Dashboard</h2>

        <p>Live league information updated throughout the week.</p>
      </div>

      <div className="dashboard-grid">
        {divisions.map((division) => {
          const percentage = (division.played / division.total) * 100;

          return (
            <div className="division-card" key={division.name}>
              <div className="division-header">
                <h3>{division.name}</h3>
              </div>

              <div className="division-body">
                <p>
                  <strong>Leader</strong>
                  <br />
                  {division.leader}
                </p>

                <p>
                  <strong>Best 3DA</strong>
                  <br />
                  {Number(division.average).toFixed(2)}
                </p>

                <p>
                  <strong>Played</strong>
                  <br />
                  {division.played} of {division.total}
                </p>
              </div>

              <div className="progress-section">
                <div className="progress-label">
                  <span>Season Progress</span>

                  <span>
                    {division.played}/{division.total}
                  </span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>

              <Link
                className="view-table-btn"
                to={`/tables?division=${encodeURIComponent(division.name)}`}
              >
                View Table →
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CurrentSeason;
