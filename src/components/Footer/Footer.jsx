import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>© {year} Premier League Darts. All Rights Reserved.</p>

        <p className="footer-credit">
          Designed & Developed by{" "}
          <a
            href="https://atlas-webdevelopment.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-atlas"
            aria-label="Atlas Web Development"
          >
            <span className="atlas-text">Atlas</span>
            <span className="atlas-dot"></span>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
