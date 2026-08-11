import { useState } from "react";
import "./SuggestionModal.css";

function SuggestionModal({ isOpen, onClose }) {
  const [discordName, setDiscordName] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!discordName.trim() || !suggestion.trim()) {
      return;
    }

    console.log("Suggestion submitted:", {
      discordName,
      suggestion,
    });

    // EmailJS will be added here later

    setDiscordName("");
    setSuggestion("");

    onClose();
  };

  const handleClose = () => {
    setDiscordName("");
    setSuggestion("");
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <section className="suggestion-modal-overlay" onClick={handleClose}>
      <div className="suggestion-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}

        <button
          type="button"
          className="suggestion-modal-close"
          onClick={handleClose}
          aria-label="Close suggestion form"
        >
          ×
        </button>

        {/* Header */}

        <div className="suggestion-modal-header">
          <h2>Suggest an Improvement</h2>

          <p>
            Have an idea that could make the league or website better? We'd love
            to hear it.
          </p>
        </div>

        {/* Form */}

        <form className="suggestion-form" onSubmit={handleSubmit}>
          {/* Discord Name */}

          <div className="suggestion-form-group">
            <label htmlFor="discordName">Discord Name</label>

            <input
              id="discordName"
              type="text"
              value={discordName}
              onChange={(e) => setDiscordName(e.target.value)}
              placeholder="Your Discord name"
              required
              autoComplete="off"
            />
          </div>

          {/* Suggestion */}

          <div className="suggestion-form-group">
            <label htmlFor="suggestion">Your Suggestion</label>

            <textarea
              id="suggestion"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              placeholder="Tell us what you'd like to see improved..."
              required
            />
          </div>

          {/* Buttons */}

          <div className="suggestion-form-buttons">
            <button
              type="button"
              className="suggestion-cancel-btn"
              onClick={handleClose}
            >
              Cancel
            </button>

            <button type="submit" className="suggestion-submit-btn">
              Submit Suggestion
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SuggestionModal;
