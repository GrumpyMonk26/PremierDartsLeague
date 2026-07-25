import FixtureCard from "./FixtureCard";
import "./Fixtures.css";

export default function FixturesList({ fixtures }) {
  if (fixtures.length === 0) {
    return (
      <section className="fixtures-list">
        <div className="no-fixtures">
          <h3>No Fixtures Found</h3>
          <p>
            There are currently no fixtures available for this division and
            week.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="fixtures-list">
      {fixtures.map((fixture) => (
        <FixtureCard key={fixture.id} fixture={fixture} />
      ))}
    </section>
  );
}
