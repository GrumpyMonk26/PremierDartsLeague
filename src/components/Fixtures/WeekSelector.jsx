import "./Fixtures.css";

export default function WeekSelector({ weeks, selectedWeek, onWeekChange }) {
  return (
    <section className="week-selector">
      <h2 className="selector-title">Select Week</h2>

      <div className="week-buttons">
        {weeks.map((week) => (
          <button
            key={week}
            className={`week-button ${selectedWeek === week ? "active" : ""}`}
            onClick={() => onWeekChange(week)}
          >
            Week {week}
          </button>
        ))}
      </div>
    </section>
  );
}
