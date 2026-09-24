import { useEffect, useState } from "react";
import "../components/Fixtures/Fixtures.css";

import {
  FixturesHero,
  FixturesStats,
  DivisionSelector,
  WeekSelector,
  FixturesList,
} from "../components/Fixtures";

import { getFixtures, getActiveDivisions } from "../Services/FixturesServices";

export default function Fixtures() {
  const [divisions, setDivisions] = useState([]);
  const [fixtures, setFixtures] = useState([]);

  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(1);

  const [divisionsLoading, setDivisionsLoading] = useState(true);
  const [fixturesLoading, setFixturesLoading] = useState(false);

  // Load active divisions from Google Apps Script
  useEffect(() => {
    async function loadDivisions() {
      try {
        const data = await getActiveDivisions();

        const formattedDivisions = data.map((division) => ({
          key: division.key,
          name: division.key === "premier" ? "Premier" : division.divisionName,
        }));

        setDivisions(formattedDivisions);

        // Select the first active division by default
        if (formattedDivisions.length > 0) {
          setSelectedDivision((currentDivision) => {
            const stillActive = formattedDivisions.some(
              (division) => division.key === currentDivision,
            );

            return stillActive ? currentDivision : formattedDivisions[0].key;
          });
        }
      } catch (error) {
        console.error("Failed to load divisions:", error);
        setDivisions([]);
      } finally {
        setDivisionsLoading(false);
      }
    }

    loadDivisions();
  }, []);

  // Load fixtures when the selected division changes
  useEffect(() => {
    if (!selectedDivision) {
      return;
    }

    async function loadFixtures() {
      setFixturesLoading(true);

      try {
        const data = await getFixtures(selectedDivision);

        console.log("Fixtures API:", data);

        setFixtures(data);

        if (data.length > 0) {
          setSelectedWeek(data[0].week);
        } else {
          setSelectedWeek(1);
        }
      } catch (error) {
        console.error("Failed to load fixtures:", error);
        setFixtures([]);
      } finally {
        setFixturesLoading(false);
      }
    }

    loadFixtures();
  }, [selectedDivision]);

  // Get available weeks from the loaded fixtures
  const weeks = [...new Set(fixtures.map((fixture) => fixture.week))].sort(
    (a, b) => a - b,
  );

  // Filter fixtures for the selected week
  const filteredFixtures = fixtures.filter(
    (fixture) => fixture.week === selectedWeek,
  );

  return (
    <main className="fixtures-page">
      <FixturesHero />

      <section className="fixtures-content">
        <div className="fixtures-container">
          {divisionsLoading ? (
            <p>Loading divisions...</p>
          ) : divisions.length === 0 ? (
            <p>No divisions are currently active.</p>
          ) : (
            <>
              <FixturesStats fixtures={filteredFixtures} />

              <DivisionSelector
                divisions={divisions}
                selectedDivision={selectedDivision}
                onDivisionChange={setSelectedDivision}
              />

              {fixturesLoading ? (
                <p>Loading fixtures...</p>
              ) : (
                <>
                  <WeekSelector
                    weeks={weeks}
                    selectedWeek={selectedWeek}
                    onWeekChange={setSelectedWeek}
                  />

                  <FixturesList fixtures={filteredFixtures} />
                </>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
