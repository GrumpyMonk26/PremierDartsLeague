import { useEffect, useState } from "react";
import StatCard from "./StatCard";
import { getStatistics } from "../../Services/StatisticsService";

function getDivisionClass(division) {
  if (division === "Premier") {
    return "division-premier";
  }

  return `division-${division.replace("Division ", "")}`;
}

function BestLeg() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLeaders() {
      const data = await getStatistics("bestleg");

      setLeaders(data);
      setLoading(false);
    }

    loadLeaders();
  }, []);

  return (
    <StatCard
      title="Best Leg"
      icon="⚡"
      subtitle="Fastest legs completed this season"
    >
      {loading ? (
        <div className="stats-loading">Loading...</div>
      ) : (
        <table className="stats-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Player</th>
              <th>Division</th>
              <th>Darts</th>
            </tr>
          </thead>

          <tbody>
            {leaders.map((player) => (
              <tr key={`${player.player}-${player.position}`}>
                <td>{player.position}</td>

                <td>{player.player}</td>

                <td>
                  <span
                    className={`division-pill ${getDivisionClass(player.division)}`}
                  >
                    {player.division}
                  </span>
                </td>

                <td className="stat-value">{player.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </StatCard>
  );
}

export default BestLeg;
