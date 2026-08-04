import "./Statistics.css";

function StatCard({ title, subtitle, icon, children }) {
  return (
    <article className="stat-card">
      <div className="stat-card-header">
        <div className="stat-card-icon">{icon}</div>

        <div>
          <h2>{title}</h2>

          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>

      <div className="stat-card-body">{children}</div>
    </article>
  );
}

export default StatCard;
