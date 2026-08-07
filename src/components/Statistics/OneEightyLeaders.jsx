import { useEffect, useState } from "react";
import StatCard from "./StatCard";
import { getStatistics } from "../../Services/StatisticsService";

function getDivisionClass(division) {
  if (division === "Premier" || division === "Premier League") {
    return "division-premier";
  }

  return `division-${division.replace("Division ", "")}`;
}

function OneEightyLeaders() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLeaders() {
      const data = await getStatistics("180s");

      setLeaders(data);
      setLoading(false);
    }

    loadLeaders();
  }, []);

  return (
    <StatCard
      title="180 Leaders"
      icon="🎯"
      subtitle="Top players with the most 180s this season"
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
              <th>180's</th>
            </tr>
          </thead>

          <tbody>
            {leaders.map((player) => {
              const divisionClass = getDivisionClass(player.division);

              console.log({
                player: player.player,
                division: player.division,
                className: divisionClass,
              });

              return (
                <tr key={`${player.player}-${player.position}`}>
                  <td>{player.position}</td>

                  <td>{player.player}</td>

                  <td>
                    <span className={`division-pill ${divisionClass}`}>
                      {player.division}
                    </span>
                  </td>

                  <td className="stat-value">{player.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </StatCard>
  );
}

export default OneEightyLeaders;
