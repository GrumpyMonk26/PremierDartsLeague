import "./LeaguePosition.css";

function LeaguePosition() {
  const standings = [
    { pos: 1, player: "Luke Green", played: 18, points: 36 },
    { pos: 2, player: "Jason Evans", played: 18, points: 31 },
    { pos: 3, player: "badger the Bully", played: 18, points: 29 },
    { pos: 4, player: "Les Pratt", played: 18, points: 27 },
    { pos: 5, player: "Jake Smith", played: 18, points: 22 },
    { pos: 6, player: "Dan Smith", played: 18, points: 20 },
    { pos: 7, player: "James Brown", played: 18, points: 17 },
    { pos: 8, player: "Mark Evans", played: 18, points: 14 },
  ];

  return (
    <section className="league-position">
      <div className="league-header">
        <div>
          <h2>Division One</h2>

          <p>Your current league position</p>
        </div>

        <div className="position-card">
          <span>Position</span>

          <h1>2nd</h1>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Pos</th>

            <th>Player</th>

            <th>P</th>

            <th>Pts</th>
          </tr>
        </thead>

        <tbody>
          {standings.map((player) => (
            <tr
              key={player.pos}
              className={
                player.player === "Jason Evans" ? "current-player" : ""
              }
            >
              <td>{player.pos}</td>

              <td>{player.player}</td>

              <td>{player.played}</td>

              <td>{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="league-footer">
        <span className="promotion">▲ Promotion Places</span>

        <span className="relegation">▼ Relegation Places</span>
      </div>
    </section>
  );
}

export default LeaguePosition;
