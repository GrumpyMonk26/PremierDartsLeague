import { useEffect, useState } from "react";
import StatCard from "./StatCard";
import { getStatistics } from "../../Services/StatisticsService";

function getDivisionClass(division) {
  if (division === "Premier") {
    return "division-premier";
  }

  return `division-${division.replace("Division ", "")}`;
}

function SeasonAverage() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLeaders() {
      const data = await getStatistics("average");

      setLeaders(data);
      setLoading(false);
    }

    loadLeaders();
  }, []);

  return (
    <StatCard
      title="Best Averages"
      icon="📈"
      subtitle="Top 10 season averages across all divisions"
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
              <th>Average</th>
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

                <td className="stat-value">{Number(player.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </StatCard>
  );
}

export default SeasonAverage;
