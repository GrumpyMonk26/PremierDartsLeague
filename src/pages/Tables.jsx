import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import DivisionPicker from "../components/LeagueTables/DivisionPicker";
import StandingsTable from "../components/LeagueTables/StandingsTable";
import { divisions } from "../data/standingsData";

import "./Tables.css";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxslvCGJ8xamcP1F9I6HqS1aKLhxfrugpuEYE03SeLzmZz-xaB7OQJwIXBpZTNVe2Q5sg/exec";

const divisionMap = {
  "Premier League": "premier",
  "Division 1": "div1",
  "Division 2": "div2",
  "Division 3": "div3",
  "Division 4": "div4",
  "Division 5": "div5",
  "Division 6": "div6",
  "Division 7": "div7",
  "Division 8": "div8",
  "Division 9": "div9",
};

function Tables() {
  const [searchParams] = useSearchParams();

  const requestedDivision = searchParams.get("division");

  const initialDivision = divisions.includes(requestedDivision)
    ? requestedDivision
    : divisions[0];

  const [activeDivision, setActiveDivision] = useState(initialDivision);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Update selected division when URL changes
  useEffect(() => {
    if (requestedDivision && divisions.includes(requestedDivision)) {
      setActiveDivision(requestedDivision);
    }
  }, [requestedDivision]);

  // Load table data
  useEffect(() => {
    async function loadTable() {
      setLoading(true);

      try {
        const response = await fetch(
          `${API_URL}?action=table&division=${divisionMap[activeDivision]}`,
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        setPlayers(data);
      } catch (err) {
        console.error(err);
        setPlayers([]);
      } finally {
        setLoading(false);
      }
    }

    loadTable();
  }, [activeDivision]);

  return (
    <section className="league-standings">
      <div className="section-header">
        <span className="section-tag">LEAGUE TABLES</span>

        <h2>Division Standings</h2>

        <p>Current standings for all divisions.</p>
      </div>

      <DivisionPicker
        divisions={divisions}
        activeDivision={activeDivision}
        onSelect={setActiveDivision}
      />

      {loading ? (
        <p>Loading table...</p>
      ) : (
        <StandingsTable division={activeDivision} players={players} />
      )}
    </section>
  );
}

export default Tables;
