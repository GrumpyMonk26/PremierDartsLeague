import { useState } from "react";
import "./JoinToday.css";
import SuggestionModal from "../SuggestionModal/SuggestionModal";

function JoinToday() {
  const [showSuggestionModal, setShowSuggestionModal] = useState(false);

  return (
    <section className="join">
      <div className="join-overlay"></div>

      <div className="join-content">
        <span className="section-tag">JOIN PREMIER LEAGUE DARTS</span>

        <h2>Ready to Step Up to the Oche?</h2>

        <p>
          Whether you're an experienced player chasing promotion or just looking
          for regular competitive matches, there's a place for you. Join one of
          the UK's fastest growing online darts communities and compete against
          players of a similar ability.
        </p>

        <div className="join-features">
          <div className="feature">🎯 Average Based Divisions</div>

          <div className="feature">📅 7-Day Fixture Window</div>

          <div className="feature">🏆 Promotion & Relegation</div>

          <div className="feature">🤝 Friendly Community</div>
        </div>

        <div className="join-buttons">
          <button
            className="improvement-btn"
            onClick={() => setShowSuggestionModal(true)}
          >
            Suggest an Improvement
          </button>

          <a
            href="https://discord.gg/aVqnM7FPQ"
            className="btn-discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Our Discord
          </a>
        </div>
      </div>

      <SuggestionModal
        isOpen={showSuggestionModal}
        onClose={() => setShowSuggestionModal(false)}
      />
    </section>
  );
}

export default JoinToday;
