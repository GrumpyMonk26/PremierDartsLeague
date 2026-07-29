import "./Fixtures.css";

export default function DivisionSelector({
  divisions,
  selectedDivision,
  onDivisionChange,
}) {
  return (
    <section className="division-selector">
      <h2 className="selector-title">Select Division</h2>

      <div className="division-buttons">
        {divisions.map((division) => (
          <button
            key={division.key}
            className={`division-button ${
              selectedDivision === division.key ? "active" : ""
            }`}
            onClick={() => onDivisionChange(division.key)}
          >
            {division.name}
          </button>
        ))}
      </div>
    </section>
  );
}
