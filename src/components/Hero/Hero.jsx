import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-established">Established 2024</span>

        <h1>Premier Darts League</h1>

        <h2>Competitive Online Darts League</h2>

        <p>
          Average based divisions designed to create competitive matches for
          every player. Friendly, inclusive and flexible with every fixture
          played over a 7-day window. All games are organised through the
          Discord server.
        </p>

        <div className="hero-buttons">
          <a
            href="https://discord.gg/aVqnM7FPQ"
            className="btn-discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Our Discord
          </a>

          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              document.getElementById("current-season")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Current Season
          </button>
        </div>
      </div>

      <div className="hero-stats">
        <div>
          <h3>10</h3>
          <span>Divisions</span>
        </div>

        <div>
          <h3>Weekly</h3>
          <span>Fixtures</span>
        </div>

        <div>
          <h3>Average</h3>
          <span>Based</span>
        </div>

        <div>
          <h3>Friendly</h3>
          <span>Community</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
