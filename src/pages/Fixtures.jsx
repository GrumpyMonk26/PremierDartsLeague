import { useEffect, useState } from "react";
import "../components/Fixtures/Fixtures.css";

import {
  FixturesHero,
  FixturesStats,
  DivisionSelector,
  WeekSelector,
  FixturesList,
} from "../components/Fixtures";

import { getFixtures } from "../Services/FixturesServices";

export default function Fixtures() {
  const divisions = [
    { key: "premier", name: "Premier" },
    { key: "division1", name: "Division 1" },
    { key: "division2", name: "Division 2" },
    { key: "division3", name: "Division 3" },
    { key: "division4", name: "Division 4" },
    { key: "division5", name: "Division 5" },
    { key: "division6", name: "Division 6" },
  ];

  const [fixtures, setFixtures] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState(divisions[0].key);
  const [selectedWeek, setSelectedWeek] = useState(1);

  useEffect(() => {
    async function loadFixtures() {
      const data = await getFixtures(selectedDivision);

      setFixtures(data);

      if (data.length > 0) {
        setSelectedWeek(data[0].week);
      }
    }

    loadFixtures();
  }, [selectedDivision]);

  // Get available weeks from the loaded fixtures
  const weeks = [...new Set(fixtures.map((f) => f.week))].sort((a, b) => a - b);

  // Filter fixtures for the selected week
  const filteredFixtures = fixtures.filter(
    (fixture) => fixture.week === selectedWeek,
  );

  console.log("Selected Division:", selectedDivision);
  console.log("Selected Week:", selectedWeek);
  console.log("Weeks:", weeks);
  console.log("Fixtures:", fixtures);
  console.log("Filtered Fixtures:", filteredFixtures);

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
