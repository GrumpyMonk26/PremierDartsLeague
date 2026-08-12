import { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    async function registerVisitor() {
      try {
        let visitorId = localStorage.getItem("pdlVisitorId");

        if (!visitorId) {
          visitorId = crypto.randomUUID();

          localStorage.setItem("pdlVisitorId", visitorId);
        }

        const response = await fetch("/.netlify/functions/visitor-count", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            visitorId,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (data.success) {
          setVisitorCount(data.visitors);
        }
      } catch (error) {
        console.error("Failed to load visitor count:", error);
      }
    }

    registerVisitor();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>© {year} Premier League Darts. All Rights Reserved.</p>

        <div className="footer-visitors">
          <span className="visitor-icon">👥</span>

          <span>
            Visitor Count:{" "}
            {visitorCount !== null ? visitorCount.toLocaleString() : "—"}
          </span>
        </div>

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
