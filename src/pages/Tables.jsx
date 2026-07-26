import { useEffect, useState } from "react";

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
  const [activeDivision, setActiveDivision] = useState(divisions[0]);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTable() {
      setLoading(true);

      try {
        const response = await fetch(
          `${API_URL}?action=table&division=${divisionMap[activeDivision]}`,
        );

        const data = await response.json();
        setPlayers(data);
      } catch (err) {
        console.error(err);
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
