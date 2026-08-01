import "./QuickStats.css";

function QuickStats({ player }) {
  if (!player || !player.stats) {
    return null;
  }

  const winPercentage =
    player.stats.matches > 0
      ? `${Math.round((player.stats.wins / player.stats.matches) * 100)}%`
      : "0%";

  const stats = [
    {
      title: "Matches",
      value: player.stats.matches,
      icon: "🎯",
    },
    {
      title: "Win %",
      value: winPercentage,
      icon: "🏆",
    },
    {
      title: "180s",
      value: player.stats.oneEighties,
      icon: "💥",
    },
    {
      title: "Season Average",
      value: player.player.average,
      icon: "📊",
    },
    {
      title: "Highest Checkout",
      value: player.stats.highestCheckout,
      icon: "🎯",
    },
    {
      title: "League Points",
      value: player.stats.points,
      icon: "📈",
    },
  ];

  return (
    <section className="quick-stats">
      <div className="section-header">
        <h2>Quick Stats</h2>

        <p>Your current season at a glance.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <span className="stat-icon">{stat.icon}</span>

            <h3>{stat.value}</h3>

            <p>{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuickStats;
