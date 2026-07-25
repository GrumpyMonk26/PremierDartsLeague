import "./DivisionPicker.css";

function DivisionPicker({ divisions, activeDivision, onSelect }) {
  return (
    <div className="division-picker">
      {divisions.map((division) => (
        <button
          key={division}
          type="button"
          className={`division-picker__item ${
            division === activeDivision ? "active" : ""
          }`}
          onClick={() => onSelect(division)}
        >
          {division}
        </button>
      ))}
    </div>
  );
}

export default DivisionPicker;
