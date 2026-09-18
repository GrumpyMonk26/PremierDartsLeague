import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import DivisionPicker from "../components/LeagueTables/DivisionPicker";
import StandingsTable from "../components/LeagueTables/StandingsTable";

import "./Tables.css";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxslvCGJ8xamcP1F9I6HqS1aKLhxfrugpuEYE03SeLzmZz-xaB7OQJwIXBpZTNVe2Q5sg/exec";

function Tables() {
  const [searchParams] = useSearchParams();

  const requestedDivision = searchParams.get("division");

  const [activeDivisionConfigs, setActiveDivisionConfigs] = useState([]);
  const [activeDivision, setActiveDivision] = useState(null);
  const [players, setPlayers] = useState([]);

  const [divisionsLoading, setDivisionsLoading] = useState(true);
  const [tableLoading, setTableLoading] = useState(false);

  // Load active divisions from Google Apps Script
  useEffect(() => {
    async function loadActiveDivisions() {
      try {
        const response = await fetch(`${API_URL}?action=activedivisions`);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (!data.success || !Array.isArray(data.divisions)) {
          throw new Error("Invalid active divisions response");
        }

        setActiveDivisionConfigs(data.divisions);
      } catch (error) {
        console.error("Failed to load active divisions:", error);
        setActiveDivisionConfigs([]);
      } finally {
        setDivisionsLoading(false);
      }
    }

    loadActiveDivisions();
  }, []);

  // Select the requested division or default to the first active division
  useEffect(() => {
    if (activeDivisionConfigs.length === 0) {
      setActiveDivision(null);
      return;
    }

    const activeDivisionNames = activeDivisionConfigs.map(
      (division) => division.divisionName,
    );

    const requestedIsActive = activeDivisionNames.includes(requestedDivision);

    setActiveDivision((currentDivision) => {
      if (requestedIsActive) {
        return requestedDivision;
      }

      if (currentDivision && activeDivisionNames.includes(currentDivision)) {
        return currentDivision;
      }

      return activeDivisionNames[0];
    });
  }, [activeDivisionConfigs, requestedDivision]);

  // Load table data for the selected division
  useEffect(() => {
    if (!activeDivision) {
      return;
    }

    const selectedDivision = activeDivisionConfigs.find(
      (division) => division.divisionName === activeDivision,
    );

    if (!selectedDivision) {
      return;
    }

    async function loadTable() {
      setTableLoading(true);

      try {
        const response = await fetch(
          `${API_URL}?action=table&division=${selectedDivision.key}`,
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        setPlayers(data);
      } catch (error) {
        console.error("Failed to load table:", error);
        setPlayers([]);
      } finally {
        setTableLoading(false);
      }
    }

    loadTable();
  }, [activeDivision, activeDivisionConfigs]);

  const activeDivisionNames = activeDivisionConfigs.map(
    (division) => division.divisionName,
  );

  return (
    <section className="league-standings">
      <div className="section-header">
        <span className="section-tag">LEAGUE TABLES</span>

        <h2>Division Standings</h2>

        <p>Current standings for all divisions.</p>
      </div>

      {divisionsLoading ? (
        <p>Loading divisions...</p>
      ) : activeDivisionNames.length === 0 ? (
        <p>No divisions are currently active.</p>
      ) : (
        <>
          <DivisionPicker
            divisions={activeDivisionNames}
            activeDivision={activeDivision}
            onSelect={setActiveDivision}
          />

          {tableLoading ? (
            <p>Loading table...</p>
          ) : (
            <StandingsTable division={activeDivision} players={players} />
          )}
        </>
      )}
    </section>
  );
}

export default Tables;
