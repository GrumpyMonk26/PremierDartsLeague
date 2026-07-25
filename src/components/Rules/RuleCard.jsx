import { useState } from "react";
import "./RuleCard.css";

export default function RuleCard({ rule }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`rule-card ${open ? "open" : ""}`}>
      <button
        className="rule-card__header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="rule-card__title-group">
          <div className="rule-card__icon">{rule.icon}</div>

          <div>
            <h3>{rule.title}</h3>
          </div>
        </div>

        <span className={`rule-card__arrow ${open ? "rotate" : ""}`}>▼</span>
      </button>

      <div className={`rule-card__content ${open ? "show" : ""}`}>
        <ul className="rule-card__list">
          {rule.rules.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {rule.highlight && (
          <div className="rule-card__highlight">
            <h4>{rule.highlight.title}</h4>
            <p>{rule.highlight.text}</p>
          </div>
        )}

        {rule.quote && (
          <blockquote className="rule-card__quote">"{rule.quote}"</blockquote>
        )}
      </div>
    </article>
  );
}
