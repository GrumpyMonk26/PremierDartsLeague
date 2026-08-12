import { useState } from "react";
import "./SuggestionModal.css";

function SuggestionModal({ isOpen, onClose }) {
  const [discordName, setDiscordName] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!discordName.trim() || !suggestion.trim()) {
      return;
    }

    try {
      const response = await fetch("/.netlify/functions/submit-suggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          discordName: discordName.trim(),
          suggestion: suggestion.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to submit suggestion.");
      }

      // Clear the form
      setDiscordName("");
      setSuggestion("");

      // Close the modal
      onClose();

      console.log("Suggestion submitted successfully.");
    } catch (error) {
      console.error("Suggestion submission failed:", error);

      alert("Sorry, your suggestion could not be submitted. Please try again.");
    }
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
