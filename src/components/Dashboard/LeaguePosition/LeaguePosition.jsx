import "./LeaguePosition.css";

function LeaguePosition({ player }) {
  if (!player || !player.league) {
    return null;
  }

  const table = player.league.table || [];

  return (
    <section className="league-position">
      <div className="league-header">
        <div>
          <h2>{player.player.division}</h2>

          <p>Your current league position</p>
        </div>

        <div className="position-card">
          <span>Position</span>

          <h1>#{player.league.position}</h1>
        </div>
      </div>

      {/* Scrollable table container */}
      <div className="league-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Pos</th>
              <th>Player</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>LF</th>
              <th>LA</th>
              <th>LD</th>
              <th>Pts</th>
            </tr>
          </thead>

          <tbody>
            {table.map((row) => (
              <tr
                key={row.position}
                className={
                  row.isCurrentPlayer
                    ? row.position <= 2
                      ? "current-player promotion"
                      : row.position >= 7
                        ? "current-player relegation"
                        : "current-player midtable"
                    : ""
                }
              >
                <td>{row.position}</td>

                <td>{row.name}</td>

                <td>{row.played}</td>

                <td>{row.wins}</td>

                <td>{row.draws}</td>

                <td>{row.losses}</td>

                <td>{row.legsWon}</td>

                <td>{row.legsLost}</td>

                <td>{row.legDifference}</td>

                <td>{row.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="league-footer">
        <span className="promotion">▲ Promotion Places</span>

        <span className="relegation">▼ Relegation Places</span>
      </div>
    </section>
  );
}

export default LeaguePosition;
