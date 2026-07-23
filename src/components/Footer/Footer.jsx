import "./Footer.css";
import logo from "../../assets/images/prem-league-logo.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}

        <div className="footer-column">
          <img src={logo} alt="Premier League Darts" className="footer-logo" />

          <h3>Premier League Darts</h3>

          <p>
            Established in 2024, Premier League Darts is a competitive,
            average-based online darts league built around fair competition,
            flexibility and a thriving community.
          </p>
        </div>

        {/* Navigation */}

        <div className="footer-column">
          <h4>Navigation</h4>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/tables">League Tables</a>
            </li>

            <li>
              <a href="/fixtures">Fixtures</a>
            </li>

            <li>
              <a href="/results">Results</a>
            </li>

            <li>
              <a href="/players">Players</a>
            </li>
          </ul>
        </div>

        {/* League */}

        <div className="footer-column">
          <h4>League</h4>

          <ul>
            <li>
              <a href="/rules">League Rules</a>
            </li>

            <li>
              <a href="/hall-of-fame">Hall of Fame</a>
            </li>

            <li>
              <a href="/statistics">Statistics</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Community */}

        <div className="footer-column">
          <h4>Community</h4>

          <p>
            Join our Discord community to register for new seasons, arrange
            fixtures, report results and chat with players.
          </p>

          <a href="#" className="discord-button">
            🚀 Join Our Discord
          </a>

          <div className="socials">
            <a href="#">Facebook</a>

            <a href="#">Instagram</a>

            <a href="#">TikTok</a>

            <a href="#">YouTube</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Premier League Darts. All Rights Reserved.</p>

        <p>
          Designed & Developed by <strong>Jason Evans</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
