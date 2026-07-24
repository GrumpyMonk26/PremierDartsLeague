import "./QuickStats.css";

function QuickStats() {
  const stats = [
    {
      title: "Matches",
      value: 18,
      icon: "🎯",
    },

    {
      title: "Win %",
      value: "83%",
      icon: "🏆",
    },

    {
      title: "180s",
      value: 27,
      icon: "💥",
    },

    {
      title: "Ton+ Finishes",
      value: 142,
      icon: "🔥",
    },

    {
      title: "Highest Checkout",
      value: 170,
      icon: "🎯",
    },

    {
      title: "League Points",
      value: 31,
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
