import "./Rules.css";
import RuleCard from "./RuleCard";
import { rules } from "../../data/rulesData";

export default function Rules() {
  return (
    <section className="rules">
      <div className="rules__hero">
        <span className="rules__eyebrow">PREMIER LEAGUE DARTS</span>

        <h2>League Rules</h2>

        <p>
          Everything you need to know before stepping up to the oche. These
          rules ensure every match is played fairly, respectfully and in the
          true spirit of competition.
        </p>
      </div>

      <div className="rules__highlights">
        <div className="highlight-card">
          <span>🤝</span>
          <h3>Respect</h3>
        </div>

        <div className="highlight-card">
          <span>⚖️</span>
          <h3>Fair Play</h3>
        </div>

        <div className="highlight-card">
          <span>🏆</span>
          <h3>Competition</h3>
        </div>

        <div className="highlight-card">
          <span>🎯</span>
          <h3>Sportsmanship</h3>
        </div>
      </div>

      <div className="rules__grid">
        {rules.map((rule) => (
          <RuleCard key={rule.id} rule={rule} />
        ))}
      </div>

      <div className="rules__footer">
        <h2>Play Hard. Play Fair.</h2>

        <p>
          Premier League Darts is built around friendly competition, respect and
          a shared love of the game.
        </p>

        <p>
          Treat every opponent with respect, communicate clearly, and most
          importantly...
        </p>

        <h3>Enjoy your darts! 🎯</h3>
      </div>
    </section>
  );
}
