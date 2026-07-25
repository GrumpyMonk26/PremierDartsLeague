import { useState } from "react";

import DivisionPicker from "../components/LeagueTables/DivisionPicker";
import StandingsTable from "../components/LeagueTables/StandingsTable";
import { standingsData, divisions } from "../data/standingsData";

import "./Tables.css";

function Tables() {
  const [activeDivision, setActiveDivision] = useState(divisions[0]);

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

      <StandingsTable
        division={activeDivision}
        players={standingsData[activeDivision]}
      />
    </section>
  );
}

export default Tables;
