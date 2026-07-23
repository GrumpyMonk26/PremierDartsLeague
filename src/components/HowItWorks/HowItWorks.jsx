import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="section-header">
        <span className="section-tag">HOW IT WORKS</span>

        <h2>Simple. Competitive. Flexible.</h2>

        <p>
          Joining Premier League Darts is easy. From registration to promotion,
          every season is designed to give players exciting, competitive matches
          while fitting around everyday life.
        </p>
      </div>

      <div className="steps">
        <div className="step">
          <div className="step-number">1</div>

          <h3>Join the League</h3>

          <p>
            Register your interest and tell us a little about your playing
            experience.
          </p>
        </div>

        <div className="step">
          <div className="step-number">2</div>

          <h3>Division Placement</h3>

          <p>
            Players are placed into divisions based on their three-dart average
            to ensure balanced competition.
          </p>
        </div>

        <div className="step">
          <div className="step-number">3</div>

          <h3>Play Weekly Fixtures</h3>

          <p>
            Every fixture has a seven-day window, allowing both players to
            arrange a convenient time to play.
          </p>
        </div>

        <div className="step">
          <div className="step-number">4</div>

          <h3>Promotion & Relegation</h3>

          <p>
            Finish near the top to earn promotion or battle to avoid relegation
            as every season counts.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
