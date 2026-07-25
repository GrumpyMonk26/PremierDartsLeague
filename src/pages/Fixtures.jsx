import { useState } from "react";
import "../components/Fixtures/Fixtures.css";

import {
  FixturesHero,
  FixturesStats,
  DivisionSelector,
  WeekSelector,
  FixturesList,
} from "../components/Fixtures";

import { fixtures } from "../data/fixturesData";

export default function Fixtures() {
  // Get available divisions and weeks from the data
  const divisions = [...new Set(fixtures.map((f) => f.division))];

  const weeks = [...new Set(fixtures.map((f) => f.week))].sort((a, b) => a - b);

  // Page state
  const [selectedDivision, setSelectedDivision] = useState(divisions[0]);
  const [selectedWeek, setSelectedWeek] = useState(weeks[0]);

  // Filter fixtures based on selected division and week
  const filteredFixtures = fixtures.filter(
    (fixture) =>
      fixture.division === selectedDivision && fixture.week === selectedWeek,
  );
  console.log("Selected Division:", selectedDivision);
  console.log("SelectedWeek:", selectedWeek);
  console.log("FilteredFixtures:", filteredFixtures);
  return (
    <main className="fixtures-page">
      <FixturesHero />
      <section className="fixtures-content">
        <div className="fixtures-container">
          <FixturesStats fixtures={filteredFixtures} />

          <DivisionSelector
            divisions={divisions}
            selectedDivision={selectedDivision}
            onDivisionChange={setSelectedDivision}
          />

          <WeekSelector
            weeks={weeks}
            selectedWeek={selectedWeek}
            onWeekChange={setSelectedWeek}
          />

          <FixturesList fixtures={filteredFixtures} />
        </div>
      </section>
    </main>
  );
}
