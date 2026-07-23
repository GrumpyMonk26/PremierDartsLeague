import "./CurrentSeason.css";

const divisions = [
  {
    name: "Division 1",
    leader: "Jason Evans",
    average: "71.84",
    week: 4,
    complete: 7,
    total: 8,
    streak: "🔥 Hot Streak",
  },
  {
    name: "Division 2",
    leader: "Dan Smith",
    average: "67.21",
    week: 4,
    complete: 8,
    total: 8,
    streak: "🏆 Complete",
  },
  {
    name: "Division 3",
    leader: "Ben Jones",
    average: "63.88",
    week: 4,
    complete: 6,
    total: 8,
    streak: "",
  },
  {
    name: "Division 4",
    leader: "Luke Green",
    average: "61.54",
    week: 4,
    complete: 5,
    total: 8,
    streak: "",
  },
  {
    name: "Division 5",
    leader: "Chris Hall",
    average: "58.73",
    week: 4,
    complete: 8,
    total: 8,
    streak: "🏆 Complete",
  },
  {
    name: "Division 6",
    leader: "Ryan James",
    average: "55.14",
    week: 4,
    complete: 7,
    total: 8,
    streak: "",
  },
  {
    name: "Division 7",
    leader: "Tom Harris",
    average: "52.48",
    week: 4,
    complete: 8,
    total: 8,
    streak: "🔥 Hot Streak",
  },
  {
    name: "Division 8",
    leader: "Steve Young",
    average: "48.02",
    week: 4,
    complete: 6,
    total: 8,
    streak: "",
  },
  {
    name: "Division 9",
    leader: "Adam Lee",
    average: "45.33",
    week: 4,
    complete: 8,
    total: 8,
    streak: "🏆 Complete",
  },
  {
    name: "Division 10",
    leader: "Mark White",
    average: "41.26",
    week: 4,
    complete: 5,
    total: 8,
    streak: "",
  },
];

function CurrentSeason() {
  return (
    <section className="current-season">
      <div className="section-header">
        <span className="section-tag">CURRENT SEASON</span>

        <h2>Season 4 Dashboard</h2>

        <p>Live league information updated throughout the week.</p>
      </div>

      <div className="dashboard-grid">
        {divisions.map((division) => {
          const percentage = (division.complete / division.total) * 100;

          return (
            <div className="division-card" key={division.name}>
              <div className="division-header">
                <h3>{division.name}</h3>

                <span>{division.streak}</span>
              </div>

              <div className="division-body">
                <p>
                  <strong>Leader</strong>
                  <br />
                  {division.leader}
                </p>

                <p>
                  <strong>Highest Average</strong>
                  <br />
                  {division.average}
                </p>

                <p>
                  <strong>Week</strong>
                  <br />
                  {division.week}
                </p>
              </div>

              <div className="progress-section">
                <div className="progress-label">
                  <span>Fixtures Complete</span>

                  <span>
                    {division.complete}/{division.total}
                  </span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>

              <button>View Table →</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CurrentSeason;
