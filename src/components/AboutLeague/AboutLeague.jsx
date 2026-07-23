import "./AboutLeague.css";

function AboutLeague() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <span className="section-tag">ABOUT THE LEAGUE</span>

          <h2>Built for Players of Every Ability</h2>

          <p>
            Founded in <strong>2024</strong>, Premier League Darts was created
            to offer a competitive online darts league where players of all
            abilities can enjoy fair, exciting matches in a welcoming community.
          </p>

          <p>
            Our divisions are based on your three-dart average rather than
            random placement, ensuring every match is competitive from the first
            throw to the last.
          </p>

          <p>
            Every fixture has a seven-day window, giving players the flexibility
            to arrange matches around work, family and other commitments.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <span>🎯</span>
            <h3>Established</h3>
            <p>Running competitive seasons since 2024.</p>
          </div>

          <div className="about-card">
            <span>📈</span>
            <h3>Average Based</h3>
            <p>Divisions are built around player averages.</p>
          </div>

          <div className="about-card">
            <span>🤝</span>
            <h3>Friendly Community</h3>
            <p>Competitive matches with a welcoming atmosphere.</p>
          </div>

          <div className="about-card">
            <span>📅</span>
            <h3>7-Day Fixtures</h3>
            <p>Play your matches whenever suits both players.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutLeague;
