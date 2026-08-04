import BestLeg from "./BestLeg";
import HighestCheckout from "./HighestCheckout";
import OneEightyLeaders from "./OneEightyLeaders";
import SeasonAverage from "./SeasonAverage";

import "./Statistics.css";

function StatisticsGrid() {
  return (
    <section className="statistics-grid-section">
      <div className="statistics-grid">
        <OneEightyLeaders />
        <HighestCheckout />
        <BestLeg />
        <SeasonAverage />
      </div>
    </section>
  );
}

export default StatisticsGrid;
