import "./StandingsTable.css";

function StandingsTable({ division, players }) {
  const promotionCount = 2;
  const relegationCount = 2;

  return (
    <div className="standings-table">
      <div className="standings-table__header">
        <h3>{division}</h3>
        <span>{players.length} Players</span>
      </div>

      <div className="standings-table__scroll">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th className="align-left">Player</th>
              <th>P</th>
              <th>W</th>
              <th>L</th>
              <th>LF</th>
              <th>LA</th>
              <th>LD</th>
              <th>Pts</th>
            </tr>
          </thead>

          <tbody>
            {players.map((player) => {
              const isPromotion = player.rank <= promotionCount;
              const isRelegation =
                player.rank > players.length - relegationCount;

              return (
                <tr
                  key={player.name}
                  className={
                    isPromotion ? "promotion" : isRelegation ? "relegation" : ""
                  }
                >
                  <td>{player.rank}</td>
                  <td className="align-left player-name">{player.name}</td>
                  <td>{player.played}</td>
                  <td>{player.won}</td>
                  <td>{player.lost}</td>
                  <td>{player.legsFor}</td>
                  <td>{player.legsAgainst}</td>
                  <td
                    className={
                      player.legDiff > 0
                        ? "positive"
                        : player.legDiff < 0
                          ? "negative"
                          : ""
                    }
                  >
                    {player.legDiff > 0 ? `+${player.legDiff}` : player.legDiff}
                  </td>
                  <td className="points">{player.points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="standings-table__legend">
        <span>
          <i className="dot promotion"></i> Promotion
        </span>
        <span>
          <i className="dot relegation"></i> Relegation
        </span>
      </div>
    </div>
  );
}

export default StandingsTable;
