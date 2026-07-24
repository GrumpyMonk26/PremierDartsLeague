import "./Dashboard.css";

import PlayerSearch from "../components/Dashboard/PlayerSearch/PlayerSearch";
import PlayerCard from "../components/Dashboard/PlayerCard/PlayerCard";
import QuickStats from "../components/Dashboard/QuickStats/QuickStats";
import LastMatch from "../components/Dashboard/LastMatch/LastMatch";
import LeaguePosition from "../components/Dashboard/LeaguePosition/LeaguePosition";

function Dashboard() {
  return (
    <main className="dashboard">
      {/* Hero */}
      <section className="dashboard-hero">
        <div className="dashboard-hero-content">
          <span className="dashboard-tag">🎯 MY OCHE</span>

          <h1>Your Personal Player Hub</h1>

          <p>
            Search for your player profile to view your latest league
            statistics, results and standings. Soon you'll be able to save your
            favourite player so your dashboard loads automatically every time
            you visit.
          </p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="dashboard-content">
        <PlayerSearch />

        <div className="dashboard-layout">
          <div className="left-column">
            <PlayerCard />
            <QuickStats />
          </div>

          <div className="right-column">
            <LeaguePosition />
            <LastMatch />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
